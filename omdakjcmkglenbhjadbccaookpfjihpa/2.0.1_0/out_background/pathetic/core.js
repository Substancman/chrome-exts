// Compiled by ClojureScript 0.0-2913 {}
goog.provide('pathetic.core');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('clojure.string');
pathetic.core.separator = "/";
pathetic.core.separator_pattern = cljs.core.re_pattern.call(null,pathetic.core.separator);
/**
* Given two collections, returns a sequence containing the prefix they
* share. Example: (common-prefix [\a \b] [\a \b \c \d]) -> (\a \b)
*/
pathetic.core.common_prefix = (function common_prefix(coll1,coll2){
return cljs.core.map.call(null,cljs.core.first,cljs.core.take_while.call(null,(function (p1__34296_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__34296_SHARP_),cljs.core.second.call(null,p1__34296_SHARP_));
}),cljs.core.map.call(null,(function (p1__34297_SHARP_,p2__34298_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__34297_SHARP_,p2__34298_SHARP_],null));
}),coll1,coll2)));
});
/**
* Returns the elements of interesting-coll that are not part of the common
* prefix with uninteresting-coll.
*/
pathetic.core.unique_suffix = (function unique_suffix(uninteresting_coll,interesting_coll){
var common_parts = pathetic.core.common_prefix.call(null,uninteresting_coll,interesting_coll);
return cljs.core.drop.call(null,cljs.core.count.call(null,common_parts),interesting_coll);
});
pathetic.core.split = (function split(path){
if(cljs.core._EQ_.call(null,path,pathetic.core.separator)){
return cljs.core.PersistentVector.EMPTY;
} else {
return clojure.string.split.call(null,[cljs.core.str(path)].join(''),pathetic.core.separator_pattern);
}
});
/**
* Given a j.io.File or string containing a relative or absolute path,
* returns the corresponding path vector data structure described at
* the top of the file.
* 
* This function does not do any normalization or simplification. However,
* because there is more than one way to write some paths, some simplification
* might happen anyways, such as if the path starts with a (redundant) ".".
*/
pathetic.core.parse_path = (function parse_path(path){
if(cljs.core.empty_QMARK_.call(null,[cljs.core.str(path)].join(''))){
return null;
} else {
var path_pieces = pathetic.core.split.call(null,path);
if(cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,path_pieces))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453)], null);
} else {
var G__34300 = cljs.core.first.call(null,path_pieces);
switch (G__34300) {
case "":
return cljs.core.apply.call(null,cljs.core.vector,new cljs.core.Keyword(null,"root","root",-448657453),cljs.core.rest.call(null,path_pieces));

break;
case ".":
return cljs.core.apply.call(null,cljs.core.vector,new cljs.core.Keyword(null,"cwd","cwd",14056523),cljs.core.rest.call(null,path_pieces));

break;
default:
return cljs.core.apply.call(null,cljs.core.vector,new cljs.core.Keyword(null,"cwd","cwd",14056523),path_pieces);

}
}
}
});
/**
* Given a seq of path elements as created by parse-path, returns a string
* containing the path represented. This function will only
* ever use unix-style path rules, so an absolute path will always start with
* the "/" separator.
* 
* NOTE: It is NOT the goal of this function to perform normalization, it just
* renders what it is given. HOWEVER, that does NOT mean that it is always true
* that (= (render-path (parse-path some-path)) some-path). That is, you may not
* render the exact same string you parsed. This is because the path syntax does
* not have exactly one way to write every path.
*/
pathetic.core.render_path = (function render_path(path_pieces){
var G__34303 = (((cljs.core.first.call(null,path_pieces) instanceof cljs.core.Keyword))?cljs.core.first.call(null,path_pieces).fqn:null);
switch (G__34303) {
case "cwd":
if(cljs.core.next.call(null,path_pieces)){
return clojure.string.join.call(null,pathetic.core.separator,cljs.core.rest.call(null,path_pieces));
} else {
return ".";
}

break;
case "root":
return [cljs.core.str(pathetic.core.separator),cljs.core.str(clojure.string.join.call(null,pathetic.core.separator,cljs.core.rest.call(null,path_pieces)))].join('');

break;
default:
return clojure.string.join.call(null,pathetic.core.separator,path_pieces);

}
});
pathetic.core.starts_with = (function starts_with(s,prefix){
return goog.string.startsWith(s,prefix);
});
/**
* Returns true if the given argument is an absolute path.
*/
pathetic.core.absolute_path_QMARK_ = (function absolute_path_QMARK_(path){
return pathetic.core.starts_with.call(null,path,pathetic.core.separator);
});
/**
* Given a seq of path elements as created by parse-path, returns a new
* seq of path elements, but having gone "up" one directory. That is,
* applies a ".." component to the path.
*/
pathetic.core.up_dir = (function up_dir(path_pieces){
var G__34306 = cljs.core.last.call(null,path_pieces);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",-448657453),G__34306)){
return path_pieces;
} else {
if(cljs.core._EQ_.call(null,"..",G__34306)){
return cljs.core.conj.call(null,path_pieces,"..");
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cwd","cwd",14056523),G__34306)){
return cljs.core.conj.call(null,path_pieces,"..");
} else {
return cljs.core.pop.call(null,path_pieces);

}
}
}
});
/**
* Cleans up a path so that it has no leading/trailing whitespace, and
* removes any removable same-/parent-dir references. path-pieces
* should be a path vector in the format returned by parse-path;
* return value is a vector in the same format.
*/
pathetic.core.normalize_STAR_ = (function normalize_STAR_(path_pieces){
var result = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,path_pieces)], null);
var remaining_path = cljs.core.rest.call(null,path_pieces);
while(true){
var vec__34311 = remaining_path;
var curr = cljs.core.nth.call(null,vec__34311,(0),null);
var remainder = cljs.core.nthnext.call(null,vec__34311,(1));
var pred__34312 = cljs.core._EQ_;
var expr__34313 = curr;
if(cljs.core.truth_(pred__34312.call(null,null,expr__34313))){
return result;
} else {
if(cljs.core.truth_(pred__34312.call(null,"",expr__34313))){
var G__34315 = result;
var G__34316 = remainder;
result = G__34315;
remaining_path = G__34316;
continue;
} else {
if(cljs.core.truth_(pred__34312.call(null,".",expr__34313))){
var G__34317 = result;
var G__34318 = remainder;
result = G__34317;
remaining_path = G__34318;
continue;
} else {
if(cljs.core.truth_(pred__34312.call(null,"..",expr__34313))){
var G__34319 = pathetic.core.up_dir.call(null,result);
var G__34320 = remainder;
result = G__34319;
remaining_path = G__34320;
continue;
} else {
var G__34321 = cljs.core.conj.call(null,result,curr);
var G__34322 = remainder;
result = G__34321;
remaining_path = G__34322;
continue;
}
}
}
}
break;
}
});
/**
* Cleans up a path so that it has no leading/trailing whitespace, and
* removes any unremovable same-/parent-dir references. Takes the path
* argument as a string and returns its result as a string.
*/
pathetic.core.normalize = (function normalize(path){
return pathetic.core.render_path.call(null,pathetic.core.normalize_STAR_.call(null,pathetic.core.parse_path.call(null,path)));
});
/**
* Takes two absolute paths or two relative paths, and returns a relative path
* that indicates the same file system location as dest-path, but
* relative to base-path. Paths should be path vectors, and the return
* value is also a path vector.
*/
pathetic.core.relativize_STAR_ = (function relativize_STAR_(base_path,dest_path){
var common_path = pathetic.core.common_prefix.call(null,base_path,dest_path);
var base_suffix = cljs.core.drop.call(null,cljs.core.count.call(null,common_path),base_path);
var dest_suffix = cljs.core.drop.call(null,cljs.core.count.call(null,common_path),dest_path);
if((common_path == null)){
throw cljs.core.ex_info.call(null,"Paths contain no common components.",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cwd","cwd",14056523)], null),cljs.core.repeat.call(null,cljs.core.count.call(null,base_suffix),".."),(function (){var suffix = cljs.core.PersistentVector.EMPTY;
var remainder = dest_suffix;
while(true){
var curr = cljs.core.first.call(null,remainder);
var pred__34326 = cljs.core._EQ_;
var expr__34327 = curr;
if(cljs.core.truth_(pred__34326.call(null,null,expr__34327))){
return suffix;
} else {
if(cljs.core.truth_(pred__34326.call(null,"",expr__34327))){
var G__34329 = suffix;
var G__34330 = cljs.core.rest.call(null,remainder);
suffix = G__34329;
remainder = G__34330;
continue;
} else {
if(cljs.core.truth_(pred__34326.call(null,".",expr__34327))){
var G__34331 = suffix;
var G__34332 = cljs.core.rest.call(null,remainder);
suffix = G__34331;
remainder = G__34332;
continue;
} else {
if(cljs.core.truth_(pred__34326.call(null,"..",expr__34327))){
var G__34333 = cljs.core.conj.call(null,suffix,"..");
var G__34334 = cljs.core.rest.call(null,remainder);
suffix = G__34333;
remainder = G__34334;
continue;
} else {
var G__34335 = cljs.core.conj.call(null,suffix,curr);
var G__34336 = cljs.core.rest.call(null,remainder);
suffix = G__34335;
remainder = G__34336;
continue;
}
}
}
}
break;
}
})());
});
/**
* Takes two absolute paths or two relative paths, and returns a relative path
* that indicates the same file system location as destination-path, but
* relative to base-path.
*/
pathetic.core.relativize = (function relativize(base_path,dest_path){
var base_path__$1 = pathetic.core.normalize_STAR_.call(null,pathetic.core.parse_path.call(null,base_path));
var dest_path__$1 = pathetic.core.normalize_STAR_.call(null,pathetic.core.parse_path.call(null,dest_path));
return pathetic.core.render_path.call(null,pathetic.core.relativize_STAR_.call(null,base_path__$1,dest_path__$1));
});
/**
* Resolve the other-path against the base-path. If other-path is absolute,
* the result is other-path. If other-path is nil, the result is base-path.
* Otherwise, the result is other-path concatenated onto base-path. Does not
* normalize its output. All inputs and outputs are path vectors.
*/
pathetic.core.resolve_STAR_ = (function resolve_STAR_(base_path,other_path){
if((other_path == null)){
return base_path;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",-448657453),cljs.core.first.call(null,other_path))){
return other_path;
} else {
var base_components = pathetic.core.normalize_STAR_.call(null,base_path);
var other_components = cljs.core.rest.call(null,pathetic.core.normalize_STAR_.call(null,other_path));
return cljs.core.concat.call(null,base_components,other_components);

}
}
});
/**
* Resolve the other-path against the base-path. If other-path is absolute,
* the result is other-path. If other-path is nil, the result is base-path.
* Otherwise, the result is other-path concatenated onto base-path. Does not
* normalize its output. Accepts an optional third argument containing a string
* with the path separator to use.
*/
pathetic.core.resolve = (function resolve(base_path,other_path){
return pathetic.core.render_path.call(null,pathetic.core.resolve_STAR_.call(null,pathetic.core.parse_path.call(null,base_path),pathetic.core.parse_path.call(null,other_path)));
});
pathetic.core.ends_with = (function ends_with(s,suffix){
return goog.string.endsWith(s,suffix);
});
/**
* If the path given does not have a trailing separator, returns a new path
* that has one.
*/
pathetic.core.ensure_trailing_separator = (function ensure_trailing_separator(path){
if(cljs.core.truth_(pathetic.core.ends_with.call(null,path,pathetic.core.separator))){
return path;
} else {
return [cljs.core.str(path),cljs.core.str(pathetic.core.separator)].join('');
}
});
pathetic.core.as_url = (function as_url(url_or_string){
if((url_or_string instanceof goog.Uri)){
return url_or_string;
} else {
return (new goog.Uri(url_or_string));
}
});
/**
* Given a URL or string containing a URL, returns a vector of the three
* component strings: the stuff before the path, the path, and the stuff
* after the path. Useful for destructuring.
*/
pathetic.core.split_url_on_path = (function split_url_on_path(url_or_string){
var url = pathetic.core.as_url.call(null,url_or_string);
var url_string = [cljs.core.str(url)].join('');
var path = url.getPath();
var path_idx = url_string.lastIndexOf(path);
var pre_path = url_string.substring((0),path_idx);
var post_path = url_string.substring((path_idx + cljs.core.count.call(null,path)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre_path,path,post_path], null);
});
/**
* Behaves like normalize on the path part of a URL, but takes a j.n.URL or
* string containing a URL, and returns a string containing the same URL
* instead of just a path. Everything but the path part of the URL is unchanged
* (query, anchor, protocol, etc).
*/
pathetic.core.url_normalize = (function url_normalize(url_or_string){
var vec__34338 = pathetic.core.split_url_on_path.call(null,url_or_string);
var pre_path = cljs.core.nth.call(null,vec__34338,(0),null);
var path = cljs.core.nth.call(null,vec__34338,(1),null);
var post_path = cljs.core.nth.call(null,vec__34338,(2),null);
return [cljs.core.str(pre_path),cljs.core.str(pathetic.core.normalize.call(null,path)),cljs.core.str(post_path)].join('');
});
/**
* Behaves like ensure-trailing-separator on the path part of a URL, but takes
* a j.n.URL or string containing a URL, and returns a string containing the
* same URL instead of just a path. Everything but the path part of the URL is
* unchanged (query, anchor, protocol, etc).
*/
pathetic.core.url_ensure_trailing_separator = (function url_ensure_trailing_separator(url_or_string){
var vec__34340 = pathetic.core.split_url_on_path.call(null,url_or_string);
var pre_path = cljs.core.nth.call(null,vec__34340,(0),null);
var path = cljs.core.nth.call(null,vec__34340,(1),null);
var post_path = cljs.core.nth.call(null,vec__34340,(2),null);
return [cljs.core.str(pre_path),cljs.core.str(pathetic.core.ensure_trailing_separator.call(null,path)),cljs.core.str(post_path)].join('');
});
