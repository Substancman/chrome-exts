"use strict";



//_onsole.log("access_error");
document.addEventListener('DOMContentLoaded', function () {

	//_onsole.log("access_error init");
	init();	
});

function init()
{
	// download data
	
	$("body").html("<iframe id='iframe' width='100%' height='100%' src='http://kproxy.com/ok.html?time=" + Date.now() +"' frameBorder='0'></iframe>")
	
	$("#iframe").load(function(){
		chrome.extension.getBackgroundPage().callProxyAuthCallback();
	});
}











