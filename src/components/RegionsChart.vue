<script>

import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data () {
    return {
      datacollection: {
        // Data to be represented on x-axis
        labels: [
          'بني ملال-خنيفرة',
          'البيضاء-سطات',
          'درعة-تافيلالت',
          'الداخلة-وادالذهب',
          'فاس-مكناس',
          'كلميم-واد نون',
          'العيون-الساقيةالحمراء',
          'مراكش-اسفي',
          'الشرق',
          'الرباط-سلا-القنيطرة',
          'سوس-ماسة',
          'طنجة-تطوان-الحسيمة'
        ],
        datasets: [{
          backgroundColor: 'blue',
          // borderColor: colors[1],
          borderWidth: 1,
          // Data to be represented on y-axis
          data: [
            1.52,
            33.65,
            7.13,
            0.06,
            12.48,
            0.55,
            0.06,
            17.64,
            2.36,
            9.10,
            1.09,
            14.37
          ]
        }
        ]
      },
      // Chart.js options that controls the appearance of the chart
      options: {
        datasets: { bar: { categoryPercentage: 0.6, barPercentage: 1.0 } },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        legend: {
          display: false
        },

        scales: {
          layout: {
            padding: {
              left: 6,
              right: 6,
              top: 4,
              bottom: 6
            }
          },
          xAxes: [{
            // barPercentage: 0.6,
            // categoryPercentage: 0.8,
            display: false,
            scaleLabel: {
              display: true,
              labelString: 'الجهات'
            },
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'عدد الحالات المؤكدة (%)'
            },
            gridLines: {
              display: true
            }
          }]
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    // renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options)
  }
}
</script>
