var hasAPIs = chrome.webRequest
var intercept = false


var GA = '*://www.google-analytics.com/*'
var GTM = '*://www.googletagmanager.com/*'
var CD = '*://stats.g.doubleclick.net/*'

chrome.storage.local.getBytesInUse('gaControlData', function(r){
  if (r === 0){
    setBadge({'gaControlData':{inspectingDataLayer: true}})
    flashBadge(true)
  } else {
    chrome.storage.local.get('gaControlData', setBadge)
  }
})


/**
 * Responds to clicks on the extension's icon.
*/
chrome.browserAction.onClicked.addListener(
  function(tab) {
    chrome.tabs.update(tab.id, {url: tab.url, selected: tab.selected}, null);
      hasAPIs && chrome.webRequest.handlerBehaviorChanged();
  }
);

var requests = [];

function saveRequest(requestDetails) {
	requests.push(requestDetails)
}

function setup_intercept(){
  chrome.webRequest.onBeforeRequest.removeListener(saveRequest)
  chrome.webRequest.onCompleted.removeListener(processMessage)
  if (intercept && hasAPIs ) {
    intercepting = true
    chrome.webRequest.onBeforeRequest.addListener(
      saveRequest,
      {urls: [GA, GTM]},
    	["requestBody"]
    );
    chrome.webRequest.onCompleted.addListener(processMessage, {urls: [GA, GTM]})
    chrome.webRequest.onBeforeRedirect.addListener(processMessage, {urls: [GA, GTM]})
  }
}
var processedMessages = []

function processMessage(details) {
  if (processedMessages.find(d =>{
    return (d.requestId === details.requestId && d.statusCode === details.statusCode)
  })){
    return // Only handle the message once
  }
  processedMessages.push(details)
  function is_of_interest(details){

    return (true)
    /*
      ( details.statusCode === 200 ||
        details.statusCode === 302 ||
        details.statusCode === 307)
    */
  }
  if (is_of_interest(details)){
    /*
    For details.method === "POST"
      Look up details.requestId in the cache of saved messages
      Get the payload from the cache
      translate the payload to an object
      append the key/value pairs to the details
    */
    var msg = null;
    // GET has the information in the URL
    if (details.method === "GET" && details.type === 'image'){
      msg = JSON.stringify(convert_protocol_to_object(details.url));
    // POST has the informatin in the request body
    } else if (details.method === "POST" && details.type === 'ping') {
      var request = requests.find((req) => { return req.requestId === details.requestId});
      if (request && request.requestBody) {
        // The request body is pretty mangled
        var postedString = (String.fromCharCode.apply(null, new Uint8Array(request.requestBody.raw[0].bytes)));
        msg = JSON.stringify(convert_protocol_to_object(postedString));
      }
    } else if (details.method === "GET" && details.url.includes("www.googletagmanager.com")){
      const gtm = JSON.stringify(convert_protocol_to_object(details.url))
      if (details.tabId >= 0){
        chrome.tabs.sendMessage(details.tabId, {gtm: gtm})
      } else {
        console.log("background - GTM", gtm)
      }
      //console.log("background - GTM", gtm)
    }
    // Don't want to keep a bunch of old messages
    if (requests.length > 500) requests = requests.slice(requests.length - 250)
    if (msg && chrome.tabs && details.tabId >= 0) {
      chrome.tabs.sendMessage(details.tabId, {msg: msg, statusCode: details.statusCode})
    }
  }
}

function convert_protocol_to_object(payload){
	var parameters = payload;
	// if the payload is a URL with passed parameters
	if (payload.indexOf("?") >=0) parameters = payload.split('?')[1];
	var items = parameters.split('&');
	var msg = {};
	var basicParams = ['cid','tid','_r','gtm','v','_v','a','dt','ni','_s','dl','ul','de','sd','sr','vp','je','fl','_u','jid','z']
	for (var i = 0; i < items.length; i++){
		var item = items[i].split('=');
		try {
			msg[item[0]] = decodeURIComponent(item[1]);
		}catch(e){
			setTimeout(console.error.bind(console.error, e, item[1]), 1)
		}
	}
	return msg;
}

function flashBadge(which){
  var c = "black"
  var t = "NEW"
  if (which){
    c = "lightgray"
    t = ""
  }
  chrome.storage.local.getBytesInUse('gaControlData', function(r){
    if (r === 0){
      setTimeout(function(){
        chrome.browserAction.setBadgeText({ text: t })
        //chrome.browserAction.setBadgeBackgroundColor({ color: c })
        flashBadge(!which)
      }, 1000)
    } else {
      chrome.storage.local.get('gaControlData', setBadge)
    }
  })
}

function setBadge(settings){
  var ctrl = settings.gaControlData
  intercept = ctrl ? (ctrl.injectingGTM || ctrl.inspectingDataLayer) : false
  if (intercept) setup_intercept()
  var badgeText = ctrl.inspectingDataLayer ? "ON" : "OFF"
  var inspectColor = ctrl.classicMode ? "black" : "green"
	var color = ctrl.inspectingDataLayer ?  inspectColor : "gray"
  var title = 'Analytics Pros dataLayer Inspector+'
//  var path = (ctrl.inspectingDataLayer || ctrl.injectingGTM) ? '../images/icon_on_ap.png' : '../images/icon_off_ap.png'
  badgeText =  (  ctrl.inspectingDataLayer &&
                ( ctrl.ignoreRedirects ||
                  ctrl.injectingGTM ||
                  ctrl.injectingDataLayer ||
                  ctrl.hideTiming ||
                  ctrl.injectCode ||
                  ctrl.ignoreProperties ||
                  ctrl.ignoreEvents ||
                  ctrl.ignoreRedirects)) ? badgeText + "+" : badgeText
  if (ctrl.injectCode){
		badgeText = "CODE"
		color = "red"
		title = 'Analytics Pros GA Tools - Injecting code into page'
	} else if (ctrl.injectingGTM && ctrl.injectingDataLayer && ctrl.inspectingDataLayer){
		badgeText = "GTM+"
		color = "orange"
		title = 'Analytics Pros GA Tools - Injecting GTM & ' + ctrl.dataLayerName
	} else if (ctrl.inspectingDataLayer && ctrl.injectingDataLayer){
		badgeText = "PUSH"
		color = "blue"
		title = 'Analytics Pros GA Tools - Injecting ' + ctrl.dataLayerName
	} else if (ctrl.inspectingDataLayer && ctrl.injectingGTM){
		badgeText = "GTM"
		color = "purple"
		title = 'Analytics Pros GA Tools - Injecting GTM and inspecting ' + ctrl.dataLayerName
	}

  chrome.browserAction.setTitle({ title: title})
	//chrome.browserAction.setIcon({ path: path})
	chrome.browserAction.setBadgeText({ text: badgeText })
	chrome.browserAction.setBadgeBackgroundColor({ color: color})
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.ga_inspector_action === "updateBadge"){
      chrome.storage.local.get('gaControlData', setBadge)
      return true
    } else if (request.injectDataLayer != ""){
      injectDataLayer(request.injectDataLayer)
      return true
    }
  })
