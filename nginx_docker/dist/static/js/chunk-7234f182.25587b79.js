(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7234f182"],{"0de9":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table"},[n("div",{staticClass:"crumbs"},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",[n("i",{staticClass:"el-icon-lx-calendar"}),t._v(" 报告管理")]),n("el-breadcrumb-item",[t._v("报告列表")])],1)],1),n("div",{staticClass:"container"},[n("div",{staticClass:"handle-box"},[n("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"el-icon-delete"},on:{click:t.delAll}},[t._v("批量删除")]),n("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"输入筛选关键词"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}})],1),n("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.data,border:"",stripe:""},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),n("el-table-column",{attrs:{type:"index",label:"序号",width:"55",align:"center"}}),n("el-table-column",{attrs:{prop:"name",label:"报告名称",width:"350"}}),n("el-table-column",{attrs:{prop:"result",label:"执行结果",width:"80"}}),n("el-table-column",{attrs:{prop:"count",label:"用例总数",width:"80"}}),n("el-table-column",{attrs:{prop:"success",label:"成功总数",width:"80"}}),n("el-table-column",{attrs:{prop:"create_time",label:"创建时间",sortable:"",align:"center"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",icon:"el-icon-view"},on:{click:function(n){return t.handleOpen(e.$index,e.row)}}},[t._v("打开")]),n("el-button",{attrs:{type:"text",icon:"el-icon-download"},on:{click:function(n){return t.handleDownload(e.$index,e.row)}}},[t._v("下载")]),n("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),n("div",{staticClass:"pagination"},[n("el-pagination",{attrs:{background:"","page-sizes":[4,5,8,10,20],layout:"total, sizes, prev, pager, next, jumper",total:t.total_nums,"page-size":t.page_size},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)],1),n("el-dialog",{attrs:{title:"删除套件",visible:t.delVisible,width:"300px",center:""},on:{"update:visible":function(e){t.delVisible=e}}},[n("div",{staticClass:"del-dialog-cnt"},[t._v("删除不可恢复，是否确定删除？")]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.delVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.deleteRow}},[t._v("确 定")])],1)])],1)},c=[],a=(n("a450"),n("4ec3")),i={beforeRouteEnter:function(t,e,n){n((function(t){t.getData()})),n()},name:"basetable",data:function(){return{tableData:[],cur_page:1,page_size:10,total_nums:1,multipleSelection:[],select_word:"",del_list:[],delVisible:!1,form:{},idx:-1,id:-1,env_id:"",envs_id_names:[]}},created:function(){this.getData()},computed:{data:function(){var t=this;return this.tableData.filter((function(e){for(var n=!1,r=0;r<t.del_list.length;r++)if(e.name===t.del_list[r].name){n=!0;break}if(!n&&(e.name.indexOf(t.select_word)>-1||e.result.indexOf(t.select_word)>-1))return e}))}},methods:{handleCurrentChange:function(t){this.cur_page=t,this.getData()},handleSizeChange:function(t){this.page_size=t,this.getData()},getData:function(){var t=this;Object(a["K"])({page:this.cur_page,size:this.page_size}).then((function(e){t.tableData=e.data.results,t.cur_page=e.data.current_page_num||1,t.total_nums=e.data.count||1}))},handleDelete:function(t,e){this.idx=t,this.id=e.id,this.delVisible=!0},handleDownload:function(t,e){var n=this;this.idx=t,this.id=e.id;var r=e.name+".html";Object(a["I"])(this.id).then((function(t){var e=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.href=e,n.setAttribute("download",r),document.body.appendChild(n),n.click(),n.remove()})).catch((function(t){n.$message.error("服务器错误")}))},handleOpen:function(t,e){this.idx=t,this.id=e.id,this.$router.push({path:"/reports_view/".concat(this.id)})},delAll:function(){var t=this,e=this.multipleSelection.length,n="";this.del_list=this.del_list.concat(this.multipleSelection);for(var r=0;r<e;r++)n+=this.multipleSelection[r].name+" ",Object(a["H"])(this.multipleSelection[r].id).then((function(t){})).catch((function(e){t.$message.error("服务器错误")}));0===e?this.$message.error("未选择要删除的条目!"):(this.$message.error("删除了"+n),this.multipleSelection=[])},handleSelectionChange:function(t){this.multipleSelection=t},deleteRow:function(){var t=this;Object(a["H"])(this.id).then((function(e){if(t.$message.success("删除成功"),t.delVisible=!1,t.tableData[t.idx].id===t.id)t.tableData.splice(t.idx,1);else for(var n=0;n<t.tableData.length;n++)if(t.tableData[n].id===t.id)return void t.tableData.splice(n,1)})).catch((function(e){t.$message.error("服务器错误")}))}}},o=i,u=(n("ad86"),n("cba8")),s=Object(u["a"])(o,r,c,!1,null,"6869a33c",null);e["default"]=s.exports},"4ec3":function(t,e,n){"use strict";n.d(e,"D",(function(){return i})),n.d(e,"G",(function(){return o})),n.d(e,"k",(function(){return u})),n.d(e,"j",(function(){return s})),n.d(e,"E",(function(){return l})),n.d(e,"q",(function(){return d})),n.d(e,"v",(function(){return f})),n.d(e,"d",(function(){return p})),n.d(e,"F",(function(){return g})),n.d(e,"x",(function(){return h})),n.d(e,"M",(function(){return b})),n.d(e,"h",(function(){return m})),n.d(e,"g",(function(){return v})),n.d(e,"i",(function(){return _})),n.d(e,"C",(function(){return w})),n.d(e,"p",(function(){return z})),n.d(e,"u",(function(){return x})),n.d(e,"c",(function(){return C})),n.d(e,"L",(function(){return k})),n.d(e,"S",(function(){return D})),n.d(e,"s",(function(){return j})),n.d(e,"f",(function(){return y})),n.d(e,"A",(function(){return S})),n.d(e,"V",(function(){return O})),n.d(e,"O",(function(){return $})),n.d(e,"B",(function(){return V})),n.d(e,"R",(function(){return R})),n.d(e,"r",(function(){return A})),n.d(e,"l",(function(){return E})),n.d(e,"Q",(function(){return H})),n.d(e,"e",(function(){return J})),n.d(e,"N",(function(){return L})),n.d(e,"z",(function(){return T})),n.d(e,"U",(function(){return U})),n.d(e,"K",(function(){return B})),n.d(e,"H",(function(){return I})),n.d(e,"I",(function(){return K})),n.d(e,"J",(function(){return q})),n.d(e,"m",(function(){return F})),n.d(e,"n",(function(){return G})),n.d(e,"a",(function(){return M})),n.d(e,"y",(function(){return N})),n.d(e,"T",(function(){return P})),n.d(e,"w",(function(){return Q})),n.d(e,"o",(function(){return W})),n.d(e,"t",(function(){return X})),n.d(e,"b",(function(){return Y})),n.d(e,"P",(function(){return Z}));var r=n("f753"),c=n.n(r),a="http://127.0.0.1:8000",i=function(t){return c.a.post("".concat(a,"/user/login/"),t)},o=function(t){return c.a.post("".concat(a,"/user/register/"),t)},u=function(t){return c.a.get("".concat(a,"/user/")+t+"/count/")},s=function(t){return c.a.get("".concat(a,"/user/")+t+"/count/")},l=function(t){return c.a.get("".concat(a,"/projects/?page=")+t.page+"&size="+t.size)},d=function(t){return c.a.delete("".concat(a,"/projects/")+t+"/")},f=function(t,e){return c.a.put("".concat(a,"/projects/")+t+"/",e)},p=function(t){return c.a.post("".concat(a,"/projects/"),t)},g=function(){return c.a.get("".concat(a,"/projects/names/"))},h=function(){return c.a.get("".concat(a,"/envs/names/"))},b=function(t,e){return c.a.post("".concat(a,"/projects/")+t+"/run/",{env_id:e})},m=function(t){return c.a.get("".concat(a,"/debugtalks/?page=")+t.page+"&size="+t.size)},v=function(t){return c.a.get("".concat(a,"/debugtalks/")+t+"/")},_=function(t,e){return c.a.put("".concat(a,"/debugtalks/")+t+"/",{debugtalk:e})},w=function(t){return c.a.get("".concat(a,"/interfaces/?page=")+t.page+"&size="+t.size)},z=function(t){return c.a.delete("".concat(a,"/interfaces/")+t+"/")},x=function(t,e){return c.a.put("".concat(a,"/interfaces/")+t+"/",e)},C=function(t){return c.a.post("".concat(a,"/interfaces/"),t)},k=function(t,e){return c.a.post("".concat(a,"/interfaces/")+t+"/run/",{env_id:e})},D=function(t){return c.a.get("".concat(a,"/testsuits/?page=")+t.page+"&size="+t.size)},j=function(t){return c.a.delete("".concat(a,"/testsuits/")+t+"/")},y=function(t){return c.a.post("".concat(a,"/testsuits/"),t)},S=function(t){return c.a.get("".concat(a,"/testsuits/")+t+"/")},O=function(t,e){return c.a.put("".concat(a,"/testsuits/")+t+"/",e)},$=function(t,e){return c.a.post("".concat(a,"/testsuits/")+t+"/run/",{env_id:e})},V=function(t){return c.a.get("".concat(a,"/projects/")+t+"/interfaces/")},R=function(t){return c.a.get("".concat(a,"/testcases/?page=")+t.page+"&size="+t.size)},A=function(t){return c.a.delete("".concat(a,"/testcases/")+t+"/")},E=function(t){return c.a.get("".concat(a,"/interfaces/")+t+"/configs/")},H=function(t){return c.a.get("".concat(a,"/interfaces/")+t+"/testcases/")},J=function(t){return c.a.post("".concat(a,"/testcases/"),t)},L=function(t,e){return c.a.post("".concat(a,"/testcases/")+t+"/run/",{env_id:e})},T=function(t){return c.a.get("".concat(a,"/testcases/")+t+"/")},U=function(t,e){return c.a.put("".concat(a,"/testcases/")+t+"/",e)},B=function(t){return c.a.get("".concat(a,"/reports/?page=")+t.page+"&size="+t.size)},I=function(t){return c.a.delete("".concat(a,"/reports/")+t+"/")},K=function(t){return c.a.get("".concat(a,"/reports/")+t+"/download/",{responseType:"blob"})},q=function(t){return c.a.get("".concat(a,"/reports/")+t+"/")},F=function(t){return c.a.get("".concat(a,"/configures/?page=")+t.page+"&size="+t.size)},G=function(t){return c.a.delete("".concat(a,"/configures/")+t+"/")},M=function(t){return c.a.post("".concat(a,"/configures/"),t)},N=function(t){return c.a.get("".concat(a,"/configures/")+t+"/")},P=function(t,e){return c.a.put("".concat(a,"/configures/")+t+"/",e)},Q=function(t){return c.a.get("".concat(a,"/envs/?page=")+t.page+"&size="+t.size)},W=function(t){return c.a.delete("".concat(a,"/envs/")+t+"/")},X=function(t,e){return c.a.put("".concat(a,"/envs/")+t+"/",e)},Y=function(t){return c.a.post("".concat(a,"/envs/"),t)},Z=function(){return c.a.get("".concat(a,"/summary/"))}},"828a":function(t,e,n){},ad86:function(t,e,n){"use strict";n("828a")}}]);