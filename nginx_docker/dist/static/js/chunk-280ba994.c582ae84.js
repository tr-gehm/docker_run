(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-280ba994"],{"4ec3":function(t,n,e){"use strict";e.d(n,"D",(function(){return u})),e.d(n,"G",(function(){return a})),e.d(n,"k",(function(){return i})),e.d(n,"j",(function(){return s})),e.d(n,"E",(function(){return f})),e.d(n,"q",(function(){return l})),e.d(n,"v",(function(){return d})),e.d(n,"d",(function(){return p})),e.d(n,"F",(function(){return m})),e.d(n,"x",(function(){return g})),e.d(n,"M",(function(){return b})),e.d(n,"h",(function(){return v})),e.d(n,"g",(function(){return j})),e.d(n,"i",(function(){return y})),e.d(n,"C",(function(){return h})),e.d(n,"p",(function(){return _})),e.d(n,"u",(function(){return z})),e.d(n,"c",(function(){return k})),e.d(n,"L",(function(){return $})),e.d(n,"S",(function(){return x})),e.d(n,"s",(function(){return w})),e.d(n,"f",(function(){return S})),e.d(n,"A",(function(){return q})),e.d(n,"V",(function(){return O})),e.d(n,"O",(function(){return C})),e.d(n,"B",(function(){return F})),e.d(n,"R",(function(){return V})),e.d(n,"r",(function(){return P})),e.d(n,"l",(function(){return J})),e.d(n,"Q",(function(){return N})),e.d(n,"e",(function(){return E})),e.d(n,"N",(function(){return I})),e.d(n,"z",(function(){return T})),e.d(n,"U",(function(){return A})),e.d(n,"K",(function(){return B})),e.d(n,"H",(function(){return D})),e.d(n,"I",(function(){return G})),e.d(n,"J",(function(){return H})),e.d(n,"m",(function(){return K})),e.d(n,"n",(function(){return L})),e.d(n,"a",(function(){return M})),e.d(n,"y",(function(){return Q})),e.d(n,"T",(function(){return R})),e.d(n,"w",(function(){return U})),e.d(n,"o",(function(){return W})),e.d(n,"t",(function(){return X})),e.d(n,"b",(function(){return Y})),e.d(n,"P",(function(){return Z}));var r=e("f753"),c=e.n(r),o="http://121.43.178.79:8800",u=function(t){return c.a.post("".concat(o,"/user/login/"),t)},a=function(t){return c.a.post("".concat(o,"/user/register/"),t)},i=function(t){return c.a.get("".concat(o,"/user/")+t+"/count/")},s=function(t){return c.a.get("".concat(o,"/user/")+t+"/count/")},f=function(t){return c.a.get("".concat(o,"/projects/?page=")+t.page+"&size="+t.size)},l=function(t){return c.a.delete("".concat(o,"/projects/")+t+"/")},d=function(t,n){return c.a.put("".concat(o,"/projects/")+t+"/",n)},p=function(t){return c.a.post("".concat(o,"/projects/"),t)},m=function(){return c.a.get("".concat(o,"/projects/names/"))},g=function(){return c.a.get("".concat(o,"/envs/names/"))},b=function(t,n){return c.a.post("".concat(o,"/projects/")+t+"/run/",{env_id:n})},v=function(t){return c.a.get("".concat(o,"/debugtalks/?page=")+t.page+"&size="+t.size)},j=function(t){return c.a.get("".concat(o,"/debugtalks/")+t+"/")},y=function(t,n){return c.a.put("".concat(o,"/debugtalks/")+t+"/",{debugtalk:n})},h=function(t){return c.a.get("".concat(o,"/interfaces/?page=")+t.page+"&size="+t.size)},_=function(t){return c.a.delete("".concat(o,"/interfaces/")+t+"/")},z=function(t,n){return c.a.put("".concat(o,"/interfaces/")+t+"/",n)},k=function(t){return c.a.post("".concat(o,"/interfaces/"),t)},$=function(t,n){return c.a.post("".concat(o,"/interfaces/")+t+"/run/",{env_id:n})},x=function(t){return c.a.get("".concat(o,"/testsuits/?page=")+t.page+"&size="+t.size)},w=function(t){return c.a.delete("".concat(o,"/testsuits/")+t+"/")},S=function(t){return c.a.post("".concat(o,"/testsuits/"),t)},q=function(t){return c.a.get("".concat(o,"/testsuits/")+t+"/")},O=function(t,n){return c.a.put("".concat(o,"/testsuits/")+t+"/",n)},C=function(t,n){return c.a.post("".concat(o,"/testsuits/")+t+"/run/",{env_id:n})},F=function(t){return c.a.get("".concat(o,"/projects/")+t+"/interfaces/")},V=function(t){return c.a.get("".concat(o,"/testcases/?page=")+t.page+"&size="+t.size)},P=function(t){return c.a.delete("".concat(o,"/testcases/")+t+"/")},J=function(t){return c.a.get("".concat(o,"/interfaces/")+t+"/configs/")},N=function(t){return c.a.get("".concat(o,"/interfaces/")+t+"/testcases/")},E=function(t){return c.a.post("".concat(o,"/testcases/"),t)},I=function(t,n){return c.a.post("".concat(o,"/testcases/")+t+"/run/",{env_id:n})},T=function(t){return c.a.get("".concat(o,"/testcases/")+t+"/")},A=function(t,n){return c.a.put("".concat(o,"/testcases/")+t+"/",n)},B=function(t){return c.a.get("".concat(o,"/reports/?page=")+t.page+"&size="+t.size)},D=function(t){return c.a.delete("".concat(o,"/reports/")+t+"/")},G=function(t){return c.a.get("".concat(o,"/reports/")+t+"/download/",{responseType:"blob"})},H=function(t){return c.a.get("".concat(o,"/reports/")+t+"/")},K=function(t){return c.a.get("".concat(o,"/configures/?page=")+t.page+"&size="+t.size)},L=function(t){return c.a.delete("".concat(o,"/configures/")+t+"/")},M=function(t){return c.a.post("".concat(o,"/configures/"),t)},Q=function(t){return c.a.get("".concat(o,"/configures/")+t+"/")},R=function(t,n){return c.a.put("".concat(o,"/configures/")+t+"/",n)},U=function(t){return c.a.get("".concat(o,"/envs/?page=")+t.page+"&size="+t.size)},W=function(t){return c.a.delete("".concat(o,"/envs/")+t+"/")},X=function(t,n){return c.a.put("".concat(o,"/envs/")+t+"/",n)},Y=function(t){return c.a.post("".concat(o,"/envs/"),t)},Z=function(){return c.a.get("".concat(o,"/summary/"))}},"83a7":function(t,n,e){"use strict";function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}e.d(n,"a",(function(){return r}))},e986:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"crumbs"},[e("el-breadcrumb",{attrs:{separator:"/"}},[e("el-breadcrumb-item",[e("i",{staticClass:"el-icon-lx-calendar"}),t._v(" 接口管理")]),e("el-breadcrumb-item",[t._v("新增接口")])],1)],1),e("div",{staticClass:"container"},[e("div",{staticClass:"form-box"},[e("el-form",{ref:"form",attrs:{rules:t.rules,model:t.form,"label-width":"100px"}},[e("el-form-item",{attrs:{label:"接口名称",prop:"name",required:""}},[e("el-input",{attrs:{"suffix-icon":"el-icon-menu",clearable:""},on:{focus:function(n){return t.clearValidate("name")}},model:{value:t.form.name,callback:function(n){t.$set(t.form,"name",n)},expression:"form.name"}})],1),e("el-form-item",{attrs:{label:"测试人员",prop:"tester",required:""}},[e("el-input",{attrs:{"suffix-icon":"el-icon-user-solid",clearable:""},on:{focus:function(n){return t.clearValidate("tester")}},model:{value:t.form.tester,callback:function(n){t.$set(t.form,"tester",n)},expression:"form.tester"}})],1),e("el-form-item",{attrs:{label:"所属项目",prop:"project_id",required:""}},[e("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.project_id,callback:function(n){t.$set(t.form,"project_id",n)},expression:"form.project_id"}},t._l(t.project_names,(function(t,n){return e("el-option",{key:n,attrs:{label:t.name,value:t.id}})})),1)],1),e("el-form-item",{attrs:{label:"简要描述",prop:"desc"}},[e("el-input",{attrs:{type:"textarea",rows:"4",clearable:""},model:{value:t.form.desc,callback:function(n){t.$set(t.form,"desc",n)},expression:"form.desc"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.onSubmit("form")}}},[t._v("提交")]),e("el-button",{on:{click:function(n){return t.resetForm("form")}}},[t._v("取消")])],1)],1)],1)])])},c=[],o=e("83a7"),u=e("4ec3"),a={name:"baseform",data:function(){return{form:{name:"",tester:"",project_id:"",desc:""},rules:{name:[{required:!0,message:"请输入接口名称",trigger:"blur"}],tester:[{required:!0,message:"请输入测试人员",trigger:"blur"}],project_id:[{required:!0,message:"请选择所属项目",trigger:"blur"}]},project_names:[]}},created:function(){this.getProjectNames()},methods:{onSubmit:function(t){var n=this;this.$refs[t].validate((function(t){if(!t)return n.$message.error("参数有误"),!1;var e=n;Object(u["c"])(n.form).then((function(t){n.$message.success("新增接口成功！"),setInterval((function(){e.$router.go()}),1e3)})).catch((function(t){"object"===Object(o["a"])(t)&&t.hasOwnProperty("name")?n.$message.error("接口名称已存在"):(console.log(t),n.$message.error("服务器错误"))}))}))},clearValidate:function(t){this.$refs["form"].clearValidate(t)},resetForm:function(t){this.$refs[t].resetFields()},getProjectNames:function(){var t=this;Object(u["F"])().then((function(n){t.project_names=n.data})).catch((function(t){that.$message.error("服务器错误")}))}}},i=a,s=e("cba8"),f=Object(s["a"])(i,r,c,!1,null,null,null);n["default"]=f.exports}}]);