(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fda7686"],{"22e1":function(t,e,n){"use strict";function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}n.d(e,"a",(function(){return r}))},"4ec3":function(t,e,n){"use strict";n.d(e,"D",(function(){return o})),n.d(e,"G",(function(){return c})),n.d(e,"k",(function(){return s})),n.d(e,"j",(function(){return u})),n.d(e,"E",(function(){return l})),n.d(e,"q",(function(){return f})),n.d(e,"v",(function(){return d})),n.d(e,"d",(function(){return p})),n.d(e,"F",(function(){return m})),n.d(e,"x",(function(){return b})),n.d(e,"M",(function(){return g})),n.d(e,"h",(function(){return h})),n.d(e,"g",(function(){return _})),n.d(e,"i",(function(){return v})),n.d(e,"C",(function(){return w})),n.d(e,"p",(function(){return j})),n.d(e,"u",(function(){return x})),n.d(e,"c",(function(){return y})),n.d(e,"L",(function(){return k})),n.d(e,"S",(function(){return z})),n.d(e,"s",(function(){return C})),n.d(e,"f",(function(){return $})),n.d(e,"A",(function(){return D})),n.d(e,"V",(function(){return S})),n.d(e,"O",(function(){return V})),n.d(e,"B",(function(){return O})),n.d(e,"R",(function(){return E})),n.d(e,"r",(function(){return R})),n.d(e,"l",(function(){return T})),n.d(e,"Q",(function(){return q})),n.d(e,"e",(function(){return A})),n.d(e,"N",(function(){return I})),n.d(e,"z",(function(){return J})),n.d(e,"U",(function(){return N})),n.d(e,"K",(function(){return P})),n.d(e,"H",(function(){return M})),n.d(e,"I",(function(){return B})),n.d(e,"J",(function(){return F})),n.d(e,"m",(function(){return G})),n.d(e,"n",(function(){return H})),n.d(e,"a",(function(){return K})),n.d(e,"y",(function(){return L})),n.d(e,"T",(function(){return Q})),n.d(e,"w",(function(){return U})),n.d(e,"o",(function(){return W})),n.d(e,"t",(function(){return X})),n.d(e,"b",(function(){return Y})),n.d(e,"P",(function(){return Z}));var r=n("f753"),a=n.n(r),i="http://106.12.43.125:8800",o=function(t){return a.a.post("".concat(i,"/user/login/"),t)},c=function(t){return a.a.post("".concat(i,"/user/register/"),t)},s=function(t){return a.a.get("".concat(i,"/user/")+t+"/count/")},u=function(t){return a.a.get("".concat(i,"/user/")+t+"/count/")},l=function(t){return a.a.get("".concat(i,"/projects/?page=")+t.page+"&size="+t.size)},f=function(t){return a.a.delete("".concat(i,"/projects/")+t+"/")},d=function(t,e){return a.a.put("".concat(i,"/projects/")+t+"/",e)},p=function(t){return a.a.post("".concat(i,"/projects/"),t)},m=function(){return a.a.get("".concat(i,"/projects/names/"))},b=function(){return a.a.get("".concat(i,"/envs/names/"))},g=function(t,e){return a.a.post("".concat(i,"/projects/")+t+"/run/",{env_id:e})},h=function(t){return a.a.get("".concat(i,"/debugtalks/?page=")+t.page+"&size="+t.size)},_=function(t){return a.a.get("".concat(i,"/debugtalks/")+t+"/")},v=function(t,e){return a.a.put("".concat(i,"/debugtalks/")+t+"/",{debugtalk:e})},w=function(t){return a.a.get("".concat(i,"/interfaces/?page=")+t.page+"&size="+t.size)},j=function(t){return a.a.delete("".concat(i,"/interfaces/")+t+"/")},x=function(t,e){return a.a.put("".concat(i,"/interfaces/")+t+"/",e)},y=function(t){return a.a.post("".concat(i,"/interfaces/"),t)},k=function(t,e){return a.a.post("".concat(i,"/interfaces/")+t+"/run/",{env_id:e})},z=function(t){return a.a.get("".concat(i,"/testsuits/?page=")+t.page+"&size="+t.size)},C=function(t){return a.a.delete("".concat(i,"/testsuits/")+t+"/")},$=function(t){return a.a.post("".concat(i,"/testsuits/"),t)},D=function(t){return a.a.get("".concat(i,"/testsuits/")+t+"/")},S=function(t,e){return a.a.put("".concat(i,"/testsuits/")+t+"/",e)},V=function(t,e){return a.a.post("".concat(i,"/testsuits/")+t+"/run/",{env_id:e})},O=function(t){return a.a.get("".concat(i,"/projects/")+t+"/interfaces/")},E=function(t){return a.a.get("".concat(i,"/testcases/?page=")+t.page+"&size="+t.size)},R=function(t){return a.a.delete("".concat(i,"/testcases/")+t+"/")},T=function(t){return a.a.get("".concat(i,"/interfaces/")+t+"/configs/")},q=function(t){return a.a.get("".concat(i,"/interfaces/")+t+"/testcases/")},A=function(t){return a.a.post("".concat(i,"/testcases/"),t)},I=function(t,e){return a.a.post("".concat(i,"/testcases/")+t+"/run/",{env_id:e})},J=function(t){return a.a.get("".concat(i,"/testcases/")+t+"/")},N=function(t,e){return a.a.put("".concat(i,"/testcases/")+t+"/",e)},P=function(t){return a.a.get("".concat(i,"/reports/?page=")+t.page+"&size="+t.size)},M=function(t){return a.a.delete("".concat(i,"/reports/")+t+"/")},B=function(t){return a.a.get("".concat(i,"/reports/")+t+"/download/",{responseType:"blob"})},F=function(t){return a.a.get("".concat(i,"/reports/")+t+"/")},G=function(t){return a.a.get("".concat(i,"/configures/?page=")+t.page+"&size="+t.size)},H=function(t){return a.a.delete("".concat(i,"/configures/")+t+"/")},K=function(t){return a.a.post("".concat(i,"/configures/"),t)},L=function(t){return a.a.get("".concat(i,"/configures/")+t+"/")},Q=function(t,e){return a.a.put("".concat(i,"/configures/")+t+"/",e)},U=function(t){return a.a.get("".concat(i,"/envs/?page=")+t.page+"&size="+t.size)},W=function(t){return a.a.delete("".concat(i,"/envs/")+t+"/")},X=function(t,e){return a.a.put("".concat(i,"/envs/")+t+"/",e)},Y=function(t){return a.a.post("".concat(i,"/envs/"),t)},Z=function(){return a.a.get("".concat(i,"/summary/"))}},"76b7":function(t,e,n){"use strict";n("dde2")},dde2:function(t,e,n){},fd7a:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table"},[n("div",{staticClass:"crumbs"},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",[n("i",{staticClass:"el-icon-lx-calendar"}),t._v(" 项目管理")]),n("el-breadcrumb-item",[t._v("项目列表")])],1)],1),n("div",{staticClass:"container"},[n("div",{staticClass:"handle-box"},[n("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"el-icon-delete"},on:{click:t.delAll}},[t._v("批量删除")]),n("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"输入筛选关键词"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}})],1),n("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.data,border:"",stripe:""},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),n("el-table-column",{attrs:{type:"index",label:"序号",width:"55",align:"center"}}),n("el-table-column",{attrs:{prop:"name",label:"项目名称",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[t._v("项目名: "+t._s(e.row.name))]),n("p",[t._v("接口数: "+t._s(e.row.interfaces))]),n("p",[t._v("套件数: "+t._s(e.row.testsuits))]),n("p",[t._v("用例数: "+t._s(e.row.testcases))]),n("p",[t._v("配置数: "+t._s(e.row.configures))]),n("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[n("el-tag",{attrs:{size:"medium"}},[t._v(t._s(e.row.name))])],1)])]}}])}),n("el-table-column",{attrs:{prop:"leader",label:"项目负责人",width:"100",align:"center"}}),n("el-table-column",{attrs:{prop:"publish_app",label:"应用名称",width:"250"}}),n("el-table-column",{attrs:{prop:"tester",label:"测试人员",width:"100",align:"center"}}),n("el-table-column",{attrs:{prop:"create_time",label:"创建时间",sortable:"",align:"center"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(n){return t.handleRun(e.$index,e.row)}}},[t._v("运行")]),n("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(n){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),n("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),n("div",{staticClass:"pagination"},[n("el-pagination",{attrs:{background:"","page-sizes":[4,5,8,10,20],layout:"total, sizes, prev, pager, next, jumper",total:t.total_nums,"page-size":t.page_size},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)],1),n("el-dialog",{attrs:{title:"编辑项目",visible:t.editVisible,width:"30%",center:""},on:{"update:visible":function(e){t.editVisible=e}}},[n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"项目名称"}},[n("el-input",{attrs:{clearable:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"项目负责人"}},[n("el-input",{attrs:{clearable:""},model:{value:t.form.leader,callback:function(e){t.$set(t.form,"leader",e)},expression:"form.leader"}})],1),n("el-form-item",{attrs:{label:"测试人员"}},[n("el-input",{attrs:{clearable:""},model:{value:t.form.tester,callback:function(e){t.$set(t.form,"tester",e)},expression:"form.tester"}})],1),n("el-form-item",{attrs:{label:"开发人员"}},[n("el-input",{attrs:{clearable:""},model:{value:t.form.programmer,callback:function(e){t.$set(t.form,"programmer",e)},expression:"form.programmer"}})],1),n("el-form-item",{attrs:{label:"应用名称"}},[n("el-input",{attrs:{clearable:""},model:{value:t.form.publish_app,callback:function(e){t.$set(t.form,"publish_app",e)},expression:"form.publish_app"}})],1),n("el-form-item",{attrs:{label:"简要描述"}},[n("el-input",{attrs:{clearable:""},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.editVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.saveEdit}},[t._v("确 定")])],1)],1),n("el-dialog",{attrs:{title:"删除项目",visible:t.delVisible,width:"300px",center:""},on:{"update:visible":function(e){t.delVisible=e}}},[n("div",{staticClass:"del-dialog-cnt"},[t._v("删除不可恢复，是否确定删除？")]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.delVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.deleteRow}},[t._v("确 定")])],1)]),n("el-dialog",{attrs:{title:"运行项目",visible:t.runVisible,width:"30%",center:""},on:{"update:visible":function(e){t.runVisible=e}}},[n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"运行环境"}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.env_id,callback:function(e){t.env_id=e},expression:"env_id"}},t._l(t.envs_id_names,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.runVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.confirmRun}},[t._v("运 行")])],1)],1)],1)},a=[],i=n("22e1"),o=(n("a450"),n("4ec3")),c={name:"basetable",data:function(){return{tableData:[],cur_page:1,page_size:10,total_nums:1,multipleSelection:[],select_word:"",del_list:[],editVisible:!1,delVisible:!1,runVisible:!1,form:{},project_idx:-1,project_id:-1,env_id:"",envs_id_names:[]}},created:function(){this.getData(),this.getEnvsIdNames()},computed:{data:function(){var t=this;return this.tableData.filter((function(e){for(var n=!1,r=0;r<t.del_list.length;r++)if(e.name===t.del_list[r].name){n=!0;break}if(!n&&(e.name.indexOf(t.select_word)>-1||e.publish_app.indexOf(t.select_word)>-1||e.leader.indexOf(t.select_word)>-1||e.programmer.indexOf(t.select_word)>-1||e.tester.indexOf(t.select_word)>-1))return e}))}},methods:{handleCurrentChange:function(t){this.cur_page=t,this.getData()},handleSizeChange:function(t){this.page_size=t,this.getData()},getData:function(){var t=this;Object(o["E"])({page:this.cur_page,size:this.page_size}).then((function(e){t.tableData=e.data.results,t.cur_page=e.data.current_page_num||1,t.total_nums=e.data.count||1}))},search:function(){this.is_search=!0},formatter:function(t,e){return t.address},filterTag:function(t,e){return e.tag===t},handleEdit:function(t,e){this.project_idx=t,this.project_id=e.id,this.form=e,this.editVisible=!0},handleRun:function(t,e){this.project_idx=t,this.project_id=e.id,this.form=e,this.runVisible=!0},handleDelete:function(t,e){this.project_idx=t,this.project_id=e.id,this.delVisible=!0},delAll:function(){var t=this,e=this.multipleSelection.length,n="";this.del_list=this.del_list.concat(this.multipleSelection);for(var r=0;r<e;r++)n+=this.multipleSelection[r].name+" ",Object(o["q"])(this.multipleSelection[r].id).then((function(t){})).catch((function(e){t.$message.error("服务器错误")}));this.$message.error("删除了"+n),this.multipleSelection=[]},handleSelectionChange:function(t){this.multipleSelection=t},saveEdit:function(){var t=this;Object(o["v"])(this.project_id,this.form).then((function(e){if(t.editVisible=!1,t.$message.success("修改【 ".concat(t.form.name," 】成功")),t.tableData[t.project_idx].id===t.project_id)t.$set(t.tableData,t.project_idx,t.form);else for(var n=0;n<t.tableData.length;n++)if(t.tableData[n].id===t.project_id)return void t.$set(t.tableData,n,t.form)})).catch((function(e){t.editVisible=!1,t.$message.error("服务器错误")}))},deleteRow:function(){var t=this;Object(o["q"])(this.project_id).then((function(e){if(t.$message.success("删除成功"),t.delVisible=!1,t.tableData[t.project_idx].id===t.project_id)t.tableData.splice(t.project_idx,1);else for(var n=0;n<t.tableData.length;n++)if(t.tableData[n].id===t.project_id)return void t.tableData.splice(n,1)})).catch((function(e){t.$message.error("服务器错误")}))},getEnvsIdNames:function(){var t=this;Object(o["x"])().then((function(e){t.envs_id_names=e.data})).catch((function(e){t.$message.error("服务器错误")}))},confirmRun:function(){var t=this;Object(o["M"])(this.project_id,this.env_id).then((function(e){t.$router.push({path:"/reports_view/".concat(e.data.id)})})).catch((function(e){"object"===Object(i["a"])(e)&&e.hasOwnProperty("msg")?t.$message.error(e.msg):"object"===Object(i["a"])(e)&&e.hasOwnProperty("detail")?t.$message.error(e.detail):t.$message.error("服务器错误")}))}}},s=c,u=(n("76b7"),n("4ac2")),l=Object(u["a"])(s,r,a,!1,null,"20532d22",null);e["default"]=l.exports}}]);