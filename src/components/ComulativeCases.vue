<script>

import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data () {
    return {
      datacollection: {
        labels: [
          '02/مارس',
          '03/مارس',
          '04/مارس',
          '05/مارس',
          '06/مارس',
          '07/مارس',
          '08/مارس',
          '09/مارس',
          '10/مارس',
          '11/مارس',
          '12/مارس',
          '13/مارس',
          '14/مارس',
          '15/مارس',
          '16/مارس',
          '17/مارس',
          '18/مارس',
          '19/مارس',
          '20/مارس',
          '21/مارس',
          '22/مارس',
          '23/مارس',
          '24/مارس',
          '25/مارس',
          '26/مارس',
          '27/مارس',
          '28/مارس',
          '29/مارس',
          '30/مارس',
          '31/مارس',
          '01/ابريل',
          '02/ابريل',
          '03/ابريل',
          '04/ابريل',
          '05/ابريل',
          '06/ابريل',
          '07/ابريل',
          '08/ابريل',
          '09/ابريل',
          '10/ابريل',
          '11/ابريل',
          '12/ابريل',
          '13/ابريل',
          '14/ابريل',
          '15/ابريل',
          '16/ابريل',
          '17/ابريل',
          '18/ابريل',
          '19/ابريل',
          '20/ابريل',
          '21/ابريل',
          '22/ابريل',
          '23/ابريل',
          '24/ابريل',
          '25/ابريل',
          '26/ابريل',
          '27/ابريل',
          '28/ابريل',
          '29/ابريل',
          '30/ابريل',
          '01/ماي',
          '02/ماي',
          '03/ماي',
          '04/ماي',
          '05/ماي',
          '06/ماي',
          '07/ماي',
          '08/ماي',
          '09/ماي',
          '10/ماي',
          '11/ماي',
          '12/ماي',
          '13/ماي',
          '14/ماي',
          '15/ماي',
          '16/ماي',
          '17/ماي',
          '18/ماي',
          '19/ماي',
          '20/ماي',
          '21/ماي',
          '22/ماي',
          '23/ماي',
          '24/ماي',
          '25/ماي',
          '26/ماي',
          '27/ماي',
          '28/ماي',
          '29/ماي',
          '30/ماي',
          '31/ماي',
          '01/يونيو',
          '02/يونيو',
          '03/يونيو',
          '04/يونيو',
          '05/يونيو',
          '06/يونيو',
          '07/يونيو',
          '08/يونيو',
          '09/يونيو',
          '10/يونيو',
          '11/يونيو',
          '12/يونيو',
          '13/يونيو',
          '14/يونيو',
          '15/يونيو',
          '16/يونيو',
          '17/يونيو',
          '18/يونيو',
          '19/يونيو',
          '20/يونيو',
          '21/يونيو',
          '22/يونيو',
          '23/يونيو',
          '24/يونيو',
          '25/يونيو',
          '26/يونيو',
          '27/يونيو'
        ],
        datasets: [
          {
            data: [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              1,
              1,
              1,
              1,
              1,
              1,
              2,
              2,
              2,
              3,
              3,
              4,
              4,
              5,
              6,
              10,
              23,
              25,
              26,
              33,
              26,
              39,
              44,
              48,
              59,
              70,
              80,
              90,
              93,
              97,
              107,
              111,
              118,
              126, // cloroquine
              126,
              127,
              130,
              135,
              137,
              141,
              143,
              145,
              149,
              155,
              158,
              159,
              161,
              162,
              165,
              168,
              170,
              171,
              173,
              174,
              179,
              181,
              183,
              183,
              186,
              186,
              188,
              188,
              188,
              188,
              190,
              190,
              192,
              192,
              192,
              193,
              194,
              196,
              197,
              198,
              199,
              200,
              202,
              202,
              202,
              202,
              204,
              205,
              205,
              206,
              206,
              208,
              208,
              208,
              208,
              208,
              210,
              211,
              211,
              212,
              212,
              212,
              212,
              212,
              213,
              213,
              213,
              213,
              214,
              214,
              214,
              216,
              217,
              218,
              220
            ],
            label: 'الوفيات',
            lineTension: 0,
            backgroundColor: 'red',
            borderWidth: 3,
            pointBackgroundColor: 'red',
            fill: false
          },
          {
            data: [
              1,
              1,
              2,
              2,
              2,
              2,
              2,
              3,
              2,
              5,
              5,
              6,
              16,
              26,
              35,
              41,
              51,
              59,
              74,
              90,
              108,
              134,
              159,
              212,
              257,
              311,
              365,
              440,
              508,
              557,
              586,
              633,
              686,
              794,
              875,
              959,
              1001,
              1085,
              1168,
              1219,
              1288,
              1366,
              1434,
              1545,
              1668,
              1904,
              2148,
              2234,
              2387,
              2553,
              2671,
              2880,
              2957,
              3114,
              3201,
              3311,
              3263,
              3309,
              3225,
              3269,
              3315,
              3300,
              3291,
              3221,
              3200,
              3208,
              3186,
              3201,
              3263,
              3321,
              3282,
              3239,
              3193,
              3107,
              3062,
              3062,
              3018,
              3002,
              2929,
              2841,
              2735,
              2758,
              2570,
              2531,
              2558,
              2494,
              2421,
              2246,
              2241,
              2175,
              2143,
              1735,
              1250,
              850,
              600,
              607,
              595,
              628,
              652,
              686,
              734,
              743,
              780,
              784,
              816,
              845,
              782,
              791,
              820,
              1283,
              1403,
              1479,
              1592,
              1723,
              2223,
              2621,
              2759,
              2934
            ],
            label: 'حالات تتلقى العلاج',
            backgroundColor: 'orange',
            borderWidth: 3,
            pointBackgroundColor: 'orange',
            fill: false
          },
          {
            data: [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              1,
              1,
              1,
              1,
              1,
              2,
              2,
              3,
              3,
              5,
              6,
              7,
              8,
              11,
              12,
              13,
              15,
              24,
              29,
              31,
              57,
              66,
              76,
              81,
              93,
              97,
              109,
              122,
              146,
              177,
              203,
              217,
              229,
              249,
              281,
              314,
              327,
              350,
              393,
              417,
              456,
              486,
              537,
              593,
              695,
              778,
              928,
              984,
              1083,
              1256,
              1438,
              1653,
              1838,
              2017,
              2179,
              2324,
              2461,
              2554,
              2811,
              2991,
              3131,
              3310,
              3400,
              3487,
              3660,
              3758,
              3901,
              4098,
              4280,
              4377,
              4638,
              4703,
              4774,
              4881,
              4978,
              5195,
              5271,
              5401,
              5459,
              5893,
              6410,
              6866,
              7195,
              7268,
              7315,
              7364,
              7408,
              7493,
              7565,
              7583,
              7618,
              7696,
              7765,
              7828,
              7937,
              7993,
              8041,
              8117,
              8223,
              8284,
              8366,
              8407,
              8468,
              8500,
              8656,
              8723
            ],
            label: 'المتعافون',
            lineTension: 0,
            backgroundColor: 'green',
            borderColor: 'green',
            borderWidth: 3,
            pointBackgroundColor: 'green',
            fill: false
          }
        ]
      },
      options: {
        datasets: { bar: { categoryPercentage: 1.0, barPercentage: 0.9 } },
        elements: { line: { fill: false },
          point: {
            radius: 0
          }},
        tooltips: {
          mode: 'index',
          intersect: false
        },
        hover: {
          bodyalign: 'right',
          mode: 'nearest',
          intersect: true
        },
        scales: {
          yAxes: [{
            display: true,
            stacked: true,
            scaleLabel: {
              display: true,
              labelString: 'عدد الحالات'
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [{
            display: true,
            stacked: true,
            scaleLabel: {
              display: false,
              labelString: 'التاريخ'
            },
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 6,
            right: 6,
            top: 4,
            bottom: 6
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}
</script>
