define('app/exts/tip/index', ['jquery', 'magix'], function (i, t, e) {
	var s = i('jquery')
	i('magix')
	e.exports = {
		show: function (i) {
			var i = s.extend(
					{
						target: 'body',
						time: 400,
						msg: 'message',
						type: 'top',
						color: '129c00',
					},
					i
				),
				t = s(i.target),
				e = s(
					'<span style="position: absolute;font-size: 12px;line-height: 24px;height: 24px;">{{MSG}}</span>'.replace(
						'{{MSG}}',
						i.msg
					)
				),
				o = i.time
			t.append(e),
				'top' === i.type &&
					(e.css({
						left: 0,
						top: 0,
						color: '#' + i.color,
						opacity: 0,
					}),
					e.animate(
						{
							top: -e.height(),
							opacity: 1,
						},
						o,
						'swing',
						function () {
							e.fadeOut(o, function () {
								e.remove()
							})
						}
					)),
				'replace' === i.type &&
					(t.css({
						visibility: 'hidden',
					}),
					e.css({
						left: 0,
						top: 0,
						width: '100%',
						height: '100%',
						color: '#' + i.color,
						opacity: 0,
						visibility: 'visible',
					}),
					e.animate(
						{
							opacity: 1,
						},
						o,
						'swing',
						function () {
							e.fadeOut(o, function () {
								e.remove(),
									t.css({
										visibility: 'visible',
									})
							})
						}
					))
		},
	}
})
