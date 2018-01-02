var gtmId = 'Test'
var dataLayerName = 'dataLayer'
var inspectingDataLayer = true

function el(e){
	return document.getElementById(e)
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		//return true
})

function get_latest_settings(){
	return {
		dataLayerName: el('dataLayer-name-text-field').value,
		gtmId:el('gtm-container').value.trim(),
		classicMode:el('cbx_classic_mode').checked,
		waitForDataLayer: el('cbx-wait-for-dataLayer').checked,
		hideTiming:el('cbx_hide_timing').checked,
		ignoreRedirects: el('cbx_ignore_redirects').checked,
		ignoreEvents: (el('cbx-ignore-specific-events').checked && (el('txt-ignore-specific-events-list').value.trim() != "")),
		ignoreEventsRegex:el('txt-ignore-specific-events-list').value.trim(),
		ignoreProperties: (el('cbx-ignore-properties').checked && (el('txt-ignore-property').value.trim() != "")),
		ignorePropertiesRegex: el('txt-ignore-property').value.trim(),
		hostName: el('hostName').value,
		hostNameRegEx: el('regex').checked,
		dataLayerPush: el('txt-dataLayer-push').value,
		inspectingDataLayer: el('inspectDataLayer').checked,
		injectCode: (el('cbx-injectCode').checked && (el('txt-code-push').value.trim() != "")),
		codeToPush: el('txt-code-push').value.trim(),
		injectingDataLayer: el('injectDataLayer').checked,
		injectingGTM: (el('injectGTM').checked && (el('gtm-container').value.trim() != ""))
		}
}

function sanitized_settings(){
	let s = get_latest_settings()
	return JSON.stringify({
		classicMode: s.classicMode,
		waitForDataLayer: s.waitForDataLayer,
		hideTiming: s.hideTiming,
		ignoreRedirects: s.ignoreRedirects,
		ignoreEvents: s.ignoreEvents,
		ignoreProperties: s.ignoreProperties,
		inspectingDataLayer: s.inspectingDataLayer,
		injectCode: s.injectCode,
		injectingDataLayer: s.injectingDataLayer,
		injectingGTM: s.injectingGTM
	})

}

function saveControlData(e){
	chrome.storage.local.set({
		gaControlData:get_latest_settings()
	})

	chrome.storage.local.set({injectingGTM: el('injectGTM').checked})
	reloadTab()
}

function reloadTab(){
	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.update(tab.id, {url: tab.url})
	})
	chrome.runtime.sendMessage({ga_inspector_action: "updateBadge"})
	dataLayer.push({event:"setup", eventCategory:"modify-setup", eventAction:"update-button", eventLabel: sanitized_settings()})
}

function setInitialFocus(){
	var el = el('dataLayer-name-text-field')
	el.select()
	el.focus()
}

function updateUI(e){
	let vis = true
	switch (e.target.id) {
		case "inspectDataLayer":
			toggle("advanced-options", e.target.checked)
			dataLayer.push({event:"setup", eventCategory:"modify-setup", eventAction:e.target.id, eventLabel: e.target.checked})
			vis = false
			break;
		case "injectGTM":
			toggle("inject-gtm", e.target.checked)
			dataLayer.push({event:"setup", eventCategory:"modify-setup", eventAction:e.target.id, eventLabel: e.target.checked})
			break;
		case "injectDataLayer":
			toggle("div-dataLayer-push", e.target.checked)
			dataLayer.push({event:"setup", eventCategory:"modify-setup", eventAction:e.target.id, eventLabel: e.target.checked})
			break;
		case "cbx-ignore-specific-events":
			toggle("ignore-specific-events", e.target.checked)
			dataLayer.push({event:"setup", eventCategory:"modify-setup", eventAction:e.target.id, eventLabel: e.target.checked})
			break;
		case "cbx-ignore-properties":
			toggle("ignore-specific-properties", e.target.checked)
			dataLayer.push({event:"setup", eventCategory:"modify-setup", eventAction:e.target.id, eventLabel: e.target.checked})
 			break;
		case "ap-advanced-toggle":
		case "advanced-options-control":
		case "ap-advanced-toggle-label":
			vis = el('advanced-options-control').classList.toggle("show-advanced")
			dataLayer.push({event:"setup", eventCategory:"modify-setup", eventAction:e.target.id, eventLabel: undefined})
			break;
		case "dataLayer-name-text-field":
			el("dataLayer-push-name").innerHTML = e.target.value
			dataLayer.push({event:"setup", eventCategory:"modify-setup", eventAction:e.target.id, eventLabel: undefined})
			break;
		case "cbx-injectCode":
			toggle("code-push", e.target.checked)
			dataLayer.push({event:"setup", eventCategory:"modify-setup", eventAction:e.target.id, eventLabel: e.target.checked})
			break;
		case "cbx_classic_mode":
			toggle("insert-controls", !e.target.checked)
			toggle("hide-output-controls", !e.target.checked)
			dataLayer.push({event:"setup", eventCategory:"modify-setup", eventAction:e.target.id, eventLabel: e.target.checked})
			break;
		case "cbx_ignore_redirects":
		case "cbx_hide_timing":
		case "cbx-wait-for-dataLayer":
			dataLayer.push({event:"setup", eventCategory:"modify-setup", eventAction:e.target.id, eventLabel: e.target.checked})
			break;
		default:

	}
	showAdvanced(vis)
}

function usingAdvanced(){
	let a = settings = get_latest_settings()
	return (a.ignoreRedirects ||
					a.injectingGTM ||
					a.injectingDataLayer ||
					a.waitForDataLayer ||
					a.hideTiming||
					a.injectCode ||
					a.classicMode ||
					a.ignoreProperties ||
					a.ignoreEvents ||
					a.ignoreRedirects ||
					a.waitForDataLayer)
}

