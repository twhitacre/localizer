(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){"use strict";t.d(a,"a",function(){return r});var n=t(116),i=Object(n.a)({slice:"store",initial:{name:"Localizer",version:"0.0.1",language:"en",data:{}}}),r=i.actions;a.b=i},112:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_Tim_NewStory_code_tools_localizer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(13),_Users_Tim_NewStory_code_tools_localizer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_Users_Tim_NewStory_code_tools_localizer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_Users_Tim_NewStory_code_tools_localizer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),_Users_Tim_NewStory_code_tools_localizer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),_Users_Tim_NewStory_code_tools_localizer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),react_redux__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(11),_store__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(10),_lib_messages__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(113),Upload=function(_Component){function Upload(){var e;return Object(_Users_Tim_NewStory_code_tools_localizer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,Upload),(e=Object(_Users_Tim_NewStory_code_tools_localizer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,Object(_Users_Tim_NewStory_code_tools_localizer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(Upload).call(this))).state={code:"",error:!1},e}return Object(_Users_Tim_NewStory_code_tools_localizer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(Upload,_Component),Object(_Users_Tim_NewStory_code_tools_localizer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(Upload,[{key:"processCode",value:function processCode(e){e.preventDefault();var code=this.state.code,localize={};try{eval("localize = ".concat(code))}catch(error){localize=null}this.validateCode(localize)}},{key:"validateCode",value:function(e){var a=this.props,t=a.next,n=a.setData;e?(n(e),t()):this.setState({error:!0})}},{key:"handleChange",value:function(e){this.setState({code:e.target.value})}},{key:"render",value:function(){var e=this,a=this.state,t=a.code,n=a.error;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"upload columns"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"field column is-two-thirds"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"control upload-container"},n&&react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"error"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",null,"Something went wrong while processing your code."),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",null,"Read the description, and try again. You can also check out"," ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a",{href:"https://github.com/twhitacre/localizer"},"the docs")," ","if you need more help."),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",null,"Otherwise... ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a",{href:"/"},"Try Again"))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("textarea",{className:"textarea is-primary",placeholder:_lib_messages__WEBPACK_IMPORTED_MODULE_9__.a,rows:"20",onChange:function(a){return e.handleChange(a)},value:t}))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"field column is-one-third"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"control"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",null,"Welcome! This will help you localize your app."),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",null,"You can read more about it"," ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a",{href:"https://github.com/twhitacre/localizer"},"here"),"."),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{type:"button",onClick:function(a){return e.processCode(a)},className:"button is-primary"},"Get Started"))))}}]),Upload}(react__WEBPACK_IMPORTED_MODULE_6__.Component);__webpack_exports__.a=Object(react_redux__WEBPACK_IMPORTED_MODULE_7__.b)(null,Object(_Users_Tim_NewStory_code_tools_localizer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},_store__WEBPACK_IMPORTED_MODULE_8__.a))(Upload)},113:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n="\n  Paste your code here to get stared. Note, it must follow this format.\n\n  Also, each parent property MUST contain an english translation (en) property.\n\n  {\n\n    property: {\n      en: 'translated text',\n      sp: 'translated text',\n    },\n\n    property2: {\n      en: 'translated text',\n      sp: 'translated text',\n    }\n\n  }\n\n"},117:function(e,a,t){e.exports=t(256)},256:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(110),m=t.n(r),l=t(4),s=t(5),o=t(7),_=t(6),c=t(8),u=t(11),v=t(22),d=t(112),N=t(13),h={aa:{name:"Afar",nativeName:"Afaraf"},ab:{name:"Abkhaz",nativeName:"\u0430\u04a7\u0441\u0443\u0430 \u0431\u044b\u0437\u0448\u04d9\u0430"},ae:{name:"Avestan",nativeName:"avesta"},af:{name:"Afrikaans",nativeName:"Afrikaans"},ak:{name:"Akan",nativeName:"Akan"},am:{name:"Amharic",nativeName:"\u12a0\u121b\u122d\u129b"},an:{name:"Aragonese",nativeName:"aragon\xe9s"},ar:{name:"Arabic",nativeName:"\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"},as:{name:"Assamese",nativeName:"\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be"},av:{name:"Avaric",nativeName:"\u0430\u0432\u0430\u0440 \u043c\u0430\u0446\u04c0"},ay:{name:"Aymara",nativeName:"aymar aru"},az:{name:"Azerbaijani",nativeName:"az\u0259rbaycan dili"},ba:{name:"Bashkir",nativeName:"\u0431\u0430\u0448\u04a1\u043e\u0440\u0442 \u0442\u0435\u043b\u0435"},be:{name:"Belarusian",nativeName:"\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f \u043c\u043e\u0432\u0430"},bg:{name:"Bulgarian",nativeName:"\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a"},bh:{name:"Bihari",nativeName:"\u092d\u094b\u091c\u092a\u0941\u0930\u0940"},bi:{name:"Bislama",nativeName:"Bislama"},bm:{name:"Bambara",nativeName:"bamanankan"},bn:{name:"Bengali",nativeName:"\u09ac\u09be\u0982\u09b2\u09be"},bo:{name:"Tibetan Standard",nativeName:"\u0f56\u0f7c\u0f51\u0f0b\u0f61\u0f72\u0f42"},br:{name:"Breton",nativeName:"brezhoneg"},bs:{name:"Bosnian",nativeName:"bosanski jezik"},ca:{name:"Catalan",nativeName:"catal\xe0"},ce:{name:"Chechen",nativeName:"\u043d\u043e\u0445\u0447\u0438\u0439\u043d \u043c\u043e\u0442\u0442"},ch:{name:"Chamorro",nativeName:"Chamoru"},co:{name:"Corsican",nativeName:"corsu"},cr:{name:"Cree",nativeName:"\u14c0\u1426\u1403\u152d\u140d\u140f\u1423"},cs:{name:"Czech",nativeName:"\u010de\u0161tina"},cu:{name:"Old Church Slavonic",nativeName:"\u0469\u0437\u044b\u043a\u044a \u0441\u043b\u043e\u0432\u0463\u043d\u044c\u0441\u043a\u044a"},cv:{name:"Chuvash",nativeName:"\u0447\u04d1\u0432\u0430\u0448 \u0447\u04d7\u043b\u0445\u0438"},cy:{name:"Welsh",nativeName:"Cymraeg"},da:{name:"Danish",nativeName:"dansk"},de:{name:"German",nativeName:"Deutsch"},dv:{name:"Divehi",nativeName:"Dhivehi"},dz:{name:"Dzongkha",nativeName:"\u0f62\u0fab\u0f7c\u0f44\u0f0b\u0f41"},ee:{name:"Ewe",nativeName:"E\u028begbe"},el:{name:"Greek",nativeName:"\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"},en:{name:"English",nativeName:"English"},eo:{name:"Esperanto",nativeName:"Esperanto"},es:{name:"Spanish",nativeName:"Espa\xf1ol"},et:{name:"Estonian",nativeName:"eesti"},eu:{name:"Basque",nativeName:"euskara"},fa:{name:"Persian",nativeName:"\u0641\u0627\u0631\u0633\u06cc"},ff:{name:"Fula",nativeName:"Fulfulde"},fi:{name:"Finnish",nativeName:"suomi"},fj:{name:"Fijian",nativeName:"Vakaviti"},fo:{name:"Faroese",nativeName:"f\xf8royskt"},fr:{name:"French",nativeName:"Fran\xe7ais"},fy:{name:"Western Frisian",nativeName:"Frysk"},ga:{name:"Irish",nativeName:"Gaeilge"},gd:{name:"Scottish Gaelic",nativeName:"G\xe0idhlig"},gl:{name:"Galician",nativeName:"galego"},gn:{name:"Guaran\xed",nativeName:"Ava\xf1e'\u1ebd"},gu:{name:"Gujarati",nativeName:"\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0"},gv:{name:"Manx",nativeName:"Gaelg"},ha:{name:"Hausa",nativeName:"\u0647\u064e\u0648\u064f\u0633\u064e"},he:{name:"Hebrew",nativeName:"\u05e2\u05d1\u05e8\u05d9\u05ea"},hi:{name:"Hindi",nativeName:"\u0939\u093f\u0928\u094d\u0926\u0940"},ho:{name:"Hiri Motu",nativeName:"Hiri Motu"},hr:{name:"Croatian",nativeName:"hrvatski jezik"},ht:{name:"Haitian",nativeName:"Krey\xf2l ayisyen"},hu:{name:"Hungarian",nativeName:"magyar"},hy:{name:"Armenian",nativeName:"\u0540\u0561\u0575\u0565\u0580\u0565\u0576"},hz:{name:"Herero",nativeName:"Otjiherero"},ia:{name:"Interlingua",nativeName:"Interlingua"},id:{name:"Indonesian",nativeName:"Indonesian"},ie:{name:"Interlingue",nativeName:"Interlingue"},ig:{name:"Igbo",nativeName:"As\u1ee5s\u1ee5 Igbo"},ii:{name:"Nuosu",nativeName:"\ua188\ua320\ua4bf Nuosuhxop"},ik:{name:"Inupiaq",nativeName:"I\xf1upiaq"},io:{name:"Ido",nativeName:"Ido"},is:{name:"Icelandic",nativeName:"\xcdslenska"},it:{name:"Italian",nativeName:"Italiano"},iu:{name:"Inuktitut",nativeName:"\u1403\u14c4\u1483\u144e\u1450\u1466"},ja:{name:"Japanese",nativeName:"\u65e5\u672c\u8a9e"},jv:{name:"Javanese",nativeName:"basa Jawa"},ka:{name:"Georgian",nativeName:"\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8"},kg:{name:"Kongo",nativeName:"Kikongo"},ki:{name:"Kikuyu",nativeName:"G\u0129k\u0169y\u0169"},kj:{name:"Kwanyama",nativeName:"Kuanyama"},kk:{name:"Kazakh",nativeName:"\u049b\u0430\u0437\u0430\u049b \u0442\u0456\u043b\u0456"},kl:{name:"Kalaallisut",nativeName:"kalaallisut"},km:{name:"Khmer",nativeName:"\u1781\u17c1\u1798\u179a\u1797\u17b6\u179f\u17b6"},kn:{name:"Kannada",nativeName:"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1"},ko:{name:"Korean",nativeName:"\ud55c\uad6d\uc5b4"},kr:{name:"Kanuri",nativeName:"Kanuri"},ks:{name:"Kashmiri",nativeName:"\u0915\u0936\u094d\u092e\u0940\u0930\u0940"},ku:{name:"Kurdish",nativeName:"Kurd\xee"},kv:{name:"Komi",nativeName:"\u043a\u043e\u043c\u0438 \u043a\u044b\u0432"},kw:{name:"Cornish",nativeName:"Kernewek"},ky:{name:"Kyrgyz",nativeName:"\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430"},la:{name:"Latin",nativeName:"latine"},lb:{name:"Luxembourgish",nativeName:"L\xebtzebuergesch"},lg:{name:"Ganda",nativeName:"Luganda"},li:{name:"Limburgish",nativeName:"Limburgs"},ln:{name:"Lingala",nativeName:"Ling\xe1la"},lo:{name:"Lao",nativeName:"\u0e9e\u0eb2\u0eaa\u0eb2"},lt:{name:"Lithuanian",nativeName:"lietuvi\u0173 kalba"},lu:{name:"Luba-Katanga",nativeName:"Tshiluba"},lv:{name:"Latvian",nativeName:"latvie\u0161u valoda"},mg:{name:"Malagasy",nativeName:"fiteny malagasy"},mh:{name:"Marshallese",nativeName:"Kajin M\u0327aje\u013c"},mi:{name:"M\u0101ori",nativeName:"te reo M\u0101ori"},mk:{name:"Macedonian",nativeName:"\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438 \u0458\u0430\u0437\u0438\u043a"},ml:{name:"Malayalam",nativeName:"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"},mn:{name:"Mongolian",nativeName:"\u041c\u043e\u043d\u0433\u043e\u043b \u0445\u044d\u043b"},mr:{name:"Marathi",nativeName:"\u092e\u0930\u093e\u0920\u0940"},ms:{name:"Malay",nativeName:"\u0647\u0627\u0633 \u0645\u0644\u0627\u064a\u0648\u200e"},mt:{name:"Maltese",nativeName:"Malti"},my:{name:"Burmese",nativeName:"\u1017\u1019\u102c\u1005\u102c"},na:{name:"Nauru",nativeName:"Ekakair\u0169 Naoero"},nb:{name:"Norwegian Bokm\xe5l",nativeName:"Norsk bokm\xe5l"},nd:{name:"Northern Ndebele",nativeName:"isiNdebele"},ne:{name:"Nepali",nativeName:"\u0928\u0947\u092a\u093e\u0932\u0940"},ng:{name:"Ndonga",nativeName:"Owambo"},nl:{name:"Dutch",nativeName:"Nederlands"},nn:{name:"Norwegian Nynorsk",nativeName:"Norsk nynorsk"},no:{name:"Norwegian",nativeName:"Norsk"},nr:{name:"Southern Ndebele",nativeName:"isiNdebele"},nv:{name:"Navajo",nativeName:"Din\xe9 bizaad"},ny:{name:"Chichewa",nativeName:"chiChe\u0175a"},oc:{name:"Occitan",nativeName:"occitan"},oj:{name:"Ojibwe",nativeName:"\u140a\u14c2\u1511\u14c8\u142f\u14a7\u140e\u14d0"},om:{name:"Oromo",nativeName:"Afaan Oromoo"},or:{name:"Oriya",nativeName:"\u0b13\u0b21\u0b3c\u0b3f\u0b06"},os:{name:"Ossetian",nativeName:"\u0438\u0440\u043e\u043d \xe6\u0432\u0437\u0430\u0433"},pa:{name:"Panjabi",nativeName:"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"},pi:{name:"P\u0101li",nativeName:"\u092a\u093e\u0934\u093f"},pl:{name:"Polish",nativeName:"j\u0119zyk polski"},ps:{name:"Pashto",nativeName:"\u067e\u069a\u062a\u0648"},pt:{name:"Portuguese",nativeName:"Portugu\xeas"},qu:{name:"Quechua",nativeName:"Runa Simi"},rm:{name:"Romansh",nativeName:"rumantsch grischun"},rn:{name:"Kirundi",nativeName:"Ikirundi"},ro:{name:"Romanian",nativeName:"Rom\xe2n\u0103"},ru:{name:"Russian",nativeName:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"},rw:{name:"Kinyarwanda",nativeName:"Ikinyarwanda"},sa:{name:"Sanskrit",nativeName:"\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d"},sc:{name:"Sardinian",nativeName:"sardu"},sd:{name:"Sindhi",nativeName:"\u0938\u093f\u0928\u094d\u0927\u0940"},se:{name:"Northern Sami",nativeName:"Davvis\xe1megiella"},sg:{name:"Sango",nativeName:"y\xe2ng\xe2 t\xee s\xe4ng\xf6"},si:{name:"Sinhala",nativeName:"\u0dc3\u0dd2\u0d82\u0dc4\u0dbd"},sk:{name:"Slovak",nativeName:"sloven\u010dina"},sl:{name:"Slovene",nativeName:"slovenski jezik"},sm:{name:"Samoan",nativeName:"gagana fa'a Samoa"},sn:{name:"Shona",nativeName:"chiShona"},so:{name:"Somali",nativeName:"Soomaaliga"},sq:{name:"Albanian",nativeName:"Shqip"},sr:{name:"Serbian",nativeName:"\u0441\u0440\u043f\u0441\u043a\u0438 \u0458\u0435\u0437\u0438\u043a"},ss:{name:"Swati",nativeName:"SiSwati"},st:{name:"Southern Sotho",nativeName:"Sesotho"},su:{name:"Sundanese",nativeName:"Basa Sunda"},sv:{name:"Swedish",nativeName:"svenska"},sw:{name:"Swahili",nativeName:"Kiswahili"},ta:{name:"Tamil",nativeName:"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"},te:{name:"Telugu",nativeName:"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"},tg:{name:"Tajik",nativeName:"\u0442\u043e\u04b7\u0438\u043a\u04e3"},th:{name:"Thai",nativeName:"\u0e44\u0e17\u0e22"},ti:{name:"Tigrinya",nativeName:"\u1275\u130d\u122d\u129b"},tk:{name:"Turkmen",nativeName:"T\xfcrkmen"},tl:{name:"Tagalog",nativeName:"Wikang Tagalog"},tn:{name:"Tswana",nativeName:"Setswana"},to:{name:"Tonga",nativeName:"faka Tonga"},tr:{name:"Turkish",nativeName:"T\xfcrk\xe7e"},ts:{name:"Tsonga",nativeName:"Xitsonga"},tt:{name:"Tatar",nativeName:"\u0442\u0430\u0442\u0430\u0440 \u0442\u0435\u043b\u0435"},tw:{name:"Twi",nativeName:"Twi"},ty:{name:"Tahitian",nativeName:"Reo Tahiti"},ug:{name:"Uyghur",nativeName:"\u0626\u06c7\u064a\u063a\u06c7\u0631\u0686\u06d5\u200e"},uk:{name:"Ukrainian",nativeName:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"},ur:{name:"Urdu",nativeName:"\u0627\u0631\u062f\u0648"},uz:{name:"Uzbek",nativeName:"\u040e\u0437\u0431\u0435\u043a"},ve:{name:"Venda",nativeName:"Tshiven\u1e13a"},vi:{name:"Vietnamese",nativeName:"Ti\u1ebfng Vi\u1ec7t"},vo:{name:"Volap\xfck",nativeName:"Volap\xfck"},wa:{name:"Walloon",nativeName:"walon"},wo:{name:"Wolof",nativeName:"Wollof"},xh:{name:"Xhosa",nativeName:"isiXhosa"},yi:{name:"Yiddish",nativeName:"\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9"},yo:{name:"Yoruba",nativeName:"Yor\xf9b\xe1"},za:{name:"Zhuang",nativeName:"Sa\u026f cue\u014b\u0185"},zh:{name:"Chinese",nativeName:"\u4e2d\u6587"},zu:{name:"Zulu",nativeName:"isiZulu"}},p=t(10),E=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(o.a)(this,Object(_.a)(a).call(this))).state={languages:[],addNew:!1},e}return Object(c.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.store.data;window.data=e;var a=Object.keys(e[Object.keys(e)[0]]);this.setState({languages:a})}},{key:"displayLanguages",value:function(e){var a=this;return e.map(function(e,t){return i.a.createElement("li",{key:t},i.a.createElement("a",{href:"/",onClick:function(t){return a.loadLanguage(t,e)}},h[e].name))})}},{key:"displayOptions",value:function(){var e=this;return Object.keys(h).map(function(a,t){return i.a.createElement("li",{key:t},i.a.createElement("a",{href:"/",onClick:function(t){return e.loadLanguage(t,a)}},"[".concat(a,"] - ").concat(h[a].name)))})}},{key:"loadLanguage",value:function(e,a){var t=this.props,n=t.next,i=t.setLanguage;e.preventDefault(),i(a),n()}},{key:"render",value:function(){var e=this,a=this.state,t=a.languages,n=a.addNew;return i.a.createElement("div",{className:"review columns"},i.a.createElement("div",{className:"column is-two-thirds"},!n&&i.a.createElement("div",{className:"card"},i.a.createElement("header",{className:"card-header"},i.a.createElement("p",{className:"card-header-title"},"Review")),i.a.createElement("div",{className:"card-content overflow"},i.a.createElement("div",{className:"content"},i.a.createElement("p",null,"After parsing, we found ".concat(t.length," language(s) already translated.")),i.a.createElement("p",null,"Click on the language below to review or edit it, or choose to add a new language"),i.a.createElement("ul",{className:"menu-list languages"},this.displayLanguages(t)))),i.a.createElement("footer",{className:"card-footer"},i.a.createElement("button",{type:"button",onClick:function(){return e.setState({addNew:!0})},className:"button is-primary is-fullwidth"},"Add Language"))),n&&i.a.createElement("div",{className:"card"},i.a.createElement("header",{className:"card-header"},i.a.createElement("p",{className:"card-header-title"},"Select Language")),i.a.createElement("div",{className:"card-content overflow"},i.a.createElement("div",{className:"content"},i.a.createElement("ul",{className:"menu-list languages"},this.displayOptions()))))))}}]),a}(n.Component),b=Object(u.b)(function(e){return{store:e.store}},Object(N.a)({},p.a))(E),g=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(o.a)(this,Object(_.a)(a).call(this))).state={language:{},working:{},key:"en",length:0,current:0,val:"",complete:!1,classes:"tooltip is-tooltip-right is-tooltip-active"},e}return Object(c.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.store,a=Object.keys(e.data).length,t=h[e.language],n=e.data,i=n[Object.keys(n)[0]][e.language];this.setState({language:t,working:n,key:e.language,length:a,val:i})}},{key:"field",value:function(e){var a=this.state.working;return Object.keys(a)[e]}},{key:"updateData",value:function(e){var a=this;e.preventDefault();var t=this.state,n=t.key,i=t.working,r=t.current,m=t.val,l=this.props.setData,s=this.field(r);i[s][n]=m,this.setState({working:i},function(){l(i),a.change(r)})}},{key:"change",value:function(e){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=this.state,n=t.working,i=t.key,r=t.length,m=a?e+1:e-1;if(!(m<0))if(m>r-1)this.setState({complete:!0});else{var l=n[this.field(m)][i]||"";this.setState({current:m,val:l,classes:""})}}},{key:"prev",value:function(e,a){e.preventDefault(),this.change(a,!1)}},{key:"updateVal",value:function(e){e.preventDefault(),this.setState({val:e.target.value})}},{key:"complete",value:function(e){e.preventDefault(),(0,this.props.next)()}},{key:"render",value:function(){var e=this,a=this.state,t=a.language,n=a.key,r=a.current,m=a.length,l=a.working,s=a.val,o=a.complete,_=a.classes,c=this.field(r);return i.a.createElement("div",{className:"translate columns"},i.a.createElement("div",{className:"column is-two-thirds"},i.a.createElement("div",{className:"card"},i.a.createElement("header",{className:"card-header"},i.a.createElement("p",{className:"card-header-title"},i.a.createElement("span",{className:"tag is-primary"},"".concat(t.name," (").concat(n,")"))),i.a.createElement("p",{className:"card-header-info"},"".concat(r+1," of ").concat(m))),i.a.createElement("div",{className:"card-content overflow"},i.a.createElement("div",{className:"translator"},i.a.createElement("div",{className:"field"},c&&i.a.createElement("div",{className:"control"},i.a.createElement("p",{className:"original"},i.a.createElement("strong",{className:_,"data-tooltip":"Original Translation"},l[c].en)),i.a.createElement("form",{onSubmit:function(a){return e.updateData(a)}},i.a.createElement("input",{onChange:function(a){return e.updateVal(a)},className:"input is-primary",type:"text",placeholder:"Translation...",value:s}),i.a.createElement("small",null,"Enter translation and press ENTER or click the button to continue."),o&&i.a.createElement("a",{onClick:function(a){return e.complete(a)},href:"/",className:"button is-primary next"},"Finish"),!o&&i.a.createElement("button",{type:"submit",className:"button is-primary next"},"Next"),i.a.createElement("a",{onClick:function(a){return e.prev(a,r)},href:"/",className:"button is-secondary prev"},"Previous"))))))),i.a.createElement("a",{onClick:function(a){return e.complete(a)},href:"/",className:"skip"},"Skip to Finish")))}}]),a}(n.Component),f=Object(u.b)(function(e){return{store:e.store}},Object(N.a)({},p.a))(g),k=t(64),O=t.n(k),y=t(114),w=t.n(y),D=t(115),M=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(o.a)(this,Object(_.a)(a).call(this))).fireworks=function(){var e=document.querySelector("body");new D(e,{explosionMinHeight:.4,explosionMaxHeight:.9,maxRockets:10}).start()},e.state={count:{total:0,complete:0},dump:{},download:!1},e}return Object(c.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.validate()}},{key:"validate",value:function(){var e=this.state.count,a=this.props.store,t=a.language,n=a.data;Object.keys(n).forEach(function(a){n[a][t]&&(e.complete+=1),e.total+=1}),this.setState({count:e})}},{key:"showData",value:function(e){e.preventDefault();var a=this.props.store;this.setState({dump:a.data,download:!0}),this.fireworks()}},{key:"clipboard",value:function(e){e.preventDefault();var a=this.state.dump;w()(O()(a))}},{key:"render",value:function(){var e=this,a=this.state,t=a.count,n=a.download,r=a.dump;return i.a.createElement("div",{className:"finish columns"},i.a.createElement("div",{className:"column is-two-thirds"},!n&&i.a.createElement("div",{className:"card"},i.a.createElement("header",{className:"card-header"},i.a.createElement("p",{className:"card-header-title"},"All Done!")),i.a.createElement("div",{className:"card-content overflow"},i.a.createElement("div",{className:"content"},i.a.createElement("p",null,"A quick review shows you have completed"," ",i.a.createElement("strong",null,t.complete)," out of"," ",i.a.createElement("strong",null,t.total)," translation items."),i.a.createElement("p",null,"If you are happy with this, you can now download the data below."))),i.a.createElement("footer",{className:"card-footer"},i.a.createElement("a",{href:"/",className:"card-footer-item"},"Start Over"),i.a.createElement("a",{href:"/",onClick:function(a){return e.showData(a)},className:"card-footer-item cfp"},"Download"))),n&&i.a.createElement("div",{className:"card"},i.a.createElement("header",{className:"card-header"},i.a.createElement("p",{className:"card-header-title"},"Data"),i.a.createElement("a",{href:"/",onClick:function(a){return e.clipboard(a)},className:"card-header-info"},"Copy")),i.a.createElement("div",{className:"card-content overflow"},i.a.createElement("div",{className:"content"},i.a.createElement("pre",null,O()(r,{indent:"  "})))))))}}]),a}(n.Component),C=Object(u.b)(function(e){return{store:e.store}},Object(N.a)({},p.a))(M),P=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(o.a)(this,Object(_.a)(a).call(this))).state={step:1},e}return Object(c.a)(a,e),Object(s.a)(a,[{key:"nextStep",value:function(){var e=this.state.step;this.setState({step:e+1})}},{key:"render",value:function(){var e=this.state.step;return i.a.createElement("div",{className:"process"},1===e&&i.a.createElement(d.a,{next:this.nextStep.bind(this)}),2===e&&i.a.createElement(b,{next:this.nextStep.bind(this)}),3===e&&i.a.createElement(f,{next:this.nextStep.bind(this)}),4===e&&i.a.createElement(C,null))}}]),a}(n.Component),T=Object(v.c)(Object(v.b)({store:p.b.reducer}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),S=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(_.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(u.a,{store:T},i.a.createElement(P,null))}}]),a}(n.Component);m.a.render(i.a.createElement(S,null),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.498b0462.chunk.js.map