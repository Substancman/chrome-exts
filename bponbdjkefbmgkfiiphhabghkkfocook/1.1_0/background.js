chrome.app.runtime.onLaunched.addListener(function(){var c=chrome.app.window.getAll().map(function(a){return a.id}),b=0,a;do a="client-"+b,b++;while(-1<c.indexOf(a));chrome.app.window.create("index.html",{innerBounds:{minWidth:640,minHeight:400},state:"maximized",id:a})});