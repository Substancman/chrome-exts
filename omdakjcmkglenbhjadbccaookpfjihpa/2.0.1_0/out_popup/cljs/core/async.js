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
if(typeof cljs.core.async.t17244 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17244 = (function (f,fn_handler,meta17245){
this.f = f;
this.fn_handler = fn_handler;
this.meta17245 = meta17245;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17244.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17244.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t17244.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t17244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17246){
var self__ = this;
var _17246__$1 = this;
return self__.meta17245;
});

cljs.core.async.t17244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17246,meta17245__$1){
var self__ = this;
var _17246__$1 = this;
return (new cljs.core.async.t17244(self__.f,self__.fn_handler,meta17245__$1));
});

cljs.core.async.t17244.cljs$lang$type = true;

cljs.core.async.t17244.cljs$lang$ctorStr = "cljs.core.async/t17244";

cljs.core.async.t17244.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t17244");
});

cljs.core.async.__GT_t17244 = (function __GT_t17244(f__$1,fn_handler__$1,meta17245){
return (new cljs.core.async.t17244(f__$1,fn_handler__$1,meta17245));
});

}

return (new cljs.core.async.t17244(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17248 = buff;
if(G__17248){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__17248.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__17248.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17248);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17248);
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
var val_17249 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17249);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17249,ret){
return (function (){
return fn1.call(null,val_17249);
});})(val_17249,ret))
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
var n__4868__auto___17250 = n;
var x_17251 = (0);
while(true){
if((x_17251 < n__4868__auto___17250)){
(a[x_17251] = (0));

var G__17252 = (x_17251 + (1));
x_17251 = G__17252;
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

var G__17253 = (i + (1));
i = G__17253;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t17257 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17257 = (function (flag,alt_flag,meta17258){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17258 = meta17258;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17257.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17257.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t17257.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t17257.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17259){
var self__ = this;
var _17259__$1 = this;
return self__.meta17258;
});})(flag))
;

cljs.core.async.t17257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17259,meta17258__$1){
var self__ = this;
var _17259__$1 = this;
return (new cljs.core.async.t17257(self__.flag,self__.alt_flag,meta17258__$1));
});})(flag))
;

cljs.core.async.t17257.cljs$lang$type = true;

cljs.core.async.t17257.cljs$lang$ctorStr = "cljs.core.async/t17257";

cljs.core.async.t17257.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t17257");
});})(flag))
;

cljs.core.async.__GT_t17257 = ((function (flag){
return (function __GT_t17257(flag__$1,alt_flag__$1,meta17258){
return (new cljs.core.async.t17257(flag__$1,alt_flag__$1,meta17258));
});})(flag))
;

}

return (new cljs.core.async.t17257(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t17263 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17263 = (function (cb,flag,alt_handler,meta17264){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17264 = meta17264;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17263.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17263.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t17263.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t17263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17265){
var self__ = this;
var _17265__$1 = this;
return self__.meta17264;
});

cljs.core.async.t17263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17265,meta17264__$1){
var self__ = this;
var _17265__$1 = this;
return (new cljs.core.async.t17263(self__.cb,self__.flag,self__.alt_handler,meta17264__$1));
});

cljs.core.async.t17263.cljs$lang$type = true;

cljs.core.async.t17263.cljs$lang$ctorStr = "cljs.core.async/t17263";

cljs.core.async.t17263.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t17263");
});

cljs.core.async.__GT_t17263 = (function __GT_t17263(cb__$1,flag__$1,alt_handler__$1,meta17264){
return (new cljs.core.async.t17263(cb__$1,flag__$1,alt_handler__$1,meta17264));
});

}

