define('app/exts/popover/index', ['magix', '$'], function(e, t, o) {
    var i = e('magix'),
        r = e('$'),
        p = void 0
    o.exports = i.View.extend({
        tmpl: '',
        init: function(e) {
            var t = this;
            (t.$placement = e.placement || 'right'),
            (t.$align = e.align),
            (t.$content = e.content || ''),
            (t.$width = e.width || 200),
            t.on('destroy', function() {
                t.$ownerNode.off('mouseenter mouseleave'),
                    t.$rNode && t.$rNode.off('mouseenter mouseleave').remove()
            })
        },
        render: function() {
            var e = this
            e.endUpdate()
            var t = r('#' + e.id);
            (e.$ownerNode = t).hover(
                function() {
                    e.prepare(),
                        (e.$timer = setTimeout(
                            e.wrapAsync(function() {
                                e.show()
                            }),
                            100
                        ))
                },
                function() {
                    clearTimeout(e.$timer), e.hide()
                }
            )
        },
        prepare: function() {
            var e,
                t = this
            t.$rNode ||
                ((e = 'popover_' + t.id),
                    t.$ownerNode.after(
                        '<div class="popover" id="' +
                        e +
                        '" ><div class="popover-content"></div></div>'
                    ),
                    r('#' + e)
                    .find('.popover-content')
                    .text(t.$content),
                    (t.$rNode = r('#' + e)),
                    t.$width && t.$rNode.css({ 'max-width': t.$width, width: t.$width }),
                    t.$rNode.hover(
                        function() {
                            clearTimeout(t.$timer)
                        },
                        function() {
                            t.hide()
                        }
                    ))
        },
        show: function() {
            var e = this
            p && p != e && p.immediatelyHide(), (p = e), clearTimeout(e.$timer)
            var t = e.$rNode,
                o = e.$ownerNode,
                i = o.offset(),
                r = o.outerWidth(),
                n = o.outerHeight()
            t.css({ display: 'block' })
            var a = t.outerWidth(),
                d = t.outerHeight(),
                s = void 0,
                c = void 0
            switch (e.$placement) {
                case 'top':
                    ;
                    (s = i.left - (a - r) / 2), (c = i.top - d - 10)
                    break
                case 'right':
                    ;
                    (s = i.left + r + 10), (c = i.top - (d - n) / 2)
                    break
                case 'bottom':
                    ;
                    (s = i.left - (a - r) / 2), (c = i.top + n + 10)
                    break
                case 'left':
                    ;
                    (s = i.left - a - 10), (c = i.top - (d - n) / 2)
            }
            switch (e.$align) {
                case 'top':
                    c = i.top
                    break
                case 'left':
                    s = i.left
                    break
                case 'right':
                    s = i.left - a + r
                    break
                case 'bottom':
                    c = i.top - d + n
            }
            t.offset({ left: s, top: c })
        },
        hide: function() {
            var e = this
            clearTimeout(e.$timer),
                (e.$timer = setTimeout(
                    e.wrapAsync(function() {
                        e.$rNode.css({ display: 'none' })
                    }),
                    50
                ))
        },
        immediatelyHide: function() {
            clearTimeout(this.$timer), this.$rNode.css({ display: 'none' })
        },
    })
})