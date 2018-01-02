// Compiled by ClojureScript 0.0-2913 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t31014 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31014 = (function (f,fn_handler,meta31015){
this.f = f;
this.fn_handler = fn_handler;
this.meta31015 = meta31015;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31014.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31014.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t31014.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t31014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31016){
var self__ = this;
var _31016__$1 = this;
return self__.meta31015;
});

cljs.core.async.t31014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31016,meta31015__$1){
var self__ = this;
var _31016__$1 = this;
return (new cljs.core.async.t31014(self__.f,self__.fn_handler,meta31015__$1));
});

cljs.core.async.t31014.cljs$lang$type = true;

cljs.core.async.t31014.cljs$lang$ctorStr = "cljs.core.async/t31014";

cljs.core.async.t31014.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t31014");
});

cljs.core.async.__GT_t31014 = (function __GT_t31014(f__$1,fn_handler__$1,meta31015){
return (new cljs.core.async.t31014(f__$1,fn_handler__$1,meta31015));
});

}

return (new cljs.core.async.t31014(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__31018 = buff;
if(G__31018){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__31018.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__31018.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31018);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31018);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31019 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31019);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31019,ret){
return (function (){
return fn1.call(null,val_31019);
});})(val_31019,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4868__auto___31020 = n;
var x_31021 = (0);
while(true){
if((x_31021 < n__4868__auto___31020)){
(a[x_31021] = (0));

var G__31022 = (x_31021 + (1));
x_31021 = G__31022;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31023 = (i + (1));
i = G__31023;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t31027 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31027 = (function (flag,alt_flag,meta31028){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31028 = meta31028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31027.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31027.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t31027.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t31027.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31029){
var self__ = this;
var _31029__$1 = this;
return self__.meta31028;
});})(flag))
;

cljs.core.async.t31027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31029,meta31028__$1){
var self__ = this;
var _31029__$1 = this;
return (new cljs.core.async.t31027(self__.flag,self__.alt_flag,meta31028__$1));
});})(flag))
;

cljs.core.async.t31027.cljs$lang$type = true;

cljs.core.async.t31027.cljs$lang$ctorStr = "cljs.core.async/t31027";

cljs.core.async.t31027.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t31027");
});})(flag))
;

cljs.core.async.__GT_t31027 = ((function (flag){
return (function __GT_t31027(flag__$1,alt_flag__$1,meta31028){
return (new cljs.core.async.t31027(flag__$1,alt_flag__$1,meta31028));
});})(flag))
;

}

return (new cljs.core.async.t31027(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t31033 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31033 = (function (cb,flag,alt_handler,meta31034){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31034 = meta31034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31033.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t31033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t31033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31035){
var self__ = this;
var _31035__$1 = this;
return self__.meta31034;
});

cljs.core.async.t31033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31035,meta31034__$1){
var self__ = this;
var _31035__$1 = this;
return (new cljs.core.async.t31033(self__.cb,self__.flag,self__.alt_handler,meta31034__$1));
});

cljs.core.async.t31033.cljs$lang$type = true;

cljs.core.async.t31033.cljs$lang$ctorStr = "cljs.core.async/t31033";

cljs.core.async.t31033.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t31033");
});

cljs.core.async.__GT_t31033 = (function __GT_t31033(cb__$1,flag__$1,alt_handler__$1,meta31034){
return (new cljs.core.async.t31033(cb__$1,flag__$1,alt_handler__$1,meta31034));
});

}

