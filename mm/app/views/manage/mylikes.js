define('app/views/manage/mylikes', ['magix'], function (i, e, s) {
	var a = i('magix')
	s.exports = a.View.extend({
		tmpl:
			'<div class="page-manage-left"><div class="block-left-nav"><div class="nav-container"><div class="nav-title" mx-click="changeiType(\'icons\')" t-class:current="iType === \'icons\'"><em class="iconfont" style="font-size:18px">&#xe63a;</em> **MANAGE_ICONS_FAVORITE**</div></div><div class="nav-container"><div class="nav-title" mx-click="changeiType(\'library\')" t-class:current="subType === \'library\'"><em class="iconfont" style="font-size:18px">&#xe814;</em> **MANAGE_ICONS_COLLECTIONS_FAVORITE**</div></div><div class="nav-container"><div class="nav-title" mx-click="changeiType(\'illustration\')" t-class:current="subType === \'illustration\'"><em class="iconfont" style="font-size:18px">&#xe897;</em> **MANAGE_ILLUSTRATION_COLLECTIONS_FAVORITE**</div></div></div></div><div id="J_manage_likes_view" class="page-manage-right page-manage-likes" mx-view="{{iconsView}}" mx-options="{subType:\'{{subType}}\'}"><div class="spinner"><div class="three-bounce"><div class="one"></div><div class="two"></div><div class="three"></div></div></div></div>',
		ctor: function () {
			this.observe(['icontype', 'keyword'])
		},
		render: function () {
			var i = this,
				e = i.param('icontype'),
				s = ('illustration' === e ? 'library' : e) || 'icons'
			;(i.data = {
				iType: s,
				iconsView: 'app/views/manage/mylikes_' + s,
				subType: 'icons' === e ? null : e,
			}),
				i.setView().then(function () {
					a.Vframe.get('magix_vf_car').invoke('domSelected')
				})
		},
		'changeiType<click>': function (i) {
			this.to({ icontype: i.params, keyword: '' })
		},
	})
})
