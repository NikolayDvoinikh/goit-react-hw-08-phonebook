"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[161],{5161:function(e,n,t){t.r(n),t.d(n,{default:function(){return J}});var a=t(4942),r=t(1413),i=t(9439),s=t(9434),d=t(2086),o=t(4141),c=t(2791),l={name:"",number:""},u="ContactForm_btnSubmit__ViR7y",m="ContactForm_loadBtn__acNQ2",h="ContactForm_loading__p9nXE",x=t(8870),f=t(4760),p=t(184),b=function(){var e=(0,c.useState)((0,r.Z)({},l)),n=(0,i.Z)(e,2),t=n[0],b=n[1],v=t.name,Z=t.number,j=(0,s.v9)(o.vH),g=(0,s.v9)(o.AM),C=(0,s.v9)(o.zh),y=(0,s.I0)(),_=function(e){var n=e.target,t=n.name,i=n.value;b((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},t,i))}))};(0,c.useEffect)((function(){!g&&!C&&b((0,r.Z)({},l))}),[g,C]);var k=!v||!Z||g;return(0,p.jsxs)(x.Z,{ml:"auto",mr:"auto",sx:{maxWidth:"300px",border:"2px solid",padding:"40px"},component:"form",onSubmit:function(e){if(e.preventDefault(),j.filter((function(e){return e.name.toLowerCase()===v.toLowerCase()})).length)return alert("".concat(v," is already in contacts"));y((0,d.v6)((0,r.Z)({},t)))},children:[(0,p.jsx)(f.Z,{sx:{width:"100%",padding:"10px 0"},id:"standard-required",label:"Name",variant:"standard",onChange:_,value:v,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,p.jsx)(f.Z,{sx:{width:"100%",padding:"10px 0"},id:"standard-required",label:"Number",variant:"standard",onChange:_,value:Z,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,p.jsx)("button",{className:u,type:"submit",disabled:k,children:g?(0,p.jsxs)("div",{className:m,children:[(0,p.jsx)("div",{className:h}),"Loading..."]}):"Add contact "})]})},v="modal_modal_backdrop__e5IYj",Z="modal_modal_body__Rj2G2",j=t(4164),g=t(3400),C=t(6739),y=document.querySelector("#modal-root"),_=function(e){var n=e.close,t=e.children,a=(0,c.useCallback)((function(e){var t=e.target,a=e.currentTarget,r=e.code;t!==a&&"Escape"!==r||n()}),[n]);return(0,c.useEffect)((function(){return document.addEventListener("keydown",a),function(){document.removeEventListener("keydown",a)}}),[a]),(0,j.createPortal)((0,p.jsx)(x.Z,{className:v,onClick:a,children:(0,p.jsxs)("div",{className:Z,children:[(0,p.jsx)(g.Z,{type:"button",onClick:a,children:(0,p.jsx)(C.Z,{})}),t]})}),y)},k={name:{name:"name",type:"text",required:!0,label:"Contact name",placeholder:"Contact name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"},number:{name:"number",type:"tel",required:!0,label:"Contact number",placeholder:"Contact number",pattern:"+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}},w=t(1424),A=t(5021),N=t(6278),z=t(6259),E=t(6151),F=t(493),S=t(7483),L=function(){var e=(0,c.useState)(!1),n=(0,i.Z)(e,2),t=n[0],l=n[1],u=(0,c.useState)(!1),m=(0,i.Z)(u,2),h=m[0],x=m[1],f=(0,c.useState)(""),b=(0,i.Z)(f,2),v=b[0],Z=b[1],j=(0,s.I0)(),C=(0,s.v9)(o.AM);(0,c.useEffect)((function(){j((0,d.CL)())}),[j]);var y=(0,s.v9)(o.TV),L=(0,c.useState)({name:"",number:""}),q=(0,i.Z)(L,2),P=q[0],M=q[1],W=function(){l((function(e){return!e}))},B=(0,c.useCallback)((function(e){var n=e.target,t=n.name,i=n.value;M((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},t,i))}))}),[M]),I=function(){return x((function(e){return!e}))},T=y.map((function(e){var n,t,a=e.id,r=e.name,i=e.number;return(0,p.jsx)(A.ZP,{sx:{margin:"0",padding:"0",borderBottom:"1px solid"},children:(0,p.jsxs)(N.Z,{sx:{margin:"0",cursor:"default"},children:[(0,p.jsxs)(z.Z,{children:[r,": ",i]}),(0,p.jsxs)("div",{children:[(0,p.jsx)(g.Z,{sx:{marginRight:"5px"},id:a,disabled:C,type:"button",onClick:function(){return function(e){Z(e),I()}(a)},children:(0,p.jsx)(S.Z,{color:(n="inherit",t="secondary",C?n:t)})}),(0,p.jsx)(E.Z,{variant:"outlined",id:a,disabled:C,type:"button",onClick:function(){return function(e,n,t){Z(e),M({name:n,number:t}),W()}(a,r,i)},children:"Edit"})]})]})},a)}));return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(F.Z,{sx:{width:"100%",maxWidth:360,margin:"0 auto"},children:[T,h&&(0,p.jsx)(_,{close:I,children:(0,p.jsx)(E.Z,{type:"button",onClick:function(){j((0,d.in)(v)),I(),Z("")},children:"DELETE"})}),t&&(0,p.jsx)(_,{close:W,children:(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=y.every((function(e){var n=e.name,t=e.id;return n!==P.name||t!==v})),t=y.every((function(e){var n=e.number,t=e.id;return n!==P.number||t!==v}));if(!n)return alert("Name is already exist!!!");if(!t)return alert("Number is already exist!!!");var a={name:P.name,number:P.number};j((0,d.KJ)({id:v,data:a})),W(),Z("")},children:[(0,p.jsx)(w.Z,(0,r.Z)((0,r.Z)({},k.name),{},{onChange:B,value:P.name})),(0,p.jsx)(w.Z,(0,r.Z)((0,r.Z)({},k.number),{},{onChange:B,value:P.number})),(0,p.jsx)("button",{type:"submit",children:"Update"})]})})]})})},q=L;L.defaultProps={filteredList:[]};var P={},M=t(5653),W=function(e){return e.filter},B=t(9276),I=function(){var e=(0,s.I0)(),n=(0,s.v9)(W);return(0,p.jsx)(B.Z,{sx:{maxWidth:"320px",width:"100%",margin:"0 auto"},children:(0,p.jsx)("label",{htmlFor:"filter",children:(0,p.jsx)(w.Z,{placeholder:"Find contacts by name",label:"Find contacts by name",value:n,className:P.filter,type:"text",name:"filter",onChange:function(n){var t=n.target;return e((0,M.T)(t.value))}})})})},T=t(1614),D=t(890),J=function(){return(0,p.jsxs)(T.Z,{children:[(0,p.jsx)(D.Z,{variant:"h1",align:"center",sx:{fontWeight:700,padding:3,fontSize:"32px"},children:"Phonebook"}),(0,p.jsx)(b,{}),(0,p.jsx)(D.Z,{variant:"h2",align:"center",sx:{fontWeight:500,padding:2,fontSize:"28px"},children:"Contacts"}),(0,p.jsx)(I,{}),(0,p.jsx)(q,{})]})}},1424:function(e,n,t){var a=t(1413),r=t(5987),i=t(5984),s=t(2791),d=t(4760),o=t(184),c=["label","handleChange"];n.Z=function(e){var n=e.label,t=e.handleChange,l=(0,r.Z)(e,c),u=(0,s.useMemo)((function(){return(0,i.x0)()}),[]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("label",{htmlFor:u,children:(0,o.jsx)(d.Z,(0,a.Z)({sx:{width:"100%",padding:"10px 0"},label:n,variant:"standard",id:u,onChange:t},l))})})}}}]);
//# sourceMappingURL=161.417cee93.chunk.js.map