return (new cljs.core.async.t31033(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31036_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31036_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31037_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31037_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3981__auto__ = wport;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31038 = (i + (1));
i = G__31038;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3981__auto__ = ret;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3969__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3969__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3969__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__31039){
var map__31041 = p__31039;
var map__31041__$1 = ((cljs.core.seq_QMARK_.call(null,map__31041))?cljs.core.apply.call(null,cljs.core.hash_map,map__31041):map__31041);
var opts = map__31041__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__31039 = null;
if (arguments.length > 1) {
var G__31042__i = 0, G__31042__a = new Array(arguments.length -  1);
while (G__31042__i < G__31042__a.length) {G__31042__a[G__31042__i] = arguments[G__31042__i + 1]; ++G__31042__i;}
  p__31039 = new cljs.core.IndexedSeq(G__31042__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__31039);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31043){
var ports = cljs.core.first(arglist__31043);
var p__31039 = cljs.core.rest(arglist__31043);
return alts_BANG___delegate(ports,p__31039);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__7600__auto___31138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___31138){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___31138){
return (function (state_31114){
var state_val_31115 = (state_31114[(1)]);
if((state_val_31115 === (7))){
var inst_31110 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
var statearr_31116_31139 = state_31114__$1;
(statearr_31116_31139[(2)] = inst_31110);

(statearr_31116_31139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (1))){
var state_31114__$1 = state_31114;
var statearr_31117_31140 = state_31114__$1;
(statearr_31117_31140[(2)] = null);

(statearr_31117_31140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (4))){
var inst_31093 = (state_31114[(7)]);
var inst_31093__$1 = (state_31114[(2)]);
var inst_31094 = (inst_31093__$1 == null);
var state_31114__$1 = (function (){var statearr_31118 = state_31114;
(statearr_31118[(7)] = inst_31093__$1);

return statearr_31118;
})();
if(cljs.core.truth_(inst_31094)){
var statearr_31119_31141 = state_31114__$1;
(statearr_31119_31141[(1)] = (5));

} else {
var statearr_31120_31142 = state_31114__$1;
(statearr_31120_31142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (13))){
var state_31114__$1 = state_31114;
var statearr_31121_31143 = state_31114__$1;
(statearr_31121_31143[(2)] = null);

(statearr_31121_31143[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (6))){
var inst_31093 = (state_31114[(7)]);
var state_31114__$1 = state_31114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31114__$1,(11),to,inst_31093);
} else {
if((state_val_31115 === (3))){
var inst_31112 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31114__$1,inst_31112);
} else {
if((state_val_31115 === (12))){
var state_31114__$1 = state_31114;
var statearr_31122_31144 = state_31114__$1;
(statearr_31122_31144[(2)] = null);

(statearr_31122_31144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (2))){
var state_31114__$1 = state_31114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31114__$1,(4),from);
} else {
if((state_val_31115 === (11))){
var inst_31103 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
if(cljs.core.truth_(inst_31103)){
var statearr_31123_31145 = state_31114__$1;
(statearr_31123_31145[(1)] = (12));

} else {
var statearr_31124_31146 = state_31114__$1;
(statearr_31124_31146[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (9))){
var state_31114__$1 = state_31114;
var statearr_31125_31147 = state_31114__$1;
(statearr_31125_31147[(2)] = null);

(statearr_31125_31147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (5))){
var state_31114__$1 = state_31114;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31126_31148 = state_31114__$1;
(statearr_31126_31148[(1)] = (8));

} else {
var statearr_31127_31149 = state_31114__$1;
(statearr_31127_31149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (14))){
var inst_31108 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
var statearr_31128_31150 = state_31114__$1;
(statearr_31128_31150[(2)] = inst_31108);

(statearr_31128_31150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (10))){
var inst_31100 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
var statearr_31129_31151 = state_31114__$1;
(statearr_31129_31151[(2)] = inst_31100);

(statearr_31129_31151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (8))){
var inst_31097 = cljs.core.async.close_BANG_.call(null,to);
var state_31114__$1 = state_31114;
var statearr_31130_31152 = state_31114__$1;
(statearr_31130_31152[(2)] = inst_31097);

(statearr_31130_31152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7600__auto___31138))
;
return ((function (switch__7585__auto__,c__7600__auto___31138){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_31134 = [null,null,null,null,null,null,null,null];
(statearr_31134[(0)] = state_machine__7586__auto__);

(statearr_31134[(1)] = (1));

return statearr_31134;
});
var state_machine__7586__auto____1 = (function (state_31114){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_31114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e31135){if((e31135 instanceof Object)){
var ex__7589__auto__ = e31135;
var statearr_31136_31153 = state_31114;
(statearr_31136_31153[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31154 = state_31114;
state_31114 = G__31154;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_31114){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_31114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___31138))
})();
var state__7602__auto__ = (function (){var statearr_31137 = f__7601__auto__.call(null);
(statearr_31137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___31138);

return statearr_31137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___31138))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31338){
var vec__31339 = p__31338;
var v = cljs.core.nth.call(null,vec__31339,(0),null);
var p = cljs.core.nth.call(null,vec__31339,(1),null);
var job = vec__31339;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7600__auto___31521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___31521,res,vec__31339,v,p,job,jobs,results){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___31521,res,vec__31339,v,p,job,jobs,results){
return (function (state_31344){
var state_val_31345 = (state_31344[(1)]);
if((state_val_31345 === (2))){
var inst_31341 = (state_31344[(2)]);
var inst_31342 = cljs.core.async.close_BANG_.call(null,res);
var state_31344__$1 = (function (){var statearr_31346 = state_31344;
(statearr_31346[(7)] = inst_31341);

return statearr_31346;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31344__$1,inst_31342);
} else {
if((state_val_31345 === (1))){
var state_31344__$1 = state_31344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31344__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7600__auto___31521,res,vec__31339,v,p,job,jobs,results))
;
return ((function (switch__7585__auto__,c__7600__auto___31521,res,vec__31339,v,p,job,jobs,results){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_31350 = [null,null,null,null,null,null,null,null];
(statearr_31350[(0)] = state_machine__7586__auto__);

(statearr_31350[(1)] = (1));

return statearr_31350;
});
var state_machine__7586__auto____1 = (function (state_31344){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_31344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e31351){if((e31351 instanceof Object)){
var ex__7589__auto__ = e31351;
var statearr_31352_31522 = state_31344;
(statearr_31352_31522[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31523 = state_31344;
state_31344 = G__31523;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_31344){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_31344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___31521,res,vec__31339,v,p,job,jobs,results))
})();
var state__7602__auto__ = (function (){var statearr_31353 = f__7601__auto__.call(null);
(statearr_31353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___31521);

return statearr_31353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___31521,res,vec__31339,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31354){
var vec__31355 = p__31354;
var v = cljs.core.nth.call(null,vec__31355,(0),null);
var p = cljs.core.nth.call(null,vec__31355,(1),null);
var job = vec__31355;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4868__auto___31524 = n;
var __31525 = (0);
while(true){
if((__31525 < n__4868__auto___31524)){
var G__31356_31526 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31356_31526) {
case "async":
var c__7600__auto___31528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31525,c__7600__auto___31528,G__31356_31526,n__4868__auto___31524,jobs,results,process,async){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (__31525,c__7600__auto___31528,G__31356_31526,n__4868__auto___31524,jobs,results,process,async){
return (function (state_31369){
var state_val_31370 = (state_31369[(1)]);
if((state_val_31370 === (7))){
var inst_31365 = (state_31369[(2)]);
var state_31369__$1 = state_31369;
var statearr_31371_31529 = state_31369__$1;
(statearr_31371_31529[(2)] = inst_31365);

(statearr_31371_31529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (6))){
var state_31369__$1 = state_31369;
var statearr_31372_31530 = state_31369__$1;
(statearr_31372_31530[(2)] = null);

(statearr_31372_31530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (5))){
var state_31369__$1 = state_31369;
var statearr_31373_31531 = state_31369__$1;
(statearr_31373_31531[(2)] = null);

(statearr_31373_31531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (4))){
var inst_31359 = (state_31369[(2)]);
var inst_31360 = async.call(null,inst_31359);
var state_31369__$1 = state_31369;
if(cljs.core.truth_(inst_31360)){
var statearr_31374_31532 = state_31369__$1;
(statearr_31374_31532[(1)] = (5));

} else {
var statearr_31375_31533 = state_31369__$1;
(statearr_31375_31533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31370 === (3))){
var inst_31367 = (state_31369[(2)]);
var state_31369__$1 = state_31369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31369__$1,inst_31367);
} else {
if((state_val_31370 === (2))){
var state_31369__$1 = state_31369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31369__$1,(4),jobs);
} else {
if((state_val_31370 === (1))){
var state_31369__$1 = state_31369;
var statearr_31376_31534 = state_31369__$1;
(statearr_31376_31534[(2)] = null);

(statearr_31376_31534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31525,c__7600__auto___31528,G__31356_31526,n__4868__auto___31524,jobs,results,process,async))
;
return ((function (__31525,switch__7585__auto__,c__7600__auto___31528,G__31356_31526,n__4868__auto___31524,jobs,results,process,async){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_31380 = [null,null,null,null,null,null,null];
(statearr_31380[(0)] = state_machine__7586__auto__);

(statearr_31380[(1)] = (1));

return statearr_31380;
});
var state_machine__7586__auto____1 = (function (state_31369){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_31369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e31381){if((e31381 instanceof Object)){
var ex__7589__auto__ = e31381;
var statearr_31382_31535 = state_31369;
(statearr_31382_31535[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31536 = state_31369;
state_31369 = G__31536;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_31369){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_31369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(__31525,switch__7585__auto__,c__7600__auto___31528,G__31356_31526,n__4868__auto___31524,jobs,results,process,async))
})();
var state__7602__auto__ = (function (){var statearr_31383 = f__7601__auto__.call(null);
(statearr_31383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___31528);

return statearr_31383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(__31525,c__7600__auto___31528,G__31356_31526,n__4868__auto___31524,jobs,results,process,async))
);


break;
case "compute":
var c__7600__auto___31537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31525,c__7600__auto___31537,G__31356_31526,n__4868__auto___31524,jobs,results,process,async){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (__31525,c__7600__auto___31537,G__31356_31526,n__4868__auto___31524,jobs,results,process,async){
return (function (state_31396){
var state_val_31397 = (state_31396[(1)]);
if((state_val_31397 === (7))){
var inst_31392 = (state_31396[(2)]);
var state_31396__$1 = state_31396;
var statearr_31398_31538 = state_31396__$1;
(statearr_31398_31538[(2)] = inst_31392);

(statearr_31398_31538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (6))){
var state_31396__$1 = state_31396;
var statearr_31399_31539 = state_31396__$1;
(statearr_31399_31539[(2)] = null);

(statearr_31399_31539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (5))){
var state_31396__$1 = state_31396;
var statearr_31400_31540 = state_31396__$1;
(statearr_31400_31540[(2)] = null);

(statearr_31400_31540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (4))){
var inst_31386 = (state_31396[(2)]);
var inst_31387 = process.call(null,inst_31386);
var state_31396__$1 = state_31396;
if(cljs.core.truth_(inst_31387)){
var statearr_31401_31541 = state_31396__$1;
(statearr_31401_31541[(1)] = (5));

} else {
var statearr_31402_31542 = state_31396__$1;
(statearr_31402_31542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (3))){
var inst_31394 = (state_31396[(2)]);
var state_31396__$1 = state_31396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31396__$1,inst_31394);
} else {
if((state_val_31397 === (2))){
var state_31396__$1 = state_31396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31396__$1,(4),jobs);
} else {
if((state_val_31397 === (1))){
var state_31396__$1 = state_31396;
var statearr_31403_31543 = state_31396__$1;
(statearr_31403_31543[(2)] = null);

(statearr_31403_31543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31525,c__7600__auto___31537,G__31356_31526,n__4868__auto___31524,jobs,results,process,async))
;
return ((function (__31525,switch__7585__auto__,c__7600__auto___31537,G__31356_31526,n__4868__auto___31524,jobs,results,process,async){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_31407 = [null,null,null,null,null,null,null];
(statearr_31407[(0)] = state_machine__7586__auto__);

(statearr_31407[(1)] = (1));

return statearr_31407;
});
var state_machine__7586__auto____1 = (function (state_31396){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_31396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e31408){if((e31408 instanceof Object)){
var ex__7589__auto__ = e31408;
var statearr_31409_31544 = state_31396;
(statearr_31409_31544[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31545 = state_31396;
state_31396 = G__31545;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_31396){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_31396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(__31525,switch__7585__auto__,c__7600__auto___31537,G__31356_31526,n__4868__auto___31524,jobs,results,process,async))
})();
var state__7602__auto__ = (function (){var statearr_31410 = f__7601__auto__.call(null);
(statearr_31410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___31537);

return statearr_31410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(__31525,c__7600__auto___31537,G__31356_31526,n__4868__auto___31524,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31546 = (__31525 + (1));
__31525 = G__31546;
continue;
} else {
}
break;
}

var c__7600__auto___31547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___31547,jobs,results,process,async){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___31547,jobs,results,process,async){
return (function (state_31432){
var state_val_31433 = (state_31432[(1)]);
if((state_val_31433 === (9))){
var inst_31425 = (state_31432[(2)]);
var state_31432__$1 = (function (){var statearr_31434 = state_31432;
(statearr_31434[(7)] = inst_31425);

return statearr_31434;
})();
var statearr_31435_31548 = state_31432__$1;
(statearr_31435_31548[(2)] = null);

(statearr_31435_31548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (8))){
var inst_31418 = (state_31432[(8)]);
var inst_31423 = (state_31432[(2)]);
var state_31432__$1 = (function (){var statearr_31436 = state_31432;
(statearr_31436[(9)] = inst_31423);

return statearr_31436;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31432__$1,(9),results,inst_31418);
} else {
if((state_val_31433 === (7))){
var inst_31428 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
var statearr_31437_31549 = state_31432__$1;
(statearr_31437_31549[(2)] = inst_31428);

(statearr_31437_31549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (6))){
var inst_31418 = (state_31432[(8)]);
var inst_31413 = (state_31432[(10)]);
var inst_31418__$1 = cljs.core.async.chan.call(null,(1));
var inst_31419 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31420 = [inst_31413,inst_31418__$1];
var inst_31421 = (new cljs.core.PersistentVector(null,2,(5),inst_31419,inst_31420,null));
var state_31432__$1 = (function (){var statearr_31438 = state_31432;
(statearr_31438[(8)] = inst_31418__$1);

return statearr_31438;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31432__$1,(8),jobs,inst_31421);
} else {
if((state_val_31433 === (5))){
var inst_31416 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31432__$1 = state_31432;
var statearr_31439_31550 = state_31432__$1;
(statearr_31439_31550[(2)] = inst_31416);

(statearr_31439_31550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (4))){
var inst_31413 = (state_31432[(10)]);
var inst_31413__$1 = (state_31432[(2)]);
var inst_31414 = (inst_31413__$1 == null);
var state_31432__$1 = (function (){var statearr_31440 = state_31432;
(statearr_31440[(10)] = inst_31413__$1);

return statearr_31440;
})();
if(cljs.core.truth_(inst_31414)){
var statearr_31441_31551 = state_31432__$1;
(statearr_31441_31551[(1)] = (5));

} else {
var statearr_31442_31552 = state_31432__$1;
(statearr_31442_31552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (3))){
var inst_31430 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31432__$1,inst_31430);
} else {
if((state_val_31433 === (2))){
var state_31432__$1 = state_31432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31432__$1,(4),from);
} else {
if((state_val_31433 === (1))){
var state_31432__$1 = state_31432;
var statearr_31443_31553 = state_31432__$1;
(statearr_31443_31553[(2)] = null);

(statearr_31443_31553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__7600__auto___31547,jobs,results,process,async))
;
return ((function (switch__7585__auto__,c__7600__auto___31547,jobs,results,process,async){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_31447 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31447[(0)] = state_machine__7586__auto__);

(statearr_31447[(1)] = (1));

return statearr_31447;
});
var state_machine__7586__auto____1 = (function (state_31432){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_31432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e31448){if((e31448 instanceof Object)){
var ex__7589__auto__ = e31448;
var statearr_31449_31554 = state_31432;
(statearr_31449_31554[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31555 = state_31432;
state_31432 = G__31555;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_31432){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_31432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___31547,jobs,results,process,async))
})();
var state__7602__auto__ = (function (){var statearr_31450 = f__7601__auto__.call(null);
(statearr_31450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___31547);

return statearr_31450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___31547,jobs,results,process,async))
);


var c__7600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto__,jobs,results,process,async){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto__,jobs,results,process,async){
return (function (state_31488){
var state_val_31489 = (state_31488[(1)]);
if((state_val_31489 === (7))){
var inst_31484 = (state_31488[(2)]);
var state_31488__$1 = state_31488;
var statearr_31490_31556 = state_31488__$1;
(statearr_31490_31556[(2)] = inst_31484);

(statearr_31490_31556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (20))){
var state_31488__$1 = state_31488;
var statearr_31491_31557 = state_31488__$1;
(statearr_31491_31557[(2)] = null);

(statearr_31491_31557[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (1))){
var state_31488__$1 = state_31488;
var statearr_31492_31558 = state_31488__$1;
(statearr_31492_31558[(2)] = null);

(statearr_31492_31558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (4))){
var inst_31453 = (state_31488[(7)]);
var inst_31453__$1 = (state_31488[(2)]);
var inst_31454 = (inst_31453__$1 == null);
var state_31488__$1 = (function (){var statearr_31493 = state_31488;
(statearr_31493[(7)] = inst_31453__$1);

return statearr_31493;
})();
if(cljs.core.truth_(inst_31454)){
var statearr_31494_31559 = state_31488__$1;
(statearr_31494_31559[(1)] = (5));

} else {
var statearr_31495_31560 = state_31488__$1;
(statearr_31495_31560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (15))){
var inst_31466 = (state_31488[(8)]);
var state_31488__$1 = state_31488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31488__$1,(18),to,inst_31466);
} else {
if((state_val_31489 === (21))){
var inst_31479 = (state_31488[(2)]);
var state_31488__$1 = state_31488;
var statearr_31496_31561 = state_31488__$1;
(statearr_31496_31561[(2)] = inst_31479);

(statearr_31496_31561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (13))){
var inst_31481 = (state_31488[(2)]);
var state_31488__$1 = (function (){var statearr_31497 = state_31488;
(statearr_31497[(9)] = inst_31481);

return statearr_31497;
})();
var statearr_31498_31562 = state_31488__$1;
(statearr_31498_31562[(2)] = null);

(statearr_31498_31562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (6))){
var inst_31453 = (state_31488[(7)]);
var state_31488__$1 = state_31488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31488__$1,(11),inst_31453);
} else {
if((state_val_31489 === (17))){
var inst_31474 = (state_31488[(2)]);
var state_31488__$1 = state_31488;
if(cljs.core.truth_(inst_31474)){
var statearr_31499_31563 = state_31488__$1;
(statearr_31499_31563[(1)] = (19));

} else {
var statearr_31500_31564 = state_31488__$1;
(statearr_31500_31564[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (3))){
var inst_31486 = (state_31488[(2)]);
var state_31488__$1 = state_31488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31488__$1,inst_31486);
} else {
if((state_val_31489 === (12))){
var inst_31463 = (state_31488[(10)]);
var state_31488__$1 = state_31488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31488__$1,(14),inst_31463);
} else {
if((state_val_31489 === (2))){
var state_31488__$1 = state_31488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31488__$1,(4),results);
} else {
if((state_val_31489 === (19))){
var state_31488__$1 = state_31488;
var statearr_31501_31565 = state_31488__$1;
(statearr_31501_31565[(2)] = null);

(statearr_31501_31565[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (11))){
var inst_31463 = (state_31488[(2)]);
var state_31488__$1 = (function (){var statearr_31502 = state_31488;
(statearr_31502[(10)] = inst_31463);

return statearr_31502;
})();
var statearr_31503_31566 = state_31488__$1;
(statearr_31503_31566[(2)] = null);

(statearr_31503_31566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (9))){
var state_31488__$1 = state_31488;
var statearr_31504_31567 = state_31488__$1;
(statearr_31504_31567[(2)] = null);

(statearr_31504_31567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (5))){
var state_31488__$1 = state_31488;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31505_31568 = state_31488__$1;
(statearr_31505_31568[(1)] = (8));

} else {
var statearr_31506_31569 = state_31488__$1;
(statearr_31506_31569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (14))){
var inst_31466 = (state_31488[(8)]);
var inst_31468 = (state_31488[(11)]);
var inst_31466__$1 = (state_31488[(2)]);
var inst_31467 = (inst_31466__$1 == null);
var inst_31468__$1 = cljs.core.not.call(null,inst_31467);
var state_31488__$1 = (function (){var statearr_31507 = state_31488;
(statearr_31507[(8)] = inst_31466__$1);

(statearr_31507[(11)] = inst_31468__$1);

return statearr_31507;
})();
if(inst_31468__$1){
var statearr_31508_31570 = state_31488__$1;
(statearr_31508_31570[(1)] = (15));

} else {
var statearr_31509_31571 = state_31488__$1;
(statearr_31509_31571[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (16))){
var inst_31468 = (state_31488[(11)]);
var state_31488__$1 = state_31488;
var statearr_31510_31572 = state_31488__$1;
(statearr_31510_31572[(2)] = inst_31468);

(statearr_31510_31572[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (10))){
var inst_31460 = (state_31488[(2)]);
var state_31488__$1 = state_31488;
var statearr_31511_31573 = state_31488__$1;
(statearr_31511_31573[(2)] = inst_31460);

(statearr_31511_31573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (18))){
var inst_31471 = (state_31488[(2)]);
var state_31488__$1 = state_31488;
var statearr_31512_31574 = state_31488__$1;
(statearr_31512_31574[(2)] = inst_31471);

(statearr_31512_31574[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (8))){
var inst_31457 = cljs.core.async.close_BANG_.call(null,to);
var state_31488__$1 = state_31488;
var statearr_31513_31575 = state_31488__$1;
(statearr_31513_31575[(2)] = inst_31457);

(statearr_31513_31575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7600__auto__,jobs,results,process,async))
;
return ((function (switch__7585__auto__,c__7600__auto__,jobs,results,process,async){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_31517 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31517[(0)] = state_machine__7586__auto__);

(statearr_31517[(1)] = (1));

return statearr_31517;
});
var state_machine__7586__auto____1 = (function (state_31488){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_31488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e31518){if((e31518 instanceof Object)){
var ex__7589__auto__ = e31518;
var statearr_31519_31576 = state_31488;
(statearr_31519_31576[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31577 = state_31488;
state_31488 = G__31577;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_31488){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_31488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto__,jobs,results,process,async))
})();
var state__7602__auto__ = (function (){var statearr_31520 = f__7601__auto__.call(null);
(statearr_31520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto__);

return statearr_31520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto__,jobs,results,process,async))
);

return c__7600__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7600__auto___31678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___31678,tc,fc){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___31678,tc,fc){
return (function (state_31653){
var state_val_31654 = (state_31653[(1)]);
if((state_val_31654 === (7))){
var inst_31649 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
var statearr_31655_31679 = state_31653__$1;
(statearr_31655_31679[(2)] = inst_31649);

(statearr_31655_31679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (1))){
var state_31653__$1 = state_31653;
var statearr_31656_31680 = state_31653__$1;
(statearr_31656_31680[(2)] = null);

(statearr_31656_31680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (4))){
var inst_31630 = (state_31653[(7)]);
var inst_31630__$1 = (state_31653[(2)]);
var inst_31631 = (inst_31630__$1 == null);
var state_31653__$1 = (function (){var statearr_31657 = state_31653;
(statearr_31657[(7)] = inst_31630__$1);

return statearr_31657;
})();
if(cljs.core.truth_(inst_31631)){
var statearr_31658_31681 = state_31653__$1;
(statearr_31658_31681[(1)] = (5));

} else {
var statearr_31659_31682 = state_31653__$1;
(statearr_31659_31682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (13))){
var state_31653__$1 = state_31653;
var statearr_31660_31683 = state_31653__$1;
(statearr_31660_31683[(2)] = null);

(statearr_31660_31683[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (6))){
var inst_31630 = (state_31653[(7)]);
var inst_31636 = p.call(null,inst_31630);
var state_31653__$1 = state_31653;
if(cljs.core.truth_(inst_31636)){
var statearr_31661_31684 = state_31653__$1;
(statearr_31661_31684[(1)] = (9));

} else {
var statearr_31662_31685 = state_31653__$1;
(statearr_31662_31685[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (3))){
var inst_31651 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31653__$1,inst_31651);
} else {
if((state_val_31654 === (12))){
var state_31653__$1 = state_31653;
var statearr_31663_31686 = state_31653__$1;
(statearr_31663_31686[(2)] = null);

(statearr_31663_31686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (2))){
var state_31653__$1 = state_31653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31653__$1,(4),ch);
} else {
if((state_val_31654 === (11))){
var inst_31630 = (state_31653[(7)]);
var inst_31640 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31653__$1,(8),inst_31640,inst_31630);
} else {
if((state_val_31654 === (9))){
var state_31653__$1 = state_31653;
var statearr_31664_31687 = state_31653__$1;
(statearr_31664_31687[(2)] = tc);

(statearr_31664_31687[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (5))){
var inst_31633 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31634 = cljs.core.async.close_BANG_.call(null,fc);
var state_31653__$1 = (function (){var statearr_31665 = state_31653;
(statearr_31665[(8)] = inst_31633);

return statearr_31665;
})();
var statearr_31666_31688 = state_31653__$1;
(statearr_31666_31688[(2)] = inst_31634);

(statearr_31666_31688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (14))){
var inst_31647 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
var statearr_31667_31689 = state_31653__$1;
(statearr_31667_31689[(2)] = inst_31647);

(statearr_31667_31689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (10))){
var state_31653__$1 = state_31653;
var statearr_31668_31690 = state_31653__$1;
(statearr_31668_31690[(2)] = fc);

(statearr_31668_31690[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31654 === (8))){
var inst_31642 = (state_31653[(2)]);
var state_31653__$1 = state_31653;
if(cljs.core.truth_(inst_31642)){
var statearr_31669_31691 = state_31653__$1;
(statearr_31669_31691[(1)] = (12));

} else {
var statearr_31670_31692 = state_31653__$1;
(statearr_31670_31692[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7600__auto___31678,tc,fc))
;
return ((function (switch__7585__auto__,c__7600__auto___31678,tc,fc){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_31674 = [null,null,null,null,null,null,null,null,null];
(statearr_31674[(0)] = state_machine__7586__auto__);

(statearr_31674[(1)] = (1));

return statearr_31674;
});
var state_machine__7586__auto____1 = (function (state_31653){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_31653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e31675){if((e31675 instanceof Object)){
var ex__7589__auto__ = e31675;
var statearr_31676_31693 = state_31653;
(statearr_31676_31693[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31694 = state_31653;
state_31653 = G__31694;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_31653){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_31653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___31678,tc,fc))
})();
var state__7602__auto__ = (function (){var statearr_31677 = f__7601__auto__.call(null);
(statearr_31677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___31678);

return statearr_31677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___31678,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__7600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto__){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto__){
return (function (state_31741){
var state_val_31742 = (state_31741[(1)]);
if((state_val_31742 === (7))){
var inst_31737 = (state_31741[(2)]);
var state_31741__$1 = state_31741;
var statearr_31743_31759 = state_31741__$1;
(statearr_31743_31759[(2)] = inst_31737);

(statearr_31743_31759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31742 === (6))){
var inst_31727 = (state_31741[(7)]);
var inst_31730 = (state_31741[(8)]);
var inst_31734 = f.call(null,inst_31727,inst_31730);
var inst_31727__$1 = inst_31734;
var state_31741__$1 = (function (){var statearr_31744 = state_31741;
(statearr_31744[(7)] = inst_31727__$1);

return statearr_31744;
})();
var statearr_31745_31760 = state_31741__$1;
(statearr_31745_31760[(2)] = null);

(statearr_31745_31760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31742 === (5))){
var inst_31727 = (state_31741[(7)]);
var state_31741__$1 = state_31741;
var statearr_31746_31761 = state_31741__$1;
(statearr_31746_31761[(2)] = inst_31727);

(statearr_31746_31761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31742 === (4))){
var inst_31730 = (state_31741[(8)]);
var inst_31730__$1 = (state_31741[(2)]);
var inst_31731 = (inst_31730__$1 == null);
var state_31741__$1 = (function (){var statearr_31747 = state_31741;
(statearr_31747[(8)] = inst_31730__$1);

return statearr_31747;
})();
if(cljs.core.truth_(inst_31731)){
var statearr_31748_31762 = state_31741__$1;
(statearr_31748_31762[(1)] = (5));

} else {
var statearr_31749_31763 = state_31741__$1;
(statearr_31749_31763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31742 === (3))){
var inst_31739 = (state_31741[(2)]);
var state_31741__$1 = state_31741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31741__$1,inst_31739);
} else {
if((state_val_31742 === (2))){
var state_31741__$1 = state_31741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31741__$1,(4),ch);
} else {
if((state_val_31742 === (1))){
var inst_31727 = init;
var state_31741__$1 = (function (){var statearr_31750 = state_31741;
(statearr_31750[(7)] = inst_31727);

return statearr_31750;
})();
var statearr_31751_31764 = state_31741__$1;
(statearr_31751_31764[(2)] = null);

(statearr_31751_31764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
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
var statearr_31755 = [null,null,null,null,null,null,null,null,null];
(statearr_31755[(0)] = state_machine__7586__auto__);

(statearr_31755[(1)] = (1));

return statearr_31755;
});
var state_machine__7586__auto____1 = (function (state_31741){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_31741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e31756){if((e31756 instanceof Object)){
var ex__7589__auto__ = e31756;
var statearr_31757_31765 = state_31741;
(statearr_31757_31765[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31766 = state_31741;
state_31741 = G__31766;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_31741){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_31741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto__))
})();
var state__7602__auto__ = (function (){var statearr_31758 = f__7601__auto__.call(null);
(statearr_31758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto__);

return statearr_31758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto__))
);

return c__7600__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__7600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto__){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto__){
return (function (state_31840){
var state_val_31841 = (state_31840[(1)]);
if((state_val_31841 === (7))){
var inst_31822 = (state_31840[(2)]);
var state_31840__$1 = state_31840;
var statearr_31842_31865 = state_31840__$1;
(statearr_31842_31865[(2)] = inst_31822);

(statearr_31842_31865[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (1))){
var inst_31816 = cljs.core.seq.call(null,coll);
var inst_31817 = inst_31816;
var state_31840__$1 = (function (){var statearr_31843 = state_31840;
(statearr_31843[(7)] = inst_31817);

return statearr_31843;
})();
var statearr_31844_31866 = state_31840__$1;
(statearr_31844_31866[(2)] = null);

(statearr_31844_31866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (4))){
var inst_31817 = (state_31840[(7)]);
var inst_31820 = cljs.core.first.call(null,inst_31817);
var state_31840__$1 = state_31840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31840__$1,(7),ch,inst_31820);
} else {
if((state_val_31841 === (13))){
var inst_31834 = (state_31840[(2)]);
var state_31840__$1 = state_31840;
var statearr_31845_31867 = state_31840__$1;
(statearr_31845_31867[(2)] = inst_31834);

(statearr_31845_31867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (6))){
var inst_31825 = (state_31840[(2)]);
var state_31840__$1 = state_31840;
if(cljs.core.truth_(inst_31825)){
var statearr_31846_31868 = state_31840__$1;
(statearr_31846_31868[(1)] = (8));

} else {
var statearr_31847_31869 = state_31840__$1;
(statearr_31847_31869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (3))){
var inst_31838 = (state_31840[(2)]);
var state_31840__$1 = state_31840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31840__$1,inst_31838);
} else {
if((state_val_31841 === (12))){
var state_31840__$1 = state_31840;
var statearr_31848_31870 = state_31840__$1;
(statearr_31848_31870[(2)] = null);

(statearr_31848_31870[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (2))){
var inst_31817 = (state_31840[(7)]);
var state_31840__$1 = state_31840;
if(cljs.core.truth_(inst_31817)){
var statearr_31849_31871 = state_31840__$1;
(statearr_31849_31871[(1)] = (4));

} else {
var statearr_31850_31872 = state_31840__$1;
(statearr_31850_31872[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (11))){
var inst_31831 = cljs.core.async.close_BANG_.call(null,ch);
var state_31840__$1 = state_31840;
var statearr_31851_31873 = state_31840__$1;
(statearr_31851_31873[(2)] = inst_31831);

(statearr_31851_31873[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (9))){
var state_31840__$1 = state_31840;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31852_31874 = state_31840__$1;
(statearr_31852_31874[(1)] = (11));

} else {
var statearr_31853_31875 = state_31840__$1;
(statearr_31853_31875[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (5))){
var inst_31817 = (state_31840[(7)]);
var state_31840__$1 = state_31840;
var statearr_31854_31876 = state_31840__$1;
(statearr_31854_31876[(2)] = inst_31817);

(statearr_31854_31876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (10))){
var inst_31836 = (state_31840[(2)]);
var state_31840__$1 = state_31840;
var statearr_31855_31877 = state_31840__$1;
(statearr_31855_31877[(2)] = inst_31836);

(statearr_31855_31877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (8))){
var inst_31817 = (state_31840[(7)]);
var inst_31827 = cljs.core.next.call(null,inst_31817);
var inst_31817__$1 = inst_31827;
var state_31840__$1 = (function (){var statearr_31856 = state_31840;
(statearr_31856[(7)] = inst_31817__$1);

return statearr_31856;
})();
var statearr_31857_31878 = state_31840__$1;
(statearr_31857_31878[(2)] = null);

(statearr_31857_31878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
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
var statearr_31861 = [null,null,null,null,null,null,null,null];
(statearr_31861[(0)] = state_machine__7586__auto__);

(statearr_31861[(1)] = (1));

return statearr_31861;
});
var state_machine__7586__auto____1 = (function (state_31840){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_31840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e31862){if((e31862 instanceof Object)){
var ex__7589__auto__ = e31862;
var statearr_31863_31879 = state_31840;
(statearr_31863_31879[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31880 = state_31840;
state_31840 = G__31880;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_31840){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_31840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto__))
})();
var state__7602__auto__ = (function (){var statearr_31864 = f__7601__auto__.call(null);
(statearr_31864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto__);

return statearr_31864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto__))
);

return c__7600__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj31882 = {};
return obj31882;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3969__auto__ = _;
if(and__3969__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3969__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4625__auto__ = (((_ == null))?null:_);
return (function (){var or__3981__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj31884 = {};
return obj31884;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3969__auto__ = m;
if(and__3969__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3969__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4625__auto__ = (((m == null))?null:m);
return (function (){var or__3981__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3969__auto__ = m;
if(and__3969__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3969__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4625__auto__ = (((m == null))?null:m);
return (function (){var or__3981__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3969__auto__ = m;
if(and__3969__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3969__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4625__auto__ = (((m == null))?null:m);
return (function (){var or__3981__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t32106 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32106 = (function (cs,ch,mult,meta32107){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32107 = meta32107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32106.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t32106.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t32106.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t32106.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t32106.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32106.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t32106.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32108){
var self__ = this;
var _32108__$1 = this;
return self__.meta32107;
});})(cs))
;

cljs.core.async.t32106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32108,meta32107__$1){
var self__ = this;
var _32108__$1 = this;
return (new cljs.core.async.t32106(self__.cs,self__.ch,self__.mult,meta32107__$1));
});})(cs))
;

cljs.core.async.t32106.cljs$lang$type = true;

cljs.core.async.t32106.cljs$lang$ctorStr = "cljs.core.async/t32106";

cljs.core.async.t32106.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t32106");
});})(cs))
;

cljs.core.async.__GT_t32106 = ((function (cs){
return (function __GT_t32106(cs__$1,ch__$1,mult__$1,meta32107){
return (new cljs.core.async.t32106(cs__$1,ch__$1,mult__$1,meta32107));
});})(cs))
;

}

return (new cljs.core.async.t32106(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7600__auto___32327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___32327,cs,m,dchan,dctr,done){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___32327,cs,m,dchan,dctr,done){
return (function (state_32239){
var state_val_32240 = (state_32239[(1)]);
if((state_val_32240 === (7))){
var inst_32235 = (state_32239[(2)]);
var state_32239__$1 = state_32239;
var statearr_32241_32328 = state_32239__$1;
(statearr_32241_32328[(2)] = inst_32235);

(statearr_32241_32328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (20))){
var inst_32140 = (state_32239[(7)]);
var inst_32150 = cljs.core.first.call(null,inst_32140);
var inst_32151 = cljs.core.nth.call(null,inst_32150,(0),null);
var inst_32152 = cljs.core.nth.call(null,inst_32150,(1),null);
var state_32239__$1 = (function (){var statearr_32242 = state_32239;
(statearr_32242[(8)] = inst_32151);

return statearr_32242;
})();
if(cljs.core.truth_(inst_32152)){
var statearr_32243_32329 = state_32239__$1;
(statearr_32243_32329[(1)] = (22));

} else {
var statearr_32244_32330 = state_32239__$1;
(statearr_32244_32330[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (27))){
var inst_32187 = (state_32239[(9)]);
var inst_32182 = (state_32239[(10)]);
var inst_32111 = (state_32239[(11)]);
var inst_32180 = (state_32239[(12)]);
var inst_32187__$1 = cljs.core._nth.call(null,inst_32180,inst_32182);
var inst_32188 = cljs.core.async.put_BANG_.call(null,inst_32187__$1,inst_32111,done);
var state_32239__$1 = (function (){var statearr_32245 = state_32239;
(statearr_32245[(9)] = inst_32187__$1);

return statearr_32245;
})();
if(cljs.core.truth_(inst_32188)){
var statearr_32246_32331 = state_32239__$1;
(statearr_32246_32331[(1)] = (30));

} else {
var statearr_32247_32332 = state_32239__$1;
(statearr_32247_32332[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (1))){
var state_32239__$1 = state_32239;
var statearr_32248_32333 = state_32239__$1;
(statearr_32248_32333[(2)] = null);

(statearr_32248_32333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (24))){
var inst_32140 = (state_32239[(7)]);
var inst_32157 = (state_32239[(2)]);
var inst_32158 = cljs.core.next.call(null,inst_32140);
var inst_32120 = inst_32158;
var inst_32121 = null;
var inst_32122 = (0);
var inst_32123 = (0);
var state_32239__$1 = (function (){var statearr_32249 = state_32239;
(statearr_32249[(13)] = inst_32157);

(statearr_32249[(14)] = inst_32121);

(statearr_32249[(15)] = inst_32123);

(statearr_32249[(16)] = inst_32122);

(statearr_32249[(17)] = inst_32120);

return statearr_32249;
})();
var statearr_32250_32334 = state_32239__$1;
(statearr_32250_32334[(2)] = null);

(statearr_32250_32334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (39))){
var state_32239__$1 = state_32239;
var statearr_32254_32335 = state_32239__$1;
(statearr_32254_32335[(2)] = null);

(statearr_32254_32335[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (4))){
var inst_32111 = (state_32239[(11)]);
var inst_32111__$1 = (state_32239[(2)]);
var inst_32112 = (inst_32111__$1 == null);
var state_32239__$1 = (function (){var statearr_32255 = state_32239;
(statearr_32255[(11)] = inst_32111__$1);

return statearr_32255;
})();
if(cljs.core.truth_(inst_32112)){
var statearr_32256_32336 = state_32239__$1;
(statearr_32256_32336[(1)] = (5));

} else {
var statearr_32257_32337 = state_32239__$1;
(statearr_32257_32337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (15))){
var inst_32121 = (state_32239[(14)]);
var inst_32123 = (state_32239[(15)]);
var inst_32122 = (state_32239[(16)]);
var inst_32120 = (state_32239[(17)]);
var inst_32136 = (state_32239[(2)]);
var inst_32137 = (inst_32123 + (1));
var tmp32251 = inst_32121;
var tmp32252 = inst_32122;
var tmp32253 = inst_32120;
var inst_32120__$1 = tmp32253;
var inst_32121__$1 = tmp32251;
var inst_32122__$1 = tmp32252;
var inst_32123__$1 = inst_32137;
var state_32239__$1 = (function (){var statearr_32258 = state_32239;
(statearr_32258[(18)] = inst_32136);

(statearr_32258[(14)] = inst_32121__$1);

(statearr_32258[(15)] = inst_32123__$1);

(statearr_32258[(16)] = inst_32122__$1);

(statearr_32258[(17)] = inst_32120__$1);

return statearr_32258;
})();
var statearr_32259_32338 = state_32239__$1;
(statearr_32259_32338[(2)] = null);

(statearr_32259_32338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (21))){
var inst_32161 = (state_32239[(2)]);
var state_32239__$1 = state_32239;
var statearr_32263_32339 = state_32239__$1;
(statearr_32263_32339[(2)] = inst_32161);

(statearr_32263_32339[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (31))){
var inst_32187 = (state_32239[(9)]);
var inst_32191 = done.call(null,null);
var inst_32192 = cljs.core.async.untap_STAR_.call(null,m,inst_32187);
var state_32239__$1 = (function (){var statearr_32264 = state_32239;
(statearr_32264[(19)] = inst_32191);

return statearr_32264;
})();
var statearr_32265_32340 = state_32239__$1;
(statearr_32265_32340[(2)] = inst_32192);

(statearr_32265_32340[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (32))){
var inst_32179 = (state_32239[(20)]);
var inst_32181 = (state_32239[(21)]);
var inst_32182 = (state_32239[(10)]);
var inst_32180 = (state_32239[(12)]);
var inst_32194 = (state_32239[(2)]);
var inst_32195 = (inst_32182 + (1));
var tmp32260 = inst_32179;
var tmp32261 = inst_32181;
var tmp32262 = inst_32180;
var inst_32179__$1 = tmp32260;
var inst_32180__$1 = tmp32262;
var inst_32181__$1 = tmp32261;
var inst_32182__$1 = inst_32195;
var state_32239__$1 = (function (){var statearr_32266 = state_32239;
(statearr_32266[(20)] = inst_32179__$1);

(statearr_32266[(21)] = inst_32181__$1);

(statearr_32266[(10)] = inst_32182__$1);

(statearr_32266[(22)] = inst_32194);

(statearr_32266[(12)] = inst_32180__$1);

return statearr_32266;
})();
var statearr_32267_32341 = state_32239__$1;
(statearr_32267_32341[(2)] = null);

(statearr_32267_32341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (40))){
var inst_32207 = (state_32239[(23)]);
var inst_32211 = done.call(null,null);
var inst_32212 = cljs.core.async.untap_STAR_.call(null,m,inst_32207);
var state_32239__$1 = (function (){var statearr_32268 = state_32239;
(statearr_32268[(24)] = inst_32211);

return statearr_32268;
})();
var statearr_32269_32342 = state_32239__$1;
(statearr_32269_32342[(2)] = inst_32212);

(statearr_32269_32342[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (33))){
var inst_32198 = (state_32239[(25)]);
var inst_32200 = cljs.core.chunked_seq_QMARK_.call(null,inst_32198);
var state_32239__$1 = state_32239;
if(inst_32200){
var statearr_32270_32343 = state_32239__$1;
(statearr_32270_32343[(1)] = (36));

} else {
var statearr_32271_32344 = state_32239__$1;
(statearr_32271_32344[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (13))){
var inst_32130 = (state_32239[(26)]);
var inst_32133 = cljs.core.async.close_BANG_.call(null,inst_32130);
var state_32239__$1 = state_32239;
var statearr_32272_32345 = state_32239__$1;
(statearr_32272_32345[(2)] = inst_32133);

(statearr_32272_32345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (22))){
var inst_32151 = (state_32239[(8)]);
var inst_32154 = cljs.core.async.close_BANG_.call(null,inst_32151);
var state_32239__$1 = state_32239;
var statearr_32273_32346 = state_32239__$1;
(statearr_32273_32346[(2)] = inst_32154);

(statearr_32273_32346[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (36))){
var inst_32198 = (state_32239[(25)]);
var inst_32202 = cljs.core.chunk_first.call(null,inst_32198);
var inst_32203 = cljs.core.chunk_rest.call(null,inst_32198);
var inst_32204 = cljs.core.count.call(null,inst_32202);
var inst_32179 = inst_32203;
var inst_32180 = inst_32202;
var inst_32181 = inst_32204;
var inst_32182 = (0);
var state_32239__$1 = (function (){var statearr_32274 = state_32239;
(statearr_32274[(20)] = inst_32179);

(statearr_32274[(21)] = inst_32181);

(statearr_32274[(10)] = inst_32182);

(statearr_32274[(12)] = inst_32180);

return statearr_32274;
})();
var statearr_32275_32347 = state_32239__$1;
(statearr_32275_32347[(2)] = null);

(statearr_32275_32347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (41))){
var inst_32198 = (state_32239[(25)]);
var inst_32214 = (state_32239[(2)]);
var inst_32215 = cljs.core.next.call(null,inst_32198);
var inst_32179 = inst_32215;
var inst_32180 = null;
var inst_32181 = (0);
var inst_32182 = (0);
var state_32239__$1 = (function (){var statearr_32276 = state_32239;
(statearr_32276[(27)] = inst_32214);

(statearr_32276[(20)] = inst_32179);

(statearr_32276[(21)] = inst_32181);

(statearr_32276[(10)] = inst_32182);

(statearr_32276[(12)] = inst_32180);

return statearr_32276;
})();
var statearr_32277_32348 = state_32239__$1;
(statearr_32277_32348[(2)] = null);

(statearr_32277_32348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (43))){
var state_32239__$1 = state_32239;
var statearr_32278_32349 = state_32239__$1;
(statearr_32278_32349[(2)] = null);

(statearr_32278_32349[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (29))){
var inst_32223 = (state_32239[(2)]);
var state_32239__$1 = state_32239;
var statearr_32279_32350 = state_32239__$1;
(statearr_32279_32350[(2)] = inst_32223);

(statearr_32279_32350[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (44))){
var inst_32232 = (state_32239[(2)]);
var state_32239__$1 = (function (){var statearr_32280 = state_32239;
(statearr_32280[(28)] = inst_32232);

return statearr_32280;
})();
var statearr_32281_32351 = state_32239__$1;
(statearr_32281_32351[(2)] = null);

(statearr_32281_32351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (6))){
var inst_32171 = (state_32239[(29)]);
var inst_32170 = cljs.core.deref.call(null,cs);
var inst_32171__$1 = cljs.core.keys.call(null,inst_32170);
var inst_32172 = cljs.core.count.call(null,inst_32171__$1);
var inst_32173 = cljs.core.reset_BANG_.call(null,dctr,inst_32172);
var inst_32178 = cljs.core.seq.call(null,inst_32171__$1);
var inst_32179 = inst_32178;
var inst_32180 = null;
var inst_32181 = (0);
var inst_32182 = (0);
var state_32239__$1 = (function (){var statearr_32282 = state_32239;
(statearr_32282[(30)] = inst_32173);

(statearr_32282[(20)] = inst_32179);

(statearr_32282[(21)] = inst_32181);

(statearr_32282[(10)] = inst_32182);

(statearr_32282[(12)] = inst_32180);

(statearr_32282[(29)] = inst_32171__$1);

return statearr_32282;
})();
var statearr_32283_32352 = state_32239__$1;
(statearr_32283_32352[(2)] = null);

(statearr_32283_32352[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (28))){
var inst_32179 = (state_32239[(20)]);
var inst_32198 = (state_32239[(25)]);
var inst_32198__$1 = cljs.core.seq.call(null,inst_32179);
var state_32239__$1 = (function (){var statearr_32284 = state_32239;
(statearr_32284[(25)] = inst_32198__$1);

return statearr_32284;
})();
if(inst_32198__$1){
var statearr_32285_32353 = state_32239__$1;
(statearr_32285_32353[(1)] = (33));

} else {
var statearr_32286_32354 = state_32239__$1;
(statearr_32286_32354[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (25))){
var inst_32181 = (state_32239[(21)]);
var inst_32182 = (state_32239[(10)]);
var inst_32184 = (inst_32182 < inst_32181);
var inst_32185 = inst_32184;
var state_32239__$1 = state_32239;
if(cljs.core.truth_(inst_32185)){
var statearr_32287_32355 = state_32239__$1;
(statearr_32287_32355[(1)] = (27));

} else {
var statearr_32288_32356 = state_32239__$1;
(statearr_32288_32356[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (34))){
var state_32239__$1 = state_32239;
var statearr_32289_32357 = state_32239__$1;
(statearr_32289_32357[(2)] = null);

(statearr_32289_32357[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (17))){
var state_32239__$1 = state_32239;
var statearr_32290_32358 = state_32239__$1;
(statearr_32290_32358[(2)] = null);

(statearr_32290_32358[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (3))){
var inst_32237 = (state_32239[(2)]);
var state_32239__$1 = state_32239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32239__$1,inst_32237);
} else {
if((state_val_32240 === (12))){
var inst_32166 = (state_32239[(2)]);
var state_32239__$1 = state_32239;
var statearr_32291_32359 = state_32239__$1;
(statearr_32291_32359[(2)] = inst_32166);

(statearr_32291_32359[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (2))){
var state_32239__$1 = state_32239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32239__$1,(4),ch);
} else {
if((state_val_32240 === (23))){
var state_32239__$1 = state_32239;
var statearr_32292_32360 = state_32239__$1;
(statearr_32292_32360[(2)] = null);

(statearr_32292_32360[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (35))){
var inst_32221 = (state_32239[(2)]);
var state_32239__$1 = state_32239;
var statearr_32293_32361 = state_32239__$1;
(statearr_32293_32361[(2)] = inst_32221);

(statearr_32293_32361[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (19))){
var inst_32140 = (state_32239[(7)]);
var inst_32144 = cljs.core.chunk_first.call(null,inst_32140);
var inst_32145 = cljs.core.chunk_rest.call(null,inst_32140);
var inst_32146 = cljs.core.count.call(null,inst_32144);
var inst_32120 = inst_32145;
var inst_32121 = inst_32144;
var inst_32122 = inst_32146;
var inst_32123 = (0);
var state_32239__$1 = (function (){var statearr_32294 = state_32239;
(statearr_32294[(14)] = inst_32121);

(statearr_32294[(15)] = inst_32123);

(statearr_32294[(16)] = inst_32122);

(statearr_32294[(17)] = inst_32120);

return statearr_32294;
})();
var statearr_32295_32362 = state_32239__$1;
(statearr_32295_32362[(2)] = null);

(statearr_32295_32362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (11))){
var inst_32140 = (state_32239[(7)]);
var inst_32120 = (state_32239[(17)]);
var inst_32140__$1 = cljs.core.seq.call(null,inst_32120);
var state_32239__$1 = (function (){var statearr_32296 = state_32239;
(statearr_32296[(7)] = inst_32140__$1);

return statearr_32296;
})();
if(inst_32140__$1){
var statearr_32297_32363 = state_32239__$1;
(statearr_32297_32363[(1)] = (16));

} else {
var statearr_32298_32364 = state_32239__$1;
(statearr_32298_32364[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (9))){
var inst_32168 = (state_32239[(2)]);
var state_32239__$1 = state_32239;
var statearr_32299_32365 = state_32239__$1;
(statearr_32299_32365[(2)] = inst_32168);

(statearr_32299_32365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (5))){
var inst_32118 = cljs.core.deref.call(null,cs);
var inst_32119 = cljs.core.seq.call(null,inst_32118);
var inst_32120 = inst_32119;
var inst_32121 = null;
var inst_32122 = (0);
var inst_32123 = (0);
var state_32239__$1 = (function (){var statearr_32300 = state_32239;
(statearr_32300[(14)] = inst_32121);

(statearr_32300[(15)] = inst_32123);

(statearr_32300[(16)] = inst_32122);

(statearr_32300[(17)] = inst_32120);

return statearr_32300;
})();
var statearr_32301_32366 = state_32239__$1;
(statearr_32301_32366[(2)] = null);

(statearr_32301_32366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (14))){
var state_32239__$1 = state_32239;
var statearr_32302_32367 = state_32239__$1;
(statearr_32302_32367[(2)] = null);

(statearr_32302_32367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (45))){
var inst_32229 = (state_32239[(2)]);
var state_32239__$1 = state_32239;
var statearr_32303_32368 = state_32239__$1;
(statearr_32303_32368[(2)] = inst_32229);

(statearr_32303_32368[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (26))){
var inst_32171 = (state_32239[(29)]);
var inst_32225 = (state_32239[(2)]);
var inst_32226 = cljs.core.seq.call(null,inst_32171);
var state_32239__$1 = (function (){var statearr_32304 = state_32239;
(statearr_32304[(31)] = inst_32225);

return statearr_32304;
})();
if(inst_32226){
var statearr_32305_32369 = state_32239__$1;
(statearr_32305_32369[(1)] = (42));

} else {
var statearr_32306_32370 = state_32239__$1;
(statearr_32306_32370[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (16))){
var inst_32140 = (state_32239[(7)]);
var inst_32142 = cljs.core.chunked_seq_QMARK_.call(null,inst_32140);
var state_32239__$1 = state_32239;
if(inst_32142){
var statearr_32307_32371 = state_32239__$1;
(statearr_32307_32371[(1)] = (19));

} else {
var statearr_32308_32372 = state_32239__$1;
(statearr_32308_32372[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (38))){
var inst_32218 = (state_32239[(2)]);
var state_32239__$1 = state_32239;
var statearr_32309_32373 = state_32239__$1;
(statearr_32309_32373[(2)] = inst_32218);

(statearr_32309_32373[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (30))){
var state_32239__$1 = state_32239;
var statearr_32310_32374 = state_32239__$1;
(statearr_32310_32374[(2)] = null);

(statearr_32310_32374[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (10))){
var inst_32121 = (state_32239[(14)]);
var inst_32123 = (state_32239[(15)]);
var inst_32129 = cljs.core._nth.call(null,inst_32121,inst_32123);
var inst_32130 = cljs.core.nth.call(null,inst_32129,(0),null);
var inst_32131 = cljs.core.nth.call(null,inst_32129,(1),null);
var state_32239__$1 = (function (){var statearr_32311 = state_32239;
(statearr_32311[(26)] = inst_32130);

return statearr_32311;
})();
if(cljs.core.truth_(inst_32131)){
var statearr_32312_32375 = state_32239__$1;
(statearr_32312_32375[(1)] = (13));

} else {
var statearr_32313_32376 = state_32239__$1;
(statearr_32313_32376[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (18))){
var inst_32164 = (state_32239[(2)]);
var state_32239__$1 = state_32239;
var statearr_32314_32377 = state_32239__$1;
(statearr_32314_32377[(2)] = inst_32164);

(statearr_32314_32377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (42))){
var state_32239__$1 = state_32239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32239__$1,(45),dchan);
} else {
if((state_val_32240 === (37))){
var inst_32207 = (state_32239[(23)]);
var inst_32111 = (state_32239[(11)]);
var inst_32198 = (state_32239[(25)]);
var inst_32207__$1 = cljs.core.first.call(null,inst_32198);
var inst_32208 = cljs.core.async.put_BANG_.call(null,inst_32207__$1,inst_32111,done);
var state_32239__$1 = (function (){var statearr_32315 = state_32239;
(statearr_32315[(23)] = inst_32207__$1);

return statearr_32315;
})();
if(cljs.core.truth_(inst_32208)){
var statearr_32316_32378 = state_32239__$1;
(statearr_32316_32378[(1)] = (39));

} else {
var statearr_32317_32379 = state_32239__$1;
(statearr_32317_32379[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32240 === (8))){
var inst_32123 = (state_32239[(15)]);
var inst_32122 = (state_32239[(16)]);
var inst_32125 = (inst_32123 < inst_32122);
var inst_32126 = inst_32125;
var state_32239__$1 = state_32239;
if(cljs.core.truth_(inst_32126)){
var statearr_32318_32380 = state_32239__$1;
(statearr_32318_32380[(1)] = (10));

} else {
var statearr_32319_32381 = state_32239__$1;
(statearr_32319_32381[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7600__auto___32327,cs,m,dchan,dctr,done))
;
return ((function (switch__7585__auto__,c__7600__auto___32327,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_32323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32323[(0)] = state_machine__7586__auto__);

(statearr_32323[(1)] = (1));

return statearr_32323;
});
var state_machine__7586__auto____1 = (function (state_32239){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_32239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e32324){if((e32324 instanceof Object)){
var ex__7589__auto__ = e32324;
var statearr_32325_32382 = state_32239;
(statearr_32325_32382[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32383 = state_32239;
state_32239 = G__32383;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_32239){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_32239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___32327,cs,m,dchan,dctr,done))
})();
var state__7602__auto__ = (function (){var statearr_32326 = f__7601__auto__.call(null);
(statearr_32326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___32327);

return statearr_32326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___32327,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj32385 = {};
return obj32385;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3969__auto__ = m;
if(and__3969__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3969__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4625__auto__ = (((m == null))?null:m);
return (function (){var or__3981__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3969__auto__ = m;
if(and__3969__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3969__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4625__auto__ = (((m == null))?null:m);
return (function (){var or__3981__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3969__auto__ = m;
if(and__3969__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3969__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4625__auto__ = (((m == null))?null:m);
return (function (){var or__3981__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3969__auto__ = m;
if(and__3969__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3969__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4625__auto__ = (((m == null))?null:m);
return (function (){var or__3981__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3969__auto__ = m;
if(and__3969__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3969__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4625__auto__ = (((m == null))?null:m);
return (function (){var or__3981__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__32386){
var map__32391 = p__32386;
var map__32391__$1 = ((cljs.core.seq_QMARK_.call(null,map__32391))?cljs.core.apply.call(null,cljs.core.hash_map,map__32391):map__32391);
var opts = map__32391__$1;
var statearr_32392_32395 = state;
(statearr_32392_32395[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__32391,map__32391__$1,opts){
return (function (val){
var statearr_32393_32396 = state;
(statearr_32393_32396[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32391,map__32391__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_32394_32397 = state;
(statearr_32394_32397[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__32386 = null;
if (arguments.length > 3) {
var G__32398__i = 0, G__32398__a = new Array(arguments.length -  3);
while (G__32398__i < G__32398__a.length) {G__32398__a[G__32398__i] = arguments[G__32398__i + 3]; ++G__32398__i;}
  p__32386 = new cljs.core.IndexedSeq(G__32398__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__32386);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__32399){
var state = cljs.core.first(arglist__32399);
arglist__32399 = cljs.core.next(arglist__32399);
var cont_block = cljs.core.first(arglist__32399);
arglist__32399 = cljs.core.next(arglist__32399);
var ports = cljs.core.first(arglist__32399);
var p__32386 = cljs.core.rest(arglist__32399);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__32386);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t32519 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32519 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32520){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32520 = meta32520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32519.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t32519.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32519.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32519.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32519.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32519.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32519.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32519.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32519.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32521){
var self__ = this;
var _32521__$1 = this;
return self__.meta32520;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32521,meta32520__$1){
var self__ = this;
var _32521__$1 = this;
return (new cljs.core.async.t32519(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32520__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32519.cljs$lang$type = true;

cljs.core.async.t32519.cljs$lang$ctorStr = "cljs.core.async/t32519";

cljs.core.async.t32519.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t32519");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t32519 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32519(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32520){
return (new cljs.core.async.t32519(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32520));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t32519(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7600__auto___32638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___32638,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___32638,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32591){
var state_val_32592 = (state_32591[(1)]);
if((state_val_32592 === (7))){
var inst_32535 = (state_32591[(7)]);
var inst_32540 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32535);
var state_32591__$1 = state_32591;
var statearr_32593_32639 = state_32591__$1;
(statearr_32593_32639[(2)] = inst_32540);

(statearr_32593_32639[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (20))){
var inst_32550 = (state_32591[(8)]);
var state_32591__$1 = state_32591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32591__$1,(23),out,inst_32550);
} else {
if((state_val_32592 === (1))){
var inst_32525 = (state_32591[(9)]);
var inst_32525__$1 = calc_state.call(null);
var inst_32526 = cljs.core.seq_QMARK_.call(null,inst_32525__$1);
var state_32591__$1 = (function (){var statearr_32594 = state_32591;
(statearr_32594[(9)] = inst_32525__$1);

return statearr_32594;
})();
if(inst_32526){
var statearr_32595_32640 = state_32591__$1;
(statearr_32595_32640[(1)] = (2));

} else {
var statearr_32596_32641 = state_32591__$1;
(statearr_32596_32641[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (24))){
var inst_32543 = (state_32591[(10)]);
var inst_32535 = inst_32543;
var state_32591__$1 = (function (){var statearr_32597 = state_32591;
(statearr_32597[(7)] = inst_32535);

return statearr_32597;
})();
var statearr_32598_32642 = state_32591__$1;
(statearr_32598_32642[(2)] = null);

(statearr_32598_32642[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (4))){
var inst_32525 = (state_32591[(9)]);
var inst_32531 = (state_32591[(2)]);
var inst_32532 = cljs.core.get.call(null,inst_32531,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32533 = cljs.core.get.call(null,inst_32531,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32534 = cljs.core.get.call(null,inst_32531,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32535 = inst_32525;
var state_32591__$1 = (function (){var statearr_32599 = state_32591;
(statearr_32599[(11)] = inst_32534);

(statearr_32599[(12)] = inst_32533);

(statearr_32599[(13)] = inst_32532);

(statearr_32599[(7)] = inst_32535);

return statearr_32599;
})();
var statearr_32600_32643 = state_32591__$1;
(statearr_32600_32643[(2)] = null);

(statearr_32600_32643[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (15))){
var state_32591__$1 = state_32591;
var statearr_32601_32644 = state_32591__$1;
(statearr_32601_32644[(2)] = null);

(statearr_32601_32644[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (21))){
var inst_32543 = (state_32591[(10)]);
var inst_32535 = inst_32543;
var state_32591__$1 = (function (){var statearr_32602 = state_32591;
(statearr_32602[(7)] = inst_32535);

return statearr_32602;
})();
var statearr_32603_32645 = state_32591__$1;
(statearr_32603_32645[(2)] = null);

(statearr_32603_32645[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (13))){
var inst_32587 = (state_32591[(2)]);
var state_32591__$1 = state_32591;
var statearr_32604_32646 = state_32591__$1;
(statearr_32604_32646[(2)] = inst_32587);

(statearr_32604_32646[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (22))){
var inst_32585 = (state_32591[(2)]);
var state_32591__$1 = state_32591;
var statearr_32605_32647 = state_32591__$1;
(statearr_32605_32647[(2)] = inst_32585);

(statearr_32605_32647[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (6))){
var inst_32589 = (state_32591[(2)]);
var state_32591__$1 = state_32591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32591__$1,inst_32589);
} else {
if((state_val_32592 === (25))){
var state_32591__$1 = state_32591;
var statearr_32606_32648 = state_32591__$1;
(statearr_32606_32648[(2)] = null);

(statearr_32606_32648[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (17))){
var inst_32565 = (state_32591[(14)]);
var state_32591__$1 = state_32591;
var statearr_32607_32649 = state_32591__$1;
(statearr_32607_32649[(2)] = inst_32565);

(statearr_32607_32649[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (3))){
var inst_32525 = (state_32591[(9)]);
var state_32591__$1 = state_32591;
var statearr_32608_32650 = state_32591__$1;
(statearr_32608_32650[(2)] = inst_32525);

(statearr_32608_32650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (12))){
var inst_32551 = (state_32591[(15)]);
var inst_32546 = (state_32591[(16)]);
var inst_32565 = (state_32591[(14)]);
var inst_32565__$1 = inst_32546.call(null,inst_32551);
var state_32591__$1 = (function (){var statearr_32609 = state_32591;
(statearr_32609[(14)] = inst_32565__$1);

return statearr_32609;
})();
if(cljs.core.truth_(inst_32565__$1)){
var statearr_32610_32651 = state_32591__$1;
(statearr_32610_32651[(1)] = (17));

} else {
var statearr_32611_32652 = state_32591__$1;
(statearr_32611_32652[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (2))){
var inst_32525 = (state_32591[(9)]);
var inst_32528 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32525);
var state_32591__$1 = state_32591;
var statearr_32612_32653 = state_32591__$1;
(statearr_32612_32653[(2)] = inst_32528);

(statearr_32612_32653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (23))){
var inst_32576 = (state_32591[(2)]);
var state_32591__$1 = state_32591;
if(cljs.core.truth_(inst_32576)){
var statearr_32613_32654 = state_32591__$1;
(statearr_32613_32654[(1)] = (24));

} else {
var statearr_32614_32655 = state_32591__$1;
(statearr_32614_32655[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (19))){
var inst_32573 = (state_32591[(2)]);
var state_32591__$1 = state_32591;
if(cljs.core.truth_(inst_32573)){
var statearr_32615_32656 = state_32591__$1;
(statearr_32615_32656[(1)] = (20));

} else {
var statearr_32616_32657 = state_32591__$1;
(statearr_32616_32657[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (11))){
var inst_32550 = (state_32591[(8)]);
var inst_32556 = (inst_32550 == null);
var state_32591__$1 = state_32591;
if(cljs.core.truth_(inst_32556)){
var statearr_32617_32658 = state_32591__$1;
(statearr_32617_32658[(1)] = (14));

} else {
var statearr_32618_32659 = state_32591__$1;
(statearr_32618_32659[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (9))){
var inst_32543 = (state_32591[(10)]);
var inst_32543__$1 = (state_32591[(2)]);
var inst_32544 = cljs.core.get.call(null,inst_32543__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32545 = cljs.core.get.call(null,inst_32543__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32546 = cljs.core.get.call(null,inst_32543__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_32591__$1 = (function (){var statearr_32619 = state_32591;
(statearr_32619[(17)] = inst_32545);

(statearr_32619[(10)] = inst_32543__$1);

(statearr_32619[(16)] = inst_32546);

return statearr_32619;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32591__$1,(10),inst_32544);
} else {
if((state_val_32592 === (5))){
var inst_32535 = (state_32591[(7)]);
var inst_32538 = cljs.core.seq_QMARK_.call(null,inst_32535);
var state_32591__$1 = state_32591;
if(inst_32538){
var statearr_32620_32660 = state_32591__$1;
(statearr_32620_32660[(1)] = (7));

} else {
var statearr_32621_32661 = state_32591__$1;
(statearr_32621_32661[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (14))){
var inst_32551 = (state_32591[(15)]);
var inst_32558 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32551);
var state_32591__$1 = state_32591;
var statearr_32622_32662 = state_32591__$1;
(statearr_32622_32662[(2)] = inst_32558);

(statearr_32622_32662[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (26))){
var inst_32581 = (state_32591[(2)]);
var state_32591__$1 = state_32591;
var statearr_32623_32663 = state_32591__$1;
(statearr_32623_32663[(2)] = inst_32581);

(statearr_32623_32663[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (16))){
var inst_32561 = (state_32591[(2)]);
var inst_32562 = calc_state.call(null);
var inst_32535 = inst_32562;
var state_32591__$1 = (function (){var statearr_32624 = state_32591;
(statearr_32624[(7)] = inst_32535);

(statearr_32624[(18)] = inst_32561);

return statearr_32624;
})();
var statearr_32625_32664 = state_32591__$1;
(statearr_32625_32664[(2)] = null);

(statearr_32625_32664[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (10))){
var inst_32550 = (state_32591[(8)]);
var inst_32551 = (state_32591[(15)]);
var inst_32549 = (state_32591[(2)]);
var inst_32550__$1 = cljs.core.nth.call(null,inst_32549,(0),null);
var inst_32551__$1 = cljs.core.nth.call(null,inst_32549,(1),null);
var inst_32552 = (inst_32550__$1 == null);
var inst_32553 = cljs.core._EQ_.call(null,inst_32551__$1,change);
var inst_32554 = (inst_32552) || (inst_32553);
var state_32591__$1 = (function (){var statearr_32626 = state_32591;
(statearr_32626[(8)] = inst_32550__$1);

(statearr_32626[(15)] = inst_32551__$1);

return statearr_32626;
})();
if(cljs.core.truth_(inst_32554)){
var statearr_32627_32665 = state_32591__$1;
(statearr_32627_32665[(1)] = (11));

} else {
var statearr_32628_32666 = state_32591__$1;
(statearr_32628_32666[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (18))){
var inst_32545 = (state_32591[(17)]);
var inst_32551 = (state_32591[(15)]);
var inst_32546 = (state_32591[(16)]);
var inst_32568 = cljs.core.empty_QMARK_.call(null,inst_32546);
var inst_32569 = inst_32545.call(null,inst_32551);
var inst_32570 = cljs.core.not.call(null,inst_32569);
var inst_32571 = (inst_32568) && (inst_32570);
var state_32591__$1 = state_32591;
var statearr_32629_32667 = state_32591__$1;
(statearr_32629_32667[(2)] = inst_32571);

(statearr_32629_32667[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32592 === (8))){
var inst_32535 = (state_32591[(7)]);
var state_32591__$1 = state_32591;
var statearr_32630_32668 = state_32591__$1;
(statearr_32630_32668[(2)] = inst_32535);

(statearr_32630_32668[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7600__auto___32638,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7585__auto__,c__7600__auto___32638,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_32634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32634[(0)] = state_machine__7586__auto__);

(statearr_32634[(1)] = (1));

return statearr_32634;
});
var state_machine__7586__auto____1 = (function (state_32591){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_32591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e32635){if((e32635 instanceof Object)){
var ex__7589__auto__ = e32635;
var statearr_32636_32669 = state_32591;
(statearr_32636_32669[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32670 = state_32591;
state_32591 = G__32670;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_32591){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_32591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___32638,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7602__auto__ = (function (){var statearr_32637 = f__7601__auto__.call(null);
(statearr_32637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___32638);

return statearr_32637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___32638,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj32672 = {};
return obj32672;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3969__auto__ = p;
if(and__3969__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3969__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4625__auto__ = (((p == null))?null:p);
return (function (){var or__3981__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3969__auto__ = p;
if(and__3969__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3969__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4625__auto__ = (((p == null))?null:p);
return (function (){var or__3981__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3969__auto__ = p;
if(and__3969__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3969__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4625__auto__ = (((p == null))?null:p);
return (function (){var or__3981__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3969__auto__ = p;
if(and__3969__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3969__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4625__auto__ = (((p == null))?null:p);
return (function (){var or__3981__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3981__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3981__auto__,mults){
return (function (p1__32673_SHARP_){
if(cljs.core.truth_(p1__32673_SHARP_.call(null,topic))){
return p1__32673_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32673_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3981__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t32796 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32796 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta32797){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta32797 = meta32797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32796.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t32796.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t32796.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t32796.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t32796.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t32796.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32796.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t32796.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32798){
var self__ = this;
var _32798__$1 = this;
return self__.meta32797;
});})(mults,ensure_mult))
;

cljs.core.async.t32796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32798,meta32797__$1){
var self__ = this;
var _32798__$1 = this;
return (new cljs.core.async.t32796(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta32797__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t32796.cljs$lang$type = true;

cljs.core.async.t32796.cljs$lang$ctorStr = "cljs.core.async/t32796";

cljs.core.async.t32796.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t32796");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t32796 = ((function (mults,ensure_mult){
return (function __GT_t32796(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32797){
return (new cljs.core.async.t32796(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32797));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t32796(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7600__auto___32918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___32918,mults,ensure_mult,p){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___32918,mults,ensure_mult,p){
return (function (state_32870){
var state_val_32871 = (state_32870[(1)]);
if((state_val_32871 === (7))){
var inst_32866 = (state_32870[(2)]);
var state_32870__$1 = state_32870;
var statearr_32872_32919 = state_32870__$1;
(statearr_32872_32919[(2)] = inst_32866);

(statearr_32872_32919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (20))){
var state_32870__$1 = state_32870;
var statearr_32873_32920 = state_32870__$1;
(statearr_32873_32920[(2)] = null);

(statearr_32873_32920[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (1))){
var state_32870__$1 = state_32870;
var statearr_32874_32921 = state_32870__$1;
(statearr_32874_32921[(2)] = null);

(statearr_32874_32921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (24))){
var inst_32849 = (state_32870[(7)]);
var inst_32858 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32849);
var state_32870__$1 = state_32870;
var statearr_32875_32922 = state_32870__$1;
(statearr_32875_32922[(2)] = inst_32858);

(statearr_32875_32922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (4))){
var inst_32801 = (state_32870[(8)]);
var inst_32801__$1 = (state_32870[(2)]);
var inst_32802 = (inst_32801__$1 == null);
var state_32870__$1 = (function (){var statearr_32876 = state_32870;
(statearr_32876[(8)] = inst_32801__$1);

return statearr_32876;
})();
if(cljs.core.truth_(inst_32802)){
var statearr_32877_32923 = state_32870__$1;
(statearr_32877_32923[(1)] = (5));

} else {
var statearr_32878_32924 = state_32870__$1;
(statearr_32878_32924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (15))){
var inst_32843 = (state_32870[(2)]);
var state_32870__$1 = state_32870;
var statearr_32879_32925 = state_32870__$1;
(statearr_32879_32925[(2)] = inst_32843);

(statearr_32879_32925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (21))){
var inst_32863 = (state_32870[(2)]);
var state_32870__$1 = (function (){var statearr_32880 = state_32870;
(statearr_32880[(9)] = inst_32863);

return statearr_32880;
})();
var statearr_32881_32926 = state_32870__$1;
(statearr_32881_32926[(2)] = null);

(statearr_32881_32926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (13))){
var inst_32825 = (state_32870[(10)]);
var inst_32827 = cljs.core.chunked_seq_QMARK_.call(null,inst_32825);
var state_32870__$1 = state_32870;
if(inst_32827){
var statearr_32882_32927 = state_32870__$1;
(statearr_32882_32927[(1)] = (16));

} else {
var statearr_32883_32928 = state_32870__$1;
(statearr_32883_32928[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (22))){
var inst_32855 = (state_32870[(2)]);
var state_32870__$1 = state_32870;
if(cljs.core.truth_(inst_32855)){
var statearr_32884_32929 = state_32870__$1;
(statearr_32884_32929[(1)] = (23));

} else {
var statearr_32885_32930 = state_32870__$1;
(statearr_32885_32930[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (6))){
var inst_32849 = (state_32870[(7)]);
var inst_32851 = (state_32870[(11)]);
var inst_32801 = (state_32870[(8)]);
var inst_32849__$1 = topic_fn.call(null,inst_32801);
var inst_32850 = cljs.core.deref.call(null,mults);
var inst_32851__$1 = cljs.core.get.call(null,inst_32850,inst_32849__$1);
var state_32870__$1 = (function (){var statearr_32886 = state_32870;
(statearr_32886[(7)] = inst_32849__$1);

(statearr_32886[(11)] = inst_32851__$1);

return statearr_32886;
})();
if(cljs.core.truth_(inst_32851__$1)){
var statearr_32887_32931 = state_32870__$1;
(statearr_32887_32931[(1)] = (19));

} else {
var statearr_32888_32932 = state_32870__$1;
(statearr_32888_32932[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (25))){
var inst_32860 = (state_32870[(2)]);
var state_32870__$1 = state_32870;
var statearr_32889_32933 = state_32870__$1;
(statearr_32889_32933[(2)] = inst_32860);

(statearr_32889_32933[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (17))){
var inst_32825 = (state_32870[(10)]);
var inst_32834 = cljs.core.first.call(null,inst_32825);
var inst_32835 = cljs.core.async.muxch_STAR_.call(null,inst_32834);
var inst_32836 = cljs.core.async.close_BANG_.call(null,inst_32835);
var inst_32837 = cljs.core.next.call(null,inst_32825);
var inst_32811 = inst_32837;
var inst_32812 = null;
var inst_32813 = (0);
var inst_32814 = (0);
var state_32870__$1 = (function (){var statearr_32890 = state_32870;
(statearr_32890[(12)] = inst_32836);

(statearr_32890[(13)] = inst_32812);

(statearr_32890[(14)] = inst_32814);

(statearr_32890[(15)] = inst_32811);

(statearr_32890[(16)] = inst_32813);

return statearr_32890;
})();
var statearr_32891_32934 = state_32870__$1;
(statearr_32891_32934[(2)] = null);

(statearr_32891_32934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (3))){
var inst_32868 = (state_32870[(2)]);
var state_32870__$1 = state_32870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32870__$1,inst_32868);
} else {
if((state_val_32871 === (12))){
var inst_32845 = (state_32870[(2)]);
var state_32870__$1 = state_32870;
var statearr_32892_32935 = state_32870__$1;
(statearr_32892_32935[(2)] = inst_32845);

(statearr_32892_32935[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (2))){
var state_32870__$1 = state_32870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32870__$1,(4),ch);
} else {
if((state_val_32871 === (23))){
var state_32870__$1 = state_32870;
var statearr_32893_32936 = state_32870__$1;
(statearr_32893_32936[(2)] = null);

(statearr_32893_32936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (19))){
var inst_32851 = (state_32870[(11)]);
var inst_32801 = (state_32870[(8)]);
var inst_32853 = cljs.core.async.muxch_STAR_.call(null,inst_32851);
var state_32870__$1 = state_32870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32870__$1,(22),inst_32853,inst_32801);
} else {
if((state_val_32871 === (11))){
var inst_32811 = (state_32870[(15)]);
var inst_32825 = (state_32870[(10)]);
var inst_32825__$1 = cljs.core.seq.call(null,inst_32811);
var state_32870__$1 = (function (){var statearr_32894 = state_32870;
(statearr_32894[(10)] = inst_32825__$1);

return statearr_32894;
})();
if(inst_32825__$1){
var statearr_32895_32937 = state_32870__$1;
(statearr_32895_32937[(1)] = (13));

} else {
var statearr_32896_32938 = state_32870__$1;
(statearr_32896_32938[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (9))){
var inst_32847 = (state_32870[(2)]);
var state_32870__$1 = state_32870;
var statearr_32897_32939 = state_32870__$1;
(statearr_32897_32939[(2)] = inst_32847);

(statearr_32897_32939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (5))){
var inst_32808 = cljs.core.deref.call(null,mults);
var inst_32809 = cljs.core.vals.call(null,inst_32808);
var inst_32810 = cljs.core.seq.call(null,inst_32809);
var inst_32811 = inst_32810;
var inst_32812 = null;
var inst_32813 = (0);
var inst_32814 = (0);
var state_32870__$1 = (function (){var statearr_32898 = state_32870;
(statearr_32898[(13)] = inst_32812);

(statearr_32898[(14)] = inst_32814);

(statearr_32898[(15)] = inst_32811);

(statearr_32898[(16)] = inst_32813);

return statearr_32898;
})();
var statearr_32899_32940 = state_32870__$1;
(statearr_32899_32940[(2)] = null);

(statearr_32899_32940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (14))){
var state_32870__$1 = state_32870;
var statearr_32903_32941 = state_32870__$1;
(statearr_32903_32941[(2)] = null);

(statearr_32903_32941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (16))){
var inst_32825 = (state_32870[(10)]);
var inst_32829 = cljs.core.chunk_first.call(null,inst_32825);
var inst_32830 = cljs.core.chunk_rest.call(null,inst_32825);
var inst_32831 = cljs.core.count.call(null,inst_32829);
var inst_32811 = inst_32830;
var inst_32812 = inst_32829;
var inst_32813 = inst_32831;
var inst_32814 = (0);
var state_32870__$1 = (function (){var statearr_32904 = state_32870;
(statearr_32904[(13)] = inst_32812);

(statearr_32904[(14)] = inst_32814);

(statearr_32904[(15)] = inst_32811);

(statearr_32904[(16)] = inst_32813);

return statearr_32904;
})();
var statearr_32905_32942 = state_32870__$1;
(statearr_32905_32942[(2)] = null);

(statearr_32905_32942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (10))){
var inst_32812 = (state_32870[(13)]);
var inst_32814 = (state_32870[(14)]);
var inst_32811 = (state_32870[(15)]);
var inst_32813 = (state_32870[(16)]);
var inst_32819 = cljs.core._nth.call(null,inst_32812,inst_32814);
var inst_32820 = cljs.core.async.muxch_STAR_.call(null,inst_32819);
var inst_32821 = cljs.core.async.close_BANG_.call(null,inst_32820);
var inst_32822 = (inst_32814 + (1));
var tmp32900 = inst_32812;
var tmp32901 = inst_32811;
var tmp32902 = inst_32813;
var inst_32811__$1 = tmp32901;
var inst_32812__$1 = tmp32900;
var inst_32813__$1 = tmp32902;
var inst_32814__$1 = inst_32822;
var state_32870__$1 = (function (){var statearr_32906 = state_32870;
(statearr_32906[(17)] = inst_32821);

(statearr_32906[(13)] = inst_32812__$1);

(statearr_32906[(14)] = inst_32814__$1);

(statearr_32906[(15)] = inst_32811__$1);

(statearr_32906[(16)] = inst_32813__$1);

return statearr_32906;
})();
var statearr_32907_32943 = state_32870__$1;
(statearr_32907_32943[(2)] = null);

(statearr_32907_32943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (18))){
var inst_32840 = (state_32870[(2)]);
var state_32870__$1 = state_32870;
var statearr_32908_32944 = state_32870__$1;
(statearr_32908_32944[(2)] = inst_32840);

(statearr_32908_32944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32871 === (8))){
var inst_32814 = (state_32870[(14)]);
var inst_32813 = (state_32870[(16)]);
var inst_32816 = (inst_32814 < inst_32813);
var inst_32817 = inst_32816;
var state_32870__$1 = state_32870;
if(cljs.core.truth_(inst_32817)){
var statearr_32909_32945 = state_32870__$1;
(statearr_32909_32945[(1)] = (10));

} else {
var statearr_32910_32946 = state_32870__$1;
(statearr_32910_32946[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7600__auto___32918,mults,ensure_mult,p))
;
return ((function (switch__7585__auto__,c__7600__auto___32918,mults,ensure_mult,p){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_32914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32914[(0)] = state_machine__7586__auto__);

(statearr_32914[(1)] = (1));

return statearr_32914;
});
var state_machine__7586__auto____1 = (function (state_32870){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_32870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e32915){if((e32915 instanceof Object)){
var ex__7589__auto__ = e32915;
var statearr_32916_32947 = state_32870;
(statearr_32916_32947[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32948 = state_32870;
state_32870 = G__32948;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_32870){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_32870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___32918,mults,ensure_mult,p))
})();
var state__7602__auto__ = (function (){var statearr_32917 = f__7601__auto__.call(null);
(statearr_32917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___32918);

return statearr_32917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___32918,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7600__auto___33085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___33085,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___33085,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33055){
var state_val_33056 = (state_33055[(1)]);
if((state_val_33056 === (7))){
var state_33055__$1 = state_33055;
var statearr_33057_33086 = state_33055__$1;
(statearr_33057_33086[(2)] = null);

(statearr_33057_33086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (1))){
var state_33055__$1 = state_33055;
var statearr_33058_33087 = state_33055__$1;
(statearr_33058_33087[(2)] = null);

(statearr_33058_33087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (4))){
var inst_33019 = (state_33055[(7)]);
var inst_33021 = (inst_33019 < cnt);
var state_33055__$1 = state_33055;
if(cljs.core.truth_(inst_33021)){
var statearr_33059_33088 = state_33055__$1;
(statearr_33059_33088[(1)] = (6));

} else {
var statearr_33060_33089 = state_33055__$1;
(statearr_33060_33089[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (15))){
var inst_33051 = (state_33055[(2)]);
var state_33055__$1 = state_33055;
var statearr_33061_33090 = state_33055__$1;
(statearr_33061_33090[(2)] = inst_33051);

(statearr_33061_33090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (13))){
var inst_33044 = cljs.core.async.close_BANG_.call(null,out);
var state_33055__$1 = state_33055;
var statearr_33062_33091 = state_33055__$1;
(statearr_33062_33091[(2)] = inst_33044);

(statearr_33062_33091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (6))){
var state_33055__$1 = state_33055;
var statearr_33063_33092 = state_33055__$1;
(statearr_33063_33092[(2)] = null);

(statearr_33063_33092[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (3))){
var inst_33053 = (state_33055[(2)]);
var state_33055__$1 = state_33055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33055__$1,inst_33053);
} else {
if((state_val_33056 === (12))){
var inst_33041 = (state_33055[(8)]);
var inst_33041__$1 = (state_33055[(2)]);
var inst_33042 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33041__$1);
var state_33055__$1 = (function (){var statearr_33064 = state_33055;
(statearr_33064[(8)] = inst_33041__$1);

return statearr_33064;
})();
if(cljs.core.truth_(inst_33042)){
var statearr_33065_33093 = state_33055__$1;
(statearr_33065_33093[(1)] = (13));

} else {
var statearr_33066_33094 = state_33055__$1;
(statearr_33066_33094[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (2))){
var inst_33018 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33019 = (0);
var state_33055__$1 = (function (){var statearr_33067 = state_33055;
(statearr_33067[(7)] = inst_33019);

(statearr_33067[(9)] = inst_33018);

return statearr_33067;
})();
var statearr_33068_33095 = state_33055__$1;
(statearr_33068_33095[(2)] = null);

(statearr_33068_33095[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (11))){
var inst_33019 = (state_33055[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33055,(10),Object,null,(9));
var inst_33028 = chs__$1.call(null,inst_33019);
var inst_33029 = done.call(null,inst_33019);
var inst_33030 = cljs.core.async.take_BANG_.call(null,inst_33028,inst_33029);
var state_33055__$1 = state_33055;
var statearr_33069_33096 = state_33055__$1;
(statearr_33069_33096[(2)] = inst_33030);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33055__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (9))){
var inst_33019 = (state_33055[(7)]);
var inst_33032 = (state_33055[(2)]);
var inst_33033 = (inst_33019 + (1));
var inst_33019__$1 = inst_33033;
var state_33055__$1 = (function (){var statearr_33070 = state_33055;
(statearr_33070[(10)] = inst_33032);

(statearr_33070[(7)] = inst_33019__$1);

return statearr_33070;
})();
var statearr_33071_33097 = state_33055__$1;
(statearr_33071_33097[(2)] = null);

(statearr_33071_33097[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (5))){
var inst_33039 = (state_33055[(2)]);
var state_33055__$1 = (function (){var statearr_33072 = state_33055;
(statearr_33072[(11)] = inst_33039);

return statearr_33072;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33055__$1,(12),dchan);
} else {
if((state_val_33056 === (14))){
var inst_33041 = (state_33055[(8)]);
var inst_33046 = cljs.core.apply.call(null,f,inst_33041);
var state_33055__$1 = state_33055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33055__$1,(16),out,inst_33046);
} else {
if((state_val_33056 === (16))){
var inst_33048 = (state_33055[(2)]);
var state_33055__$1 = (function (){var statearr_33073 = state_33055;
(statearr_33073[(12)] = inst_33048);

return statearr_33073;
})();
var statearr_33074_33098 = state_33055__$1;
(statearr_33074_33098[(2)] = null);

(statearr_33074_33098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (10))){
var inst_33023 = (state_33055[(2)]);
var inst_33024 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33055__$1 = (function (){var statearr_33075 = state_33055;
(statearr_33075[(13)] = inst_33023);

return statearr_33075;
})();
var statearr_33076_33099 = state_33055__$1;
(statearr_33076_33099[(2)] = inst_33024);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33055__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (8))){
var inst_33037 = (state_33055[(2)]);
var state_33055__$1 = state_33055;
var statearr_33077_33100 = state_33055__$1;
(statearr_33077_33100[(2)] = inst_33037);

(statearr_33077_33100[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7600__auto___33085,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7585__auto__,c__7600__auto___33085,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_33081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33081[(0)] = state_machine__7586__auto__);

(statearr_33081[(1)] = (1));

return statearr_33081;
});
var state_machine__7586__auto____1 = (function (state_33055){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_33055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e33082){if((e33082 instanceof Object)){
var ex__7589__auto__ = e33082;
var statearr_33083_33101 = state_33055;
(statearr_33083_33101[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33102 = state_33055;
state_33055 = G__33102;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_33055){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_33055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___33085,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7602__auto__ = (function (){var statearr_33084 = f__7601__auto__.call(null);
(statearr_33084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___33085);

return statearr_33084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___33085,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7600__auto___33210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___33210,out){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___33210,out){
return (function (state_33186){
var state_val_33187 = (state_33186[(1)]);
if((state_val_33187 === (7))){
var inst_33165 = (state_33186[(7)]);
var inst_33166 = (state_33186[(8)]);
var inst_33165__$1 = (state_33186[(2)]);
var inst_33166__$1 = cljs.core.nth.call(null,inst_33165__$1,(0),null);
var inst_33167 = cljs.core.nth.call(null,inst_33165__$1,(1),null);
var inst_33168 = (inst_33166__$1 == null);
var state_33186__$1 = (function (){var statearr_33188 = state_33186;
(statearr_33188[(7)] = inst_33165__$1);

(statearr_33188[(9)] = inst_33167);

(statearr_33188[(8)] = inst_33166__$1);

return statearr_33188;
})();
if(cljs.core.truth_(inst_33168)){
var statearr_33189_33211 = state_33186__$1;
(statearr_33189_33211[(1)] = (8));

} else {
var statearr_33190_33212 = state_33186__$1;
(statearr_33190_33212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33187 === (1))){
var inst_33157 = cljs.core.vec.call(null,chs);
var inst_33158 = inst_33157;
var state_33186__$1 = (function (){var statearr_33191 = state_33186;
(statearr_33191[(10)] = inst_33158);

return statearr_33191;
})();
var statearr_33192_33213 = state_33186__$1;
(statearr_33192_33213[(2)] = null);

(statearr_33192_33213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33187 === (4))){
var inst_33158 = (state_33186[(10)]);
var state_33186__$1 = state_33186;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33186__$1,(7),inst_33158);
} else {
if((state_val_33187 === (6))){
var inst_33182 = (state_33186[(2)]);
var state_33186__$1 = state_33186;
var statearr_33193_33214 = state_33186__$1;
(statearr_33193_33214[(2)] = inst_33182);

(statearr_33193_33214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33187 === (3))){
var inst_33184 = (state_33186[(2)]);
var state_33186__$1 = state_33186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33186__$1,inst_33184);
} else {
if((state_val_33187 === (2))){
var inst_33158 = (state_33186[(10)]);
var inst_33160 = cljs.core.count.call(null,inst_33158);
var inst_33161 = (inst_33160 > (0));
var state_33186__$1 = state_33186;
if(cljs.core.truth_(inst_33161)){
var statearr_33195_33215 = state_33186__$1;
(statearr_33195_33215[(1)] = (4));

} else {
var statearr_33196_33216 = state_33186__$1;
(statearr_33196_33216[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33187 === (11))){
var inst_33158 = (state_33186[(10)]);
var inst_33175 = (state_33186[(2)]);
var tmp33194 = inst_33158;
var inst_33158__$1 = tmp33194;
var state_33186__$1 = (function (){var statearr_33197 = state_33186;
(statearr_33197[(10)] = inst_33158__$1);

(statearr_33197[(11)] = inst_33175);

return statearr_33197;
})();
var statearr_33198_33217 = state_33186__$1;
(statearr_33198_33217[(2)] = null);

(statearr_33198_33217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33187 === (9))){
var inst_33166 = (state_33186[(8)]);
var state_33186__$1 = state_33186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33186__$1,(11),out,inst_33166);
} else {
if((state_val_33187 === (5))){
var inst_33180 = cljs.core.async.close_BANG_.call(null,out);
var state_33186__$1 = state_33186;
var statearr_33199_33218 = state_33186__$1;
(statearr_33199_33218[(2)] = inst_33180);

(statearr_33199_33218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33187 === (10))){
var inst_33178 = (state_33186[(2)]);
var state_33186__$1 = state_33186;
var statearr_33200_33219 = state_33186__$1;
(statearr_33200_33219[(2)] = inst_33178);

(statearr_33200_33219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33187 === (8))){
var inst_33158 = (state_33186[(10)]);
var inst_33165 = (state_33186[(7)]);
var inst_33167 = (state_33186[(9)]);
var inst_33166 = (state_33186[(8)]);
var inst_33170 = (function (){var c = inst_33167;
var v = inst_33166;
var vec__33163 = inst_33165;
var cs = inst_33158;
return ((function (c,v,vec__33163,cs,inst_33158,inst_33165,inst_33167,inst_33166,state_val_33187,c__7600__auto___33210,out){
return (function (p1__33103_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33103_SHARP_);
});
;})(c,v,vec__33163,cs,inst_33158,inst_33165,inst_33167,inst_33166,state_val_33187,c__7600__auto___33210,out))
})();
var inst_33171 = cljs.core.filterv.call(null,inst_33170,inst_33158);
var inst_33158__$1 = inst_33171;
var state_33186__$1 = (function (){var statearr_33201 = state_33186;
(statearr_33201[(10)] = inst_33158__$1);

return statearr_33201;
})();
var statearr_33202_33220 = state_33186__$1;
(statearr_33202_33220[(2)] = null);

(statearr_33202_33220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7600__auto___33210,out))
;
return ((function (switch__7585__auto__,c__7600__auto___33210,out){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_33206 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33206[(0)] = state_machine__7586__auto__);

(statearr_33206[(1)] = (1));

return statearr_33206;
});
var state_machine__7586__auto____1 = (function (state_33186){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_33186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e33207){if((e33207 instanceof Object)){
var ex__7589__auto__ = e33207;
var statearr_33208_33221 = state_33186;
(statearr_33208_33221[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33222 = state_33186;
state_33186 = G__33222;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_33186){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_33186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___33210,out))
})();
var state__7602__auto__ = (function (){var statearr_33209 = f__7601__auto__.call(null);
(statearr_33209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___33210);

return statearr_33209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___33210,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7600__auto___33315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___33315,out){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___33315,out){
return (function (state_33292){
var state_val_33293 = (state_33292[(1)]);
if((state_val_33293 === (7))){
var inst_33274 = (state_33292[(7)]);
var inst_33274__$1 = (state_33292[(2)]);
var inst_33275 = (inst_33274__$1 == null);
var inst_33276 = cljs.core.not.call(null,inst_33275);
var state_33292__$1 = (function (){var statearr_33294 = state_33292;
(statearr_33294[(7)] = inst_33274__$1);

return statearr_33294;
})();
if(inst_33276){
var statearr_33295_33316 = state_33292__$1;
(statearr_33295_33316[(1)] = (8));

} else {
var statearr_33296_33317 = state_33292__$1;
(statearr_33296_33317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33293 === (1))){
var inst_33269 = (0);
var state_33292__$1 = (function (){var statearr_33297 = state_33292;
(statearr_33297[(8)] = inst_33269);

return statearr_33297;
})();
var statearr_33298_33318 = state_33292__$1;
(statearr_33298_33318[(2)] = null);

(statearr_33298_33318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33293 === (4))){
var state_33292__$1 = state_33292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33292__$1,(7),ch);
} else {
if((state_val_33293 === (6))){
var inst_33287 = (state_33292[(2)]);
var state_33292__$1 = state_33292;
var statearr_33299_33319 = state_33292__$1;
(statearr_33299_33319[(2)] = inst_33287);

(statearr_33299_33319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33293 === (3))){
var inst_33289 = (state_33292[(2)]);
var inst_33290 = cljs.core.async.close_BANG_.call(null,out);
var state_33292__$1 = (function (){var statearr_33300 = state_33292;
(statearr_33300[(9)] = inst_33289);

return statearr_33300;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33292__$1,inst_33290);
} else {
if((state_val_33293 === (2))){
var inst_33269 = (state_33292[(8)]);
var inst_33271 = (inst_33269 < n);
var state_33292__$1 = state_33292;
if(cljs.core.truth_(inst_33271)){
var statearr_33301_33320 = state_33292__$1;
(statearr_33301_33320[(1)] = (4));

} else {
var statearr_33302_33321 = state_33292__$1;
(statearr_33302_33321[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33293 === (11))){
var inst_33269 = (state_33292[(8)]);
var inst_33279 = (state_33292[(2)]);
var inst_33280 = (inst_33269 + (1));
var inst_33269__$1 = inst_33280;
var state_33292__$1 = (function (){var statearr_33303 = state_33292;
(statearr_33303[(8)] = inst_33269__$1);

(statearr_33303[(10)] = inst_33279);

return statearr_33303;
})();
var statearr_33304_33322 = state_33292__$1;
(statearr_33304_33322[(2)] = null);

(statearr_33304_33322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33293 === (9))){
var state_33292__$1 = state_33292;
var statearr_33305_33323 = state_33292__$1;
(statearr_33305_33323[(2)] = null);

(statearr_33305_33323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33293 === (5))){
var state_33292__$1 = state_33292;
var statearr_33306_33324 = state_33292__$1;
(statearr_33306_33324[(2)] = null);

(statearr_33306_33324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33293 === (10))){
var inst_33284 = (state_33292[(2)]);
var state_33292__$1 = state_33292;
var statearr_33307_33325 = state_33292__$1;
(statearr_33307_33325[(2)] = inst_33284);

(statearr_33307_33325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33293 === (8))){
var inst_33274 = (state_33292[(7)]);
var state_33292__$1 = state_33292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33292__$1,(11),out,inst_33274);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7600__auto___33315,out))
;
return ((function (switch__7585__auto__,c__7600__auto___33315,out){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_33311 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33311[(0)] = state_machine__7586__auto__);

(statearr_33311[(1)] = (1));

return statearr_33311;
});
var state_machine__7586__auto____1 = (function (state_33292){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_33292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e33312){if((e33312 instanceof Object)){
var ex__7589__auto__ = e33312;
var statearr_33313_33326 = state_33292;
(statearr_33313_33326[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33327 = state_33292;
state_33292 = G__33327;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_33292){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_33292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___33315,out))
})();
var state__7602__auto__ = (function (){var statearr_33314 = f__7601__auto__.call(null);
(statearr_33314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___33315);

return statearr_33314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___33315,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t33335 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33335 = (function (ch,f,map_LT_,meta33336){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33336 = meta33336;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33335.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33335.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t33335.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33335.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t33338 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33338 = (function (fn1,_,meta33336,map_LT_,f,ch,meta33339){
this.fn1 = fn1;
this._ = _;
this.meta33336 = meta33336;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33339 = meta33339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33338.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33338.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t33338.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33328_SHARP_){
return f1.call(null,(((p1__33328_SHARP_ == null))?null:self__.f.call(null,p1__33328_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t33338.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33340){
var self__ = this;
var _33340__$1 = this;
return self__.meta33339;
});})(___$1))
;

cljs.core.async.t33338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33340,meta33339__$1){
var self__ = this;
var _33340__$1 = this;
return (new cljs.core.async.t33338(self__.fn1,self__._,self__.meta33336,self__.map_LT_,self__.f,self__.ch,meta33339__$1));
});})(___$1))
;

cljs.core.async.t33338.cljs$lang$type = true;

cljs.core.async.t33338.cljs$lang$ctorStr = "cljs.core.async/t33338";

cljs.core.async.t33338.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t33338");
});})(___$1))
;

cljs.core.async.__GT_t33338 = ((function (___$1){
return (function __GT_t33338(fn1__$1,___$2,meta33336__$1,map_LT___$1,f__$1,ch__$1,meta33339){
return (new cljs.core.async.t33338(fn1__$1,___$2,meta33336__$1,map_LT___$1,f__$1,ch__$1,meta33339));
});})(___$1))
;

}

return (new cljs.core.async.t33338(fn1,___$1,self__.meta33336,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3969__auto__ = ret;
if(cljs.core.truth_(and__3969__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3969__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t33335.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33335.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33335.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33337){
var self__ = this;
var _33337__$1 = this;
return self__.meta33336;
});

cljs.core.async.t33335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33337,meta33336__$1){
var self__ = this;
var _33337__$1 = this;
return (new cljs.core.async.t33335(self__.ch,self__.f,self__.map_LT_,meta33336__$1));
});

cljs.core.async.t33335.cljs$lang$type = true;

cljs.core.async.t33335.cljs$lang$ctorStr = "cljs.core.async/t33335";

cljs.core.async.t33335.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t33335");
});

cljs.core.async.__GT_t33335 = (function __GT_t33335(ch__$1,f__$1,map_LT___$1,meta33336){
return (new cljs.core.async.t33335(ch__$1,f__$1,map_LT___$1,meta33336));
});

}

return (new cljs.core.async.t33335(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t33344 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33344 = (function (ch,f,map_GT_,meta33345){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33345 = meta33345;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33344.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33344.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t33344.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33344.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33344.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33344.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33346){
var self__ = this;
var _33346__$1 = this;
return self__.meta33345;
});

cljs.core.async.t33344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33346,meta33345__$1){
var self__ = this;
var _33346__$1 = this;
return (new cljs.core.async.t33344(self__.ch,self__.f,self__.map_GT_,meta33345__$1));
});

cljs.core.async.t33344.cljs$lang$type = true;

cljs.core.async.t33344.cljs$lang$ctorStr = "cljs.core.async/t33344";

cljs.core.async.t33344.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t33344");
});

cljs.core.async.__GT_t33344 = (function __GT_t33344(ch__$1,f__$1,map_GT___$1,meta33345){
return (new cljs.core.async.t33344(ch__$1,f__$1,map_GT___$1,meta33345));
});

}

return (new cljs.core.async.t33344(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t33350 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33350 = (function (ch,p,filter_GT_,meta33351){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33351 = meta33351;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33350.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33350.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t33350.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33350.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33350.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33350.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33350.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33352){
var self__ = this;
var _33352__$1 = this;
return self__.meta33351;
});

cljs.core.async.t33350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33352,meta33351__$1){
var self__ = this;
var _33352__$1 = this;
return (new cljs.core.async.t33350(self__.ch,self__.p,self__.filter_GT_,meta33351__$1));
});

cljs.core.async.t33350.cljs$lang$type = true;

cljs.core.async.t33350.cljs$lang$ctorStr = "cljs.core.async/t33350";

cljs.core.async.t33350.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t33350");
});

cljs.core.async.__GT_t33350 = (function __GT_t33350(ch__$1,p__$1,filter_GT___$1,meta33351){
return (new cljs.core.async.t33350(ch__$1,p__$1,filter_GT___$1,meta33351));
});

}

return (new cljs.core.async.t33350(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7600__auto___33435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___33435,out){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___33435,out){
return (function (state_33414){
var state_val_33415 = (state_33414[(1)]);
if((state_val_33415 === (7))){
var inst_33410 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
var statearr_33416_33436 = state_33414__$1;
(statearr_33416_33436[(2)] = inst_33410);

(statearr_33416_33436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (1))){
var state_33414__$1 = state_33414;
var statearr_33417_33437 = state_33414__$1;
(statearr_33417_33437[(2)] = null);

(statearr_33417_33437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (4))){
var inst_33396 = (state_33414[(7)]);
var inst_33396__$1 = (state_33414[(2)]);
var inst_33397 = (inst_33396__$1 == null);
var state_33414__$1 = (function (){var statearr_33418 = state_33414;
(statearr_33418[(7)] = inst_33396__$1);

return statearr_33418;
})();
if(cljs.core.truth_(inst_33397)){
var statearr_33419_33438 = state_33414__$1;
(statearr_33419_33438[(1)] = (5));

} else {
var statearr_33420_33439 = state_33414__$1;
(statearr_33420_33439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (6))){
var inst_33396 = (state_33414[(7)]);
var inst_33401 = p.call(null,inst_33396);
var state_33414__$1 = state_33414;
if(cljs.core.truth_(inst_33401)){
var statearr_33421_33440 = state_33414__$1;
(statearr_33421_33440[(1)] = (8));

} else {
var statearr_33422_33441 = state_33414__$1;
(statearr_33422_33441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (3))){
var inst_33412 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33414__$1,inst_33412);
} else {
if((state_val_33415 === (2))){
var state_33414__$1 = state_33414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33414__$1,(4),ch);
} else {
if((state_val_33415 === (11))){
var inst_33404 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
var statearr_33423_33442 = state_33414__$1;
(statearr_33423_33442[(2)] = inst_33404);

(statearr_33423_33442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (9))){
var state_33414__$1 = state_33414;
var statearr_33424_33443 = state_33414__$1;
(statearr_33424_33443[(2)] = null);

(statearr_33424_33443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (5))){
var inst_33399 = cljs.core.async.close_BANG_.call(null,out);
var state_33414__$1 = state_33414;
var statearr_33425_33444 = state_33414__$1;
(statearr_33425_33444[(2)] = inst_33399);

(statearr_33425_33444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (10))){
var inst_33407 = (state_33414[(2)]);
var state_33414__$1 = (function (){var statearr_33426 = state_33414;
(statearr_33426[(8)] = inst_33407);

return statearr_33426;
})();
var statearr_33427_33445 = state_33414__$1;
(statearr_33427_33445[(2)] = null);

(statearr_33427_33445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (8))){
var inst_33396 = (state_33414[(7)]);
var state_33414__$1 = state_33414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33414__$1,(11),out,inst_33396);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7600__auto___33435,out))
;
return ((function (switch__7585__auto__,c__7600__auto___33435,out){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_33431 = [null,null,null,null,null,null,null,null,null];
(statearr_33431[(0)] = state_machine__7586__auto__);

(statearr_33431[(1)] = (1));

return statearr_33431;
});
var state_machine__7586__auto____1 = (function (state_33414){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_33414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e33432){if((e33432 instanceof Object)){
var ex__7589__auto__ = e33432;
var statearr_33433_33446 = state_33414;
(statearr_33433_33446[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33447 = state_33414;
state_33414 = G__33447;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_33414){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_33414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___33435,out))
})();
var state__7602__auto__ = (function (){var statearr_33434 = f__7601__auto__.call(null);
(statearr_33434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___33435);

return statearr_33434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___33435,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__7600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto__){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto__){
return (function (state_33613){
var state_val_33614 = (state_33613[(1)]);
if((state_val_33614 === (7))){
var inst_33609 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33615_33656 = state_33613__$1;
(statearr_33615_33656[(2)] = inst_33609);

(statearr_33615_33656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (20))){
var inst_33579 = (state_33613[(7)]);
var inst_33590 = (state_33613[(2)]);
var inst_33591 = cljs.core.next.call(null,inst_33579);
var inst_33565 = inst_33591;
var inst_33566 = null;
var inst_33567 = (0);
var inst_33568 = (0);
var state_33613__$1 = (function (){var statearr_33616 = state_33613;
(statearr_33616[(8)] = inst_33565);

(statearr_33616[(9)] = inst_33567);

(statearr_33616[(10)] = inst_33590);

(statearr_33616[(11)] = inst_33566);

(statearr_33616[(12)] = inst_33568);

return statearr_33616;
})();
var statearr_33617_33657 = state_33613__$1;
(statearr_33617_33657[(2)] = null);

(statearr_33617_33657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (1))){
var state_33613__$1 = state_33613;
var statearr_33618_33658 = state_33613__$1;
(statearr_33618_33658[(2)] = null);

(statearr_33618_33658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (4))){
var inst_33554 = (state_33613[(13)]);
var inst_33554__$1 = (state_33613[(2)]);
var inst_33555 = (inst_33554__$1 == null);
var state_33613__$1 = (function (){var statearr_33619 = state_33613;
(statearr_33619[(13)] = inst_33554__$1);

return statearr_33619;
})();
if(cljs.core.truth_(inst_33555)){
var statearr_33620_33659 = state_33613__$1;
(statearr_33620_33659[(1)] = (5));

} else {
var statearr_33621_33660 = state_33613__$1;
(statearr_33621_33660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (15))){
var state_33613__$1 = state_33613;
var statearr_33625_33661 = state_33613__$1;
(statearr_33625_33661[(2)] = null);

(statearr_33625_33661[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (21))){
var state_33613__$1 = state_33613;
var statearr_33626_33662 = state_33613__$1;
(statearr_33626_33662[(2)] = null);

(statearr_33626_33662[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (13))){
var inst_33565 = (state_33613[(8)]);
var inst_33567 = (state_33613[(9)]);
var inst_33566 = (state_33613[(11)]);
var inst_33568 = (state_33613[(12)]);
var inst_33575 = (state_33613[(2)]);
var inst_33576 = (inst_33568 + (1));
var tmp33622 = inst_33565;
var tmp33623 = inst_33567;
var tmp33624 = inst_33566;
var inst_33565__$1 = tmp33622;
var inst_33566__$1 = tmp33624;
var inst_33567__$1 = tmp33623;
var inst_33568__$1 = inst_33576;
var state_33613__$1 = (function (){var statearr_33627 = state_33613;
(statearr_33627[(8)] = inst_33565__$1);

(statearr_33627[(14)] = inst_33575);

(statearr_33627[(9)] = inst_33567__$1);

(statearr_33627[(11)] = inst_33566__$1);

(statearr_33627[(12)] = inst_33568__$1);

return statearr_33627;
})();
var statearr_33628_33663 = state_33613__$1;
(statearr_33628_33663[(2)] = null);

(statearr_33628_33663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (22))){
var state_33613__$1 = state_33613;
var statearr_33629_33664 = state_33613__$1;
(statearr_33629_33664[(2)] = null);

(statearr_33629_33664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (6))){
var inst_33554 = (state_33613[(13)]);
var inst_33563 = f.call(null,inst_33554);
var inst_33564 = cljs.core.seq.call(null,inst_33563);
var inst_33565 = inst_33564;
var inst_33566 = null;
var inst_33567 = (0);
var inst_33568 = (0);
var state_33613__$1 = (function (){var statearr_33630 = state_33613;
(statearr_33630[(8)] = inst_33565);

(statearr_33630[(9)] = inst_33567);

(statearr_33630[(11)] = inst_33566);

(statearr_33630[(12)] = inst_33568);

return statearr_33630;
})();
var statearr_33631_33665 = state_33613__$1;
(statearr_33631_33665[(2)] = null);

(statearr_33631_33665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (17))){
var inst_33579 = (state_33613[(7)]);
var inst_33583 = cljs.core.chunk_first.call(null,inst_33579);
var inst_33584 = cljs.core.chunk_rest.call(null,inst_33579);
var inst_33585 = cljs.core.count.call(null,inst_33583);
var inst_33565 = inst_33584;
var inst_33566 = inst_33583;
var inst_33567 = inst_33585;
var inst_33568 = (0);
var state_33613__$1 = (function (){var statearr_33632 = state_33613;
(statearr_33632[(8)] = inst_33565);

(statearr_33632[(9)] = inst_33567);

(statearr_33632[(11)] = inst_33566);

(statearr_33632[(12)] = inst_33568);

return statearr_33632;
})();
var statearr_33633_33666 = state_33613__$1;
(statearr_33633_33666[(2)] = null);

(statearr_33633_33666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (3))){
var inst_33611 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33613__$1,inst_33611);
} else {
if((state_val_33614 === (12))){
var inst_33599 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33634_33667 = state_33613__$1;
(statearr_33634_33667[(2)] = inst_33599);

(statearr_33634_33667[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (2))){
var state_33613__$1 = state_33613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33613__$1,(4),in$);
} else {
if((state_val_33614 === (23))){
var inst_33607 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33635_33668 = state_33613__$1;
(statearr_33635_33668[(2)] = inst_33607);

(statearr_33635_33668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (19))){
var inst_33594 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33636_33669 = state_33613__$1;
(statearr_33636_33669[(2)] = inst_33594);

(statearr_33636_33669[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (11))){
var inst_33565 = (state_33613[(8)]);
var inst_33579 = (state_33613[(7)]);
var inst_33579__$1 = cljs.core.seq.call(null,inst_33565);
var state_33613__$1 = (function (){var statearr_33637 = state_33613;
(statearr_33637[(7)] = inst_33579__$1);

return statearr_33637;
})();
if(inst_33579__$1){
var statearr_33638_33670 = state_33613__$1;
(statearr_33638_33670[(1)] = (14));

} else {
var statearr_33639_33671 = state_33613__$1;
(statearr_33639_33671[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (9))){
var inst_33601 = (state_33613[(2)]);
var inst_33602 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33613__$1 = (function (){var statearr_33640 = state_33613;
(statearr_33640[(15)] = inst_33601);

return statearr_33640;
})();
if(cljs.core.truth_(inst_33602)){
var statearr_33641_33672 = state_33613__$1;
(statearr_33641_33672[(1)] = (21));

} else {
var statearr_33642_33673 = state_33613__$1;
(statearr_33642_33673[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (5))){
var inst_33557 = cljs.core.async.close_BANG_.call(null,out);
var state_33613__$1 = state_33613;
var statearr_33643_33674 = state_33613__$1;
(statearr_33643_33674[(2)] = inst_33557);

(statearr_33643_33674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (14))){
var inst_33579 = (state_33613[(7)]);
var inst_33581 = cljs.core.chunked_seq_QMARK_.call(null,inst_33579);
var state_33613__$1 = state_33613;
if(inst_33581){
var statearr_33644_33675 = state_33613__$1;
(statearr_33644_33675[(1)] = (17));

} else {
var statearr_33645_33676 = state_33613__$1;
(statearr_33645_33676[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (16))){
var inst_33597 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33646_33677 = state_33613__$1;
(statearr_33646_33677[(2)] = inst_33597);

(statearr_33646_33677[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (10))){
var inst_33566 = (state_33613[(11)]);
var inst_33568 = (state_33613[(12)]);
var inst_33573 = cljs.core._nth.call(null,inst_33566,inst_33568);
var state_33613__$1 = state_33613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33613__$1,(13),out,inst_33573);
} else {
if((state_val_33614 === (18))){
var inst_33579 = (state_33613[(7)]);
var inst_33588 = cljs.core.first.call(null,inst_33579);
var state_33613__$1 = state_33613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33613__$1,(20),out,inst_33588);
} else {
if((state_val_33614 === (8))){
var inst_33567 = (state_33613[(9)]);
var inst_33568 = (state_33613[(12)]);
var inst_33570 = (inst_33568 < inst_33567);
var inst_33571 = inst_33570;
var state_33613__$1 = state_33613;
if(cljs.core.truth_(inst_33571)){
var statearr_33647_33678 = state_33613__$1;
(statearr_33647_33678[(1)] = (10));

} else {
var statearr_33648_33679 = state_33613__$1;
(statearr_33648_33679[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var statearr_33652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33652[(0)] = state_machine__7586__auto__);

(statearr_33652[(1)] = (1));

return statearr_33652;
});
var state_machine__7586__auto____1 = (function (state_33613){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_33613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e33653){if((e33653 instanceof Object)){
var ex__7589__auto__ = e33653;
var statearr_33654_33680 = state_33613;
(statearr_33654_33680[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33681 = state_33613;
state_33613 = G__33681;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_33613){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_33613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto__))
})();
var state__7602__auto__ = (function (){var statearr_33655 = f__7601__auto__.call(null);
(statearr_33655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto__);

return statearr_33655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto__))
);

return c__7600__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7600__auto___33778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___33778,out){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___33778,out){
return (function (state_33753){
var state_val_33754 = (state_33753[(1)]);
if((state_val_33754 === (7))){
var inst_33748 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
var statearr_33755_33779 = state_33753__$1;
(statearr_33755_33779[(2)] = inst_33748);

(statearr_33755_33779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (1))){
var inst_33730 = null;
var state_33753__$1 = (function (){var statearr_33756 = state_33753;
(statearr_33756[(7)] = inst_33730);

return statearr_33756;
})();
var statearr_33757_33780 = state_33753__$1;
(statearr_33757_33780[(2)] = null);

(statearr_33757_33780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (4))){
var inst_33733 = (state_33753[(8)]);
var inst_33733__$1 = (state_33753[(2)]);
var inst_33734 = (inst_33733__$1 == null);
var inst_33735 = cljs.core.not.call(null,inst_33734);
var state_33753__$1 = (function (){var statearr_33758 = state_33753;
(statearr_33758[(8)] = inst_33733__$1);

return statearr_33758;
})();
if(inst_33735){
var statearr_33759_33781 = state_33753__$1;
(statearr_33759_33781[(1)] = (5));

} else {
var statearr_33760_33782 = state_33753__$1;
(statearr_33760_33782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (6))){
var state_33753__$1 = state_33753;
var statearr_33761_33783 = state_33753__$1;
(statearr_33761_33783[(2)] = null);

(statearr_33761_33783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (3))){
var inst_33750 = (state_33753[(2)]);
var inst_33751 = cljs.core.async.close_BANG_.call(null,out);
var state_33753__$1 = (function (){var statearr_33762 = state_33753;
(statearr_33762[(9)] = inst_33750);

return statearr_33762;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33753__$1,inst_33751);
} else {
if((state_val_33754 === (2))){
var state_33753__$1 = state_33753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33753__$1,(4),ch);
} else {
if((state_val_33754 === (11))){
var inst_33733 = (state_33753[(8)]);
var inst_33742 = (state_33753[(2)]);
var inst_33730 = inst_33733;
var state_33753__$1 = (function (){var statearr_33763 = state_33753;
(statearr_33763[(7)] = inst_33730);

(statearr_33763[(10)] = inst_33742);

return statearr_33763;
})();
var statearr_33764_33784 = state_33753__$1;
(statearr_33764_33784[(2)] = null);

(statearr_33764_33784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (9))){
var inst_33733 = (state_33753[(8)]);
var state_33753__$1 = state_33753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33753__$1,(11),out,inst_33733);
} else {
if((state_val_33754 === (5))){
var inst_33733 = (state_33753[(8)]);
var inst_33730 = (state_33753[(7)]);
var inst_33737 = cljs.core._EQ_.call(null,inst_33733,inst_33730);
var state_33753__$1 = state_33753;
if(inst_33737){
var statearr_33766_33785 = state_33753__$1;
(statearr_33766_33785[(1)] = (8));

} else {
var statearr_33767_33786 = state_33753__$1;
(statearr_33767_33786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (10))){
var inst_33745 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
var statearr_33768_33787 = state_33753__$1;
(statearr_33768_33787[(2)] = inst_33745);

(statearr_33768_33787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (8))){
var inst_33730 = (state_33753[(7)]);
var tmp33765 = inst_33730;
var inst_33730__$1 = tmp33765;
var state_33753__$1 = (function (){var statearr_33769 = state_33753;
(statearr_33769[(7)] = inst_33730__$1);

return statearr_33769;
})();
var statearr_33770_33788 = state_33753__$1;
(statearr_33770_33788[(2)] = null);

(statearr_33770_33788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7600__auto___33778,out))
;
return ((function (switch__7585__auto__,c__7600__auto___33778,out){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_33774 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33774[(0)] = state_machine__7586__auto__);

(statearr_33774[(1)] = (1));

return statearr_33774;
});
var state_machine__7586__auto____1 = (function (state_33753){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_33753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e33775){if((e33775 instanceof Object)){
var ex__7589__auto__ = e33775;
var statearr_33776_33789 = state_33753;
(statearr_33776_33789[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33790 = state_33753;
state_33753 = G__33790;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_33753){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_33753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___33778,out))
})();
var state__7602__auto__ = (function (){var statearr_33777 = f__7601__auto__.call(null);
(statearr_33777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___33778);

return statearr_33777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___33778,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7600__auto___33925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___33925,out){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___33925,out){
return (function (state_33895){
var state_val_33896 = (state_33895[(1)]);
if((state_val_33896 === (7))){
var inst_33891 = (state_33895[(2)]);
var state_33895__$1 = state_33895;
var statearr_33897_33926 = state_33895__$1;
(statearr_33897_33926[(2)] = inst_33891);

(statearr_33897_33926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33896 === (1))){
var inst_33858 = (new Array(n));
var inst_33859 = inst_33858;
var inst_33860 = (0);
var state_33895__$1 = (function (){var statearr_33898 = state_33895;
(statearr_33898[(7)] = inst_33860);

(statearr_33898[(8)] = inst_33859);

return statearr_33898;
})();
var statearr_33899_33927 = state_33895__$1;
(statearr_33899_33927[(2)] = null);

(statearr_33899_33927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33896 === (4))){
var inst_33863 = (state_33895[(9)]);
var inst_33863__$1 = (state_33895[(2)]);
var inst_33864 = (inst_33863__$1 == null);
var inst_33865 = cljs.core.not.call(null,inst_33864);
var state_33895__$1 = (function (){var statearr_33900 = state_33895;
(statearr_33900[(9)] = inst_33863__$1);

return statearr_33900;
})();
if(inst_33865){
var statearr_33901_33928 = state_33895__$1;
(statearr_33901_33928[(1)] = (5));

} else {
var statearr_33902_33929 = state_33895__$1;
(statearr_33902_33929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33896 === (15))){
var inst_33885 = (state_33895[(2)]);
var state_33895__$1 = state_33895;
var statearr_33903_33930 = state_33895__$1;
(statearr_33903_33930[(2)] = inst_33885);

(statearr_33903_33930[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33896 === (13))){
var state_33895__$1 = state_33895;
var statearr_33904_33931 = state_33895__$1;
(statearr_33904_33931[(2)] = null);

(statearr_33904_33931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33896 === (6))){
var inst_33860 = (state_33895[(7)]);
var inst_33881 = (inst_33860 > (0));
var state_33895__$1 = state_33895;
if(cljs.core.truth_(inst_33881)){
var statearr_33905_33932 = state_33895__$1;
(statearr_33905_33932[(1)] = (12));

} else {
var statearr_33906_33933 = state_33895__$1;
(statearr_33906_33933[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33896 === (3))){
var inst_33893 = (state_33895[(2)]);
var state_33895__$1 = state_33895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33895__$1,inst_33893);
} else {
if((state_val_33896 === (12))){
var inst_33859 = (state_33895[(8)]);
var inst_33883 = cljs.core.vec.call(null,inst_33859);
var state_33895__$1 = state_33895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33895__$1,(15),out,inst_33883);
} else {
if((state_val_33896 === (2))){
var state_33895__$1 = state_33895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33895__$1,(4),ch);
} else {
if((state_val_33896 === (11))){
var inst_33875 = (state_33895[(2)]);
var inst_33876 = (new Array(n));
var inst_33859 = inst_33876;
var inst_33860 = (0);
var state_33895__$1 = (function (){var statearr_33907 = state_33895;
(statearr_33907[(7)] = inst_33860);

(statearr_33907[(8)] = inst_33859);

(statearr_33907[(10)] = inst_33875);

return statearr_33907;
})();
var statearr_33908_33934 = state_33895__$1;
(statearr_33908_33934[(2)] = null);

(statearr_33908_33934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33896 === (9))){
var inst_33859 = (state_33895[(8)]);
var inst_33873 = cljs.core.vec.call(null,inst_33859);
var state_33895__$1 = state_33895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33895__$1,(11),out,inst_33873);
} else {
if((state_val_33896 === (5))){
var inst_33860 = (state_33895[(7)]);
var inst_33859 = (state_33895[(8)]);
var inst_33868 = (state_33895[(11)]);
var inst_33863 = (state_33895[(9)]);
var inst_33867 = (inst_33859[inst_33860] = inst_33863);
var inst_33868__$1 = (inst_33860 + (1));
var inst_33869 = (inst_33868__$1 < n);
var state_33895__$1 = (function (){var statearr_33909 = state_33895;
(statearr_33909[(11)] = inst_33868__$1);

(statearr_33909[(12)] = inst_33867);

return statearr_33909;
})();
if(cljs.core.truth_(inst_33869)){
var statearr_33910_33935 = state_33895__$1;
(statearr_33910_33935[(1)] = (8));

} else {
var statearr_33911_33936 = state_33895__$1;
(statearr_33911_33936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33896 === (14))){
var inst_33888 = (state_33895[(2)]);
var inst_33889 = cljs.core.async.close_BANG_.call(null,out);
var state_33895__$1 = (function (){var statearr_33913 = state_33895;
(statearr_33913[(13)] = inst_33888);

return statearr_33913;
})();
var statearr_33914_33937 = state_33895__$1;
(statearr_33914_33937[(2)] = inst_33889);

(statearr_33914_33937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33896 === (10))){
var inst_33879 = (state_33895[(2)]);
var state_33895__$1 = state_33895;
var statearr_33915_33938 = state_33895__$1;
(statearr_33915_33938[(2)] = inst_33879);

(statearr_33915_33938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33896 === (8))){
var inst_33859 = (state_33895[(8)]);
var inst_33868 = (state_33895[(11)]);
var tmp33912 = inst_33859;
var inst_33859__$1 = tmp33912;
var inst_33860 = inst_33868;
var state_33895__$1 = (function (){var statearr_33916 = state_33895;
(statearr_33916[(7)] = inst_33860);

(statearr_33916[(8)] = inst_33859__$1);

return statearr_33916;
})();
var statearr_33917_33939 = state_33895__$1;
(statearr_33917_33939[(2)] = null);

(statearr_33917_33939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7600__auto___33925,out))
;
return ((function (switch__7585__auto__,c__7600__auto___33925,out){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_33921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33921[(0)] = state_machine__7586__auto__);

(statearr_33921[(1)] = (1));

return statearr_33921;
});
var state_machine__7586__auto____1 = (function (state_33895){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_33895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e33922){if((e33922 instanceof Object)){
var ex__7589__auto__ = e33922;
var statearr_33923_33940 = state_33895;
(statearr_33923_33940[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33941 = state_33895;
state_33895 = G__33941;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_33895){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_33895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___33925,out))
})();
var state__7602__auto__ = (function (){var statearr_33924 = f__7601__auto__.call(null);
(statearr_33924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___33925);

return statearr_33924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___33925,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7600__auto___34084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___34084,out){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___34084,out){
return (function (state_34054){
var state_val_34055 = (state_34054[(1)]);
if((state_val_34055 === (7))){
var inst_34050 = (state_34054[(2)]);
var state_34054__$1 = state_34054;
var statearr_34056_34085 = state_34054__$1;
(statearr_34056_34085[(2)] = inst_34050);

(statearr_34056_34085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (1))){
var inst_34013 = [];
var inst_34014 = inst_34013;
var inst_34015 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34054__$1 = (function (){var statearr_34057 = state_34054;
(statearr_34057[(7)] = inst_34015);

(statearr_34057[(8)] = inst_34014);

return statearr_34057;
})();
var statearr_34058_34086 = state_34054__$1;
(statearr_34058_34086[(2)] = null);

(statearr_34058_34086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (4))){
var inst_34018 = (state_34054[(9)]);
var inst_34018__$1 = (state_34054[(2)]);
var inst_34019 = (inst_34018__$1 == null);
var inst_34020 = cljs.core.not.call(null,inst_34019);
var state_34054__$1 = (function (){var statearr_34059 = state_34054;
(statearr_34059[(9)] = inst_34018__$1);

return statearr_34059;
})();
if(inst_34020){
var statearr_34060_34087 = state_34054__$1;
(statearr_34060_34087[(1)] = (5));

} else {
var statearr_34061_34088 = state_34054__$1;
(statearr_34061_34088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (15))){
var inst_34044 = (state_34054[(2)]);
var state_34054__$1 = state_34054;
var statearr_34062_34089 = state_34054__$1;
(statearr_34062_34089[(2)] = inst_34044);

(statearr_34062_34089[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (13))){
var state_34054__$1 = state_34054;
var statearr_34063_34090 = state_34054__$1;
(statearr_34063_34090[(2)] = null);

(statearr_34063_34090[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (6))){
var inst_34014 = (state_34054[(8)]);
var inst_34039 = inst_34014.length;
var inst_34040 = (inst_34039 > (0));
var state_34054__$1 = state_34054;
if(cljs.core.truth_(inst_34040)){
var statearr_34064_34091 = state_34054__$1;
(statearr_34064_34091[(1)] = (12));

} else {
var statearr_34065_34092 = state_34054__$1;
(statearr_34065_34092[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (3))){
var inst_34052 = (state_34054[(2)]);
var state_34054__$1 = state_34054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34054__$1,inst_34052);
} else {
if((state_val_34055 === (12))){
var inst_34014 = (state_34054[(8)]);
var inst_34042 = cljs.core.vec.call(null,inst_34014);
var state_34054__$1 = state_34054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34054__$1,(15),out,inst_34042);
} else {
if((state_val_34055 === (2))){
var state_34054__$1 = state_34054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34054__$1,(4),ch);
} else {
if((state_val_34055 === (11))){
var inst_34022 = (state_34054[(10)]);
var inst_34018 = (state_34054[(9)]);
var inst_34032 = (state_34054[(2)]);
var inst_34033 = [];
var inst_34034 = inst_34033.push(inst_34018);
var inst_34014 = inst_34033;
var inst_34015 = inst_34022;
var state_34054__$1 = (function (){var statearr_34066 = state_34054;
(statearr_34066[(11)] = inst_34032);

(statearr_34066[(7)] = inst_34015);

(statearr_34066[(12)] = inst_34034);

(statearr_34066[(8)] = inst_34014);

return statearr_34066;
})();
var statearr_34067_34093 = state_34054__$1;
(statearr_34067_34093[(2)] = null);

(statearr_34067_34093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (9))){
var inst_34014 = (state_34054[(8)]);
var inst_34030 = cljs.core.vec.call(null,inst_34014);
var state_34054__$1 = state_34054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34054__$1,(11),out,inst_34030);
} else {
if((state_val_34055 === (5))){
var inst_34015 = (state_34054[(7)]);
var inst_34022 = (state_34054[(10)]);
var inst_34018 = (state_34054[(9)]);
var inst_34022__$1 = f.call(null,inst_34018);
var inst_34023 = cljs.core._EQ_.call(null,inst_34022__$1,inst_34015);
var inst_34024 = cljs.core.keyword_identical_QMARK_.call(null,inst_34015,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34025 = (inst_34023) || (inst_34024);
var state_34054__$1 = (function (){var statearr_34068 = state_34054;
(statearr_34068[(10)] = inst_34022__$1);

return statearr_34068;
})();
if(cljs.core.truth_(inst_34025)){
var statearr_34069_34094 = state_34054__$1;
(statearr_34069_34094[(1)] = (8));

} else {
var statearr_34070_34095 = state_34054__$1;
(statearr_34070_34095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (14))){
var inst_34047 = (state_34054[(2)]);
var inst_34048 = cljs.core.async.close_BANG_.call(null,out);
var state_34054__$1 = (function (){var statearr_34072 = state_34054;
(statearr_34072[(13)] = inst_34047);

return statearr_34072;
})();
var statearr_34073_34096 = state_34054__$1;
(statearr_34073_34096[(2)] = inst_34048);

(statearr_34073_34096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (10))){
var inst_34037 = (state_34054[(2)]);
var state_34054__$1 = state_34054;
var statearr_34074_34097 = state_34054__$1;
(statearr_34074_34097[(2)] = inst_34037);

(statearr_34074_34097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (8))){
var inst_34014 = (state_34054[(8)]);
var inst_34022 = (state_34054[(10)]);
var inst_34018 = (state_34054[(9)]);
var inst_34027 = inst_34014.push(inst_34018);
var tmp34071 = inst_34014;
var inst_34014__$1 = tmp34071;
var inst_34015 = inst_34022;
var state_34054__$1 = (function (){var statearr_34075 = state_34054;
(statearr_34075[(7)] = inst_34015);

(statearr_34075[(14)] = inst_34027);

(statearr_34075[(8)] = inst_34014__$1);

return statearr_34075;
})();
var statearr_34076_34098 = state_34054__$1;
(statearr_34076_34098[(2)] = null);

(statearr_34076_34098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7600__auto___34084,out))
;
return ((function (switch__7585__auto__,c__7600__auto___34084,out){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_34080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34080[(0)] = state_machine__7586__auto__);

(statearr_34080[(1)] = (1));

return statearr_34080;
});
var state_machine__7586__auto____1 = (function (state_34054){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_34054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e34081){if((e34081 instanceof Object)){
var ex__7589__auto__ = e34081;
var statearr_34082_34099 = state_34054;
(statearr_34082_34099[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34100 = state_34054;
state_34054 = G__34100;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_34054){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_34054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___34084,out))
})();
var state__7602__auto__ = (function (){var statearr_34083 = f__7601__auto__.call(null);
(statearr_34083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___34084);

return statearr_34083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___34084,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
