(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{544:function(t,e,r){"use strict";r.r(e);var o=r(1),n=r(24),c=(r(4),r(8),r(37),r(56),r(103),r(89)),l=r.n(c),d=r(504),f=Object(o.a)({components:{cardProducto:d.default},fetch:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("getCar");case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{postoken:"false",productos:null,catego:["all"],estadocatego:[!0],fav:!0,menu:!1}},methods:{listProduc:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()({method:"get",url:t.$config.baseUrl+"producto/"+t.$route.params.tipo,params:{cate:"all"}}).then((function(e){return t.productos=e.data.productos,t.cargarListFiltros()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},filtrarCatego:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.catego.forEach((function(r,i){console.log("data: "+r+i+t),e.estadocatego[i]=t===r})),r.next=3,l()({method:"get",url:e.$config.baseUrl+"producto/"+e.$route.params.tipo,params:{cate:t},responseType:"json"}).then((function(t){e.productos=t.data.productos}));case 3:case"end":return r.stop()}}),r)})))()},cargarListFiltros:function(){var t=this;this.productos.forEach((function(e){t.catego.includes(e.categoria.nombre)||(t.catego.push(e.categoria.nombre),t.estadocatego.push(!1))}))}},created:function(){this.listProduc()},mounted:function(){this.postoken=localStorage.getItem("token")||"false",this.$store.dispatch("getCar",this.postoken)}},"fetch",(function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getCar",t.postoken);case 2:case"end":return e.stop()}}),e)})))()})),m=r(88),v=r(102),h=r.n(v),w=r(499),k=r(231),_=r(227),x=r(490),C=r(500),V=r(228),$=r(145),R=r(229),y=r(67),j=r(513),L=r(494),O=r(549),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-app-bar",{attrs:{color:"white container shadow-sm-lr"}},[r("v-row",{attrs:{color:"white"}},[r("v-col",{attrs:{sm:"2"}},[r("v-menu",{attrs:{tile:"","close-on-content-click":!1,"nudge-width":100,"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({attrs:{outlined:"",tile:"",small:"",color:"blue-grey darken-2"}},"v-btn",n,!1),o),[t._v("\n              Filtrar por:\n            ")])]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),r("v-card",{attrs:{tile:""}},[r("v-list",t._l(t.catego,(function(e,i){return r("v-list-item",{key:i},[r("v-list-item-action",[t.estadocatego[i]?r("v-switch",{attrs:{color:"blue-grey lighten-1",disabled:""},on:{click:function(r){return t.filtrarCatego(e)}},model:{value:t.estadocatego[i],callback:function(e){t.$set(t.estadocatego,i,e)},expression:"estadocatego[i]"}}):r("v-switch",{attrs:{color:"blue-grey lighten-4"},on:{click:function(r){return t.filtrarCatego(e)}},model:{value:t.estadocatego[i],callback:function(e){t.$set(t.estadocatego,i,e)},expression:"estadocatego[i]"}})],1),t._v(" "),r("v-list-item-title",[t._v("\n                  "+t._s(e)+"\n                ")])],1)})),1)],1)],1)],1),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{sm:"8"}},[r("p",{staticClass:"font-Source h4"},[t._v(t._s(this.$route.params.tipo))])])],1)],1),t._v(" "),r("v-container",[r("v-row",{},t._l(t.productos,(function(t,i){return r("v-col",{key:i,staticClass:"pa-1",attrs:{cols:"4",sm:"4",md:"2"}},[r("card-producto",{attrs:{produc:t}})],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{CardProducto:r(504).default}),h()(component,{VAppBar:w.a,VBtn:k.a,VCard:_.a,VCol:x.a,VContainer:C.a,VList:V.a,VListItem:$.a,VListItemAction:R.a,VListItemTitle:y.c,VMenu:j.a,VRow:L.a,VSwitch:O.a})}}]);