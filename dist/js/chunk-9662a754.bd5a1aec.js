(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9662a754"],{"6ff1":function(t,e,c){"use strict";var a=c("7a23"),l={id:"delProductModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},d={class:"modal-dialog"},n={class:"modal-content border-0"},o=Object(a["h"])("div",{class:"modal-header bg-danger text-white"},[Object(a["h"])("h5",{id:"delProductModalLabel",class:"modal-title"},[Object(a["h"])("span",null,"刪除產品")]),Object(a["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),r={class:"modal-body"},s=Object(a["g"])(" 是否刪除 "),i={class:"text-danger"},b=Object(a["g"])(" (刪除後將無法恢復)。 "),h={class:"modal-footer"},O=Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function u(t,e,c,u,j,p){return Object(a["v"])(),Object(a["d"])("div",l,[Object(a["h"])("div",d,[Object(a["h"])("div",n,[o,Object(a["h"])("div",r,[s,Object(a["h"])("strong",i,Object(a["D"])(c.product.title),1),b]),Object(a["h"])("div",h,[O,Object(a["h"])("button",{type:"button",class:"btn btn-danger",onClick:e[1]||(e[1]=function(e){return t.$emit("delete")})}," 確認刪除 ")])])])],512)}var j=c("7c2b"),p=c.n(j),m={props:{product:{type:Object,default:function(){return{}}}},data:function(){return{modal:""}},mounted:function(){this.modal=new p.a(this.$refs.modal,{keyboard:!1,backdrop:"static"})},methods:{openModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()}}};m.render=u;e["a"]=m},b0c0:function(t,e,c){var a=c("83ab"),l=c("9bf2").f,d=Function.prototype,n=d.toString,o=/^\s*function ([^ (]*)/,r="name";a&&!(r in d)&&l(d,r,{configurable:!0,get:function(){try{return n.call(this).match(o)[1]}catch(t){return""}}})},efd9:function(t,e,c){"use strict";c.r(e);var a=c("7a23"),l={class:"container pt-4"},d={class:"table mt-4 border-top table-hover"},n=Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th",null,"購買時間"),Object(a["h"])("th",null,"Email"),Object(a["h"])("th",null,"購買款項"),Object(a["h"])("th",null,"應付金額"),Object(a["h"])("th",null,"是否付款"),Object(a["h"])("th",null,"編輯")])],-1),o={class:"list-unstyled"},r={class:"text-right"},s={class:"form-check form-switch"},i={key:0},b={key:1},h=Object(a["h"])("span",{class:"material-icons"},"edit",-1),O=Object(a["h"])("span",{class:"material-icons"},"delete",-1);function u(t,e,c,u,j,p){var m=Object(a["A"])("pulse-loader"),f=Object(a["A"])("pagination"),v=Object(a["A"])("orderModal"),g=Object(a["A"])("delOrder");return Object(a["v"])(),Object(a["d"])("div",l,[Object(a["h"])(m,{loading:j.loading,color:j.color},null,8,["loading","color"]),Object(a["h"])("table",d,[n,Object(a["h"])("tbody",null,[(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["z"])(j.orders,(function(e,c){return Object(a["v"])(),Object(a["d"])(a["a"],{key:"order".concat(c)},[j.orders.length?(Object(a["v"])(),Object(a["d"])("tr",{key:0,class:["border-top",{"text-grizzle":!e.is_paid}]},[Object(a["h"])("td",null,Object(a["D"])(t.$date(e.create_at)),1),Object(a["h"])("td",null,[Object(a["h"])("span",null,Object(a["D"])(e.user.email),1)]),Object(a["h"])("td",null,[Object(a["h"])("ul",o,[(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["z"])(e.products,(function(t,e){return Object(a["v"])(),Object(a["d"])("li",{key:e},Object(a["D"])(t.product.title)+" 數量："+Object(a["D"])(t.qty)+" "+Object(a["D"])(t.product.unit),1)})),128))])]),Object(a["h"])("td",r,Object(a["D"])(Math.round(e.total)),1),Object(a["h"])("td",null,[Object(a["h"])("div",s,[Object(a["M"])(Object(a["h"])("input",{class:"form-check-input",type:"checkbox",id:"paidSwitch".concat(e.id),"onUpdate:modelValue":function(t){return e.is_paid=t},onChange:function(t){return p.updatePaid(e)}},null,40,["id","onUpdate:modelValue","onChange"]),[[a["G"],e.is_paid]]),Object(a["h"])("label",{class:"form-check-label",for:"paidSwitch".concat(e.id)},[e.is_paid?(Object(a["v"])(),Object(a["d"])("span",i,"已付款")):(Object(a["v"])(),Object(a["d"])("span",b,"未付款"))],8,["for"])])]),Object(a["h"])("td",null,[Object(a["h"])("a",{href:"#",class:"editBtn me-2",onClick:Object(a["N"])((function(t){return p.openOrderModal(e)}),["prevent"])},[h],8,["onClick"]),Object(a["h"])("a",{href:"#",class:"deleteBtn",onClick:Object(a["N"])((function(t){return p.openDelOrderModal(e)}),["prevent"])},[O],8,["onClick"])])],2)):Object(a["e"])("",!0)],64)})),128))])]),Object(a["h"])(f,{page:j.pagination,onGetProduct:p.getOrders},null,8,["page","onGetProduct"]),Object(a["h"])(v,{ref:"orderModal",order:j.tempOrder,onUpdatePaid:p.updatePaid},null,8,["order","onUpdatePaid"]),Object(a["h"])(g,{ref:"delOrder",product:j.tempOrder,onDelete:p.delOrder},null,8,["product","onDelete"])])}var j=c("5530"),p=(c("99af"),c("1799")),m=(c("b0c0"),{class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),f={class:"modal-dialog modal-xl",role:"document"},v={class:"modal-content border-0"},g=Object(a["h"])("div",{class:"modal-header bg-dark text-white"},[Object(a["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(a["h"])("span",null,"訂單資訊")]),Object(a["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),y={class:"modal-body bg-light p-5"},k={class:"row"},M={class:"col-12 rounded shadow bg-white pt-3 mb-3"},w={class:"d-flex align-items-start"},D=Object(a["h"])("h3",{class:"me-2"},"收件人資料",-1),x={key:0,class:"badge rounded-pill bg-danger"},_={key:1,class:"badge rounded-pill bg-success"},$=Object(a["h"])("hr",null,null,-1),C={key:0,class:"mb-3"},P={class:"d-flex align-items-center mb-2"},z=Object(a["h"])("h4",{class:"font-normal fw-bold me-4"},"收件人姓名",-1),L={class:"font-normal"},U={class:"d-flex align-items-center mb-2"},A=Object(a["h"])("h4",{class:"font-normal fw-bold me-4"},"收件人地址",-1),G={class:"font-normal"},N={class:"d-flex align-items-center  mb-2"},B=Object(a["h"])("h4",{class:"font-normal fw-bold me-4"},"收件人 Email",-1),E={class:"font-normal"},S={class:"d-flex align-items-center  mb-2"},V=Object(a["h"])("h4",{class:"font-normal fw-bold me-4"},"收件人電話",-1),q={class:"font-normal"},J={class:"col-12 rounded shadow bg-white pt-3"},F=Object(a["h"])("h3",null,"訂單細節",-1),H={class:"table"},I=Object(a["h"])("th",null,"訂單編號",-1),K=Object(a["h"])("th",null,"下單時間",-1),Q=Object(a["h"])("th",null,"付款時間",-1),R={key:0},T={key:1},W=Object(a["h"])("th",null,"付款狀態",-1),X={key:0,class:"text-success"},Y={key:1,class:"text-muted"},Z=Object(a["h"])("th",null,"總金額",-1),tt=Object(a["h"])("h3",null,"購買商品明細",-1),et={class:"table"},ct=Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th",null,"商品名稱"),Object(a["h"])("th",null,"商品數量/單位"),Object(a["h"])("th",null,"價錢總計")])],-1),at={class:"d-flex justify-content-end"},lt={class:"form-check"},dt={class:"form-check-label",for:"flexCheckDefault"},nt={key:0},ot={key:1},rt={class:"modal-footer"},st=Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function it(t,e,c,l,d,n){return Object(a["v"])(),Object(a["d"])("div",m,[Object(a["h"])("div",f,[Object(a["h"])("div",v,[g,Object(a["h"])("div",y,[Object(a["h"])("div",k,[Object(a["h"])("div",M,[Object(a["h"])("div",w,[D,d.tempOrder.is_paid?(Object(a["v"])(),Object(a["d"])("span",_,"已付款")):(Object(a["v"])(),Object(a["d"])("span",x,"未付款"))]),$,d.tempOrder.user?(Object(a["v"])(),Object(a["d"])("div",C,[Object(a["h"])("div",P,[z,Object(a["h"])("h5",L,Object(a["D"])(d.tempOrder.user.name),1)]),Object(a["h"])("div",U,[A,Object(a["h"])("h5",G,Object(a["D"])(d.tempOrder.user.address),1)]),Object(a["h"])("div",N,[B,Object(a["h"])("h5",E,Object(a["D"])(d.tempOrder.user.email),1)]),Object(a["h"])("div",S,[V,Object(a["h"])("h5",q,Object(a["D"])(d.tempOrder.user.tel),1)])])):Object(a["e"])("",!0)]),Object(a["h"])("div",J,[F,Object(a["h"])("table",H,[Object(a["h"])("tbody",null,[Object(a["h"])("tr",null,[I,Object(a["h"])("td",null,Object(a["D"])(d.tempOrder.id),1)]),Object(a["h"])("tr",null,[K,Object(a["h"])("td",null,Object(a["D"])(t.$date(d.tempOrder.create_at)),1)]),Object(a["h"])("tr",null,[Q,Object(a["h"])("td",null,[d.tempOrder.paid_date?(Object(a["v"])(),Object(a["d"])("span",R,Object(a["D"])(t.$date(d.tempOrder.paid_date)),1)):(Object(a["v"])(),Object(a["d"])("span",T,"時間不正確"))])]),Object(a["h"])("tr",null,[W,Object(a["h"])("td",null,[d.tempOrder.is_paid?(Object(a["v"])(),Object(a["d"])("strong",X,"已付款")):(Object(a["v"])(),Object(a["d"])("span",Y,"尚未付款"))])]),Object(a["h"])("tr",null,[Z,Object(a["h"])("td",null,Object(a["D"])(Math.round(d.tempOrder.total)),1)])])]),tt,Object(a["h"])("table",et,[ct,Object(a["h"])("tbody",null,[(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["z"])(d.tempOrder.products,(function(e){return Object(a["v"])(),Object(a["d"])("tr",{key:e.id},[Object(a["h"])("th",null,Object(a["D"])(e.product.title),1),Object(a["h"])("td",null,Object(a["D"])(e.qty)+" / "+Object(a["D"])(e.product.unit),1),Object(a["h"])("td",null,Object(a["D"])(t.$toCurrency(Math.round(e.final_total))),1)])})),128))])]),Object(a["h"])("div",at,[Object(a["h"])("div",lt,[Object(a["M"])(Object(a["h"])("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":e[1]||(e[1]=function(t){return d.tempOrder.is_paid=t})},null,512),[[a["G"],d.tempOrder.is_paid]]),Object(a["h"])("label",dt,[d.tempOrder.is_paid?(Object(a["v"])(),Object(a["d"])("span",nt,"已付款")):(Object(a["v"])(),Object(a["d"])("span",ot,"未付款"))])])])])])]),Object(a["h"])("div",rt,[st,Object(a["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=function(e){return t.$emit("update-paid",d.tempOrder)})}," 修改付款狀態 ")])])])],512)}var bt=c("7c2b"),ht=c.n(bt),Ot={props:{order:{type:Object,default:function(){return{}}}},data:function(){return{status:{},modal:"",tempOrder:{}}},emits:["update-product"],inject:["emitter"],watch:{order:function(){this.tempOrder=this.order}},methods:{openModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()}},mounted:function(){this.modal=new ht.a(this.$refs.modal)}};Ot.render=it;var ut=Ot,jt=c("6ff1"),pt=c("191f"),mt={name:"Orders",data:function(){return{loading:!1,color:"#9DBEC7",orders:{},isNew:!1,pagination:{},tempOrder:{}}},components:{pagination:p["a"],orderModal:ut,delOrder:jt["a"],PulseLoader:pt["a"]},methods:{getOrders:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0;var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("maroon5","/admin/orders?page=").concat(e);this.$http.get(c).then((function(e){e.data.success?(t.loading=!1,t.orders=e.data.orders,t.pagination=e.data.pagination):t.loading=!1})).catch((function(t){console.log(t)}))},openOrderModal:function(t){this.tempOrder=Object(j["a"])({},t),this.isNew=!1,this.$refs.orderModal.openModal()},openDelOrderModal:function(t){this.tempOrder=Object(j["a"])({},t),this.$refs.delOrder.openModal()},updatePaid:function(t){var e=this;this.loading=!0;var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("maroon5","/admin/order/").concat(t.id),a={is_paid:t.is_paid};this.$http.put(c,{data:a}).then((function(t){t.data.success?(e.loading=!1,e.$refs.orderModal.hideModal(),e.getOrders()):e.loading=!1})).catch((function(t){console.log(t)}))},delOrder:function(){var t=this;this.loading=!0;var e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("maroon5","/admin/order/").concat(this.tempOrder.id);this.$http.delete(e).then((function(e){e.data.success?(t.loading=!1,t.getOrders(),t.$refs.delOrder.hideModal()):t.loading=!1})).catch((function(t){console.log(t)}))}},created:function(){this.getOrders()}};mt.render=u;e["default"]=mt}}]);
//# sourceMappingURL=chunk-9662a754.bd5a1aec.js.map