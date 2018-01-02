// For firefox
var currentProxy = "DIRECT";
var bypassList = ['localhost', '127.0.0.1', 'paypal.com', "paypalobjects.com"];



browser.runtime.sendMessage("init");

browser.runtime.onMessage.addListener(function(message) {
	browser.runtime.sendMessage("setting currentProxy " + message);	
	currentProxy = message;
});

browser.runtime.sendMessage("end init");

function FindProxyForURL(url, host) 
{
	for (var i = 0; i < bypassList.length; i++)
	{
		if (host.endsWith(bypassList[i]))			
			return "DIRECT";
	}
	
	browser.runtime.sendMessage("return current proxy for " + url + " " + host + " " + currentProxy);
	
	return currentProxy;
}