// Compiled by ClojureScript 0.0-2913 {}
goog.provide('tunnelbear.background.browser');
goog.require('cljs.core');
goog.require('goog.Timer');
goog.require('tunnelbear.common.ports');
goog.require('weasel.repl');
goog.require('tunnelbear.common.utils');
goog.require('tunnelbear.background.api');
goog.require('cljs.core.async');
goog.require('tunnelbear.common.logger');
goog.require('clojure.set');
goog.require('goog.events');
goog.require('cemerick.url');
goog.require('clojure.walk');
tunnelbear.background.browser.current_token = cljs.core.atom.call(null,"");
tunnelbear.background.browser.current_proxies = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tunnelbear.background.browser.last_data_allowed = cljs.core.atom.call(null,(0));
tunnelbear.background.browser.register_timer = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tunnelbear.background.browser.low_data_cap = (100);
tunnelbear.background.browser.can_warn_low_data_QMARK_ = cljs.core.atom.call(null,false);
tunnelbear.background.browser.toggle_off_background = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tunnelbear.background.browser.last_error_register = cljs.core.atom.call(null,(0));
tunnelbear.background.browser.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
tunnelbear.background.browser.proxies_string = (function proxies_string(servers){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__24237_SHARP_){
return [cljs.core.str("HTTPS "),cljs.core.str(p1__24237_SHARP_),cljs.core.str(":8080;")].join('');
}),servers));
});

tunnelbear.background.browser.Browser = (function (){var obj24239 = {};
return obj24239;
})();

tunnelbear.background.browser.browser_initialize_pac_script = (function browser_initialize_pac_script(this$){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.tunnelbear$background$browser$Browser$browser_initialize_pac_script$arity$1;
} else {
return and__3969__auto__;
}
})()){
return this$.tunnelbear$background$browser$Browser$browser_initialize_pac_script$arity$1(this$);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (tunnelbear.background.browser.browser_initialize_pac_script[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (tunnelbear.background.browser.browser_initialize_pac_script["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Browser.browser-initialize-pac-script",this$);
}
}
})().call(null,this$);
}
});

tunnelbear.background.browser.browser_reset_proxy = (function browser_reset_proxy(this$){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.tunnelbear$background$browser$Browser$browser_reset_proxy$arity$1;
} else {
return and__3969__auto__;
}
})()){
return this$.tunnelbear$background$browser$Browser$browser_reset_proxy$arity$1(this$);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (tunnelbear.background.browser.browser_reset_proxy[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (tunnelbear.background.browser.browser_reset_proxy["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Browser.browser-reset-proxy",this$);
}
}
})().call(null,this$);
}
});

tunnelbear.background.browser.browser_set_proxy = (function browser_set_proxy(this$,enabled_QMARK_,servers){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.tunnelbear$background$browser$Browser$browser_set_proxy$arity$3;
} else {
return and__3969__auto__;
}
})()){
return this$.tunnelbear$background$browser$Browser$browser_set_proxy$arity$3(this$,enabled_QMARK_,servers);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (tunnelbear.background.browser.browser_set_proxy[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (tunnelbear.background.browser.browser_set_proxy["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Browser.browser-set-proxy",this$);
}
}
})().call(null,this$,enabled_QMARK_,servers);
}
});

tunnelbear.background.browser.browser_eval_proxy = (function browser_eval_proxy(this$,callback){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.tunnelbear$background$browser$Browser$browser_eval_proxy$arity$2;
} else {
return and__3969__auto__;
}
})()){
return this$.tunnelbear$background$browser$Browser$browser_eval_proxy$arity$2(this$,callback);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (tunnelbear.background.browser.browser_eval_proxy[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (tunnelbear.background.browser.browser_eval_proxy["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Browser.browser-eval-proxy",this$);
}
}
})().call(null,this$,callback);
}
});

tunnelbear.background.browser.browser_register_on_auth_listener = (function browser_register_on_auth_listener(this$){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.tunnelbear$background$browser$Browser$browser_register_on_auth_listener$arity$1;
} else {
return and__3969__auto__;
}
})()){
return this$.tunnelbear$background$browser$Browser$browser_register_on_auth_listener$arity$1(this$);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (tunnelbear.background.browser.browser_register_on_auth_listener[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (tunnelbear.background.browser.browser_register_on_auth_listener["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Browser.browser-register-on-auth-listener",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
tunnelbear.background.browser.Firefox = (function (){
})
tunnelbear.background.browser.Firefox.prototype.tunnelbear$background$browser$Browser$ = true;

tunnelbear.background.browser.Firefox.prototype.tunnelbear$background$browser$Browser$browser_initialize_pac_script$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return browser.proxy.register("../proxy/pac.js").then(((function (this$__$1){
return (function (){
return browser.runtime.onMessage.addListener(((function (this$__$1){
return (function (message){
var msg = cljs.core.js__GT_clj.call(null,message,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,msg,new cljs.core.Keyword(null,"command","command",-894540724)),"proxyChanged")){
return tunnelbear.common.utils.test_call.call(null);
} else {
return null;
}
});})(this$__$1))
);
});})(this$__$1))
);
});

tunnelbear.background.browser.Firefox.prototype.tunnelbear$background$browser$Browser$browser_reset_proxy$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return browser.runtime.sendMessage(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),"setProxy",new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toProxyScript","toProxyScript",1413546381),true], null)));
});

