'use strict';var p="function"==typeof Object.defineProperties?Object.defineProperty:function(a,d,b){a!=Array.prototype&&a!=Object.prototype&&(a[d]=b.value)},q="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function t(a,d){if(d){var b=q;a=a.split(".");for(var c=0;c<a.length-1;c++){var e=a[c];e in b||(b[e]={});b=b[e]}a=a[a.length-1];c=b[a];d=d(c);d!=c&&null!=d&&p(b,a,{configurable:!0,writable:!0,value:d})}}
t("Object.is",function(a){return a?a:function(a,b){return a===b?0!==a||1/a===1/b:a!==a&&b!==b}});t("String.prototype.includes",function(a){return a?a:function(a,b){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(a,b||0)}});var u=this;
function v(a,d){a=a.split(".");var b=u;a[0]in b||!b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===d?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=d};/*
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
function w(a,d,b,c,e,h){a=game.add.sprite(a,d,b);c&&c.add(a);game.physics.arcade.enable(a);a.checkWorldBounds=!0;a.outOfBoundsKill=!0;a.z=100;e&&h&&(e.includes(".")?(c=e.split("."),a.body[c[0]][c[1]]=h):a.body[e]=h)}v("cwc.framework.Phaser.addGroupSprite",w);
v("cwc.framework.Phaser.VerticalObstacleGenerator",function(a,d,b,c,e,h,n,l,g,k){g=void 0===g?"":g;k=void 0===k?"":k;for(var f=game.rnd.integerInRange(0,b-c-1),x=game.cache.getImage(e).height,m=0;m<b;m++)if(m<f||m>=f+c){var r=e;m==f+c&&n?r=n:m==f-1&&h&&(r=h);w(a,d+m*x,r,l,g,k)}});
v("cwc.framework.Phaser.RandomVerticalObstacleGenerator",function(a,d,b,c,e,h,n,l,g){l=void 0===l?"":l;g=void 0===g?"":g;var k=game.cache.getImage(c).height;b=game.rnd.integerInRange(0,b);"top"===n&&(d-=k);for(var f=1;f<=b;f++)"top"===n?w(a,d+f*k,e&&f===b?e:c,h,l,g):w(a,d-f*k,e&&f===b?e:c,h,l,g)});
