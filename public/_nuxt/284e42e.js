(window.webpackJsonp=window.webpackJsonp||[]).push([[14,10],{512:function(t,e,r){"use strict";r(11),r(3),r(10),r(89),r(30),r(317),r(235),r(90),r(112);var n=r(2);var o,c=r(70);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},515:function(t,e,r){"use strict";r.r(e);var n={props:{name:"",logo:"",descrip:""},data:function(){return{reveal:!1}}},o=r(88),c=r(104),l=r.n(c),d=r(229),f=r(224),v=r(73),m=r(192),O=r(492),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{attrs:{tile:"",flat:"",elevation:"10",to:"/panel/"+t.name}},[r("v-img",{staticClass:"align-end",attrs:{src:t.logo}},[r("v-row",[r("v-card-actions",{},[r("v-btn",{attrs:{tile:"",dark:"",to:"/panel/"+t.name}},[t._v("\n        Ver "+t._s(t.name)+"\n      ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:f.a,VCardActions:v.a,VImg:m.a,VRow:O.a})},538:function(t,e,r){"use strict";r.r(e);r(10),r(9),r(11),r(3),r(13),r(8),r(14);var n=r(24),o=r(1),c=(r(105),r(111));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={data:function(){return{postoken:"false"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["generous","imgSlider","dataCar","precioDataCar"])),mounted:function(){this.postoken=localStorage.getItem("token")||"false",this.$store.dispatch("getCar",this.postoken)},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("get");case 2:return e.next=4,t.$store.dispatch("getImgSlider");case 4:return e.next=6,t.$store.dispatch("getCar",t.postoken);case 6:case"end":return e.stop()}}),e)})))()}},f=d,v=r(88),m=r(104),O=r.n(m),h=r(488),y=r(512),C=r(492),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticStyle:{background:"#fbfbfbfb"}},[r("v-container",{},[r("v-row",[r("v-col",{staticClass:"text-left align-self-center",attrs:{md:"4"}},[r("p",{staticClass:"ma-0 font-Quicksand text-h3 font-weight-bold"},[t._v("\n            COMUNEROS S.A.S\n          ")]),t._v(" "),r("p",{staticClass:"ma-0 font-Quicksand h6"},[t._v("\n            MarketPlace con productos 100% colombianos"),r("br"),t._v("\n            ¡Especialmente Santandareanos Mano!\n          ")]),t._v(" "),r("p",{staticClass:"ma-0 font-Quicksand h6"},[t._v("\n            Calidad Asegurada en cada uno de nuestros productos\n          ")])]),t._v(" "),r("v-col",{attrs:{md:"8"}},[r("v-row",t._l(t.generous,(function(t,e){return r("v-col",{key:e,attrs:{cols:"6"}},[r("genero-card",{attrs:{name:t.nombre,logo:t.img,descrip:t.descripcion}})],1)})),1)],1)],1)],1)],1),t._v(" "),r("div",{staticStyle:{background:"#ffecda"}},[r("v-container",{staticClass:"pt-10"},[r("ListadoProductos",{attrs:{generoDefaul:"all"}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;O()(component,{GeneroCard:r(515).default,ListadoProductos:r(514).default}),O()(component,{VCol:h.a,VContainer:y.a,VRow:C.a})}}]);