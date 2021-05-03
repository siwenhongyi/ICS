define('app/views/common/legal', [
	'magix',
	'app/exts/helper',
	'app/models/common/index',
], function (e, t, n) {
	var a = e('magix'),
		o = e('app/exts/helper'),
		i = e('app/models/common/index')
	n.exports = a.View.extend({
		tmpl:
			'<div class="legal-content"><iframe height="430" width="100%" src="//mos.m.taobao.com/iconfont-legal-agreement" frameborder="0"></iframe></div>{{#unless(noButton)}}<div class="legal-ok"><div class="btn btn-large btn-red" mx-click="enter()" data-spm-click="gostr=/alimama.30;locaid=d7444bc90">\u6211\u5df2\u9605\u8bfb\u5e76\u540c\u610f iconfont \u7684\u6cd5\u5f8b\u58f0\u660e</div></div>{{/unless}}',
		ctor: function (e) {
			this.data = { noButton: e && e.noButton }
		},
		render: function () {
			this.setView()
		},
		'enter<click>': function () {
			var e = a.config()
			this.wrapModel(i).updateUserStatus({ status: 1 }, function () {
				;(e.status = 1), o.hideDialog()
			})
		},
	})
})