tunnelbear.background.browser.Firefox.prototype.tunnelbear$background$browser$Browser$browser_set_proxy$arity$3 = (function (this$,enabled_QMARK_,servers){
var self__ = this;
var this$__$1 = this;
return browser.runtime.sendMessage(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",-894540724),"setProxy",new cljs.core.Keyword(null,"enabled","enabled",1195909756),enabled_QMARK_,new cljs.core.Keyword(null,"proxyString","proxyString",-751228447),tunnelbear.background.browser.proxies_string.call(null,servers),new cljs.core.Keyword(null,"pacDate","pacDate",1410902695),(new Date()).getTime()], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toProxyScript","toProxyScript",1413546381),true], null)));
});

tunnelbear.background.browser.Firefox.prototype.tunnelbear$background$browser$Browser$browser_eval_proxy$arity$2 = (function (this$,callback){
var self__ = this;
var this$__$1 = this;
return callback.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),false,new cljs.core.Keyword(null,"details","details",1956795411),""], null));
});

tunnelbear.background.browser.Firefox.prototype.tunnelbear$background$browser$Browser$browser_register_on_auth_listener$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return browser.webRequest.onAuthRequired.addListener(((function (this$__$1){
return (function (details){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("---- onAuthRequired ---")].join(''));

var details__$1 = clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,details));
var proxy = cljs.core.get_in.call(null,details__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"challenger","challenger",982627408),new cljs.core.Keyword(null,"host","host",-1558485167)], null));
var tabId = new cljs.core.Keyword(null,"tabId","tabId",-583425174).cljs$core$IFn$_invoke$arity$1(details__$1);
var url = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(details__$1);
var request_id = new cljs.core.Keyword(null,"requestId","requestId",1929208145).cljs$core$IFn$_invoke$arity$1(details__$1);
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),[cljs.core.str("onAuthRequired for proxy: "),cljs.core.str(proxy)].join(''));

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,tunnelbear.background.browser.pending_requests),request_id)){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"WARN","WARN",-1091130621),[cljs.core.str("Bad credentials for: "),cljs.core.str(request_id)].join(''));

return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cancel","cancel",-1964088360),true], null));
} else {
if((proxy.indexOf("lazerpenguin.com") > (0))){
var promise = (new Promise(((function (details__$1,proxy,tabId,url,request_id,this$__$1){
return (function (fulfill,reject){
return tunnelbear.background.browser.get_token.call(null,tabId,proxy,((function (details__$1,proxy,tabId,url,request_id,this$__$1){
return (function (p1__24240_SHARP_){
return fulfill.call(null,p1__24240_SHARP_);
});})(details__$1,proxy,tabId,url,request_id,this$__$1))
);
});})(details__$1,proxy,tabId,url,request_id,this$__$1))
));
cljs.core.swap_BANG_.call(null,tunnelbear.background.browser.pending_requests,cljs.core.conj,request_id);

return promise;
} else {
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cancel","cancel",-1964088360),true], null));

}
}
});})(this$__$1))
,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"urls","urls",-190753757),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<all_urls>"], null)], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["blocking"], null)));
});

tunnelbear.background.browser.Firefox.cljs$lang$type = true;

tunnelbear.background.browser.Firefox.cljs$lang$ctorStr = "tunnelbear.background.browser/Firefox";

tunnelbear.background.browser.Firefox.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"tunnelbear.background.browser/Firefox");
});

tunnelbear.background.browser.__GT_Firefox = (function __GT_Firefox(){
return (new tunnelbear.background.browser.Firefox());
});


/**
* @constructor
*/
tunnelbear.background.browser.Chrome = (function (){
})
tunnelbear.background.browser.Chrome.prototype.tunnelbear$background$browser$Browser$ = true;

tunnelbear.background.browser.Chrome.prototype.tunnelbear$background$browser$Browser$browser_initialize_pac_script$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

tunnelbear.background.browser.Chrome.prototype.tunnelbear$background$browser$Browser$browser_reset_proxy$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return chrome.proxy.settings.set(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"direct"], null),new cljs.core.Keyword(null,"scope","scope",-439358418),"regular"], null)),((function (this$__$1){
return (function (p1__24241_SHARP_){
return tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),p1__24241_SHARP_);
});})(this$__$1))
);
});

