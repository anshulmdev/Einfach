<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Charts" subtitle="Showcase your important data in a meaningful and empowering way.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Plugins</b-breadcrumb-item>
          <b-breadcrumb-item active>Charts</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Vue Chart.js -->
      <h2 class="content-heading">Vue Chart.js</h2>
      <b-row>
        <b-col xl="6">
          <!-- Lines Chart -->
          <base-block title="Lines" content-full content-class="text-center">
            <div class="py-3">
              <chartjs-line :chart-data="chartjsLineBarsRadarData" :options="chartjsOptions"></chartjs-line>
            </div>
          </base-block>
          <!-- END Lines Chart -->
        </b-col>
        <b-col xl="6">
          <!-- Bar Chart -->
          <base-block title="Bar" content-full content-class="text-center">
            <div class="py-3">
              <chartjs-bar :chart-data="chartjsLineBarsRadarData" :options="chartjsOptions"></chartjs-bar>
            </div>
          </base-block>
          <!-- END Bar Chart -->
        </b-col>
        <b-col xl="6">
          <!-- Radar Chart -->
          <base-block title="Radar" content-full content-class="text-center">
            <div class="py-3">
              <chartjs-radar :chart-data="chartjsLineBarsRadarData" :options="chartjsOptions"></chartjs-radar>
            </div>
          </base-block>
          <!-- END Radar Chart -->
        </b-col>
        <b-col xl="6">
          <!-- Polar Area Chart -->
          <base-block title="Polar Area" content-full content-class="text-center">
            <div class="py-3">
              <chartjs-polar-area :chart-data="chartjsPolarPieDonutData" :options="chartjsOptions"></chartjs-polar-area>
            </div>
          </base-block>
          <!-- END Polar Area Chart -->
        </b-col>
        <b-col xl="6">
          <!-- Pie Chart -->
          <base-block title="Pie" content-full content-class="text-center">
            <div class="py-3">
              <chartjs-pie :chart-data="chartjsPolarPieDonutData" :options="chartjsOptions"></chartjs-pie>
            </div>
          </base-block>
          <!-- END Pie Chart -->
        </b-col>
        <b-col xl="6">
          <!-- Doughnut Chart -->
          <base-block title="Doughnut" content-full content-class="text-center">
            <div class="py-3">
              <chartjs-doughnut :chart-data="chartjsPolarPieDonutData" :options="chartjsOptions"></chartjs-doughnut>
            </div>
          </base-block>
          <!-- END Doughnut Chart -->
        </b-col>
      </b-row>
      <!-- END Vue Chart.js -->

      <!-- Vue Easy Pie Chart -->
      <h2 class="content-heading">Vue Easy Pie Chart</h2>
      <b-row>
        <b-col xl="6">
          <!-- Simple -->
          <base-block title="Simple" content-full>
            <template #options>
              <button type="button" class="btn-block-option" v-b-tooltip.hover.nofade.top="'Randomize'" @click="randomizeSimplePieCharts">
                <i class="fa fa-random"></i>
              </button>
            </template>
            <b-row class="text-center">
              <b-col cols="6" md="4" class="py-3">
                <vue-easy-pie-chart :percent="pieChartSimple[0]" :line-width="3" :size="100" bar-color="#abe37d" track-color="#eeeeee" scale-color="#dddddd">
                  80<small class="text-muted">/100</small>
                </vue-easy-pie-chart>
              </b-col>
              <b-col cols="6" md="4" class="py-3">
                <vue-easy-pie-chart :percent="pieChartSimple[1]" :line-width="3" :size="100" bar-color="#fadb7d" track-color="#eeeeee" scale-color="#dddddd">
                  45%
                </vue-easy-pie-chart>
              </b-col>
              <b-col cols="6" md="4" class="py-3">
                <vue-easy-pie-chart :percent="pieChartSimple[2]" :line-width="3" :size="100" bar-color="#faad7d" track-color="#eeeeee" scale-color="#dddddd">
                  25mb
                </vue-easy-pie-chart>
              </b-col>
              <b-col cols="6" md="4" class="py-3">
                <vue-easy-pie-chart :percent="pieChartSimple[3]" :line-width="3" :size="100" bar-color="#abe37d" track-color="#eeeeee" :scale-length="0">
                  80<small class="text-muted">/100</small>
                </vue-easy-pie-chart>
              </b-col>
              <b-col cols="6" md="4" class="py-3">
                <vue-easy-pie-chart :percent="pieChartSimple[4]" :line-width="3" :size="100" bar-color="#fadb7d" track-color="#eeeeee" :scale-length="0">
                  45%
                </vue-easy-pie-chart>
              </b-col>
              <b-col cols="6" md="4" class="py-3">
                <vue-easy-pie-chart :percent="pieChartSimple[5]" :line-width="3" :size="100" bar-color="#faad7d" track-color="#eeeeee" :scale-length="0">
                  25.00mb
                </vue-easy-pie-chart>
              </b-col>
            </b-row>
          </base-block>
          <!-- END Simple -->
        </b-col>
        <b-col xl="6">
          <!-- Avatar -->
          <base-block title="Avatar" content-full>
            <template #options>
              <button type="button" class="btn-block-option" v-b-tooltip.hover.nofade.top="'Randomize'" @click="randomizeAvatarPieCharts">
                <i class="fa fa-random"></i>
              </button>
            </template>
            <b-row class="text-center">
              <b-col cols="6" md="4" class="py-3">
                <vue-easy-pie-chart :percent="pieChartAvatar[0]" :line-width="3" :size="100" bar-color="#abe37d" track-color="#eeeeee" scale-color="#dddddd">
                  <img class="img-avatar" :src="`img/avatars/avatar1.jpg`" alt="Avatar">
                </vue-easy-pie-chart>
              </b-col>
              <b-col cols="6" md="4" class="py-3">
                <vue-easy-pie-chart :percent="pieChartAvatar[1]" :line-width="3" :size="100" bar-color="#fadb7d" track-color="#eeeeee" scale-color="#dddddd">
                  <img class="img-avatar" :src="`img/avatars/avatar2.jpg`" alt="Avatar">
                </vue-easy-pie-chart>
              </b-col>
              <b-col cols="6" md="4" class="py-3">
                <vue-easy-pie-chart :percent="pieChartAvatar[2]" :line-width="3" :size="100" bar-color="#faad7d" track-color="#eeeeee" scale-color="#dddddd">
                  <img class="img-avatar" :src="`img/avatars/avatar3.jpg`" alt="Avatar">
                </vue-easy-pie-chart>
              </b-col>
              <b-col cols="6" md="4" class="py-3">
                <vue-easy-pie-chart :percent="pieChartAvatar[3]" :line-width="3" :size="100" bar-color="#abe37d" track-color="#eeeeee" :scale-length="0">
                  <img class="img-avatar" :src="`img/avatars/avatar10.jpg`" alt="Avatar">
                </vue-easy-pie-chart>
              </b-col>
              <b-col cols="6" md="4" class="py-3">
                <vue-easy-pie-chart :percent="pieChartAvatar[4]" :line-width="3" :size="100" bar-color="#fadb7d" track-color="#eeeeee" :scale-length="0">
                  <img class="img-avatar" :src="`img/avatars/avatar11.jpg`" alt="Avatar">
                </vue-easy-pie-chart>
              </b-col>
              <b-col cols="6" md="4" class="py-3">
                <vue-easy-pie-chart :percent="pieChartAvatar[5]" :line-width="3" :size="100" bar-color="#faad7d" track-color="#eeeeee" :scale-length="0">
                  <img class="img-avatar" :src="`img/avatars/avatar12.jpg`" alt="Avatar">
                </vue-easy-pie-chart>
              </b-col>
            </b-row>
          </base-block>
          <!-- END Avatar -->
        </b-col>
      </b-row>
      <!-- END Vue Easy Pie Chart -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<style lang="scss">
