(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{101:function(t,e,r){"use strict";var o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},n=(r(351),r(88)),c=r(103),l=r.n(c),d=r(489),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports;l()(component,{VApp:d.a})},290:function(t,e,r){var content=r(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("dc093880",content,!0,{sourceMap:!1})},314:function(t,e,r){"use strict";var o={name:"DefaultLayout"},n=r(88),c=r(103),l=r.n(c),d=r(489),m=r(500),v=r(145),f=r(497),h=r(494),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{staticClass:"fondobody"},[r("navbar"),t._v(" "),r("v-main",[r("Nuxt")],1),t._v(" "),r("v-container",{attrs:{"grid-list-xs":""}},[r("p",{staticClass:"text-center font-Quicksand h6"},[t._v("Estamos en:")]),t._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-icon",{attrs:{"x-large":"",color:"red lighten-2"}},[t._v("mdi-instagram")]),t._v(" "),r("div",{staticClass:"mx-2"}),t._v(" "),r("v-icon",{attrs:{"x-large":"",color:"blue"}},[t._v("mdi-facebook")]),t._v(" "),r("div",{staticClass:"mx-2"}),t._v(" "),r("v-icon",{attrs:{"x-large":"",color:"green"}},[t._v("mdi-whatsapp")])],1),t._v(" "),r("p",{staticClass:"text-right ma-0 mt-5 font-Quicksand"},[t._v("\n      By Jorge Leonardo Quintero in 2022\n    ")]),t._v(" "),r("p",{staticClass:"text-right font-Quicksand"},[t._v("desarrolloleonardo@gmail.com")]),t._v(" "),r("p")],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{Navbar:r(468).default}),l()(component,{VApp:d.a,VContainer:m.a,VIcon:v.a,VMain:f.a,VRow:h.a})},319:function(t,e,r){r(320),t.exports=r(322)},351:function(t,e,r){"use strict";r(290)},352:function(t,e,r){var o=r(17)(!1);o.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=o},357:function(t,e,r){var content=r(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("247ccfb8",content,!0,{sourceMap:!1})},358:function(t,e,r){var o=r(17)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display&family=Quicksand:wght@300;400&family=Source+Serif+4:opsz,wght@8..60,300&display=swap);"]),o.push([t.i,'@media (max-width:959px){.detalProducDialog{max-width:100%!important}.wth-car{width:80%!important}.v-slide-group__next,.v-slide-group__prev{min-width:10px!important}.v-slide-group__next>.v-icon,.v-slide-group__prev>.v-icon{font-size:3rem!important;color:red!important}.v-slide-group__next>.v-icon{margin-left:-40px!important}.v-slide-group__prev>.v-icon{margin-right:-40px!important;z-index:1}}@media (min-width:960px){.wth-car{width:70%!important}}@media (min-width:1264px){.wth-car{width:20%!important}.detalProducDialog{max-width:60%!important}}@media (min-width:1904px){.wth-car{width:30%!important}}.v-overlay__scrim{background-color:#fff!important;opacity:0!important}.v-carousel__item,.v-window{height:auto!important}.h1{font-size:2.5em!important}.h2{font-size:2rem!important}.h3{font-size:1.75rem!important}.h4{font-size:1.5rem!important}.h5{font-size:1.25rem!important}.h6{font-size:1rem!important}.shadow-sm{box-shadow:0 16px 16px -16px rgba(43,52,69,.1)!important}.shadow-sm-lr{box-shadow:0 4px 10px rgba(43,52,69,.08)!important}.font-Quicksand{font-family:"Quicksand",sans-serif!important}.font-Source{font-family:"Source Serif 4",sans-serif!important}.font-Playfair{font-family:"Playfair Display",serif!important}.r-0{right:0!important}.b-0{bottom:0!important}.text-clip{width:100%;white-space:nowrap;overflow:hidden;text-overflow:clip}.titulo{font-family:"Source Serif 4",sans-serif!important;font-size:2em}.fondobody{background:#f5ffff!important}.v-list{overflow:auto}.principal-b{background:#0c4d4d!important;color:#effdfd!important}.segundario-b{background:#168787!important}body::-webkit-scrollbar,div::-webkit-scrollbar{width:12px!important}body::-webkit-scrollbar-track,div::-webkit-scrollbar-track{background:#fff}body::-webkit-scrollbar-thumb,div::-webkit-scrollbar-thumb{background-color:#b6b4b4;border-radius:20px;border:3px solid #fff}.v-navigation-drawer__border{width:0!important}',""]),t.exports=o},466:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return d})),r.d(e,"mutations",(function(){return m})),r.d(e,"actions",(function(){return v}));var o=r(24),n=(r(104),r(154),r(3),r(8),r(89)),c=r.n(n),l=r(467).money,d=function(){Boolean,Boolean},m={postUser:function(t,e){t.user=e,t.existeUser=!!e},llenar:function(t,e){t.generous=e},fillImgSlider:function(t,e){t.imgSlider=e},getMCar:function(t,e){t.dataCar=e},getMPrecioDataCar:function(t,e){t.precioDataCar=e,t.existeProductCar=e>0},deleteMCar:function(t,i){c()({method:"DELETE",url:this.$config.baseUrl+"canasta/"+t.dataCar[i].uid}).then((function(t){console.log(t.data.info)})),t.precioDataCar-=t.dataCar[i].precio,t.dataCar.splice(i,1)}},v={getUser:function(t,e){(0,t.commit)("postUser",e)},get:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.next=3,c()({method:"get",url:e.$config.baseUrl+"genero"}).then((function(t){o("llenar",t.data.generos)}));case 3:case"end":return r.stop()}}),r)})))()},getImgSlider:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.next=3,c()({method:"get",url:e.$config.baseUrl+"producto/all",params:{cate:"all"},responseType:"json"}).then((function(t){o("fillImgSlider",t.data.productos)}));case 3:case"end":return r.stop()}}),r)})))()},getCar:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var n,d;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(n=t.commit,console.log("Posible token asignado, :",e),o.prev=2,"false"!=e){o.next=13;break}console.log("No tenemos un token valido perro: ",e),0,0,(d=[]).push({uid:"xx",avatar:"no  img",title:"Not product",subtitle:["Nan",0],priceHtml:"0"}),n("getMCar",d),n("getMPrecioDataCar",0),o.next=15;break;case 13:return o.next=15,c()({method:"GET",url:r.$config.baseUrl+"canasta/",headers:{"x-token":e},responseType:"json"}).then((function(t){var e=0,r=[];t.data.listCanasta.forEach((function(t){var o=t.tallaCnt[0].cnt>0?t.producto.precio*t.tallaCnt[0].cnt:t.producto.precio,desc=t.producto.descuento,n=desc<10?"1.0"+desc:"1."+desc;e+=desc>0?o-(o*n-o):o,r.push({uid:t._id,avatar:t.producto.img[0],title:t.producto.descripcion,subtitle:[t.tallaCnt[0].nombre.toUpperCase(),t.tallaCnt[0].cnt],priceHtml:desc>0?"<small> <s>$"+l(o)+"</s></small> -"+desc+"%  $"+l(o-(o*n-o)):"$"+l(o),precio:desc>0?o-(o*n-o):o})})),n("getMCar",r),n("getMPrecioDataCar",e)}));case 15:o.next=20;break;case 17:o.prev=17,o.t0=o.catch(2),console.log("Tenemos un problema Houston: ",o.t0);case 20:case"end":return o.stop()}}),o,null,[[2,17]])})))()},deleteCar:function(t,i){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,t.commit)("deleteMCar",i);case 2:case"end":return e.stop()}}),e)})))()}}},467:function(t,e){t.exports={money:function(t){return t?t.toLocaleString({style:"currency",currency:"INR",minimumFractionDigits:2}):0}}},468:function(t,e,r){"use strict";r.r(e);r(9),r(11),r(10),r(3),r(13),r(8),r(14);var o=r(1),n=r(24),c=(r(104),r(111)),l=r(89),d=r.n(l);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={data:function(){return{dialogLogin:!1,right:!0,rightDrawer:!1,menuDrawer:!1,title:"Tienda Cool",itemsMenu:[{title:"Inicio",link:"/"},{title:"Hombre",link:"/panel/HOMBRE"},{title:"Mujer",link:"/panel/MUJER"},{title:"Promoción",link:"/"},{title:"Sobre Nosotros",link:"/"}],email:"",pass:"",dataUser:[],existeUsuario:!1,existePruductosCar:!1}},methods:{montarDataUser:function(){this.dataUser=this.$store.state.user},money:function(t){return t?t.toLocaleString({style:"currency",currency:"INR",minimumFractionDigits:2}):0},deleteProductoCar:function(i){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$store.dispatch("deleteCar",i);case 1:case"end":return e.stop()}}),e)})))()},login:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.email,t.pass),e.next=3,d()({method:"POST",url:t.$config.baseUrl+"auth",data:{correo:t.email,contrasena:t.pass},responseType:"json"}).then((function(e){localStorage.setItem("token",e.data.token),t.validaUser()})).catch((function(t){console.log("Datos incorrectos")}));case 3:case"end":return e.stop()}}),e)})))()},validaUser:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(r=localStorage.getItem("token"))){e.next=7;break}return e.next=5,d()({method:"GET",url:t.$config.baseUrl+"auth",headers:{"x-token":r}}).then((function(e){localStorage.setItem("token",e.data.token),t.$store.dispatch("getUser",e.data.usuario),t.montarDataUser(),console.log("validor user"),t.existeUsuario=t.$store.state.existeUser}));case 5:e.next=9;break;case 7:t.$store.dispatch("getUser",""),console.log("El sistema no cuenta con un JWT por el momentoo");case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("problemas al validar usuario",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},logout:function(){this.$store.dispatch("getUser",""),localStorage.removeItem("token"),window.location="/"}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.validaUser();case 1:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["dataCar","precioDataCar","user","existeUser","existePruductCar"]))},f=v,h=r(88),_=r(103),w=r.n(_),x=r(499),k=r(501),y=r(232),C=r(228),D=r(132),V=r(490),S=r(491),O=r(476),j=r(492),P=r(145),U=r(193),I=r(229),R=r(146),T=r(230),L=r(231),M=r(68),E=r(129),$=r(493),z=r(494),N=r(477),A=r(495),F=r(498),Q=r(480),H=r(62),G=r(199),B=r(496),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-app-bar",{staticClass:"fondobody",attrs:{fixed:"",app:"",elevation:"0"}},[r("v-btn",{staticClass:"d-md-none",attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.menuDrawer=!t.menuDrawer}}},[r("v-icon",[t._v("mdi-dots-horizontal")])],1),t._v(" "),r("v-toolbar-title",{staticClass:"titulo",staticStyle:{width:"450px !important"},domProps:{textContent:t._s(t.title)},on:{click:function(e){return t.$router.push("/")}}}),t._v(" "),r("v-tabs",{staticClass:"d-sm-flex d-none",attrs:{color:"#5D4037","slider-color":"red lighten-3"}},t._l(t.itemsMenu,(function(e){return r("v-tab",{key:e.title,staticClass:"font-Quicksand",attrs:{to:e.link}},[t._v(t._s(e.title))])})),1),t._v(" "),this.$store.state.user?r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.logout()}}},"v-btn",n,!1),o),[r("v-icon",[t._v(" mdi-account-outline ")])],1)]}}],null,!1,2780084224)},[t._v(" "),r("span",[t._v("Cerrar Sesión")])]):r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.dialogLogin=!0}}},"v-btn",n,!1),o),[r("v-icon",[t._v(" mdi-account-arrow-right-outline ")])],1)]}}])},[t._v(" "),r("span",[t._v("Iniciar Sesión")])]),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[t.precioDataCar?r("v-badge",{attrs:{color:"red lighten-3",dot:""}},[r("v-icon",[t._v("mdi-shopping-outline")])],1):r("v-icon",[t._v("mdi-shopping-outline")])],1)],1),t._v(" "),r("v-navigation-drawer",{staticClass:"shadow-sm d-md-none",staticStyle:{opacity:"0.9 !important"},attrs:{left:"",temporary:"",fixed:"","hide-overlay":"",color:"blue-grey"},model:{value:t.menuDrawer,callback:function(e){t.menuDrawer=e},expression:"menuDrawer"}},[r("v-list",{attrs:{nav:"",dark:""}},[r("div",{staticClass:"d-flex justify-end"},[r("v-btn",{attrs:{icon:"",color:"white"},on:{click:function(e){e.stopPropagation(),t.menuDrawer=!t.menuDrawer}}},[r("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),t._l(t.itemsMenu,(function(e){return r("v-list-item",{key:e.title,attrs:{link:"",to:e.link}},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"font-Quicksand"},[t._v(t._s(e.title))])],1)],1)}))],2)],1),t._v(" "),r("v-navigation-drawer",{staticClass:"wth-car shadow-sm-lr",attrs:{right:t.right,temporary:"",fixed:"","hide-overlay":"",color:"white"},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[t.precioDataCar?[t.dataCar?r("v-list",{staticClass:"pa-0",attrs:{"three-line":""}},[r("v-app-bar",{staticClass:"justify-space-between",attrs:{fixed:"",app:"",elevation:"0",color:"white",height:"40"}},[r("v-btn",{attrs:{icon:"",color:"red"},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[r("v-icon",[t._v("mdi-close")])],1),t._v(" "),r("v-subheader",{staticStyle:{height:"auto !important"}},[t._v("Estado de Cuenta")])],1),t._v(" "),r("v-list-item",{staticClass:"fondobody pl-1 pr-1",staticStyle:{height:"auto !important","margin-top":"40px"}},[r("v-list-item-avatar",{attrs:{size:"60"}},[r("img",{attrs:{src:"https://scontent.fbga1-4.fna.fbcdn.net/v/t39.30808-6/241817760_2969698279970432_7468536965581764116_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=09cbfe&_nc_eui2=AeFRLs3Mm0GoDUvNtdp3R-Dnv_1V1Y_IH9G__VXVj8gf0ResEeKyuOWH5G3_cTVehk6E33FjhQCVX3Mo9c5FdfD5&_nc_ohc=8WhMGi5WpVIAX9IPyww&tn=SQlHZFHYKOQ2S9pi&_nc_ht=scontent.fbga1-4.fna&oh=00_AT_UlQqoGUkvT_cEbfzxvWq9hLk3FoAAomec4JQ1_x8Oig&oe=628A3182",alt:"John"}})]),t._v(" "),r("v-list-item-content",{staticClass:"pa-0 ma-0"},[r("p",[t._v("\n              "+t._s(t.dataUser.nombre)+" "),r("br"),t._v("\n              "+t._s(t.dataUser.correo)+"\n            ")])]),t._v(" "),r("v-list-item-action",[r("v-btn",{attrs:{icon:"",large:""}},[r("v-icon",[t._v("mdi-cog-outline")])],1)],1)],1),t._v(" "),t._l(t.dataCar,(function(e,i){return r("v-list-item",{key:i,staticClass:"pa-0"},[r("v-btn",{attrs:{absolute:"",tile:"",color:"black",right:"",icon:""},on:{click:function(e){return t.deleteProductoCar(i)}}},[r("v-icon",[t._v("mdi-close")])],1),t._v(" "),r("v-list-item-icon",[r("v-img",{attrs:{"max-width":"100",src:e.avatar}})],1),t._v(" "),r("v-list-item-content",{staticClass:"pa-2"},[r("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),r("v-list-item-subtitle",[t._v("\n              Talla: "),r("span",{staticClass:"text--primary"},[t._v(t._s(e.subtitle[0]))]),t._v(" "),r("br"),t._v("\n              Cantidad:\n              "),r("span",{staticClass:"text--primary"},[t._v(t._s(e.subtitle[1]))])]),t._v(" "),r("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.priceHtml)}})],1)],1)}))],2):t._e(),t._v(" "),r("v-btn",{staticClass:"r-0 b-0",staticStyle:{"z-index":"1"},attrs:{absolute:"",block:"",height:"50",right:"",bottom:"",tile:""}},[t._v("\n        realizar pago $"+t._s(t.money(t.precioDataCar))+" cop\n      ")])]:t._e()],2),t._v(" "),r("v-dialog",{staticClass:"overflow-visible",attrs:{"max-width":"400"},model:{value:t.dialogLogin,callback:function(e){t.dialogLogin=e},expression:"dialogLogin"}},[r("v-card",{staticClass:"overflow-hidden",attrs:{elevation:"0"}},[r("v-toolbar",{staticStyle:{color:"#557571"},attrs:{elevation:"0"}},[r("v-toolbar-title",[t._v("Iniciar Sesión")])],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",[r("v-form",[r("v-text-field",{attrs:{"prepend-icon":"mdi-at",name:"email",label:"Correo",type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{attrs:{id:"password","prepend-icon":"mdi-form-textbox-password",name:"password",label:"Contreseña",type:"password"},model:{value:t.pass,callback:function(e){t.pass=e},expression:"pass"}})],1)],1),t._v(" "),r("v-card-actions",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-btn",{staticStyle:{background:"#D49A89"},attrs:{tile:"",block:"",color:"white--text"},on:{click:function(e){return t.login()}}},[t._v("Ingresar")])],1),t._v(" "),r("v-col",[r("v-btn",{staticClass:"grey--text",attrs:{disabled:"",tile:"",block:"",color:"grey lighten-4",elevation:"2"},on:{click:function(e){return t.login()}}},[t._v("Google\n              "),r("v-icon",{attrs:{right:"",dark:""}},[t._v("\n                  mdi-google\n                ")])],1)],1),t._v(" "),r("v-col",[r("v-btn",{staticClass:"grey--text",attrs:{disabled:"",tile:"",block:"",color:"grey lighten-4",elevation:"2"},on:{click:function(e){return t.login()}}},[t._v("Facebook\n                "),r("v-icon",{attrs:{right:"",dark:""}},[t._v("\n                  mdi-facebook\n                ")])],1)],1)],1)],1)],1)],1),t._v(" "),r("div",{staticClass:"d-sm-none"},[t._v(t._s(t.existeUsuario)+t._s(t.existePruductosCar))])],1)}),[],!1,null,null,null);e.default=component.exports;w()(component,{VAppBar:x.a,VBadge:k.a,VBtn:y.a,VCard:C.a,VCardActions:D.a,VCardText:D.b,VCol:V.a,VDialog:S.a,VDivider:O.a,VForm:j.a,VIcon:P.a,VImg:U.a,VList:I.a,VListItem:R.a,VListItemAction:T.a,VListItemAvatar:L.a,VListItemContent:M.a,VListItemIcon:E.a,VListItemSubtitle:M.b,VListItemTitle:M.c,VNavigationDrawer:$.a,VRow:z.a,VSubheader:N.a,VTab:A.a,VTabs:F.a,VTextField:Q.a,VToolbar:H.a,VToolbarTitle:G.a,VTooltip:B.a})}},[[319,18,3,19]]]);