tunnelbear.background.browser.Chrome.prototype.tunnelbear$background$browser$Browser$browser_set_proxy$arity$3 = (function (this$,enabled_QMARK_,servers){
var self__ = this;
var this$__$1 = this;
var proxies_string = tunnelbear.background.browser.proxies_string.call(null,servers);
var pac = [cljs.core.str("\n            var pac_date = "),cljs.core.str((new Date()).getTime()),cljs.core.str(";\n\n            function FindProxyForURL(url, host) {\n            var diff = new Date().getTime() - pac_date;\n            var seconds = diff / 1000;\n            if(seconds > 4) {\n              return 'DIRECT';\n            }\n            if (dnsDomainIs(host, 'api.tunnelbear.com')) {\n              return 'DIRECT';\n            }\n            if (dnsDomainIs(host, 'localhost')) {\n              return 'DIRECT';\n            }\n            if(shExpMatch(host, '127.0.0.1')){\n              return 'DIRECT';\n            }\n            return '"),cljs.core.str(((cljs.core._EQ_.call(null,enabled_QMARK_,true))?proxies_string:"DIRECT")),cljs.core.str("';\n            }")].join('');
return chrome.proxy.settings.set(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),"pac_script",new cljs.core.Keyword(null,"pacScript","pacScript",-2139126047),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),pac], null)], null),new cljs.core.Keyword(null,"scope","scope",-439358418),"regular"], null)),null);
});

tunnelbear.background.browser.Chrome.prototype.tunnelbear$background$browser$Browser$browser_eval_proxy$arity$2 = (function (this$,callback){
var self__ = this;
var this$__$1 = this;
return chrome.proxy.settings.get(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"incognito","incognito",-2057377739),false], null)),((function (this$__$1){
return (function (config){
var levelOfControl = new cljs.core.Keyword(null,"levelOfControl","levelOfControl",1486042669).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,config,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var hasPermissions_QMARK_ = (((cljs.core._EQ_.call(null,levelOfControl,"controlled_by_other_extensions")) || (cljs.core._EQ_.call(null,levelOfControl,"not_controllable")))?false:true);
if(hasPermissions_QMARK_){
return callback.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),false,new cljs.core.Keyword(null,"details","details",1956795411),""], null));
} else {
return chrome.management.getAll(((function (levelOfControl,hasPermissions_QMARK_,this$__$1){
return (function (result){
var apps = cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var appid = chrome.runtime.id;
var culprits = cljs.core.filter.call(null,((function (apps,appid,levelOfControl,hasPermissions_QMARK_,this$__$1){
return (function (p1__24242_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["proxy",null], null), null),new cljs.core.Keyword(null,"permissions","permissions",67803075).cljs$core$IFn$_invoke$arity$1(p1__24242_SHARP_));
});})(apps,appid,levelOfControl,hasPermissions_QMARK_,this$__$1))
,apps);
var culprit = cljs.core.first.call(null,cljs.core.filter.call(null,((function (apps,appid,culprits,levelOfControl,hasPermissions_QMARK_,this$__$1){
return (function (p1__24243_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__24243_SHARP_),appid);
});})(apps,appid,culprits,levelOfControl,hasPermissions_QMARK_,this$__$1))
,culprits));
var icon_16 = ((cljs.core.not_EQ_.call(null,null,new cljs.core.Keyword(null,"icons","icons",-297140977).cljs$core$IFn$_invoke$arity$1(culprit).call(null,(0))))?new cljs.core.Keyword(null,"icons","icons",-297140977).cljs$core$IFn$_invoke$arity$1(culprit).call(null,(0)):"");
var icon_32 = ((cljs.core.not_EQ_.call(null,null,new cljs.core.Keyword(null,"icons","icons",-297140977).cljs$core$IFn$_invoke$arity$1(culprit).call(null,(1))))?new cljs.core.Keyword(null,"icons","icons",-297140977).cljs$core$IFn$_invoke$arity$1(culprit).call(null,(1)):icon_16);
var isRetina_QMARK_ = (((window.devicePixelRatio > (1)))?true:false);
var icon = ((isRetina_QMARK_)?icon_32:icon_16);
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),culprit);

return callback.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),true,new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"shortName","shortName",-193714575).cljs$core$IFn$_invoke$arity$1(culprit),new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null));
});})(levelOfControl,hasPermissions_QMARK_,this$__$1))
);
}
});})(this$__$1))
);
});

tunnelbear.background.browser.Chrome.prototype.tunnelbear$background$browser$Browser$browser_register_on_auth_listener$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return chrome.webRequest.onAuthRequired.addListener(((function (this$__$1){
return (function (details,callback){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("---- onAuthRequired ---")].join(''));

var details__$1 = clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,details));
var proxy = cljs.core.get_in.call(null,details__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"challenger","challenger",982627408),new cljs.core.Keyword(null,"host","host",-1558485167)], null));
var tabId = new cljs.core.Keyword(null,"tabId","tabId",-583425174).cljs$core$IFn$_invoke$arity$1(details__$1);
var url = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(details__$1);
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),[cljs.core.str("onAuthRequired for proxy: "),cljs.core.str(proxy)].join(''));

