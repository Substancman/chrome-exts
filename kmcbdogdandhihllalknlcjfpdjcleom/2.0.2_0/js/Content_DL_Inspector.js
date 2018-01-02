//console.log("Content_DL_Inspector")
// If not inspecting, then return
chrome.storage.local.getBytesInUse('gaControlData', function(r){
  if (r > 0){
    chrome.storage.local.get('gaControlData', inspect)
  } else {
		inspect({'gaControlData':{inspectingDataLayer: true}})
	}
})



function injectDataLayerPushObserver(dl, gtm, classicMode, waitForDataLayer, hideTiming, ignoreEventsRegex, msg){
	const MAX_GA_POST_PAYLOAD = 8192
	window._ap_dl = window._ap_dl || {}
	window._ap_dl.dataLayerFirstPushTime = window._ap_dl.dataLayerFirstPushTime || Date.now()
	window._ap_dl.injectingGTM = gtm
	if (waitForDataLayer && !window[dl]){
		setTimeout(function(){injectDataLayerPushObserver(dl, gtm, classicMode, waitForDataLayer, hideTiming, ignoreEventsRegex)}, 20)
		return
	}
	var a = window[dl] = window[dl] || []
	if (dl != "dataLayer" && window.dataLayer && !window._ap_dl.warned_about_multiple_dataLayers ){
		window._ap_dl.warned_about_multiple_dataLayers = true
		setTimeout(console.warn.bind(console.warn, ">> Observing window." +dl + " while window.dataLayer is also present. window.dataLayer:", window.dataLayer), 1)
	}
	if (!a.observed){
		if (msg) {
			setTimeout(console.warn.bind(console.warn, msg), 1)
		}
		window._ap_dl = window._ap_dl || {}
		window._ap_dl.dataLayerFirstPushTime = window._ap_dl.dataLayerFirstPushTime || Date.now()
		window._ap_dl.dataLayerLastPushTime = window._ap_dl.dataLayerLastPushTime || window._ap_dl.dataLayerFirstPushTime

		function currentPushTime(t){
			var lp = window._ap_dl.dataLayerLastPushTime
			var fp = window._ap_dl.dataLayerFirstPushTime
			var delta = t - lp
			window._ap_dl.dataLayerLastPushTime = t
			return {now:(t - fp)/1000, delta: delta/1000}
		}

		function payloadSize(imps){ // MAX_GA_POST_PAYLOAD
			let intPayloadSize = 0
			imps.map(imp => {
				intPayloadSize += JSON.stringify(imp).length;
			})
			return intPayloadSize
		}

		function b(){
			if (window._ap_dl.qa) return
			function e(e, t, x) {
				x = x || 11
				var n = 'title: "Test"; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size: ' + x + 'px;' + (e ? "font-weight: bold;" : "") + "color: " + t + ";"
				return n
			}
			function evaluateObjectFormat(obj, type){
				function une(val){ //  undefined null empty
					return (val === undefined || val === null || val === "")
				}
				let results = []
				let recognized_ecomm_object = false
				Object.defineProperties(results, {
					"status" : { get: function(){
						let status = "OK"
						this.map(s => {
							if (status === "OK" && s.status === "ISSUE"){
								status = s.status
								this._evaluation = s.evaluation
							}
							if (s.status === "ERR"){
								status = s.status
								this._evaluation = s.evaluation
							}
						})
						return status
					}},
					"evaluation" : { get: function(){
						this._evaluation = "No issues found"
						let state = this.status
						return this._evaluation
					}},
				})
				if (Object.keys(obj).length === 0 && obj.constructor === Object) {
					results.push({status: "ISSUE", evaluation: "The push is an empty object"})
				} else if (Array.isArray(obj)){
					results.push({status: "ISSUE", evaluation: "The object pushed is an Array. This is non-standard"})
				} else if (obj.event === null || obj.event === ""){
					results.push({status: "ISSUE", evaluation: "Event should not be null or empty"})
				} else if (obj.event === "gtm.js") {
					window._ap_dl.gtm_js_count = window._ap_dl.gtm_js_count || 0
					window._ap_dl.gtm_js_count++
					if (window._ap_dl.gtm_js_count > 1){
						const expected = window._ap_dl.injectingGTM ? " \n>> This warning is expected when injecting GTM." : ""
						results.push({status: "ISSUE", evaluation: "Mutiple GTM containers have been loaded in separate snippets. \n>> This may trigger extra hits, such as pageviews." + expected})
					}
				} else if (obj.ecommerce){
					if (obj.ecommerce.impressions !== undefined){ // This will allow for null impressions
						recognized_ecomm_object = true
						if (!Array.isArray(obj.ecommerce.impressions)){
							results.push({status: "ERR", evaluation: "ecommerce.impressions is not an Array"})
						} else if (obj.ecommerce.impressions.length === 0) {
							results.push({status: "ISSUE", evaluation: "ecommerce.impressions is empty"})
						} else {
							obj.ecommerce.impressions.map(imp =>{
								if (une(imp.name) && une(imp.id)){
									results.push({status: "ERR", evaluation: "ecommerce.impressions must have a name or ID"})
								}
							})
							if (payloadSize(obj.ecommerce.impressions) >= (MAX_GA_POST_PAYLOAD)){
								results.push({status: "ERR", evaluation: "ecommerce.impressions exceed maximum size of POST and may not be sent\nconsider breaking up the impressions into multiple pushes or only sending the ID and using Data Import"})
							} else if (payloadSize(obj.ecommerce.impressions) >= (.8 * MAX_GA_POST_PAYLOAD)){
								results.push({status: "ISSUE", evaluation: "ecommerce.impressions may exceed maximum size of POST and may not be sent\nconsider breaking up the impressions into multiple pushes or only sending the ID and using Data Import"})
							}
						}
					}
					if (obj.ecommerce.click){
						recognized_ecomm_object = true
						if (!obj.ecommerce.click.products){
							results.push({status: "ERR", evaluation: "ecommerce.click.products array is missing"})
						} else {
							if (!Array.isArray(obj.ecommerce.click.products)){
								results.push({status: "ERR", evaluation: "ecommerce.click.products is not an Array"})
							} else if (obj.ecommerce.click.products.length === 0) {
								results.push({status: "ERR", evaluation: "ecommerce.click.products is empty"})
							} else {
								obj.ecommerce.click.products.map(prod =>{
									if (une(prod.name) && une(prod.id)){
										results.push({status: "ERR", evaluation: "ecommerce.click.products must have a name or ID"})
									}
								})
							}
						}
					}
					if (obj.ecommerce.detail){
						recognized_ecomm_object = true
						if (!obj.ecommerce.detail.products){
							results.push({status: "ERR", evaluation: "ecommerce.detail.products array is missing"})
						} else {
							if (!Array.isArray(obj.ecommerce.detail.products)){
								results.push({status: "ERR", evaluation: "ecommerce.detail.products is not an Array"})
							} else if (obj.ecommerce.detail.products.length === 0) {
								results.push({status: "ERR", evaluation: "ecommerce.detail.products is empty"})
							} else {
								obj.ecommerce.detail.products.map(prod =>{
									if (une(prod.name) && une(prod.id)){
										results.push({status: "ERR", evaluation: "ecommerce.detail.products must have a name or ID"})
									}
								})
							}
              if (obj.ecommerce.detail.actionField && obj.ecommerce.detail.actionField.list){
                results.push({status: "ISSUE", evaluation: "ecommerce.detail.actionField.list is set. Attibution for add to cart will be given to this list and you will not see a complete chain of events from previous lists, in the Product List Performance report."})
              }
						}
					}
					if (obj.ecommerce.add){
						recognized_ecomm_object = true
						if (!obj.ecommerce.add.products){
							results.push({status: "ERR", evaluation: "ecommerce.add.products array is missing"})
						} else {
							if (!Array.isArray(obj.ecommerce.add.products)){
								results.push({status: "ERR", evaluation: "ecommerce.add.products is not an Array"})
							} else if (obj.ecommerce.add.products.length === 0) {
								results.push({status: "ERR", evaluation: "ecommerce.add.products is empty"})
							} else {
								obj.ecommerce.add.products.map(prod =>{
									if (une(prod.name) && une(prod.id)){
										results.push({status: "ERR", evaluation: "ecommerce.add.products must have a name or ID"})
									}
								})
							}
						}
					}
					if (obj.ecommerce.remove){
						recognized_ecomm_object = true
						if (!obj.ecommerce.remove.products){
							results.push({status: "ERR", evaluation: "ecommerce.remove.products array is missing"})
						} else {
							if (!Array.isArray(obj.ecommerce.remove.products)){
								results.push({status: "ERR", evaluation: "ecommerce.remove.products is not an Array"})
							} else if (obj.ecommerce.remove.products.length === 0) {
								results.push({status: "ERR", evaluation: "ecommerce.remove.products is empty"})
							} else {
								obj.ecommerce.remove.products.map(prod =>{
									if (une(prod.name) && une(prod.id)){
										results.push({status: "ERR", evaluation: "ecommerce.remove.products must have a name or ID"})
									}
								})
							}
						}
					}
					if (obj.ecommerce.promoView){
						recognized_ecomm_object = true
						if (!obj.ecommerce.promoView.promotions){
							results.push({status: "ERR", evaluation: "ecommerce.promoView.promotions array is missing"})
						} else {
							if (!Array.isArray(obj.ecommerce.promoView.promotions)){
								results.push({status: "ERR", evaluation: "ecommerce.promoView.promotions is not an Array"})
							} else if (obj.ecommerce.promoView.promotions.length === 0) {
								results.push({status: "ISSUE", evaluation: "ecommerce.promoView.promotions is empty"})
							} else {
								obj.ecommerce.promoView.promotions.map(promo =>{
									if (une(promo.name) && une(promo.id)){
										results.push({status: "ERR", evaluation: "ecommerce.promoView.promotions must have a name or ID"})
									}
								})
								if (payloadSize(obj.ecommerce.promoView.promotions) >= MAX_GA_POST_PAYLOAD){
									results.push({status: "ERR", evaluation: "ecommerce.promoView.promotions exceed maximum size of POST and may not be sent\nconsider breaking up the impressions into multiple pushes or only sending the ID and using Data Import"})
								} else if (payloadSize(obj.ecommerce.promoView.promotions) >= (.8 * MAX_GA_POST_PAYLOAD)){
									results.push({status: "ISSUE", evaluation: "ecommerce.promoView.promotions may exceed maximum size of POST and may not be sent\nconsider breaking up the impressions into multiple pushes or only sending the ID and using Data Import"})
								}
							}
						}
					}
					if (obj.ecommerce.promoClick){
						recognized_ecomm_object = true
						if (!obj.ecommerce.promoClick.promotions){
							results.push({status: "ERR", evaluation: "ecommerce.promoClick.promotions array is missing"})
						} else {
							if (!Array.isArray(obj.ecommerce.promoClick.promotions)){
								results.push({status: "ERR", evaluation: "ecommerce.promoClick.promotions is not an Array"})
							} else if (obj.ecommerce.promoClick.promotions.length === 0) {
								results.push({status: "ERR", evaluation: "ecommerce.promoClick.promotions is empty"})
							} else {
								obj.ecommerce.promoClick.promotions.map(promo =>{
									if (une(promo.name) && une(promo.id)){
										results.push({status: "ERR", evaluation: "ecommerce.promoClick.promotions must have a name or ID"})
									}
								})
							}
						}
					}
					if (obj.ecommerce.checkout){
						recognized_ecomm_object = true
						if (!obj.ecommerce.checkout.actionField){
							results.push({status: "ISSUE", evaluation: "ecommerce.checkout.actionField is missing"})
						} else {
							if (une(obj.ecommerce.checkout.actionField.step)){
								results.push({status: "ISSUE", evaluation: "ecommerce.checkout.actionField.step is missing"})
							}
						}
					}
					if (obj.ecommerce.checkout_option){
						recognized_ecomm_object = true
						if (!obj.ecommerce.checkout_option.actionField){
							results.push({status: "ISSUE", evaluation: "ecommerce.checkout_option.actionField is missing"})
						} else {
							if (une(obj.ecommerce.checkout_option.actionField.step)){
								results.push({status: "ISSUE", evaluation: "ecommerce.checkout_option.actionField.step is missing"})
							}
						}
					}
					if (obj.ecommerce.purchase){
						recognized_ecomm_object = true
						if (!obj.ecommerce.purchase.actionField){
							results.push({status: "ERR", evaluation: "ecommerce.purchase.actionField is required"})
						} else {
							if (une(obj.ecommerce.purchase.actionField.id)){
								results.push({status: "ERR", evaluation: "ecommerce.purchase.actionField.id (Transaction ID) is required"})
							}
							if (obj.ecommerce.purchase.products){ // This will allow for null products
								if (!Array.isArray(obj.ecommerce.purchase.products)){
									results.push({status: "ERR", evaluation: "ecommerce.purchase.products is not an Array"})
								} else {
									obj.ecommerce.purchase.products.map(prod =>{
										if (une(prod.name) && une(prod.id)){
											results.push({status: "ERR", evaluation: "ecommerce.purchase.products must have a name or ID"})
										}
									})
								}
							}
						}
					}
					if (obj.ecommerce.refund){
						recognized_ecomm_object = true
						if (!obj.ecommerce.refund.actionField){
							results.push({status: "ERR", evaluation: "ecommerce.refund.actionField is required"})
						} else {
							if (une(obj.ecommerce.refund.actionField.id)){
								results.push({status: "ERR", evaluation: "ecommerce.refund.actionField.id (Transaction ID) is required"})
							}
						}
					}
					if (recognized_ecomm_object != true){
						results.push({status: "ISSUE", evaluation: "ecommerce.object format not recognized. See https://developers.google.com/tag-manager/enhanced-ecommerce for recommended format."})
					}
				}
				return results
			}
			var tab = "\t"
			for( var a = 0, b = arguments; a < b.length; a++) {
				var {now, delta} = currentPushTime(Date.now())
				var logGroup = ">>"
				var n = now.toFixed(3)
				var d = delta.toFixed(3)
				if (classicMode){
					setTimeout(console.info.bind(console.info, "data layer push:", b[a]), 1)
					return
				}
				const dataType = b[a].ecommerce ? "ecommerce data" : "(only data)"
				var ev = b[a].event ? "- event: %c" + b[a].event : "- " + dataType + " %c" // + Object.keys(b[a])[0]
				if (b[a].event && ignoreEventsRegex){
					if(new RegExp(ignoreEventsRegex, 'i').test(b[a].event)){
						return
					}
				}
				logGroup = logGroup + "%c " + dl + ".push " + ev
				var logPageLoad = {value: "%c>> " + n + "s since Document Start", fmt: e(!0, "#777", 11)}
				var logDelta = {value: "%c>> " + d + "s since last push", fmt: e(!0, "#777", 11)}
				var dlPush = b[a]
				const COLOR_OK = "#171"
				const COLOR_ISSUE = "#A73"
				const COLOR_ERROR = "#E22"
				let evaluated_color = COLOR_OK
				const evaluatedPush = evaluateObjectFormat(dlPush)
				if (evaluatedPush.status != "OK"){
					evaluated_color = evaluatedPush.status === "ERR" ? COLOR_ERROR : COLOR_ISSUE
				}
				let evaluatedPush_fmt = e(!0, evaluated_color, 10)
				console_set = []
				console_set.push(console.groupCollapsed.bind(console.groupCollapsed, logGroup, e(!0, evaluated_color, 11), (ev ? e(!0, "#35c") : "")))
				console_set.push(console.log.bind(console.log, "%c>> Pushed object:", logPageLoad.fmt, dlPush, " \n "))
				if (evaluatedPush.status === "ERR"){
					console_set.push(console.error.bind(console.error, "%c>> " + evaluatedPush.evaluation, evaluatedPush_fmt, " \n "))
				} else if (evaluatedPush.status === "ISSUE"){
					console_set.push(console.warn.bind(console.warn, "%c>> " + evaluatedPush.evaluation, evaluatedPush_fmt, " \n "))
				}
				if (!hideTiming){
					console_set.push(console.log.bind(console.log, logPageLoad.value, logPageLoad.fmt))
					console_set.push(console.log.bind(console.log, logDelta.value, logDelta.fmt, " \n "))
				}
				console_set.push(console.groupEnd.bind(console.groupEnd))
				setTimeout(_c_w_.bind(_c_w_, console_set), 1)
			}
		}
		var c = a.push
		a.push	=	function(){
			b.apply( this, arguments)
			c.apply( a, arguments)
		}
		b.apply( a, a)

		// Just in case somebody overwrites the datalayer
		a.observed = true
		document.addEventListener(
			"DOMContentLoaded",
			function(){injectDataLayerPushObserver(dl, gtm, classicMode, waitForDataLayer, hideTiming, ignoreEventsRegex, ">> The dataLayer was initialized incorrectly before DOMContentLoaded; e.g. window.dataLayer = []")}
		)
	} else {
		window._ap_dl.number_of_loops_checking_reinitialization = window._ap_dl.number_of_loops_checking_reinitialization ? window._ap_dl.number_of_loops_checking_reinitialization+1 : 1
		if (window._ap_dl.number_of_loops_checking_reinitialization <= 10) {
			setTimeout(
			function(){injectDataLayerPushObserver(dl, gtm, classicMode, waitForDataLayer, hideTiming, ignoreEventsRegex, ">> The dataLayer was initialized incorrectly after DOMContentLoaded; e.g. window.dataLayer = []")},
			1000
			)
		}
		if ((window._ap_dl.number_of_loops_checking_reinitialization > 1) || !classicMode || !waitForDataLayer ) return
		window.addEventListener(
			"load",
			function(){
				var scripts = document.getElementsByTagName("script");
				var dlScripts = []
				for (var i=0;i<scripts.length;i++) {
					 let src = (scripts[i].innerHTML) //  (scripts[i].src) ||
					 if (src.includes(dl) && !src.includes("injectDataLayerPushObserver")) {
						 if (src.includes("=") && !src.includes("google_tag_manager")){
							 let lineSrc = src.match(new RegExp(".*(" + dl + ".*)[\n$]" , 'ig'))
							 dlExtract = lineSrc ? lineSrc.map(l => { return l.replace(new RegExp("\n| |window." , 'ig'), "")}) : []
							 dlScripts.push({src:src, dl:dlExtract, lines:lineSrc})
						 }
					 }
				}
				setTimeout(console.log.bind(console.log, ">> Scripts in page containing " + dl), 1)
				setTimeout(console.log.bind(console.log, ">> %O", dlScripts), 1)
			}
		)
	}

}

