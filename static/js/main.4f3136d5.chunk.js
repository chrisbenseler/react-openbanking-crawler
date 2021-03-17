(this["webpackJsonpreact-openbankingcrawler"]=this["webpackJsonpreact-openbankingcrawler"]||[]).push([[0],{80:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(23),i=n.n(r),s=(n(80),n(10)),j=n.n(s),o=n(57),u=n(17),b=n(14),l=n(130),d=n(143),O=n(144),h=n(65),x=(n(82),n(83),n(21)),p=n(9),f=n(95),m=n(124),v=n(123),g=n(122),k=n(45),C=n(145),w=a.a.createContext({items:[],loaded:!1,selectedId:null}),y=w.Provider,F=n(2);var E=function(e){var t=e.id,n=e.component,a=void 0===n?"h3":n,r=e.variant,i=void 0===r?"h3":r,s=Object(c.useContext)(w),j=Object(b.a)(s,1)[0],o=Object(c.useState)(null),u=Object(b.a)(o,2),l=u[0],d=u[1];return Object(c.useEffect)((function(){d(j.items.find((function(e){return e.id===t})))}),[j,t]),Object(F.jsx)(C.a,{my:2,children:Object(F.jsx)(k.a,{variant:i,component:a,children:l?l.name:""})})},P=Object(g.a)({gridItem:{display:"flex",alignItems:"center",flexDirection:"column"}});var S=function(){var e=Object(p.h)().id,t=Object(p.f)(),n=function(e){return t.push("".concat(t.location.pathname,"/").concat(e))},c=P();return Object(F.jsxs)("section",{children:[Object(F.jsx)(E,{component:"h2",variant:"h4",id:e}),Object(F.jsxs)(v.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:3,children:[Object(F.jsxs)(v.a,{item:!0,xs:!0,className:c.gridItem,children:[Object(F.jsx)(k.a,{component:"h3",variant:"h5",children:"Empr\xe9stimo"}),Object(F.jsxs)(m.a,{variant:"contained",color:"primary","aria-label":"Empr\xe9stimos",children:[Object(F.jsx)(f.a,{onClick:function(){return n("personal-loans")},children:"PF"}),Object(F.jsx)(f.a,{onClick:function(){return n("business-loans")},children:"PJ"})]})]}),Object(F.jsxs)(v.a,{item:!0,xs:!0,className:c.gridItem,children:[Object(F.jsx)(k.a,{component:"h3",variant:"h5",children:"Cart\xe3o de Cr\xe9dito"}),Object(F.jsxs)(m.a,{variant:"contained",color:"primary","aria-label":"Empr\xe9stimos",children:[Object(F.jsx)(f.a,{onClick:function(){return n("personal-credit-cards")},children:"PF"}),Object(F.jsx)(f.a,{onClick:function(){return n("business-loans")},children:"PJ"})]})]})]})]})},I=n(125),_=n(126),B=n(127),J=n(128);var L=function(){var e=Object(c.useContext)(w),t=Object(b.a)(e,1)[0];return Object(F.jsxs)("section",{children:[Object(F.jsx)(C.a,{mt:2,children:Object(F.jsx)(k.a,{component:"h2",variant:"h4",children:"Bancos"})}),t.loaded?null:Object(F.jsx)(I.a,{color:"secondary"}),Object(F.jsx)(_.a,{children:t.items.map((function(e){return Object(F.jsx)(B.a,{button:!0,component:x.b,to:"institutions/"+e.id,divider:!0,children:Object(F.jsx)(J.a,{children:e.name})},"item_"+e.id)}))})]})},D=n(31),M=n(141),N=n(142),T=n(129),W=n(132),V=n(131),q=n(62),z=n.n(q),A=n(63),G=n.n(A);var H=function(){var e=Object(p.f)(),t=Object(p.g)();return Object(F.jsx)(T.a,{position:"static",children:Object(F.jsx)(l.a,{maxWidth:"md",children:Object(F.jsxs)(V.a,{children:[t.key?Object(F.jsx)(W.a,{onClick:function(){return e.goBack()},edge:"start",color:"inherit","aria-label":"Voltar",children:Object(F.jsx)(z.a,{})}):Object(F.jsx)(W.a,{edge:"start",color:"inherit",children:Object(F.jsx)(G.a,{})}),Object(F.jsx)(k.a,{variant:"h5",component:"h1",children:"Open Banking Brasil"})]})})})},K=n(133),Q=n(64),R=n.n(Q);var U=function(e){var t=e.pager,n=e.handleClick;return Object(F.jsxs)("footer",{children:["P\xe1gina ",t.current,"/",t.total,t.total>1&&t.current!==t.total?Object(F.jsx)("div",{children:Object(F.jsx)(K.a,{onClick:n,color:"primary","aria-label":"add",children:Object(F.jsx)(R.a,{})})}):null]})},X=n(67),Y=n(135),Z=n(139),$=n(138),ee=n(134),te=n(140),ne=n(136),ce=n(137);var ae=function(e){var t=e.services;return Object(F.jsx)("div",{children:t.map((function(e,t){return Object(F.jsxs)("div",{children:[e.name," (",e.code,")",Object(F.jsx)(ee.a,{component:X.a,children:Object(F.jsxs)(Y.a,{"aria-label":"Faixas de pre\xe7os",children:[Object(F.jsx)(ne.a,{children:Object(F.jsxs)(ce.a,{children:[Object(F.jsx)($.a,{children:"Faixa 1"}),Object(F.jsx)($.a,{children:"Faixa 2"}),Object(F.jsx)($.a,{children:"Faixa 3"}),Object(F.jsx)($.a,{children:"Faixa 4"})]})}),Object(F.jsx)(Z.a,{children:Object(F.jsx)(ce.a,{children:e.prices.map((function(e,t){return Object(F.jsxs)($.a,{children:[e.value," ",e.currency]},"price_"+t)}))})}),Object(F.jsx)(te.a,{children:Object(F.jsx)(ce.a,{children:Object(F.jsxs)($.a,{colspan:4,children:["Min/max: ","".concat(e.minimum.value,"/").concat(e.maximum.value," ").concat(e.minimum.currency)]})})})]})})]},"service_".concat(t))}))})},re="https://api.sandboxlab.com.br/api",ie=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(re,"/institutions"));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(u.a)(j.a.mark((function e(t,n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(re,"/institutions/").concat(t,"/personal-loans?page=").concat(n));case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),je=function(){var e=Object(u.a)(j.a.mark((function e(t,n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(re,"/institutions/").concat(t,"/personal-credit-cards?page=").concat(n));case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var oe=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),i=Object(b.a)(r,2),s=i[0],o=i[1],l=Object(c.useState)({}),d=Object(b.a)(l,2),O=d[0],h=d[1],x=Object(p.h)().id;return Object(c.useEffect)((function(){Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(1);case 1:case"end":return e.stop()}}),e)})))()}),[x]),Object(c.useEffect)((function(){s&&Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je(x,s);case 2:t=e.sent,a([].concat(Object(D.a)(n),Object(D.a)(t.personalCreditCards))),h(t.pagination);case 5:case"end":return e.stop()}}),e)})))()}),[x,s]),Object(F.jsxs)("section",{children:[Object(F.jsx)(E,{id:x,component:"h2",variant:"h4"}),Object(F.jsx)(C.a,{mb:2,children:Object(F.jsx)(k.a,{component:"h3",variant:"h5",children:"Cart\xe3o de Cr\xe9dito - Pessoa F\xedsica"})}),Object(F.jsx)(v.a,{container:!0,spacing:3,children:n.map((function(e,t){return Object(F.jsx)(v.a,{item:!0,xs:12,md:6,children:Object(F.jsx)(M.a,{children:Object(F.jsxs)(N.a,{children:[Object(F.jsx)(k.a,{variant:"h7",component:"h6",children:e.name}),Object(F.jsx)(ae,{services:e.fees.services})]})})},e._id+"_"+t)}))}),Object(F.jsx)(U,{pager:O,handleClick:function(){o(O.current+1)}})]})};var ue=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),i=Object(b.a)(r,2),s=i[0],o=i[1],l=Object(c.useState)({}),d=Object(b.a)(l,2),O=d[0],h=d[1],x=Object(p.h)().id;return Object(c.useEffect)((function(){Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(1);case 1:case"end":return e.stop()}}),e)})))()}),[x]),Object(c.useEffect)((function(){s&&Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se(x,s);case 2:t=e.sent,a([].concat(Object(D.a)(n),Object(D.a)(t.personalLoans))),h(t.pagination);case 5:case"end":return e.stop()}}),e)})))()}),[x,s]),Object(F.jsxs)("section",{children:[Object(F.jsx)(E,{id:x,component:"h2",variant:"h4"}),Object(F.jsx)(C.a,{mb:2,children:Object(F.jsx)(k.a,{component:"h3",variant:"h5",children:"Empr\xe9stimo - Pessoa F\xedsica"})}),Object(F.jsx)(v.a,{container:!0,spacing:3,children:n.map((function(e,t){return Object(F.jsx)(v.a,{item:!0,xs:12,md:6,children:Object(F.jsx)(M.a,{children:Object(F.jsxs)(N.a,{children:[Object(F.jsx)(k.a,{variant:"h7",component:"h6",children:e.type}),Object(F.jsx)(ae,{services:e.fees.services})]})})},e._id+"_"+t)}))}),Object(F.jsx)(U,{pager:O,handleClick:function(){o(O.current+1)}})]})};var be=function(){return Object(F.jsxs)(p.c,{children:[Object(F.jsx)(p.a,{path:"*/institutions/:id/personal-loans",children:Object(F.jsx)(ue,{})}),Object(F.jsx)(p.a,{path:"*/institutions/:id/personal-credit-cards",children:Object(F.jsx)(oe,{})}),Object(F.jsx)(p.a,{path:"*/institutions/:id",children:Object(F.jsx)(S,{})}),Object(F.jsx)(p.a,{path:"*/institutions",children:Object(F.jsx)(L,{})}),Object(F.jsx)(p.a,{path:"*/",children:Object(F.jsx)(L,{})})]})};function le(){var e=Object(c.useContext)(w),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie();case 2:t=e.sent,a(Object(o.a)(Object(o.a)({},n),{},{items:t.sort((function(e,t){return e.name>t.name?1:-1})),loaded:!0}));case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(F.jsxs)(x.a,{children:[Object(F.jsx)(H,{}),Object(F.jsx)(l.a,{maxWidth:"md",children:Object(F.jsx)(be,{})})]})}var de=function(){return Object(h.a)({palette:{primary:{main:"#1a237e"}}})},Oe=function(){var e=Object(c.useState)({items:[],loaded:!1,selectedId:null}),t=Object(b.a)(e,2),n=t[0],a=t[1],r=de();return Object(F.jsxs)(y,{value:[n,a],children:[Object(F.jsx)(d.a,{}),Object(F.jsx)(O.a,{theme:r,children:Object(F.jsx)(le,{})})]})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,147)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(F.jsx)(a.a.StrictMode,{children:Object(F.jsx)(Oe,{})}),document.getElementById("root")),he()}},[[91,1,2]]]);
//# sourceMappingURL=main.4f3136d5.chunk.js.map