webpackJsonp([1],{"2GMb":function(t,e){},"93y7":function(t,e){},DdmT:function(t,e){},"HqR/":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},n,!1,function(t){s("gsu9")},null,null).exports,r=s("/ocq"),l=s("bwGm"),o=s("UlOv"),c={extends:o.a,data:function(){return{datacollection:{labels:["بني ملال-خنيفرة","البيضاء-سطات","درعة-تافيلالت","الداخلة-وادالذهب","فاس-مكناس","كلميم-واد نون","العيون-الساقيةالحمراء","مراكش-اسفي","الشرق","الرباط-سلا-القنيطرة","سوس-ماسة","طنجة-تطوان-الحسيمة"],datasets:[{backgroundColor:"blue",borderWidth:1,data:[1.04,25.79,2.84,.36,14.06,.72,3.77,15.81,1.9,10.38,.57,22.77]}]},options:{datasets:{bar:{categoryPercentage:.6,barPercentage:.6}},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},legend:{display:!1},scales:{layout:{padding:{left:6,right:6,top:4,bottom:6}},xAxes:[{display:!0,scaleLabel:{display:!1,labelString:"الجهات"},gridLines:{display:!1}}],yAxes:[{display:!0,position:"right",scaleLabel:{display:!0,labelString:"عدد الحالات المؤكدة (%)"},gridLines:{display:!0}}]},responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.renderChart(this.datacollection,this.options)}},d=s("VU/8")(c,null,!1,null,null,null).exports,u={extends:o.b,data:function(){return{datacollection:{labels:["الوفيات","المرضى","المتعافون"],datasets:[{data:[334,4754,17125],borderColor:["#f443368c","#2196f38c","#3f51b570"],backgroundColor:["#f443368c","#2c7fb88c","#2ca25f8c"],borderWidth:1}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{animateRotate:!0,animateScale:!0}}}},mounted:function(){this.renderChart(this.datacollection,this.options)}},p=s("VU/8")(u,null,!1,null,null,null).exports,v={extends:o.a,data:function(){return{datacollection:{labels:["مارس","ابريل","ماي","يونيو","يوليوز"],datasets:[{label:"الحالات المستبعدة",backgroundColor:"#d8b365",data:[2462,27956,150127,488113,534996]},{label:"الحالات المؤكدة",backgroundColor:"#0000ff",data:[617,3806,3042,5068,9783]}]},options:{datasets:{bar:{categoryPercentage:.35,barPercentage:.35}},layout:{padding:{left:6,right:6,top:4,bottom:6}},tooltips:{displayColors:!0,callbacks:{mode:"x"}},scales:{xAxes:[{display:!0,stacked:!0,scaleLabel:{display:!1,labelString:"الاشهر"},gridLines:{display:!1}}],yAxes:[{display:!0,position:"right",stacked:!0,scaleLabel:{display:!0,labelString:"عدد الحالات المؤكدة او المستبعدة"},gridLines:{display:!0}}]},legend:{display:!0},responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.renderChart(this.datacollection,this.options)}},f=s("VU/8")(v,null,!1,null,null,null).exports,g={extends:o.a,data:function(){return{datacollection:{labels:["02/مارس","03/مارس","04/مارس","05/مارس","06/مارس","07/مارس","08/مارس","09/مارس","10/مارس","11/مارس","12/مارس","13/مارس","14/مارس","15/مارس","16/مارس","17/مارس","18/مارس","19/مارس","20/مارس","21/مارس","22/مارس","23/مارس","24/مارس","25/مارس","26/مارس","27/مارس","28/مارس","29/مارس","30/مارس","31/مارس","01/ابريل","02/ابريل","03/ابريل","04/ابريل","05/ابريل","06/ابريل","07/ابريل","08/ابريل","09/ابريل","10/ابريل","11/ابريل","12/ابريل","13/ابريل","14/ابريل","15/ابريل","16/ابريل","17/ابريل","18/ابريل","19/ابريل","20/ابريل","21/ابريل","22/ابريل","23/ابريل","24/ابريل","25/ابريل","26/ابريل","27/ابريل","28/ابريل","29/ابريل","30/ابريل","01/ماي","02/ماي","03/ماي","04/ماي","05/ماي","06/ماي","07/ماي","08/ماي","09/ماي","10/ماي","11/ماي","12/ماي","13/ماي","14/ماي","15/ماي","16/ماي","17/ماي","18/ماي","19/ماي","20/ماي","21/ماي","22/ماي","23/ماي","24/ماي","25/ماي","26/ماي","27/ماي","28/ماي","29/ماي","30/ماي","31/ماي","01/يونيو","02/يونيو","03/يونيو","04/يونيو","05/يونيو","06/يونيو","07/يونيو","08/يونيو","09/يونيو","10/يونيو","11/يونيو","12/يونيو","13/يونيو","14/يونيو","15/يونيو","16/يونيو","17/يونيو","18/يونيو","19/يونيو","20/يونيو","21/يونيو","22/يونيو","23/يونيو","24/يونيو","25/يونيو","26/يونيو","27/يونيو","28/يونيو","29/يونيو","30/يونيو","01/يوليوز","02/يوليوز","03/يوليوز","04/يوليوز","05/يوليوز","06/يوليوز","07/يوليوز","08/يوليوز","09/يوليوز","10/يوليوز","11/يوليوز","12/يوليوز","13/يوليوز","14/يوليوز","15/يوليوز","16/يوليوز","17/يوليوز","18/يوليوز","19/يوليوز","20/يوليوز","21/يوليوز","22/يوليوز","23/يوليوز","24/يوليوز","25/يوليوز","26/يوليوز","27/يوليوز","28/يوليوز","29/يوليوز"],datasets:[{label:"حالات مؤكدة",backgroundColor:"blue",borderWidth:3,pointBorderColor:"#249EBF",fill:!1,data:[1,0,1,1,0,0,0,0,0,0,0,4,10,11,9,7,10,9,16,17,19,28,27,55,50,70,57,77,77,61,37,54,83,128,101,99,64,91,99,74,97,116,102,125,136,259,281,106,185,191,163,237,122,190,139,168,55,132,69,102,146,160,174,150,166,189,140,163,199,153,218,137,94,95,45,89,129,82,71,110,78,121,74,27,99,45,24,42,71,66,27,26,33,56,81,27,80,73,78,135,71,29,73,82,101,92,46,66,77,539,226,138,195,172,563,431,295,244,175,238,243,103,333,319,534,393,164,228,164,308,249,214,203,191,161,165,283,181,289,221,326,180,220,302,570,811,633,609,500,826]},{data:[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,2,1,1,1,3,1,1,2,9,5,2,26,9,10,5,12,4,12,13,24,31,26,14,12,20,32,33,13,23,43,24,39,30,51,56,102,83,150,56,99,173,182,215,185,179,162,145,137,93,257,180,140,179,90,87,173,98,143,197,182,97,261,65,71,107,97,217,76,130,58,434,517,456,329,20,47,49,44,85,72,18,35,78,69,63,109,56,48,76,106,61,82,41,61,32,156,67,17,93,87,106,64,70,169,396,448,466,677,131,380,238,218,651,508,379,144,395,260,301,211,257,247,236,228,182,156,115,513,59],label:"المتعافون",backgroundColor:"green",borderWidth:3,pointBackgroundColor:"green",fill:!1},{data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,4,13,2,1,7,3,3,5,4,11,11,10,10,3,4,10,4,7,8,0,1,3,5,2,4,2,2,4,6,3,1,2,1,3,3,2,1,2,1,5,2,0,3,0,2,0,0,0,0,2,0,2,0,0,1,1,2,1,1,1,1,2,0,0,0,2,1,0,1,0,2,0,0,0,0,2,1,0,1,0,0,0,0,1,0,0,0,1,0,0,2,1,1,2,1,4,3,0,1,1,2,3,2,3,2,0,1,2,5,5,2,2,4,1,5,4,3,4,5,7,7,6,8,3,11,7],label:"الوفيات",backgroundColor:"red",borderWidth:3,pointBackgroundColor:"red",fill:!1}]},options:{datasets:{bar:{categoryPercentage:1,barPercentage:.9}},elements:{line:{fill:!1},point:{radius:0}},tooltips:{mode:"index",intersect:!1},hover:{bodyalign:"right",mode:"nearest",intersect:!0},scales:{yAxes:[{display:!0,position:"right",stacked:!0,scaleLabel:{display:!0,labelString:"عدد الحالات"},gridLines:{display:!0}}],xAxes:[{display:!0,stacked:!0,scaleLabel:{display:!1,labelString:"التاريخ"},gridLines:{display:!1}}]},legend:{display:!1},responsive:!0,maintainAspectRatio:!1,layout:{padding:{left:6,right:6,top:4,bottom:6}}}}},mounted:function(){this.renderChart(this.datacollection,this.options)}},h=s("VU/8")(g,null,!1,null,null,null).exports,b={extends:o.a,data:function(){return{datacollection:{labels:["02/مارس","03/مارس","04/مارس","05/مارس","06/مارس","07/مارس","08/مارس","09/مارس","10/مارس","11/مارس","12/مارس","13/مارس","14/مارس","15/مارس","16/مارس","17/مارس","18/مارس","19/مارس","20/مارس","21/مارس","22/مارس","23/مارس","24/مارس","25/مارس","26/مارس","27/مارس","28/مارس","29/مارس","30/مارس","31/مارس","01/ابريل","02/ابريل","03/ابريل","04/ابريل","05/ابريل","06/ابريل","07/ابريل","08/ابريل","09/ابريل","10/ابريل","11/ابريل","12/ابريل","13/ابريل","14/ابريل","15/ابريل","16/ابريل","17/ابريل","18/ابريل","19/ابريل","20/ابريل","21/ابريل","22/ابريل","23/ابريل","24/ابريل","25/ابريل","26/ابريل","27/ابريل","28/ابريل","29/ابريل","30/ابريل","01/ماي","02/ماي","03/ماي","04/ماي","05/ماي","06/ماي","07/ماي","08/ماي","09/ماي","10/ماي","11/ماي","12/ماي","13/ماي","14/ماي","15/ماي","16/ماي","17/ماي","18/ماي","19/ماي","20/ماي","21/ماي","22/ماي","23/ماي","24/ماي","25/ماي","26/ماي","27/ماي","28/ماي","29/ماي","30/ماي","31/ماي","01/يونيو","02/يونيو","03/يونيو","04/يونيو","05/يونيو","06/يونيو","07/يونيو","08/يونيو","09/يونيو","10/يونيو","11/يونيو","12/يونيو","13/يونيو","14/يونيو","15/يونيو","16/يونيو","17/يونيو","18/يونيو","19/يونيو","20/يونيو","21/يونيو","22/يونيو","23/يونيو","24/يونيو","25/يونيو","26/يونيو","27/يونيو","28/يونيو","29/يونيو","30/يونيو","01/يوليوز","02/يوليوز","03/يوليوز","04/يوليوز","05/يوليوز","06/يوليوز","07/يوليوز","08/يوليوز","09/يوليوز","10/يوليوز","11/يوليوز","12/يوليوز","13/يوليوز","14/يوليوز","15/يوليوز","16/يوليوز","17/يوليوز","18/يوليوز","19/يوليوز","20/يوليوز","21/يوليوز","22/يوليوز","23/يوليوز","24/يوليوز","25/يوليوز","26/يوليوز","27/يوليوز","28/يوليوز","29/يوليوز"],datasets:[{data:[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,3,3,4,4,5,6,10,23,25,26,33,26,39,44,48,59,70,80,90,93,97,107,111,118,126,126,127,130,135,137,141,143,145,149,155,158,159,161,162,165,168,170,171,173,174,179,181,183,183,186,186,188,188,188,188,190,190,192,192,192,193,194,196,197,198,199,200,202,202,202,202,204,205,205,206,206,208,208,208,208,208,210,211,211,212,212,212,212,212,213,213,213,213,214,214,214,216,217,218,220,221,225,228,228,229,230,232,235,237,240,242,242,243,245,250,255,257,259,263,264,269,273,276,280,285,292,299,305,313,316,327,334],label:"الوفيات",lineTension:0,backgroundColor:"red",borderWidth:3,pointBackgroundColor:"red",fill:!1},{data:[1,1,2,2,2,2,2,3,2,5,5,6,16,26,35,41,51,59,74,90,108,134,159,212,257,311,365,440,508,557,586,633,686,794,875,959,1001,1085,1168,1219,1288,1366,1434,1545,1668,1904,2148,2234,2387,2553,2671,2880,2957,3114,3201,3311,3263,3309,3225,3269,3315,3300,3291,3221,3200,3208,3186,3201,3263,3321,3282,3239,3193,3107,3062,3062,3018,3002,2929,2841,2735,2758,2570,2531,2558,2494,2421,2246,2241,2175,2143,1735,1250,850,600,607,595,628,652,686,734,743,780,784,816,845,782,791,820,1283,1403,1479,1592,1723,2223,2621,2759,2934,3091,3232,3385,3382,3650,3898,4261,4255,3969,3728,3213,3390,3258,3232,3212,2747,2398,2182,2317,2317,2126,2042,2154,2073,2041,2100,2435,3058,3527,4018,3994,4754],label:"حالات تتلقى العلاج",backgroundColor:"#d8b365",borderWidth:3,pointBackgroundColor:"orange",fill:!1},{data:[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,2,3,3,5,6,7,8,11,12,13,15,24,29,31,57,66,76,81,93,97,109,122,146,177,203,217,229,249,281,314,327,350,393,417,456,486,537,593,695,778,928,984,1083,1256,1438,1653,1838,2017,2179,2324,2461,2554,2811,2991,3131,3310,3400,3487,3660,3758,3901,4098,4280,4377,4638,4703,4774,4881,4978,5195,5271,5401,5459,5893,6410,6866,7195,7268,7315,7364,7408,7493,7565,7583,7618,7696,7765,7828,7937,7993,8041,8117,8223,8284,8366,8407,8468,8500,8656,8723,8740,8833,8920,9026,9090,9160,9329,9725,10173,10639,11316,11447,11827,12065,12283,12934,13442,13821,13965,14360,14620,14921,15132,15389,15636,15872,16100,16282,16438,16553,17066,17125],label:"المتعافون",lineTension:0,backgroundColor:"green",borderColor:"green",borderWidth:3,pointBackgroundColor:"green",fill:!1}]},options:{datasets:{bar:{categoryPercentage:1,barPercentage:.9}},elements:{line:{fill:!1},point:{radius:0}},tooltips:{mode:"index",intersect:!1},hover:{bodyalign:"right",mode:"nearest",intersect:!0},scales:{yAxes:[{display:!0,position:"right",stacked:!0,scaleLabel:{display:!0,labelString:"عدد الحالات"},gridLines:{display:!0}}],xAxes:[{display:!0,stacked:!0,scaleLabel:{display:!1,labelString:"التاريخ"},gridLines:{display:!1}}]},legend:{display:!1},responsive:!0,maintainAspectRatio:!1,layout:{padding:{left:6,right:6,top:4,bottom:6}}}}},mounted:function(){this.renderChart(this.datacollection,this.options)}},m=s("VU/8")(b,null,!1,null,null,null).exports,y=s("Pq+5"),j={extends:o.a,data:function(){return{datacollection:{labels:["23/يوليوز","24/يوليوز","25/يوليوز","26/يوليوز","27/يوليوز","28/يوليوز","29/يوليوز"],datasets:[{label:"حالات مؤكدة",backgroundColor:"blue",borderWidth:1,fill:!1,data:[302,570,811,633,609,500,826]}]},options:{datasets:{bar:{categoryPercentage:.6,barPercentage:.6}},elements:{line:{fill:!1},point:{radius:0}},tooltips:{mode:"index",intersect:!1},hover:{bodyalign:"right",mode:"nearest",intersect:!0},scales:{yAxes:[{display:!0,position:"right",stacked:!0,scaleLabel:{display:!0,labelString:"عدد الحالات"},gridLines:{display:!0}}],xAxes:[{display:!0,stacked:!0,scaleLabel:{display:!1,labelString:"التاريخ"},gridLines:{display:!1}}]},legend:{display:!1},responsive:!0,maintainAspectRatio:!1,layout:{padding:{left:6,right:6,top:4,bottom:6}}}}},mounted:function(){this.renderChart(this.datacollection,this.options)}},_=s("VU/8")(j,null,!1,null,null,null).exports,x=s("vwbq"),C=s("vHc0"),k={mounted:function(){var t,e,s,a;t=x.geoMercator().center([-10.1759,29.3701]).translate([200,185]).scale([30550]),e=x.geoPath().projection(t),s=x.scaleLinear().range(["#adfcad","#ffcb40","#ffba00","#ff7d73","#ff4e40","#ff1300"]),a=x.select("#communes").append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 800 550"),x.queue().defer(x.csv,"static/data/communes.csv").await(function(t,n){s.domain([1,10]),x.queue().defer(x.json,"static/data/communes.json").await(function(t,i){for(var r=C.feature(i,i.objects.sidi_ifni),l=0;l<n.length;l++)for(var o=n[l].NAME,c=n[l].CONFIRMEDS,d=0;d<r.features.length;d++)if(o===r.features[d].properties.NAME){r.features[d].properties.value=c;break}var u=x.select("body").append("div").attr("class","tooltip").attr("id","mapTooltip").style("opacity",0).style("background-color","white").style("border","solid").style("border-width","2px").style("border-radius","5px").style("padding","5px");a.selectAll("path").attr("class","commune").data(r.features).enter().append("path").attr("d",e).style("fill",function(t){var e=t.properties.value;return e?s(e):"#fff"}).attr("d",e).attr("d",e).attr("stroke",function(t){return"#008000"}).attr("stroke-width",function(t){return.5}).style("opacity",.8).on("mouseover",function(t){u.transition().duration(200).style("opacity",1),u.transition().style("opacity",1);var e=t.properties.NAME+"</br>";e=e+"المرضى:"+t.properties.value,u.html(e).style("left",x.event.pageX+"px").style("top",x.event.pageY-28+"px")}).on("mouseleave",function(t){u.transition().style("opacity",.8),u.transition().duration(500).style("opacity",0)});var p=[];r.features.forEach(function(t){var e=parseInt(t.properties.value);p.push(e)}),p.sort(function(t,e){return t-e}),a.selectAll("rect").data(p).enter().append("rect").attr("x",function(t,e){return e*(800/p.length)}).attr("y",410).attr("width",function(t,e){return 800/p.length}).attr("height",15).attr("fill",function(t){return s(t)}),a.selectAll("text").data([p[0],p[p.length-1]]).enter().append("text").text(function(t){return t}).attr("x",function(t,e){return 820*e-40}).attr("y",400).attr("font-size","12px").attr("font-family","sans-serif")})})}},w={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"communes"}})},staticRenderFns:[]};var E=s("VU/8")(k,w,!1,function(t){s("HqR/")},null,null).exports,A=s("vwbq"),z=s("KZx+"),M=s("vHc0"),R={mounted:function(){!function(){var t=A.map(),e=A.map(),s=A.map(),a=A.scaleLinear().domain([0,1e3]).range(["#adfcad","#ffcb40","#ffba00","#ff7d73","#ff4e40","#ff1300"]),n=A.select("body").append("div").attr("class","tooltip").style("opacity",0).style("background-color","white").style("border","solid").style("border-width","2px").style("border-radius","5px").style("padding","5px"),i=A.geoMercator().center([-7.0926,31.7917]).translate([400,135]).scale([1500]),r=A.select("#provinces").append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 800 550");r.append("text").attr("x",50).attr("y",40).attr("text-anchor","middle").style("font-size","16px").style("text-decoration","underline").text("عدد المرضى");var l=A.geoPath().projection(i);A.queue().defer(A.json,"static/data/provinces.json").defer(A.csv,"static/data/provinces.csv",function(a){t.set(a.NAME,+a.CONFIRMEDS),e.set(a.NAME,+a.RECOVERERS),s.set(a.NAME,+a.DEATHS)}).await(function(i,o,c){o=M.feature(o,o.objects.provinces);r.append("g").attr("class","province").selectAll("path").data(o.features).enter().append("path").style("fill",function(e){return e.total=t.get(e.properties.NAME)||0,a(e.total)}).attr("d",l).attr("d",l).attr("stroke",function(t){return"#008000"}).attr("stroke-width",function(t){return.5}).style("opacity",.8).on("mouseover",function(a){A.select(this).transition().duration(200).style("opacity",1),n.transition().style("opacity",1),n.html("اقليم "+a.properties.NAME+"<br>عدد المرضى: "+t.get(a.properties.NAME)+"<br> عدد المتعافين: "+e.get(a.properties.NAME)+"<br> عدد الوفيات: "+s.get(a.properties.NAME)+'</br><hr style="height:2px;border-width:0;color:gray;background-color:green">نسبة الاصابات عن كل 100 الف نسمة: %'+(t.get(a.properties.NAME)/1e5*100).toPrecision(2)).style("left",A.event.pageX+"px").style("top",A.event.pageY-28+"px")}).on("mouseleave",function(t){A.select(this).transition().style("opacity",.8),n.transition().duration(500).style("opacity",0)})}),(r=A.select("svg")).append("g").attr("class","legendLinear").attr("transform","translate(30,60)");var o=z.legendColor().shapeWidth(30).labels(["0","250","500","750","1000"]).cells(5).labelWrap(30).shapeWidth(15).labelAlign("start").shapePadding(5).labelOffset(38).orient("vertical").scale(a);r.select(".legendLinear").call(o)}()}},L={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"provinces"}})},staticRenderFns:[]};var N=s("VU/8")(R,L,!1,function(t){s("oahU")},null,null).exports,P=s("vwbq"),S=s("KZx+"),q=s("vHc0"),F={mounted:function(){!function(){var t=P.map(),e=P.scaleLinear().domain([0,3e3]).range(["#ffffff","#ff0000"]),s=P.select("body").append("div").attr("class","tooltip").style("opacity",0),a=P.geoMercator().center([-7.0926,31.7917]).scale(1400).translate([450,160]),n=P.select("#regions").append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 900 500"),i=P.geoPath().projection(a);P.queue().defer(P.json,"static/data/regions.json").defer(P.csv,"static/data/regions.csv",function(e){t.set(e.code,(+e.taux/100*8692).toFixed(0))}).await(function(a,r,l){var o=q.feature(r,r.objects.regions);n.append("g").attr("class","region").selectAll("path").data(o.features).enter().append("path").style("fill",function(s){return s.total=t.get(s.properties.code)||0,e(s.total)}).attr("d",i).attr("class","region-border").attr("d",i).style("stroke","gray").attr("class",function(t){return"Region"}).style("opacity",.8).on("mouseover",function(t){P.select(this).transition().duration(200).style("opacity",1),s.transition().style("opacity",1),s.html("<strong>"+t.properties.name+"</strong></br>  عدد الحالات:"+t.total+'</br><hr style="height:2px;border-width:0;color:gray;background-color:gray">نسبة الاصابات عن كل 10 الاف نسمة: %'+function(t){return(t.total/1e4*100).toPrecision(2)}(t)).style("left",P.event.pageX+"px").style("top",P.event.pageY-28+"px")}).on("mouseleave",function(t){P.select(this).transition().style("opacity",.8),s.transition().duration(500).style("opacity",0)})}),(n=P.select("svg")).append("g").attr("class","legendLinear").attr("transform","translate(30,60)");var r=S.legendColor().shapeWidth(30).labels(["0","600","1200","1800","2400","3000"]).cells(6).labelWrap(20).shape("circle").shapeWidth(20).labelAlign("start").shapePadding(5).labelOffset(40).orient("vertical").scale(e);n.select(".legendLinear").call(r)}()}},V={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"regions"}})},staticRenderFns:[]};var U=s("VU/8")(F,V,!1,function(t){s("93y7")},null,null).exports,O={name:"Home",components:{Navigation:l.default,DailyCases:h,ComulativeCases:m,RegionsChart:d,GlobalOverview:p,CompareMonths:f,GlobalRates:y.default,LastTwoWeeks:_,CommuneMap:E,ProvinceMap:N,RegionMap:U}},W={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-light is-medium"},[s("div",{staticClass:"hero-head"},[s("Navigation"),t._v(" "),s("global-rates"),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"fb-share-button",staticStyle:{},attrs:{"data-href":"https://aitabin.github.io/covid-19-maroc/index.html","data-layout":"button_count"}})],1),t._v(" "),s("div",{staticClass:"hero-body"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("p",{staticClass:"subtitle"},[t._v("\n            مبيان يومي لتطور الحالة الوبائية\n            ")]),t._v(" "),s("daily-cases")],1),t._v(" "),s("div",{staticClass:"column"},[s("p",{staticClass:"subtitle"},[t._v("\n            مبيان تراكمي لتطور الحالة الوبائية\n            ")]),t._v(" "),s("comulative-cases")],1)]),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("p",{staticClass:"subtitle"},[t._v("\n            مبيان تراكمي لنسب الحالات المؤكدة حسب جهات المغرب\n            ")]),t._v(" "),s("regions-chart")],1),t._v(" "),s("div",{staticClass:"column"},[s("p",{staticClass:"subtitle"},[t._v("\n            مبيان تراكمي لتطور الحالة الوبائية حسب الاشهر\n            ")]),t._v(" "),s("compare-months")],1)]),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("p",{staticClass:"subtitle"},[t._v("\n            مبيان تراكمي لعدد المتعافين, المرضى و المتوفين\n            ")]),t._v(" "),s("global-overview")],1),t._v(" "),s("div",{staticClass:"column"},[s("p",{staticClass:"subtitle"},[t._v("\n             مبيان لعدد الحالات المؤكدة و التحاليل المخبرية اليومية خلال الاسبوعين الماضيين\n            ")]),t._v(" "),s("last-two-weeks")],1)]),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("p",{staticClass:"subtitle"},[t._v("\n              الحالة الوبائية حسب الحالات التي تتلقى العلاج -بعض الارقام قد تبدو غير دقيقة نظرا لشح المعطيات-\n            ")]),t._v(" "),s("province-map")],1),t._v(" "),s("div",{staticClass:"column"},[s("p",{staticClass:"subtitle"},[t._v("\n              مستجدات الحالة الوبائية بجماعات اقليم سيدي افني حسب المرضى الذين يتلقون العلاج\n            ")]),t._v(" "),s("commune-map")],1)])]),t._v(" "),t._m(1),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container has-text-centered"},[e("p",{staticClass:"title has-text-info"},[this._v("\n        الحالة الوبائية بالمغرب\n      ")]),this._v(" "),e("p",{staticClass:"subtitle"},[this._v("\n      بعض المبيانات التراكمية و اليومية + الخريطة الاقليمية للحالة الوبائية بالمغرب\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("p",{staticClass:"subtitle"}),this._v(" "),e("div",{staticClass:"notification is-danger"},[this._v("\n            تهيب وزارة الصحة بالمواطنات والمواطنين الالتزام بقواعد النظافة والسلامة الصحية،\n             والانخراط في التدابير الاحترازية التي اتخذتها السلطات المغربية بكل مسؤولية\n            ")])]),this._v(" "),e("div",{staticClass:"column"},[e("p",{staticClass:"subtitle"}),this._v(" "),e("div",{staticClass:"notification is-info"},[e("ul",[e("li",[this._v("الرقم الاقتصادي ألو اليقضة: 47 100 080")]),this._v(" "),e("li",[this._v("الو 141 للمساعدة الطبية الاستعجالية")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"content has-text-centered"},[e("p",[e("strong",[this._v("Ingissa")]),this._v(" by "),e("a",{attrs:{href:"#"}},[this._v("Aitabin")]),this._v(". The source code is licensed\n      "),e("a",{attrs:{href:"#"}},[this._v("BSD 2-Clause License")]),this._v(". The application content\n      is licensed "),e("a",{attrs:{href:"#"}}),this._v(".\n    ")])])])}]};var H=s("VU/8")(O,W,!1,function(t){s("jSjZ")},"data-v-14b83638",null).exports;a.a.use(r.a);var B=new r.a({routes:[{path:"/",name:"Home",component:H}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:B,components:{App:i},template:"<App/>"})},"Pq+5":function(t,e,s){"use strict";var a=s("DdmT"),n=s.n(a),i=s("qX3q");var r=function(t){s("2GMb")},l=s("VU/8")(n.a,i.a,!1,r,null,null);e.default=l.exports},VCu1:function(t,e,s){"use strict";var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[this._m(0),this._v(" "),e("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[e("div",{staticClass:"navbar-end"},[e("a",{staticClass:"navbar-item is-active"},[e("router-link",{attrs:{to:"/",exact:""}},[this._v("الرئيسية")])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-brand"},[e("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}})]),this._v(" "),e("a",{staticClass:"navbar-item",attrs:{href:"/"}},[this._v("\n        انغيسا\n      ")])])}]};e.a=a},"bVQ/":function(t,e,s){(function(t){t(document).ready(function(){t(".navbar-burger").click(function(){t(".navbar-burger").toggleClass("is-active"),t(".navbar-menu").toggleClass("is-active")})})}).call(e,s("7t+N"))},bwGm:function(t,e,s){"use strict";var a=s("bVQ/"),n=s.n(a),i=s("VCu1"),r=s("VU/8")(n.a,i.a,!1,null,null,null);e.default=r.exports},gsu9:function(t,e){},jSjZ:function(t,e){},oahU:function(t,e){},qX3q:function(t,e,s){"use strict";var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"conteneur",attrs:{dir:"rtl"}},[s("div",{staticClass:"box"},[s("div",{staticClass:"container"},[s("h2",[t._v("عدد الاصابات الاجمالية")]),t._v(" "),s("br"),t._v(" "),s("h2",[s("strong",{staticStyle:{color:"#d8b365"}},[t._v("22213")])]),t._v(" "),s("span",[s("strong",[t._v(" 1.83% ")])]),t._v(" "),s("progress",{staticClass:"progress is-warning is-large",attrs:{value:"1.83",max:"100"}},[t._v("1.83%")])])]),t._v(" "),s("div",{staticClass:"box"},[s("div",{staticClass:"container"},[s("h2",[t._v("عدد المصابين قيد العلاج")]),s("br"),t._v(" "),s("h2",[s("strong",{staticStyle:{color:"blue"}},[t._v("4754")])]),t._v(" "),s("span",[s("strong",[t._v(" 21.40% ")])]),t._v(" "),s("progress",{staticClass:"progress is-info is-large",attrs:{value:"21.40",max:"100"}},[t._v("21.40%")])])]),t._v(" "),s("div",{staticClass:"box"},[s("div",{staticClass:"container"},[s("h2",[t._v("عدد المتعافين")]),s("br"),t._v(" "),s("h2",[s("strong",{staticStyle:{color:"green"}},[t._v("17125")])]),t._v(" "),s("span",[s("strong",[t._v(" 77.09% ")])]),t._v(" "),s("progress",{staticClass:"progress is-success is-large",attrs:{value:"77.09",max:"100"}},[t._v("77.09%")])])]),t._v(" "),s("div",{staticClass:"box"},[s("div",{staticClass:"container"},[s("h2",[t._v("عدد الوفيات")]),s("br"),t._v(" "),s("h2",[s("strong",{staticStyle:{color:"red"}},[t._v("334")])]),t._v(" "),s("span",[s("strong",[t._v(" 1.50% ")])]),t._v(" "),s("progress",{staticClass:"progress is-danger is-large",attrs:{value:"1.50",max:"100"}},[t._v("1.50%")])])])])}]};e.a=a},uslO:function(t,e,s){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-in":"yJfC","./en-in.js":"yJfC","./en-nz":"dyB6","./en-nz.js":"dyB6","./en-sg":"NYST","./en-sg.js":"NYST","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fil":"rMbQ","./fil.js":"rMbQ","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-deva":"VGQH","./gom-deva.js":"VGQH","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./oc-lnc":"KOFO","./oc-lnc.js":"KOFO","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-mo":"+WA1","./zh-mo.js":"+WA1","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return s(i(t))}function i(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.aefd5d906dc41a5f4345.js.map