<script>

import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data () {
    return {
      datacollection: {
        // Data to be represented on x-axis
        labels: [
          'المتعافون',
          'المرضى',
          'الوفيات'

        ],
        datasets: [{
          data: [
            7364,
            652,
            208
          ],

          backgroundColor: [
            '#008000',
            'rgba(0, 128, 225, 1.0)',
            'rgba(255, 0, 0, 1.0)'

          ],
          borderColor: [
            'rgba(0,255,0,1)',
            'rgba(0, 128, 225, 1)',
            'rgba(5255, 0, 0, 1)'

          ],
          borderWidth: 1
        }
        ]
      },
      // Chart.js options that controls the appearance of the chart
      options: {
        datasets: { bar: { categoryPercentage: 0.3, barPercentage: 0.6 } },
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
            // barPercentage: 0.6,
            // categoryPercentage: 1.2,
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
    // renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options)
  }
}
</script>