// Vue Easy Pie Chart
@import '~vue-easy-pie-chart/dist/vue-easy-pie-chart.css';
</style>

<script>
// Chart.js, https://www.chartjs.org
import Chart from 'chart.js'

// Components using Vue Chart.js, for more info and examples you can check out https://github.com/apertureless/vue-chartjs
import ChartjsLine from '@/components/Chartjs/Line'
import ChartjsBar from '@/components/Chartjs/Bar'
import ChartjsRadar from '@/components/Chartjs/Radar'
import ChartjsPolarArea from '@/components/Chartjs/PolarArea'
import ChartjsPie from '@/components/Chartjs/Pie'
import ChartjsDoughnut from '@/components/Chartjs/Doughnut'

// Vue Easy Pie Chart, for more info and examples you can check out https://github.com/DotNetAge/vue-easy-pie-chart
import VueEasyPieChart from 'vue-easy-pie-chart'

export default {
  components: {
    ChartjsLine,
    ChartjsBar,
    ChartjsRadar,
    ChartjsPolarArea,
    ChartjsPie,
    ChartjsDoughnut,
    VueEasyPieChart
  },
  data () {
    return {
      chartjsOptions: {
        maintainAspectRatio: false
      },
      chartjsLineBarsRadarData: {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [
          {
            label: 'This Week',
            fill: true,
            backgroundColor: 'rgba(220,220,220,.3)',
            borderColor: 'rgba(220,220,220,1)',
            pointBackgroundColor: 'rgba(220,220,220,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            data: [30, 32, 40, 45, 43, 38, 55]
          },
          {
            label: 'Last Week',
            fill: true,
            backgroundColor: 'rgba(171, 227, 125, .3)',
            borderColor: 'rgba(171, 227, 125, 1)',
            pointBackgroundColor: 'rgba(171, 227, 125, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(171, 227, 125, 1)',
            data: [15, 16, 20, 25, 23, 25, 32]
          }
        ]
      },
      chartjsPolarPieDonutData: {
        labels: [
          'Earnings',
          'Sales',
          'Tickets'
        ],
        datasets: [{
          data: [48, 26, 26],
          backgroundColor: [
            'rgba(171, 227, 125, 1)',
            'rgba(250, 219, 125, 1)',
            'rgba(117, 176, 235, 1)'
          ],
          hoverBackgroundColor: [
            'rgba(171, 227, 125, .75)',
            'rgba(250, 219, 125, .75)',
            'rgba(117, 176, 235, .75)'
          ]
        }]
      },
      pieChartSimple: [80, 45, 25, 80, 45, 25],
      pieChartAvatar: [80, 45, 25, 80, 45, 25]
    }
  },
  methods: {
    randomizeSimplePieCharts () {
      // Randomize Pie Chart values
      this.pieChartSimple.forEach((val, index) => {
        this.$set(this.pieChartSimple, index, Math.floor((Math.random() * 100) + 1))
      })
    },
    randomizeAvatarPieCharts () {
      // Randomize Avatar Pie Chart values
      this.pieChartAvatar.forEach((val, index) => {
        this.$set(this.pieChartAvatar, index, Math.floor((Math.random() * 100) + 1))
      })
    }
  },
  created () {
    // Set default Chart.js configuration
    Chart.defaults.global.defaultFontColor              = '#999'
    Chart.defaults.global.defaultFontStyle              = '600'
    Chart.defaults.scale.gridLines.color                = "rgba(0,0,0,.05)"
    Chart.defaults.scale.gridLines.zeroLineColor        = "rgba(0,0,0,.1)"
    Chart.defaults.scale.display                        = true
    Chart.defaults.scale.ticks.beginAtZero              = true
    Chart.defaults.global.elements.line.borderWidth     = 2
    Chart.defaults.global.elements.point.radius         = 4
    Chart.defaults.global.elements.point.hoverRadius    = 6
    Chart.defaults.global.tooltips.cornerRadius         = 3
    Chart.defaults.global.legend.labels.boxWidth        = 15
  }
}
</script>