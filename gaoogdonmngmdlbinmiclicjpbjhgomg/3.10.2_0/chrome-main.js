(function() {class Main{constructor(){this._appWindow=null,this._appWindowState="closed",this._messageCounter=0,this._messageRequestCallbacks={},this._messageResponseCallbacks={},this._retainedLaunchEntries=[],chrome.app.runtime.onLaunched.addListener((a)=>this._onLaunched(a)),window.addEventListener("message",(a)=>this._onMessage(a)),this.addMessageListener("ready",(a,b)=>{this._appWindowState="ready",b(this._retainedLaunchEntries)})}_onLaunched(a){let b=a.items?a.items.map((a)=>chrome.fileSystem.retainEntry(a.entry)):null;if("ready"===this._appWindowState)this._appWindow.focus(),this._appWindow.show(),b&&0<b.length&&this.postMessage("openTabs",b);else if("opening"===this._appWindowState)b&&(this._retainedLaunchEntries=b);else if("closed"===this._appWindowState){b&&(this._retainedLaunchEntries=b);{this._appWindowState="opening";let a,b;chrome.app.window.create("chrome-app.html",{id:"master",resizable:!0,hidden:!1,frame:{type:"none"},outerBounds:{width:800,height:550,minWidth:100,minHeight:440}},(c)=>{this._appWindow=c,this._appWindow.contentWindow.addEventListener("load",a=()=>{this._appWindow.contentWindow.removeEventListener("load",a),this._appWindow.focus(),this._appWindow.show()}),this._appWindow.onClosed.addListener(b=()=>{this._appWindow.onClosed.removeListener(b),this._appWindow.contentWindow.removeEventListener("load",a),this._appWindow=null,this._appWindowState="closed",this._retainedLaunchEntries=[]})})}}}_onMessage(a){if(this._appWindow&&a.source===this._appWindow.contentWindow){let{channel:b,id:c,name:d,arg:e}=a.data;"request"===b?this._messageRequestCallbacks[d]&&this._messageRequestCallbacks[d].forEach((a)=>{a(e,(a)=>{this._appWindow.contentWindow.postMessage({channel:"response",id:c,name:d,arg:a},"*")})}):"response"===b&&this._messageResponseCallbacks[c]&&(this._messageResponseCallbacks[c](e),delete this._messageResponseCallbacks[c])}}postMessage(a,b=null,c=null){if(this._appWindow){let d=this._messageCounter++,e={channel:"request",id:d,name:a,arg:b};c&&(this._messageResponseCallbacks[e.id]=c),this._appWindow.contentWindow.postMessage(e,"*")}}addMessageListener(a,b){this._messageRequestCallbacks[a]||(this._messageRequestCallbacks[a]=[]),this._messageRequestCallbacks[a].push(b)}removeMessageListener(a,b){this._messageRequestCallbacks[a]&&(this._messageRequestCallbacks[a]=this._messageRequestCallbacks[a].filter((a)=>a!==b))}}new Main;})()