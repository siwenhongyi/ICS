!(function() {
    'use strict'
    var e = location,
        t = document,
        r = function(r, n, o) {;
            (void 0 === n && (n = 1),
                void 0 === o && (o = 1),
                0 >= o || Math.random() < o) &&
            (function(e, t) {
                var r = []
                for (var n in e) r.push(n + '=' + encodeURIComponent(e[n]))
                new Image().src = t + r.join('&')
            })({
                    code: n,
                    msg: r + '',
                    pid: 'spl',
                    page: e.href.split(/[#?]/)[0],
                    query: e.search.substr(1),
                    hash: e.hash,
                    referrer: t.referrer,
                    title: t.title,
                    ua: navigator.userAgent,
                },
                '//127.0.0.1:8000/fsp.1.1?'
                //'//gm.mmstat.com/fsp.1.1?'
            )
        }
    var n = document,
        o = location.hostname
    try {
        var a = [],
            i = function(e, t, r) {
                var o = new Date()
                o.setTime(o.getTime() + 864e5)
                var i =
                    'xlly_s=' +
                    e +
                    ';maxAge=86400;expires=' +
                    o.toUTCString() +
                    ';path=/;domain=' +
                    t +
                    ';'
                'true' === r && (i += 'Secure;SameSite=None'), a.push(i), (n.cookie = i)
            },
            s = function(e, t) {
                var r,
                    n = o,
                    a = 'string' == typeof(r = n) ? r.split('.') : r,
                    s = a.length > 5 ? 5 : a.length
                if (1 === s || 2 === s) return i(e, n, t)
                n = a.pop()
                for (
                    var u = 2; s > u && ((n = a.pop() + '.' + n), i(e, n, t), c() !== e); u++
                );
            },
            c = function() {
                var e = n.cookie.match(/xlly_s=([^;]+)/)
                return e && e[1]
            }
        s('1', 'true'), c() || s('2', 'false'), c() || r('nw' + a.join('__'), 13)
    } catch (u) {
        console.log('error')
            //r(u.message, 12)
    }
})()