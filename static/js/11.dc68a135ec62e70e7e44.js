webpackJsonp([11],{WydO:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("KOga"),s={components:{childTitle:i("JHw8").a},data:function(){return{title:"角色",isShow:!1,typesActiveId:null,types:[{title:"雷霆战警",id:0},{title:"风暴联盟",id:1},{title:"变异体",id:2}],items:[]}},mounted:function(){var t=this;Object(a.a)("GET","zhanchang/character").then(function(e){console.log(e.data.data),t.items=e.data.data}).catch(function(t){console.log(t)})},methods:{gotoBack:function(){this.$router.go(-1)},isShowMenu:function(){this.isShow?this.isShow=!1:this.isShow=!0},choose:function(t,e){var i=this;this.typesActiveId=e,Object(a.a)("GET","zhanchang/character",{id:t}).then(function(t){console.log(t.data.data),i.items=t.data.data}).catch(function(t){console.log(t)})},gotoAddress:function(t,e){console.log(t),this.$router.push(t)}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"character"},[i("child-title",{attrs:{title:t.title}}),t._v(" "),i("div",{staticClass:"search"},[i("div",{staticClass:"searchTop"},[i("button",{on:{click:t.isShowMenu}},[t._v("分类检索")]),t._v(" "),i("input",{attrs:{type:"text",placeholder:"输入角色名称"}})]),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}]},[i("li",[i("dl",[i("dt",[t._v("类型")]),t._v(" "),t._l(t.types,function(e,a){return i("dd",{class:{active:t.typesActiveId==a},on:{click:function(i){t.choose(e.id,a)}}},[t._v("\n\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t")])})],2)])])]),t._v(" "),i("ul",{staticClass:"list"},t._l(t.items,function(e){return i("li",[i("a",{attrs:{href:"javascript:;"},on:{click:function(i){t.gotoAddress({path:"/zhanchang/character/"+e.id})}}},[i("img",{attrs:{src:e.image,alt:""}}),t._v(" "),i("p",[t._v(t._s(e.title))])])])}),0)],1)},staticRenderFns:[]};var c=i("F6Qa")(s,n,!1,function(t){i("ae1M")},"data-v-853d176e",null);e.default=c.exports},ae1M:function(t,e){}});
//# sourceMappingURL=11.dc68a135ec62e70e7e44.js.map