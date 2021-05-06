define('app/views/common/car', [
    'magix',
    'app/exts/helper',
    'app/models/manage/index',
    'app/exts/colorpicker/index',
    'app/i18n/index',
    'jquery',
], function(c, a, s) {
    var i = c('magix'),
        o = c('app/exts/helper'),
        e = c('app/models/manage/index'),
        t = c('app/exts/colorpicker/index'),
        l = c('app/i18n/index'),
        n = c('jquery'),
        r = o.CAR_ICON_KEY,
        d = o.HISTORY_COLOR_KEY,
        p = o.LAST_COLOR_KEY,
        m = o.LAST_SIZE_KEY,
        h = [
            'd81e06',
            'f4ea2a',
            '1afa29',
            '1296db',
            '13227a',
            'd4237a',
            'ffffff',
            'e6e6e6',
            'dbdbdb',
            'cdcdcd',
            'bfbfbf',
            '8a8a8a',
            '707070',
            '515151',
            '2c2c2c',
            '000000',
            'ea986c',
            'eeb174',
        ]
    s.exports = i.View.extend({
        tmpl: '<div class="block-car-container" id="J_block_car_container"><div class="car-top clearfix"><span class="top-back iconfont" mx-click="toggleShow()" data-spm-click="gostr=/alimama.30;locaid=d45c2f452">&#xe60a;</span> <span class="top-btn-car iconfont">&#xe63c; <span class="car-count">{{lists.length}}</span> </span><span class="top-btn-wrap" mx-click="clear()" data-spm-click="gostr=/alimama.30;locaid=dacb7aa35"><span class="iconfont">&#xe673;</span> **CAR_REMOVE_ALL**</span></div><div class="icons-container"><ul class="block-icon-list clearfix">{{#for(icon in lists)}}<li><div class="icon-twrap" t-class:tbackground="icon.show_svg | tbackground">{{{icon.show_svg}}}</div><span class="icon-name" title="{{icon.name}}">{{*icon.name}}</span> <span class="icon-cover" mx-click="remove({{icon.id}})" data-spm-click="gostr=/alimama.30;locaid=d60b282cc"><span title="delete" class="cover-center iconfont">&#xe643;</span></span></li>{{/for}}</ul>{{#if(!lists.length)}} <svg class="no-result" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="200px" height="200px" viewBox="0 0 200 200" enable-background="new 0 0 200 200" xml:space="preserve"><path fill="#EEEEEE" d="M23.245,35.309c0,0,0.374-0.042,0.582,0.208c0.208,0.249,0.457,3.739,1.371,4.694s4.611,0.415,4.611,1.662\n  c0,0.997-3.436,1.104-4.599,2.06c-1.163,0.955-0.499,4.985-1.923,4.836c-1.116-0.117-0.332-3.323-1.703-4.611\n  c-1.371-1.288-4.694-1.039-4.694-2.202s3.407-0.457,4.57-1.786C22.622,38.84,22.124,35.309,23.245,35.309z"/><path fill="#B1AFAE" d="M12.928,76.147c0,0,0.226-0.025,0.351,0.125c0.125,0.15,0.276,2.257,0.827,2.833\n  c0.552,0.577,2.783,0.251,2.783,1.003c0,0.602-2.074,0.666-2.776,1.243s-0.301,3.009-1.161,2.919\n  c-0.673-0.07-0.201-2.006-1.028-2.783s-2.833-0.627-2.833-1.329c0-0.702,2.056-0.276,2.758-1.078\n  C12.552,78.278,12.251,76.147,12.928,76.147z"/><path fill="#EEEEEE" d="M188.084,55.984c0,0,0.256-0.028,0.399,0.142s0.313,2.563,0.94,3.218c0.626,0.655,3.161,0.285,3.161,1.139\n  c0,0.683-2.355,0.757-3.153,1.412c-0.797,0.655-0.342,3.417-1.318,3.315c-0.765-0.08-0.228-2.278-1.167-3.161\n  s-3.218-0.712-3.218-1.509c0-0.797,2.335-0.313,3.132-1.224C187.657,58.404,187.316,55.984,188.084,55.984z"/><path fill="#B1AFAE" d="M157.34,25.538c0,0,0.256-0.028,0.399,0.142s0.313,2.563,0.94,3.218c0.626,0.655,3.161,0.285,3.161,1.139\n  c0,0.683-2.355,0.757-3.153,1.412c-0.797,0.655-0.342,3.417-1.318,3.315c-0.765-0.08-0.228-2.278-1.167-3.161\n  c-0.94-0.883-3.218-0.712-3.218-1.509c0-0.797,2.335-0.313,3.132-1.224C156.912,27.958,156.571,25.538,157.34,25.538z"/><circle fill="#E6E6E6" cx="60.603" cy="20.006" r="3.725"/><circle fill="#E6E6E6" cx="180.634" cy="83.55" r="2.335"/><circle fill="#EEEEEE" cx="95.29" cy="106.237" r="76.665"/><path fill="#FDFDFD" d="M92.688,104.799c3.957,0,7.684-1.153,10.963-3.18l-0.011-4.067c0,0-0.547-6.923-5.595-8.528\n  c-0.078-0.025-1.342,1.359-3.627,1.235l-1.466-0.463c-0.151,0.007-0.314,0.224-0.463,0.232c-0.149-0.008-0.698-0.765-0.849-0.772\n  l-0.772,0.386c-2.285,0.125-3.626-0.711-3.704-0.687c-5.048,1.605-5.426,8.597-5.426,8.597l-0.011,4.067\n  C85.004,103.646,88.731,104.799,92.688,104.799z"/><path fill="#FDFDFD" d="M108.848,75.532c-0.161-8.781-7.615-15.765-16.65-15.599c-9.034,0.166-16.228,7.418-16.067,16.199\n  c0.105,5.703,3.443,11.237,8.244,14.373l17.254-0.316c4.05-2.989,6.762-7.892,7.168-13.019\n  C108.841,76.626,108.858,76.08,108.848,75.532z M100.719,88.523l-15.892,0.291c-3.712-2.595-6.243-6.838-6.323-11.205\n  c-0.13-7.115,5.974-12.996,13.635-13.136c7.661-0.14,13.977,5.513,14.107,12.628C106.327,81.47,104.168,85.797,100.719,88.523z"/><path fill="#B1AFAE" d="M85.058,89.379l15.314-0.281c3.321-2.724,5.399-7.048,5.319-11.417c-0.13-7.114-6.221-12.771-13.603-12.635\n  c-7.382,0.135-13.261,6.012-13.131,13.126C79.038,82.538,81.479,86.782,85.058,89.379z"/><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="179.116" y1="55.9906" x2="179.116" y2="55.9906" gradientTransform="matrix(0.9989 0.0478 -0.0478 0.9989 -99.1255 22.5725)"><stop offset="0.2225" style="stop-color:#FFFFFF"/><stop offset="1" style="stop-color:#D1D3D4"/></linearGradient><path fill="url(#SVGID_1_)" d="M77.11,87.063"/><path fill="#B1AFAE" d="M100.967,91.047c-2.112,1.652-5.333,1.671-8.363,1.711c-3.093,0.041-5.997,0.07-8.199-1.335\n  c-0.702-0.448-1.026-1.488-0.724-1.495l17.98-0.409C101.962,89.513,101.498,90.632,100.967,91.047z"/><path fill="#E7E7E7" d="M78.878,78.179c-0.131-7.148,5.77-13.053,13.179-13.189c7.41-0.136,13.523,5.548,13.654,12.696\n  c0.052,2.867-0.819,5.714-2.359,8.107c1.872-2.515,2.951-5.614,2.894-8.735c-0.131-7.149-6.47-12.83-14.16-12.689\n  c-7.689,0.141-13.816,6.051-13.685,13.2c0.048,2.636,0.985,5.226,2.532,7.44C79.675,82.936,78.922,80.576,78.878,78.179z"/><path fill="#FFFFFF" d="M101.141,90.713c-2.151,0.945-5.42,0.897-8.483,0.95c-3.126,0.054-6.046,0.192-8.256-0.57\n  c-0.705-0.243-1.021-0.821-0.717-0.828l18.172-0.413C102.161,89.845,101.681,90.475,101.141,90.713z"/><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="193.9015" y1="57.5063" x2="193.9015" y2="57.5063" gradientTransform="matrix(0.9989 0.0478 -0.0478 0.9989 -99.1255 22.5725)"><stop offset="0.2225" style="stop-color:#FFFFFF"/><stop offset="1" style="stop-color:#D1D3D4"/></linearGradient><path fill="url(#SVGID_2_)" d="M91.806,89.284"/><path fill="#C1C1C1" d="M101.9,89.873c0,0.426-0.346,0.772-0.772,0.772H84.149c-0.426,0-0.772-0.346-0.772-0.772l0,0\n  c0-0.426,0.346-0.772,0.772-0.772h16.979C101.554,89.101,101.9,89.447,101.9,89.873L101.9,89.873z"/><path fill="#B1AFAE" d="M97.12,100.043c0,0.191-0.155,0.347-0.346,0.347l-8.166,0.005c-0.191,0-0.347-0.155-0.347-0.346\n  l-0.003-5.528c0-0.191,0.155-0.347,0.346-0.347l8.166-0.005c0.191,0,0.347,0.155,0.347,0.346L97.12,100.043z"/><path fill="#CCCCCC" d="M96.153,99.363c0,0.144-0.121,0.261-0.271,0.262l-6.384,0.004c-0.15,0-0.271-0.117-0.271-0.261L89.224,95.2\n  c0-0.144,0.121-0.261,0.271-0.262l6.384-0.004c0.15,0,0.271,0.117,0.271,0.261L96.153,99.363z"/><rect x="90.009" y="95.749" fill="#FFFFFF" width="2.322" height="0.931"/><rect x="93.043" y="95.747" fill="#FFFFFF" width="2.322" height="0.931"/><rect x="90.01" y="97.379" fill="#FFFFFF" width="5.357" height="1.436"/><path fill="#D8D8D8" d="M83.091,76.073c-1.447-0.959,0.312-3.674,1.806-5.176c1.495-1.503,2.681-2.097,3.865-1.791\n  c0.829,0.215,1.946,2.062-0.027,3.668C86.521,74.575,85.551,77.703,83.091,76.073z"/><circle fill="#D8D8D8" cx="82.895" cy="79.487" r="1.698"/><path fill="#FDFDFD" d="M141.741,75.271H130.45c-0.69,0-1.334,0.177-1.912,0.464c-1.36,0.309-2.819,2.239-3.509,4.821l-5.991,22.43\n  c-0.821,3.073-0.241,5.897,1.296,6.307l1.072,0.286c1.537,0.41,3.447-1.748,4.268-4.821l5.566-20.837h10.502\n  c2.389,0,4.326-1.937,4.326-4.326C146.067,77.208,144.13,75.271,141.741,75.271z"/><path fill="#D8D8D8" d="M127.105,104.533l0.556-4.525c0-1.541-1.56-2.79-3.484-2.79H94.099h-3.011H61.009\n  c-1.924,0-3.484,1.249-3.484,2.79l0.556,4.525H127.105z"/><path fill="#D8D8D8" d="M61.116,129.646l0.538,4.041c0,1.541,1.56,2.79,3.484,2.79H91.06h3.067h25.921\n  c1.924,0,3.484-1.249,3.484-2.79l0.538-4.041H61.116z"/><polygon fill="#FDFDFD" points="61.169,129.646 124.018,129.646 127.105,104.533 58.081,104.533 "/><circle fill="#FDFDFD" cx="73.704" cy="145.516" r="5.421"/><circle fill="#FDFDFD" cx="111.115" cy="145.516" r="5.421"/><g><path fill="#D8D8D8" d="M80.199,111.864h-1.504v-1.623h1.504V111.864z M80.199,121.901h-1.504v-8.438h1.504V121.901z"/><path fill="#D8D8D8" d="M85.83,122.099c-1.198,0-2.156-0.386-2.875-1.157c-0.719-0.772-1.077-1.857-1.077-3.257\n    c0-1.405,0.359-2.492,1.077-3.261c0.719-0.769,1.677-1.153,2.875-1.153c0.923,0,1.693,0.233,2.311,0.7\n    c0.618,0.466,0.982,1.14,1.094,2.02h-1.543c-0.021-0.504-0.211-0.888-0.569-1.153c-0.358-0.266-0.789-0.398-1.293-0.398\n    c-0.716,0-1.296,0.272-1.741,0.815c-0.445,0.543-0.669,1.353-0.669,2.43c0,1.071,0.223,1.878,0.669,2.422\n    c0.445,0.544,1.025,0.815,1.741,0.815c0.504,0,0.935-0.133,1.293-0.398c0.358-0.265,0.547-0.647,0.569-1.145h1.543\n    c-0.112,0.88-0.476,1.554-1.094,2.02C87.523,121.866,86.752,122.099,85.83,122.099z"/><path fill="#D8D8D8" d="M93.973,113.271c1.204,0,2.165,0.385,2.884,1.153c0.718,0.769,1.077,1.856,1.077,3.261\n    c0,1.4-0.36,2.485-1.077,3.257c-0.719,0.771-1.68,1.157-2.884,1.157c-1.198,0-2.156-0.386-2.875-1.157\n    c-0.719-0.772-1.077-1.857-1.077-3.257c0-1.405,0.359-2.492,1.077-3.261C91.818,113.656,92.776,113.271,93.973,113.271z\n     M93.973,120.923c0.717,0,1.297-0.272,1.742-0.815c0.445-0.543,0.668-1.351,0.668-2.422c0-1.076-0.222-1.886-0.668-2.43\n    c-0.445-0.543-1.025-0.815-1.742-0.815c-0.716,0-1.296,0.272-1.741,0.815c-0.445,0.543-0.669,1.353-0.669,2.43\n    c0,1.071,0.223,1.878,0.669,2.422C92.678,120.651,93.258,120.923,93.973,120.923z"/><path fill="#D8D8D8" d="M101.115,114.536c0.747-0.843,1.588-1.265,2.521-1.265c1.904,0,2.855,1.037,2.855,3.11v5.519h-1.503v-5.456\n    c0-0.69-0.123-1.185-0.37-1.487s-0.651-0.454-1.213-0.454c-0.764,0-1.527,0.451-2.291,1.352v6.044h-1.504v-8.438h1.504V114.536z"/></g></svg><div class="no-result-message">**CAR_NO_ICONS_MSG**</div>{{/if}}</div><div class="car-bottom"><span class="btn btn-normal btn-large" t-class:btn-disabled="lists.length === 0" mx-click="showSucai()" data-spm-click="gostr=/alimama.30;locaid=dee43f976">**CAR_DOWNLOAD_COLLECTION**</span> <span class="btn btn-normal btn-large" t-class:btn-disabled="lists.length === 0" mx-click="downloadCode()" data-spm-click="gostr=/alimama.30;locaid=dd261a61e" data-login="true">**CAR_DOWNLOAD_CODE**</span></div><div class="car-mask"><div class="car-manage"><div class="car-manage-container car-manage-project" id="J_car_manage_project"><div class="project-history"><div class="car-manage-top"><span class="car-manage-title">**CAR_ADD_PROJECT_TITLE**</span> <span class="iconfont right-icon" mx-click="showAddProject()" data-spm-click="gostr=/alimama.30;locaid=d002668fa">&#xe639;</span></div><div class="car-manage-content">{{#if(projects && projects.length > 0)}}<ul class="car-project-wrap">{{#for(project in projects)}}<li class="car-project-item" t-class:current="selectedProjectId && selectedProjectId == project.id" mx-click="selectProject({{project.id}})" data-spm-click="gostr=/alimama.30;locaid=d0225b4e4"><em class="iconfont">&#xe635;</em> {{project.name}}</li>{{/for}}</ul>{{/if}} {{^if(projects && projects.length > 0)}}<div style="color: #999;text-align: center;margin-top: 30px;line-height: 30px">\u8fd8\u6ca1\u6709\u9879\u76ee\u5462<br>\u70b9\u51fb\u53f3\u4e0a\u89d2\u65b0\u5efa\u7b2c\u4e00\u4e2a\u9879\u76ee\u5427</div>{{/if}}</div></div><div class="project-new"><div class="car-manage-top"><span class="car-manage-title">**CAR_ADD_PROJECT_TITLE_NEW**</span> <span class="iconfont right-icon" mx-click="hideAddProject()" data-spm-click="gostr=/alimama.30;locaid=d9923bbd3">&#xe60b;</span></div><div class="car-manage-content"><input class="car-project-input input" type="text" value="" t-model="newProjectName" placeholder="**CAR_NEW_PROJECT_NAME_PLACEHOLDER**"/></div></div><div class="car-manage-bottom"><span class="btn btn-normal" mx-click="submitProject()" data-spm-click="gostr=/alimama.30;locaid=dc17f1c0a">**COMMON_CONFIRM**</span> <span class="btn btn-normal" mx-click="hideMask()" data-spm-click="gostr=/alimama.30;locaid=d09d03833">**COMMON_CANCEL**</span> {{#if(errorMsg)}} <span class="error-msg">{{errorMsg}}</span> {{/if}}</div></div><div class="car-manage-container car-manage-sucai"><span mx-click="hideMask()" data-spm-click="gostr=/alimama.30;locaid=df43ec38e" class="hide-arrow iconfont">&#xe60b;</span><div class="car-manage-top"><span class="car-manage-title">**COMMON_DOWNLOAD**</span></div><div class="car-manage-content block-color-manage"><ul class="color-block-lists clearfix mt10">{{#for(c in mostUseColors)}}<li class="color-block" style="background:#{{*c}}" mx-click="selectColor()" data-spm-click="gostr=/alimama.30;locaid=d0ff0c692">{{*c}}</li>{{/for}}</ul><ul class="color-block-lists clearfix mt10">{{#for(c in historyUseColors)}}<li class="color-block" style="background:#{{*c}}" mx-click="selectColor()" data-spm-click="gostr=/alimama.30;locaid=d74a36e15">{{*c}}</li>{{/for}}</ul><div class="manage-mid-wrap"><span class="color-picker-wrap"><input class="input pick-input" value="{{selectedColor || 333}}" mx-focusout="changeColor()" mx-keydown="changeColor()" type="text"/> <span id="J_color_pick" class="color-picker-item" style="background:#{{selectedColor}}" mx-click="showPicker()" data-spm-click="gostr=/alimama.30;locaid=dc908a2a7"></span> </span><span class="size-pick-wrap" id="J_size_pick_wrap"><input class="input size-input" type="text" t-model="selectedSize"/> <span class="arrow-down iconfont">&#xe607;</span><ul class="size-select"><li class="size-item">16</li><li class="size-item">32</li><li class="size-item">48</li><li class="size-item">64</li><li class="size-item">128</li></ul></span></div></div><div class="car-manage-bottom"><span class="btn btn-normal" data-login="true" mx-click="downIcon(\'svg\')" data-spm-click="gostr=/alimama.30;locaid=d5c5bcba5">SVG</span> <span class="btn btn-normal" data-login="true" mx-click="downIcon(\'eps\')" data-spm-click="gostr=/alimama.30;locaid=d98af1659">AI</span> <span class="btn btn-normal" data-login="true" mx-click="downIcon(\'png\')" data-spm-click="gostr=/alimama.30;locaid=d4f15a26a">PNG</span><iframe name="down-iframe" style="display:none"></iframe></div></div></div></div></div>',
        render: function() {
            var c = o.getItem(r) || [],
                a = this
            n('#J_icon_car_count').html(c.length),
                (this.data = {
                    selectedColor: o.getItem(p) || '333333',
                    selectedSize: o.getItem(m) || 200,
                    selectedProjectId: -1,
                    errorMsg: '',
                    newProjectName: '',
                    lists: c,
                    projects: [],
                    mostUseColors: h,
                    historyUseColors: o.getItem(d) || [],
                    isProjectLoading: !0,
                }),
                this.setView().then(function() {
                    a.listSizeCheck()
                })
        },
        listSizeCheck: function() {
            var a = this
            n('#J_size_pick_wrap .size-input').on('click', function(c) {
                    n('#J_size_pick_wrap').addClass('show-size-select')
                }),
                n('#J_size_pick_wrap .arrow-down').on('click', function(c) {
                    n('#J_size_pick_wrap').addClass('show-size-select')
                }),
                n(document.body).on('click', function(c) {
                    n('#J_size_pick_wrap .size-input')[0] !== c.target &&
                        (n('#J_size_pick_wrap').has(c.target).length ||
                            n('#J_size_pick_wrap').removeClass('show-size-select'))
                }),
                n('#J_size_pick_wrap .size-item').on('click', function(c) {
                    c.preventDefault(),
                        n('#J_size_pick_wrap').removeClass('show-size-select')
                    c = parseInt(c.target.innerHTML);
                    (a.data.selectedSize = c), a.setView()
                })
        },
        domSelected: function() {
            n.each(this.data.lists, function(c, a) {
                n('.J_icon_id_' + a.id).addClass('selected')
            })
        },
        addIcon: function(c) {
            this._addIcon(c), this.syncIcons()
        },
        _addIcon: function(s) {
            var c = this,
                t = -1
            n.each(c.data.lists, function(c, a) {
                a.id === s.id && (t = c)
            })
            var a = {
                id: s.id,
                show_svg: s.show_svg,
                name: s.name,
                projectId: s.projectId || -1,
            }; - 1 !== t ? c.data.lists.splice(t, 1, a) : c.data.lists.push(a)
        },
        banchAddIcons: function(c) {
            var s = this,
                c = c.icons
            c &&
                0 !== c.length &&
                (n.each(c, function(c, a) {
                        s._addIcon(a)
                    }),
                    s.syncIcons())
        },
        removeIcon: function(s) {
            var c = this,
                t = -1
            n.each(c.data.lists, function(c, a) {
                    a.id === s.id && (t = c)
                }), -1 !== t && c.data.lists.splice(t, 1),
                c.syncIcons()
        },
        clearIcon: function() {;
            (this.data.lists = []), this.syncIcons()
        },
        syncIcons: function() {
            o.setItem(r, this.data.lists),
                n('#J_icon_car_count')
                .html(this.data.lists.length)
                .addClass('count-ani'),
                setTimeout(function() {
                    n('#J_icon_car_count').removeClass('count-ani')
                }, 900),
                n('#J_icon_sidebar_count') &&
                (n('#J_icon_sidebar_count')
                    .html(this.data.lists.length)
                    .addClass('count-ani'),
                    setTimeout(function() {
                        n('#J_icon_sidebar_count').removeClass('count-ani')
                    }, 900)),
                this.setView()
        },
        toggleShow: function() {
            var a = this,
                c = n('html'),
                s = n('#magix_vf_car .block-car-container')
            s.toggleClass('show')
            var t,
                e = 'car-mask' + this.id
            s.hasClass('show') ?
                ((t = n(window).width()),
                    c.addClass('dialog-lock-hide'),
                    (s = n(window).width()),
                    c.css('margin-right', s - t),
                    n(
                        '<div class="' +
                        e +
                        '" style="width:100%;height:100%;position:fixed;z-index:1000;left:0;top:0;background: #0d0a31 !important;opacity: 0.9 !important;"></div>'
                    ).appendTo(n('body')),
                    n('.' + e).on('click', function(c) {
                        a.toggleShow()
                    })) :
                (c.css('margin-right', '0'),
                    c.removeClass('dialog-lock-hide'),
                    n('.' + e).remove())
        },
        'remove<click>': function(c) {
            c = c.params
            this.removeIcon({
                    id: c,
                }),
                n('.J_icon_id_' + c).removeClass('selected')
        },
        'clear<click>': function(c) {
            n.each(this.data.lists, function(c, a) {
                    n('.J_icon_id_' + a.id).removeClass('selected')
                }),
                this.clearIcon()
        },
        'toggleShow<click>': function(c) {
            this.toggleShow()
        },
        'showAddProject<click>': function(c) {
            n('#J_car_manage_project').addClass('show-add')
        },
        'hideAddProject<click>': function(c) {
            n('#J_car_manage_project').removeClass('show-add')
        },
        'hideMask<click>': function(c) {
            n('#J_block_car_container')
                .removeClass('show-sucai')
                .removeClass('show-project')
                .removeClass('show-mask')
        },
        'showProject<click>': function(c) {
            var a
            0 !== this.data.lists.length &&
                (n('#J_block_car_container').removeClass('show-sucai'),
                    n('#J_block_car_container')
                    .addClass('show-mask')
                    .addClass('show-project'),
                    ((a = this).data.isProjectLoading = !0),
                    a.wrapModel(e).getProjectList(function(c) {;
                        (a.data.isProjectLoading = !1),
                        (a.data.selectedProjectId = c.selectedId),
                        (a.data.projects = c.ownProjects.concat(c.corpProjects)),
                        a.setView()
                    }))
        },
        'showSucai<click>': function(c) {
            0 !== this.data.lists.length &&
                (n('#J_block_car_container').removeClass('show-project'),
                    n('#J_block_car_container')
                    .addClass('show-mask')
                    .addClass('show-sucai'))
        },
        'selectProject<click>': function(c) {
            c = c.params;
            (this.data.selectedProjectId = c), this.setView()
        },
        'submitProject<click>': function(c) {
            n('#J_block_car_container')
                .removeClass('show-sucai')
                .removeClass('show-project')
                .removeClass('show-mask')
            var a = this,
                s = n('#J_car_manage_project').hasClass('show-add'),
                t = s ? '' : a.data.selectedProjectId
            a.wrapModel(e).addIconsToProject({
                    projectId: a.data.selectedProjectId,
                    icons: a.data.lists,
                    projectName: a.data.newProjectName,
                    hasShowAdd: s,
                },
                function(c) {
                    o.setItem(r, []),
                        a.toggleShow(),
                        a.render(),
                        n('#J_icon_sidebar_count').html('0'),
                        n('#J_icon_car_count').html('0'),
                        'myprojects' === a.param('manage_type') &&
                        a.param('projectId') === t.toString() ?
                        (window.location.href =
                            '/manage/index?manage_type=myprojects&projectId=' + t) :
                        a.to('/manage/index?manage_type=myprojects&projectId=' + t)
                }
            )
        },
        'downloadCode<click>': function(c) {
            var a
            0 !== this.data.lists.length &&
                ((a = n.map(this.data.lists, function(c) {
                        return c.id + '|' + c.projectId
                    })),
                    window.open(
                        '/api/project/download.zip?ids=' +
                        a.join(',') +
                        '&ctoken=' +
                        i.config().ctoken,
                        'down-iframe'
                    ))
        },
        'showPicker<click>': function(c) {
            c.preventDefault()
            var a = this,
                c = c.current
            t.show(this, {
                ownerNodeId: c.id,
                dock: 'right',
                color: a.data.selectedColor,
                picked: function(c) {;
                    (a.data.selectedColor = c.color
                        .replace('#', '')
                        .replace(/<[^>]+>/g, '')),
                    a.setView()
                },
            })
        },
        'changeColor<keydown>': function(c) {
            13 === c.originalEvent.keyCode &&
                ((c = n(c.current).val()), this.setColor(c))
        },
        'changeColor<focusout>': function(c) {
            c.preventDefault()
            c = n(c.current).val()
            this.setColor(c)
        },
        setColor: function(c) {;
            (c = c.replace(/<[^>]+>/g, '')),
            /[^0-9a-fA-F]/.test(c) || 6 !== c.length ?
                o.showGlobalTip(
                    '\u8bf7\u8f93\u51656\u4f4d\u5408\u6cd516\u8fdb\u5236\u8272\u503c\uff01'
                ) :
                ((this.data.selectedColor = c), this.setView())
        },
        'selectColor<click>': function(c) {
            c.preventDefault()
            c = c.current.innerHTML
            this.setColor(c)
        },
        'downIcon<click>': function(c) {
            var a = this,
                s = c.params,
                t = a.data.selectedColor,
                e = a.data.selectedSize,
                c = n.map(a.data.lists, function(c) {
                    return c.id + '|' + c.projectId
                })
            20 < c.length ?
                o.showGlobalTip(l.TIPS_MORE_20) :
                (o.addIconsToHistory(a.data.lists),
                    o.setItem(p, t),
                    o.setItem(m, e), -1 === n.inArray(t, a.data.historyUseColors) &&
                    (a.data.historyUseColors.unshift(t),
                        (a.data.historyUseColors = a.data.historyUseColors.slice(0, 8)),
                        o.setItem(d, a.data.historyUseColors)),
                    window.open(
                        '/api/icon/downloadIcon?type=' +
                        s +
                        '&ids=' +
                        c.join(',') +
                        '&color=' +
                        t +
                        '&size=' +
                        e +
                        '&ctoken=' +
                        i.config().ctoken,
                        'down-iframe'
                    ))
        },
    })
})