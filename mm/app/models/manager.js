define('app/models/manager', ['app/models/service'], function (e, o, n) {
	e = e('app/models/service')
	e.add([
		{
			name: 'default_tags',
			url: '/t/icons_default_tags',
			method: 'GET',
		},
	]),
		e.add([
			{
				name: 'list',
				url: '/api/home/list.json',
			},
		]),
		e.add([
			{
				name: 'collection_list',
				url: '/api/collections.json',
			},
			{
				name: 'collection_detail',
				url: '/api/collection/detail.json',
			},
			{
				name: 'collection_password',
				url: '/api/collection/passwordCheck.json',
				method: 'POST',
			},
			{
				name: 'collection_like',
				url: '/api/collection/like.json',
				method: 'POST',
			},
			{
				name: 'add_collection_favorite',
				url: '/api/user/addCollectionFavorite.json',
				method: 'POST',
			},
			{
				name: 'del_collection_favorite',
				url: '/api/user/delCollectionFavorite.json',
				method: 'POST',
			},
			{
				name: 'collection_create',
				url: '/api/collection/create.json',
				method: 'POST',
			},
			{
				name: 'collection_get',
				url: '/api/collection/get.json',
				method: 'GET',
			},
			{
				name: 'collection_update',
				url: '/api/collection/update.json',
				method: 'POST',
			},
			{
				name: 'collection_add_poster',
				url: '/api/collection/addPoster.json',
				method: 'POST',
			},
			{
				name: 'collection_del_poster',
				url: '/api/collection/delPoster.json',
				method: 'POST',
			},
			{
				name: 'collection_update_icons',
				url: '/api/collection/update_icons.json',
				method: 'POST',
			},
			{
				name: 'collection_del',
				url: '/api/collection/del.json',
				method: 'POST',
			},
			{
				name: 'collection_getSvgCollectionById',
				url: '/api/collection/getSvgCollectionById.json',
				method: 'GET',
			},
			{
				name: 'transfer_svgCollection',
				url: '/api/collection/transfer_svgCollection.json',
				method: 'POST',
			},
			{
				name: 'my_joined_svgcollections',
				url: '/api/user/my_joined_collections.json',
			},
		]),
		e.add([
			{
				name: 'icon_info',
				url: '/api/icon/iconInfo.json',
				method: 'get',
			},
			{
				name: 'svg_info',
				url: '/api/svg/svgInfo.json',
				method: 'get',
			},
			{
				name: 'user_info',
				url: '/api/user/detail.json',
				method: 'get',
			},
			{
				name: 'user_collections',
				url: '/api/user/collections.json',
				method: 'get',
			},
			{
				name: 'user_icons',
				url: '/api/user/icons.json',
				method: 'get',
			},
			{
				name: 'user_likes',
				url: '/api/user/likes.json',
				method: 'get',
			},
			{
				name: 'user_update',
				url: '/api/user/update.json',
				method: 'POST',
			},
			{
				name: 'add_favor',
				url: '/api/icon/addFavor.json',
				method: 'POST',
			},
			{
				name: 'remove_favor',
				url: '/api/icon/removeFavor.json',
				method: 'POST',
			},
			{
				name: 'add_icons',
				url: '/api/project/addIcons.json',
				method: 'POST',
				skipTip: !0,
			},
			{
				name: 'query_users',
				url: '/api/user/search.json',
				method: 'POST',
			},
			{
				name: 'query_icons',
				url: '/api/icon/search.json',
				method: 'POST',
			},
			{
				name: 'query_illustrations',
				url: '/api/illustration/search.json',
				method: 'POST',
			},
			{
				name: 'index_config',
				url: '/api/common/indexConfig.json',
				method: 'get',
			},
			{
				name: 'get_suggest',
				url: '/api/common/suggest.json',
			},
			{
				name: 'update_user_status',
				url: '/api/common/updateUserStatus.json',
				method: 'post',
			},
		]),
		e.add([
			{
				name: 'my_likes',
				url: '/api/user/myfavorites.json',
			},
			{
				name: 'my_collection_favorite',
				url: '/api/user/myCollectionFavorite.json',
			},
			{
				name: 'my_uploads',
				url: '/api/user/myuploads.json',
			},
			{
				name: 'my_upload_svgs',
				url: '/api/user/myUploadSvgs.json',
			},
			{
				name: 'project_lists',
				url: '/api/user/myprojects.json',
			},
			{
				name: 'deleted_project_lists',
				url: '/api/user/myDeletedProjects.json',
			},
			{
				name: 'my_collections',
				url: '/api/user/mycollections.json',
			},
			{
				name: 'my_collections_simple',
				url: '/api/user/mycollections_simple.json',
			},
			{
				name: 'my_collections_',
				url: '/api/user/CollectionFavorite.json',
			},
			{
				name: 'project_detail',
				url: '/api/project/detail.json',
				method: 'GET',
			},
			{
				name: 'project_deleted_icons',
				url: '/api/project/getProjectDeletedIcons.json',
				method: 'GET',
			},
			{
				name: 'cancel_project_deleted_icons',
				url: '/api/icon/restoreProjectDeletedIcons.json',
				method: 'POST',
				skipTip: !0,
			},
			{
				name: 'delete_project',
				url: '/api/project/delete.json',
				method: 'POST',
			},
			{
				name: 'restore_project',
				url: '/api/project/restore.json',
				method: 'POST',
			},
			{
				name: 'exit_project',
				url: '/api/project/exitProject.json',
				method: 'POST',
			},
			{
				name: 'update_project',
				url: '/api/project/update.json',
				method: 'POST',
			},
			{
				name: 'set_guid_project',
				url: '/api/project/setGuid.json',
				method: 'POST',
			},
			{
				name: 'create_project',
				url: '/api/project/create.json',
				method: 'POST',
			},
			{
				name: 'transfer_project',
				url: '/api/project/transfer.json',
				method: 'POST',
			},
			{
				name: 'add_users',
				url: '/api/project/addUsers.json',
				method: 'POST',
			},
			{
				name: 'del_users',
				url: '/api/project/delUsers.json',
				method: 'POST',
			},
			{
				name: 'change_users_role',
				url: '/api/project/changeUsersRole.json',
				method: 'POST',
			},
			{
				name: 'add_collection_users',
				url: '/api/collection/addUsers.json',
				method: 'POST',
			},
			{
				name: 'del_collection_users',
				url: '/api/collection/delUsers.json',
				method: 'POST',
			},
			{
				name: 'change_collection_users_role',
				url: '/api/collection/changeUsersRole.json',
				method: 'POST',
			},
			{
				name: 'exit_collection',
				url: '/api/collection/exitCollection.json',
				method: 'POST',
			},
			{
				name: 'del_icon_repositorie',
				url: '/api/icon/deleteIcon.json',
				method: 'POST',
			},
			{
				name: 'del_svg',
				url: '/api/svg/deleteSvg.json',
				method: 'POST',
			},
			{
				name: 'del_icon_project',
				url: '/api/icon/deleteProjectIcon.json',
				method: 'POST',
			},
			{
				name: 'freeze_icons',
				url: '/api/icon/lock.json',
				method: 'POST',
			},
			{
				name: 'remove_icons_colors',
				url: '/api/icon/removeProjectIconColor.json',
				method: 'POST',
			},
			{
				name: 'copy_icon_project',
				url: '/api/icon/copyProjectIcon.json',
				method: 'POST',
			},
			{
				name: 'copy_icon_upload',
				url: '/api/icon/copyRepositorieIcon.json',
				method: 'POST',
			},
			{
				name: 'update_icon_upload',
				url: '/api/icon/updateIcon.json',
				method: 'POST',
			},
			{
				name: 'update_icon_project',
				url: '/api/icon/updateProjectIcon.json',
				method: 'POST',
			},
			{
				name: 'unfreeze_icons',
				url: '/api/icon/unlock.json',
				method: 'POST',
			},
			{
				name: 'refresh_code',
				url: '/api/project/cdn.json',
				method: 'POST',
			},
		]),
		e.add([
			{
				name: 'update_uploader_icons',
				url: '/api/updateUploadIcons.json',
				method: 'POST',
			},
			{
				name: 'update_uploader_svgs',
				url: '/api/updateUploadSvgs.json',
				method: 'POST',
			},
			{
				name: 'get_uploadings',
				url: '/api/getUploadings.json',
				method: 'POST',
			},
			{
				name: 'get_uploading_svgs',
				url: '/api/getUploadingSvgs.json',
				method: 'POST',
			},
			{
				name: 'delete_uploading',
				url: '/api/deleteUploadingIcon.json',
				method: 'POST',
			},
			{
				name: 'generate_svg',
				url: '/api/getPrototypeSvg.json',
				method: 'POST',
			},
			{
				name: 'icon_private',
				url: '/api/icon/privateIcon.json',
				method: 'POST',
			},
			{
				name: 'update_icon_ai_tag',
				url: '/api/updateIconAiTag.json',
				method: 'POST',
			},
		]),
		e.add([
			{
				name: 'comment_list',
				url: '/api/comments/list.json',
				method: 'GET',
			},
			{
				name: 'comment_add',
				url: '/api/comments/create.json',
				method: 'POST',
			},
			{
				name: 'comment_remove',
				url: '/api/comments/remove.json',
				method: 'POST',
			},
			{
				name: 'like_add',
				url: '/api/comments/like.json',
				method: 'post',
			},
		]),
		(n.exports = e)
})
