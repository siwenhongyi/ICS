define('app/views/manage/myicons', ['magix'], function (i, a, c) {
	var e = i('magix')
	c.exports = e.View.extend({
		tmpl:
			'<div class="page-manage-left"><div class="block-left-nav"><div class="nav-container"><div class="nav-title" mx-click="changeiType(\'uploads\')" data-spm-click="gostr=/alimama.30;locaid=dbfbcb3cd" t-class:current="iType === \'uploads\'"><em class="iconfont" style="font-size:18px">&#xe640;</em> **MANAGE_ICONS_UPLOADS**</div></div><div class="nav-container"><div class="nav-title" mx-click="changeiType(\'upload_svgs\')" data-spm-click="gostr=/alimama.30;locaid=d9268c965" t-class:current="iType === \'upload_svgs\'"><em class="iconfont">&#xe896;</em> **MANAGE_ILLUSTRATION_UPLOADS**</div></div><div class="nav-container"><div class="nav-title" mx-click="changeiType(\'collections\')" data-spm-click="gostr=/alimama.30;locaid=d9268c521" t-class:current="iType === \'collections\'"><em class="iconfont">&#xe617;</em> **MANAGE_ICONS_COLLECTIONS**</div></div><div class="nav-container"><div class="nav-title" mx-click="changeiType(\'illustrations\')" data-spm-click="gostr=/alimama.30;locaid=d9268c522" t-class:current="iType === \'illustrations\'"><em class="iconfont">&#xe897;</em> **MANAGE_ILLUSTRATION_COLLECTIONS**</div></div><div class="nav-container"><div class="nav-title" mx-click="changeiType(\'histories\')" data-spm-click="gostr=/alimama.30;locaid=d8309b9e2" t-class:current="iType === \'histories\'"><em class="iconfont">&#xe644;</em> **MANAGE_ICONS_DOWNLOADS**</div></div></div></div><div id="J_manage_icons_view" class="page-manage-right page-manage-icons" mx-view="{{iconsView}}"><div class="spinner"><div class="three-bounce"><div class="one"></div><div class="two"></div><div class="three"></div></div></div></div>',
		ctor: function () {
			this.observe(['icontype'])
		},
		render: function () {
			var i = this,
				a = i.param('icontype') || 'uploads'
			;(i.data = { iType: a, iconsView: 'app/views/manage/myicons_' + a }),
				i.setView().then(function () {
					e.Vframe.get('magix_vf_car').invoke('domSelected')
				})
		},
		'changeiType<click>': function (i) {
			this.to({
				icontype: i.params,
				keyword: '',
				page: 1,
				icon_page_type: 'all',
			})
		},
	})
})
