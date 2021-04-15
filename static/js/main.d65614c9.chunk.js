(this["webpackJsonpguess-the-country"]=this["webpackJsonpguess-the-country"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),c=n(7),a=n.n(c),i=(n(16),n(1)),s=n.n(i),u=n(3),l=n(8),d=n(9),h=n(4),f=n(11),j=n(10),b=n(6),p="#95D575",O="#DE3C66",m=function(t){for(var e=0;e<t.length;e++)for(var n=0;n<t.length;n++)if(e!==n&&t[e]===t[n])return!0;return!1},x=function(){var t=Object(u.a)(s.a.mark((function t(e,n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.worldbank.org/v2/country/".concat(e,"/indicator/SP.POP.TOTL?format=json")).then((function(t){return t.json()})).then((function(t){n(t[1][1].value)}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();function v(t){if(!t)return 0;var e=t.toString();switch(e.length){case 9:return e.slice(0,3)+" million";case 8:return e.slice(0,2)+" million";case 7:return e.slice(0,1)+" million";case 6:return e.slice(0,3)+" thousand";case 5:return e.slice(0,2)+" thousand";case 4:return e.slice(0,1)+" thousand";case 3:return e.slice(0,2)+" thousand";default:return console.error("something went wrong"),"gotta add more cases to the switch statement"}}n(18);var C=n(0),g=function(t){return Object(C.jsxs)("p",{id:"titleText",children:["The country with population of ",Object(C.jsx)("br",{})," ",Object(C.jsx)("strong",{style:{fontSize:"33px"},children:t.population})," is:"]})},k=function(t){var e=Object(r.useState)(-1),n=Object(b.a)(e,2),o=n[0],c=n[1],a=Object(r.useState)(!1),i=Object(b.a)(a,2),s=i[0],u=i[1],l=function(t){u(!0),c(t)},d=function(e){if(s)return e===o&&e===t.correctOne?p:e===o?O:e===t.correctOne?p:"white"};return Object(C.jsxs)("div",{id:"mainCard",children:[Object(C.jsx)(g,{population:v(t.countries[t.correctOne].population)},"titleComponent"),t.countries.map((function(e,n){return function(e,n){return s?s?Object(C.jsx)(w,{color:s?n===o&&n===t.correctOne?p:n===o?O:n===t.correctOne?p:"white":"white",label:e.name},e.name):void 0:Object(C.jsx)(y,{onClick:l,index:n,color:d(n),label:e.name},e.name)}(e,n)})),Object(C.jsx)(M,{callback:function(){t.resetCallback(),u(!1)}})]})},y=function(t){return Object(C.jsx)("button",{id:"countryButton",onClick:function(){return t.onClick(t.index)},style:{backgroundColor:t.color},children:t.label})},w=function(t){return Object(C.jsx)("button",{id:"countryButton",style:{backgroundColor:t.color},children:t.label})},M=function(t){return Object(C.jsx)("button",{id:"nextButton",onClick:t.callback,children:"Next"})},L=function(t){Object(f.a)(n,t);var e=Object(j.a)(n);function n(t){var r;Object(l.a)(this,n),(r=e.call(this,t)).resetRandomCountryList=Object(u.a)(s.a.mark((function t(){var e,n,o,c,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e=[0,0,0,0];m(e);)for(n=0;n<e.length;n++)e[n]=Math.floor(200*Math.random());e=e.map((function(t){return{name:r.jsonWithCounties[t].name,code:r.jsonWithCounties[t].code,population:0}})),o=s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e[n].code,(function(t){e[n].population=t}));case 2:case"end":return t.stop()}}),t)})),c=0;case 5:if(!(c<e.length)){t.next=10;break}return t.delegateYield(o(c),"t0",7);case 7:c++,t.next=5;break;case 10:a=Math.floor(4*Math.random()),r.setState({randomCountries:e,correctOne:a});case 12:case"end":return t.stop()}}),t)})));for(var o=[0,0,0,0],c=0;c<o.length;c++)o[c]=Math.floor(200*Math.random());var a=Math.floor(4*Math.random());return r.state={randomCountries:o,correctOne:a,loaded:!1},r.jsonWithCounties=0,r.resetRandomCountryList=r.resetRandomCountryList.bind(Object(h.a)(r)),r.allGuesses=0,r.correctGuesses=0,r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=Object(u.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("countryList.json");case 2:return e=t.sent,t.next=5,e.json();case 5:this.jsonWithCounties=t.sent,this.resetRandomCountryList();case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(C.jsx)("div",{children:Object(C.jsx)(k,{resetCallback:this.resetRandomCountryList,countries:this.state.randomCountries,correctOne:this.state.correctOne})})}}]),n}(o.a.Component);var S=function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:"background-image"}),Object(C.jsx)("div",{className:"content",children:Object(C.jsx)(L,{})})]})},T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),r(t),o(t),c(t),a(t)}))};a.a.render(Object(C.jsx)(o.a.StrictMode,{children:Object(C.jsx)(S,{})}),document.getElementById("root")),T()}},[[20,1,2]]]);
//# sourceMappingURL=main.d65614c9.chunk.js.map