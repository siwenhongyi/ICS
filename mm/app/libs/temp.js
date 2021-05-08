/*! 2021-04-27 14:40:38 v8.15.5 */ !(function(e) {
    function i(n) {
        if (o[n]) return o[n].exports
        var r = (o[n] = { exports: {}, id: n, loaded: !1 })
        return e[n].call(r.exports, r, r.exports, i), (r.loaded = !0), r.exports
    }
    var o = {}
    return (i.m = e), (i.c = o), (i.p = ''), i(0)
})([
    function(e, i) {
        'use strict'
        var o = window,
            n = document!(function() {
                var e = 2,
                    r = 'ali_analytics'
                if (o[r] && o[r].ua && e <= o[r].ua.version)
                    return void(i.info = o[r].ua)
                var t,
                    a,
                    d,
                    s,
                    c,
                    u,
                    h,
                    l,
                    m,
                    b,
                    f,
                    v,
                    p,
                    w,
                    g,
                    x,
                    z,
                    O = o.navigator,
                    k = O.appVersion,
                    T = (O && O.userAgent) || '',
                    y = function(e) {
                        var i = 0
                        return parseFloat(
                            e.replace(/\./g, function() {
                                return 0 === i++ ? '.' : ''
                            })
                        )
                    },
                    _ = function(e, i) {
                        var o, n;
                        (i[(o = 'trident')] = 0.1),
                        (n = e.match(/Trident\/([\d.]*)/)) && n[1] && (i[o] = y(n[1])),
                            (i.core = o)
                    },
                    N = function(e) {
                        var i, o
                        return (i = e.match(
                                /MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/
                            )) && (o = i[1] || i[2]) ?
                            y(o) :
                            0
                    },
                    P = function(e) {
                        return e || 'other'
                    },
                    M = function(e) {
                        function i() {
                            for (
                                var i = [
                                        ['Windows NT 5.1', 'winXP'],
                                        ['Windows NT 6.1', 'win7'],
                                        ['Windows NT 6.0', 'winVista'],
                                        ['Windows NT 6.2', 'win8'],
                                        ['Windows NT 10.0', 'win10'],
                                        ['iPad', 'ios'],
                                        ['iPhone;', 'ios'],
                                        ['iPod', 'ios'],
                                        ['Macintosh', 'mac'],
                                        ['Android', 'android'],
                                        ['Ubuntu', 'ubuntu'],
                                        ['Linux', 'linux'],
                                        ['Windows NT 5.2', 'win2003'],
                                        ['Windows NT 5.0', 'win2000'],
                                        ['Windows', 'winOther'],
                                        ['rhino', 'rhino'],
                                    ],
                                    o = 0,
                                    n = i.length; o < n;
                                ++o
                            )
                                if (e.indexOf(i[o][0]) !== -1) return i[o][1]
                            return 'other'
                        }

                        function r(e, i, n, r) {
                            var t,
                                a = o.navigator.mimeTypes
                            try {
                                for (t in a)
                                    if (a.hasOwnProperty(t) && a[t][e] == i) {
                                        if (void 0 !== n && r.test(a[t][n])) return !0
                                        if (void 0 === n) return !0
                                    }
                                return !1
                            } catch (e) {
                                return !1
                            }
                        }
                        var t,
                            a,
                            d,
                            s,
                            c,
                            u,
                            h,
                            l = '',
                            m = l,
                            b = l,
                            f = [6, 9],
                            v = '{{version}}',
                            p = '<!--[if IE ' + v + ']><s></s><![endif]-->',
                            w = n && n.createElement('div'),
                            g = [],
                            x = {
                                webkit: void 0,
                                edge: void 0,
                                trident: void 0,
                                gecko: void 0,
                                presto: void 0,
                                chrome: void 0,
                                safari: void 0,
                                firefox: void 0,
                                ie: void 0,
                                ieMode: void 0,
                                opera: void 0,
                                mobile: void 0,
                                core: void 0,
                                shell: void 0,
                                phantomjs: void 0,
                                os: void 0,
                                ipad: void 0,
                                iphone: void 0,
                                ipod: void 0,
                                ios: void 0,
                                android: void 0,
                                nodejs: void 0,
                                extraName: void 0,
                                extraVersion: void 0,
                            }
                        if (
                            (w &&
                                w.getElementsByTagName &&
                                ((w.innerHTML = p.replace(v, '')),
                                    (g = w.getElementsByTagName('s'))),
                                g.length > 0)
                        ) {
                            for (_(e, x), s = f[0], c = f[1]; s <= c; s++)
                                if (((w.innerHTML = p.replace(v, s)), g.length > 0)) {
                                    x[(b = 'ie')] = s
                                    break
                                }!x.ie && (d = N(e)) && (x[(b = 'ie')] = d)
                        } else
                            ((a = e.match(/AppleWebKit\/*\s*([\d.]*)/i)) ||
                                (a = e.match(/Safari\/([\d.]*)/))) &&
                            a[1] ?
                            ((x[(m = 'webkit')] = y(a[1])),
                                (a = e.match(/OPR\/(\d+\.\d+)/)) && a[1] ?
                                (x[(b = 'opera')] = y(a[1])) :
                                (a = e.match(/Chrome\/([\d.]*)/)) && a[1] ?
                                (x[(b = 'chrome')] = y(a[1])) :
                                (a = e.match(/\/([\d.]*) Safari/)) && a[1] ?
                                (x[(b = 'safari')] = y(a[1])) :
                                (x.safari = x.webkit),
                                (a = e.match(/Edge\/([\d.]*)/)) &&
                                a[1] &&
                                ((m = b = 'edge'), (x[m] = y(a[1]))),
                                / Mobile\//.test(e) && e.match(/iPad|iPod|iPhone/) ?
                                ((x.mobile = 'apple'),
                                    (a = e.match(/OS ([^\s]*)/)),
                                    a && a[1] && (x.ios = y(a[1].replace('_', '.'))),
                                    (t = 'ios'),
                                    (a = e.match(/iPad|iPod|iPhone/)),
                                    a && a[0] && (x[a[0].toLowerCase()] = x.ios)) :
                                / Android/i.test(e) ?
                                (/Mobile/.test(e) && (t = x.mobile = 'android'),
                                    (a = e.match(/Android ([^\s]*);/)),
                                    a && a[1] && (x.android = y(a[1]))) :
                                (a = e.match(
                                    /NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/
                                )) && (x.mobile = a[0].toLowerCase()),
                                (a = e.match(/PhantomJS\/([^\s]*)/)) &&
                                a[1] &&
                                (x.phantomjs = y(a[1]))) :
                            (a = e.match(/Presto\/([\d.]*)/)) && a[1] ?
                            ((x[(m = 'presto')] = y(a[1])),
                                (a = e.match(/Opera\/([\d.]*)/)) &&
                                a[1] &&
                                ((x[(b = 'opera')] = y(a[1])),
                                    (a = e.match(/Opera\/.* Version\/([\d.]*)/)) &&
                                    a[1] &&
                                    (x[b] = y(a[1])),
                                    (a = e.match(/Opera Mini[^;]*/)) && a ?
                                    (x.mobile = a[0].toLowerCase()) :
                                    (a = e.match(/Opera Mobi[^;]*/)) &&
                                    a &&
                                    (x.mobile = a[0]))) :
                            (d = N(e)) ?
                            ((x[(b = 'ie')] = d), _(e, x)) :
                            (a = e.match(/Gecko/)) &&
                            ((x[(m = 'gecko')] = 0.1),
                                (a = e.match(/rv:([\d.]*)/)) &&
                                a[1] &&
                                ((x[m] = y(a[1])),
                                    /Mobile|Tablet/.test(e) && (x.mobile = 'firefox')),
                                (a = e.match(/Firefox\/([\d.]*)/)) &&
                                a[1] &&
                                (x[(b = 'firefox')] = y(a[1])))
                        t || (t = i())
                        var z, O, T
                        if (!r('type', 'application/vnd.chromium.remoting-viewer')) {;
                            (z = 'scoped' in n.createElement('style')), (T = 'v8Locale' in o)
                            try {
                                O = o.external || void 0
                            } catch (e) {}
                            if ((a = e.match(/360SE/))) u = '360'
                            else if ((a = e.match(/SE\s([\d.]*)/)) || (O && 'SEVersion' in O))
                                (u = 'sougou'), (h = y(a[1]) || 0.1)
                            else if ((a = e.match(/Maxthon(?:\/)+([\d.]*)/)) && O) {
                                u = 'maxthon'
                                try {
                                    h = y(O.max_version || a[1])
                                } catch (e) {
                                    h = 0.1
                                }
                            } else
                                z && T ?
                                (u = '360se') :
                                z ||
                                T ||
                                !/Gecko\)\s+Chrome/.test(k) ||
                                x.opera ||
                                x.edge ||
                                (u = '360ee')
                        };
                        (a = e.match(/TencentTraveler\s([\d.]*)|QQBrowser\/([\d.]*)/)) ?
                        ((u = 'tt'), (h = y(a[2]) || 0.1)) :
                        (a = e.match(/LBBROWSER/)) || (O && 'LiebaoGetVersion' in O) ?
                        (u = 'liebao') :
                        (a = e.match(/TheWorld/)) ?
                        ((u = 'theworld'), (h = 3)) :
                        (a = e.match(/TaoBrowser\/([\d.]*)/)) ?
                        ((u = 'taobao'), (h = y(a[1]) || 0.1)) :
                        (a = e.match(/UCBrowser\/([\d.]*)/)) &&
                        ((u = 'uc'), (h = y(a[1]) || 0.1)),
                        (x.os = t),
                        (x.core = x.core || m),
                        (x.shell = b),
                        (x.ieMode = (x.ie && n.documentMode) || x.ie),
                        (x.extraName = u),
                        (x.extraVersion = h)
                        var P = o.screen.width,
                            M = o.screen.height
                        return (x.resolution = P + 'x' + M), x
                    },
                    S = function(e) {
                        function i(e) {
                            return Object.prototype.toString.call(e)
                        }

                        function o(e, o, n) {
                            if (('[object Function]' == i(o) && (o = o(n)), !o)) return null
                            var r = { name: e, version: '' },
                                t = i(o)
                            if (o === !0) return r
                            if ('[object String]' === t) {
                                if (n.indexOf(o) !== -1) return r
                            } else if (o.exec) {
                                var a = o.exec(n)
                                if (a)
                                    return (
                                        a.length >= 2 && a[1] ?
                                        (r.version = a[1].replace(/_/g, '.')) :
                                        (r.version = ''),
                                        r
                                    )
                            }
                        }
                        var n = { name: 'other', version: '' }
                        e = (e || '').toLowerCase()
                        for (
                            var r = [
                                    [
                                        'nokia',
                                        function(e) {
                                            return e.indexOf('nokia ') !== -1 ?
                                                /\bnokia ([0-9]+)?/ :
                                                /\bnokia([a-z0-9]+)?/
                                        },
                                    ],
                                    [
                                        'samsung',
                                        function(e) {
                                            return e.indexOf('samsung') !== -1 ?
                                                /\bsamsung(?:[ \-](?:sgh|gt|sm))?-([a-z0-9]+)/ :
                                                /\b(?:sgh|sch|gt|sm)-([a-z0-9]+)/
                                        },
                                    ],
                                    [
                                        'wp',
                                        function(e) {
                                            return (
                                                e.indexOf('windows phone ') !== -1 ||
                                                e.indexOf('xblwp') !== -1 ||
                                                e.indexOf('zunewp') !== -1 ||
                                                e.indexOf('windows ce') !== -1
                                            )
                                        },
                                    ],
                                    ['pc', 'windows'],
                                    ['ipad', 'ipad'],
                                    ['ipod', 'ipod'],
                                    ['iphone', /\biphone\b|\biph(\d)/],
                                    ['mac', 'macintosh'],
                                    ['mi', /\bmi[ \-]?([a-z0-9 ]+(?= build|\)))/],
                                    ['hongmi', /\bhm[ \-]?([a-z0-9]+)/],
                                    ['aliyun', /\baliyunos\b(?:[\-](\d+))?/],
                                    [
                                        'meizu',
                                        function(e) {
                                            return e.indexOf('meizu') >= 0 ?
                                                /\bmeizu[\/ ]([a-z0-9]+)\b/ :
                                                /\bm([0-9x]{1,3})\b/
                                        },
                                    ],
                                    ['nexus', /\bnexus ([0-9s.]+)/],
                                    [
                                        'huawei',
                                        function(e) {
                                            var i = /\bmediapad (.+?)(?= build\/huaweimediapad\b)/
                                            return e.indexOf('huawei-huawei') !== -1 ?
                                                /\bhuawei\-huawei\-([a-z0-9\-]+)/ :
                                                i.test(e) ?
                                                i :
                                                /\bhuawei[ _\-]?([a-z0-9]+)/
                                        },
                                    ],
                                    [
                                        'lenovo',
                                        function(e) {
                                            return e.indexOf('lenovo-lenovo') !== -1 ?
                                                /\blenovo\-lenovo[ \-]([a-z0-9]+)/ :
                                                /\blenovo[ \-]?([a-z0-9]+)/
                                        },
                                    ],
                                    [
                                        'zte',
                                        function(e) {
                                            return /\bzte\-[tu]/.test(e) ?
                                                /\bzte-[tu][ _\-]?([a-su-z0-9\+]+)/ :
                                                /\bzte[ _\-]?([a-su-z0-9\+]+)/
                                        },
                                    ],
                                    ['vivo', /\bvivo(?: ([a-z0-9]+))?/],
                                    [
                                        'htc',
                                        function(e) {
                                            return /\bhtc[a-z0-9 _\-]+(?= build\b)/.test(e) ?
                                                /\bhtc[ _\-]?([a-z0-9 ]+(?= build))/ :
                                                /\bhtc[ _\-]?([a-z0-9 ]+)/
                                        },
                                    ],
                                    ['oppo', /\boppo[_]([a-z0-9]+)/],
                                    ['konka', /\bkonka[_\-]([a-z0-9]+)/],
                                    ['sonyericsson', /\bmt([a-z0-9]+)/],
                                    ['coolpad', /\bcoolpad[_ ]?([a-z0-9]+)/],
                                    ['lg', /\blg[\-]([a-z0-9]+)/],
                                    ['android', /\bandroid\b|\badr\b/],
                                    [
                                        'blackberry',
                                        function(e) {
                                            return e.indexOf('blackberry') >= 0 ?
                                                /\bblackberry\s?(\d+)/ :
                                                'bb10'
                                        },
                                    ],
                                ],
                                t = 0; t < r.length; t++
                        ) {
                            var a = r[t][0],
                                d = r[t][1],
                                s = o(a, d, e)
                            if (s) {
                                n = s
                                break
                            }
                        }
                        return n
                    },
                    E = 1
                try {;
                    (t = M(T)),
                    (a = S(T)),
                    (d = t.os),
                    (s = t.shell),
                    (c = t.core),
                    (u = t.resolution),
                    (h = t.extraName),
                    (l = t.extraVersion),
                    (m = a.name),
                    (b = a.version),
                    (v = d ? d + (t[d] ? t[d] : '') : ''),
                    (p = s ? s + parseInt(t[s]) : ''),
                    (w = c),
                    (g = u),
                    (x = h ? h + (l ? parseInt(l) : '') : ''),
                    (z = m + b)
                } catch (e) {};
                (f = { p: E, o: P(v), b: P(p), w: P(w), s: g, mx: x, ism: z }),
                o[r] || (o[r] = {}),
                    o[r].ua || (o[r].ua = {}),
                    o.goldlog || (o.goldlog = {}),
                    (i.info = o[r].ua = goldlog._aplus_client = { version: e, ua_info: f })
            })()
    },
]) /*! 2017-10-31 20:15:15 v0.2.4 */ !(function(t) {
    function e(o) {
        if (n[o]) return n[o].exports
        var i = (n[o] = { exports: {}, id: o, loaded: !1 })
        return t[o].call(i.exports, i, i.exports, e), (i.loaded = !0), i.exports
    }
    var n = {}
    return (e.m = t), (e.c = n), (e.p = ''), e(0)
})([
    function(t, e, n) {
        'use strict'!(function() {
            var t = window.goldlog || (window.goldlog = {})
            t._aplus_cplugin_utilkit ||
                ((t._aplus_cplugin_utilkit = { status: 'init' }),
                    n(1).init(t),
                    (t._aplus_cplugin_utilkit.status = 'complete'))
        })()
    },
    function(t, e, n) {
        'use strict'
        var o = n(2),
            i = n(4)
        e.init = function(t) {;
            (t.setCookie = o.setCookie), (t.getCookie = o.getCookie), (t.on = i.on)
        }
    },
    function(t, e, n) {
        'use strict'
        var o = document,
            i = n(3),
            a = function(t) {
                var e = new RegExp('(?:^|;)\\s*' + t + '=([^;]+)'),
                    n = o.cookie.match(e)
                return n ? n[1] : ''
            }
        e.getCookie = a
        var r = function(t, e, n) {
            n || (n = {})
            var i = new Date()
            return (
                n.expires && ('number' == typeof n.expires || n.expires.toUTCString) ?
                ('number' == typeof n.expires ?
                    i.setTime(i.getTime() + 24 * n.expires * 60 * 60 * 1e3) :
                    (i = n.expires),
                    (e += '; expires=' + i.toUTCString())) :
                'session' !== n.expires &&
                (i.setTime(i.getTime() + 63072e7),
                    (e += '; expires=' + i.toUTCString())),
                (e += '; path=' + (n.path ? n.path : '/')),
                (e += '; domain=' + n.domain),
                (o.cookie = t + '=' + e),
                a(t)
            )
        }
        e.setCookie = function(t, e, n) {
            try {
                if ((n || (n = {}), n.domain)) r(t, e, n)
                else
                    for (var o = i.getDomains(), a = 0; a < o.length;)
                        (n.domain = o[a]), r(t, e, n) ? (a = o.length) : a++
            } catch (t) {}
        }
    },
    function(t, e) {
        'use strict'
        e.getDomains = function() {
            var t = []
            try {
                for (
                    var e = location.hostname, n = e.split('.'), o = 2; o <= n.length;

                )
                    t.push(n.slice(n.length - o).join('.')), o++
            } catch (t) {}
            return t
        }
    },
    function(t, e) {
        'use strict'
        var n = window,
            o = document,
            i = !!o.attachEvent,
            a = 'attachEvent',
            r = 'addEventListener',
            c = i ? a : r,
            u = function(t, e) {
                var n = goldlog._$ || {},
                    o = n.meta_info || {},
                    i = o.aplus_ctap || {}
                if (i && 'function' == typeof i.on) i.on(t, e)
                else {
                    var a = 'ontouchend' in document.createElement('div'),
                        r = a ? 'touchstart' : 'mousedown'
                    s(t, r, e)
                }
            },
            s = function(t, e, o) {
                return 'tap' === e ?
                    void u(t, o) :
                    void t[c](
                        (i ? 'on' : '') + e,
                        function(t) {
                            t = t || n.event
                            var e = t.target || t.srcElement 'function' == typeof o && o(t, e)
                        }, !1
                    )
            }
        e.on = s
        var d = function(t) {
                try {
                    o.documentElement.doScroll('left')
                } catch (e) {
                    return void setTimeout(function() {
                        d(t)
                    }, 1)
                }
                t()
            },
            l = function(t) {
                var e = 0,
                    n = function() {
                        0 === e && t(), e++
                    }
                'complete' === o.readyState && n()
                var i
                if (o.addEventListener)
                    (i = function() {
                        o.removeEventListener('DOMContentLoaded', i, !1), n()
                    }),
                    o.addEventListener('DOMContentLoaded', i, !1),
                    window.addEventListener('load', n, !1)
                else if (o.attachEvent) {;
                    (i = function() {
                        'complete' === o.readyState &&
                            (o.detachEvent('onreadystatechange', i), n())
                    }),
                    o.attachEvent('onreadystatechange', i),
                        window.attachEvent('onload', n)
                    var a = !1
                    try {
                        a = null === window.frameElement
                    } catch (t) {}
                    o.documentElement.doScroll && a && d(n)
                }
            };
        (e.DOMReady = function(t) {
            l(t)
        }),
        (e.onload = function(t) {
            'complete' === o.readyState ? t() : s(n, 'load', t)
        })
    },
]) !(function(o) {
    function t(r) {
        if (e[r]) return e[r].exports
        var a = (e[r] = { exports: {}, id: r, loaded: !1 })
        return o[r].call(a.exports, a, a.exports, t), (a.loaded = !0), a.exports
    }
    var e = {}
    return (t.m = o), (t.c = e), (t.p = ''), t(0)
})([
    function(o, t, e) {
        'use strict'!(function() {
            var o = window.goldlog || (window.goldlog = {})
            o._aplus_cplugin_m || (o._aplus_cplugin_m = e(1).run())
        })()
    },
    function(o, t, e) {
        'use strict'
        var r = e(2),
            a = e(3),
            n = e(4),
            s = navigator.sendBeacon ? 'post' : 'get'
        e(5).run(),
            (t.run = function() {
                return {
                    status: 'complete',
                    do_tracker_jserror: function(o) {
                        try {
                            var t = new n({
                                    logkey: o ? o.logkey : '',
                                    ratio: o && 'number' == typeof o.ratio && o.ratio > 0 ?
                                        o.ratio :
                                        r.jsErrorRecordRatio,
                                }),
                                e = [
                                    'Message: ' + o.message,
                                    'Error object: ' + o.error,
                                    'Url: ' + location.href,
                                ].join(' - '),
                                c = goldlog.spm_ab || [],
                                i = location.hostname + location.pathname
                            t.run({
                                code: 110,
                                page: i,
                                msg: 'record_jserror_by' + s + '_' + o.message,
                                spm_a: c[0],
                                spm_b: c[1],
                                c1: e,
                                c2: o.filename,
                                c3: location.protocol + '//' + i,
                                c4: goldlog.pvid || '',
                                c5: o.logid || '',
                            })
                        } catch (o) {
                            a.logger({ msg: o })
                        }
                    },
                    do_tracker_lostpv: function(o) {
                        var t = !1
                        try {
                            if (o && o.page) {
                                var e = o.spm_ab ? o.spm_ab.split('.') : [],
                                    c = 'record_lostpv_by' + s + '_' + o.msg,
                                    i = new n({ ratio: o.ratio || r.lostPvRecordRatio })
                                i.run({
                                        code: 102,
                                        page: o.page,
                                        msg: c,
                                        spm_a: e[0],
                                        spm_b: e[1],
                                        c1: o.duration,
                                        c2: o.page_url,
                                    }),
                                    (t = !0)
                            }
                        } catch (o) {
                            a.logger({ msg: o })
                        }
                        return t
                    },
                    do_tracker_obsolete_inter: function(o) {
                        var t = !1
                        try {
                            if (o && o.page) {
                                var e = o.spm_ab ? o.spm_ab.split('.') : [],
                                    c = 'record_obsolete interface be called by' + s,
                                    i = new n({ ratio: o.ratio || r.obsoleteInterRecordRatio })
                                i.run({
                                            code: 109,
                                            page: o.page,
                                            msg: c,
                                            spm_a: e[0],
                                            spm_b: e[1],
                                            c1: o.interface_name,
                                            c2: o.interface_params,
                                        },
                                        1
                                    ),
                                    (t = !0)
                            }
                        } catch (o) {
                            a.logger({ msg: o })
                        }
                        return t
                    },
                    do_tracker_browser_support: function(o) {
                        var t = !1
                        try {
                            if (o && o.page) {
                                var e = o.spm_ab ? o.spm_ab.split('.') : [],
                                    c = new n({ ratio: o.ratio || r.browserSupportRatio }),
                                    i = goldlog._aplus_client || {},
                                    l = i.ua_info || {}
                                c.run({
                                        code: 111,
                                        page: o.page,
                                        msg: o.msg + '_by' + s,
                                        spm_a: e[0],
                                        spm_b: e[1],
                                        c1: [l.o, l.b, l.w].join('_'),
                                        c2: o.etag || '',
                                        c3: o.cna || '',
                                    }),
                                    (t = !0)
                            }
                        } catch (o) {
                            a.logger({ msg: o })
                        }
                        return t
                    },
                    do_tracker_common_analysis: function(o) {
                        var t = !1
                        try {
                            if (o && o.page) {
                                var e = o.spm_ab ? o.spm_ab.split('.') : [],
                                    c = new n({ ratio: o.ratio || r.browserSupportRatio }),
                                    i = goldlog._aplus_client || {},
                                    l = i.ua_info || {}
                                c.run({
                                        code: 113,
                                        page: o.page,
                                        msg: o.msg + '_by' + s,
                                        spm_a: e[0],
                                        spm_b: e[1],
                                        c1: [l.o, l.b, l.w].join('_'),
                                        c2: o.init_time || '',
                                        c3: o.wspv_time || 0,
                                        c4: o.load_time || 0,
                                        c5: o.channel_type,
                                    }),
                                    (t = !0)
                            }
                        } catch (o) {
                            a.logger({ msg: o })
                        }
                        return t
                    },
                }
            })
    },
    function(o, t) {
        'use strict';
        (t.lostPvRecordRatio = '0.01'),
        (t.obsoleteInterRecordRatio = '0.001'),
        (t.jsErrorRecordRatio = '0.001'),
        (t.browserSupportRatio = '0.001'),
        (t.goldlogQueueRatio = '0.01')
    },
    function(o, t) {
        'use strict'
        var e = function(o) {
            var t = o.level || 'warn'
            window.console && window.console[t] && window.console[t](o.msg)
        };
        (t.logger = e),
        (t.assign = function(o, t) {
            if ('function' != typeof Object.assign) {
                var e = function(o) {
                    if (null === o)
                        throw new TypeError('Cannot convert undefined or null to object')
                    for (var t = Object(o), e = 1; e < arguments.length; e++) {
                        var r = arguments[e]
                        if (null !== r)
                            for (var a in r)
                                Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a])
                    }
                    return t
                }
                return e(o, t)
            }
            return Object.assign({}, o, t)
        }),
        (t.makeCacheNum = function() {
            return Math.floor(268435456 * Math.random()).toString(16)
        }),
        (t.obj2param = function(o) {
            var t,
                e,
                r = []
            for (t in o)
                o.hasOwnProperty(t) &&
                ((e = '' + o[t]), r.push(t + '=' + encodeURIComponent(e)))
            return r.join('&')
        })
    },
    function(o, t, e) {
        var r = e(3),
            a = { ratio: 1, logkey: 'fsp.1.1', gmkey: '', chksum: 'H46747615' },
            n = function(o) {;
                (o && 'object' == typeof o) || (o = a),
                (this.opts = o),
                (this.opts.ratio = o.ratio || a.ratio),
                (this.opts.logkey = o.logkey || a.logkey),
                (this.opts.gmkey = o.gmkey || a.gmkey),
                (this.opts.chksum = o.chksum || a.chksum)
            },
            s = n.prototype;
        (s.getRandom = function() {
            return Math.floor(1e3 * Math.random()) + 1
        }),
        (s.run = function(o, t) {
            var e,
                a,
                n = { pid: 'aplus', code: 101, msg: '异常内容' },
                s = ''
            try {
                var c = window.goldlog || {},
                    i = c._$ || {},
                    l = i.meta_info || {},
                    g = parseFloat(l['aplus-tracker-rate'])
                if (
                    ((e = this.opts || {}),
                        ('number' == typeof g && g + '' != 'NaN') || (g = e.ratio),
                        (a = this.getRandom()),
                        t || a <= 1e3 * g)
                ) {;
                    (s = '//gm.mmstat.com/' + e.logkey),
                    (o.rel = i.script_name + '@' + c.lver),
                    (o.type = o.code),
                    (o.uid = encodeURIComponent(c.getCookie('cna'))),
                    (o = r.assign(n, o))
                    var u = r.obj2param(o)
                    c.tracker = c.send(
                        s, { cache: r.makeCacheNum(), gokey: u, logtype: '2' },
                        'POST'
                    )
                }
            } catch (o) {
                r.logger({ msg: 'tracker.run() exec error: ' + o })
            }
        }),
        (o.exports = n)
    },
    function(o, t, e) {
        'use strict'
        var r = e(6),
            a = function(o) {
                var t = window.goldlog || {},
                    e = (t._$ = t._$ || {}),
                    r = t.spm_ab ? t.spm_ab.join('.') : '0.0',
                    a = e.send_pv_count || 0
                if (a < 1 && navigator && navigator.sendBeacon) {
                    var n = window.goldlog_queue || (window.goldlog_queue = []),
                        s = location.hostname + location.pathname
                    n.push({
                        action: ['goldlog', '_aplus_cplugin_m', 'do_tracker_lostpv'].join(
                            '.'
                        ),
                        arguments: [{
                            page: s,
                            page_url: location.protocol + '//' + s,
                            duration: o,
                            spm_ab: r,
                            msg: 'dom_state=' + document.readyState,
                        }, ],
                    })
                }
            }
        t.run = function() {
            var o = new Date()
            r.on(window, 'beforeunload', function() {
                var t = new Date(),
                    e = t.getTime() - o.getTime()
                a(e)
            })
        }
    },
    function(o, t) {
        'use strict'
        var e = self,
            r = e.document,
            a = !!r.attachEvent,
            n = 'attachEvent',
            s = 'addEventListener',
            c = a ? n : s;
        (t.getIframeUrl = function(o) {
            var t,
                e = '//g.alicdn.com'
            return (
                (t =
                    goldlog && 'function' == typeof goldlog.getCdnPath ?
                    goldlog.getCdnPath() || e :
                    e),
                (o || 'https') +
                ':' +
                t +
                '/alilog/aplus_cplugin/@@APLUS_CPLUGIN_VER/ls.html?t=@@_VERSION_'
            )
        }),
        (t.on = function(o, t, r) {
            o[c](
                (a ? 'on' : '') + t,
                function(o) {
                    o = o || e.event
                    var t = o.target || o.srcElement 'function' == typeof r && r(o, t)
                }, !1
            )
        }),
        (t.checkLs = function() {
            var o
            try {
                window.localStorage &&
                    (localStorage.setItem('test_log_cna', '1'),
                        '1' === localStorage.getItem('test_log_cna') &&
                        (localStorage.removeItem('test_log_cna'), (o = !0)))
            } catch (t) {
                o = !1
            }
            return o
        }),
        (t.tracker_iframe_status = function(o, t) {
            var e = window.goldlog_queue || (window.goldlog_queue = []),
                r = goldlog.spm_ab ? goldlog.spm_ab.join('.') : '',
                a = 'createIframe_' + t.status + '_id=' + o
            t.msg && (a += '_' + t.msg),
                e.push({
                    action: 'goldlog._aplus_cplugin_m.do_tracker_browser_support',
                    arguments: [{
                        page: location.hostname + location.pathname,
                        msg: a,
                        browser_attr: navigator.userAgent,
                        spm_ab: r,
                        cna: t.duration || '',
                        ratio: 1,
                    }, ],
                })
        }),
        (t.tracker_ls_failed = function() {
            var o = window.goldlog_queue || (window.goldlog_queue = []),
                t = goldlog.spm_ab ? goldlog.spm_ab.join('.') : ''
            o.push({
                action: 'goldlog._aplus_cplugin_m.do_tracker_browser_support',
                arguments: [{
                    page: location.hostname + location.pathname,
                    msg: 'donot support localStorage',
                    browser_attr: navigator.userAgent,
                    spm_ab: t,
                }, ],
            })
        }),
        (t.processMsgData = function(o) {
            var t = {}
            try {
                var e = '{}';
                (e =
                    'TextEncoder' in window && 'object' == typeof o ?
                    new window.TextDecoder('utf-8').decode(o) :
                    o),
                (t = JSON.parse(e))
            } catch (o) {
                t = {}
            }
            return t
        }),
        (t.do_pub_fn = function(o, t) {
            var e = window.goldlog_queue || (window.goldlog_queue = [])
            e.push({ action: 'goldlog.aplus_pubsub.publish', arguments: [o, t] }),
                e.push({
                    action: 'goldlog.aplus_pubsub.cachePubs',
                    arguments: [o, t],
                })
        })
    },
]) /*! 2021-04-27 14:40:30 v8.15.5 */ !(function(t) {
    function e(o) {
        if (n[o]) return n[o].exports
        var a = (n[o] = { exports: {}, id: o, loaded: !1 })
        return t[o].call(a.exports, a, a.exports, e), (a.loaded = !0), a.exports
    }
    var n = {}
    return (e.m = t), (e.c = n), (e.p = ''), e(0)
})([
    function(t, e, n) {
        t.exports = n(1)
    },
    function(t, e, n) {
        'use strict'!(function() {
            var t = window
            n(2)()
            var e = n(3),
                o = n(4)
            'ontouchend' in document.createElement('div') &&
                (t.goldlog_queue || (t.goldlog_queue = [])).push({
                    action: 'goldlog.setMetaInfo',
                    arguments: ['aplus-touch', 'tap'],
                })
            var a = function() {
                    n(109)
                    var e = n(111),
                        o = n(37)
                    if (
                        (o.doPubMsg(['goldlogReady', 'running']),
                            document.getElementsByTagName('body').length)
                    ) {
                        var r = 'g_tb_aplus_loaded'
                        if (t[r]) return;
                        (t[r] = 1), n(124).initGoldlog(e)
                    } else
                        setTimeout(function() {
                            a()
                        }, 50)
                },
                r = function(t) {
                    try {
                        e.do_tracker_jserror({
                            ratio: 1,
                            message: t && t.message,
                            error: encodeURIComponent(t && t.stack ? t.stack : ''),
                            filename: 'aplusLoad',
                        })
                    } catch (t) {}
                }
            try {
                a()
            } catch (t) {
                r(t, o.script_name + '@' + o.lver)
            }
        })()
    },
    function(t, e) {
        t.exports = function() {
            var t = window.goldlog_queue || (window.goldlog_queue = [])
            try {
                var e = navigator.userAgent,
                    n = /Trident/.test(e)
                n ||
                    t.push({
                        action: 'goldlog.setMetaInfo',
                        arguments: [
                            'aplus-p-url-init',
                            window.location.href.substring(0, 850),
                        ],
                    })
            } catch (t) {}
        }
    },
    function(t, e) {
        'use strict'
        var n = function(t, e) {
                var n = window.goldlog_queue || (window.goldlog_queue = [])
                n.push({
                    action: 'goldlog._aplus_cplugin_track_deb.monitor',
                    arguments: [{
                        key: 'APLUS_PLUGIN_DEBUG',
                        title: 'aplus_core',
                        msg: ['_error_:methodName=' + e + ',params=' + JSON.stringify(t)],
                        type: 'updateMsg',
                        description: e || 'aplus_core',
                    }, ],
                })
            },
            o = function(t, e, n) {
                var o = window.goldlog_queue || (window.goldlog_queue = [])
                o.push({
                    action: ['goldlog', '_aplus_cplugin_m', e].join('.'),
                    arguments: [t, n],
                })
            };
        (e.do_tracker_jserror = function(t, e) {
            var a = 'do_tracker_jserror'
            o(t, a, e), n(t, a)
        }),
        (e.do_tracker_obsolete_inter = function(t, e) {
            var a = 'do_tracker_obsolete_inter'
            o(t, a, e), n(t, a)
        }),
        (e.wrap = function(t) {
            if ('function' == typeof t)
                try {
                    t()
                } catch (t) {
                    n({ msg: t.message || t }, 'exception')
                } finally {}
        })
    },
    function(t, e, n) {
        'use strict'
        var o = n(5),
            a = n(6),
            r = n(7);
        (e.APLUS_ENV = 'production'),
        (e.lver = a.lver),
        (e.toUtVersion = a.toUtVersion),
        (e.script_name = a.script_name),
        (e.recordTypes = o.recordTypes),
        (e.KEY = o.KEY),
        (e.context = r.context),
        (e.context_prepv = r.context_prepv),
        (e.aplus_init = n(15).plugins_init),
        (e.plugins_pv = n(46).plugins_pv),
        (e.plugins_prepv = n(72).plugins_prepv),
        (e.context_hjlj = n(77)),
        (e.plugins_hjlj = n(79).plugins_hjlj),
        (e.beforeUnload = n(89)),
        (e.initLoad = n(94)),
        (e.spmException = n(98)),
        (e.goldlog_path = n(99)),
        (e.is_auto_pv = 'true'),
        (e.utilPvid = n(104)),
        (e.disablePvid = 'true'),
        (e.mustSpmE = !0),
        (e.LS_CNA_KEY = 'APLUS_CNA')
    },
    function(t, e) {
        'use strict';
        (e.recordTypes = {
            hjlj: 'COMMON_HJLJ',
            uhjlj: 'DATACLICK_HJLJ',
            pv: 'PV',
            prepv: 'PREPV',
        }),
        (e.KEY = {
            NAME_STORAGE: {
                REFERRER: 'wm_referrer',
                REFERRER_PV_ID: 'refer_pv_id',
                LOST_PV_PAGE_DURATION: 'lost_pv_page_duration',
                LOST_PV_PAGE_SPMAB: 'lost_pv_page_spmab',
                LOST_PV_PAGE: 'lost_pv_page',
                LOST_PV_PAGE_MSG: 'lost_pv_page_msg',
            },
        })
    },
    function(t, e) {
        'use strict';
        (e.lver = '8.15.5'),
        (e.toUtVersion = 'v20210427'),
        (e.script_name = 'aplus_o')
    },
    function(t, e, n) {
        'use strict';
        (e.context = n(8)), (e.context_prepv = n(14))
    },
    function(t, e, n) {
        'use strict'

        function o() {
            return {
                compose: { maxTimeout: 5500 },
                etag: { egUrl: 'log.mmstat.com/eg.js', cna: i.getCookie('cna') },
                where_to_sendpv: {
                    url: '//log.mmstat.com/yt.gif',
                    urlRule: s.getBeaconSrc,
                },
            }
        }

        function a() {
            return r.assign(new s.initConfig(), new o())
        }
        var r = n(9),
            i = n(11),
            s = n(13)
        t.exports = a
    },
    function(t, e, n) {
        'use strict'

        function o(t, e) {
            return 'function' != typeof Object.assign ?
                (function(t) {
                    if (null === t)
                        throw new TypeError('Cannot convert undefined or null to object')
                    for (var e = Object(t), n = 1; n < arguments.length; n++) {
                        var o = arguments[n]
                        if (null !== o)
                            for (var a in o)
                                Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
                    }
                    return e
                })(t, e) :
                Object.assign({}, t, e)
        }

        function a(t) {
            return 'function' == typeof t
        }

        function r(t) {
            return 'string' == typeof t
        }

        function i(t) {
            return 'undefined' == typeof t
        }

        function s(t, e) {
            return t.indexOf(e) > -1
        }
        var u = window;
        (e.assign = o),
        (e.makeCacheNum = function() {
            return Math.floor(268435456 * Math.random()).toString(16)
        }),
        (e.each = n(10)),
        (e.isStartWith = function(t, e) {
            return 0 === t.indexOf(e)
        }),
        (e.isEndWith = function(t, e) {
            var n = t.length,
                o = e.length
            return n >= o && t.indexOf(e) == n - o
        }),
        (e.any = function(t, e) {
            var n,
                o = t.length
            for (n = 0; n < o; n++)
                if (e(t[n])) return !0
            return !1
        }),
        (e.isFunction = a),
        (e.isArray = function(t) {
            return Array.isArray ?
                Array.isArray(t) :
                /Array/.test(Object.prototype.toString.call(t))
        }),
        (e.isString = r),
        (e.isNumber = function(t) {
            return 'number' == typeof t
        }),
        (e.isUnDefined = i),
        (e.isContain = s)
        var c = function(t) {
            var e,
                n = t.constructor === Array ? [] : {}
            if ('object' == typeof t) {
                if (u.JSON && u.JSON.parse)(e = JSON.stringify(t)), (n = JSON.parse(e))
                else
                    for (var o in t) n[o] = 'object' == typeof t[o] ? c(t[o]) : t[o]
                return n
            }
        };
        (e.cloneObj = c), (e.cloneDeep = c)
    },
    function(t, e) {
        'use strict'
        t.exports = function(t, e) {
            var n,
                o = t.length
            for (n = 0; n < o; n++) {
                var a = e(t[n], n)
                if ('break' === a) break
            }
        }
    },
    function(t, e, n) {
        'use strict'

        function o(t) {
            var e = s.cookie.match(new RegExp('(?:^|;)\\s*' + t + '=([^;]+)'))
            return e ? e[1] : ''
        }

        function a(t, e, n) {
            n || (n = {})
            var a = new Date()
            return (
                'session' === n.expires ||
                (n.expires && ('number' == typeof n.expires || n.expires.toUTCString) ?
                    ('number' == typeof n.expires ?
                        a.setTime(a.getTime() + 24 * n.expires * 60 * 60 * 1e3) :
                        (a = n.expires),
                        (e += '; expires=' + a.toUTCString())) :
                    (a.setTime(a.getTime() + 63072e7),
                        (e += '; expires=' + a.toUTCString()))),
                (e += '; path=' + (n.path ? n.path : '/')),
                (e += '; domain=' + n.domain),
                (s.cookie = t + '=' + e),
                n.SameSite &&
                /Chrome\/8\d+/.test(navigator.userAgent) &&
                ((e += '; SameSite=' + n.SameSite),
                    (e += '; Secure'),
                    (s.cookie = t + '=' + e)),
                o(t)
            )
        }

        function r(t, e, n) {
            try {
                if ((n || (n = {}), n.domain)) a(t, e, n)
                else
                    for (var o = c.getDomains(), r = 0; r < o.length;)
                        (n.domain = o[r]), a(t, e, n) ? (r = o.length) : r++
            } catch (t) {}
        }

        function i() {
            var t = {}
            return (
                u.each(l, function(e) {
                    t[e] = o(e)
                }),
                (t.cnaui = /\btanx\.com$/.test(p) ? o('cnaui') : ''),
                t
            )
        }
        var s = document,
            u = n(9),
            c = n(12),
            p = location.hostname;
        (e.getCookie = o), (e.setCookie = r)
        var l = ['tracknick', 'thw', 'cna'];
        (e.getData = i),
        (e.getHng = function() {
            return encodeURIComponent(o('hng') || '')
        })
    },
    function(t, e) {
        'use strict'
        e.getDomains = function() {
            var t = []
            try {
                for (
                    var e = location.hostname, n = e.split('.'), o = 2; o <= n.length;

                )
                    t.push(n.slice(n.length - o).join('.')), o++
            } catch (t) {}
            return t
        }
    },
    function(t, e, n) {
        'use strict'

        function o(t, e, n) {
            var o = window.goldlog || {},
                s = o.getMetaInfo('aplus-ifr-pv') + '' == '1'
            return e ?
                r(t) ?
                'yt' :
                'm' :
                n && !s ?
                a.isContain(t, 'wrating.com') ?
                'k' :
                i(t) || 'y' :
                i(t) || 'v'
        }
        var a = n(9),
            r = function(t) {
                for (
                    var e = ['youku.com', 'soku.com', 'tudou.com', 'laifeng.com'], n = 0; n < e.length; n++
                ) {
                    var o = e[n]
                    if (a.isContain(t, o)) return !0
                }
                return !1
            },
            i = function(t) {
                for (
                    var e = [
                            ['scmp.com', 'sc'],
                            ['luxehomes.com.hk', 'sc'],
                            ['ays.com.hk', 'sc'],
                            ['cpjobs.com', 'sc'],
                            ['educationpost.com.hk', 'sc'],
                            ['cosmopolitan.com.hk', 'sc'],
                            ['elle.com.hk', 'sc'],
                            ['harpersbazaar.com.hk', 'sc'],
                            ['1688.com', '6'],
                            ['youku.com', 'yt'],
                            ['soku.com', 'yt'],
                            ['tudou.com', 'yt'],
                            ['laifeng.com', 'yt'],
                        ],
                        n = 0; n < e.length; n++
                ) {
                    var o = e[n]
                    if (a.isContain(t, o[0])) return o[1]
                }
                return ''
            };
        (e.getBeaconSrc = o),
        (e.initConfig = function() {
            return {
                compose: {},
                etag: {
                    egUrl: 'log.mmstat.com/eg.js',
                    cna: '',
                    tag: '',
                    stag: '',
                    lstag: '-1',
                    lscnastatus: '',
                },
                can_to_sendpv: { flag: 'NO' },
                userdata: {},
                what_to_sendpv: { pvdata: {}, exparams: {} },
                what_to_pvhash: { hash: [] },
                what_to_sendpv_ut: { pvdataToUt: {} },
                what_to_sendpv_ut2: { isSuccess: !1, pvdataToUt: {} },
                when_to_sendpv: { aplusWaiting: '' },
                where_to_sendpv: { url: '//log.mmstat.com/o.gif', urlRule: o },
                where_to_sendlog_ut: { aplusToUT: {}, toUTName: 'toUT' },
                hjlj: {
                    what_to_hjlj: { logdata: {} },
                    what_to_hjlj_ut: { logdataToUT: {} },
                },
                network: { connType: 'UNKNOWN' },
                is_single: !1,
            }
        })
    },
    function(t, e, n) {
        'use strict'

        function o() {
            return {
                etag: {
                    egUrl: 'log.mmstat.com/eg.js',
                    cna: a.getCookie('cna'),
                    tag: '',
                    stag: '',
                },
                compose: {},
                where_to_prepv: {
                    url: '//log.mmstat.com/v.gif',
                    urlRule: r.getBeaconSrc,
                },
                userdata: {},
                what_to_prepv: { logdata: {} },
                what_to_hjlj_exinfo: {
                    EXPARAMS_FLAG: 'EXPARAMS',
                    exinfo: [],
                    exparams_key_names: ['uidaplus', 'pc_i', 'pu_i'],
                },
                is_single: !1,
            }
        }
        var a = n(11),
            r = n(13)
        t.exports = o
    },
    function(t, e, n) {
        'use strict'
        e.plugins_init = [
            { name: 'where_to_sendpv', enable: !0, path: n(16) },
            { name: 'etag', enable: !0, path: n(32) },
            { name: 'etag_sync', enable: !0, path: n(35) },
            { name: 'extd', enable: !0, path: n(36) },
        ]
    },
    function(t, e, n) {
        'use strict'
        var o = n(17),
            a = n(25)()
        t.exports = function() {
            return o.assign(a, {
                run: function() {
                    var t = this.getAplusMetaByKey('aplus-rhost-v'),
                        e = this.options.context.where_to_sendpv || {},
                        n = e.url || '',
                        a = this.getGifPath(e.urlRule, n),
                        r = o.getPvUrl({
                            metaName: 'aplus-rhost-v',
                            metaValue: t,
                            gifPath: a,
                            url: n,
                        });
                    (e.url = r), (this.options.context.where_to_sendpv = e)
                },
            })
        }
    },
    function(t, e, n) {
        'use strict'

        function o(t) {
            t = (t || '').split('#')[0].split('?')[0]
            var e = t.length,
                n = function(t) {
                    var e,
                        n = t.length,
                        o = 0
                    for (e = 0; e < n; e++) o = 31 * o + t.charCodeAt(e)
                    return o
                }
            return e ? n(e + '#' + t.charCodeAt(e - 1)) : -1
        }

        function a(t) {
            for (var e = t.split('&'), n = 0, o = e.length, a = {}; n < o; n++) {
                var r = e[n],
                    i = r.indexOf('='),
                    s = r.substring(0, i),
                    u = r.substring(i + 1)
                a[s] = l.tryToDecodeURIComponent(u)
            }
            return a
        }

        function r(t) {
            if ('function' != typeof t) throw new TypeError(t + ' is not a function')
            return t
        }

        function i(t) {
            var e,
                n,
                o,
                a = [],
                r = t.length
            for (o = 0; o < r; o++)
                (e = t[o][0]),
                (n = t[o][1]),
                a.push(p.isStartWith(e, v) ? n : e + '=' + encodeURIComponent(n))
            return a.join('&')
        }

        function s(t) {
            var e,
                n,
                o,
                a = {},
                r = t.length
            for (o = 0; o < r; o++)(e = t[o][0]), (n = t[o][1]), (a[e] = n)
            return a
        }

        function u(t, e) {
            var n,
                o,
                a,
                r = []
            for (n in t)
                t.hasOwnProperty(n) &&
                ((o = '' + t[n]),
                    (a = n + '=' + encodeURIComponent(o)),
                    e ? r.push(a) : r.push(p.isStartWith(n, v) ? o : a))
            return r.join('&')
        }

        function c(t, e) {
            var n = t.indexOf('?') == -1 ? '?' : '&',
                o = e ? (p.isArray(e) ? i(e) : u(e)) : ''
            return o ? t + n + o : t
        }
        var p = n(9),
            l = n(18),
            g = n(21),
            d = parent !== self;
        (e.is_in_iframe = d),
        (e.makeCacheNum = p.makeCacheNum),
        (e.isStartWith = p.isStartWith),
        (e.isEndWith = p.isEndWith),
        (e.any = p.any),
        (e.each = p.each),
        (e.assign = p.assign),
        (e.isFunction = p.isFunction),
        (e.isArray = p.isArray),
        (e.isString = p.isString),
        (e.isNumber = p.isNumber),
        (e.isUnDefined = p.isUnDefined),
        (e.isContain = p.isContain),
        (e.sleep = n(22).sleep),
        (e.makeChkSum = o),
        (e.tryToDecodeURIComponent = l.tryToDecodeURIComponent),
        (e.nodeListToArray = l.nodeListToArray),
        (e.parseSemicolonContent = l.parseSemicolonContent),
        (e.param2obj = a)
        var f = n(23),
            _ = function(t) {
                return /^(\/\/){0,1}(\w+\.){1,}\w+((\/\w+){1,})?$/.test(t)
            }
        e.hostValidity = _
        var m = function(t, e) {
                var n = /^(\/\/){0,1}(\w+\.){1,}\w+\/\w+\.gif$/.test(t),
                    o = _(t),
                    a = ''
                return (
                    n ? (a = 'isGifPath') : o && (a = 'isHostPath'),
                    a ||
                    f.logger({
                        msg: e + ': ' + t + ' is invalid, suggestion: "xxx.mmstat.com"',
                    }),
                    a
                )
            },
            h = function(t) {
                return (!/^\/\/gj\.mmstat/.test(t) &&
                    goldlog.isInternational() &&
                    (t = t.replace(/^\/\/\w+\.mmstat/, '//gj.mmstat')),
                    t
                )
            };
        (e.filterIntUrl = h),
        (e.getPvUrl = function(t) {
            t || (t = {})
            var e,
                n,
                o = t.metaValue && m(t.metaValue, t.metaName),
                a = ''
            'isGifPath' === o
                ?
                ((e = /^\/\//.test(t.metaValue) ? '' : '//'), (a = e + t.metaValue)) :
                'isHostPath' === o &&
                ((e = /^\/\//.test(t.metaValue) ? '' : '//'),
                    (n = /\/$/.test(t.metaValue) ? '' : '/'),
                    (a = e + t.metaValue + n + t.gifPath))
            var r
            return (
                a ?
                (r = a) :
                ((e = 0 === t.gifPath.indexOf('/') ? t.gifPath : '/' + t.gifPath),
                    (r = t.url && t.url.replace(/\/\w+\.gif/, e))),
                r
            )
        }),
        (e.indexof = n(24).indexof),
        (e.callable = r)
        var v = '::-plain-::';
        (e.mkPlainKey = function() {
            return v + Math.random()
        }),
        (e.s_plain_obj = v),
        (e.mkPlainKeyForExparams = function(t) {
            var e = t || v
            return e + 'exparams'
        }),
        (e.rndInt32 = function() {
            return Math.round(2147483647 * Math.random())
        }),
        (e.arr2param = i),
        (e.arr2obj = s),
        (e.obj2param = u),
        (e.makeUrl = c),
        (e.ifAdd = function(t, e) {
            var n,
                o,
                a,
                r,
                i = e.length
            for (n = 0; n < i; n++)
                (o = e[n]), (a = o[0]), (r = o[1]), r && t.push([a, r])
        }),
        (e.isStartWithProtocol = g.isStartWithProtocol),
        (e.param2arr = function(t) {
            for (var e, n = t.split('&'), o = 0, a = n.length, r = []; o < a; o++)
                (e = n[o].split('=')), r.push([e.shift(), e.join('=')])
            return r
        }),
        (e.catchException = function(t, e, n) {
            var o = window,
                a = o.goldlog_queue || (o.goldlog_queue = []),
                r = t 'object' == typeof e && e.message && (r = r + '_' + e.message),
                n && n.msg && (r += '_' + n.msg),
                a.push({
                    action: 'goldlog._aplus_cplugin_m.do_tracker_jserror',
                    arguments: [{ message: r, error: JSON.stringify(e), filename: t }],
                })
        })
    },
    function(t, e, n) {
        'use strict'
        var o = n(19),
            a = n(20)
        t.exports = {
            tryToDecodeURIComponent: function(t, e) {
                var n = e || ''
                if (t)
                    try {
                        n = decodeURIComponent(t)
                    } catch (t) {}
                return n
            },
            parseSemicolonContent: function(t, e, n) {
                e = e || {}
                var a,
                    r,
                    i = t.split(';'),
                    s = i.length
                for (a = 0; a < s; a++) {
                    r = i[a].split('=')
                    var u = o.trim(r.slice(1).join('='))
                    e[o.trim(r[0]) || ''] = n ? u : this.tryToDecodeURIComponent(u)
                }
                return e
            },
            nodeListToArray: function(t) {
                var e, n
                try {
                    return (e = [].slice.call(t))
                } catch (a) {;
                    (e = []), (n = t.length)
                    for (var o = 0; o < n; o++) e.push(t[o])
                    return e
                }
            },
            getLsCna: function(t, e) {
                if (a.set && a.test()) {
                    var n = '',
                        o = a.get(t)
                    if (o) {
                        var r = o.split('_') || []
                        n = e ?
                            r.length > 1 && e === r[0] ?
                            r[1] :
                            '' :
                            r.length > 1 ?
                            r[1] :
                            ''
                    }
                    return decodeURIComponent(n)
                }
                return ''
            },
            setLsCna: function(t, e, n) {
                n && a.set && a.test() && a.set(t, e + '_' + encodeURIComponent(n))
            },
            getUrl: function(t) {
                var e = t || '//log.mmstat.com/eg.js'
                try {
                    var n = goldlog.getMetaInfo('aplus-rhost-v'),
                        o = /[[a-z|0-9\.]+[a-z|0-9]/,
                        a = n.match(o)
                    a && a[0] && (e = e.replace(o, a[0]))
                } catch (t) {}
                return e
            },
        }
    },
    function(t, e) {
        'use strict'

        function n(t) {
            return 'string' == typeof t ? t.replace(/^\s+|\s+$/g, '') : ''
        }
        e.trim = n
    },
    function(t, e) {
        'use strict'
        t.exports = {
            set: function(t, e) {
                try {
                    return localStorage.setItem(t, e), !0
                } catch (t) {
                    return !1
                }
            },
            get: function(t) {
                try {
                    return localStorage.getItem(t)
                } catch (t) {
                    return ''
                }
            },
            test: function() {
                var t = 'grey_test_key'
                try {
                    return localStorage.setItem(t, 1), localStorage.removeItem(t), !0
                } catch (t) {
                    return !1
                }
            },
            remove: function(t) {
                localStorage.removeItem(t)
            },
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(9),
            a = function() {
                if (goldlog.aplusDebug) {
                    var t = location.protocol
                    return 'http:' !== t && 'https:' !== t && (t = 'https:'), t
                }
                return 'https:'
            };
        (e.getProtocal = a),
        (e.isStartWithProtocol = function(t) {
            for (
                var e = ['javascript:', 'tel:', 'sms:', 'mailto:', 'tmall://', '#'],
                    n = 0,
                    a = e.length; n < a; n++
            )
                if (o.isStartWith(t, e[n])) return !0
            return !1
        })
    },
    function(t, e) {
        'use strict'
        e.sleep = function(t, e) {
            return setTimeout(function() {
                e()
            }, t)
        }
    },
    function(t, e) {
        'use strict'
        var n = function() {
            var t = !1
            return (
                'boolean' == typeof goldlog.aplusDebug && (t = goldlog.aplusDebug), t
            )
        }
        e.isDebugAplus = n
        var o = function(t) {
            t || (t = {})
            var e = t.level || 'warn'
            window.console && window.console[e] && window.console[e](t.msg)
        }
        e.logger = o
    },
    function(t, e) {
        'use strict'
        e.indexof = function(t, e) {
            var n = -1
            try {
                n = t.indexOf(e)
            } catch (a) {
                for (var o = 0; o < t.length; o++) t[o] === e && (n = o)
            } finally {
                return n
            }
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(17),
            a = n(26),
            r = n(27)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                getMetaInfo: function() {
                    var t = a.getGoldlogVal('_$') || {},
                        e = t.meta_info || r.getInfo()
                    return e
                },
                getAplusMetaByKey: function(t) {
                    var e = this.getMetaInfo() || {}
                    return e[t]
                },
                getGifPath: function(t, e) {
                    var n,
                        r = a.getGoldlogVal('_$') || {}
                    if ('function' == typeof t)
                        n = t(location.hostname, r.is_terminal, o.is_in_iframe) + '.gif'
                    else if (!n && e) {
                        var i = e.match(/\/\w+\.gif/)
                        i && i.length > 0 && (n = i[0])
                    }
                    return n || (n = r.is_terminal ? 'm.gif' : 'v.gif'), n
                },
                run: function() {
                    var t = !!this.options.context.is_single
                    if (!t) {
                        var e = this.getAplusMetaByKey('aplus-rhost-v'),
                            n = this.options.context.where_to_sendpv || {},
                            a = n.url || '',
                            r = this.getGifPath(n.urlRule, a),
                            i = o.getPvUrl({
                                metaName: 'aplus-rhost-v',
                                metaValue: e,
                                gifPath: r,
                                url: o.filterIntUrl(a),
                            });
                        (n.url = i), (this.options.context.where_to_sendpv = n)
                    }
                },
            }
        }
    },
    function(t, e) {
        'use strict'
        var n = function(t) {
            var e
            try {
                window.goldlog || (window.goldlog = {}), (e = window.goldlog[t])
            } catch (t) {
                e = ''
            } finally {
                return e
            }
        }
        e.getGoldlogVal = n
        var o = function(t, e) {
            var n = !1
            try {
                window.goldlog || (window.goldlog = {}),
                    t && ((window.goldlog[t] = e), (n = !0))
            } catch (t) {
                n = !1
            } finally {
                return n
            }
        };
        (e.setGoldlogVal = o),
        (e.getClientInfo = function() {
            return n('_aplus_client') || {}
        })
    },
    function(t, e, n) {
        'use strict'

        function o(t) {
            var e,
                n,
                o,
                a = t.length,
                r = {}
            for (m._microscope_data = r, e = 0; e < a; e++)
                (n = t[e]),
                'microscope-data' === d.tryToGetAttribute(n, 'name') &&
                ((o = d.tryToGetAttribute(n, 'content')),
                    p.parseSemicolonContent(o, r),
                    (m.is_head_has_meta_microscope_data = !0));
            (m._microscope_data_params = p.obj2param(r)),
            (m.ms_data_page_id = r.pageId),
            (m.ms_data_shop_id = r.shopId),
            (m.ms_data_instance_id = r.siteInstanceId),
            (m.ms_data_siteCategoryId = r.siteCategory),
            (m.ms_prototype_id = r.prototypeId),
            (m.site_instance_id_or_shop_id =
                m.ms_data_instance_id || m.ms_data_shop_id),
            (m._atp_beacon_data = {}),
            (m._atp_beacon_data_params = '')
        }

        function a(t) {
            var e,
                n = function() {
                    var e
                    return (
                        document.querySelector &&
                        (e = document.querySelector('meta[name=data-spm]')),
                        g.each(t, function(t) {
                            'data-spm' === d.tryToGetAttribute(t, 'name') && (e = t)
                        }),
                        e
                    )
                },
                o = n()
            return o && (e = d.tryToGetAttribute(o, 'data-spm-protocol')), e
        }

        function r(t) {
            var e = t.isonepage || '-1',
                n = e.split('|'),
                o = n[0],
                a = n[1] ? n[1] : '';
            (t.isonepage_data = { isonepage: o, urlpagename: a }),
            (t['aplus-pagename'] = a)
        }

        function i() {
            var t = f.getMetaTags()
            o(t),
                g.each(t, function(t) {
                    var e = d.tryToGetAttribute(t, 'name')
                    if (/^aplus/.test(e) && ((m[e] = f.getMetaCnt(e)), e === v))
                        try {
                            c = m[e] = JSON.parse(f.getMetaCnt(e))
                        } catch (t) {}
                }),
                g.each(h, function(t) {
                    m[t] = f.getMetaCnt(t)
                }),
                (m.spm_protocol = a(t)),
                c && (m = g.assign(m, c))
            var e,
                n,
                i = ['aplus-rate-ahot'],
                s = i.length
            for (e = 0; e < s; e++)(n = i[e]), (m[n] = parseFloat(m[n]))
            return r(m), (y = m || {}), m
        }

        function s() {
            return y || i()
        }

        function u(t) {
            l.logger({ msg: 'please do not repeat setPriorityMetaInfo ' + t })
        }
        var c,
            p = n(17),
            l = n(23),
            g = n(9),
            d = n(28),
            f = n(29),
            _ = n(30),
            m = {},
            h = ['ahot-aplus', 'isonepage', 'spm-id', 'data-spm', 'microscope-data'],
            v = 'aplus-x-settings',
            y = {}
        e.setMetaInfo = function(t, e) {
            if ((y || (y = {}), 'object' == typeof c && c[t])) return u(t), !0
            if (t === v) {
                if (c) u(t)
                else
                    try {;
                        (c = 'object' == typeof e ? e : JSON.parse(e)),
                        (y = g.assign(y, c))
                    } catch (t) {
                        console && console.log(t)
                    }
                return !0
            }
            return (y[t] = e), !0
        }
        var b = function(t) {
            return y || (y = {}), y[t] || ''
        };
        (e.getMetaInfo = b),
        (e.getInfo = i),
        (e.qGet = s),
        (e.appendMetaInfo = function(t, e) {
            var n = function(t, e) {
                goldlog.setMetaInfo(t, e, { from: 'appendMetaInfo' })
            }
            if (t && e) {
                var o,
                    a = function(o) {
                        try {
                            var a = 'string' == typeof e ? JSON.parse(e) : e
                            n(t, g.assign(o, a))
                        } catch (t) {}
                    },
                    r = function(o) {
                        try {
                            var a = 'string' == typeof e ? JSON.parse(e) : e
                            n(t, o.concat(a))
                        } catch (t) {}
                    },
                    i = function(t) {
                        return 'EXPARAMS' === t ?
                            _.getExparamsInfos('', t) :
                            t ?
                            t.split('&') :
                            []
                    },
                    s = function(o) {
                        try {
                            var a = i(o),
                                r = i(e)
                            n(t, a.concat(r).join('&'))
                        } catch (t) {}
                    },
                    u = function(t) {
                        t.constructor === Array ? r(t) : a(t)
                    },
                    c = goldlog.getMetaInfo(t)
                if (('aplus-exinfo' === t && (s(c), (o = !0)), c))
                    if ('object' == typeof c) u(c), (o = !0)
                    else
                        try {
                            var p = JSON.parse(c)
                            'object' == typeof p && (u(p), (o = !0))
                        } catch (t) {}
                o || n(t, e)
            }
        })
    },
    function(t, e) {
        'use strict'
        e.tryToGetAttribute = function(t, e) {
            return t && t.getAttribute ? t.getAttribute(e) || '' : ''
        }
        var n = function(t, e, n) {
            if (t && t.setAttribute)
                try {
                    t.setAttribute(e, n)
                } catch (t) {}
        };
        (e.tryToSetAttribute = n),
        (e.tryToRemoveAttribute = function(t, e) {
            if (t && t.removeAttribute)
                try {
                    t.removeAttribute(e)
                } catch (o) {
                    n(t, e, '')
                }
        })
    },
    function(t, e, n) {
        'use strict'

        function o(t) {
            return (
                (i = i || document.getElementsByTagName('head')[0]),
                s && !t ? s : i ? (s = i.getElementsByTagName('meta')) : []
            )
        }

        function a(t, e) {
            var n,
                a,
                r,
                i = o(),
                s = i.length
            for (n = 0; n < s; n++)
                (a = i[n]),
                u.tryToGetAttribute(a, 'name') === t &&
                (r = u.tryToGetAttribute(a, e || 'content'))
            return r || ''
        }

        function r(t) {
            var e = { isonepage: '-1', urlpagename: '' },
                n = t.qGet()
            if (n && n.hasOwnProperty('isonepage_data'))
                (e.isonepage = n.isonepage_data.isonepage),
                (e.urlpagename = n.isonepage_data.urlpagename)
            else {
                var o = a('isonepage') || '-1',
                    r = o.split('|');
                (e.isonepage = r[0]), (e.urlpagename = r[1] ? r[1] : '')
            }
            return e
        }
        var i,
            s,
            u = n(28);
        (e.getMetaTags = o), (e.getMetaCnt = a), (e.getOnePageInfo = r)
    },
    function(t, e, n) {
        'use strict'
        var o = n(17),
            a = n(31),
            r = n(24)
        e.getExparamsInfos = function(t, e) {
            var n = [],
                i = t || ['uidaplus', 'pc_i', 'pu_i'],
                s = a.getExParams(o) || ''
            s = s.replace(/&aplus&/, '&')
            for (
                var u = o.param2arr(s) || [],
                    c = function(t) {
                        return r.indexof(i, t) > -1
                    },
                    p = 0; p < u.length; p++
            ) {
                var l = u[p],
                    g = l[0] || '',
                    d = l[1] || ''
                g && d && ('EXPARAMS' === e || c(g)) && n.push(g + '=' + d)
            }
            return n
        }
    },
    function(t, e, n) {
        'use strict'

        function o() {
            return (
                s ||
                (s =
                    g.getElementById('beacon-aplus') ||
                    g.getElementById('tb-beacon-aplus')),
                s
            )
        }

        function a(t) {
            var e = o(),
                n = l.tryToGetAttribute(e, 'cspx')
            t && n && (t.nonce = n)
        }

        function r(t, e, n) {
            var r = 'script',
                s = g.createElement(r);
            (s.type = 'text/javascript'), (s.async = !0)
            var c = o(),
                p = c && c.hasAttribute('crossorigin')
            p && (s.crossOrigin = 'anonymous')
            var l = 'https:' === location.protocol ? e || t : t
            0 === l.indexOf('//') && (l = u.getProtocal() + l),
                (s.src = l),
                n && (s.id = n),
                a(s)
            var d = g.getElementsByTagName(r)[0];
            (i = i || g.getElementsByTagName('head')[0]),
            d ? d.parentNode.insertBefore(s, d) : i && i.appendChild(s)
        }
        var i,
            s,
            u = n(21),
            c = n(9),
            p = n(23),
            l = n(28),
            g = document;
        (e.getCurrentNode = o),
        (e.addScript = r),
        (e.loadScript = function(t, e) {
            function n(t) {;
                (o.onreadystatechange = o.onload = o.onerror = null),
                (o = null),
                e(t)
            }
            var o = g.createElement('script')
            if (
                ((i = i || g.getElementsByTagName('head')[0]),
                    (o.async = !0),
                    'onload' in o)
            )
                o.onload = n
            else {
                var r = function() {;
                    /loaded|complete/.test(o.readyState) && n()
                };
                (o.onreadystatechange = r), r()
            };
            (o.onerror = function(t) {
                n(t)
            }),
            (o.src = t),
            a(o),
                i.appendChild(o)
        }),
        (e.isTouch = function() {
            return 'ontouchend' in document.createElement('div')
        })
        var d = function() {
            var t = goldlog && goldlog._$ ? goldlog._$ : {},
                e = t.meta_info || {}
            return e['aplus-exparams'] || ''
        };
        (e.getExParamsFromMeta = d),
        (e.getExParams = function(t) {
            var e = o(),
                n = l.tryToGetAttribute(e, 'exparams'),
                a = f(n, d(), t) || ''
            return (
                a && a.replace(/&amp;/g, '&').replace(/\buser(i|I)d=/, 'uidaplus=')
            )
        })
        var f = function(t, e, n) {
            var o = 'aplus&sidx=aplusSidex',
                a = t || o
            try {
                if (e) {
                    var r = n.param2obj(e),
                        i = [
                            'aplus',
                            'cna',
                            'spm-cnt',
                            'spm-url',
                            'spm-pre',
                            'logtype',
                            'pre',
                            'uidaplus',
                            'asid',
                            'sidx',
                            'trid',
                            'gokey',
                        ]
                    c.each(i, function(t) {
                            r.hasOwnProperty(t) &&
                                (p.logger({ msg: 'Can not inject keywords: ' + t }), delete r[t])
                        }),
                        delete r['']
                    var s = ''
                    if (t) {
                        var u = t.match(/aplus&/).index,
                            l = u > 0 ? n.param2obj(t.substring(0, u)) : {}
                        delete l[''],
                            (s = n.obj2param(c.assign(l, r)) + '&' + t.substring(u, t.length))
                    } else s = n.obj2param(r) + '&' + o
                    return s
                }
                return a
            } catch (t) {
                return a
            }
        }
        e.mergeExparams = f
    },
    function(t, e, n) {
        'use strict'
        var o = n(3),
            a = n(11),
            r = n(31),
            i = n(18),
            s = n(33),
            u = n(34),
            c = n(26),
            p = n(4)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                    var e = this.options.context.etag || {};
                    (this.cna = e.cna || a.getCookie('cna')),
                    this.setTag(0),
                        this.setStag(-1),
                        this.setLsTag('-1'),
                        this.setEtag(this.cna || ''),
                        (this.requesting = !1),
                        (this.today = s.getFormatDate())
                },
                setLsTag: function(t) {;
                    (this.lstag = t), (this.options.context.etag.lstag = t)
                },
                setTag: function(t) {;
                    (this.tag = t), (this.options.context.etag.tag = t)
                },
                setStag: function(t) {;
                    (this.stag = t), (this.options.context.etag.stag = t)
                },
                setEtag: function(t) {;
                    (this.etag = t),
                    (this.options.context.etag.cna = t),
                    a.getCookie('cna') !== t &&
                        a.setCookie('cna', t, { SameSite: 'none' })
                },
                setLscnaStatus: function(t) {
                    this.options.context.etag.lscnastatus = t
                },
                run: function(t, e) {
                    var n = this
                    if (n.cna) return void n.setTag(1)
                    var a = null,
                        s = u.getUrl(this.options.context.etag || {})
                    n.requesting = !0
                    var l = function() {
                        setTimeout(function() {
                                e()
                            }, 20),
                            clearTimeout(a)
                    }
                    return (
                        r.loadScript(s, function(t) {
                            var e, a
                            if (
                                (t && 'error' === t.type ?
                                    (n.setStag(-3),
                                        o.do_tracker_jserror({
                                            message: 'loadError',
                                            error: '',
                                            filename: 'etag_ls',
                                        })) :
                                    ((e = c.getGoldlogVal('Etag')),
                                        e && n.setEtag(e),
                                        (a = c.getGoldlogVal('stag')),
                                        'undefined' != typeof a && n.setStag(a)),
                                    n.requesting)
                            ) {
                                if (2 === a || 4 === a) {
                                    var r = i.getLsCna(p.LS_CNA_KEY)
                                    r
                                        ?
                                        (n.setLsTag(1), n.setEtag(r)) :
                                        (n.setLsTag(0), i.setLsCna(p.LS_CNA_KEY, n.today, e))
                                }
                                l()
                            }
                        }),
                        (a = setTimeout(function() {;
                            (n.requesting = !1), n.setStag(-2), e()
                        }, 1500)),
                        2e3
                    )
                },
            }
        }
    },
    function(t, e) {
        'use strict'

        function n(t, e, n) {
            var o = '' + Math.abs(t),
                a = e - o.length,
                r = t >= 0
            return (
                (r ? (n ? '+' : '') : '-') +
                Math.pow(10, Math.max(0, a)).toString().substr(1) +
                o
            )
        }
        e.getFormatDate = function(t) {
            var e = new Date()
            try {
                return [
                    e.getFullYear(),
                    n(e.getMonth() + 1, 2, 0),
                    n(e.getDate(), 2, 0),
                ].join(t || '')
            } catch (t) {
                return ''
            }
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(18)
        e.getUrl = function(t) {
            var e = new Date().getTime(),
                n = o.getUrl(t && t.egUrl ? t.egUrl : 'gj.mmstat.com/eg.js'),
                a = n.match(/[\w+\.]+[a-z|A-Z|0-9]+\/(eg|ge).js/)
            return (
                0 !== n.indexOf('http') && a && a.length > 0 && (n = '//' + a[0]),
                n + '?t=' + e
            )
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(18),
            a = n(31),
            r = n(34),
            i = n(4),
            s = n(33),
            u = n(20)
        t.exports = function() {
            return {
                init: function(t) {;
                    (this.options = t), (this.today = s.getFormatDate())
                },
                run: function() {
                    var t = this
                    if (u.test()) {
                        var e = o.getLsCna(i.LS_CNA_KEY, t.today)
                        e ||
                            setTimeout(function() {
                                var e = r.getUrl(t.options.context.etag || {})
                                a.loadScript(e, function(e) {
                                    e &&
                                        'error' !== e.type &&
                                        o.setLsCna(i.LS_CNA_KEY, t.today, goldlog.Etag)
                                })
                            }, 1e3)
                    }
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(37),
            a = n(38),
            r = n(45)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                run: function(t, e) {
                    var n = a(window.location.hostname)
                    if (n && 'function' == typeof n.fn) {
                        var i = window.goldlog || (window.goldlog = {})
                        return (
                            i.setMetaInfo('aplus-getspmcd', function(t, e, n) {
                                var o = r.getSpmCD(t, n)
                                return r.doSendHjlj(t, e, n, o), o
                            }),
                            o.doSubMsg('URCHIN_PLUGIN_READY', function(t) {
                                var n = (t && t.userdata) || {}
                                i.appendMetaInfo('aplus-exdata', n),
                                    i.appendMetaInfo('aplus-cpvdata', n),
                                    e()
                            }),
                            n.fn(n.name),
                            2e3
                        )
                    }
                },
            }
        }
    },
    function(t, e) {
        'use strict'
        var n = 'function',
            o = function() {
                var t = window.goldlog || {},
                    e = t.aplus_pubsub || {},
                    o = typeof e.publish === n
                return o ? e : ''
            };
        (e.doPubMsg = function(t) {
            var e = o()
            e && typeof e.publish === n && e.publish.apply(e, t)
        }),
        (e.doCachePubs = function(t) {
            var e = o()
            e && typeof e.cachePubs === n && e.cachePubs.apply(e, t)
        }),
        (e.doSubMsg = function(t, e) {
            var a = o()
            a && typeof a.subscribe === n && a.subscribe(t, e)
        }),
        (e.doSubOnceMsg = function(t, e) {
            var a = o()
            a && typeof a.subscribeOnce === n && a.subscribeOnce(t, e)
        })
    },
    function(t, e, n) {
        'use strict'
        var o = n(9),
            a = n(29),
            r = n(39),
            i = n(43),
            s = n(44)
        t.exports = function(t) {
            for (
                var e = [
                        { name: 'youku.com', fn: r },
                        { name: 'soku.com', fn: r },
                        { name: 'tudou.com', fn: i },
                        { name: 'laifeng.com', fn: s },
                    ],
                    n = a.getMetaCnt('aplus-urchin2-logrule'),
                    u = 0; u < e.length; u++
            ) {
                var c = e[u].name
                if (o.isContain(t, c) || c === n) return e[u]
            }
            return !1
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(40),
            a = n(9),
            r = n(11),
            i = n(41),
            s = n(42)
        t.exports = function(t) {
            var e = o(),
                n = a.assign(e, {
                    params: { yft: '' },
                    urchinTracker: function(t, e) {
                        var n = this,
                            o = n.params || {};
                        (o.ysuid = n._yCookie('__ysuid') || ''),
                        (o.yuid = n._yCookie('_l_lgi') || 0),
                        n._yCookie('__ayft') ?
                            (o.yft = n._yCookie('__ayft')) :
                            (o.yft = new Date().valueOf())
                        var a = !1
                        n._yCookie('__aysid') ?
                            (o.ysid = n._yCookie('__aysid')) :
                            ((o.ysid = n._yGetPvid(3)), (a = !0)),
                            (o.pvid = n._yGetPvid(6)),
                            (o.rpvid = n._yGetRPvid()),
                            (o.ycid = window.cateStr || ''),
                            (o.rycid = n._yCookie('__arycid') || ''),
                            (o.ycms = window.cateStr || ''),
                            (o.rcms = n._yCookie('__arcms') || ''),
                            (o.unc = navigator.cookieEnabled ? 0 : 1),
                            (o.frame = top.location != self.location ? 1 : 0),
                            (o.ikuins = n._yGetIkuId()),
                            (o.dev = navigator.platform || ''),
                            (o.mtype = n._yGetMType()),
                            (o.from = n._yGetQueryString('from')),
                            (o.abt = n._yGetMType()),
                            (o.cpid = window._stat_topics_cpid || '')
                        var r = n._yCookie('__ayscnt')
                        if (a) {
                            var i = parseInt(r) || 0
                            o.yscnt = i + 1
                        } else o.yscnt = parseInt(r) || 1
                        var s = parseInt(n._yCookie('__aypstp')) || 0
                        o.ypstp = s + 1
                        var u = parseInt(n._yCookie('__ayspstp')) || 0;
                        (o.yspstp = u + 1),
                        (o.yvstp = parseInt(n._yCookie('__ayvstp')) || 0),
                        (o.ysvstp = parseInt(n._yCookie('__aysvstp')) || 0),
                        (this.params = o),
                        n._yInfo(t.firstTime, e),
                            n._yReset()
                    },
                    _yReset: function() {
                        var t = this,
                            e = t.params
                        t._yCookie('__ayft', e.yft, { expires: 'session' }),
                            t._yCookie('__aysid', e.ysid, { expires: 2 }),
                            t._yCookie('__arpvid', e.pvid + '-' + new Date().getTime(), {
                                expires: 'session',
                            }),
                            t._yCookie('__arycid', e.ycid, { expires: 'session' }),
                            t._yCookie('__ayscnt', parseInt(e.yscnt), { expires: 'session' }),
                            t._yCookie('__arcms', e.ycid, { expires: 'session' }),
                            t._yCookie('__aypstp', parseInt(e.ypstp), { expires: 'session' }),
                            t._yCookie('__ayspstp', parseInt(e.yspstp), { expires: 2 })
                    },
                })
            s.setSpmAB(location.hostname)
            var u = function() {
                var e,
                    o = { l_v: 3, p_v: 3, dmid: 1 },
                    a = r.getCookie('P_gck')
                'youku.com' === t
                    ?
                    ((e = r.getCookie('__ysuid')),
                        e || ((e = i.getPvid(3)), r.setCookie('__ysuid', e))) :
                    'soku.com' === t && (e = r.getCookie('SOKUSESSID')),
                    (o.pc_i = e || ''),
                    (o.pu_i = a || ''),
                    n.appendExinfo(o),
                    n.urchinTracker({ firstTime: 'yft', yuid: 'P_gck' }, o)
                var s = window.goldlog || (window.goldlog = {});
                (s.aplus_urchin2 = n), (window.UrchinAplus = n)
            }
            u()
        }
    },
    function(t, e, n) {
        'use strict'

        function o(t, e) {
            return t + Math.floor(Math.random() * (e - t + 1))
        }
        var a,
            r = n(11),
            i = n(23),
            s = window.navigator.userAgent,
            u = function(t) {
                var e = document.createElement('script'),
                    n = new Date().getTime();
                (t += '&_' + n),
                e.setAttribute('src', t),
                    document.getElementsByTagName('body')[0].appendChild(e)
            }
        t.exports = function() {
            return {
                params: {
                    ysuid: '',
                    yuid: '',
                    yft: '',
                    ysid: '',
                    pvid: '',
                    rpvid: '',
                    ycid: '',
                    rycid: '',
                    ypstp: '',
                    yspstp: '',
                    yscnt: '',
                    ycms: '',
                    rcms: '',
                    unc: '',
                    frame: '',
                    ikuins: '',
                    dev: '',
                    mtype: '',
                    from: '',
                    abt: '',
                    cpid: '',
                    yvstp: '',
                    ysvstp: '',
                },
                urchinTracker: function(t, e) {
                    var n = this,
                        i = n._yGetPvid(6),
                        s = function() {;
                            (n.params.ycid = window.cateStr || ''),
                            (n.params.yuid = n._yCookie(t.yuid)),
                            (n.params.ycms = window.cateStr || ''),
                            (n.params.unc = navigator.cookieEnabled ? 0 : 1),
                            (n.params.frame = top.location != self.location ? 1 : 0),
                            (n.params.ikuins = n._yGetIkuId()),
                            (n.params.dev = navigator.platform || ''),
                            (n.params.mtype = n._yGetMType()),
                            (n.params.from = n._yGetQueryString('from')),
                            (n.params.abt = n._yGetMType()),
                            (n.params.cpid = window._stat_topics_cpid || ''),
                            (n.params.yvstp = parseInt(n._yCookie('__ayvstp')) || 0),
                            (n.params.ysvstp = parseInt(n._yCookie('__aysvstp')) || 0),
                            n._yInfo(t.firstTime, e)
                        }
                    if (a) s()
                    else {
                        var c = new Date().getTime(),
                            p = o(1e4, 99999),
                            l = 'sck_callback' + c + '_' + p;
                        (goldlog[l] = function(e) {
                            a = !0
                            var o = e.YOUKUSESSID || '',
                                u = e.CNA || ''
                            o &&
                                n._yCookie('__ysuid', o, {
                                    domain: t.domain,
                                    expires: 'session',
                                }),
                                u && r.setCookie('cna', u, { domain: t.domain }),
                                (n.params.ysuid = e.YOUKUSESSID),
                                (n.params[t.firstTime] = e[t.firstTime]),
                                (n.params.ysid = e.ysid),
                                (n.params.pvid = i),
                                (n.params.rpvid = e.rpvid),
                                (n.params.rycid = e.rcid),
                                (n.params.ypstp = e.pstp),
                                (n.params.yspstp = e.spstp),
                                (n.params.yscnt = e.scnt),
                                (goldlog[l] = ''),
                                s()
                        }),
                        u(
                            '//lstat.youku.com/sck.php?pvid=' +
                            i +
                            '&jsoncallback=goldlog.' +
                            l
                        )
                    }
                },
                _yCookie: function(t, e, n) {
                    if (t) {
                        if (!e || 'undefined' == typeof e) {
                            var o = r.getCookie(t)
                            return this._yTrim(decodeURIComponent(o))
                        }
                        r.setCookie(t, encodeURIComponent(e), n)
                    }
                },
                _yInfoBase: function(t) {
                    var e = this,
                        n = e.params || {}
                    return (
                        t || (t = []),
                        t.push('ysid=' + n.ysid),
                        t.push('pvid=' + n.pvid),
                        t.push('rpvid=' + n.rpvid),
                        t.push('ycid=' + n.ycid),
                        t.push('rycid=' + n.rycid),
                        t.push('ypstp=' + n.ypstp),
                        t.push('yspstp=' + n.yspstp),
                        t.push('yscnt=' + n.yscnt),
                        t.push('ycms=' + n.ycms),
                        t.push('rcms=' + n.rcms),
                        t.push('unc=' + n.unc),
                        t.push('frame=' + n.frame),
                        t.push('ikuins=' + n.ikuins),
                        t.push('dev=' + n.dev),
                        t.push('mtype=' + n.mtype),
                        t.push('from=' + n.from),
                        t.push('abt=' + n.abt),
                        t.push('cpid=' + n.cpid),
                        t.join('&')
                    )
                },
                _yInfo: function(t, e) {
                    var n = this,
                        o = n.params || {}
                    try {
                        var a = [t + '=' + o[t]],
                            r = n._yInfoBase(a)
                        e || (e = {}), (e.extd = r)
                        var s = { plugin_name: 'aplus_urchin2', userdata: e }
                        goldlog.aplus_pubsub.publish('URCHIN_PLUGIN_READY', s),
                            goldlog.aplus_pubsub.cachePubs('URCHIN_PLUGIN_READY', s)
                    } catch (t) {
                        i.logger({ msg: t })
                    }
                },
                _yVvlogInfo: function() {
                    var t = this,
                        e = t.params;
                    (e.ysvstp = parseInt(e.ysvstp) + 1),
                    (e.yvstp = parseInt(e.yvstp) + 1)
                    var n = {}
                    return (
                        (n.pc_i = e.ysuid),
                        (n.pc_u = e.yuid),
                        (n.yvft = e.yft),
                        (n.seid = e.ysid),
                        (n.svstp = e.ysvstp),
                        (n.vsidc = e.yscnt),
                        (n.vstp = e.yvstp),
                        (n.pvid = e.pvid),
                        (n.rvpvid = e.rpvid),
                        (n.ycid = e.ycid),
                        (n.rycid = e.rycid),
                        (t.params = e),
                        t._yResetVV(),
                        n
                    )
                },
                _yResetVV: function() {
                    var t = this,
                        e = t.params
                    t._yCookie('__ayvstp', parseInt(e.yvstp), { expires: 'session' }),
                        t._yCookie('__aysvstp', parseInt(e.ysvstp), { expires: 2 })
                },
                _yTrim: function(t) {
                    return (
                        (t = t.replace(/(\s*|　*)$/, '')), (t = t.replace(/^(\s*|　*)/, ''))
                    )
                },
                _yGetPvid: function(t) {
                    var e = [
                            '0',
                            '1',
                            '2',
                            '3',
                            '4',
                            '5',
                            '6',
                            '7',
                            '8',
                            '9',
                            'a',
                            'b',
                            'c',
                            'd',
                            'e',
                            'f',
                            'g',
                            'h',
                            'i',
                            'j',
                            'k',
                            'l',
                            'm',
                            'n',
                            'o',
                            'p',
                            'q',
                            'r',
                            's',
                            't',
                            'u',
                            'v',
                            'w',
                            'x',
                            'y',
                            'z',
                            'A',
                            'B',
                            'C',
                            'D',
                            'E',
                            'F',
                            'G',
                            'H',
                            'I',
                            'J',
                            'K',
                            'L',
                            'M',
                            'N',
                            'O',
                            'P',
                            'Q',
                            'R',
                            'S',
                            'T',
                            'U',
                            'V',
                            'W',
                            'X',
                            'Y',
                            'Z',
                        ],
                        n = 0,
                        o = '',
                        a = new Date()
                    for (n = 0; n < t; n++) {
                        var r = parseInt(Math.random() * Math.pow(10, 6)) % e.length
                        o += e[r]
                    }
                    return a.getTime() + o
                },
                _yGetRPvid: function() {
                    try {
                        var t = this._yCookie('__arpvid') || ''
                        return '' == t ? '' : ((t = t.split('-')), t[0] || '')
                    } catch (t) {
                        return ''
                    }
                },
                _yGetIkuId: function() {
                    var t = null
                    if (s.indexOf('MSIE') != -1 && window.ActiveXObject)
                        try {
                            t = new window.ActiveXObject('iKuAgent.KuAgent2')
                        } catch (t) {}
                    return t ? t.Youku_Hao : 0
                },
                _yGetMType: function() {
                    var t = ''
                    return (t =
                        s.indexOf('Android') !== -1 ?
                        'adr' :
                        s.indexOf('iPad') !== -1 ?
                        'ipa' :
                        s.indexOf('iPhone') !== -1 ?
                        'iph' :
                        s.indexOf('iPod') !== -1 ?
                        'ipo' :
                        'oth')
                },
                _yGetQueryString: function(t) {
                    var e = new RegExp('(^|&)' + t + '=([^&]*)(&|$)'),
                        n = window.location.search.substr(1).match(e)
                    return null !== n ? unescape(n[2]) : ''
                },
                _yGetCna: function() {
                    var t = r.getCookie('cna') || ''
                    return t
                },
                _yGetRandStr: function(t) {
                    if ('number' != typeof t || t <= 0) return ''
                    var e = this._yGetPvid(t)
                    return e
                },
                isAppendExinfo: !0,
                appendExinfo: function(t) {
                    if (this.isAppendExinfo) {
                        var e = t.pc_i || '',
                            n = t.pu_i || ''
                        e && n && (this.isAppendExinfo = !1)
                        var o = window.goldlog_queue || (window.goldlog_queue = [])
                        o.push({
                            action: 'goldlog.appendMetaInfo',
                            arguments: ['aplus-exinfo', 'pc_i=' + e + '&pu_i=' + n],
                        })
                    }
                },
            }
        }
    },
    function(t, e) {
        'use strict'
        e.getPvid = function(t) {
            var e = [
                    '0',
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    'a',
                    'b',
                    'c',
                    'd',
                    'e',
                    'f',
                    'g',
                    'h',
                    'i',
                    'j',
                    'k',
                    'l',
                    'm',
                    'n',
                    'o',
                    'p',
                    'q',
                    'r',
                    's',
                    't',
                    'u',
                    'v',
                    'w',
                    'x',
                    'y',
                    'z',
                    'A',
                    'B',
                    'C',
                    'D',
                    'E',
                    'F',
                    'G',
                    'H',
                    'I',
                    'J',
                    'K',
                    'L',
                    'M',
                    'N',
                    'O',
                    'P',
                    'Q',
                    'R',
                    'S',
                    'T',
                    'U',
                    'V',
                    'W',
                    'X',
                    'Y',
                    'Z',
                ],
                n = 0,
                o = '',
                a = new Date()
            for (n = 0; n < t; n++) {
                var r = parseInt(Math.random() * Math.pow(10, 6)) % e.length
                o += e[r]
            }
            return a.getTime() + o
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(3),
            a = {
                'pd.youku.com': 'pd',
                'tv.youku.com': 'tv',
                'fun.youku.com': 'fu',
                'heyi.youku.com': 'hy',
                'game.youku.com': 'gm',
                'tvs.youku.com': 'ts',
                'mapp.youku.com': 'mp',
                'zipindao.youku.com': 'zp',
                'hz.youku.com': 'hz',
                'iku.youku.com': 'ik',
                'fashion.youku.com': 'fs',
                'live.youku.com': 'lv',
                'static.youku.com': 'st',
                'faxian.youku.com': 'fx',
                'laiwan.youku.com': 'lw',
                'yuanxian.youku.com': 'yx',
                'zy.youku.com': 'zy',
                'vr.youku.com': 'vr',
                'dv.youku.com': 'dv',
                'paike.youku.com': 'pk',
                'i.youku.com': 'i9',
                'guanghe.youku.com': 'gh',
                'movie.youku.com': 'mv',
                'news.youku.com': 'nw',
                'svip.youku.com': 'sv',
                'comic.youku.com': 'cm',
                'mobile.youku.com': 'mb',
                'finance.youku.com': 'fc',
                '3g.youku.com': '3g',
                'tech.youku.com': 'tc',
                'child.youku.com': 'ch',
                'original.youku.com': 'or',
                'jilupian.youku.com': 'jl',
                'auto.youku.com': 'at',
                'music.youku.com': 'ms',
                'top.youku.com': 'tp',
                'life.youku.com': 'lf',
                'gongyi.youku.com': 'gy',
                'travel.youku.com': 'tr',
                'www.youku.com': 'ww',
                'baby.youku.com': 'bb',
                'sports.youku.com': 'sp',
                'edu.youku.com': 'ed',
                'epg.youku.com': 'ep',
                'c.youku.com': 'c9',
                'ent.youku.com': 'et',
                'culture.youku.com': '32',
            },
            r = function(t) {
                var e, n, r, i
                try {
                    var s = goldlog.spm_ab || [],
                        u = s[0] || '0',
                        c = s[1] || '0';
                    ('0' !== u && '0' !== c) ||
                    ((e = a[t] || '0'),
                        '0' === e &&
                        /^https?:\/\/youku.com/.test(location.href) &&
                        (e = a['www.youku.com']),
                        (n = window.pageIdNum),
                        (n = /^\d{1,}$/.test(n) ? parseInt(n) : '0'),
                        '0' !== e &&
                        '0' !== n &&
                        ((r = 'a2h' + e),
                            (i = 2e7 + n),
                            goldlog.setPageSPM(r + '', i + '')))
                } catch (a) {
                    try {
                        var p = 'autoSpmAB.setSpmAB error hostname=' + t;
                        (p += ',spm_a=' + e),
                        (p += ',spm_b=' + n),
                        (p += ',temp_spma=' + r),
                        (p += ',temp_spmab=' + i + ' !' + a.message),
                        o.do_tracker_jserror({ message: p, error: a })
                    } catch (t) {
                        o.do_tracker_jserror({
                            message: 'autoSpmAB.setSpmAB trycatch error',
                            error: t,
                        })
                    }
                }
            }
        e.setSpmAB = function(t) {
            var e = window.goldlog_queue || (window.goldlog_queue = [])
            e.push({
                action: 'goldlog.aplus_pubsub.subscribe',
                arguments: [
                    'aplusReady',
                    function(e) {
                        'complete' === e && r(t)
                    },
                ],
            })
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(40),
            a = n(9),
            r = n(11)
        t.exports = function() {
            var t = o(),
                e = a.assign(t, {
                    params: {
                        ysuid: '',
                        yuid: '',
                        tft: '',
                        ysid: '',
                        pvid: '',
                        rpvid: '',
                        ycid: '',
                        rycid: '',
                        ypstp: '',
                        yspstp: '',
                        yscnt: '',
                        ycms: '',
                        rcms: '',
                        unc: '',
                        frame: '',
                        ikuins: '',
                        dev: '',
                        mtype: '',
                        from: '',
                        abt: '',
                        cpid: '',
                        yvstp: '',
                        ysvstp: '',
                    },
                }),
                n = function() {
                    var t = { l_v: 3, p_v: 3, dmid: 1 };
                    (t.pc_i = r.getCookie('__ysuid')),
                    (t.pu_i = r.getCookie('P_gck')),
                    e.appendExinfo(t),
                        e.urchinTracker({ domain: '.tudou.com', firstTime: 'tft', yuid: 'P_gck' },
                            t
                        )
                    var n = window.goldlog || (window.goldlog = {});
                    (n.aplus_urchin2 = e), (window.UrchinAplus = e)
                }
            n()
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(40),
            a = n(9),
            r = n(11),
            i = n(41)
        t.exports = function() {
            var t = o(),
                e = a.assign(t, {
                    params: {
                        ysuid: '',
                        yuid: '',
                        lft: '',
                        ysid: '',
                        pvid: '',
                        rpvid: '',
                        ycid: '',
                        rycid: '',
                        ypstp: '',
                        yspstp: '',
                        yscnt: '',
                        ycms: '',
                        rcms: '',
                        unc: '',
                        frame: '',
                        ikuins: '',
                        dev: '',
                        mtype: '',
                        from: '',
                        abt: '',
                        cpid: '',
                        yvstp: '',
                        ysvstp: '',
                    },
                }),
                n = function() {
                    var t = { l_v: 3, p_v: 3, dmid: 1 },
                        n = r.getCookie('__ysuid')
                    n || ((n = i.getPvid(3)), r.setCookie('__ysuid', n)),
                        (t.pc_i = n),
                        (t.pu_i = r.getCookie('P_gck')),
                        e.appendExinfo(t),
                        e.urchinTracker({ domain: '.laifeng.com', firstTime: 'lft', yuid: 'P_gck' },
                            t
                        )
                    var o = window.goldlog || (window.goldlog = {});
                    (o.aplus_urchin2 = e), (window.UrchinAplus = e)
                }
            n()
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(3),
            a = {
                UL: 1,
                OL: 2,
                LI: 3,
                INPUT: 4,
                DIV: 5,
                BODY: 6,
                STRONG: 7,
                SPAN: 8,
                FORM: 9,
                BUTTON: 10,
                CAPTION: 11,
                FIELDSET: 12,
                COLGROUP: 13,
                TFOOT: 14,
                LABEL: 15,
                LEGEND: 16,
                THEAD: 17,
                OPTGROUP: 18,
                OPTION: 19,
                SELECT: 20,
                TABLE: 21,
                TBODY: 22,
                IFRAME: 0,
                SCRIPT: 0,
                OBJECT: 0,
                EMBED: 0,
                IMG: 0,
            }
        e.doSendHjlj = function(t, e, n, a) {
            var r, i
            try {
                var s = function() {
                    var t = window.goldlog || {},
                        o = [n, a.spm_c, a.spm_d],
                        s = o.join('.');
                    (r = '//gm.mmstat.com/yt/preclk.' + s),
                    (i = {
                        autosend: 1,
                        pos_co: '#' + a.spm_c + '~' + a.spm_d,
                        eventtype: e ? e.type : '',
                    }),
                    t.sendPositionCode(r, i)
                }
                '0' !== a.spm_c && e && u(e) && s()
            } catch (t) {
                var c =
                    'doSendHjlj error: ' +
                    t.message +
                    ',spm_ab=' +
                    n +
                    ',params' +
                    JSON.stringify(i) +
                    ',req_path=' +
                    r
                o.do_tracker_jserror({ message: c, error: t })
            }
        }
        var r = 'HTML',
            i = 'BODY',
            s = function(t) {
                for (
                    var e, n = { A: 1, INPUT: 1, BUTTON: 1 }; t && t.tagName !== r && t.tagName !== i && t.getAttribute;

                ) {
                    if (((e = t.getAttribute('data-stat-role')), 'ck' === e)) return t
                    if (n[t.tagName]) return t
                    if (!(t = t.parentNode)) break
                }
                return (!(!n[t.nodeName] && ((t = t.parentNode || {}), !n[t.nodeName])) && t)
            },
            u = function(t) {
                var e
                e = 'touchstart' === t.type ? t.touches[0] : t
                var n, o
                return (
                    e.target || (e.target = e.srcElement || document), !e.pageX &&
                    e.clientX &&
                    ((n = document.documentElement),
                        (o = document.body),
                        (e.pageX =
                            ((n && n.scrollLeft) || (o && o.scrollLeft) || 0) -
                            ((n && n.clientLeft) || (o && o.clientLeft) || 0)),
                        (e.pageY =
                            ((n && n.scrollTop) || (o && o.scrollTop) || 0) -
                            ((n && n.clientTop) || (o && o.clientTop) || 0))), !('undefined' == typeof e.pageX || !s(e.target))
                )
            }
        e.getSpmCD = function(t) {
            var e = { spm_c: '0', spm_d: '0' },
                n = []
            if (t.id) return (e.spm_c = t.id), e
            for (
                var o, r; t && ((o = t.nodeName.toUpperCase()), 'BODY' != o); t = t.parentNode
            ) {
                if (t.id && 'i' != t.getAttribute('cs')) return (e.spm_c = t.id), e
                r = 0
                for (var i = t.previousSibling; i; i = i.previousSibling) {
                    var s = i.nodeName.toUpperCase()
                    0 !== a[s] && s == o && ++r
                }
                o = a[o] || o
                var u = r ? '!' + (r + 1) : ''
                n.unshift(o + u), (e.spm_d = n.join('~'))
            }
            return e
        }
    },
    function(t, e, n) {
        'use strict'
        e.plugins_pv = [
            { name: 'etag', enable: !0, path: n(47) },
            { name: 'when_to_sendpv', enable: !0, path: n(48) },
            { name: 'where_to_sendlog_ut', enable: !0, path: n(49) },
            { name: 'is_single', enable: !0, path: n(51) },
            { name: 'what_to_pvhash', enable: !0, path: n(55) },
            { name: 'what_to_sendpv', enable: !0, path: n(56) },
            {
                name: 'what_to_sendpv_userdata',
                enable: !0,
                path: n(60),
                deps: ['what_to_sendpv'],
            },
            {
                name: 'what_to_sendpv_etag',
                enable: !0,
                path: n(65),
                deps: ['etag', 'what_to_sendpv'],
            },
            {
                name: 'what_to_sendpv_ut',
                enable: !0,
                path: n(66),
                deps: ['where_to_sendlog_ut', 'is_single'],
            },
            {
                name: 'what_to_pv_slog',
                enable: !0,
                path: n(67),
                deps: ['what_to_sendpv'],
            },
            { name: 'can_to_sendpv', enable: !0, path: n(68) },
            { name: 'where_to_sendpv', enable: !0, path: n(25), deps: ['is_single'] },
            {
                name: 'do_sendpv',
                enable: !0,
                path: n(69),
                deps: ['is_single', 'what_to_sendpv', 'where_to_sendpv'],
            },
            {
                name: 'do_sendpv_ut',
                enable: !0,
                path: n(70),
                deps: ['what_to_sendpv_ut', 'where_to_sendlog_ut'],
            },
            { name: 'after_pv', enable: !0, path: n(71) },
        ]
    },
    function(t, e, n) {
        'use strict'
        var o = n(37)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                run: function() {
                    var t = this
                    o.doSubOnceMsg('aplusInitContext', function(e) {
                        e.etag && (t.options.context.etag = e.etag)
                    })
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(26),
            a = n(22),
            r = n(27)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                getMetaInfo: function() {
                    var t = o.getGoldlogVal('_$') || {},
                        e = t.meta_info || r.getInfo()
                    return e
                },
                getAplusWaiting: function() {
                    var t = this.getMetaInfo() || {}
                    return t['aplus-waiting']
                },
                run: function(t, e) {
                    var n = this.options.config || {},
                        o = this.getAplusWaiting()
                    if (o && n.is_auto)
                        switch (
                            ((o = this.getAplusWaiting() + ''),
                                (this.options.context.when_to_sendpv = { aplusWaiting: o }),
                                o)
                        ) {
                            case 'MAN':
                                return 'done'
                            case '1':
                                return (
                                    (this.options.context.when_to_sendpv.isWait = !0),
                                    a.sleep(6e3, function() {
                                        e()
                                    }),
                                    6e3
                                )
                            default:
                                var r = 1 * o
                                if (r + '' != 'NaN')
                                    return (
                                        (this.options.context.when_to_sendpv.isWait = !0),
                                        a.sleep(r, function() {
                                            e()
                                        }),
                                        r
                                    )
                        }
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(50)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                getAplusToUT: function(t) {
                    return {
                        toUT2: o.getAplusToUT('toUT2', t),
                        toUT: o.getAplusToUT('toUT', t),
                    }
                },
                run: function() {
                    if ('Umeng4Aplus' === goldlog.aplusBridgeName)
                        this.options.context.where_to_sendlog_ut.toUTName = 'toUT2'
                    else {
                        var t = this.getAplusToUT(this.options.config.recordType)
                        this.options.context.where_to_sendlog_ut.aplusToUT = t
                    }
                },
            }
        }
    },
    function(t, e) {
        'use strict'
        var n = navigator.userAgent,
            o = /WindVane/i.test(n)
        e.is_WindVane = o
        var a = function() {
            var t = goldlog.getMetaInfo('aplus_chnl')
            return (!(!t ||
                !t.isAvailable ||
                ('function' != typeof t.toUT2 && 'function' != typeof t.toUT)
            ) && t)
        };
        (e.isAplusChnl = a),
        (e.getAplusToUT = function(t, e) {
            var n = {},
                r = a()
            if ('object' == typeof r)
                (n.bridgeName = r.bridgeName || 'customBridge'),
                (n.bridgeVersion = r.bridgeVersion || r.version || ''),
                (n.isAvailable = r.isAvailable),
                (n.toUT2 = r.toUT2 || r.toUT)
            else {
                var i = window.WindVane || {}
                if (o && i && i.isAvailable && 'function' == typeof i.call) {
                    var s = t || 'toUT',
                        u = goldlog.getMetaInfo('aplus-toUT') + ''
                    'toUT2HC' === u && 'PV' === e && (s = u),
                        (n = {
                            bridgeName: 'WindVane',
                            bridgeVersion: i.version || '',
                            isAvailable: !0,
                            toUT2: function(t, e, n, o) {
                                return i.call('WVTBUserTrack', s, t, e, n, o)
                            },
                        })
                }
            }
            return n
        })
    },
    function(t, e, n) {
        'use strict'
        var o = n(26),
            a = n(52),
            r = n(53),
            i = n(4)
        t.exports = function() {
            return {
                init: function(t) {;
                    (this.options = t),
                    (this._$ = o.getGoldlogVal('_$') || {}),
                    (this.isBoth = '1' === this._$.meta_info['aplus-both-request']),
                    (this.is_WindVane = this._$.is_WindVane)
                },
                isSingle_pv: function(t) {
                    return t ?
                        !this.isBoth :
                        !(!this.is_WindVane || !r.isSingleUaVersion() || this.isBoth)
                },
                isSingle_hjlj: function(t, e) {
                    return e ?
                        !this.isBoth :
                        !(!this.is_WindVane || !r.isSingleSendLog(t) || this.isBoth)
                },
                isSingle_uhjlj: function(t, e) {
                    return (
                        (!t || !/^\/aplus\.99\.(\d)+$/.test(t.logkey)) &&
                        (e ?
                            !this.isBoth :
                            !(!(
                                this.is_WindVane &&
                                t &&
                                t.logkey &&
                                r.isSingleUaVersion()
                            ) || this.isBoth))
                    )
                },
                run: function() {
                    var t = this.options.context || {},
                        e = this.options.config || {},
                        n = t.where_to_sendlog_ut.aplusToUT || {},
                        o = n.toUT || {},
                        r = n.toUT2 || {},
                        s = a.isNative4Aplus(),
                        u = !!(o.isAvailable || r.isAvailable || s),
                        c = t.userdata || {},
                        p = !!t.is_single
                    switch (e.recordType) {
                        case i.recordTypes.uhjlj:
                            p = this.isSingle_uhjlj(c, s)
                            break
                        case i.recordTypes.hjlj:
                            p = this.isSingle_hjlj(c, s)
                            break
                        case i.recordTypes.pv:
                            p = this.isSingle_pv(s)
                            break
                        default:
                            p = this.isSingle_pv(s)
                    };
                    (this.options.context.is_single = u && p),
                    (this.options.context.ut_is_available = u)
                },
            }
        }
    },
    function(t, e) {
        'use strict'
        var n = 'UT4Aplus',
            o = 'Umeng4Aplus';
        (e.isNative4Aplus = function() {
            var t = goldlog.getMetaInfo('aplus-toUT'),
                e = goldlog.aplusBridgeName
            return (e === n && t === n) || e === o
        }),
        (e.haveNativeFlagInUA = function() {
            var t = goldlog.aplusBridgeName
            if (!t && 'boolean' != typeof t) {
                var e = new RegExp([n, o].join('|'), 'i'),
                    a = navigator.userAgent.match(e);
                (t = !!a && a[0]), (goldlog.aplusBridgeName = t)
            }
            return !!t
        })
    },
    function(t, e, n) {
        'use strict'
        var o = n(54),
            a = n(52),
            r = function(t) {
                var e = t.logkey.toLowerCase()
                0 === e.indexOf('/') && (e = e.substr(1))
                var n = t.gmkey ? t.gmkey.toUpperCase() : 'OTHER'
                switch (n) {
                    case 'EXP':
                        return '2201'
                    case 'CLK':
                        return '2101'
                    case 'SLD':
                        return '19999'
                    case 'OTHER':
                    default:
                        return '19999'
                }
            },
            i = /\sA2U\/x/.test(window.navigator.userAgent),
            s = function() {
                return (
                    i ||
                    a.haveNativeFlagInUA() ||
                    o.webviewIsAbove({
                        version_ios_tb: [5, 11, 7],
                        version_ios_tm: [5, 24, 1],
                        version_android_tb: [5, 11, 7],
                        version_android_tm: [5, 24, 1],
                    })
                )
            };
        (e.isSingleUaVersion = s),
        (e.isSingleSendLog = function(t) {
            return (
                (!t || !/^\/fsp\.1\.1$/.test(t.logkey)) && !!(t && t.logkey && s())
            )
        }),
        (e.getFunctypeValue = function(t) {
            return e.isSingleSendLog(t) ? r(t) : '2101'
        }),
        (e.getFunctypeValue2 = function(t) {
            return r(t)
        })
    },
    function(t, e) {
        'use strict'
        var n = function(t) {
            var e = [0, 0, 0]
            try {
                if (t) {
                    var n = t[1],
                        o = n.split('.')
                    if (o.length > 2)
                        for (var a = 0; a < o.length;)(e[a] = parseInt(o[a])), a++
                }
            } catch (t) {
                e = [0, 0, 0]
            } finally {
                return e
            }
        }
        e.parseVersion = n
        var o = function(t, e) {
            var n = !1
            try {
                var o = t[0] > e[0],
                    a = t[1] > e[1],
                    r = t[2] > e[2],
                    i = t[0] === e[0],
                    s = t[1] === e[1],
                    u = t[2] === e[2]
                n = !!o || !(!i || !a) || !!(i && s && r) || !!(i && s && u)
            } catch (t) {
                n = !1
            } finally {
                return n
            }
        };
        (e.isAboveVersion = o),
        (e.webviewIsAbove = function(t, e) {
            var a = !1
            try {
                e || (e = navigator.userAgent)
                var r = e.match(/AliApp\(TB\/(\d+[._]\d+[._]\d+)/i),
                    i = n(r),
                    s = e.match(/AliApp\(TM\/(\d+[._]\d+[._]\d+)/i),
                    u = n(s),
                    c = /iPhone|iPad|iPod|ios/i.test(e),
                    p = /android/i.test(e)
                c
                    ?
                    r && i ?
                    (a = o(i, t.version_ios_tb)) :
                    s && u && (a = o(u, t.version_ios_tm)) :
                    p &&
                    (r && i ?
                        (a = o(i, t.version_android_tb)) :
                        s && u && (a = o(u, t.version_android_tm)))
            } catch (t) {
                a = !1
            }
            return a
        })
    },
    function(t, e, n) {
        'use strict'
        var o = n(26)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                run: function() {
                    var t = this.options.context.what_to_pvhash || {},
                        e = o.getGoldlogVal('_$') || {},
                        n = e.meta_info || {},
                        a = n['aplus-pvhash'] || '',
                        r = []
                    '1' === a && (r = ['_aqx_uri', encodeURIComponent(location.href)]),
                        (t.hash = r),
                        (this.options.context.what_to_pvhash = t)
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(17),
            a = n(9),
            r = n(31),
            i = n(26),
            s = n(28),
            u = n(11),
            c = n(57),
            p = n(58),
            l = n(59)
        t.exports = function() {
            return a.assign(l, {
                init: function(t) {;
                    (this.options = t),
                    this.cookie_data || (this.cookie_data = u.getData()),
                        this.client_info || (this.client_info = i.getClientInfo() || {})
                    var e = location.hash
                    e && 0 === e.indexOf('#') && (e = e.substr(1)), (this.loc_hash = e)
                },
                getExParams: function() {
                    var t = window,
                        e = document,
                        n = [],
                        u = parent !== t.self,
                        p =
                        e.getElementById('beacon-aplus') ||
                        e.getElementById('tb-beacon-aplus'),
                        l = s.tryToGetAttribute(p, 'exparams'),
                        g = r.mergeExparams(l, r.getExParamsFromMeta(), o) || ''
                    g = g.replace(/&amp;/g, '&')
                    var d,
                        f,
                        _ = [],
                        m = i.getGoldlogVal('_$') || {},
                        h = m.meta_info || {}
                    if (u && !h['aplus-ifr-pv']) {
                        for (f = _.length, d = 0; d < f; d++)
                            if (o.isContain(location.hostname, _[d]))
                                return n.push([o.mkPlainKeyForExparams(), g]), n
                        g = g.replace(/\buser(i|I)d=\w*&?/, '')
                    };
                    (g = g.replace(/\buser(i|I)d=/, 'uidaplus=')),
                    g && n.push([o.mkPlainKeyForExparams(), g])
                    var v = a.makeCacheNum()
                    return c.updateKey(n, 'cache', v), n
                },
                getExtra: function() {
                    var t = [],
                        e = i.getGoldlogVal('_$') || {},
                        n = e.meta_info || {},
                        a = this.cookie_data || {},
                        r = this.getClientInfo(!0) || []
                    return (
                        o.ifAdd(t, r),
                        o.ifAdd(t, [
                            ['thw', a.thw],
                            ['bucket_id', p.getBucketId(n)],
                            ['urlokey', this.loc_hash],
                            ['wm_instanceid', n.ms_data_instance_id],
                        ]),
                        t
                    )
                },
            })
        }
    },
    function(t, e) {
        'use strict'

        function n(t, e, n) {
            r(t, 'spm-cnt', function(t) {
                var o = t.split('.')
                return (
                    (o[0] = goldlog.spm_ab[0]),
                    (o[1] = goldlog.spm_ab[1]),
                    e ?
                    (o[1] = o[1].split('/')[0] + '/' + e) :
                    (o[1] = o[1].split('/')[0]),
                    n && (o[4] = n),
                    o.join('.')
                )
            })
        }

        function o(t, e) {
            var n = window.g_SPM && g_SPM._current_spm
            n &&
                r(
                    t,
                    'spm-url',
                    function() {
                        return [n.a, n.b, n.c, n.d].join('.') + (e ? '.' + e : '')
                    },
                    'spm-cnt'
                )
        }

        function a(t, e) {
            var n,
                o,
                a,
                r = -1
            for (n = 0, o = t.length; n < o; n++)
                if (((a = t[n]), a[0] === e)) {
                    r = n
                    break
                }
            r >= 0 && t.splice(r, 1)
        }

        function r(t, e, n, o) {
            var a,
                r,
                i = t.length,
                s = -1,
                u = 'function' == typeof n
            for (a = 0; a < i; a++) {
                if (((r = t[a]), r[0] === e))
                    return void(u ? (r[1] = n(r[1])) : (r[1] = n))
                o && r[0] === o && (s = a)
            }
            o && (u && (n = n()), s > -1 ? t.splice(s, 0, [e, n]) : t.push([e, n]))
        }
        t.exports = { updateSPMCnt: n, updateSPMUrl: o, updateKey: r, removeKey: a }
    },
    function(t, e, n) {
        'use strict'

        function o(t, e) {
            var n,
                o = 2146271213
            for (n = 0; n < t.length; n++) o = (o << 5) + o + t.charCodeAt(n)
            return (65535 & o) % e
        }

        function a(t) {
            var e,
                n = r.getCookie('t')
            return (
                ('3' != t.ms_prototype_id && '5' != t.ms_prototype_id) ||
                (e = n ? o(n, 20) : ''),
                e
            )
        }
        var r = n(11)
        e.getBucketId = a
    },
    function(t, e, n) {
        'use strict'
        var o = n(17),
            a = n(9),
            r = n(26),
            i = n(50),
            s = n(11),
            u = n(4)
        t.exports = {
            init: function(t) {;
                (this.options = t),
                this.cookie_data || (this.cookie_data = s.getData())
            },
            getBasicParams: function() {
                var t = document,
                    e = r.getGoldlogVal('_$') || {},
                    n = e.spm || {},
                    a = e.meta_info || {},
                    i = a['aplus-ifr-pv'] + '' == '1',
                    u = o.is_in_iframe && !i ? 0 : 1,
                    c = this.options.config || {},
                    p = t.title
                c.title && (p += '_' + c.title)
                var l = [
                        ['logtype', u],
                        ['title', p],
                        ['pre', e.page_referrer || ''],
                        ['scr', screen.width + 'x' + screen.height],
                    ],
                    g = a['aplus-p-url-init']
                g && l.push(['_p_url', a['aplus-p-url'] || g])
                var d = this.cookie_data || {},
                    f = this.options.context || {},
                    _ = f.etag || {},
                    m = _.cna || d.cna || s.getCookie('cna')
                m && l.push([o.mkPlainKey(), 'cna=' + m]),
                    d.tracknick && l.push([o.mkPlainKey(), 'nick=' + d.tracknick])
                var h = n.spm_url || ''
                return (
                    o.ifAdd(l, [
                        ['wm_pageid', a.ms_data_page_id],
                        ['wm_prototypeid', a.ms_prototype_id],
                        ['wm_sid', a.ms_data_shop_id],
                        ['spm-url', h],
                        ['spm-pre', n.spm_pre],
                        ['spm-cnt', n.spm_cnt],
                        ['cnaui', d.cnaui],
                    ]),
                    l
                )
            },
            getExParams: function() {
                return []
            },
            getExtra: function() {
                return []
            },
            getClientInfo: function(t) {
                var e = [],
                    n = r.getGoldlogVal('_$') || {},
                    s = this.client_info || {},
                    c = s.ua_info || {}
                if (t || (!i.is_WindVane && !i.isAplusChnl())) {
                    for (
                        var p, l = [], g = ['p', 'o', 'b', 's', 'w', 'wx', 'ism'], d = 0;
                        (p = g[d++]);

                    )
                        c[p] && l.push([p, c[p]])
                    o.ifAdd(e, l)
                }
                o.ifAdd(e, [
                    ['cache', a.makeCacheNum()],
                    ['lver', goldlog.lver || u.lver],
                    ['jsver', n.script_name || u.script_name],
                    ['pver', goldlog.aplus_cplugin_ver],
                ])
                var f = this.options.config || {},
                    _ = f.is_auto
                return _ || o.ifAdd(e, [
                    ['mansndlog', 1]
                ]), e
            },
            processLodashDollar: function() {
                var t = r.getGoldlogVal('_$') || {}
                t.page_url !== location.href &&
                    ((t.page_referrer = t.page_url), (t.page_url = location.href)),
                    r.setGoldlogVal('_$', t)
            },
            getLsParams: function() {
                var t = r.getGoldlogVal('_$') || {},
                    e = []
                return (
                    t.lsparams &&
                    t.lsparams.spm_id &&
                    (e.push(['lsparams', t.lsparams.spm_id]),
                        e.push(['lsparams_pre', t.lsparams.current_url])),
                    e
                )
            },
            run: function() {
                var t = this.getBasicParams() || [],
                    e = this.getExParams() || [],
                    n = this.getExtra() || []
                this.processLodashDollar()
                var o = this.getLsParams() || [],
                    a = [].concat(t, e, n, o);
                (this.options.context.what_to_sendpv.pvdata = a),
                (this.options.context.what_to_sendpv.exparams = e)
            },
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(17),
            a = n(26),
            r = n(57),
            i = n(11),
            s = n(61)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                getPageId: function() {
                    var t = this.options.config || {},
                        e = this.options.context || {},
                        n = e.userdata || {}
                    return t.page_id || t.pageid || t.pageId || n.page_id
                },
                getPageInfo: function() {
                    var t
                    try {
                        var e = top.location !== self.location
                        e &&
                            void 0 !== window.innerWidth &&
                            (t = { width: window.innerWidth, height: window.innerHeight })
                    } catch (t) {}
                    return t
                },
                getUserdata: function() {
                    var t = a.getGoldlogVal('_$') || {},
                        e = t.spm || {},
                        n = this.options.context || {},
                        r = n.userdata || {},
                        u = this.options.config || {},
                        c = []
                    if (u && !u.is_auto) {
                        u.gokey && c.push([o.mkPlainKey(), u.gokey])
                        var p = e.data.b
                        if (p) {
                            var l = this.getPageId();
                            (p = l ? p.split('/')[0] + '/' + l : p.split('/')[0]), s.setB(p)
                            var g = e.spm_cnt.split('.')
                            g && g.length > 2 && ((g[1] = p), (e.spm_cnt = g.join('.')))
                        }
                    }
                    var d = function(t) {
                        if ('object' == typeof t)
                            for (var e in t)
                                'object' != typeof t[e] &&
                                'function' != typeof t[e] &&
                                c.push([e, t[e]])
                    }
                    d(goldlog.getMetaInfo('aplus-cpvdata')), d(r)
                    var f = i.getCookie('workno') || i.getCookie('emplId')
                    f && c.push(['workno', f])
                    var _ = i.getHng()
                    _ && c.push(['_hng', i.getHng()])
                    var m = this.getPageInfo()
                    return m && (c.push(['_pw', m.width]), c.push(['_ph', m.height])), c
                },
                processLodashDollar: function() {
                    var t = this.options.config || {},
                        e = a.getGoldlogVal('_$') || {}
                    t && t.referrer && (e.page_referrer = t.referrer),
                        a.setGoldlogVal('_$', e)
                },
                updatePre: function(t) {
                    var e = a.getGoldlogVal('_$') || {}
                    return e.page_referrer && r.updateKey(t, 'pre', e.page_referrer), t
                },
                run: function() {
                    var t = this.options.context.what_to_sendpv.pvdata,
                        e = this.getUserdata()
                    this.processLodashDollar()
                    var n = t,
                        o = this.options.context.what_to_pvhash.hash
                    o && o.length > 0 && n.push(o),
                        (n = n.concat(e)),
                        (n = this.updatePre(n))
                    var a = this.getPageId()
                    a && r.updateSPMCnt(n, a),
                        (this.options.context.what_to_sendpv.pvdata = n),
                        (this.options.context.userdata = e)
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'

        function o() {
            if (!s.data.a || !s.data.b) {
                var t = r._SPM_a,
                    e = r._SPM_b
                if (t && e)
                    return (
                        (t = t.replace(/^{(\w+\/)}$/g, '$1')),
                        (e = e.replace(/^{(\w+\/)}$/g, '$1')),
                        (s.is_wh_in_page = !0),
                        void c.setAB(t, e)
                    )
                var n = goldlog._$.meta_info
                t = n['data-spm'] || n['spm-id'] || '0'
                var o = t.split('.')
                o.length > 1 && ((t = o[0]), (e = o[1])), c.setA(t), e && c.setB(e)
                var a = i.getElementsByTagName('body');
                (a = a && a.length ? a[0] : null),
                a &&
                    ((e = p.tryToGetAttribute(a, 'data-spm')),
                        e ? c.setB(e) : 1 === o.length && c.setAB('0', '0'))
            }
        }

        function a() {
            var t = s.data.a,
                e = s.data.b
            t && e && (goldlog.spm_ab = [t, e])
        }
        var r = window,
            i = document,
            s = {},
            u = {}
        s.data = u
        var c = {},
            p = n(28),
            l = n(62),
            g = location.href,
            d = n(63).getRefer(),
            f = n(4);
        (c.setA = function(t) {;
            (s.data.a = t), a()
        }),
        (c.setB = function(t) {;
            (s.data.b = t), a()
        }),
        (c.setAB = function(t, e) {;
            (s.data.a = t), (s.data.b = e), a()
        })
        var _ = l.getSPMFromUrl,
            m = function() {
                var t = f.utilPvid.makePVId()
                return f.mustSpmE ? t || goldlog.pvid || '' : t || ''
            },
            h = function(t, e) {
                var n = t.goldlog || window.goldlog || {},
                    a = n.meta_info || {}
                s.meta_protocol = a.spm_protocol
                var r,
                    i = n.spm_ab || [],
                    u = i[0] || '0',
                    c = i[1] || '0'
                '0' === u &&
                    '0' === c &&
                    (o(), (u = s.data.a || '0'), (c = s.data.b || '0')),
                    (r = [s.data.a, s.data.b].join('.')),
                    (s.spm_cnt = (r || '0.0') + '.0.0')
                var p = t.send_pv_count > 0 ? m() : n.pvid
                p && (s.spm_cnt += '.' + p),
                    (n._$.spm = s),
                    'function' == typeof e && e(p)
            };
        (c.spaInit = function(t, e, n, o) {
            var a = 'function' == typeof o ? o : function() {},
                r = s.spm_url,
                i = window.g_SPM || {},
                u = t._$ || {},
                c = u.send_pv_count
            h({ goldlog: t, meta_info: e, send_pv_count: c }, function(t) {
                s.spm_cnt = s.data.a + '.' + s.data.b + '.0.0' + (t ? '.' + t : '')
                var o = e['aplus-spm-fixed']
                if ('1' !== o) {;
                    (s.spm_pre = _(d)),
                    (s.origin_spm_pre = s.spm_pre),
                    (s.spm_url = _(location.href)),
                    (s.origin_spm_url = s.spm_url)
                    var u = i._current_spm || {}
                    u && u.a && '0' !== u.a && u.b && '0' !== u.b ?
                        ((s.spm_url = [u.a, u.b, u.c, u.d, u.e].join('.')),
                            (s.spm_pre = r)) :
                        c > 0 &&
                        n &&
                        '0' !== n[0] &&
                        '0' !== n[1] &&
                        ((s.spm_url = n.concat(['0', '0']).join('.')), (s.spm_pre = r)),
                        (i._current_spm = {})
                }
                a()
            })
        }),
        (c.init = function(t, e, n) {;
            (s.spm_url = _(g)),
            (s.spm_pre = _(d)),
            h({ goldlog: t, meta_info: e }, function() {
                'function' == typeof n && n()
            })
        }),
        (c.resetSpmCntPvid = function() {
            var t = goldlog.spm_ab
            if (t && 2 === t.length) {
                var e = t.join('.') + '.0.0',
                    n = m()
                n && (e = e + '.' + n),
                    (s.spm_cnt = e),
                    (s.spm_url = e),
                    (goldlog._$.spm = s)
            }
        }),
        (t.exports = c)
    },
    function(t, e) {
        'use strict'

        function n(t, e) {
            if (!t || !e) return ''
            var n,
                o = ''
            try {
                var a = new RegExp('[?|&]+' + t + '=([^&|#|?|/]+)')
                if ('spm' === t || 'scm' === t) {
                    var r = new RegExp('\\?.*' + t + '=([\\w\\.\\-\\*/]+)'),
                        i = e.match(a),
                        s = e.match(r),
                        u = i && 2 === i.length ? i[1] : '',
                        c = s && 2 === s.length ? s[1] : '';
                    (o = u > c ? u : c), (o = decodeURIComponent(o))
                } else(n = e.match(a)), (o = n && 2 === n.length ? n[1] : '')
            } catch (t) {} finally {
                return o
            }
        };
        (e.getParamFromUrl = n),
        (e.getSPMFromUrl = function(t) {
            return n('spm', t)
        })
    },
    function(t, e, n) {
        'use strict'
        var o = n(64).nameStorage,
            a = n(5)
        e.getRefer = function() {
            var t = a.KEY || {},
                e = t.NAME_STORAGE || {}
            return document.referrer || o.getItem(e.REFERRER) || ''
        }
    },
    function(t, e) {
        'use strict'
        var n = (function() {
            function t() {
                var t,
                    e = [],
                    r = !0
                for (var p in l)
                    l.hasOwnProperty(p) &&
                    ((r = !1), (t = l[p] || ''), e.push(c(p) + s + c(t)))
                n.name = r ? o : a + c(o) + i + e.join(u)
            }

            function e(t, e, n) {
                t &&
                    (t.addEventListener ?
                        t.addEventListener(e, n, !1) :
                        t.attachEvent &&
                        t.attachEvent('on' + e, function(e) {
                            n.call(t, e)
                        }))
            }
            var n = window
            if (n.nameStorage) return n.nameStorage
            var o,
                a = 'nameStorage:',
                r = /^([^=]+)(?:=(.*))?$/,
                i = '?',
                s = '=',
                u = '&',
                c = encodeURIComponent,
                p = decodeURIComponent,
                l = {},
                g = {}
            return (
                (function(t) {
                    if (t && 0 === t.indexOf(a)) {
                        var e = t.split(/[:?]/)
                        e.shift(), (o = p(e.shift()) || '')
                        for (
                            var n, i, s, c = e.join(''), g = c.split(u), d = 0, f = g.length; d < f; d++
                        )
                            (n = g[d].match(r)),
                            n && n[1] && ((i = p(n[1])), (s = p(n[2]) || ''), (l[i] = s))
                    } else o = t || ''
                })(n.name),
                (g.setItem = function(e, n) {
                    e && 'undefined' != typeof n && ((l[e] = String(n)), t())
                }),
                (g.getItem = function(t) {
                    return l.hasOwnProperty(t) ? l[t] : null
                }),
                (g.removeItem = function(e) {
                    l.hasOwnProperty(e) && ((l[e] = null), delete l[e], t())
                }),
                (g.clear = function() {;
                    (l = {}), t()
                }),
                (g.valueOf = function() {
                    return l
                }),
                (g.toString = function() {
                    var t = n.name
                    return 0 === t.indexOf(a) ? t : a + t
                }),
                e(n, 'beforeunload', function() {
                    t()
                }),
                g
            )
        })()
        e.nameStorage = n
    },
    function(t, e, n) {
        'use strict'
        var o = n(57)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                updateBasicParams: function() {
                    var t = this.options.context.what_to_sendpv.pvdata || [],
                        e = this.options.context.etag || {}
                    return (
                        e.cna &&
                        (o.updateKey(t, 'cna', e.cna),
                            (this.options.context.what_to_sendpv.pvdata = t)),
                        t
                    )
                },
                addTagParams: function() {
                    var t = this.options.context.what_to_sendpv.pvdata || [],
                        e = this.options.context.etag || {},
                        n = [];
                    (e.tag || 0 === e.tag) && n.push(['tag', e.tag]),
                        (e.stag || 0 === e.stag) && n.push(['stag', e.stag]),
                        (e.lstag || 0 === e.lstag) && n.push(['lstag', e.lstag]),
                        n.length > 0 &&
                        (this.options.context.what_to_sendpv.pvdata = t.concat(n))
                },
                run: function() {
                    this.updateBasicParams(), this.addTagParams()
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'

        function o(t) {
            var e,
                n,
                o,
                a,
                i = [],
                s = {}
            for (e = t.length - 1; e >= 0; e--)
                (n = t[e]),
                (o = n[0]),
                (o && o.indexOf(r.s_plain_obj) == -1 && s.hasOwnProperty(o)) ||
                ((a = n[1]), ('aplus' == o || a) && (i.unshift([o, a]), (s[o] = 1)))
            return i
        }

        function a(t) {
            var e,
                n,
                o,
                a,
                s = [],
                u = { logtype: !0, cache: !0, scr: !0, 'spm-cnt': !0 }
            for (e = t.length - 1; e >= 0; e--)
                if (
                    ((n = t[e]),
                        (o = n[0]),
                        (a = n[1]), !(
                            (i.isStartWith(o, r.s_plain_obj) &&
                                !i.isStartWith(o, r.mkPlainKeyForExparams())) ||
                            u[o]
                        ))
                )
                    if (i.isStartWith(o, r.mkPlainKeyForExparams())) {
                        var c = r.param2arr(a)
                        if ('object' == typeof c && c.length > 0)
                            for (var p = c.length - 1; p >= 0; p--) {
                                var l = c[p]
                                l && l[1] && s.unshift([l[0], l[1]])
                            }
                    } else s.unshift([o, a])
            return s
        }
        var r = n(17),
            i = n(9),
            s = n(26),
            u = n(29),
            c = n(52),
            p = n(27),
            l = n(4),
            g = n(11)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                getToUtData: function(t, e) {
                    var n,
                        i = s.getGoldlogVal('_$') || {},
                        c = i.spm || {},
                        d = a(o(t)),
                        f = {}
                    try {
                        var _ = r.arr2obj(d);
                        (_._toUT = 1),
                        (_._bridgeName = e.bridgeName || ''),
                        (_._bridgeVersion = e.bridgeVersion || ''),
                        (n = JSON.stringify(_))
                    } catch (t) {
                        n = '{"_toUT":1}'
                    }
                    var m = u.getOnePageInfo(p);
                    (f.functype = '2001'),
                    (f.urlpagename = m.urlpagename),
                    (f.url = location.href),
                    (f.spmcnt = c.spm_cnt || ''),
                    (f.spmurl = c.spm_url || ''),
                    (f.spmpre = c.spm_pre || ''),
                    (f.lzsid = ''),
                    (f.cna = g.getCookie('cna')),
                    (f.extendargs = n),
                    (f.isonepage = m.isonepage)
                    var h = this.options.context || {},
                        v = !!h.is_single
                    return (
                        (f._is_g2u_ = v ? 1 : 2),
                        (f.version = l.toUtVersion),
                        (f.lver = goldlog.lver || l.lver),
                        (f.jsver = l.script_name),
                        f
                    )
                },
                run: function() {
                    var t = this.options.context || {},
                        e = t.what_to_sendpv || {},
                        n = e.pvdata || [],
                        o = t.what_to_sendpv_ut || {},
                        a = t.where_to_sendlog_ut || {},
                        r = a.aplusToUT || {},
                        i = r.toUT || {};
                    ((i && i.isAvailable && 'function' == typeof i.toUT2) ||
                        c.haveNativeFlagInUA()) &&
                    ((o.pvdataToUt = this.getToUtData(n, i)),
                        (this.options.context.what_to_sendpv_ut = o))
                },
            }
        }
    },
    function(t, e) {
        'use strict'
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                run: function() {
                    var t = this.options.context || {},
                        e = t.is_single ? '1' : '0'
                    if (
                        ((t.what_to_sendpv_ut2.pvdataToUt._slog = e),
                            (t.what_to_sendpv_ut.pvdataToUt._slog = e),
                            t.what_to_sendpv.pvdata.push(['_slog', e]),
                            t.ut_is_available)
                    ) {
                        var n = t.is_single ? '1' : '2'
                        t.what_to_sendpv.pvdata.push(['_is_g2u', n])
                    }
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(26)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                run: function() {
                    var t = o.getGoldlogVal('_$') || {},
                        e = this.options.context.can_to_sendpv || {},
                        n = t.send_pv_count || 0,
                        a = this.options.config || {}
                    return a.is_auto && n > 0 ?
                        'done' :
                        ((e.flag = 'YES'),
                            (this.options.context.can_to_sendpv = e),
                            (t.send_pv_count = ++n),
                            void o.setGoldlogVal('_$', t))
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(26),
            a = n(17)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                run: function() {
                    var t = this.options.context || {},
                        e = !!t.is_single
                    if (!e) {
                        var n = t.what_to_sendpv || {},
                            r = t.where_to_sendpv || {},
                            i = n.pvdata || [],
                            s = goldlog.getMetaInfo('aplus-channel')
                        if ('WS-ONLY' !== s) {
                            var u = goldlog.send(r.url, a.arr2obj(i))
                            o.setGoldlogVal('req', u)
                        }
                    }
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(52)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                run: function(t, e) {
                    var n = this,
                        a = this.options.context || {},
                        r = a.what_to_sendpv_ut || {},
                        i = a.where_to_sendlog_ut || {},
                        s = r.pvdataToUt || {},
                        u = i.aplusToUT || {},
                        c = u.toUT
                    if (o.isNative4Aplus())
                        return (
                            (u.toutflag = 'toUT'),
                            void(n.options.context.what_to_sendpv_ut.isSuccess = !0)
                        )
                    if (c && 'function' == typeof c.toUT2 && c.isAvailable)
                        try {;
                            (u.toutflag = 'toUT'),
                            c.toUT2(
                                s,
                                function() {;
                                    (n.options.context.what_to_sendpv_ut.isSuccess = !0), e()
                                },
                                function(t) {;
                                    (n.options.context.what_to_sendpv_ut.errorMsg = t), e()
                                },
                                2e3
                            )
                        } catch (t) {
                            e()
                        } finally {
                            return 'pause'
                        }
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(37),
            a = n(26)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                run: function() {
                    var t = goldlog._$ || {},
                        e = this.options.context || {}
                    a.setGoldlogVal('pv_context', e)
                    var n = goldlog.spm_ab || [],
                        r = n.join('.'),
                        i = t.send_pv_count,
                        s = { cna: e.etag.cna, count: i, spmab_pre: goldlog.spmab_pre }
                    o.doPubMsg(['sendPV', 'complete', r, s]),
                        o.doCachePubs(['sendPV', 'complete', r, s])
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'
        e.plugins_prepv = [
            { name: 'etag', enable: !0, path: n(47) },
            { name: 'what_to_hjlj_exinfo', enable: !0, path: n(73) },
            {
                name: 'what_to_prepv',
                enable: !0,
                path: n(74),
                deps: ['what_to_hjlj_exinfo'],
            },
            {
                name: 'where_to_prepv',
                enable: !0,
                path: n(75),
                deps: ['what_to_prepv'],
            },
            {
                name: 'do_sendprepv',
                enable: !0,
                path: n(76),
                deps: ['what_to_prepv', 'where_to_prepv'],
            },
        ]
    },
    function(t, e, n) {
        'use strict'
        var o = n(17),
            a = n(31),
            r = n(26),
            i = n(26),
            s = n(24),
            u = n(11)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                getCookieUserInfo: function() {
                    var t = [],
                        e = u.getCookie('workno') || u.getCookie('emplId')
                    e && t.push('workno=' + e)
                    var n = u.getHng()
                    return n && t.push('_hng=' + u.getHng()), t
                },
                filterExinfo: function(t) {
                    var e = ''
                    try {
                        t &&
                            ('string' == typeof t ?
                                (e = t
                                    .replace(/&amp;/g, '&')
                                    .replace(/\buser(i|I)d=/, 'uidaplus=')
                                    .replace(/&aplus&/, '&')) :
                                'object' == typeof t && (e = o.obj2param(t, !0)))
                    } catch (t) {
                        e = t.message ? t.message : ''
                    }
                    return e
                },
                getExparamsFlag: function() {
                    var t = this.options.context || {},
                        e = t.what_to_hjlj_exinfo || {}
                    return e.EXPARAMS_FLAG || 'EXPARAMS'
                },
                getCustomExParams: function(t) {
                    var e = ''
                    return (
                        t !== this.getExparamsFlag() && (e = this.filterExinfo(t) || ''),
                        e ? e.split('&') : []
                    )
                },
                getBeaconExparams: function(t, e) {
                    var n = [],
                        r = a.getExParams(o) || ''
                    r = r.replace(/&aplus&/, '&')
                    for (
                        var i = o.param2arr(r) || [],
                            u = function(e) {
                                return s.indexof(t, e) > -1
                            },
                            c = 0; c < i.length; c++
                    ) {
                        var p = i[c],
                            l = p[0] || '',
                            g = p[1] || ''
                        l &&
                            g &&
                            (e === this.getExparamsFlag() || u(l)) &&
                            n.push(l + '=' + g)
                    }
                    return n
                },
                getExinfo: function(t) {
                    var e = this.options.context || {},
                        n = e.what_to_hjlj_exinfo || {},
                        o = n.exparams_key_names || [],
                        a = this.getBeaconExparams(o, t)
                    return a
                },
                getExData: function(t) {
                    var e = []
                    if ('object' == typeof t)
                        for (var n in t) {
                            var o = t[n]
                            n &&
                                o &&
                                'object' != typeof o &&
                                'function' != typeof o &&
                                e.push(n + '=' + o)
                        }
                    return e
                },
                doConcatArr: function(t, e) {
                    return e && e.length > 0 && (t = t.concat(e)), t
                },
                run: function() {
                    try {
                        var t = this.options.context.what_to_hjlj_exinfo || {},
                            e = r.getGoldlogVal('_$') || {},
                            n = e.meta_info || {},
                            o = n['aplus-exinfo'] || '',
                            a = n['aplus-exdata'] || '',
                            s = [];
                        (s = this.doConcatArr(s, t.exinfo || [])),
                        (s = this.doConcatArr(s, this.getExinfo(o))),
                        (s = this.doConcatArr(s, this.getCookieUserInfo())),
                        (s = this.doConcatArr(s, this.getCustomExParams(o))),
                        (s = this.doConcatArr(s, this.getExData(a))),
                        (t.exinfo = s.join('&')),
                        (this.options.context.what_to_hjlj_exinfo = t)
                    } catch (t) {
                        i.logger({ msg: t ? t.message : '' })
                    }
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(17),
            a = n(9)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                getCna: function() {
                    var t = this.options.context || {},
                        e = t.etag || {}
                    return e.cna || ''
                },
                getParams: function() {
                    var t = this.options.context || {},
                        e = this.options.config || {},
                        n = t.userdata || {},
                        r = goldlog._$ || {},
                        i = r.spm || {},
                        s = [
                            ['logtype', 1],
                            ['cna', this.getCna()],
                            ['cache', a.makeCacheNum()],
                            ['spm-cnt', e['spm-cnt'] || '0.0.0.0'],
                            ['spm-url', e['spm-url'] || i.spm_cnt || '0.0.0.0'],
                        ]
                    i.spm_url && s.push(['spm-pre', i.spm_url || '']),
                        s.push(['pre', location.href]),
                        s.push(['aplus', '']),
                        s.push(['_pseudo_url', e._pseudo_url])
                    var u = []
                    for (var c in n) u.push(c + '=' + n[c])
                    var p = t.what_to_hjlj_exinfo || {},
                        l = p.exinfo || ''
                    if (l) {
                        var g = l.split('&') || []
                        o.each(g, function(t) {
                            var e = t.split('=') || []
                            2 === e.length && s.push(e)
                        })
                    }
                    return (
                        s.push(['_extend_args', u.join('&')]), s.push(['_is_pseudo', 1]), s
                    )
                },
                run: function() {
                    this.options.context.what_to_prepv.logdata = this.getParams()
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(17),
            a = n(26),
            r = n(27)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                getMetaInfo: function() {
                    var t = a.getGoldlogVal('_$') || {},
                        e = t.meta_info || r.getInfo()
                    return e
                },
                getAplusMetaByKey: function(t) {
                    var e = this.getMetaInfo() || {}
                    return e[t]
                },
                getGifPath: function(t, e) {
                    var n,
                        r = a.getGoldlogVal('_$') || {}
                    if ('function' == typeof t)
                        n = t(location.hostname, r.is_terminal, o.is_in_iframe) + '.gif'
                    else if (!n && e) {
                        var i = e.match(/\/\w+\.gif/)
                        i && i.length > 0 && (n = i[0])
                    }
                    return n || (n = r.is_terminal ? 'm.gif' : 'v.gif'), n
                },
                run: function() {
                    var t = this.getAplusMetaByKey('aplus-rhost-v'),
                        e = this.options.context.where_to_prepv || {},
                        n = e.url || '',
                        a = this.getGifPath(e.urlRule, n),
                        r = o.getPvUrl({
                            metaName: 'aplus-rhost-v',
                            metaValue: t,
                            gifPath: a,
                            url: o.filterIntUrl(n),
                        });
                    (e.url = r), (this.options.context.where_to_prepv = e)
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(26)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                run: function() {
                    var t = this.options.context || {},
                        e = this.options.config || {},
                        n = t.logger || {},
                        a = t.what_to_prepv || {},
                        r = t.where_to_prepv || {},
                        i = a.logdata || {},
                        s = r.url || ''
                    s ||
                        'function' != typeof n ||
                        n({
                            msg: 'warning: where_to_prepv.url is null, goldlog.record failed!',
                        })
                    var u = goldlog.send(r.url, i, e.method || 'GET')
                    o.setGoldlogVal('req', u)
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'

        function o() {
            var t = i.getGoldlogVal('_$') || {},
                e = '//gm.mmstat.com/'
            return (
                t.is_terminal && (e = '//wgo.mmstat.com/'), {
                    where_to_hjlj: {
                        url: e,
                        ac_atpanel: '//ac.mmstat.com/',
                        tblogUrl: '//log.mmstat.com/',
                    },
                }
            )
        }

        function a() {
            return r.assign(new s(), new o())
        }
        var r = n(9),
            i = n(26),
            s = n(78)
        t.exports = a
    },
    function(t, e, n) {
        'use strict'

        function o() {
            return {
                compose: {},
                basic_params: { cna: a.getCookie('cna') },
                where_to_hjlj: {
                    url: '//gm.mmstat.com/',
                    ac_atpanel: '//ac.mmstat.com/',
                    tblogUrl: '//log.mmstat.com/',
                },
                userdata: {},
                what_to_hjlj: { logdata: {} },
                what_to_pvhash: { hash: [] },
                what_to_hjlj_exinfo: {
                    EXPARAMS_FLAG: 'EXPARAMS',
                    exinfo: [],
                    exparams_key_names: ['uidaplus', 'pc_i', 'pu_i'],
                },
                what_to_hjlj_ut: { logdataToUT: {} },
                what_to_hjlj_ut2: { isSuccess: !1, logdataToUT: {} },
                where_to_sendlog_ut: { aplusToUT: {}, toUTName: 'toUT' },
                network: { connType: 'UNKNOWN' },
                is_single: !1,
            }
        }
        var a = n(11)
        t.exports = o
    },
    function(t, e, n) {
        'use strict'
        e.plugins_hjlj = [
            { name: 'etag', enable: !0, path: n(47) },
            { name: 'where_to_sendlog_ut', enable: !0, path: n(49) },
            { name: 'is_single', enable: !0, path: n(51) },
            { name: 'what_to_hjlj_exinfo', enable: !0, path: n(73) },
            { name: 'what_to_pvhash', enable: !0, path: n(55) },
            {
                name: 'what_to_hjlj',
                enable: !0,
                path: n(80),
                deps: ['what_to_hjlj_exinfo', 'what_to_pvhash'],
            },
            {
                name: 'what_to_hjlj_ut2',
                enable: n(81),
                path: n(82),
                deps: ['is_single', 'what_to_hjlj_exinfo'],
            },
            {
                name: 'what_to_hjlj_ut',
                enable: n(81),
                path: n(83),
                deps: ['is_single', 'what_to_hjlj_exinfo'],
            },
            {
                name: 'what_to_hjlj_slog',
                enable: !0,
                path: n(84),
                deps: ['what_to_hjlj'],
            },
            {
                name: 'where_to_hjlj',
                enable: !0,
                path: n(85),
                deps: ['is_single', 'what_to_hjlj'],
            },
            {
                name: 'do_sendhjlj',
                enable: !0,
                path: n(86),
                deps: ['is_single', 'what_to_hjlj', 'where_to_hjlj'],
            },
            {
                name: 'do_sendhjlj_ut2',
                enable: n(81),
                path: n(87),
                deps: ['what_to_hjlj', 'what_to_hjlj_ut2', 'where_to_sendlog_ut'],
            },
            {
                name: 'do_sendhjlj_ut',
                path: n(88),
                deps: ['what_to_hjlj', 'what_to_hjlj_ut', 'where_to_sendlog_ut'],
            },
        ]
    },
    function(t, e, n) {
        'use strict'
        var o = n(31),
            a = n(17),
            r = n(11),
            i = n(9),
            s = n(4)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                getParams: function() {
                    var t = this.options.context || {},
                        e = t.userdata || {},
                        n = t.basic_params || {},
                        u = t.what_to_hjlj_exinfo || {},
                        c = u.exinfo || '',
                        p = t.etag || {},
                        l = p.cna || n.cna || r.getCookie('cna'),
                        g = e.gmkey,
                        d = ''
                    e.gokey && c ?
                        (d = [e.gokey, c].join('&')) :
                        e.gokey ?
                        (d = e.gokey) :
                        c && (d = c)
                    var f = t.what_to_pvhash || {},
                        _ = f.hash || []
                    _.length && (d += '&' + _.join('=')),
                        (d += '&jsver=' + s.script_name),
                        (d += '&lver=' + s.lver),
                        (d += '&pver=' + goldlog.aplus_cplugin_ver),
                        (d += '&cache=' + i.makeCacheNum()),
                        (d += '&page_cna=' + l)
                    var m = { gmkey: g || '', gokey: d, cna: l },
                        h = goldlog.getMetaInfo('aplus-p-url-init')
                    h && (m._p_url = goldlog.getMetaInfo('aplus-p-url') || h),
                        e['spm-cnt'] && (m['spm-cnt'] = e['spm-cnt']),
                        e['spm-pre'] && (m['spm-pre'] = e['spm-pre'])
                    try {
                        var v = o.getExParams(a),
                            y = a.param2obj(v).uidaplus
                        y && (m._gr_uid_ = y)
                    } catch (t) {}
                    return m
                },
                run: function() {
                    this.options.context.what_to_hjlj.logdata = this.getParams()
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(54),
            a = n(50),
            r = n(52),
            i = /\sA2U\/x/.test(window.navigator.userAgent),
            s = function(t) {
                t || (t = window.navigator.userAgent)
                var e = goldlog.getMetaInfo('aplus-toUT') + '',
                    n = a.isAplusChnl(),
                    s = o.webviewIsAbove({
                            version_ios_tb: [6, 6, 0],
                            version_ios_tm: [5, 28, 0],
                            version_android_tb: [6, 6, 2],
                            version_android_tm: [5, 32, 0],
                        },
                        t
                    )
                return (
                    s ||
                    (s = r.haveNativeFlagInUA() || i || '2' === e || 'toUT2HC' === e),
                    n && 'AliBCBridge' !== n.bridgeName && (s = !!n.toUT2),
                    s
                )
            };
        (e.isToUT2 = s),
        (e.isEnable = function(t, e) {
            var n = s(e),
                o = !0
            switch (t) {
                case 'what_to_hjlj_ut2':
                case 'do_sendhjlj_ut2':
                case 'what_to_sendpv_ut2':
                case 'do_sendpv_ut2':
                    o = !!n
                    break
                case 'what_to_hjlj_ut':
                case 'do_sendhjlj_ut':
                case 'what_to_sendpv_ut':
                case 'do_sendpv_ut':
                    o = !n
            }
            return o
        })
    },
    function(t, e, n) {
        'use strict'
        var o = n(53),
            a = n(26),
            r = n(4)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                getToUtData: function(t, e) {
                    var n = a.getGoldlogVal('_$') || {},
                        i = n.spm || {},
                        s = this.options.context.userdata || {},
                        u = this.options.context.basic_params || {},
                        c = this.options.context || {},
                        p = c.what_to_hjlj_exinfo || {},
                        l = p.exinfo || '',
                        g = ''
                    s.gokey && l ?
                        (g = [s.gokey, l].join('&')) :
                        s.gokey ?
                        (g = s.gokey) :
                        l && (g = l)
                    var d = {};
                    (d.functype = 'ctrl'),
                    (d.funcId = o.getFunctypeValue2({
                        logkey: s.logkey,
                        gmkey: s.gmkey,
                        spm_ab: a.getGoldlogVal('spm_ab'),
                    })),
                    (d.url =
                        goldlog.getMetaInfo('aplus-pagename') ||
                        location.origin + location.pathname),
                    (d.logkey = s.logkey),
                    (d.gokey = encodeURIComponent(g)),
                    (d.gmkey = s.gmkey),
                    (d._ish5 = '1'),
                    (d._h5url = location.href),
                    (d._is_g2u_ = t ? 1 : 2),
                    (d._toUT = 2),
                    (d._bridgeName = e.bridgeName || ''),
                    (d._bridgeVersion = e.bridgeVersion || ''),
                    (d['spm-cnt'] = i.spm_cnt || ''),
                    (d['spm-url'] = i.spm_url || ''),
                    (d['spm-pre'] = i.spm_pre || ''),
                    (d.cna = u.cna),
                    (d.lver = r.lver),
                    (d.jsver = r.script_name),
                    s.hasOwnProperty('autosend') && (d.autosend = s.autosend)
                    var f = goldlog.getMetaInfo('aplus-utparam')
                    return f && (d['utparam-cnt'] = JSON.stringify(f)), d
                },
                run: function() {
                    var t = this.options.context || {},
                        e = t.what_to_hjlj_ut2 || {},
                        n = !!t.is_single,
                        o = t.where_to_sendlog_ut || {},
                        a = o.aplusToUT || {},
                        r = a.toUT2 || {};
                    (e.logdataToUT = this.getToUtData(n, r)),
                    (this.options.context.what_to_hjlj_ut2 = e)
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(53),
            a = n(11),
            r = n(26),
            i = n(4)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                getToUtData: function(t, e) {
                    var n = r.getGoldlogVal('_$') || {},
                        s = n.spm || {},
                        u = this.options.context || {},
                        c = u.userdata || {},
                        p = u.what_to_hjlj_exinfo || {},
                        l = p.exinfo || '',
                        g = ''
                    c.gokey && l ?
                        (g = [c.gokey, l].join('&')) :
                        c.gokey ?
                        (g = c.gokey) :
                        l && (g = l)
                    var d = {
                        gmkey: c.gmkey,
                        gokey: g,
                        lver: i.lver,
                        jsver: i.script_name,
                        version: i.toUtVersion,
                        spm_cnt: s.spm_cnt || '',
                        spm_url: s.spm_url || '',
                        spm_pre: s.spm_pre || '',
                    };
                    (d._is_g2u_ = t ? 1 : 2),
                    (d._bridgeName = e.bridgeName || ''),
                    (d.bridgeVersion = e.bridgeVersion || ''),
                    (d._toUT = 1)
                    try {;
                        (d = JSON.stringify(d)), '{}' == d && (d = '')
                    } catch (t) {
                        d = ''
                    }
                    var f = n.meta_info || {},
                        _ = f.isonepage_data || {},
                        m = {}
                    return (
                        (m.functype = o.getFunctypeValue({
                            logkey: c.logkey,
                            gmkey: c.gmkey,
                            spm_ab: r.getGoldlogVal('spm_ab'),
                        })),
                        (m.spmcnt = s.spm_cnt || ''),
                        (m.spmurl = s.spm_url || ''),
                        (m.spmpre = s.spm_pre || ''),
                        (m.logkey = c.logkey),
                        (m.logkeyargs = d),
                        (m.urlpagename = _.urlpagename),
                        (m.url = location.href),
                        (m.cna = a.getCookie('cna') || ''),
                        (m.extendargs = ''),
                        (m.isonepage = _.isonepage),
                        m
                    )
                },
                run: function() {
                    var t = this.options.context || {},
                        e = !!t.is_single,
                        n = t.what_to_hjlj_ut || {},
                        o = t.where_to_sendlog_ut || {},
                        a = o.aplusToUT || {},
                        r = a.toUT || {};
                    (n.logdataToUT = this.getToUtData(e, r)),
                    (this.options.context.what_to_hjlj_ut = n)
                },
            }
        }
    },
    function(t, e) {
        'use strict'
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                run: function() {
                    var t = this.options.context || {},
                        e = t.is_single ? '1' : '0';
                    (t.what_to_hjlj_ut2.logdataToUT._slog = e),
                    (t.what_to_hjlj_ut.logdataToUT._slog = e)
                    var n = ['_slog=' + e]
                    if (t.ut_is_available) {
                        var o = t.is_single ? '1' : '2'
                        n.push('_is_g2u=' + o)
                    }
                    t.what_to_hjlj.logdata.gokey ?
                        (t.what_to_hjlj.logdata.gokey += '&' + n.join('&')) :
                        (t.what_to_hjlj.logdata.gokey = n.join('&'))
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(17),
            a = n(9),
            r = n(26),
            i = n(23),
            s = n(27)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                getMetaInfo: function() {
                    var t = r.getGoldlogVal('_$') || {},
                        e = t.meta_info || s.getInfo()
                    return e
                },
                getAplusMetaByKey: function(t) {
                    var e = this.getMetaInfo() || {}
                    return e[t]
                },
                cramUrl: function(t) {
                    var e = r.getGoldlogVal('_$') || {},
                        n = e.spm || {},
                        o = this.options.context.where_to_hjlj || {},
                        i = o.ac_atpanel,
                        s = o.tblogUrl,
                        u = this.options.context.what_to_hjlj || {},
                        c = this.options.context.userdata || {},
                        p = !0,
                        l = c.logkey
                    if (!l) return { url: t, logkey_available: !1 }
                    if ('ac' == l) t = i + '1.gif'
                    else if (a.isStartWith(l, 'ac-')) t = i + l.substr(3)
                    else if (a.isStartWith(l, '/')) {
                        t += l.substr(1)
                        var g = u.logdata || {};
                        (g['spm-cnt'] = n.spm_cnt), (g.logtype = 2)
                        try {;
                            (u.logdata = g), (this.options.context.what_to_hjlj = u)
                        } catch (t) {}
                    } else a.isEndWith(l, '.gif') ? (t = s + l) : (p = !1)
                    return { url: t, logkey_available: p }
                },
                can_to_sendhjlj: function(t) {
                    var e = this.options.context || {},
                        n = e.logger || function() {},
                        o = this.options.context.userdata || {}
                    return (!!t.logkey_available ||
                        (n({ msg: 'logkey: ' + o.logkey + ' is not legal!' }), !1)
                    )
                },
                run: function() {
                    var t = !!this.options.context.is_single
                    if (!t) {
                        var e,
                            n,
                            a = o.filterIntUrl(this.options.context.where_to_hjlj.url),
                            r = this.getAplusMetaByKey('aplus-rhost-g'),
                            s = r && o.hostValidity(r)
                        s &&
                            ((e = /^\/\//.test(r) ? '' : '//'),
                                (n = /\/$/.test(r) ? '' : '/'),
                                (a = e + r + n)),
                            r &&
                            !s &&
                            i.logger({
                                msg: 'aplus-rhost-g: ' +
                                    r +
                                    ' is invalid, suggestion: "xxx.mmstat.com"',
                            })
                        var u = this.cramUrl(a)
                        return this.can_to_sendhjlj(u) ?
                            void(this.options.context.where_to_hjlj.url = u.url) :
                            'done'
                    }
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(26)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                run: function() {
                    var t = this.options.context || {},
                        e = this.options.config || {},
                        n = !!t.is_single
                    if (!n) {
                        var a = t.logger || {},
                            r = t.what_to_hjlj || {},
                            i = t.where_to_hjlj || {},
                            s = r.logdata || {},
                            u = i.url || ''
                        u ||
                            'function' != typeof a ||
                            a({
                                msg: 'warning: where_to_hjlj.url is null, goldlog.record failed!',
                            })
                        var c = goldlog.getMetaInfo('aplus-channel')
                        if ('WS-ONLY' !== c) {
                            var p = goldlog.send(i.url, s, e.method || 'GET')
                            o.setGoldlogVal('req', p)
                        }
                    }
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(52)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                run: function(t, e) {
                    var n = this,
                        a = this.options.context || {},
                        r = a.logger || function() {},
                        i = a.what_to_hjlj_ut2 || {},
                        s = a.where_to_sendlog_ut || {},
                        u = !!a.is_single,
                        c = i.logdataToUT || {},
                        p = s.aplusToUT || {},
                        l = p.toUT2
                    if (o.isNative4Aplus())
                        return (
                            (p.toutflag = 'toUT2'),
                            void(n.options.context.what_to_hjlj_ut2.isSuccess = !0)
                        )
                    if (l && 'function' == typeof l.toUT2 && l.isAvailable)
                        try {;
                            (p.toutflag = 'toUT2'),
                            l.toUT2(
                                c,
                                function() {;
                                    (n.options.context.what_to_hjlj_ut2.isSuccess = !0), e()
                                },
                                function(t) {;
                                    (n.options.context.what_to_hjlj_ut2.errorMsg = t), e()
                                },
                                2e3
                            )
                        } catch (t) {
                            u &&
                                r({
                                    msg: 'warning: singleSendHjlj toUTName = toUT2 errorMsg:' +
                                        t.message,
                                })
                        } finally {
                            return 'pause'
                        }
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(52)
        t.exports = function() {
            return {
                init: function(t) {
                    this.options = t
                },
                run: function(t, e) {
                    var n = this,
                        a = this.options.context || {},
                        r = a.what_to_hjlj_ut2.isSuccess,
                        i = a.logger || function() {},
                        s = !!a.is_single,
                        u = a.where_to_sendlog_ut || {},
                        c = a.what_to_hjlj_ut || {},
                        p = c.logdataToUT || {},
                        l = u.aplusToUT || {},
                        g = l.toUT
                    if (o.isNative4Aplus())
                        return (
                            (l.toutflag = 'toUT'),
                            void(n.options.context.what_to_hjlj_ut.isSuccess = !0)
                        )
                    if (!r && g && 'function' == typeof g.toUT2 && g.isAvailable)
                        try {;
                            (l.toutflag = 'toUT'),
                            g.toUT2(
                                p,
                                function() {;
                                    (n.options.context.what_to_hjlj_ut.isSuccess = !0), e()
                                },
                                function(t) {;
                                    (n.options.context.what_to_hjlj_ut.errorMsg = t), e()
                                },
                                3e3
                            )
                        } catch (t) {
                            s &&
                                i({
                                    msg: 'warning: singleSend toUTName = ' +
                                        u.toUTName +
                                        ' errorMsg:' +
                                        t.message,
                                })
                        } finally {
                            return 'pause'
                        }
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'

        function o() {
            var t,
                e,
                n = i.KEY || {},
                o = n.NAME_STORAGE || {}
            if (!p && c) {
                var a = location.href,
                    u =
                    c &&
                    (a.indexOf('login.taobao.com') >= 0 ||
                        a.indexOf('login.tmall.com') >= 0),
                    l = s.getRefer()
                u && l ?
                    ((t = l), (e = r.getItem(o.REFERRER_PV_ID))) :
                    ((t = a), (e = goldlog.pvid)),
                    r.setItem(o.REFERRER, t),
                    r.setItem(o.REFERRER_PV_ID, e)
            }
        }
        var a = n(90),
            r = n(64).nameStorage,
            i = n(4),
            s = n(63),
            u = n(93),
            c = 'https:' == location.protocol,
            p = parent !== self
        e.run = function() {
            var t = 'beforeunload'
            a.on(window, t, function() {
                o(), u(t)
            })
        }
    },
    function(t, e, n) {
        'use strict'

        function o(t, e, n) {
            var o = goldlog._$ || {},
                a = o.meta_info || {},
                r = a.aplus_ctap || {},
                i = a['aplus-touch']
            if (r && 'function' == typeof r.on) r.on(t, e)
            else {
                var u = 'ontouchend' in document.createElement('div') !u || ('tap' !== i && 'tapSpm' !== n) ?
                    s(t, u ? 'touchstart' : 'mousedown', e) :
                    c.on(t, e)
            }
        }

        function a(t) {
            try {
                l.documentElement.doScroll('left')
            } catch (e) {
                return void setTimeout(function() {
                    a(t)
                }, 1)
            }
            t()
        }

        function r(t) {
            var e = 0,
                n = function() {
                    0 === e && t(), e++
                }
            'complete' === l.readyState && n()
            var o
            if (l.addEventListener)
                (o = function() {
                    l.removeEventListener('DOMContentLoaded', o, !1), n()
                }),
                l.addEventListener('DOMContentLoaded', o, !1),
                window.addEventListener('load', n, !1)
            else if (l.attachEvent) {;
                (o = function() {
                    'complete' === l.readyState &&
                        (l.detachEvent('onreadystatechange', o), n())
                }),
                l.attachEvent('onreadystatechange', o),
                    window.attachEvent('onload', n)
                var r = !1
                try {
                    r = null === window.frameElement
                } catch (t) {}
                l.documentElement.doScroll && r && a(n)
            }
        }

        function i(t) {
            'complete' === l.readyState ? t() : s(p, 'load', t)
        }

        function s() {
            var t = arguments
            if (2 === t.length)
                'DOMReady' === t[0] && r(t[1]), 'onload' === t[0] && i(t[1])
            else if (3 === t.length) {
                var e = t[0],
                    n = t[1],
                    a = t[2]
                'tap' === n || 'tapSpm' === n ?
                    o(e, a, n) :
                    e[_](
                        (g ? 'on' : '') + n,
                        function(t) {
                            t = t || p.event
                            var e = t.target || t.srcElement 'function' == typeof a && a(t, e)
                        }, !!u(n) && { passive: !0 }
                    )
            }
        }
        var u = n(91),
            c = n(92),
            p = window,
            l = document,
            g = !!l.attachEvent,
            d = 'attachEvent',
            f = 'addEventListener',
            _ = g ? d : f;
        (e.DOMReady = r), (e.onload = i), (e.on = s)
    },
    function(t, e) {
        var n
        t.exports = function(t) {
            if ('boolean' == typeof n) return n
            if (!/touch|mouse|scroll|wheel/i.test(t)) return !1
            n = !1
            try {
                var e = Object.defineProperty({}, 'passive', {
                    get: function() {
                        n = !0
                    },
                })
                window.addEventListener('test', null, e)
            } catch (t) {}
            return n
        }
    },
    function(t, e) {
        'use strict'

        function n(t, e) {
            return t + Math.floor(Math.random() * (e - t + 1))
        }

        function o(t, e, n) {
            var o = p.createEvent('HTMLEvents')
            if ((o.initEvent(e, !0, !0), 'object' == typeof n))
                for (var a in n) o[a] = n[a]
            t.dispatchEvent(o)
        }

        function a(t) {
            0 === Object.keys(g).length &&
                (l.addEventListener(_, r, !1),
                    l.addEventListener(f, i, !1),
                    l.addEventListener(h, i, !1))
            for (var e = 0; e < t.changedTouches.length; e++) {
                var n = t.changedTouches[e],
                    o = {}
                for (var a in n) o[a] = n[a]
                var s = {
                    startTouch: o,
                    startTime: Date.now(),
                    status: m,
                    element: t.srcElement || t.target,
                }
                g[n.identifier] = s
            }
        }

        function r(t) {
            for (var e = 0; e < t.changedTouches.length; e++) {
                var n = t.changedTouches[e],
                    o = g[n.identifier]
                if (!o) return
                var a = n.clientX - o.startTouch.clientX,
                    r = n.clientY - o.startTouch.clientY,
                    i = Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2));
                (o.status === m || 'pressing' === o.status) &&
                i > 10 &&
                    (o.status = 'panning')
            }
        }

        function i(t) {
            for (var e = 0; e < t.changedTouches.length; e++) {
                var n = t.changedTouches[e],
                    a = n.identifier,
                    s = g[a]
                s &&
                    (s.status === m &&
                        t.type === f &&
                        ((s.timestamp = Date.now()),
                            o(s.element, v, { touch: n, touchEvent: t })),
                        delete g[a])
            }
            0 === Object.keys(g).length &&
                (l.removeEventListener(_, r, !1),
                    l.removeEventListener(f, i, !1),
                    l.removeEventListener(h, i, !1))
        }

        function s(t) {
            t.__fixTouchEvent ||
                (t.addEventListener(d, function() {}, !1), (t.__fixTouchEvent = !0))
        }

        function u() {
            c || (l.addEventListener(d, a, !1), (c = !0))
        }
        var c = !1,
            p = window.document,
            l = p.documentElement,
            g = {},
            d = 'touchstart',
            f = 'touchend',
            _ = 'touchmove',
            m = 'tapping',
            h = 'touchcancel',
            v = 'aplus_tap' + n(1, 1e5)
        t.exports = {
            on: function(t, e) {
                u(),
                    t &&
                    t.addEventListener &&
                    e &&
                    (s(t),
                        t.addEventListener(
                            v,
                            (e._aplus_tap_callback = function(t) {
                                e(t, t.target)
                            }), !1
                        ))
            },
            un: function(t, e) {
                t &&
                    t.removeEventListener &&
                    e &&
                    e._aplus_tap_callback &&
                    t.removeEventListener(v, e._aplus_tap_callback, !1)
            },
        }
    },
    function(t, e) {
        'use strict'
        t.exports = function(t) {
            var e = goldlog && goldlog._$ ? goldlog._$.pageLoadTime : ''
            if ('setPageSPM' === t) {;
                (goldlog.preSetPageSPMTime = goldlog.setPageSPMTime || e || ''),
                (goldlog.setPageSPMTime = new Date().getTime())
                var n = goldlog.spm_ab
                n &&
                    '0.0' !== n &&
                    goldlog.record(
                        '/x.p.d',
                        'OTHER',
                        '_s=' +
                        goldlog.preSetPageSPMTime +
                        '&_e=' +
                        goldlog.setPageSPMTime +
                        '&from=' +
                        t,
                        'POST'
                    )
            } else if ('beforeunload' === t) {
                var o = ''
                try {
                    o = performance.timing.domInteractive
                } catch (t) {
                    o = e
                }
                var a = new Date().getTime()
                goldlog.record(
                    '/x.p.d',
                    'OTHER',
                    '_s=' + o + '&_e=' + a + '&from=' + t,
                    'POST'
                )
            }
        }
    },
    function(t, e, n) {
        'use strict'

        function o() {
            var t = window.goldlog || {},
                e = t._$ || {},
                n = e.meta_info || {},
                o = new Date().getTime(),
                s = Math.floor(o / 72e5),
                u = a.getElementById('aplus-sufei'),
                c = '', // t.getCdnPath()
                p = c + '../../mm/app/exts/alilog/aplus_plugin_xwj/index.js?t=' + s,
                l = c + '../../mm/app/exts/secdev/entry/index.js?t=' + s,
                g = c + '../../mm/app/exts/sd/baxia-entry/index.js?t=' + s,
                d = function() {
                    var t = n['aplus-loadjs']
                    if (t)
                        for (var e = 0; e < t.length; e++)
                            t[e].file && r.addScript(t[e].file)
                },
                f = function() {
                    r.addScript(g, '', 'aplus-baxia'),
                        setTimeout(function() {;
                            (u && 'script' == u.tagName.toLowerCase()) ||
                            r.addScript(l, '', 'aplus-sufei')
                        }, 10)
                },
                _ = function() {
                    var t = n['aplus-rate-ahot']
                    t || 0 == t ? t : (t = 0.01),
                        (Math.random() < t || n['ahot-aplus']) && r.addScript(p),
                        f()
                },
                m = function() {
                    r.addScript(p), f()
                }
            d(),
                i.onload(function() {
                    try {
                        var t = n['aplus-xplug']
                        switch (t) {
                            case 'NONE':
                                break
                            case 'ALL':
                                m()
                                break
                            default:
                                _()
                        }
                    } catch (t) {}
                })
        }
        var a = document,
            r = n(31),
            i = n(90),
            s = n(95);
        (e.run = function() {
            o()
        }),
        (e.init_watchGoldlogQueue = s.init_watchGoldlogQueue)
    },
    function(t, e, n) {
        'use strict'

        function o(t, e) {
            for (
                var n = {
                        subscribeMwChangeQueue: [],
                        subscribeMetaQueue: [],
                        subscribeQueue: [],
                        metaQueue: [],
                        othersQueue: [],
                    },
                    o = [],
                    a = {};
                (a = t.shift());

            )
                try {
                    var r = a.action,
                        i = a.arguments[0];
                    /subscribe/.test(r) ?
                        'setMetaInfo' === i ?
                        n.subscribeMetaQueue.push(a) :
                        'mw_change_pv' === i || 'mw_change_hjlj' === i ?
                        n.subscribeMwChangeQueue.push(a) :
                        n.subscribeQueue.push(a) :
                        /MetaInfo/.test(r) ?
                        n.metaQueue.push(a) :
                        n.othersQueue.push(a)
                } catch (t) {
                    n.othersQueue.push(a),
                        u.do_tracker_jserror({
                            message: t && t.message,
                            error: encodeURIComponent(t.stack),
                            filename: 'getFormatQueue',
                        })
                }
            var s
            return (
                e && n[e] && ((s = n[e]), (n[e] = [])),
                (o = n.subscribeMwChangeQueue.concat(n.metaQueue)),
                (o = o.concat(n.subscribeQueue)),
                (o = o.concat(n.subscribeMetaQueue, n.othersQueue)), { queue: o, formatQueue: s }
            )
        }
        var a = window,
            r = n(9),
            i = n(96),
            s = n(97),
            u = n(3),
            c = 'goldlog_queue',
            p = function(t, e, n) {
                try {;
                    /_aplus_cplugin_track_deb/.test(t) ||
                        /_aplus_cplugin_m/.test(t) ||
                        u.do_tracker_jserror({
                            message: n ||
                                'illegal task: goldlog_queue.push("' + JSON.stringify(e) + '")',
                            error: JSON.stringify(e),
                            filename: 'processTask',
                        })
                } catch (t) {}
            },
            l = function(t, e) {
                var n = t ? t.action : '',
                    o = t ? t.arguments : ''
                try {
                    if (n && o && r.isArray(o)) {
                        var i = n.split('.'),
                            s = a,
                            u = a
                        if (3 === i.length)
                            (s = a[i[0]][i[1]] || {}), (u = s[i[2]] ? s[i[2]] : '')
                        else
                            for (; i.length;)
                                if (((u = s = s[i.shift()]), !s))
                                    return void('function' == typeof e ? e(t) : p(n, t))
                                'function' == typeof u && u.apply(s, o)
                    } else p(n, t)
                } catch (e) {
                    p(n, t, e.message)
                }
            },
            g = function(t) {
                function e() {
                    if (t && r.isArray(t) && t.length) {
                        for (var e = o(t).queue, n = {}, a = [];
                            (n = e.shift());)
                            l(n, function(t) {
                                a.push(t)
                            })
                        a.length > 0 &&
                            setTimeout(function() {
                                for (;
                                    (n = a.shift());) l(n)
                            }, 100)
                    }
                }
                try {
                    e()
                } catch (t) {
                    u.do_tracker_jserror({
                        message: t && t.message,
                        error: encodeURIComponent(t.stack),
                        filename: 'processGoldlogQueue',
                    })
                }
            }
        e.processGoldlogQueue = g
        var d = i.extend({
            push: function(t) {
                this.length++, l(t)
            },
        })
        e.init_watchGoldlogQueue = function(t) {
            try {
                var e = a[c] || []
                if (t) {
                    var n = o(e, t);
                    (a[c] = n.queue), g(n.formatQueue)
                } else
                    (a[c] = d.create({ startLength: e.length, length: 0 })),
                    s.init_loadAplusPlugin(),
                    g(e)
            } catch (t) {
                u.do_tracker_jserror({
                    message: t && t.message,
                    error: encodeURIComponent(t.stack),
                    filename: 'init_watchGoldlogQueue',
                })
            }
        }
    },
    function(t, e) {
        'use strict'

        function n() {};
        (n.prototype.extend = function() {}),
        (n.prototype.create = function() {}),
        (n.extend = function(t) {
            return this.prototype.extend.call(this, t)
        }),
        (n.prototype.create = function(t) {
            var e = new this()
            for (var n in t) e[n] = t[n]
            return e
        }),
        (n.prototype.extend = function(t) {
            var e = function() {}
            try {
                'function' != typeof Object.create &&
                    (Object.create = function(t) {
                        function e() {}
                        return (e.prototype = t), new e()
                    }),
                    (e.prototype = Object.create(this.prototype))
                for (var n in t) e.prototype[n] = t[n];
                (e.prototype.constructor = e),
                (e.extend = e.prototype.extend),
                (e.create = e.prototype.create)
            } catch (t) {
                console.log(t)
            } finally {
                return e
            }
        }),
        (t.exports = n)
    },
    function(t, e, n) {
        'use strict'
        var o = n(31),
            a = n(29),
            r = n(6),
            i = function() {
                var t = goldlog.getCdnPath() + '/alilog/s/' + r.lver + '/plugin/'
                return {
                    aplus_ae_path: t + 'aplus_ae.js',
                    aplus_ac_path: t + 'aplus_ac.js',
                }
            },
            s = {},
            u = 'aplus-auto-exp',
            c = 'aplus-auto-clk',
            p = function(t, e) {
                var n = i(),
                    r = goldlog && goldlog.getMetaInfo ? goldlog.getMetaInfo(t) : '',
                    p = e || r || a.getMetaCnt(t),
                    l = {};
                (l[u] = n.aplus_ae_path),
                (l[c] = n.aplus_ac_path),
                p && l[t] && !s[t] && (o.addScript(l[t]), (s[t] = !0))
            }
        e.init_loadAplusPlugin = function() {
            try {
                !goldlog._aplus_auto_exp && p(u), !goldlog._aplus_ac && p(c),
                    goldlog.aplus_pubsub.subscribe('setMetaInfo', function(t, e) {
                        t !== u || goldlog._aplus_auto_exp || p(t, e),
                            t !== c || goldlog._aplus_ac || p(t, e)
                    })
            } catch (t) {}
        }
    },
    function(t, e) {
        'use strict'

        function n(t, e) {
            return t.indexOf(e) > -1
        }

        function o(t, e) {
            for (var o = 0, a = t.length; o < a; o++)
                if (n(e, t[o])) return !0
            return !1
        }
        var a = location.host,
            r = ['admin.taobao.org', 'mybank.cn'],
            i = ['tmc.admin.taobao.org', 'tmall.admin.taobao.org']
        e.is_exception = o(r, a) && !o(i, a)
    },
    function(t, e, n) {
        'use strict'
        var o = n(17),
            a = n(26),
            r = n(37),
            i = n(23),
            s = n(9),
            u = n(3),
            c = n(57),
            p = n(100),
            l = {}
        r.doSubMsg('mw_change_pv', function(t) {
                l = t
            }),
            (e.run = p.run.extend({
                setPvExtdParam: function(t) {
                    var e = window.goldlog || (window.goldlog = {})
                    try {
                        var n = e.spm_ab ? e.spm_ab.join('.') : '0.0'
                        u.do_tracker_obsolete_inter({
                            page: location.hostname + location.pathname,
                            spm_ab: n,
                            interface_name: 'goldlog.setPvExtdParam',
                            interface_params: 'userdata = ' + JSON.stringify(t),
                        })
                    } catch (t) {
                        i({ msg: t }),
                            u.do_tracker_jserror({
                                message: 'goldlog.setPvExtdParam error:' + t.message,
                                error: t,
                            })
                    } finally {
                        return !0
                    }
                },
                sendPositionCode: function(t, e) {
                    var n = a.getGoldlogVal('pv_context') || {},
                        i = n.what_to_sendpv || {},
                        u = l.what_to_sendpv || {},
                        p = u.pvdata || i.pvdata || [],
                        g = []
                    c.updateKey(p, 'logtype', 2),
                        c.updateKey(p, 'cache', s.makeCacheNum())
                    for (var d in e) g.push([d, e[d]])
                    var f = [].concat(p, g),
                        _ = goldlog.send(o.makeUrl(t, f))
                    return r.doPubMsg(['sendPositionCode', _]), _
                },
                sendPseudo: function(t, e) {
                    var n = goldlog._$ || {}
                    t || (t = {}),
                        t._pseudo_url ?
                        n._sendPseudo({
                                'spm-cnt': t._pseudo_spm || '',
                                'spm-url': t.element_spm_id || '',
                                _pseudo_url: t._pseudo_url,
                            },
                            e
                        ) :
                        i.logger({ msg: '_pseudo_url can not be null!' })
                },
                sendPV: function(t, e) {
                    goldlog._$._sendPV(t, e)
                },
            }))
    },
    function(t, e, n) {
        'use strict'

        function o() {
            var t,
                e,
                n,
                o,
                a = c.getElementsByTagName('meta')
            for (t = 0, e = a.length; t < e; t++)
                if (
                    ((n = a[t]),
                        (o = n.getAttribute('name')),
                        'data-spm' === o || 'spm-id' === o)
                )
                    return n
        }

        function a() {
            var t = c.createElement('meta')
            t.setAttribute('name', 'data-spm')
            var e = c.getElementsByTagName('head')[0]
            return e && e.insertBefore(t, e.firstChild), t
        }

        function r() {
            var t = o()
            t || (t = a()), t.setAttribute('content', goldlog.spm_ab[0] || '')
            var e = c.getElementsByTagName('body')[0]
            e && e.setAttribute('data-spm', goldlog.spm_ab[1] || '')
        }

        function i() {
            var t,
                e,
                n,
                o = c.getElementsByTagName('*')
            for (t = 0, e = o.length; t < e; t++)
                (n = o[t]),
                n.getAttribute('data-spm-max-idx') &&
                n.setAttribute('data-spm-max-idx', ''),
                n.getAttribute('data-spm-anchor-id') &&
                n.setAttribute('data-spm-anchor-id', '')
        }

        function s() {
            var t = 5e3
            try {
                var e = goldlog.getMetaInfo('aplus-mmstat-timeout')
                if (e) {
                    var n = parseInt(e)
                    n >= 1e3 && n <= 1e4 && (t = n)
                }
            } catch (t) {}
            return t
        }
        var u = window,
            c = document,
            p = n(96),
            l = n(17),
            g = n(90),
            d = n(31),
            f = n(23),
            _ = n(37),
            m = n(9),
            h = n(26),
            v = n(21),
            y = n(93),
            b = n(61),
            w = n(27),
            x = w.getInfo(),
            T = n(4),
            k = n(3),
            j = n(101),
            P = n(11),
            S = n(104),
            A = n(106),
            I = [],
            E = [],
            C = [],
            M = [],
            U = '//g.alicdn.com',
            N = '//g-assets.daily.taobao.net',
            G = '//assets.alicdn.com/g',
            O = '//s.alicdn.com/@g/',
            V = '//u.alicdn.com',
            L = '//laz-g-cdn.alicdn.com'
        e.run = p.extend({
            getCdnPath: function() {
                var t = d.getCurrentNode(),
                    e = U,
                    n = [G, O, N, V, L],
                    o = new RegExp(V)
                if (t)
                    for (var a = 0; a < n.length; a++) {
                        var r = new RegExp(n[a])
                        if (r.test(t.src)) {;
                            (e = n[a]), o.test(t.src) && (e = G)
                            break
                        }
                    }
                return e
            },
            isInternational: function() {
                this.cdnPath || (this.cdnPath = this.getCdnPath())
                var t = [G, O, L].indexOf(this.cdnPath) > -1
                return t || 'int' === this.getMetaInfo('aplus-env')
            },
            getCookie: function(t) {
                return P.getCookie(t)
            },
            getParam: function(t) {
                var e = u.WindVane || {},
                    n = e && 'function' == typeof e.getParam ? e.getParam(t) : ''
                return n
            },
            beforeSendPV: function(t) {
                I.push(t)
            },
            afterSendPV: function(t) {
                E.push(t)
            },
            send: function(t, e, n) {
                var o
                if (0 === t.indexOf('//')) {
                    var a = v.getProtocal()
                    t = a + t
                }
                return (o =
                    'POST' === n && navigator && navigator.sendBeacon ?
                    A.postData(t, e) :
                    A.sendImg(l.makeUrl(t, e), s()))
            },
            launch: function(t, e) {
                var n
                try {;
                    (e = m.assign(e, t)), (n = goldlog._$._sendPV(e, t))
                    var o = goldlog.spm_ab ? goldlog.spm_ab.join('.') : '0.0'
                    k.do_tracker_obsolete_inter({
                        page: location.hostname + location.pathname,
                        spm_ab: o,
                        interface_name: 'goldlog.launch',
                        interface_params: 'userdata = ' +
                            JSON.stringify(t) +
                            ', config = ' +
                            JSON.stringify(e),
                    })
                } catch (t) {} finally {
                    return (
                        f.logger({
                            msg: 'warning: This interface is deprecated, please use goldlog.sendPV instead! API: http://log.alibaba-inc.com/log/info.htm?type=2277&id=31',
                        }),
                        n
                    )
                }
            },
            _$: {
                _sendPV: function(t, e) {
                    if (
                        ((t = t || {}),
                            m.any(I, function(e) {
                                return e(goldlog, t) === !1
                            }))
                    )
                        return !1
                    var o = n(107).SendPV,
                        a = new o()
                    return (
                        'undefined' == typeof t.recordType &&
                        (t.recordType = T.recordTypes.pv),
                        a.run(t, e, { fn_after_pv: E }), !0
                    )
                },
                _sendPseudo: function(t, e) {
                    t || (t = {})
                    var o = n(108).SendPrePV,
                        a = new o()
                    return (
                        'undefined' == typeof t.recordType &&
                        (t.recordType = T.recordTypes.prepv),
                        a.run(t, e, {}, function() {
                            _.doPubMsg(['sendPrePV', 'complete'])
                        }), !0
                    )
                },
            },
            sendPV: function(t, e) {
                return (
                    (e = e || {}),
                    e.pageName && goldlog.setMetaInfo('aplus-pagename', e.pageName),
                    goldlog._$._sendPV(t, e)
                )
            },
            updatePageProperties: function(t) {
                t && 'object' == typeof t ?
                    (t._page && ((t.pageName = t._page), delete t._page),
                        t.pageName &&
                        (goldlog.setMetaInfo('aplus-pagename', t.pageName),
                            delete t.pageName),
                        goldlog.appendMetaInfo('aplus-cpvdata', t)) :
                    f.logger({
                        msg: "warning: typeof updatePageProperties's params must be object",
                    })
            },
            beforeRecord: function(t) {
                C.push(t)
            },
            afterRecord: function(t) {
                M.push(t)
            },
            record: function(t, e, n, o, a) {
                if (!m.any(C, function(t) {
                        return t(goldlog) === !1
                    }))
                    return (
                        'POST' !== o && 'WS' !== o && 'WS-ONLY' !== o && (o = 'GET'),
                        j.run({ recordType: T.recordTypes.hjlj, method: o }, { logkey: t, gmkey: e, gokey: n }, { fn_after_record: M },
                            function() {
                                'function' == typeof a && a()
                            }
                        ), !0
                    )
            },
            recordUdata: function(t, e, n, o, a) {
                var r = h.getGoldlogVal('_$') || {},
                    i = r.spm || {}
                'POST' !== o && 'WS' !== o && 'WS-ONLY' !== o && (o = 'GET'),
                    j.run({ ignore_chksum: !0, method: o, recordType: T.recordTypes.uhjlj }, {
                            logkey: t,
                            gmkey: e,
                            gokey: n,
                            'spm-cnt': i.spm_cnt,
                            'spm-pre': i.spm_pre,
                        }, {},
                        function() {
                            m.isFunction(a) && a()
                        }
                    )
            },
            setPageSPM: function(t, e, n) {
                var o = 'setPageSPM'
                y(o)
                var a = goldlog.getMetaInfo('aplus-spm-fixed'),
                    s = 'function' == typeof n ? n : function() {}
                goldlog.spm_ab = goldlog.spm_ab || []
                var u = m.cloneObj(goldlog.spm_ab)
                if (
                    (t &&
                        ((goldlog.spm_ab[0] = '' + t), (goldlog._$.spm.data.a = '' + t)),
                        e && ((goldlog.spm_ab[1] = '' + e), (goldlog._$.spm.data.b = '' + e)),
                        b.spaInit(goldlog, x, u),
                        '1' !== a)
                ) {
                    var c = u.join('.')
                    goldlog.spmab_pre = c
                }
                var p = goldlog.spm_ab.join('.')
                _.doPubMsg([o, { spmab_pre: goldlog.spmab_pre, spmab: p }]),
                    _.doCachePubs([o, { spmab_pre: goldlog.spmab_pre, spmab: p }]),
                    r(),
                    i(),
                    s()
            },
            setMetaInfo: function(t, e, n) {
                if (w.setMetaInfo(t, e, n)) {
                    var o = h.getGoldlogVal('_$') || {}
                    o.meta_info = w.qGet()
                    var a = h.setGoldlogVal('_$', o),
                        r = S.isDisablePvid() + ''
                    return (
                        'aplus-disable-pvid' === t && r !== e + '' && b.resetSpmCntPvid(),
                        _.doPubMsg(['setMetaInfo', t, e, n]),
                        _.doCachePubs(['setMetaInfo', t, e, n]),
                        a
                    )
                }
            },
            appendMetaInfo: w.appendMetaInfo,
            getMetaInfo: function(t) {
                return w.getMetaInfo(t)
            },
            on: g.on,
            cloneDeep: m.cloneDeep,
            getPvId: S.getPvId,
        })
    },
    function(t, e, n) {
        'use strict'
        var o = n(9),
            a = n(26),
            r = n(37),
            i = n(23),
            s = n(102),
            u = n(103),
            c = n(4)
        e.run = function(t, e, n, p) {
            var l = new u()
            l.init({ middleware: [], config: t, plugins: c.plugins_hjlj })
            var g = l.run(),
                d = new c.context_hjlj();
            (d.userdata = e), (d.logger = i.logger)
            var f = {
                    context: d,
                    pubsub: a.getGoldlogVal('aplus_pubsub'),
                    pubsubType: 'hjlj',
                },
                _ = new s()
            _.create(f),
                _.wrap(g, function() {;
                    (f.context.status = 'complete'),
                    (f.context.method = t.method),
                    r.doPubMsg(['mw_change_hjlj', f.context]),
                        n &&
                        n.fn_after_record &&
                        o.each(n.fn_after_record, function(t) {
                            t(window.goldlog)
                        }),
                        'function' == typeof p && p()
                })()
        }
    },
    function(t, e, n) {
        'use strict'

        function o() {}
        var a = n(24),
            r = n(22),
            i = n(23),
            s = n(3),
            u = n(11);
        (o.prototype.create = function(t) {
            for (var e in t) 'undefined' == typeof this[e] && (this[e] = t[e])
            return this
        }),
        (o.prototype.pubsubInfo = function(t, e) {
            try {
                t &&
                    t.pubsub &&
                    t.pubsub.publish('mw_change_' + t.pubsubType, t.context, e)
            } catch (t) {}
        }),
        (o.prototype.calledList = []),
        (o.prototype.setCalledList = function(t) {
            a.indexof(this.calledList, t) === -1 && this.calledList.push(t)
        }),
        (o.prototype.resetCalledList = function() {
            this.calledList = []
        }),
        (o.prototype.wrap = function(t, e) {
            var n = this,
                o = this.context || {},
                c = o.compose || {},
                p = c.maxTimeout || 1e4
            return function(o) {
                var c,
                    l = t.length,
                    g = 0,
                    d = 0,
                    f = function() {
                        if ((n.pubsubInfo(n, t[g]), g === l))
                            return (
                                (o = 'done'),
                                n.resetCalledList(),
                                'function' == typeof e && e.call(n, o),
                                void clearTimeout(c)
                            )
                        if (a.indexof(n.calledList, g) === -1) {
                            if ((n.setCalledList(g), !t[g] || 'function' != typeof t[g][0]))
                                return
                            try {
                                o = t[g][0].call(n, o, function() {
                                    g++, (d = 1), clearTimeout(c), f(g)
                                })
                            } catch (e) {
                                s.do_tracker_jserror({
                                    message: e ? e.message : 'compose middleware error',
                                    error: encodeURIComponent(e.stack),
                                    filename: t[g][1],
                                })
                            }
                        }
                        var _ = 'number' == typeof o
                        if ('pause' === o || _) {
                            d = 0
                            var m = _ ? o : p,
                                h = t[g] ? t[g][1] : ''
                            c = r.sleep(m, function() {
                                if (0 === d) {
                                    var t =
                                        'jump the middleware about ' +
                                        h +
                                        ', because waiting timeout maxTimeout = ' +
                                        m +
                                        'ms!'
                                    i.logger({ msg: t })
                                    var e = window.goldlog_queue || (window.goldlog_queue = [])
                                    e.push({
                                            action: 'goldlog._aplus_cplugin_m.do_tracker_browser_support',
                                            arguments: [{
                                                msg: t,
                                                spmab: goldlog.spm_ab,
                                                page: location.href,
                                                etag: n.context ? JSON.stringify(n.context.etag) : '',
                                                cna: document.cookie ? u.getCookie('cna') : '',
                                            }, ],
                                        }),
                                        (o = null),
                                        g++,
                                        f(g)
                                }
                            })
                        } else 'done' === o ? ((g = l), f(g)) : (g++, f(g))
                    }
                return (
                    n.calledList && n.calledList.length > 0 && n.resetCalledList(), f(g)
                )
            }
        }),
        (t.exports = o)
    },
    function(t, e, n) {
        'use strict'
        var o = n(24)
        t.exports = function() {
            return {
                init: function(t) {;
                    (this.opts = t),
                    t && 'object' == typeof t.middleware && t.middleware.length > 0 ?
                        (this.middleware = t.middleware) :
                        (this.middleware = []),
                        (this.plugins_name = [])
                },
                pubsubInfo: function(t, e) {
                    try {
                        var n = t.pubsub
                        n && n.publish('plugins_change_' + t.pubsubType, e)
                    } catch (t) {}
                },
                checkPluginLoader: function(t, e) {
                    var n = !0
                    if (
                        ('object' == typeof e.enable &&
                            'function' == typeof e.enable.isEnable ?
                            (n = e.enable.isEnable(e.name)) :
                            'boolean' == typeof e.enable && (n = !!e.enable), !n)
                    )
                        return !1
                    if (n && e.deps && e.deps.length > 0)
                        for (var a = 0; a < e.deps.length; a++)
                            if (o.indexof(this.plugins_name, e.deps[a]) === -1) return !1
                    return !0
                },
                run: function(t) {
                    t || (t = 0)
                    var e = this,
                        n = this.middleware,
                        o = this.opts || {},
                        a = o.plugins
                    if (a && 'object' == typeof a && a.length > 0) {
                        var r = a[t]
                        if (
                            (this.checkPluginLoader(a, r) &&
                                (this.plugins_name.push(r.name),
                                    n.push([
                                        function(t, n) {
                                            e.pubsubInfo(this, r)
                                            var a = new r.path()
                                            return (
                                                a.init({ context: this.context, config: o.config }),
                                                a.run(t, n)
                                            )
                                        },
                                        r.name,
                                    ])),
                                t++,
                                a[t])
                        )
                            return this.run(t)
                    } else
                        window.console &&
                        console.log(
                            'aplus plugins ' +
                            JSON.stringify(a) +
                            ' must be object of array!'
                        )
                    return n
                },
            }
        }
    },
    function(t, e, n) {
        'use strict'

        function o() {
            var t = 'true' === p.disablePvid
            try {
                var e = goldlog.getMetaInfo('aplus-disable-pvid') + ''
                'true' === e ? (t = !0) : 'false' === e && (t = !1)
            } catch (t) {}
            return t
        }

        function a(t) {
            function e(t) {
                var e = '0123456789abcdefhijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ',
                    n = '0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXYZ'
                return 1 == t ?
                    e.substr(Math.floor(60 * Math.random()), 1) :
                    2 == t ?
                    n.substr(Math.floor(60 * Math.random()), 1) :
                    '0'
            }
            for (
                var n,
                    o = '',
                    a = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
                    r = !1; o.length < t;

            )
                (n = a.substr(Math.floor(62 * Math.random()), 1)), !r &&
                o.length <= 2 &&
                ('g' == n.toLowerCase() || 'l' == n.toLowerCase()) &&
                (0 === o.length && 'g' == n.toLowerCase() ?
                    Math.random() < 0.5 && ((n = e(1)), (r = !0)) :
                    1 == o.length &&
                    'l' == n.toLowerCase() &&
                    'g' == o.charAt(0).toLowerCase() &&
                    ((n = e(2)), (r = !0))),
                (o += n)
            return o
        }

        function r(t, e, n) {
            return t ? u.hash(encodeURIComponent(t)).substr(0, e) : n
        }

        function i() {
            var t = a(8),
                e = t.substr(0, 4),
                n = t.substr(0, 6)
            return [r(location.href, 4, e), r(document.title, 4, e), n].join('')
        }

        function s() {
            var t = goldlog.pvid
            return (
                (goldlog.pvid = i()),
                c.doPubMsg(['pvidChange', { pre_pvid: t, pvid: goldlog.pvid }]),
                c.doCachePubs(['pvidChange', { pre_pvid: t, pvid: goldlog.pvid }]),
                o() ? '' : goldlog.pvid
            )
        }
        var u = n(105),
            c = n(37),
            p = n(4);
        (e.isDisablePvid = o),
        (e.makePVId = s),
        (e.getPvId = function() {
            return o() ? '' : goldlog.pvid
        })
    },
    function(t, e) {
        'use strict'
        var n = 1315423911
        e.hash = function(t, e) {
            var o,
                a,
                r = e || n
            for (o = t.length - 1; o >= 0; o--)
                (a = t.charCodeAt(o)), (r ^= (r << 5) + a + (r >> 2))
            var i = (2147483647 & r).toString(16)
            return i
        }
    },
    function(t, e, n) {
        'use strict'

        function o(t) {
            if (!t) return ''
            var e = decodeURIComponent(t).match(/cache=\w+/)
            return e && 1 === e.length ? e[0].split('=')[1] : void 0
        }
        var a = n(3),
            r = window;
        (e.sendImg = function(t, e) {
            var n = new Image(),
                i = '_img_' + Math.random()
            r[i] = n
            var s = function() {
                if (r[i])
                    try {
                        delete r[i]
                    } catch (t) {
                        r[i] = void 0
                    }
            }
            return (
                (n.onload = function() {
                    s()
                }),
                (n.onerror = function() {
                    a.do_tracker_jserror({
                            message: 'loadError',
                            error: '',
                            filename: 'sendImg',
                            logid: o(t),
                        }),
                        s()
                }),
                setTimeout(function() {
                    window[i] &&
                        (a.do_tracker_jserror({
                                message: 'loadTimeout',
                                error: e,
                                filename: 'sendImg',
                                logid: o(t),
                            }),
                            (window[i].src = ''),
                            s())
                }, e || 3e3),
                (n.src = t),
                (n = null),
                t
            )
        }),
        (e.postData = function(t, e) {
            for (var n in e)
                ['cna'].indexOf(n) === -1 && (e[n] = encodeURIComponent(e[n]))
            return navigator.sendBeacon(t, JSON.stringify(e)), t
        })
    },
    function(t, e, n) {
        'use strict'
        var o = n(9),
            a = n(26),
            r = n(37),
            i = n(23),
            s = n(102),
            u = n(103),
            c = n(4),
            p = function() {};
        (p.prototype.run = function(t, e, n) {
            var p = new u()
            p.init({ middleware: [], config: t, plugins: c.plugins_pv })
            var l = p.run(),
                g = new c.context();
            (g.userdata = e), (g.logger = i.logger)
            var d = {
                    context: g,
                    pubsub: a.getGoldlogVal('aplus_pubsub'),
                    pubsubType: 'pv',
                },
                f = new s()
            f.create(d),
                f.wrap(l, function() {
                    var e = d.context.can_to_sendpv || {};
                    (d.context.status = 'YES' === e.flag ? 'complete' : 'skip'),
                    (d.context.method = t.method || 'GET'),
                    r.doPubMsg(['mw_change_pv', d.context]),
                        n &&
                        n.fn_after_record &&
                        o.each(n.fn_after_pv, function(e) {
                            e(window.goldlog, t)
                        })
                })()
        }),
        (e.SendPV = p)
    },
    function(t, e, n) {
        'use strict'
        var o = n(9),
            a = n(26),
            r = n(37),
            i = n(23),
            s = n(102),
            u = n(103),
            c = n(4),
            p = function() {};
        (p.prototype.run = function(t, e, n, p) {
            var l = new u()
            l.init({ middleware: [], config: t, plugins: c.plugins_prepv })
            var g = l.run(),
                d = new c.context_prepv();
            (d.userdata = e), (d.logger = i.logger)
            var f = {
                    context: d,
                    pubsub: a.getGoldlogVal('aplus_pubsub'),
                    pubsubType: 'prepv',
                },
                _ = new s()
            _.create(f),
                _.wrap(g, function() {;
                    (f.context.status = 'complete'),
                    r.doPubMsg(['mw_change_prepv', f.context]),
                        n &&
                        n.fn_after_record &&
                        o.each(n.fn_after_pv, function(e) {
                            e(window.goldlog, t)
                        }),
                        a.setGoldlogVal('prepv_context', d),
                        'function' == typeof p && p()
                })()
        }),
        (e.SendPrePV = p)
    },
    function(t, e, n) {
        'use strict'!(function() {
            var t = window.goldlog || (window.goldlog = {}),
                e = n(110)
            t.aplus_pubsub || (t.aplus_pubsub = e.create())
        })()
    },
    function(t, e, n) {
        'use strict'

        function o(t) {
            if ('function' != typeof t) throw new TypeError(t + ' is not a function')
            return t
        }
        var a = n(96),
            r = function(t) {
                for (var e = t.length, n = new Array(e - 1), o = 1; o < e; o++)
                    n[o - 1] = t[o]
                return n
            },
            i = a.extend({
                create: function(t) {
                    var e = new this()
                    for (var n in t) e[n] = t[n]
                    return (e.handlers = []), (e.pubs = {}), e
                },
                setHandlers: function(t) {
                    this.handlers = t
                },
                subscribe: function(t, e) {
                    o(e)
                    var n = this,
                        a = n.pubs || {},
                        r = a[t] || []
                    if (r)
                        for (var i = 0; i < r.length; i++) {
                            var s = r[i]()
                            e.apply(n, s)
                        }
                    var u = n.handlers || []
                    return t in u || (u[t] = []), u[t].push(e), n.setHandlers(u), n
                },
                subscribeOnce: function(t, e) {
                    o(e)
                    var n,
                        a = this
                    return (
                        this.subscribe.call(
                            this,
                            t,
                            (n = function() {
                                a.unsubscribe.call(a, t, n)
                                var o = Array.prototype.slice.call(arguments)
                                e.apply(a, o)
                            })
                        ),
                        this
                    )
                },
                unsubscribe: function(t, e) {
                    o(e)
                    var n = this.handlers[t]
                    if (!n) return this
                    if ('object' == typeof n && n.length > 0) {
                        for (var a = 0; a < n.length; a++) {
                            var r = e.toString(),
                                i = n[a].toString()
                            r === i && n.splice(a, 1)
                        }
                        this.handlers[t] = n
                    } else delete this.handlers[t]
                    return this
                },
                publish: function(t) {
                    var e = r(arguments),
                        n = this.handlers || [],
                        o = n[t] ? n[t].length : 0
                    if (o > 0)
                        for (var a = 0; a < o; a++) {
                            var i = n[t][a]
                            i && 'function' == typeof i && i.apply(this, e)
                        }
                    return this
                },
                cachePubs: function(t) {
                    var e = this.pubs || {},
                        n = r(arguments)
                    e[t] || (e[t] = []),
                        e[t].push(function() {
                            return n
                        })
                },
            })
        t.exports = i
    },
    function(t, e, n) {
        'use strict'
        var o = n(50),
            a = n(37),
            r = n(63),
            i = n(4)
        e.init = function() {
            i.initLoad.init_watchGoldlogQueue('metaQueue'),
                n(112)(function() {
                    var t = goldlog._$ || {},
                        e = navigator.userAgent
                    e.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i) && (t.is_ali_app = !0),
                        i.utilPvid.makePVId()
                    var s = n(61);
                    (t.spm = s), (t.is_WindVane = o.is_WindVane)
                    var u = t.meta_info
                    s.init(goldlog, u, function() {
                            i.initLoad.init_watchGoldlogQueue()
                            var t = n(4).spmException,
                                e = t.is_exception
                            e || n(114)
                            var o,
                                r = 'complete';
                            (o = ['aplusReady', r]), a.doPubMsg(o), a.doCachePubs(o)
                        }),
                        goldlog.beforeSendPV(function(e, n) {
                            if (
                                ((t.page_url = location.href),
                                    (t.page_referrer = r.getRefer()),
                                    n.is_auto && '1' === u['aplus-manual-pv'])
                            )
                                return !1
                        }),
                        goldlog.afterSendPV(function() {
                            window.g_SPM && (g_SPM._current_spm = '')
                        }),
                        i.is_auto_pv + '' == 'true' && goldlog.sendPV({ is_auto: !0 }),
                        i.initLoad.run(),
                        i.beforeUnload.run()
                })
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(37)
        t.exports = function(t) {
            var e = n(113).AplusInit,
                a = new e()
            a.run({}, function(e) {
                o.doPubMsg(['aplusInitContext', e]),
                    o.doCachePubs(['aplusInitContext', e]),
                    'function' == typeof t && t()
            })
        }
    },
    function(t, e, n) {
        'use strict'
        var o = n(26),
            a = n(23),
            r = n(102),
            i = n(103),
            s = n(4),
            u = function() {};
        (u.prototype.run = function(t, e) {
            var n = new i()
            n.init({ middleware: [], config: t, plugins: s.aplus_init })
            var u = n.run(),
                c = new s.context()
            c.logger = a.logger
            var p = {
                    context: c,
                    pubsub: o.getGoldlogVal('aplus_pubsub'),
                    pubsubType: 'aplusinit',
                },
                l = new r()
            l.create(p),
                l.wrap(u, function() {
                    'function' == typeof e && e(p.context)
                })()
        }),
        (e.AplusInit = u)
    },
    function(t, e, n) {
        'use strict'!(function() {
            var t,
                e = n(9),
                o = n(26),
                a = n(115),
                r = function() {
                    t = !0
                    var n = window.g_SPM || {}
                    e.isFunction(n.getParam) || e.isFunction(n.spm) || a.run()
                },
                i = window.goldlog || (window.goldlog = {})
            i.aplus_pubsub &&
                'function' == typeof i.aplus_pubsub.publish &&
                i.aplus_pubsub.subscribe('goldlogReady', function(e) {
                    'complete' !== e || t || r()
                })
            var s = 0,
                u = function() {
                    if (!t) {
                        var e = o.getGoldlogVal('_$') || {}
                        'complete' === e.status ?
                            r() :
                            s < 50 &&
                            (++s,
                                setTimeout(function() {
                                    u()
                                }, 200))
                    }
                }
            u()
        })()
    },
    function(t, e, n) {
        'use strict'
        var o = n(31),
            a = n(26),
            r = n(116),
            i = n(120),
            s = n(121),
            u = n(122),
            c = n(123)
        e.run = function() {
            var t = a.getGoldlogVal('_$') || {},
                e = t.meta_info,
                n = e['aplus-touch'],
                p = {
                    isTouchEnabled: o.isTouch() || '1' === n || 'tap' === n,
                    isTerminal: t.is_terminal || /WindVane/i.test(navigator.userAgent),
                };
            (window.g_SPM = {
                spm_d_for_ad: {},
                resetModule: r.spm_resetModule,
                anchorBeacon: r.spm_spmAnchorChk,
                getParam: r.spm_getSPMParam,
                spm: r.spm_forwap,
            }),
            i.run(p),
                s.run(p),
                u.run(p),
                c.run(p)
        }
    },
    function(t, e, n) {
        'use strict'

        function o(t) {
            if (t && 1 === t.nodeType) {
                s.tryToRemoveAttribute(t, 'data-spm-max-idx'),
                    s.tryToRemoveAttribute(t, 'data-auto-spmd-max-idx')
                for (
                    var e = u.nodeListToArray(t.getElementsByTagName('a')),
                        n = u.nodeListToArray(t.getElementsByTagName('area')),
                        o = e.concat(n),
                        a = 0; a < o.length; a++
                )
                    s.tryToRemoveAttribute(o[a], p)
            }
        }

        function a(t, e) {
            var n = s.tryToGetAttribute(t, p),
                o = '0'
            if (n && c.spm_isSPMAnchorIdMatch(n))
                c.spm_anchorEnsureSPMId_inHref(t, n, e)
            else {
                var a = c.spm_spmGetParentSPMId(t.parentNode)
                if (((o = a.spm_c), !o)) return void c.spm_dealNoneSPMLink(t, e)
                c.spm_initSPMModule(a.el, o, e), c.spm_initSPMModule(a.el, o, e, !0)
            }
        }

        function r(t) {
            var e,
                n = t.tagName 'A' !== n && 'AREA' !== n ?
                (e = c.spm_getParamForAD(t)) :
                (a(t, !0), (e = s.tryToGetAttribute(t, p))),
                e || (e = '0.0.0.0')
            var o = goldlog.getPvId()
            4 === e.split('.').length && o && (e += '.' + o),
                'A' !== n && 'AREA' !== n && s.tryToSetAttribute(t, p, e),
                (e = e.split('.'))
            var r = { a: e[0], b: e[1], c: e[2], d: e[3] }
            return e[4] && (r.e = e[4]), r
        }

        function i(t, e) {
            var n = r(t),
                o = [n.a, n.b, n.c, n.d]
            return e && n.e && o.push(n.e), o.join('.')
        }
        var s = n(28),
            u = n(18),
            c = n(117),
            p = 'data-spm-anchor-id';
        (e.spm_resetModule = o),
        (e.spm_spmAnchorChk = a),
        (e.spm_getSPMParam = r),
        (e.spm_forwap = i)
    },
    function(t, e, n) {
        'use strict'

        function o(t) {
            for (
                var e, n = 'data-spm-ab-max-idx', o = {}, a = ''; t && t.tagName != T && t.tagName != x;

            ) {
                if (!a && (a = v.tryToGetAttribute(t, 'data-spm-ab'))) {;
                    (e = parseInt(v.tryToGetAttribute(t, n)) || 0),
                    (o.a_spm_ab = a),
                    (o.ab_idx = ++e),
                    t.setAttribute(n, e)
                    break
                }
                if (v.tryToGetAttribute(t, 'data-spm')) break
                t = t.parentNode
            }
            return o
        }

        function a() {
            var t = y.getGoldlogVal('_$') || {},
                e = t.spm || {},
                n = e.data || {}
            return [n.a, n.b].join('.')
        }

        function r(t) {
            var e = a(),
                n = t.split('.')
            return n[0] + '.' + n[1] == e
        }

        function i(t, e) {
            if (!goldlog.isUT4Aplus ||
                'UT4Aplus' !== goldlog.getMetaInfo('aplus-toUT')
            ) {
                if (
                    (t &&
                        /&?\bspm=[^&#]*/.test(t) &&
                        (t = t
                            .replace(/&?\bspm=[^&#]*/g, '')
                            .replace(/&{2,}/g, '&')
                            .replace(/\?&/, '?')
                            .replace(/\?$/, '')), !e)
                )
                    return t
                var n,
                    o,
                    a,
                    r,
                    i,
                    s,
                    u,
                    c = '&'
                t.indexOf('#') !== -1 &&
                    ((a = t.split('#')), (t = a.shift()), (o = a.join('#'))),
                    (r = t.split('?')),
                    (i = r.length - 1),
                    (a = r[0].split('//')),
                    (a = a[a.length - 1].split('/')),
                    (s = a.length > 1 ? a.pop() : ''),
                    i > 0 && ((n = r.pop()), (t = r.join('?'))),
                    n &&
                    i > 1 &&
                    n.indexOf('&') == -1 &&
                    n.indexOf('%') !== -1 &&
                    (c = '%26')
                var p = ''
                if (
                    ((t = t + '?spm=' + p + e + (n ? c + n : '') + (o ? '#' + o : '')),
                        (u = m.isContain(s, '.') ? s.split('.').pop().toLowerCase() : ''))
                ) {
                    if ({ png: 1, jpg: 1, jpeg: 1, gif: 1, bmp: 1, swf: 1 }.hasOwnProperty(
                            u
                        ))
                        return 0!n &&
                            i <= 1 &&
                            (o || {
                                    htm: 1,
                                    html: 1,
                                    php: 1,
                                    aspx: 1,
                                    shtml: 1,
                                    xhtml: 1,
                                }.hasOwnProperty(u) ||
                                (t += '&file=' + s))
                }
                return t
            }
        }

        function s(t, e) {
            if (!goldlog.isUT4Aplus ||
                'UT4Aplus' !== goldlog.getMetaInfo('aplus-toUT')
            ) {
                var n,
                    o = t.innerHTML
                o &&
                    o.indexOf('<') == -1 &&
                    ((n = document.createElement('b')),
                        (n.style.display = 'none'),
                        t.appendChild(n)),
                    (t.href = e),
                    n && t.removeChild(n)
            }
        }

        function u(t, e, n) {
            if (!/^0\.0\.?/.test(e)) {
                var o = b.tryToGetHref(t),
                    r = a(),
                    u = w.is_ignore_spm(t)
                if (u) {
                    var c = _.param2obj(o)
                    if (c.spm && c.spm.split)
                        for (
                            var p = c.spm.split('.'), l = e.split('.'), g = 0; g < 3 && l[g] === p[g]; g++
                        )
                            2 === g && p[3] && (e = c.spm)
                }
                t.setAttribute('data-spm-anchor-id', e)
                var d = goldlog.getPvId()
                d && (e += '.' + d)
                var f = '0.0';
                (d || (r && r != f)) && (u || n || ((o = i(o, e)) && s(t, o)))
            }
        }

        function c(t) {
            var e = v.tryToGetAttribute(t, j),
                n = h.parseSemicolonContent(e) || {}
            return n
        }

        function p(t) {
            var e,
                n = y.getGoldlogVal('_$') || {},
                o = n.spm.data
            return (
                '0' == o.a && '0' == o.b ?
                (e = '0') :
                ((e = v.tryToGetAttribute(t, k)),
                    (e && e.match(/^d\w+$/)) || (e = '')),
                e
            )
        }

        function l(t, e) {
            for (
                var n = [],
                    o = h.nodeListToArray(t.getElementsByTagName('a')),
                    a = h.nodeListToArray(t.getElementsByTagName('area')),
                    r = o.concat(a),
                    i = 0; i < r.length; i++
            ) {
                for (var s = !1, u = r[i], c = r[i];
                    (u = u.parentNode) && u != t;)
                    if (v.tryToGetAttribute(u, k)) {
                        s = !0
                        break
                    }
                if (!s) {
                    var p = v.tryToGetAttribute(c, P)
                    e || 't' === p ? e && 't' === p && n.push(c) : n.push(c)
                }
            }
            return n
        }

        function g(t) {
            for (
                var e, n = t; t && t.tagName !== T && t.tagName !== x && t.getAttribute;

            ) {
                var o = t.getAttribute(k)
                if (o) {;
                    (e = o), (n = t)
                    break
                }
                if (!(t = t.parentNode)) break
            }
            return e && !/^[\w\-\.\/]+$/.test(e) && (e = '0'), { spm_c: e, el: n }
        }

        function d(t, e) {
            var n = parent !== self
            if (!n && e) return [t, e].join('.')
            if (t && e) return t + '.i' + e
            var o = window.g_SPM || (window.g_SPM = {}),
                a = o.spm_d_for_ad || {}
            return (
                'number' == typeof a[t] ? a[t]++ : (a[t] = 0),
                (o.spm_d_for_ad = a),
                t + '.i' + a[t]
            )
        }

        function f(t) {
            var e
            return t && (e = t.match(/&?\bspm=([^&#]*)/)) ? e[1] : ''
        }
        var _ = n(17),
            m = n(9),
            h = n(18),
            v = n(28),
            y = n(26),
            b = n(118),
            w = n(119),
            x = 'BODY',
            T = 'HTML',
            k = 'data-spm',
            j = 'data-spm-click',
            P = 'data-auto-spmd',
            S = 'data-spm-anchor-id';
        (e.getGlobalSPMId = a),
        (e.spm_isSPMAnchorIdMatch = r),
        (e.spm_updateHrefWithSPMId = i),
        (e.spm_writeHref = s),
        (e.spm_anchorEnsureSPMId_inHref = u),
        (e.getElDataSpm = c),
        (e.spm_getAnchor4thId_spm_d = p),
        (e.spm_getModuleLinks = l),
        (e.spm_spmGetParentSPMId = g),
        (e.get_spm_for_ad = d),
        (e.spm_getParamForAD = function(t) {
            var e = v.tryToGetAttribute(t, S)
            if (!e) {
                var n = a(),
                    o = t.parentNode
                if (!o) return ''
                var r = c(t) || {},
                    i = r.locaid || '',
                    s = t.getAttribute(k) || i,
                    u = g(o),
                    p = u.spm_c || 0
                p &&
                    p.indexOf('.') !== -1 &&
                    ((p = p.split('.')), (p = p[p.length - 1])),
                    (e = d(n + '.' + p, s))
            }
            return e
        }),
        (e.spm_initSPMModule = function(t, e, n, i) {
            var s
            if ((e = e || t.getAttribute('data-spm') || '')) {
                var g = l(t, i)
                if (0 !== g.length) {
                    var d = e.split('.'),
                        f = m.isStartWith(e, '110') && 3 == d.length
                    f && ((s = d[2]), (d[2] = 'w' + (s || '0')), (e = d.join('.')))
                    var _ = a()
                    if (_ && _.match(/^[\w\-\*]+(\.[\w\-\*\/]+)?$/))
                        if (m.isContain(e, '.')) {
                            if (!m.isStartWith(e, _)) {
                                var h = _.split('.')
                                d = e.split('.')
                                for (var y = 0; y < h.length; y++) d[y] = h[y]
                                e = d.join('.')
                            }
                        } else m.isContain(_, '.') || (_ += '.0'), (e = _ + '.' + e)
                    if (e.match && e.match(/^[\w\-\*]+\.[\w\-\*\/]+\.[\w\-\*\/]+$/)) {
                        for (
                            var w = 'data-auto-spmd-max-idx',
                                x = 'data-spm-max-idx',
                                T = i ? w : x,
                                k = parseInt(v.tryToGetAttribute(t, T)) || 0,
                                P = 0; P < g.length; P++
                        ) {
                            var A = g[P],
                                I = b.tryToGetHref(A),
                                E = v.tryToGetAttribute(A, j)
                            if (i || I || E) {
                                f && A.setAttribute('data-spm-wangpu-module-id', s)
                                var C = A.getAttribute(S)
                                if (C && r(C)) u(A, C, n)
                                else {
                                    var M,
                                        U,
                                        N = o(A.parentNode)
                                    N.a_spm_ab ?
                                        ((U = N.a_spm_ab), (M = N.ab_idx)) :
                                        ((U = void 0), k++, (M = k))
                                    var G,
                                        O = c(A) || {},
                                        V = O.locaid || ''
                                    V
                                        ?
                                        (G = V) :
                                        ((G = p(A) || M),
                                            i && (G = 'at' + ((m.isNumber(G) ? 1e3 : '') + G))),
                                        (C = U ? e + '-' + U + '.' + G : e + '.' + G),
                                        u(A, C, n)
                                }
                            }
                        }
                        t.setAttribute(T, k)
                    }
                }
            }
        }),
        (e.spm_dealNoneSPMLink = function(t, e) {
            var n = goldlog.getMetaInfo('aplus-getspmcd'),
                o = a(),
                r = b.tryToGetHref(t),
                i = f(r),
                c = null,
                l = o && 2 == o.split('.').length
            if (l) {
                var g
                return (
                    'function' == typeof n && (g = n(t, null, o)),
                    (c =
                        g && '0' !== g.spm_c ? [o, g.spm_c, g.spm_d] : [o, 0, p(t) || 0]),
                    void u(t, c.join('.'), e)
                )
            }
            r &&
                i &&
                ((r = r
                        .replace(/&?\bspm=[^&#]*/g, '')
                        .replace(/&{2,}/g, '&')
                        .replace(/\?&/, '?')
                        .replace(/\?$/, '')
                        .replace(/\?#/, '#')),
                    s(t, r))
        })
    },
    function(t, e, n) {
        'use strict'
        var o = n(19)
        e.tryToGetHref = function(t) {
            var e
            try {
                e = o.trim(t.getAttribute('href', 2))
            } catch (t) {}
            return e || ''
        }
    },
    function(t, e, n) {
        'use strict'

        function o(t) {
            return !!t && !!t.match(/^[^\?]*\balipay\.(?:com|net)\b/i)
        }

        function a(t) {
            return !!t && !!t.match(/^[^\?]*\balipay\.(?:com|net)\/.*\?.*\bsign=.*/i)
        }

        function r(t) {
            var e = location.href
            return t && e.split('#')[0] === t.split('#')[0]
        }

        function i(t) {
            for (var e;
                (t = t.parentNode) && 'BODY' !== t.tagName;)
                if ((e = u.tryToGetAttribute(t, d))) return e
            return ''
        }

        function s(t) {
            for (
                var e = [
                        'mclick.simba.taobao.com',
                        'click.simba.taobao.com',
                        'click.tanx.com',
                        'click.mz.simba.taobao.com',
                        'click.tz.simba.taobao.com',
                        'redirect.simba.taobao.com',
                        'rdstat.tanx.com',
                        'stat.simba.taobao.com',
                        's.click.taobao.com',
                    ],
                    n = 0; n < e.length; n++
            )
                if (t.indexOf(e[n]) !== -1) return !0
            return !1
        }
        var u = n(28),
            c = n(9),
            p = n(118),
            l = n(26),
            g = n(21),
            d = 'data-spm-protocol'
        e.is_ignore_spm = function(t) {
            var e = l.getGoldlogVal('_$') || {},
                n = e.meta_info || {},
                f = p.tryToGetHref(t),
                _ = i(t),
                m = u.tryToGetAttribute(t, d),
                h = 'i' === (m || _ || n.spm_protocol)
            if (!f || s(f)) return !0
            var v = r(f) || g.isStartWithProtocol(f.toLowerCase()),
                y = o(f) || a(f),
                b = v || y
            return !(h || (!c.isStartWith(f, '#') && !b)) || h
        }
    },
    function(t, e, n) {
        'use strict'

        function o(t, e, n) {
            var o = u.parseSemicolonContent(e, {}, !0),
                a = o.gostr || '',
                r = o.locaid || '',
                g = t.getAttribute('data-spm') || r,
                d = 'CLK',
                f = o.gokey || '',
                _ = l.spm_getSPMParam(t),
                m = [_.a, _.b, _.c, g].join('.'),
                h = a + '.' + m
            0 !== h.indexOf('/') && (h = '/' + h)
            var v = [],
                y = ['gostr', 'locaid', 'gmkey', 'gokey', 'spm-cnt', 'cna']
            for (var b in o)
                o.hasOwnProperty(b) && c.indexof(y, b) === -1 && v.push(b + '=' + o[b])
            v.push('_g_et=' + n),
                v.push('autosend=1'),
                f && v.length > 0 && (f += '&'),
                (f += v.length > 0 ? v.join('&') : ''),
                goldlog && s.isFunction(goldlog.recordUdata) ?
                goldlog.recordUdata(h, d, f, 'GET', function() {}) :
                p.logger({ msg: 'goldlog.recordUdata is not function!' }),
                i.tryToSetAttribute(t, 'data-spm-anchor-id', m)
        }

        function a(t, e) {
            var n = e
            window.g_SPM && (g_SPM._current_spm = l.spm_getSPMParam(e))
            for (var a; e && 'HTML' !== e.tagName;) {
                a = i.tryToGetAttribute(e, 'data-spm-click') {
                    if (a) {
                        o(e, a, 'mousedown' === t.type ? t.type : 'tap')
                        break
                    }
                    e = e.parentNode
                }
            }
            if (!a) {
                var r = g.getGlobalSPMId(),
                    s = goldlog.getMetaInfo('aplus-getspmcd')
                'function' == typeof s && s(n, t, r)
            }
        }
        var r = n(90),
            i = n(28),
            s = n(9),
            u = n(18),
            c = n(24),
            p = n(23),
            l = n(116),
            g = n(117)
        e.run = function(t) {
            t && t.isTouchEnabled ?
                r.on(document, 'tap', a) :
                r.on(document, 'mousedown', a)
        }
    },
    function(t, e, n) {
        'use strict'

        function o() {
            for (
                var t = document.getElementsByTagName('iframe'), e = 0; e < t.length; e++
            ) {
                var n = t[e],
                    o = r.tryToGetAttribute(n, 'data-spm-src')
                if (!n.src && o) {
                    var a = s.spm_getSPMParam(n)
                    if (a) {
                        var u = [a.a, a.b, a.c, a.d]
                        a.e && u.push(a.e),
                            (a = u.join('.')),
                            (n.src = i.spm_updateHrefWithSPMId(o, a))
                    } else n.src = o
                }
            }
        }

        function a() {
            function t() {
                e++, e > 10 && (n = 3e3), o(), setTimeout(t, n)
            }
            var e = 0,
                n = 500
            t()
        }
        var r = n(28),
            i = n(117),
            s = n(116)
        e.run = function(t) {
            t && !t.isTerminal && a()
        }
    },
    function(t, e, n) {
        'use strict'

        function o(t, e) {
            for (var n, o = window; e && (n = e.tagName);) {
                if ('A' === n || 'AREA' === n) {
                    r.spm_spmAnchorChk(e, !1)
                    var a = o.g_SPM || (o.g_SPM = {}),
                        i = (a._current_spm = r.spm_getSPMParam(e)),
                        s = []
                    try {
                        s = [i.a, i.b, i.c, i.d]
                        var u = i.e || goldlog.pvid || ''
                        u && s.push(u)
                    } catch (t) {}
                    break
                }
                if ('BODY' == n || 'HTML' == n) break
                e = e.parentNode
            }
        }
        var a = n(90),
            r = n(116)
        e.run = function(t) {
            var e = document
            t && t.isTouchEnabled ?
                a.on(e, 'tapSpm', o) :
                (a.on(e, 'mousedown', o), a.on(e, 'keydown', o))
        }
    },
    function(t, e, n) {
        'use strict'

        function o(t, e) {
            if ((e || (e = l), l.evaluate))
                return e.evaluate(t, l, null, 9, null).singleNodeValue
            for (var n, a = t.split('/'); !n && a.length > 0;) n = a.shift()
            var r,
                i = /^.+?\[@id='(.+?)']$/i,
                s = /^(.+?)\[(\d+)]$/i
            return (
                (r = n.match(i)) ?
                (e = e.getElementById(r[1])) :
                (r = n.match(s)) &&
                (e = e.getElementsByTagName(r[1])[parseInt(r[2]) - 1]),
                e ? (0 === a.length ? e : o(a.join('/'), e)) : null
            )
        }

        function a() {
            var t = {}
            for (var e in p)
                if (p.hasOwnProperty(e)) {
                    var n = o(e)
                    if (n) {
                        t[e] = 1
                        var a = p[e],
                            r = 'A' === n.tagName ? a.spmd : a.spmc
                        s.tryToSetAttribute(n, 'data-spm', r || '')
                    }
                }
            for (var i in t) t.hasOwnProperty(i) && delete p[i]
        }

        function r() {
            if (!c && g.spmData) {
                c = !0
                var t = g.spmData.data
                if (t && i.isArray(t)) {
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e],
                            o = n.xpath;
                        (o = o.replace(/^id\('(.+?)'\)(.*)/g, "//*[@id='$1']$2")),
                        (p[o] = { spmc: n.spmc, spmd: n.spmd })
                    }
                    a()
                }
            }
        }
        var i = n(9),
            s = n(28),
            u = n(90),
            c = !1,
            p = {},
            l = document,
            g = window;
        (e.wh_updateXPathElements = a),
        (e.init_wh = r),
        (e.run = function() {
            u.DOMReady(function() {
                r()
            })
        })
    },
    function(t, e, n) {
        'use strict'

        function o() {
            var t,
                e = p.getParamFromUrl('utparamcnt', location.href)
            if (e)
                try {
                    t = e = JSON.parse(decodeURIComponent(e))
                } catch (t) {}
            return t
        }

        function a() {
            var t,
                e = d['aplus-utparam']
            if (e)
                if ('object' == typeof e) t = e
                else
                    try {
                        t = JSON.parse(e)
                    } catch (t) {}
            return t
        }
        var r = n(63),
            i = n(64),
            s = n(37),
            u = n(52),
            c = n(9),
            p = n(62),
            l = n(4),
            g = n(27),
            d = g.getInfo(),
            f = 'complete'
        e.initGoldlog = function(t) {
            var e = window.goldlog || (window.goldlog = {}),
                n = l.goldlog_path.run.create()
            e._ready_time = new Date().getTime()
            for (var p in n) e[p] = n[p]
            var g = /TB\-PD/i.test(navigator.userAgent),
                _ = (e._$ = e._$ || {}),
                m = o(),
                h = a()
            return (
                'object' == typeof m &&
                (h && (m = c.assign(m, h)), (d['aplus-utparam'] = m)),
                (_.meta_info = d),
                (_.is_terminal =
                    'aplus_wap' === l.script_name || g || '1' == d['aplus-terminal']),
                (_.send_pv_count = 0),
                (_.status = f),
                (_.script_name = l.script_name),
                (_.spm = { data: {} }),
                (_.page_referrer = r.getRefer()),
                (_.pageLoadTime = new Date().getTime()),
                (e.lver = l.lver),
                (e.nameStorage = i.nameStorage),
                u.haveNativeFlagInUA(),
                s.doPubMsg(['goldlogReady', f]),
                s.doCachePubs(['goldlogReady', f]),
                t.init(),
                e
            )
        }
    },
])