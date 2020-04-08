(function(t){function e(e){for(var n,i,a=e[0],l=e[1],c=e[2],s=0,p=[];s<a.length;s++)i=a[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return d.push.apply(d,c||[]),o()}function o(){for(var t,e=0;e<d.length;e++){for(var o=d[e],n=!0,a=1;a<o.length;a++){var l=o[a];0!==r[l]&&(n=!1)}n&&(d.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},d=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;d.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"187c":function(t,e,o){"use strict";var n=o("8371"),r=o.n(n);r.a},"41fd":function(t,e,o){"use strict";var n=o("5b96"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("AddTodo",{on:{"add-todo":t.addTodo}}),o("Todos",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo}})],1)},d=[],i=(o("99af"),o("4de4"),o("2909")),a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("h1",[t._v("Todo List")])])}],c={name:"Header"},u=c,s=(o("41fd"),o("2877")),p=Object(s["a"])(u,a,l,!1,null,"0762f44c",null),f=p.exports,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todos,(function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)})),0)},v=[],h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"is-complete":t.todo.completed}},[o("p",[o("input",{attrs:{type:"checkbox"},on:{change:t.markComplete}}),t._v(" "+t._s(t.todo.title)+" "),o("button",{staticClass:"del",on:{click:function(e){return t.$emit("del-todo",t.todo.id)}}},[t._v("x")])])])},b=[],_={name:"TodoItem",props:["todo"],methods:{markComplete:function(){this.todo.completed=!this.todo.completed}}},y=_,T=(o("187c"),Object(s["a"])(y,h,b,!1,null,"f153a6c8",null)),O=T.exports,g={name:"Todos",components:{TodoItem:O},props:["todos"]},j=g,x=Object(s["a"])(j,m,v,!1,null,"0a767244",null),w=x.exports,$=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:t.addTodo}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add Todo..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])},k=[],P=o("e144"),C={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(t){t.preventDefault();var e={id:P["default"].v4(),title:this.title,completed:!1};this.$emit("add-todo",e),this.title=""}}},E=C,S=Object(s["a"])(E,$,k,!1,null,"10e3dfcc",null),A=S.exports,M={name:"App",components:{Header:f,Todos:w,AddTodo:A},data:function(){return{todos:[{id:1,title:"todo One",completed:!1},{id:2,title:"todo two",completed:!0},{id:3,title:"todo Three",completed:!1}]}},methods:{deleteTodo:function(t){this.todes=this.todos.filter((function(e){return e.id!==t}))},addTodo:function(t){this.todos=[].concat(Object(i["a"])(this.todos),[t])}}},H=M,I=Object(s["a"])(H,r,d,!1,null,null,null),J=I.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(J)}}).$mount("#app")},"5b96":function(t,e,o){},8371:function(t,e,o){}});
//# sourceMappingURL=app.54c4c365.js.map