(function(){"use strict";var e={9314:function(e,o,t){var a=t(9242),n=t(3396);const r=(0,n.Uk)("Menú"),i=(0,n.Uk)(" | "),l=(0,n.Uk)("Inventario");function s(e,o){const t=(0,n.up)("router-link"),a=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("nav",null,[(0,n.Wm)(t,{to:"/"},{default:(0,n.w5)((()=>[r])),_:1}),i,(0,n.Wm)(t,{to:"/pastelero"},{default:(0,n.w5)((()=>[l])),_:1})]),(0,n.Wm)(a)],64)}var d=t(89);const c={},u=(0,d.Z)(c,[["render",s]]);var p=u,f=t(678),m=t(1596);const _=(0,n.uE)('<h2 data-v-23ffe834>Contacto</h2><div class="container" data-v-23ffe834><div class="dir" data-v-23ffe834><h3 data-v-23ffe834>Dirección:</h3><p data-v-23ffe834>Calle &quot;El bosque&quot;, colonia &quot;Norte&quot;, Salamanca, Gto.</p></div><div class="tel" data-v-23ffe834><h3 data-v-23ffe834>Teléfono:</h3><p data-v-23ffe834>6484872</p></div><div class="horario" data-v-23ffe834><h3 data-v-23ffe834>Horario de atención:</h3><p data-v-23ffe834>Lunes a Viernes de 8:00 a 17:00 <br data-v-23ffe834> Sábados y Domingos de 8:00 a 13:00 </p></div></div>',2),b=[_];function g(e,o,t,a,r,i){return(0,n.wg)(),(0,n.iD)("section",null,b)}var v={name:"InfoPasteleria"};const h=(0,d.Z)(v,[["render",g],["__scopeId","data-v-23ffe834"]]);var y=h,w=t(7139);const E=e=>((0,n.dD)("data-v-1371be1d"),e=e(),(0,n.Cn)(),e),k=E((()=>(0,n._)("h2",null,"Mi Pedido",-1))),C=E((()=>(0,n._)("h3",null,"Mis Datos: ",-1))),P=(0,n.Uk)("Nombre: "),$=E((()=>(0,n._)("br",null,null,-1))),U=(0,n.Uk)("Teléfono: "),j=E((()=>(0,n._)("br",null,null,-1))),D=(0,n.Uk)("Correo Electrónico :"),S=E((()=>(0,n._)("br",null,null,-1))),x=E((()=>(0,n._)("h3",null,"Mi pastel: ",-1))),A=E((()=>(0,n._)("p",null,"Descripción general del pastel",-1))),z=E((()=>(0,n._)("button",{id:"realizar-pedido"},"Realizar Pedido",-1)));function V(e,o,t,r,i,l){const s=(0,n.up)("ElegirIngredienteVue"),d=(0,n.up)("CombinarSabores"),c=(0,n.up)("CombinarAdornos");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("form",{onSubmit:o[3]||(o[3]=(0,a.iM)(((...e)=>l.agregarEntrada&&l.agregarEntrada(...e)),["prevent"]))},[k,C,(0,n._)("label",null,[P,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>l.cambiar_nombre_cliente=e),required:""},null,512),[[a.nr,l.cambiar_nombre_cliente]])]),$,(0,n._)("label",null,[U,(0,n.wy)((0,n._)("input",{type:"tel","onUpdate:modelValue":o[1]||(o[1]=e=>l.cambiar_tel_cliente=e),required:""},null,512),[[a.nr,l.cambiar_tel_cliente]])]),j,(0,n._)("label",null,[D,(0,n.wy)((0,n._)("input",{type:"email","onUpdate:modelValue":o[2]||(o[2]=e=>l.cambiar_email_cliente=e),required:""},null,512),[[a.nr,l.cambiar_email_cliente]])]),S,x,(0,n.Wm)(s,{grupo:"Pasteles",caption:"Elegir Pastel",tipo:"radio"}),(0,n.Wm)(d),(0,n.Wm)(c),A,(0,n._)("p",null,"Pastel elegido: "+(0,w.zw)(e.$store.state.ElementoElegido.Pasteles),1),(0,n._)("p",null,"Sabores elegidos: "+(0,w.zw)(e.$store.state.saborElegido.sabores),1),(0,n._)("p",null,"Adornos elegidos: "+(0,w.zw)(e.$store.state.adornoElegido.adornos),1),(0,n._)("p",null,"Precio: $"+(0,w.zw)(e.$store.getters.calcular_precio),1),z],32)])}const O={class:"opciones"},T=["for"],Z=["type","value","id"];function I(e,o,t,r,i,l){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("h3",null,(0,w.zw)(t.caption),1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(this.$store.state[t.grupo],((e,r)=>((0,n.wg)(),(0,n.iD)("div",O,[(0,n._)("label",{for:r},(0,w.zw)(r),9,T),(0,n.wy)((0,n._)("input",{type:t.tipo,value:r,id:r,"onUpdate:modelValue":o[0]||(o[0]=e=>l.elementoElegido=e)},null,8,Z),[[a.YZ,l.elementoElegido]])])))),256))])}var N={name:"ElegirIngrediente",props:["grupo","caption","tipo"],computed:{elementoElegido:{get(){return this.$store.state.ElementoElegido.Pasteles},set(e){this.$store.commit("pastel_elegido",e)}}}};const W=(0,d.Z)(N,[["render",I],["__scopeId","data-v-fcdf470c"]]);var q=W;const M={class:"combinar-sabores"},F={class:"opciones"},H=(0,n._)("label",{for:"fresa"},"Fresa",-1),L={class:"opciones"},Y=(0,n._)("label",{for:"chocolate"},"Chocolate",-1),K={class:"opciones"},B=(0,n._)("label",{for:"vainilla"},"Vainilla",-1),G={class:"opciones"},R=(0,n._)("label",{for:"limon"},"Limón",-1),J={class:"opciones"},Q=(0,n._)("label",{for:"naranja"},"Naranja",-1);function X(e,o,t,r,i,l){return(0,n.wg)(),(0,n.iD)("div",M,[(0,n._)("div",F,[H,(0,n.wy)((0,n._)("input",{type:"checkbox",value:"fresa",id:"fresa","onUpdate:modelValue":o[0]||(o[0]=e=>l.sabores_elegidos=e)},null,512),[[a.e8,l.sabores_elegidos]])]),(0,n._)("div",L,[Y,(0,n.wy)((0,n._)("input",{type:"checkbox",value:"chocolate",id:"chocolate","onUpdate:modelValue":o[1]||(o[1]=e=>l.sabores_elegidos=e)},null,512),[[a.e8,l.sabores_elegidos]])]),(0,n._)("div",K,[B,(0,n.wy)((0,n._)("input",{type:"checkbox",value:"vainilla",id:"vainilla","onUpdate:modelValue":o[2]||(o[2]=e=>l.sabores_elegidos=e)},null,512),[[a.e8,l.sabores_elegidos]])]),(0,n._)("div",G,[R,(0,n.wy)((0,n._)("input",{type:"checkbox",value:"limon",id:"limon","onUpdate:modelValue":o[3]||(o[3]=e=>l.sabores_elegidos=e)},null,512),[[a.e8,l.sabores_elegidos]])]),(0,n._)("div",J,[Q,(0,n.wy)((0,n._)("input",{type:"checkbox",value:"naranja",id:"naranja","onUpdate:modelValue":o[4]||(o[4]=e=>l.sabores_elegidos=e)},null,512),[[a.e8,l.sabores_elegidos]])])])}var ee={name:"CombinarSabores",computed:{sabores_elegidos:{get(){return this.$store.state.saborElegido.sabores},set(e){this.$store.commit("sabores_elegidos",e)}}}};const oe=(0,d.Z)(ee,[["render",X]]);var te=oe;const ae={class:"combinar-adornos"},ne={class:"opciones"},re=(0,n.Uk)("Fondant"),ie={class:"opciones"},le=(0,n.Uk)("Chocolate"),se={class:"opciones"},de=(0,n.Uk)("Nueces"),ce={class:"opciones"},ue=(0,n.Uk)("Fresas"),pe={class:"opciones"},fe=(0,n.Uk)("Frutas"),me={class:"opciones"},_e=(0,n.Uk)("Chantilli");function be(e,o,t,r,i,l){return(0,n.wg)(),(0,n.iD)("div",ae,[(0,n._)("div",ne,[(0,n._)("label",null,[re,(0,n.wy)((0,n._)("input",{type:"checkbox",value:"fondant","onUpdate:modelValue":o[0]||(o[0]=e=>l.adornos_elegidos=e)},null,512),[[a.e8,l.adornos_elegidos]])])]),(0,n._)("div",ie,[(0,n._)("label",null,[le,(0,n.wy)((0,n._)("input",{type:"checkbox",value:"chocolate","onUpdate:modelValue":o[1]||(o[1]=e=>l.adornos_elegidos=e)},null,512),[[a.e8,l.adornos_elegidos]])])]),(0,n._)("div",se,[(0,n._)("label",null,[de,(0,n.wy)((0,n._)("input",{type:"checkbox",value:"nueces","onUpdate:modelValue":o[2]||(o[2]=e=>l.adornos_elegidos=e)},null,512),[[a.e8,l.adornos_elegidos]])])]),(0,n._)("div",ce,[(0,n._)("label",null,[ue,(0,n.wy)((0,n._)("input",{type:"checkbox",value:"fresas","onUpdate:modelValue":o[3]||(o[3]=e=>l.adornos_elegidos=e)},null,512),[[a.e8,l.adornos_elegidos]])])]),(0,n._)("div",pe,[(0,n._)("label",null,[fe,(0,n.wy)((0,n._)("input",{type:"checkbox",value:"frutas","onUpdate:modelValue":o[4]||(o[4]=e=>l.adornos_elegidos=e)},null,512),[[a.e8,l.adornos_elegidos]])])]),(0,n._)("div",me,[(0,n._)("label",null,[_e,(0,n.wy)((0,n._)("input",{type:"checkbox",value:"chantilli","onUpdate:modelValue":o[5]||(o[5]=e=>l.adornos_elegidos=e)},null,512),[[a.e8,l.adornos_elegidos]])])])])}var ge={name:"CombinarAdornos",computed:{adornos_elegidos:{get(){return this.$store.state.adornoElegido.adornos},set(e){this.$store.commit("adornos_elegidos",e)}}}};const ve=(0,d.Z)(ge,[["render",be],["__scopeId","data-v-cf71ab7a"]]);var he=ve;let ye=1;var we={name:"DatosPedido",components:{CombinarSabores:te,CombinarAdornos:he,ElegirIngredienteVue:q},computed:{cambiar_nombre_cliente:{get(){return this.$store.state.infoCliente.nombre},set(e){this.$store.commit("cambiar_nombreCliente",e)}},cambiar_tel_cliente:{get(){return this.$store.state.infoCliente.tel},set(e){this.$store.commit("cambiar_telCliente",e)}},cambiar_email_cliente:{get(){return this.$store.state.infoCliente.email},set(e){this.$store.commit("cambiar_emailCliente",e)}},agregarEntrada(){const e={id:ye++,nombre:this.$store.state.infoCliente.nombre,tel:this.$store.state.infoCliente.tel,email:this.$store.state.infoCliente.email,pastel:this.$store.state.ElementoElegido.Pasteles,sabores:this.$store.getters.sabores_pastel,adornos:this.$store.getters.adornos_pastel,precio:this.$store.getters.calcular_precio};this.$store.commit("agregar_pedido",e);const o={lista_elementos:this.$store.state.saborElegido.sabores,grupo:"Sabores",propiedad:"cantidad"},t={lista_elementos:this.$store.state.adornoElegido.adornos,grupo:"Adornos",propiedad:"cantidad"},a={lista_elementos:this.$store.getters.list_pastel,grupo:"Pasteles",propiedad:"cantidad"};this.$store.commit("restar_cantidad",a),this.$store.commit("restar_cantidad",o),this.$store.commit("restar_cantidad",t),alert("Pedido realizado correctamente"),this.$store.commit("limpiar_formulario")}}};const Ee=(0,d.Z)(we,[["render",V],["__scopeId","data-v-1371be1d"]]);var ke=Ee,Ce=t(6901);const Pe=(0,n._)("img",{src:m,alt:"DeliCakes logo"},null,-1);var $e={setup(e){return(e,o)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[Pe,(0,n.Wm)(Ce.Z,{class:"tabla",objeto:"Pasteles",caption:"Pasteles",propiedad:"precio",prefijo:"$"}),(0,n.Wm)(Ce.Z,{objeto:"Sabores",caption:"Sabores",propiedad:"precio",estilo:"",prefijo:"$"}),(0,n.Wm)(Ce.Z,{objeto:"Adornos",caption:"Adornos",propiedad:"precio",prefijo:"$"}),(0,n.Wm)(ke),(0,n.Wm)(y)],64))}};const Ue=$e;var je=Ue;const De=[{path:"/",name:"cliente",component:je},{path:"/pastelero",name:"pastelero",component:()=>t.e(443).then(t.bind(t,4908))}],Se=(0,f.p7)({history:(0,f.r5)(),routes:De});var xe=Se,Ae=t(65),ze=(0,Ae.MT)({state:{Pasteles:{tres_leches:{precio:200,cantidad:15},cupcake:{precio:30,cantidad:15},cheesecake:{precio:180,cantidad:15},tradicional:{precio:100,cantidad:15},nata:{precio:120,cantidad:15}},Sabores:{fresa:{precio:55,cantidad:10},chocolate:{precio:60,cantidad:10},vainilla:{precio:50,cantidad:10},limon:{precio:50,cantidad:10},naranja:{precio:50,cantidad:10}},Adornos:{fondant:{precio:15,cantidad:20},chocolate:{precio:20,cantidad:20},nueces:{precio:20,cantidad:20},fresas:{precio:20,cantidad:20},frutas:{precio:30,cantidad:20},chantilli:{precio:30,cantidad:20}},ElementoElegido:{Pasteles:["tres_leches"]},saborElegido:{sabores:["chocolate"]},adornoElegido:{adornos:["fresas"]},infoCliente:{nombre:"",tel:"",email:""},infoPedido:[{nombre:"Gerardo Sánchez Alba",tel:"4641881555",email:"g.sanchezalba@outlook.com",pastel:"tres_leches",sabores:"vainilla",adornos:"fresas",precio:270}]},getters:{list_pastel(e){return"string"===typeof e.ElementoElegido.Pasteles?[e.ElementoElegido.Pasteles]:e.ElementoElegido.Pasteles},sabores_pastel(e){return e.saborElegido.sabores.toString().replaceAll(",",", ")},adornos_pastel(e){return e.adornoElegido.adornos.toString().replaceAll(",",", ")},calcular_precio(e){let o=0,t=e.saborElegido.sabores.length;for(let a of e.saborElegido.sabores)o+=e.Sabores[a].precio/t;for(let a of e.adornoElegido.adornos)o+=e.Adornos[a].precio;if("string"===typeof e.ElementoElegido.Pasteles)o+=e.Pasteles[e.ElementoElegido.Pasteles].precio;else for(let a of e.ElementoElegido.Pasteles)o+=e.Pasteles[a].precio;return o}},mutations:{pastel_elegido(e,o){e.ElementoElegido.Pasteles=o},sabores_elegidos(e,o){e.saborElegido.sabores=o},adornos_elegidos(e,o){e.adornoElegido.adornos=o},cambiar_nombreCliente(e,o){e.infoCliente.nombre=o},cambiar_telCliente(e,o){e.infoCliente.tel=o},cambiar_emailCliente(e,o){e.infoCliente.email=o},agregar_pedido(e,o){e.infoPedido.push(o)},eliminar_pedido(e,o){e.infoPedido.splice(o,1)},limpiar_formulario(e){e.saborElegido.sabores=[],e.adornoElegido.adornos=[];for(let o in e.infoCliente)e.infoCliente[o]=""},restar_cantidad(e,o){for(let t of o.lista_elementos)e[o.grupo][t][o.propiedad]-=1}},actions:{},modules:{}});(0,a.ri)(p).use(ze).use(xe).mount("#app")},6901:function(e,o,t){t.d(o,{Z:function(){return p}});var a=t(3396),n=t(7139),r=t(4870),i=t(65);const l={key:0,class:"lista"},s={key:1,class:"tabla"};var d={props:["objeto","caption","propiedad","estilo","prefijo"],setup(e){const o=(0,i.oR)();return(t,i)=>"lista"===e.estilo?((0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("h2",null,(0,n.zw)(e.caption),1),(0,a._)("dl",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,r.SU)(o).state[e.objeto],((o,t)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("dt",null,(0,n.zw)(t),1),(0,a._)("dd",null,(0,n.zw)(e.prefijo)+(0,n.zw)(o[e.propiedad]),1)])))),256))])])):((0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("table",null,[(0,a._)("caption",null,(0,n.zw)(e.caption),1),(0,a._)("tr",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,r.SU)(o).state[e.objeto],((e,o)=>((0,a.wg)(),(0,a.iD)("th",null,(0,n.zw)(o),1)))),256))]),(0,a._)("tr",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,r.SU)(o).state[e.objeto],((o,t)=>((0,a.wg)(),(0,a.iD)("td",null,(0,n.zw)(e.prefijo)+(0,n.zw)(o[e.propiedad]),1)))),256))])])]))}},c=t(89);const u=(0,c.Z)(d,[["__scopeId","data-v-5b269c93"]]);var p=u},1596:function(e,o,t){e.exports=t.p+"img/DeliCakesLogo.9f1bcf36.svg"}},o={};function t(a){var n=o[a];if(void 0!==n)return n.exports;var r=o[a]={exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(o,a,n,r){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],n=e[c][1],r=e[c][2];for(var l=!0,s=0;s<a.length;s++)(!1&r||i>=r)&&Object.keys(t.O).every((function(e){return t.O[e](a[s])}))?a.splice(s--,1):(l=!1,r<i&&(i=r));if(l){e.splice(c--,1);var d=n();void 0!==d&&(o=d)}}return o}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,n,r]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var a in o)t.o(o,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:o[a]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(o,a){return t.f[a](e,o),o}),[]))}}(),function(){t.u=function(e){return"js/about.f6e33acf.js"}}(),function(){t.miniCssF=function(e){return"css/about.42817478.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={},o="bakery_vuex_launchx:";t.l=function(a,n,r,i){if(e[a])e[a].push(n);else{var l,s;if(void 0!==r)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==o+r){l=u;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",o+r),l.src=a),e[a]=[n];var p=function(o,t){l.onerror=l.onload=null,clearTimeout(f);var n=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((function(e){return e(t)})),o)return o(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/bakery_vuex_launchx/"}(),function(){var e=function(e,o,t,a){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var r=function(r){if(n.onerror=n.onload=null,"load"===r.type)t();else{var i=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.href||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,n.parentNode.removeChild(n),a(s)}};return n.onerror=n.onload=r,n.href=o,document.head.appendChild(n),n},o=function(e,o){for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var n=t[a],r=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(r===e||r===o))return n}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){n=i[a],r=n.getAttribute("data-href");if(r===e||r===o)return n}},a=function(a){return new Promise((function(n,r){var i=t.miniCssF(a),l=t.p+i;if(o(i,l))return n();e(a,l,n,r)}))},n={143:0};t.f.miniCss=function(e,o){var t={443:1};n[e]?o.push(n[e]):0!==n[e]&&t[e]&&o.push(n[e]=a(e).then((function(){n[e]=0}),(function(o){throw delete n[e],o})))}}(),function(){var e={143:0};t.f.j=function(o,a){var n=t.o(e,o)?e[o]:void 0;if(0!==n)if(n)a.push(n[2]);else{var r=new Promise((function(t,a){n=e[o]=[t,a]}));a.push(n[2]=r);var i=t.p+t.u(o),l=new Error,s=function(a){if(t.o(e,o)&&(n=e[o],0!==n&&(e[o]=void 0),n)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;l.message="Loading chunk "+o+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}};t.l(i,s,"chunk-"+o,o)}},t.O.j=function(o){return 0===e[o]};var o=function(o,a){var n,r,i=a[0],l=a[1],s=a[2],d=0;if(i.some((function(o){return 0!==e[o]}))){for(n in l)t.o(l,n)&&(t.m[n]=l[n]);if(s)var c=s(t)}for(o&&o(a);d<i.length;d++)r=i[d],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(c)},a=self["webpackChunkbakery_vuex_launchx"]=self["webpackChunkbakery_vuex_launchx"]||[];a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(9314)}));a=t.O(a)})();
//# sourceMappingURL=app.09eba7de.js.map