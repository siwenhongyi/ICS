define('app/exts/aitag/index', [
	'app/exts/saver/index',
	'$',
	'$',
	'app/exts/aitag/tf',
], function (e, t, r) {
	var n,
		a = e('app/exts/saver/index'),
		o = e('$'),
		o = e('$'),
		i = e('app/exts/aitag/tf'),
		s = '//127.0.0.1:8000/mm/' //seajs.config().data.base
	function c(e) {
		var t = o.Deferred()
		return (
			i.loadGraphModel(e).then(
				function (e) {
					return t.resolve(e)
				},
				function (e) {
					t.reject(e)
				}
			),
			t
		)
	}
	function d() {
		var a = o.Deferred(),
			e = s + 'app/exts/aitag/aimodel/'
		return (
			n
				? a.resolve(n)
				: o
						.when(
							c(e + '3_6/model.json'),
							c(e + '4_5/model.json'),
							c(e + '7_8/model.json')
						)
						.then(
							function (e, t, r) {
								;(n = [
									{ classArr: ['flat', 'hand'], model: e },
									{ classArr: ['fill', 'line'], model: t },
									{ classArr: ['simple', 'complex'], model: r },
								]),
									a.resolve(n)
							},
							function (e) {
								a.reject(e)
							}
						),
			a
		)
	}
	function l(e) {
		var p = o.Deferred(),
			e = o(e)
		return (
			e.removeAttr('style'),
			a.svgAsDataUri(e[0], { height: 1024 }, function (e) {
				var u = new Image()
				;(u.onload = function () {
					try {
						var e = document.createElement('canvas')
						;(e.width = u.width), (e.height = u.height)
						var t = e.getContext('2d'),
							r = 50 / u.width,
							a = 50 / u.height
						t.scale(r, a), t.drawImage(u, 0, 0, u.width, u.height)
						for (
							var n = t.getImageData(0, 0, 50, 50).data, o = [], s = 0;
							s < 50;
							s++
						)
							for (var i = 0; i < 50; i++) {
								var c = (50 * s + i) << 2,
									d = n[c],
									l = n[1 + c],
									h = n[2 + c],
									f = n[3 + c] / 255,
									d = 255 * (1 - f) + f * d,
									l = 255 * (1 - f) + f * l,
									h = 255 * (1 - f) + f * h
								o.push(d / 255), o.push(l / 255), o.push(h / 255)
							}
						p.resolve(o)
					} catch (e) {
						p.reject(e)
					}
				}),
					(u.src = e)
			}),
			p
		)
	}
	r.exports = {
		predict: function (e, n) {
			var s = o.Deferred()
			return (
				l(e).then(
					function (e) {
						for (
							var o = (o = i.tensor1d(e, 'float32')).reshape([50, 50, 3]),
								t = [1],
								r = 0;
							r < o.shape.length;
							r++
						)
							t.push(o.shape[r])
						function a(e) {
							for (var t = {}, r = 0; r < e.length; r++) {
								var a = e[r],
									n = a.model.execute(o)[1].dataSync()
								;(t[a.classArr[0]] = n[0].toFixed(4)),
									(t[a.classArr[1]] = n[1].toFixed(4))
							}
							s.resolve(t)
						}
						;(o = o.reshape(t)),
							n
								? a(n)
								: d().then(a, function (e) {
										s.reject(e)
								  })
					},
					function (e) {
						s.reject(e)
					}
				),
				s
			)
		},
		loadModels: d,
		svg2RgbArr: l,
	}
})