function showAdvanced(vis){
	let a = settings = get_latest_settings()
	el('advanced-options-badge').innerHTML  = (usingAdvanced() ? "&nbsp;- ON" : "&nbsp;- OFF")
	if (usingAdvanced()){
		// Bold On
		el('advanced-options-badge').classList.add("advanced_on")
	} else {
		el('advanced-options-badge').classList.remove("advanced_on")
	}
	let img = "images/expand.png"
	if (vis){
		img = "images/collapse.png"
	}
	el("ap-advanced-toggle").src = img
	toggle('advanced-options', a.inspectingDataLayer)
	toggle('advanced-options-contents', vis)
	toggle("dataLayer-push", vis)
	toggle("classic-mode", vis)
	toggle("insert-controls", (!a.classicMode && vis))
	toggle("hide-output-controls", (!a.classicMode && vis))
	toggle("hide-timing", vis)
	toggle("gtm-container-controls", vis)
	toggle("code-push-controls", vis)
	toggle("ignore-events-controls", vis)
	toggle("ignore-property-controls", vis)
	toggle("ignore-redirects", vis)
}

function toggle(e, b){
	if (b){
		el(e).classList.remove("invisible")
	} else {
		el(e).classList.add("invisible")
	}
}

var settings = null

function init(){
//	chrome.runtime.sendMessage({ga_inspector_action: "updateBadge"})
	el('txt-ignore-specific-events-list').addEventListener(
		'change', function(e){ updateUI(e)}, true
	)

	el('txt-ignore-specific-events-list').addEventListener(
		'keyup', function(e){ updateUI(e)}, true
	)

	el('txt-ignore-property').addEventListener(
		'change', function(e){ updateUI(e)}, true
	)

	el('txt-ignore-property').addEventListener(
		'keyup', function(e){ updateUI(e)}, true
	)

	el('gtm-container').addEventListener(
		'change', function(e){ updateUI(e)}, true
	)

	el('update-button').addEventListener(
		'click', function(e){ saveControlData(e)}, true
	)

	el('injectGTM').addEventListener(
		'change', function(e){ updateUI(e)}, true
	)

	el('injectDataLayer').addEventListener(
		'change', function(e){ updateUI(e)}, true
	)

	el('inspectDataLayer').addEventListener(
		'change', function(e){ updateUI(e)}, true
	)

	el('dataLayer-name-text-field').addEventListener(
		'keyup', function(e){ updateUI(e)}, true
	)

	el('cbx-injectCode').addEventListener(
		'change', function(e){ updateUI(e)}, true
	)

	el('cbx-ignore-specific-events').addEventListener(
		'change', function(e){ updateUI(e)}, true
	)

	el('cbx_ignore_redirects').addEventListener(
		'change', function(e){ updateUI(e)}, true
	)

	el('cbx-ignore-properties').addEventListener(
		'change', function(e){ updateUI(e)}, true
	)

	el('advanced-options-control').addEventListener(
		'click', function(e){ updateUI(e)}, true
	)

	el('cbx_hide_timing').addEventListener(
		'click', function(e){ updateUI(e)}, true
	)

	el('cbx-wait-for-dataLayer').addEventListener(
		'click', function(e){ updateUI(e)}, true
	)


	el('cbx_classic_mode').addEventListener(
		'change', function(e){
			if (e.target.checked && el('cbx_hide_timing').checked){
				el('cbx_hide_timing').checked = false
				el('cbx-ignore-specific-events').checked = false
				el('cbx-ignore-properties').checked = false
			}
			updateUI(e)
		}, true
	)

	chrome.storage.local.get('gaControlData', function(r){
		var a = r.gaControlData || { inspectingDataLayer: true, firstTime: true }
		settings = a
		el('gtm-container').value = a.gtmId || 'XXXXX'
		el('dataLayer-name-text-field').value = dataLayerName = a.dataLayerName || 'dataLayer'
		el("dataLayer-push-name").innerHTML = dataLayerName
		el('txt-dataLayer-push').value = dataLayerPush = a.dataLayerPush || ""

		el('txt-code-push').value = dataLayerPush = a.codeToPush || ""
		el('hostName').value = a.hostName || 'analyticspros.com'
		el('regex').checked = a.hostNameRegEx
		el('cbx_hide_timing').checked = (a.hideTiming)
		el('cbx_ignore_redirects').checked = (a.ignoreRedirects)

		el('cbx-ignore-specific-events').checked = (a.ignoreEvents)
		el('txt-ignore-specific-events-list').value = a.ignoreEventsRegex || ""
		toggle("ignore-specific-events", a.ignoreEvents)

		el('cbx-ignore-properties').checked = (a.ignoreProperties)
		el('txt-ignore-property').value = a.ignorePropertiesRegex || ""
		toggle("ignore-specific-properties", a.ignoreProperties)

		el('cbx-injectCode').checked = a.injectCode
		toggle("code-push", a.injectCode)

		el('injectDataLayer').checked = a.injectingDataLayer
		toggle("div-dataLayer-push", a.injectingDataLayer)

		el('injectGTM').checked = a.injectingGTM
		toggle("inject-gtm", a.injectingGTM)


		el('inspectDataLayer').checked = a.inspectingDataLayer
		toggle("advanced-options", a.inspectingDataLayer)
		// Advanced must have something selected

		el('cbx_classic_mode').checked = a.classicMode
		el('cbx-wait-for-dataLayer').checked = a.waitForDataLayer
		showAdvanced(false);
		el("dataLayer-name-text-field").focus()
		if (a.firstTime){
			chrome.storage.local.set({
				gaControlData:get_latest_settings()
			})
			chrome.runtime.sendMessage({ga_inspector_action: "updateBadge"})
		}
	})
}

init()