if((proxy.indexOf("lazerpenguin.com") > (0))){
return tunnelbear.background.browser.get_token.call(null,tabId,proxy,callback);
} else {
return callback(cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY));
}
});})(this$__$1))
,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"urls","urls",-190753757),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<all_urls>"], null)], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["asyncBlocking"], null)));
});

tunnelbear.background.browser.Chrome.cljs$lang$type = true;

tunnelbear.background.browser.Chrome.cljs$lang$ctorStr = "tunnelbear.background.browser/Chrome";

tunnelbear.background.browser.Chrome.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"tunnelbear.background.browser/Chrome");
});

tunnelbear.background.browser.__GT_Chrome = (function __GT_Chrome(){
return (new tunnelbear.background.browser.Chrome());
});

tunnelbear.background.browser.which_browser = ((cljs.core._EQ_.call(null,tunnelbear.common.utils.get_browser,new cljs.core.Keyword(null,"FIREFOX","FIREFOX",-1393123879)))?cljs.core.atom.call(null,(new tunnelbear.background.browser.Firefox())):cljs.core.atom.call(null,(new tunnelbear.background.browser.Chrome())));
tunnelbear.background.browser.log = (function log(level,param){
return tunnelbear.common.logger.log.call(null,level,[cljs.core.str("[BROWSER] "),cljs.core.str(param)].join(''));
});
tunnelbear.background.browser.set_extension_icon = (function set_extension_icon(file){
var icon = [cljs.core.str("../images/"),cljs.core.str(file),cljs.core.str(".png")].join('');
var icon_retina = [cljs.core.str("../images/"),cljs.core.str(file),cljs.core.str("2x.png")].join('');
return chrome.browserAction.setIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"19","19",-1176247882),icon,new cljs.core.Keyword(null,"38","38",-842958325),icon_retina], null)], null)));
});
tunnelbear.background.browser.toggle_icon = (function toggle_icon(toggled_QMARK_){
var icon = (cljs.core.truth_(toggled_QMARK_)?"icon_on":"icon_off");
return tunnelbear.background.browser.set_extension_icon.call(null,icon);
});
tunnelbear.background.browser.set_extension_badge = (function set_extension_badge(text,type){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),[cljs.core.str("Setting extension badge "),cljs.core.str(text)].join(''));

chrome.browserAction.setBadgeText(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),text], null)));

var G__24245 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24245) {
case "ALERT":
return chrome.browserAction.setBadgeBackgroundColor(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#d64a2f"], null)));

break;
case "WARN":
return chrome.browserAction.setBadgeBackgroundColor(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#e48b2d"], null)));

break;
case "OFF":
return chrome.browserAction.setBadgeBackgroundColor(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#7d6549"], null)));

break;
case "NONE":
return tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"setting extension badge to nothing");

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
tunnelbear.background.browser.set_data_level = (function set_data_level(data_allowed,isToggled_QMARK_){
if((((data_allowed / (1048576)) < tunnelbear.background.browser.low_data_cap)) && ((data_allowed > (0)))){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),[cljs.core.str("Low Data : Can warn user? "),cljs.core.str(cljs.core.deref.call(null,tunnelbear.background.browser.can_warn_low_data_QMARK_))].join(''));

if((cljs.core._EQ_.call(null,true,cljs.core.deref.call(null,tunnelbear.background.browser.can_warn_low_data_QMARK_))) && (cljs.core._EQ_.call(null,true,isToggled_QMARK_))){
cljs.core.reset_BANG_.call(null,tunnelbear.background.browser.can_warn_low_data_QMARK_,false);

tunnelbear.background.api.low_account.call(null);
} else {
}

tunnelbear.background.browser.set_extension_badge.call(null,"Low",new cljs.core.Keyword(null,"WARN","WARN",-1091130621));
} else {
}

if((data_allowed <= (0))){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),"No more Data");

tunnelbear.background.browser.set_extension_badge.call(null,"0mb",new cljs.core.Keyword(null,"ALERT","ALERT",960026686));

cljs.core.deref.call(null,tunnelbear.background.browser.toggle_off_background).call(null);
} else {
}

if(((data_allowed / (1048576)) > tunnelbear.background.browser.low_data_cap)){
cljs.core.reset_BANG_.call(null,tunnelbear.background.browser.can_warn_low_data_QMARK_,true);

if(cljs.core.truth_(isToggled_QMARK_)){
tunnelbear.background.browser.set_extension_badge.call(null,"",new cljs.core.Keyword(null,"NONE","NONE",555544038));
} else {
tunnelbear.background.browser.set_extension_badge.call(null,"Off",new cljs.core.Keyword(null,"OFF","OFF",-1898054514));
}
} else {
}

if((data_allowed == null)){
return tunnelbear.background.browser.set_extension_badge.call(null,"",new cljs.core.Keyword(null,"NONE","NONE",555544038));
} else {
return null;
}
});
tunnelbear.background.browser.adjust_timer = (function adjust_timer(timer){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("adjusting timer to: "),cljs.core.str(timer)].join(''));

