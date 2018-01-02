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
'use strict';var cwcChromeSupport="undefined"!==typeof chrome&&"undefined"!==typeof chrome.app&&"undefined"!==typeof chrome.app.window,cwcBuildUi=function(){if(cwcChromeSupport){var a=chrome.app.window.get("loader");a&&a.contentWindow.postMessage({command:"progress",text:"Build the Coding with Chrome UI ...",current:1,total:100},"*");if("undefined"==typeof cwc)return a&&a.contentWindow.postMessage({command:"error",msg:"The cwc namespace is undefined!\nPlease make sure that the compiler runs without any errors!"},
"*"),null;if("undefined"==typeof cwc.ui||"undefined"==typeof cwc.ui.Builder)return a&&a.contentWindow.postMessage({command:"error",msg:"cwc.ui.Builder is undefined!\nMaybe an uncaught TypeError, SyntaxError, ... or missing files."},"*"),null}var a=document.getElementById("cwc-editor"),b=new cwc.ui.Builder;b.decorate(a);return b},cwcLoadScripts=function(){var a=document.getElementsByTagName("head")[0];if(a){var b=cwcChromeSupport&&chrome.app.window.get("loader");b&&b.contentWindow.postMessage({command:"progress",
text:"Loading additional JavaScripts ...",current:0,total:100},"*");var c=document.createElement("script");c.type="text/javascript";c.src="../js/cwc_ui.js";c.onload=function(){var b=document.createElement("script");b.type="text/javascript";b.src="../js/debug.js";a.appendChild(b)};a.appendChild(c);b&&b.contentWindow.postMessage({command:"progress",text:"Loading additional JavaScripts ...",current:100,total:100},"*")}else console.error("Seems DOM content is not ready!")};
window.addEventListener("load",cwcBuildUi,!1);document.addEventListener("DOMContentLoaded",cwcLoadScripts,!1);
