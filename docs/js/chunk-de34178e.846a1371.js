(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de34178e"],{"443a":function(a,t,e){"use strict";e.r(t);var l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"flex-col"},[e("div",{staticClass:"flex-1 flex-row"},[a.refreshMark?e("div",{staticClass:"left"},[e("animated-group",{staticClass:"group flex-col",attrs:{name:"group-1",duration:a.duration,delay:a.delay,groupDelay:a.groupDelay}},[e("animated",{staticClass:"flex-1 visual-block"},[a._v(" group-1 1 ")]),e("animated",{staticClass:"flex-1 visual-block"},[a._v(" group-1 2 ")]),e("animated",{staticClass:"flex-1 visual-block"},[a._v(" group-1 3 ")])],1),e("animated-group",{staticClass:"group flex-col",attrs:{name:"group-2",duration:a.duration,delay:a.delay,groupDelay:a.groupDelay}},[e("animated",{staticClass:"flex-1 visual-block"},[a._v(" group-2 1 ")]),e("animated",{staticClass:"flex-1 visual-block"},[a._v(" group-2 2 ")]),e("animated",{staticClass:"flex-1 visual-block"},[a._v(" group-2 3 ")])],1)],1):a._e(),e("div",{staticClass:"flex-1 center"},[e("el-form",{staticClass:"myForm",attrs:{"label-width":"200px"}},[e("el-form-item",{attrs:{label:"动画时长(s)"}},[e("el-slider",{attrs:{step:.1,min:.1,max:1},on:{change:a.applyConfig},model:{value:a.duration,callback:function(t){a.duration=t},expression:"duration"}})],1),e("el-form-item",{attrs:{label:"子组件进/出场时间间隔(s)"}},[e("el-slider",{attrs:{step:.1,min:.1,max:1},model:{value:a.delay,callback:function(t){a.delay=t},expression:"delay"}})],1),e("el-form-item",{attrs:{label:"动画组进/出场时间间隔(s)"}},[e("el-slider",{attrs:{step:.1,min:.1,max:1},model:{value:a.groupDelay,callback:function(t){a.groupDelay=t},expression:"groupDelay"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(t){return a.callGroup("group-1")}}},[a._v(" group-1 进场 ")]),e("el-button",{attrs:{type:"primary"},on:{click:function(t){return a.callGroup("group-2")}}},[a._v(" group-2 进场 ")])],1)],1)],1),a.refreshMark?e("div",{staticClass:"right"},[e("animated-group",{staticClass:"group flex-col",attrs:{name:"group-1",duration:a.duration,delay:a.delay,groupDelay:a.groupDelay}},[e("animated",{staticClass:"flex-1 visual-block"},[a._v(" group-1 4 ")]),e("animated",{staticClass:"flex-1 visual-block"},[a._v(" group-1 5 ")]),e("animated",{staticClass:"flex-1 visual-block"},[a._v(" group-1 6 ")])],1),e("animated-group",{staticClass:"group flex-col",attrs:{name:"group-2",duration:a.duration,delay:a.delay,groupDelay:a.groupDelay}},[e("animated",{staticClass:"flex-1 visual-block"},[a._v(" group-2 4 ")]),e("animated",{staticClass:"flex-1 visual-block"},[a._v(" group-2 2 ")]),e("animated",{staticClass:"flex-1 visual-block"},[a._v(" group-2 6 ")])],1)],1):a._e()])])},r=[],s={data(){return{duration:.5,delay:.3,groupDelay:.8,refreshMark:!0,currentGroupName:null}},methods:{applyConfig(){this.refreshMark=!1,this.$nextTick(()=>{this.refreshMark=!0,this.currentGroupName&&this.callGroup(this.currentGroupName)})},callGroup(a){this.currentGroupName=a,this.$AnimatedGroup.enter(a).then(()=>{console.log(a,"进场完成")}).catch(a=>{console.warn(a)})}},created(){this.callGroup("group-1")}},o=s,i=(e("f63b"),e("2877")),u=Object(i["a"])(o,l,r,!1,null,"09385ae4",null);t["default"]=u.exports},"791d":function(a,t,e){var l=e("24fb");t=l(!1),t.push([a.i,".left[data-v-09385ae4],.right[data-v-09385ae4]{position:relative;width:500px;max-width:40%}.left[data-v-09385ae4]{margin-right:20px}.right[data-v-09385ae4]{margin-left:20px}.group[data-v-09385ae4]{position:absolute;left:0;top:0;width:100%;height:100%}.myForm[data-v-09385ae4]{background:#fff;padding:20px;border-radius:8px}",""]),a.exports=t},"7d61":function(a,t,e){var l=e("791d");l.__esModule&&(l=l.default),"string"===typeof l&&(l=[[a.i,l,""]]),l.locals&&(a.exports=l.locals);var r=e("499e").default;r("6d9909ec",l,!0,{sourceMap:!1,shadowMode:!1})},f63b:function(a,t,e){"use strict";e("7d61")}}]);
//# sourceMappingURL=chunk-de34178e.846a1371.js.map