function injectCode(codeToPush){
	var s = document.createElement("script")
	s.id = 'debug-code-injection'
	s.type = "text/javascript"
	s.innerHTML = "console.log('>> Code Injected');\n" + codeToPush
	if (document.head) document.head.appendChild(s)
}

function injectConsoleWorker(){
	function _c_w_(a){a = a || []; a.forEach(i => i.call())}
	var s = document.createElement("script")
	s.id = 'debug-code-injection'
	s.type = "text/javascript"
	s.innerHTML = _c_w_
	if (document.head) document.head.appendChild(s)
}

function inspect(result){
	var o = result.gaControlData
	if (!o) return
	gaControlData = result.gaControlData
	window._ap_dl = window._ap_dl || {}
	window._ap_dl.dataLayerFirstPushTime = window._ap_dl.dataLayerFirstPushTime || Date.now()
	window._ap_dl.dataLayerLastMsgTime = window._ap_dl.dataLayerLastMsgTime || window._ap_dl.dataLayerFirstPushTime
	window._ap_dl.settings = o
	if (!o.inspectingDataLayer) return
	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
			if (request.msg){
				var msg = JSON.parse(request.msg)
				msg.statusCode = request.statusCode
				logMessage(msg)
				return true
			} else if (request.gtm){
				const gtm = JSON.parse(request.gtm)
				if (gtm.l && gtm.l !== 'datalayer' && gtm.l !== gaControlData.dataLayerName){
					setTimeout(console.warn.bind(console.warn, ">> There is another dataLayer:", gtm.l), 1)
				}
				return true
			}
		})
	if (o.injectCode) {
		injectCode(o.codeToPush)
	}
	injectConsoleWorker()
	o.dataLayerName = o.dataLayerName || 'dataLayer'
	if (o.classicMode){
		setTimeout(console.groupCollapsed.bind(console.groupCollapsed, ">> Inspecting:", o.dataLayerName, " - Classic Mode"), 1)
	} else {
		setTimeout(console.groupCollapsed.bind(console.groupCollapsed, ">> Inspecting:", o.dataLayerName, " - Document Start"), 1)
		setTimeout(console.log.bind(console.log, '>> Document Start is the datum (0.00s) for push and hit timing'), 1)
	}
	setTimeout(console.log.bind(console.log, '>> Settings: %O', o), 1)
	setTimeout(console.groupEnd.bind(console.groupEnd), 1)
	var s = document.createElement("script")
	s.id = o.dataLayerName + '-inspector'
	s.type = "text/javascript"
	const dlPush = o.injectingDataLayer ? "window['"+ o.dataLayerName + "'] = window['"+ o.dataLayerName + "'] || [];\nwindow['"+ o.dataLayerName + "'].push({" + o.dataLayerPush + "});\n" : ""
	s.innerHTML = dlPush + "(" + injectDataLayerPushObserver + ")('" + o.dataLayerName + "', '" + o.injectingGTM + "', " + o.classicMode + ", " + o.waitForDataLayer + ", " + o.hideTiming + ", '" + (o.ignoreEvents ? o.ignoreEventsRegex : "") + "');\n"
	if (document.head) document.head.appendChild(s)
}


