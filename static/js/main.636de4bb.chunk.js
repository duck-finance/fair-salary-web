(this["webpackJsonpfair-salary-web"]=this["webpackJsonpfair-salary-web"]||[]).push([[0],{24:function(e,n,t){e.exports=t(34)},34:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),l=t.n(o),i=t(21),c=t(11),u=t(1),s=t(2);function m(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 240px;\n"]);return m=function(){return e},e}var f=s.a.div(m());function d(e){var n=e.formState,t=e.onChange;return r.a.createElement(f,null,r.a.createElement("p",null,"\u042f \u043f\u043e\u043b\u0443\u0447\u0430\u044e"),r.a.createElement("input",{placeholder:"20 000 \u0440\u0443\u0431.",onChange:function(e){var a=e.target.value;t(Object(c.a)({},n,{salary:a}))},value:n.salary}),r.a.createElement("p",null,"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0440\u0430\u0437 \u043c\u0435\u043d\u044f\u043b\u0430\u0441\u044c"),r.a.createElement("input",{type:"date",placeholder:"\u041a\u043e\u0433\u0434\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0440\u0430\u0437 \u043f\u043e\u0432\u044b\u0448\u0430\u043b\u0430\u0441\u044c?",value:n.date,onChange:function(e){var a=e.target.value;t(Object(c.a)({},n,{date:a}))}}))}var h=t(17),v=t.n(h);function p(){var e=Object(u.a)(["\n  display: flex;\n  width: 100%;\n  height: 400px;\n  align-items: center;\n  justify-content: center;\n"]);return p=function(){return e},e}var y=s.a.div(p());function g(){return r.a.createElement(y,null,r.a.createElement("h2",null,"\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0443"))}function E(){var e=Object(u.a)(["\n  display: flex;\n  width: 100%;\n  height: 400px;\n  align-items: center;\n  justify-content: center;\n"]);return E=function(){return e},e}var b=s.a.div(E());function x(){return r.a.createElement(b,null,r.a.createElement("h2",null,"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043c\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u0441 \u0441\u0443\u043c\u043c\u0430\u043c\u0438 \u043e\u0442 1000 \u0440\u0443\u0431\u043b\u0435\u0439"," ",r.a.createElement("span",{role:"img","aria-label":"\u043a\u043e\u043b\u0435\u0447\u043a\u043e \u0441 \u0434\u0440\u0430\u0433\u043e\u0446\u0435\u043d\u043d\u044b\u043c \u043a\u0430\u043c\u043d\u0435\u043c"},"\ud83d\udc8d")))}function w(){var e=Object(u.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n"]);return w=function(){return e},e}var S=s.a.div(w());function j(e){var n,t,a=e.salary;return r.a.createElement(S,null,r.a.createElement("h2",null,"\u0412\u0430\u0448\u0430 \u0440\u0435\u0430\u043b\u044c\u043d\u0430\u044f \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f ",a," ",(n=a,t={nom:"\u0440\u0443\u0431\u043b\u044c",gen:"\u0440\u0443\u0431\u043b\u044f",plu:"\u0440\u0443\u0431\u043b\u0435\u0439"},(n=Math.abs(n)).toString().indexOf(".")>-1?t.gen:n%10===1&&n%100!==11?t.nom:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?t.gen:t.plu)))}var O=function(e,n,t){var a=t.length-n,r=new Date;return new Date(r.getFullYear(),r.getMonth()-a).getTime()},C=function(e){return function(n,t){return Math.round(e+e*(t/1e3*Math.random()))}},k=function(e){return new Array(15).fill(0).map(function(e){return function(n,t,a){return{x:O(0,t,a),y:C(e)(n,t)}}}(e))};function D(e){return e>9999}function F(e){return e<1e3}function M(e){var n=function(e){var n=Number(e.salary)||void 0,t=n&&k(n)||void 0,a=t&&t[t.length-1].y||void 0,r=!n;return{apexChartProps:function(e){var n=e.data;return{options:{chart:{id:"chart",toolbar:{show:!1},zoom:{enabled:!1},animations:{enabled:e.isEnabledAnimations}},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}},xaxis:{type:"datetime"},stroke:{curve:"smooth"},fill:{type:"gradient",gradient:{shade:"dark",type:"vertical",gradientToColors:void 0,opacityFrom:1,opacityTo:1,stops:[0,50,100],colorStops:[{offset:0,color:"#FF0",opacity:1},{offset:100,color:"#D0D",opacity:1}]}}},series:[{name:"\u0420\u0435\u0430\u043b\u044c\u043d\u0430\u044f \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430",data:n}],annotations:{xaxis:[{x:"\u0424\u0435\u0432",borderColor:"#775DD0",label:{style:{color:"#fff"},text:"X-axis annotation - 22 Nov"}}]}}}({data:t,isEnabledAnimations:!!n&&D(n)}),resultSalary:a,isUnrealSalary:n&&F(n),isEmptySalary:r}}(e.formState),t=n.isEmptySalary,o=n.isUnrealSalary,l=n.apexChartProps,i=n.resultSalary;return t?r.a.createElement(g,null):o?r.a.createElement(x,null):r.a.createElement(a.Fragment,null,r.a.createElement(j,{salary:i}),r.a.createElement(v.a,Object.assign({},l,{type:"line",height:400})))}var A=t(46);var T=function(){var e=Object(a.useState)({date:"",salary:""}),n=Object(i.a)(e,2),t=n[0],o=n[1];return r.a.createElement(a.Fragment,null,r.a.createElement(A.a,{variant:"h1",align:"center"},"\u0421\u043f\u0440\u0430\u0432\u0435\u0434\u043b\u0438\u0432\u0430\u044f \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430"),r.a.createElement(d,{formState:t,onChange:o}),r.a.createElement(M,{formState:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.636de4bb.chunk.js.map