(this["webpackJsonp@rainbow/apps"]=this["webpackJsonp@rainbow/apps"]||[]).push([[0],{267:function(e,t,n){},268:function(e,t,n){},269:function(e,t,n){},270:function(e,t,n){},271:function(e,t,n){},272:function(e,t,n){"use strict";n.r(t);var c,a=n(30),s=n.n(a),i=n(62),r=n(64),o=n(280),l=n(20),u=n(1),d=n(21),j=n(7),b=n(0),p=n.n(b),f=Object(b.createContext)({theme:"light",setTheme:function(e){return e}}),h=(n(157),n(142)),m=n.n(h),O=(n(159),n(141)),x=n.n(O),v=n(44),g=n(279),w=(n(161),n(139)),N=n.n(w),k=n(137),y=n(46),M=n(135),P=n(136),C=(n(65),"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),S=(window.screen.width<768||window.screen.height,/Safari\//.test(navigator.userAgent)&&!/(Chrome\/|Android\s)/.test(navigator.userAgent)),T=(S&&navigator.userAgent.includes("Macintosh"),S&&navigator.userAgent.includes("iPhone"),n(2)),D=function(){var e=Object(k.a)(),t=Object(l.h)().pathname,n=Object(b.useState)(!1),c=Object(j.a)(n,2),a=c[0],s=c[1],i=Object(l.g)(),r=[{navId:0,label:e.formatMessage({id:"forkids",defaultMessage:"For Kids"}),path:"/forkids"},{navId:1,label:e.formatMessage({id:"crocodile",defaultMessage:"Crocodile"}),path:"/crocodile"}],o=function(){s(!1)},u=function(){s(!a)},d=function(e){i.push(e),o()};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{onMouseDown:C?function(){}:u,onTouchStart:u,className:"menu-button cursor-pointer select-none",children:Object(T.jsx)(y.a,{icon:P.a,width:32,height:32})}),Object(T.jsx)(N.a,{className:"left-menu",title:Object(T.jsxs)("span",{className:"text-xl text-black font-bold",children:[Object(T.jsx)(g.a,{id:"Modules",defaultMessage:"Modules"}),Object(T.jsx)("sup",{children:" \xa9"})]}),placement:"left",onClose:o,visible:a,closeIcon:Object(T.jsx)(y.a,{icon:M.a,width:22,height:22}),bodyStyle:{padding:0,display:"flex",flexDirection:"column"},width:320,children:r.map((function(e){var n=e.navId,c=e.label,a=e.path,s=t.startsWith(a)||"/"===t&&0===n;return Object(T.jsx)("div",{className:"cursor-pointer",children:Object(T.jsx)("div",{className:Object(v.a)("text-base menu-item",s&&"active"),onMouseDown:C?function(){}:function(){return d(a)},onTouchStart:function(){return d(a)},children:c})},n)}))})]})},A=Object(b.createContext)({title:""}),I=function(){var e=Object(b.useContext)(f),t=e.theme,n=e.setTheme,c=Object(b.useContext)(A).title,a=x.a.Header;return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(a,{className:"shadow-lg flex items-center",children:[Object(T.jsx)(D,{}),Object(T.jsxs)("div",{className:Object(v.a)("flex flex-col pt-10 pb-10"),children:[Object(T.jsx)("span",{className:Object(v.a)("text-sm"),children:Object(T.jsx)(g.a,{id:"apps",defaultMessage:"\ud83c\udf08 Rainbow apps"})}),Object(T.jsx)("span",{className:"text-lg font-bold leading-10",children:c})]}),Object(T.jsxs)("div",{className:"flex items-center hidden",children:[Object(T.jsx)("span",{className:Object(v.a)("pr-14 t text-white opacity-75 hover:opacity-100","cursor-pointer transition duration-300 font-light"),children:"Dark theme"}),Object(T.jsx)(m.a,{checked:"dark"===t,onChange:function(){n((function(e){return"light"===e?"dark":"light"}))}})]})]})})},R=(n(235),n(144)),F=n.n(R),E=n(143),G=n.n(E).a.create({baseURL:"".concat("/rainbowapps")}),K=function(){var e=F.a.useModal(),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(b.useEffect)((function(){var e=function(e){n.error({title:"Error",centered:!0,content:e})},t=G.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),c=G.interceptors.response.use((function(e){return e}),(function(t){if(t.response){var n=t.response,c=n.status,a=n.statusText,s=n.data;c>=500&&e("string"===typeof s?s:"Invalid HTTP response status ".concat(c," (").concat(a,")"))}return Promise.reject(t)}));return function(){G.interceptors.request.eject(t),G.interceptors.response.eject(c)}}),[n]),c},B=function(e){var t=e.children,n=Object(b.useState)("light"),c=Object(j.a)(n,2),a=c[0],s=c[1],i=Object(b.useRef)(null);return Object(T.jsx)(f.Provider,{value:{theme:a,setTheme:s},children:Object(T.jsx)("div",{className:"theme-".concat(a," absolute inset-0 overflow-hidden"),ref:i,children:Object(T.jsxs)("div",{className:"absolute inset-0 overflow-hidden flex flex-col bg-ivory transition duration-300",children:[Object(T.jsx)(I,{}),t,Object(T.jsx)(K,{})]})})})},L=function(e){var t=e.pageProps,n=void 0===t?{title:""}:t,c=e.children;return Object(T.jsx)(A.Provider,{value:n,children:Object(T.jsx)(B,{children:c})})},H=["component","children","pageProps"],W=function(e){var t=e.component,n=e.children,c=e.pageProps,a=Object(d.a)(e,H);return Object(T.jsx)(l.b,Object(u.a)(Object(u.a)({},a),{},{render:function(e){return Object(T.jsx)(L,{pageProps:c,children:t?Object(T.jsx)(t,Object(u.a)({},e)):n})}}))},q=n(145),J=n.n(q),U=(n(267),{}),V=function(e,t){function n(){Object.keys(U).forEach((function(e){U[e].currentTime>0&&(U[e].pause(),U[e].currentTime=0)})),U[e].play()}Object.keys(U).includes(e)||(U[e]=new Audio("/rainbowapps/audio/"+e+".mp3")),void 0!==t&&c&&clearTimeout(c),t?c=setTimeout((function(){n(),c=void 0}),t):n()},X=n(14),Y=n(15),_=n(17),z=n(18),Q=(n(268),function(e){Object(_.a)(n,e);var t=Object(z.a)(n);function n(){var e;Object(X.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={animate:!1,width:0,height:0,top:0,left:0},e.ripple=p.a.createRef(),e.px=function(e){return"".concat(e,"px")},e.getStyles=function(){var t=e.state,n=t.top,c=t.left,a=t.width,s=t.height;return{top:e.px(n),left:e.px(c),width:e.px(a),height:e.px(s)}},e.getRepplingCls=function(){return e.state.animate?"is-reppling":""},e.reppling=function(t){var n=e.ripple.current.parentElement,c=n.getBoundingClientRect(),a=n.offsetWidth,s=n.offsetHeight,i=Math.max(s,a),r=i/2;e.setState({animate:!0,width:i,height:i,top:t.top-c.top-r,left:t.left-c.left-r})},e}return Object(Y.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this,n=this.props.cursorPos;if(n.time!==e.cursorPos.time){if(!this.state.animate)return void this.reppling(n);this.setState({animate:!1},(function(){return t.reppling(n)}))}}},{key:"render",value:function(){return Object(T.jsx)("div",{className:"Ripple ".concat(this.getRepplingCls()),ref:this.ripple,style:this.getStyles()})}}]),n}(p.a.Component));Q.defaultProps={cursorPos:{}};var Z=Q,$=function(e){Object(_.a)(n,e);var t=Object(z.a)(n);function n(){var e;Object(X.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={cursorPos:{}},e.handleClick=function(t){if(!e.props.disabled&&t.touches){var n={top:t.touches[0].clientY,left:t.touches[0].clientX,time:Date.now()};e.setState({cursorPos:n})}},e}return Object(Y.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className;return Object(T.jsxs)("div",Object(u.a)(Object(u.a)({},this.props),{},{className:Object(v.a)("relative overflow-hidden flex-1 flex",n),onTouchStart:this.handleClick,children:[t,Object(T.jsx)(Z,{cursorPos:this.state.cursorPos})]}))}}]),n}(b.Component);$.defaultProps={disabled:!1};var ee=$,te={fruits:["banana","strawberry","kiwi","peach","orange","pear","lemon","plum","apple","pineapple","cherry","pomegranate"]},ne=(n(269),function(e){var t=e.onClick,n=e.deviation,c=e.text;return Object(T.jsxs)("div",{className:"gooey-button-wrapper",children:[Object(T.jsx)("svg",{id:"gooey-button-svg-filter-blur",xmlns:"http://www.w3.org/2000/svg",version:"1.1",children:Object(T.jsx)("defs",{children:Object(T.jsxs)("filter",{id:"gooey",children:[Object(T.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:n,result:"blur"}),Object(T.jsx)("feColorMatrix",{in:"blur",type:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"highContrastGraphic"}),Object(T.jsx)("feComposite",{in:"SourceGraphic",in2:"highContrastGraphic",operator:"atop"})]})})}),Object(T.jsxs)("button",{className:"gooey-button",onMouseDown:C?function(){}:t,onTouchStart:t,children:[c,Object(T.jsxs)("span",{className:"bubbles",children:[Object(T.jsx)("span",{className:"bubble"}),Object(T.jsx)("span",{className:"bubble"}),Object(T.jsx)("span",{className:"bubble"}),Object(T.jsx)("span",{className:"bubble"}),Object(T.jsx)("span",{className:"bubble"}),Object(T.jsx)("span",{className:"bubble"}),Object(T.jsx)("span",{className:"bubble"}),Object(T.jsx)("span",{className:"bubble"}),Object(T.jsx)("span",{className:"bubble"}),Object(T.jsx)("span",{className:"bubble"})]})]})]})});ne.defaultProps={deviation:6};var ce,ae,se=ne,ie=function(){var e=Object(k.a)(),t=Object(b.useState)(!0),n=Object(j.a)(t,2),c=n[0],a=n[1],s=Object(b.useState)(0),i=Object(j.a)(s,2),r=i[0],o=i[1],l=Object(b.useState)(void 0),u=Object(j.a)(l,2),d=u[0],p=u[1];return Object(b.useEffect)((function(){if(void 0!==d)return c?(setTimeout((function(){ce.next()}),1e3),ae=setInterval((function(){ce.next()}),3e3)):void 0!==ae&&(clearInterval(ae),ae=void 0),function(){void 0!==ae&&(clearInterval(ae),ae=void 0)};void 0!==ae&&(clearInterval(ae),ae=void 0)}),[c,d]),Object(T.jsxs)("div",{className:"p-10",children:[void 0===d&&Object(T.jsxs)("div",{className:"flex flex-row flex-flow",children:[Object.keys(te).map((function(t){return Object(T.jsxs)("div",{className:"flex flex-col card",onMouseDown:C?function(){}:function(){p(t)},onTouchStart:function(){p(t)},children:[Object(T.jsx)("div",{className:"card-image",children:Object(T.jsx)("img",{className:"image",src:"/rainbowapps/images/"+t+"/"+te[t][0]+".jpg"})}),Object(T.jsx)("div",{className:"card-name p-10 flex justify-center",children:e.formatMessage({id:t})})]},t)})),Object(T.jsx)("div",{className:"absolute bottom-0 right-0",children:Object(T.jsx)(se,{onClick:function(){window.location.href="mailto:dimakoch@ukr.net?subject=ForKids application"},text:e.formatMessage({id:"feedback"})})})]}),void 0!==d&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(J.a,{className:"carousel",swipeOptions:{continuous:!0,startSlide:r,callback:function(e){o(e),V(d+"/"+te[d][e],200)}},ref:function(e){ce=e},children:te[d].map((function(t){return Object(T.jsx)("div",{onMouseDown:C?function(){}:function(){a(!1)},onTouchStart:function(){a(!1)},children:Object(T.jsxs)("div",{className:"item flex flex-col",children:[Object(T.jsx)("div",{className:"description",children:e.formatMessage({id:t})}),Object(T.jsx)("img",{className:"image",src:"/rainbowapps/images/"+d+"/"+t+".jpg"})]})},t)}))}),Object(T.jsxs)("div",{className:"carousel-buttons flex flex-row justify-between",children:[Object(T.jsx)("div",{className:"carousel-button",onMouseDown:C?function(){}:function(){a(!1),ce.prev(),V("click/click")},onTouchStart:function(){a(!1),ce.prev(),V("click/click")},children:Object(T.jsx)(ee,{className:"carousel-button-ripple",children:Object(T.jsx)(y.a,{icon:"clarity:rewind-solid",className:"icon"})})}),Object(T.jsx)("div",{className:"carousel-button",onMouseDown:C?function(){}:function(){a(!c),V("click/click")},onTouchStart:function(){a(!c),V("click/click")},children:Object(T.jsx)(ee,{className:"carousel-button-ripple",children:c?Object(T.jsx)(y.a,{icon:"clarity:pause-solid",className:"icon"}):Object(T.jsx)(y.a,{icon:"clarity:play-solid",className:"icon"})})}),Object(T.jsx)("div",{className:"carousel-button",onMouseDown:C?function(){}:function(){a(!1),ce.next(),V("click/click")},onTouchStart:function(){a(!1),ce.next(),V("click/click")},children:Object(T.jsx)(ee,{className:"carousel-button-ripple",children:Object(T.jsx)(y.a,{icon:"clarity:fast-forward-solid",className:"icon"})})})]})]})]})},re=(n(270),function(){return Object(T.jsx)("div",{className:"p-20",children:"Crocodile"})}),oe=function(){var e=Object(k.a)();return Object(T.jsxs)(l.d,{children:[Object(T.jsx)(W,{exact:!0,path:"/",children:Object(T.jsx)(l.a,{to:"/forkids"})}),Object(T.jsx)(W,{path:"/forkids",component:ie,pageProps:{title:e.formatMessage({id:"forkids",defaultMessage:"For Kids"})}}),Object(T.jsx)(W,{path:"/crocodile",component:re,pageProps:{title:e.formatMessage({id:"crocodile",defaultMessage:"Crocodile"})}}),Object(T.jsx)(l.b,{exact:!0,path:"*",children:Object(T.jsx)(l.a,{to:"/forkids"})})]})},le={en:{apps:"\ud83c\udf08 Rainbow apps",Modules:"Modules",forkids:"For Kids",crocodile:"Crocodile",feedback:"Feedback",fruits:"Fruits",banana:"Banana",strawberry:"Strawberry",kiwi:"Kiwi",peach:"Peach",orange:"Orange",pear:"Pear",lemon:"Lemon",plum:"Plum",apple:"Apple",pineapple:"Pineapple",cherry:"Cherry",pomegranate:"Pomegranate",vegetables:"Vegetables",tomato:"Tomato"},ru:{apps:"\ud83c\udf08 \u0420\u0430\u0434\u0443\u0436\u043d\u044b\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b",Modules:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b",forkids:"\u0414\u043b\u044f \u0434\u0435\u0442\u0435\u0439",crocodile:"\u041a\u0440\u043e\u043a\u043e\u0434\u0438\u043b",feedback:"\u041e\u0442\u0437\u044b\u0432",fruits:"\u0424\u0440\u0443\u043a\u0442\u044b",banana:"\u0411\u0410\u041d\u0410\u041d",strawberry:"\u041a\u041b\u0423\u0411\u041d\u0418\u041a\u0410",kiwi:"\u041a\u0418\u0412\u0418",peach:"\u041f\u0415\u0420\u0421\u0418\u041a",orange:"\u0410\u041f\u0415\u041b\u042c\u0421\u0418\u041d",pear:"\u0413\u0420\u0423\u0428\u0410",lemon:"\u041b\u0418\u041c\u041e\u041d",plum:"\u0421\u041b\u0418\u0412\u0410",apple:"\u042f\u0411\u041b\u041e\u041a\u041e",pineapple:"\u0410\u041d\u0410\u041d\u0410\u0421",cherry:"\u0412\u0418\u0428\u041d\u042f",pomegranate:"\u0413\u0420\u0410\u041d\u0410\u0422",vegetables:"\u041e\u0432\u043e\u0449\u0438",tomato:"\u041f\u041e\u041c\u0418\u0414\u041e\u0420"}},ue=n(56),de=n(147),je="root/SELECT_APPLICATION",be={currentApplication:void 0},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;return t.type===je?Object(u.a)(Object(u.a)({},e),{},{currentApplication:t.payload}):e},fe=Object(ue.combineReducers)({filter:pe}),he=function(e,t){return fe(e,t)},me=n(146),Oe=[de.a];var xe=Object(ue.createStore)(he,Object(me.composeWithDevTools)(ue.applyMiddleware.apply(void 0,Oe))),ve=(r.c,xe);n(271);s.a.render(Object(T.jsx)(r.a,{store:ve,children:Object(T.jsx)(o.a,{messages:le.ru,locale:"ru",children:Object(T.jsx)(i.a,{children:Object(T.jsx)(oe,{})})})}),document.getElementById("root"))}},[[272,1,2]]]);
//# sourceMappingURL=main.10732f0a.chunk.js.map