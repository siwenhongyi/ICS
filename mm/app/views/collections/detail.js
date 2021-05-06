define('app/views/collections/detail', [
    'magix',
    'app/models/common/index',
    'jquery',
    'app/exts/helper',
], function(c, i, a) {
    var l = c('magix'),
        t = c('app/models/common/index'),
        e = c('jquery'),
        n = c('app/exts/helper')
    a.exports = l.View.extend({
        tmpl: '<div class="block-sub-banner"><div class="block-sub-banner-bg"><div class="planet-wrap wrap"><div class="planet planet-9"></div><div class="planet planet-10"></div><div class="planet planet-11"></div><div class="planet planet-12"></div></div></div><div class="block-sub-banner-container wrap"><a href="/user/detail?uid={{creator.id}}" data-spm-click="gostr=/alimama.30;locaid=d9bd4f23f" class="avatar-special">{{#if(creator.avatar)}} <img class="avatar-special-inner" src="{{creator.avatar|adaptImg100}}"> {{/if}} <img class="avatar-special-cover" src="https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png"></a><div class="right-content"><span class="title ml10">{{collection.name}} </span><span class="content ml10">{{icons.length}} icons </span><span class="content ml10">{{creator.nickname}}</span></div></div><div class="block-bar"><div class="block-bar-container wrap"><div class="block-bar-right"><div mx-view="app/views/common/radius_btns" mx-options="{type:\'user\',code:\'{{creator.alipay_code}}\',placeholder:\'**SEARCH_ICON_PLACEHOLDER**\',avatar: \'{{creator.avatar}}\', is_favorite: {{is_favorite}} }"></div></div></div></div></div><div class="wrap"><div class="page-collection-detail-wrap">{{#if(type === 0)}}<div class="collection-detail-passwrap"><svg version="1.1" id="\u56fe\u5c42_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="200px" height="200px" viewBox="0 0 200 200" enable-background="new 0 0 200 200" xml:space="preserve"><circle fill="#EEEEEE" cx="99.665" cy="116.312" r="57.752"/><path fill="#EEEEEE" d="M15.817,55.61c0,0,0.556-0.062,0.864,0.309c0.309,0.37,0.679,5.557,2.037,6.977\n          c1.358,1.42,6.853,0.617,6.853,2.47c0,1.482-5.107,1.641-6.835,3.061c-1.729,1.42-0.741,7.409-2.858,7.188\n          c-1.658-0.173-0.494-4.939-2.531-6.853S6.37,67.217,6.37,65.488c0-1.729,5.063-0.679,6.791-2.655\n          C14.89,60.858,14.15,55.61,15.817,55.61z"/><path fill="#B1AFAE" d="M19.499,109.15c0,0,0.335-0.037,0.522,0.186c0.186,0.224,0.41,3.354,1.23,4.211\n          c0.82,0.857,4.136,0.373,4.136,1.491c0,0.894-3.082,0.991-4.126,1.848s-0.447,4.472-1.725,4.338\n          c-1.001-0.105-0.298-2.981-1.528-4.136c-1.23-1.155-4.211-0.932-4.211-1.975c0-1.043,3.056-0.41,4.099-1.602\n          C18.94,112.317,18.493,109.15,19.499,109.15z"/><path fill="#EEEEEE" d="M187.912,98.058c0,0,0.381-0.042,0.592,0.212c0.212,0.254,0.466,3.809,1.397,4.782\n          c0.931,0.973,4.697,0.423,4.697,1.693c0,1.016-3.5,1.125-4.685,2.098c-1.185,0.973-0.508,5.078-1.959,4.927\n          c-1.136-0.119-0.339-3.386-1.735-4.697c-1.397-1.312-4.782-1.058-4.782-2.243s3.47-0.466,4.655-1.82\n          C187.277,101.655,186.769,98.058,187.912,98.058z"/><path fill="#B1AFAE" d="M159.756,43.291c0,0,0.381-0.042,0.592,0.212s0.466,3.809,1.397,4.782s4.697,0.423,4.697,1.693\n          c0,1.016-3.5,1.125-4.685,2.098s-0.508,5.078-1.959,4.927c-1.136-0.119-0.339-3.386-1.735-4.697\n          c-1.397-1.312-4.782-1.058-4.782-2.243s3.47-0.466,4.655-1.82C159.121,46.888,158.613,43.291,159.756,43.291z"/><circle fill="#EEEEEE" cx="64.281" cy="31.878" r="5.536"/><circle fill="#EEEEEE" cx="171.417" cy="125.006" r="3.47"/><g><path fill="#FDFDFD" d="M100.126,174.065c9.155,0,17.779-2.667,25.364-7.358l-0.026-9.411c0,0-1.266-16.018-12.946-19.731\n            c-0.181-0.057-3.105,3.145-8.393,2.857l-3.393-1.071c-0.349,0.016-0.726,0.518-1.071,0.536c-0.346-0.017-1.615-1.77-1.964-1.786\n            l-1.786,0.893c-5.287,0.288-8.39-1.646-8.571-1.589c-11.679,3.713-12.554,19.891-12.554,19.891l-0.026,9.411\n            C82.347,171.398,90.97,174.065,100.126,174.065z"/><path fill="#FDFDFD" d="M137.514,106.35c-0.372-20.316-17.62-36.476-38.523-36.092c-20.903,0.383-37.546,17.164-37.174,37.48\n            c0.242,13.194,7.966,26,19.074,33.256l39.922-0.732c9.37-6.916,15.646-18.26,16.585-30.122\n            C137.497,108.881,137.537,107.616,137.514,106.35z M118.707,136.407l-36.769,0.674c-8.589-6.005-14.444-15.821-14.629-25.925\n            c-0.302-16.461,13.823-30.069,31.547-30.394c17.725-0.325,32.339,12.756,32.64,29.217\n            C131.682,120.089,126.685,130.099,118.707,136.407z"/><path fill="#B1AFAE" d="M82.471,138.388l35.433-0.65c7.684-6.302,12.493-16.307,12.307-26.415\n            c-0.302-16.459-14.393-29.548-31.474-29.235c-17.081,0.313-30.683,13.91-30.381,30.369C68.542,122.56,74.19,132.378,82.471,138.388\n            z"/><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="168.2996" y1="102.5265" x2="168.2996" y2="102.5265" gradientTransform="matrix(0.9989 0.0478 -0.0478 0.9989 -99.1255 22.5725)"><stop offset="0.2225" style="stop-color:#FFFFFF"/><stop offset="1" style="stop-color:#D1D3D4"/></linearGradient><path fill="url(#SVGID_1_)" d="M64.081,133.029"/><path fill="#B1AFAE" d="M119.28,142.246c-4.887,3.822-12.339,3.867-19.35,3.959c-7.157,0.094-13.876,0.162-18.971-3.088\n            c-1.624-1.036-2.373-3.443-1.676-3.459l41.601-0.945C121.581,138.696,120.509,141.285,119.28,142.246z"/><path fill="#C8C7C6" d="M68.173,112.474c-0.303-16.539,13.35-30.201,30.494-30.515c17.144-0.315,31.288,12.837,31.591,29.376\n            c0.121,6.633-1.896,13.221-5.457,18.758c4.331-5.82,6.829-12.989,6.696-20.209c-0.303-16.541-14.971-29.685-32.761-29.358\n            c-17.791,0.327-31.967,14-31.664,30.541c0.112,6.098,2.278,12.091,5.858,17.214C70.016,123.48,68.275,118.02,68.173,112.474z"/><path fill="#FFFFFF" d="M119.682,141.473c-4.977,2.186-12.541,2.075-19.627,2.199c-7.232,0.126-13.988,0.445-19.103-1.319\n            c-1.63-0.562-2.363-1.9-1.658-1.916l42.044-0.955C122.043,139.465,120.933,140.923,119.682,141.473z"/><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="202.5092" y1="106.0334" x2="202.5092" y2="106.0334" gradientTransform="matrix(0.9989 0.0478 -0.0478 0.9989 -99.1255 22.5725)"><stop offset="0.2225" style="stop-color:#FFFFFF"/><stop offset="1" style="stop-color:#D1D3D4"/></linearGradient><path fill="url(#SVGID_2_)" d="M98.083,138.167"/><path fill="#C1C1C1" d="M121.439,139.53c0,0.986-0.799,1.786-1.786,1.786H80.369c-0.986,0-1.786-0.799-1.786-1.786l0,0\n            c0-0.986,0.799-1.786,1.786-1.786h39.284C120.639,137.744,121.439,138.544,121.439,139.53L121.439,139.53z"/><path fill="#B1AFAE" d="M110.379,163.06c0,0.443-0.359,0.802-0.802,0.803l-18.895,0.012c-0.443,0-0.802-0.359-0.803-0.802\n            l-0.008-12.79c0-0.443,0.359-0.802,0.802-0.803l18.895-0.012c0.443,0,0.802,0.359,0.803,0.802L110.379,163.06z"/><path fill="#CCCCCC" d="M108.141,161.487c0,0.334-0.28,0.605-0.627,0.605l-14.77,0.009c-0.346,0-0.627-0.27-0.627-0.604\n            l-0.006-9.641c0-0.334,0.28-0.605,0.627-0.605l14.77-0.009c0.346,0,0.627,0.27,0.627,0.604L108.141,161.487z"/><rect x="93.925" y="153.125" fill="#FFFFFF" width="5.373" height="2.155"/><rect x="100.947" y="153.121" fill="#FFFFFF" width="5.373" height="2.155"/><rect x="93.928" y="156.897" fill="#FFFFFF" width="12.394" height="3.323"/><g><path fill="#D8D8D8" d="M77.919,107.6c-3.348-2.219,0.721-8.5,4.179-11.977c3.458-3.477,6.203-4.852,8.942-4.143\n              c1.917,0.496,4.502,4.771-0.062,8.486C85.856,104.135,83.611,111.372,77.919,107.6z"/><circle fill="#D8D8D8" cx="77.466" cy="115.5" r="3.929"/></g></g></svg><div class="info">**COLLECTION_DETAIL_SECRET**</div><input type="text" class="input" mx-keydown="password()" placeholder="**COLLECTION_DETAIL_PASSWORD_PLACEHOLDER**"></div>{{/if}} {{#if(type === 1)}}<div class="collection-detail"><ul class="block-icon-list clearfix">{{#for(icon in icons)}}<li class="J_icon_id_{{icon.id}} {{icon.favor ? \'favor\' : \'\'}}"><div class="icon-twrap" t-class:tbackground="icon.show_svg | tbackground">{{{icon.show_svg}}}</div><span class="icon-name" title="{{icon.name}}">{{icon.name}}</span><div class="icon-cover"><span mx-click="car({id:{{icon.id}},index:{{__INDEX__}}})" data-spm-click="gostr=/alimama.30;locaid=ddbafce52" title="**COMMON_ADD_TO_CAR**" class="cover-item iconfont cover-item-line icon-gouwuche1"></span> <span data-login mx-click="toggleFavor({id:{{icon.id}},index:{{__INDEX__}}})" data-spm-click="gostr=/alimama.30;locaid=dc1455f4f" title="**COMMON_LIKE_ICON**" class="cover-item iconfont cover-item-line icon-shoucang1"></span> <span data-login="true" mx-click="downloadIcon({id:{{icon.id}},index:{{__INDEX__}}})" data-spm-click="gostr=/alimama.30;locaid=dd962f461" title="**COMMON_DOWN_ICON**" class="cover-item iconfont cover-item-line icon-xiazai"></span></div></li>{{/for}}</ul>{{#if(icons.length === 0)}}<div class="block-no-results"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="170px" height="170px" viewBox="0 0 200 200" enable-background="new 0 0 200 200" xml:space="preserve"><g><path fill="#EEEEEE" d="M18.224,35.559c0,0,0.38-0.042,0.592,0.211s0.465,3.804,1.395,4.776s4.692,0.423,4.692,1.691\n                    c0,1.014-3.496,1.124-4.68,2.096c-1.184,0.972-0.507,5.072-1.957,4.921c-1.135-0.119-0.338-3.381-1.733-4.692\n                    s-4.776-1.057-4.776-2.24s3.466-0.465,4.65-1.818C17.59,39.152,17.083,35.559,18.224,35.559z"/><path fill="#B1AFAE" d="M7.726,77.11c0,0,0.23-0.026,0.357,0.128c0.128,0.153,0.281,2.296,0.842,2.883s2.832,0.255,2.832,1.02\n                    c0,0.612-2.11,0.678-2.824,1.265c-0.714,0.587-0.306,3.061-1.181,2.97c-0.685-0.072-0.204-2.041-1.046-2.832\n                    c-0.842-0.791-2.883-0.638-2.883-1.352s2.092-0.281,2.806-1.097C7.343,79.279,7.037,77.11,7.726,77.11z"/><path fill="#EEEEEE" d="M190.447,56.933c0,0,0.261-0.029,0.406,0.145s0.319,2.608,0.956,3.274c0.637,0.666,3.216,0.29,3.216,1.159\n                    c0,0.695-2.396,0.77-3.208,1.437c-0.811,0.666-0.348,3.477-1.341,3.373c-0.778-0.081-0.232-2.318-1.188-3.216\n                    c-0.956-0.898-3.274-0.724-3.274-1.536s2.376-0.319,3.187-1.246C190.013,59.396,189.665,56.933,190.447,56.933z"/><path fill="#B1AFAE" d="M154.66,25.617c0,0,0.261-0.029,0.406,0.145c0.145,0.174,0.319,2.608,0.956,3.274\n                    c0.637,0.666,3.216,0.29,3.216,1.159c0,0.695-2.396,0.77-3.208,1.437c-0.811,0.666-0.348,3.477-1.341,3.373\n                    c-0.778-0.081-0.232-2.318-1.188-3.216c-0.956-0.898-3.274-0.724-3.274-1.536s2.376-0.319,3.187-1.246\n                    C154.226,28.08,153.878,25.617,154.66,25.617z"/><circle fill="#EEEEEE" cx="56.234" cy="19.989" r="3.79"/><circle fill="#EEEEEE" cx="178.362" cy="75.509" r="2.376"/></g><circle fill="#EEEEEE" cx="95.662" cy="104.843" r="77.333"/><path fill="#FDFDFD" d="M145.856,131.98c-0.023,3.196-2.633,5.769-5.829,5.746l-89.136-0.146c-3.196-0.023-5.769-2.633-5.746-5.829\n                  l0.431-56.782c0.023-3.196,2.633-5.769,5.829-5.746l72.81,0.029c5.893,5.294,13.625,12.765,21.971,19.869L145.856,131.98z"/><path fill="#D8D8D8" d="M146.469,87.616c-0.026,1.112-0.949,1.992-2.061,1.966l-19.059-0.448c-1.112-0.026-1.992-0.949-1.966-2.061\n                  l0.381-16.217c0.026-1.112,0.949-1.992,2.061-1.966L146.469,87.616z"/><circle fill="#EEEEEE" cx="117.299" cy="128.428" r="18.247"/><path fill="#FFFFFF" d="M117.412,148.245c2.241,0,4.352-0.653,6.209-1.801l-0.006-2.304c0,0-0.31-3.921-3.169-4.83\n                  c-0.044-0.014-0.76,0.77-2.055,0.699l-0.831-0.262c-0.085,0.004-0.178,0.127-0.262,0.131c-0.085-0.004-0.395-0.433-0.481-0.437\n                  l-0.437,0.219c-1.294,0.071-2.054-0.403-2.098-0.389c-2.859,0.909-3.073,4.869-3.073,4.869l-0.006,2.304\n                  C113.06,147.592,115.171,148.245,117.412,148.245z"/><path fill="#FFFFFF" d="M126.565,131.668c-0.091-4.974-4.313-8.929-9.431-8.836c-5.117,0.094-9.192,4.202-9.1,9.175\n                  c0.059,3.23,1.95,6.365,4.669,8.141l9.773-0.179c2.294-1.693,3.83-4.47,4.06-7.374C126.561,132.288,126.57,131.978,126.565,131.668z\n                   M121.961,139.026l-9.001,0.165c-2.103-1.47-3.536-3.873-3.581-6.347c-0.074-4.03,3.384-7.361,7.723-7.441\n                  c4.339-0.08,7.917,3.123,7.991,7.153C125.137,135.032,123.914,137.482,121.961,139.026z"/><path fill="#B1AFAE" d="M113.09,139.511l8.674-0.159c1.881-1.543,3.058-3.992,3.013-6.467c-0.074-4.029-3.523-7.233-7.705-7.157\n                  c-4.181,0.077-7.511,3.405-7.437,7.434C109.68,135.636,111.063,138.04,113.09,139.511z"/><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="213.0032" y1="105.5631" x2="213.0032" y2="105.5631" gradientTransform="matrix(0.9989 0.0478 -0.0478 0.9989 -99.1255 22.5725)"><stop offset="0.2225" style="stop-color:#FFFFFF"/><stop offset="1" style="stop-color:#D1D3D4"/></linearGradient><path fill="url(#SVGID_1_)" d="M108.588,138.199"/><path fill="#B1AFAE" d="M122.101,140.456c-1.196,0.936-3.021,0.947-4.737,0.969c-1.752,0.023-3.397,0.04-4.644-0.756\n                  c-0.398-0.254-0.581-0.843-0.41-0.847l10.184-0.231C122.665,139.587,122.402,140.221,122.101,140.456z"/><path fill="#C8C7C6" d="M109.59,133.167c-0.074-4.049,3.268-7.393,7.465-7.47c4.197-0.077,7.659,3.143,7.734,7.191\n                  c0.03,1.624-0.464,3.237-1.336,4.592c1.06-1.425,1.672-3.18,1.639-4.947c-0.074-4.049-3.665-7.267-8.02-7.187\n                  c-4.355,0.08-7.826,3.427-7.752,7.477c0.027,1.493,0.558,2.96,1.434,4.214C110.041,135.862,109.615,134.525,109.59,133.167z"/><path fill="#FFFFFF" d="M122.199,140.266c-1.218,0.535-3.07,0.508-4.805,0.538c-1.771,0.031-3.424,0.109-4.676-0.323\n                  c-0.399-0.138-0.578-0.465-0.406-0.469l10.293-0.234C122.778,139.775,122.506,140.132,122.199,140.266z"/><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="221.3779" y1="106.4216" x2="221.3779" y2="106.4216" gradientTransform="matrix(0.9989 0.0478 -0.0478 0.9989 -99.1255 22.5725)"><stop offset="0.2225" style="stop-color:#FFFFFF"/><stop offset="1" style="stop-color:#D1D3D4"/></linearGradient><path fill="url(#SVGID_2_)" d="M116.912,139.457"/><path fill="#C1C1C1" d="M122.63,139.791c0,0.241-0.196,0.437-0.437,0.437h-9.617c-0.241,0-0.437-0.196-0.437-0.437l0,0\n                  c0-0.241,0.196-0.437,0.437-0.437h9.617C122.434,139.354,122.63,139.549,122.63,139.791L122.63,139.791z"/><path fill="#B1AFAE" d="M119.922,145.551c0,0.108-0.088,0.196-0.196,0.196l-4.626,0.003c-0.108,0-0.196-0.088-0.196-0.196\n                  l-0.002-3.131c0-0.108,0.088-0.196,0.196-0.196l4.626-0.003c0.108,0,0.196,0.088,0.196,0.196L119.922,145.551z"/><path fill="#CCCCCC" d="M119.374,145.166c0,0.082-0.069,0.148-0.153,0.148l-3.616,0.002c-0.085,0-0.154-0.066-0.154-0.148\n                  l-0.001-2.36c0-0.082,0.069-0.148,0.153-0.148l3.616-0.002c0.085,0,0.154,0.066,0.154,0.148L119.374,145.166z"/><rect x="115.894" y="143.119" fill="#FFFFFF" width="1.315" height="0.527"/><rect x="117.613" y="143.118" fill="#FFFFFF" width="1.315" height="0.527"/><rect x="115.895" y="144.042" fill="#FFFFFF" width="3.034" height="0.813"/><g><path fill="#D8D8D8" d="M111.976,131.974c-0.82-0.543,0.176-2.081,1.023-2.932s1.519-1.188,2.189-1.014\n                    c0.469,0.122,1.102,1.168-0.015,2.077C113.919,131.126,113.369,132.898,111.976,131.974z"/><circle fill="#D8D8D8" cx="111.865" cy="133.908" r="0.962"/></g><path fill="#D8D8D8" d="M112.247,85.099c0,1.057-0.857,1.913-1.913,1.913H59.158c-1.057,0-1.913-0.857-1.913-1.913l0,0\n                  c0-1.057,0.857-1.913,1.913-1.913h51.175C111.39,83.186,112.247,84.042,112.247,85.099L112.247,85.099z"/><path fill="#D8D8D8" d="M83.201,98.717c0,1.057-0.857,1.913-1.913,1.913H59.158c-1.057,0-1.913-0.857-1.913-1.913l0,0\n                  c0-1.057,0.857-1.913,1.913-1.913h22.129C82.344,96.804,83.201,97.66,83.201,98.717L83.201,98.717z"/><path fill="#D8D8D8" d="M83.201,112.335c0,1.057-0.857,1.913-1.913,1.913H59.158c-1.057,0-1.913-0.857-1.913-1.913l0,0\n                  c0-1.057,0.857-1.913,1.913-1.913h22.129C82.344,110.422,83.201,111.278,83.201,112.335L83.201,112.335z"/><path fill="#D8D8D8" d="M141.451,148.653c-0.669-0.798-1.858-0.902-2.656-0.234l-0.003,0.003l-2.983-3.559\n                  c3.835-4.361,6.162-10.08,6.162-16.344c0-13.675-11.086-24.76-24.76-24.76c-13.675,0-24.76,11.086-24.76,24.76\n                  c0,13.675,11.086,24.76,24.76,24.76c5.177,0,9.983-1.59,13.957-4.307l2.876,3.43l-0.003,0.003c-0.798,0.669-0.902,1.858-0.234,2.656\n                  l9.153,10.918c2.63-2.047,5.132-4.249,7.475-6.612L141.451,148.653z M117.149,146.768c-10.078,0-18.247-8.17-18.247-18.248\n                  c0-10.078,8.17-18.247,18.247-18.247c10.078,0,18.248,8.17,18.248,18.247C135.397,138.598,127.227,146.768,117.149,146.768z"/></svg><div class="message">**COMMON_NO_RESULT**</div></div>{{/if}}</div>{{/if}}<div class="detail-tip"><div class="detail-msg">**MONEY_LOVE**</div></div><div class="block-radius-btns"><div mx-view="app/views/common/radius_btns" mx-options="{type:\'user\',code:\'{{creator.alipay_code}}\',avatar: \'{{creator.avatar}}\',hidesearch: \'true\', is_favorite: {{is_favorite}}, is_like: \'true\'}"></div></div></div><div mx-view="app/views/common/comment" mx-options="{{commentObj}}"></div></div>',
        ctor: function() {
            this.observe(['cid', 'keyword', 'show_icon_id'])
        },
        _render: function(c) {
            var i = this
            i.param('show_icon_id') &&
                (n.showDownloadDialog({ iconId: parseInt(i.param('show_icon_id')) }),
                    n.globalDialog.on('destroy', function() {
                        i.to({ show_icon_id: '' })
                    })),
                (i.data = {
                    collection: c.collection,
                    creator: c.creator,
                    cid: i.param('cid'),
                    type: c.type,
                    link: window.location.href,
                    is_favorite: c.is_favorite,
                    commentObj: JSON.stringify({
                        linkId: i.param('cid'),
                        type: 'collection',
                    }),
                }),
                (c.icons = c.icons || []),
                (i.data.icons = n.filter(c.icons, function(c) {
                    return new RegExp(i.param('keyword')).test(c.name)
                })),
                i
                .setView(function() {})
                .then(function() {
                    l.Vframe.get('magix_vf_car').invoke('domSelected')
                })
        },
        render: function() {
            var a,
                l,
                t = this
            t.rendered && t._beforedata ?
                t._render(t._beforedata) :
                ((a = t.param('cid')),
                    (l = t.param('spm') || ''),
                    t
                    .request()
                    .all(
                        [{ name: 'collection_detail', params: { id: a } }],
                        function(c, i) {
                            i = i.get('data')
                            'illustration' !== i.collection.type ?
                                ((t._beforedata = i), t._render(i)) :
                                t.to('/illustrations/detail?spm=' + l + '&cid=' + a)
                        }
                    ))
        },
        'password<keydown>': function(c) {
            13 === c.originalEvent.keyCode &&
                ((c = e(c.target).val()),
                    this.request().all(
                        [{
                            name: 'collection_password',
                            params: { password: c, collectionId: this.data.cid },
                        }, ],
                        function(c, i) {
                            window.location.reload()
                        }
                    ))
        },
        'car<click>': function(c) {
            var i = c.params.index,
                i = this.data.icons[i],
                c = e(c.target).parents('li')
            c.hasClass('selected') ?
                (l.Vframe.get('magix_vf_car').invoke('removeIcon', i),
                    c.removeClass('selected')) :
                (l.Vframe.get('magix_vf_car').invoke('addIcon', i),
                    c.addClass('selected')),
                this.setView()
        },
        'downloadIcon<click>': function(c) {
            c = c.params.id
            n.showDownloadDialog({ iconId: c })
        },
        'toggleFavor<click>': function(c) {
            var i = c.params.id,
                a = e(c.target).parents('li')
            a.hasClass('favor') ?
                this.wrapModel(t).cancelFavor(i, function(c) {
                    a.removeClass('favor')
                }) :
                this.wrapModel(t).addFavor(i, function(c) {
                    a.addClass('favor')
                })
        },
    })
})