webpackJsonp([19],{IKPf:function(t,s){},"J/IP":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("1tI/"),i=e.n(a),r=e("2Hch"),u=e("x6Ga"),n=e("7y/R"),o={components:{headTitle:r.default,foot:n.a},data:function(){return{items:[{tab:"赛程",url:"/saishi/race_progress"},{tab:"战报",url:"/saishi/battle_report"},{tab:"战队",url:"/saishi/battle_team"}]}},computed:i()({},Object(u.c)(["saishiStatus"])),mounted:function(){this.$router.push(this.items[this.saishiStatus].url)},methods:i()({},Object(u.b)(["RECORD_SAISHISTATUS"]),{gotoAddress:function(t,s){this.RECORD_SAISHISTATUS(s),this.$router.push(t)}})},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"saishi"},[e("headTitle"),t._v(" "),e("ul",{staticClass:"saishi_tab"},t._l(t.items,function(s,a){return e("li",[e("a",{class:{active:a==t.saishiStatus},on:{click:function(e){t.gotoAddress(s.url,a)}}},[t._v(t._s(s.tab))])])}),0),t._v(" "),e("router-view")],1)},staticRenderFns:[]};var l=e("F6Qa")(o,c,!1,function(t){e("IKPf")},"data-v-5f7f76a9",null);s.default=l.exports}});
//# sourceMappingURL=19.681d351e2dfea54e2231.js.map