(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de4e2"],{"84a1":function(t,a,e){"use strict";e.r(a);var c=e("7a23"),n={class:"navbar navbar-expand-lg navbar-light bg-light",id:"nav"},o={class:"container"},s=Object(c["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["h"])("span",{class:"navbar-toggler-icon"})],-1),r={class:"collapse navbar-collapse",id:"navbarNav"},i={class:"navbar-nav"},l={class:"nav-item"},u=Object(c["g"])("後台產品"),h={class:"nav-item"},b=Object(c["g"])("後台訂單"),d={class:"nav-item"},v=Object(c["g"])("優惠券");function p(t,a,e,p,g,j){var O=Object(c["A"])("router-link"),f=Object(c["A"])("router-view");return Object(c["v"])(),Object(c["d"])(c["a"],null,[Object(c["h"])("nav",n,[Object(c["h"])("div",o,[s,Object(c["h"])("div",r,[Object(c["h"])("ul",i,[Object(c["h"])("li",l,[Object(c["h"])(O,{to:"/dashaboard/products",class:"nav-link"},{default:Object(c["L"])((function(){return[u]})),_:1})]),Object(c["h"])("li",h,[Object(c["h"])(O,{to:"/dashaboard/orders",class:"nav-link"},{default:Object(c["L"])((function(){return[b]})),_:1})]),Object(c["h"])("li",d,[Object(c["h"])(O,{to:"/dashaboard/coupon",class:"nav-link"},{default:Object(c["L"])((function(){return[v]})),_:1})])]),Object(c["h"])("a",{href:"#",class:"ms-auto text-danger",onClick:a[1]||(a[1]=Object(c["N"])((function(){return j.signout&&j.signout.apply(j,arguments)}),["prevent"]))},"登出")])])]),Object(c["h"])(f)],64)}e("ac1f"),e("5319");var g={methods:{signout:function(){var t=this,a="".concat("https://vue3-course-api.hexschool.io","/logout");this.$http.post(a).then((function(a){a.data.success&&(document.cookie="hexToken=;expires=;",t.$router.push("/login"))})).catch((function(t){console.log(t)}))}},created:function(){var t=this,a=document.cookie.replace(/(?:(?:^|.*;\s*)YuToken\s*=\s*([^;]*).*$)|^.*$/,"$1"),e="".concat("https://vue3-course-api.hexschool.io","/api/user/check");this.$http.defaults.headers.common.Authorization="".concat(a),this.$http.post(e).then((function(a){a.data.success||t.$router.push("/login")})).catch((function(t){console.log(t)}))}};g.render=p;a["default"]=g}}]);
//# sourceMappingURL=chunk-2d0de4e2.f639c679.js.map