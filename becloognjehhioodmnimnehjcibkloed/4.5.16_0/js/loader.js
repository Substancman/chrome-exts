/*
 Copyright 2015 The Coding with Chrome Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 @author mbordihn@google.com (Markus Bordihn)
*/
'use strict';var CwcLoader=function(){this.versionNode=document.getElementById("cwc-version-text");this.progressBarNode=document.getElementById("cwc-preloader-progress-bar");this.progressTextNode=document.getElementById("cwc-preloader-progress-text");this.progressThumbNode=document.getElementById("cwc-preloader-progress-bar-thumb");this.manifest=chrome.runtime.getManifest()};
CwcLoader.prototype.prepare=function(){console.log("Loading the Coding with Chrome UI ...");this.manifest&&this.versionNode&&(this.versionNode.innerText=this.manifest.version);document.addEventListener("keypress",this.keyHandler.bind(this),!1);window.addEventListener("message",this.messageHandler.bind(this),!1)};CwcLoader.prototype.keyHandler=function(a){100==a.keyCode&&(a=chrome.app.window.get("editor"))&&(a.show(!0),a.drawAttention())};
CwcLoader.prototype.messageHandler=function(a){if(a.data){a=a.data;var b=a.command;switch(b){case "progress":this.setProgress(a.text,a.current,a.total);break;case "close":setTimeout(function(){var a=chrome.app.window.get("editor");a&&(a.show(!0),a.drawAttention());chrome.app.window.current().close()},1E3);break;case "error":this.setError(a.msg);break;default:console.log("Command",b,"is not recognized!")}}};
CwcLoader.prototype.setProgress=function(a,b,c){b=Math.round(100/c*b);console.log("[",b,"%]",a);this.setProgressText(a);this.setProgressThumb(b)};CwcLoader.prototype.setProgressThumb=function(a){this.progressThumbNode&&(this.progressThumbNode.style.width=a+"%")};CwcLoader.prototype.setProgressText=function(a){this.progressTextNode&&(this.progressTextNode.innerText=a)};CwcLoader.prototype.setProgressTextClass=function(a){this.progressTextNode&&(this.progressTextNode.className=a)};
CwcLoader.prototype.setError=function(a){this.setProgressText(a);this.setProgressTextClass("error");this.progressBarNode&&(this.progressBarNode.style.display="none")};document.addEventListener("DOMContentLoaded",function(){(new CwcLoader).prepare()},!1);
