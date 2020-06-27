<script>

import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data () {
    return {
      datacollection: {
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
          borderWidth: 1,
          data: [
            1.26,
            28.12,
            4.93,
            0.09,
            10.07,
            0.60,
            2.92,
            15.86,
            1.69,
            16.18,
            0.76,
            17.50
          ]
        }
        ]
      },
      options: {
        datasets: { bar: { categoryPercentage: 0.6, barPercentage: 0.6 } },
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
    this.renderChart(this.datacollection, this.options)
  }
}
</script>
