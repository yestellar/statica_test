(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{296:function(e,t,n){var r=n(3);e.exports=r(1..valueOf)},323:function(e,t,n){var content=n(394);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(42).default)("9bb0c986",content,!0,{sourceMap:!1})},390:function(e,t,n){"use strict";var r=n(12),o=n(1),c=n(3),m=n(106),f=n(19),d=n(15),l=n(197),v=n(43),_=n(105),h=n(196),N=n(4),x=n(77).f,w=n(36).f,y=n(17).f,I=n(296),E=n(391).trim,z="Number",S=o.Number,$=S.prototype,k=o.TypeError,A=c("".slice),D=c("".charCodeAt),M=function(e){var t=h(e,"number");return"bigint"==typeof t?t:T(t)},T=function(e){var t,n,r,o,c,m,f,code,d=h(e,"number");if(_(d))throw k("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=E(d),43===(t=D(d,0))||45===t){if(88===(n=D(d,2))||120===n)return NaN}else if(48===t){switch(D(d,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(m=(c=A(d,2)).length,f=0;f<m;f++)if((code=D(c,f))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(m(z,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var C,F=function(e){var t=arguments.length<1?0:S(M(e)),n=this;return v($,n)&&N((function(){I(n)}))?l(Object(t),n,F):t},L=r?x(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),O=0;L.length>O;O++)d(S,C=L[O])&&!d(F,C)&&y(F,C,w(S,C));F.prototype=$,$.constructor=F,f(o,z,F)}},391:function(e,t,n){var r=n(3),o=n(23),c=n(13),m=n(392),f=r("".replace),d="["+m+"]",l=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),_=function(e){return function(t){var n=c(o(t));return 1&e&&(n=f(n,l,"")),2&e&&(n=f(n,v,"")),n}};e.exports={start:_(1),end:_(2),trim:_(3)}},392:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},393:function(e,t,n){"use strict";n(323)},394:function(e,t,n){var r=n(41)(!1);r.push([e.i,'.sum-up[data-v-4ae3e802]{margin-top:95px;padding:80px 20px}.sum-up h1[data-v-4ae3e802]{margin-bottom:80px}.sum-up section[data-v-4ae3e802]{width:700px;margin:0 auto}.sum-up section.info ul li[data-v-4ae3e802]{font-family:"Hind-Light"}.sum-up section.info ul li span[data-v-4ae3e802]{font-weight:600;margin-left:5px}@media screen and (max-width:1060px){.sum-up[data-v-4ae3e802]{padding:60px 20px}.sum-up h1[data-v-4ae3e802]{margin-bottom:60px}.sum-up section[data-v-4ae3e802]{width:550px}}@media screen and (max-width:768px){.sum-up[data-v-4ae3e802]{padding:50px 20px}.sum-up section[data-v-4ae3e802]{width:95%;max-width:550px}.sum-up section.info ul li span[data-v-4ae3e802]{font-size:14px}}',""]),e.exports=r},450:function(e,t,n){"use strict";n.r(t);n(11),n(390);var r={name:"Summary",data:function(){return{orderNumber:"",currentDate:"",cartSum:""}},methods:{validateQuery:function(){var e=this;return new Promise((function(t,n){(void 0===e.$route.query.id||isNaN(Number(e.$route.query.id))||void 0===e.$route.query.sum||isNaN(Number(e.$route.query.sum)))&&n(),t()}))}},created:function(){var e=this;this.validateQuery().then((function(){e.orderNumber=e.$route.query.id,e.currentDate=(new Date).toLocaleDateString(),e.cartSum=e.$route.query.sum})).catch((function(){e.$router.push("/")}))}},o=(n(393),n(24)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sum-up"},[n("h1",{staticClass:"basic-header"},[e._v("Zamówienie")]),e._v(" "),n("section",{staticClass:"info"},[n("p",{staticClass:"basic-text"},[e._v("Dziękujemy za złożenie zamówienia. W ciągu 24 godzin otrzymasz maila z instrukcją dalszego postępowania.")]),e._v(" "),n("ul",[n("li",[e._v("Numer zamówienia: "),n("span",[e._v(e._s(e.orderNumber))])]),e._v(" "),n("li",[e._v("Data: "),n("span",[e._v(e._s(e.currentDate))])]),e._v(" "),n("li",[e._v("Suma: "),n("span",[e._v(e._s(e.cartSum)+" zł")])]),e._v(" "),e._m(0)])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[e._v("Metoda płatności: "),n("span",[e._v("Przelew na konto bankowe")])])}],!1,null,"4ae3e802",null);t.default=component.exports}}]);