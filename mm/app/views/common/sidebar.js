define('app/views/common/sidebar', [
	'magix',
	'jquery',
	'app/exts/helper',
], function (i, c, o) {
	var a = i('magix'),
		e = i('jquery'),
		t = i('app/exts/helper')
	o.exports = a.View.extend({
		tmpl:
			'<div class="block-sidebar" id="J_block_sidebar"><div class="block-sidebar-item iconfont" mx-click="showcar()" data-spm-click="gostr=/alimama.30;locaid=d6cf4b934" title="cart">&#xe618; <span id="J_icon_sidebar_count" class="icon-car-count">{{*iconsCount}}</span></div><div class="block-sidebar-item iconfont" mx-click="feedback()" data-spm-click="gostr=/alimama.30;locaid=d0706ad1e" title="feedback">&#xe672;</div><div class="block-sidebar-item iconfont" mx-click="top()" data-spm-click="gostr=/alimama.30;locaid=d4aafcc90" title="top">&#xe619;</div></div>',
		ctor: function () {
			this.bind()
		},
		bind: function () {
			e(window).on('scroll', function () {
				200 < e(window).scrollTop()
					? e('#J_block_sidebar').show()
					: e('#J_block_sidebar').hide()
			})
		},
		render: function () {
			var i = t.getItem(t.CAR_ICON_KEY) || []
			;(this.data = {
				iconsCount: i.length,
			}),
				this.setView()
		},
		'feedback<click>': function () {
			window.open('//github.com/thx/iconfont-plus/issues')
		},
		'showcar<click>': function () {
			a.Vframe.get('magix_vf_car').invoke('toggleShow')
		},
		'top<click>': function () {
			return (
				e('body,html').animate(
					{
						scrollTop: 0,
					},
					350
				),
				!1
			)
		},
	})
})
