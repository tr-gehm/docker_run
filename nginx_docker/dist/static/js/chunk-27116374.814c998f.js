(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27116374"],{1644:function(t,n,s){},"4ec3":function(t,n,s){"use strict";s.d(n,"D",(function(){return i})),s.d(n,"G",(function(){return a})),s.d(n,"k",(function(){return o})),s.d(n,"j",(function(){return u})),s.d(n,"E",(function(){return d})),s.d(n,"q",(function(){return l})),s.d(n,"v",(function(){return f})),s.d(n,"d",(function(){return g})),s.d(n,"F",(function(){return p})),s.d(n,"x",(function(){return v})),s.d(n,"M",(function(){return _})),s.d(n,"h",(function(){return h})),s.d(n,"g",(function(){return C})),s.d(n,"i",(function(){return m})),s.d(n,"C",(function(){return b})),s.d(n,"p",(function(){return w})),s.d(n,"u",(function(){return y})),s.d(n,"c",(function(){return k})),s.d(n,"L",(function(){return x})),s.d(n,"S",(function(){return z})),s.d(n,"s",(function(){return j})),s.d(n,"f",(function(){return O})),s.d(n,"A",(function(){return D})),s.d(n,"V",(function(){return E})),s.d(n,"O",(function(){return J})),s.d(n,"B",(function(){return S})),s.d(n,"R",(function(){return P})),s.d(n,"r",(function(){return R})),s.d(n,"l",(function(){return T})),s.d(n,"Q",(function(){return $})),s.d(n,"e",(function(){return q})),s.d(n,"N",(function(){return A})),s.d(n,"z",(function(){return B})),s.d(n,"U",(function(){return F})),s.d(n,"K",(function(){return G})),s.d(n,"H",(function(){return H})),s.d(n,"I",(function(){return I})),s.d(n,"J",(function(){return K})),s.d(n,"m",(function(){return L})),s.d(n,"n",(function(){return M})),s.d(n,"a",(function(){return N})),s.d(n,"y",(function(){return Q})),s.d(n,"T",(function(){return U})),s.d(n,"w",(function(){return V})),s.d(n,"o",(function(){return W})),s.d(n,"t",(function(){return X})),s.d(n,"b",(function(){return Y})),s.d(n,"P",(function(){return Z}));var e=s("f753"),r=s.n(e),c="http://121.43.178.79:8000",i=function(t){return r.a.post("".concat(c,"/user/login/"),t)},a=function(t){return r.a.post("".concat(c,"/user/register/"),t)},o=function(t){return r.a.get("".concat(c,"/user/")+t+"/count/")},u=function(t){return r.a.get("".concat(c,"/user/")+t+"/count/")},d=function(t){return r.a.get("".concat(c,"/projects/?page=")+t.page+"&size="+t.size)},l=function(t){return r.a.delete("".concat(c,"/projects/")+t+"/")},f=function(t,n){return r.a.put("".concat(c,"/projects/")+t+"/",n)},g=function(t){return r.a.post("".concat(c,"/projects/"),t)},p=function(){return r.a.get("".concat(c,"/projects/names/"))},v=function(){return r.a.get("".concat(c,"/envs/names/"))},_=function(t,n){return r.a.post("".concat(c,"/projects/")+t+"/run/",{env_id:n})},h=function(t){return r.a.get("".concat(c,"/debugtalks/?page=")+t.page+"&size="+t.size)},C=function(t){return r.a.get("".concat(c,"/debugtalks/")+t+"/")},m=function(t,n){return r.a.put("".concat(c,"/debugtalks/")+t+"/",{debugtalk:n})},b=function(t){return r.a.get("".concat(c,"/interfaces/?page=")+t.page+"&size="+t.size)},w=function(t){return r.a.delete("".concat(c,"/interfaces/")+t+"/")},y=function(t,n){return r.a.put("".concat(c,"/interfaces/")+t+"/",n)},k=function(t){return r.a.post("".concat(c,"/interfaces/"),t)},x=function(t,n){return r.a.post("".concat(c,"/interfaces/")+t+"/run/",{env_id:n})},z=function(t){return r.a.get("".concat(c,"/testsuits/?page=")+t.page+"&size="+t.size)},j=function(t){return r.a.delete("".concat(c,"/testsuits/")+t+"/")},O=function(t){return r.a.post("".concat(c,"/testsuits/"),t)},D=function(t){return r.a.get("".concat(c,"/testsuits/")+t+"/")},E=function(t,n){return r.a.put("".concat(c,"/testsuits/")+t+"/",n)},J=function(t,n){return r.a.post("".concat(c,"/testsuits/")+t+"/run/",{env_id:n})},S=function(t){return r.a.get("".concat(c,"/projects/")+t+"/interfaces/")},P=function(t){return r.a.get("".concat(c,"/testcases/?page=")+t.page+"&size="+t.size)},R=function(t){return r.a.delete("".concat(c,"/testcases/")+t+"/")},T=function(t){return r.a.get("".concat(c,"/interfaces/")+t+"/configs/")},$=function(t){return r.a.get("".concat(c,"/interfaces/")+t+"/testcases/")},q=function(t){return r.a.post("".concat(c,"/testcases/"),t)},A=function(t,n){return r.a.post("".concat(c,"/testcases/")+t+"/run/",{env_id:n})},B=function(t){return r.a.get("".concat(c,"/testcases/")+t+"/")},F=function(t,n){return r.a.put("".concat(c,"/testcases/")+t+"/",n)},G=function(t){return r.a.get("".concat(c,"/reports/?page=")+t.page+"&size="+t.size)},H=function(t){return r.a.delete("".concat(c,"/reports/")+t+"/")},I=function(t){return r.a.get("".concat(c,"/reports/")+t+"/download/",{responseType:"blob"})},K=function(t){return r.a.get("".concat(c,"/reports/")+t+"/")},L=function(t){return r.a.get("".concat(c,"/configures/?page=")+t.page+"&size="+t.size)},M=function(t){return r.a.delete("".concat(c,"/configures/")+t+"/")},N=function(t){return r.a.post("".concat(c,"/configures/"),t)},Q=function(t){return r.a.get("".concat(c,"/configures/")+t+"/")},U=function(t,n){return r.a.put("".concat(c,"/configures/")+t+"/",n)},V=function(t){return r.a.get("".concat(c,"/envs/?page=")+t.page+"&size="+t.size)},W=function(t){return r.a.delete("".concat(c,"/envs/")+t+"/")},X=function(t,n){return r.a.put("".concat(c,"/envs/")+t+"/",n)},Y=function(t){return r.a.post("".concat(c,"/envs/"),t)},Z=function(){return r.a.get("".concat(c,"/summary/"))}},7159:function(t,n,s){t.exports=s.p+"static/img/img.146655c9.jpg"},c495:function(t,n,s){"use strict";s("1644")},e2ad:function(t,n,s){"use strict";s.r(n);var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("el-row",{attrs:{gutter:50}},[e("el-col",{attrs:{span:8}},[e("el-card",{staticClass:"mgb20",staticStyle:{height:"252px"},attrs:{shadow:"hover"}},[e("div",{staticClass:"user-info"},[e("img",{staticClass:"user-avator",attrs:{src:s("7159"),alt:""}}),e("div",{staticClass:"user-info-cont"},[e("div",{staticClass:"user-info-name"},[t._v(t._s(t.user.username))]),e("div",[t._v(t._s(t.user.role))])])]),e("div",{staticClass:"user-info-list"},[t._v("用户创建时间："),e("span",[t._v(t._s(t.user.date_joined))])]),e("div",{staticClass:"user-info-list"},[t._v("上次登录时间："),e("span",[t._v(t._s(t.user.last_login))])])]),e("el-card",{staticStyle:{height:"180px"},attrs:{shadow:"hover"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("用例执行比率")])]),e("span",[t._v("成功率")]),e("el-progress",{attrs:{"text-inside":!0,"stroke-width":24,percentage:t.statistics.success_rate,status:"success"}}),e("span",[t._v("失败率")]),e("el-progress",{attrs:{"text-inside":!0,"stroke-width":20,percentage:t.statistics.fail_rate,status:"exception"}})],1)],1),e("el-col",{attrs:{span:16}},[e("el-row",{staticClass:"mgb20",attrs:{gutter:60}},[e("el-col",{attrs:{span:12}},[e("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[e("div",{staticClass:"grid-content grid-con-1"},[e("i",{staticClass:"el-icon-s-claim grid-con-icon"}),e("div",{staticClass:"grid-cont-right"},[e("router-link",{staticClass:"grid-num",attrs:{to:{name:"projects_list"}}},[t._v("\n                                    "+t._s(t.statistics.projects_count)+"\n                                ")]),e("div",[t._v("项目总数")])],1)])])],1),e("el-col",{attrs:{span:12}},[e("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[e("div",{staticClass:"grid-content grid-con-2"},[e("i",{staticClass:"el-icon-s-flag grid-con-icon"}),e("div",{staticClass:"grid-cont-right"},[e("router-link",{staticClass:"grid-num",attrs:{to:{name:"interfaces_list"}}},[t._v("\n                                    "+t._s(t.statistics.interfaces_count)+"\n                                ")]),e("div",[t._v("接口总数")])],1)])])],1)],1),e("el-row",{staticClass:"mgb20",attrs:{gutter:60}},[e("el-col",{attrs:{span:12}},[e("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[e("div",{staticClass:"grid-content grid-con-3"},[e("i",{staticClass:"el-icon-s-opportunity grid-con-icon"}),e("div",{staticClass:"grid-cont-right"},[e("router-link",{staticClass:"grid-num",attrs:{to:{name:"testcases_list"}}},[t._v("\n                                    "+t._s(t.statistics.testcases_count)+"\n                                ")]),e("div",[t._v("用例总数")])],1)])])],1),e("el-col",{attrs:{span:12}},[e("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[e("div",{staticClass:"grid-content grid-con-4"},[e("i",{staticClass:"el-icon-files grid-con-icon"}),e("div",{staticClass:"grid-cont-right"},[e("router-link",{staticClass:"grid-num",attrs:{to:{name:"testsuites_list"}}},[t._v("\n                                    "+t._s(t.statistics.testsuits_count)+"\n                                ")]),e("div",[t._v("套件总数")])],1)])])],1)],1),e("el-row",{staticClass:"mgb20",attrs:{gutter:60}},[e("el-col",{attrs:{span:12}},[e("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[e("div",{staticClass:"grid-content grid-con-1"},[e("i",{staticClass:"el-icon-s-ticket grid-con-icon"}),e("div",{staticClass:"grid-cont-right"},[e("router-link",{staticClass:"grid-num",attrs:{to:{name:"configures_list"}}},[t._v("\n                                    "+t._s(t.statistics.configures_count)+"\n                                ")]),e("div",[t._v("配置总数")])],1)])])],1),e("el-col",{attrs:{span:12}},[e("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[e("div",{staticClass:"grid-content grid-con-2"},[e("i",{staticClass:"el-icon-s-open grid-con-icon"}),e("div",{staticClass:"grid-cont-right"},[e("router-link",{staticClass:"grid-num",attrs:{to:{name:"envs_list"}}},[t._v("\n                                    "+t._s(t.statistics.envs_count)+"\n                                ")]),e("div",[t._v("环境变量总数")])],1)])])],1)],1),e("el-row",{staticClass:"mgb20",attrs:{gutter:60}},[e("el-col",{attrs:{span:12}},[e("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[e("div",{staticClass:"grid-content grid-con-3"},[e("i",{staticClass:"el-icon-s-tools grid-con-icon"}),e("div",{staticClass:"grid-cont-right"},[e("router-link",{staticClass:"grid-num",attrs:{to:{name:"builtin_list"}}},[t._v("\n                                    "+t._s(t.statistics.debug_talks_count)+"\n                                ")]),e("div",[t._v("内置函数总数")])],1)])])],1),e("el-col",{attrs:{span:12}},[e("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[e("div",{staticClass:"grid-content grid-con-4"},[e("i",{staticClass:"el-icon-s-marketing grid-con-icon"}),e("div",{staticClass:"grid-cont-right"},[e("router-link",{staticClass:"grid-num",attrs:{to:{name:"reports_list"}}},[t._v("\n                                    "+t._s(t.statistics.reports_count)+"\n                                ")]),e("div",[t._v("测试报告总数")])],1)])])],1)],1)],1)],1)],1)},r=[],c=s("4ec3"),i={beforeRouteEnter:function(t,n,s){s((function(t){t.getData()})),s()},name:"dashboard",data:function(){return{user:Object,statistics:Object}},created:function(){this.getData()},methods:{getData:function(){var t=this;Object(c["P"])().then((function(n){t.user=n.data.user,t.statistics=n.data.statistics})).catch((function(n){t.$message.error("服务器错误")}))}}},a=i,o=(s("c495"),s("cba8")),u=Object(o["a"])(a,e,r,!1,null,"2723b680",null);n["default"]=u.exports}}]);