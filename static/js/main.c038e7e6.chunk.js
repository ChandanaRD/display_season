(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(3),r=a(6),i=a(4),o=a(7),c=a(0),l=a.n(c),m=a(5),u=a.n(m),d=(a(14),{summer:{text:"Summer time = Mango time!",iconName:"sun"},winter:{text:"Winter time = bed time!",iconName:"snowflake"}}),g=function(e){var t,a,n=(t=e.lat,(a=(new Date).getMonth())>2&&a<9?t>0?"summer":"winter":t>0?"winter":"summer"),s=d[n],r=s.text,i=s.iconName;return l.a.createElement("div",{className:"season-display ".concat(n)},l.a.createElement("i",{className:"icon massive ".concat(i," icon-left")}),l.a.createElement("h1",null,r),l.a.createElement("i",{className:"icon massive ".concat(i," icon-right")}))},h=function(e){return l.a.createElement("div",{className:"ui active inverted dimmer"},l.a.createElement("div",{className:"ui text loader"},e.msg))};h.defaultProps={msg:"Loading..."};var v=h,f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={lat:null,errorMessage:""},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition(function(t){e.setState({lat:t.coords.latitude})},function(t){e.setState({errorMessage:t.message})})}},{key:"render",value:function(){return this.state.lat&&!this.state.errorMessage?(console.log("latitude:".concat(this.state.lat)),l.a.createElement(g,{lat:this.state.lat})):!this.state.lat&&this.state.errorMessage?l.a.createElement("div",null,"err: ",this.state.errorMessage):this.state.lat||this.state.errorMessage?void 0:l.a.createElement(v,{msg:"Please accept the location request ..."})}}]),t}(l.a.Component);u.a.render(l.a.createElement(f,null),document.querySelector("#root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.c038e7e6.chunk.js.map