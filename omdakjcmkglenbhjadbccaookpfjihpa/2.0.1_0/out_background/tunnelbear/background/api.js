// Compiled by ClojureScript 0.0-2913 {}
goog.provide('tunnelbear.background.api');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('tunnelbear.common.ports');
goog.require('weasel.repl');
goog.require('tunnelbear.common.ajax_helper');
goog.require('tunnelbear.common.utils');
goog.require('cljs.core.async');
goog.require('tunnelbear.common.logger');
goog.require('clojure.set');
goog.require('cemerick.url');
goog.require('clojure.walk');
tunnelbear.background.api.log = (function log(level,param){
return tunnelbear.common.logger.log.call(null,level,[cljs.core.str("[API] "),cljs.core.str(param)].join(''));
});
tunnelbear.background.api.tbear_base_api_url = "https://api.tunnelbear.com";
tunnelbear.background.api.tbear_base_url = "https://www.tunnelbear.com";
tunnelbear.background.api.tbear_help_url = "https://help.tunnelbear.com";
tunnelbear.background.api.uninstall_url = [cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/account#/feedback")].join('');
tunnelbear.background.api.version = (function (){var version_prefix = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"FIREFOX","FIREFOX",-1393123879),tunnelbear.common.utils.get_browser))?"f":((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"CHROME","CHROME",-160225757),tunnelbear.common.utils.get_browser))?"c":"o"
));
var version_number = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,chrome.runtime.getManifest(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
tunnelbear.background.api.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("Using version-prefix: "),cljs.core.str(version_prefix)].join(''));

tunnelbear.background.api.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("Using version-number: "),cljs.core.str(version_number)].join(''));

return [cljs.core.str(version_prefix),cljs.core.str(version_number)].join('');
})();
tunnelbear.background.api.uuid = (function uuid(){
var r = cljs.core.repeatedly.call(null,(30),(function (){
return cljs.core.rand_int.call(null,(16));
}));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cljs.core.take.call(null,(8),r),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null),cljs.core.take.call(null,(4),cljs.core.drop.call(null,(8),r)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-4"], null),cljs.core.take.call(null,(3),cljs.core.drop.call(null,(12),r)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((8) | ((3) & cljs.core.rand_int.call(null,(15))))], null),cljs.core.take.call(null,(3),cljs.core.drop.call(null,(15),r)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null),cljs.core.take.call(null,(12),cljs.core.drop.call(null,(18),r))));
});
tunnelbear.background.api.deviceId = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tunnelbear.background.api.reg_response = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tunnelbear.background.api.loc_response = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tunnelbear.background.api.token_callbacks = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs.core.add_watch.call(null,tunnelbear.background.api.reg_response,new cljs.core.Keyword(null,"reg-watcher-api","reg-watcher-api",838236973),(function (k,r,old_state,new_state){
return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"register","register",1968522516),new_state);
}));
tunnelbear.background.api.persist_response = (function persist_response(response){
tunnelbear.background.api.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(response)),cljs.core.str(" ")].join(''));

cljs.core.reset_BANG_.call(null,tunnelbear.background.api.reg_response,response);

