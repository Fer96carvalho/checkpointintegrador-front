(this["webpackJsonpctd-commerce"]=this["webpackJsonpctd-commerce"]||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){},121:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),o=(a(99),a(100),a(16)),i=a(8),m=a(13),s=a.n(m),u=a(24),d=a(3),p=(a(102),a(146)),f=a(141),E=a(142),g=a(78),x=a.n(g).a.create({baseURL:"https://infra-t2-g4.herokuapp.com"}),y=(a(121),a(148)),h=a(79),v=a(40),b=function(e,t){switch(t.type){case"ADD_PROD":return e.filter((function(e){return e.prodcId===t.payload.prodcId})).length?e:[].concat(Object(v.a)(e),[t.payload]);default:return e}},j=Object(n.createContext)(),N=function(e){var t=e.children,a=Object(n.useReducer)(b,[],(function(){var e=localStorage.getItem("cartProd");return e?JSON.parse(e):[]})),c=Object(d.a)(a,2),l=c[0],o=c[1];Object(n.useEffect)((function(){localStorage.setItem("cartProd",JSON.stringify(l))}),[l]);return r.a.createElement(j.Provider,{value:{cartProd:l,addProd:function(e){return o({type:"ADD_PROD",payload:e})}}},t)},w=function(e){var t=e.prodcId,a=e.prodcImg,c=e.prodcTitle,l=e.prodcDesc,i=e.prodcPrice.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:3}),m=Object(n.useContext)(j).addProd;return r.a.createElement(y.a,{className:"m-5 p-3",style:{width:"18rem",height:"30rem"},id:"card"},r.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},r.a.createElement(o.b,{to:"/product/details/".concat(t)},r.a.createElement("img",{src:a,alt:"",height:"200rem"}))),r.a.createElement(y.a.Body,null,r.a.createElement(y.a.Title,null,c),r.a.createElement(y.a.Text,null,l),r.a.createElement(y.a.Text,{id:"preco"},"Pre\xe7o: R$ ",i),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center flex-wrap flex-column",id:"button"},r.a.createElement(h.a,{onClick:function(){return m({prodcId:t,prodcImg:a,prodcTitle:c,prodcDesc:l,prodBrPrice:i})},id:"button",variant:"primary"},"Comprar"))))},O=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("/products");case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("N\xe3o foi possivel carregar os dados"+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]);var l=[a.filter((function(e){return"Eletronicos"===e.category})).pop(),a.filter((function(e){return"Comidas"===e.category})).pop(),a.filter((function(e){return"Brinquedos"===e.category})).pop()],o=[a.filter((function(e){return"Vestuarios"===e.category})).pop(),a.filter((function(e){return"Bebidas"===e.category})).pop(),a.filter((function(e){return"Joias e Relogios"===e.category})).pop()];return r.a.createElement(p.a,{id:"carousel-container"},r.a.createElement(p.a.Item,null,r.a.createElement(f.a,null,r.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},void 0!==l[0]&&l.map((function(e,t){var a=e.id,n=e.image,c=e.description,l=e.title,o=e.price;return r.a.createElement(E.a,{id:"setClassName",key:a,md:3,sm:6,className:"".concat(1===t?"d-none d-sm-block":2===t?"d-none d-md-block":"")},r.a.createElement(w,{key:a,prodcId:a,prodcImg:n,prodcDesc:c,prodcTitle:l,prodcPrice:o}))})),";"))),r.a.createElement(p.a.Item,null,r.a.createElement(f.a,null,r.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},void 0!==o[0]&&o.map((function(e,t){var a=e.id,n=e.image,c=e.description,l=e.title,o=e.price;return r.a.createElement(E.a,{id:"setClassName",key:a,md:3,sm:6,className:"".concat(1===t?"d-none d-sm-block":2===t?"d-none d-md-block":"")},r.a.createElement(w,{key:a,prodcId:a,prodcImg:n,prodcDesc:c,prodcTitle:l,prodcPrice:o}))})),";"))))},k=(a(125),a(143)),I=a(81),P=a.n(I),S=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("/categories");case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("N\xe3o foi possivel carregar os dados"+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var l=Object(n.useState)([]),i=Object(d.a)(l,2),m=i[0],g=i[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("/products");case 3:t=e.sent,g(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("N\xe3o foi possivel carregar os dados"+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{fluid:!0,id:"container-body",className:"mt-5"},r.a.createElement("h1",null,"ROCKETSHOP"),r.a.createElement("h2",null,"OS MENORES PRE\xc7OS DA GAL\xc1XIA EST\xc3O AQUI!"),r.a.createElement(f.a,{id:"sub-body"},r.a.createElement(E.a,{md:12},r.a.createElement(p.a,null,r.a.createElement(p.a.Item,null,r.a.createElement("div",{className:" container-fluid d-flex justify-content-center align-items-center flex-wrap flex-row",id:"side-bar"},r.a.createElement("img",{className:"mt-3",style:{width:"32%"},src:"https://images.milledcdn.com/2017-11-27/WTgBz3Qe_RoCC5M5/DPCmin9ZTGi3.gif",alt:"cyber-monday"}))),r.a.createElement(p.a.Item,null,r.a.createElement("div",{className:" container-fluid d-flex justify-content-center align-items-center flex-wrap flex-row",id:"side-bar"},r.a.createElement("img",{className:"mt-3",style:{width:"30%"},src:P.a,alt:"cyber-monday"})))),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center flex-wrap flex-row  mt-3 p-3",style:{color:"white"}},0!==a&&a.map((function(e){return r.a.createElement(o.b,{key:e,to:"/category/".concat(e)},r.a.createElement("div",{id:"cat",className:"m-1 mt-5"},r.a.createElement("h4",{className:"m-3 p-2"},e)))})))),r.a.createElement(E.a,{md:12,className:"d-flex justify-content-center align-items-center flex-wrap flex-column mt-5",id:"cards-area"},r.a.createElement("div",{className:"d-flex justify-content-center align-items-center flex-wrap flex-row",id:"cards"},0!==m&&m.map((function(e){var t=e.id,a=e.title,n=e.description,c=e.image,l=e.price;return r.a.createElement(w,{key:t,prodcId:t,prodcImg:c,prodcDesc:n,prodcTitle:a,prodcPrice:l})})))))))},C=a(17);a(126);var D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,null,r.a.createElement("title",null,"RocketShop | Home")),r.a.createElement(k.a,{fluid:!0,className:"m-0 p-0",id:"container-home"},r.a.createElement(O,null),r.a.createElement(S,null)))},R=a(84),T=a.n(R),H=function(){var e=Object(i.f)();return setTimeout((function(){e("/")}),5e3),r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,null,r.a.createElement("title",null,"RocketShop | 404 Not Found")),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("img",{src:T.a,alt:"Erro 404 Not Found",width:"100%",centered:!0})))},F=(a(127),a(85)),z=a.n(F),M=a(145),B=a(147),L=a(144),A=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("/categories");case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("N\xe3o foi possivel carregar os dados"+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(M.a,{bg:"dark",variant:"dark",expand:"xl"},r.a.createElement(k.a,null,r.a.createElement(M.a.Brand,{as:o.b,to:"/"},r.a.createElement("img",{src:z.a,className:"m-2",alt:"logo-rocket",width:"50",height:"50"}),"RocketShop"),r.a.createElement(M.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(M.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end"},r.a.createElement(B.a,null,r.a.createElement(L.a,{title:"Produtos",id:"basic-nav-dropdown"},a.map((function(e){return r.a.createElement(L.a.Item,{key:e,as:o.b,to:"/category/".concat(e)},e)}))),r.a.createElement(B.a.Link,{as:o.b,to:"/about"},"Sobre"),r.a.createElement(B.a.Link,{as:o.b,to:"/product/cart"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi bi-cart4",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"})))))))))},V=(a(130),function(){return r.a.createElement("footer",{className:"py-3 my-4"},r.a.createElement("p",{className:"text-center text-muted border-bottom pb-3 mb-3"},"Desenvolvido por Grupo 3 | Turma 2"),r.a.createElement("p",{className:"text-center text-muted"},"RocketShop\xa9 2021 Company, Inc"))});a(131);function J(){var e=Object(i.g)().cat,t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){function t(){return(t=Object(u.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.get("/products/category/".concat(e));case 3:a=t.sent,l(a.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("N\xe3o foi possivel carregar os dados"+t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,null,r.a.createElement("title",null,"RocketShop | ",e)),r.a.createElement(k.a,{fluid:!0,className:"d-flex justify-content-center align-items-center",id:"container-cat"},r.a.createElement(f.a,{md:12,className:"d-flex justify-content-center align-items-center"},r.a.createElement("h2",{className:"m-5 d-flex justify-content-center align-items-center",style:{color:"whitesmoke"}},e),0!==c&&c.map((function(e){var t=e.id,a=e.title,n=e.description,c=e.image,l=e.price;return r.a.createElement(w,{key:t,prodcId:t,prodcImg:c,prodcDesc:n,prodcTitle:a,prodcPrice:l})})))))}a(132);var G=function(){var e=Object(n.useContext)(j).addProd,t=Object(i.g)().produc,a=Object(n.useState)([]),c=Object(d.a)(a,2),l=c[0],o=c[1];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("/products/".concat(t));case 3:a=e.sent,o(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("N\xe3o foi possivel carregar os dados"+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]);var m=l.id,p=l.image,g=l.description,y=l.price,v=l.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,null,r.a.createElement("title",null,"RocketShop | ","".concat(l.title))),0!==l&&r.a.createElement(k.a,{key:l.id,fluid:!0,className:"d-flex justify-content-center align-items-center flex-row mb-5"},r.a.createElement(f.a,{className:"d-flex justify-content-center align-items-center mt-5"},r.a.createElement(E.a,{md:3,className:"d-flex justify-content-center align-items-center pt-4"},r.a.createElement("div",{className:"d-flex justify-content-start align-items-start m-3"},r.a.createElement("img",{src:l.image,style:{width:"15rem"},alt:""}))),r.a.createElement(E.a,{md:6,className:"d-flex justify-content-center align-items-start flex-column ms-5 pt-5"},r.a.createElement("h2",null,l.title),r.a.createElement("p",{className:"mb-3"},l.description),r.a.createElement("div",{className:"d-flex justify-content-center align-items-start flex-wrap flex-column"},r.a.createElement("h5",{className:"mb-4"},"Pre\xe7o: R$ ",l.price),r.a.createElement("div",{className:"d-flex justify-content-center align-items-start flex-wrap flex-column"},r.a.createElement(h.a,{onClick:function(){return e({prodcId:m,prodcImg:p,prodcTitle:v,prodcDesc:g,prodBrPrice:y})},id:"button",variant:"primary"},"Comprar")))))))},$=a(47),_=a(48),Q=a(65),U=a(64),q=(a(133),a(87)),K=a.n(q),W=a(88),X=a.n(W),Z=a(89),Y=a.n(Z),ee=a(90),te=a.n(ee),ae=a(91),ne=a.n(ae),re=a(92),ce=a.n(re),le=function(e){Object(Q.a)(a,e);var t=Object(U.a)(a);function a(){return Object($.a)(this,a),t.apply(this,arguments)}return Object(_.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,null,r.a.createElement("title",null,"RocketShop | Sobre")),r.a.createElement(k.a,{fluid:!0,className:"d-flex justify-content-center align-items-center flex-column flex-wrap mb-5",id:"container"},r.a.createElement(E.a,{md:10,className:"d-flex justify-content-center align-items-center m-5"},r.a.createElement("h1",{style:{color:"white"}},"Desenvolvedores:")),r.a.createElement(E.a,{md:12,className:"d-flex justify-content-center align-items-center flex-row flex-wrap mb-5"},r.a.createElement("div",{className:"d-flex justify-content-center align-items-center flex-column m-2"},r.a.createElement("img",{src:K.a,style:{width:"13rem"},alt:""}),r.a.createElement("h4",{className:"m-3",style:{color:"white"}},"Duyllyan Carvalho")),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center flex-column m-2"},r.a.createElement("img",{src:Y.a,style:{width:"13rem"},alt:""}),r.a.createElement("h4",{className:"m-3",style:{color:"white"}},"Fernando Carvalho")),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center flex-column m-2"},r.a.createElement("img",{src:te.a,style:{width:"13rem"},alt:""}),r.a.createElement("h4",{className:"m-3",style:{color:"white"}},"Leonardo Martins"))),r.a.createElement(E.a,{md:12,className:"d-flex justify-content-center align-items-center flex-row flex-wrap mb-5"},r.a.createElement("div",{className:"d-flex justify-content-center align-items-center flex-column m-2"},r.a.createElement("img",{src:X.a,style:{width:"13rem"},alt:""}),r.a.createElement("h4",{className:"m-3",style:{color:"white"}},"Pedro Moreira")),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center flex-column m-2"},r.a.createElement("img",{src:ne.a,style:{width:"13rem"},alt:""}),r.a.createElement("h4",{className:"m-3",style:{color:"white"}},"Peter Leite")),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center flex-column m-2"},r.a.createElement("img",{src:ce.a,style:{width:"13rem"},alt:""}),r.a.createElement("h4",{className:"m-3",style:{color:"white"}},"Mariana Lima")))))}}]),a}(n.Component);a(134);function oe(){var e=Object(n.useContext)(j).cartProd;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,null,r.a.createElement("title",null,"RocketShop | Carrinho")),r.a.createElement(k.a,{fluid:!0,md:12,className:"d-flex justify-content-center flex-wrap flex-column m-5 align-items-start"},r.a.createElement("h1",null,"Carrinho:"),r.a.createElement("div",{id:"container-titulo",className:"d-flex justify-content-around align-items-center flex-wrap flex-row"},r.a.createElement(E.a,null,r.a.createElement("p",null,"Foto")),r.a.createElement(E.a,null,r.a.createElement("p",null,"Produto")),r.a.createElement(E.a,null,r.a.createElement("p",null,"Descri\xe7\xe3o")),r.a.createElement(E.a,null,r.a.createElement("p",null,"Pre\xe7o"))),0!==e&&e.map((function(e){var t=e.prodcId,a=e.prodcImg,n=e.prodcTitle,c=e.prodcDesc,l=e.prodBrPrice;return r.a.createElement(f.a,{key:t,md:6,className:"d-flex justify-content-center align-items-center flex-wrap flex-column"},r.a.createElement("div",{id:"container-produto",className:"d-flex justify-content-around align-items-center flex-wrap flex-row"},r.a.createElement(E.a,null,r.a.createElement("img",{src:a,alt:"",className:"m-2 justify-content-start"})),r.a.createElement(E.a,null,r.a.createElement("p",{className:"m-1"}," ",n)),r.a.createElement(E.a,null,r.a.createElement("p",{className:"m-2"}," ",c)),r.a.createElement(E.a,null,r.a.createElement("p",{className:"m-1"}," R$ ",l))))}))))}var ie=function(){return r.a.createElement(o.a,null,r.a.createElement(N,null,r.a.createElement(C.b,null,r.a.createElement(A,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",element:r.a.createElement(D,null)}),r.a.createElement(i.a,{path:"/category/:cat",element:r.a.createElement(J,null)}),r.a.createElement(i.a,{path:"/product/details/:produc",element:r.a.createElement(G,null)}),r.a.createElement(i.a,{path:"/product/cart",element:r.a.createElement(oe,null)}),r.a.createElement(i.a,{path:"/about",element:r.a.createElement(le,null)}),r.a.createElement(i.a,{path:"*",element:r.a.createElement(H,null)})),r.a.createElement(V,null))))};var me=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(me,null)),document.getElementById("root"))},81:function(e,t,a){e.exports=a.p+"static/media/cupom.3e0f620d.png"},84:function(e,t,a){e.exports=a.p+"static/media/banner-rocket.7a25eb37.png"},85:function(e,t,a){e.exports=a.p+"static/media/startup.a372e7ec.png"},87:function(e,t,a){e.exports=a.p+"static/media/duy.797ba696.png"},88:function(e,t,a){e.exports=a.p+"static/media/pedro.0eaf03cd.png"},89:function(e,t,a){e.exports=a.p+"static/media/fernando.d6fbad32.png"},90:function(e,t,a){e.exports=a.p+"static/media/leonardo.0090cd68.png"},91:function(e,t,a){e.exports=a.p+"static/media/peter.d0a24811.png"},92:function(e,t,a){e.exports=a.p+"static/media/mariana.197172ea.png"},94:function(e,t,a){e.exports=a(135)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.9a008632.chunk.js.map