return cljs.core.deref.call(null,tunnelbear.background.browser.register_timer).setInterval(timer);
});
tunnelbear.background.browser.evaluate_timer = (function evaluate_timer(new_data_allowed){
var new_data = (new_data_allowed / (1048576));
var diff_data_usage = (cljs.core.deref.call(null,tunnelbear.background.browser.last_data_allowed) - new_data);
if((diff_data_usage > (0))){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("[DATA] usage since last time: "),cljs.core.str(diff_data_usage)].join(''));

if((diff_data_usage < (1))){
tunnelbear.background.browser.adjust_timer.call(null,(60000));
} else {
if((diff_data_usage < (5))){
tunnelbear.background.browser.adjust_timer.call(null,(50000));
} else {
if((diff_data_usage < (10))){
tunnelbear.background.browser.adjust_timer.call(null,(40000));
} else {
if((diff_data_usage < (15))){
tunnelbear.background.browser.adjust_timer.call(null,(35000));
} else {
if((diff_data_usage < (20))){
tunnelbear.background.browser.adjust_timer.call(null,(30000));
} else {
tunnelbear.background.browser.adjust_timer.call(null,(25000));

}
}
}
}
}

return cljs.core.reset_BANG_.call(null,tunnelbear.background.browser.last_data_allowed,new_data);
} else {
return cljs.core.reset_BANG_.call(null,tunnelbear.background.browser.last_data_allowed,new_data);
}
});
tunnelbear.background.browser.logout = (function logout(){
cljs.core.reset_BANG_.call(null,tunnelbear.background.browser.current_token,"");

return cljs.core.reset_BANG_.call(null,tunnelbear.background.browser.current_proxies,cljs.core.PersistentArrayMap.EMPTY);
});
tunnelbear.background.browser.register = (function register(){
if((cljs.core.not_EQ_.call(null,null,tunnelbear.background.core)) && (cljs.core._EQ_.call(null,true,cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null))))){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"TIMER registering");

return tunnelbear.background.api.register_ignore_errors.call(null,tunnelbear.background.core.get_country.call(null),null);
} else {
return null;
}
});
tunnelbear.background.browser.poll = (function poll(){
cljs.core.reset_BANG_.call(null,tunnelbear.background.browser.register_timer,(new goog.Timer((40000))));

cljs.core.deref.call(null,tunnelbear.background.browser.register_timer).start();

return goog.events.listen(cljs.core.deref.call(null,tunnelbear.background.browser.register_timer),goog.Timer.TICK,tunnelbear.background.browser.register);
});
tunnelbear.background.browser.register_listeners = (function register_listeners(toggle_all_callback,change_country_callback,disconnect_proxy_callback){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),"AppStart - Registering listeners");

tunnelbear.background.browser.toggle_all = (function toggle_all(){
var isToggled_QMARK__24257 = cljs.core.not.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null)));
var data_allowed_24258 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.api.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dataAllowed","dataAllowed",1188901502)], null));
tunnelbear.background.browser.set_data_level.call(null,data_allowed_24258,isToggled_QMARK__24257);

tunnelbear.background.browser.toggle_icon.call(null,isToggled_QMARK__24257);

tunnelbear.background.api.clear_token_callbacks.call(null);

return toggle_all_callback.call(null);
});

tunnelbear.background.browser.send_feedback = (function send_feedback(){
return tunnelbear.background.api.send_feedback.call(null);
});

tunnelbear.background.browser.incognito_tunnelling = (function incognito_tunnelling(){
return chrome.extension.isAllowedIncognitoAccess((function (isAllowed_QMARK_){
if(cljs.core.truth_(isAllowed_QMARK_)){
var toggled_QMARK__24259 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null));
if(cljs.core._EQ_.call(null,toggled_QMARK__24259,false)){
if(!((tunnelbear.background.api.reg_response == null))){
tunnelbear.background.browser.toggle_all.call(null);
} else {
}
} else {
}

return chrome.windows.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"https://bearsmyip.com",new cljs.core.Keyword(null,"incognito","incognito",-2057377739),true], null)));
} else {
return tunnelbear.background.api.extensions.call(null);
}
}));
});

tunnelbear.background.browser.toggle_off = (function toggle_off(){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"calling toggle-off");

var isToggled_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null));
if(cljs.core.truth_(isToggled_QMARK_)){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),"Toggling off");

tunnelbear.background.browser.toggle_icon.call(null,false);

