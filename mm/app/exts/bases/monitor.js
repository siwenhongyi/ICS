define('app/exts/bases/monitor', ['$'], function (e, o, n) {
	function i(e) {
		for (var o = r.length - 1; 0 <= o; o--) {
			var n = r[o]
			n.removed
				? r.splice(o, 1)
				: ((n = n.view),
				  ('mousedown' == e.type && n.inside(e.target)) || n.hide())
		}
	}
	var d = e('$'),
		t = 0,
		r = []
	n.exports = {
		add: function (e) {
			var o = r[e.id]
			o && (o.removed = !0),
				r.push(
					(o = {
						view: e,
					})
				),
				(r[e.id] = o)
		},
		remove: function (e) {
			var o = r[e.id]
			o && (o.removed = !0), delete r[e.id]
		},
		setup: function () {
			t || (d(document).on('mousedown', i), d(window).on('resize', i)), t++
		},
		teardown: function () {
			0 < t &&
				(--t || (d(document).off('mousedown', i), d(window).off('resize', i)))
		},
	}
})
