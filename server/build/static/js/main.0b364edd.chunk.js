(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,r){},88:function(e,t,r){},89:function(e,t,r){},90:function(e,t,r){},91:function(e,t,r){},92:function(e,t,r){},93:function(e,t,r){},94:function(e,t,r){},95:function(e,t,r){},96:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(19),c=r.n(a),s=(r(40),r(16)),i=r(4),o=r(6),u=r.n(o),l=r(14),j=r(9),b=r(5),d=function(e){return{type:"SET_USER",user:e}},p=r(17),f=r.n(p),O=r(15),h=r.n(O);f.a.interceptors.request.use((function(e){var t=h.a.get("accessToken");return t&&(e.headers.authorization="Bearer "+t),e.baseURL="/api",e})),f.a.interceptors.response.use((function(e){var t=e.data;return t.success?(h.a.remove("accessToken"),h.a.remove("refreshToken"),t):(t.accessToken&&h.a.set("accessToken",t.accessToken,{expires:1}),t.refreshToken&&h.a.set("refreshToken",t.refreshToken,{expires:1}),t)}),function(){var e=Object(l.a)(u.a.mark((function e(t){var r,n,a,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(403===t.response.status){e.next=2;break}return e.abrupt("return",t.response.data);case 2:if("Password incorrect"!==t.response.data){e.next=4;break}return e.abrupt("return",t.response.data);case 4:return r=t.config,e.prev=5,n=h.a.get("refreshToken"),e.next=9,f.a.post("/user/token",{refreshToken:n||""});case 9:if(!((a=e.sent)instanceof Error)){e.next=12;break}throw a;case 12:return c=a.data.accessToken.accessToken,h.a.set("accessToken",c,{expires:1}),e.next=16,f()(r);case 16:return s=e.sent,e.abrupt("return",s);case 20:return e.prev=20,e.t0=e.catch(5),e.abrupt("return",e.t0.response.data);case 23:case"end":return e.stop()}}),e,null,[[5,20]])})));return function(t){return e.apply(this,arguments)}}());var m=f.a,x=r(0);var v=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(!1),s=Object(j.a)(c,2),o=s[0],p=s[1],f=Object(n.useRef)(),O=Object(n.useRef)(),h=Object(b.b)(),v=Object(b.c)((function(e){return e.user}));return v?Object(x.jsx)(i.a,{to:"/profile/".concat(v.id)}):r?Object(x.jsx)(i.a,{to:"/register"}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{id:"landing-page-title",children:"Welcome To Trivia Game"}),Object(x.jsx)("button",{className:"redirect-button",onClick:function(){a(!0)},children:"Sign Up"}),Object(x.jsxs)("form",{className:"form",children:[o?Object(x.jsx)("div",{id:"error",children:o}):null,Object(x.jsx)("input",{type:"text",name:"name",ref:f,placeholder:"Name"}),Object(x.jsx)("input",{type:"password",name:"password",ref:O,placeholder:"password"}),Object(x.jsxs)("button",{id:"login-button",onClick:function(e){return g.apply(this,arguments)},children:[" ","Login"," "]})]})]});function g(){return(g=Object(l.a)(u.a.mark((function e(t){var r,n,a,c,s,i,o,l,j,b,x;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=f.current.value,n=O.current.value,r&&n){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,e.next=8,m.post("user/login",{name:r,password:n});case 8:if("Password incorrect"!==(a=e.sent)){e.next=14;break}return p("Password incorrect..."),e.abrupt("return");case 14:if("cannot find user"!==a){e.next=17;break}return p("No such user, please register first"),e.abrupt("return");case 17:return c=a.id,s=a.name,i=a.avatarUrl,e.next=20,m.get("user/user-stats");case 20:o=e.sent,l=o.email,j=o.gamesPlayed,b=o.highScore,x=o.totalScore,h(d({id:c,name:s,avatarUrl:i,email:l,gamesPlayed:j,highScore:b,totalScore:x})),e.next=29;break;case 25:return e.prev=25,e.t0=e.catch(5),console.log(e.t0),e.abrupt("return");case 29:case"end":return e.stop()}}),e,null,[[5,25]])})))).apply(this,arguments)}},g=r(34),T=r.n(g);var S=function(e){return Object(x.jsx)(T.a,{type:"Oval",color:"#680c14",height:40,width:40})};r(88);var k=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(),s=Object(j.a)(c,2),o=s[0],p=s[1],f=Object(n.useState)(!1),O=Object(j.a)(f,2),h=O[0],v=O[1],g=Object(n.useRef)(4),T=Object(n.useRef)(),k=Object(n.useRef)(),N=Object(n.useRef)(),E=Object(b.b)(),y=Object(b.c)((function(e){return e.user}));return Object(n.useEffect)((function(){o||function(){return w.apply(this,arguments)}().catch(console.log)}),[]),y?Object(x.jsx)(i.a,{to:"/Profile/".concat(T.current)}):r?Object(x.jsx)(i.a,{to:"/"}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{id:"landing-page-title",children:"Welcome To Trivia Game"}),Object(x.jsx)("button",{className:"redirect-button",onClick:function(e){e.preventDefault(),a(!0)},children:"Login"}),Object(x.jsxs)("form",{children:[h?Object(x.jsx)("div",{id:"error",children:h}):null,Object(x.jsx)("label",{htmlFor:"name",className:"label",children:Object(x.jsx)("input",{type:"email",ref:k,name:"email",placeholder:"Email"})}),Object(x.jsx)("label",{htmlFor:"name",className:"label",children:Object(x.jsx)("input",{type:"text",ref:T,name:"name",placeholder:"Name"})}),Object(x.jsx)("label",{htmlFor:"password",className:"label",children:Object(x.jsx)("input",{type:"password",name:"password",ref:N,placeholder:"password"})}),Object(x.jsx)("div",{id:"avatar-selection",children:null===o||void 0===o?void 0:o.map((function(e,t){return Object(x.jsx)("img",{onClick:R,className:"avatar",src:e,alt:"",onLoadStart:function(){return Object(x.jsx)(S,{})}},t)}))}),Object(x.jsx)("button",{onClick:function(e){return A.apply(this,arguments)},children:"Sign Up"})]})]});function w(){return(w=Object(l.a)(u.a.mark((function e(){var t,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,m.get("/avatar/count");case 3:for(r=e.sent,n=1;n<r;n++)t.push("/api/avatar/avatar".concat(n));p(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=Object(l.a)(u.a.mark((function e(t){var r,n,a,c,s,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=T.current.value,n=k.current.value,a=N.current.value,r&&a&&n){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,m.post("user/register",{name:r,email:n,password:a,avatarId:g.current});case 8:if(c=e.sent,s=c.id,i=c.name,o=c.avatarUrl,"username or email already exists"!==c){e.next=12;break}return e.abrupt("return",v("username or email already exists"));case 12:if("password length must be 6 or longer"!==c){e.next=14;break}return e.abrupt("return",v("password length must be 6 or longer"));case 14:E(d({id:s,name:i,avatarUrl:o,email:n,gamesPlayed:0,highScore:0,totalScore:0}));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){e.preventDefault();for(var t=e.target.parentNode.children,r=0;r<t.length;r++)t[r]===e.target?(g.current=r+1,t[r].className="avatar chosen"):t[r].className="avatar"}},N=r(7),E=function(e){return{type:"SET_STRIKES",strikes:e}},y=function(e){return{type:"SET_SCORE",score:e}},w=function(e){return{type:"SET_PLAYER",player:e}},A=function(e){return{type:"SET_NEXT_QUESTION",question:e}},R=function(e){return{type:"SET_ANSWER",answer:e}},_=function(e,t,r){return function(n,a){var c=a().timer,s=c.totalTime,i=c.timePassed;n({type:"LOADING_ANSWER"}),n({type:"START"}),m.post("/game/answer/".concat(e),{questionId:t,answer:r,totalTime:s,timePassed:i}).then((function(e){e.isCorrect?(n({type:"TOTAL_TIME_DECREASE"}),n(y(e.newScore))):n(E(e.strikes)),n(R(e.correctAnswer)),n(function(e){return{type:"SET_ANSWERED",answer:e}}(e.answer))})).catch(console.log)}},I={id:null,text:null,options:[],correctAnswer:null,timeUp:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;if("TICK"===t.type)return e;var r=Object(N.a)({},e);switch(t.type){case"SET_NEXT_QUESTION":r.text=t.question.text,r.options=t.question.options,r.id=t.question.id,r.timeUp=!1,r.correctAnswer=null;break;case"TIME_UP":r.timeUp=!0;break;case"SET_ANSWER":r.correctAnswer=t.answer;break;case"SET_ANSWERED":r.answered=t.answer;break;case"LOADING_ANSWER":r.correctAnswer="LOADING";break;default:r=e}return r};r(89);var P=function(e){return Object(x.jsx)("div",{className:"loader"})};r(90);var C=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),r=t[0],a=t[1];return Object(n.useEffect)((function(){m.get("/game/leader_board").then((function(e){a(e)}))}),[]),r?Object(x.jsx)("div",{className:"scroller",children:Object(x.jsxs)("table",{id:"leader-board",children:[Object(x.jsx)("thead",{id:"table-headers",children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{id:"img-table-header",className:"table-header"}),Object(x.jsx)("th",{className:"table-header",children:"Rank"}),Object(x.jsx)("th",{className:"table-header",children:"Name"}),Object(x.jsx)("th",{className:"table-header",children:"Score"})]})}),Object(x.jsx)("tbody",{children:r.map((function(e,t){return Object(x.jsxs)("tr",{className:"lb-player",children:[Object(x.jsx)("td",{children:Object(x.jsx)("img",{className:"lb-player-avatar",src:e.avatarUrl,alt:"avatar"})}),Object(x.jsx)("td",{className:"lb-player-rank",children:e.rank}),Object(x.jsx)("td",{className:"lb-player-name",children:e.name}),Object(x.jsx)("td",{className:"lb-player-score",children:e.score})]},t)}))})]})}):Object(x.jsx)(P,{})};r(91);var L=function(){var e=Object(b.b)(),t=Object(n.useState)(!1),r=Object(j.a)(t,2),a=r[0],c=r[1],s=Object(n.useState)(null),o=Object(j.a)(s,2),p=o[0],f=o[1],O=Object(b.c)((function(e){return e})),h=O.user,v=O.player;return Object(n.useEffect)((function(){v&&v.strikes>=3&&m.get("/game/end_session/".concat(v.id)).then((function(t){h.highScore=t.updatedUser.highScore,h.gamesPlayed=t.updatedUser.gamesPlayed,h.totalScore=t.updatedUser.totalScore,f(Object(N.a)({},t)),e(A(I)),e(d(h))})).catch(console.log)}),[]),a?Object(x.jsx)(i.a,{to:"/"}):h?v&&!v.gameEnded?Object(x.jsx)(i.a,{to:"/game"}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("button",{className:"redirect-button",onClick:function(){m.post("/user/logout"),e(d(!1)),c(!0)},children:"Logout"}),Object(x.jsxs)("div",{id:"profile-div",children:[Object(x.jsxs)("div",{id:"profile-details",children:[Object(x.jsxs)("span",{className:"detail",children:["Best Score: ",h.highScore]}),Object(x.jsxs)("span",{className:"detail",children:["Total Games: ",h.gamesPlayed]}),Object(x.jsxs)("span",{className:"detail",children:["Total Score: ",h.totalScore]}),v&&!v.gameEnded?null:p&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("span",{className:"detail",children:"Correct Answers: ".concat(p.playerStats.passed)}),Object(x.jsx)("span",{className:"detail",children:"Score: ".concat(p.playerStats.score)})]})]}),Object(x.jsx)("img",{className:"profile-avatar",src:h.avatarUrl,alt:"Avatar"}),Object(x.jsx)("h1",{id:"profile-page-title",children:h.name})]}),Object(x.jsx)("button",{id:"ButtonStart",onClick:function(e){return g.apply(this,arguments)},children:v&&v.gameEnded?"Go Again!":"Start!"}),Object(x.jsx)(C,{})]}):Object(x.jsx)(i.a,{to:"/"});function g(){return(g=Object(l.a)(u.a.mark((function t(r){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.next=3,m.post("/game/new_session",{userName:h.name});case 3:(n=t.sent).gameEnded=!1,e(w(Object(N.a)({},n)));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}};r(92);var q=function(e){var t=e.playerId,r=e.questionId,a=e.goToNextQuestion,c=e.nextQuestion,s=Object(n.useState)([!1,!1,!1,!1,!1]),i=Object(j.a)(s,2),o=i[0],u=i[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){a(c.current)}),6e3);return function(){clearTimeout(e)}}),[]),Object(x.jsx)("div",{id:"rank",children:o.map((function(e,n){return Object(x.jsx)("div",{className:"star".concat(e?"-picked":""),onClick:function(){return function(e){m.post("/game/rank/".concat(t),{questionId:r,rank:e}).then((function(){return a(c.current)}))}(n+1)},onMouseEnter:function(){!function(e){var t=o.map((function(t,r){return r<e}));u(t)}(n+1)},children:e?Object(x.jsx)("i",{className:"fas fa-star"}):Object(x.jsx)("i",{className:"far fa-star"})},n)}))})};r(93);function D(e){var t=e.timeUp,r=e.goToNextQuestion,a=e.nextQuestion,c=Object(b.b)(),s=Object(b.c)((function(e){return e.timer}));return Object(n.useEffect)((function(){var e=setInterval((function(){return c({type:"TICK"})}),500);return function(){return clearInterval(e)}}),[]),s.totalTime-s.timePassed===0&&(c({type:"TIME_UP"}),setTimeout((function(){t(),r(a.current)}),5e3)),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{id:"timer-div",style:{animationDuration:s.totalTime+"s"}}),Object(x.jsx)("div",{id:"timer",children:s.totalTime-s.timePassed>0?s.totalTime-s.timePassed:"Time Up!"})]})}var F=function(e){var t=Object(b.b)(),r=Object(i.f)(),a=Object(b.c)((function(e){return e})),c=a.player,s=a.user,o=a.question,j=Object(n.useRef)({});if(Object(n.useEffect)((function(){if(!c)return Object(x.jsx)(i.a,{to:"/"});p().then((function(e){j.current=e})).catch((function(e){return p().then((function(e){j.current=e}))})).catch((function(e){j.current={id:"ERROR",text:"Network Error, can't load next question"}}))}),[o.id]),Object(n.useEffect)((function(){if(!s)return Object(x.jsx)(i.a,{to:"/profile/".concat(s.id)});m.get("/game/question/".concat(c.id)).then((function(e){t(A(e))}))}),[]),c&&c.gameEnded)return Object(x.jsxs)("div",{id:"game-over",children:[Object(x.jsx)("h1",{children:" GAME OVER ! "})," ",Object(x.jsx)("br",{})," ",Object(x.jsx)("h3",{children:"Try Again... "})]});function d(e){t(A(e))}function p(){return f.apply(this,arguments)}function f(){return(f=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.get("/game/question/".concat(c.id)).then((function(e){return e})).catch(console.log));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return c&&c.strikes>=3&&(c.gameEnded=!0,t(w(Object(N.a)({},c))),setTimeout((function(){return r.push("/profile/".concat(c.id))}),4e3)),c&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{id:"question",children:[Object(x.jsx)("h1",{children:o.text}),Object(x.jsx)("div",{id:"options",children:function(e,r){for(var n=o.options,a=[],s=function(s){var i="option";String(e)===String(n[s])?i+=" correct":e&&(i+=" incorrect"),String(r)===String(n[s])&&(i+=" picked-option"),a.push(Object(x.jsx)("div",{className:i,onClick:function(){e||o.timeUp||t(_(c.id,o.id,n[s]))},children:"LOADING"===e?Object(x.jsx)(S,{}):e===n[s]?Object(x.jsx)("strong",{children:n[s]}):n[s]},s))},i=0;i<n.length;i++)s(i);return a}(o.correctAnswer,o.answered)})]}),Object(x.jsx)("div",{id:"footer",children:o.timeUp?Object(x.jsx)("div",{id:"time-up",children:" TIME UP "}):o.correctAnswer?Object(x.jsx)(q,{playerId:c.id,questionId:o.id,goToNextQuestion:d,nextQuestion:j}):Object(x.jsx)(D,{goToNextQuestion:d,nextQuestion:j,timeUp:function(){t(_(c.id,o.id,null))}})})]})};var Q=function(e){var t=e.strikes;return Object(x.jsx)("div",{id:"lives",children:function(){for(var e=[],r=0;r<3;r++)r<t?e.unshift(Object(x.jsx)("i",{className:"fas fa-heart-broken"},r)):e.unshift(Object(x.jsx)("i",{className:"fas fa-heart"},r));return e}()})};r(94);var G=function(e){var t=Object(b.c)((function(e){return e})).player,r=Object(i.f)(),n=Object(b.b)();if(!t)return Object(x.jsx)(i.a,{to:"/"});var a=t.name,c=t.score,s=t.strikes,o=t.avatarUrl;return Object(x.jsxs)("div",{id:"playerStatsBar",children:[Object(x.jsxs)("div",{id:"game-stats",children:[Object(x.jsx)("img",{className:"avatar",src:o,alt:"AVATAR"}),a]}),Object(x.jsxs)("span",{id:"score",children:[Object(x.jsx)(Q,{strikes:s}),"Score: ",c]}),Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",onClick:function(e){return t.gameEnded=!0,n(w(Object(N.a)({},t))),void setTimeout((function(){return r.push("/profile/".concat(t.id))}),4e3)},width:"32",height:"32",fill:"currentColor",id:"return-arrow",viewBox:"0 0 16 16",children:Object(x.jsx)("path",{fillRule:"evenodd",d:"M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"})})]})};r(95);var M=function(e){return Object(x.jsxs)("div",{className:"wrapper",children:[Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)(s.a,{children:[Object(x.jsx)(i.b,{exact:!0,path:"/",component:v}),Object(x.jsx)(i.b,{exact:!0,path:"/register",component:k}),Object(x.jsx)(i.b,{exact:!0,path:"/profile/:userId",component:L}),Object(x.jsxs)(i.b,{exact:!0,path:"/game",children:[Object(x.jsx)(G,{}),Object(x.jsx)(F,{})]})]})}),Object(x.jsxs)("div",{id:"bg-bubbles",children:[Object(x.jsx)("div",{className:"bubble"}),Object(x.jsx)("div",{className:"bubble"}),Object(x.jsx)("div",{className:"bubble"}),Object(x.jsx)("div",{className:"bubble"}),Object(x.jsx)("div",{className:"bubble"}),Object(x.jsx)("div",{className:"bubble"}),Object(x.jsx)("div",{className:"bubble"}),Object(x.jsx)("div",{className:"bubble"}),Object(x.jsx)("div",{className:"bubble"}),Object(x.jsx)("div",{className:"bubble"})]})]})},W={totalTime:20,timePassed:0},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,r=Object(N.a)({},e);switch(t.type){case"TICK":r.timePassed+=.5;break;case"TOTAL_TIME_DECREASE":r.totalTime-=r.totalTime>5?.5:0;break;case"START":r.timePassed=0;break;default:r=e}return r},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;if("TICK"===t.type)return e;var r=Object(N.a)({},e);switch(t.type){case"SET_STRIKES":r.strikes++;break;case"SET_SCORE":r.score=t.score;break;case"SET_PLAYER":r=Object(N.a)({},t.player);break;case"SET_FINAL_PLAYER_STATS":break;default:r=e}return r},V=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"SET_USER"===t.type?!!t.user&&Object(N.a)({},t.user):e},Y=r(35),z=r(20),J=Object(z.b)({timer:B,player:K,question:U,user:V}),X=Object(z.c)(J,Object(z.a)(Y.a));c.a.render(Object(x.jsx)(b.a,{store:X,children:Object(x.jsx)(M,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.0b364edd.chunk.js.map