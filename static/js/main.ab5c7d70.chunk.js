(this["webpackJsonpredux-api-front"]=this["webpackJsonpredux-api-front"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r,c,a,i=n(0),s=n.n(i),o=n(20),u=n.n(o),l=(n(36),n(5)),p=(n(37),n(17)),d=n(4),f=n(6),b=n(3),h=n.n(b),j=n(8),m=n(14),v=n(31),x=n(19),O=n(18),g={name:"",price:"",content:"",editedId:null,filterString:"",list:[],filteredList:[],error:null,loading:!1},y=Object(O.b)({name:"myState",initialState:g,reducers:{fetchServicesRequest:function(e){e.loading=!0,e.error=null},fetchServiceSuccess:function(e,t){console.log(t.payload);var n=t.payload,r=n.name,c=n.price,a=n.content;return Object(x.a)(Object(x.a)({},e),{},{name:r,price:c,content:a,loading:!1,error:null})},fetchServicesSuccess:function(e,t){var n=t.payload;return Object(x.a)(Object(x.a)({},e),{},{list:n,filteredList:n,loading:!1,error:null})},fetchServicesError:function(e,t){e.error=t.payload,e.loading=!1},setList:function(e,t){0===e.list.length&&(e.list=t.payload)},addItem:function(e,t){var n=t.payload,r=n.name,c=n.price;e.list.push({id:Object(O.c)(),name:r,price:c})},editItem:function(e,t){var n=t.payload,r=n.name,c=n.value;e.name=r,e.price=c},removeItem:function(e,t){var n=t.payload.id;e.list=e.list.filter((function(e){return e.id!==n}))},changeInputField:function(e,t){var n=t.payload,r=n.name,c=n.value;e[r]=c},changeEditedId:function(e,t){e.editedId=t.payload},saveEditedItem:function(e,t){var n=t.payload,r=n.name,c=n.price;e.list=e.list.map((function(t){return t.id===e.editedId&&(t.name=r,t.price=c),t}))},applyFilter:function(e,t){e.filterString=t.payload.toLowerCase()},changeFilteredList:function(e){e.filteredList=Object(v.a)(e.list.filter((function(t){return t.name.toLowerCase().includes(e.filterString)})))}}}),k=y.reducer,w=y.actions,I=(w.addItem,w.editItem,w.removeItem,w.changeInputField),S=w.changeEditedId,_=(w.saveEditedItem,w.applyFilter,w.changeFilteredList),C=(w.setList,w.fetchServicesRequest),E=w.fetchServiceSuccess,L=w.fetchServicesSuccess,F=w.fetchServicesError,N=n(26),T=n(27),B=function(){function e(){Object(N.a)(this,e),this.url="http://localhost:7070/api"}return Object(T.a)(e,[{key:"fetchItems",value:function(){var e=Object(j.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(this.url,"/services"));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"deleteItem",value:function(){var e=Object(j.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(this.url,"/services/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 3:return e.next=5,fetch("".concat(this.url,"/services"));case 5:return e.abrupt("return",e.sent);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getItem",value:function(){var e=Object(j.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(this.url,"/services/").concat(t));case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"saveItem",value:function(){var e=Object(j.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(this.url,"/services"),{method:"POST",body:JSON.stringify(t)});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),P=n(1),D=Object(f.b)(r||(r=Object(l.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),J=f.a.div(c||(c=Object(l.a)(["\n  animation: "," 1s linear infinite;\n  transform: translateZ(0);\n  \n  margin: 0 auto;\n  border-top: 2px solid grey;\n  border-right: 2px solid grey;\n  border-bottom: 2px solid grey;\n  border-left: 4px solid black;\n  background: transparent;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n"])),D);function q(){return Object(P.jsx)(J,{})}var R,z=f.a.div(a||(a=Object(l.a)(["\n    height: 100px; \n    padding: 15px;\n    margin: 0 auto;\n    text-align: center;\n    background-color: red;\n    color: white;\n"]))),M=function(){return Object(P.jsxs)(z,{children:["\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430! ",Object(P.jsx)("br",{}),"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0438 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"]})},Z=new B,A=f.a.ul(R||(R=Object(l.a)(["\n  margin-top: 25px;\n  padding: 15px;\n  border: 1px solid black;\n  border-radius: 5px;\n\n  & .item:nth-of-type(n + 2) {\n    margin-top: 15px;\n  }\n\n  & .item {\n    button {\n      margin-left: 15px;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n"]))),G=function(){var e=Object(j.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(C()),e.prev=1,e.next=4,Z.fetchItems();case 4:if((n=e.sent).ok){e.next=7;break}throw new M(n.statusText);case 7:return e.next=9,n.json();case 9:r=e.sent,t(L(r)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),t(F(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(j.a)(h.a.mark((function e(t,n){var r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(C()),e.prev=1,e.next=4,Z.deleteItem(n);case 4:if((r=e.sent).ok){e.next=8;break}throw new M(r.statusText);case 8:return e.next=10,r.json();case 10:c=e.sent,t(L(c)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),t(F(e.t0.message));case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,n){return e.apply(this,arguments)}}();function K(){var e=Object(m.c)((function(e){return e.myState})),t=Object(m.b)(),n=Object(d.h)();Object(i.useEffect)((function(){G(t)}),[t]);var r=function(){var e=Object(j.a)(h.a.mark((function e(n,r,c){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(S(+c));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),c=function(){var e=Object(j.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t,n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsx)(A,{children:e.error&&Object(P.jsx)(M,{})||(e.loading?Object(P.jsx)(q,{}):e.list.map((function(e){return Object(P.jsxs)("li",{className:"item",children:[e.name," ",e.price," ",Object(P.jsx)("span",{children:"\u20bd"}),Object(P.jsx)(p.b,{to:"".concat(n.url,"/").concat(e.id),children:Object(P.jsx)("button",{onClick:function(){return r(e.name,e.price,e.id)},children:"\u270e"})}),Object(P.jsx)("button",{onClick:function(){return c(e.id)},children:"\u2715"})]},e.id)})))})}var Q,U,V,W,X,Y,$=function(){return Object(P.jsx)(K,{})},ee=new B,te=f.a.form(Q||(Q=Object(l.a)(["\n  input {\n    display: block;\n    padding: 2px;\n    margin-top: 15px;\n    width: 200px;\n  }\n  \n  .form__buttons {\n    margin-top: 15px;\n    \n    & button:nth-of-type(n + 2) {\n      margin-left: 15px;\n    }\n  }\n"]))),ne=f.a.input(U||(U=Object(l.a)([""]))),re=f.a.input(V||(V=Object(l.a)([""]))),ce=f.a.input(W||(W=Object(l.a)([""]))),ae=f.a.button(X||(X=Object(l.a)(["\n  padding: 5px;\n  background-color: red;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 20px;\n"]))),ie=function(){var e=Object(j.a)(h.a.mark((function e(t,n){var r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(C()),e.prev=1,e.next=4,ee.getItem(n);case 4:if((r=e.sent).ok){e.next=7;break}throw new M(r.statusText);case 7:return e.next=9,r.json();case 9:return c=e.sent,e.next=12,t(E(c));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),t(F(e.t0.message));case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,n){return e.apply(this,arguments)}}(),se=function(){var e=Object(j.a)(h.a.mark((function e(t,n){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(C()),e.prev=1,e.next=4,ee.saveItem(n);case 4:if((r=e.sent).ok){e.next=7;break}throw new M(r.statusText);case 7:t(C()),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t(F(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}();function oe(){var e=Object(m.c)((function(e){return e.myState})),t=Object(m.b)(),n=Object(d.g)();Object(i.useEffect)((function(){ie(t,e.editedId)}),[t,e.editedId]);var r=function(){t(I({name:"name",value:""})),t(I({name:"price",value:""})),t(I({name:"content",value:""}))},c=function(e){var n=e.target,r=n.name,c=n.value;t(I({name:r,value:c}))};return Object(P.jsx)(i.Fragment,{children:e.error&&Object(P.jsx)(M,{})||(e.loading?Object(P.jsx)(q,{}):Object(P.jsxs)(te,{className:"form",onSubmit:function(c){c.preventDefault();var a=e.editedId,i=e.name,s=e.price,o=e.content;se(t,{id:a,name:i,price:s,content:o}),n.goBack(),t(_()),r()},children:[Object(P.jsx)("div",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(P.jsx)(ne,{className:"form__name",name:"name",onChange:c,value:e.name}),Object(P.jsx)("div",{children:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"}),Object(P.jsx)(re,{className:"form__price",name:"price",onChange:c,value:e.price}),Object(P.jsx)("div",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(P.jsx)(ce,{className:"form__description",name:"content",onChange:c,value:e.content}),Object(P.jsxs)("div",{className:"form__buttons",children:[Object(P.jsx)(ae,{className:"form__cancel",onClick:function(){n.goBack(),t(S(null)),r()},type:"button",children:"Cancel"}),Object(P.jsx)(ae,{className:"form__button",type:"submit",children:"Save"})]})]}))})}var ue=f.a.div(Y||(Y=Object(l.a)(["\n  width: 50%;\n  margin: 100px auto 0 auto;\n"])));var le=function(){return Object(P.jsx)(p.a,{children:Object(P.jsxs)(ue,{className:"app",children:[Object(P.jsx)(d.a,{to:"/services"}),Object(P.jsxs)(d.d,{children:[Object(P.jsx)(d.b,{path:"/services/:id",children:Object(P.jsx)(oe,{})}),Object(P.jsx)(d.b,{path:"/services",children:Object(P.jsx)($,{})})]})]})})},pe=(n(46),function(e){e&&e instanceof Function&&Promise.resolve().then(n.bind(null,46)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))}),de=n(12),fe=Object(de.b)({myState:k}),be=Object(O.a)({reducer:fe,devTools:!0});u.a.render(Object(P.jsx)(m.a,{store:be,children:Object(P.jsx)(s.a.StrictMode,{children:Object(P.jsx)(le,{})})}),document.getElementById("root")),pe()}},[[47,1,2]]]);
//# sourceMappingURL=main.ab5c7d70.chunk.js.map