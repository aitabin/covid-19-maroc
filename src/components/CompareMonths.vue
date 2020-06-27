<script>

import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data () {
    return {
      datacollection: {
        labels: ['مارس', 'ابريل', 'ماي', 'يونيو'],
        datasets: [{
          label: 'الحالات المستبعدة',
          backgroundColor: '#FA944B',
          data: [2462, 27956, 123370, 441072]// REF:441072-matin
        }, {
          label: 'الحالات المؤكدة',
          backgroundColor: '#0000ff',
          data: [617, 3806, 3154, 4303]// REF: 4059-matin
        }]
      },
      options: {
        datasets: { bar: { categoryPercentage: 0.35, barPercentage: 0.35 } },
        layout: {
          padding: {
            left: 6,
            right: 6,
            top: 4,
            bottom: 6
          }
        },
        tooltips: {
          displayColors: true,
          callbacks: {
            mode: 'x'
          }
        },
        scales: {
          xAxes: [{
            display: false,
            stacked: true,
            scaleLabel: {
              display: false,
              labelString: 'الاشهر'
            },
            gridLines: {
              display: false
            }

          }],
          yAxes: [{
            display: true,
            stacked: true,
            scaleLabel: {
              display: true,
              labelString: 'عدد الحالات المؤكدة او المستبعدة'
            },
            gridLines: {
              display: true
            }
          }]
        },
        legend: {
          display: true
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
