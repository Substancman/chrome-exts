/*! Copyright 2009-2017 Evernote Corporation. All rights reserved. */

define(["jqueryPrivate"],function(a){function b(){function b(a,b,d){f&&f.parentNode&&(a?(f.addEventListener(Browser.whichAnimationEnd(),c,!1),f.className="evernoteClipperHide"):c()),d&&"function"==typeof d&&d()}function c(){f.parentNode.removeChild(f),f=null}function d(a,b,c){"number"==typeof a.height&&(a.height+="px"),f.style.setProperty("height",a.height,"important"),c&&"function"==typeof c&&c()}function e(c,d,e,g,h,i,j){b(!1),f=document.createElement("iframe"),f.id="evernoteClipperResult",/^frameset$/i.test(document.body.nodeName)?a("frameset").parent().prepend(f):a("html").prepend(f),f.addEventListener("load",function(){Browser.sendToExtension({name:"initializeClipResult",pendingNoteKey:e,recText:i,title:g,url:h,userId:c,subpart:d}),j()}),f.src=Browser.extension.getURL("content/clip_result/clip_result.html"),window.focus()}var f;window.addEventListener("click",b),Browser.addMessageHandlers({hideClipResult:b,setClipResultHeight:d}),this.hideClipResult=b,this.showClipResult=e,Object.preventExtensions(this)}return Object.preventExtensions(b),b});