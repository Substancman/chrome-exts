'use strict';var d="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},e="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function f(a,b){if(b){var c=e;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];k in c||(c[k]={});c=c[k]}a=a[a.length-1];g=c[a];b=b(g);b!=g&&null!=b&&d(c,a,{configurable:!0,writable:!0,value:b})}}
f("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});f("String.prototype.includes",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(a,c||0)}});var h=this;
function l(a,b){a=a.split(".");var c=h;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var g;a.length&&(g=a.shift());)a.length||void 0===b?c[g]&&c[g]!==Object.prototype[g]?c=c[g]:c=c[g]={}:c[g]=b}
function m(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function n(a){return"function"==m(a)};/*
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
function p(a,b,c,g){this.w=a;this.s=b;this.C=void 0===c?"":c;this.a=void 0===g?"":g}p.prototype.L=function(){return this.w};p.prototype.getType=p.prototype.L;p.prototype.H=function(){return this.s};p.prototype.getFunc=p.prototype.H;p.prototype.N=function(){return this.C};p.prototype.getValue=p.prototype.N;p.prototype.getName=function(){return this.a};p.prototype.getName=p.prototype.getName;function q(a){this.a={};this.g=void 0===a?!0:a;this.b=this.c=!1}
q.prototype.f=function(a,b){r(this,new p("cmd",a),b)};q.prototype.addCommand=q.prototype.f;q.prototype.A=function(a,b){r(this,new p("delay",null,a),b)};q.prototype.addDelay=q.prototype.A;q.prototype.clear=function(){this.a["default"]=[]};q.prototype.clear=q.prototype.clear;q.prototype.ba=function(){};q.prototype.setTimerInterval=q.prototype.ba;q.prototype.start=function(){this.c||(this.g=this.c=!0,this.b=!1,t(this))};q.prototype.start=q.prototype.start;
q.prototype.stop=function(a){this.c&&(this.b=this.g=this.c=!1,a&&"function"===typeof a&&a())};q.prototype.stop=q.prototype.stop;q.prototype.B=function(a){a=void 0===a?"default":a;return this.a[a]&&0<this.a[a].length?this.a[a].shift():null};q.prototype.getNext=q.prototype.B;q.prototype.K=function(a){for(var b;b=this.B(a);)if("cmd"==b.w)return b.s;return null};q.prototype.getNextCommand=q.prototype.K;function r(a,b,c){c=void 0===c?"default":c;c in a.a||(a.a[c]=[]);a.a[c].push(b);a.g&&a.start()}
function t(a){if(a.c&&!a.b)if(!("default"in a.a)||0>=a.a["default"].length)a.c=!1;else{var b=a.a["default"].shift(),c=b.w,g=b.C,b=b.s;switch(c){case "cmd":b&&"function"===typeof b&&(a.b=!0,b(g),a.b=!1,t(a));break;case "delay":a.b=!0;setTimeout(function(){this.b=!1;t(this)}.bind(a),g);break;default:console.error("Unknown Stack Type",c)}}};function u(a,b,c){this.name="Runner Framework";this.b=null;this.a="";this.g={};this.j=void 0===b?null:b;this.c=void 0===a?null:a;this.h=void 0===c?null:c;this.i=new q;window.addEventListener("message",this.m.bind(this),!1);this.f("__handshake__",this.l.bind(this));this.f("__start__",this.v.bind(this));this.f("__ping__",this.o.bind(this))}l("cwc.framework.Runner",u);
u.prototype.f=function(a,b,c){c=void 0===c?this.j:c;a?b?this.g[a]=c?b.bind(c):b:console.error("Runner function "+a+" is undefined!"):console.error("Runner command is undefined!")};u.prototype.addCommand=u.prototype.f;u.prototype.F=function(a,b,c){a=a.includes(b);console.log((a?"Enable ":"Disable ")+c+" ...");this.send(c,{enable:a})};u.prototype.enableMonitor=u.prototype.F;
u.prototype.send=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?0:c;this.b&&this.a?c?(this.i.f(function(){this.b.postMessage({command:a,value:b},this.a)}.bind(this)),this.i.A(c)):this.b.postMessage({command:a,value:b},this.a):console.error("Communication channel has not yet been opened")};u.prototype.send=u.prototype.send;u.prototype.Z=function(a){a&&"function"===typeof a&&(this.c=a)};u.prototype.setCallback=u.prototype.Z;u.prototype.aa=function(a){a&&"function"===typeof a&&(this.h=a)};
u.prototype.setMonitor=u.prototype.aa;u.prototype.D=function(a){a=void 0===a?"":a;console.log("Enable direct update.");this.send("__direct_update__",a)};u.prototype.enableDirectUpdate=u.prototype.D;u.prototype.m=function(a){if(!a)throw Error("Was not able to get browser event!");!this.b&&"source"in a&&(this.b=a.source);!this.a&&"origin"in a&&(this.a=a.origin);var b=a.data.command;a=a.data.value;if(b in this.g)this.g[b](a);else console.error("Command "+b+" is not defined yet")};
u.prototype.l=function(a){this.b&&this.a&&this.send("__handshake__",a)};u.prototype.v=function(){this.h&&(console.log("Initialize monitor ..."),this.h());this.c&&(console.log("Starting program ..."),this.c())};u.prototype.o=function(a){this.send("__pong__",{id:a,time:(new Date).getTime()})};/*
 Copyright 2016 Shenzhen Maker Works Co, Ltd. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 @author wangyu@makeblock.cc (Yu Wang)
 @author mbordihn@google.com (Markus Bordihn)
*/
function v(a){this.name="mbot Framework";this.code=function(){a(this)}.bind(this);this.m=this.j=this.h=this.c=this.b=function(){};this.a=new u(this.code,this);this.o=this.l=this.i=this.g=0;this.a.f("updateButton",this.v);this.a.f("updateLightnessSensor",this.Y);this.a.f("updateLinefollowerSensor",this.ca);this.a.f("updateUltrasonicSensor",this.da)}l("cwc.framework.makeblock.mBot",v);v.prototype.$=function(a,b,c,g,k){this.a.send("setLEDColor",{red:a,green:b,blue:c,position:g||0},k)};
v.prototype.setLEDColor=v.prototype.$;v.prototype.V=function(a,b,c){this.a.send("playTone",{frequency:a,duration:b},c)};v.prototype.playTone=v.prototype.V;v.prototype.G=function(){return this.g};v.prototype.getButtonValue=v.prototype.G;v.prototype.I=function(){return this.i};v.prototype.getLightnessSensorValue=v.prototype.I;v.prototype.J=function(){return this.l};v.prototype.getLinefollowerSensorValue=v.prototype.J;v.prototype.M=function(){return this.o};v.prototype.getUltrasonicSensorValue=v.prototype.M;
v.prototype.u=function(a){return Math.floor(Math.abs(100/a)/1*1E3+250)};v.prototype.getDelay=v.prototype.u;v.prototype.W=function(a,b){this.a.send("rotatePower",{speed:a},!0===b?this.u(a):b)};v.prototype.rotatePower=v.prototype.W;v.prototype.X=function(a,b){this.a.send("rotatePower",{speed:b},a);this.a.send("rotatePower",{speed:0},100)};v.prototype.rotatePowerTime=v.prototype.X;v.prototype.O=function(a,b){this.a.send("movePower",{speed:a},!0===b?this.u(a):b)};v.prototype.movePower=v.prototype.O;
v.prototype.P=function(a,b){this.a.send("movePower",{speed:b},a);this.a.send("movePower",{speed:0},100)};v.prototype.movePowerTime=v.prototype.P;v.prototype.ea=function(a){this.a.send("wait",null,a)};v.prototype.wait=v.prototype.ea;v.prototype.stop=function(a){this.a.send("stop",null,a)};v.prototype.stop=v.prototype.stop;v.prototype.R=function(a){n(a)&&(this.c=a)};v.prototype.onButtonChange=v.prototype.R;v.prototype.S=function(a){n(a)&&(this.h=a)};v.prototype.onLightnessSensorChange=v.prototype.S;
v.prototype.T=function(a){n(a)&&(this.j=a)};v.prototype.onLinefollowerSensorChange=v.prototype.T;v.prototype.U=function(a){n(a)&&(this.m=a)};v.prototype.onUltrasonicSensorChange=v.prototype.U;v.prototype.v=function(a){this.g=a;this.c(a)};v.prototype.Y=function(a){this.i=a;this.h(a)};v.prototype.ca=function(a){this.l=a;this.j(a.left,a.right,a.raw)};v.prototype.da=function(a){this.o=a;this.m(a)};