return (new cljs.core.async.t17263(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17266_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17266_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17267_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17267_SHARP_,port], null));
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
var G__17268 = (i + (1));
i = G__17268;
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
var alts_BANG___delegate = function (ports,p__17269){
var map__17271 = p__17269;
var map__17271__$1 = ((cljs.core.seq_QMARK_.call(null,map__17271))?cljs.core.apply.call(null,cljs.core.hash_map,map__17271):map__17271);
var opts = map__17271__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__17269 = null;
if (arguments.length > 1) {
var G__17272__i = 0, G__17272__a = new Array(arguments.length -  1);
while (G__17272__i < G__17272__a.length) {G__17272__a[G__17272__i] = arguments[G__17272__i + 1]; ++G__17272__i;}
  p__17269 = new cljs.core.IndexedSeq(G__17272__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__17269);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17273){
var ports = cljs.core.first(arglist__17273);
var p__17269 = cljs.core.rest(arglist__17273);
return alts_BANG___delegate(ports,p__17269);
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
var c__7600__auto___17368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___17368){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___17368){
return (function (state_17344){
var state_val_17345 = (state_17344[(1)]);
if((state_val_17345 === (7))){
var inst_17340 = (state_17344[(2)]);
var state_17344__$1 = state_17344;
var statearr_17346_17369 = state_17344__$1;
(statearr_17346_17369[(2)] = inst_17340);

(statearr_17346_17369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17345 === (1))){
var state_17344__$1 = state_17344;
var statearr_17347_17370 = state_17344__$1;
(statearr_17347_17370[(2)] = null);

(statearr_17347_17370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17345 === (4))){
var inst_17323 = (state_17344[(7)]);
var inst_17323__$1 = (state_17344[(2)]);
var inst_17324 = (inst_17323__$1 == null);
var state_17344__$1 = (function (){var statearr_17348 = state_17344;
(statearr_17348[(7)] = inst_17323__$1);

return statearr_17348;
})();
if(cljs.core.truth_(inst_17324)){
var statearr_17349_17371 = state_17344__$1;
(statearr_17349_17371[(1)] = (5));

} else {
var statearr_17350_17372 = state_17344__$1;
(statearr_17350_17372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17345 === (13))){
var state_17344__$1 = state_17344;
var statearr_17351_17373 = state_17344__$1;
(statearr_17351_17373[(2)] = null);

(statearr_17351_17373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17345 === (6))){
var inst_17323 = (state_17344[(7)]);
var state_17344__$1 = state_17344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17344__$1,(11),to,inst_17323);
} else {
if((state_val_17345 === (3))){
var inst_17342 = (state_17344[(2)]);
var state_17344__$1 = state_17344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17344__$1,inst_17342);
} else {
if((state_val_17345 === (12))){
var state_17344__$1 = state_17344;
var statearr_17352_17374 = state_17344__$1;
(statearr_17352_17374[(2)] = null);

(statearr_17352_17374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17345 === (2))){
var state_17344__$1 = state_17344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17344__$1,(4),from);
} else {
if((state_val_17345 === (11))){
var inst_17333 = (state_17344[(2)]);
var state_17344__$1 = state_17344;
if(cljs.core.truth_(inst_17333)){
var statearr_17353_17375 = state_17344__$1;
(statearr_17353_17375[(1)] = (12));

} else {
var statearr_17354_17376 = state_17344__$1;
(statearr_17354_17376[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17345 === (9))){
var state_17344__$1 = state_17344;
var statearr_17355_17377 = state_17344__$1;
(statearr_17355_17377[(2)] = null);

(statearr_17355_17377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17345 === (5))){
var state_17344__$1 = state_17344;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17356_17378 = state_17344__$1;
(statearr_17356_17378[(1)] = (8));

} else {
var statearr_17357_17379 = state_17344__$1;
(statearr_17357_17379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17345 === (14))){
var inst_17338 = (state_17344[(2)]);
var state_17344__$1 = state_17344;
var statearr_17358_17380 = state_17344__$1;
(statearr_17358_17380[(2)] = inst_17338);

(statearr_17358_17380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17345 === (10))){
var inst_17330 = (state_17344[(2)]);
var state_17344__$1 = state_17344;
var statearr_17359_17381 = state_17344__$1;
(statearr_17359_17381[(2)] = inst_17330);

(statearr_17359_17381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17345 === (8))){
var inst_17327 = cljs.core.async.close_BANG_.call(null,to);
var state_17344__$1 = state_17344;
var statearr_17360_17382 = state_17344__$1;
(statearr_17360_17382[(2)] = inst_17327);

(statearr_17360_17382[(1)] = (10));


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
});})(c__7600__auto___17368))
;
return ((function (switch__7585__auto__,c__7600__auto___17368){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_17364 = [null,null,null,null,null,null,null,null];
(statearr_17364[(0)] = state_machine__7586__auto__);

(statearr_17364[(1)] = (1));

return statearr_17364;
});
var state_machine__7586__auto____1 = (function (state_17344){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_17344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e17365){if((e17365 instanceof Object)){
var ex__7589__auto__ = e17365;
var statearr_17366_17383 = state_17344;
(statearr_17366_17383[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17384 = state_17344;
state_17344 = G__17384;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_17344){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_17344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___17368))
})();
var state__7602__auto__ = (function (){var statearr_17367 = f__7601__auto__.call(null);
(statearr_17367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___17368);

return statearr_17367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___17368))
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
return (function (p__17568){
var vec__17569 = p__17568;
var v = cljs.core.nth.call(null,vec__17569,(0),null);
var p = cljs.core.nth.call(null,vec__17569,(1),null);
var job = vec__17569;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7600__auto___17751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___17751,res,vec__17569,v,p,job,jobs,results){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___17751,res,vec__17569,v,p,job,jobs,results){
return (function (state_17574){
var state_val_17575 = (state_17574[(1)]);
if((state_val_17575 === (2))){
var inst_17571 = (state_17574[(2)]);
var inst_17572 = cljs.core.async.close_BANG_.call(null,res);
var state_17574__$1 = (function (){var statearr_17576 = state_17574;
(statearr_17576[(7)] = inst_17571);

return statearr_17576;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17574__$1,inst_17572);
} else {
if((state_val_17575 === (1))){
var state_17574__$1 = state_17574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17574__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7600__auto___17751,res,vec__17569,v,p,job,jobs,results))
;
return ((function (switch__7585__auto__,c__7600__auto___17751,res,vec__17569,v,p,job,jobs,results){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_17580 = [null,null,null,null,null,null,null,null];
(statearr_17580[(0)] = state_machine__7586__auto__);

(statearr_17580[(1)] = (1));

return statearr_17580;
});
var state_machine__7586__auto____1 = (function (state_17574){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_17574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e17581){if((e17581 instanceof Object)){
var ex__7589__auto__ = e17581;
var statearr_17582_17752 = state_17574;
(statearr_17582_17752[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17753 = state_17574;
state_17574 = G__17753;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_17574){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_17574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___17751,res,vec__17569,v,p,job,jobs,results))
})();
var state__7602__auto__ = (function (){var statearr_17583 = f__7601__auto__.call(null);
(statearr_17583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___17751);

return statearr_17583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___17751,res,vec__17569,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17584){
var vec__17585 = p__17584;
var v = cljs.core.nth.call(null,vec__17585,(0),null);
var p = cljs.core.nth.call(null,vec__17585,(1),null);
var job = vec__17585;
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
var n__4868__auto___17754 = n;
var __17755 = (0);
while(true){
if((__17755 < n__4868__auto___17754)){
var G__17586_17756 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17586_17756) {
case "async":
var c__7600__auto___17758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17755,c__7600__auto___17758,G__17586_17756,n__4868__auto___17754,jobs,results,process,async){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (__17755,c__7600__auto___17758,G__17586_17756,n__4868__auto___17754,jobs,results,process,async){
return (function (state_17599){
var state_val_17600 = (state_17599[(1)]);
if((state_val_17600 === (7))){
var inst_17595 = (state_17599[(2)]);
var state_17599__$1 = state_17599;
var statearr_17601_17759 = state_17599__$1;
(statearr_17601_17759[(2)] = inst_17595);

(statearr_17601_17759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17600 === (6))){
var state_17599__$1 = state_17599;
var statearr_17602_17760 = state_17599__$1;
(statearr_17602_17760[(2)] = null);

(statearr_17602_17760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17600 === (5))){
var state_17599__$1 = state_17599;
var statearr_17603_17761 = state_17599__$1;
(statearr_17603_17761[(2)] = null);

(statearr_17603_17761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17600 === (4))){
var inst_17589 = (state_17599[(2)]);
var inst_17590 = async.call(null,inst_17589);
var state_17599__$1 = state_17599;
if(cljs.core.truth_(inst_17590)){
var statearr_17604_17762 = state_17599__$1;
(statearr_17604_17762[(1)] = (5));

} else {
var statearr_17605_17763 = state_17599__$1;
(statearr_17605_17763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17600 === (3))){
var inst_17597 = (state_17599[(2)]);
var state_17599__$1 = state_17599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17599__$1,inst_17597);
} else {
if((state_val_17600 === (2))){
var state_17599__$1 = state_17599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17599__$1,(4),jobs);
} else {
if((state_val_17600 === (1))){
var state_17599__$1 = state_17599;
var statearr_17606_17764 = state_17599__$1;
(statearr_17606_17764[(2)] = null);

(statearr_17606_17764[(1)] = (2));


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
});})(__17755,c__7600__auto___17758,G__17586_17756,n__4868__auto___17754,jobs,results,process,async))
;
return ((function (__17755,switch__7585__auto__,c__7600__auto___17758,G__17586_17756,n__4868__auto___17754,jobs,results,process,async){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_17610 = [null,null,null,null,null,null,null];
(statearr_17610[(0)] = state_machine__7586__auto__);

(statearr_17610[(1)] = (1));

return statearr_17610;
});
var state_machine__7586__auto____1 = (function (state_17599){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_17599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e17611){if((e17611 instanceof Object)){
var ex__7589__auto__ = e17611;
var statearr_17612_17765 = state_17599;
(statearr_17612_17765[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17766 = state_17599;
state_17599 = G__17766;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_17599){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_17599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(__17755,switch__7585__auto__,c__7600__auto___17758,G__17586_17756,n__4868__auto___17754,jobs,results,process,async))
})();
var state__7602__auto__ = (function (){var statearr_17613 = f__7601__auto__.call(null);
(statearr_17613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___17758);

return statearr_17613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(__17755,c__7600__auto___17758,G__17586_17756,n__4868__auto___17754,jobs,results,process,async))
);


break;
case "compute":
var c__7600__auto___17767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17755,c__7600__auto___17767,G__17586_17756,n__4868__auto___17754,jobs,results,process,async){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (__17755,c__7600__auto___17767,G__17586_17756,n__4868__auto___17754,jobs,results,process,async){
return (function (state_17626){
var state_val_17627 = (state_17626[(1)]);
if((state_val_17627 === (7))){
var inst_17622 = (state_17626[(2)]);
var state_17626__$1 = state_17626;
var statearr_17628_17768 = state_17626__$1;
(statearr_17628_17768[(2)] = inst_17622);

(statearr_17628_17768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17627 === (6))){
var state_17626__$1 = state_17626;
var statearr_17629_17769 = state_17626__$1;
(statearr_17629_17769[(2)] = null);

(statearr_17629_17769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17627 === (5))){
var state_17626__$1 = state_17626;
var statearr_17630_17770 = state_17626__$1;
(statearr_17630_17770[(2)] = null);

(statearr_17630_17770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17627 === (4))){
var inst_17616 = (state_17626[(2)]);
var inst_17617 = process.call(null,inst_17616);
var state_17626__$1 = state_17626;
if(cljs.core.truth_(inst_17617)){
var statearr_17631_17771 = state_17626__$1;
(statearr_17631_17771[(1)] = (5));

} else {
var statearr_17632_17772 = state_17626__$1;
(statearr_17632_17772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17627 === (3))){
var inst_17624 = (state_17626[(2)]);
var state_17626__$1 = state_17626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17626__$1,inst_17624);
} else {
if((state_val_17627 === (2))){
var state_17626__$1 = state_17626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17626__$1,(4),jobs);
} else {
if((state_val_17627 === (1))){
var state_17626__$1 = state_17626;
var statearr_17633_17773 = state_17626__$1;
(statearr_17633_17773[(2)] = null);

(statearr_17633_17773[(1)] = (2));


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
});})(__17755,c__7600__auto___17767,G__17586_17756,n__4868__auto___17754,jobs,results,process,async))
;
return ((function (__17755,switch__7585__auto__,c__7600__auto___17767,G__17586_17756,n__4868__auto___17754,jobs,results,process,async){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_17637 = [null,null,null,null,null,null,null];
(statearr_17637[(0)] = state_machine__7586__auto__);

(statearr_17637[(1)] = (1));

return statearr_17637;
});
var state_machine__7586__auto____1 = (function (state_17626){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_17626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e17638){if((e17638 instanceof Object)){
var ex__7589__auto__ = e17638;
var statearr_17639_17774 = state_17626;
(statearr_17639_17774[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17775 = state_17626;
state_17626 = G__17775;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_17626){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_17626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(__17755,switch__7585__auto__,c__7600__auto___17767,G__17586_17756,n__4868__auto___17754,jobs,results,process,async))
})();
var state__7602__auto__ = (function (){var statearr_17640 = f__7601__auto__.call(null);
(statearr_17640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___17767);

return statearr_17640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(__17755,c__7600__auto___17767,G__17586_17756,n__4868__auto___17754,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17776 = (__17755 + (1));
__17755 = G__17776;
continue;
} else {
}
break;
}

var c__7600__auto___17777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___17777,jobs,results,process,async){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___17777,jobs,results,process,async){
return (function (state_17662){
var state_val_17663 = (state_17662[(1)]);
if((state_val_17663 === (9))){
var inst_17655 = (state_17662[(2)]);
var state_17662__$1 = (function (){var statearr_17664 = state_17662;
(statearr_17664[(7)] = inst_17655);

return statearr_17664;
})();
var statearr_17665_17778 = state_17662__$1;
(statearr_17665_17778[(2)] = null);

(statearr_17665_17778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (8))){
var inst_17648 = (state_17662[(8)]);
var inst_17653 = (state_17662[(2)]);
var state_17662__$1 = (function (){var statearr_17666 = state_17662;
(statearr_17666[(9)] = inst_17653);

return statearr_17666;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17662__$1,(9),results,inst_17648);
} else {
if((state_val_17663 === (7))){
var inst_17658 = (state_17662[(2)]);
var state_17662__$1 = state_17662;
var statearr_17667_17779 = state_17662__$1;
(statearr_17667_17779[(2)] = inst_17658);

(statearr_17667_17779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (6))){
var inst_17643 = (state_17662[(10)]);
var inst_17648 = (state_17662[(8)]);
var inst_17648__$1 = cljs.core.async.chan.call(null,(1));
var inst_17649 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17650 = [inst_17643,inst_17648__$1];
var inst_17651 = (new cljs.core.PersistentVector(null,2,(5),inst_17649,inst_17650,null));
var state_17662__$1 = (function (){var statearr_17668 = state_17662;
(statearr_17668[(8)] = inst_17648__$1);

return statearr_17668;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17662__$1,(8),jobs,inst_17651);
} else {
if((state_val_17663 === (5))){
var inst_17646 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17662__$1 = state_17662;
var statearr_17669_17780 = state_17662__$1;
(statearr_17669_17780[(2)] = inst_17646);

(statearr_17669_17780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (4))){
var inst_17643 = (state_17662[(10)]);
var inst_17643__$1 = (state_17662[(2)]);
var inst_17644 = (inst_17643__$1 == null);
var state_17662__$1 = (function (){var statearr_17670 = state_17662;
(statearr_17670[(10)] = inst_17643__$1);

return statearr_17670;
})();
if(cljs.core.truth_(inst_17644)){
var statearr_17671_17781 = state_17662__$1;
(statearr_17671_17781[(1)] = (5));

} else {
var statearr_17672_17782 = state_17662__$1;
(statearr_17672_17782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17663 === (3))){
var inst_17660 = (state_17662[(2)]);
var state_17662__$1 = state_17662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17662__$1,inst_17660);
} else {
if((state_val_17663 === (2))){
var state_17662__$1 = state_17662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17662__$1,(4),from);
} else {
if((state_val_17663 === (1))){
var state_17662__$1 = state_17662;
var statearr_17673_17783 = state_17662__$1;
(statearr_17673_17783[(2)] = null);

(statearr_17673_17783[(1)] = (2));


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
});})(c__7600__auto___17777,jobs,results,process,async))
;
return ((function (switch__7585__auto__,c__7600__auto___17777,jobs,results,process,async){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_17677 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17677[(0)] = state_machine__7586__auto__);

(statearr_17677[(1)] = (1));

return statearr_17677;
});
var state_machine__7586__auto____1 = (function (state_17662){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_17662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e17678){if((e17678 instanceof Object)){
var ex__7589__auto__ = e17678;
var statearr_17679_17784 = state_17662;
(statearr_17679_17784[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17785 = state_17662;
state_17662 = G__17785;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_17662){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_17662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___17777,jobs,results,process,async))
})();
var state__7602__auto__ = (function (){var statearr_17680 = f__7601__auto__.call(null);
(statearr_17680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___17777);

return statearr_17680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___17777,jobs,results,process,async))
);


var c__7600__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto__,jobs,results,process,async){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto__,jobs,results,process,async){
return (function (state_17718){
var state_val_17719 = (state_17718[(1)]);
if((state_val_17719 === (7))){
var inst_17714 = (state_17718[(2)]);
var state_17718__$1 = state_17718;
var statearr_17720_17786 = state_17718__$1;
(statearr_17720_17786[(2)] = inst_17714);

(statearr_17720_17786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17719 === (20))){
var state_17718__$1 = state_17718;
var statearr_17721_17787 = state_17718__$1;
(statearr_17721_17787[(2)] = null);

(statearr_17721_17787[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17719 === (1))){
var state_17718__$1 = state_17718;
var statearr_17722_17788 = state_17718__$1;
(statearr_17722_17788[(2)] = null);

(statearr_17722_17788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17719 === (4))){
var inst_17683 = (state_17718[(7)]);
var inst_17683__$1 = (state_17718[(2)]);
var inst_17684 = (inst_17683__$1 == null);
var state_17718__$1 = (function (){var statearr_17723 = state_17718;
(statearr_17723[(7)] = inst_17683__$1);

return statearr_17723;
})();
if(cljs.core.truth_(inst_17684)){
var statearr_17724_17789 = state_17718__$1;
(statearr_17724_17789[(1)] = (5));

} else {
var statearr_17725_17790 = state_17718__$1;
(statearr_17725_17790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17719 === (15))){
var inst_17696 = (state_17718[(8)]);
var state_17718__$1 = state_17718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17718__$1,(18),to,inst_17696);
} else {
if((state_val_17719 === (21))){
var inst_17709 = (state_17718[(2)]);
var state_17718__$1 = state_17718;
var statearr_17726_17791 = state_17718__$1;
(statearr_17726_17791[(2)] = inst_17709);

(statearr_17726_17791[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17719 === (13))){
var inst_17711 = (state_17718[(2)]);
var state_17718__$1 = (function (){var statearr_17727 = state_17718;
(statearr_17727[(9)] = inst_17711);

return statearr_17727;
})();
var statearr_17728_17792 = state_17718__$1;
(statearr_17728_17792[(2)] = null);

(statearr_17728_17792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17719 === (6))){
var inst_17683 = (state_17718[(7)]);
var state_17718__$1 = state_17718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17718__$1,(11),inst_17683);
} else {
if((state_val_17719 === (17))){
var inst_17704 = (state_17718[(2)]);
var state_17718__$1 = state_17718;
if(cljs.core.truth_(inst_17704)){
var statearr_17729_17793 = state_17718__$1;
(statearr_17729_17793[(1)] = (19));

} else {
var statearr_17730_17794 = state_17718__$1;
(statearr_17730_17794[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17719 === (3))){
var inst_17716 = (state_17718[(2)]);
var state_17718__$1 = state_17718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17718__$1,inst_17716);
} else {
if((state_val_17719 === (12))){
var inst_17693 = (state_17718[(10)]);
var state_17718__$1 = state_17718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17718__$1,(14),inst_17693);
} else {
if((state_val_17719 === (2))){
var state_17718__$1 = state_17718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17718__$1,(4),results);
} else {
if((state_val_17719 === (19))){
var state_17718__$1 = state_17718;
var statearr_17731_17795 = state_17718__$1;
(statearr_17731_17795[(2)] = null);

(statearr_17731_17795[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17719 === (11))){
var inst_17693 = (state_17718[(2)]);
var state_17718__$1 = (function (){var statearr_17732 = state_17718;
(statearr_17732[(10)] = inst_17693);

return statearr_17732;
})();
var statearr_17733_17796 = state_17718__$1;
(statearr_17733_17796[(2)] = null);

(statearr_17733_17796[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17719 === (9))){
var state_17718__$1 = state_17718;
var statearr_17734_17797 = state_17718__$1;
(statearr_17734_17797[(2)] = null);

(statearr_17734_17797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17719 === (5))){
var state_17718__$1 = state_17718;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17735_17798 = state_17718__$1;
(statearr_17735_17798[(1)] = (8));

} else {
var statearr_17736_17799 = state_17718__$1;
(statearr_17736_17799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17719 === (14))){
var inst_17698 = (state_17718[(11)]);
var inst_17696 = (state_17718[(8)]);
var inst_17696__$1 = (state_17718[(2)]);
var inst_17697 = (inst_17696__$1 == null);
var inst_17698__$1 = cljs.core.not.call(null,inst_17697);
var state_17718__$1 = (function (){var statearr_17737 = state_17718;
(statearr_17737[(11)] = inst_17698__$1);

(statearr_17737[(8)] = inst_17696__$1);

return statearr_17737;
})();
if(inst_17698__$1){
var statearr_17738_17800 = state_17718__$1;
(statearr_17738_17800[(1)] = (15));

} else {
var statearr_17739_17801 = state_17718__$1;
(statearr_17739_17801[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17719 === (16))){
var inst_17698 = (state_17718[(11)]);
var state_17718__$1 = state_17718;
var statearr_17740_17802 = state_17718__$1;
(statearr_17740_17802[(2)] = inst_17698);

(statearr_17740_17802[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17719 === (10))){
var inst_17690 = (state_17718[(2)]);
var state_17718__$1 = state_17718;
var statearr_17741_17803 = state_17718__$1;
(statearr_17741_17803[(2)] = inst_17690);

(statearr_17741_17803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17719 === (18))){
var inst_17701 = (state_17718[(2)]);
var state_17718__$1 = state_17718;
var statearr_17742_17804 = state_17718__$1;
(statearr_17742_17804[(2)] = inst_17701);

(statearr_17742_17804[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17719 === (8))){
var inst_17687 = cljs.core.async.close_BANG_.call(null,to);
var state_17718__$1 = state_17718;
var statearr_17743_17805 = state_17718__$1;
(statearr_17743_17805[(2)] = inst_17687);

(statearr_17743_17805[(1)] = (10));


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
var statearr_17747 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17747[(0)] = state_machine__7586__auto__);

(statearr_17747[(1)] = (1));

return statearr_17747;
});
var state_machine__7586__auto____1 = (function (state_17718){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_17718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e17748){if((e17748 instanceof Object)){
var ex__7589__auto__ = e17748;
var statearr_17749_17806 = state_17718;
(statearr_17749_17806[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17807 = state_17718;
state_17718 = G__17807;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_17718){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_17718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto__,jobs,results,process,async))
})();
var state__7602__auto__ = (function (){var statearr_17750 = f__7601__auto__.call(null);
(statearr_17750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto__);

return statearr_17750;
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
var c__7600__auto___17908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___17908,tc,fc){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___17908,tc,fc){
return (function (state_17883){
var state_val_17884 = (state_17883[(1)]);
if((state_val_17884 === (7))){
var inst_17879 = (state_17883[(2)]);
var state_17883__$1 = state_17883;
var statearr_17885_17909 = state_17883__$1;
(statearr_17885_17909[(2)] = inst_17879);

(statearr_17885_17909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17884 === (1))){
var state_17883__$1 = state_17883;
var statearr_17886_17910 = state_17883__$1;
(statearr_17886_17910[(2)] = null);

(statearr_17886_17910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17884 === (4))){
var inst_17860 = (state_17883[(7)]);
var inst_17860__$1 = (state_17883[(2)]);
var inst_17861 = (inst_17860__$1 == null);
var state_17883__$1 = (function (){var statearr_17887 = state_17883;
(statearr_17887[(7)] = inst_17860__$1);

return statearr_17887;
})();
if(cljs.core.truth_(inst_17861)){
var statearr_17888_17911 = state_17883__$1;
(statearr_17888_17911[(1)] = (5));

} else {
var statearr_17889_17912 = state_17883__$1;
(statearr_17889_17912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17884 === (13))){
var state_17883__$1 = state_17883;
var statearr_17890_17913 = state_17883__$1;
(statearr_17890_17913[(2)] = null);

(statearr_17890_17913[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17884 === (6))){
var inst_17860 = (state_17883[(7)]);
var inst_17866 = p.call(null,inst_17860);
var state_17883__$1 = state_17883;
if(cljs.core.truth_(inst_17866)){
var statearr_17891_17914 = state_17883__$1;
(statearr_17891_17914[(1)] = (9));

} else {
var statearr_17892_17915 = state_17883__$1;
(statearr_17892_17915[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17884 === (3))){
var inst_17881 = (state_17883[(2)]);
var state_17883__$1 = state_17883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17883__$1,inst_17881);
} else {
if((state_val_17884 === (12))){
var state_17883__$1 = state_17883;
var statearr_17893_17916 = state_17883__$1;
(statearr_17893_17916[(2)] = null);

(statearr_17893_17916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17884 === (2))){
var state_17883__$1 = state_17883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17883__$1,(4),ch);
} else {
if((state_val_17884 === (11))){
var inst_17860 = (state_17883[(7)]);
var inst_17870 = (state_17883[(2)]);
var state_17883__$1 = state_17883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17883__$1,(8),inst_17870,inst_17860);
} else {
if((state_val_17884 === (9))){
var state_17883__$1 = state_17883;
var statearr_17894_17917 = state_17883__$1;
(statearr_17894_17917[(2)] = tc);

(statearr_17894_17917[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17884 === (5))){
var inst_17863 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17864 = cljs.core.async.close_BANG_.call(null,fc);
var state_17883__$1 = (function (){var statearr_17895 = state_17883;
(statearr_17895[(8)] = inst_17863);

return statearr_17895;
})();
var statearr_17896_17918 = state_17883__$1;
(statearr_17896_17918[(2)] = inst_17864);

(statearr_17896_17918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17884 === (14))){
var inst_17877 = (state_17883[(2)]);
var state_17883__$1 = state_17883;
var statearr_17897_17919 = state_17883__$1;
(statearr_17897_17919[(2)] = inst_17877);

(statearr_17897_17919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17884 === (10))){
var state_17883__$1 = state_17883;
var statearr_17898_17920 = state_17883__$1;
(statearr_17898_17920[(2)] = fc);

(statearr_17898_17920[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17884 === (8))){
var inst_17872 = (state_17883[(2)]);
var state_17883__$1 = state_17883;
if(cljs.core.truth_(inst_17872)){
var statearr_17899_17921 = state_17883__$1;
(statearr_17899_17921[(1)] = (12));

} else {
var statearr_17900_17922 = state_17883__$1;
(statearr_17900_17922[(1)] = (13));

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
});})(c__7600__auto___17908,tc,fc))
;
return ((function (switch__7585__auto__,c__7600__auto___17908,tc,fc){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_17904 = [null,null,null,null,null,null,null,null,null];
(statearr_17904[(0)] = state_machine__7586__auto__);

(statearr_17904[(1)] = (1));

return statearr_17904;
});
var state_machine__7586__auto____1 = (function (state_17883){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_17883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e17905){if((e17905 instanceof Object)){
var ex__7589__auto__ = e17905;
var statearr_17906_17923 = state_17883;
(statearr_17906_17923[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17924 = state_17883;
state_17883 = G__17924;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_17883){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_17883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___17908,tc,fc))
})();
var state__7602__auto__ = (function (){var statearr_17907 = f__7601__auto__.call(null);
(statearr_17907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___17908);

return statearr_17907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___17908,tc,fc))
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
return (function (state_17971){
var state_val_17972 = (state_17971[(1)]);
if((state_val_17972 === (7))){
var inst_17967 = (state_17971[(2)]);
var state_17971__$1 = state_17971;
var statearr_17973_17989 = state_17971__$1;
(statearr_17973_17989[(2)] = inst_17967);

(statearr_17973_17989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17972 === (6))){
var inst_17957 = (state_17971[(7)]);
var inst_17960 = (state_17971[(8)]);
var inst_17964 = f.call(null,inst_17957,inst_17960);
var inst_17957__$1 = inst_17964;
var state_17971__$1 = (function (){var statearr_17974 = state_17971;
(statearr_17974[(7)] = inst_17957__$1);

return statearr_17974;
})();
var statearr_17975_17990 = state_17971__$1;
(statearr_17975_17990[(2)] = null);

(statearr_17975_17990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17972 === (5))){
var inst_17957 = (state_17971[(7)]);
var state_17971__$1 = state_17971;
var statearr_17976_17991 = state_17971__$1;
(statearr_17976_17991[(2)] = inst_17957);

(statearr_17976_17991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17972 === (4))){
var inst_17960 = (state_17971[(8)]);
var inst_17960__$1 = (state_17971[(2)]);
var inst_17961 = (inst_17960__$1 == null);
var state_17971__$1 = (function (){var statearr_17977 = state_17971;
(statearr_17977[(8)] = inst_17960__$1);

return statearr_17977;
})();
if(cljs.core.truth_(inst_17961)){
var statearr_17978_17992 = state_17971__$1;
(statearr_17978_17992[(1)] = (5));

} else {
var statearr_17979_17993 = state_17971__$1;
(statearr_17979_17993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17972 === (3))){
var inst_17969 = (state_17971[(2)]);
var state_17971__$1 = state_17971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17971__$1,inst_17969);
} else {
if((state_val_17972 === (2))){
var state_17971__$1 = state_17971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17971__$1,(4),ch);
} else {
if((state_val_17972 === (1))){
var inst_17957 = init;
var state_17971__$1 = (function (){var statearr_17980 = state_17971;
(statearr_17980[(7)] = inst_17957);

return statearr_17980;
})();
var statearr_17981_17994 = state_17971__$1;
(statearr_17981_17994[(2)] = null);

(statearr_17981_17994[(1)] = (2));


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
var statearr_17985 = [null,null,null,null,null,null,null,null,null];
(statearr_17985[(0)] = state_machine__7586__auto__);

(statearr_17985[(1)] = (1));

return statearr_17985;
});
var state_machine__7586__auto____1 = (function (state_17971){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_17971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e17986){if((e17986 instanceof Object)){
var ex__7589__auto__ = e17986;
var statearr_17987_17995 = state_17971;
(statearr_17987_17995[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17996 = state_17971;
state_17971 = G__17996;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_17971){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_17971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto__))
})();
var state__7602__auto__ = (function (){var statearr_17988 = f__7601__auto__.call(null);
(statearr_17988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto__);

return statearr_17988;
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
return (function (state_18070){
var state_val_18071 = (state_18070[(1)]);
if((state_val_18071 === (7))){
var inst_18052 = (state_18070[(2)]);
var state_18070__$1 = state_18070;
var statearr_18072_18095 = state_18070__$1;
(statearr_18072_18095[(2)] = inst_18052);

(statearr_18072_18095[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (1))){
var inst_18046 = cljs.core.seq.call(null,coll);
var inst_18047 = inst_18046;
var state_18070__$1 = (function (){var statearr_18073 = state_18070;
(statearr_18073[(7)] = inst_18047);

return statearr_18073;
})();
var statearr_18074_18096 = state_18070__$1;
(statearr_18074_18096[(2)] = null);

(statearr_18074_18096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (4))){
var inst_18047 = (state_18070[(7)]);
var inst_18050 = cljs.core.first.call(null,inst_18047);
var state_18070__$1 = state_18070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18070__$1,(7),ch,inst_18050);
} else {
if((state_val_18071 === (13))){
var inst_18064 = (state_18070[(2)]);
var state_18070__$1 = state_18070;
var statearr_18075_18097 = state_18070__$1;
(statearr_18075_18097[(2)] = inst_18064);

(statearr_18075_18097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (6))){
var inst_18055 = (state_18070[(2)]);
var state_18070__$1 = state_18070;
if(cljs.core.truth_(inst_18055)){
var statearr_18076_18098 = state_18070__$1;
(statearr_18076_18098[(1)] = (8));

} else {
var statearr_18077_18099 = state_18070__$1;
(statearr_18077_18099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (3))){
var inst_18068 = (state_18070[(2)]);
var state_18070__$1 = state_18070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18070__$1,inst_18068);
} else {
if((state_val_18071 === (12))){
var state_18070__$1 = state_18070;
var statearr_18078_18100 = state_18070__$1;
(statearr_18078_18100[(2)] = null);

(statearr_18078_18100[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (2))){
var inst_18047 = (state_18070[(7)]);
var state_18070__$1 = state_18070;
if(cljs.core.truth_(inst_18047)){
var statearr_18079_18101 = state_18070__$1;
(statearr_18079_18101[(1)] = (4));

} else {
var statearr_18080_18102 = state_18070__$1;
(statearr_18080_18102[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (11))){
var inst_18061 = cljs.core.async.close_BANG_.call(null,ch);
var state_18070__$1 = state_18070;
var statearr_18081_18103 = state_18070__$1;
(statearr_18081_18103[(2)] = inst_18061);

(statearr_18081_18103[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (9))){
var state_18070__$1 = state_18070;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18082_18104 = state_18070__$1;
(statearr_18082_18104[(1)] = (11));

} else {
var statearr_18083_18105 = state_18070__$1;
(statearr_18083_18105[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (5))){
var inst_18047 = (state_18070[(7)]);
var state_18070__$1 = state_18070;
var statearr_18084_18106 = state_18070__$1;
(statearr_18084_18106[(2)] = inst_18047);

(statearr_18084_18106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (10))){
var inst_18066 = (state_18070[(2)]);
var state_18070__$1 = state_18070;
var statearr_18085_18107 = state_18070__$1;
(statearr_18085_18107[(2)] = inst_18066);

(statearr_18085_18107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (8))){
var inst_18047 = (state_18070[(7)]);
var inst_18057 = cljs.core.next.call(null,inst_18047);
var inst_18047__$1 = inst_18057;
var state_18070__$1 = (function (){var statearr_18086 = state_18070;
(statearr_18086[(7)] = inst_18047__$1);

return statearr_18086;
})();
var statearr_18087_18108 = state_18070__$1;
(statearr_18087_18108[(2)] = null);

(statearr_18087_18108[(1)] = (2));


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
var statearr_18091 = [null,null,null,null,null,null,null,null];
(statearr_18091[(0)] = state_machine__7586__auto__);

(statearr_18091[(1)] = (1));

return statearr_18091;
});
var state_machine__7586__auto____1 = (function (state_18070){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_18070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e18092){if((e18092 instanceof Object)){
var ex__7589__auto__ = e18092;
var statearr_18093_18109 = state_18070;
(statearr_18093_18109[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18110 = state_18070;
state_18070 = G__18110;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_18070){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_18070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto__))
})();
var state__7602__auto__ = (function (){var statearr_18094 = f__7601__auto__.call(null);
(statearr_18094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto__);

return statearr_18094;
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

cljs.core.async.Mux = (function (){var obj18112 = {};
return obj18112;
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


cljs.core.async.Mult = (function (){var obj18114 = {};
return obj18114;
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
if(typeof cljs.core.async.t18336 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18336 = (function (cs,ch,mult,meta18337){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18337 = meta18337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18336.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t18336.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t18336.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t18336.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t18336.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18336.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t18336.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18338){
var self__ = this;
var _18338__$1 = this;
return self__.meta18337;
});})(cs))
;

cljs.core.async.t18336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18338,meta18337__$1){
var self__ = this;
var _18338__$1 = this;
return (new cljs.core.async.t18336(self__.cs,self__.ch,self__.mult,meta18337__$1));
});})(cs))
;

cljs.core.async.t18336.cljs$lang$type = true;

cljs.core.async.t18336.cljs$lang$ctorStr = "cljs.core.async/t18336";

cljs.core.async.t18336.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t18336");
});})(cs))
;

cljs.core.async.__GT_t18336 = ((function (cs){
return (function __GT_t18336(cs__$1,ch__$1,mult__$1,meta18337){
return (new cljs.core.async.t18336(cs__$1,ch__$1,mult__$1,meta18337));
});})(cs))
;

}

return (new cljs.core.async.t18336(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7600__auto___18557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___18557,cs,m,dchan,dctr,done){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___18557,cs,m,dchan,dctr,done){
return (function (state_18469){
var state_val_18470 = (state_18469[(1)]);
if((state_val_18470 === (7))){
var inst_18465 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
var statearr_18471_18558 = state_18469__$1;
(statearr_18471_18558[(2)] = inst_18465);

(statearr_18471_18558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (20))){
var inst_18370 = (state_18469[(7)]);
var inst_18380 = cljs.core.first.call(null,inst_18370);
var inst_18381 = cljs.core.nth.call(null,inst_18380,(0),null);
var inst_18382 = cljs.core.nth.call(null,inst_18380,(1),null);
var state_18469__$1 = (function (){var statearr_18472 = state_18469;
(statearr_18472[(8)] = inst_18381);

return statearr_18472;
})();
if(cljs.core.truth_(inst_18382)){
var statearr_18473_18559 = state_18469__$1;
(statearr_18473_18559[(1)] = (22));

} else {
var statearr_18474_18560 = state_18469__$1;
(statearr_18474_18560[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (27))){
var inst_18410 = (state_18469[(9)]);
var inst_18417 = (state_18469[(10)]);
var inst_18412 = (state_18469[(11)]);
var inst_18341 = (state_18469[(12)]);
var inst_18417__$1 = cljs.core._nth.call(null,inst_18410,inst_18412);
var inst_18418 = cljs.core.async.put_BANG_.call(null,inst_18417__$1,inst_18341,done);
var state_18469__$1 = (function (){var statearr_18475 = state_18469;
(statearr_18475[(10)] = inst_18417__$1);

return statearr_18475;
})();
if(cljs.core.truth_(inst_18418)){
var statearr_18476_18561 = state_18469__$1;
(statearr_18476_18561[(1)] = (30));

} else {
var statearr_18477_18562 = state_18469__$1;
(statearr_18477_18562[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (1))){
var state_18469__$1 = state_18469;
var statearr_18478_18563 = state_18469__$1;
(statearr_18478_18563[(2)] = null);

(statearr_18478_18563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (24))){
var inst_18370 = (state_18469[(7)]);
var inst_18387 = (state_18469[(2)]);
var inst_18388 = cljs.core.next.call(null,inst_18370);
var inst_18350 = inst_18388;
var inst_18351 = null;
var inst_18352 = (0);
var inst_18353 = (0);
var state_18469__$1 = (function (){var statearr_18479 = state_18469;
(statearr_18479[(13)] = inst_18353);

(statearr_18479[(14)] = inst_18387);

(statearr_18479[(15)] = inst_18350);

(statearr_18479[(16)] = inst_18351);

(statearr_18479[(17)] = inst_18352);

return statearr_18479;
})();
var statearr_18480_18564 = state_18469__$1;
(statearr_18480_18564[(2)] = null);

(statearr_18480_18564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (39))){
var state_18469__$1 = state_18469;
var statearr_18484_18565 = state_18469__$1;
(statearr_18484_18565[(2)] = null);

(statearr_18484_18565[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (4))){
var inst_18341 = (state_18469[(12)]);
var inst_18341__$1 = (state_18469[(2)]);
var inst_18342 = (inst_18341__$1 == null);
var state_18469__$1 = (function (){var statearr_18485 = state_18469;
(statearr_18485[(12)] = inst_18341__$1);

return statearr_18485;
})();
if(cljs.core.truth_(inst_18342)){
var statearr_18486_18566 = state_18469__$1;
(statearr_18486_18566[(1)] = (5));

} else {
var statearr_18487_18567 = state_18469__$1;
(statearr_18487_18567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (15))){
var inst_18353 = (state_18469[(13)]);
var inst_18350 = (state_18469[(15)]);
var inst_18351 = (state_18469[(16)]);
var inst_18352 = (state_18469[(17)]);
var inst_18366 = (state_18469[(2)]);
var inst_18367 = (inst_18353 + (1));
var tmp18481 = inst_18350;
var tmp18482 = inst_18351;
var tmp18483 = inst_18352;
var inst_18350__$1 = tmp18481;
var inst_18351__$1 = tmp18482;
var inst_18352__$1 = tmp18483;
var inst_18353__$1 = inst_18367;
var state_18469__$1 = (function (){var statearr_18488 = state_18469;
(statearr_18488[(13)] = inst_18353__$1);

(statearr_18488[(15)] = inst_18350__$1);

(statearr_18488[(16)] = inst_18351__$1);

(statearr_18488[(18)] = inst_18366);

(statearr_18488[(17)] = inst_18352__$1);

return statearr_18488;
})();
var statearr_18489_18568 = state_18469__$1;
(statearr_18489_18568[(2)] = null);

(statearr_18489_18568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (21))){
var inst_18391 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
var statearr_18493_18569 = state_18469__$1;
(statearr_18493_18569[(2)] = inst_18391);

(statearr_18493_18569[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (31))){
var inst_18417 = (state_18469[(10)]);
var inst_18421 = done.call(null,null);
var inst_18422 = cljs.core.async.untap_STAR_.call(null,m,inst_18417);
var state_18469__$1 = (function (){var statearr_18494 = state_18469;
(statearr_18494[(19)] = inst_18421);

return statearr_18494;
})();
var statearr_18495_18570 = state_18469__$1;
(statearr_18495_18570[(2)] = inst_18422);

(statearr_18495_18570[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (32))){
var inst_18411 = (state_18469[(20)]);
var inst_18410 = (state_18469[(9)]);
var inst_18412 = (state_18469[(11)]);
var inst_18409 = (state_18469[(21)]);
var inst_18424 = (state_18469[(2)]);
var inst_18425 = (inst_18412 + (1));
var tmp18490 = inst_18411;
var tmp18491 = inst_18410;
var tmp18492 = inst_18409;
var inst_18409__$1 = tmp18492;
var inst_18410__$1 = tmp18491;
var inst_18411__$1 = tmp18490;
var inst_18412__$1 = inst_18425;
var state_18469__$1 = (function (){var statearr_18496 = state_18469;
(statearr_18496[(20)] = inst_18411__$1);

(statearr_18496[(9)] = inst_18410__$1);

(statearr_18496[(22)] = inst_18424);

(statearr_18496[(11)] = inst_18412__$1);

(statearr_18496[(21)] = inst_18409__$1);

return statearr_18496;
})();
var statearr_18497_18571 = state_18469__$1;
(statearr_18497_18571[(2)] = null);

(statearr_18497_18571[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (40))){
var inst_18437 = (state_18469[(23)]);
var inst_18441 = done.call(null,null);
var inst_18442 = cljs.core.async.untap_STAR_.call(null,m,inst_18437);
var state_18469__$1 = (function (){var statearr_18498 = state_18469;
(statearr_18498[(24)] = inst_18441);

return statearr_18498;
})();
var statearr_18499_18572 = state_18469__$1;
(statearr_18499_18572[(2)] = inst_18442);

(statearr_18499_18572[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (33))){
var inst_18428 = (state_18469[(25)]);
var inst_18430 = cljs.core.chunked_seq_QMARK_.call(null,inst_18428);
var state_18469__$1 = state_18469;
if(inst_18430){
var statearr_18500_18573 = state_18469__$1;
(statearr_18500_18573[(1)] = (36));

} else {
var statearr_18501_18574 = state_18469__$1;
(statearr_18501_18574[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (13))){
var inst_18360 = (state_18469[(26)]);
var inst_18363 = cljs.core.async.close_BANG_.call(null,inst_18360);
var state_18469__$1 = state_18469;
var statearr_18502_18575 = state_18469__$1;
(statearr_18502_18575[(2)] = inst_18363);

(statearr_18502_18575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (22))){
var inst_18381 = (state_18469[(8)]);
var inst_18384 = cljs.core.async.close_BANG_.call(null,inst_18381);
var state_18469__$1 = state_18469;
var statearr_18503_18576 = state_18469__$1;
(statearr_18503_18576[(2)] = inst_18384);

(statearr_18503_18576[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (36))){
var inst_18428 = (state_18469[(25)]);
var inst_18432 = cljs.core.chunk_first.call(null,inst_18428);
var inst_18433 = cljs.core.chunk_rest.call(null,inst_18428);
var inst_18434 = cljs.core.count.call(null,inst_18432);
var inst_18409 = inst_18433;
var inst_18410 = inst_18432;
var inst_18411 = inst_18434;
var inst_18412 = (0);
var state_18469__$1 = (function (){var statearr_18504 = state_18469;
(statearr_18504[(20)] = inst_18411);

(statearr_18504[(9)] = inst_18410);

(statearr_18504[(11)] = inst_18412);

(statearr_18504[(21)] = inst_18409);

return statearr_18504;
})();
var statearr_18505_18577 = state_18469__$1;
(statearr_18505_18577[(2)] = null);

(statearr_18505_18577[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (41))){
var inst_18428 = (state_18469[(25)]);
var inst_18444 = (state_18469[(2)]);
var inst_18445 = cljs.core.next.call(null,inst_18428);
var inst_18409 = inst_18445;
var inst_18410 = null;
var inst_18411 = (0);
var inst_18412 = (0);
var state_18469__$1 = (function (){var statearr_18506 = state_18469;
(statearr_18506[(20)] = inst_18411);

(statearr_18506[(27)] = inst_18444);

(statearr_18506[(9)] = inst_18410);

(statearr_18506[(11)] = inst_18412);

(statearr_18506[(21)] = inst_18409);

return statearr_18506;
})();
var statearr_18507_18578 = state_18469__$1;
(statearr_18507_18578[(2)] = null);

(statearr_18507_18578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (43))){
var state_18469__$1 = state_18469;
var statearr_18508_18579 = state_18469__$1;
(statearr_18508_18579[(2)] = null);

(statearr_18508_18579[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (29))){
var inst_18453 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
var statearr_18509_18580 = state_18469__$1;
(statearr_18509_18580[(2)] = inst_18453);

(statearr_18509_18580[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (44))){
var inst_18462 = (state_18469[(2)]);
var state_18469__$1 = (function (){var statearr_18510 = state_18469;
(statearr_18510[(28)] = inst_18462);

return statearr_18510;
})();
var statearr_18511_18581 = state_18469__$1;
(statearr_18511_18581[(2)] = null);

(statearr_18511_18581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (6))){
var inst_18401 = (state_18469[(29)]);
var inst_18400 = cljs.core.deref.call(null,cs);
var inst_18401__$1 = cljs.core.keys.call(null,inst_18400);
var inst_18402 = cljs.core.count.call(null,inst_18401__$1);
var inst_18403 = cljs.core.reset_BANG_.call(null,dctr,inst_18402);
var inst_18408 = cljs.core.seq.call(null,inst_18401__$1);
var inst_18409 = inst_18408;
var inst_18410 = null;
var inst_18411 = (0);
var inst_18412 = (0);
var state_18469__$1 = (function (){var statearr_18512 = state_18469;
(statearr_18512[(20)] = inst_18411);

(statearr_18512[(29)] = inst_18401__$1);

(statearr_18512[(30)] = inst_18403);

(statearr_18512[(9)] = inst_18410);

(statearr_18512[(11)] = inst_18412);

(statearr_18512[(21)] = inst_18409);

return statearr_18512;
})();
var statearr_18513_18582 = state_18469__$1;
(statearr_18513_18582[(2)] = null);

(statearr_18513_18582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (28))){
var inst_18409 = (state_18469[(21)]);
var inst_18428 = (state_18469[(25)]);
var inst_18428__$1 = cljs.core.seq.call(null,inst_18409);
var state_18469__$1 = (function (){var statearr_18514 = state_18469;
(statearr_18514[(25)] = inst_18428__$1);

return statearr_18514;
})();
if(inst_18428__$1){
var statearr_18515_18583 = state_18469__$1;
(statearr_18515_18583[(1)] = (33));

} else {
var statearr_18516_18584 = state_18469__$1;
(statearr_18516_18584[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (25))){
var inst_18411 = (state_18469[(20)]);
var inst_18412 = (state_18469[(11)]);
var inst_18414 = (inst_18412 < inst_18411);
var inst_18415 = inst_18414;
var state_18469__$1 = state_18469;
if(cljs.core.truth_(inst_18415)){
var statearr_18517_18585 = state_18469__$1;
(statearr_18517_18585[(1)] = (27));

} else {
var statearr_18518_18586 = state_18469__$1;
(statearr_18518_18586[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (34))){
var state_18469__$1 = state_18469;
var statearr_18519_18587 = state_18469__$1;
(statearr_18519_18587[(2)] = null);

(statearr_18519_18587[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (17))){
var state_18469__$1 = state_18469;
var statearr_18520_18588 = state_18469__$1;
(statearr_18520_18588[(2)] = null);

(statearr_18520_18588[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (3))){
var inst_18467 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18469__$1,inst_18467);
} else {
if((state_val_18470 === (12))){
var inst_18396 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
var statearr_18521_18589 = state_18469__$1;
(statearr_18521_18589[(2)] = inst_18396);

(statearr_18521_18589[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (2))){
var state_18469__$1 = state_18469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18469__$1,(4),ch);
} else {
if((state_val_18470 === (23))){
var state_18469__$1 = state_18469;
var statearr_18522_18590 = state_18469__$1;
(statearr_18522_18590[(2)] = null);

(statearr_18522_18590[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (35))){
var inst_18451 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
var statearr_18523_18591 = state_18469__$1;
(statearr_18523_18591[(2)] = inst_18451);

(statearr_18523_18591[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (19))){
var inst_18370 = (state_18469[(7)]);
var inst_18374 = cljs.core.chunk_first.call(null,inst_18370);
var inst_18375 = cljs.core.chunk_rest.call(null,inst_18370);
var inst_18376 = cljs.core.count.call(null,inst_18374);
var inst_18350 = inst_18375;
var inst_18351 = inst_18374;
var inst_18352 = inst_18376;
var inst_18353 = (0);
var state_18469__$1 = (function (){var statearr_18524 = state_18469;
(statearr_18524[(13)] = inst_18353);

(statearr_18524[(15)] = inst_18350);

(statearr_18524[(16)] = inst_18351);

(statearr_18524[(17)] = inst_18352);

return statearr_18524;
})();
var statearr_18525_18592 = state_18469__$1;
(statearr_18525_18592[(2)] = null);

(statearr_18525_18592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (11))){
var inst_18370 = (state_18469[(7)]);
var inst_18350 = (state_18469[(15)]);
var inst_18370__$1 = cljs.core.seq.call(null,inst_18350);
var state_18469__$1 = (function (){var statearr_18526 = state_18469;
(statearr_18526[(7)] = inst_18370__$1);

return statearr_18526;
})();
if(inst_18370__$1){
var statearr_18527_18593 = state_18469__$1;
(statearr_18527_18593[(1)] = (16));

} else {
var statearr_18528_18594 = state_18469__$1;
(statearr_18528_18594[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (9))){
var inst_18398 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
var statearr_18529_18595 = state_18469__$1;
(statearr_18529_18595[(2)] = inst_18398);

(statearr_18529_18595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (5))){
var inst_18348 = cljs.core.deref.call(null,cs);
var inst_18349 = cljs.core.seq.call(null,inst_18348);
var inst_18350 = inst_18349;
var inst_18351 = null;
var inst_18352 = (0);
var inst_18353 = (0);
var state_18469__$1 = (function (){var statearr_18530 = state_18469;
(statearr_18530[(13)] = inst_18353);

(statearr_18530[(15)] = inst_18350);

(statearr_18530[(16)] = inst_18351);

(statearr_18530[(17)] = inst_18352);

return statearr_18530;
})();
var statearr_18531_18596 = state_18469__$1;
(statearr_18531_18596[(2)] = null);

(statearr_18531_18596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (14))){
var state_18469__$1 = state_18469;
var statearr_18532_18597 = state_18469__$1;
(statearr_18532_18597[(2)] = null);

(statearr_18532_18597[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (45))){
var inst_18459 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
var statearr_18533_18598 = state_18469__$1;
(statearr_18533_18598[(2)] = inst_18459);

(statearr_18533_18598[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (26))){
var inst_18401 = (state_18469[(29)]);
var inst_18455 = (state_18469[(2)]);
var inst_18456 = cljs.core.seq.call(null,inst_18401);
var state_18469__$1 = (function (){var statearr_18534 = state_18469;
(statearr_18534[(31)] = inst_18455);

return statearr_18534;
})();
if(inst_18456){
var statearr_18535_18599 = state_18469__$1;
(statearr_18535_18599[(1)] = (42));

} else {
var statearr_18536_18600 = state_18469__$1;
(statearr_18536_18600[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (16))){
var inst_18370 = (state_18469[(7)]);
var inst_18372 = cljs.core.chunked_seq_QMARK_.call(null,inst_18370);
var state_18469__$1 = state_18469;
if(inst_18372){
var statearr_18537_18601 = state_18469__$1;
(statearr_18537_18601[(1)] = (19));

} else {
var statearr_18538_18602 = state_18469__$1;
(statearr_18538_18602[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (38))){
var inst_18448 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
var statearr_18539_18603 = state_18469__$1;
(statearr_18539_18603[(2)] = inst_18448);

(statearr_18539_18603[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (30))){
var state_18469__$1 = state_18469;
var statearr_18540_18604 = state_18469__$1;
(statearr_18540_18604[(2)] = null);

(statearr_18540_18604[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (10))){
var inst_18353 = (state_18469[(13)]);
var inst_18351 = (state_18469[(16)]);
var inst_18359 = cljs.core._nth.call(null,inst_18351,inst_18353);
var inst_18360 = cljs.core.nth.call(null,inst_18359,(0),null);
var inst_18361 = cljs.core.nth.call(null,inst_18359,(1),null);
var state_18469__$1 = (function (){var statearr_18541 = state_18469;
(statearr_18541[(26)] = inst_18360);

return statearr_18541;
})();
if(cljs.core.truth_(inst_18361)){
var statearr_18542_18605 = state_18469__$1;
(statearr_18542_18605[(1)] = (13));

} else {
var statearr_18543_18606 = state_18469__$1;
(statearr_18543_18606[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (18))){
var inst_18394 = (state_18469[(2)]);
var state_18469__$1 = state_18469;
var statearr_18544_18607 = state_18469__$1;
(statearr_18544_18607[(2)] = inst_18394);

(statearr_18544_18607[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (42))){
var state_18469__$1 = state_18469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18469__$1,(45),dchan);
} else {
if((state_val_18470 === (37))){
var inst_18437 = (state_18469[(23)]);
var inst_18341 = (state_18469[(12)]);
var inst_18428 = (state_18469[(25)]);
var inst_18437__$1 = cljs.core.first.call(null,inst_18428);
var inst_18438 = cljs.core.async.put_BANG_.call(null,inst_18437__$1,inst_18341,done);
var state_18469__$1 = (function (){var statearr_18545 = state_18469;
(statearr_18545[(23)] = inst_18437__$1);

return statearr_18545;
})();
if(cljs.core.truth_(inst_18438)){
var statearr_18546_18608 = state_18469__$1;
(statearr_18546_18608[(1)] = (39));

} else {
var statearr_18547_18609 = state_18469__$1;
(statearr_18547_18609[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18470 === (8))){
var inst_18353 = (state_18469[(13)]);
var inst_18352 = (state_18469[(17)]);
var inst_18355 = (inst_18353 < inst_18352);
var inst_18356 = inst_18355;
var state_18469__$1 = state_18469;
if(cljs.core.truth_(inst_18356)){
var statearr_18548_18610 = state_18469__$1;
(statearr_18548_18610[(1)] = (10));

} else {
var statearr_18549_18611 = state_18469__$1;
(statearr_18549_18611[(1)] = (11));

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
});})(c__7600__auto___18557,cs,m,dchan,dctr,done))
;
return ((function (switch__7585__auto__,c__7600__auto___18557,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_18553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18553[(0)] = state_machine__7586__auto__);

(statearr_18553[(1)] = (1));

return statearr_18553;
});
var state_machine__7586__auto____1 = (function (state_18469){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_18469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e18554){if((e18554 instanceof Object)){
var ex__7589__auto__ = e18554;
var statearr_18555_18612 = state_18469;
(statearr_18555_18612[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18613 = state_18469;
state_18469 = G__18613;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_18469){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_18469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___18557,cs,m,dchan,dctr,done))
})();
var state__7602__auto__ = (function (){var statearr_18556 = f__7601__auto__.call(null);
(statearr_18556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___18557);

return statearr_18556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___18557,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj18615 = {};
return obj18615;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18616){
var map__18621 = p__18616;
var map__18621__$1 = ((cljs.core.seq_QMARK_.call(null,map__18621))?cljs.core.apply.call(null,cljs.core.hash_map,map__18621):map__18621);
var opts = map__18621__$1;
var statearr_18622_18625 = state;
(statearr_18622_18625[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__18621,map__18621__$1,opts){
return (function (val){
var statearr_18623_18626 = state;
(statearr_18623_18626[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18621,map__18621__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_18624_18627 = state;
(statearr_18624_18627[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18616 = null;
if (arguments.length > 3) {
var G__18628__i = 0, G__18628__a = new Array(arguments.length -  3);
while (G__18628__i < G__18628__a.length) {G__18628__a[G__18628__i] = arguments[G__18628__i + 3]; ++G__18628__i;}
  p__18616 = new cljs.core.IndexedSeq(G__18628__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18616);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18629){
var state = cljs.core.first(arglist__18629);
arglist__18629 = cljs.core.next(arglist__18629);
var cont_block = cljs.core.first(arglist__18629);
arglist__18629 = cljs.core.next(arglist__18629);
var ports = cljs.core.first(arglist__18629);
var p__18616 = cljs.core.rest(arglist__18629);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__18616);
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
if(typeof cljs.core.async.t18749 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18749 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18750){
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
this.meta18750 = meta18750;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18749.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t18749.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18749.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18749.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18749.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18749.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t18749.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18749.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18749.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18751){
var self__ = this;
var _18751__$1 = this;
return self__.meta18750;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18751,meta18750__$1){
var self__ = this;
var _18751__$1 = this;
return (new cljs.core.async.t18749(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18750__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18749.cljs$lang$type = true;

cljs.core.async.t18749.cljs$lang$ctorStr = "cljs.core.async/t18749";

cljs.core.async.t18749.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t18749");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t18749 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18749(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18750){
return (new cljs.core.async.t18749(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18750));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t18749(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7600__auto___18868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___18868,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___18868,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18821){
var state_val_18822 = (state_18821[(1)]);
if((state_val_18822 === (7))){
var inst_18765 = (state_18821[(7)]);
var inst_18770 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18765);
var state_18821__$1 = state_18821;
var statearr_18823_18869 = state_18821__$1;
(statearr_18823_18869[(2)] = inst_18770);

(statearr_18823_18869[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18822 === (20))){
var inst_18780 = (state_18821[(8)]);
var state_18821__$1 = state_18821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18821__$1,(23),out,inst_18780);
} else {
if((state_val_18822 === (1))){
var inst_18755 = (state_18821[(9)]);
var inst_18755__$1 = calc_state.call(null);
var inst_18756 = cljs.core.seq_QMARK_.call(null,inst_18755__$1);
var state_18821__$1 = (function (){var statearr_18824 = state_18821;
(statearr_18824[(9)] = inst_18755__$1);

return statearr_18824;
})();
if(inst_18756){
var statearr_18825_18870 = state_18821__$1;
(statearr_18825_18870[(1)] = (2));

} else {
var statearr_18826_18871 = state_18821__$1;
(statearr_18826_18871[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18822 === (24))){
var inst_18773 = (state_18821[(10)]);
var inst_18765 = inst_18773;
var state_18821__$1 = (function (){var statearr_18827 = state_18821;
(statearr_18827[(7)] = inst_18765);

return statearr_18827;
})();
var statearr_18828_18872 = state_18821__$1;
(statearr_18828_18872[(2)] = null);

(statearr_18828_18872[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18822 === (4))){
var inst_18755 = (state_18821[(9)]);
var inst_18761 = (state_18821[(2)]);
var inst_18762 = cljs.core.get.call(null,inst_18761,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18763 = cljs.core.get.call(null,inst_18761,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18764 = cljs.core.get.call(null,inst_18761,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18765 = inst_18755;
var state_18821__$1 = (function (){var statearr_18829 = state_18821;
(statearr_18829[(11)] = inst_18763);

(statearr_18829[(12)] = inst_18764);

(statearr_18829[(7)] = inst_18765);

(statearr_18829[(13)] = inst_18762);

return statearr_18829;
})();
var statearr_18830_18873 = state_18821__$1;
(statearr_18830_18873[(2)] = null);

(statearr_18830_18873[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18822 === (15))){
var state_18821__$1 = state_18821;
var statearr_18831_18874 = state_18821__$1;
(statearr_18831_18874[(2)] = null);

(statearr_18831_18874[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18822 === (21))){
var inst_18773 = (state_18821[(10)]);
var inst_18765 = inst_18773;
var state_18821__$1 = (function (){var statearr_18832 = state_18821;
(statearr_18832[(7)] = inst_18765);

return statearr_18832;
})();
var statearr_18833_18875 = state_18821__$1;
(statearr_18833_18875[(2)] = null);

(statearr_18833_18875[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18822 === (13))){
var inst_18817 = (state_18821[(2)]);
var state_18821__$1 = state_18821;
var statearr_18834_18876 = state_18821__$1;
(statearr_18834_18876[(2)] = inst_18817);

(statearr_18834_18876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18822 === (22))){
var inst_18815 = (state_18821[(2)]);
var state_18821__$1 = state_18821;
var statearr_18835_18877 = state_18821__$1;
(statearr_18835_18877[(2)] = inst_18815);

(statearr_18835_18877[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18822 === (6))){
var inst_18819 = (state_18821[(2)]);
var state_18821__$1 = state_18821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18821__$1,inst_18819);
} else {
if((state_val_18822 === (25))){
var state_18821__$1 = state_18821;
var statearr_18836_18878 = state_18821__$1;
(statearr_18836_18878[(2)] = null);

(statearr_18836_18878[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18822 === (17))){
var inst_18795 = (state_18821[(14)]);
var state_18821__$1 = state_18821;
var statearr_18837_18879 = state_18821__$1;
(statearr_18837_18879[(2)] = inst_18795);

(statearr_18837_18879[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18822 === (3))){
var inst_18755 = (state_18821[(9)]);
var state_18821__$1 = state_18821;
var statearr_18838_18880 = state_18821__$1;
(statearr_18838_18880[(2)] = inst_18755);

(statearr_18838_18880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18822 === (12))){
var inst_18795 = (state_18821[(14)]);
var inst_18781 = (state_18821[(15)]);
var inst_18776 = (state_18821[(16)]);
var inst_18795__$1 = inst_18776.call(null,inst_18781);
var state_18821__$1 = (function (){var statearr_18839 = state_18821;
(statearr_18839[(14)] = inst_18795__$1);

return statearr_18839;
})();
if(cljs.core.truth_(inst_18795__$1)){
var statearr_18840_18881 = state_18821__$1;
(statearr_18840_18881[(1)] = (17));

} else {
var statearr_18841_18882 = state_18821__$1;
(statearr_18841_18882[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18822 === (2))){
var inst_18755 = (state_18821[(9)]);
var inst_18758 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18755);
var state_18821__$1 = state_18821;
var statearr_18842_18883 = state_18821__$1;
(statearr_18842_18883[(2)] = inst_18758);

(statearr_18842_18883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18822 === (23))){
var inst_18806 = (state_18821[(2)]);
var state_18821__$1 = state_18821;
if(cljs.core.truth_(inst_18806)){
var statearr_18843_18884 = state_18821__$1;
(statearr_18843_18884[(1)] = (24));

} else {
var statearr_18844_18885 = state_18821__$1;
(statearr_18844_18885[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18822 === (19))){
var inst_18803 = (state_18821[(2)]);
var state_18821__$1 = state_18821;
if(cljs.core.truth_(inst_18803)){
var statearr_18845_18886 = state_18821__$1;
(statearr_18845_18886[(1)] = (20));

} else {
var statearr_18846_18887 = state_18821__$1;
(statearr_18846_18887[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18822 === (11))){
var inst_18780 = (state_18821[(8)]);
var inst_18786 = (inst_18780 == null);
var state_18821__$1 = state_18821;
if(cljs.core.truth_(inst_18786)){
var statearr_18847_18888 = state_18821__$1;
(statearr_18847_18888[(1)] = (14));

} else {
var statearr_18848_18889 = state_18821__$1;
(statearr_18848_18889[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18822 === (9))){
var inst_18773 = (state_18821[(10)]);
var inst_18773__$1 = (state_18821[(2)]);
var inst_18774 = cljs.core.get.call(null,inst_18773__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18775 = cljs.core.get.call(null,inst_18773__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18776 = cljs.core.get.call(null,inst_18773__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_18821__$1 = (function (){var statearr_18849 = state_18821;
(statearr_18849[(10)] = inst_18773__$1);

(statearr_18849[(16)] = inst_18776);

(statearr_18849[(17)] = inst_18775);

return statearr_18849;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18821__$1,(10),inst_18774);
} else {
if((state_val_18822 === (5))){
var inst_18765 = (state_18821[(7)]);
var inst_18768 = cljs.core.seq_QMARK_.call(null,inst_18765);
var state_18821__$1 = state_18821;
if(inst_18768){
var statearr_18850_18890 = state_18821__$1;
(statearr_18850_18890[(1)] = (7));

} else {
var statearr_18851_18891 = state_18821__$1;
(statearr_18851_18891[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18822 === (14))){
var inst_18781 = (state_18821[(15)]);
var inst_18788 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18781);
var state_18821__$1 = state_18821;
var statearr_18852_18892 = state_18821__$1;
(statearr_18852_18892[(2)] = inst_18788);

(statearr_18852_18892[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18822 === (26))){
var inst_18811 = (state_18821[(2)]);
var state_18821__$1 = state_18821;
var statearr_18853_18893 = state_18821__$1;
(statearr_18853_18893[(2)] = inst_18811);

(statearr_18853_18893[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18822 === (16))){
var inst_18791 = (state_18821[(2)]);
var inst_18792 = calc_state.call(null);
var inst_18765 = inst_18792;
var state_18821__$1 = (function (){var statearr_18854 = state_18821;
(statearr_18854[(7)] = inst_18765);

(statearr_18854[(18)] = inst_18791);

return statearr_18854;
})();
var statearr_18855_18894 = state_18821__$1;
(statearr_18855_18894[(2)] = null);

(statearr_18855_18894[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18822 === (10))){
var inst_18781 = (state_18821[(15)]);
var inst_18780 = (state_18821[(8)]);
var inst_18779 = (state_18821[(2)]);
var inst_18780__$1 = cljs.core.nth.call(null,inst_18779,(0),null);
var inst_18781__$1 = cljs.core.nth.call(null,inst_18779,(1),null);
var inst_18782 = (inst_18780__$1 == null);
var inst_18783 = cljs.core._EQ_.call(null,inst_18781__$1,change);
var inst_18784 = (inst_18782) || (inst_18783);
var state_18821__$1 = (function (){var statearr_18856 = state_18821;
(statearr_18856[(15)] = inst_18781__$1);

(statearr_18856[(8)] = inst_18780__$1);

return statearr_18856;
})();
if(cljs.core.truth_(inst_18784)){
var statearr_18857_18895 = state_18821__$1;
(statearr_18857_18895[(1)] = (11));

} else {
var statearr_18858_18896 = state_18821__$1;
(statearr_18858_18896[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18822 === (18))){
var inst_18781 = (state_18821[(15)]);
var inst_18776 = (state_18821[(16)]);
var inst_18775 = (state_18821[(17)]);
var inst_18798 = cljs.core.empty_QMARK_.call(null,inst_18776);
var inst_18799 = inst_18775.call(null,inst_18781);
var inst_18800 = cljs.core.not.call(null,inst_18799);
var inst_18801 = (inst_18798) && (inst_18800);
var state_18821__$1 = state_18821;
var statearr_18859_18897 = state_18821__$1;
(statearr_18859_18897[(2)] = inst_18801);

(statearr_18859_18897[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18822 === (8))){
var inst_18765 = (state_18821[(7)]);
var state_18821__$1 = state_18821;
var statearr_18860_18898 = state_18821__$1;
(statearr_18860_18898[(2)] = inst_18765);

(statearr_18860_18898[(1)] = (9));


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
});})(c__7600__auto___18868,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7585__auto__,c__7600__auto___18868,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_18864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18864[(0)] = state_machine__7586__auto__);

(statearr_18864[(1)] = (1));

return statearr_18864;
});
var state_machine__7586__auto____1 = (function (state_18821){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_18821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e18865){if((e18865 instanceof Object)){
var ex__7589__auto__ = e18865;
var statearr_18866_18899 = state_18821;
(statearr_18866_18899[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18900 = state_18821;
state_18821 = G__18900;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_18821){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_18821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___18868,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7602__auto__ = (function (){var statearr_18867 = f__7601__auto__.call(null);
(statearr_18867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___18868);

return statearr_18867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___18868,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj18902 = {};
return obj18902;
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
return (function (p1__18903_SHARP_){
if(cljs.core.truth_(p1__18903_SHARP_.call(null,topic))){
return p1__18903_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18903_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3981__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t19026 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19026 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19027){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19027 = meta19027;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19026.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t19026.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t19026.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t19026.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t19026.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t19026.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19026.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t19026.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19028){
var self__ = this;
var _19028__$1 = this;
return self__.meta19027;
});})(mults,ensure_mult))
;

cljs.core.async.t19026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19028,meta19027__$1){
var self__ = this;
var _19028__$1 = this;
return (new cljs.core.async.t19026(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19027__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t19026.cljs$lang$type = true;

cljs.core.async.t19026.cljs$lang$ctorStr = "cljs.core.async/t19026";

cljs.core.async.t19026.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t19026");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t19026 = ((function (mults,ensure_mult){
return (function __GT_t19026(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19027){
return (new cljs.core.async.t19026(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19027));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t19026(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7600__auto___19148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___19148,mults,ensure_mult,p){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___19148,mults,ensure_mult,p){
return (function (state_19100){
var state_val_19101 = (state_19100[(1)]);
if((state_val_19101 === (7))){
var inst_19096 = (state_19100[(2)]);
var state_19100__$1 = state_19100;
var statearr_19102_19149 = state_19100__$1;
(statearr_19102_19149[(2)] = inst_19096);

(statearr_19102_19149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (20))){
var state_19100__$1 = state_19100;
var statearr_19103_19150 = state_19100__$1;
(statearr_19103_19150[(2)] = null);

(statearr_19103_19150[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (1))){
var state_19100__$1 = state_19100;
var statearr_19104_19151 = state_19100__$1;
(statearr_19104_19151[(2)] = null);

(statearr_19104_19151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (24))){
var inst_19079 = (state_19100[(7)]);
var inst_19088 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19079);
var state_19100__$1 = state_19100;
var statearr_19105_19152 = state_19100__$1;
(statearr_19105_19152[(2)] = inst_19088);

(statearr_19105_19152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (4))){
var inst_19031 = (state_19100[(8)]);
var inst_19031__$1 = (state_19100[(2)]);
var inst_19032 = (inst_19031__$1 == null);
var state_19100__$1 = (function (){var statearr_19106 = state_19100;
(statearr_19106[(8)] = inst_19031__$1);

return statearr_19106;
})();
if(cljs.core.truth_(inst_19032)){
var statearr_19107_19153 = state_19100__$1;
(statearr_19107_19153[(1)] = (5));

} else {
var statearr_19108_19154 = state_19100__$1;
(statearr_19108_19154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (15))){
var inst_19073 = (state_19100[(2)]);
var state_19100__$1 = state_19100;
var statearr_19109_19155 = state_19100__$1;
(statearr_19109_19155[(2)] = inst_19073);

(statearr_19109_19155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (21))){
var inst_19093 = (state_19100[(2)]);
var state_19100__$1 = (function (){var statearr_19110 = state_19100;
(statearr_19110[(9)] = inst_19093);

return statearr_19110;
})();
var statearr_19111_19156 = state_19100__$1;
(statearr_19111_19156[(2)] = null);

(statearr_19111_19156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (13))){
var inst_19055 = (state_19100[(10)]);
var inst_19057 = cljs.core.chunked_seq_QMARK_.call(null,inst_19055);
var state_19100__$1 = state_19100;
if(inst_19057){
var statearr_19112_19157 = state_19100__$1;
(statearr_19112_19157[(1)] = (16));

} else {
var statearr_19113_19158 = state_19100__$1;
(statearr_19113_19158[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (22))){
var inst_19085 = (state_19100[(2)]);
var state_19100__$1 = state_19100;
if(cljs.core.truth_(inst_19085)){
var statearr_19114_19159 = state_19100__$1;
(statearr_19114_19159[(1)] = (23));

} else {
var statearr_19115_19160 = state_19100__$1;
(statearr_19115_19160[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (6))){
var inst_19079 = (state_19100[(7)]);
var inst_19031 = (state_19100[(8)]);
var inst_19081 = (state_19100[(11)]);
var inst_19079__$1 = topic_fn.call(null,inst_19031);
var inst_19080 = cljs.core.deref.call(null,mults);
var inst_19081__$1 = cljs.core.get.call(null,inst_19080,inst_19079__$1);
var state_19100__$1 = (function (){var statearr_19116 = state_19100;
(statearr_19116[(7)] = inst_19079__$1);

(statearr_19116[(11)] = inst_19081__$1);

return statearr_19116;
})();
if(cljs.core.truth_(inst_19081__$1)){
var statearr_19117_19161 = state_19100__$1;
(statearr_19117_19161[(1)] = (19));

} else {
var statearr_19118_19162 = state_19100__$1;
(statearr_19118_19162[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (25))){
var inst_19090 = (state_19100[(2)]);
var state_19100__$1 = state_19100;
var statearr_19119_19163 = state_19100__$1;
(statearr_19119_19163[(2)] = inst_19090);

(statearr_19119_19163[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (17))){
var inst_19055 = (state_19100[(10)]);
var inst_19064 = cljs.core.first.call(null,inst_19055);
var inst_19065 = cljs.core.async.muxch_STAR_.call(null,inst_19064);
var inst_19066 = cljs.core.async.close_BANG_.call(null,inst_19065);
var inst_19067 = cljs.core.next.call(null,inst_19055);
var inst_19041 = inst_19067;
var inst_19042 = null;
var inst_19043 = (0);
var inst_19044 = (0);
var state_19100__$1 = (function (){var statearr_19120 = state_19100;
(statearr_19120[(12)] = inst_19043);

(statearr_19120[(13)] = inst_19041);

(statearr_19120[(14)] = inst_19042);

(statearr_19120[(15)] = inst_19066);

(statearr_19120[(16)] = inst_19044);

return statearr_19120;
})();
var statearr_19121_19164 = state_19100__$1;
(statearr_19121_19164[(2)] = null);

(statearr_19121_19164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (3))){
var inst_19098 = (state_19100[(2)]);
var state_19100__$1 = state_19100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19100__$1,inst_19098);
} else {
if((state_val_19101 === (12))){
var inst_19075 = (state_19100[(2)]);
var state_19100__$1 = state_19100;
var statearr_19122_19165 = state_19100__$1;
(statearr_19122_19165[(2)] = inst_19075);

(statearr_19122_19165[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (2))){
var state_19100__$1 = state_19100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19100__$1,(4),ch);
} else {
if((state_val_19101 === (23))){
var state_19100__$1 = state_19100;
var statearr_19123_19166 = state_19100__$1;
(statearr_19123_19166[(2)] = null);

(statearr_19123_19166[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (19))){
var inst_19031 = (state_19100[(8)]);
var inst_19081 = (state_19100[(11)]);
var inst_19083 = cljs.core.async.muxch_STAR_.call(null,inst_19081);
var state_19100__$1 = state_19100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19100__$1,(22),inst_19083,inst_19031);
} else {
if((state_val_19101 === (11))){
var inst_19041 = (state_19100[(13)]);
var inst_19055 = (state_19100[(10)]);
var inst_19055__$1 = cljs.core.seq.call(null,inst_19041);
var state_19100__$1 = (function (){var statearr_19124 = state_19100;
(statearr_19124[(10)] = inst_19055__$1);

return statearr_19124;
})();
if(inst_19055__$1){
var statearr_19125_19167 = state_19100__$1;
(statearr_19125_19167[(1)] = (13));

} else {
var statearr_19126_19168 = state_19100__$1;
(statearr_19126_19168[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (9))){
var inst_19077 = (state_19100[(2)]);
var state_19100__$1 = state_19100;
var statearr_19127_19169 = state_19100__$1;
(statearr_19127_19169[(2)] = inst_19077);

(statearr_19127_19169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (5))){
var inst_19038 = cljs.core.deref.call(null,mults);
var inst_19039 = cljs.core.vals.call(null,inst_19038);
var inst_19040 = cljs.core.seq.call(null,inst_19039);
var inst_19041 = inst_19040;
var inst_19042 = null;
var inst_19043 = (0);
var inst_19044 = (0);
var state_19100__$1 = (function (){var statearr_19128 = state_19100;
(statearr_19128[(12)] = inst_19043);

(statearr_19128[(13)] = inst_19041);

(statearr_19128[(14)] = inst_19042);

(statearr_19128[(16)] = inst_19044);

return statearr_19128;
})();
var statearr_19129_19170 = state_19100__$1;
(statearr_19129_19170[(2)] = null);

(statearr_19129_19170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (14))){
var state_19100__$1 = state_19100;
var statearr_19133_19171 = state_19100__$1;
(statearr_19133_19171[(2)] = null);

(statearr_19133_19171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (16))){
var inst_19055 = (state_19100[(10)]);
var inst_19059 = cljs.core.chunk_first.call(null,inst_19055);
var inst_19060 = cljs.core.chunk_rest.call(null,inst_19055);
var inst_19061 = cljs.core.count.call(null,inst_19059);
var inst_19041 = inst_19060;
var inst_19042 = inst_19059;
var inst_19043 = inst_19061;
var inst_19044 = (0);
var state_19100__$1 = (function (){var statearr_19134 = state_19100;
(statearr_19134[(12)] = inst_19043);

(statearr_19134[(13)] = inst_19041);

(statearr_19134[(14)] = inst_19042);

(statearr_19134[(16)] = inst_19044);

return statearr_19134;
})();
var statearr_19135_19172 = state_19100__$1;
(statearr_19135_19172[(2)] = null);

(statearr_19135_19172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (10))){
var inst_19043 = (state_19100[(12)]);
var inst_19041 = (state_19100[(13)]);
var inst_19042 = (state_19100[(14)]);
var inst_19044 = (state_19100[(16)]);
var inst_19049 = cljs.core._nth.call(null,inst_19042,inst_19044);
var inst_19050 = cljs.core.async.muxch_STAR_.call(null,inst_19049);
var inst_19051 = cljs.core.async.close_BANG_.call(null,inst_19050);
var inst_19052 = (inst_19044 + (1));
var tmp19130 = inst_19043;
var tmp19131 = inst_19041;
var tmp19132 = inst_19042;
var inst_19041__$1 = tmp19131;
var inst_19042__$1 = tmp19132;
var inst_19043__$1 = tmp19130;
var inst_19044__$1 = inst_19052;
var state_19100__$1 = (function (){var statearr_19136 = state_19100;
(statearr_19136[(12)] = inst_19043__$1);

(statearr_19136[(13)] = inst_19041__$1);

(statearr_19136[(14)] = inst_19042__$1);

(statearr_19136[(17)] = inst_19051);

(statearr_19136[(16)] = inst_19044__$1);

return statearr_19136;
})();
var statearr_19137_19173 = state_19100__$1;
(statearr_19137_19173[(2)] = null);

(statearr_19137_19173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (18))){
var inst_19070 = (state_19100[(2)]);
var state_19100__$1 = state_19100;
var statearr_19138_19174 = state_19100__$1;
(statearr_19138_19174[(2)] = inst_19070);

(statearr_19138_19174[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19101 === (8))){
var inst_19043 = (state_19100[(12)]);
var inst_19044 = (state_19100[(16)]);
var inst_19046 = (inst_19044 < inst_19043);
var inst_19047 = inst_19046;
var state_19100__$1 = state_19100;
if(cljs.core.truth_(inst_19047)){
var statearr_19139_19175 = state_19100__$1;
(statearr_19139_19175[(1)] = (10));

} else {
var statearr_19140_19176 = state_19100__$1;
(statearr_19140_19176[(1)] = (11));

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
});})(c__7600__auto___19148,mults,ensure_mult,p))
;
return ((function (switch__7585__auto__,c__7600__auto___19148,mults,ensure_mult,p){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_19144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19144[(0)] = state_machine__7586__auto__);

(statearr_19144[(1)] = (1));

return statearr_19144;
});
var state_machine__7586__auto____1 = (function (state_19100){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_19100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e19145){if((e19145 instanceof Object)){
var ex__7589__auto__ = e19145;
var statearr_19146_19177 = state_19100;
(statearr_19146_19177[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19178 = state_19100;
state_19100 = G__19178;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_19100){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_19100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___19148,mults,ensure_mult,p))
})();
var state__7602__auto__ = (function (){var statearr_19147 = f__7601__auto__.call(null);
(statearr_19147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___19148);

return statearr_19147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___19148,mults,ensure_mult,p))
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
var c__7600__auto___19315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___19315,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___19315,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19285){
var state_val_19286 = (state_19285[(1)]);
if((state_val_19286 === (7))){
var state_19285__$1 = state_19285;
var statearr_19287_19316 = state_19285__$1;
(statearr_19287_19316[(2)] = null);

(statearr_19287_19316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (1))){
var state_19285__$1 = state_19285;
var statearr_19288_19317 = state_19285__$1;
(statearr_19288_19317[(2)] = null);

(statearr_19288_19317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (4))){
var inst_19249 = (state_19285[(7)]);
var inst_19251 = (inst_19249 < cnt);
var state_19285__$1 = state_19285;
if(cljs.core.truth_(inst_19251)){
var statearr_19289_19318 = state_19285__$1;
(statearr_19289_19318[(1)] = (6));

} else {
var statearr_19290_19319 = state_19285__$1;
(statearr_19290_19319[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (15))){
var inst_19281 = (state_19285[(2)]);
var state_19285__$1 = state_19285;
var statearr_19291_19320 = state_19285__$1;
(statearr_19291_19320[(2)] = inst_19281);

(statearr_19291_19320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (13))){
var inst_19274 = cljs.core.async.close_BANG_.call(null,out);
var state_19285__$1 = state_19285;
var statearr_19292_19321 = state_19285__$1;
(statearr_19292_19321[(2)] = inst_19274);

(statearr_19292_19321[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (6))){
var state_19285__$1 = state_19285;
var statearr_19293_19322 = state_19285__$1;
(statearr_19293_19322[(2)] = null);

(statearr_19293_19322[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (3))){
var inst_19283 = (state_19285[(2)]);
var state_19285__$1 = state_19285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19285__$1,inst_19283);
} else {
if((state_val_19286 === (12))){
var inst_19271 = (state_19285[(8)]);
var inst_19271__$1 = (state_19285[(2)]);
var inst_19272 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19271__$1);
var state_19285__$1 = (function (){var statearr_19294 = state_19285;
(statearr_19294[(8)] = inst_19271__$1);

return statearr_19294;
})();
if(cljs.core.truth_(inst_19272)){
var statearr_19295_19323 = state_19285__$1;
(statearr_19295_19323[(1)] = (13));

} else {
var statearr_19296_19324 = state_19285__$1;
(statearr_19296_19324[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (2))){
var inst_19248 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19249 = (0);
var state_19285__$1 = (function (){var statearr_19297 = state_19285;
(statearr_19297[(7)] = inst_19249);

(statearr_19297[(9)] = inst_19248);

return statearr_19297;
})();
var statearr_19298_19325 = state_19285__$1;
(statearr_19298_19325[(2)] = null);

(statearr_19298_19325[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (11))){
var inst_19249 = (state_19285[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19285,(10),Object,null,(9));
var inst_19258 = chs__$1.call(null,inst_19249);
var inst_19259 = done.call(null,inst_19249);
var inst_19260 = cljs.core.async.take_BANG_.call(null,inst_19258,inst_19259);
var state_19285__$1 = state_19285;
var statearr_19299_19326 = state_19285__$1;
(statearr_19299_19326[(2)] = inst_19260);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19285__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (9))){
var inst_19249 = (state_19285[(7)]);
var inst_19262 = (state_19285[(2)]);
var inst_19263 = (inst_19249 + (1));
var inst_19249__$1 = inst_19263;
var state_19285__$1 = (function (){var statearr_19300 = state_19285;
(statearr_19300[(10)] = inst_19262);

(statearr_19300[(7)] = inst_19249__$1);

return statearr_19300;
})();
var statearr_19301_19327 = state_19285__$1;
(statearr_19301_19327[(2)] = null);

(statearr_19301_19327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (5))){
var inst_19269 = (state_19285[(2)]);
var state_19285__$1 = (function (){var statearr_19302 = state_19285;
(statearr_19302[(11)] = inst_19269);

return statearr_19302;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19285__$1,(12),dchan);
} else {
if((state_val_19286 === (14))){
var inst_19271 = (state_19285[(8)]);
var inst_19276 = cljs.core.apply.call(null,f,inst_19271);
var state_19285__$1 = state_19285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19285__$1,(16),out,inst_19276);
} else {
if((state_val_19286 === (16))){
var inst_19278 = (state_19285[(2)]);
var state_19285__$1 = (function (){var statearr_19303 = state_19285;
(statearr_19303[(12)] = inst_19278);

return statearr_19303;
})();
var statearr_19304_19328 = state_19285__$1;
(statearr_19304_19328[(2)] = null);

(statearr_19304_19328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (10))){
var inst_19253 = (state_19285[(2)]);
var inst_19254 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19285__$1 = (function (){var statearr_19305 = state_19285;
(statearr_19305[(13)] = inst_19253);

return statearr_19305;
})();
var statearr_19306_19329 = state_19285__$1;
(statearr_19306_19329[(2)] = inst_19254);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19285__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19286 === (8))){
var inst_19267 = (state_19285[(2)]);
var state_19285__$1 = state_19285;
var statearr_19307_19330 = state_19285__$1;
(statearr_19307_19330[(2)] = inst_19267);

(statearr_19307_19330[(1)] = (5));


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
});})(c__7600__auto___19315,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7585__auto__,c__7600__auto___19315,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_19311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19311[(0)] = state_machine__7586__auto__);

(statearr_19311[(1)] = (1));

return statearr_19311;
});
var state_machine__7586__auto____1 = (function (state_19285){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_19285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e19312){if((e19312 instanceof Object)){
var ex__7589__auto__ = e19312;
var statearr_19313_19331 = state_19285;
(statearr_19313_19331[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19332 = state_19285;
state_19285 = G__19332;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_19285){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_19285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___19315,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7602__auto__ = (function (){var statearr_19314 = f__7601__auto__.call(null);
(statearr_19314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___19315);

return statearr_19314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___19315,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7600__auto___19440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___19440,out){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___19440,out){
return (function (state_19416){
var state_val_19417 = (state_19416[(1)]);
if((state_val_19417 === (7))){
var inst_19395 = (state_19416[(7)]);
var inst_19396 = (state_19416[(8)]);
var inst_19395__$1 = (state_19416[(2)]);
var inst_19396__$1 = cljs.core.nth.call(null,inst_19395__$1,(0),null);
var inst_19397 = cljs.core.nth.call(null,inst_19395__$1,(1),null);
var inst_19398 = (inst_19396__$1 == null);
var state_19416__$1 = (function (){var statearr_19418 = state_19416;
(statearr_19418[(7)] = inst_19395__$1);

(statearr_19418[(9)] = inst_19397);

(statearr_19418[(8)] = inst_19396__$1);

return statearr_19418;
})();
if(cljs.core.truth_(inst_19398)){
var statearr_19419_19441 = state_19416__$1;
(statearr_19419_19441[(1)] = (8));

} else {
var statearr_19420_19442 = state_19416__$1;
(statearr_19420_19442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (1))){
var inst_19387 = cljs.core.vec.call(null,chs);
var inst_19388 = inst_19387;
var state_19416__$1 = (function (){var statearr_19421 = state_19416;
(statearr_19421[(10)] = inst_19388);

return statearr_19421;
})();
var statearr_19422_19443 = state_19416__$1;
(statearr_19422_19443[(2)] = null);

(statearr_19422_19443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (4))){
var inst_19388 = (state_19416[(10)]);
var state_19416__$1 = state_19416;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19416__$1,(7),inst_19388);
} else {
if((state_val_19417 === (6))){
var inst_19412 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
var statearr_19423_19444 = state_19416__$1;
(statearr_19423_19444[(2)] = inst_19412);

(statearr_19423_19444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (3))){
var inst_19414 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19416__$1,inst_19414);
} else {
if((state_val_19417 === (2))){
var inst_19388 = (state_19416[(10)]);
var inst_19390 = cljs.core.count.call(null,inst_19388);
var inst_19391 = (inst_19390 > (0));
var state_19416__$1 = state_19416;
if(cljs.core.truth_(inst_19391)){
var statearr_19425_19445 = state_19416__$1;
(statearr_19425_19445[(1)] = (4));

} else {
var statearr_19426_19446 = state_19416__$1;
(statearr_19426_19446[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (11))){
var inst_19388 = (state_19416[(10)]);
var inst_19405 = (state_19416[(2)]);
var tmp19424 = inst_19388;
var inst_19388__$1 = tmp19424;
var state_19416__$1 = (function (){var statearr_19427 = state_19416;
(statearr_19427[(10)] = inst_19388__$1);

(statearr_19427[(11)] = inst_19405);

return statearr_19427;
})();
var statearr_19428_19447 = state_19416__$1;
(statearr_19428_19447[(2)] = null);

(statearr_19428_19447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (9))){
var inst_19396 = (state_19416[(8)]);
var state_19416__$1 = state_19416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19416__$1,(11),out,inst_19396);
} else {
if((state_val_19417 === (5))){
var inst_19410 = cljs.core.async.close_BANG_.call(null,out);
var state_19416__$1 = state_19416;
var statearr_19429_19448 = state_19416__$1;
(statearr_19429_19448[(2)] = inst_19410);

(statearr_19429_19448[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (10))){
var inst_19408 = (state_19416[(2)]);
var state_19416__$1 = state_19416;
var statearr_19430_19449 = state_19416__$1;
(statearr_19430_19449[(2)] = inst_19408);

(statearr_19430_19449[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19417 === (8))){
var inst_19395 = (state_19416[(7)]);
var inst_19397 = (state_19416[(9)]);
var inst_19388 = (state_19416[(10)]);
var inst_19396 = (state_19416[(8)]);
var inst_19400 = (function (){var c = inst_19397;
var v = inst_19396;
var vec__19393 = inst_19395;
var cs = inst_19388;
return ((function (c,v,vec__19393,cs,inst_19395,inst_19397,inst_19388,inst_19396,state_val_19417,c__7600__auto___19440,out){
return (function (p1__19333_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19333_SHARP_);
});
;})(c,v,vec__19393,cs,inst_19395,inst_19397,inst_19388,inst_19396,state_val_19417,c__7600__auto___19440,out))
})();
var inst_19401 = cljs.core.filterv.call(null,inst_19400,inst_19388);
var inst_19388__$1 = inst_19401;
var state_19416__$1 = (function (){var statearr_19431 = state_19416;
(statearr_19431[(10)] = inst_19388__$1);

return statearr_19431;
})();
var statearr_19432_19450 = state_19416__$1;
(statearr_19432_19450[(2)] = null);

(statearr_19432_19450[(1)] = (2));


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
});})(c__7600__auto___19440,out))
;
return ((function (switch__7585__auto__,c__7600__auto___19440,out){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_19436 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19436[(0)] = state_machine__7586__auto__);

(statearr_19436[(1)] = (1));

return statearr_19436;
});
var state_machine__7586__auto____1 = (function (state_19416){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_19416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e19437){if((e19437 instanceof Object)){
var ex__7589__auto__ = e19437;
var statearr_19438_19451 = state_19416;
(statearr_19438_19451[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19452 = state_19416;
state_19416 = G__19452;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_19416){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_19416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___19440,out))
})();
var state__7602__auto__ = (function (){var statearr_19439 = f__7601__auto__.call(null);
(statearr_19439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___19440);

return statearr_19439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___19440,out))
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
var c__7600__auto___19545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___19545,out){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___19545,out){
return (function (state_19522){
var state_val_19523 = (state_19522[(1)]);
if((state_val_19523 === (7))){
var inst_19504 = (state_19522[(7)]);
var inst_19504__$1 = (state_19522[(2)]);
var inst_19505 = (inst_19504__$1 == null);
var inst_19506 = cljs.core.not.call(null,inst_19505);
var state_19522__$1 = (function (){var statearr_19524 = state_19522;
(statearr_19524[(7)] = inst_19504__$1);

return statearr_19524;
})();
if(inst_19506){
var statearr_19525_19546 = state_19522__$1;
(statearr_19525_19546[(1)] = (8));

} else {
var statearr_19526_19547 = state_19522__$1;
(statearr_19526_19547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (1))){
var inst_19499 = (0);
var state_19522__$1 = (function (){var statearr_19527 = state_19522;
(statearr_19527[(8)] = inst_19499);

return statearr_19527;
})();
var statearr_19528_19548 = state_19522__$1;
(statearr_19528_19548[(2)] = null);

(statearr_19528_19548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (4))){
var state_19522__$1 = state_19522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19522__$1,(7),ch);
} else {
if((state_val_19523 === (6))){
var inst_19517 = (state_19522[(2)]);
var state_19522__$1 = state_19522;
var statearr_19529_19549 = state_19522__$1;
(statearr_19529_19549[(2)] = inst_19517);

(statearr_19529_19549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (3))){
var inst_19519 = (state_19522[(2)]);
var inst_19520 = cljs.core.async.close_BANG_.call(null,out);
var state_19522__$1 = (function (){var statearr_19530 = state_19522;
(statearr_19530[(9)] = inst_19519);

return statearr_19530;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19522__$1,inst_19520);
} else {
if((state_val_19523 === (2))){
var inst_19499 = (state_19522[(8)]);
var inst_19501 = (inst_19499 < n);
var state_19522__$1 = state_19522;
if(cljs.core.truth_(inst_19501)){
var statearr_19531_19550 = state_19522__$1;
(statearr_19531_19550[(1)] = (4));

} else {
var statearr_19532_19551 = state_19522__$1;
(statearr_19532_19551[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (11))){
var inst_19499 = (state_19522[(8)]);
var inst_19509 = (state_19522[(2)]);
var inst_19510 = (inst_19499 + (1));
var inst_19499__$1 = inst_19510;
var state_19522__$1 = (function (){var statearr_19533 = state_19522;
(statearr_19533[(10)] = inst_19509);

(statearr_19533[(8)] = inst_19499__$1);

return statearr_19533;
})();
var statearr_19534_19552 = state_19522__$1;
(statearr_19534_19552[(2)] = null);

(statearr_19534_19552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (9))){
var state_19522__$1 = state_19522;
var statearr_19535_19553 = state_19522__$1;
(statearr_19535_19553[(2)] = null);

(statearr_19535_19553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (5))){
var state_19522__$1 = state_19522;
var statearr_19536_19554 = state_19522__$1;
(statearr_19536_19554[(2)] = null);

(statearr_19536_19554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (10))){
var inst_19514 = (state_19522[(2)]);
var state_19522__$1 = state_19522;
var statearr_19537_19555 = state_19522__$1;
(statearr_19537_19555[(2)] = inst_19514);

(statearr_19537_19555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (8))){
var inst_19504 = (state_19522[(7)]);
var state_19522__$1 = state_19522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19522__$1,(11),out,inst_19504);
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
});})(c__7600__auto___19545,out))
;
return ((function (switch__7585__auto__,c__7600__auto___19545,out){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_19541 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19541[(0)] = state_machine__7586__auto__);

(statearr_19541[(1)] = (1));

return statearr_19541;
});
var state_machine__7586__auto____1 = (function (state_19522){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_19522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e19542){if((e19542 instanceof Object)){
var ex__7589__auto__ = e19542;
var statearr_19543_19556 = state_19522;
(statearr_19543_19556[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19557 = state_19522;
state_19522 = G__19557;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_19522){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_19522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___19545,out))
})();
var state__7602__auto__ = (function (){var statearr_19544 = f__7601__auto__.call(null);
(statearr_19544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___19545);

return statearr_19544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___19545,out))
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
if(typeof cljs.core.async.t19565 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19565 = (function (ch,f,map_LT_,meta19566){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19566 = meta19566;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19565.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19565.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t19565.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19565.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t19568 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19568 = (function (fn1,_,meta19566,map_LT_,f,ch,meta19569){
this.fn1 = fn1;
this._ = _;
this.meta19566 = meta19566;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19569 = meta19569;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19568.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19568.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t19568.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19558_SHARP_){
return f1.call(null,(((p1__19558_SHARP_ == null))?null:self__.f.call(null,p1__19558_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t19568.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19570){
var self__ = this;
var _19570__$1 = this;
return self__.meta19569;
});})(___$1))
;

cljs.core.async.t19568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19570,meta19569__$1){
var self__ = this;
var _19570__$1 = this;
return (new cljs.core.async.t19568(self__.fn1,self__._,self__.meta19566,self__.map_LT_,self__.f,self__.ch,meta19569__$1));
});})(___$1))
;

cljs.core.async.t19568.cljs$lang$type = true;

cljs.core.async.t19568.cljs$lang$ctorStr = "cljs.core.async/t19568";

cljs.core.async.t19568.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t19568");
});})(___$1))
;

cljs.core.async.__GT_t19568 = ((function (___$1){
return (function __GT_t19568(fn1__$1,___$2,meta19566__$1,map_LT___$1,f__$1,ch__$1,meta19569){
return (new cljs.core.async.t19568(fn1__$1,___$2,meta19566__$1,map_LT___$1,f__$1,ch__$1,meta19569));
});})(___$1))
;

}

return (new cljs.core.async.t19568(fn1,___$1,self__.meta19566,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t19565.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19565.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19565.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19567){
var self__ = this;
var _19567__$1 = this;
return self__.meta19566;
});

cljs.core.async.t19565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19567,meta19566__$1){
var self__ = this;
var _19567__$1 = this;
return (new cljs.core.async.t19565(self__.ch,self__.f,self__.map_LT_,meta19566__$1));
});

cljs.core.async.t19565.cljs$lang$type = true;

cljs.core.async.t19565.cljs$lang$ctorStr = "cljs.core.async/t19565";

cljs.core.async.t19565.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t19565");
});

cljs.core.async.__GT_t19565 = (function __GT_t19565(ch__$1,f__$1,map_LT___$1,meta19566){
return (new cljs.core.async.t19565(ch__$1,f__$1,map_LT___$1,meta19566));
});

}

return (new cljs.core.async.t19565(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t19574 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19574 = (function (ch,f,map_GT_,meta19575){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19575 = meta19575;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19574.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19574.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t19574.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19574.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19574.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19574.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19576){
var self__ = this;
var _19576__$1 = this;
return self__.meta19575;
});

cljs.core.async.t19574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19576,meta19575__$1){
var self__ = this;
var _19576__$1 = this;
return (new cljs.core.async.t19574(self__.ch,self__.f,self__.map_GT_,meta19575__$1));
});

cljs.core.async.t19574.cljs$lang$type = true;

cljs.core.async.t19574.cljs$lang$ctorStr = "cljs.core.async/t19574";

cljs.core.async.t19574.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t19574");
});

cljs.core.async.__GT_t19574 = (function __GT_t19574(ch__$1,f__$1,map_GT___$1,meta19575){
return (new cljs.core.async.t19574(ch__$1,f__$1,map_GT___$1,meta19575));
});

}

return (new cljs.core.async.t19574(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t19580 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19580 = (function (ch,p,filter_GT_,meta19581){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19581 = meta19581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19580.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19580.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t19580.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19580.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19580.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19580.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19580.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19582){
var self__ = this;
var _19582__$1 = this;
return self__.meta19581;
});

cljs.core.async.t19580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19582,meta19581__$1){
var self__ = this;
var _19582__$1 = this;
return (new cljs.core.async.t19580(self__.ch,self__.p,self__.filter_GT_,meta19581__$1));
});

cljs.core.async.t19580.cljs$lang$type = true;

cljs.core.async.t19580.cljs$lang$ctorStr = "cljs.core.async/t19580";

cljs.core.async.t19580.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t19580");
});

cljs.core.async.__GT_t19580 = (function __GT_t19580(ch__$1,p__$1,filter_GT___$1,meta19581){
return (new cljs.core.async.t19580(ch__$1,p__$1,filter_GT___$1,meta19581));
});

}

return (new cljs.core.async.t19580(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7600__auto___19665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___19665,out){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___19665,out){
return (function (state_19644){
var state_val_19645 = (state_19644[(1)]);
if((state_val_19645 === (7))){
var inst_19640 = (state_19644[(2)]);
var state_19644__$1 = state_19644;
var statearr_19646_19666 = state_19644__$1;
(statearr_19646_19666[(2)] = inst_19640);

(statearr_19646_19666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (1))){
var state_19644__$1 = state_19644;
var statearr_19647_19667 = state_19644__$1;
(statearr_19647_19667[(2)] = null);

(statearr_19647_19667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (4))){
var inst_19626 = (state_19644[(7)]);
var inst_19626__$1 = (state_19644[(2)]);
var inst_19627 = (inst_19626__$1 == null);
var state_19644__$1 = (function (){var statearr_19648 = state_19644;
(statearr_19648[(7)] = inst_19626__$1);

return statearr_19648;
})();
if(cljs.core.truth_(inst_19627)){
var statearr_19649_19668 = state_19644__$1;
(statearr_19649_19668[(1)] = (5));

} else {
var statearr_19650_19669 = state_19644__$1;
(statearr_19650_19669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (6))){
var inst_19626 = (state_19644[(7)]);
var inst_19631 = p.call(null,inst_19626);
var state_19644__$1 = state_19644;
if(cljs.core.truth_(inst_19631)){
var statearr_19651_19670 = state_19644__$1;
(statearr_19651_19670[(1)] = (8));

} else {
var statearr_19652_19671 = state_19644__$1;
(statearr_19652_19671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (3))){
var inst_19642 = (state_19644[(2)]);
var state_19644__$1 = state_19644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19644__$1,inst_19642);
} else {
if((state_val_19645 === (2))){
var state_19644__$1 = state_19644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19644__$1,(4),ch);
} else {
if((state_val_19645 === (11))){
var inst_19634 = (state_19644[(2)]);
var state_19644__$1 = state_19644;
var statearr_19653_19672 = state_19644__$1;
(statearr_19653_19672[(2)] = inst_19634);

(statearr_19653_19672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (9))){
var state_19644__$1 = state_19644;
var statearr_19654_19673 = state_19644__$1;
(statearr_19654_19673[(2)] = null);

(statearr_19654_19673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (5))){
var inst_19629 = cljs.core.async.close_BANG_.call(null,out);
var state_19644__$1 = state_19644;
var statearr_19655_19674 = state_19644__$1;
(statearr_19655_19674[(2)] = inst_19629);

(statearr_19655_19674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (10))){
var inst_19637 = (state_19644[(2)]);
var state_19644__$1 = (function (){var statearr_19656 = state_19644;
(statearr_19656[(8)] = inst_19637);

return statearr_19656;
})();
var statearr_19657_19675 = state_19644__$1;
(statearr_19657_19675[(2)] = null);

(statearr_19657_19675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19645 === (8))){
var inst_19626 = (state_19644[(7)]);
var state_19644__$1 = state_19644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19644__$1,(11),out,inst_19626);
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
});})(c__7600__auto___19665,out))
;
return ((function (switch__7585__auto__,c__7600__auto___19665,out){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_19661 = [null,null,null,null,null,null,null,null,null];
(statearr_19661[(0)] = state_machine__7586__auto__);

(statearr_19661[(1)] = (1));

return statearr_19661;
});
var state_machine__7586__auto____1 = (function (state_19644){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_19644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e19662){if((e19662 instanceof Object)){
var ex__7589__auto__ = e19662;
var statearr_19663_19676 = state_19644;
(statearr_19663_19676[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19677 = state_19644;
state_19644 = G__19677;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_19644){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_19644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___19665,out))
})();
var state__7602__auto__ = (function (){var statearr_19664 = f__7601__auto__.call(null);
(statearr_19664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___19665);

return statearr_19664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___19665,out))
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
return (function (state_19843){
var state_val_19844 = (state_19843[(1)]);
if((state_val_19844 === (7))){
var inst_19839 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
var statearr_19845_19886 = state_19843__$1;
(statearr_19845_19886[(2)] = inst_19839);

(statearr_19845_19886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (20))){
var inst_19809 = (state_19843[(7)]);
var inst_19820 = (state_19843[(2)]);
var inst_19821 = cljs.core.next.call(null,inst_19809);
var inst_19795 = inst_19821;
var inst_19796 = null;
var inst_19797 = (0);
var inst_19798 = (0);
var state_19843__$1 = (function (){var statearr_19846 = state_19843;
(statearr_19846[(8)] = inst_19796);

(statearr_19846[(9)] = inst_19820);

(statearr_19846[(10)] = inst_19795);

(statearr_19846[(11)] = inst_19797);

(statearr_19846[(12)] = inst_19798);

return statearr_19846;
})();
var statearr_19847_19887 = state_19843__$1;
(statearr_19847_19887[(2)] = null);

(statearr_19847_19887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (1))){
var state_19843__$1 = state_19843;
var statearr_19848_19888 = state_19843__$1;
(statearr_19848_19888[(2)] = null);

(statearr_19848_19888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (4))){
var inst_19784 = (state_19843[(13)]);
var inst_19784__$1 = (state_19843[(2)]);
var inst_19785 = (inst_19784__$1 == null);
var state_19843__$1 = (function (){var statearr_19849 = state_19843;
(statearr_19849[(13)] = inst_19784__$1);

return statearr_19849;
})();
if(cljs.core.truth_(inst_19785)){
var statearr_19850_19889 = state_19843__$1;
(statearr_19850_19889[(1)] = (5));

} else {
var statearr_19851_19890 = state_19843__$1;
(statearr_19851_19890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (15))){
var state_19843__$1 = state_19843;
var statearr_19855_19891 = state_19843__$1;
(statearr_19855_19891[(2)] = null);

(statearr_19855_19891[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (21))){
var state_19843__$1 = state_19843;
var statearr_19856_19892 = state_19843__$1;
(statearr_19856_19892[(2)] = null);

(statearr_19856_19892[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (13))){
var inst_19796 = (state_19843[(8)]);
var inst_19795 = (state_19843[(10)]);
var inst_19797 = (state_19843[(11)]);
var inst_19798 = (state_19843[(12)]);
var inst_19805 = (state_19843[(2)]);
var inst_19806 = (inst_19798 + (1));
var tmp19852 = inst_19796;
var tmp19853 = inst_19795;
var tmp19854 = inst_19797;
var inst_19795__$1 = tmp19853;
var inst_19796__$1 = tmp19852;
var inst_19797__$1 = tmp19854;
var inst_19798__$1 = inst_19806;
var state_19843__$1 = (function (){var statearr_19857 = state_19843;
(statearr_19857[(14)] = inst_19805);

(statearr_19857[(8)] = inst_19796__$1);

(statearr_19857[(10)] = inst_19795__$1);

(statearr_19857[(11)] = inst_19797__$1);

(statearr_19857[(12)] = inst_19798__$1);

return statearr_19857;
})();
var statearr_19858_19893 = state_19843__$1;
(statearr_19858_19893[(2)] = null);

(statearr_19858_19893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (22))){
var state_19843__$1 = state_19843;
var statearr_19859_19894 = state_19843__$1;
(statearr_19859_19894[(2)] = null);

(statearr_19859_19894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (6))){
var inst_19784 = (state_19843[(13)]);
var inst_19793 = f.call(null,inst_19784);
var inst_19794 = cljs.core.seq.call(null,inst_19793);
var inst_19795 = inst_19794;
var inst_19796 = null;
var inst_19797 = (0);
var inst_19798 = (0);
var state_19843__$1 = (function (){var statearr_19860 = state_19843;
(statearr_19860[(8)] = inst_19796);

(statearr_19860[(10)] = inst_19795);

(statearr_19860[(11)] = inst_19797);

(statearr_19860[(12)] = inst_19798);

return statearr_19860;
})();
var statearr_19861_19895 = state_19843__$1;
(statearr_19861_19895[(2)] = null);

(statearr_19861_19895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (17))){
var inst_19809 = (state_19843[(7)]);
var inst_19813 = cljs.core.chunk_first.call(null,inst_19809);
var inst_19814 = cljs.core.chunk_rest.call(null,inst_19809);
var inst_19815 = cljs.core.count.call(null,inst_19813);
var inst_19795 = inst_19814;
var inst_19796 = inst_19813;
var inst_19797 = inst_19815;
var inst_19798 = (0);
var state_19843__$1 = (function (){var statearr_19862 = state_19843;
(statearr_19862[(8)] = inst_19796);

(statearr_19862[(10)] = inst_19795);

(statearr_19862[(11)] = inst_19797);

(statearr_19862[(12)] = inst_19798);

return statearr_19862;
})();
var statearr_19863_19896 = state_19843__$1;
(statearr_19863_19896[(2)] = null);

(statearr_19863_19896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (3))){
var inst_19841 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19843__$1,inst_19841);
} else {
if((state_val_19844 === (12))){
var inst_19829 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
var statearr_19864_19897 = state_19843__$1;
(statearr_19864_19897[(2)] = inst_19829);

(statearr_19864_19897[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (2))){
var state_19843__$1 = state_19843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19843__$1,(4),in$);
} else {
if((state_val_19844 === (23))){
var inst_19837 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
var statearr_19865_19898 = state_19843__$1;
(statearr_19865_19898[(2)] = inst_19837);

(statearr_19865_19898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (19))){
var inst_19824 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
var statearr_19866_19899 = state_19843__$1;
(statearr_19866_19899[(2)] = inst_19824);

(statearr_19866_19899[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (11))){
var inst_19795 = (state_19843[(10)]);
var inst_19809 = (state_19843[(7)]);
var inst_19809__$1 = cljs.core.seq.call(null,inst_19795);
var state_19843__$1 = (function (){var statearr_19867 = state_19843;
(statearr_19867[(7)] = inst_19809__$1);

return statearr_19867;
})();
if(inst_19809__$1){
var statearr_19868_19900 = state_19843__$1;
(statearr_19868_19900[(1)] = (14));

} else {
var statearr_19869_19901 = state_19843__$1;
(statearr_19869_19901[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (9))){
var inst_19831 = (state_19843[(2)]);
var inst_19832 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19843__$1 = (function (){var statearr_19870 = state_19843;
(statearr_19870[(15)] = inst_19831);

return statearr_19870;
})();
if(cljs.core.truth_(inst_19832)){
var statearr_19871_19902 = state_19843__$1;
(statearr_19871_19902[(1)] = (21));

} else {
var statearr_19872_19903 = state_19843__$1;
(statearr_19872_19903[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (5))){
var inst_19787 = cljs.core.async.close_BANG_.call(null,out);
var state_19843__$1 = state_19843;
var statearr_19873_19904 = state_19843__$1;
(statearr_19873_19904[(2)] = inst_19787);

(statearr_19873_19904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (14))){
var inst_19809 = (state_19843[(7)]);
var inst_19811 = cljs.core.chunked_seq_QMARK_.call(null,inst_19809);
var state_19843__$1 = state_19843;
if(inst_19811){
var statearr_19874_19905 = state_19843__$1;
(statearr_19874_19905[(1)] = (17));

} else {
var statearr_19875_19906 = state_19843__$1;
(statearr_19875_19906[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (16))){
var inst_19827 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
var statearr_19876_19907 = state_19843__$1;
(statearr_19876_19907[(2)] = inst_19827);

(statearr_19876_19907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (10))){
var inst_19796 = (state_19843[(8)]);
var inst_19798 = (state_19843[(12)]);
var inst_19803 = cljs.core._nth.call(null,inst_19796,inst_19798);
var state_19843__$1 = state_19843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19843__$1,(13),out,inst_19803);
} else {
if((state_val_19844 === (18))){
var inst_19809 = (state_19843[(7)]);
var inst_19818 = cljs.core.first.call(null,inst_19809);
var state_19843__$1 = state_19843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19843__$1,(20),out,inst_19818);
} else {
if((state_val_19844 === (8))){
var inst_19797 = (state_19843[(11)]);
var inst_19798 = (state_19843[(12)]);
var inst_19800 = (inst_19798 < inst_19797);
var inst_19801 = inst_19800;
var state_19843__$1 = state_19843;
if(cljs.core.truth_(inst_19801)){
var statearr_19877_19908 = state_19843__$1;
(statearr_19877_19908[(1)] = (10));

} else {
var statearr_19878_19909 = state_19843__$1;
(statearr_19878_19909[(1)] = (11));

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
var statearr_19882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19882[(0)] = state_machine__7586__auto__);

(statearr_19882[(1)] = (1));

return statearr_19882;
});
var state_machine__7586__auto____1 = (function (state_19843){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_19843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e19883){if((e19883 instanceof Object)){
var ex__7589__auto__ = e19883;
var statearr_19884_19910 = state_19843;
(statearr_19884_19910[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19911 = state_19843;
state_19843 = G__19911;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_19843){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_19843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto__))
})();
var state__7602__auto__ = (function (){var statearr_19885 = f__7601__auto__.call(null);
(statearr_19885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto__);

return statearr_19885;
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
var c__7600__auto___20008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___20008,out){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___20008,out){
return (function (state_19983){
var state_val_19984 = (state_19983[(1)]);
if((state_val_19984 === (7))){
var inst_19978 = (state_19983[(2)]);
var state_19983__$1 = state_19983;
var statearr_19985_20009 = state_19983__$1;
(statearr_19985_20009[(2)] = inst_19978);

(statearr_19985_20009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19984 === (1))){
var inst_19960 = null;
var state_19983__$1 = (function (){var statearr_19986 = state_19983;
(statearr_19986[(7)] = inst_19960);

return statearr_19986;
})();
var statearr_19987_20010 = state_19983__$1;
(statearr_19987_20010[(2)] = null);

(statearr_19987_20010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19984 === (4))){
var inst_19963 = (state_19983[(8)]);
var inst_19963__$1 = (state_19983[(2)]);
var inst_19964 = (inst_19963__$1 == null);
var inst_19965 = cljs.core.not.call(null,inst_19964);
var state_19983__$1 = (function (){var statearr_19988 = state_19983;
(statearr_19988[(8)] = inst_19963__$1);

return statearr_19988;
})();
if(inst_19965){
var statearr_19989_20011 = state_19983__$1;
(statearr_19989_20011[(1)] = (5));

} else {
var statearr_19990_20012 = state_19983__$1;
(statearr_19990_20012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19984 === (6))){
var state_19983__$1 = state_19983;
var statearr_19991_20013 = state_19983__$1;
(statearr_19991_20013[(2)] = null);

(statearr_19991_20013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19984 === (3))){
var inst_19980 = (state_19983[(2)]);
var inst_19981 = cljs.core.async.close_BANG_.call(null,out);
var state_19983__$1 = (function (){var statearr_19992 = state_19983;
(statearr_19992[(9)] = inst_19980);

return statearr_19992;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19983__$1,inst_19981);
} else {
if((state_val_19984 === (2))){
var state_19983__$1 = state_19983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19983__$1,(4),ch);
} else {
if((state_val_19984 === (11))){
var inst_19963 = (state_19983[(8)]);
var inst_19972 = (state_19983[(2)]);
var inst_19960 = inst_19963;
var state_19983__$1 = (function (){var statearr_19993 = state_19983;
(statearr_19993[(10)] = inst_19972);

(statearr_19993[(7)] = inst_19960);

return statearr_19993;
})();
var statearr_19994_20014 = state_19983__$1;
(statearr_19994_20014[(2)] = null);

(statearr_19994_20014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19984 === (9))){
var inst_19963 = (state_19983[(8)]);
var state_19983__$1 = state_19983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19983__$1,(11),out,inst_19963);
} else {
if((state_val_19984 === (5))){
var inst_19963 = (state_19983[(8)]);
var inst_19960 = (state_19983[(7)]);
var inst_19967 = cljs.core._EQ_.call(null,inst_19963,inst_19960);
var state_19983__$1 = state_19983;
if(inst_19967){
var statearr_19996_20015 = state_19983__$1;
(statearr_19996_20015[(1)] = (8));

} else {
var statearr_19997_20016 = state_19983__$1;
(statearr_19997_20016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19984 === (10))){
var inst_19975 = (state_19983[(2)]);
var state_19983__$1 = state_19983;
var statearr_19998_20017 = state_19983__$1;
(statearr_19998_20017[(2)] = inst_19975);

(statearr_19998_20017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19984 === (8))){
var inst_19960 = (state_19983[(7)]);
var tmp19995 = inst_19960;
var inst_19960__$1 = tmp19995;
var state_19983__$1 = (function (){var statearr_19999 = state_19983;
(statearr_19999[(7)] = inst_19960__$1);

return statearr_19999;
})();
var statearr_20000_20018 = state_19983__$1;
(statearr_20000_20018[(2)] = null);

(statearr_20000_20018[(1)] = (2));


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
});})(c__7600__auto___20008,out))
;
return ((function (switch__7585__auto__,c__7600__auto___20008,out){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_20004 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20004[(0)] = state_machine__7586__auto__);

(statearr_20004[(1)] = (1));

return statearr_20004;
});
var state_machine__7586__auto____1 = (function (state_19983){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_19983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e20005){if((e20005 instanceof Object)){
var ex__7589__auto__ = e20005;
var statearr_20006_20019 = state_19983;
(statearr_20006_20019[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20020 = state_19983;
state_19983 = G__20020;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_19983){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_19983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___20008,out))
})();
var state__7602__auto__ = (function (){var statearr_20007 = f__7601__auto__.call(null);
(statearr_20007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___20008);

return statearr_20007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___20008,out))
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
var c__7600__auto___20155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___20155,out){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___20155,out){
return (function (state_20125){
var state_val_20126 = (state_20125[(1)]);
if((state_val_20126 === (7))){
var inst_20121 = (state_20125[(2)]);
var state_20125__$1 = state_20125;
var statearr_20127_20156 = state_20125__$1;
(statearr_20127_20156[(2)] = inst_20121);

(statearr_20127_20156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20126 === (1))){
var inst_20088 = (new Array(n));
var inst_20089 = inst_20088;
var inst_20090 = (0);
var state_20125__$1 = (function (){var statearr_20128 = state_20125;
(statearr_20128[(7)] = inst_20089);

(statearr_20128[(8)] = inst_20090);

return statearr_20128;
})();
var statearr_20129_20157 = state_20125__$1;
(statearr_20129_20157[(2)] = null);

(statearr_20129_20157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20126 === (4))){
var inst_20093 = (state_20125[(9)]);
var inst_20093__$1 = (state_20125[(2)]);
var inst_20094 = (inst_20093__$1 == null);
var inst_20095 = cljs.core.not.call(null,inst_20094);
var state_20125__$1 = (function (){var statearr_20130 = state_20125;
(statearr_20130[(9)] = inst_20093__$1);

return statearr_20130;
})();
if(inst_20095){
var statearr_20131_20158 = state_20125__$1;
(statearr_20131_20158[(1)] = (5));

} else {
var statearr_20132_20159 = state_20125__$1;
(statearr_20132_20159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20126 === (15))){
var inst_20115 = (state_20125[(2)]);
var state_20125__$1 = state_20125;
var statearr_20133_20160 = state_20125__$1;
(statearr_20133_20160[(2)] = inst_20115);

(statearr_20133_20160[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20126 === (13))){
var state_20125__$1 = state_20125;
var statearr_20134_20161 = state_20125__$1;
(statearr_20134_20161[(2)] = null);

(statearr_20134_20161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20126 === (6))){
var inst_20090 = (state_20125[(8)]);
var inst_20111 = (inst_20090 > (0));
var state_20125__$1 = state_20125;
if(cljs.core.truth_(inst_20111)){
var statearr_20135_20162 = state_20125__$1;
(statearr_20135_20162[(1)] = (12));

} else {
var statearr_20136_20163 = state_20125__$1;
(statearr_20136_20163[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20126 === (3))){
var inst_20123 = (state_20125[(2)]);
var state_20125__$1 = state_20125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20125__$1,inst_20123);
} else {
if((state_val_20126 === (12))){
var inst_20089 = (state_20125[(7)]);
var inst_20113 = cljs.core.vec.call(null,inst_20089);
var state_20125__$1 = state_20125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20125__$1,(15),out,inst_20113);
} else {
if((state_val_20126 === (2))){
var state_20125__$1 = state_20125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20125__$1,(4),ch);
} else {
if((state_val_20126 === (11))){
var inst_20105 = (state_20125[(2)]);
var inst_20106 = (new Array(n));
var inst_20089 = inst_20106;
var inst_20090 = (0);
var state_20125__$1 = (function (){var statearr_20137 = state_20125;
(statearr_20137[(7)] = inst_20089);

(statearr_20137[(8)] = inst_20090);

(statearr_20137[(10)] = inst_20105);

return statearr_20137;
})();
var statearr_20138_20164 = state_20125__$1;
(statearr_20138_20164[(2)] = null);

(statearr_20138_20164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20126 === (9))){
var inst_20089 = (state_20125[(7)]);
var inst_20103 = cljs.core.vec.call(null,inst_20089);
var state_20125__$1 = state_20125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20125__$1,(11),out,inst_20103);
} else {
if((state_val_20126 === (5))){
var inst_20089 = (state_20125[(7)]);
var inst_20090 = (state_20125[(8)]);
var inst_20093 = (state_20125[(9)]);
var inst_20098 = (state_20125[(11)]);
var inst_20097 = (inst_20089[inst_20090] = inst_20093);
var inst_20098__$1 = (inst_20090 + (1));
var inst_20099 = (inst_20098__$1 < n);
var state_20125__$1 = (function (){var statearr_20139 = state_20125;
(statearr_20139[(12)] = inst_20097);

(statearr_20139[(11)] = inst_20098__$1);

return statearr_20139;
})();
if(cljs.core.truth_(inst_20099)){
var statearr_20140_20165 = state_20125__$1;
(statearr_20140_20165[(1)] = (8));

} else {
var statearr_20141_20166 = state_20125__$1;
(statearr_20141_20166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20126 === (14))){
var inst_20118 = (state_20125[(2)]);
var inst_20119 = cljs.core.async.close_BANG_.call(null,out);
var state_20125__$1 = (function (){var statearr_20143 = state_20125;
(statearr_20143[(13)] = inst_20118);

return statearr_20143;
})();
var statearr_20144_20167 = state_20125__$1;
(statearr_20144_20167[(2)] = inst_20119);

(statearr_20144_20167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20126 === (10))){
var inst_20109 = (state_20125[(2)]);
var state_20125__$1 = state_20125;
var statearr_20145_20168 = state_20125__$1;
(statearr_20145_20168[(2)] = inst_20109);

(statearr_20145_20168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20126 === (8))){
var inst_20089 = (state_20125[(7)]);
var inst_20098 = (state_20125[(11)]);
var tmp20142 = inst_20089;
var inst_20089__$1 = tmp20142;
var inst_20090 = inst_20098;
var state_20125__$1 = (function (){var statearr_20146 = state_20125;
(statearr_20146[(7)] = inst_20089__$1);

(statearr_20146[(8)] = inst_20090);

return statearr_20146;
})();
var statearr_20147_20169 = state_20125__$1;
(statearr_20147_20169[(2)] = null);

(statearr_20147_20169[(1)] = (2));


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
});})(c__7600__auto___20155,out))
;
return ((function (switch__7585__auto__,c__7600__auto___20155,out){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_20151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20151[(0)] = state_machine__7586__auto__);

(statearr_20151[(1)] = (1));

return statearr_20151;
});
var state_machine__7586__auto____1 = (function (state_20125){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_20125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e20152){if((e20152 instanceof Object)){
var ex__7589__auto__ = e20152;
var statearr_20153_20170 = state_20125;
(statearr_20153_20170[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20171 = state_20125;
state_20125 = G__20171;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_20125){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_20125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___20155,out))
})();
var state__7602__auto__ = (function (){var statearr_20154 = f__7601__auto__.call(null);
(statearr_20154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___20155);

return statearr_20154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___20155,out))
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
var c__7600__auto___20314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7600__auto___20314,out){
return (function (){
var f__7601__auto__ = (function (){var switch__7585__auto__ = ((function (c__7600__auto___20314,out){
return (function (state_20284){
var state_val_20285 = (state_20284[(1)]);
if((state_val_20285 === (7))){
var inst_20280 = (state_20284[(2)]);
var state_20284__$1 = state_20284;
var statearr_20286_20315 = state_20284__$1;
(statearr_20286_20315[(2)] = inst_20280);

(statearr_20286_20315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20285 === (1))){
var inst_20243 = [];
var inst_20244 = inst_20243;
var inst_20245 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20284__$1 = (function (){var statearr_20287 = state_20284;
(statearr_20287[(7)] = inst_20244);

(statearr_20287[(8)] = inst_20245);

return statearr_20287;
})();
var statearr_20288_20316 = state_20284__$1;
(statearr_20288_20316[(2)] = null);

(statearr_20288_20316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20285 === (4))){
var inst_20248 = (state_20284[(9)]);
var inst_20248__$1 = (state_20284[(2)]);
var inst_20249 = (inst_20248__$1 == null);
var inst_20250 = cljs.core.not.call(null,inst_20249);
var state_20284__$1 = (function (){var statearr_20289 = state_20284;
(statearr_20289[(9)] = inst_20248__$1);

return statearr_20289;
})();
if(inst_20250){
var statearr_20290_20317 = state_20284__$1;
(statearr_20290_20317[(1)] = (5));

} else {
var statearr_20291_20318 = state_20284__$1;
(statearr_20291_20318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20285 === (15))){
var inst_20274 = (state_20284[(2)]);
var state_20284__$1 = state_20284;
var statearr_20292_20319 = state_20284__$1;
(statearr_20292_20319[(2)] = inst_20274);

(statearr_20292_20319[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20285 === (13))){
var state_20284__$1 = state_20284;
var statearr_20293_20320 = state_20284__$1;
(statearr_20293_20320[(2)] = null);

(statearr_20293_20320[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20285 === (6))){
var inst_20244 = (state_20284[(7)]);
var inst_20269 = inst_20244.length;
var inst_20270 = (inst_20269 > (0));
var state_20284__$1 = state_20284;
if(cljs.core.truth_(inst_20270)){
var statearr_20294_20321 = state_20284__$1;
(statearr_20294_20321[(1)] = (12));

} else {
var statearr_20295_20322 = state_20284__$1;
(statearr_20295_20322[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20285 === (3))){
var inst_20282 = (state_20284[(2)]);
var state_20284__$1 = state_20284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20284__$1,inst_20282);
} else {
if((state_val_20285 === (12))){
var inst_20244 = (state_20284[(7)]);
var inst_20272 = cljs.core.vec.call(null,inst_20244);
var state_20284__$1 = state_20284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20284__$1,(15),out,inst_20272);
} else {
if((state_val_20285 === (2))){
var state_20284__$1 = state_20284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20284__$1,(4),ch);
} else {
if((state_val_20285 === (11))){
var inst_20252 = (state_20284[(10)]);
var inst_20248 = (state_20284[(9)]);
var inst_20262 = (state_20284[(2)]);
var inst_20263 = [];
var inst_20264 = inst_20263.push(inst_20248);
var inst_20244 = inst_20263;
var inst_20245 = inst_20252;
var state_20284__$1 = (function (){var statearr_20296 = state_20284;
(statearr_20296[(7)] = inst_20244);

(statearr_20296[(11)] = inst_20262);

(statearr_20296[(8)] = inst_20245);

(statearr_20296[(12)] = inst_20264);

return statearr_20296;
})();
var statearr_20297_20323 = state_20284__$1;
(statearr_20297_20323[(2)] = null);

(statearr_20297_20323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20285 === (9))){
var inst_20244 = (state_20284[(7)]);
var inst_20260 = cljs.core.vec.call(null,inst_20244);
var state_20284__$1 = state_20284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20284__$1,(11),out,inst_20260);
} else {
if((state_val_20285 === (5))){
var inst_20252 = (state_20284[(10)]);
var inst_20248 = (state_20284[(9)]);
var inst_20245 = (state_20284[(8)]);
var inst_20252__$1 = f.call(null,inst_20248);
var inst_20253 = cljs.core._EQ_.call(null,inst_20252__$1,inst_20245);
var inst_20254 = cljs.core.keyword_identical_QMARK_.call(null,inst_20245,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20255 = (inst_20253) || (inst_20254);
var state_20284__$1 = (function (){var statearr_20298 = state_20284;
(statearr_20298[(10)] = inst_20252__$1);

return statearr_20298;
})();
if(cljs.core.truth_(inst_20255)){
var statearr_20299_20324 = state_20284__$1;
(statearr_20299_20324[(1)] = (8));

} else {
var statearr_20300_20325 = state_20284__$1;
(statearr_20300_20325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20285 === (14))){
var inst_20277 = (state_20284[(2)]);
var inst_20278 = cljs.core.async.close_BANG_.call(null,out);
var state_20284__$1 = (function (){var statearr_20302 = state_20284;
(statearr_20302[(13)] = inst_20277);

return statearr_20302;
})();
var statearr_20303_20326 = state_20284__$1;
(statearr_20303_20326[(2)] = inst_20278);

(statearr_20303_20326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20285 === (10))){
var inst_20267 = (state_20284[(2)]);
var state_20284__$1 = state_20284;
var statearr_20304_20327 = state_20284__$1;
(statearr_20304_20327[(2)] = inst_20267);

(statearr_20304_20327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20285 === (8))){
var inst_20252 = (state_20284[(10)]);
var inst_20244 = (state_20284[(7)]);
var inst_20248 = (state_20284[(9)]);
var inst_20257 = inst_20244.push(inst_20248);
var tmp20301 = inst_20244;
var inst_20244__$1 = tmp20301;
var inst_20245 = inst_20252;
var state_20284__$1 = (function (){var statearr_20305 = state_20284;
(statearr_20305[(7)] = inst_20244__$1);

(statearr_20305[(8)] = inst_20245);

(statearr_20305[(14)] = inst_20257);

return statearr_20305;
})();
var statearr_20306_20328 = state_20284__$1;
(statearr_20306_20328[(2)] = null);

(statearr_20306_20328[(1)] = (2));


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
});})(c__7600__auto___20314,out))
;
return ((function (switch__7585__auto__,c__7600__auto___20314,out){
return (function() {
var state_machine__7586__auto__ = null;
var state_machine__7586__auto____0 = (function (){
var statearr_20310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20310[(0)] = state_machine__7586__auto__);

(statearr_20310[(1)] = (1));

return statearr_20310;
});
var state_machine__7586__auto____1 = (function (state_20284){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_20284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e20311){if((e20311 instanceof Object)){
var ex__7589__auto__ = e20311;
var statearr_20312_20329 = state_20284;
(statearr_20312_20329[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20330 = state_20284;
state_20284 = G__20330;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
state_machine__7586__auto__ = function(state_20284){
switch(arguments.length){
case 0:
return state_machine__7586__auto____0.call(this);
case 1:
return state_machine__7586__auto____1.call(this,state_20284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7586__auto____0;
state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7586__auto____1;
return state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7600__auto___20314,out))
})();
var state__7602__auto__ = (function (){var statearr_20313 = f__7601__auto__.call(null);
(statearr_20313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7600__auto___20314);

return statearr_20313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7602__auto__);
});})(c__7600__auto___20314,out))
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
