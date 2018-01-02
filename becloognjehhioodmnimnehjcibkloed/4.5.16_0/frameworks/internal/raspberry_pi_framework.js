'use strict';var d="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){a!=Array.prototype&&a!=Object.prototype&&(a[c]=b.value)},e="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function g(a,c){if(c){var b=e;a=a.split(".");for(var f=0;f<a.length-1;f++){var k=a[f];k in b||(b[k]={});b=b[k]}a=a[a.length-1];f=b[a];c=c(f);c!=f&&null!=c&&d(b,a,{configurable:!0,writable:!0,value:c})}}
g("Object.is",function(a){return a?a:function(a,b){return a===b?0!==a||1/a===1/b:a!==a&&b!==b}});g("String.prototype.includes",function(a){return a?a:function(a,b){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(a,b||0)}});var h=this;
function l(a,c){a=a.split(".");var b=h;a[0]in b||!b.execScript||b.execScript("var "+a[0]);for(var f;a.length&&(f=a.shift());)a.length||void 0===c?b[f]&&b[f]!==Object.prototype[f]?b=b[f]:b=b[f]={}:b[f]=c}
function m(a){var c=typeof a;if("object"==c)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return c;var b=Object.prototype.toString.call(a);if("[object Window]"==b)return"object";if("[object Array]"==b||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==b||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==c&&"undefined"==typeof a.call)return"object";return c};/*
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
function n(a,c,b,f){this.j=a;this.h=c;this.s=void 0===b?"":b;this.a=void 0===f?"":f}n.prototype.B=function(){return this.j};n.prototype.getType=n.prototype.B;n.prototype.w=function(){return this.h};n.prototype.getFunc=n.prototype.w;n.prototype.C=function(){return this.s};n.prototype.getValue=n.prototype.C;n.prototype.getName=function(){return this.a};n.prototype.getName=n.prototype.getName;function p(a){this.a={};this.g=void 0===a?!0:a;this.b=this.c=!1}
p.prototype.f=function(a,c){q(this,new n("cmd",a),c)};p.prototype.addCommand=p.prototype.f;p.prototype.l=function(a,c){q(this,new n("delay",null,a),c)};p.prototype.addDelay=p.prototype.l;p.prototype.clear=function(){this.a["default"]=[]};p.prototype.clear=p.prototype.clear;p.prototype.O=function(){};p.prototype.setTimerInterval=p.prototype.O;p.prototype.start=function(){this.c||(this.g=this.c=!0,this.b=!1,r(this))};p.prototype.start=p.prototype.start;
p.prototype.stop=function(a){this.c&&(this.b=this.g=this.c=!1,a&&"function"===typeof a&&a())};p.prototype.stop=p.prototype.stop;p.prototype.m=function(a){a=void 0===a?"default":a;return this.a[a]&&0<this.a[a].length?this.a[a].shift():null};p.prototype.getNext=p.prototype.m;p.prototype.A=function(a){for(var c;c=this.m(a);)if("cmd"==c.j)return c.h;return null};p.prototype.getNextCommand=p.prototype.A;function q(a,c,b){b=void 0===b?"default":b;b in a.a||(a.a[b]=[]);a.a[b].push(c);a.g&&a.start()}
function r(a){if(a.c&&!a.b)if(!("default"in a.a)||0>=a.a["default"].length)a.c=!1;else{var c=a.a["default"].shift(),b=c.j,f=c.s,c=c.h;switch(b){case "cmd":c&&"function"===typeof c&&(a.b=!0,c(f),a.b=!1,r(a));break;case "delay":a.b=!0;setTimeout(function(){this.b=!1;r(this)}.bind(a),f);break;default:console.error("Unknown Stack Type",b)}}};function t(a,c,b){this.name="Runner Framework";this.b=null;this.a="";this.g={};this.D=void 0===c?null:c;this.c=void 0===a?null:a;this.i=void 0===b?null:b;this.o=new p;window.addEventListener("message",this.G.bind(this),!1);this.f("__handshake__",this.F.bind(this));this.f("__start__",this.I.bind(this));this.f("__ping__",this.H.bind(this))}l("cwc.framework.Runner",t);
t.prototype.f=function(a,c,b){b=void 0===b?this.D:b;a?c?this.g[a]=b?c.bind(b):c:console.error("Runner function "+a+" is undefined!"):console.error("Runner command is undefined!")};t.prototype.addCommand=t.prototype.f;t.prototype.v=function(a,c,b){a=a.includes(c);console.log((a?"Enable ":"Disable ")+b+" ...");this.send(b,{enable:a})};t.prototype.enableMonitor=t.prototype.v;
t.prototype.send=function(a,c,b){c=void 0===c?{}:c;b=void 0===b?0:b;this.b&&this.a?b?(this.o.f(function(){this.b.postMessage({command:a,value:c},this.a)}.bind(this)),this.o.l(b)):this.b.postMessage({command:a,value:c},this.a):console.error("Communication channel has not yet been opened")};t.prototype.send=t.prototype.send;t.prototype.M=function(a){a&&"function"===typeof a&&(this.c=a)};t.prototype.setCallback=t.prototype.M;t.prototype.N=function(a){a&&"function"===typeof a&&(this.i=a)};
t.prototype.setMonitor=t.prototype.N;t.prototype.u=function(a){a=void 0===a?"":a;console.log("Enable direct update.");this.send("__direct_update__",a)};t.prototype.enableDirectUpdate=t.prototype.u;t.prototype.G=function(a){if(!a)throw Error("Was not able to get browser event!");!this.b&&"source"in a&&(this.b=a.source);!this.a&&"origin"in a&&(this.a=a.origin);var c=a.data.command;a=a.data.value;if(c in this.g)this.g[c](a);else console.error("Command "+c+" is not defined yet")};
t.prototype.F=function(a){this.b&&this.a&&this.send("__handshake__",a)};t.prototype.I=function(){this.i&&(console.log("Initialize monitor ..."),this.i());this.c&&(console.log("Starting program ..."),this.c())};t.prototype.H=function(a){this.send("__pong__",{id:a,time:(new Date).getTime()})};/*
 Copyright 2017 The Coding with Chrome Authors.

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
function u(a){this.name="Raspberry Pi Framework";this.code=function(){a(this)}.bind(this);this.a=new t(this.code,this);this.b=function(){};this.a.f("recievedData",this.c)}l("cwc.framework.RaspberryPi",u);u.prototype.K=function(a,c){this.a.send("sendSerial",{data:a},c)};u.prototype.sendSerial=u.prototype.K;u.prototype.L=function(a,c){this.a.send("sendSerialText",{text:a},c)};u.prototype.sendSerialText=u.prototype.L;u.prototype.J=function(a){"function"==m(a)&&(this.b=a)};u.prototype.onData=u.prototype.J;
u.prototype.c=function(a){this.b(a)};
