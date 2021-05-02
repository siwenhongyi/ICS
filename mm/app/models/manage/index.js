define('app/models/manage/index', [
	'app/models/base',
	'jquery',
	'magix',
	'app/exts/helper',
	'app/libs/moment',
	'app/i18n/index',
], function (t, e, o) {
	var n = t('app/models/base'),
		i = t('jquery'),
		c = t('magix'),
		a = t('app/exts/helper'),
		l = t('app/libs/moment'),
		s = t('app/i18n/index'),
		n = n.extend({
			delProject: function (t, o) {
				this.fetchAll(
					[
						{
							name: 'delete_project',
							params: {
								pid: t,
							},
						},
					],
					function (t, e) {
						e = e.get('data')
						o && o(e)
					}
				)
			},
			restoreProject: function (t, o) {
				this.fetchAll(
					[
						{
							name: 'restore_project',
							params: {
								pid: t,
							},
						},
					],
					function (t, e) {
						e = e.get('data')
						o && o(e)
					}
				)
			},
			getProjectList: function (o) {
				this.fetchAll(
					[
						{
							name: 'project_lists',
						},
					],
					function (t, e) {
						e = e.get('data')
						i.each(e.delProjects, function (t, e) {
							e.lastTime = e.deleted_at.split('T')[0]
						}),
							o && o(e)
					}
				)
			},
			getDeletedProjectList: function (o) {
				this.fetchAll(
					[
						{
							name: 'deleted_project_lists',
						},
					],
					function (t, e) {
						e = e.get('data')
						i.each(e.lists, function (t, e) {
							e.deletedAt = l(e.deleted_at).format('YYYY-MM-DD HH:mm:ss')
						}),
							o && o(e)
					}
				)
			},
			getFavoritesList: function (o) {
				this.fetchAll(
					[
						{
							name: 'my_likes',
						},
					],
					function (t, e) {
						e = e.get('data')
						o && o(e)
					}
				)
			},
			getMyCollectionFavorite: function (t, o) {
				this.fetchAll(
					[
						{
							name: 'my_collection_favorite',
							params: {
								type: t,
							},
						},
					],
					function (t, e) {
						e = e.get('data')
						i.each(e.lists, function (t, e) {
							e.lastTime = e.updated_at.split('T')[0]
						}),
							o && o(e)
					}
				)
			},
			getUploadsList: function (t, o) {
				this.fetchAll(
					[
						{
							name: 'my_uploads',
							formParams: t,
						},
					],
					function (t, e) {
						t || ((e = e.get('data')), o && o(e))
					}
				)
			},
			getUploadSvgsList: function (t, o) {
				this.fetchAll(
					[
						{
							name: 'my_upload_svgs',
							formParams: t,
						},
					],
					function (t, e) {
						t || ((e = e.get('data')), o && o(e))
					}
				)
			},
			getMyCollections: function (t, o) {
				this.fetchAll(
					[
						{
							name: 'my_collections',
							params: t,
						},
					],
					function (t, e) {
						e = e.get('data')
						i.each(e.collections, function (t, e) {
							e.lastTime = e.updated_at.split('T')[0]
						}),
							o && o(e)
					}
				)
			},
			getMyJoinedSvgCollections: function (t, o) {
				this.fetchAll(
					[
						{
							name: 'my_joined_svgcollections',
							params: t,
						},
					],
					function (t, e) {
						e = e.get('data')
						i.each(e.collections, function (t, e) {
							e.lastTime = e.updated_at.split('T')[0]
						}),
							o && o(e)
					}
				)
			},
			getProjectDetail: function (t, n, a) {
				this.fetchAll(
					[
						{
							name: 'project_detail',
							skipTip: !0,
							params: {
								pid: t,
							},
						},
					],
					function (t, e) {
						var o
						t
							? a(t)
							: ((e = e.get('data')) || (n && n(e)),
							  e.font &&
									e.font.js_file &&
									/\/null\.js/.test(e.font.js_file) &&
									((e.font.hasNoSymbol = !0), (e.font.js_file = '')),
							  (o = c.config().user.id),
							  e.icons &&
									i.each(e.icons, function (t, e) {
										e.showUnicode =
											'&amp;#x' + parseInt(e.unicode).toString(16) + ';'
									}),
							  e.users &&
									i.each(e.users, function (t, e) {
										o === e.id && (e.isSelf = !0)
									}),
							  e.creator && o && o === e.creator.id
									? (e.isCreator = !0)
									: (e.isCreator = !1),
							  1 === e.role_in_project ? (e.isAdmin = !0) : (e.isAdmin = !1),
							  (e.project.lastTime = e.project.updated_at.split('T')[0]),
							  n && n(e))
					}
				)
			},
			cancelProjectDeletedIcons: function (t, o) {
				this.fetchAll(
					[
						{
							name: 'cancel_project_deleted_icons',
							params: t,
						},
					],
					function (t, e) {
						t && t.code && 403 === t.code
							? a.showGlobalTip(t.message)
							: t && t.code && 500 === t.code
							? a.showGlobalTip(
									s.MANAGE_PROJECTS_ICON_EXCEED_LIMIT.replace(
										'%s%',
										t.data && t.data.limit
									)
							  )
							: ((e = e.get('data')), o && o(e))
					}
				)
			},
			getProjectDeletedIcons: function (t, o) {
				this.fetchAll(
					[
						{
							name: 'project_deleted_icons',
							params: t,
						},
					],
					function (t, e) {
						e = e.get('data')
						e.icons &&
							i.each(e.icons, function (t, e) {
								e.showUnicode =
									'&amp;#x' + parseInt(e.unicode).toString(16) + ';'
							}),
							o && o(e)
					}
				)
			},
			addIconsToProject: function (t, o) {
				var e = {}
				t.hasShowAdd ? (e.projectName = t.projectName) : (e.pid = t.projectId)
				t = i.map(t.icons, function (t) {
					return t.id + '|' + t.projectId
				})
				;(e.ids = t.join(',')),
					this.fetchAll(
						[
							{
								name: 'add_icons',
								params: e,
							},
						],
						function (t, e) {
							t && t.code && 403 === t.code
								? a.showGlobalTip(t.message)
								: t && t.code && 500 === t.code
								? a.showGlobalTip(
										s.MANAGE_PROJECTS_ICON_EXCEED_LIMIT.replace(
											'%s%',
											t.data && t.data.limit
										)
								  )
								: ((e = e.get('data')), o && o(e))
						}
					)
			},
			updateCollection: function (t, o) {
				var e = 'collection_create'
				t.id &&
					(e =
						2 <= t.role_in_collection
							? 'collection_update_icons'
							: 'collection_update'),
					this.save(
						[
							{
								name: e,
								formParams: t,
							},
						],
						function (t, e) {
							t || o(e.get('data'))
						}
					)
			},
			addCollectionPoster: function (t, o) {
				this.save(
					[
						{
							name: 'collection_add_poster',
							formParams: t,
						},
					],
					function (t, e) {
						t || o(e.get('data'))
					}
				)
			},
			delCollectionPoster: function (t, o) {
				this.save(
					[
						{
							name: 'collection_del_poster',
							formParams: t,
						},
					],
					function (t, e) {
						t || o(e.get('data'))
					}
				)
			},
			getCollection: function (t, o) {
				this.fetchAll(
					[
						{
							name: 'collection_get',
							urlParams: {
								id: t,
							},
						},
					],
					function (t, e) {
						t || o(e.get('data'))
					}
				)
			},
			getSvgCollection: function (t, o) {
				this.fetchAll(
					[
						{
							name: 'collection_getSvgCollectionById',
							urlParams: {
								id: t,
							},
						},
					],
					function (t, e) {
						t || o(e.get('data'))
					}
				)
			},
			delCollection: function (t, o) {
				this.save(
					[
						{
							name: 'collection_del',
							urlParams: {
								id: t,
							},
						},
					],
					function (t, e) {
						t || o(e.get('data'))
					}
				)
			},
		})
	o.exports = n
})
