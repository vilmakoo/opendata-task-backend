(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(t,e,a){},178:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(68),s=a.n(o),c=a(13),i=(a(84),a(7)),u=a.n(i),p=a(15),l=a(35),d=a(36),f=a(38),m=a(37),h=a(39),E=a(71),b=a.n(E),v=a(72),y=a.n(v),T=a(73),O=a.n(T),w=a(17),x=a.n(w),_=a(75),j=a(21),P=a(46),g=a.n(P),N={dataPoints:[],fetchTime:null,error:null},S=function(t){return function(){var e=Object(p.a)(u.a.mark(function e(a){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a({type:"SET_ERROR",error:t}),setTimeout(function(){a({type:"SET_ERROR",error:null})},4e3);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_ALL_DATA_POINTS":return Object(j.a)({},t,{dataPoints:e.dataPoints});case"SET_NEW_DATA_POINT":return Object(j.a)({},t,{dataPoints:[].concat(Object(_.a)(t.dataPoints),[e.dataPoints])});case"SET_ERROR":return Object(j.a)({},t,{error:e.error});case"SET_FETCH_TIME":return Object(j.a)({},t,{fetchTime:new Date});default:return t}},A=a(70),D=a.n(A),I=function(t){if(!t)return"";var e=t.getUTCDate(),a=t.getMonth()+1,n=t.getFullYear(),r=("0"+t.getHours()).slice(-2),o=("0"+t.getMinutes()).slice(-2);return"".concat(e,".").concat(a,".").concat(n," ").concat(r,":").concat(o)},R=function(t){function e(){return Object(l.a)(this,e),Object(f.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t={yaxis:{seriesName:"dataPoints",axisTicks:{show:!0},axisBorder:{show:!0,color:"#662E9B"},labels:{style:{color:"#662E9B"}},tooltip:{enabled:!0}},xaxis:{axisTicks:{show:!1},tickPlacement:"on",labels:{formatter:function(t){return"number"===typeof t?t:I(new Date(t))}}},tooltip:{fixed:{enabled:!0,position:"topLeft",offsetY:30,offsetX:60}},legend:{position:"top",horizontalAlign:"left",offsetX:40,showForNullSeries:!1}},e=[{name:"Sensor 1",type:"line",data:this.props.sensor1?this.props.sensor1.map(function(t){return{x:t.date,y:t.data}}):[]},{name:"Sensor 2",type:"line",data:this.props.sensor2?this.props.sensor2.map(function(t){return{x:t.date,y:t.data}}):[]},{name:"Sensor 3",type:"line",data:this.props.sensor3?this.props.sensor3.map(function(t){return{x:t.date,y:t.data}}):[]},{name:"Sensor 4",type:"line",data:this.props.sensor4?this.props.sensor4.map(function(t){return{x:t.date,y:t.data}}):[]}];return r.a.createElement("div",null,r.a.createElement(D.a,{className:"chart",options:t,series:e,type:"line",width:"700px"}))}}]),e}(n.Component),C=Object(c.b)(function(t){return{sensor1:t.data.dataPoints.map(function(t){return{date:t.date,data:t.sensor1}}),sensor2:t.data.dataPoints.map(function(t){return{date:t.date,data:t.sensor2}}),sensor3:t.data.dataPoints.map(function(t){return{date:t.date,data:t.sensor3}}),sensor4:t.data.dataPoints.map(function(t){return{date:t.date,data:t.sensor4}})}})(R),B=function(t){function e(){return Object(l.a)(this,e),Object(f.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=Object(p.a)(u.a.mark(function t(){var e=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.getAllDataPoints();case 2:setInterval(function(){console.log("fetching new data at",new Date),e.props.fetchNewData()},36e5);case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(x.a,{variant:"h1",color:"primary",gutterBottom:!0},"Data visualization"),r.a.createElement(x.a,{variant:"h4",paragraph:!0,color:"textPrimary"},"This is an app that fetches a new data point",r.a.createElement("br",null),"from a given API every hour",r.a.createElement("br",null),"and visualizes the data in a chart."),r.a.createElement("div",{className:"chart-container"},r.a.createElement(x.a,{variant:"h2",color:"primary",gutterBottom:!0},"The Chart"),r.a.createElement("div",{className:"fetch-time"},r.a.createElement(x.a,{paragraph:!0,className:"fetch-time-p",color:"textPrimary"},"Last data point was fetched at:"),r.a.createElement(y.a,{className:"fetch-time-card"},r.a.createElement(O.a,{className:"fetch-time-content"},r.a.createElement(x.a,{variant:"subtitle2",color:"textPrimary"},I(this.props.fetchTime)))))),r.a.createElement(C,null))))}}]),e}(n.Component),F={fetchNewData:function(){return function(){var t=Object(p.a)(u.a.mark(function t(e){var a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get("/api/fetch_new_data");case 3:if(a=t.sent,e({type:"SET_FETCH_TIME"}),"data point already saved"!==a.data){t.next=8;break}return S("data point already saved"),t.abrupt("return");case 8:e({type:"SET_NEW_DATA_POINT",dataPoints:a.data.data}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),S(t.t0);case 14:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()},getAllDataPoints:function(){return function(){var t=Object(p.a)(u.a.mark(function t(e){var a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get("/api/get_data_points");case 3:a=t.sent,e({type:"SET_FETCH_TIME"}),e({type:"SET_ALL_DATA_POINTS",dataPoints:a.data.map(function(t){return t.data})}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),S(t.t0);case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()}},L=Object(c.b)(function(t){return{fetchTime:t.data.fetchTime}},F)(B),M=a(14),H=a(74),z=Object(M.c)({data:k}),J=Object(M.d)(z,Object(M.a)(H.a)),W=(a(177),function(){s.a.render(r.a.createElement(c.a,{store:J},r.a.createElement(L,null)),document.getElementById("root"))});W(),J.subscribe(W)},76:function(t,e,a){t.exports=a(178)}},[[76,1,2]]]);
//# sourceMappingURL=main.3e050a78.chunk.js.map