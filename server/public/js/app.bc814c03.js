(function(e){function t(t){for(var n,s,c=t[0],l=t[1],o=t[2],u=0,m=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,c=1;c<a.length;c++){var l=a[c];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("8a23"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("8c4f"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Nav"),a("div",{staticClass:"container main_container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("router-view")],1)])]),a("Footer")],1)},s=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("body",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[e._v("Cole MMR")]),e._m(1),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"}}},[e._v("Recent Scrape")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Admin"}}},[e._v("Admin")])],1)])])])])])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("head",[a("meta",{attrs:{charset:"utf-8"}}),a("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}}),a("link",{attrs:{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossorigin:"anonymous"}}),a("link",{attrs:{rel:"sylesheet",href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"}}),a("title",[e._v("Hello, world!")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],o={data:function(){return{}},name:"Nav"},d=o,u=a("2877"),m=Object(u["a"])(d,c,l,!1,null,null,null),v=m.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("span",{staticClass:"lead text-white"},[e._v("Cole McMath - MMR 2020")])])])])}],_={data:function(){return{}},name:"Footer"},h=_,b=(a("760c"),Object(u["a"])(h,f,p,!1,null,null,null)),g=b.exports,x={name:"App",components:{Nav:v,Footer:g}},k=x,C=(a("034f"),Object(u["a"])(k,i,s,!1,null,null,null)),y=C.exports,I=a("ce5b"),w=a.n(I);a("bf40");n["default"].use(w.a);var V={},$=new w.a(V),O=(a("15f5"),a("7051"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-app",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,"single-select":e.singleSelect,"item-key":"id","show-select":"","items-per-page":100},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[e._v("Recent Upload - Filter Sort & Save Data")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Vehicle Year"},model:{value:e.editedItem.year,callback:function(t){e.$set(e.editedItem,"year",t)},expression:"editedItem.year"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Vehicle Make"},model:{value:e.editedItem.make,callback:function(t){e.$set(e.editedItem,"make",t)},expression:"editedItem.make"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Vehicle Model"},model:{value:e.editedItem.model,callback:function(t){e.$set(e.editedItem,"model",t)},expression:"editedItem.model"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Trim"},model:{value:e.editedItem.trim,callback:function(t){e.$set(e.editedItem,"trim",t)},expression:"editedItem.trim"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Price"},model:{value:e.editedItem.cl_price,callback:function(t){e.$set(e.editedItem,"cl_price",t)},expression:"editedItem.cl_price"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Average Miles"},model:{value:e.editedItem.miles_stats_mean,callback:function(t){e.$set(e.editedItem,"miles_stats_mean",t)},expression:"editedItem.miles_stats_mean"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Variance ($)"},model:{value:e.editedItem.price_stats_mean,callback:function(t){e.$set(e.editedItem,"price_stats_mean",t)},expression:"editedItem.price_stats_mean"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Variance (%)"},model:{value:e.editedItem.price_variance,callback:function(t){e.$set(e.editedItem,"price_variance",t)},expression:"editedItem.price_variance"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var n=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v(" mdi-delete ")])]}},{key:"item.price_variance",fn:function(t){var n=t.item;return[a("td",[e._v(e._s(e.variancePercent(n.cl_price,n.price_stats_mean))+"% ")])]}},{key:"item.cl_price",fn:function(t){var n=t.item;return[a("td",[e._v("$"+e._s(n.cl_price))])]}},{key:"item.price_stats_mean",fn:function(t){var n=t.item;return[a("td",[e._v("$"+e._s(n.price_stats_mean))])]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),a("hr"),a("button",{staticClass:"btn btn-md btn-primary right",on:{click:function(t){return e.loadData()}}},[e._v("Submit Checked Data")])],1)],1)}),S=[],j=(a("c975"),a("a434"),a("b680"),a("96cf"),a("1da1")),M=a("bc3a"),T=a.n(M),P={getEvents:function(){return Object(j["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("/scrape");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()}},A={name:"Home",components:{},data:function(){return{pagination:{rowsPerPage:100},dialog:!1,singleSelect:!1,selected:[],event:{},items:[],editedIndex:-1,editedItem:{year:"",make:"",model:"",trim:"",cl_price:0,miles_stats_mean:"",price_stats_mean:"",price_variance:""},defaultItem:{year:"",make:"",model:"",trim:"",cl_price:0,miles_stats_mean:"",price_stats_mean:"",price_variance:""},search:null,slots:["body","body.append","body.prepend","footer","header.data-table-select","header","progress","item.data-table-select","item.<name>","no-data","no-results","top"],headers:[{text:"ID",value:"id"},{text:"Year",value:"year"},{text:"Make",value:"make"},{text:"Model",value:"model"},{text:"Trim",value:"trim"},{text:"Price",value:"cl_price"},{text:"Average Miles",value:"miles_stats_mean"},{text:"Variance ($)",value:"price_stats_mean"},{text:"Variance (%)",value:"price_variance"},{text:"Actions",value:"actions",sortable:!1}]}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"},rules:function(){return[this.selected.length>0||"At least one item should be selected"]}},watch:{dialog:function(e){e||this.close()}},created:function(){this.getEventsData()},methods:{getEventsData:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:P.getEvents().then(function(t){e.$set(e,"items",t)}.bind(e));case 1:case"end":return t.stop()}}),t)})))()},editItem:function(e){this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this.items.indexOf(e);confirm("Are you sure you want to delete this item?")&&this.items.splice(t,1)},close:function(){var e=this;this.dialog=!1,setTimeout((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}),300)},save:function(){this.editedIndex>-1?Object.assign(this.items[this.editedIndex],this.editedItem):this.items.push(this.editedItem),this.close()},loadData:function(){var e=this;T.a.post("/loadData",{data:this.selected}).catch((function(e){console.log("This is the error from vue.js post /loadData "+e)})).then((function(){e.$router.push("/admin")}))},isEnabled:function(e){return this.enabled===e},variancePercent:function(e,t){var a=t-e,n=Math.sqrt(a);return n=parseFloat(n.toFixed(2)),isNaN(n)?0:n}}},E=A,D=a("6544"),F=a.n(D),R=a("7496"),N=a("8336"),H=a("b0af"),J=a("99d9"),X=a("62ad"),q=a("a523"),W=a("8fea"),G=a("169a"),Y=a("ce7e"),B=a("132d"),Q=a("0fd9"),U=a("2fa4"),z=a("8654"),K=a("71d9"),L=a("2a7f"),Z=Object(u["a"])(E,O,S,!1,null,null,null),ee=Z.exports;F()(Z,{VApp:R["a"],VBtn:N["a"],VCard:H["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VCol:X["a"],VContainer:q["a"],VDataTable:W["a"],VDialog:G["a"],VDivider:Y["a"],VIcon:B["a"],VRow:Q["a"],VSpacer:U["a"],VTextField:z["a"],VToolbar:K["a"],VToolbarTitle:L["a"]});var te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("h1",[e._v("Saved Vehicles")]),a("div",{staticClass:"row"},e._l(e.info,(function(t){return a("div",{key:t.id},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-title"},[a("strong",[e._v(e._s(t.id))]),e._v(" - "),a("strong",[e._v(e._s(t.year)+" "+e._s(t.make)+" "+e._s(t.model))])]),a("hr"),a("p",{staticClass:"card-text"},[a("strong",[e._v("Craiglist Price:")]),e._v(" $"+e._s(t.cl_price))]),a("p",{staticClass:"card-text"},[a("strong",[e._v("Mile Average:")]),e._v(" "+e._s(t.miles_stats_mean))]),a("p",{staticClass:"card-text"},[a("strong",[e._v("Variance:")]),e._v(" $"+e._s(t.price_stats_mean))]),a("p",{staticClass:"card-text"},[a("strong",[e._v("Variance:")]),e._v(" "+e._s(e.variancePercent(t.cl_price,t.price_stats_mean))+"%")])]),a("hr"),a("div",{staticClass:"card-body"},[a("a",{attrs:{href:t.cl_url,target:"_blank"}},[e._m(0,!0)]),a("button",{staticClass:"card-link float-right",on:{click:function(a){return e.deleteVehicle(t.id)}}},[a("i",{staticClass:"fas fa-trash"})])])])])])})),0)])])},ae=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"card-link"},[a("i",{staticClass:"fas fa-link"})])}],ne={data:function(){return{info:[],cole_id:"",errors:[]}},components:{},created:function(){this.respData()},methods:{respData:function(){var e=this;T.a.get("/cmv/admin").then((function(t){return e.info=t.data,t})).catch((function(t){t&&(e.errors=t)}))},deleteVehicle:function(e){var t=this;T.a.post("/deleteVehicle",{id:e}).catch((function(e){console.log("This is the error form deleting a vehicle "+e)})).then((function(){t.$router.go()}))},variancePercent:function(e,t){var a=t-e,n=Math.sqrt(a);return n=parseFloat(n.toFixed(2)),isNaN(n)?0:n}}},re=ne,ie=Object(u["a"])(re,te,ae,!1,null,null,null),se=ie.exports,ce=[{path:"/results",name:"Home",component:ee},{path:"/admin",name:"Admin",component:se}],le=a("2f62"),oe=a("b6d0"),de={},ue={},me={},ve={},fe={state:de,getters:ue,mutations:me,actions:ve};n["default"].use(le["a"]),n["default"].use(oe["a"]);var pe=new le["a"].Store({modules:{one:fe}}),_e=a("d132"),he=a.n(_e);n["default"].config.productionTip=!1,n["default"].use(r["a"]),n["default"].use(he.a);var be=new r["a"]({routes:ce});new n["default"]({el:"#app",mode:"history",vuetify:$,router:be,store:pe,render:function(e){return e(y)}})},"760c":function(e,t,a){"use strict";var n=a("a4bc"),r=a.n(n);r.a},"8a23":function(e,t,a){},a4bc:function(e,t,a){}});
//# sourceMappingURL=app.bc814c03.js.map