toggle_all_callback.call(null);

disconnect_proxy_callback.call(null);

return tunnelbear.background.api.out_of_data.call(null);
} else {
return tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),"Already toggled-off");
}
});

cljs.core.reset_BANG_.call(null,tunnelbear.background.browser.toggle_off_background,tunnelbear.background.browser.toggle_off);

chrome.commands.onCommand.addListener((function (command){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("Command: "),cljs.core.str(command)].join(''));

var G__24252 = command;
switch (G__24252) {
case "toggle-tunnelling":
return tunnelbear.background.browser.toggle_all.call(null);

break;
case "incognito-tunnelling":
return tunnelbear.background.browser.incognito_tunnelling.call(null);

break;
case "send-feedback":
return tunnelbear.background.browser.send_feedback.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(command)].join('')));

}
}));

tunnelbear.background.browser.first_install_QMARK_ = (function first_install_QMARK_(handler){
return tunnelbear.common.utils.storage_get.call(null,"installed",(function (result){
var installed_QMARK_ = ((cljs.core.some_QMARK_.call(null,result))?new cljs.core.Keyword(null,"installed","installed",553977691).cljs$core$IFn$_invoke$arity$1(result):false);
return handler.call(null,installed_QMARK_);
}));
});

chrome.runtime.onInstalled.addListener((function (details){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),"app installed");

tunnelbear.background.browser.first_install_QMARK_.call(null,(function (installed){
if(cljs.core.not.call(null,installed)){
return tunnelbear.common.utils.storage_set.call(null,"installed",(new Date()).getTime());
} else {
return null;
}
}));

return chrome.storage.local.get("isToggled",(function (result){
var toggled_QMARK_ = new cljs.core.Keyword(null,"isToggled","isToggled",724650957).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
if((toggled_QMARK_ == null)){
return tunnelbear.background.api.register.call(null,true,tunnelbear.background.core.get_country.call(null),((function (toggled_QMARK_){
return (function (){
if(!((tunnelbear.background.api.reg_response == null))){
return tunnelbear.background.browser.toggle_all.call(null);
} else {
return null;
}
});})(toggled_QMARK_))
);
} else {
return null;
}
}));
}));

chrome.runtime.onMessageExternal.addListener((function (request,sender,response){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("Got external message: "),cljs.core.str(JSON.stringify(request))].join(''));

var message = cljs.core.js__GT_clj.call(null,request,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var toggle = new cljs.core.Keyword(null,"toggled","toggled",1679391819).cljs$core$IFn$_invoke$arity$1(message);
var opentab = new cljs.core.Keyword(null,"opentab","opentab",-1333315765).cljs$core$IFn$_invoke$arity$1(message);
var str_message = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message);
var twitter = ((cljs.core._EQ_.call(null,str_message,"twitter"))?"twitter":null);
var isToggled_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null));
if(!((toggle == null))){
tunnelbear.background.api.register_ignore_errors.call(null,tunnelbear.background.core.get_country.call(null),((function (message,toggle,opentab,str_message,twitter,isToggled_QMARK_){
return (function (){
var response__$1 = clojure.walk.keywordize_keys.call(null,cljs.core.deref.call(null,tunnelbear.background.api.reg_response));
var data_allowed = new cljs.core.Keyword(null,"dataAllowed","dataAllowed",1188901502).cljs$core$IFn$_invoke$arity$1(response__$1);
if(((data_allowed > (0))) && (cljs.core._EQ_.call(null,false,isToggled_QMARK_))){
return tunnelbear.background.browser.toggle_all.call(null);
} else {
return null;
}
});})(message,toggle,opentab,str_message,twitter,isToggled_QMARK_))
);
} else {
}

if(!((opentab == null))){
if(((opentab == null)) || (cljs.core._EQ_.call(null,opentab,""))){
chrome.tabs.create(cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY));
} else {
chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),opentab], null)));
}
} else {
}

if(cljs.core.some_QMARK_.call(null,twitter)){
return tunnelbear.background.api.open_twitter.call(null);
} else {
return null;
}
}));

chrome.runtime.onMessage.addListener((function (request,sender,response){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("Got content-script message: "),cljs.core.str(JSON.stringify(request))].join(''));

var message = cljs.core.js__GT_clj.call(null,request,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var toggle = new cljs.core.Keyword(null,"toggled","toggled",1679391819).cljs$core$IFn$_invoke$arity$1(message);
var country = new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(message);
var isToggled_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null));
if((!((toggle == null))) && (!((country == null))) && (cljs.core._EQ_.call(null,toggle,true))){
tunnelbear.background.api.register_ignore_errors.call(null,country,((function (message,toggle,country,isToggled_QMARK_){
return (function (){
var response__$1 = clojure.walk.keywordize_keys.call(null,cljs.core.deref.call(null,tunnelbear.background.api.reg_response));
var data_allowed = new cljs.core.Keyword(null,"dataAllowed","dataAllowed",1188901502).cljs$core$IFn$_invoke$arity$1(response__$1);
if(((data_allowed > (0))) && (cljs.core._EQ_.call(null,false,isToggled_QMARK_))){
return tunnelbear.background.browser.toggle_all.call(null);
} else {
return null;
}
});})(message,toggle,country,isToggled_QMARK_))
);

return tunnelbear.background.core.change_app_state_country.call(null,country);
} else {
return null;
}
}));

