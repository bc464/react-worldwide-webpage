import{r,e as u,d as p,j as s,B as f}from"./index-f71a81d5.js";import{P as x}from"./PageNav-0ef34619.js";import"./Logo-3e988c7e.js";const h="_login_1mydq_1",g="_form_1mydq_8",j="_row_1mydq_22",a={login:h,form:g,row:j};function _(){const[t,l]=r.useState("jack@example.com"),[o,m]=r.useState("qwerty"),{login:c,isAuthenticated:i}=u(),n=p();function d(e){e.preventDefault(),t&&o&&c(t,o)}return r.useEffect(function(){i&&n("/app",{replace:!0})},[i,n]),s.jsxs("main",{className:a.login,children:[s.jsx(x,{}),s.jsxs("form",{className:a.form,onSubmit:d,children:[s.jsxs("div",{className:a.row,children:[s.jsx("label",{htmlFor:"email",children:"Email address"}),s.jsx("input",{type:"email",id:"email",onChange:e=>l(e.target.value),value:t})]}),s.jsxs("div",{className:a.row,children:[s.jsx("label",{htmlFor:"password",children:"Password"}),s.jsx("input",{type:"password",id:"password",onChange:e=>m(e.target.value),value:o})]}),s.jsx("div",{children:s.jsx(f,{type:"primary",children:"Login"})})]})]})}export{_ as default};
