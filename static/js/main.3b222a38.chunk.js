(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(7),r=a.n(c),i=(a(14),a(5)),l=a(8),o=a(1),m=a(2),u=a(4),v=a(3),d=function(e){Object(u.a)(a,e);var t=Object(v.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.task,a=e.changeStatus,n=e.onRemove,c=e.isActive;return s.a.createElement("div",{className:"sticker"},s.a.createElement("div",{className:"sticker-content"},s.a.createElement("button",{type:"button",className:"buttons",onClick:a(t.id)},c?s.a.createElement("i",{className:"fas fa-check icons"}):s.a.createElement("i",{className:"fas fa-undo icons"})),s.a.createElement("div",{className:"taskText"},c?t.text:s.a.createElement("s",null,t.text)),s.a.createElement("button",{type:"button",className:"buttons",onClick:n(t.id)},s.a.createElement("i",{className:"fas fa-times icons"}))))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(v.a)(a);function a(e){var n;Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target.value;n.setState({currentTask:t})},n.addTask=function(e){e.preventDefault();var t=n.state,a=t.tasks,s=t.currentTask;if(0!==s.length){var c=[{id:Math.random().toString(36).substr(2,9),text:s,isActive:!0}].concat(Object(l.a)(a));n.setState({tasks:c,currentTask:""}),localStorage.setItem("tasks",JSON.stringify(c))}},n.handleRemove=function(e){return function(t){t.preventDefault();var a=n.state.tasks.filter((function(t){return t.id!==e}));n.setState({tasks:a}),localStorage.setItem("tasks",JSON.stringify(a))}},n.handleStatus=function(e){return function(t){t.preventDefault();var a=n.state.tasks.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{isActive:!t.isActive}):t}));n.setState({tasks:a}),localStorage.setItem("tasks",JSON.stringify(a))}};var s=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];return n.state={tasks:s,currentTask:""},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.tasks,n=t.currentTask,c=a.filter((function(e){return e.isActive})).map((function(t){return s.a.createElement(d,{key:t.id,task:t,changeStatus:e.handleStatus,onRemove:e.handleRemove,isActive:t.isActive})})),r=a.filter((function(e){return!e.isActive})).map((function(t){return s.a.createElement(d,{key:t.id,task:t,changeStatus:e.handleStatus,onRemove:e.handleRemove,isActive:t.isActive})}));return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"inputSticker"},s.a.createElement("div",{className:"sticker"},s.a.createElement("div",{className:"sticker-content"},s.a.createElement("form",{className:"form",onSubmit:this.addTask},s.a.createElement("input",{type:"text",maxLength:"30",value:n,required:!0,className:"input",placeholder:"I am going...",onChange:this.handleChange}),s.a.createElement("button",{type:"submit",className:"buttons"},s.a.createElement("i",{className:"fas fa-pencil-alt icons"})))))),s.a.createElement("div",{className:"tasksContainer"},s.a.createElement("div",{className:"tasksBlock"},s.a.createElement("div",{className:"text"},"Active tasks: ",c.length),c),s.a.createElement("div",{className:"tasksBlock"},s.a.createElement("div",{className:"text"},"Done: ",r.length),s.a.createElement("div",{className:"finished"},r)))))}}]),a}(n.Component);r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(k,null)),document.getElementById("tasksContent"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.3b222a38.chunk.js.map