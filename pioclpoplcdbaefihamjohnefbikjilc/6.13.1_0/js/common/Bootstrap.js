/*! Copyright 2009-2017 Evernote Corporation. All rights reserved. */

function Bootstrapper(a){"use strict";function b(a){var b=i.trim();""!==b&&(s=[b,b]),u=storeFactory.createDefaultUserStoreClient(s[a]);var e=new Date,f=e.getUTCMonth()+1<=9?"0"+(e.getUTCMonth()+1):(e.getUTCMonth()+1).toString(),g=f+e.getUTCDate().toString()+e.getUTCFullYear().toString(),h=Persistent.get("checkedVersion");h||(h={}),h[g]||(h[g]={});for(var j in h)j!==g&&delete h[j];Persistent.set("checkedVersion",h);var k=parseInt(Persistent.get("deviceID").substr(0,3),16)%1440,l=60*e.getUTCHours()+e.getUTCMinutes();if(r++,(void 0===h[g][s[a]]||null===h[g][s[a]])&&l>=k){h[g][s[a]]=!0,Persistent.set("checkedVersion",h);var m=GlobalUtils.generateSystemInfo(),n="EvernoteClipper/"+Browser.EVERNOTE_VERSION+"; "+m.browser.replace(" ","/")+"; "+m.os.replace(" ","/");u.checkVersion(n,EDAM_VERSION_MAJOR,EDAM_VERSION_MINOR,function(b,c){c&&"number"==typeof c.code&&200!=c.code||(h[g][s[a]]=b,Persistent.set("checkedVersion",h)),d(b,c)}),w&&(v=setTimeout(c,3e3))}else d(void 0===h[g][s[a]]||null===h[g][s[a]]?!0:h[g][s[a]])}function c(){v&&clearTimeout(v),u.getBootstrapInfo(h,e),v=setTimeout(e,3e3)}function d(a,b){b&&("number"==typeof b.code&&200!=b.code?(log.warn("HTTP Error checking version. Assuming OK."),a=!0):log.log("Error checking version: "+JSON.stringify(b))),!0===a?w?c():f(n):(n=!1,alert(Browser.i18n.getMessage("checkVersionWarning")),f(n))}function e(a){if(v&&clearTimeout(v),a&&a.profiles&&a.profiles.length){a=a.profiles;for(var c=0,d=o.getName(),e=0;e<a.length;e++)void 0!==a[e].name&&a[e].name===d&&(c=e);Persistent.set("BootstrapInfoIndex",c),Persistent.set("BootstrapInfo",a)}else{if(!(r>=2))return void b(q);log.error("Couldn't contact either bootstrap server. Using what we've got...")}f(n),m=!1}function f(a){for(var b=l.length-1;b>=0;b--){try{l[b](a)}catch(a){log.error("Error running callback: "+a.message+a.stack)}l.pop()}l=[]}function g(a,c){if(a&&l.push(a),!navigator.onLine)return log.log("Bootstrapping while offline, will use existing info."),void f(n);m||(w=c,b(p),m=!0)}var h=a||navigator.language,i=options.get("overrideServiceURL")||"",j=options.get("simulateSimplifiedChinese"),k=options.get("useStage");options.get("secureProto");j&&(log.log("Will simulate Simplified Chinese."),!0,h="zh-CN");var l=[],m=!1,n=!0,o=new BootstrapInfoStorage,p=0;"zh-CN"===h&&(p=1);var q=p?0:1,r=0,s=["www.evernote.com","app.yinxiang.com"],t=["stage.evernote.com","stage-china.evernote.com"];k&&(s=t);var u,v,w=!0;this.bootstrap=g,Object.preventExtensions(this)}function BootstrapInfoStorage(){function a(a){if("name"==a)return d();if("serviceHost"==a){var b=options.get("overrideServiceURL");if(b&&(b=b.trim()),b)return log.log("Using overidden serviceHost: "+b),b}if(void 0===k[a])return log.error("Invalid Bootstrap Info Key: "+a),!1;var c=e(),f=Persistent.get(j);return f&&f.length>c&&f[c].settings?f[c].settings[a]:k[a]}function b(a){var b="requested host "+a,c=Persistent.get(j);if(c){for(var d=0;d<c.length;d++)if(c[d].settings&&c[d].settings.serviceHost===a)return d;log.warn(b+" not found in the bootstrap data")}else log.warn(b+", but no bootstrap data");return 0}function c(){var a=Persistent.get(j),b=[];return a&&a.forEach(function(a){a.settings&&a.settings.serviceHost&&b.push(a.settings.serviceHost)}),b}function d(){var a=e(),b=Persistent.get(j);return b&&b.length>a&&void 0!==b[a].name?b[a].name:""}function e(){var a=Persistent.get(i);return a||0}function f(a){Persistent.set(i,a),a!==e()&&Persistent.clear("savedAuthInfo")}function g(){var a=Persistent.get(j);return a&&a.length?a.length:0}function h(a){var b=e(),c=Persistent.get(j);if(nextIdx=(b+1)%2,c&&c.length>nextIdx&&c[nextIdx].settings)return c[nextIdx].settings[a]}var i="BootstrapInfoIndex",j="BootstrapInfo",k={serviceHost:"www.evernote.com",marketingUrl:"http://www.evernote.com",supportUrl:"https://support.evernote.com",accountEmailDomain:"www.evernote.com",enableFacebookSharing:!0,enableGiftSubscriptions:!0,enableSharedNotebooks:!0,enableSingleNoteSharing:!0,enableSponsoredAccounts:!0,enableSupportTickets:!0,enableTwitterSharing:!0,enableLinkedInSharing:!0,enableGoogle:!0};this.getIndex=e,this.getHostIndex=b,this.setIndex=f,this.getLength=g,this.get=a,this.getAllHosts=c,this.getNextBootstrapData=h,this.getName=d,Object.preventExtensions(this)}Object.preventExtensions(Bootstrapper),Object.preventExtensions(BootstrapInfoStorage);