return response;
});
tunnelbear.background.api.out_of_data = (function out_of_data(){
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/account#/upgrade?notice=no_data&v="),cljs.core.str(tunnelbear.background.api.version)].join('')], null)));
});
tunnelbear.background.api.low_account = (function low_account(){
var str_confirmed = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.api.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emailConfirmed","emailConfirmed",176205617)], null));
if(cljs.core._EQ_.call(null,str_confirmed,"1")){
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/account#/upgrade?notice=low_data&v="),cljs.core.str(tunnelbear.background.api.version)].join('')], null)));
} else {
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/account#/upgrade?notice=confirm_email&v="),cljs.core.str(tunnelbear.background.api.version)].join('')], null)));
}
});
tunnelbear.background.api.update_account = (function update_account(){
var str_confirmed = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.api.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emailConfirmed","emailConfirmed",176205617)], null));
if(cljs.core._EQ_.call(null,str_confirmed,"1")){
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/account#/upgrade?v="),cljs.core.str(tunnelbear.background.api.version)].join('')], null)));
} else {
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/account#/upgrade?notice=confirm_email&v="),cljs.core.str(tunnelbear.background.api.version)].join('')], null)));
}
});
tunnelbear.background.api.help = (function help(){
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),tunnelbear.background.api.tbear_help_url], null)));
});
tunnelbear.background.api.open_account = (function open_account(){
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/account#/overview")].join('')], null)));
});
tunnelbear.background.api.open_feedback = (function open_feedback(){
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/support/contact.html")].join('')], null)));
});
tunnelbear.background.api.review = (function review(){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"OPERA","OPERA",802242835),tunnelbear.common.utils.get_browser)){
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"https://addons.opera.com/extensions/details/tunnelbear/"], null)));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"CHROME","CHROME",-160225757),tunnelbear.common.utils.get_browser)){
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("https://chrome.google.com/webstore/detail/tunnelbear/"),cljs.core.str(chrome.runtime.id),cljs.core.str("/reviews")].join('')], null)));
} else {
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("https://addons.mozilla.org/en-US/firefox/addon/"),cljs.core.str("tunnelbear-vpn-proxy")].join('')], null)));

}
}
});
tunnelbear.background.api.extensions = (function extensions(){
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("chrome://extensions/?id="),cljs.core.str(chrome.runtime.id)].join('')], null)));
});
tunnelbear.background.api.privacy = (function privacy(){
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/privacy-policy")].join('')], null)));
});
tunnelbear.background.api.open_twitter = (function open_twitter(){
var tweet = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.api.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"templateTweet","templateTweet",-1349921726)], null));
var url = "https://twitter.com/intent/tweet?text=";
return chrome.tabs.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(url),cljs.core.str(tweet)].join('')], null)));
});
tunnelbear.background.api.tweet = (function tweet(){
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/account#/twitter")].join('')], null)));
});
tunnelbear.background.api.logout = (function logout(){
cljs.core.reset_BANG_.call(null,tunnelbear.background.api.reg_response,null);

return ajax.core.POST.call(null,[cljs.core.str(tunnelbear.background.api.tbear_base_api_url),cljs.core.str("/core/api/logout")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
chrome.storage.local.clear();

return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/account#/login?v="),cljs.core.str(tunnelbear.background.api.version)].join('')], null)));
})()
], null));
});
tunnelbear.background.api.error_handler = (function error_handler(p__24148){
var map__24150 = p__24148;
var map__24150__$1 = ((cljs.core.seq_QMARK_.call(null,map__24150))?cljs.core.apply.call(null,cljs.core.hash_map,map__24150):map__24150);
var status_text = cljs.core.get.call(null,map__24150__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var status = cljs.core.get.call(null,map__24150__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
tunnelbear.background.api.log.call(null,new cljs.core.Keyword(null,"WARN","WARN",-1091130621),[cljs.core.str("Register Error: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));

if(cljs.core._EQ_.call(null,(403),status)){
tunnelbear.background.core.toggle_off.call(null);

tunnelbear.background.core.close_popup.call(null);

return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/account#/signup?v="),cljs.core.str(tunnelbear.background.api.version)].join('')], null)));
} else {
return null;
}
});
tunnelbear.background.api.register_ignore_errors = (function register_ignore_errors(country,handler){
tunnelbear.background.api.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("register ignoring errors "),cljs.core.str(country),cljs.core.str(" "),cljs.core.str(cljs.core.deref.call(null,tunnelbear.background.api.deviceId))].join(''));

return tunnelbear.common.ajax_helper.post.call(null,[cljs.core.str(tunnelbear.background.api.tbear_base_api_url),cljs.core.str("/core/register")].join(''),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 5, ["json","1","v",tunnelbear.background.api.version,"country",country,"deviceId",cljs.core.deref.call(null,tunnelbear.background.api.deviceId),"getToken",false], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(((handler == null))?tunnelbear.background.api.persist_response:cljs.core.comp.call(null,handler,tunnelbear.background.api.persist_response)),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),null], null));
});
tunnelbear.background.api.register = (function register(getToken,country,handler){
tunnelbear.background.api.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("register params "),cljs.core.str(tunnelbear.background.api.version),cljs.core.str(" "),cljs.core.str(country),cljs.core.str(" "),cljs.core.str(cljs.core.deref.call(null,tunnelbear.background.api.deviceId))].join(''));

