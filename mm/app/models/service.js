define('app/models/service', ['magix', 'jquery', 'app/exts/helper'], function(
    e,
    t,
    o
) {
    var c = e('magix'),
        g = e('jquery'),
        m = e('app/exts/helper'),
        l = { method: 'GET', dataType: 'json' },
        e = c.Service.extend(function(o, s) {
            var e = l,
                t = o.get('params') || o.get('formParams') || o.get('urlParams') || {},
                a = o.get('url'),
                n = o.get('async'),
                p = o.get('method') || e.method,
                r = o.get('dataType') || e.dataType,
                i = [],
                n = !1 !== n,
                e = c.config().ctoken
            if (
                (g.extend(t, {
                        t: +new Date(),
                        ctoken: e,
                        csrfmiddlewaretoken: document.getElementsByName(
                            'csrfmiddlewaretoken'
                        )[0].value,
                    }),
                    'object' == typeof t)
            ) {
                for (var d in t)
                    t.hasOwnProperty(d) &&
                    ('object' == typeof t[d] ?
                        i.push(d + '=' + encodeURIComponent(JSON.stringify(t[d]))) :
                        i.push(d + '=' + encodeURIComponent(t[d])))
                t = i.join('&')
            }
            g.ajax({
                url: c.toUrl(a),
                dataType: r,
                timeout: 2e4,
                data: t,
                type: p,
                async: n,
                complete: function(e, t) {
                    if ('error' === t)
                        o.get('skipTip') ?
                        s({
                            msg:
                                (e.responseJSON && e.responseJSON.message) || e.statusText,
                        }) :
                        m.showGlobalTip(
                            (e.responseJSON && e.responseJSON.message) || e.statusText
                        )
                    else {
                        if ('jsonp' === r) return o.set('data', e.responseJSON), void s()
                        e = g.parseJSON(e.responseText)
                        e.code && 200 === e.code ?
                            (o.set('data', e.data), s()) :
                            e.code && 500 === e.code && 'LOGIN REQUIRED' === e.message ?
                            (window.location.href = '/?login=1') :
                            o.get('skipTip') ?
                            s(e) :
                            m.showGlobalTip(e.message)
                    }
                },
            })
        })
    o.exports = e
})