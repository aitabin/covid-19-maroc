webpackJsonp([1],{"/9O7":function(t,s,e){"use strict";var a={extends:e("UlOv").a,data:function(){return{datacollection:{labels:["الوفيات","المرضى","المتعافون"],datasets:[{data:[213,791,7993],backgroundColor:["rgba(255, 0, 0, 1.0)","rgba(0, 128, 225, 1.0)","#008000"],borderColor:["rgba(255, 0, 0, 1.0)","rgba(0, 128, 225, 1.0)","#008000"],borderWidth:1}]},options:{datasets:{bar:{categoryPercentage:.3,barPercentage:.6}},elements:{line:{fill:!1},point:{radius:0}},tooltips:{mode:"index",intersect:!1},hover:{bodyalign:"right",mode:"nearest",intersect:!0},scales:{yAxes:[{display:!0,stacked:!0,scaleLabel:{display:!0,labelString:"العدد الاجمالي"},gridLines:{display:!0}}],xAxes:[{display:!0,stacked:!0,scaleLabel:{display:!1,labelString:"التاريخ"},gridLines:{display:!1}}]},legend:{display:!1},responsive:!0,maintainAspectRatio:!1,layout:{padding:{left:6,right:6,top:4,bottom:6}}}}},mounted:function(){this.renderChart(this.datacollection,this.options)}},n=e("VU/8")(a,null,!1,null,null,null);s.a=n.exports},"5/9N":function(t,s){},"65fd":function(t,s,e){"use strict";var a=e("vwbq"),n=e("KZx+"),i=e("vHc0"),r={mounted:function(){var t=a.map(),s=a.scaleLinear().domain([0,250]).range(["#66ff66","#ff6666"]),e=a.select("body").append("div").attr("class","tooltip").style("opacity",0),r=a.geoMercator().center([-7.0926,31.7917]).scale(1400).translate([450,160]),l=a.select("#provinces").append("svg").attr("preserveAspectRatio","xMidYMid").attr("viewBox","0 0 900 500").append("g").attr("transform","translate(30,30)"),o=a.geoPath().projection(r);a.queue().defer(a.json,"static/data/provinces.json").defer(a.csv,"static/data/provinces.csv",function(s){t.set(s.NAME,+s.confiremed)}).await(function(n,r,c){console.log(r),r=i.feature(r,r.objects.provinces);l.append("g").attr("class","province").selectAll("path").data(r.features).enter().append("path").style("fill",function(e){return e.total=t.get(e.properties.NAME)||0,s(e.total)}).attr("d",o).attr("class","province-border").attr("d",o).style("stroke","gray").attr("class",function(t){return"Province"}).style("opacity",.8).on("mouseover",function(t){a.select(this).transition().duration(200).style("opacity",1),e.transition().style("opacity",1),e.html("اقليم <strong>"+t.properties.NAME+"</strong></br>  عدد المرضى:"+t.total+'</br><hr style="height:2px;border-width:0;color:gray;background-color:gray">  عن كل 10 الاف نسمة هناك: %'+function(t){return(t.total/1e4*100).toPrecision(2)}(t)+" مريض</br>عدد السكان: "+t.properties.pop_total_+"نسمة").style("left",a.event.pageX+"px").style("top",a.event.pageY-28+"px")}).on("mouseleave",function(t){a.select(this).transition().style("opacity",.8),e.transition().duration(500).style("opacity",0)})}),(l=a.select("svg")).append("g").attr("class","legendLinear").attr("transform","translate(30,60)");var c=n.legendColor().shapeWidth(30).labels(["0","125","250"]).cells(3).labelWrap(30).shape("circle").shapeWidth(40).labelAlign("start").shapePadding(10).labelOffset(40).orient("vertical").scale(s);l.select(".legendLinear").call(c)}},l={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"provinces",width:"500",height:"450"}})},staticRenderFns:[]};var o=e("VU/8")(r,l,!1,function(t){e("6vJb")},null,null);s.a=o.exports},"6vJb":function(t,s){},"7LNO":function(t,s){},Fs8J:function(t,s,e){"use strict";(function(t){var a=e("bwGm"),n=e("q7B/"),i=e("/9O7"),r=e("UUJ7"),l=e("fiKH"),o=e("xmNA"),c=e("SgVR"),d=e("yM2i"),u=e("65fd"),v=e("RlwG");s.a={name:"Home",components:{Navigation:a.default,DailyChart:l.a,DailyBarChart:o.a,RegionsChart:n.a,CurrentStateChart:i.a,CompareChart:r.a,InstantChart:c.default,CasesChart:d.a,ProvinceMap:u.a,RegionMap:v.a}},t(document).ready(function(){t(".navbar-burger").click(function(){t(".navbar-burger").toggleClass("is-active"),t(".navbar-menu").toggleClass("is-active")})})}).call(s,e("7t+N"))},JLbU:function(t,s,e){"use strict";(function(t){var a=e("bwGm"),n=e("RlwG");s.a={name:"VueRegionMap",components:{Navigation:a.default,RegionMap:n.a}},t(document).ready(function(){t(".navbar-burger").click(function(){t(".navbar-burger").toggleClass("is-active"),t(".navbar-menu").toggleClass("is-active")})})}).call(s,e("7t+N"))},MQeT:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var i=e("VU/8")({name:"App"},n,!1,function(t){e("gsu9")},null,null).exports,r=e("/ocq"),l=e("Fs8J"),o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"hero is-light is-medium"},[e("div",{staticClass:"hero-head"},[e("Navigation"),t._v(" "),e("instant-chart"),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"fb-share-button",staticStyle:{},attrs:{"data-href":"https://aitabin.github.io/covid-19-maroc/index.html","data-layout":"button_count"}})],1),t._v(" "),e("div",{staticClass:"hero-body"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("p",{staticClass:"subtitle"},[t._v("\n            مبيان تراكمي لتطور الحالة الوبائية\n            ")]),t._v(" "),e("daily-chart")],1),t._v(" "),e("div",{staticClass:"column"},[e("p",{staticClass:"subtitle"},[t._v("\n            مبيان يومي لتطور الحالة الوبائية\n            ")]),t._v(" "),e("daily-bar-chart")],1)]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("p",{staticClass:"subtitle"},[t._v("\n            مبيان تراكمي لنسب الحالات المؤكدة حسب جهات المغرب\n            ")]),t._v(" "),e("regions-chart")],1),t._v(" "),e("div",{staticClass:"column"},[e("p",{staticClass:"subtitle"},[t._v("\n            مبيان تراكمي لتطور الحالة الوبائية حسب الاشهر\n            ")]),t._v(" "),e("compare-chart")],1)]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("p",{staticClass:"subtitle"},[t._v("\n            مبيان تراكمي لعدد المتعافين, المرضى و المتوفين\n            ")]),t._v(" "),e("current-state-chart")],1),t._v(" "),e("div",{staticClass:"column"},[e("p",{staticClass:"subtitle"},[t._v("\n             الحالة الوبائية باقاليم المغرب\n            ")]),t._v(" "),e("province-map")],1)])]),t._v(" "),t._m(1),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"container has-text-centered"},[s("p",{staticClass:"title has-text-info"},[this._v("\n        الحالة الوبائية بالمغرب\n      ")]),this._v(" "),s("p",{staticClass:"subtitle"},[this._v("\n      بعض المبيانات التراكمية و اليومية + الخريطة الاقليمية للحالة الوبائية بالمغرب\n      ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("p",{staticClass:"subtitle"}),this._v(" "),s("div",{staticClass:"notification is-danger"},[this._v("\n            تهيب وزارة الصحة بالمواطنات والمواطنين الالتزام بقواعد النظافة والسلامة الصحية،\n             والانخراط في التدابير الاحترازية التي اتخذتها السلطات المغربية بكل مسؤولية\n            ")])]),this._v(" "),s("div",{staticClass:"column"},[s("p",{staticClass:"subtitle"}),this._v(" "),s("div",{staticClass:"notification is-info"},[s("ul",[s("li",[this._v("الرقم الاقتصادي ألو اليقضة: 47 100 080")]),this._v(" "),s("li",[this._v("الو 141 للمساعدة الطبية الاستعجالية")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"content has-text-centered"},[s("p",[s("strong",[this._v("Ingissa")]),this._v(" by "),s("a",{attrs:{href:"#"}},[this._v("Aitabin")]),this._v(". The source code is licensed\n      "),s("a",{attrs:{href:"#"}},[this._v("BSD 2-Clause License")]),this._v(". The application content\n      is licensed "),s("a",{attrs:{href:"#"}}),this._v(".\n    ")])])])}]};var c=function(t){e("5/9N")},d=e("VU/8")(l.a,o,!1,c,"data-v-1611142c",null).exports,u=e("JLbU"),v={render:function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"hero is-light is-medium"},[s("div",{staticClass:"hero-head"},[s("Navigation")],1),this._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("h3",[this._v("الحالة الوبائية لفيروس كورونا بجهات المغرب")]),this._v(" "),s("region-map")],1)])])},staticRenderFns:[]},p=e("VU/8")(u.a,v,!1,null,null,null).exports,g=e("RPOs"),h={render:function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"hero is-light is-medium"},[s("div",{staticClass:"hero-head"},[s("Navigation")],1),this._v(" "),s("div",{staticClass:"columns is-desktop"},[s("div",{staticClass:"column"},[s("p",{staticClass:"subtitle"},[this._v("\n        الحالة الوبائية لفيروس كورونا باقاليم المغرب\n        ")]),this._v(" "),s("province-map")],1)])])},staticRenderFns:[]},b=e("VU/8")(g.a,h,!1,null,null,null).exports;a.a.use(r.a);var f=new r.a({routes:[{path:"/",name:"Home",component:d},{path:"/regions",name:"VueRegionMap",component:p},{path:"/provinces",name:"VueProvinceMap",component:b}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:f,components:{App:i},template:"<App/>"})},RPOs:function(t,s,e){"use strict";(function(t){var a=e("bwGm"),n=e("65fd");s.a={name:"VueProvinceMap",components:{Navigation:a.default,ProvinceMap:n.a}},t(document).ready(function(){t(".navbar-burger").click(function(){t(".navbar-burger").toggleClass("is-active"),t(".navbar-menu").toggleClass("is-active")})})}).call(s,e("7t+N"))},RlwG:function(t,s,e){"use strict";var a=e("vwbq"),n=e("KZx+"),i=e("vHc0"),r={mounted:function(){var t=a.map(),s=a.scaleLinear().domain([0,3e3]).range(["#ffffff","#ff0000"]),e=a.select("body").append("div").attr("class","tooltip").style("opacity",0),r=a.geoMercator().center([-7.0926,31.7917]).scale(1400).translate([450,160]),l=a.select("#regions").append("svg").attr("preserveAspectRatio","xMidYMid").attr("viewBox","0 0 900 500").append("g").attr("transform","translate(30,30)"),o=a.geoPath().projection(r);a.queue().defer(a.json,"static/data/regions.json").defer(a.csv,"static/data/regions.csv",function(s){t.set(s.code,(+s.taux/100*8692).toFixed(0))}).await(function(n,r,c){var d=i.feature(r,r.objects.regions);l.append("g").attr("class","region").selectAll("path").data(d.features).enter().append("path").style("fill",function(e){return e.total=t.get(e.properties.code)||0,s(e.total)}).attr("d",o).attr("class","region-border").attr("d",o).style("stroke","gray").attr("class",function(t){return"Region"}).style("opacity",.8).on("mouseover",function(t){a.select(this).transition().duration(200).style("opacity",1),e.transition().style("opacity",1),e.html("<strong>"+t.properties.name+"</strong></br>  عدد الحالات:"+t.total+'</br><hr style="height:2px;border-width:0;color:gray;background-color:gray">نسبة الاصابات عن كل 10 الاف نسمة: %'+function(t){return(t.total/1e4*100).toPrecision(2)}(t)).style("left",a.event.pageX+"px").style("top",a.event.pageY-28+"px")}).on("mouseleave",function(t){a.select(this).transition().style("opacity",.8),e.transition().duration(500).style("opacity",0)})}),(l=a.select("svg")).append("g").attr("class","legendLinear").attr("transform","translate(30,60)");var c=n.legendColor().shapeWidth(30).labels(["0","600","1200","1800","2400","3000"]).cells(6).labelWrap(20).shape("circle").shapeWidth(20).labelAlign("start").shapePadding(5).labelOffset(40).orient("vertical").scale(s);l.select(".legendLinear").call(c)}},l={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"regions",width:"600",height:"500"}})},staticRenderFns:[]};var o=e("VU/8")(r,l,!1,function(t){e("dJw4")},null,null);s.a=o.exports},SgVR:function(t,s,e){"use strict";var a=e("MQeT"),n=e.n(a),i=e("wkLS");var r=function(t){e("7LNO")},l=e("VU/8")(n.a,i.a,!1,r,null,null);s.default=l.exports},UUJ7:function(t,s,e){"use strict";var a={extends:e("UlOv").a,data:function(){return{datacollection:{labels:["مارس","ابريل","ماي","يونيو"],datasets:[{label:"الحالات المستبعدة",backgroundColor:"#FA944B",data:[2462,27956,123370,264407]},{label:"الحالات المؤكدة",backgroundColor:"#0000ff",data:[617,3806,3154,1100]}]},options:{datasets:{bar:{categoryPercentage:.3,barPercentage:.7}},layout:{padding:{left:6,right:6,top:4,bottom:6}},tooltips:{displayColors:!0,callbacks:{mode:"x"}},scales:{xAxes:[{display:!1,stacked:!0,scaleLabel:{display:!1,labelString:"الاشهر"},gridLines:{display:!1}}],yAxes:[{display:!0,stacked:!0,scaleLabel:{display:!0,labelString:"عدد الحالات المؤكدة او المستبعدة"},gridLines:{display:!0}}]},legend:{display:!0},responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.renderChart(this.datacollection,this.options)}},n=e("VU/8")(a,null,!1,null,null,null);s.a=n.exports},"bVQ/":function(t,s,e){(function(t){t(document).ready(function(){t(".navbar-burger").click(function(){t(".navbar-burger").toggleClass("is-active"),t(".navbar-menu").toggleClass("is-active")})})}).call(s,e("7t+N"))},bwGm:function(t,s,e){"use strict";var a=e("bVQ/"),n=e.n(a),i=e("wcvj"),r=e("VU/8")(n.a,i.a,!1,null,null,null);s.default=r.exports},dJw4:function(t,s){},fiKH:function(t,s,e){"use strict";var a={extends:e("UlOv").b,data:function(){return{datacollection:{labels:["02/مارس","03/مارس","04/مارس","05/مارس","06/مارس","07/مارس","08/مارس","09/مارس","10/مارس","11/مارس","12/مارس","13/مارس","14/مارس","15/مارس","16/مارس","17/مارس","18/مارس","19/مارس","20/مارس","21/مارس","22/مارس","23/مارس","24/مارس","25/مارس","26/مارس","27/مارس","28/مارس","29/مارس","30/مارس","31/مارس","01/ابريل","02/ابريل","03/ابريل","04/ابريل","05/ابريل","06/ابريل","07/ابريل","08/ابريل","09/ابريل","10/ابريل","11/ابريل","12/ابريل","13/ابريل","14/ابريل","15/ابريل","16/ابريل","17/ابريل","18/ابريل","19/ابريل","20/ابريل","21/ابريل","22/ابريل","23/ابريل","24/ابريل","25/ابريل","26/ابريل","27/ابريل","28/ابريل","29/ابريل","30/ابريل","01/ماي","02/ماي","03/ماي","04/ماي","05/ماي","06/ماي","07/ماي","08/ماي","09/ماي","10/ماي","11/ماي","12/ماي","13/ماي","14/ماي","15/ماي","16/ماي","17/ماي","18/ماي","19/ماي","20/ماي","21/ماي","22/ماي","23/ماي","24/ماي","25/ماي","26/ماي","27/ماي","28/ماي","29/ماي","30/ماي","31/ماي","01/يونيو","02/يونيو","03/يونيو","04/يونيو","05/يونيو","06/يونيو","07/يونيو","08/يونيو","09/يونيو","10/يونيو","11/يونيو","12/يونيو","13/يونيو","14/يونيو","15/يونيو","16/يونيو","17/يونيو"],datasets:[{data:[1,1,2,3,3,3,3,3,3,3,3,7,17,28,37,44,54,63,79,96,115,143,170,225,275,345,402,479,556,617,654,708,791,919,1021,1120,1184,1275,1374,1448,1545,1661,1763,1888,2024,2283,2564,2670,2855,3046,3209,3446,3568,3758,3897,4065,4120,4252,4321,4423,4569,4729,4903,5053,5219,5408,5548,5711,5910,6063,6281,6418,6512,6607,6652,6741,6870,6952,7023,7133,7211,7332,7406,7433,7532,7577,7601,7643,7714,7780,7807,7833,7866,7922,8030,8071,8151,8224,8302,8437,8508,8537,8610,8692,8793,8885,8931,8997],label:"حالات مؤكدة",backgroundColor:"blue",borderColor:"blue",borderWidth:3,pointBorderColor:"blue",fill:!1},{data:[1,1,2,2,2,2,2,3,2,5,5,6,16,26,35,41,51,59,74,90,108,134,159,212,257,311,365,440,508,557,586,633,686,794,875,959,1001,1085,1168,1219,1288,1366,1434,1545,1668,1904,2148,2234,2387,2553,2671,2880,2957,3114,3201,3311,3263,3309,3225,3269,3315,3300,3291,3221,3200,3208,3186,3201,3263,3321,3282,3239,3193,3107,3062,3062,3018,3002,2929,2841,2735,2758,2570,2531,2558,2494,2421,2246,2241,2175,2143,1735,1250,850,600,607,595,628,652,686,734,743,780,784,816,845,782,791],label:"حالات تتلقى العلاج",borderColor:"orange",borderWidth:3,pointBackgroundColor:"orange",fill:!1},{data:[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,2,3,3,5,6,7,8,11,12,13,15,24,29,31,57,66,76,81,93,97,109,122,146,177,203,217,229,249,281,314,327,350,393,417,456,486,537,593,695,778,928,984,1083,1256,1438,1653,1838,2017,2179,2324,2461,2554,2811,2991,3131,3310,3400,3487,3660,3758,3901,4098,4280,4377,4638,4703,4774,4881,4978,5195,5271,5401,5459,5893,6410,6866,7195,7268,7315,7364,7408,7493,7565,7583,7618,7696,7765,7828,7937,7993],label:"المتعافون",lineTension:0,backgroundColor:"transparent",borderColor:"green",borderWidth:3,pointBackgroundColor:"green",fill:!1},{data:[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,3,3,4,4,5,6,10,23,25,26,33,26,39,44,48,59,70,80,90,93,97,107,111,118,126,126,127,130,135,137,141,143,145,149,155,158,159,161,162,165,168,170,171,173,174,179,181,183,183,186,186,188,188,188,188,190,190,192,192,192,193,194,196,197,198,199,200,202,202,202,202,204,205,205,206,206,208,208,208,208,208,210,211,211,212,212,212,212,212,213],label:"الوفيات",lineTension:0,borderColor:"red",borderWidth:3,pointBackgroundColor:"red",fill:!1}]},options:{elements:{line:{fill:!1},point:{radius:0}},tooltips:{mode:"index",intersect:!1},hover:{bodyalign:"right",mode:"nearest",intersect:!0},scales:{yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"عدد الحالات"},gridLines:{display:!0}}],xAxes:[{display:!0,scaleLabel:{display:!1,labelString:"التاريخ"},gridLines:{display:!1}}]},legend:{display:!1},responsive:!0,maintainAspectRatio:!1,layout:{padding:{left:6,right:6,top:4,bottom:6}}}}},mounted:function(){this.renderChart(this.datacollection,this.options)}},n=e("VU/8")(a,null,!1,null,null,null);s.a=n.exports},gsu9:function(t,s){},"q7B/":function(t,s,e){"use strict";var a={extends:e("UlOv").a,data:function(){return{datacollection:{labels:["بني ملال-خنيفرة","البيضاء-سطات","درعة-تافيلالت","الداخلة-وادالذهب","فاس-مكناس","كلميم-واد نون","العيون-الساقيةالحمراء","مراكش-اسفي","الشرق","الرباط-سلا-القنيطرة","سوس-ماسة","طنجة-تطوان-الحسيمة"],datasets:[{backgroundColor:"blue",borderWidth:1,data:[1.43,32.74,6.51,.06,11.82,.53,.07,18.34,2.21,9.97,1,15.32]}]},options:{datasets:{bar:{categoryPercentage:.6,barPercentage:1}},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},legend:{display:!1},scales:{layout:{padding:{left:6,right:6,top:4,bottom:6}},xAxes:[{display:!1,scaleLabel:{display:!0,labelString:"الجهات"},gridLines:{display:!1}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"عدد الحالات المؤكدة (%)"},gridLines:{display:!0}}]},responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.renderChart(this.datacollection,this.options)}},n=e("VU/8")(a,null,!1,null,null,null);s.a=n.exports},uslO:function(t,s,e){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-in":"yJfC","./en-in.js":"yJfC","./en-nz":"dyB6","./en-nz.js":"dyB6","./en-sg":"NYST","./en-sg.js":"NYST","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fil":"rMbQ","./fil.js":"rMbQ","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-deva":"VGQH","./gom-deva.js":"VGQH","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./oc-lnc":"KOFO","./oc-lnc.js":"KOFO","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-mo":"+WA1","./zh-mo.js":"+WA1","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return e(i(t))}function i(t){var s=a[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="uslO"},wcvj:function(t,s,e){"use strict";var a={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[this._m(0),this._v(" "),s("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[s("div",{staticClass:"navbar-end"},[s("a",{staticClass:"navbar-item is-active"},[s("router-link",{attrs:{to:"/",exact:""}},[this._v("الرئيسية")])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"navbar-brand"},[s("a",{staticClass:"navbar-item",attrs:{href:"/"}},[this._v("\n        انغيسا\n      ")]),this._v(" "),s("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[s("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),s("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),s("span",{attrs:{"aria-hidden":"true"}})])])}]};s.a=a},wkLS:function(t,s,e){"use strict";var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"conteneur"},[e("div",{staticClass:"box"},[e("div",{staticClass:"container"},[e("span",[t._v("2.9%")]),t._v(" "),e("progress",{staticClass:"progress is-warning is-large",attrs:{value:"1.9",max:"100"}},[t._v("1.9%")]),t._v(" "),e("h2",{staticStyle:{color:"orange"}},[t._v("نسبة الاصابات الاجمالية")])])]),t._v(" "),e("div",{staticClass:"box"},[e("div",{staticClass:"container"},[e("span",[t._v("7.4%")]),t._v(" "),e("progress",{staticClass:"progress is-info is-large",attrs:{value:"8.7",max:"100"}},[t._v("8.7%")]),t._v(" "),e("h2",{staticStyle:{color:"blue"}},[t._v("نسبة المرضى تحت العلاج")])])]),t._v(" "),e("div",{staticClass:"box"},[e("div",{staticClass:"container"},[e("span",[t._v("89.6%")]),t._v(" "),e("progress",{staticClass:"progress is-success is-large",attrs:{value:"88.8",max:"100"}},[t._v("88.8%")]),t._v(" "),e("h2",{staticStyle:{color:"green"}},[t._v("نسبة المتعافين")])])]),t._v(" "),e("div",{staticClass:"box"},[e("div",{staticClass:"container"},[e("span",[t._v("2.5%")]),t._v(" "),e("progress",{staticClass:"progress is-danger is-large",attrs:{value:"2.3",max:"100"}},[t._v("2.3%")]),t._v(" "),e("h2",{staticStyle:{color:"red"}},[t._v("نسبة المتوفين")])])])])}]};s.a=a},xmNA:function(t,s,e){"use strict";var a={extends:e("UlOv").a,data:function(){return{datacollection:{labels:["02/مارس","03/مارس","04/مارس","05/مارس","06/مارس","07/مارس","08/مارس","09/مارس","10/مارس","11/مارس","12/مارس","13/مارس","14/مارس","15/مارس","16/مارس","17/مارس","18/مارس","19/مارس","20/مارس","21/مارس","22/مارس","23/مارس","24/مارس","25/مارس","26/مارس","27/مارس","28/مارس","29/مارس","30/مارس","31/مارس","01/ابريل","02/ابريل","03/ابريل","04/ابريل","05/ابريل","06/ابريل","07/ابريل","08/ابريل","09/ابريل","10/ابريل","11/ابريل","12/ابريل","13/ابريل","14/ابريل","15/ابريل","16/ابريل","17/ابريل","18/ابريل","19/ابريل","20/ابريل","21/ابريل","22/ابريل","23/ابريل","24/ابريل","25/ابريل","26/ابريل","27/ابريل","28/ابريل","29/ابريل","30/ابريل","01/ماي","02/ماي","03/ماي","04/ماي","05/ماي","06/ماي","07/ماي","08/ماي","09/ماي","10/ماي","11/ماي","12/ماي","13/ماي","14/ماي","15/ماي","16/ماي","17/ماي","18/ماي","19/ماي","20/ماي","21/ماي","22/ماي","23/ماي","24/ماي","25/ماي","26/ماي","27/ماي","28/ماي","29/ماي","30/ماي","31/ماي","01/يونيو","02/يونيو","03/يونيو","04/يونيو","05/يونيو","06/يونيو","07/يونيو","08/يونيو","09/يونيو","10/يونيو","11/يونيو","12/يونيو","13/يونيو","14/يونيو","15/يونيو","16/يونيو","17/يونيو"],datasets:[{label:"حالات مؤكدة",backgroundColor:"blue",borderWidth:3,pointBorderColor:"#249EBF",fill:!1,data:[1,0,1,1,0,0,0,0,0,0,0,4,10,11,9,7,10,9,16,17,19,28,27,55,50,70,57,77,77,61,37,54,83,128,101,99,64,91,99,74,97,116,102,125,136,259,281,106,185,191,163,237,122,190,139,168,55,132,69,102,146,160,174,150,166,189,140,163,199,153,218,137,94,95,45,89,129,82,71,110,78,121,74,27,99,45,24,42,71,66,27,26,33,56,81,27,80,73,78,135,71,29,73,82,101,92,46,66]},{data:[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,2,1,1,1,3,1,1,2,9,5,2,26,9,10,5,12,4,12,13,24,31,26,14,12,20,32,33,13,23,43,24,39,30,51,56,102,83,150,56,99,173,182,215,185,179,162,145,137,93,257,180,140,179,90,87,173,98,143,197,182,97,261,65,71,107,97,217,76,130,58,434,517,456,329,20,47,49,44,85,72,18,35,78,69,63,109,56],label:"المتعافون",lineTension:0,backgroundColor:"green",borderWidth:4,pointBackgroundColor:"green",fill:!1},{data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,4,13,2,1,7,3,3,5,4,11,11,10,10,3,4,10,4,7,8,0,1,3,5,2,4,2,2,4,6,3,1,2,1,3,3,2,1,2,1,5,2,0,3,0,2,0,0,0,0,2,0,2,0,0,1,1,2,1,1,1,1,2,0,0,0,2,1,0,1,0,2,0,0,0,0,2,1,0,1,0,0,0,0,1],label:"الوفيات",lineTension:0,backgroundColor:"red",borderWidth:4,pointBackgroundColor:"red",fill:!1}]},options:{datasets:{bar:{categoryPercentage:1,barPercentage:.9}},elements:{line:{fill:!1},point:{radius:0}},tooltips:{mode:"index",intersect:!1},hover:{bodyalign:"right",mode:"nearest",intersect:!0},scales:{yAxes:[{display:!0,stacked:!0,scaleLabel:{display:!0,labelString:"عدد الحالات"},gridLines:{display:!0}}],xAxes:[{display:!0,stacked:!0,scaleLabel:{display:!1,labelString:"التاريخ"},gridLines:{display:!1}}]},legend:{display:!1},responsive:!0,maintainAspectRatio:!1,layout:{padding:{left:6,right:6,top:4,bottom:6}}}}},mounted:function(){this.renderChart(this.datacollection,this.options)}},n=e("VU/8")(a,null,!1,null,null,null);s.a=n.exports},yM2i:function(t,s,e){"use strict";var a=e("VU/8")(null,null,!1,null,null,null);s.a=a.exports}},["NHnr"]);
//# sourceMappingURL=app.2e31c1fd52310384c733.js.map