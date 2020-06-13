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
          data: [2462, 27956, 123370, 93534]// REF:123370
        }, {
          label: 'الحالات المؤكدة',
          backgroundColor: '#0000ff',
          data: [617, 3806, 3154, 376]// REF: 3154
        }]
      },
      // Chart.js options that controls the appearance of the chart
      options: {
        datasets: { bar: { categoryPercentage: 0.3, barPercentage: 0.7 } },
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
            // barPercentage: 0.3,
            // categoryPercentage: 0.4,
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
            // barPercentage: 0.3,
            // categoryPercentage: 0.4,
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
    // renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options)
  }
}
</script>
