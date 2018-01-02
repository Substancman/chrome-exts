// Compiled by ClojureScript 0.0-2913 {}
goog.provide('tunnelbear.background.cleanup_job');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cemerick.url');
goog.require('clojure.set');
goog.require('weasel.repl');
tunnelbear.background.cleanup_job.start = (function start(remove_url_callback){
var c__7600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto__){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto__){
return (function (state_24296){
var state_val_24297 = (state_24296[(1)]);
if((state_val_24297 === (4))){
var inst_24290 = (state_24296[(2)]);
var inst_24291 = remove_url_callback.call(null);
var state_24296__$1 = (function (){var statearr_24298 = state_24296;
(statearr_24298[(7)] = inst_24290);

(statearr_24298[(8)] = inst_24291);

return statearr_24298;
})();
var statearr_24299_24308 = state_24296__$1;
(statearr_24299_24308[(2)] = null);

(statearr_24299_24308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (3))){
var inst_24294 = (state_24296[(2)]);
var state_24296__$1 = state_24296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24296__$1,inst_24294);
} else {
if((state_val_24297 === (2))){
var inst_24288 = cljs.core.async.timeout.call(null,(10000));
var state_24296__$1 = state_24296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24296__$1,(4),inst_24288);
} else {
if((state_val_24297 === (1))){
var state_24296__$1 = state_24296;
var statearr_24300_24309 = state_24296__$1;
(statearr_24300_24309[(2)] = null);

(statearr_24300_24309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
var statearr_24304 = [null,null,null,null,null,null,null,null,null];
(statearr_24304[(0)] = state_machine__7586__auto__);

(statearr_24304[(1)] = (1));

return statearr_24304;
});
var state_machine__7586__auto____1 = (function (state_24296){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_24296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e24305){if((e24305 instanceof Object)){
var ex__7589__auto__ = e24305;
var statearr_24306_24310 = state_24296;
(statearr_24306_24310[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24311 = state_24296;
state_24296 = G__24311;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_24296){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_24296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto__))
})();
var state__7602__auto__ = (function (){var statearr_24307 = f__7601__auto__.call(null);
(statearr_24307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto__);

return statearr_24307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto__))
);

return c__7600__auto__;
});
