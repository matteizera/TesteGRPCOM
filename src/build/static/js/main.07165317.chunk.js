(this.webpackJsonpschedulegrpcom=this.webpackJsonpschedulegrpcom||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),s=n.n(c),o=n(26),i=n(2),u=n(10),l=n(25),d=n.n(l).a.create({baseURL:"http://localhost:3333/orphanages/"}),j=(n(50),n(51),n(1));var m,b,h=function(e){var t=e.currentProgram;return Object(j.jsxs)("div",{className:"current-container",children:[Object(j.jsxs)("div",{className:"current-program",children:[Object(j.jsxs)("span",{children:["Em exibi\xe7\xe3o: ",null===t||void 0===t?void 0:t.title]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:["(",null===t||void 0===t?void 0:t.human_start_time," \xe0s ",null===t||void 0===t?void 0:t.human_end_time,")"]})]}),Object(j.jsx)("img",{src:t.custom_info.Graficos.ImagemURL,alt:"logo"})]})},g=(n(53),function(){return Object(j.jsx)("div",{className:"no-schedule-container",children:Object(j.jsx)("span",{children:"Sem programa\xe7\xe3o disponivel, selecione outro dia."})})}),O=(n(54),function(e){var t=e.program,n=e.active;return console.log(n),n?Object(j.jsxs)("div",{className:"schedule-cell",style:{backgroundColor:"lightyellow"},children:[Object(j.jsx)("img",{src:t.custom_info.Graficos.LogoURL,alt:"logo"}),Object(j.jsxs)("div",{className:"schedule-cell-text",children:[Object(j.jsxs)("h4",{children:[" ",t.title," "]}),Object(j.jsx)("div",{className:"current-program-cell",children:Object(j.jsxs)("span",{children:["Horario: ",t.human_start_time.substr(0,5)," at\xe9 ",t.human_end_time.substr(0,5)," "]})})]}),Object(j.jsx)("span",{className:"current-alert",children:"No ar! "})]}):Object(j.jsxs)("div",{className:"schedule-cell",children:[Object(j.jsx)("img",{src:t.custom_info.Graficos.LogoURL,alt:"logo"}),Object(j.jsxs)("div",{className:"schedule-cell-text",children:[Object(j.jsxs)("h4",{children:[" ",t.title," "]}),Object(j.jsxs)("span",{children:["Horario: ",t.human_start_time.substr(0,5)," at\xe9 ",t.human_end_time.substr(0,5)," "]})]})]})});!function(e){e[e.Domingo=0]="Domingo",e[e.Segunda=1]="Segunda",e[e["Ter\xe7a"]=2]="Ter\xe7a",e[e.Quarta=3]="Quarta",e[e.Quinta=4]="Quinta",e[e.Sexta=5]="Sexta",e[e.Sabado=6]="Sabado"}(m||(m={})),function(e){e[e.Janeiro=0]="Janeiro",e[e.Fevereiro=1]="Fevereiro",e[e["Mar\xe7o"]=2]="Mar\xe7o",e[e.Abril=3]="Abril",e[e.Maio=4]="Maio",e[e.Junho=5]="Junho",e[e.Julho=6]="Julho",e[e.Agosto=7]="Agosto",e[e.Setembro=8]="Setembro",e[e.Outubro=9]="Outubro",e[e.Novembro=10]="Novembro",e[e.Dezembro=11]="Dezembro"}(b||(b={}));var x=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(function(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,a=e.getFullYear();return new Date("".concat(a+"-"+n+"-"+t," 00:00:00")).toISOString().substr(0,10)}()),s=Object(u.a)(c,2),o=s[0],i=s[1],l=Object(a.useState)(),x=Object(u.a)(l,2),v=x[0],p=x[1],f=Object(a.useState)(new Date),_=Object(u.a)(f,2),S=_[0],D=_[1];return Object(a.useEffect)((function(){d.get(o.toString()).then((function(e){var t=function(e){return e.map((function(e){var t=e,n=new Date("2021-01-01 ".concat(e.human_start_time.substr(0,5)," UTC")).toTimeString().substr(0,5);t.human_start_time=n;var a=new Date("2021-01-01 ".concat(e.human_end_time.substr(0,5)," UTC")).toTimeString().substr(0,5);return t.human_end_time=a,t}))}(e.data.programme.entries);r(t),p(function(e){var t,n=(new Date).toTimeString().substr(0,8);return e.forEach((function(e){Date.parse("01/01/2011 ".concat(e.human_start_time))<=Date.parse("01/01/2011 ".concat(n))&&Date.parse("01/01/2011 ".concat(e.human_end_time))>Date.parse("01/01/2011 ".concat(n))&&(t=e)})),t}(t))})).catch((function(e){r([])}));var e=new Date("".concat(o.toString()," 00:00:00"));D(e)}),[o]),Object(j.jsx)("div",{id:"page-schedule-container",children:Object(j.jsx)("main",{children:Object(j.jsxs)("div",{className:"page-schedule",children:[Object(j.jsxs)("div",{className:"date-picker",children:[Object(j.jsx)("span",{children:"Selecione outro dia para ver sua programa\xe7\xe3o."}),Object(j.jsx)("input",{type:"date",name:"data",id:"data",value:o,onChange:function(e){return i(e.target.value)}})]}),0!==n.length?Object(j.jsxs)(j.Fragment,{children:[v&&Object(j.jsx)(h,{currentProgram:v}),Object(j.jsxs)("fieldset",{children:[Object(j.jsxs)("legend",{children:["Programa\xe7\xe3o de ",m[S.getDay()],", ",S.getDate()," ",b[S.getMonth()]]}),n&&n.map((function(e){return Object(j.jsx)(O,{program:e,active:(null===v||void 0===v?void 0:v.media_id)===e.media_id})}))]})]}):Object(j.jsx)(g,{})]})})})};var v=function(){return Object(j.jsx)(o.a,{children:Object(j.jsx)(i.c,{children:Object(j.jsx)(i.a,{path:"/",exact:!0,component:x})})})};n(60);var p=function(){return Object(j.jsx)(v,{})};n(61);s.a.render(Object(j.jsxs)(r.a.StrictMode,{children:[Object(j.jsx)("link",{href:"../node_modules/bulma/css/bulma.min.css",rel:"stylesheet"}),Object(j.jsx)(p,{})]}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.07165317.chunk.js.map