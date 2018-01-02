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
'use strict';chrome.app.runtime.onLaunched.addListener(function(a){a&&(a.items&&console.log("Found file:",a.items[0]),console.log("launchData",a));var b=screen.availWidth,c=screen.availHeight;console.log("Screensize",b,"x",c);var d={frame:"none",id:"editor",innerBounds:{width:1280,height:720,minWidth:800,minHeight:600},hidden:!0};chrome.app.window.create("html/loader.html",{alwaysOnTop:!0,frame:"chrome",id:"loader",focused:!0,resizable:!1,innerBounds:{width:512,height:250,minWidth:512,minHeight:250,
maxWidth:512,maxHeight:250}},function(a){a.outerBounds.setPosition(Math.round((b-512)/2),Math.round((c-250)/2));a.drawAttention();chrome.app.window.create("html/editor.html",d)})});chrome.runtime.onInstalled.addListener(function(){console.log("Thanks for installing Coding with Chrome!")});
