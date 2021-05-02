define('app/views/search/illustration/index', [
	'magix',
	'jquery',
	'app/models/common',
	'app/exts/helper',
], function (a, i, o) {
	var c = a('magix'),
		t = a('jquery'),
		e = (a('app/models/common'), a('app/exts/helper'))
	o.exports = c.View.extend({
		tmpl:
			'<div class="wrap"><div class="page-search-container illustration-detail"><ul class="block-icon-list clearfix block-svg-list">{{#for(icon in icons)}}<li class="J_icon_id_{{icon.id}} {{icon.favor ? \'favor\' : \'\'}}"><div class="icon-twrap"><img src="{{icon.file}}" alt=""></div><span class="icon-name" title="{{icon.name}}">{{icon.name}}</span><div class="icon-cover"><span data-login="true" mx-click="downloadIcon({id:{{icon.id}},index:{{__INDEX__}}})" data-spm-click="gostr=/alimama.30;locaid=dac7baec5" title="**COMMON_DOWN_ICON**" class="cover-item iconfont cover-item-line icon-xiazai"></span></div></li>{{/for}}</ul>{{#if(icons.length === 0 && !isCollection)}}<div class="block-no-results"><img src="//gw.alicdn.com/imgextra/i3/O1CN01DKaORe1dcIHH0eMRx_!!6000000003756-55-tps-164-142.svg" alt=""><div class="message">**COMMON_NO_RESULT**</div></div>{{/if}}</div></div>{{#if(count>= pageSize)}}<div class="block-pagination-wrap"><div data-itemsonpage="{{pageSize}}" class="wrap block-pagination mt40i" mx-view="app/exts/pagination/index" data-items="{{count}}" data-currentpage="{{page}}"></div></div>{{/if}} {{#if(isCollectionLess)}}<div class="bottom-choose-wrap"><div class="bottom-choose-text"><span class="iconfont icon-jingxuan"></span> \u7cbe\u9009\u56fe\u6807\u592a\u5c11\uff1f\u70b9\u51fb\u5207\u6362\u81f3\u201c\u5168\u90e8\u56fe\u6807\u201d</div><div class="bottom-choose-btn" mx-click="chooseAllIcons()">\u56fe\u6807\u5207\u6362 <span class="iconfont icon-qiehuan"></span></div></div>{{/if}}',
		ctor: function () {
			this.observe([
				'q',
				'sortType',
				'page',
				'fromCollection',
				'csrfmiddlewaretoken',
			])
		},
		render: function () {
			var o = this,
				t = o.param('q') || 'illustration',
				e = o.param('page') || 1,
				n = o.param('sortType') || 'updated_at',
				ct = document.getElementsByName('csrfmiddlewaretoken')[0].value,
				s =
					(o.param('fromCollection'),
					{
						q: t,
						sortType: n,
						page: e,
						pageSize: 40,
						csrfmiddlewaretoken: ct,
					})
			o.request().all(
				[
					{
						name: 'query_illustrations',
						params: s,
					},
				],
				function (a, i) {
					i = i.get('data')
					;(o.data = i),
						(o.data.q = t),
						(o.data.sortType = n),
						(o.data.page = e),
						(o.data.pageSize = 40),
						8e3 < parseInt(o.data.count) && (o.data.count = 8e3),
						(o.data.isCollection = 1 === s.fromCollection),
						(o.data.isCollectionLess =
							1 === s.fromCollection && o.data.count < 40),
						o.owner.parent().invoke('setCount', o.data.count),
						o.setView().then(function () {
							c.Vframe.get('magix_vf_car').invoke('domSelected')
						})
				}
			)
		},
		'chooseAllIcons<click>': function (a) {
			t(a.target).addClass('btn-rotate'),
				c.Router.to({
					fromCollection: '-1',
				})
		},
		'downloadIcon<click>': function (a) {
			a = a.params.id
			e.showDownloadDialog({
				iconId: a,
				isIllustration: !0,
			})
		},
	})
})
