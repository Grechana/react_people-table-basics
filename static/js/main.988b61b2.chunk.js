(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(22),a=c(6),s=(c(31),c(32),c(2)),r=c(15),j=c.n(r),i=(c(33),c(4)),l=c(0);function b(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(34);var d=c(3),o=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},h=function(){var e=Object(l.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(l.useState)(!1),h=Object(i.a)(r,2),O=h[0],x=h[1],m=Object(l.useState)(!1),u=Object(i.a)(m,2),p=u[0],f=u[1],N=Object(s.q)().slugName;return Object(l.useEffect)((function(){x(!0),b().then((function(e){n(e),x(!1)})).catch((function(){return f(!0)})).finally((function(){return x(!1)}))}),[]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"title",children:"People Page"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsxs)("div",{className:"box table-container",children:[O&&Object(d.jsx)(o,{}),p&&Object(d.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!O&&c.length<1&&Object(d.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!O&&Object(d.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Sex"}),Object(d.jsx)("th",{children:"Born"}),Object(d.jsx)("th",{children:"Died"}),Object(d.jsx)("th",{children:"Mother"}),Object(d.jsx)("th",{children:"Father"})]})}),Object(d.jsx)("tbody",{children:c.map((function(e){var t=c.find((function(t){return t.name===e.motherName})),n=c.find((function(t){return t.name===e.fatherName})),s=e.name,r=e.slug,i=e.sex,l=e.born,b=e.died,o=e.motherName,h=e.fatherName;return Object(d.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":r===N}),children:[Object(d.jsx)("td",{children:Object(d.jsx)(a.b,{className:"f"===i?"has-text-danger":"",to:"/people/".concat(r),children:s})}),Object(d.jsx)("td",{children:i}),Object(d.jsx)("td",{children:l}),Object(d.jsx)("td",{children:b}),t?Object(d.jsx)("td",{children:Object(d.jsx)(a.b,{to:"/people/".concat(t.slug),className:"has-text-danger",children:t.name})}):Object(d.jsx)("td",{children:o||"-"}),n?Object(d.jsx)("td",{children:Object(d.jsx)(a.b,{to:"/people/".concat(n.slug),children:n.name})}):Object(d.jsx)("td",{children:h||"-"})]},r)}))})]})]})})]})},O=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},x=function(){return Object(d.jsxs)("div",{"data-cy":"app",children:[Object(d.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(a.c,{to:"/",className:O,children:"Home"}),Object(d.jsx)(a.c,{to:"/people",className:O,children:"People"})]})})}),Object(d.jsx)("main",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.b,{path:"/",element:Object(d.jsx)("h1",{className:"title",children:"Home Page"})}),Object(d.jsx)(s.b,{path:"/home",element:Object(d.jsx)(s.a,{to:"/",replace:!0})}),Object(d.jsxs)(s.b,{path:"people",children:[Object(d.jsx)(s.b,{index:!0,element:Object(d.jsx)(h,{})}),Object(d.jsx)(s.b,{path:":slugName",element:Object(d.jsx)(h,{})})]}),Object(d.jsx)(s.b,{path:"*",element:Object(d.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(d.jsx)(a.a,{children:Object(d.jsx)(x,{})}))}},[[36,1,2]]]);
//# sourceMappingURL=main.988b61b2.chunk.js.map