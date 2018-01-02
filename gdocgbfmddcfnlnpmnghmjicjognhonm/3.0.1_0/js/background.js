var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.checkStringArgs=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,b,c,d){if(b){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};
$jscomp.polyfill("String.prototype.endsWith",function(a){return a?a:function(a,c){var b=$jscomp.checkStringArgs(this,a,"endsWith");a+="";void 0===c&&(c=b.length);c=Math.max(0,Math.min(c|0,b.length));for(var e=a.length;0<e&&0<c;)if(b[--c]!=a[--e])return!1;return 0>=e}},"es6","es3");var _self=this,_debug=!1,_debug_local=_debug&&!0,DEFAULT_PROXY_PORT=443;_debug_local&&(DEFAULT_PROXY_PORT=8888);var AGENT_PORT=3333;_self.agentPort=AGENT_PORT;_self.agentMode=!1;
var MAC_ID="mac_id",PROXY_ENABLED="proxy_enabled",PROXY_SETTINGS="proxy_settings",SERVERS_LIST="servers_list",SERVERS_BANNED="servers_banned",USER_DATA="user_data",USER_AGENT_SEPARATOR="   ",TIMEOUT=6E3,TESTUSER="*testuser",DEFAULT_SERVERS_LIST=[{ip:"192.95.39.46",domain:"s1.gcloud.bidbex.com",name:"CA public Montreal 01",serverName:"1",open:!0,load:0,country:"ca",group:"1",flag:"ca"},{ip:"167.114.112.102",domain:"s28.gcloud.bidbex.com",name:"CA public Montreal 02",serverName:"2",open:!0,load:0,country:"ca",
group:"1",flag:"ca"},{ip:"149.202.98.184",domain:"s37.gcloud.bidbex.com",name:"DE public Munich 01",serverName:"3",open:!0,load:0,country:"de",group:"1",flag:"de"},{ip:"192.99.41.188",domain:"s2.gcloud.bidbex.com",name:"CA public Montreal 03",serverName:"4",open:!0,load:0,country:"ca",group:"1",flag:"ca"},{ip:"167.114.130.126",domain:"s29.gcloud.bidbex.com",name:"CA public Montreal 04",serverName:"5",open:!0,load:0,country:"ca",group:"1",flag:"ca"},{ip:"192.95.16.215",domain:"s3.gcloud.bidbex.com",
name:"CA public Montreal 05",serverName:"6",open:!0,load:0,country:"us",group:"1",flag:"ca"},{ip:"167.114.170.74",domain:"s30.gcloud.bidbex.com",name:"CA public Montreal 06",serverName:"7",open:!0,load:0,country:"ca",group:"1",flag:"ca"},{ip:"149.202.98.185",domain:"s38.gcloud.bidbex.com",name:"DE public Munich 02",serverName:"3",open:!0,load:0,country:"de",group:"1",flag:"de"},{ip:"192.95.4.127",domain:"s11.gcloud.bidbex.com",name:"CA login Montreal 01",serverName:"8",open:!0,load:0,country:"ca",
group:"1",flag:"ca"},{ip:"192.95.12.102",domain:"s34.gcloud.bidbex.com",name:"CA login Montreal 02",serverName:"9",open:!0,load:0,country:"ca",group:"1",flag:"ca"},{ip:"149.202.98.229",domain:"s43.gcloud.bidbex.com",name:"DE login Munich 01",serverName:"10",open:!0,load:0,country:"de",group:"1",flag:"de"}];_debug&&(DEFAULT_SERVERS_LIST=[]);
var DEFAULT_PROXY_SETTINGS={pacFile:"http://wpad/wpad.dat"},NO_PROXY_DB_SERVERS=["https://server4.kproxy.com/api_kpa_userservers.jsp","https://hidedoor.com/api_kpa_userservers.jsp","https://server7.kproxy.com/api_kpa_userservers.jsp","https://server1.kproxy.com/api_kpa_userservers.jsp"];_debug_local?NO_PROXY_DB_SERVERS=["http://localhost:8080/kproxy/api_kpa_userservers.jsp"]:_debug&&(NO_PROXY_DB_SERVERS=["http://cdn5.bmucdn.com:8080/api_kpa_userservers.jsp"]);
var PROXY_DB_SERVERS="http://kproxy.local/servers.request",LAUNCH_AUTH="http://kproxy.local/challenge.request",COOKIE_DATA={url:"http://kproxy.com",name:"KP_DAT2__"},CHALLENGE_ID="KPSB-Challenge";_self.kproxyStarted=!1;_self.defaultServersRemoved=!1;_self.serverSearchFailed=!1;_self.waitingFor407=!1;_self.user={};_self.user.login=null;_self.user.passwd=null;_self.user.pro=!1;_self.user.transfer=0;_self.user.time=0;_self.user.credits=0;_self.user.maxTime=0;_self.user.maxTransfer=0;_self.servers=null;
_self.serversBanned=[];_self.currentServer=null;_self.proxySettings=null;_self.tryingServer=null;_self.searchStarted=!1;_self.cancelSearchFlag=!1;_self.listenPort=AGENT_PORT;_self.groupFilter=null;_self.loginPass={};_self.cookieData=null;_self.mac="_chromeapp_3_"+new Date;_self.proxyLoginTested=!0;_self.proxyLogin=null;_self.proxyPass=null;init();
function checkKProxyAgentInstalled(a){sendAgentMessage({id:"ping"},function(){_self.agentMode=!0;enableLocalProxy("127.0.0.1",AGENT_PORT,function(){fillLoginPass(a)})},function(){_self.agentMode=!1;a()})}
function init(){getMac();captureRequests();listenCookie();loadObject(SERVERS_BANNED,function(a){null!=a&&(_self.serversBanned=a)});loadObject(PROXY_ENABLED,function(a){loadObject(SERVERS_LIST,function(b){b&&b.servers&&0<b.servers.length?(_self.user=b.user,_self.servers=b.servers,_debug&&(_self.servers=DEFAULT_SERVERS_LIST),_self.defaultServersRemoved=!0):_self.servers=DEFAULT_SERVERS_LIST;fillLoginPass();loadObject(PROXY_SETTINGS,function(a){_self.proxySettings=a;null==_self.proxySettings&&(_self.proxySettings=
DEFAULT_PROXY_SETTINGS)});a?startKProxyAgent(function(){reloadServers(function(a){a&&setIcon("")})}):stopKProxyAgent()})})}var WAIT_TAB_TIMEOUT=5E3;_self.lastCheckAccessFail=0;function checkShowWaitTab(){var a=Date.now();if(a-_self.lastCheckAccessFail<WAIT_TAB_TIMEOUT)return!1;_self.lastCheckAccessFail=a;return!0}function getMac(){loadObject(MAC_ID,function(a){a?_self.mac=a:saveObject(MAC_ID,_self.mac)})}
function listenCookie(){chrome.cookies.onChanged.addListener(function(a){_self.kproxyStarted&&-1!=a.cookie.domain.endsWith("kproxy.com")&&a.cookie.name==COOKIE_DATA.name&&(a.removed?"overwrite"!=a.cause&&(_self.cookieData=null):(_self.cookieData=a.value,null!=_self.user.login&&0!=_self.user.login.length||fillLoginPass()))});loadKProxyCookie()}function loadKProxyCookie(a){null!=_self.user.login?a():chrome.cookies.get(COOKIE_DATA,function(b){b?(_self.cookieData=b.value,fillLoginPass(a)):a&&a()})}
function captureRequests(){chrome.webRequest.onAuthRequired.addListener(function(a){a=a.statusLine;if(_self.kproxyStarted&&-1<a.indexOf("KPSB-Challenge")){var b=a.indexOf(CHALLENGE_ID);-1<b&&(a=a.substring(b+CHALLENGE_ID.length));if(-1!=a.indexOf("Login"))return{authCredentials:{username:_self.loginPass.login,password:_self.loginPass.pass}};checkShowWaitTab()&&(_self.lastCheckAccessFail=0,-1<a.indexOf("PassError")?openUniqueTabNoPopup("http://kproxy.com/kpextensionlogin.jsp"):-1<a.indexOf("Wait")&&
openUniqueTabNoPopup(chrome.extension.getURL("access_error.html")));return{cancel:!0}}},{urls:["<all_urls>"]},["blocking"]);chrome.webRequest.onCompleted.addListener(function(a){_self.kproxyStarted&&(-1<a.statusLine.indexOf("402 KProxy Wait a moment")?openUniqueTabNoPopup(chrome.extension.getURL("access_error.html")):-1<a.statusLine.indexOf("403 KProxy Login Forbidden")&&openUniqueTabNoPopup("http://kproxy.com/kpextensionlogin.jsp"))},{urls:["<all_urls>"]})}
function openTab(a,b){chrome.tabs.create({url:a},function(a){b&&b(a,!0)})}function getTab(a,b){var c=!1;chrome.tabs.query({lastFocusedWindow:!0},function(d){for(var e=null,f=0;f<d.length;f++){if(0==d[f].url.indexOf("chrome-devtools://"))return;-1<d[f].url.indexOf(a)&&(e=d[f]);d[f].active&&(-1<d[f].url.indexOf("kproxy.com")||-1<d[f].url.indexOf("paypal"))&&(c=!0)}b(e,c)})}
function openUniqueTabNoPopup(a,b){checkShowWaitTab()&&0==chrome.extension.getViews({type:"popup"}).length&&openUniqueTab(a,b)}function openUniqueTab(a,b){getTab(a,function(c,d){d||(c?(c.active||chrome.tabs.update(c.id,{active:!0}),b&&b(c,!1)):openTab(a,b))})}function closeTab(a){chrome.tabs.query({},function(b){for(var c=0;c<b.length;c++)-1<b[c].url.indexOf(a)&&chrome.tabs.remove(b[c].id)})}
function kproxyAgentStarted(a){setIcon("warning");saveObject(PROXY_ENABLED,!0);_self.kproxyStarted=!0;a&&a()}function kproxyAgentStopped(){saveObject(PROXY_ENABLED,!1);setIcon("off");_self.kproxyStarted=!1;_self.currentServer=null;_self.waitingFor407=!1;_self.searchStarted=!1}function encodeBase64(a){return window.btoa(a)}function decodeBase64(a){return window.atob(a)}
var startKProxyAgent=function(a){_self.kproxyStarted||kproxyAgentStarted();a()},stopKProxyAgentSignal=function(a){_self.searchStarted&&(_self.cancelSearchFlag=!0,_self.tryingServer=null,_self.searchStarted=!1);stopKProxyAgent(a)},isLocalProxyEnabled=function(a){isFirefox()?a(bFirefoxRegisteredPac):chrome.proxy.settings.get({incognito:!1},function(b){null==b||"controlled_by_this_extension"==b.levelOfControl?a(!0):a(!1)})},isFirefox=function(){try{return browser&&browser.proxy&&browser.proxy.register}catch(a){return!1}},
enableLocalProxy=function(a,b,c){isFirefox()?enableLocalProxyFirefox(a,b,c):enableLocalProxyChrome(a,b,c)},bFirefoxRegisteredPac=!1,firefoxProxyListener=null,enableLocalProxyFirefox=function(a,b,c){var d="https";443!=b&&(d="http");var e=d.toUpperCase()+" "+a+":"+b;bFirefoxRegisteredPac?(browser.runtime.sendMessage(e,{toProxyScript:!0}),setTimeout(function(){c()},100)):(bFirefoxRegisteredPac=!0,browser.proxy.onProxyError.addListener(function(a){console.error("Proxy error: "+a)}),browser.proxy.register("js/pac.js"),
firefoxProxyListener=function(a){"init"==a&&(browser.runtime.sendMessage(e,{toProxyScript:!0}),setTimeout(function(){c()},100))},browser.runtime.onMessage.addListener(firefoxProxyListener))},enableLocalProxyChrome=function(a,b,c){var d="https";443!=b&&(d="http");chrome.proxy.settings.set({scope:"regular",value:{mode:"fixed_servers",rules:{singleProxy:{scheme:d,host:a,port:b},bypassList:["localhost","127.0.0.1","*paypal.com","*paypalobjects.com"]}}},function(){c&&c()})},disableLocalProxy=function(a){isFirefox()?
disableLocalProxyFirefox(a):disableLocalProxyChrome(a)},disableLocalProxyFirefox=function(a){if(bFirefoxRegisteredPac)try{firefoxProxyListener&&(browser.runtime.onMessage.removeListener(firefoxProxyListener),firefoxProxyListener=null),browser.proxy.unregister(),bFirefoxRegisteredPac=!1,a()}catch(b){browser.runtime.sendMessage("DIRECT",{toProxyScript:!0}),a()}},disableLocalProxyChrome=function(a){chrome.proxy.settings.clear({scope:"regular"},function(){a&&a()})},stopKProxyAgent=function(a){isLocalProxyEnabled(function(b){b?
disableLocalProxy(function(){kproxyAgentStopped();a&&a()}):(kproxyAgentStopped(),a&&a())})};function loadObject(a,b){chrome.storage.local.get(a,function(c){c[a]?b(c[a]):b(null)})}function saveObject(a,b){var c={};c[a]=b;chrome.storage.local.set(c,function(){loadObject(a,function(a){})})}
var saveServers=function(a,b){_self.servers=a;var c={};c.servers=a;null!=b?(_self.user.pro=b.pro,_self.user.credits=b.credits,_self.user.transfer=b.transfer,_self.user.time=b.time,_self.user.maxTransfer=b.maxTransfer,_self.user.maxTime=b.maxTime,_self.user.login=b.login,_self.user.passwd=b.passwd):(_self.user.pro=!1,_self.user.credits=0,_self.user.login=null,_self.user.passwd=null);c.user=_self.user;_self.defaultServersRemoved=!0;saveObject(SERVERS_LIST,c)};
function connectToAnyServer(a,b){var c=a.selectServer();null==c?b(!1):connectTo(c,function(c){c?b(!0):connectToAnyServer(a,b)})}function setIcon(a){""==a?(chrome.browserAction.setIcon({path:"img/icon.png"}),chrome.browserAction.setTitle({title:"KProxy Extension: Connected to "+_self.currentServer.name})):(chrome.browserAction.setIcon({path:"img/icon_"+a+".png"}),chrome.browserAction.setTitle({title:"KProxy Extension: OFF"}))}
function changeServer(a,b){_self.agentMode?sendAgentMessage({id:"changeServer",server:a.domain},b):enableLocalProxy(a.domain,DEFAULT_PROXY_PORT,b)}
var connectTo=function(a,b,c,d){d||(d=TIMEOUT);_self.cancelSearchFlag=!1;_self.tryingServer=a;_self.currentServer=null;setIcon("warning");startKProxyAgent(function(){for(var e=!1,f=0;f<_self.servers.length;f++)if(a.name==_self.servers[f].name){e=!0;changeServer(a,function(){$.ajax({type:"GET",url:"http://kproxy.local/ping.request",timeout:d,contentType:"application/json; charset=utf-8",dataType:"json",success:function(c){_self.cancelSearchFlag?(_self.cancelSearchFlag=!1,_self.tryingServer=null,_self.searchStarted=
!1):c.reply?(_self.currentServer=a,_self.serverSearchFailed=!1,_self.tryingServer=null,setIcon(""),b(!0)):b(!1)},error:function(d){_self.cancelSearchFlag?(_self.cancelSearchFlag=!1,_self.tryingServer=null,_self.searchStarted=!1):407==d.status?(_self.currentServer=a,_self.serverSearchFailed=!1,_self.tryingServer=null,_self.waitingFor407=!0,launchProxyAuth()):_self.waitingFor407||(_self.currentServer=null,c&&(_self.tryingServer=null),b(!1))},complete:function(){}})});break}e||b(!1)})},callProxyAuthCallback=
function(){setTimeout(function(){_self.waitingFor407&&(_self.waitingFor407=!1,searchServers(null,function(a){a&&setIcon("")}));closeTab("proxy_auth.html")},100)},launchProxyAuth=function(a){_self.tryingServer=null;_self.waitingFor407=!0;openUniqueTab("proxy_auth.html")},searchServers=function(a,b,c){_self.cancelSearchFlag?(_self.cancelSearchFlag=!1,_self.tryingServer=null,_self.searchStarted=!1):(null==_self.tryingServer&&(_self.tryingServer=""),_self.serverSearchFailed=!1,_self.searchStarted=!0,
null==_self.currentServer||_self.groupFilter&&_self.currentServer.group!=_self.groupFilter?(null==a&&(a=new ServerSelector(_self.servers,_self.serversBanned,_self.groupFilter,_self)),_self.currentServer=a.selectServer(),null==_self.currentServer?c?(_self.serverSearchFailed=!0,_self.tryingServer=null,_self.searchStarted=!1,b(!1)):stopKProxyAgent(function(){searchServersWithPublicAddresses(0,b)}):connectTo(_self.currentServer,function(d){d&&c?(_self.tryingServer=null,_self.searchStarted=!1,b(!0)):_self.searchServers(a,
b,c)})):loadServers(function(d){d?(_self.tryingServer=null,_self.searchStarted=!1,setIcon(""),b(!0)):(_self.currentServer=null,setIcon("warning"),_self.searchServers(a,b,c))},!0))},loadServers=function(a,b){!b&&_self.agentMode?sendAgentMessage({id:"getServer"},function(b){if(b.server){_self.user.login=b.login+_self.mac;_self.user.passwd=b.passwd;b.login==TESTUSER&&doLogoutOnWeb();for(var c=0;c<_self.servers.length;c++){var e=_self.servers[c];if(b.server==e.domain){_self.currentServer=e;break}}}else _self.currentServer=
null;null==_self.currentServer?a(!1):loadServersImpl(a)}):null==_self.currentServer?a(!1):loadServersImpl(a)};
function loadServersImpl(a){var b=null;b=PROXY_DB_SERVERS;$.ajax({type:"GET",url:b,timeout:1E4,contentType:"application/json; charset=utf-8",dataType:"json",success:function(b){if(_self.cancelSearchFlag)_self.cancelSearchFlag=!1,_self.tryingServer=null,_self.searchStarted=!1;else if(b.data&&(b=b.data[0]),b.error)a(!1);else if(b.servers){var c=b.servers;b.loginError?(_self.user.login=null,_self.user.passwd=null,fillLoginPass(),_self.user.pro=!1,_self.saveServers(c,null)):_self.saveServers(c,b.user);
a(!0)}else a(!1)},error:function(b){_self.cancelSearchFlag?(_self.cancelSearchFlag=!1,_self.tryingServer=null,_self.searchStarted=!1):a(!1)},complete:function(){}})}function reloadServers(a){_self.serverSearchFailed=!1;loadKProxyCookie(function(){checkKProxyAgentInstalled(function(){searchServers(null,function(b){b?a(b):stopKProxyAgent(function(){a(b)})})})})}function reloadServersFromCurrent(a){loadKProxyCookie(function(){loadServers(a)})}
function searchServersWithPublicAddresses(a,b){null==a&&(a=0);if(a>=NO_PROXY_DB_SERVERS.length)_self.serverSearchFailed=!0,_self.tryingServer=null,_self.searchStarted=!1,b(!1);else{var c=null;c={};c.userLogin=_self.user.login;c.userPassword=_self.user.passwd;c=NO_PROXY_DB_SERVERS[a++]+"?data="+escape(JSON.stringify(c));$.ajax({type:"GET",url:c,timeout:TIMEOUT,contentType:"application/json; charset=utf-8",dataType:"json",success:function(c){_self.cancelSearchFlag?(_self.cancelSearchFlag=!1,_self.tryingServer=
null,_self.searchStarted=!1):(c.data&&(c=c.data[0]),c.error?searchServersWithPublicAddresses(a,b):(_self.saveServers(c.servers,c.user),searchServers(null,b,!0)))},error:function(c){_self.cancelSearchFlag?(_self.cancelSearchFlag=!1,_self.tryingServer=null,_self.searchStarted=!1):407==c.status?launchProxyAuth():searchServersWithPublicAddresses(a,b)},complete:function(){}})}}
var login=function(a,b,c){_self.user.pro=!1;var d=""==a||null==a;d&&doLogoutOnWeb();_self.user.login=a;_self.user.passwd=b;fillLoginPass(function(){$.ajax({type:"GET",url:LAUNCH_AUTH+"?id="+Math.random()+"&source=agent",timeout:TIMEOUT,success:function(a){doLoginImpl(c)},error:function(a){_self.user.login=null;_self.user.passwd=null;_self.user.pro=!1;fillLoginPass();d&&_self.saveServers(_self.servers,null);403==a.status?c(!0,!0):c(d)},complete:function(){}})})};
function doLoginImpl(a){$.ajax({type:"GET",url:PROXY_DB_SERVERS,timeout:TIMEOUT,contentType:"application/json; charset=utf-8",dataType:"json",success:function(b){b.data&&(b=b.data[0]);b.error||b.loginError?(bLogout&&_self.saveServers(b.servers,null),a(!0,!0)):(_self.saveServers(b.servers,b.user),a(!0))},error:function(b){_self.user.login=null;_self.user.passwd=null;_self.user.pro=!1;fillLoginPass();bLogout&&_self.saveServers(_self.servers,null);a(bLogout)},complete:function(){}})}
function doLogoutOnWeb(){chrome.cookies.remove(COOKIE_DATA)}
var sendAgentMessage=function(a,b,c){a="http://127.0.0.1:"+AGENT_PORT+"/message.request?data="+escape(JSON.stringify(a));$.ajax({type:"GET",url:a,timeout:3E3,contentType:"application/json; charset=utf-8",dataType:"json",success:function(a){_self.agentMode=!0;b&&b(a)},error:function(a){c?c():b&&b(!1)},complete:function(){}})},fillLoginPass=function(a){var b=_self.user.login,c=_self.user.passwd;null!=b&&0<b.length||(b=_self.cookieData?"*cookie_"+cookieData:TESTUSER,c="");b+=_self.mac;_self.loginPass.login=
b;_self.loginPass.pass=c;_self.agentMode?sendAgentMessage({id:"login",login:b,pass:c},a):a&&a()},banServer=function(a){_self.serversBanned[a]=!0;saveObject(SERVERS_BANNED,_self.serversBanned)},unbanServer=function(a){_self.serversBanned[a]=!1;saveObject(SERVERS_BANNED,_self.serversBanned)};
function ServerSelector(a,b,c){var d=this;d.currentServer=null;d.servers=a;d.index=0;d.group=c;d.selectServer=function(){if(null==d.servers)return null;for(;d.index<d.servers.length;d.index++){var a=d.servers[d.index];if(!(d.group&&a.group!=d.group||null!=d.currentServer&&a.serverName==d.currentServer.serverName)&&a.open&&!b[a.domain]){d.currentServer=a;break}}return d.index>=d.servers.length?null:d.currentServer}};
