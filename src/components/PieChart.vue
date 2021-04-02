
<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  props: ['ChartData', 'ParentCallbacks'],
  data() { return {
    // ChartData: {
    //   labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    //   datasets: [
    //     {
    //       backgroundColor: [
    //         '#41B883',
    //         '#E46651',
    //         '#00D8FF',
    //         '#DD1B16'
    //       ],
    //       data: [40, 20, 80, 10],
    //     }
    //   ],
    // },
    ChartOpts: {
      responsive: true, 
      maintainAspectRatio: false,
      onClick: this.onClick,
    }
  }},
  mounted () {
    this.renderChart(this.ChartData, this.ChartOpts)
  },
  methods: {
    onClick(MouseEvt, ChartEvt) {
      this.ParentCallbacks.onSelectPie(ChartEvt[0]._index)
    },
  },
  watch: {
    ChartData() {
      console.log(this.ChartData)
      this.renderChart(this.ChartData, this.ChartOpts)
    }
  }
}
</script>