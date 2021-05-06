define('app/views/user/user_likes', [
	'magix',
	'app/exts/helper',
	'app/models/common/index',
	'jquery',
], function (a, i, e) {
	var o = a('magix'),
		c = a('app/exts/helper'),
		n = a('app/models/common/index'),
		s = a('jquery')
	e.exports = o.View.extend({
		tmpl:
			'<div class="likes-iconlist">{{^if(icons.length === 0)}}<ul class="block-icon-list clearfix">{{#for(icon in icons)}}<li class="J_icon_id_{{icon.id}} {{icon.favor ? \'favor\' : \'\'}}"><div class="icon-twrap" t-class:tbackground="icon.show_svg | tbackground">{{{icon.show_svg}}}</div><span class="icon-name" title="{{*icon.name}}">{{*icon.name}}</span><div class="icon-cover"><span mx-click="car({id:{{icon.id}},index:{{__INDEX__}}})" data-spm-click="gostr=/alimama.30;locaid=dd55f4865" title="**COMMON_ADD_TO_CAR**" class="cover-item iconfont cover-item-line icon-gouwuche1"></span> <span data-login mx-click="toggleFavor({id:{{icon.id}},index:{{__INDEX__}}})" data-spm-click="gostr=/alimama.30;locaid=d2ba30979" title="**COMMON_LIKE_ICON**" class="cover-item iconfont cover-item-line icon-shoucang1"></span> <span data-login="true" mx-click="downloadIcon({id:{{icon.id}},index:{{__INDEX__}}})" data-spm-click="gostr=/alimama.30;locaid=dcfa03cc3" title="**COMMON_DOWN_ICON**" class="cover-item iconfont cover-item-line icon-xiazai"></span></div></li>{{/for}}</ul>{{/if}} {{#if(icons.length === 0)}}<div class="block-no-results"><img src="//img.alicdn.com/tfs/TB1PhV7uoY1gK0jSZFMXXaWcVXa-164-142.svg" alt=""><div class="message">**COMMON_NO_RESULT**</div></div>{{/if}}</div>',
		ctor: function () {
			this.observe(['keyword', 'uid'])
		},
		render: function () {
			var a,
				e = this
			e.rendered && e._beforedata && e.changed('keyword')
				? e._render(e._beforedata)
				: ((a = e.param('uid') || 1),
				  e
						.request()
						.all([{ name: 'user_likes', params: { uid: a } }], function (a, i) {
							i = i.get('data')
							;(e._beforedata = i), e._render(i)
						}))
		},
		_render: function (a) {
			var i = this,
				a = c.filter(a.icons, function (a) {
					return new RegExp(i.param('keyword')).test(a.name)
				})
			;(i.data = { icons: a }),
				i.setView().then(function () {
					o.Vframe.get('magix_vf_car').invoke('domSelected')
				})
		},
		'car<click>': function (a) {
			var i = a.params.index,
				i = this.data.icons[i],
				a = s(a.target).parents('li')
			a.hasClass('selected')
				? (o.Vframe.get('magix_vf_car').invoke('removeIcon', i),
				  a.removeClass('selected'))
				: (o.Vframe.get('magix_vf_car').invoke('addIcon', i),
				  a.addClass('selected'))
		},
		'downloadIcon<click>': function (a) {
			a = a.params.id
			c.showDownloadDialog({ iconId: a })
		},
		'toggleFavor<click>': function (a) {
			var i = a.params.id,
				e = s(a.target).parents('li')
			e.hasClass('favor')
				? this.wrapModel(n).cancelFavor(i, function (a) {
						e.removeClass('favor')
				  })
				: this.wrapModel(n).addFavor(i, function (a) {
						e.addClass('favor')
				  })
		},
	})
})
