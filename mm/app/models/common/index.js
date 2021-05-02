define('app/models/common/index', ['app/models/base'], function (t, a, e) {
	t = t('app/models/base').extend({
		addFavor: function (t, e) {
			this.fetchAll(
				[
					{
						name: 'add_favor',
						params: {
							id: t,
						},
					},
				],
				function (t, a) {
					a = a.get('data')
					e && e(a)
				}
			)
		},
		cancelFavor: function (t, e) {
			this.fetchAll(
				[
					{
						name: 'remove_favor',
						params: {
							id: t,
						},
					},
				],
				function (t, a) {
					a = a.get('data')
					e && e(a)
				}
			)
		},
		delIcon: function (t, e) {
			t.type = t.type || 'repositorie'
			var a = 'del_icon_' + t.type
			this.fetchAll(
				[
					{
						name: a,
						params: t,
					},
				],
				function (t, a) {
					a = a.get('data')
					e && e(a)
				}
			)
		},
		delSvg: function (t, e) {
			this.fetchAll(
				[
					{
						name: 'del_svg',
						params: t,
					},
				],
				function (t, a) {
					a = a.get('data')
					e && e(a)
				}
			)
		},
		getSuggest: function (t, e) {
			this.fetchAll(
				[
					{
						name: 'get_suggest',
						params: t,
					},
				],
				function (t, a) {
					a = a.get('data')
					e && e(a)
				}
			)
		},
		updateUserStatus: function (t, e) {
			this.save(
				[
					{
						name: 'update_user_status',
						formParams: t,
					},
				],
				function (t, a) {
					t || e(a.get('data'))
				}
			)
		},
		privateIcon: function (t, e) {
			this.save(
				[
					{
						name: 'icon_private',
						urlParams: {
							ids: t.ids,
							hide: t.hide,
						},
					},
				],
				function (t, a) {
					t || e(a.get('data'))
				}
			)
		},
	})
	e.exports = t
})
