define('app/views/search/icon/index', [
	'magix',
	'jquery',
	'app/models/common/index',
	'app/exts/helper',
], function (a, i, o) {
	var r = a('magix'),
		e = a('jquery'),
		n = a('app/models/common/index'),
		p = a('app/exts/helper')
	o.exports = r.View.extend({
		tmpl:
			'<div class="wrap"><div class="page-search-container"><ul class="block-icon-list clearfix">{{#for(icon in icons)}}<li class="J_icon_id_{{icon.id}} {{icon.favor ? \'favor\' : \'\'}}"><div class="icon-twrap" t-class:tbackground="icon.show_svg | tbackground">{{{icon.show_svg}}}</div><span class="icon-name" title="{{icon.name}}">{{icon.name}}</span><div class="icon-cover"><span mx-click="car({id:{{icon.id}},index:{{__INDEX__}}})" data-spm-click="gostr=/alimama.30;locaid=ddfb588f4" title="**COMMON_ADD_TO_CAR**" class="cover-item iconfont cover-item-line icon-gouwuche1"></span> <span data-login mx-click="toggleFavor({id:{{icon.id}},index:{{__INDEX__}}})" data-spm-click="gostr=/alimama.30;locaid=d3a0b439c" title="**COMMON_LIKE_ICON**" class="cover-item iconfont cover-item-line icon-shoucang1"></span> <span data-login="true" mx-click="downloadIcon({id:{{icon.id}},index:{{__INDEX__}}})" data-spm-click="gostr=/alimama.30;locaid=dac7baec5" title="**COMMON_DOWN_ICON**" class="cover-item iconfont cover-item-line icon-xiazai"></span></div></li>{{/for}}</ul>{{#if(icons.length===0 && !isCollection)}}<div class="block-no-results"><img src="//gw.alicdn.com/imgextra/i3/O1CN01DKaORe1dcIHH0eMRx_!!6000000003756-55-tps-164-142.svg" alt=""><div class="message">**COMMON_NO_RESULT**</div></div>{{/if}}</div></div>{{#if(count>= pageSize)}}<div class="block-pagination-wrap"><div data-itemsonpage="{{pageSize}}" class="wrap block-pagination mt40i" mx-view="app/exts/pagination/index" data-items="{{count}}" data-currentpage="{{page}}"></div></div>{{/if}} {{#if(isCollectionLess)}}<div class="bottom-choose-wrap"><div class="bottom-choose-text"><span class="iconfont icon-jingxuan"></span> \u7cbe\u9009\u56fe\u6807\u592a\u5c11\uff1f\u70b9\u51fb\u5207\u6362\u81f3\u201c\u5168\u90e8\u56fe\u6807\u201d</div><div class="bottom-choose-btn" mx-click="chooseAllIcons()">\u56fe\u6807\u5207\u6362 <span class="iconfont icon-qiehuan"></span></div></div>{{/if}}',
		ctor: function () {
			this.observe([
				'q',
				'sortType',
				'page',
				'fromCollection',
				'fills',
				'tag',
				'csrfmiddlewaretoken',
			])
		},
		render: function () {
			var o = this,
				e = o.param('q') || 'iconfont',
				n = o.param('page') || 1,
				t = o.param('sortType') || 'updated_at',
				a = o.param('fromCollection'),
				i = o.param('tag') || '',
				c = o.param('fills'),
				ct = document.getElementsByName('csrfmiddlewaretoken')[0].value,
				s = {
					q: e,
					sortType: t,
					page: n,
					pageSize: 54,
					csrfmiddlewaretoken: ct,
				}
			if (
				((s.fromCollection = a
					? parseInt(a)
					: p.getItem('fromCollection') || 1),
				-1 === window.location.href.indexOf('fills=') &&
					null !== (c = p.getItem('fills')) &&
					(c += ''),
				i)
			)
				s[i] = 1
			else
				for (
					var l = ['line', 'fill', 'flat', 'hand', 'simple', 'complex'], d = 0;
					d < l.length;
					d++
				)
					delete s[l[d]]
			;(s.fills = c),
				o.request().all(
					[
						{
							name: 'query_icons',
							params: s,
						},
					],
					function (a, i) {
						i = i.get('data')
						;(o.data = i),
							(o.data.q = e),
							(o.data.sortType = t),
							(o.data.page = n),
							(o.data.pageSize = 54),
							8e3 < parseInt(o.data.count) && (o.data.count = 8e3),
							(o.data.isCollection = 1 === s.fromCollection),
							(o.data.isCollectionLess =
								1 === s.fromCollection && o.data.count < 54),
							o.owner.parent().invoke('setCount', o.data.count),
							o.setView().then(function () {
								r.Vframe.get('magix_vf_car').invoke('domSelected')
							})
					}
				)
		},
		'chooseAllIcons<click>': function (a) {
			e(a.target).addClass('btn-rotate'),
				r.Router.to({
					fromCollection: '-1',
				})
		},
		'car<click>': function (a) {
			var i = a.params.index,
				i = this.data.icons[i],
				a = e(a.target).parents('li')
			a.hasClass('selected')
				? (r.Vframe.get('magix_vf_car').invoke('removeIcon', i),
				  a.removeClass('selected'))
				: (r.Vframe.get('magix_vf_car').invoke('addIcon', i),
				  a.addClass('selected')),
				this.setView()
		},
		'downloadIcon<click>': function (a) {
			a = a.params.id
			p.showDownloadDialog({
				iconId: a,
			})
		},
		'toggleFavor<click>': function (a) {
			var i = a.params.id,
				o = e(a.target).parents('li')
			o.hasClass('favor')
				? this.wrapModel(n).cancelFavor(i, function (a) {
						o.removeClass('favor')
				  })
				: this.wrapModel(n).addFavor(i, function (a) {
						o.addClass('favor')
				  })
		},
	})
})
