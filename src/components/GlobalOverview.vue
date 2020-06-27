<script>

import { PolarArea } from 'vue-chartjs'

export default {
  extends: PolarArea,
  data () {
    return {
      datacollection: {
        labels: [
          'الوفيات',
          'المرضى',
          'المتعافون'
        ],
        datasets: [{
          data: [
            220,
            2934,
            4723
          ],

          borderColor: ['#f443368c', '#2196f38c', '#3f51b570'],
          backgroundColor: ['#f443368c', '#2196f38c', '#00968896'],
          borderWidth: 1
        }
        ]
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          animateRotate: true,
          animateScale: true
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}
</script>