function logMessage(msg){
	window._ap_dl = window._ap_dl || {}
	window._ap_dl.dataLayerFirstPushTime = window._ap_dl.dataLayerFirstPushTime || Date.now()
	window._ap_dl.dataLayerLastMsgTime = window._ap_dl.dataLayerLastMsgTime || window._ap_dl.dataLayerFirstPushTime
	let hideTiming = window._ap_dl.settings.hideTiming
	let settings = window._ap_dl.settings
	if (settings.classicMode) return
	if (settings.ignoreRedirects && msg.statusCode === 307) return
	function evaluateObjectFormat(obj, type){
		function une(val){ //  undefined null empty
			return (val === undefined || val === null || val === "")
		}
		let results = []
		Object.defineProperties(results, {
			"status" : { get: function(){
				let status = "OK"
				this.map(s => {
					if (status === "OK" && s.status === "ISSUE"){
						status = s.status
						this._evaluation = s.evaluation
					}
					if (s.status === "ERR"){
						status = s.status
						this._evaluation = s.evaluation
					}
				})
				return status
			}},
			"evaluation" : { get: function(){
				this._evaluation = "No issues found"
				let state = this.status
				return this._evaluation
			}},
		})
		if (obj.t === 'event') {
			if (obj.ec === undefined || obj.ec === 'undefined'){
				results.push({status: "ERR", evaluation: "ec is undefined - Category is requred for an event"})
			}
			if (obj.ea === undefined || obj.ea === 'undefined'){
				results.push({status: "ERR", evaluation: "ea is undefined - Action is requred for an event"})
			}
		}
		if (obj.statusCode === 302){
			results.push({status: "ISSUE", evaluation: "This hit was redirected at the server. This is expected when you have advertising features enabled in GA and GTM. Don't worry, the hit was recorded before being redirected."})
		} else if (obj.statusCode === 307){
			results.push({status: "ISSUE", evaluation: "This hit was internally redirected (status code: 307) and was delayed. To avoid this issue, use \"forceSSL\"."})
		} else if (obj.statusCode != 200) {
			results.push({status: "ISSUE", evaluation: "This hit has a status code of " + obj.statusCode + " There may be an issue with your setup."})
		}
		return results
	}
	function currentMsgTime(t){
		var lp = window._ap_dl.dataLayerLastMsgTime
		var fp = window._ap_dl.dataLayerFirstPushTime
		var delta = t - lp
		window._ap_dl.dataLayerLastMsgTime = t
		return {now:(t - fp)/1000, delta: delta/1000}
	}
	var {now, delta} = currentMsgTime(Date.now())
	function e(e, t, x) {
		x = x || 11
		var n = 'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size: ' + x + 'px;' + (e ? "font-weight: bold;" : "") + "color: " + t + ";"
		return n
	}

	var gtm = msg.gtm || ""
	if (msg.tid && settings.ignoreProperties){
		if(settings.ignorePropertiesRegex != "" && new RegExp(settings.ignorePropertiesRegex, 'i').test(msg.tid)){
			return
		}
	}
	if (msg.t === 'event' && settings.ignoreEvents){
    if (settings.ignoreEventsRegex.includes("ec:") && new RegExp(settings.ignoreEventsRegex, 'i').test("ec:"+msg.ec)){
		  return
    }
	}
	var logGroup = ">> "
	var n = now.toFixed(3)
	var d = delta.toFixed(3)
	var logPageLoad = {value: "%c>> " + n + "s since Document Start", fmt: e(!0, "#777", 11)}
	var logDelta = {value: "%c>> " + d + "s since last hit", fmt: e(!0, "#777", 11)}
	const sender = "" //gtm ? "GTM " : "GA "
	const COLOR_OK = "#191"
	const COLOR_ISSUE = "#A73"
	const COLOR_ERROR = "#E22"
	let evaluated_color = COLOR_OK
	const evaluatedPush = evaluateObjectFormat(msg)
	if (evaluatedPush.status != "OK"){
		evaluated_color = evaluatedPush.status === "ERR" ? COLOR_ERROR : COLOR_ISSUE
	}
	let evaluatedPush_fmt = e(!0, evaluated_color, 11)
	let displayedProperty = false
	if (msg.t === "event"){
		logGroup = logGroup + "%c" + sender + msg.t.toUpperCase() + " %c ec: " + msg.ec + "   ea: " + msg.ea + "   el: " + msg.el
		setTimeout(console.groupCollapsed.bind(console.groupCollapsed, logGroup, evaluatedPush_fmt, e(!0, "#777", 11)),1)
	} else if (msg.t) {
		logGroup = logGroup + "%c" + sender + msg.t.toUpperCase()
		if (msg.tid){
			displayedProperty = true
			setTimeout(console.groupCollapsed.bind(console.groupCollapsed, logGroup + " %c - " + msg.tid, evaluatedPush_fmt, e(!0, "#777", 11)), 1)
		} else {
			setTimeout(console.groupCollapsed.bind(console.groupCollapsed, logGroup, evaluatedPush_fmt),1)
		}
	} else if (msg.utmac){
		if (settings.ignoreProperties){
			if(settings.ignorePropertiesRegex != "" && new RegExp(settings.ignorePropertiesRegex, 'i').test(msg.utmac)){
				return
			}
		}
		displayedProperty = true
		let utm_type = msg.utmt ? "UTM " + msg.utmt.toUpperCase() : "UTM"
		setTimeout(console.groupCollapsed.bind(console.groupCollapsed, "%c" + utm_type + "%c - " + msg.utmac, evaluatedPush_fmt, e(!0, "#777", 11)), 1)
	} else {
		logGroup = logGroup + "%c" + "MSG"
		setTimeout(console.groupCollapsed.bind(console.groupCollapsed, logGroup, e(!0, "#191")),1)
	}
	if (evaluatedPush.status === "ERR"){
		setTimeout(console.error.bind(console.error, ">> %c" + evaluatedPush.evaluation, evaluatedPush_fmt),1)
		setTimeout(console.log.bind(console.log, ">>%O", evaluatedPush),1)
	} else if (evaluatedPush.status === "ISSUE"){
		setTimeout(console.warn.bind(console.warn, ">> %c" + evaluatedPush.evaluation, evaluatedPush_fmt),1)
		setTimeout(console.log.bind(console.log, ">>%O", evaluatedPush),1)
	}
	if (msg.tid && !displayedProperty){
		setTimeout(console.log.bind(console.log, "%c>> " + msg.tid, e(!0, "#777")),1)
	}
	if (msg.utmac){
		setTimeout(console.log.bind(console.log, "%c>> " + msg.utmac, e(!0, "#777")),1)
	}
	if (gtm){
		setTimeout(console.log.bind(console.log, "%c>> " + gtm, e(!0, "#777")),1)
	}
	if (!hideTiming){
		setTimeout(console.log.bind(console.log, logPageLoad.value, logPageLoad.fmt),1)
		setTimeout(console.log.bind(console.log, logDelta.value, logDelta.fmt),1)
	}
	setTimeout(console.log.bind(console.log, "%c>> Network hit:\n\t", e(!0, "#777"), msg),1)

	setTimeout(console.groupEnd.bind(console.groupEnd),1)
}
