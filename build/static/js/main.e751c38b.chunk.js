(this.webpackJsonpinstagram=this.webpackJsonpinstagram||[]).push([[0],{45:function(e,t,a){e.exports=a(70)},50:function(e,t,a){},51:function(e,t,a){},66:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),o=a.n(r),s=a(10),l=(a(50),a(51),a(95)),i=a(18),m=a.n(i),u=m.a.initializeApp({apiKey:"AIzaSyCNIQV155ZEdQNqywJNuR7TEa588i9AZsw",authDomain:"instagram-clone-995e0.firebaseapp.com",databaseURL:"https://instagram-clone-995e0.firebaseio.com",projectId:"instagram-clone-995e0",storageBucket:"instagram-clone-995e0.appspot.com",messagingSenderId:"977220452546",appId:"1:977220452546:web:746a2825d725e40e4e3b5b",measurementId:"G-VVGFFPEEVL"}).firestore(),p=m.a.auth(),d=m.a.storage();var g=function(e){var t=e.postId,a=e.user,r=e.username,o=e.imageurl,i=e.caption,p=Object(n.useState)([]),d=Object(s.a)(p,2),g=d[0],f=d[1],E=Object(n.useState)(""),b=Object(s.a)(E,2),h=b[0],v=b[1];return Object(n.useEffect)((function(){var e;return t&&(e=u.collection("posts").doc(t).collection("comments").orderBy("timestamp","desc").onSnapshot((function(e){f(e.docs.map((function(e){return e.data()})))}))),function(){e()}}),[t]),c.a.createElement("div",{className:"post"},c.a.createElement("div",{className:"post__header"},c.a.createElement(l.a,{className:"post__avatar",alt:"Username",src:""}),c.a.createElement("h3",null,r)),c.a.createElement("img",{className:"post__image",src:o,alt:""}),c.a.createElement("h4",{className:"post__text"},c.a.createElement("strong",null,r)," ",i),c.a.createElement("div",{className:"post__comments"},g.map((function(e){return c.a.createElement("p",null,c.a.createElement("strong",null,e.username," "),e.text)}))),a&&c.a.createElement("form",{className:"post__commentBox"},c.a.createElement("input",{className:"post__input",type:"text",placeholder:"Add a comment...",value:h,onChange:function(e){return v(e.target.value)}}),c.a.createElement("button",{className:"post__button",disabled:!h,type:"submit",onClick:function(e){e.preventDefault(),u.collection("posts").doc(t).collection("comments").add({text:h,username:a.displayName,timestamp:m.a.firestore.FieldValue.serverTimestamp()}),v("")}},"Post")))},f=a(93),E=a(92),b=a(94),h=a(91);a(66);var v=function(e){var t=e.username,a=Object(n.useState)(""),r=Object(s.a)(a,2),o=r[0],l=r[1],i=Object(n.useState)(null),p=Object(s.a)(i,2),g=p[0],E=p[1],b=Object(n.useState)(""),h=Object(s.a)(b,2),v=h[0],_=h[1];return c.a.createElement("div",{className:"imageupload"},c.a.createElement("progress",{className:"imageupload__progress",value:v,max:"100"}),c.a.createElement("input",{type:"text",placeholder:"Enter a caption...",onChange:function(e){return l(e.target.value)}}),c.a.createElement("input",{type:"file",onChange:function(e){e.target.files[0]&&E(e.target.files[0])}}),c.a.createElement(f.a,{onClick:function(){d.ref("images/".concat(g.name)).put(g).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);_(t)}),(function(e){console.log(e),alert(e.message)}),(function(){d.ref("images").child(g.name).getDownloadURL().then((function(e){u.collection("posts").add({timestamp:m.a.firestore.FieldValue.serverTimestamp(),caption:o,username:t,imageurl:e}),_(0),l(""),E(null)}))}))}},"Upload "))},_=a(41);function j(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var N=Object(h.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var O=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],o=N(),l=Object(n.useState)(j),i=Object(s.a)(l,1)[0],m=Object(n.useState)(""),d=Object(s.a)(m,2),h=d[0],O=d[1],y=Object(n.useState)(""),S=Object(s.a)(y,2),C=S[0],w=S[1],x=Object(n.useState)(""),k=Object(s.a)(x,2),I=k[0],A=k[1],U=Object(n.useState)(!1),P=Object(s.a)(U,2),B=P[0],V=P[1],D=Object(n.useState)(null),F=Object(s.a)(D,2),L=F[0],T=F[1],R=Object(n.useState)(!1),J=Object(s.a)(R,2),W=J[0],Z=J[1];return Object(n.useEffect)((function(){var e=p.onAuthStateChanged((function(e){T(e||null)}));return function(){e()}}),[L]),Object(n.useEffect)((function(){u.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){r(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))}),[]),c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app__header"},c.a.createElement("img",{className:"app__headerimage",src:"https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""}),L?c.a.createElement(f.a,{onClick:function(){return p.signOut()}},"Logout"):c.a.createElement("div",{className:"app__logincontainer"},c.a.createElement(f.a,{onClick:function(){return Z(!0)}},"Sign In"),c.a.createElement(f.a,{onClick:function(){return V(!0)}},"Sign Up"))),c.a.createElement(E.a,{open:B,onClose:function(){return V(!1)}},c.a.createElement("div",{style:i,className:o.paper},c.a.createElement("form",{className:"app__signup"},c.a.createElement("center",null,c.a.createElement("img",{className:"app__headerimage",src:"https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""})),c.a.createElement(b.a,{type:"text",placeholder:"Username",value:h,onChange:function(e){return O(e.target.value)}}),c.a.createElement(b.a,{type:"email",placeholder:"Email",value:C,onChange:function(e){return w(e.target.value)}}),c.a.createElement(b.a,{type:"password",placeholder:"Password",value:I,onChange:function(e){return A(e.target.value)}}),c.a.createElement(f.a,{onClick:function(e){e.preventDefault(),p.createUserWithEmailAndPassword(C,I).then((function(e){e.user.updateProfile({displayName:h})})).catch((function(e){return alert(e.message)})),V(!1),w(""),A(""),O("")},type:"submit"},"Sign Up")))),c.a.createElement(E.a,{open:W,onClose:function(){return Z(!1)}},c.a.createElement("div",{style:i,className:o.paper},c.a.createElement("form",{className:"app__signup"},c.a.createElement("center",null,c.a.createElement("img",{className:"app__headerimage",src:"https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""})),c.a.createElement(b.a,{type:"text",placeholder:"Email",value:C,onChange:function(e){return w(e.target.value)}}),c.a.createElement(b.a,{type:"text",placeholder:"Password",value:I,onChange:function(e){return A(e.target.value)}}),c.a.createElement(f.a,{onClick:function(e){e.preventDefault(),p.signInWithEmailAndPassword(C,I).catch((function(e){return alert(e.message)})),Z(!1),w(""),A("")},type:"submit"},"Sign In")))),c.a.createElement("div",{className:"app__posts"},c.a.createElement("div",{className:"app__postsleft"},a.map((function(e){var t=e.id,a=e.post;return c.a.createElement(g,{key:t,postId:t,user:L,username:a.username,imageurl:a.imageurl,caption:a.caption})}))),c.a.createElement("div",{className:"app__postsright"},c.a.createElement(_.a,{url:"https://instagr.am/p/Zw9o4/",maxWidth:320,hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){},onSuccess:function(){},onAfterRender:function(){},onFailure:function(){}}))),(null===L||void 0===L?void 0:L.displayName)?c.a.createElement(v,{username:L.displayName}):c.a.createElement("h3",null,"Sorry! You need login to upload"))};o.a.render(c.a.createElement(O,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.e751c38b.chunk.js.map