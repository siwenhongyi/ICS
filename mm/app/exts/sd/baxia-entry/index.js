!(function() {
    'use strict'
    var a = location,
        t = document,
        o = function(o, e, r) {;
            (void 0 === e && (e = 1),
                void 0 === r && (r = 1),
                0 >= r || Math.random() < r) &&
            (function(a, t) {
                var o = []
                for (var e in a) o.push(e + '=' + encodeURIComponent(a[e]))
                new Image().src = t + o.join('&')
            })({
                    code: e,
                    msg: o + '',
                    pid: 'baxia-fast',
                    page: a.href.split(/[#?]/)[0],
                    query: a.search.substr(1),
                    hash: a.hash,
                    referrer: t.referrer,
                    title: t.title,
                    ua: navigator.userAgent,
                },
                '//127.0.0.1:8000/fsp.1.1?'
                //'//gm.mmstat.com/fsp.1.1?'
            )
        }
    var e,
        r = document,
        i = 1,
        n = function(a, t, e) {
            if (!a) return t()
            var s = r.getElementsByTagName('script')[0],
                p = r.createElement('script')
            if (
                ((p.async = !0),
                    (p.src = a),
                    a.indexOf('alicdn') > -1 && (p.crossOrigin = !0),
                    (p.onerror = function(r) {
                        5 > i ?
                            (i++, n(a, t, e)) :
                            ((p.onerror = null),
                                o(
                                    'function:loadJS. msg:' +
                                    a +
                                    'load error銆俻rops锛�' +
                                    JSON.stringify(e)
                                ))
                    }),
                    t)
            ) {
                var h = !1
                p.onload = p.onreadystatechange = function() {
                    h ||
                        (p.readyState && !/loaded|complete/.test(p.readyState)) ||
                        ((p.onload = p.onreadystatechange = null), (h = !0), t())
                }
            }
            p.src = '//127.0.0.1:8000/mm/app/exts/sd/baxia/baxiaCommon.js'
            p.async = 'async'
            s.parentNode.insertBefore(p, s)
        },
        s = location.href || ''
    try {
        if (!self.baxiaCommon) {
            o('init', 'aplus_js_load', 0.01),
                document.cookie.indexOf('loadbaxiajs') > -1 && c(1)
            var p = []
            p.push({ path: 'https://cc.tmall.com', ratio: 1 }),
                p.push({ path: 'dc.console.aliyun.com/next/index', ratio: 1 }),
                p.push({ path: 'hellobixi.taobao.com', ratio: 1 }),
                p.push({ path: 'cart.1688.com/basket/batch.htm', ratio: 1 }),
                p.push({ path: 'yuekeyun.com', ratio: 1 }),
                p.push({
                    path: 'portalpro.hemaos.com/pages/scm/grouponNew.html',
                    ratio: 1,
                }),
                p.push({ path: 'crm.alibaba.com/crmagent', ratio: 1 }),
                p.push({ path: 'crm.alibaba.com', ratio: 1 }),
                p.push({ path: 'portalpro.hemaos.com', ratio: 1 }),
                p.push({ path: 'mos.miaostreet.com/wakanda/workOrder', ratio: 1 }),
                p.push({ path: 's.alitrip.com/vacation/list.htm', ratio: 1 }),
                p.push({ path: 'beian.aliyun.com/pcContainer/orderdetail', ratio: 1 }),
                p.push({ path: 'mos.miaostreet.com/other-guider/leaveForm', ratio: 1 }),
                p.push({ path: 'tm-buy.aliyun.com/trade', ratio: 1 }),
                p.push({
                    path: '/app/ali-content-platform/pc-publish-page/index.html',
                    ratio: 1,
                }),
                p.push({
                    path: '/app/ali-content-platform/content-publish/index.html',
                    ratio: 1,
                }),
                p.push({ path: 'market.m.taobao.com', ratio: 1 }),
                p.push({ path: 'market.wapa.taobao.com', ratio: 1 }),
                p.push({ path: 'sale.tmall.com', ratio: 1 }),
                p.push({ path: 'web.56xiniao.com', ratio: 1 }),
                p.push({ path: '//pre-', ratio: 1 }),
                p.push({ path: '.', ratio: 0.3 })
            for (var h = 0; p.length > h; h++)
                (e = s) && e.indexOf(p[h].path) > -1 && c(p[h].ratio)
        }
    } catch (m) {
        o('err' + m.message, 'aplus_js_baxia_err', 1)
    }

    function c(a) {
        if (a >= Math.random()) {
            o('baxiajs', 'aplus_js_load', 1)
            var t = '//g.alicdn.com',
                e = self.goldlog
            e && e.getCdnPath && (t = e.getCdnPath())
            var r = '2.0.39'
            if (s.indexOf('_set_bx_v_') > -1) {
                var i = s.match(/_set_bx_v_=([^&]+)/)
                r = encodeURIComponent(i && i[1])
            };
            (t = t + '/sd/baxia/' + r + '/baxiaCommon.js'),
            s.indexOf('_set_bx_v_=debug') > -1 &&
                (t = 'http://localhost:8064/build/baxiaCommon.js'),
                n(t, null, null)
        }
    }
})()