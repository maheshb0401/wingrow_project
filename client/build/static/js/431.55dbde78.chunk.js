"use strict";(self.webpackChunkwingrow=self.webpackChunkwingrow||[]).push([[431],{431:function(e,o,s){s.r(o),s.d(o,{default:function(){return d}});var n=s(4942),r=s(1413),t=s(9439),a=s(2791),i=s(7689),l=s(5985),c=s(6457),u=s(6151),p=s(184);function d(){var e=(0,i.s0)(),o=(0,a.useState)(""),s=(0,t.Z)(o,2),d=(s[0],s[1]),m=(0,a.useState)({phone:"",password:""}),h=(0,t.Z)(m,2),g=h[0],f=h[1],w=function(e){var o=e.target,s=o.name,t=o.value;f((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,n.Z)({},s,t))}))};return(0,p.jsx)("div",{className:"forgot-main-container",children:(0,p.jsx)("div",{className:"forgot-form-outer",children:(0,p.jsxs)("div",{className:"forgot-form-inner",children:[(0,p.jsx)("img",{className:"form-logo",src:"./logo.png",alt:"form-logo"}),(0,p.jsx)("h3",{children:"Please verify your mobile number"}),(0,p.jsxs)("form",{onSubmit:function(o){o.preventDefault();var s=g.phone,n=g.password;s.match("[0-9]{10}")?n.length<6?d("password must be greater than 6 characters"):c.Z.newpassword(g.phone,g.password).then((function(){l.Am.success("Reset Password successful!",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout((function(){e("/resetpasswordsuccessful"),window.location.reload()}),1e3)}),(function(o){l.Am.warn("User Does not Exists",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),f({phone:"",password:""}),setTimeout((function(){e("/login"),window.location.reload()}),1e3)})):d("Please provide valid phone number")},children:[(0,p.jsx)("input",{type:"phone",name:"phone",placeholder:"Mobile Number",className:"forgot-input",onChange:w}),(0,p.jsx)("input",{type:"password",name:"password",placeholder:"New Password",className:"forgot-input",onChange:w}),(0,p.jsx)(u.Z,{type:"submit",fullWidth:!0,className:"forgot-btn",variant:"contained",color:"success",size:"large",sx:{mt:3,mb:2},children:"Submit"})]})]})})})}}}]);
//# sourceMappingURL=431.55dbde78.chunk.js.map