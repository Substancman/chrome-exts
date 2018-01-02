/*! Copyright 2009-2017 Evernote Corporation. All rights reserved. */

var contentPreview,clipper,clipResultCoordinator=null,feedbackFormCoordinator,coordinator,GlobalUtils;reqC(["Clipper","ContentPreview","Coordinator","GlobalUtils","Promotion","Konami","ClipResultCoordinator","topFrame!pageVisible!"],function(a,b,c,d,e,f,g){function h(){var a=!1,b=document.getElementsByTagName("embed")[0];if(FIREFOX&&document.domain&&"pdf.js"===document.domain)a=!0;else if(b&&/application\/pdf/i.test(b.type))a=!0;else if(/^https?:\/\/docs\.google\.com\/viewer\?url=.+/.test(document.location.href))for(var c=0;c<document.scripts.length;c++)if(/gviewApp\.setFileData/.test(document.scripts[c].innerText)){/mimeType.+application\/pdf/.test(document.scripts[c].innerText)&&(a=!0);break}Browser.sendToExtension({name:"togglePDFContextMenuOption",show:a})}function i(){var a=window.getSelection();return a&&a.rangeCount&&!a.isCollapsed}function j(){SAFARI||(h(),window.addEventListener("focus",function(){h()}),window.addEventListener("mousedown",function(a){2===a.buttons&&platform.channel.sendMessage("updateContextMenu",{selection:i()})})),konami=new f,contentPreview=b,clipper=a,clipResultCoordinator=new g,feedbackFormCoordinator=new FeedbackFormCoordinator,coordinator=c,GlobalUtils=d,q&&e.enable(),r.test(document.location.href)&&("complete"===document.readyState||"loaded"===document.readyState||"interactive"===document.readyState?n():window.addEventListener("DOMContentLoaded",n)),p=!0}function k(a,b,c){navigator.cookieEnabled||alert(Browser.i18n.getMessage("Error_Cookies_Disabled")),c&&"function"==typeof c&&c()}function l(a,b,c){konami.removeCode(Konami.Code.Batman),konami.addCode(Konami.Code.Batman,function(){Browser.sendToExtension({name:"setPersistentValue",key:"devOptionsEnabled",value:!0});var a={};FIREFOX&&(a={windowId:0},setTimeout(function(){Browser.sendToExtension({name:"main_closeSenderWindow"})},300)),Browser.sendToExtension({name:"main_openTab",url:Browser.getExtensionURL("options.html"),args:a})}),c&&"function"==typeof c&&c()}function m(a,b,c){function d(a){if(!document.querySelector(".switch-service")){var b=document.createElement("div");b.className="switch-service";var c=document.createElement("a");c.href=a;var d=document.createElement("div");d.className="arrow",d.appendChild(document.createElement("img")).setAttribute("src","/redesign/global/img/link-arrow.jpg");var e=document.createElement("div");e.className="switch-service-message",e.innerText="\u5207\u6362\u5230\u5370\u8c61\u7b14\u8bb0",c.appendChild(d),c.appendChild(e),b.appendChild(c),document.querySelector("#login_form").appendChild(b)}}"complete"===document.readyState||"loaded"===document.readyState||"interactive"===document.readyState?d(a.link):window.addEventListener("DOMContentLoaded",d),c&&"function"==typeof c&&c()}function n(){var a=document.querySelector(".footer.wrapper");if(a){var b=a.querySelector("a");if(b){var c=document.createElement("a");c.className=b.className,c.setAttribute("target","_blank"),c.innerText=Browser.i18n.getMessage("clipperOptions_title"),c.setAttribute("href",Browser.getExtensionURL("options.html")),a.insertBefore(c,a.querySelector(":last-child"))}}}function o(a,b,c){q=!0,p&&e.enable(),c&&"function"==typeof c&&c()}var p=!1,q=!1,r=/^https:\/\/(?:stage|stage-china|www|app)\.(?:evernote|yinxiang)\.com\/(Clipper)?Login\.action/;Browser.addMessageHandlers({enableSaveToEvernote:o,enableKonami:l,enableServiceSwitch:m,checkCookiesAreEnabled:k}),SAFARI?Browser.setupL10n().then(j):j()});