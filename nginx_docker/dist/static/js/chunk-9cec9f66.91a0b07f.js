(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9cec9f66"],{"4a01":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table"},[n("div",{staticClass:"crumbs"},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",[n("i",{staticClass:"el-icon-lx-calendar"}),t._v(" 套件管理")]),n("el-breadcrumb-item",[t._v("套件列表")])],1)],1),n("div",{staticClass:"container"},[n("div",{staticClass:"handle-box"},[n("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"el-icon-delete"},on:{click:t.delAll}},[t._v("批量删除")]),n("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"输入筛选关键词"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}})],1),n("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.data,border:"",stripe:""},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),n("el-table-column",{attrs:{type:"index",label:"序号",width:"55",align:"center"}}),n("el-table-column",{attrs:{prop:"name",label:"套件名称",width:"250"}}),n("el-table-column",{attrs:{prop:"project",label:"所属项目",width:"250"}}),n("el-table-column",{attrs:{prop:"create_time",label:"创建时间",sortable:"",align:"center"}}),n("el-table-column",{attrs:{prop:"update_time",label:"更新时间",sortable:"",align:"center"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(n){return t.handleRun(e.$index,e.row)}}},[t._v("运行")]),n("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(n){return t.linkTo(e.row.id)}}},[t._v("编辑")]),n("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),n("div",{staticClass:"pagination"},[n("el-pagination",{attrs:{background:"","page-sizes":[4,5,8,10,20],layout:"total, sizes, prev, pager, next, jumper",total:t.total_nums,"page-size":t.page_size},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)],1),n("el-dialog",{attrs:{title:"编辑套件",visible:t.editVisible,width:"30%",center:""},on:{"update:visible":function(e){t.editVisible=e}}},[n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"套件名称"}},[n("el-input",{attrs:{clearable:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"测试人员"}},[n("el-input",{attrs:{clearable:""},model:{value:t.form.tester,callback:function(e){t.$set(t.form,"tester",e)},expression:"form.tester"}})],1),n("el-form-item",{attrs:{label:"所属项目"}},[n("el-input",{attrs:{disabled:""},model:{value:t.form.project,callback:function(e){t.$set(t.form,"project",e)},expression:"form.project"}})],1),n("el-form-item",{attrs:{label:"简要描述"}},[n("el-input",{attrs:{clearable:""},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.editVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.saveEdit}},[t._v("确 定")])],1)],1),n("el-dialog",{attrs:{title:"删除套件",visible:t.delVisible,width:"300px",center:""},on:{"update:visible":function(e){t.delVisible=e}}},[n("div",{staticClass:"del-dialog-cnt"},[t._v("删除不可恢复，是否确定删除？")]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.delVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.deleteRow}},[t._v("确 定")])],1)]),n("el-dialog",{attrs:{title:"运行套件",visible:t.runVisible,width:"30%",center:""},on:{"update:visible":function(e){t.runVisible=e}}},[n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"运行环境"}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.env_id,callback:function(e){t.env_id=e},expression:"env_id"}},t._l(t.envs_id_names,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.runVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.confirmRun}},[t._v("运 行")])],1)],1)],1)},r=[],a=n("83a7"),c=(n("a450"),n("4ec3")),o={name:"basetable",data:function(){return{tableData:[],cur_page:1,page_size:10,total_nums:1,multipleSelection:[],select_word:"",del_list:[],editVisible:!1,delVisible:!1,runVisible:!1,form:{},idx:-1,id:-1,env_id:"",envs_id_names:[]}},created:function(){this.getData(),this.getEnvsIdNames()},computed:{data:function(){var t=this;return this.tableData.filter((function(e){for(var n=!1,i=0;i<t.del_list.length;i++)if(e.name===t.del_list[i].name){n=!0;break}if(!n&&(e.name.indexOf(t.select_word)>-1||e.project.indexOf(t.select_word)>-1))return e}))}},methods:{handleCurrentChange:function(t){this.cur_page=t,this.getData()},handleSizeChange:function(t){this.page_size=t,this.getData()},getData:function(){var t=this;Object(c["T"])({page:this.cur_page,size:this.page_size}).then((function(e){t.tableData=e.data.results,t.cur_page=e.data.current_page_num||1,t.total_nums=e.data.count||1}))},handleEdit:function(t,e){this.idx=t,this.id=e.id,this.form=e,this.editVisible=!0},handleRun:function(t,e){this.idx=t,this.id=e.id,this.form=e,this.runVisible=!0},handleDelete:function(t,e){this.idx=t,this.id=e.id,this.delVisible=!0},delAll:function(){var t=this,e=this.multipleSelection.length,n="";this.del_list=this.del_list.concat(this.multipleSelection);for(var i=0;i<e;i++)n+=this.multipleSelection[i].name+" ",Object(c["s"])(this.multipleSelection[i].id).then((function(t){})).catch((function(e){t.$message.error("服务器错误")}));this.$message.error("删除了"+n),this.multipleSelection=[]},handleSelectionChange:function(t){this.multipleSelection=t},saveEdit:function(){var t=this,e=Object.assign({},this.form);delete e.project,edit_interface(this.id,e).then((function(e){if(t.editVisible=!1,t.$message.success("修改【 ".concat(t.form.name," 】成功")),t.tableData[t.idx].id===t.id)t.$set(t.tableData,t.idx,t.form);else for(var n=0;n<t.tableData.length;n++)if(t.tableData[n].id===t.id)return void t.$set(t.tableData,n,t.form)})).catch((function(e){t.editVisible=!1,t.$message.error("服务器错误")}))},deleteRow:function(){var t=this;Object(c["s"])(this.id).then((function(e){if(t.$message.success("删除成功"),t.delVisible=!1,t.tableData[t.idx].id===t.id)t.tableData.splice(t.idx,1);else for(var n=0;n<t.tableData.length;n++)if(t.tableData[n].id===t.id)return void t.tableData.splice(n,1)})).catch((function(e){t.$message.error("服务器错误")}))},getEnvsIdNames:function(){var t=this;Object(c["x"])().then((function(e){t.envs_id_names=e.data})).catch((function(e){t.$message.error("服务器错误")}))},confirmRun:function(){var t=this;Object(c["P"])(this.id,this.env_id).then((function(e){t.$router.push({path:"/reports_view/".concat(e.data.id)})})).catch((function(e){"object"===Object(a["a"])(e)&&e.hasOwnProperty("msg")?t.$message.error(e.msg):t.$message.error("服务器错误")}))},linkTo:function(t){this.$router.push({path:"/testsuites_edit/".concat(t)})}}},s=o,u=(n("d0ef"),n("cba8")),l=Object(u["a"])(s,i,r,!1,null,"8260f42e",null);e["default"]=l.exports},"4ec3":function(t,e,n){"use strict";n.d(e,"D",(function(){return c})),n.d(e,"H",(function(){return o})),n.d(e,"E",(function(){return s})),n.d(e,"k",(function(){return u})),n.d(e,"j",(function(){return l})),n.d(e,"F",(function(){return f})),n.d(e,"q",(function(){return d})),n.d(e,"v",(function(){return p})),n.d(e,"d",(function(){return b})),n.d(e,"G",(function(){return m})),n.d(e,"x",(function(){return g})),n.d(e,"N",(function(){return h})),n.d(e,"h",(function(){return v})),n.d(e,"g",(function(){return _})),n.d(e,"i",(function(){return y})),n.d(e,"C",(function(){return x})),n.d(e,"p",(function(){return k})),n.d(e,"u",(function(){return w})),n.d(e,"c",(function(){return z})),n.d(e,"M",(function(){return j})),n.d(e,"T",(function(){return C})),n.d(e,"s",(function(){return D})),n.d(e,"f",(function(){return $})),n.d(e,"A",(function(){return V})),n.d(e,"W",(function(){return S})),n.d(e,"P",(function(){return O})),n.d(e,"B",(function(){return E})),n.d(e,"S",(function(){return R})),n.d(e,"r",(function(){return T})),n.d(e,"l",(function(){return A})),n.d(e,"R",(function(){return I})),n.d(e,"e",(function(){return J})),n.d(e,"O",(function(){return N})),n.d(e,"z",(function(){return P})),n.d(e,"V",(function(){return q})),n.d(e,"L",(function(){return B})),n.d(e,"I",(function(){return F})),n.d(e,"J",(function(){return G})),n.d(e,"K",(function(){return H})),n.d(e,"m",(function(){return K})),n.d(e,"n",(function(){return L})),n.d(e,"a",(function(){return M})),n.d(e,"y",(function(){return Q})),n.d(e,"U",(function(){return U})),n.d(e,"w",(function(){return W})),n.d(e,"o",(function(){return X})),n.d(e,"t",(function(){return Y})),n.d(e,"b",(function(){return Z})),n.d(e,"Q",(function(){return tt}));var i=n("f753"),r=n.n(i),a="http://127.0.0.1:8000",c=function(t){return r.a.post("".concat(a,"/user/login/"),t)},o=function(t){return r.a.post("".concat(a,"/user/register/"),t)},s=function(t){return r.a.put("".concat(a,"/user/logout/")+t+"/")},u=function(t){return r.a.get("".concat(a,"/user/")+t+"/count/")},l=function(t){return r.a.get("".concat(a,"/user/")+t+"/count/")},f=function(t){return r.a.get("".concat(a,"/projects/?page=")+t.page+"&size="+t.size)},d=function(t){return r.a.delete("".concat(a,"/projects/")+t+"/")},p=function(t,e){return r.a.put("".concat(a,"/projects/")+t+"/",e)},b=function(t){return r.a.post("".concat(a,"/projects/"),t)},m=function(){return r.a.get("".concat(a,"/projects/names/"))},g=function(){return r.a.get("".concat(a,"/envs/names/"))},h=function(t,e){return r.a.post("".concat(a,"/projects/")+t+"/run/",{env_id:e})},v=function(t){return r.a.get("".concat(a,"/debugtalks/?page=")+t.page+"&size="+t.size)},_=function(t){return r.a.get("".concat(a,"/debugtalks/")+t+"/")},y=function(t,e){return r.a.put("".concat(a,"/debugtalks/")+t+"/",{debugtalk:e})},x=function(t){return r.a.get("".concat(a,"/interfaces/?page=")+t.page+"&size="+t.size)},k=function(t){return r.a.delete("".concat(a,"/interfaces/")+t+"/")},w=function(t,e){return r.a.put("".concat(a,"/interfaces/")+t+"/",e)},z=function(t){return r.a.post("".concat(a,"/interfaces/"),t)},j=function(t,e){return r.a.post("".concat(a,"/interfaces/")+t+"/run/",{env_id:e})},C=function(t){return r.a.get("".concat(a,"/testsuits/?page=")+t.page+"&size="+t.size)},D=function(t){return r.a.delete("".concat(a,"/testsuits/")+t+"/")},$=function(t){return r.a.post("".concat(a,"/testsuits/"),t)},V=function(t){return r.a.get("".concat(a,"/testsuits/")+t+"/")},S=function(t,e){return r.a.put("".concat(a,"/testsuits/")+t+"/",e)},O=function(t,e){return r.a.post("".concat(a,"/testsuits/")+t+"/run/",{env_id:e})},E=function(t){return r.a.get("".concat(a,"/projects/")+t+"/interfaces/")},R=function(t){return r.a.get("".concat(a,"/testcases/?page=")+t.page+"&size="+t.size)},T=function(t){return r.a.delete("".concat(a,"/testcases/")+t+"/")},A=function(t){return r.a.get("".concat(a,"/interfaces/")+t+"/configs/")},I=function(t){return r.a.get("".concat(a,"/interfaces/")+t+"/testcases/")},J=function(t){return r.a.post("".concat(a,"/testcases/"),t)},N=function(t,e){return r.a.post("".concat(a,"/testcases/")+t+"/run/",{env_id:e})},P=function(t){return r.a.get("".concat(a,"/testcases/")+t+"/")},q=function(t,e){return r.a.put("".concat(a,"/testcases/")+t+"/",e)},B=function(t){return r.a.get("".concat(a,"/reports/?page=")+t.page+"&size="+t.size)},F=function(t){return r.a.delete("".concat(a,"/reports/")+t+"/")},G=function(t){return r.a.get("".concat(a,"/reports/")+t+"/download/",{responseType:"blob"})},H=function(t){return r.a.get("".concat(a,"/reports/")+t+"/")},K=function(t){return r.a.get("".concat(a,"/configures/?page=")+t.page+"&size="+t.size)},L=function(t){return r.a.delete("".concat(a,"/configures/")+t+"/")},M=function(t){return r.a.post("".concat(a,"/configures/"),t)},Q=function(t){return r.a.get("".concat(a,"/configures/")+t+"/")},U=function(t,e){return r.a.put("".concat(a,"/configures/")+t+"/",e)},W=function(t){return r.a.get("".concat(a,"/envs/?page=")+t.page+"&size="+t.size)},X=function(t){return r.a.delete("".concat(a,"/envs/")+t+"/")},Y=function(t,e){return r.a.put("".concat(a,"/envs/")+t+"/",e)},Z=function(t){return r.a.post("".concat(a,"/envs/"),t)},tt=function(){return r.a.get("".concat(a,"/summary/"))}},"83a7":function(t,e,n){"use strict";function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}n.d(e,"a",(function(){return i}))},c712:function(t,e,n){},d0ef:function(t,e,n){"use strict";n("c712")}}]);