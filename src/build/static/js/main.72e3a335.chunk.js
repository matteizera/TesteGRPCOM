(this.webpackJsonpschedulegrpcom=this.webpackJsonpschedulegrpcom||[]).push([[0],{50:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),s=a.n(c),o=a(26),i=a(2),u=a(10),l=a(25),d=a.n(l).a.create({baseURL:"https://programacaorpc.herokuapp.com/schedule/"}),j=(a(50),a(51),a(1));var m,b,h=function(e){var t=e.currentProgram;return Object(j.jsxs)("div",{className:"current-container",children:[Object(j.jsxs)("div",{className:"current-program",children:[Object(j.jsxs)("span",{children:["Em exibi\xe7\xe3o: ",null===t||void 0===t?void 0:t.title]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:["(",null===t||void 0===t?void 0:t.human_start_time," \xe0s ",null===t||void 0===t?void 0:t.human_end_time,")"]})]}),Object(j.jsx)("img",{src:t.custom_info.Graficos.ImagemURL,alt:"logo"})]})},g=(a(53),function(){return Object(j.jsx)("div",{className:"no-schedule-container",children:Object(j.jsx)("span",{children:"Sem programa\xe7\xe3o disponivel, selecione outro dia."})})}),O=(a(54),function(e){var t=e.program,a=e.active;return console.log(a),a?Object(j.jsxs)("div",{className:"schedule-cell",style:{backgroundColor:"lightyellow"},children:[Object(j.jsx)("img",{src:t.custom_info.Graficos.LogoURL,alt:"logo"}),Object(j.jsxs)("div",{className:"schedule-cell-text",children:[Object(j.jsxs)("h4",{children:[" ",t.title," "]}),Object(j.jsx)("div",{className:"current-program-cell",children:Object(j.jsxs)("span",{children:["Horario: ",t.human_start_time.substr(0,5)," at\xe9 ",t.human_end_time.substr(0,5)," "]})})]}),Object(j.jsx)("span",{className:"current-alert",children:"No ar! "})]}):Object(j.jsxs)("div",{className:"schedule-cell",children:[Object(j.jsx)("img",{src:t.custom_info.Graficos.LogoURL,alt:"logo"}),Object(j.jsxs)("div",{className:"schedule-cell-text",children:[Object(j.jsxs)("h4",{children:[" ",t.title," "]}),Object(j.jsxs)("span",{children:["Horario: ",t.human_start_time.substr(0,5)," at\xe9 ",t.human_end_time.substr(0,5)," "]})]})]})});!function(e){e[e.Domingo=0]="Domingo",e[e.Segunda=1]="Segunda",e[e["Ter\xe7a"]=2]="Ter\xe7a",e[e.Quarta=3]="Quarta",e[e.Quinta=4]="Quinta",e[e.Sexta=5]="Sexta",e[e.Sabado=6]="Sabado"}(m||(m={})),function(e){e[e.Janeiro=0]="Janeiro",e[e.Fevereiro=1]="Fevereiro",e[e["Mar\xe7o"]=2]="Mar\xe7o",e[e.Abril=3]="Abril",e[e.Maio=4]="Maio",e[e.Junho=5]="Junho",e[e.Julho=6]="Julho",e[e.Agosto=7]="Agosto",e[e.Setembro=8]="Setembro",e[e.Outubro=9]="Outubro",e[e.Novembro=10]="Novembro",e[e.Dezembro=11]="Dezembro"}(b||(b={}));var x=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1,n=e.getFullYear();return new Date("".concat(n+"-"+a+"-"+t," 00:00:00")).toISOString().substr(0,10)}()),s=Object(u.a)(c,2),o=s[0],i=s[1],l=Object(n.useState)(),x=Object(u.a)(l,2),v=x[0],p=x[1],f=Object(n.useState)(new Date),_=Object(u.a)(f,2),S=_[0],D=_[1];return Object(n.useEffect)((function(){d.get(o.toString()).then((function(e){var t=function(e){return e.map((function(e){var t=e,a=new Date("2021-01-01 ".concat(e.human_start_time.substr(0,5)," UTC")).toTimeString().substr(0,5);t.human_start_time=a;var n=new Date("2021-01-01 ".concat(e.human_end_time.substr(0,5)," UTC")).toTimeString().substr(0,5);return t.human_end_time=n,t}))}(e.data.programme.entries);r(t),p(function(e){var t,a=(new Date).toTimeString().substr(0,8);return e.forEach((function(e){Date.parse("01/01/2011 ".concat(e.human_start_time))<=Date.parse("01/01/2011 ".concat(a))&&Date.parse("01/01/2011 ".concat(e.human_end_time))>Date.parse("01/01/2011 ".concat(a))&&(t=e)})),t}(t))})).catch((function(e){r([])}));var e=new Date("".concat(o.toString()," 00:00:00"));D(e)}),[o]),Object(j.jsx)("div",{id:"page-schedule-container",children:Object(j.jsx)("main",{children:Object(j.jsxs)("div",{className:"page-schedule",children:[Object(j.jsxs)("div",{className:"date-picker",children:[Object(j.jsx)("span",{children:"Selecione outro dia para ver sua programa\xe7\xe3o."}),Object(j.jsx)("input",{type:"date",name:"data",id:"data",value:o,onChange:function(e){return i(e.target.value)}})]}),0!==a.length?Object(j.jsxs)(j.Fragment,{children:[v&&Object(j.jsx)(h,{currentProgram:v}),Object(j.jsxs)("fieldset",{children:[Object(j.jsxs)("legend",{children:["Programa\xe7\xe3o de ",m[S.getDay()],", ",S.getDate()," ",b[S.getMonth()]]}),a&&a.map((function(e){return Object(j.jsx)(O,{program:e,active:(null===v||void 0===v?void 0:v.media_id)===e.media_id})}))]})]}):Object(j.jsx)(g,{})]})})})};var v=function(){return Object(j.jsx)(o.a,{children:Object(j.jsx)(i.c,{children:Object(j.jsx)(i.a,{path:"/",exact:!0,component:x})})})};a(60);var p=function(){return Object(j.jsx)(v,{})};a(61);s.a.render(Object(j.jsxs)(r.a.StrictMode,{children:[Object(j.jsx)("link",{href:"../node_modules/bulma/css/bulma.min.css",rel:"stylesheet"}),Object(j.jsx)(p,{})]}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.72e3a335.chunk.js.map