(this.webpackJsonpevents_state_layouts=this.webpackJsonpevents_state_layouts||[]).push([[0],{12:function(t,e,c){},13:function(t,e,c){},14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var r=c(1),n=c.n(r),s=c(7),i=c.n(s),o=(c(12),c(13),c(14),[{name:"Nike Metcon 2",price:"130",color:"red",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"},{name:"Nike Metcon 2",price:"130",color:"green",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"},{name:"Nike Metcon 2",price:"130",color:"blue",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"},{name:"Nike Metcon 2",price:"130",color:"black",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"},{name:"Nike free run",price:"170",color:"black",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"},{name:"Nike Metcon 3",price:"150",color:"green",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"}]),a={xs:12,sm:8,md:6,lg:4},h=c(2),l=c(3),m=c(5),u=c(4),j=c(0),p=function(t){Object(m.a)(c,t);var e=Object(u.a)(c);function c(t){var r;return Object(h.a)(this,c),(r=e.call(this,t)).state={prev:1,current:1},r}return Object(l.a)(c,[{key:"switcher",value:function(){this.setState((function(t){return{prev:t.current,current:1==t.current?0:1}}))}},{key:"render",value:function(){return Object(j.jsx)(b,{layout:this.props.layout,products:this.props.products,switcher:this.switcher.bind(this),state:this.state})}}]),c}(n.a.Component),b=function(t){Object(m.a)(c,t);var e=Object(u.a)(c);function c(t){return Object(h.a)(this,c),e.call(this,t)}return Object(l.a)(c,[{key:"render",value:function(){var t=0;return 1==this.props.state.current?Object(j.jsxs)("div",{className:"store-box",children:[this.props.products.map((function(e){return Object(j.jsx)(v,{item:e},t++)})),Object(j.jsx)(d,{switcher:this.props.switcher,state:this.props.state})]}):Object(j.jsxs)("div",{className:"store-line-box",children:[this.props.products.map((function(e){return Object(j.jsx)(g,{item:e},t++)})),Object(j.jsx)(d,{switcher:this.props.switcher,state:this.props.state})]})}}]),c}(n.a.Component),d=function(t){Object(m.a)(c,t);var e=Object(u.a)(c);function c(t){return Object(h.a)(this,c),e.call(this,t)}return Object(l.a)(c,[{key:"handleClick",value:function(){this.props.switcher()}},{key:"render",value:function(){var t=this;return 1==this.props.state.current?Object(j.jsx)("div",{className:"switch-icon",onClick:function(){return t.handleClick()},children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[Object(j.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(j.jsx)("path",{d:"M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"})]})}):Object(j.jsx)("div",{className:"switch-icon",onClick:function(e){return t.handleClick(e)},children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[Object(j.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(j.jsx)("path",{d:"M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"})]})})}}]),c}(n.a.Component),v=function(t){Object(m.a)(c,t);var e=Object(u.a)(c);function c(t){var r;return Object(h.a)(this,c),(r=e.call(this,t)).name=t.item.name,r.price=t.item.price,r.color=t.item.color,r.img=t.item.img,r}return Object(l.a)(c,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"item-container",children:[Object(j.jsx)("h1",{children:this.name}),Object(j.jsx)("h3",{children:this.color}),Object(j.jsx)("img",{src:this.img,alt:"Cannot find ".concat(this.img)}),Object(j.jsxs)("div",{className:"item-bottom",children:[Object(j.jsx)("div",{className:"price",children:Intl.NumberFormat("en-US",{style:"currency",currency:"USD",currencyDisplay:"symbol"}).format(this.price.toString())}),Object(j.jsx)("button",{className:"add-button",children:"Add to card"})]})]})}}]),c}(n.a.Component),g=function(t){Object(m.a)(c,t);var e=Object(u.a)(c);function c(t){var r;return Object(h.a)(this,c),(r=e.call(this,t)).name=t.item.name,r.price=t.item.price,r.color=t.item.color,r.img=t.item.img,r}return Object(l.a)(c,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"item-line",children:[Object(j.jsx)("img",{src:this.img,alt:"Cannot find ".concat(this.img)}),Object(j.jsx)("h1",{children:this.name}),Object(j.jsx)("h3",{children:this.color}),Object(j.jsx)("div",{className:"price",children:Intl.NumberFormat("en-US",{style:"currency",currency:"USD",currencyDisplay:"symbol"}).format(this.price.toString())}),Object(j.jsx)("button",{className:"add-button",children:"Add to card"})]})}}]),c}(n.a.Component);function O(){return Object(j.jsx)(p,{layout:a,products:o})}i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f86baeeb.chunk.js.map