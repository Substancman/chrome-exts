// Compiled by ClojureScript 0.0-2913 {}
goog.provide('tunnelbear.background.proxy');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cemerick.url');
goog.require('clojure.set');
goog.require('weasel.repl');
goog.require('tunnelbear.background.browser');
goog.require('tunnelbear.common.logger');
tunnelbear.background.proxy.last_servers = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
tunnelbear.background.proxy.log = (function log(level,param){
return tunnelbear.common.logger.log.call(null,level,[cljs.core.str("[Proxy] "),cljs.core.str(param)].join(''));
});
tunnelbear.background.proxy.should_reset = (function should_reset(servers){
return !(cljs.core.not_any_QMARK_.call(null,(function (p1__24328_SHARP_){
return cljs.core._EQ_.call(null,p1__24328_SHARP_,false);
}),cljs.core.map.call(null,(function (p1__24329_SHARP_){
if((cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([p1__24329_SHARP_], true),cljs.core.deref.call(null,tunnelbear.background.proxy.last_servers)) == null)){
return false;
} else {
return true;
}
}),servers)));
});
tunnelbear.background.proxy.proxy_all = (function proxy_all(enabled_QMARK_,servers){
if(cljs.core.truth_(enabled_QMARK_)){
if(cljs.core.not_EQ_.call(null,null,chrome.privacy.network.webRTCMultipleRoutesEnabled)){
chrome.privacy.network.webRTCMultipleRoutesEnabled.set(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),false], null)));
} else {
}

if(cljs.core.not_EQ_.call(null,null,chrome.privacy.network.webRTCNonProxiedUdpEnabled)){
chrome.privacy.network.webRTCNonProxiedUdpEnabled.set(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),false], null)));
} else {
}

if(cljs.core.not_EQ_.call(null,null,chrome.privacy.network.webRTCIPHandlingPolicy)){
chrome.privacy.network.webRTCIPHandlingPolicy.set(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"disable_non_proxied_udp"], null)));
} else {
}
} else {
tunnelbear.background.proxy.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),"[Background - Proxy] : Disabling");

if(cljs.core.not_EQ_.call(null,null,chrome.privacy.network.webRTCMultipleRoutesEnabled)){
chrome.privacy.network.webRTCMultipleRoutesEnabled.set(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null)));
} else {
}

if(cljs.core.not_EQ_.call(null,null,chrome.privacy.network.webRTCNonProxiedUdpEnabled)){
chrome.privacy.network.webRTCNonProxiedUdpEnabled.set(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null)));
} else {
}

if(cljs.core.not_EQ_.call(null,null,chrome.privacy.network.webRTCIPHandlingPolicy)){
chrome.privacy.network.webRTCIPHandlingPolicy.set(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"default"], null)));
} else {
}
}

if(tunnelbear.background.proxy.should_reset.call(null,servers)){
cljs.core.reset_BANG_.call(null,tunnelbear.background.proxy.last_servers,servers);
} else {
}

return tunnelbear.background.browser.set_proxy.call(null,enabled_QMARK_,cljs.core.deref.call(null,tunnelbear.background.proxy.last_servers));
});
tunnelbear.background.proxy.eval_proxy = (function eval_proxy(callback){
return tunnelbear.background.browser.eval_proxy.call(null,callback);
});
chrome.proxy.onProxyError.addListener((function (err){
tunnelbear.background.proxy.log.call(null,new cljs.core.Keyword(null,"WARN","WARN",-1091130621),[cljs.core.str("proxy error"),cljs.core.str(cljs.core.js__GT_clj.call(null,cljs.core.deref.call(null,tunnelbear.background.proxy.last_servers),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))].join(''));

return tunnelbear.background.proxy.log.call(null,new cljs.core.Keyword(null,"WARN","WARN",-1091130621),[cljs.core.str(cljs.core.js__GT_clj.call(null,err,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))].join(''));
}));
