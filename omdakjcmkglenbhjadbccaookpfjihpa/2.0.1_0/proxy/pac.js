const DIRECT = "DIRECT";

var settings = { enabled : false, proxyString : "" };

function dnsDomainIs(host, domain) {
    return (host.length >= domain.length &&
            host.substring(host.length - domain.length) == domain);
}

function shExpMatch(url, pattern) {
   pattern = pattern.replace(/\\./g, '\\\\.');
   pattern = pattern.replace(/\\*/g, '.*');
   pattern = pattern.replace(/\\?/g, '.');
   var newRe = new RegExp('^'+pattern+'$');
   return newRe.test(url);
}

browser.runtime.onMessage.addListener((msg, sender) => {
    if (msg.command === "setProxy") {
        settings.enabled = msg.enabled;
        if (msg.enabled === true) {
            var oldProxyString = settings.proxyString;
            settings.pacDate = msg.pacDate;
            settings.proxyString = msg.proxyString;
            if (oldProxyString !== settings.proxyString) {
                browser.runtime.sendMessage({ command : "proxyChanged" });
            }
        }
    }
});

function FindProxyForURL(url, host) {
    if (!settings.enabled) {
        return DIRECT;
    }
    var diff = new Date().getTime() - settings.pacDate;
    var seconds = diff / 1000;
    if (seconds > 4) {
        return DIRECT;
    }
    if (dnsDomainIs(host, 'api.tunnelbear.com')) {
        return DIRECT;
    }
    if (dnsDomainIs(host, 'localhost')) {
        return DIRECT;
    }
    if (shExpMatch(host, '127.0.0.1')) {
       return DIRECT;
    }
    if (settings.enabled) {
        return settings.proxyString + DIRECT;
    }
    return DIRECT;
}
