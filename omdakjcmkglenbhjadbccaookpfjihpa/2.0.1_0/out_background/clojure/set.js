// Compiled by ClojureScript 0.0-2913 {}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function bubble_max_key(k,coll){

var max = cljs.core.apply.call(null,cljs.core.max_key,k,coll);
return cljs.core.cons.call(null,max,cljs.core.remove.call(null,((function (max){
return (function (p1__34226_SHARP_){
return (max === p1__34226_SHARP_);
});})(max))
,coll));
});
/**
* Return a set that is the union of the input sets
* @param {...*} var_args
*/
clojure.set.union = (function() {
var union = null;
var union__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var union__1 = (function (s1){
return s1;
});
var union__2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});
var union__3 = (function() { 
var G__34227__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
};
var G__34227 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__34228__i = 0, G__34228__a = new Array(arguments.length -  2);
while (G__34228__i < G__34228__a.length) {G__34228__a[G__34228__i] = arguments[G__34228__i + 2]; ++G__34228__i;}
  sets = new cljs.core.IndexedSeq(G__34228__a,0);
} 
return G__34227__delegate.call(this,s1,s2,sets);};
G__34227.cljs$lang$maxFixedArity = 2;
G__34227.cljs$lang$applyTo = (function (arglist__34229){
var s1 = cljs.core.first(arglist__34229);
arglist__34229 = cljs.core.next(arglist__34229);
var s2 = cljs.core.first(arglist__34229);
var sets = cljs.core.rest(arglist__34229);
return G__34227__delegate(s1,s2,sets);
});
G__34227.cljs$core$IFn$_invoke$arity$variadic = G__34227__delegate;
return G__34227;
})()
;
union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 0:
return union__0.call(this);
case 1:
return union__1.call(this,s1);
case 2:
return union__2.call(this,s1,s2);
default:
var G__34230 = null;
if (arguments.length > 2) {
var G__34231__i = 0, G__34231__a = new Array(arguments.length -  2);
while (G__34231__i < G__34231__a.length) {G__34231__a[G__34231__i] = arguments[G__34231__i + 2]; ++G__34231__i;}
G__34230 = new cljs.core.IndexedSeq(G__34231__a,0);
}
return union__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__34230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
union.cljs$lang$maxFixedArity = 2;
union.cljs$lang$applyTo = union__3.cljs$lang$applyTo;
union.cljs$core$IFn$_invoke$arity$0 = union__0;
union.cljs$core$IFn$_invoke$arity$1 = union__1;
union.cljs$core$IFn$_invoke$arity$2 = union__2;
union.cljs$core$IFn$_invoke$arity$variadic = union__3.cljs$core$IFn$_invoke$arity$variadic;
return union;
})()
;
/**
* Return a set that is the intersection of the input sets
* @param {...*} var_args
*/
clojure.set.intersection = (function() {
var intersection = null;
var intersection__1 = (function (s1){
return s1;
});
var intersection__2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))){
var G__34233 = s2;
var G__34234 = s1;
s1 = G__34233;
s2 = G__34234;
continue;
} else {
return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return result;
} else {
return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});
var intersection__3 = (function() { 
var G__34235__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,(function (p1__34232_SHARP_){
return (- cljs.core.count.call(null,p1__34232_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,intersection,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
};
var G__34235 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__34236__i = 0, G__34236__a = new Array(arguments.length -  2);
while (G__34236__i < G__34236__a.length) {G__34236__a[G__34236__i] = arguments[G__34236__i + 2]; ++G__34236__i;}
  sets = new cljs.core.IndexedSeq(G__34236__a,0);
} 
return G__34235__delegate.call(this,s1,s2,sets);};
G__34235.cljs$lang$maxFixedArity = 2;
G__34235.cljs$lang$applyTo = (function (arglist__34237){
var s1 = cljs.core.first(arglist__34237);
arglist__34237 = cljs.core.next(arglist__34237);
var s2 = cljs.core.first(arglist__34237);
var sets = cljs.core.rest(arglist__34237);
return G__34235__delegate(s1,s2,sets);
});
G__34235.cljs$core$IFn$_invoke$arity$variadic = G__34235__delegate;
return G__34235;
})()
;
intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return intersection__1.call(this,s1);
case 2:
return intersection__2.call(this,s1,s2);
default:
var G__34238 = null;
if (arguments.length > 2) {
var G__34239__i = 0, G__34239__a = new Array(arguments.length -  2);
while (G__34239__i < G__34239__a.length) {G__34239__a[G__34239__i] = arguments[G__34239__i + 2]; ++G__34239__i;}
G__34238 = new cljs.core.IndexedSeq(G__34239__a,0);
}
return intersection__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__34238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
intersection.cljs$lang$maxFixedArity = 2;
intersection.cljs$lang$applyTo = intersection__3.cljs$lang$applyTo;
intersection.cljs$core$IFn$_invoke$arity$1 = intersection__1;
intersection.cljs$core$IFn$_invoke$arity$2 = intersection__2;
intersection.cljs$core$IFn$_invoke$arity$variadic = intersection__3.cljs$core$IFn$_invoke$arity$variadic;
return intersection;
})()
;
/**
* Return a set that is the first set without elements of the remaining sets
* @param {...*} var_args
*/
clojure.set.difference = (function() {
var difference = null;
var difference__1 = (function (s1){
return s1;
});
var difference__2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return cljs.core.disj.call(null,result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});
var difference__3 = (function() { 
var G__34240__delegate = function (s1,s2,sets){
return cljs.core.reduce.call(null,difference,s1,cljs.core.conj.call(null,sets,s2));
};
var G__34240 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__34241__i = 0, G__34241__a = new Array(arguments.length -  2);
while (G__34241__i < G__34241__a.length) {G__34241__a[G__34241__i] = arguments[G__34241__i + 2]; ++G__34241__i;}
  sets = new cljs.core.IndexedSeq(G__34241__a,0);
} 
return G__34240__delegate.call(this,s1,s2,sets);};
G__34240.cljs$lang$maxFixedArity = 2;
G__34240.cljs$lang$applyTo = (function (arglist__34242){
var s1 = cljs.core.first(arglist__34242);
arglist__34242 = cljs.core.next(arglist__34242);
var s2 = cljs.core.first(arglist__34242);
var sets = cljs.core.rest(arglist__34242);
return G__34240__delegate(s1,s2,sets);
});
G__34240.cljs$core$IFn$_invoke$arity$variadic = G__34240__delegate;
return G__34240;
})()
;
difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return difference__1.call(this,s1);
case 2:
return difference__2.call(this,s1,s2);
default:
var G__34243 = null;
if (arguments.length > 2) {
var G__34244__i = 0, G__34244__a = new Array(arguments.length -  2);
while (G__34244__i < G__34244__a.length) {G__34244__a[G__34244__i] = arguments[G__34244__i + 2]; ++G__34244__i;}
G__34243 = new cljs.core.IndexedSeq(G__34244__a,0);
}
return difference__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__34243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
difference.cljs$lang$maxFixedArity = 2;
difference.cljs$lang$applyTo = difference__3.cljs$lang$applyTo;
difference.cljs$core$IFn$_invoke$arity$1 = difference__1;
difference.cljs$core$IFn$_invoke$arity$2 = difference__2;
difference.cljs$core$IFn$_invoke$arity$variadic = difference__3.cljs$core$IFn$_invoke$arity$variadic;
return difference;
})()
;
/**
* Returns a set of the elements for which pred is true
*/
clojure.set.select = (function select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k))){
return s;
} else {
return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
* Returns a rel of the elements of xrel with only the keys in ks
*/
clojure.set.project = (function project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__34245_SHARP_){
return cljs.core.select_keys.call(null,p1__34245_SHARP_,ks);
}),xrel));
});
/**
* Returns the map with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename_keys = (function rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__34248){
var vec__34249 = p__34248;
var old = cljs.core.nth.call(null,vec__34249,(0),null);
var new$ = cljs.core.nth.call(null,vec__34249,(1),null);
if(cljs.core.contains_QMARK_.call(null,map,old)){
return cljs.core.assoc.call(null,m,new$,cljs.core.get.call(null,map,old));
} else {
return m;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,map,cljs.core.keys.call(null,kmap)),kmap);
});
/**
* Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename = (function rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__34250_SHARP_){
return clojure.set.rename_keys.call(null,p1__34250_SHARP_,kmap);
}),xrel));
});
/**
* Returns a map of the distinct values of ks in the xrel mapped to a
* set of the maps in xrel with the corresponding values of ks.
*/
clojure.set.index = (function index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik = cljs.core.select_keys.call(null,x,ks);
return cljs.core.assoc.call(null,m,ik,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
* Returns the map with the vals mapped to the keys.
*/
clojure.set.map_invert = (function map_invert(m){
return cljs.core.reduce.call(null,(function (m__$1,p__34253){
var vec__34254 = p__34253;
var k = cljs.core.nth.call(null,vec__34254,(0),null);
var v = cljs.core.nth.call(null,vec__34254,(1),null);
return cljs.core.assoc.call(null,m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
* When passed 2 rels, returns the rel corresponding to the natural
* join. When passed an additional keymap, joins on the corresponding
* keys.
*/
clojure.set.join = (function() {
var join = null;
var join__2 = (function (xrel,yrel){
if((cljs.core.seq.call(null,xrel)) && (cljs.core.seq.call(null,yrel))){
var ks = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__34261 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.call(null,vec__34261,(0),null);
var s = cljs.core.nth.call(null,vec__34261,(1),null);
var idx = clojure.set.index.call(null,r,ks);
return cljs.core.reduce.call(null,((function (ks,vec__34261,r,s,idx){
return (function (ret,x){
var found = idx.call(null,cljs.core.select_keys.call(null,x,ks));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,ks,vec__34261,r,s,idx){
return (function (p1__34255_SHARP_,p2__34256_SHARP_){
return cljs.core.conj.call(null,p1__34255_SHARP_,cljs.core.merge.call(null,p2__34256_SHARP_,x));
});})(found,ks,vec__34261,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__34261,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
var join__3 = (function (xrel,yrel,km){
var vec__34262 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert.call(null,km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.call(null,vec__34262,(0),null);
var s = cljs.core.nth.call(null,vec__34262,(1),null);
var k = cljs.core.nth.call(null,vec__34262,(2),null);
var idx = clojure.set.index.call(null,r,cljs.core.vals.call(null,k));
return cljs.core.reduce.call(null,((function (vec__34262,r,s,k,idx){
return (function (ret,x){
var found = idx.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k)),k));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,vec__34262,r,s,k,idx){
return (function (p1__34257_SHARP_,p2__34258_SHARP_){
return cljs.core.conj.call(null,p1__34257_SHARP_,cljs.core.merge.call(null,p2__34258_SHARP_,x));
});})(found,vec__34262,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__34262,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});
join = function(xrel,yrel,km){
switch(arguments.length){
case 2:
return join__2.call(this,xrel,yrel);
case 3:
return join__3.call(this,xrel,yrel,km);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
join.cljs$core$IFn$_invoke$arity$2 = join__2;
join.cljs$core$IFn$_invoke$arity$3 = join__3;
return join;
})()
;
/**
* Is set1 a subset of set2?
*/
clojure.set.subset_QMARK_ = (function subset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__34263_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__34263_SHARP_);
}),set1));
});
/**
* Is set1 a superset of set2?
*/
clojure.set.superset_QMARK_ = (function superset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__34264_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__34264_SHARP_);
}),set2));
});
