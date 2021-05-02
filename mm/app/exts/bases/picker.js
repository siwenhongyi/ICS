define('app/exts/bases/picker', [
	'magix',
	'$',
	'app/exts/bases/monitor',
], function (o, e, t) {
	var r = o('magix'),
		d = o('$'),
		p = o('app/exts/bases/monitor')
	r.applyStyle(
		'mp-60f',
		".mp-60f-picker{z-index:10000;width:227px;background:#fff;position:absolute;display:none;box-shadow:0 4px 10px 0 rgba(0,0,0,.1),0 3px 5px 0 rgba(0,0,0,.05),0 0 0 1px rgba(0,0,0,.09098)}.mp-60f-left:after,.mp-60f-left:before{border:8px solid transparent;border-top:8px solid #fff;width:0;height:0;position:absolute;bottom:-16px;left:8px;content:' '}.mp-60f-left:before{border-width:8px;border-top-color:#888}.mp-60f-right:after,.mp-60f-right:before{border:8px solid transparent;border-top:8px solid #fff;width:0;height:0;position:absolute;bottom: -16px;right:8px;content:' '}.mp-60f-right:before{border-width:8px;border-top-color:#888}"
	)
	t.exports = r.View.extend({
		ctor: function (o) {
			var e = this
			p.setup(),
				e.on('destroy', function () {
					p.teardown(), d('#' + e.id).remove()
				}),
				(e.$ownerNodeId = o.ownerNodeId),
				(e.$dock = o.dock || 'left'),
				d('#' + e.id).addClass('mp-60f-picker mp-60f-' + e.$dock)
		},
		inside: function (o) {
			return r.inside(o, this.id) || r.inside(o, this.$ownerNodeId)
		},
		show: function () {
			var o,
				e,
				t,
				r,
				i = this
			i.$shown ||
				((o = d('#' + i.id)),
				(r = d('#' + i.$ownerNodeId)),
				(i.$shown = !0),
				p.add(i),
				o.show(),
				(t = (e = r.offset()).top - o.outerHeight() - 8),
				(r =
					'left' == i.$dock
						? e.left
						: e.left + r.outerWidth() - o.outerWidth()),
				o.css({
					left: r,
					top: t,
				}))
		},
		hide: function () {
			var o,
				e = this
			e.$shown && ((o = d('#' + e.id)), (e.$shown = !1), o.hide(), p.remove(e))
		},
	})
})
