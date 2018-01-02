'use strict';var c="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){a!=Array.prototype&&a!=Object.prototype&&(a[b]=d.value)},e="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function f(a,b){if(b){var d=e;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];k in d||(d[k]={});d=d[k]}a=a[a.length-1];g=d[a];b=b(g);b!=g&&null!=b&&c(d,a,{configurable:!0,writable:!0,value:b})}}
f("Object.is",function(a){return a?a:function(a,d){return a===d?0!==a||1/a===1/d:a!==a&&d!==d}});f("String.prototype.includes",function(a){return a?a:function(a,d){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(a,d||0)}});var h=this;
function l(a,b){a=a.split(".");var d=h;a[0]in d||!d.execScript||d.execScript("var "+a[0]);for(var g;a.length&&(g=a.shift());)a.length||void 0===b?d[g]&&d[g]!==Object.prototype[g]?d=d[g]:d=d[g]={}:d[g]=b}
function m(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
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
function p(a,b,d,g){this.w=a;this.v=b;this.C=void 0===d?"":d;this.a=void 0===g?"":g}p.prototype.N=function(){return this.w};p.prototype.getType=p.prototype.N;p.prototype.I=function(){return this.v};p.prototype.getFunc=p.prototype.I;p.prototype.P=function(){return this.C};p.prototype.getValue=p.prototype.P;p.prototype.getName=function(){return this.a};p.prototype.getName=p.prototype.getName;function q(a){this.a={};this.g=void 0===a?!0:a;this.b=this.c=!1}
q.prototype.f=function(a,b){r(this,new p("cmd",a),b)};q.prototype.addCommand=q.prototype.f;q.prototype.A=function(a,b){r(this,new p("delay",null,a),b)};q.prototype.addDelay=q.prototype.A;q.prototype.clear=function(){this.a["default"]=[]};q.prototype.clear=q.prototype.clear;q.prototype.fa=function(){};q.prototype.setTimerInterval=q.prototype.fa;q.prototype.start=function(){this.c||(this.g=this.c=!0,this.b=!1,t(this))};q.prototype.start=q.prototype.start;
q.prototype.stop=function(a){this.c&&(this.b=this.g=this.c=!1,a&&"function"===typeof a&&a())};q.prototype.stop=q.prototype.stop;q.prototype.B=function(a){a=void 0===a?"default":a;return this.a[a]&&0<this.a[a].length?this.a[a].shift():null};q.prototype.getNext=q.prototype.B;q.prototype.L=function(a){for(var b;b=this.B(a);)if("cmd"==b.w)return b.v;return null};q.prototype.getNextCommand=q.prototype.L;function r(a,b,d){d=void 0===d?"default":d;d in a.a||(a.a[d]=[]);a.a[d].push(b);a.g&&a.start()}
function t(a){if(a.c&&!a.b)if(!("default"in a.a)||0>=a.a["default"].length)a.c=!1;else{var b=a.a["default"].shift(),d=b.w,g=b.C,b=b.v;switch(d){case "cmd":b&&"function"===typeof b&&(a.b=!0,b(g),a.b=!1,t(a));break;case "delay":a.b=!0;setTimeout(function(){this.b=!1;t(this)}.bind(a),g);break;default:console.error("Unknown Stack Type",d)}}};function u(a,b,d){this.name="Runner Framework";this.b=null;this.a="";this.g={};this.l=void 0===b?null:b;this.c=void 0===a?null:a;this.h=void 0===d?null:d;this.j=new q;window.addEventListener("message",this.o.bind(this),!1);this.f("__handshake__",this.m.bind(this));this.f("__start__",this.u.bind(this));this.f("__ping__",this.s.bind(this))}l("cwc.framework.Runner",u);
u.prototype.f=function(a,b,d){d=void 0===d?this.l:d;a?b?this.g[a]=d?b.bind(d):b:console.error("Runner function "+a+" is undefined!"):console.error("Runner command is undefined!")};u.prototype.addCommand=u.prototype.f;u.prototype.i=function(a,b,d){a=a.includes(b);console.log((a?"Enable ":"Disable ")+d+" ...");this.send(d,{enable:a})};u.prototype.enableMonitor=u.prototype.i;
u.prototype.send=function(a,b,d){b=void 0===b?{}:b;d=void 0===d?0:d;this.b&&this.a?d?(this.j.f(function(){this.b.postMessage({command:a,value:b},this.a)}.bind(this)),this.j.A(d)):this.b.postMessage({command:a,value:b},this.a):console.error("Communication channel has not yet been opened")};u.prototype.send=u.prototype.send;u.prototype.ca=function(a){a&&"function"===typeof a&&(this.c=a)};u.prototype.setCallback=u.prototype.ca;u.prototype.da=function(a){a&&"function"===typeof a&&(this.h=a)};
u.prototype.setMonitor=u.prototype.da;u.prototype.F=function(a){a=void 0===a?"":a;console.log("Enable direct update.");this.send("__direct_update__",a)};u.prototype.enableDirectUpdate=u.prototype.F;u.prototype.o=function(a){if(!a)throw Error("Was not able to get browser event!");!this.b&&"source"in a&&(this.b=a.source);!this.a&&"origin"in a&&(this.a=a.origin);var b=a.data.command;a=a.data.value;if(b in this.g)this.g[b](a);else console.error("Command "+b+" is not defined yet")};
u.prototype.m=function(a){this.b&&this.a&&this.send("__handshake__",a)};u.prototype.u=function(){this.h&&(console.log("Initialize monitor ..."),this.h());this.c&&(console.log("Starting program ..."),this.c())};u.prototype.s=function(a){this.send("__pong__",{id:a,time:(new Date).getTime()})};/*
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
function v(a){this.name="mBot Ranger Framework";this.s=this.j=this.g=this.m=this.c=function(){};this.code=function(){a(this)}.bind(this);this.b=a.toString();this.a=new u(this.code,this,this.ba.bind(this));this.u=this.l=this.h=this.o=0;this.a.f("updateTemperatureSensor",this.ia);this.a.f("updateLightnessSensor",this.ga);this.a.f("updateLineFollowerSensor",this.ha);this.a.f("updateUltrasonicSensor",this.D)}l("cwc.framework.makeblock.mBotRanger",v);
v.prototype.ea=function(a,b,d,g,k){this.a.send("setRGBLED",{red:a,green:b,blue:d,index:g||0},k)};v.prototype.setRGBLED=v.prototype.ea;v.prototype.Z=function(a,b,d){this.a.send("playTone",{frequency:a,duration:b},d)};v.prototype.playTone=v.prototype.Z;v.prototype.G=function(){return 0};v.prototype.getButtonValue=v.prototype.G;v.prototype.M=function(){return this.o};v.prototype.getTemperatureSensorValue=v.prototype.M;v.prototype.J=function(){return this.h};v.prototype.getLightnessSensorValue=v.prototype.J;
v.prototype.K=function(){return this.l};v.prototype.getLineFollowerSensorValue=v.prototype.K;v.prototype.O=function(){return this.u};v.prototype.getUltrasonicSensorValue=v.prototype.O;v.prototype.H=function(a){return Math.floor(Math.abs(100/a)/1*1E3+250)};v.prototype.getDelay=v.prototype.H;v.prototype.$=function(a){this.a.send("rotatePower",{power:a})};v.prototype.rotatePower=v.prototype.$;v.prototype.aa=function(a,b){this.a.send("rotatePower",{power:b},a);this.a.send("rotatePower",{power:0},100)};
v.prototype.rotatePowerTime=v.prototype.aa;v.prototype.R=function(a,b){this.a.send("movePower",{power:a,slot:b})};v.prototype.movePower=v.prototype.R;v.prototype.S=function(a,b){this.a.send("movePower",{power:b},a);this.a.send("movePower",{power:0},100)};v.prototype.movePowerTime=v.prototype.S;v.prototype.T=function(a,b){this.a.send("moveSteps",{steps:a,power:b},200)};v.prototype.moveSteps=v.prototype.T;v.prototype.ja=function(a){this.a.send("wait",null,a)};v.prototype.wait=v.prototype.ja;
v.prototype.stop=function(a){this.a.send("stop",null,a)};v.prototype.stop=v.prototype.stop;v.prototype.U=function(){};v.prototype.onButtonChange=v.prototype.U;v.prototype.X=function(a){n(a)&&(this.m=a)};v.prototype.onTemperatureSensorChange=v.prototype.X;v.prototype.V=function(a){n(a)&&(this.g=a)};v.prototype.onLightnessSensorChange=v.prototype.V;v.prototype.W=function(a){n(a)&&(this.j=a)};v.prototype.onLineFollowerSensorChange=v.prototype.W;v.prototype.Y=function(a){n(a)&&(this.s=a)};
v.prototype.onUltrasonicSensorChange=v.prototype.Y;v.prototype.ia=function(a){this.o=a;this.m(a)};v.prototype.ga=function(a){this.h=a;this.g(a.sensor_1,a.sensor_2)};v.prototype.ha=function(a){this.l=a;this.j(a.left,a.right,a.raw)};v.prototype.D=function(a){this.u=a;this.s(a)};
v.prototype.ba=function(){this.a.i(this.b,"mBotRanger.onLineFollowerSensorChange","setLineFollowerMonitor");this.a.i(this.b,"mBotRanger.onLightnessSensorChange","setLightnessMonitor");this.a.i(this.b,"mBotRanger.onTemperatureSensorChange","setTemperatureMonitor");this.a.i(this.b,"mBotRanger.onUltrasonicSensorChange","setUltrasonicMonitor")};
