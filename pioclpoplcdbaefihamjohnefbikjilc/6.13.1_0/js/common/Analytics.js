/*! Copyright 2009-2017 Evernote Corporation. All rights reserved. */

var Analytics={PROPERTY_ID:"UA-285778-77"};!function(){function a(){extension.getOption("useStage")||extension.getOption("overrideServiceURL").trim()?Analytics.PROPERTY_ID="UA-285778-78":Analytics.PROPERTY_ID="UA-285778-77"}Analytics.trackEvent=function(b,c,d,e,f,g,h){var i=new XMLHttpRequest;i.open("POST","https://ssl.google-analytics.com/collect"),a();var j="t=event&v=1&tid="+Analytics.PROPERTY_ID+"&ec="+encodeURIComponent(b)+"&ea="+encodeURIComponent(c)+"&cid="+Persistent.get("deviceID")+"&av="+Browser.EVERNOTE_VERSION;d&&(j+="&el="+encodeURIComponent(d)),"number"==typeof e&&(j+="&ev="+e),f?j+="&sc=start":g&&(j+="&sc=end"),SAFARI?j+="&an="+encodeURIComponent("Safari Clipper"):OPERA?j+="&an="+encodeURIComponent("Opera Clipper"):YANDEX?j+="&an="+encodeURIComponent("Yandex Clipper"):EDGE?j+="&an="+encodeURIComponent("Edge Clipper"):FIREFOX?j+="&an="+encodeURIComponent("Firefox Clipper"):j+="&an="+encodeURIComponent("Chrome Clipper");for(var k in h){var l=h[k];j+="&cd"+l.slot+"="+encodeURIComponent(l.value)}i.send(j)},Analytics.trackTiming=function(b,c,d,e){var f=new XMLHttpRequest;f.open("POST","https://ssl.google-analytics.com/collect"),a();var g="t=timing&v=1&tid="+Analytics.PROPERTY_ID+"&cid="+Persistent.get("deviceID");b&&(g+="&utc="+encodeURIComponent(b)),c&&(g+="&utv="+encodeURIComponent(c)),d&&(g+="&utt="+d),e&&(g+="&utl="+encodeURIComponent(e)),f.send(g)},Analytics.CD={SMART_FILING:1,TAG:2,COMMENTS:3,SERVICE_HOST:4,GLOBAL_USER_ID:5,USER_TYPE:6,DEVICE_ID:7,EXPORT_TO_DB:8,BUSINESS_VAULT_ID:9,HIGHLIGHTS:10}}();