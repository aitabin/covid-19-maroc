webpackJsonp([1],{"595R":function(t,e){},"72w+":function(t,e,a){"use strict";var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"conteneur",attrs:{dir:"rtl"}},[a("div",{staticClass:"box"},[a("div",{staticClass:"container"},[a("h2",[t._v("عدد الاصابات الاجمالية")]),t._v(" "),a("br"),t._v(" "),a("h2",[a("strong",{staticStyle:{color:"#d8b365"}},[t._v("58489")])]),t._v(" "),a("span",[a("strong",[t._v(" 3.13% ")])]),t._v(" "),a("progress",{staticClass:"progress is-warning is-large",attrs:{value:"3.13",max:"100"}},[t._v("3.13%")])])]),t._v(" "),a("div",{staticClass:"box"},[a("div",{staticClass:"container"},[a("h2",[t._v("عدد المصابين قيد العلاج")]),a("br"),t._v(" "),a("h2",[a("strong",{staticStyle:{color:"blue"}},[t._v("14388")])]),t._v(" "),a("span",[a("strong",[t._v(" 24.59% ")])]),t._v(" "),a("progress",{staticClass:"progress is-info is-large",attrs:{value:"24.59",max:"100"}},[t._v("24.59%")])])]),t._v(" "),a("div",{staticClass:"box"},[a("div",{staticClass:"container"},[a("h2",[t._v("عدد المتعافين")]),a("br"),t._v(" "),a("h2",[a("strong",{staticStyle:{color:"green"}},[t._v("43049")])]),t._v(" "),a("span",[a("strong",[t._v(" 73.60% ")])]),t._v(" "),a("progress",{staticClass:"progress is-success is-large",attrs:{value:"73.60",max:"100"}},[t._v("73.60%")])])]),t._v(" "),a("div",{staticClass:"box"},[a("div",{staticClass:"container"},[a("h2",[t._v("عدد الوفيات")]),a("br"),t._v(" "),a("h2",[a("strong",{staticStyle:{color:"red"}},[t._v("1052")])]),t._v(" "),a("span",[a("strong",[t._v(" 1.79% ")])]),t._v(" "),a("progress",{staticClass:"progress is-danger is-large",attrs:{value:"1.79",max:"100"}},[t._v("1.79%")])])])])}]};e.a=s},"93y7":function(t,e){},C9LV:function(t,e){},DdmT:function(t,e){},HIhJ:function(t,e){},"HqR/":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},n,!1,function(t){a("gsu9")},null,null).exports,i=a("/ocq"),l=a("bwGm"),o=a("UlOv"),c={extends:o.a,data:function(){return{datacollection:{labels:["بني ملال-خنيفرة","البيضاء-سطات","درعة-تافيلالت","الداخلة-وادالذهب","فاس-مكناس","كلميم-واد نون","العيون-الساقيةالحمراء","مراكش-اسفي","الشرق","الرباط-سلا-القنيطرة","سوس-ماسة","طنجة-تطوان-الحسيمة"],datasets:[{backgroundColor:"blue",borderWidth:1,data:[4.4,28.84,3.72,.64,14.98,.45,1.71,16.12,1.92,9.06,1.82,16.33]}]},options:{datasets:{bar:{categoryPercentage:.5,barPercentage:.5}},tooltips:{callbacks:{label:function(t,e){var a=e.datasets[t.datasetIndex].label||"";return a&&(a+=": "),a+=Math.round(47638*t.yLabel/100),a}}},hover:{mode:"nearest",intersect:!0},legend:{display:!1},scales:{layout:{padding:{left:6,right:6,top:4,bottom:6}},xAxes:[{display:!0,scaleLabel:{display:!1,labelString:"الجهات"},gridLines:{display:!1}}],yAxes:[{display:!0,position:"right",scaleLabel:{display:!0,labelString:"عدد الحالات المؤكدة"},gridLines:{display:!0}}]},responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.renderChart(this.datacollection,this.options)}},d=a("VU/8")(c,null,!1,null,null,null).exports,u={extends:o.b,data:function(){return{datacollection:{labels:["الوفيات","المرضى","المتعافون"],datasets:[{data:[1052,14388,43049],borderColor:["#f443368c","#2196f38c","#3f51b570"],backgroundColor:["#f443368c","#2c7fb88c","#2ca25f8c"],borderWidth:1}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{animateRotate:!0,animateScale:!0}}}},mounted:function(){this.renderChart(this.datacollection,this.options)}},p=a("VU/8")(u,null,!1,null,null,null).exports,v={extends:o.a,data:function(){return{datacollection:{labels:["مارس","ابريل","ماي","يونيو","يوليوز","غشت"],datasets:[{label:"الحالات المستبعدة",backgroundColor:"#d8b365",data:[2462,27956,150127,488113,575217,582013]},{label:"الحالات المؤكدة",backgroundColor:"#0000ff",data:[617,3806,3042,5068,11892,34167]}]},options:{datasets:{bar:{categoryPercentage:.35,barPercentage:.35}},layout:{padding:{left:6,right:6,top:4,bottom:6}},tooltips:{displayColors:!0,callbacks:{mode:"x"}},scales:{xAxes:[{display:!0,stacked:!0,scaleLabel:{display:!1,labelString:"الاشهر"},gridLines:{display:!1}}],yAxes:[{display:!0,position:"right",stacked:!0,scaleLabel:{display:!0,labelString:"عدد الحالات المؤكدة و المستبعدة"},gridLines:{display:!0}}]},legend:{display:!0},responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.renderChart(this.datacollection,this.options)}},f=a("VU/8")(v,null,!1,null,null,null).exports,h={extends:o.a,data:function(){return{datacollection:{labels:["02/مارس","03/مارس","04/مارس","05/مارس","06/مارس","07/مارس","08/مارس","09/مارس","10/مارس","11/مارس","12/مارس","13/مارس","14/مارس","15/مارس","16/مارس","17/مارس","18/مارس","19/مارس","20/مارس","21/مارس","22/مارس","23/مارس","24/مارس","25/مارس","26/مارس","27/مارس","28/مارس","29/مارس","30/مارس","31/مارس","01/ابريل","02/ابريل","03/ابريل","04/ابريل","05/ابريل","06/ابريل","07/ابريل","08/ابريل","09/ابريل","10/ابريل","11/ابريل","12/ابريل","13/ابريل","14/ابريل","15/ابريل","16/ابريل","17/ابريل","18/ابريل","19/ابريل","20/ابريل","21/ابريل","22/ابريل","23/ابريل","24/ابريل","25/ابريل","26/ابريل","27/ابريل","28/ابريل","29/ابريل","30/ابريل","01/ماي","02/ماي","03/ماي","04/ماي","05/ماي","06/ماي","07/ماي","08/ماي","09/ماي","10/ماي","11/ماي","12/ماي","13/ماي","14/ماي","15/ماي","16/ماي","17/ماي","18/ماي","19/ماي","20/ماي","21/ماي","22/ماي","23/ماي","24/ماي","25/ماي","26/ماي","27/ماي","28/ماي","29/ماي","30/ماي","31/ماي","01/يونيو","02/يونيو","03/يونيو","04/يونيو","05/يونيو","06/يونيو","07/يونيو","08/يونيو","09/يونيو","10/يونيو","11/يونيو","12/يونيو","13/يونيو","14/يونيو","15/يونيو","16/يونيو","17/يونيو","18/يونيو","19/يونيو","20/يونيو","21/يونيو","22/يونيو","23/يونيو","24/يونيو","25/يونيو","26/يونيو","27/يونيو","28/يونيو","29/يونيو","30/يونيو","01/يوليوز","02/يوليوز","03/يوليوز","04/يوليوز","05/يوليوز","06/يوليوز","07/يوليوز","08/يوليوز","09/يوليوز","10/يوليوز","11/يوليوز","12/يوليوز","13/يوليوز","14/يوليوز","15/يوليوز","16/يوليوز","17/يوليوز","18/يوليوز","19/يوليوز","20/يوليوز","21/يوليوز","22/يوليوز","23/يوليوز","24/يوليوز","25/يوليوز","26/يوليوز","27/يوليوز","28/يوليوز","29/يوليوز","30/يوليوز","31/يوليوز","01/غشت","02/غشت","03/غشت","04/غشت","05/غشت","06/غشت","07/غشت","08/غشت","09/غشت","10/غشت","11/غشت","12/غشت","13/غشت","14/غشت","15/غشت","16/غشت","17/غشت","18/غشت","19/غشت","20/غشت","21/غشت","22/غشت","23/غشت","24/غشت","25/غشت","26/غشت","27/غشت","28/غشت"],datasets:[{label:"حالات مؤكدة",backgroundColor:"blue",borderWidth:3,pointBorderColor:"#249EBF",fill:!1,data:[1,0,1,1,0,0,0,0,0,0,0,4,10,11,9,7,10,9,16,17,19,28,27,55,50,70,57,77,77,61,37,54,83,128,101,99,64,91,99,74,97,116,102,125,136,259,281,106,185,191,163,237,122,190,139,168,55,132,69,102,146,160,174,150,166,189,140,163,199,153,218,137,94,95,45,89,129,82,71,110,78,121,74,27,99,45,24,42,71,66,27,26,33,56,81,27,80,73,78,135,71,29,73,82,101,92,46,66,77,539,226,138,195,172,563,431,295,244,175,238,243,103,333,319,534,393,164,228,164,308,249,214,203,191,161,165,283,181,289,221,326,180,220,302,570,811,633,609,500,826,1046,1063,693,522,659,1021,1283,1144,1018,1345,1230,826,1132,1499,1241,1306,1776,1472,1069,1245,1510,1325,1609,1565,1537,903,1276,1336,1221,1404]},{data:[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,2,1,1,1,3,1,1,2,9,5,2,26,9,10,5,12,4,12,13,24,31,26,14,12,20,32,33,13,23,43,24,39,30,51,56,102,83,150,56,99,173,182,215,185,179,162,145,137,93,257,180,140,179,90,87,173,98,143,197,182,97,261,65,71,107,97,217,76,130,58,434,517,456,329,20,47,49,44,85,72,18,35,78,69,63,109,56,48,76,106,61,82,41,61,32,156,67,17,93,87,106,64,70,169,396,448,466,677,131,380,238,218,651,508,379,144,395,260,301,211,257,247,236,228,182,156,115,513,59,186,347,302,475,533,661,365,559,995,642,1157,1177,861,292,1010,957,922,778,597,1061,574,1230,1393,841,1303,1135,815,2293,1315,1148],label:"المتعافون",backgroundColor:"green",borderWidth:3,pointBackgroundColor:"green",fill:!1},{data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,4,13,2,1,7,3,3,5,4,11,11,10,10,3,4,10,4,7,8,0,1,3,5,2,4,2,2,4,6,3,1,2,1,3,3,2,1,2,1,5,2,0,3,0,2,0,0,0,0,2,0,2,0,0,1,1,2,1,1,1,1,2,0,0,0,2,1,0,1,0,2,0,0,0,0,2,1,0,1,0,0,0,0,1,0,0,0,1,0,0,2,1,1,2,1,4,3,0,1,1,2,3,2,3,2,0,1,2,5,5,2,2,4,1,5,4,3,4,5,7,7,6,8,3,11,7,12,7,14,15,19,16,18,14,12,19,18,18,17,23,28,27,21,26,23,33,29,32,42,41,30,32,35,29,27,41],label:"الوفيات",backgroundColor:"red",borderWidth:3,pointBackgroundColor:"red",fill:!1}]},options:{datasets:{bar:{categoryPercentage:1,barPercentage:.9}},elements:{line:{fill:!1},point:{radius:0}},tooltips:{mode:"index",intersect:!1},hover:{bodyalign:"right",mode:"nearest",intersect:!0},scales:{yAxes:[{display:!0,position:"right",stacked:!0,scaleLabel:{display:!0,labelString:"عدد الحالات"},gridLines:{display:!0}}],xAxes:[{display:!0,stacked:!0,scaleLabel:{display:!1,labelString:"التاريخ"},gridLines:{display:!1}}]},legend:{display:!1},responsive:!0,maintainAspectRatio:!1,layout:{padding:{left:6,right:6,top:4,bottom:6}}}}},mounted:function(){this.renderChart(this.datacollection,this.options)}},g=a("VU/8")(h,null,!1,null,null,null).exports,m={extends:o.a,data:function(){return{datacollection:{labels:["02/مارس","03/مارس","04/مارس","05/مارس","06/مارس","07/مارس","08/مارس","09/مارس","10/مارس","11/مارس","12/مارس","13/مارس","14/مارس","15/مارس","16/مارس","17/مارس","18/مارس","19/مارس","20/مارس","21/مارس","22/مارس","23/مارس","24/مارس","25/مارس","26/مارس","27/مارس","28/مارس","29/مارس","30/مارس","31/مارس","01/ابريل","02/ابريل","03/ابريل","04/ابريل","05/ابريل","06/ابريل","07/ابريل","08/ابريل","09/ابريل","10/ابريل","11/ابريل","12/ابريل","13/ابريل","14/ابريل","15/ابريل","16/ابريل","17/ابريل","18/ابريل","19/ابريل","20/ابريل","21/ابريل","22/ابريل","23/ابريل","24/ابريل","25/ابريل","26/ابريل","27/ابريل","28/ابريل","29/ابريل","30/ابريل","01/ماي","02/ماي","03/ماي","04/ماي","05/ماي","06/ماي","07/ماي","08/ماي","09/ماي","10/ماي","11/ماي","12/ماي","13/ماي","14/ماي","15/ماي","16/ماي","17/ماي","18/ماي","19/ماي","20/ماي","21/ماي","22/ماي","23/ماي","24/ماي","25/ماي","26/ماي","27/ماي","28/ماي","29/ماي","30/ماي","31/ماي","01/يونيو","02/يونيو","03/يونيو","04/يونيو","05/يونيو","06/يونيو","07/يونيو","08/يونيو","09/يونيو","10/يونيو","11/يونيو","12/يونيو","13/يونيو","14/يونيو","15/يونيو","16/يونيو","17/يونيو","18/يونيو","19/يونيو","20/يونيو","21/يونيو","22/يونيو","23/يونيو","24/يونيو","25/يونيو","26/يونيو","27/يونيو","28/يونيو","29/يونيو","30/يونيو","01/يوليوز","02/يوليوز","03/يوليوز","04/يوليوز","05/يوليوز","06/يوليوز","07/يوليوز","08/يوليوز","09/يوليوز","10/يوليوز","11/يوليوز","12/يوليوز","13/يوليوز","14/يوليوز","15/يوليوز","16/يوليوز","17/يوليوز","18/يوليوز","19/يوليوز","20/يوليوز","21/يوليوز","22/يوليوز","23/يوليوز","24/يوليوز","25/يوليوز","26/يوليوز","27/يوليوز","28/يوليوز","29/يوليوز","30/يوليوز","31/يوليوز","01/غشت","02/غشت","03/غشت","04/غشت","05/غشت","06/غشت","07/غشت","08/غشت","09/غشت","10/غشت","11/غشت","12/غشت","13/غشت","14/غشت","15/غشت","16/غشت","17/غشت","18/غشت","19/غشت","20/غشت","21/غشت","22/غشت","23/غشت","24/غشت","25/غشت","26/غشت","27/غشت","28/غشت"],datasets:[{data:[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,3,3,4,4,5,6,10,23,25,26,33,26,39,44,48,59,70,80,90,93,97,107,111,118,126,126,127,130,135,137,141,143,145,149,155,158,159,161,162,165,168,170,171,173,174,179,181,183,183,186,186,188,188,188,188,190,190,192,192,192,193,194,196,197,198,199,200,202,202,202,202,204,205,205,206,206,208,208,208,208,208,210,211,211,212,212,212,212,212,213,213,213,213,214,214,214,216,217,218,220,221,225,228,228,229,230,232,235,237,240,242,242,243,245,250,255,257,259,263,264,269,273,276,280,285,292,299,305,313,316,327,334,346,353,367,382,401,417,435,449,461,480,498,516,533,556,584,611,632,658,681,714,743,775,817,858,888,920,955,984,1011,1052],label:"الوفيات",lineTension:0,backgroundColor:"red",borderWidth:3,pointBackgroundColor:"red",fill:!1},{data:[1,1,2,2,2,2,2,3,2,5,5,6,16,26,35,41,51,59,74,90,108,134,159,212,257,311,365,440,508,557,586,633,686,794,875,959,1001,1085,1168,1219,1288,1366,1434,1545,1668,1904,2148,2234,2387,2553,2671,2880,2957,3114,3201,3311,3263,3309,3225,3269,3315,3300,3291,3221,3200,3208,3186,3201,3263,3321,3282,3239,3193,3107,3062,3062,3018,3002,2929,2841,2735,2758,2570,2531,2558,2494,2421,2246,2241,2175,2143,1735,1250,850,600,607,595,628,652,686,734,743,780,784,816,845,782,791,820,1283,1403,1479,1592,1723,2223,2621,2759,2934,3091,3232,3385,3382,3650,3898,4261,4255,3969,3728,3213,3390,3258,3232,3212,2747,2398,2182,2317,2317,2126,2042,2154,2073,2041,2100,2435,3058,3527,4018,3994,4754,5602,6311,6688,6720,6827,7171,8071,8642,8653,9337,9392,9023,9277,10461,10664,10986,11819,12487,12936,13087,13994,14057,14231,14914,15118,14854,15280,14294,14173,14388],label:"حالات تتلقى العلاج",backgroundColor:"#d8b365",borderWidth:3,pointBackgroundColor:"orange",fill:!1},{data:[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,2,3,3,5,6,7,8,11,12,13,15,24,29,31,57,66,76,81,93,97,109,122,146,177,203,217,229,249,281,314,327,350,393,417,456,486,537,593,695,778,928,984,1083,1256,1438,1653,1838,2017,2179,2324,2461,2554,2811,2991,3131,3310,3400,3487,3660,3758,3901,4098,4280,4377,4638,4703,4774,4881,4978,5195,5271,5401,5459,5893,6410,6866,7195,7268,7315,7364,7408,7493,7565,7583,7618,7696,7765,7828,7937,7993,8041,8117,8223,8284,8366,8407,8468,8500,8656,8723,8740,8833,8920,9026,9090,9160,9329,9725,10173,10639,11316,11447,11827,12065,12283,12934,13442,13821,13965,14360,14620,14921,15132,15389,15636,15872,16100,16282,16438,16553,17066,17125,17311,17658,17960,18435,18968,16929,19994,20553,21548,22190,23347,24524,25385,25677,26687,27644,28566,29344,29941,31002,31576,32806,34199,35040,36343,37478,38393,40586,41901,43049],label:"المتعافون",lineTension:0,backgroundColor:"green",borderColor:"green",borderWidth:3,pointBackgroundColor:"green",fill:!1}]},options:{datasets:{bar:{categoryPercentage:1,barPercentage:.9}},elements:{line:{fill:!1},point:{radius:0}},tooltips:{mode:"index",intersect:!1},hover:{bodyalign:"right",mode:"nearest",intersect:!0},scales:{yAxes:[{display:!0,position:"right",stacked:!0,scaleLabel:{display:!0,labelString:"عدد الحالات"},gridLines:{display:!0}}],xAxes:[{display:!0,stacked:!0,scaleLabel:{display:!1,labelString:"التاريخ"},gridLines:{display:!1}}]},legend:{display:!1},responsive:!0,maintainAspectRatio:!1,layout:{padding:{left:6,right:6,top:4,bottom:6}}}}},mounted:function(){this.renderChart(this.datacollection,this.options)}},b=a("VU/8")(m,null,!1,null,null,null).exports,y=a("Pq+5"),j={extends:o.a,data:function(){return{datacollection:{labels:["22/غشت","23/غشت","24/غشت","25/غشت","26/غشت","27/غشت","28/غشت"],datasets:[{label:"حالات مؤكدة",backgroundColor:"blue",borderWidth:1,fill:!1,data:[1565,1537,903,1276,1336,1221,1404]}]},options:{datasets:{bar:{categoryPercentage:.35,barPercentage:.35}},elements:{line:{fill:!1},point:{radius:0}},tooltips:{mode:"index",intersect:!1},hover:{bodyalign:"right",mode:"nearest",intersect:!0},scales:{yAxes:[{display:!0,position:"right",stacked:!0,scaleLabel:{display:!0,labelString:"عدد الحالات"},gridLines:{display:!0}}],xAxes:[{display:!0,stacked:!0,scaleLabel:{display:!1,labelString:"التاريخ"},gridLines:{display:!1}}]},legend:{display:!1},responsive:!0,maintainAspectRatio:!1,layout:{padding:{left:6,right:6,top:4,bottom:6}}}}},mounted:function(){this.renderChart(this.datacollection,this.options)}},x=a("VU/8")(j,null,!1,null,null,null).exports,_=a("vwbq"),C=a("vHc0"),k={mounted:function(){var t,e,a,s;t=_.geoMercator().center([-10.1759,29.3701]).translate([200,185]).scale([30550]),e=_.geoPath().projection(t),a=_.scaleLinear().range(["#adfcad","#ffcb40","#ffba00","#ff7d73","#ff4e40","#ff1300"]),s=_.select("#communes").append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 800 550"),_.queue().defer(_.csv,"static/data/communes.csv").await(function(t,n){a.domain([1,10]),_.queue().defer(_.json,"static/data/communes.json").await(function(t,r){for(var i=C.feature(r,r.objects.sidi_ifni),l=0;l<n.length;l++)for(var o=n[l].NAME,c=n[l].CONFIRMEDS,d=0;d<i.features.length;d++)if(o===i.features[d].properties.NAME){i.features[d].properties.value=c;break}var u=_.select("body").append("div").attr("class","tooltip").attr("id","mapTooltip").style("opacity",0).style("background-color","white").style("border","solid").style("border-width","2px").style("border-radius","5px").style("padding","5px");s.selectAll("path").attr("class","commune").data(i.features).enter().append("path").attr("d",e).style("fill",function(t){var e=t.properties.value;return e?a(e):"#fff"}).attr("d",e).attr("d",e).attr("stroke",function(t){return"#008000"}).attr("stroke-width",function(t){return.5}).style("opacity",.8).on("mouseover",function(t){u.transition().duration(200).style("opacity",1),u.transition().style("opacity",1);var e=t.properties.NAME+"</br>";e=e+"المرضى:"+t.properties.value,u.html(e).style("left",_.event.pageX+"px").style("top",_.event.pageY-28+"px")}).on("mouseleave",function(t){u.transition().style("opacity",.8),u.transition().duration(500).style("opacity",0)});var p=[];i.features.forEach(function(t){var e=parseInt(t.properties.value);p.push(e)}),p.sort(function(t,e){return t-e}),s.selectAll("rect").data(p).enter().append("rect").attr("x",function(t,e){return e*(800/p.length)}).attr("y",410).attr("width",function(t,e){return 800/p.length}).attr("height",15).attr("fill",function(t){return a(t)}),s.selectAll("text").data([p[0],p[p.length-1]]).enter().append("text").text(function(t){return t}).attr("x",function(t,e){return 820*e-40}).attr("y",400).attr("font-size","12px").attr("font-family","sans-serif")})})}},w={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"communes"}})},staticRenderFns:[]};var E=a("VU/8")(k,w,!1,function(t){a("HqR/")},null,null).exports,z=a("vwbq"),R=a("KZx+"),A=a("vHc0"),L={mounted:function(){!function(){var t=z.map(),e=z.map(),a=z.map(),s=z.scaleLinear().domain([0,4500]).range(["#adfcad","#ffcb40","#ffba00","#ff7d73","#ff4e40","#ff1300"]),n=z.select("body").append("div").attr("class","tooltip").style("opacity",0).style("background-color","white").style("border","solid").style("border-width","2px").style("border-radius","5px").style("padding","5px"),r=z.geoMercator().center([-7.0926,31.7917]).translate([400,135]).scale([1500]),i=z.select("#provinces").append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 800 550");i.append("text").attr("x",50).attr("y",40).attr("text-anchor","middle").style("font-size","16px").style("text-decoration","underline").text("عدد المرضى");var l=z.geoPath().projection(r);z.queue().defer(z.json,"static/data/provinces.json").defer(z.csv,"static/data/provinces.csv",function(s){t.set(s.NAME,+s.CONFIRMEDS),e.set(s.NAME,+s.RECOVERERS),a.set(s.NAME,+s.DEATHS)}).await(function(e,a,r){a=A.feature(a,a.objects.provinces);i.append("g").attr("class","province").selectAll("path").data(a.features).enter().append("path").style("fill",function(e){return e.total=t.get(e.properties.NAME)||0,s(e.total)}).attr("d",l).attr("d",l).attr("stroke",function(t){return"#008000"}).attr("stroke-width",function(t){return.5}).style("opacity",.8).on("mouseover",function(e){z.select(this).transition().duration(200).style("opacity",1),n.transition().style("opacity",1),n.html("اقليم "+e.properties.NAME+"<br>عدد الاصابات: "+t.get(e.properties.NAME)).style("left",z.event.pageX+"px").style("top",z.event.pageY-28+"px")}).on("mouseleave",function(t){z.select(this).transition().style("opacity",.8),n.transition().duration(500).style("opacity",0)})}),(i=z.select("svg")).append("g").attr("class","legendLinear").attr("transform","translate(30,60)");var o=R.legendColor().shapeWidth(30).labels(["0","1125","2250","3375","4500"]).cells(5).labelWrap(30).shapeWidth(15).labelAlign("start").shapePadding(5).labelOffset(20).orient("vertical").scale(s);i.select(".legendLinear").call(o)}()}},M={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"provinces"}})},staticRenderFns:[]};var P=a("VU/8")(L,M,!1,function(t){a("HIhJ")},null,null).exports,S=a("vwbq"),N=a("KZx+"),V=a("vHc0"),F={mounted:function(){!function(){var t=S.map(),e=S.scaleLinear().domain([0,3e3]).range(["#ffffff","#ff0000"]),a=S.select("body").append("div").attr("class","tooltip").style("opacity",0),s=S.geoMercator().center([-7.0926,31.7917]).scale(1400).translate([450,160]),n=S.select("#regions").append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 900 500"),r=S.geoPath().projection(s);S.queue().defer(S.json,"static/data/regions.json").defer(S.csv,"static/data/regions.csv",function(e){t.set(e.code,(+e.taux/100*8692).toFixed(0))}).await(function(s,i,l){var o=V.feature(i,i.objects.regions);n.append("g").attr("class","region").selectAll("path").data(o.features).enter().append("path").style("fill",function(a){return a.total=t.get(a.properties.code)||0,e(a.total)}).attr("d",r).attr("class","region-border").attr("d",r).style("stroke","gray").attr("class",function(t){return"Region"}).style("opacity",.8).on("mouseover",function(t){S.select(this).transition().duration(200).style("opacity",1),a.transition().style("opacity",1),a.html("<strong>"+t.properties.name+"</strong></br>  عدد الحالات:"+t.total+'</br><hr style="height:2px;border-width:0;color:gray;background-color:gray">نسبة الاصابات عن كل 10 الاف نسمة: %'+function(t){return(t.total/1e4*100).toPrecision(2)}(t)).style("left",S.event.pageX+"px").style("top",S.event.pageY-28+"px")}).on("mouseleave",function(t){S.select(this).transition().style("opacity",.8),a.transition().duration(500).style("opacity",0)})}),(n=S.select("svg")).append("g").attr("class","legendLinear").attr("transform","translate(30,60)");var i=N.legendColor().shapeWidth(30).labels(["0","600","1200","1800","2400","3000"]).cells(6).labelWrap(20).shape("circle").shapeWidth(20).labelAlign("start").shapePadding(5).labelOffset(40).orient("vertical").scale(e);n.select(".legendLinear").call(i)}()}},q={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"regions"}})},staticRenderFns:[]};var U=a("VU/8")(F,q,!1,function(t){a("93y7")},null,null).exports,O=a("vwbq"),W={mounted:function(){!function(){var t=20,e=10,a=30,s=40,n=960-s-e,r=600-t-a,i=O.timeParse("%d-%b-%y"),l=O.scaleTime().range([0,n-20]),o=O.scaleLinear().range([r-t,0]).rangeRound([r,0]).nice(),c=O.select("body").append("div").attr("class","ttip").style("opacity",0);var d=O.select("#template").append("svg").attr("viewBox",[0,0,n+s+e,r+t+a]).append("g").attr("transform","translate("+s+","+t+")");O.queue().defer(O.csv,"static/data/template.csv").defer(O.csv,"static/data/template1.csv").await(function(e,a,s){if(console.log(a),e)throw e;a.forEach(function(t){t.date=i(t.date),t.plat=+t.plat});var n=a.filter(function(t){return!(null===t.date&&isNaN(t.plat))});s.forEach(function(t){t.date=i(t.date),t.case=+t.case});var u=s.filter(function(t){return!(null===t.date&&isNaN(t.case))});l.domain(O.extent(n,function(t){return t.date})),o.domain(O.extent(u,function(t){return t.case})),d.append("path").datum(n).attr("class","line").attr("d",O.line().curve(O.curveCardinal).x(function(t){return l(t.date)}).y(function(t){return o(t.plat)})),d.append("g").attr("transform","translate(0,"+r+")").call(O.axisBottom(l).tickSizeOuter(0)),d.append("g").attr("transform","translate(0,"+t-10+")").call(O.axisLeft(o).tickSizeOuter(0).ticks(6)),d.append("text").attr("x",120).attr("y",0+(t+360)/2).style("font","24px cabin").style("opacity","0.6").text("بلغ عدد الحالات الاجمالية 55864 اواخر شهر غشت"),d.append("text").attr("x",180).attr("y",0+(t+420)/2).style("font","24px cabin").style("opacity","0.6").text("ما يعني 1551 حالة عن كل: 1,000.000 نسمة"),d.append("text").attr("x",160).attr("y",0+(t+480)/2).style("font","24px cabin").style("opacity","0.6").text("و بلغ عدد الحالات الاسبوع الماضي 9551 حالة"),d.append("text").attr("x",600).attr("y",54).style("font","24px cabin").style("opacity","0.7").text("15/08/2020"),d.append("svg:defs").append("svg:marker").attr("id","triangle").attr("refX",6).attr("refY",6).attr("markerWidth",30).attr("markerHeight",30).attr("markerUnits","userSpaceOnUse").attr("orient","auto").append("path").attr("d","M 0 0 12 6 0 12 3 6").style("fill","black"),d.append("line").attr("x1",720).attr("y1",50).attr("x2",830).attr("y2",50).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#triangle)"),d.append("text").attr("x",545).attr("y",84).style("font","24px cabin").style("opacity","0.7").text("عدد الحالات: 1776"),d.selectAll(".bar").data(u).enter().append("rect").attr("class","bar").attr("x",function(t){return l(t.date)}).attr("y",function(t){return o(t.case)}).attr("width",5).attr("height",function(t){return r-o(t.case)}).style("opacity",.4).on("mouseover",function(t){c.transition().duration(200).style("opacity",.9),c.html(t.case).style("left",O.event.pageX-20+"px").style("top",O.event.pageY-25+"px")}).on("mouseout",function(t){c.transition().duration(500).style("opacity",0)})})}()}},H={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"template"}})},staticRenderFns:[]};var B=a("VU/8")(W,H,!1,function(t){a("595R")},null,null).exports,T={name:"Home",components:{Navigation:l.default,DailyCases:g,ComulativeCases:b,RegionsChart:d,GlobalOverview:p,CompareMonths:f,GlobalRates:y.default,LastTwoWeeks:x,CommuneMap:E,ProvinceMap:P,RegionMap:U,Temp:B}},I={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-light is-medium"},[a("div",{staticClass:"hero-head"},[a("Navigation"),t._v(" "),a("global-rates"),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"fb-share-button",staticStyle:{},attrs:{"data-href":"https://aitabin.github.io/covid-19-maroc/index.html","data-layout":"button_count"}})],1),t._v(" "),a("div",{staticClass:"hero-body"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("p",{staticClass:"subtitle"},[t._v("\n            مبيان يومي لتطور الحالة الوبائية\n            ")]),t._v(" "),a("daily-cases")],1),t._v(" "),a("div",{staticClass:"column"},[a("p",{staticClass:"subtitle"},[t._v("\n            مبيان تراكمي لتطور الحالة الوبائية\n            ")]),t._v(" "),a("comulative-cases")],1)]),t._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("p",{staticClass:"subtitle"},[t._v("\n            عدد الحالات المؤكدة حسب جهات المغرب\n            ")]),t._v(" "),a("regions-chart")],1),t._v(" "),a("div",{staticClass:"column"},[a("p",{staticClass:"subtitle"},[t._v("\n            مبيان تراكمي لتطور الحالة الوبائية حسب الاشهر\n            ")]),t._v(" "),a("compare-months")],1)]),t._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("p",{staticClass:"subtitle"},[t._v("\n            عدد الاصابات حسب الاقاليم - بعض المعطيات في انتظار التحديث\n            ")]),t._v(" "),a("province-map")],1),t._v(" "),a("div",{staticClass:"column"},[a("p",{staticClass:"subtitle"},[t._v("\n            عدد المرضى حسب جماعات سيدي افني\n            ")]),t._v(" "),a("commune-map")],1)]),t._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("p",{staticClass:"subtitle"},[t._v("\n            مبيان تراكمي لعدد المتعافين و المرضى و المتوفين\n            ")]),t._v(" "),a("global-overview")],1),t._v(" "),a("div",{staticClass:"column"},[a("p",{staticClass:"subtitle"},[t._v("\n             مبيان لعدد الحالات المؤكدة اليومية خلال الاسبوع الماضي\n            ")]),t._v(" "),a("last-two-weeks")],1)]),t._v(" "),a("div",{staticClass:"columns"},[t._m(1),t._v(" "),a("div",{staticClass:"column"},[a("p",{staticClass:"subtitle"},[t._v("\n             (26/08/2020) مبيان السيطرة على الوباء\n            ")]),t._v(" "),a("temp")],1)])]),t._v(" "),t._m(2),t._v(" "),t._m(3)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container has-text-centered"},[e("p",{staticClass:"title has-text-info"},[this._v("\n         (28/08/2020) الحالة الوبائية بالمغرب\n      ")]),this._v(" "),e("p",{staticClass:"subtitle"},[this._v("\n      بعض المبيانات التراكمية و اليومية + الخريطة الاقليمية للحالة الوبائية بالمغرب\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column"},[e("p",{staticClass:"subtitle"},[this._v("\n              المنهجية\n          ")]),this._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"card-content"},[e("p",{staticClass:"title"},[this._v('\n      باستخدم البيانات الصادرة عن وزارة الصحة المغربية، تمكنا من إنشاء مبيان شريطي وكذلك المنحنى الذي يمثل متوسط الاصابات في الأسبوع، من أجل تحديد ما إذا سينجح المغرب في "تسطيح منحنى" الاصابات\n    ')])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("p",{staticClass:"subtitle"}),this._v(" "),e("div",{staticClass:"notification is-danger"},[this._v("\n            تهيب وزارة الصحة بالمواطنات والمواطنين الالتزام بقواعد النظافة والسلامة الصحية،\n             والانخراط في التدابير الاحترازية التي اتخذتها السلطات المغربية بكل مسؤولية\n            ")])]),this._v(" "),e("div",{staticClass:"column"},[e("p",{staticClass:"subtitle"}),this._v(" "),e("div",{staticClass:"notification is-info"},[e("ul",[e("li",[this._v("الرقم الاقتصادي ألو اليقضة: 47 100 080")]),this._v(" "),e("li",[this._v("الو 141 للمساعدة الطبية الاستعجالية")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"content has-text-centered"},[e("p",[e("strong",[this._v("Ingissa")]),this._v(" by "),e("a",{attrs:{href:"#"}},[this._v("Aitabin")]),this._v(". The source code is licensed\n      "),e("a",{attrs:{href:"#"}},[this._v("BSD 2-Clause License")]),this._v(". The application content\n      is licensed "),e("a",{attrs:{href:"#"}}),this._v(".\n    ")])])])}]};var X=a("VU/8")(T,I,!1,function(t){a("au6S")},"data-v-1f0200e2",null).exports,D=a("VU/8")(null,null,!1,null,null,null).exports,G={name:"Provinces",components:{ProvinceMap:P}},Q={render:function(){var t=this.$createElement;return(this._self._c||t)("province-map")},staticRenderFns:[]};var Y=a("VU/8")(G,Q,!1,function(t){a("QCzF")},null,null).exports,K=a("VU/8")(null,null,!1,null,null,null).exports;s.a.use(i.a);var J=new i.a({routes:[{path:"/",name:"Home",component:X},{path:"/",name:"Regions",component:D},{path:"/",name:"Provinces",component:Y},{path:"/",name:"Communes",component:K}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:J,components:{App:r},template:"<App/>"})},"Pq+5":function(t,e,a){"use strict";var s=a("DdmT"),n=a.n(s),r=a("72w+");var i=function(t){a("C9LV")},l=a("VU/8")(n.a,r.a,!1,i,null,null);e.default=l.exports},QCzF:function(t,e){},VCu1:function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[this._m(0),this._v(" "),e("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[e("div",{staticClass:"navbar-end"},[e("a",{staticClass:"navbar-item is-active"},[e("router-link",{attrs:{to:"/",exact:""}},[this._v("الرئيسية")])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-brand"},[e("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}})]),this._v(" "),e("a",{staticClass:"navbar-item",attrs:{href:"/"}},[this._v("\n        انغيسا\n      ")])])}]};e.a=s},au6S:function(t,e){},"bVQ/":function(t,e,a){(function(t){t(document).ready(function(){t(".navbar-burger").click(function(){t(".navbar-burger").toggleClass("is-active"),t(".navbar-menu").toggleClass("is-active")})})}).call(e,a("7t+N"))},bwGm:function(t,e,a){"use strict";var s=a("bVQ/"),n=a.n(s),r=a("VCu1"),i=a("VU/8")(n.a,r.a,!1,null,null,null);e.default=i.exports},gsu9:function(t,e){},uslO:function(t,e,a){var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-in":"yJfC","./en-in.js":"yJfC","./en-nz":"dyB6","./en-nz.js":"dyB6","./en-sg":"NYST","./en-sg.js":"NYST","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fil":"rMbQ","./fil.js":"rMbQ","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-deva":"VGQH","./gom-deva.js":"VGQH","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./oc-lnc":"KOFO","./oc-lnc.js":"KOFO","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-mo":"+WA1","./zh-mo.js":"+WA1","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return a(r(t))}function r(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.3ee4f48d85ac7689bc5e.js.map