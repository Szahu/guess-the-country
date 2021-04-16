(this["webpackJsonpguess-the-country"]=this["webpackJsonpguess-the-country"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),c=n(7),a=n.n(c),s=(n(16),n(1)),i=n.n(s),u=n(3),l=n(8),d=n(9),h=n(5),j=n(11),f=n(10),b=n(4),O="#95D575",p="#DE3C66",m=function(t){for(var e=0;e<t.length;e++)for(var n=0;n<t.length;n++)if(e!==n&&t[e]===t[n])return!0;return!1},x=function(){var t=Object(u.a)(i.a.mark((function t(e,n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.worldbank.org/v2/country/".concat(e,"/indicator/SP.POP.TOTL?format=json")).then((function(t){return t.json()})).then((function(t){n(t[1][1].value)}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();function v(t){if(!t)return 0;var e=t.toString();switch(e.length){case 9:return e.slice(0,3)+" million";case 8:return e.slice(0,2)+" million";case 7:return e.slice(0,1)+" million";case 6:return e.slice(0,3)+" thousand";case 5:return e.slice(0,2)+" thousand";case 4:return e.slice(0,1)+" thousand";case 3:return e.slice(0,2)+" thousand";default:return console.error("something went wrong"),"gotta add more cases to the switch statement"}}n(18);var C=n(0),g=function(t){var e=Object(r.useState)(-1),n=Object(b.a)(e,2),o=n[0],c=n[1],a=Object(r.useState)(!1),s=Object(b.a)(a,2),i=s[0],u=s[1],l=Object(r.useState)(0),d=Object(b.a)(l,2),h=d[0],j=d[1],f=Object(r.useState)(0),m=Object(b.a)(f,2),x=m[0],g=m[1],L=function(e){u(!0),c(e),function(e){return e===t.correctOne}(e)&&j(h+1),g(x+1)},B=function(e){if(i)return e===o&&e===t.correctOne?O:e===o?p:e===t.correctOne?O:"white"};return Object(C.jsxs)("div",{id:"mainCard",children:[Object(C.jsx)(S,{population:v(t.countries[t.correctOne].population)},"titleComponent"),t.countries.map((function(e,n){return function(e,n){return i?i?Object(C.jsx)(y,{color:i?n===o&&n===t.correctOne?O:n===o?p:n===t.correctOne?O:"white":"white",label:e.name},e.name):void 0:Object(C.jsx)(k,{onClick:L,index:n,color:B(n),label:e.name},e.name)}(e,n)})),Object(C.jsx)(M,{score:h,total:x}),Object(C.jsx)(w,{callback:function(){t.resetCallback(),u(!1)},guessCasted:i})]})},k=function(t){return Object(C.jsx)("button",{id:"countryButton",onClick:function(){return t.onClick(t.index)},style:{backgroundColor:t.color},children:t.label})},y=function(t){return Object(C.jsx)("button",{id:"countryButton",style:{backgroundColor:t.color},children:t.label})},w=function(t){return Object(C.jsx)("button",{id:t.guessCasted?"nextButton":"nextButtonUnclickable",onClick:t.guessCasted?t.callback:null,children:"Next"})},S=function(t){return Object(C.jsxs)("p",{id:"titleText",children:["The country with population of ",Object(C.jsx)("br",{})," ",Object(C.jsx)("strong",{style:{fontSize:"33px"},children:t.population})," is:"]})},M=function(t){return Object(C.jsxs)("div",{id:"scoreDisplay",children:["Score: ",t.score," / ",t.total]})},L=function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(t){var r;Object(l.a)(this,n),(r=e.call(this,t)).resetRandomCountryList=Object(u.a)(i.a.mark((function t(){var e,n,o,c,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e=[0,0,0,0];m(e);)for(n=0;n<e.length;n++)e[n]=Math.floor(200*Math.random());e=e.map((function(t){return{name:r.jsonWithCounties[t].name,code:r.jsonWithCounties[t].code,population:0}})),o=i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e[n].code,(function(t){e[n].population=t}));case 2:case"end":return t.stop()}}),t)})),c=0;case 5:if(!(c<e.length)){t.next=10;break}return t.delegateYield(o(c),"t0",7);case 7:c++,t.next=5;break;case 10:a=Math.floor(4*Math.random()),r.setState({randomCountries:e,correctOne:a});case 12:case"end":return t.stop()}}),t)})));for(var o=[0,0,0,0],c=0;c<o.length;c++)o[c]=Math.floor(200*Math.random());var a=Math.floor(4*Math.random());return r.state={randomCountries:o,correctOne:a,loaded:!1},r.jsonWithCounties=0,r.resetRandomCountryList=r.resetRandomCountryList.bind(Object(h.a)(r)),r.allGuesses=0,r.correctGuesses=0,r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("countryList.json");case 2:return e=t.sent,t.next=5,e.json();case 5:this.jsonWithCounties=t.sent,this.resetRandomCountryList();case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(C.jsx)("div",{children:Object(C.jsx)(g,{resetCallback:this.resetRandomCountryList,countries:this.state.randomCountries,correctOne:this.state.correctOne})})}}]),n}(o.a.Component);var B=function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:"background-image"}),Object(C.jsx)("div",{className:"content",children:Object(C.jsx)(L,{})})]})},T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),r(t),o(t),c(t),a(t)}))};a.a.render(Object(C.jsx)(o.a.StrictMode,{children:Object(C.jsx)(B,{})}),document.getElementById("root")),T()}},[[20,1,2]]]);
//# sourceMappingURL=main.c36f1d0b.chunk.js.map