return tunnelbear.common.ajax_helper.post.call(null,[cljs.core.str(tunnelbear.background.api.tbear_base_api_url),cljs.core.str("/core/register")].join(''),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 5, ["json","1","v",tunnelbear.background.api.version,"country",country,"deviceId",cljs.core.deref.call(null,tunnelbear.background.api.deviceId),"getToken",getToken], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(((handler == null))?tunnelbear.background.api.persist_response:cljs.core.comp.call(null,handler,tunnelbear.background.api.persist_response)),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),tunnelbear.background.api.error_handler], null));
});
tunnelbear.background.api.location = (function location__$1(handler){
var c__7600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto__){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto__){
return (function (state_24187){
var state_val_24188 = (state_24187[(1)]);
if((state_val_24188 === (5))){
var inst_24179 = (state_24187[(7)]);
var inst_24184 = (state_24187[(2)]);
var inst_24185 = ajax.core.GET.call(null,inst_24179,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(3000),new cljs.core.Keyword(null,"handler","handler",-195596612),inst_24184);
var state_24187__$1 = state_24187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24187__$1,inst_24185);
} else {
if((state_val_24188 === (4))){
var state_24187__$1 = state_24187;
var statearr_24189_24201 = state_24187__$1;
(statearr_24189_24201[(2)] = handler);

(statearr_24189_24201[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24188 === (3))){
var state_24187__$1 = state_24187;
var statearr_24190_24202 = state_24187__$1;
(statearr_24190_24202[(2)] = null);

(statearr_24190_24202[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24188 === (2))){
var inst_24178 = (state_24187[(2)]);
var inst_24179 = [cljs.core.str(tunnelbear.background.api.tbear_base_api_url),cljs.core.str("/core/bearsmyip/location")].join('');
var inst_24180 = (handler == null);
var state_24187__$1 = (function (){var statearr_24191 = state_24187;
(statearr_24191[(7)] = inst_24179);

(statearr_24191[(8)] = inst_24178);

return statearr_24191;
})();
if(cljs.core.truth_(inst_24180)){
var statearr_24192_24203 = state_24187__$1;
(statearr_24192_24203[(1)] = (3));

} else {
var statearr_24193_24204 = state_24187__$1;
(statearr_24193_24204[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24188 === (1))){
var inst_24176 = cljs.core.async.timeout.call(null,(200));
var state_24187__$1 = state_24187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24187__$1,(2),inst_24176);
} else {
return null;
}
}
}
}
}
});})(c__7600__auto__))
;
return ((function (switch__7585__auto__,c__7600__auto__){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_24197 = [null,null,null,null,null,null,null,null,null];
(statearr_24197[(0)] = state_machine__7586__auto__);

(statearr_24197[(1)] = (1));

return statearr_24197;
});
var state_machine__7586__auto____1 = (function (state_24187){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_24187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e24198){if((e24198 instanceof Object)){
var ex__7589__auto__ = e24198;
var statearr_24199_24205 = state_24187;
(statearr_24199_24205[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24206 = state_24187;
state_24187 = G__24206;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_24187){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_24187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto__))
})();
var state__7602__auto__ = (function (){var statearr_24200 = f__7601__auto__.call(null);
(statearr_24200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto__);

return statearr_24200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto__))
);

return c__7600__auto__;
});
tunnelbear.background.api.clear_token_callbacks = (function clear_token_callbacks(){
return cljs.core.reset_BANG_.call(null,tunnelbear.background.api.token_callbacks,cljs.core.PersistentVector.EMPTY);
});
cljs.core.add_watch.call(null,tunnelbear.background.api.token_callbacks,new cljs.core.Keyword(null,"token-request-watcher","token-request-watcher",-1643875538),(function (k,r,old_state,new_state){
if((cljs.core._EQ_.call(null,cljs.core.count.call(null,old_state),(0))) && ((cljs.core.count.call(null,new_state) > (0)))){
return tunnelbear.background.api.register.call(null,true,(0),(function (response){
var res = clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,response));
var success = cljs.core.get.call(null,res,new cljs.core.Keyword(null,"status","status",-1997798413));
var token = cljs.core.get.call(null,res,new cljs.core.Keyword(null,"vpnToken","vpnToken",1236035178));
var dataAllowed = cljs.core.get.call(null,res,new cljs.core.Keyword(null,"dataAllowed","dataAllowed",1188901502));
var message = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(res);
tunnelbear.background.api.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("Regresponse:"),cljs.core.str(success),cljs.core.str("token:"),cljs.core.str(token)].join(''));

var seq__24207_24211 = cljs.core.seq.call(null,cljs.core.deref.call(null,tunnelbear.background.api.token_callbacks));
var chunk__24208_24212 = null;
var count__24209_24213 = (0);
var i__24210_24214 = (0);
while(true){
if((i__24210_24214 < count__24209_24213)){
var callback_24215 = cljs.core._nth.call(null,chunk__24208_24212,i__24210_24214);
callback_24215.call(null,((((0) >= dataAllowed))?"No data left":((cljs.core._EQ_.call(null,"OK",success))?null:message
)),token);

var G__24216 = seq__24207_24211;
var G__24217 = chunk__24208_24212;
var G__24218 = count__24209_24213;
var G__24219 = (i__24210_24214 + (1));
seq__24207_24211 = G__24216;
chunk__24208_24212 = G__24217;
count__24209_24213 = G__24218;
i__24210_24214 = G__24219;
continue;
} else {
var temp__4126__auto___24220 = cljs.core.seq.call(null,seq__24207_24211);
if(temp__4126__auto___24220){
var seq__24207_24221__$1 = temp__4126__auto___24220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24207_24221__$1)){
var c__4768__auto___24222 = cljs.core.chunk_first.call(null,seq__24207_24221__$1);
var G__24223 = cljs.core.chunk_rest.call(null,seq__24207_24221__$1);
var G__24224 = c__4768__auto___24222;
var G__24225 = cljs.core.count.call(null,c__4768__auto___24222);
var G__24226 = (0);
seq__24207_24211 = G__24223;
chunk__24208_24212 = G__24224;
count__24209_24213 = G__24225;
i__24210_24214 = G__24226;
continue;
} else {
var callback_24227 = cljs.core.first.call(null,seq__24207_24221__$1);
callback_24227.call(null,((((0) >= dataAllowed))?"No data left":((cljs.core._EQ_.call(null,"OK",success))?null:message
)),token);

var G__24228 = cljs.core.next.call(null,seq__24207_24221__$1);
var G__24229 = null;
var G__24230 = (0);
var G__24231 = (0);
seq__24207_24211 = G__24228;
chunk__24208_24212 = G__24229;
count__24209_24213 = G__24230;
i__24210_24214 = G__24231;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,tunnelbear.background.api.token_callbacks,cljs.core.PersistentVector.EMPTY);
}));
} else {
return null;
}
}));
tunnelbear.background.api.getToken = (function getToken(handler){
tunnelbear.background.api.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"getToken");

return cljs.core.swap_BANG_.call(null,tunnelbear.background.api.token_callbacks,(function (p1__24232_SHARP_){
return cljs.core.conj.call(null,p1__24232_SHARP_,handler);
}));
});
tunnelbear.background.api.send_feedback = (function send_feedback(){
return tunnelbear.common.logger.get_logs.call(null,(function (background){
var form_data = (function (){var G__24234 = (new FormData());
G__24234.append("v",tunnelbear.background.api.version);

G__24234.append("feedback","");

G__24234.append("data",background);

return G__24234;
})();
return ajax.core.POST.call(null,[cljs.core.str(tunnelbear.background.api.tbear_base_api_url),cljs.core.str("/core/api/uploadLogsText")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),form_data,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(2000)], null));
}));
});
chrome.storage.local.get("deviceId",(function (result){
var storedDeviceId = new cljs.core.Keyword(null,"deviceId","deviceId",1909987208).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
if(!((storedDeviceId == null))){
return cljs.core.reset_BANG_.call(null,tunnelbear.background.api.deviceId,storedDeviceId);
} else {
cljs.core.reset_BANG_.call(null,tunnelbear.background.api.deviceId,tunnelbear.background.api.uuid.call(null));

return chrome.storage.local.set(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deviceId","deviceId",1909987208),cljs.core.deref.call(null,tunnelbear.background.api.deviceId)], null)));
}
}));
