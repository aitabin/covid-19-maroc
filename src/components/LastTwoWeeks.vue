<script>

import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data () {
    return {
      datacollection: {
        labels: [
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
        datasets: [{
          label: 'حالات مؤكدة',
          backgroundColor: 'red',
          borderWidth: 3,
          fill: false,
          data: [
            101,
            92,
            46,
            66,
            77,
            539,
            226,
            138,
            195,
            172,
            563,
            431,
            295,
            244
          ]
        }
        ]
      },
      options: {
        datasets: { bar: { categoryPercentage: 0.6, barPercentage: 0.6 } },
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
