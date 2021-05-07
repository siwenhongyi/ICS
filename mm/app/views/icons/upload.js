define('app/views/icons/upload', [
	'magix',
	'jquery',
	'app/models/icons/index',
	'app/exts/helper',
	'app/i18n/index',
	'app/exts/aitag/index',
	'app/exts/fileuploader/jquery.fileupload',
], function (a, e, t) {
	var l = a('magix'),
		s = a('jquery')
	a('app/exts/fileuploader/jquery.fileupload')
	var r = a('app/models/icons/index'),
		i = l.Router,
		p = a('app/exts/helper'),
		h = a('app/i18n/index'),
		f = a('app/exts/aitag/index'),
		v = [
			{ key: 'fill', name: '\u586b\u5145', ename: 'filling', threshold: 0.7 },
			{ key: 'line', name: '\u7ebf\u6027', ename: 'linear', threshold: 0.7 },
			{ key: 'simple', name: '\u7b80\u7ea6', ename: 'simple', threshold: 0.8 },
			{
				key: 'complex',
				name: '\u7cbe\u7f8e',
				ename: 'delicate',
				threshold: 0.8,
			},
			{ key: 'hand', name: '\u624b\u7ed8', ename: 'freehand', threshold: 0.8 },
			{ key: 'flat', name: '\u6241\u5e73', ename: 'flat', threshold: 0.8 },
		]
	t.exports = l.View.extend({
		tmpl:
			'<div class="page-icons-upload-container"><div t-if="icons.length == 0" class="upload-red"><img width="40" src="//img.alicdn.com/tfs/TB16M8EPFY7gK0jSZKzXXaikpXa-111-105.svg"> <span>**UPLOAD_OR_4**<a href="/help/article_detail?article_id=5">**UPLOAD_OR_2**</a>**UPLOAD_OR_3**</span></div><div t-if="icons.length == 0" class="no-icons"><div class="upload-box"><div class="center-div uploader_drop" id="J_uploader_drop_icon"><div class="svg"><img src="//gw.alicdn.com/tfs/TB1dUbZOFT7gK0jSZFpXXaTkpXa-232-179.svg" alt=""></div><div class="text">**UPLOAD_DROP_ICON**<div class="tips">\u8bf7\u4fdd\u8bc1\u56fe\u6807\u7684\u539f\u521b\u6027</div><span class="uploader-click">**DRAW_UPLOAD** <input id="J_uploader_icon_click" type="file" name="icons[]" data-url="/api/uploadIcons.json?ctoken={{{ctoken}}}&_csrf={{{ctoken}}}" multiple="multiple"></span></div></div><div class="center-div uploader_drop" id="J_uploader_drop_illustration"><div class="svg"><img src="//gw.alicdn.com/tfs/TB1sUr_ORr0gK0jSZFnXXbRRXXa-218-166.svg" alt=""></div><div class="text">**UPLOAD_DROP_ILLUSTRATION**<div class="tips">\u8bf7\u4fdd\u8bc1\u63d2\u753b\u7684\u539f\u521b\u6027</div><span class="uploader-click">**DRAW_UPLOAD_ILLUSTRATION** <input data-type="illustration" class="J_uploader_illustration_click" type="file" name="icons[]" data-url="/api/uploadIllustrations.json?ctoken={{{ctoken}}}&_csrf={{{ctoken}}}" multiple="multiple"></span></div></div></div><div class="help-info"><i class="iconfont">&#xe61c;</i> <span>**UPLOAD_HOW_AI** <a href="/help/detail?helptype=draw#step" data-spm-click="gostr=/alimama.30;locaid=d1c73b2de">**UPLOAD_HELP**</a></span></div><div class="careful-info"><h3>**UPLOAD_MAKE_HELP** <img width="22" src="//gw.alicdn.com/tfs/TB19GydOUY1gK0jSZFCXXcwqXXa-192-187.svg" alt="AI"> <a href="http://bambooshadow.oss-cn-hangzhou.aliyuncs.com/%E5%9B%BE%E6%A0%87%E5%88%B6%E4%BD%9C%E6%A8%A1%E7%89%88.ai">**UPLOAD_DOWN_AI**</a></h3><div class="big-svg"></div></div></div><div class="" t-if="pageType !== \'illustration\'"><div class="have-icons" t-if="icons.length > 0"><div class="uploader-text" id="J_uploader_drop"><span class="detail"><i class="iconfont mr5">&#xe640;</i>**UPLOAD_DROP_ICON** </span><span class="uploader-click ml5">**UPLOAD_CLICK** <input id="J_uploader_icon_click" type="file" name="icons[]" data-url="/api/uploadIcons.json?ctoken={{{ctoken}}}&_csrf={{{ctoken}}}" multiple="multiple"></span></div><div class="uploader-body"><div class="uploader-panel"><div class="uploader-left"><ul>{{#for(icon in icons)}}<li t-class:active="__INDEX__ == currentIndex" t-class:error="icon.error" t-class:progress="icon.progress" mx-click="clickIcon({index:{{__INDEX__}}})" data-spm-click="gostr=/alimama.30;locaid=d19b5bdd5"><div id="J_upload_show_icon_{{icon.id}}" class="icon-container" t-class:tbackground="icon.show_svg | tbackground">{{{icon.show_svg}}}</div><div class="error-icon"><i class="iconfont">&#xe601;</i></div><div class="progress-icon"><span class="line"></span> <span class="line"></span> <span class="line"></span></div><div class="delete-icon" mx-click="deleteIcon({id:{{icon.id}},index:{{__INDEX__}}})" data-spm-click="gostr=/alimama.30;locaid=df5302025"><i class="iconfont">&#xe643;</i></div></li>{{/for}}</ul></div><div class="uploader-right"><div class="uploader-info" t-class:hidden="icons.length === 0"><div class="form-line"><label>**UPLOAD_ICON_NAME**</label><input class="input" type="text" mx-focusout="updateValue({type:\'name\',index:{{currentIndex}}})" value="{{icons[currentIndex].name}}" placeholder="**UPLOAD_ICON_NAME_PLACEHOLDER**"></div><div class="form-line"><label>**UPLOAD_ICON_TAGS**</label><input class="input" type="text" mx-focusout="updateValue({type:\'slug\',index:{{currentIndex}}})" value="{{icons[currentIndex].slug}}" placeholder="**UPLOAD_ICON_TAGS_PLACEHOLDER**"></div><ul class="tag-group">{{#for(tag in tags)}}<li t-class:active="tag.name | tagTrue" mx-click="toggleTag()" data-spm-click="gostr=/alimama.30;locaid=d45489eb2">{{tag.name}}</li>{{/for}}</ul></div></div><div class="uploader-bottom"><div class="advance-btn" mx-click="toggleIShowAdvance()"><div t-class:open="isShowAdvance==true"><span class="text"><i class="iconfont icon-zhankai"></i> <i class="iconfont icon-shouqi"></i>**UPLOAD_ADD_TO_FULL**</span></div></div><div t-if="isShowAdvance" class="advance-block" t-class:e-advance-block="!isZh"><div class="form-line" style="margin-bottom:25px"><label class="line-label">**UPLOAD_ADD_TO**</label><label class="raido-label mr15"><input class="mr5" type="radio" name="advanceType" value="default" t-model="advanceType">**UPLOAD_ADD_DEFAULT**</label><label class="raido-label mr15"><input class="mr5" type="radio" name="advanceType" value="collection" t-model="advanceType">**UPLOAD_SETS** <i class="iconfont icon-jieshi ml5" mx-view="app/exts/popover/index" mx-options="{content:\'**UPLOAD_SETS_DETAIL**\',placement:\'bottom\'}"></i></label><label class="raido-label"><input class="mr5" type="radio" name="advanceType" value="project" t-model="advanceType">**UPLOAD_PROJECT** <i class="iconfont icon-jieshi ml5" mx-view="app/exts/popover/index" mx-options="{content:\'**UPLOAD_PROJECT_DETAIL**\',placement:\'bottom\'}"></i></label></div><div t-if="advanceType==\'collection\'"><div class="form-line"><label class="line-label">**UPLOAD_CHOOSE**</label><ul class="type-select clearfix"><li t-class:current="collectionChooseType == \'choose\'" mx-click="changeChooseType({tag:\'collectionChooseType\',type:\'choose\'})">**UPLOAD_CHOOSE_SETS**</li><li t-class:current="collectionChooseType == \'create\'" mx-click="changeChooseType({tag:\'collectionChooseType\',type:\'create\'})">**UPLOAD_NEW_SETS**</li><li class="cover cover-{{collectionChooseType}}"></li></ul></div><div t-if="collectionChooseType==\'choose\'"><div class="form-line"><label class="line-label">**UPLOAD_A_NAME**</label><div style="width:180px" mx-change="setCollectionId()" mx-view="app/exts/dropdown/index" mx-options="{selected:\'{{collectionId}}\',list:\'{{collectionList}}\'}"></div></div></div><div t-if="collectionChooseType==\'create\'"><div class="form-line"><label class="line-label">**UPLOAD_A_NAME**</label><input type="text" class="input" t-model="collectionName"></div>{{#if(role === 3)}}<div class="form-line"><label class="line-label">\u56fe\u6807\u5e93URL</label><input class="input" t-model="url" type="text" placeholder="\u8bf7\u586b\u5199URL"></div>{{/if}}<div class="form-line"><label class="line-label">**UPLOAD_A_TYPE**</label><ul class="type-select clearfix"><li t-class:current="hasSecret == 0" mx-click="setHasSecret({val:0})">**UPLOAD_A_PUBLIC**</li><li t-class:current="hasSecret == 1" mx-click="setHasSecret({val:1})">**UPLOAD_A_PRIVATE**</li><li class="cover cover-{{hasSecret}}"></li></ul></div><div class="form-line" t-if="hasSecret==1"><label class="line-label">**UPLOAD_A_PASSWORD**</label><input type="text" class="input" t-model="secret"></div></div></div><div t-if="advanceType==\'project\'"><div class="form-line"><label class="line-label">**UPLOAD_CHOOSE**</label><ul class="type-select clearfix"><li t-class:current="projectChooseType == \'choose\'" mx-click="changeChooseType({tag:\'projectChooseType\',type:\'choose\'})">**UPLOAD_CHOOSE_PROJECT**</li><li t-class:current="projectChooseType == \'create\'" mx-click="changeChooseType({tag:\'projectChooseType\',type:\'create\'})">**UPLOAD_NEW_PROJECT**</li><li class="cover cover-{{projectChooseType}}"></li></ul></div><div t-if="projectChooseType==\'choose\'"><div class="form-line"><label class="line-label">**UPLOAD_A_NAME**</label><div mx-change="setProjectId()" style="width:180px" mx-view="app/exts/dropdown/index" mx-options="{selected:\'{{projectId}}\',list:\'{{projectList}}\'}"></div></div></div><div t-if="projectChooseType==\'create\'"><div class="form-line"><label class="line-label">**UPLOAD_A_NAME**</label><input type="text" class="input" t-model="projectName"></div></div></div></div></div></div></div><div class="btn-uploader-group"><div mx-click="submitColorUploads()" data-spm-click="gostr=/alimama.30;locaid=d2cabce7e" class="btn btn-red">**UPLOAD_SUBMIT_COLOR**</div></div></div></div><div class="" t-if="pageType === \'illustration\'"><div class="have-icons" t-if="icons.length > 0"><div class="uploader-text" id="J_uploader_drop_illustration"><span class="detail"><i class="iconfont mr5">&#xe640;</i>**UPLOAD_DROP_ILLUSTRATION** </span><span class="uploader-click ml5">**UPLOAD_CLICK** <input data-type="illustration" class="J_uploader_illustration_click" type="file" name="icons[]" data-url="/api/uploadIllustrations.json?ctoken={{{ctoken}}}&_csrf={{{ctoken}}}" multiple="multiple"></span></div><div class="block-illustration" t-if="icons.length > 0 && pageType == \'illustration\'"><div class="uploader-body"><div class="uploader-panel"><div class="uploader-left"><ul class="uploader-svg-list">{{#for(icon in icons)}}<li t-class:active="__INDEX__ == currentIndex" t-class:error="icon.error" t-class:progress="icon.progress" t-class:warning="icon.message" mx-click="clickIcon({index:{{__INDEX__}}})" data-spm-click="gostr=/alimama.30;locaid=d19b5bdd5">{{#if(icon.show_svg)}}<div id="J_upload_show_icon_{{icon.id}}" class="icon-container" t-class:tbackground="icon.show_svg | tbackground">{{{icon.show_svg}}}</div>{{/if}} {{#if(icon.file)}}<div id="J_upload_show_icon_{{icon.id}}" class="icon-container" t-class:tbackground="icon.file | tbackground"><img src="{{icon.file}}" alt=""></div>{{/if}}<div class="error-icon"><i class="iconfont">&#xe601;</i></div><div class="progress-icon"><span class="line"></span> <span class="line"></span> <span class="line"></span></div><div class="warning" t-if="icon.message">{{icon.message}}</div><div class="delete-icon" mx-click="deleteIcon({id:{{icon.id}},type: \'illustration\', index:{{__INDEX__}}})" data-spm-click="gostr=/alimama.30;locaid=df5302025"><i class="iconfont">&#xe643;</i></div></li>{{/for}}</ul></div><div class="uploader-right"><div class="uploader-info"><div class="form-line"><label>**UPLOAD_ICON_NAME**</label><input class="input" type="text" mx-focusout="updateValue({type:\'name\',index:{{currentIndex}}})" value="{{icons[currentIndex].name}}" placeholder="\u8bf7\u8f93\u5165\u63d2\u753b\u540d\u79f0"></div><div class="advance-block" t-class:e-advance-block="!isZh"><div class="form-line"><label class="line-label">**UPLOAD_ADD_TO**</label><label class="raido-label mr15" mx-click="changeShowAdvance()"><input class="mr5" type="radio" name="advanceType" value="upload_svgs" t-model="advanceType">**UPLOAD_ADD_DEFAULT**</label><label class="raido-label mr15" mx-click="changeShowAdvance()"><input class="mr5" type="radio" name="advanceType" value="collection" t-model="advanceType">**USER_DETAIL_ILLUSTRATION**</label></div><div t-if="advanceType==\'collection\'"><div class="form-line"><label class="line-label">**UPLOAD_CHOOSE**</label><ul class="type-select clearfix"><li t-class:current="collectionChooseType == \'choose\'" mx-click="changeChooseType({tag:\'collectionChooseType\',type:\'choose\'})">**COLLECTIONS_ILLUSTRATION_UPLOAD_EXISTING**</li><li t-class:current="collectionChooseType == \'create\'" mx-click="changeChooseType({tag:\'collectionChooseType\',type:\'create\'})">**COLLECTIONS_ILLUSTRATION_UPLOAD_NEW**</li><li class="cover cover-{{collectionChooseType}}"></li></ul></div><div t-if="collectionChooseType==\'choose\'"><div class="form-line"><label class="line-label">**UPLOAD_A_NAME**</label><div style="width:180px" mx-change="setCollectionId()" mx-view="app/exts/dropdown/index" mx-options="{selected:\'{{collectionId}}\',list:\'{{collectionList}}\'}"></div></div></div><div t-if="collectionChooseType==\'create\'"><div class="form-line"><label class="line-label">**UPLOAD_A_NAME**</label><input type="text" class="input" t-model="collectionName" placeholder="**MANAGE_COLLECTION_HANDLE_NAME_PLACE**"></div><div class="form-line"><label class="line-label">**UPLOAD_A_TYPE**</label><ul class="type-select clearfix"><li t-class:current="hasSecret == 0" mx-click="setHasSecret({val:0})"><span class="iconfont icon-gongkai"></span>**UPLOAD_A_PUBLIC**</li><li t-class:current="hasSecret == 2" mx-click="setHasSecret({val:2})"><span class="iconfont icon-yincang"></span>**UPLOAD_A_PRIVATE**</li><li class="cover cover-{{hasSecret}}"></li></ul></div></div></div></div></div></div></div></div><div class="btn-uploader-group"><div mx-click="submitSvgUploads()" data-spm-click="gostr=/alimama.30;locaid=d2cabce7e" class="btn btn-red">\u63d0\u4ea4</div></div></div></div></div></div>',
		tmplSvg:
			'<svg xmlns="http://www.w3.org/2000/svg" width="960" height="560" viewBox="0 0 960 560"><path fill="#0D0931" d="M58.941 72.499v1.72a31.385 31.385 0 0 1 8.286 6.195c5.775 6.053 8.847 13.972 8.65 22.294-.278 11.696-7.135 21.861-16.935 26.984v1.695c10.652-5.251 18.174-16.101 18.472-28.641.313-13.221-7.299-24.798-18.473-30.247zM158.51 74.198a31.385 31.385 0 0 1 8.326 6.214c4.967 5.209 7.921 11.799 8.527 18.838h1.552c-.969-11.761-8.207-21.813-18.403-26.771v1.719h-.002zm16.972 28.547c-.292 11.694-7.164 21.853-16.972 26.964v1.695c10.673-5.244 18.215-16.103 18.512-28.66h-1.54z"/><text transform="translate(232.39 85.865)" fill="#333" font-family="\'MicrosoftYaHei\'" font-size="14">\u95ed\u5408</text><text transform="translate(232.39 111.075)" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">\u56fe\u5f62\u9700\u8981\u5c01\u95ed\uff0c\u4e0d\u80fd\u6709\u51fa\u73b0\u672a\u95ed\u5408\u56fe\u5f62</text><text transform="translate(232.39 246.325)" fill="#333" font-family="\'MicrosoftYaHei\'" font-size="14">\u5408\u5e76</text><text transform="translate(232.39 271.534)"><tspan x="0" y="0" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">\u5982\u679c\u6709\u4e24\u4e2a\u4ee5\u4e0a\u56fe\u5f62\uff0c\u6216\u8005\u6709\u5e03\u5c14\u5173\u7cfb</tspan><tspan x="0" y="20" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">\u7684\u56fe\u5f62\uff0c\u8bf7\u5bf9\u56fe\u5f62\u5408\u5e76\u5e76\u4e14\u6269\u5c55</tspan></text><text transform="translate(232.39 383.062)" fill="#333" font-family="\'MicrosoftYaHei\'" font-size="14">\u5927\u5c0f</text><text transform="translate(232.39 408.272)"><tspan x="0" y="0" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">\u5728\u9650\u5b9a\u8fb9\u6846\u5185\u7ed8\u5236\u5b8c\u6210\u56fe\u5f62\uff0c\u5c3d\u91cf\u6491\u6ee1\u7ed8</tspan><tspan x="0" y="20" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">\u5236\u533a\u57df\uff0c\u4ee516X16\u70b9\u9635\u4f5c\u4e3a\u5bf9\u9f50\u4ee5\u53ca\u7ec6\u8282</tspan><tspan x="0" y="40" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">\u53c2\u8003</tspan></text><text transform="translate(721.366 85.865)" fill="#333" font-family="\'MicrosoftYaHei\'" font-size="14">\u8282\u70b9</text><text transform="translate(721.366 111.075)"><tspan x="0" y="0" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">\u56fe\u5f62\u5c3d\u91cf\u51cf\u5c11\u8282\u70b9\u4f7f\u7528\uff0c\u7b80\u5316\u56fe\u5f62\u53bb\u9664</tspan><tspan x="0" y="20" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">\u65e0\u7528\u8282\u70b9</tspan></text><text transform="translate(721.366 246.325)" fill="#333" font-family="\'MicrosoftYaHei\'" font-size="14">\u586b\u8272</text><text transform="translate(721.366 271.534)"><tspan x="0" y="0" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">\u5b8c\u6210\u8bbe\u8ba1\u7684\u56fe\u5f62\u9700\u8981\u586b\u5145\u76f8\u5173\u7684\u989c\u8272\uff0c</tspan><tspan x="0" y="20" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">\u5efa\u8bae\u7528\u7eaf\u8272\uff08\u4e0d\u652f\u6301\u6e10\u53d8\uff09</tspan></text><text transform="translate(721.366 383.062)" fill="#333" font-family="\'MicrosoftYaHei\'" font-size="14">\u8f6e\u5ed3\u5316</text><text transform="translate(721.366 408.272)"><tspan x="0" y="0" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">\u5c06\u63cf\u8fb9\u8f6c\u5316\u4e3a\u95ed\u5408\u56fe\u5f62\uff0c\u9009\u62e9\u8981\u8f6c\u6362\u7684</tspan><tspan x="0" y="20" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">\u63cf\u8fb9\uff0c\u5bf9\u8c61\uff0d\u8def\u5f84\uff0d\u8f6e\u5ed3\u5316\u63cf\u8fb9</tspan></text><g fill="#0D0931"><path d="M70.859 237.74a16.692 16.692 0 0 0-3.586-5.319 16.68 16.68 0 0 0-11.833-4.9c-2.258 0-4.45.442-6.514 1.314a16.692 16.692 0 0 0-5.319 3.586 16.675 16.675 0 0 0-4.902 11.832 16.703 16.703 0 0 0 4.902 11.832 16.68 16.68 0 0 0 11.833 4.9c2.258 0 4.45-.442 6.514-1.314a16.692 16.692 0 0 0 5.319-3.586 16.692 16.692 0 0 0 3.586-5.319 16.625 16.625 0 0 0 1.314-6.513 16.625 16.625 0 0 0-1.314-6.513zm26.803 26.78a9.125 9.125 0 0 0-1.963-2.911 9.143 9.143 0 0 0-2.91-1.963 9.235 9.235 0 0 0-7.132 0 9.104 9.104 0 0 0-2.91 1.963 9.113 9.113 0 0 0-1.962 2.91 9.076 9.076 0 0 0-.721 3.566 9.12 9.12 0 0 0 2.683 6.477 9.143 9.143 0 0 0 2.91 1.963 9.108 9.108 0 0 0 3.567.72 9.12 9.12 0 0 0 6.477-2.683 9.118 9.118 0 0 0 2.684-6.477 9.149 9.149 0 0 0-.723-3.565zm-2.398 6.116a6.53 6.53 0 0 1-1.406 2.084 6.523 6.523 0 0 1-2.084 1.405 6.604 6.604 0 0 1-5.104 0 6.523 6.523 0 0 1-2.084-1.405 6.54 6.54 0 0 1-1.92-4.636c0-.885.173-1.744.516-2.552a6.52 6.52 0 0 1 1.404-2.084 6.54 6.54 0 0 1 4.637-1.92 6.523 6.523 0 0 1 4.636 1.92 6.523 6.523 0 0 1 1.92 4.636 6.54 6.54 0 0 1-.515 2.552z"/><path d="M98.382 277.717H38.705v-50.67h59.677v50.67zm-58.73-.946h57.783v-48.776H39.652v48.776z"/><path d="M66.887 225.864h3.314v3.314h-3.314zm0 49.723h3.314v3.314h-3.314zm29.114-49.723h3.314v3.314h-3.314zm-58.952 0h3.314v3.314h-3.314zm0 23.205h3.314v3.314h-3.314zm0 26.518h3.314v3.314h-3.314zm58.952 0h3.314v3.314h-3.314zm0-26.518h3.314v3.314h-3.314z"/></g><path d="M170.081 237.74a16.692 16.692 0 0 0-3.586-5.319 16.68 16.68 0 0 0-11.833-4.9c-2.258 0-4.45.442-6.514 1.314a16.692 16.692 0 0 0-5.319 3.586 16.675 16.675 0 0 0-4.902 11.832 16.703 16.703 0 0 0 4.902 11.832 16.68 16.68 0 0 0 11.833 4.9c2.258 0 4.45-.442 6.514-1.314a16.692 16.692 0 0 0 5.319-3.586 16.692 16.692 0 0 0 3.586-5.319 16.625 16.625 0 0 0 1.314-6.513 16.625 16.625 0 0 0-1.314-6.513zm26.804 26.78a9.125 9.125 0 0 0-1.963-2.911 9.143 9.143 0 0 0-2.91-1.963 9.235 9.235 0 0 0-7.132 0 9.104 9.104 0 0 0-2.91 1.963 9.113 9.113 0 0 0-1.962 2.91 9.076 9.076 0 0 0-.721 3.566 9.12 9.12 0 0 0 2.683 6.477 9.143 9.143 0 0 0 2.91 1.963 9.108 9.108 0 0 0 3.567.72 9.12 9.12 0 0 0 6.477-2.683 9.118 9.118 0 0 0 2.684-6.477 9.185 9.185 0 0 0-.723-3.565zm-2.399 6.116a6.53 6.53 0 0 1-1.406 2.084 6.523 6.523 0 0 1-2.084 1.405 6.604 6.604 0 0 1-5.104 0 6.523 6.523 0 0 1-2.084-1.405 6.54 6.54 0 0 1-1.92-4.636c0-.885.173-1.744.516-2.552a6.52 6.52 0 0 1 1.404-2.084 6.54 6.54 0 0 1 4.637-1.92 6.523 6.523 0 0 1 4.636 1.92 6.523 6.523 0 0 1 1.92 4.636 6.54 6.54 0 0 1-.515 2.552z" fill="#0D0931"/><g fill="#0D0931"><path d="M90.013 394.81a23.587 23.587 0 0 0-5.078-7.53 23.6 23.6 0 0 0-7.53-5.077 23.54 23.54 0 0 0-9.223-1.862c-3.197 0-6.3.627-9.223 1.862a23.6 23.6 0 0 0-7.53 5.077 23.63 23.63 0 0 0-6.941 16.75c0 3.196.627 6.3 1.863 9.22a23.598 23.598 0 0 0 5.078 7.53 23.62 23.62 0 0 0 16.753 6.94c3.197 0 6.3-.627 9.223-1.862a23.587 23.587 0 0 0 7.53-5.078 23.62 23.62 0 0 0 6.94-16.75c0-3.196-.627-6.298-1.862-9.22zm-11.865 16.257a1.995 1.995 0 0 1-.365.486c-2.092 2.581-5.458 4.141-8.975 4.141a11.314 11.314 0 0 1-3.839-.663c-2.894-1.026-5.222-3.133-6.551-5.932a11.539 11.539 0 0 1-.441-8.907c1.655-4.617 6.049-7.72 10.936-7.72 1.221 0 2.443.195 3.632.578l.45.146.696-1.925c.065-.198.126-.371.198-.573.103-.366.321-.595.648-.71l.189-.033c.14 0 .701.07.893.413l2.512 5.434c.102.207.12.426.058.682a.856.856 0 0 1-.451.545l-5.724 2.602c-.323 0-.661-.173-.807-.41-.171-.403-.175-.714-.045-.957l.838-2.436-.478-.149a9.012 9.012 0 0 0-2.634-.394c-3.722 0-7.063 2.347-8.313 5.837a8.793 8.793 0 0 0 .331 6.749 8.713 8.713 0 0 0 7.9 5.03c2.741 0 5.338-1.23 6.942-3.286.466-.535 1.002-.67 1.604-.447.339.113.627.387.8.763.162.34.164.704-.004 1.136z"/><path d="M93.739 429.715H42.624v-51.369h51.114v51.369zm-50.155-.96h49.195v-49.449H43.584v49.449z"/></g><g fill="#0D0931"><path d="M193.468 393.175a27.78 27.78 0 0 0-5.978-8.865 27.774 27.774 0 0 0-8.865-5.976 27.712 27.712 0 0 0-10.858-2.192 27.807 27.807 0 0 0-19.723 8.168 27.812 27.812 0 0 0-8.171 19.72 27.802 27.802 0 0 0 8.171 19.72 27.812 27.812 0 0 0 19.723 8.17 27.74 27.74 0 0 0 10.858-2.192 27.78 27.78 0 0 0 8.865-5.978 27.812 27.812 0 0 0 8.17-19.72c0-3.762-.738-7.415-2.192-10.855zm-13.967 19.14c-.092.186-.227.358-.429.572-2.464 3.038-6.425 4.875-10.566 4.875a13.308 13.308 0 0 1-4.52-.78c-3.407-1.208-6.148-3.689-7.712-6.983a13.581 13.581 0 0 1-.518-10.486c1.948-5.436 7.122-9.089 12.875-9.089 1.438 0 2.877.229 4.275.681l.53.172.819-2.267c.077-.233.148-.438.233-.675.121-.431.377-.701.763-.837l.222-.038c.165 0 .825.083 1.051.486l2.957 6.397c.119.244.141.502.067.802-.061.262-.26.505-.531.642l-6.739 3.063c-.38 0-.779-.203-.95-.483-.202-.474-.205-.841-.054-1.126l.988-2.865-.562-.176a10.593 10.593 0 0 0-3.101-.464c-4.383 0-8.316 2.762-9.787 6.872a10.35 10.35 0 0 0 .39 7.945 10.252 10.252 0 0 0 9.301 5.921c3.228 0 6.283-1.447 8.172-3.869.549-.63 1.18-.789 1.889-.527.399.133.738.455.941.898.19.401.193.83-.004 1.339z"/><path d="M193.324 429.715H142.21v-51.369h51.114v51.369zm-50.154-.96h49.195v-49.449H143.17v49.449z"/></g><g fill="#0D0931"><path d="M583.241 93.154l-.003 46.454h2.236V91.526c-.011-11.001-9.527-11.001-11.055-11.001H539.27v2.217h33.526c1.455.003 10.445.003 10.445 10.412z"/><path d="M567.545 79.497h4.239v4.239h-4.239zm14.925 16.55h4.239v4.239h-4.239z"/></g><g fill="#0D0931"><path d="M678.174 93.154l-.003 46.454h2.236V91.526c-.003-3.975 1.661-4.969 0-6.591-2.936-2.866-10.078-4.41-11.055-4.41h-35.149v2.217h33.526c1.455.003 10.445.003 10.445 10.412z"/><path d="M676.904 84.436h4.239v4.239h-4.239zm-13.731-4.939h4.239v4.239h-4.239zm13.731 16.55h4.239v4.239h-4.239z"/><path d="M690.884 100.645l-24.428-27.522.75-.665 24.426 27.522z"/><circle cx="666.435" cy="72.461" r="2.065"/><circle cx="690.857" cy="100.231" r="2.065"/></g><g fill="#0D0931"><path d="M563.203 432.184c-14.582 0-26.444-11.863-26.444-26.444s11.864-26.444 26.444-26.444c14.581 0 26.444 11.864 26.444 26.444.001 14.58-11.863 26.444-26.444 26.444zm0-48.164c-11.977 0-21.721 9.743-21.721 21.721s9.745 21.721 21.721 21.721 21.721-9.743 21.721-21.721-9.742-21.721-21.721-21.721z"/><path d="M590.723 433.297h-55.02v-55.099h55.02v55.099zm-54.148-1.03h53.274v-53.039h-53.274v53.039z"/><path d="M561.9 376.887h3.778v3.778H561.9zm0 5.528h3.778v3.778H561.9zm26.487-5.528h3.778v3.778h-3.778zm0 53.855h3.778v3.778h-3.778zm-54.573 0h3.778v3.778h-3.778zm0-26.92h3.778v3.778h-3.778zm5.549 0h3.778v3.778h-3.778zm0-21.854h3.778v3.778h-3.778zm0 43.261h3.778v3.778h-3.778zm49.024-21.407h3.778v3.778h-3.778zm-5.038-21.854h3.778v3.778h-3.778zm0 43.261h3.778v3.778h-3.778zm-.446-21.371h3.778v3.778h-3.778zm-49.089-26.971h3.778v3.778h-3.778zm28.086 53.855h3.778v3.778H561.9z"/><path d="M585.685 427.96h-44.432v-44.496h44.432v44.496zm-43.728-.831h43.023v-42.834h-43.023v42.834z"/></g><g fill="#0D0931"><path d="M663.563 432.147c-14.581 0-26.444-11.863-26.444-26.444s11.864-26.444 26.444-26.444c14.582 0 26.444 11.863 26.444 26.444s-11.862 26.444-26.444 26.444zm0-48.165c-11.977 0-21.721 9.743-21.721 21.721s9.743 21.721 21.721 21.721 21.721-9.743 21.721-21.721-9.743-21.721-21.721-21.721zm-25.969-3.989h3.778v3.778h-3.778zm0 47.455h3.778v3.778h-3.778zm47.677 0h3.778v3.778h-3.778z"/><path d="M685.271 404.075h3.778v3.778h-3.778zm0-24.082h3.778v3.778h-3.778zm-23.597 0h3.778v3.778h-3.778zm0 47.455h3.778v3.778h-3.778zm-24.08-23.634h3.778v3.778h-3.778z"/><path d="M687.795 429.97h-48.463v-48.534h48.465v48.534h-.002zm-47.695-.907h46.927v-46.72H640.1v46.72z"/><path d="M663.564 429.784c-13.279 0-24.081-10.802-24.081-24.08s10.802-24.081 24.081-24.081 24.08 10.802 24.08 24.081c0 13.28-10.803 24.08-24.08 24.08zm0-47.373c-12.844 0-23.294 10.45-23.294 23.294s10.45 23.293 23.294 23.293c12.844 0 23.293-10.45 23.293-23.293 0-12.846-10.45-23.294-23.293-23.294z"/></g><g fill="#0D0931"><path d="M586.051 246.962c-.539-1.531-1.897-2.635-3.541-2.875l-10.815-1.583-4.695-9.602c-.73-1.497-2.303-2.461-4.011-2.461-1.702 0-3.277.964-4.011 2.461l-4.695 9.604-10.812 1.585c-1.648.236-3.007 1.337-3.547 2.875-.542 1.555-.141 3.249 1.047 4.417l7.94 7.816-1.84 10.825c-.278 1.623.446 3.29 1.845 4.247 1.339.906 3.218 1.008 4.666.246l9.411-4.992 9.415 4.997a4.562 4.562 0 0 0 4.67-.253c1.39-.954 2.114-2.621 1.836-4.241l-1.84-10.825 7.94-7.816a4.214 4.214 0 0 0 1.037-4.425z"/><path d="M570.903 233.27l3.243 6.632 7.953 1.164 1.574-.266a1.528 1.528 0 0 0 1.226-1.099 1.595 1.595 0 0 0-.454-1.588l-2.881-2.714.598-3.824a1.613 1.613 0 0 0-.68-1.562 1.623 1.623 0 0 0-1.701-.102l-3.385 1.875-3.537-1.772a1.586 1.586 0 0 0-1.649.117 1.526 1.526 0 0 0-.606 1.529l.299 1.61z"/></g><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="663.563" y1="230.44" x2="663.563" y2="275.048"><stop offset="0" stop-color="#ba9bc9"/><stop offset="1" stop-color="#1b1464"/></linearGradient><path fill="url(#a)" d="M686.625 246.962c-.539-1.531-1.897-2.635-3.541-2.875l-10.815-1.583-4.695-9.604c-.73-1.497-2.303-2.461-4.011-2.461-1.702 0-3.277.964-4.011 2.461l-4.695 9.604-10.812 1.585c-1.648.236-3.007 1.337-3.547 2.875-.542 1.555-.141 3.249 1.047 4.417l7.94 7.816-1.84 10.825c-.278 1.623.446 3.29 1.845 4.247 1.339.906 3.218 1.008 4.666.246l9.411-4.992 9.415 4.997a4.562 4.562 0 0 0 4.67-.253c1.39-.954 2.114-2.621 1.836-4.241l-1.84-10.825 7.94-7.816a4.212 4.212 0 0 0 1.037-4.423z"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="678.34" y1="229.717" x2="678.34" y2="241.066"><stop offset="0" stop-color="#ba9bc9"/><stop offset="1" stop-color="#1b1464"/></linearGradient><path fill="url(#b)" d="M671.477 233.27l3.243 6.632 7.953 1.164 1.574-.266a1.528 1.528 0 0 0 1.226-1.099 1.595 1.595 0 0 0-.454-1.588l-2.881-2.714.598-3.824a1.613 1.613 0 0 0-.68-1.562 1.623 1.623 0 0 0-1.701-.102l-3.385 1.875-3.537-1.772a1.586 1.586 0 0 0-1.649.117 1.526 1.526 0 0 0-.606 1.529l.299 1.61z"/><path fill="#94BC4E" d="M75.452 158.304l-8.77 8.853a1.006 1.006 0 0 1-1.421.003l-4.341-4.3a1.005 1.005 0 0 1-.009-1.421 1.008 1.008 0 0 1 1.422-.005l3.627 3.593 8.064-8.139a1.006 1.006 0 1 1 1.428 1.416z"/><path fill="#DE625C" d="M173.005 167.327c-.391.391-1.03.39-1.422-.002l-3.837-3.837-3.61 3.61a1.005 1.005 0 0 1-1.422.002 1.006 1.006 0 0 1 .003-1.421l3.675-3.675-3.863-3.863a1.01 1.01 0 0 1 0-1.424 1.008 1.008 0 0 1 1.422.002l3.837 3.837 3.61-3.61a1.005 1.005 0 0 1 1.422-.002 1.006 1.006 0 0 1-.003 1.421l-3.675 3.675 3.863 3.863a1.01 1.01 0 0 1 0 1.424z"/><path fill="#94BC4E" d="M570.259 158.304l-8.77 8.853a1.006 1.006 0 0 1-1.421.003l-4.341-4.3a1.005 1.005 0 0 1-.009-1.421 1.008 1.008 0 0 1 1.422-.005l3.627 3.593 8.064-8.139a1.006 1.006 0 1 1 1.428 1.416z"/><path fill="#DE625C" d="M668.801 167.327c-.391.391-1.03.39-1.422-.002l-3.837-3.837-3.61 3.61a1.005 1.005 0 0 1-1.422.002 1.006 1.006 0 0 1 .004-1.421l3.675-3.675-3.863-3.863a1.01 1.01 0 0 1 0-1.424 1.008 1.008 0 0 1 1.422.002l3.837 3.837 3.61-3.61a1.005 1.005 0 0 1 1.422-.002 1.006 1.006 0 0 1-.003 1.421l-3.675 3.675 3.863 3.863a1.01 1.01 0 0 1-.001 1.424z"/><path fill="#94BC4E" d="M75.452 303.089l-8.77 8.853a1.006 1.006 0 0 1-1.421.004l-4.341-4.3a1.005 1.005 0 0 1-.009-1.421 1.008 1.008 0 0 1 1.422-.005l3.627 3.593 8.064-8.139a1.006 1.006 0 1 1 1.428 1.415z"/><path fill="#DE625C" d="M173.005 312.112c-.391.391-1.03.39-1.422-.002l-3.837-3.837-3.61 3.61a1.005 1.005 0 0 1-1.422.002 1.006 1.006 0 0 1 .003-1.421l3.675-3.675-3.863-3.863a1.01 1.01 0 0 1 0-1.424 1.008 1.008 0 0 1 1.422.002l3.837 3.837 3.61-3.61a1.005 1.005 0 0 1 1.422-.002 1.006 1.006 0 0 1-.003 1.421l-3.675 3.675 3.863 3.863a1.01 1.01 0 0 1 0 1.424z"/><path fill="#94BC4E" d="M570.259 303.089l-8.77 8.853a1.006 1.006 0 0 1-1.421.004l-4.341-4.3a1.005 1.005 0 0 1-.009-1.421 1.008 1.008 0 0 1 1.422-.005l3.627 3.593 8.064-8.139a1.006 1.006 0 1 1 1.428 1.415z"/><path fill="#DE625C" d="M668.801 312.112c-.391.391-1.03.39-1.422-.002l-3.837-3.837-3.61 3.61a1.005 1.005 0 0 1-1.422.002 1.006 1.006 0 0 1 .003-1.421l3.675-3.675-3.863-3.863a1.01 1.01 0 0 1 0-1.424 1.008 1.008 0 0 1 1.422.002l3.837 3.837 3.61-3.61a1.005 1.005 0 0 1 1.422-.002 1.006 1.006 0 0 1-.003 1.421l-3.675 3.675 3.863 3.863a1.01 1.01 0 0 1 0 1.424z"/><path fill="#94BC4E" d="M75.452 459.191l-8.77 8.853a1.006 1.006 0 0 1-1.421.003l-4.341-4.3a1.005 1.005 0 0 1-.009-1.421 1.008 1.008 0 0 1 1.422-.005l3.627 3.593 8.064-8.139a1.006 1.006 0 1 1 1.428 1.416z"/><path fill="#DE625C" d="M173.005 468.213c-.391.391-1.03.39-1.422-.002l-3.837-3.837-3.61 3.61a1.005 1.005 0 0 1-1.422.002 1.006 1.006 0 0 1 .003-1.421l3.675-3.675-3.863-3.863a1.01 1.01 0 0 1 0-1.424 1.008 1.008 0 0 1 1.422.002l3.837 3.837 3.61-3.61a1.005 1.005 0 0 1 1.422-.002 1.006 1.006 0 0 1-.003 1.421l-3.675 3.675 3.863 3.863a1.01 1.01 0 0 1 0 1.424z"/><path fill="#94BC4E" d="M570.259 459.191l-8.77 8.853a1.006 1.006 0 0 1-1.421.003l-4.341-4.3a1.005 1.005 0 0 1-.009-1.421 1.008 1.008 0 0 1 1.422-.005l3.627 3.593 8.064-8.139a1.006 1.006 0 1 1 1.428 1.416z"/><path fill="#DE625C" d="M668.801 468.213c-.391.391-1.03.39-1.422-.002l-3.837-3.837-3.61 3.61a1.005 1.005 0 0 1-1.422.002 1.006 1.006 0 0 1 .004-1.421l3.675-3.675-3.863-3.863a1.01 1.01 0 0 1 0-1.424 1.008 1.008 0 0 1 1.422.002l3.837 3.837 3.61-3.61a1.005 1.005 0 0 1 1.422-.002 1.006 1.006 0 0 1-.003 1.421l-3.675 3.675 3.863 3.863a1.01 1.01 0 0 1-.001 1.424z"/></svg>',
		tmplSvgEn:
			'<svg xmlns="http://www.w3.org/2000/svg" width="960" height="560" viewBox="0 0 960 560"><path fill="#0D0931" d="M58.941 72.499v1.72a31.37 31.37 0 0 1 8.286 6.195c5.775 6.053 8.847 13.972 8.65 22.294-.278 11.696-7.135 21.861-16.935 26.984v1.695c10.652-5.251 18.174-16.101 18.472-28.641.313-13.221-7.299-24.798-18.473-30.247zm99.569 1.699a31.394 31.394 0 0 1 8.326 6.214c4.967 5.209 7.921 11.799 8.527 18.838h1.552c-.969-11.761-8.207-21.813-18.403-26.771v1.719h-.002zm16.972 28.547c-.292 11.694-7.164 21.853-16.972 26.964v1.695c10.673-5.244 18.215-16.103 18.512-28.66l-1.54.001z"/><text transform="translate(232.39 85.865)" fill="#333" font-family="\'MicrosoftYaHei\'" font-size="14">Closing</text><text transform="translate(232.39 111.075)" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">Closing the Borders of icons.</text><text transform="translate(232.39 240.325)" fill="#333" font-family="\'MicrosoftYaHei\'" font-size="14">Merging</text><text transform="translate(232.39 383.062)" fill="#333" font-family="\'MicrosoftYaHei\'" font-size="14">Size</text><text transform="translate(721.366 85.865)" fill="#333" font-family="\'MicrosoftYaHei\'" font-size="14">Nodes</text><text transform="translate(721.366 111.066)"><tspan x="0" y="0" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">Removing the useless nodes and</tspan><tspan x="0" y="18.4" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">minimizing the necessary nodes.</tspan></text><text transform="translate(721.366 266.231)"><tspan x="0" y="0" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">You could filling solid color into</tspan><tspan x="0" y="18.4" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">icon, rather than linear gradient</tspan></text><text transform="translate(721.366 410.066)"><tspan x="0" y="0" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">Changing stroke into closed shape,</tspan><tspan x="0" y="18.4" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">choosing &quot;Object - Path - Outline</tspan><tspan x="0" y="36.8" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">Stroke&quot; after selecting the stroke.</tspan></text><text transform="translate(232.366 266.066)"><tspan x="0" y="0" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">If icon contains two shapes or more,</tspan><tspan x="0" y="18.4" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">or includes shape of Boolean Relation,</tspan><tspan x="0" y="36.8" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">please merging and extending it.</tspan></text><text transform="translate(232.366 410.066)"><tspan x="0" y="0" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">Drawing the icon in the limited frame,</tspan><tspan x="0" y="18.4" fill="#999" font-family="\'MicrosoftYaHei\'" font-size="12">and aligning as 16*16 dot matrix.</tspan></text><text transform="translate(721.366 242.325)" fill="#333" font-family="\'MicrosoftYaHei\'" font-size="14">Filling Color</text><text transform="translate(721.366 383.062)" fill="#333" font-family="\'MicrosoftYaHei\'" font-size="14">Outline Stroke</text><g fill="#0D0931"><path d="M70.859 237.74a16.685 16.685 0 0 0-3.586-5.319 16.681 16.681 0 0 0-11.833-4.9 16.685 16.685 0 0 0-11.833 4.9 16.675 16.675 0 0 0-4.902 11.832 16.703 16.703 0 0 0 4.902 11.832 16.681 16.681 0 0 0 11.833 4.9 16.685 16.685 0 0 0 11.833-4.9 16.685 16.685 0 0 0 4.9-11.832 16.615 16.615 0 0 0-1.314-6.513zm26.803 26.78a9.125 9.125 0 0 0-1.963-2.911 9.137 9.137 0 0 0-2.91-1.963 9.235 9.235 0 0 0-7.132 0 9.093 9.093 0 0 0-2.91 1.963 9.117 9.117 0 0 0-1.962 2.91 9.066 9.066 0 0 0-.721 3.566 9.12 9.12 0 0 0 2.683 6.477 9.137 9.137 0 0 0 6.477 2.683 9.12 9.12 0 0 0 6.477-2.683 9.12 9.12 0 0 0 2.684-6.477 9.152 9.152 0 0 0-.723-3.565zm-2.398 6.116a6.53 6.53 0 0 1-1.406 2.084 6.528 6.528 0 0 1-2.084 1.405 6.604 6.604 0 0 1-5.104 0 6.528 6.528 0 0 1-2.084-1.405 6.54 6.54 0 0 1-1.92-4.636c0-.885.173-1.744.516-2.552a6.509 6.509 0 0 1 1.404-2.084 6.54 6.54 0 0 1 4.637-1.92 6.518 6.518 0 0 1 4.636 1.92 6.52 6.52 0 0 1 1.92 4.636 6.541 6.541 0 0 1-.515 2.552z"/><path d="M98.382 277.717H38.705v-50.67h59.677v50.67zm-58.73-.946h57.783v-48.776H39.652v48.776z"/><path d="M66.887 225.864h3.314v3.314h-3.314v-3.314zm0 49.723h3.314v3.314h-3.314v-3.314zm29.114-49.723h3.314v3.314h-3.314v-3.314zm-58.952 0h3.314v3.314h-3.314v-3.314zm0 23.205h3.314v3.314h-3.314v-3.314zm0 26.518h3.314v3.314h-3.314v-3.314zm58.952 0h3.314v3.314h-3.314v-3.314zm0-26.518h3.314v3.314h-3.314v-3.314z"/></g><path fill="#0D0931" d="M170.081 237.74a16.685 16.685 0 0 0-3.586-5.319 16.681 16.681 0 0 0-11.833-4.9 16.685 16.685 0 0 0-11.833 4.9 16.675 16.675 0 0 0-4.902 11.832 16.703 16.703 0 0 0 4.902 11.832 16.681 16.681 0 0 0 11.833 4.9 16.685 16.685 0 0 0 11.833-4.9 16.685 16.685 0 0 0 4.9-11.832 16.615 16.615 0 0 0-1.314-6.513zm26.804 26.78a9.125 9.125 0 0 0-1.963-2.911 9.137 9.137 0 0 0-2.91-1.963 9.235 9.235 0 0 0-7.132 0 9.093 9.093 0 0 0-2.91 1.963 9.117 9.117 0 0 0-1.962 2.91 9.066 9.066 0 0 0-.721 3.566 9.12 9.12 0 0 0 2.683 6.477 9.137 9.137 0 0 0 6.477 2.683 9.12 9.12 0 0 0 6.477-2.683 9.12 9.12 0 0 0 2.684-6.477 9.189 9.189 0 0 0-.723-3.565zm-2.399 6.116a6.53 6.53 0 0 1-1.406 2.084 6.528 6.528 0 0 1-2.084 1.405 6.604 6.604 0 0 1-5.104 0 6.528 6.528 0 0 1-2.084-1.405 6.54 6.54 0 0 1-1.92-4.636c0-.885.173-1.744.516-2.552a6.509 6.509 0 0 1 1.404-2.084 6.54 6.54 0 0 1 4.637-1.92 6.52 6.52 0 0 1 4.636 1.92 6.52 6.52 0 0 1 1.92 4.636 6.541 6.541 0 0 1-.515 2.552z"/><g fill="#0D0931"><path d="M90.013 394.81a23.596 23.596 0 0 0-5.078-7.53 23.604 23.604 0 0 0-16.753-6.939 23.604 23.604 0 0 0-16.753 6.939 23.628 23.628 0 0 0-6.941 16.75c0 3.196.627 6.3 1.863 9.22a23.607 23.607 0 0 0 5.078 7.53 23.621 23.621 0 0 0 16.753 6.94c3.197 0 6.3-.627 9.223-1.862a23.596 23.596 0 0 0 7.53-5.078 23.623 23.623 0 0 0 6.94-16.75c0-3.196-.627-6.298-1.862-9.22zm-11.865 16.257c-.096.18-.219.344-.365.486-2.092 2.581-5.458 4.141-8.975 4.141a11.316 11.316 0 0 1-3.839-.663c-2.894-1.026-5.222-3.133-6.551-5.932a11.536 11.536 0 0 1-.441-8.907c1.655-4.617 6.049-7.72 10.936-7.72 1.221 0 2.443.195 3.632.578l.45.146.696-1.925c.065-.198.126-.371.198-.573.103-.366.321-.595.648-.71l.189-.033c.14 0 .701.07.893.413l2.512 5.434c.102.207.12.426.058.682a.857.857 0 0 1-.451.545l-5.724 2.602c-.323 0-.661-.173-.807-.41-.171-.403-.175-.714-.045-.957l.838-2.436-.478-.149a9.009 9.009 0 0 0-2.634-.394c-3.722 0-7.063 2.347-8.313 5.837a8.792 8.792 0 0 0 .331 6.749 8.714 8.714 0 0 0 7.9 5.03c2.741 0 5.338-1.23 6.942-3.286.466-.535 1.002-.67 1.604-.447.339.113.627.387.8.763.162.34.164.704-.004 1.136z"/><path d="M93.739 429.715H42.624v-51.369h51.114l.001 51.369zm-50.155-.96h49.195v-49.449H43.584v49.449z"/></g><g fill="#0D0931"><path d="M193.468 393.175a27.784 27.784 0 0 0-5.978-8.865 27.778 27.778 0 0 0-8.865-5.976 27.72 27.72 0 0 0-10.858-2.192 27.808 27.808 0 0 0-19.723 8.168 27.813 27.813 0 0 0-8.171 19.72 27.8 27.8 0 0 0 8.171 19.72 27.81 27.81 0 0 0 19.723 8.17c3.73.007 7.423-.739 10.858-2.192a27.784 27.784 0 0 0 8.865-5.978 27.812 27.812 0 0 0 8.17-19.72c0-3.762-.738-7.415-2.192-10.855zm-13.967 19.14c-.092.186-.227.358-.429.572-2.464 3.038-6.425 4.875-10.566 4.875a13.29 13.29 0 0 1-4.52-.78c-3.407-1.208-6.148-3.689-7.712-6.983a13.583 13.583 0 0 1-.518-10.486c1.948-5.436 7.122-9.089 12.875-9.089 1.438 0 2.877.229 4.275.681l.53.172.819-2.267c.077-.233.148-.438.233-.675.121-.431.377-.701.763-.837l.222-.038c.165 0 .825.083 1.051.486l2.957 6.397c.119.244.141.502.067.802-.061.262-.26.505-.531.642l-6.739 3.063c-.38 0-.779-.203-.95-.483-.202-.474-.205-.841-.054-1.126l.988-2.865-.562-.176a10.582 10.582 0 0 0-3.101-.464c-4.383 0-8.316 2.762-9.787 6.872a10.348 10.348 0 0 0 .39 7.945 10.253 10.253 0 0 0 9.301 5.921c3.228 0 6.283-1.447 8.172-3.869.549-.63 1.18-.789 1.889-.527.399.133.738.455.941.898.19.401.193.83-.004 1.339z"/><path d="M193.324 429.715H142.21v-51.369h51.114v51.369zm-50.154-.96h49.195v-49.449H143.17v49.449z"/></g><g fill="#0D0931"><path d="M583.241 93.154l-.003 46.454h2.236V91.526c-.011-11.001-9.527-11.001-11.055-11.001H539.27v2.217h33.526c1.455.003 10.445.003 10.445 10.412z"/><path d="M567.545 79.497h4.239v4.239h-4.239v-4.239zm14.925 16.55h4.239v4.239h-4.239v-4.239z"/></g><g fill="#0D0931"><path d="M678.174 93.154l-.003 46.454h2.236V91.526c-.003-3.975 1.661-4.969 0-6.591-2.936-2.866-10.078-4.41-11.055-4.41h-35.149v2.217h33.526c1.455.003 10.445.003 10.445 10.412z"/><path d="M676.904 84.436h4.239v4.239h-4.239v-4.239zm-13.731-4.939h4.239v4.239h-4.239v-4.239zm13.731 16.55h4.239v4.239h-4.239v-4.239z"/><path d="M690.884 100.645l-24.428-27.522.75-.665 24.426 27.522-.748.665z"/><circle cx="666.435" cy="72.461" r="2.065"/><circle cx="690.857" cy="100.231" r="2.065"/></g><g fill="#0D0931"><path d="M563.203 432.184c-14.582 0-26.444-11.863-26.444-26.444s11.864-26.444 26.444-26.444c14.581 0 26.444 11.864 26.444 26.444.001 14.58-11.863 26.444-26.444 26.444zm0-48.164c-11.977 0-21.721 9.743-21.721 21.721s9.745 21.721 21.721 21.721 21.721-9.743 21.721-21.721-9.742-21.721-21.721-21.721z"/><path d="M590.723 433.297h-55.02v-55.099h55.02v55.099zm-54.148-1.03h53.274v-53.039h-53.274v53.039z"/><path d="M561.9 376.887h3.778v3.778H561.9v-3.778zm0 5.528h3.778v3.778H561.9v-3.778zm26.487-5.528h3.778v3.778h-3.778v-3.778zm0 53.855h3.778v3.778h-3.778v-3.778zm-54.573 0h3.778v3.778h-3.778v-3.778zm0-26.92h3.778v3.778h-3.778v-3.778zm5.549 0h3.778v3.778h-3.778v-3.778zm0-21.854h3.778v3.778h-3.778v-3.778zm0 43.261h3.778v3.778h-3.778v-3.778zm49.024-21.407h3.778v3.778h-3.778v-3.778zm-5.038-21.854h3.778v3.778h-3.778v-3.778zm0 43.261h3.778v3.778h-3.778v-3.778zm-.446-21.371h3.778v3.778h-3.778v-3.778zm-49.089-26.971h3.778v3.778h-3.778v-3.778zm28.086 53.855h3.778v3.778H561.9v-3.778z"/><path d="M585.685 427.96h-44.432v-44.496h44.432v44.496zm-43.728-.831h43.023v-42.834h-43.023v42.834z"/></g><g fill="#0D0931"><path d="M663.563 432.147c-14.581 0-26.444-11.863-26.444-26.444s11.864-26.444 26.444-26.444c14.582 0 26.444 11.863 26.444 26.444s-11.862 26.444-26.444 26.444zm0-48.165c-11.977 0-21.721 9.743-21.721 21.721s9.743 21.721 21.721 21.721 21.721-9.743 21.721-21.721-9.743-21.721-21.721-21.721zm-25.969-3.989h3.778v3.778h-3.778v-3.778zm0 47.455h3.778v3.778h-3.778v-3.778zm47.677 0h3.778v3.778h-3.778v-3.778z"/><path d="M685.271 404.075h3.778v3.778h-3.778v-3.778zm0-24.082h3.778v3.778h-3.778v-3.778zm-23.597 0h3.778v3.778h-3.778v-3.778zm0 47.455h3.778v3.778h-3.778v-3.778zm-24.08-23.634h3.778v3.778h-3.778v-3.778z"/><path d="M687.795 429.97h-48.463v-48.534h48.465v48.534h-.002zm-47.695-.907h46.927v-46.72H640.1v46.72z"/><path d="M663.564 429.784c-13.279 0-24.081-10.802-24.081-24.08s10.802-24.081 24.081-24.081 24.08 10.802 24.08 24.081c0 13.28-10.803 24.08-24.08 24.08zm0-47.373c-12.844 0-23.294 10.45-23.294 23.294s10.45 23.293 23.294 23.293 23.293-10.45 23.293-23.293c0-12.846-10.45-23.294-23.293-23.294z"/></g><g fill="#0D0931"><path d="M586.051 246.962c-.539-1.531-1.897-2.635-3.541-2.875l-10.815-1.583-4.695-9.602c-.73-1.497-2.303-2.461-4.011-2.461-1.702 0-3.277.964-4.011 2.461l-4.695 9.604-10.812 1.585c-1.648.236-3.007 1.337-3.547 2.875-.542 1.555-.141 3.249 1.047 4.417l7.94 7.816-1.84 10.825c-.278 1.623.446 3.29 1.845 4.247 1.339.906 3.218 1.008 4.666.246l9.411-4.992 9.415 4.997a4.56 4.56 0 0 0 4.67-.253c1.39-.954 2.114-2.621 1.836-4.241l-1.84-10.825 7.94-7.816a4.214 4.214 0 0 0 1.037-4.425z"/><path d="M570.903 233.27l3.243 6.632 7.953 1.164 1.574-.266a1.527 1.527 0 0 0 1.226-1.099 1.595 1.595 0 0 0-.454-1.588l-2.881-2.714.598-3.824a1.612 1.612 0 0 0-.68-1.562 1.623 1.623 0 0 0-1.701-.102l-3.385 1.875-3.537-1.772a1.586 1.586 0 0 0-1.649.117 1.527 1.527 0 0 0-.606 1.529l.299 1.61z"/></g><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="579.563" y1="304.561" x2="579.563" y2="259.956" gradientTransform="matrix(1 0 0 -1 84 535)"><stop offset="0" stop-color="#ba9bc9"/><stop offset="1" stop-color="#1b1464"/></linearGradient><path fill="url(#a)" d="M686.625 246.962c-.539-1.531-1.897-2.635-3.541-2.875l-10.815-1.583-4.695-9.604c-.73-1.497-2.303-2.461-4.011-2.461-1.702 0-3.277.964-4.011 2.461l-4.695 9.604-10.812 1.585c-1.648.236-3.007 1.337-3.547 2.875-.542 1.555-.141 3.249 1.047 4.417l7.94 7.816-1.84 10.825c-.278 1.623.446 3.29 1.845 4.247 1.339.906 3.218 1.008 4.666.246l9.411-4.992 9.415 4.997a4.56 4.56 0 0 0 4.67-.253c1.39-.954 2.114-2.621 1.836-4.241l-1.84-10.825 7.94-7.816a4.213 4.213 0 0 0 1.037-4.423z"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="594.34" y1="305.282" x2="594.34" y2="293.934" gradientTransform="matrix(1 0 0 -1 84 535)"><stop offset="0" stop-color="#ba9bc9"/><stop offset="1" stop-color="#1b1464"/></linearGradient><path fill="url(#b)" d="M671.477 233.27l3.243 6.632 7.953 1.164 1.574-.266a1.527 1.527 0 0 0 1.226-1.099 1.595 1.595 0 0 0-.454-1.588l-2.881-2.714.598-3.824a1.612 1.612 0 0 0-.68-1.562 1.623 1.623 0 0 0-1.701-.102l-3.385 1.875-3.537-1.772a1.586 1.586 0 0 0-1.649.117 1.527 1.527 0 0 0-.606 1.529l.299 1.61z"/><path fill="#94BC4E" d="M75.452 158.304l-8.77 8.853a1.006 1.006 0 0 1-1.421.003l-4.341-4.3a1.005 1.005 0 1 1 1.413-1.426l3.627 3.593 8.064-8.139a1.006 1.006 0 1 1 1.428 1.416z"/><path fill="#DE625C" d="M173.005 167.327c-.391.391-1.03.39-1.422-.002l-3.837-3.837-3.61 3.61a1.006 1.006 0 0 1-1.421.003l-.001-.001a1.006 1.006 0 0 1 .003-1.421l3.675-3.675-3.863-3.863a1.01 1.01 0 0 1 0-1.424 1.008 1.008 0 0 1 1.422.002l3.837 3.837 3.61-3.61a1.006 1.006 0 0 1 1.421-.003l.001.001c.391.393.39 1.029-.003 1.421l-3.675 3.675 3.863 3.863a1.01 1.01 0 0 1 0 1.424z"/><path fill="#94BC4E" d="M570.259 158.304l-8.77 8.853a1.006 1.006 0 0 1-1.421.003l-4.341-4.3a1.005 1.005 0 1 1 1.413-1.426l3.627 3.593 8.064-8.139a1.006 1.006 0 1 1 1.428 1.416z"/><path fill="#DE625C" d="M668.801 167.327c-.391.391-1.03.39-1.422-.002l-3.837-3.837-3.61 3.61a1.006 1.006 0 0 1-1.421.003l-.001-.001a1.006 1.006 0 0 1 .004-1.421l3.675-3.675-3.863-3.863a1.01 1.01 0 0 1 0-1.424 1.008 1.008 0 0 1 1.422.002l3.837 3.837 3.61-3.61a1.006 1.006 0 0 1 1.421-.003l.001.001c.391.393.39 1.029-.003 1.421l-3.675 3.675 3.863 3.863a1.01 1.01 0 0 1-.001 1.424z"/><path fill="#94BC4E" d="M75.452 303.089l-8.77 8.853a1.006 1.006 0 0 1-1.421.004l-4.341-4.3a1.005 1.005 0 1 1 1.413-1.426l3.627 3.593 8.064-8.139a1.006 1.006 0 1 1 1.428 1.415z"/><path fill="#DE625C" d="M173.005 312.112c-.391.391-1.03.39-1.422-.002l-3.837-3.837-3.61 3.61a1.006 1.006 0 0 1-1.421.003l-.001-.001a1.006 1.006 0 0 1 .003-1.421l3.675-3.675-3.863-3.863a1.01 1.01 0 0 1 0-1.424 1.008 1.008 0 0 1 1.422.002l3.837 3.837 3.61-3.61a1.006 1.006 0 0 1 1.421-.003l.001.001c.391.393.39 1.029-.003 1.421l-3.675 3.675 3.863 3.863a1.01 1.01 0 0 1 0 1.424z"/><path fill="#94BC4E" d="M570.259 303.089l-8.77 8.853a1.006 1.006 0 0 1-1.421.004l-4.341-4.3a1.005 1.005 0 1 1 1.413-1.426l3.627 3.593 8.064-8.139a1.007 1.007 0 1 1 1.428 1.415z"/><path fill="#DE625C" d="M668.801 312.112c-.391.391-1.03.39-1.422-.002l-3.837-3.837-3.61 3.61a1.006 1.006 0 0 1-1.421.003l-.001-.001a1.006 1.006 0 0 1 .003-1.421l3.675-3.675-3.863-3.863a1.01 1.01 0 0 1 0-1.424 1.008 1.008 0 0 1 1.422.002l3.837 3.837 3.61-3.61a1.006 1.006 0 0 1 1.421-.003l.001.001c.391.393.39 1.029-.003 1.421l-3.675 3.675 3.863 3.863a1.01 1.01 0 0 1 0 1.424z"/><path fill="#94BC4E" d="M75.452 459.191l-8.77 8.853a1.006 1.006 0 0 1-1.421.003l-4.341-4.3a1.005 1.005 0 1 1 1.413-1.426l3.627 3.593 8.064-8.139a1.006 1.006 0 1 1 1.428 1.416z"/><path fill="#DE625C" d="M173.005 468.213c-.391.391-1.03.39-1.422-.002l-3.837-3.837-3.61 3.61a1.006 1.006 0 0 1-1.421.003l-.001-.001a1.006 1.006 0 0 1 .003-1.421l3.675-3.675-3.863-3.863a1.01 1.01 0 0 1 0-1.424 1.008 1.008 0 0 1 1.422.002l3.837 3.837 3.61-3.61a1.006 1.006 0 0 1 1.421-.003l.001.001c.391.393.39 1.029-.003 1.421l-3.675 3.675 3.863 3.863a1.01 1.01 0 0 1 0 1.424z"/><path fill="#94BC4E" d="M570.259 459.191l-8.77 8.853a1.006 1.006 0 0 1-1.421.003l-4.341-4.3a1.005 1.005 0 1 1 1.413-1.426l3.627 3.593 8.064-8.139a1.006 1.006 0 0 1 1.473 1.371l-.045.045z"/><path fill="#DE625C" d="M668.801 468.213c-.391.391-1.03.39-1.422-.002l-3.837-3.837-3.61 3.61a1.006 1.006 0 0 1-1.421.003l-.001-.001a1.006 1.006 0 0 1 .004-1.421l3.675-3.675-3.863-3.863a1.01 1.01 0 0 1 0-1.424 1.008 1.008 0 0 1 1.422.002l3.837 3.837 3.61-3.61a1.006 1.006 0 0 1 1.421-.003l.001.001c.391.393.39 1.029-.003 1.421l-3.675 3.675 3.863 3.863a1.01 1.01 0 0 1-.001 1.424z"/></svg>',
		ctor: function () {
			var a = this,
				e = i.parse(),
				t = e.params.projectId,
				e = e.params.type
			;(a.data = {
				tags: [],
				icons: [],
				svgs: [],
				currentIndex: 0,
				csrfmiddlewaretoken: document.getElementsByName(
					'csrfmiddlewaretoken'
				)[0].value,
				//csrf: l.config().csrf,
				//ctoken: l.config().ctoken,
				isShowAdvance: !1,
				advanceType: 'default',
				collectionName: '',
				projectName: '',
				hasSecret: 0,
				secret: '',
				collectionId: '',
				projectId: '',
				collectionChooseType: 'choose',
				projectChooseType: 'choose',
				isZh: h.isZh,
				url: '',
				pageType: e,
			}),
				t &&
					l.mix(a.data, {
						projectId: t,
						projectChooseType: 'choose',
						isShowAdvance: !0,
						advanceType: 'project',
					}),
				'illustration' === e &&
					l.mix(a.data, {
						isShowAdvance: !0,
						advanceType: 'upload_svgs',
						collectionChooseType: 'choose',
					}),
				a.on('destroy', function () {
					s('.main').css({ overflow: 'hidden' })
				})
		},
		init: function () {
			this.observe('type')
		},
		render: function () {
			s('.main').css({ overflow: 'inherit' })
			var a = i.parse()
			;(this.data.pageType = a.params.type), this._renderIcons()
		},
		_render: function () {
			var e = this
			e.setView().done(function () {
				var a
				s('.big-svg').html(h.isZh ? e.tmplSvg : e.tmplSvgEn),
					e._bindUploader(),
					0 < e.data.icons.length &&
						(!window.localStorage ||
							('1' !== (a = window.localStorage).getItem('uploadFx') &&
								(s('#' + e.id)
									.find('.icon-zhankai')
									.addClass('block-floating'),
								a.setItem('uploadFx', '1'))))
			})
		},
		_renderIcons: function () {
			var t = this,
				a = {}
			'illustration' === t.data.pageType &&
				((a = { type: 'illustration' }), (t.data.advanceType = 'upload_svgs')),
				t.wrapModel(r).getDefault(a, function (a) {
					h.isZh ||
						s.each(a.tags, function (a, e) {
							e.name = e.ename
						}),
						s.each(a.icons, function (a, e) {
							if (((e.keepFill = !0), e.aiTagInfo)) {
								for (
									var t = [e.slug], l = h.isZh ? 'name' : 'ename', i = 0;
									i < v.length;
									i++
								) {
									var s = v[i],
										o = s[l]
									e.aiTagInfo[s.key] > s.threshold &&
										!p.inArray(t, o) &&
										t.push(o)
								}
								e.slug = t.join(',')
							}
						}),
						0 < a.collectionList.length &&
							(a.collectionId = a.collectionList[0].id),
						0 < a.projectList.length &&
							!t.data.projectId &&
							(a.projectId = a.projectList[0].id),
						(a.collectionList = JSON.stringify(a.collectionList)),
						(a.projectList = JSON.stringify(a.projectList))
					var e = l.config('user')
					;(t.data.role = e.role), s.extend(t.data, a), t._render()
				}),
				f.loadModels().then(
					function (a) {
						t.$models = a
					},
					function (a) {
						console.error(a)
					}
				)
		},
		getData: function () {
			var a,
				t = [],
				l = {},
				i = this
			return (
				this.data.isShowAdvance &&
					'default' !== this.data.advanceType &&
					((a =
						'collection' === this.data.advanceType
							? this.data.collectionChooseType
							: this.data.projectChooseType),
					s.each(
						{
							collection: {
								create: 'advanceType,collectionName,hasSecret,secret,url',
								choose: 'advanceType,collectionId',
							},
							project: {
								create: 'advanceType,projectName',
								choose: 'advanceType,projectId',
							},
							upload_svgs: {
								create: 'advanceType,collectionName,hasSecret,secret',
								choose: 'advanceType,collectionId',
							},
						}[this.data.advanceType][a].split(','),
						function (a, e) {
							l[e] = i.data[e]
						}
					)),
				s.each(this.data.icons, function (a, e) {
					e.id &&
						t.push({
							id: e.id,
							name: e.name,
							keepFill: e.keepFill,
							unicode: e.unicode,
							slug: e.slug,
						})
				}),
				(l.updateIcons = t),
				l
			)
		},
		afterSubmit: function () {
			var a = 'illustration' === this.data.pageType
			this.data.isShowAdvance
				? 'collection' === this.data.advanceType
					? i.to('/manage/index', {
							manage_type: 'myicons',
							icontype: a ? 'illustrations' : 'collections',
					  })
					: 'upload_svgs' === this.data.advanceType
					? i.to('/manage/index', {
							manage_type: 'myicons',
							icontype: 'upload_svgs',
					  })
					: 'illustrations' === this.data.advanceType
					? i.to('/manage/index', {
							manage_type: 'myicons',
							icontype: 'illustrations',
					  })
					: 'project' === this.data.advanceType
					? i.to('/manage/index', {
							manage_type: 'myprojects',
							projectId: this.data.projectId,
					  })
					: i.to('/manage/index')
				: i.to('/manage/index')
		},
		'submitNormalUploads<click>': function (a) {
			var e = this,
				t = e.getData()
			e.isValid(t) &&
				(s.each(t.updateIcons, function (a, e) {
					e.keepFill = !1
				}),
				e.wrapModel(r).updateUploadIcons(t, function (a) {
					e.afterSubmit()
				}))
		},
		'submitColorUploads<click>': function (a) {
			var e = this,
				t = e.getData()
			e.isValid(t) &&
				(s.each(t.updateIcons, function (a, e) {
					e.keepFill = !0
				}),
				e.wrapModel(r).updateUploadIcons(t, function (a) {
					e.afterSubmit()
				}))
		},
		'submitSvgUploads<click>': function (a) {
			var e = this
			this.data.isShowAdvance = !0
			var t = e.getData()
			e.isValid(t) &&
				e.wrapModel(r).updateUploadSvgs(t, function (a) {
					e.afterSubmit()
				})
		},
		isValid: function (a) {
			var e = this.data,
				t = 'illustration' === this.data.pageType,
				l = t ? '\u63d2\u753b\u5e93' : '\u56fe\u6807\u5e93',
				t = t ? 12 : 20
			if (a.collectionName && !a.hasSecret && a.updateIcons.length < t)
				return (
					p.showAlert(
						l + '\u81f3\u5c11\u9700\u8981\u4e0a\u4f20 ' + t + ' \u4e2a'
					),
					!1
				)
			if ('collection' === e.advanceType) {
				if ('create' === e.collectionChooseType) {
					if (!a.collectionName)
						return p.showAlert('\u8bf7\u586b\u5199' + l + '\u540d\u79f0'), !1
					if (a.hasSecret && !a.secret && '1' === a.hasSecret)
						return p.showAlert('\u8bf7\u586b\u5199\u5bc6\u7801'), !1
					if (3 === e.role && a.url)
						if (
							!/(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-@?^=%&/~\+#])?/.test(
								a.url
							)
						)
							return (
								p.showAlert(
									'\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684url'
								),
								!1
							)
				} else if ('choose' === e.collectionChooseType && !a.collectionId)
					return p.showAlert('\u8bf7\u9009\u62e9' + l), !1
			} else if ('project' === e.advanceType)
				if ('create' === e.projectChooseType) {
					if (!a.projectName)
						return p.showAlert('\u8bf7\u586b\u5199\u9879\u76ee\u540d\u79f0'), !1
				} else if ('choose' === e.projectChooseType && !a.projectId)
					return p.showAlert('\u8bf7\u9009\u62e9\u9879\u76ee'), !1
			return !0
		},
		'nextIcon<click>': function (a) {
			this.data.currentIndex++,
				this.data.currentIndex > this.data.icons.length &&
					(this.data.currentIndex = 0),
				this.setView()
		},
		'prevIcon<click>': function (a) {
			this.data.currentIndex--,
				this.data.currentIndex < 0 &&
					(this.data.currentIndex = this.data.icons.length - 1),
				this.setView()
		},
		'changeChooseType<click>': function (a) {
			;(this.data[a.params.tag] = a.params.type), this.setView()
		},
		'changeShowAdvance<click>': function (a) {
			;(this.data.isShowAdvance = !0), this.setView()
		},
		'setHasSecret<click>': function (a) {
			;(this.data.hasSecret = a.params.val), this.setView()
		},
		'toggleIShowAdvance<click>': function (a) {
			;(this.data.isShowAdvance = !this.data.isShowAdvance), this.setView()
		},
		'setCollectionId<change>': function (a) {
			this.data.collectionId = a.value
		},
		'setProjectId<change>': function (a) {
			this.data.projectId = a.value
		},
		'clickIcon<click>': function (a) {
			;(this.data.currentIndex = a.params.index), this.setView()
		},
		'applyAll<click>': function (a) {
			var a = a.params.index,
				t = this.data.icons[a].keepFill
			s.each(this.data.icons, function (a, e) {
				e.keepFill = t
			})
		},
		'toggleKeepFill<change>': function (a) {
			var e = a.params.index
			;(this.data.icons[e].keepFill = s(a.target).prop('checked')),
				this.setView()
		},
		'toggleTag<click>': function (a) {
			var e = this.data.icons[this.data.currentIndex],
				t = s(a.currentTarget),
				a = t.text()
			t.hasClass('active')
				? (e.slug = e.slug
						.replace(new RegExp('^' + a + ','), '')
						.replace(new RegExp(',' + a + ','), ',')
						.replace(new RegExp(',' + a + '$'), ''))
				: ((t = 1 === (t = e.slug.split(',')).length && !t[0] ? [] : t).push(a),
				  (e.slug = t.join(','))),
				this.setView()
		},
		'updateValue<focusout>': function (a) {
			var e = a.params.index,
				t = a.params.type,
				a = s(a.target).val()
			;(this.data.icons[e][t] = a), (this.data.svgs[e][t] = a), this.setView()
		},
		'deleteIcon<click>': function (a) {
			var e = a.params.id,
				t = a.params.type,
				l = a.params.index,
				i = this
			if (('illustration' === t && (i.data.icons = i.data.svgs), !e))
				return (
					i.data.icons.splice(l, 1),
					i.data.currentIndex >= i.data.icons.length &&
						(0 === i.data.icons.length
							? (i.data.currentIndex = 0)
							: (i.data.currentIndex = i.data.icons.length - 1)),
					0 === i.data.icons.length ? i._render() : i.setView(),
					void a.stopPropagation()
				)
			i.request().all(
				[{ name: 'delete_uploading', params: { id: e, type: t } }],
				function (a, e) {
					a ||
						(i.data.icons.splice(l, 1),
						i.data.currentIndex >= i.data.icons.length &&
							(0 === i.data.icons.length
								? (i.data.currentIndex = 0)
								: (i.data.currentIndex = i.data.icons.length - 1)),
						0 !== i.data.icons.length ? i.setView() : i._render())
				}
			)
		},
		_bindUploader: function () {
			var d = this,
				a = s('#J_uploader_drop_icon'),
				e = s('#J_uploader_drop_illustration')
			s(document).bind('drop dragover', function (a) {
				return a.preventDefault(), !1
			}),
				a.on('dragleave drop', function (a) {
					s(this).css('border-color', 'transparent')
				}),
				e.on('dragleave drop', function (a) {
					s(this).css('border-color', 'transparent')
				}),
				s('#J_uploader_icon_click').fileupload({
					dropZone: a,
					pasteZone: s(document),
					dragover: function (a) {
						s('#J_uploader_drop_icon').css('border-color', '#f00f00')
					},
					add: function (a, e) {
						if (a.isDefaultPrevented()) return !1
						if (
							e.originalFiles[0].name &&
							!/(\.|\/)(svg)$/i.test(e.originalFiles[0].name)
						)
							return p.showGlobalTip('only accepted svg type'), !1
						;(e.autoUpload ||
							(!1 !== e.autoUpload &&
								s(this).fileupload('option', 'autoUpload'))) &&
							e.process().done(function () {
								e.submit()
							})
					},
					send: function (a, e) {
						e = e.files[0]
						d.data.icons.push({ filename: e.name, progress: !0 }),
							1 !== d.data.icons.length ? d.setView() : d._render()
					},
					fail: function (a, e) {
						var t = s.parseJSON(e.jqXHR.responseText),
							l = e.files[0],
							e = p.findIndex(d.data.icons, function (a) {
								return a.filename === l.name
							})
						;(d.data.icons[e] = { error: !0 }),
							p.showGlobalTip(t.message),
							d.setView()
					},
					done: function (a, e) {
						var t,
							l,
							i = e.result,
							s = e.files[0],
							o = p.findIndex(d.data.icons, function (a) {
								return a.filename === s.name
							})

						function n(a) {
							d.wrapModel(r).updateIconAiTag(
								a,
								function (a) {
									var e = a.aiTagInfo
									if (e) {
										for (
											var t = [d.data.icons[o].slug],
												l = h.isZh ? 'name' : 'ename',
												i = 0;
											i < v.length;
											i++
										) {
											var s = v[i]
											e[s.key] > s.threshold && t.push(s[l])
										}
										;(d.data.icons[o].slug = t.join(',')), d.setView()
									}
								},
								function () {
									d.setView()
								}
							)
						}

						function c(e, t) {
							f.svg2RgbArr(t).then(
								function (a) {
									n({ id: e, rgbArr: a })
								},
								function (a) {
									n({ id: e, show_svg: t }), console.error(a)
								}
							)
						}
						200 === i.code
							? ((i.data.keepFill = !0),
							  (d.data.icons[o] = i.data),
							  (d.data.currentIndex = o),
							  d.setView(),
							  (t = i.data.id),
							  (l = i.data.show_svg),
							  d.$models
									? f.predict(l, d.$models).then(
											function (a) {
												n({ id: t, aiTagInfo: a })
											},
											function (a) {
												console.error(a), c(t, l)
											}
									  )
									: c(t, l))
							: 500 === i.code &&
							  ((d.data.icons[o] = { error: !0 }),
							  p.showGlobalTip(i.message),
							  d.setView())
					},
				}),
				s('.J_uploader_illustration_click').fileupload({
					dropZone: e,
					pasteZone: s(document),
					dragover: function (a) {
						s('#J_uploader_drop_illustration').css('border-color', '#f00f00')
					},
					add: function (a, e) {
						if (a.isDefaultPrevented()) return !1
						if (
							e.originalFiles[0].name &&
							!/(\.|\/)(svg)$/i.test(e.originalFiles[0].name)
						)
							return p.showGlobalTip('only accepted svg type'), !1
						;(e.autoUpload ||
							(!1 !== e.autoUpload &&
								s(this).fileupload('option', 'autoUpload'))) &&
							e.process().done(function () {
								e.submit()
							})
					},
					send: function (a, e) {
						e = e.files[0]
						d.data.icons.push({ filename: e.name, progress: !0 }),
							1 !== d.data.icons.length ? d.setView() : d._render()
					},
					fail: function (a, e) {
						var t = s.parseJSON(e.jqXHR.responseText),
							l = e.files[0],
							e = p.findIndex(d.data.icons, function (a) {
								return a.filename === l.name
							})
						;(d.data.icons[e] = { error: !0 }),
							p.showGlobalTip(t.message),
							i.to('/icons/upload', { type: 'illustration' }),
							d.setView()
					},
					done: function (a, e) {
						var t = e.result,
							l = e.files[0],
							e = p.findIndex(d.data.icons, function (a) {
								return a.filename === l.name
							})
						200 === t.code
							? ((d.data.icons[e] = t.data),
							  (d.data.currentIndex = e),
							  'illustration' !== d.data.pageType &&
									i.to('/icons/upload', { type: 'illustration' }),
							  d.setView())
							: 413 === t.code &&
							  ((d.data.icons[e] = { error: !0 }),
							  p.showGlobalTip(t.message),
							  i.to('/icons/upload', { type: 'illustration' }),
							  d.setView())
					},
				})
		},
		filters: {
			tagTrue: function (a, e) {
				var t = e.icons,
					e = e.currentIndex
				return new RegExp('^' + a + ',|,' + a + ',|,' + a + '$').test(t[e].slug)
			},
		},
	})
})
