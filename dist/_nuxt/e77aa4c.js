(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{326:function(t,e,r){"use strict";var n=r(17),o=r(1),c=r(6),f=r(87),l=r(25),_=r(18),v=r(153),N=r(51),I=r(121),d=r(217),m=r(8),E=r(71).f,h=r(30).f,x=r(20).f,w=r(327),y=r(328).trim,A="Number",C=o.Number,k=C.prototype,O=o.TypeError,S=c("".slice),T=c("".charCodeAt),F=function(t){var e=d(t,"number");return"bigint"==typeof e?e:L(e)},L=function(t){var e,r,n,o,c,f,l,code,_=d(t,"number");if(I(_))throw O("Cannot convert a Symbol value to a number");if("string"==typeof _&&_.length>2)if(_=y(_),43===(e=T(_,0))||45===e){if(88===(r=T(_,2))||120===r)return NaN}else if(48===e){switch(T(_,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+_}for(f=(c=S(_,2)).length,l=0;l<f;l++)if((code=T(c,l))<48||code>o)return NaN;return parseInt(c,n)}return+_};if(f(A,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var j,M=function(t){var e=arguments.length<1?0:C(F(t)),r=this;return N(k,r)&&m((function(){w(r)}))?v(Object(e),r,M):e},R=n?E(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),V=0;R.length>V;V++)_(C,j=R[V])&&!_(M,j)&&x(M,j,h(C,j));M.prototype=k,k.constructor=M,l(o,A,M)}},327:function(t,e,r){var n=r(6);t.exports=n(1..valueOf)},328:function(t,e,r){var n=r(6),o=r(28),c=r(19),f=r(329),l=n("".replace),_="["+f+"]",v=RegExp("^"+_+_+"*"),N=RegExp(_+_+"*$"),I=function(t){return function(e){var r=c(o(e));return 1&t&&(r=l(r,v,"")),2&t&&(r=l(r,N,"")),r}};t.exports={start:I(1),end:I(2),trim:I(3)}},329:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},330:function(t,e,r){"use strict";r.r(e);r(326),r(43),r(22);var n=r(0),o=r(52),c={name:"post-block",props:{pageNumber:Number},setup:function(t){var e=Object(o.d)(),r=Object(n.a)((function(){var r=10*t.pageNumber;return e.state.postsList.filter((function(t){if(t.id>r&&t.id<=r+10)return t}))}));return e.dispatch("getData"),{postsList:r}}},f=r(62),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"posts-list"},t._l(t.postsList,(function(e,n){return r("article",{key:n,staticClass:"post"},[r("nuxt-link",{attrs:{to:{name:"detailsPost",params:{id:e.id}}}},[r("p",{staticClass:"post__user"},[t._v("ID пользователя: "+t._s(e.userId))]),t._v(" "),r("h2",{staticClass:"post__title"},[t._v(t._s(e.title))]),t._v(" "),r("p",{staticClass:"post__text"},[t._v(t._s(e.body))]),t._v(" "),r("p",{staticClass:"post__number"},[t._v("Пост номер №"+t._s(e.id))])])],1)})),0)}),[],!1,null,"194487b1",null);e.default=component.exports}}]);