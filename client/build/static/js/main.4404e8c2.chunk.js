(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{107:function(e,t,a){},115:function(e,t,a){},537:function(e,t,a){},538:function(e,t,a){},539:function(e,t,a){},540:function(e,t,a){},541:function(e,t){},542:function(e,t,a){},544:function(e,t,a){},545:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),s=a.n(c),o=a(6),l=a.n(o),u=a(9),i=a(7),d=a(55),m=a(56),p=function(e,t,a){m.a.event({category:e,action:t,label:a})},f=a(73),v=a(550),b=a(78),E=a(556),h=a(555),g=a(39),O={login:function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.post("/api/user/login",{email:t,password:a,role:"user"});case 3:return n=e.sent,e.abrupt("return",n);case 7:if(e.prev=7,e.t0=e.catch(0),401!==e.t0.response.status){e.next=13;break}return e.abrupt("return",e.t0.response);case 13:console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),register:function(){var e=Object(u.a)(l.a.mark((function e(t,a,n,r){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.post("/api/user/register",{name:t,email:a,password:n,password2:r,role:"user"});case 3:return c=e.sent,e.abrupt("return",c);case 7:if(e.prev=7,e.t0=e.catch(0),400!==e.t0.response.status){e.next=11;break}return e.abrupt("return",e.t0.response);case 11:console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a,n,r){return e.apply(this,arguments)}}(),logout:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.get("/api/user/logout");case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),isAuthenticated:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.get("/api/user/authenticated");case 3:if(401===(t=e.sent).status){e.next=8;break}return e.abrupt("return",t.data);case 8:return e.abrupt("return",{isAuthenticated:!1,user:{name:"",email:"",role:""}});case 9:e.next=18;break;case 11:if(e.prev=11,e.t0=e.catch(0),401!==e.t0.response.status){e.next=17;break}return e.abrupt("return",{isAuthenticated:!1,user:{name:"",email:"",role:""}});case 17:console.log(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},j=Object(n.createContext)(),w=function(e){var t=e.children,a=Object(n.useState)(null),c=Object(i.a)(a,2),s=c[0],o=c[1],d=Object(n.useState)(!1),m=Object(i.a)(d,2),p=m[0],f=m[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.isAuthenticated();case 3:t=e.sent,o(t.user),f(t.isAuthenticated),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(j.Provider,{value:{user:s,setUser:o,isAuthenticated:p,setIsAuthenticated:f}},t)},S=Object(n.createContext)(),x=function(e){var t=e.children,a=Object(n.useState)("50"),c=Object(i.a)(a,2),s=c[0],o=c[1],l=Object(n.useState)(16),u=Object(i.a)(l,2),d=u[0],m=u[1],p=Object(n.useState)(""),f=Object(i.a)(p,2),v=f[0],b=f[1],E=Object(n.useState)(""),h=Object(i.a)(E,2),g=h[0],O=h[1],j=Object(n.useState)(""),w=Object(i.a)(j,2),x=w[0],y=w[1],C=Object(n.useState)(""),I=Object(i.a)(C,2),k=I[0],N=I[1],z=Object(n.useState)(!1),L=Object(i.a)(z,2),R=L[0],P=L[1],A=Object(n.useState)(!1),M=Object(i.a)(A,2),B=M[0],G=M[1],_=Object(n.useState)(!1),K=Object(i.a)(_,2),H=K[0],J=K[1],D=Object(n.useState)(!1),T=Object(i.a)(D,2),U=T[0],V=T[1],F=Object(n.useState)(!1),Q=Object(i.a)(F,2),W=Q[0],q=Q[1],Y=Object(n.useState)(!1),$=Object(i.a)(Y,2),X=$[0],Z=$[1],ee=Object(n.useState)(!1),te=Object(i.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(window.width),ce=Object(i.a)(re,2),se=ce[0],oe=ce[1];return r.a.createElement(S.Provider,{value:{languageId:s,fontSize:d,code:v,input:g,output:x,result:k,shareId:R,isError:B,isRunning:H,isSaving:U,shareModalShow:W,loginModalShow:X,saveModalShow:ae,width:se,setLanguageId:o,setFontSize:m,setCode:b,setInput:O,setOutput:y,setResult:N,setShareId:P,setIsError:G,setIsRunning:J,setIsSaving:V,setShareModalShow:q,setLoginModalShow:Z,setSaveModalShow:ne,setWidth:oe}},t)},y=(a(107),a(72)),C=a.n(y),I=a(39),k=function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.post("/api/ide/share",{language_id:t,source_code:a});case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.get("/api/ide/share/".concat(t));case 3:return a=e.sent,e.abrupt("return",a);case 7:if(e.prev=7,e.t0=e.catch(0),404!==e.t0.response.status){e.next=11;break}return e.abrupt("return",e.t0.response);case 11:console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();var z=function(){var e=Object(n.useContext)(j),t=e.isAuthenticated,a=e.setIsAuthenticated,c=Object(n.useContext)(S),s=c.languageId,o=c.code,i=c.fontSize,d=c.setLanguageId,m=c.setFontSize,g=c.setShareId,w=c.setShareModalShow,x=c.setLoginModalShow;Object(n.useEffect)((function(){a(t)}),[t,a]);var y=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=10;break}return e.next=3,k(s,o);case 3:t=e.sent,console.log(t),g(t.data.data._id),w(!0),p("Share","Code Shared Button","IDE_PAGE"),e.next=11;break;case 10:alert("Editor is empty!");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=r.a.createElement(f.a,{className:"login",onClick:function(){x(!0),p("Login","Login Button","IDE_PAGE")}},r.a.createElement("i",{className:"fas fa-sign-in-alt"}),"\xa0Login"),N=r.a.createElement(v.a,{className:"fontSizeBtn",title:"My Account"},r.a.createElement(b.a.Item,null,"My Files"),r.a.createElement(b.a.Item,{onClick:function(){O.logout(),a(!1)}},"Logout"));return r.a.createElement(E.a,{variant:"dark",expand:"lg",className:"Navbar"},r.a.createElement(E.a.Brand,{href:"#home",className:"NavbarBrand"},r.a.createElement("img",{src:C.a,alt:"logo",className:"Logo"}),"\xa0 ",r.a.createElement("h1",{className:"BrandName"},"Pravin IDE")),r.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(h.a,{className:"ml-auto"},r.a.createElement(v.a,{className:"languageBtn",title:{50:"C (GCC 9.2.0)",54:"C++ (GCC 9.2.0)",71:"Python (3.8.1)",62:"Java (OpenJDK 13.0.1)",63:"JavaScript (Node.js 12.14.0)",68:"PHP (7.4.1)",82:"SQL (SQLite 3.27.2)"}[s],onSelect:function(e){d(e)}},r.a.createElement(b.a.Item,{className:"50"===s?"selected":"",eventKey:"50"},"C (GCC 9.2.0)"),r.a.createElement(b.a.Item,{className:"54"===s?"selected":"",eventKey:"54"},"C++ (GCC 9.2.0)"),r.a.createElement(b.a.Item,{className:"71"===s?"selected":"",eventKey:"71"},"Python (3.8.1)"),r.a.createElement(b.a.Item,{className:"62"===s?"selected":"",eventKey:"62"},"Java (OpenJDK 13.0.1)"),r.a.createElement(b.a.Item,{className:"63"===s?"selected":"",eventKey:"63"},"JavaScript (Node.js 12.14.0)"),r.a.createElement(b.a.Item,{className:"68"===s?"selected":"",eventKey:"68"},"PHP (7.4.1)"),r.a.createElement(b.a.Item,{className:"82"===s?"selected":"",eventKey:"82"},"SQL (SQLite 3.27.2)")),r.a.createElement(v.a,{className:"fontSizeBtn",title:{14:"14px",16:"16px",18:"18px",20:"20px"}[i],onSelect:function(e){m(Number(e))}},r.a.createElement(b.a.Item,{className:14===i?"selected":"",eventKey:"14"},"14px"),r.a.createElement(b.a.Item,{className:16===i?"selected":"",eventKey:"16"},"16px"),r.a.createElement(b.a.Item,{className:18===i?"selected":"",eventKey:"18"},"18px"),r.a.createElement(b.a.Item,{className:20===i?"selected":"",eventKey:"20"},"20px")),r.a.createElement(f.a,{className:"share",onClick:y},r.a.createElement("i",{className:"fas fa-share-alt"}),"\xa0Share"),t?N:I)))},L=a(75),R=a.n(L),P=a(551),A=a(39),M=function(){var e=Object(u.a)(l.a.mark((function e(t,a,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.post("/api/ide",{language_id:t,source_code:a,stdin:n});case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a,n){return e.apply(this,arguments)}}(),B=a(39),G=function(){var e=Object(u.a)(l.a.mark((function e(t,a,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("SAVEEEEEEEE"),e.prev=1,e.next=4,B.post("/api/user/save",{title:t,language_id:a,source_code:n});case 4:return r=e.sent,console.log("Saved: ",r.data),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,a,n){return e.apply(this,arguments)}}();a(115),a(116),a(117),a(118),a(119),a(120),a(121),a(122);var _=function(e){return!e||void 0===e||""===e||0===e.length},K=function(e){var t=Object(n.useRef)(null),a=Object(n.useContext)(S),c=a.languageId,s=a.fontSize,o=a.code,i=a.setCode,d=a.input,m=a.setIsError,v=a.isRunning,b=a.isSaving,E=a.setOutput,h=a.setIsRunning,g=a.setIsSaving;Object(n.useEffect)((function(){t.current.editor.resize()}),[e.resizeEditor]);var O=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,M(c,o,d);case 4:t=e.sent,a=t.data.data.stdout||t.data.data.stderr||t.data.data.error||t.data.data.compile_output||t.data.data.message||"",E(a),3===t.data.data.status.id?m(!1):m(!0),h(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,G("TEST",c,o);case 4:t=e.sent,console.log("SAVE result: ",t),g(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"IdeEditor IdeComponent"},r.a.createElement("div",{className:"editor-header"},r.a.createElement("p",{className:"editor-title"},"Your\xa0Code"),r.a.createElement("ul",{className:"editor-nav"},r.a.createElement("li",null,r.a.createElement(f.a,{variant:"primary",size:"sm",onClick:function(){console.log("SAVE1"),j(),p("Save","Save Button","IDE_PAGE")},disabled:_(o)||b},b?r.a.createElement(P.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):r.a.createElement("i",{className:"fas fa-save"},"\xa0\xa0Save"))),r.a.createElement("li",null,r.a.createElement(f.a,{variant:"success",size:"sm",onClick:function(){O(),p("Run","Run Button","IDE_PAGE")},disabled:_(o)||v},v?r.a.createElement(P.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):r.a.createElement("i",{className:"fas fa-play"},"\xa0\xa0Run"))))),r.a.createElement(R.a,{ref:t,onChange:function(){i(t.current.editor.getValue())},mode:{50:"c_cpp",54:"c_cpp",62:"java",63:"javascript",71:"python",68:"php",82:"mysql"}[c],theme:"monokai",editorProps:{$blockScrolling:!0},showPrintMargin:!1,showGutter:!0,focus:!0,fontSize:s,highlightActiveLine:!1,placeholder:"Write your code Here",width:"100%",value:o,setOptions:{tabSize:4}}))};a(537);function H(){var e=Object(n.useContext)(S).setInput;return r.a.createElement("div",{className:"IdeComponent IdeInput"},r.a.createElement("p",null,"Input"),r.a.createElement("textarea",{type:"text",onChange:function(t){e(t.target.value)}}))}a(538);function J(){var e=Object(n.useContext)(S),t=e.output,a=e.isError,c=e.isRunning;return r.a.createElement("div",{className:"IdeComponent IdeOutput"},r.a.createElement("p",null,"Output"),r.a.createElement("textarea",{readOnly:!0,name:"output",style:{color:a?"#ff0033":"#ffffff"},disabled:c,value:c?"":t}),c?r.a.createElement(P.a,{style:{color:"white",position:"absolute",top:"50%",left:"47%"},className:"spinner",as:"span",animation:"border",size:"lg",role:"status","aria-hidden":"true"}):"")}var D=a(553);a(539);function T(){var e=Object(n.useContext)(S),t=e.shareModalShow,a=e.setShareModalShow,c=e.shareId,s="".concat(window.location.protocol,"//").concat(window.location.host,"?shareId=").concat(c);return r.a.createElement("div",{className:"IdeModal"},r.a.createElement(D.a,{show:t,animation:!0,className:"modal",onHide:function(){a(!1)}},r.a.createElement(D.a.Header,{closeButton:!0,className:"modal-header"},r.a.createElement(D.a.Title,null,"Code Shared")),r.a.createElement(D.a.Body,{className:"modal-body"},r.a.createElement("b",null,"Link"),r.a.createElement("br",null),s),r.a.createElement(D.a.Footer,{className:"modal-footer"},r.a.createElement(f.a,{variant:"primary",onClick:function(){var e="".concat(window.location.protocol,"//").concat(window.location.host,"?shareId=").concat(c),t=document.createElement("textarea");t.innerHTML=e,document.body.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),t.remove()}},"Copy"))))}var U=a(552),V=a(554);a(540);function F(){var e=Object(n.useState)("login"),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),o=Object(i.a)(s,2),d=o[0],m=o[1],p=Object(n.useState)(!1),v=Object(i.a)(p,2),b=v[0],E=v[1],h=Object(n.useState)(!1),g=Object(i.a)(h,2),w=g[0],x=g[1],y=Object(n.useState)(""),C=Object(i.a)(y,2),I=C[0],k=C[1],N=Object(n.useState)(""),z=Object(i.a)(N,2),L=z[0],R=z[1],P=Object(n.useState)(""),A=Object(i.a)(P,2),M=A[0],B=A[1],G=Object(n.useState)(""),_=Object(i.a)(G,2),K=_[0],H=_[1],J=Object(n.useState)(""),T=Object(i.a)(J,2),F=T[0],Q=T[1],W=Object(n.useState)(""),q=Object(i.a)(W,2),Y=q[0],$=q[1],X=Object(n.useContext)(S),Z=X.loginModalShow,ee=X.setLoginModalShow,te=Object(n.useContext)(j).setIsAuthenticated,ae=Object(n.useRef)(null),ne=Object(n.useRef)(null),re=Object(n.useRef)(null),ce=Object(n.useRef)(null),se=Object(n.useRef)(null),oe=Object(n.useRef)(null),le=r.a.createElement(U.a,{variant:"danger",display:"none"},"Email or Password is wrong!"),ue=r.a.createElement(U.a,{variant:"danger",display:"none"},"Given details is not valid"),ie=r.a.createElement(U.a,{variant:"success",display:"none"},"User Successfully Registered"),de=function(){ee(!1)},me=function(){c("login"),Q(""),$("")},pe=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!I||!L){e.next=7;break}return e.next=3,O.login(I,L);case 3:"Unauthorized"===e.sent.data?(m(!0),x(!1)):(x(!1),m(!1),te(!0),ee(!1)),e.next=8;break;case 7:m(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fe=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(M&&K&&F&&Y)){e.next=7;break}return e.next=3,O.register(M,K,F,Y);case 3:e.sent.data.message.msgError?E(!0):(E(!1),x(!0),me()),e.next=8;break;case 7:E(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ve=function(){k(ae.current.value),R(ne.current.value)},be=function(){B(re.current.value),H(ce.current.value),Q(se.current.value),$(oe.current.value)};return"login"===a?r.a.createElement("div",{className:"IdeModal"},r.a.createElement(D.a,{show:Z,className:"modal",size:"sm","aria-labelledby":"contained-modal-title-vcenter",onHide:de,centered:!0},r.a.createElement(D.a.Header,{closeButton:!0,onClick:de},r.a.createElement(D.a.Title,null,"Login")),r.a.createElement(D.a.Body,null,d?le:"",w?ie:"",r.a.createElement(V.a,null,r.a.createElement(V.a.Group,{controlId:"formLoginEmail"},r.a.createElement(V.a.Label,null,"Email "),r.a.createElement(V.a.Control,{ref:ae,onChange:ve,type:"email",placeholder:"Enter email",value:I})),r.a.createElement(V.a.Group,{controlId:"formLoginPassword"},r.a.createElement(V.a.Label,null,"Password"),r.a.createElement(V.a.Control,{ref:ne,onChange:ve,type:"password",placeholder:"Password",value:L})),r.a.createElement(f.a,{variant:"primary",onClick:pe,block:!0},"Login")),r.a.createElement("hr",null),r.a.createElement(f.a,{variant:"primary",onClick:function(){c("register"),R("")},block:!0},"Create new account")))):r.a.createElement("div",{className:"IdeModal"},r.a.createElement(D.a,{show:Z,className:"modal",size:"sm","aria-labelledby":"contained-modal-title-vcenter",onHide:de,centered:!0},r.a.createElement(D.a.Header,{closeButton:!0,onClick:de},r.a.createElement(D.a.Title,null,"Register")),r.a.createElement(D.a.Body,null,b?ue:"",w?ie:"",r.a.createElement(V.a,{onSubmit:fe},r.a.createElement(V.a.Group,{controlId:"formRegisterName"},r.a.createElement(V.a.Label,null,"Name "),r.a.createElement(V.a.Control,{ref:re,onChange:be,type:"text",placeholder:"Enter Name",value:M})),r.a.createElement(V.a.Group,{controlId:"formRegisterEmail"},r.a.createElement(V.a.Label,null,"Email "),r.a.createElement(V.a.Control,{ref:ce,onChange:be,type:"email",placeholder:"Enter email",value:K})),r.a.createElement(V.a.Group,{controlId:"formRegisterPassword"},r.a.createElement(V.a.Label,null,"Password"),r.a.createElement(V.a.Control,{ref:se,onChange:be,type:"password",placeholder:"Password",value:F})),r.a.createElement(V.a.Group,{controlId:"formRegisterPassword2"},r.a.createElement(V.a.Label,null,"Verify Password"),r.a.createElement(V.a.Control,{ref:oe,onChange:be,type:"password",placeholder:"Re-type Password",value:Y})),r.a.createElement(f.a,{variant:"primary",onClick:fe,block:!0},"Register")),r.a.createElement("hr",null),r.a.createElement(f.a,{variant:"primary",onClick:me,block:!0},"I already have an account"))))}a(541),a(542);var Q=function(){var e;e="UA-175900721-1",m.a.initialize(e),m.a.pageview(window.location.pathname+window.location.search);var t=Object(n.useState)(null),a=Object(i.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)(!1),p=Object(i.a)(o,2),f=p[0],v=p[1],b=Object(n.useContext)(S),E=b.setCode,h=b.setLanguageId,g=b.width,O=b.setWidth;return Object(n.useEffect)((function(){var e=function(){return O(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[g,O]),Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t);case 2:a=e.sent,E(a.data.data.source_code),h(a.data.data.language_id);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=window.location.search,a=new URLSearchParams(t);s(a.get("shareId")),c&&e(c)}),[c,E,h]),r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{split:"horizontal",allowResize:!1},r.a.createElement(z,null),r.a.createElement(d.a,{split:g>=767?"vertical":"horizontal",minSize:0,maxSize:-5,defaultSize:"60%",onChange:function(){return v((function(e){return!e}))}},r.a.createElement(K,{resizeEditor:f,setResizeEditor:v}),r.a.createElement(d.a,{split:"horizontal",allowResize:!1,defaultSize:"50%"},r.a.createElement(H,null),r.a.createElement(J,null)))),r.a.createElement(T,null),r.a.createElement(F,null))};a(543),a(544);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null,r.a.createElement(x,null,r.a.createElement(Q,null)))),document.getElementById("root"))},72:function(e,t,a){e.exports=a.p+"static/media/pkLogo.dcec42b2.svg"},81:function(e,t,a){e.exports=a(545)}},[[81,1,2]]]);
//# sourceMappingURL=main.4404e8c2.chunk.js.map