tunnelbear.background.browser.port_callback = (function port_callback(port_name,msg){
var G__24255_24261 = msg;
switch (G__24255_24261) {
case "toggle-all":
tunnelbear.background.browser.toggle_all.call(null);

break;
default:
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"not a normal command");

}

var command = cljs.core.js__GT_clj.call(null,msg);
if(cljs.core.contains_QMARK_.call(null,command,"COMMAND")){
var G__24256 = cljs.core.get_in.call(null,command,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMMAND"], null));
switch (G__24256) {
case "change-country":
return change_country_callback.call(null,cljs.core.get_in.call(null,command,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["PARAM"], null)));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.get_in.call(null,command,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMMAND"], null)))].join('')));

}
} else {
return null;
}
});

tunnelbear.common.ports.subscribe_to.call(null,new cljs.core.Keyword(null,"chrome","chrome",1718738387),tunnelbear.background.browser.port_callback);

tunnelbear.background.browser.on_request_completed = (function on_request_completed(details){
var request_id = new cljs.core.Keyword(null,"requestId","requestId",1929208145).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,details,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
return cljs.core.swap_BANG_.call(null,tunnelbear.background.browser.pending_requests,cljs.core.disj,request_id);
});

chrome.webRequest.onErrorOccurred.addListener((function (d){
tunnelbear.background.browser.on_request_completed.call(null,d);

var details = cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var error_status = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(details);
var isToggled_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null));
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("WebRequestOnErrorOccured"),cljs.core.str([cljs.core.str(details)].join(''))].join(''));

if((((error_status.indexOf("ERR_PROXY_CONNECTION_FAILED") > (-1))) || ((error_status.indexOf("ERR_CONNECTION_RESET") > (-1))) || ((error_status.indexOf("ERR_NETWORK_IO_SUSPENDED") > (-1))) || ((error_status.indexOf("NS_ERROR_PROXY_CONNECTION_REFUSED") > (-1))) || ((error_status.indexOf("NS_ERROR_NET_RESET") > (-1)))) && (cljs.core._EQ_.call(null,isToggled_QMARK_,true))){
if((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tunnelbear.background.browser.last_error_register),(0))) || ((((new Date()).getTime() - cljs.core.deref.call(null,tunnelbear.background.browser.last_error_register)) > (15000)))){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"WARNING","WARNING",-406592224),"Registering again, possible server error");

cljs.core.reset_BANG_.call(null,tunnelbear.background.browser.last_error_register,(new Date()).getTime());

return tunnelbear.background.browser.register.call(null);
} else {
return tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"WARNING","WARNING",-406592224),"Not registering - registered too many times");
}
} else {
return null;
}
}),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"urls","urls",-190753757),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<all_urls>"], null)], null)));

chrome.webRequest.onCompleted.addListener(tunnelbear.background.browser.on_request_completed,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"urls","urls",-190753757),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<all_urls>"], null)], null)));

tunnelbear.background.browser.set_token = (function set_token(proxy,token){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),[cljs.core.str("Setting token: "),cljs.core.str(token),cljs.core.str(" for proxy: "),cljs.core.str(proxy)].join(''));

cljs.core.reset_BANG_.call(null,tunnelbear.background.browser.current_token,token);

if(!((proxy == null))){
return cljs.core.swap_BANG_.call(null,tunnelbear.background.browser.current_proxies,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,proxy)], null),token);
} else {
return null;
}
});

tunnelbear.background.browser.new_token = (function new_token(tabId,proxy,callback){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),[cljs.core.str("Fetching new token for "),cljs.core.str(proxy)].join(''));

return tunnelbear.background.api.getToken.call(null,(function (error,token){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("Finished fetching token with token "),cljs.core.str(token)].join(''));

if(!((error == null))){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"WARN","WARN",-1091130621),[cljs.core.str("error fetching token: "),cljs.core.str(error)].join(''));
} else {
}

if((error == null)){
tunnelbear.background.browser.set_token.call(null,proxy,token);

return callback(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authCredentials","authCredentials",1560654066),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),token,new cljs.core.Keyword(null,"password","password",417022471),token], null)], null)));
} else {
if(((0) < tabId)){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"WARN","WARN",-1091130621),[cljs.core.str("Changing tab url to error:"),cljs.core.str(tabId),cljs.core.str(error)].join(''));

if(cljs.core._EQ_.call(null,error,"No data left")){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),"No data -disconnecting");

