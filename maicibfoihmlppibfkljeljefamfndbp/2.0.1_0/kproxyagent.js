var _self=this;_self.user=null;_self.currentKProxyServer=null;_self.currentProxyAddress=null;_self.currentProxyPort=null;_self.extensionId=null;_self.mac="";_self.check407=false;var bStarted=false;function str2ab(str){var buf= new ArrayBuffer(str.length*2);var bufView= new Uint8Array(buf);for(var i=0;i<str.length;i++){bufView[i]=str.charCodeAt(i)};return buf}var INIT_PORT=5555;var END_PORT=5600;var socketId;var listenPort=INIT_PORT;function startServer(callback){if(bStarted){callback();return};listenPort=INIT_PORT;bStarted=true;chrome.socket.create("\x74\x63\x70",null,function(createInfo){socketId=createInfo.socketId;try{startListening(callback)}catch(error){listenPort++;if(listenPort>END_PORT){callback(true)}else {startListening(callback)}}})}function startListening(callback){chrome.socket.listen(socketId,"\x30\x2E\x30\x2E\x30\x2E\x30",listenPort,50,function(result){if(chrome.runtime.lastError){if(listenPort==0){callback(true)}else {listenPort=0;startListening(callback)}}else {chrome.socket.accept(socketId,function(acceptInfo){onAccept(acceptInfo)});chrome.socket.getInfo(socketId,function(socket){if(socket.localPort){listenPort=socket.localPort};callback()})}})}function stopServer(){bStarted=false;try{chrome.socket.destroy(socketId)}catch(error){}}function onAccept(acceptInfo){chrome.socket.accept(socketId,function(acceptInfo){onAccept(acceptInfo)});var acceptId=acceptInfo.socketId;if(!acceptId){return};var bridge= new KProxyAgentBridge(acceptId,this);bridge.run()}chrome.app.runtime.onLaunched.addListener(function(){chrome.runtime.onMessageExternal.addListener(function(request,sender,sendResponse){if(request.checkReady){_self.extensionId=request.checkReady;sendResponse({ready:true})}else {if(request.changeKProxyServer){_self.currentKProxyServer=request.changeKProxyServer;sendResponse({ready:true})}else {if(request.changeLoginPass){_self.user=request.changeLoginPass;sendResponse({ready:true})}else {if(request.changeProxy){_self.currentProxyAddress=request.proxy;_self.currentProxyPort=parseInt(request.port);sendResponse({ready:true})}else {if(request.check407){_self.check407=true;sendResponse({ready:true})}else {if(request.stop){stopServer();ConnectionPool.stop();sendResponse({ready:true})}else {if(request.start){startServer(function(bError){sendResponse({ready:true,listenPort:listenPort})});return true}else {sendResponse({ready:false})}}}}}}}});chrome.system.network.getNetworkInterfaces(function(data){if(data.length){_self.mac=data[0].name}})});_self.sendMessageToExtension=function(message){if(_self.extensionId!=null){chrome.runtime.sendMessage(_self.extensionId,message,function(response){})}};_self.notify407Pass=function(){_self.check407=false;_self.sendMessageToExtension({pass407:true})}