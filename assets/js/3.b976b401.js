(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{294:function(t,n,e){},295:function(t,n,e){},296:function(t,n,e){"use strict";var r=e(294);e.n(r).a},297:function(t,n,e){"use strict";var r=e(295);e.n(r).a},298:function(t,n,e){var r=e(156),i=e(149),o=e(299),s=e(303);t.exports=function(t,n){if(null==t)return{};var e=r(s(t),(function(t){return[t]}));return n=i(n),o(t,e,(function(t,e){return n(t,e[0])}))}},299:function(t,n,e){var r=e(94),i=e(300),o=e(89);t.exports=function(t,n,e){for(var s=-1,a=n.length,u={};++s<a;){var c=n[s],p=r(t,c);e(p,c)&&i(u,o(c,t),p)}return u}},300:function(t,n,e){var r=e(301),i=e(89),o=e(92),s=e(63),a=e(40);t.exports=function(t,n,e,u){if(!s(t))return t;for(var c=-1,p=(n=i(n,t)).length,l=p-1,f=t;null!=f&&++c<p;){var v=a(n[c]),h=e;if(c!=l){var d=f[v];void 0===(h=u?u(d,v,f):void 0)&&(h=s(d)?d:o(n[c+1])?[]:{})}r(f,v,h),f=f[v]}return t}},301:function(t,n,e){var r=e(302),i=e(91),o=Object.prototype.hasOwnProperty;t.exports=function(t,n,e){var s=t[n];o.call(t,n)&&i(s,e)&&(void 0!==e||n in t)||r(t,n,e)}},302:function(t,n,e){var r=e(157);t.exports=function(t,n,e){"__proto__"==n&&r?r(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}},303:function(t,n,e){var r=e(150),i=e(304),o=e(306);t.exports=function(t){return r(t,o,i)}},304:function(t,n,e){var r=e(90),i=e(305),o=e(151),s=e(152),a=Object.getOwnPropertySymbols?function(t){for(var n=[];t;)r(n,o(t)),t=i(t);return n}:s;t.exports=a},305:function(t,n,e){var r=e(155)(Object.getPrototypeOf,Object);t.exports=r},306:function(t,n,e){var r=e(153),i=e(307),o=e(93);t.exports=function(t){return o(t)?r(t,!0):i(t)}},307:function(t,n,e){var r=e(63),i=e(154),o=e(308),s=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var n=i(t),e=[];for(var a in t)("constructor"!=a||!n&&s.call(t,a))&&e.push(a);return e}},308:function(t,n){t.exports=function(t){var n=[];if(null!=t)for(var e in Object(t))n.push(e);return n}},309:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return l}));e(28);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;e.e(2).then(e.t.bind(null,333,7)).then((function(n){t.comp=n.default}))},methods:{clickCallback:function(t){var n=this.$pagination.getSpecificPageLink(t-1);this.$router.push(n)}}},i=(e(296),e(16)),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.comp?e(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,s=(e(297),Object(i.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?e("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?e("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports,e(95),e(64)),a=e.n(s),u=e(298),c=e.n(u),p={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return c()(this.$props,a.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},l=Object(i.a)(p,(function(){var t=this.$createElement,n=this._self._c||t;return"vssue"===this.$service.comment.service?n("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?n("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},314:function(t,n,e){},317:function(t,n,e){"use strict";var r={components:{}},i=e(16),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",t._l(t.$page.headers,(function(n,r){return e("div",{key:r},[e("a",{attrs:{href:"#"+n.slug,title:n.title}},[t._v(t._s(n.title))])])})),0)}),[],!1,null,"7bd1de99",null);n.a=o.exports},327:function(t,n,e){"use strict";var r=e(314);e.n(r).a},339:function(t,n,e){"use strict";e.r(n);var r=e(309),i={components:{Toc:e(317).a,Comment:r.a}},o=(e(327),e(16)),s=Object(o.a)(i,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container mx-auto"},[n("div",{staticClass:"article flex"},[n("div",{staticClass:"content flex-1"},[n("Content")],1),this._v(" "),n("div",{staticClass:"flex-none"},[n("div",{staticClass:"toc"},[n("Toc")],1)])]),this._v(" "),n("div",{staticClass:"comment"},[n("Comment")],1)])}),[],!1,null,"1931d8d0",null);n.default=s.exports}}]);