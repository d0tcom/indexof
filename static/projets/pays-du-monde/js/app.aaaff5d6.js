(function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/projets/pays-du-monde/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1a7b":function(t,e,n){},"2cbe":function(t,e,n){},"35f9":function(t,e,n){"use strict";var r=n("9511"),o=n.n(r);o.a},"53d7":function(t,e,n){"use strict";var r=n("1a7b"),o=n.n(r);o.a},5452:function(t,e,n){"use strict";var r=n("2cbe"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("6cc5");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",[n("router-view")],1)],1)},a=[],i=n("7496"),s=n("a75b"),u={name:"App",components:{VApp:i["a"],VContent:s["a"]},data:function(){return{}}},c=u,l=(n("5c0b"),n("2877")),p=n("6544"),f=n.n(p),d=Object(l["a"])(c,o,a,!1,null,null,null),m=d.exports;f()(d,{VApp:i["a"],VContent:s["a"]});var h=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",[n("Header",{attrs:{countriesName:t.countriesName},on:{countrySelected:t.addCountriesToData,regionSelected:t.addRegionsToData}}),n("CountryCards",{attrs:{countries:t.countries,country:t.country,region:t.region}}),n("Footer")],1)])},g=[],y=(n("4160"),n("159b"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{staticClass:"header-top"},[r("img",{staticClass:"logo",attrs:{src:n("9b19"),alt:"Logo Pays du Monde"}}),t._m(0),r("div",{staticClass:"header-inputs"},[r("div",{attrs:{id:"select-country"}},[r("v-autocomplete",{staticClass:"mt-7 mb-2",attrs:{items:t.countriesName,flat:"","hide-no-data":"","hide-details":"",placeholder:"Chercher un pays... ",solo:"",color:"#474E6C","background-color":"#FFFFFF","prepend-inner-icon":"mdi-magnify",height:"50px"},on:{change:function(e){return t.countrySelected(t.country)}},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1),r("div",{attrs:{id:"select-region"}},[r("v-autocomplete",{staticClass:"mt-3",attrs:{flat:"","hide-no-data":"","hide-details":"",placeholder:"Filtrer par région",solo:"",color:"#474E6C","background-color":"#FFFFFF",height:"50px",items:t.regions},on:{change:function(e){return t.regionSelected(t.region)}},model:{value:t.region,callback:function(e){t.region=e},expression:"region"}})],1)])])])}),_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Population totale : "),n("span",[t._v("7,8 Md")])])}],b=n("c6a6"),C={name:"Header",props:["countriesName"],components:{VAutocomplete:b["a"]},data:function(){return{country:"",region:"",regions:["Afrique","Amérique","Asie","Europe","Océanie"]}},methods:{countrySelected:function(t){this.$emit("countrySelected",t)},regionSelected:function(t){this.$emit("regionSelected",t)}}},x=C,T=(n("5452"),Object(l["a"])(x,y,_,!1,null,null,null)),O=T.exports;f()(T,{VAutocomplete:b["a"]});var w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cards-container"},[t._l(t.filterByNameOfCountry(t.countries),(function(e,r){return n("div",{key:r,staticClass:"card"},[n("router-link",{attrs:{to:{name:"Pays",params:{country_name:e.name}}}},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"card-gradient-line"}),n("h1",{staticClass:"card-title"},[t._v(t._s(e.translations.fr))]),n("img",{attrs:{src:e.flag,alt:"Drapeau français"}}),n("p",{staticClass:"card-title-big"},[t._v(t._s(t.formatNumber(e.population)))]),n("span",{staticClass:"card-title"},[t._v("Population")])])])],1)})),t.country?t._e():n("button",{staticClass:"btn-more",on:{click:function(e){return t.showMoreCountries(5)}}},[t._v("Plus de pays")])],2)},D=[],S=(n("4de4"),n("fb6a"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),{name:"CountryCards",props:["countries","country","region"],data:function(){return{numberOfCountriesToShow:15}},methods:{filterByNameOfCountry:function(t){var e=this;return""==!this.country?t.filter((function(t){if(t.translations.fr==e.country)return t.translations.fr})).slice(0,this.numberOfCountriesToShow):""==!this.region?t.filter((function(t){if(t.region==e.region)return t.translations.fr})).slice(0,this.numberOfCountriesToShow):t.slice(0,this.numberOfCountriesToShow)},showMoreCountries:function(t){this.numberOfCountriesToShow=this.numberOfCountriesToShow+t},formatNumber:function(t){return t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1 ")}}}),P=S,k=(n("35f9"),Object(l["a"])(P,w,D,!1,null,"550a67d2",null)),E=k.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("p",[t._v("Développé par Jordan Lebrethon 👋")])])}],j={name:"Footer"},A=j,$=(n("53d7"),Object(l["a"])(A,F,N,!1,null,null,null)),M=$.exports,L=n("bc3a"),B=n.n(L),q={name:"Home",components:{Header:O,CountryCards:E,Footer:M},data:function(){return{countries:[],countriesName:[],country:"",region:""}},methods:{getCountriesName:function(){var t=this;this.countries.forEach((function(e){t.countriesName.push(e.translations.fr)}))},addCountriesToData:function(t){this.country=t},addRegionsToData:function(t){"Afrique"==t?this.region="Africa":"Amérique"==t?this.region="Americas":"Asie"==t?this.region="Asia":"Océanie"==t?this.region="Oceania":"Europe"==t&&(this.region="Europe")}},created:function(){var t=this;B.a.get("https://restcountries.eu/rest/v2/all").then((function(e){t.countries=e.data,t.getCountriesName()})).catch((function(t){console.log(t)}))}},H=q,z=Object(l["a"])(H,v,g,!1,null,null,null),V=z.exports,R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loading?r("div",{staticClass:"country-container"},[r("router-link",{attrs:{to:{name:"Home"}}},[r("button",{staticClass:"btn-back"},[r("img",{attrs:{src:n("6d4b")}}),t._v(" Revenir en arrière ")])]),r("div",{staticClass:"country-main"},[r("div",{staticClass:"country-main-info"},[r("img",{staticClass:"country-flag",attrs:{src:t.country.flag}}),r("h2",[t._v(t._s(t.country.translations.fr)+" "),r("span",[t._v("[ "+t._s(t.country.alpha2Code)+" ]")])]),r("div",{staticClass:"divider"}),r("p",[t._v("Capitale : "),r("span",[t._v(t._s(t.country.capital))])]),r("div",{staticClass:"divider"}),r("p",[t._v("Région : "),r("span",[t._v(t._s(t.country.region))])]),r("p",[t._v("Sous région : "),r("span",[t._v(t._s(t.country.subregion))])]),r("div",{staticClass:"divider"}),r("p",[t._v("Superficie : "),r("span",{class:t.surfaceColor},[t._v(t._s(t.formatNumber(t.surfaceLevelColor(t.country.area)))+" km²"),r("br"),r("span",{staticClass:"little-text"},[t._v("("+t._s(t.surfaceText)+")")])])]),r("p",[t._v("Population : "),r("span",[t._v(t._s(t.formatNumber(t.country.population))+" hab.")])]),r("span",{staticClass:"little-text",class:t.populationDensiteColor},[r("strong",[t._v(t._s(t.populationDensiteText))])]),r("br"),t.loading?r("span",{staticClass:"little-text",class:t.populationDensiteColor},[t._v("~"+t._s(t.populationDensite(t.country.population/t.country.area))+" habitants / km²")]):t._e(),r("div",{staticClass:"divider"}),r("p",[t._v("Nom de domaine : "),r("span",t._l(t.country.topLevelDomain,(function(e,n){return r("span",{key:n},[t._v(t._s(e)+" - ")])})),0)]),r("p",{staticClass:"little-text"},[t._v("(identifiant de domaine internet)")])]),r("div",{staticClass:"country-geo"},[r("div",{ref:"map",staticClass:"country-map",attrs:{id:"map"}},[t.showMap?r("l-map",{staticStyle:{height:"100%"},attrs:{zoom:t.zoom,center:t.countryPosition,options:t.mapOptions}},[r("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}})],1):t._e()],1),t._m(0),t._l(t.countryBordersFormated,(function(e,n){return r("span",{key:n,staticClass:"country-tag"},[t._v(t._s(e))])})),t.countryBorders.length<=0?r("span",[t._v("Aucun pays frontalier")]):t._e(),r("div",{staticClass:"divider"}),r("p",[t._v("Langue(s) : "),r("span",t._l(t.country.languages,(function(e,n){return r("span",{key:n},[t._v(t._s(e.name)+" - ")])})),0)]),r("div",{staticClass:"divider"}),r("p",[t._v("Gini : "),null!==t.country.gini?r("span",[t._v(t._s(t.country.gini)+" %")]):t._e(),null==t.country.gini?r("span",[t._v("Statistique inconnu")]):t._e()]),t._m(1),r("div",{staticClass:"divider"}),r("p",[t._v("Devise(s) : "),r("span",t._l(t.country.currencies,(function(e,n){return r("span",{key:n},[t._v(t._s(e.name)+" "+t._s(e.symbol)+" - ")])})),0)])],2)]),r("router-link",{attrs:{to:{name:"Home"}}},[r("button",{staticClass:"btn-back"},[r("img",{attrs:{src:n("6d4b")}}),t._v(" Revenir en arrière ")])]),r("Footer")],1):t._e()},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Pays frontaliers :"),n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"little-text"},[t._v("(Coefficient sur l’égalité de revenus)"),n("br"),t._v("Ce coefficient représente le "),n("strong",[t._v("niveau de distribution des revenus")]),t._v(", où 0 % signifie que les revenus sont uniformément répartis alors que 100 % correspondrait à l'accaparement par une seule personne de toute la richesse nationale)")])}],G=(n("b0c0"),n("e11e")),U=n.n(G),I=n("2699"),K=n("a40a"),Q={name:"Pays",components:{Footer:M,LMap:I["a"],LTileLayer:K["a"]},data:function(){return{countries:[],countryName:this.$route.params.country_name,country:{},surfaceColor:"",surfaceText:"",populationDensiteColor:"",populationDensiteText:"",loading:!1,countryBorders:[],zoom:5,url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | Pays du monde | Jordan Lebrethon',showMap:!0,mapOptions:{zoomSnap:.5}}},methods:{getCountryData:function(){var t=this;this.countries.forEach((function(e){if(e.name==t.countryName)return t.countryBorders=e.borders,t.country=e}))},formatNumber:function(t){return t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1 ")},surfaceLevelColor:function(t){return t>0&&t<1e5?(this.surfaceText="Minuscule",this.surfaceColor="text-blue",t):t>1e5&&t<4e5?(this.surfaceText="Petite",this.surfaceColor="text-light-green",t):t>4e5&&t<8e5?(this.surfaceText="Moyenne",this.surfaceColor="text-green",t):t>8e5&&t<3e6?(this.surfaceText="Grande",this.surfaceColor="text-orange",t):t>3e6&&t<2e7?(this.surfaceText="Très grande",this.surfaceColor="text-red",t):void 0},populationDensite:function(t){var e=Math.round(t);return e>=0&&e<=50?(this.populationDensiteColor="text-blue",this.populationDensiteText="Très peu dense"):e>=50&&e<=200?(this.populationDensiteColor="text-light-green",this.populationDensiteText="Peu dense"):e>=200&&e<=400?(this.populationDensiteColor="text-green",this.populationDensiteText="Assez dense"):e>=400&&e<=700?(this.populationDensiteColor="text-orange",this.populationDensiteText="Très dense"):e>=700&&e<=3e4&&(this.populationDensiteColor="text-red",this.populationDensiteText="Extrêmement dense"),e},scrollToTop:function(){window.scrollTo(0,0)}},computed:{countryBordersFormated:function(){var t=this,e=[];return this.countries.forEach((function(n){t.countryBorders.forEach((function(t){n.alpha3Code==t&&e.push(n.translations.fr)}))})),e},countryPosition:function(){return U.a.latLng(this.country.latlng[0],this.country.latlng[1])}},created:function(){var t=this;B.a.get("https://restcountries.eu/rest/v2/all").then((function(e){t.scrollToTop(),t.countries=e.data,t.loading=!0,t.getCountryData()})).catch((function(t){console.log("Une erreur s'est produite :"),console.log(t)}))}},W=Q,X=(n("8f61"),Object(l["a"])(W,R,J,!1,null,null,null)),Y=X.exports;r["a"].use(h["a"]);var Z=[{path:"/",name:"Home",component:V},{path:"/pays/:country_name",name:"Pays",component:Y}],tt=new h["a"]({mode:"history",base:"/projets/pays-du-monde/",routes:Z}),et=tt,nt=n("f309");r["a"].use(nt["a"]);var rt=new nt["a"]({theme:{light:!0}});r["a"].config.productionTip=!1,new r["a"]({router:et,vuetify:rt,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("7694"),o=n.n(r);o.a},6900:function(t,e,n){},"6d4b":function(t,e,n){t.exports=n.p+"img/left-arrow.7af03419.svg"},7694:function(t,e,n){},"8f61":function(t,e,n){"use strict";var r=n("6900"),o=n.n(r);o.a},9511:function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"img/logo.28d96431.svg"}});
//# sourceMappingURL=app.aaaff5d6.js.map