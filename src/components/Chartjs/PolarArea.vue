<script>
// Vue Chart.js, for more info and examples you can check out https://github.com/apertureless/vue-chartjs
import { PolarArea, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: PolarArea,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>