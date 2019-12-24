/**
 * A complete cookies reader/writer framework with full unicode support.
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie/Simple_document.cookie_framework
 */
var docCookies = {
    getItem: function (sKey) {
        if (!sKey) { return null; }
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
        var sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                    /*
                    Note: Despite officially defined in RFC 6265, the use of `max-age` is not compatible with any
                    version of Internet Explorer, Edge and some mobile browsers. Therefore passing a number to
                    the end parameter might not work as expected. A possible solution might be to convert the the
                    relative time to an absolute time. For instance, replacing the previous line with:
                    */
                    /*
                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; expires=" + (new Date(vEnd * 1e3 + Date.now())).toUTCString();
                    */
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
        return true;
    },
    removeItem: function (sKey, sPath, sDomain) {
        if (!this.hasItem(sKey)) { return false; }
        document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
        return true;
    },
    hasItem: function (sKey) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    },
    keys: function () {
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
        return aKeys;
    }
};

var cookieProxy = new Proxy(docCookies, {
    get: function (oTarget, sKey) {
        return oTarget[sKey] || oTarget.getItem(sKey) || undefined;
    },
    set: function (oTarget, sKey, vValue) {
        if (sKey in oTarget) { return false; }
        return oTarget.setItem(sKey, vValue);
    },
    deleteProperty: function (oTarget, sKey) {
        if (sKey in oTarget) { return false; }
        return oTarget.removeItem(sKey);
    },
    enumerate: function (oTarget, sKey) {
        return oTarget.keys();
    },
    ownKeys: function (oTarget, sKey) {
        return oTarget.keys();
    },
    has: function (oTarget, sKey) {
        return sKey in oTarget || oTarget.hasItem(sKey);
    },
    defineProperty: function (oTarget, sKey, oDesc) {
        if (oDesc && 'value' in oDesc) { oTarget.setItem(sKey, oDesc.value); }
        return oTarget;
    },
    getOwnPropertyDescriptor: function (oTarget, sKey) {
        var vValue = oTarget.getItem(sKey);
        return vValue ? {
            value: vValue,
            writable: true,
            enumerable: true,
            configurable: true
        } : undefined;
    },
});
cookieProxy.authCookie = 'MTU3NjcxNzgyNzk2NjE0Mzgz';
cookieProxy.sessionId = 'TVRVM05qY3hOemd5TnprMk5qRTBNemd6';

console.log(document.cookie);

for (const key in cookieProxy) {
    console.log(`key :${key}, value:${cookieProxy[key]}`)
}

//bad practice
let handler = {
    get() {
        console.log(`get called`)
        return Object.assign({}, ['get', 'post', 'put'].reduce((obj, method) => Object.assign(obj, { [method]: console.log }), {}))
    }
}
var proxy = new Proxy({}, handler);
proxy.api.get(`api/users`) // every time property access has been done, handler get will be executed again and again.
