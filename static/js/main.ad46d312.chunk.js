(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),o=(a(19),a(9)),u=a(5),i=a(3),m=a(4),d=a(1),s=function(e){var t=e.color,a=e.text,n=e.onClick;return r.a.createElement("button",{onClick:n,style:{backgroundColor:t},className:"btn"},a)};s.defaultProps={color:"steelblue",text:"Add"};var f=s,E=function(e){var t=e.title,a=e.form,n=e.showForm,l=Object(d.e)();return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,t),"/"===l.pathname&&r.a.createElement(f,{text:a?"Close":"Add",color:a?"red":"green",onClick:function(){return n(!a)}}))};E.defaultProps={title:"Task Tracker"};var b=E,p=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \xa9 2022"),r.a.createElement(m.b,{to:"/about"},"About"))},g=a(8),k=function(e){var t=e.task,a=e.deleteTask,n=e.triggerFlag;return r.a.createElement("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return n(t.id)}},r.a.createElement("h3",null,t.text," ",r.a.createElement(g.a,{onClick:function(){return a(t.id)},style:{color:"red",cursor:"pointer"}})),r.a.createElement("p",null,t.day))},h=function(e){var t=e.tasks,a=e.deleteTask,n=e.triggerFlag;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(k,{key:e.id,task:e,deleteTask:a,triggerFlag:n})}))},v=function(e){var t=e.onAdd,a=Object(n.useState)(""),l=Object(i.a)(a,2),c=l[0],o=l[1],u=Object(n.useState)(""),m=Object(i.a)(u,2),d=m[0],s=m[1],f=Object(n.useState)(!1),E=Object(i.a)(f,2),b=E[0],p=E[1];return r.a.createElement("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),c?d?(t({text:c,day:d,reminder:b}),o(""),s(""),p(!1)):alert("Please enter a day!"):alert("Please enter a task!")}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",null,"Task"),r.a.createElement("input",{type:"text",placeholder:"Add Task",value:c,onChange:function(e){return o(e.target.value)}})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",null,"Day & Time"),r.a.createElement("input",{type:"text",placeholder:"Add Day & Time",value:d,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"form-control form-control-check"},r.a.createElement("label",null,"Reminder"),r.a.createElement("input",{type:"checkbox",value:b,checked:b,onChange:function(e){return p(e.currentTarget.checked)}})),r.a.createElement("input",{type:"submit",value:"Save Task",className:"btn btn-block"}))},y=function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Version 1.0.0"),r.a.createElement(m.b,{to:"/"},"Go Back"))};var j=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([{id:1,text:"Doctor's Appointment",day:"Feb 5th at 2:30pm",reminder:!0},{id:2,text:"Meeting at School",day:"Feb 2nd at 12:30pm",reminder:!1},{id:3,text:"Food Shopping",day:"Mar 3rd at 4:30 pm",reminder:!0}]),s=Object(i.a)(c,2),f=s[0],E=s[1];return r.a.createElement(m.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(b,{form:a,showForm:l}),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",element:r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(v,{onAdd:function(e){var t=function(){for(var e=1,t=0;t<f.length;t++)f[t].id===e&&(e+=1,t=0);return console.log(e),e}(),n=Object(u.a)({},e,{id:t});E([].concat(Object(o.a)(f),[n])),l(!a)}}),f.length>0?r.a.createElement(h,{tasks:f,deleteTask:function(e){E(f.filter(function(t){return t.id!==e}))},triggerFlag:function(e){E(f.map(function(t){return t.id===e?Object(u.a)({},t,{reminder:!t.reminder}):t}))}}):r.a.createElement("h3",null,"No task found"))}),r.a.createElement(d.a,{path:"/about",element:r.a.createElement(y,null)})),r.a.createElement(p,null)))},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null))),C()}},[[10,1,2]]]);
//# sourceMappingURL=main.ad46d312.chunk.js.map