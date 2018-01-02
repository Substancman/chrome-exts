//console.log("Content_GTM_Injector")
chrome.storage.local.get('gaControlData', getInjectingControlData)

function getInjectingControlData(result){
	if (!result.gaControlData) return
	if (result.gaControlData.injectingGTM) injectGTM(result.gaControlData)
}

function injectGTM(o){
	if (o.classicMode) return
	var dataLayerName = o.dataLayerName || 'dataLayer'
	var gtmId = o.gtmId || 'KHWMTW'
	var hostName = o.hostName || ''
	var hostNameRegEx = o.hostNameRegEx || ''

	if( (hostNameRegEx && new RegExp(hostName, 'i').test(window.location.hostname)) ||
			window.location.hostname === hostName){
		setTimeout(console.log.bind(console.log, '>> Inserting GTM Container: GTM-'+gtmId), 1)
		var snippetGTM = "// Injected GTM Snippet - 1 \n var " + dataLayerName + "=" + dataLayerName  + " || []; \n(function(w,d,s,l,i,h){if(h=='tagmanager.google.com'){return}w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script', '" + dataLayerName + "', 'GTM-" + gtmId + "', window.location.hostname);";
		var s = document.createElement("script")
		s.id = 'GTM-' + gtmId + '-snippet'
		s.type = "text/javascript"
		s.innerHTML = snippetGTM
		document.head.appendChild(s)

		document.addEventListener("DOMContentLoaded", function(){
			var badge = document.createElement("div")
			var badgeId = 'GTM-' + gtmId + '-badge'
			badge.id = badgeId
			badge.type = "text/javascript"
			badge.classList.add('gtm-badge')
			if (localStorage.getItem('gtm-badge-collapsed')){
					badge.classList.add('gtm-badge-collapsed')
			}
			badge.innerHTML = '<label id="label-injected">INSERTED</label><label class="gtm-label" >GTM-' + gtmId + '</label>'
			badge.onclick = toggle_GTM_badge

			function toggle_GTM_badge(){
				var bId = badgeId
				var badge = document.getElementById(bId)
				var collapsed = badge.classList.contains("gtm-badge-collapsed")
				localStorage.setItem('gtm-badge-collapsed', collapsed)
				if (collapsed){
					badge.classList.remove("gtm-badge-collapsed")
				} else {
					badge.classList.add("gtm-badge-collapsed")
				}
			}

			document.body.appendChild(badge)
		})
	} else {
		setTimeout(console.log.bind(console.log, ">> GTM not inserted. Current page does not match targeted host name:", hostName), 1)
	}
}
