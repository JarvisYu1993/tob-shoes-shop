(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-166d3e34"],{"1dde":function(t,e,n){var c=n("d039"),o=n("b622"),i=n("2d00"),r=o("species");t.exports=function(t){return i>=51||!c((function(){var e=[],n=e.constructor={};return n[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},8418:function(t,e,n){"use strict";var c=n("c04e"),o=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var r=c(e);r in t?o.f(t,r,i(0,n)):t[r]=n}},"8cdb":function(t,e,n){"use strict";n.r(e);var c=n("7a23"),o={class:"error-bg py-8"},i={class:"container"},r={class:"row justify-content-center py-10"},l={class:"col-8 col-md-5"},a=Object(c["h"])("h2",{class:"font-lg-4xl text-center text-white fw-bold mb-6 mb-md-8"},"404",-1),s=Object(c["h"])("p",{class:"font-md text-center text-white pt-6 pb-4"}," oh~oh 網頁發生錯誤喔 ",-1),u={class:"d-flex justify-content-center"},b=Object(c["g"])("重新回到首頁");function d(t,e,n,d,f,h){var j=Object(c["A"])("Navbar"),O=Object(c["A"])("router-link"),p=Object(c["A"])("Footer"),m=Object(c["A"])("router-view");return Object(c["v"])(),Object(c["d"])(c["a"],null,[Object(c["h"])(j),Object(c["h"])("section",o,[Object(c["h"])("div",i,[Object(c["h"])("div",r,[Object(c["h"])("div",l,[a,s,Object(c["h"])("div",u,[Object(c["h"])(O,{to:"/",class:"btn btn-secondary text-white"},{default:Object(c["L"])((function(){return[b]})),_:1})])])])])]),Object(c["h"])(p),Object(c["h"])(m)],64)}var f=n("d178"),h=n("fd2d"),j={components:{Navbar:f["a"],Footer:h["a"]}};j.render=d;e["default"]=j},"99af":function(t,e,n){"use strict";var c=n("23e7"),o=n("d039"),i=n("e8b5"),r=n("861d"),l=n("7b0b"),a=n("50c4"),s=n("8418"),u=n("65f0"),b=n("1dde"),d=n("b622"),f=n("2d00"),h=d("isConcatSpreadable"),j=9007199254740991,O="Maximum allowed index exceeded",p=f>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),m=b("concat"),g=function(t){if(!r(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)},v=!p||!m;c({target:"Array",proto:!0,forced:v},{concat:function(t){var e,n,c,o,i,r=l(this),b=u(r,0),d=0;for(e=-1,c=arguments.length;e<c;e++)if(i=-1===e?r:arguments[e],g(i)){if(o=a(i.length),d+o>j)throw TypeError(O);for(n=0;n<o;n++,d++)n in i&&s(b,d,i[n])}else{if(d>=j)throw TypeError(O);s(b,d++,i)}return b.length=d,b}})},b0c0:function(t,e,n){var c=n("83ab"),o=n("9bf2").f,i=Function.prototype,r=i.toString,l=/^\s*function ([^ (]*)/,a="name";c&&!(a in i)&&o(i,a,{configurable:!0,get:function(){try{return r.call(this).match(l)[1]}catch(t){return""}}})},d178:function(t,e,n){"use strict";n("b0c0");var c=n("7a23"),o={class:"sticky-top"},i={class:"header-nav bg-primary d-block d-md-none"},r={class:"container"},l={class:"d-flex align-items-center justify-content-between"},a=Object(c["h"])("h1",null,"TOB",-1),s={class:"d-flex align-items-center"},u=Object(c["h"])("i",{class:"fas fa-shopping-cart font-md text-white"},null,-1),b=Object(c["h"])("i",{class:"fas fa-align-justify font-md"},null,-1),d=Object(c["g"])(" 首頁 "),f=Object(c["g"])(" 所有鞋款 "),h=Object(c["g"])(" 精選鞋款"),j=Object(c["g"])(" 籃球鞋 "),O=Object(c["g"])(" 跑步鞋 "),p=Object(c["g"])(" 休閒鞋 "),m=Object(c["g"])(" 關於我們 "),g=Object(c["g"])(" 登入 "),v={class:"bg-dark text-white text-center fw-bold py-3 d-none d-md-block"},k={class:"header-nav bg-white d-none d-md-block"},w={class:"container"},x={class:"d-flex align-items-center justify-content-between"},M=Object(c["f"])('<ul class="header-icon"><li><a href="#" class="p-2"><i class="fab fa-facebook font-md"></i></a></li><li><a href="#" class="p-2"><i class="fab fa-instagram font-md"></i></a></li><li><a href="https://github.com/JarvisYu1993" class="p-2"><i class="fab fa-github font-md"></i></a></li></ul>',1),C=Object(c["h"])("h1",null,"TOB",-1),y={class:"header-icon"},L={class:"me-4"},_=Object(c["h"])("i",{class:"fas fa-shopping-cart font-md"},null,-1),B={key:0,class:"position-absolute top-20 start-90 translate-middle\n                    badge rounded-pill bg-danger"},$=Object(c["h"])("i",{class:"fas fa-user font-md"},null,-1),A=Object(c["h"])("i",{class:"fas fa-align-justify"},null,-1),I={class:"header-nav bg-primary d-none d-md-block"},N={class:"container-sm"},T={class:"header-bar"},F=Object(c["g"])(" 首頁 "),J={class:"dropdown"},D=Object(c["g"])(" 所有鞋款 "),E=Object(c["g"])(" 精選鞋款"),S=Object(c["g"])(" 籃球鞋 "),Y=Object(c["g"])(" 跑步鞋 "),q=Object(c["g"])(" 休閒鞋 "),z=Object(c["g"])(" 關於我們 ");function G(t,e,n,G,H,K){var P=Object(c["A"])("router-link"),Q=Object(c["A"])("router-view");return Object(c["v"])(),Object(c["d"])(c["a"],null,[Object(c["h"])("header",o,[Object(c["h"])("nav",i,[Object(c["h"])("div",r,[Object(c["h"])("div",l,[Object(c["h"])(P,{to:"/",class:"logo-wrap"},{default:Object(c["L"])((function(){return[a]})),_:1}),Object(c["h"])("ul",s,[Object(c["h"])("li",null,[Object(c["h"])(P,{to:"/cart",class:"p-3"},{default:Object(c["L"])((function(){return[u]})),_:1})]),Object(c["h"])("li",{class:["ham-btn",{active:H.mobileBtn}],onClick:e[1]||(e[1]=function(t){return H.mobileBtn=!H.mobileBtn})},[b],2)])]),Object(c["h"])("ul",{class:["mobile-menu",{active:H.mobileBtn}]},[Object(c["h"])("li",null,[Object(c["h"])(P,{onClick:e[2]||(e[2]=function(t){return H.mobileBtn=!1}),class:["mobile-link",{active:"/"===t.$route.name}],to:"/"},{default:Object(c["L"])((function(){return[d]})),_:1},8,["class"])]),Object(c["h"])("li",null,[Object(c["h"])("a",{href:"#",class:"mobile-link",onClick:e[3]||(e[3]=Object(c["N"])((function(t){return H.openMenu=!H.openMenu}),["prevent"]))}," 商品列表 "),Object(c["h"])("ul",{class:["mobile-dropdown",{active:H.openMenu}]},[Object(c["h"])("li",{onClick:e[4]||(e[4]=function(e){return t.$emit("get-products"),H.openMenu=!1,H.mobileBtn=!1})},[Object(c["h"])(P,{to:"/products/所有鞋款",class:"mobile-link"},{default:Object(c["L"])((function(){return[f]})),_:1})]),Object(c["h"])("li",{onClick:e[5]||(e[5]=function(e){return t.$emit("get-products"),H.openMenu=!1,H.mobileBtn=!1})},[Object(c["h"])(P,{to:"/products/精選鞋款",class:"mobile-link"},{default:Object(c["L"])((function(){return[h]})),_:1})]),Object(c["h"])("li",{onClick:e[6]||(e[6]=function(e){return t.$emit("get-products"),H.openMenu=!1,H.mobileBtn=!1})},[Object(c["h"])(P,{to:"/products/籃球鞋",class:"mobile-link"},{default:Object(c["L"])((function(){return[j]})),_:1})]),Object(c["h"])("li",{onClick:e[7]||(e[7]=function(e){return t.$emit("get-products"),H.openMenu=!1,H.mobileBtn=!1})},[Object(c["h"])(P,{to:"/products/跑步鞋",class:"mobile-link"},{default:Object(c["L"])((function(){return[O]})),_:1})]),Object(c["h"])("li",{onClick:e[8]||(e[8]=function(e){return t.$emit("get-products"),H.openMenu=!1,H.mobileBtn=!1})},[Object(c["h"])(P,{to:"/products/休閒鞋",class:"mobile-link"},{default:Object(c["L"])((function(){return[p]})),_:1})])],2)]),Object(c["h"])("li",null,[Object(c["h"])(P,{onClick:e[9]||(e[9]=function(t){return H.mobileBtn=!1}),class:["mobile-link",{active:"Intro"===t.$route.name}],to:"/about"},{default:Object(c["L"])((function(){return[m]})),_:1},8,["class"])]),Object(c["h"])("li",null,[Object(c["h"])(P,{onClick:e[10]||(e[10]=function(t){return H.mobileBtn=!1}),class:["mobile-link",{active:"Coupon-front"===t.$route.name}],to:"/login"},{default:Object(c["L"])((function(){return[g]})),_:1},8,["class"])])],2)])]),Object(c["h"])("div",v,Object(c["D"])(H.msg),1),Object(c["h"])("nav",k,[Object(c["h"])("div",w,[Object(c["h"])("div",x,[M,Object(c["h"])(P,{to:"/",class:"logo-wrap"},{default:Object(c["L"])((function(){return[C]})),_:1}),Object(c["h"])("ul",y,[Object(c["h"])("li",L,[Object(c["h"])(P,{to:"/cart",class:"p-2 position-relative"},{default:Object(c["L"])((function(){return[_,H.num>=1?(Object(c["v"])(),Object(c["d"])("span",B,Object(c["D"])(H.num),1)):Object(c["e"])("",!0)]})),_:1})]),Object(c["h"])("li",null,[Object(c["h"])(P,{to:"/login",class:"p-2"},{default:Object(c["L"])((function(){return[$]})),_:1})]),Object(c["h"])("li",{class:"ham-btn",onClick:e[11]||(e[11]=Object(c["N"])((function(e){return t.openMainMenu=!t.openMainMenu}),["prevent"]))},[A])])])])]),Object(c["h"])("div",I,[Object(c["h"])("div",N,[Object(c["h"])("ul",T,[Object(c["h"])("li",{onClick:e[12]||(e[12]=function(t){return H.openMenu=!1})},[Object(c["h"])(P,{to:"/",class:"text-white p-2 d-block header-link"},{default:Object(c["L"])((function(){return[F]})),_:1})]),Object(c["h"])("li",J,[Object(c["h"])("a",{href:"#",class:"text-white p-2 d-block dropdown-toggle header-link",onClick:e[13]||(e[13]=Object(c["N"])((function(t){return H.openMenu=!H.openMenu}),["prevent"]))}," 商品列表"),Object(c["h"])("ul",{class:["dropdown-content",{show:H.openMenu}]},[Object(c["h"])("li",{onClick:e[14]||(e[14]=function(e){return t.$emit("get-products"),H.openMenu=!1})},[Object(c["h"])(P,{to:"/products/所有鞋款",class:"dropdown-item"},{default:Object(c["L"])((function(){return[D]})),_:1})]),Object(c["h"])("li",{onClick:e[15]||(e[15]=function(e){return t.$emit("get-products"),H.openMenu=!1})},[Object(c["h"])(P,{to:"/products/精選鞋款",class:"dropdown-item"},{default:Object(c["L"])((function(){return[E]})),_:1})]),Object(c["h"])("li",{onClick:e[16]||(e[16]=function(e){return t.$emit("get-products"),H.openMenu=!1})},[Object(c["h"])(P,{to:"/products/籃球鞋",class:"dropdown-item"},{default:Object(c["L"])((function(){return[S]})),_:1})]),Object(c["h"])("li",{onClick:e[17]||(e[17]=function(e){return t.$emit("get-products"),H.openMenu=!1})},[Object(c["h"])(P,{to:"/products/跑步鞋",class:"dropdown-item"},{default:Object(c["L"])((function(){return[Y]})),_:1})]),Object(c["h"])("li",{onClick:e[18]||(e[18]=function(e){return t.$emit("get-products"),H.openMenu=!1})},[Object(c["h"])(P,{to:"/products/休閒鞋",class:"dropdown-item"},{default:Object(c["L"])((function(){return[q]})),_:1})])],2)]),Object(c["h"])("li",{onClick:e[19]||(e[19]=function(t){return H.openMenu=!1})},[Object(c["h"])(P,{to:"/about",class:"text-white p-2 d-block header-link"},{default:Object(c["L"])((function(){return[z]})),_:1})])])])])]),Object(c["h"])(Q)],64)}n("99af");var H={props:["router"],data:function(){return{msg:"7/7 - 7/30 結帳時輸入7777，即可享七折優惠",intervalId:null,mobileBtn:!1,openMenu:!1,cart:{},num:0}},methods:{getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("maroon5","/cart");this.$http.get(e).then((function(e){e.data.success&&(t.cart=e.data.data,t.num=t.cart.carts.length)})).catch((function(t){console.log(t)}))},lang:function(){var t=this;null==this.intervalId&&(this.intervalId=setInterval((function(){var e=t.msg.substring(0,1),n=t.msg.substring(1);t.msg=n+e}),300))}},created:function(){this.getCart(),this.lang()}};H.render=G;e["a"]=H},fd2d:function(t,e,n){"use strict";var c=n("7a23"),o={class:"py-4 bg-primary"},i=Object(c["f"])('<div class="container"><div class="d-flex flex-column align-items-center"><a href="#"><div class="footer-logo mb-4"></div></a><div class="d-md-flex align-items-md-center justify-content-md-center"><p class="text-white mb-2 mb-md-0">© 2021 TOB All rights resevered.</p><p class="text-white ms-md-4 text-center">圖片僅供學習使用，無商業用途</p></div></div></div>',1);function r(t,e){return Object(c["v"])(),Object(c["d"])("footer",o,[i])}const l={};l.render=r;e["a"]=l}}]);
//# sourceMappingURL=chunk-166d3e34.2725027d.js.map