tunnelbear.background.browser.toggle_off.call(null);
} else {
}

return callback(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cancel","cancel",-1964088360),true], null)));
} else {
return null;
}
}
}));
});

tunnelbear.background.browser.validate_token = (function validate_token(tabId,proxy,proxy_token,callback){
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),[cljs.core.str("Validating token "),cljs.core.str(proxy_token),cljs.core.str(" for  "),cljs.core.str(proxy)].join(''));

if(cljs.core.not_EQ_.call(null,null,proxy_token)){
if(cljs.core.not_EQ_.call(null,proxy_token,cljs.core.deref.call(null,tunnelbear.background.browser.current_token))){
callback(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authCredentials","authCredentials",1560654066),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),cljs.core.deref.call(null,tunnelbear.background.browser.current_token),new cljs.core.Keyword(null,"password","password",417022471),cljs.core.deref.call(null,tunnelbear.background.browser.current_token)], null)], null)));

return tunnelbear.background.browser.set_token.call(null,proxy,cljs.core.deref.call(null,tunnelbear.background.browser.current_token));
} else {
return tunnelbear.background.browser.new_token.call(null,tabId,proxy,callback);
}
} else {
callback(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authCredentials","authCredentials",1560654066),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),cljs.core.deref.call(null,tunnelbear.background.browser.current_token),new cljs.core.Keyword(null,"password","password",417022471),cljs.core.deref.call(null,tunnelbear.background.browser.current_token)], null)], null)));

return tunnelbear.background.browser.set_token.call(null,proxy,cljs.core.deref.call(null,tunnelbear.background.browser.current_token));
}
});

tunnelbear.background.browser.get_token = (function get_token(tabId,proxy,callback){
var key_proxy = cljs.core.keyword.call(null,proxy);
var proxy_token = key_proxy.call(null,cljs.core.deref.call(null,tunnelbear.background.browser.current_proxies));
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),[cljs.core.str("[GET-TOKEN] - current token for "),cljs.core.str(proxy),cljs.core.str(" "),cljs.core.str(proxy_token)].join(''));

if(cljs.core._EQ_.call(null,"",cljs.core.deref.call(null,tunnelbear.background.browser.current_token))){
return tunnelbear.background.browser.new_token.call(null,tabId,proxy,callback);
} else {
return tunnelbear.background.browser.validate_token.call(null,tabId,proxy,proxy_token,callback);
}
});

tunnelbear.background.browser.browser_register_on_auth_listener.call(null,cljs.core.deref.call(null,tunnelbear.background.browser.which_browser));

return chrome.storage.local.get("isToggled",(function (result){
var toggled_QMARK_ = new cljs.core.Keyword(null,"isToggled","isToggled",724650957).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
if(cljs.core._EQ_.call(null,toggled_QMARK_,true)){
return tunnelbear.background.browser.toggle_all.call(null);
} else {
return null;
}
}));
});
tunnelbear.background.browser.initialize_pac_script = (function initialize_pac_script(){
return tunnelbear.background.browser.browser_initialize_pac_script.call(null,cljs.core.deref.call(null,tunnelbear.background.browser.which_browser));
});
tunnelbear.background.browser.reset_proxy = (function reset_proxy(){
return tunnelbear.background.browser.browser_reset_proxy.call(null,cljs.core.deref.call(null,tunnelbear.background.browser.which_browser));
});
tunnelbear.background.browser.set_proxy = (function set_proxy(enabled_QMARK_,servers){
return tunnelbear.background.browser.browser_set_proxy.call(null,cljs.core.deref.call(null,tunnelbear.background.browser.which_browser),enabled_QMARK_,servers);
});
tunnelbear.background.browser.eval_proxy = (function eval_proxy(callback){
return tunnelbear.background.browser.browser_eval_proxy.call(null,cljs.core.deref.call(null,tunnelbear.background.browser.which_browser),callback);
});
chrome.runtime.setUninstallURL(tunnelbear.background.api.uninstall_url);
tunnelbear.background.browser.poll.call(null);
cljs.core.add_watch.call(null,tunnelbear.background.api.reg_response,new cljs.core.Keyword(null,"reg-watcher-chrome","reg-watcher-chrome",-1903364501),(function (k,r,old_state,new_state){
var response = clojure.walk.keywordize_keys.call(null,new_state);
var data_allowed = new cljs.core.Keyword(null,"dataAllowed","dataAllowed",1188901502).cljs$core$IFn$_invoke$arity$1(response);
var isToggled_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null));
tunnelbear.background.browser.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"api/reg-response changed!");

tunnelbear.background.browser.set_data_level.call(null,data_allowed,isToggled_QMARK_);

return tunnelbear.background.browser.evaluate_timer.call(null,data_allowed);
}));
