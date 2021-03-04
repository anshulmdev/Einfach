<template>
  <div>
    <!-- Page Content -->
    <div class="content">
      <!-- Stats -->
      <b-row>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-full href="javascript:void(0)">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Visitors
              </div>
              <div class="font-size-h2 font-w400 text-dark">
                120,580
              </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-full href="javascript:void(0)">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Sales
              </div>
              <div class="font-size-h2 font-w400 text-dark">
                150
              </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-full href="javascript:void(0)">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Earnings
              </div>
              <div class="font-size-h2 font-w400 text-dark">
                $3,200
              </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-full href="javascript:void(0)">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Avg Sale
              </div>
              <div class="font-size-h2 font-w400 text-dark">
                $21
              </div>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Stats -->

      <!-- Dashboard Charts -->
      <b-row>
        <b-col lg="6">
          <!-- Earnings Chart -->
          <base-block rounded title="Earnings in $" header-bg>
            <template #options>
              <button type="button" class="btn-block-option">
                  <i class="si si-settings"></i>
              </button>
            </template>
            <template #content>
              <div class="block-content p-0">
                <div class="pt-3">
                  <chartjs-line :chart-data="chartjsEarningsData" :options="chartjsEarningsOptions" :styles="chartjsStyles"></chartjs-line>
                </div>
              </div>
              <div class="block-content">
                <b-row class="items-push text-center py-3">
                  <b-col cols="6" xl="3">
                    <i class="fa fa-wallet fa-2x text-muted"></i>
                    <div class="text-muted mt-3">$148,000</div>
                  </b-col>
                  <b-col cols="6" xl="3">
                    <i class="fa fa-angle-double-up fa-2x text-muted"></i>
                    <div class="text-muted mt-3">+9% Earnings</div>
                  </b-col>
                  <b-col cols="6" xl="3">
                    <i class="fa fa-ticket-alt fa-2x text-muted"></i>
                    <div class="text-muted mt-3">+20% Tickets</div>
                  </b-col>
                  <b-col cols="6" xl="3">
                    <i class="fa fa-users fa-2x text-muted"></i>
                    <div class="text-muted mt-3">+46% Clients</div>
                  </b-col>
                </b-row>
              </div>
            </template>
          </base-block>
          <!-- END Earnings Chart -->
        </b-col>
        <b-col lg="6">
          <!-- Sales Chart -->
          <base-block rounded title="Sales" header-bg>
            <template #options>
              <button type="button" class="btn-block-option">
                  <i class="si si-settings"></i>
              </button>
            </template>
            <template #content>
              <div class="block-content p-0">
                <div class="pt-3">
                  <chartjs-line :chart-data="chartjsSalesData" :options="chartjsSalesOptions" :styles="chartjsStyles"></chartjs-line>
                </div>
              </div>
              <div class="block-content">
                <b-row class="items-push text-center py-3">
                  <b-col cols="6" xl="3">
                    <i class="fab fa-wordpress fa-2x text-muted"></i>
                    <div class="text-muted mt-3">+20% Themes</div>
                  </b-col>
                  <b-col cols="6" xl="3">
                    <i class="fa fa-font fa-2x text-muted"></i>
                    <div class="text-muted mt-3">+25% Fonts</div>
                  </b-col>
                  <b-col cols="6" xl="3">
                    <i class="fa fa-archive fa-2x text-muted"></i>
                    <div class="text-muted mt-3">-10% Icons</div>
                  </b-col>
                  <b-col cols="6" xl="3">
                    <i class="fa fa-paint-brush fa-2x text-muted"></i>
                    <div class="text-muted mt-3">+8% Graphics</div>
                  </b-col>
                </b-row>
              </div>
            </template>
          </base-block>
          <!-- END Sales Chart -->
        </b-col>
      </b-row>
      <!-- END Dashboard Charts -->

      <!-- Customers and Latest Orders -->
      <b-row class="row-deck">
        <!-- Latest Customers -->
        <b-col xl="6">
          <base-block rounded title="Latest Customers" header-bg content-full>
            <template #options>
              <button type="button" class="btn-block-option">
                <i class="si si-settings"></i>
              </button>
            </template>
            <b-table-simple striped hover borderless class="table-vcenter font-size-sm mb-0">
              <b-thead>
                <b-tr>
                  <b-th class="font-w700" style="width: 80px;">ID</b-th>
                  <b-th class="d-none d-lg-table-cell font-w700 text-center" style="width: 100px;">Photo</b-th>
                  <b-th class="font-w700">Name</b-th>
                  <b-th class="d-none d-sm-table-cell font-w700 text-center" style="width: 80px;">Orders</b-th>
                  <b-th class="font-w700 text-center" style="width: 60px;"></b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="customer in latestCustomers" :key="customer.id">
                  <b-td class="font-w600">
                    {{ customer.id }}
                  </b-td>
                  <b-td class="d-none d-sm-table-cell text-center">
                    <img class="img-avatar img-avatar32" :src="`img/avatars/${customer.avatar}.jpg`" alt="Avatar">
                  </b-td>
                  <b-td>
                    <a class="link-fx font-w600" href="javascript:void(0)">{{ customer.name }}</a>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell text-center">
                    <a class="link-fx font-w600" href="javascript:void(0)">{{ customer.orders }}</a>
                  </b-td>
                  <b-td class="text-center">
                    <a href="javascript:void(0)" v-b-tooltip.hover.nofade.left="'Edit'">
                      <i class="fa fa-fw fa-pencil-alt"></i>
                    </a>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </base-block>
        </b-col>
        <!-- END Latest Customers -->

        <!-- Latest Orders -->
        <b-col xl="6">
          <base-block rounded title="Latest Orders" header-bg content-full>
            <template #options>
              <button type="button" class="btn-block-option">
                <i class="si si-settings"></i>
              </button>
            </template>
            <b-table-simple striped hover borderless class="table-vcenter font-size-sm mb-0">
              <b-thead>
                <b-tr>
                  <b-th class="font-w700">ID</b-th>
                  <b-th class="d-none d-sm-table-cell font-w700">Date</b-th>
                  <b-th class="font-w700">State</b-th>
                  <b-th class="d-none d-sm-table-cell font-w700 text-right" style="width: 120px;">Total</b-th>
                  <b-th class="font-w700 text-center" style="width: 60px;"></b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="order in latestOrders" :key="order.id">
                  <b-td>
                    <a class="font-w600" href="javascript:void(0)">#{{ order.id }}</a>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell">
                    {{ order.date }}
                  </b-td>
                  <b-td>
                    <span class="font-w600" :class="`text-${order.stateVariant}`">{{ order.state }}</span>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell text-right">
                    {{ order.total }}
                  </b-td>
                  <b-td class="text-center">
                    <a href="javascript:void(0)" v-b-tooltip.hover.nofade.left="'Manage'">
                      <i class="fa fa-fw fa-pencil-alt"></i>
                    </a>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </base-block>
        </b-col>
        <!-- END Latest Orders -->
      </b-row>
      <!-- END Customers and Latest Orders -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
// Chart.js, https://www.chartjs.org
import Chart from 'chart.js'

// Line Chart component using Vue Chart.js, for more info and examples you can check out https://github.com/apertureless/vue-chartjs
import ChartjsLine from '@/components/Chartjs/Line'

export default {
  components: {
    ChartjsLine
  },
  data () {
    return {
      chartjsStyles: {
        position: 'relative',
        height: '344px'
      },
      chartjsEarningsOptions: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              suggestedMax: 3000
            }
          }]
        },
        tooltips: {
          intersect: false,
          callbacks: {
            label: (tooltipItems) => {
              return ' $' + tooltipItems.yLabel
            }
          }
        }
      },
      chartjsSalesOptions: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              suggestedMax: 260
            }
          }]
        },
        tooltips: {
          intersect: false,
          callbacks: {
            label: (tooltipItems) => {
              return ' ' + tooltipItems.yLabel + ' Sales'
            }
          }
        }
      },
      chartjsEarningsData: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [
          {
            label: 'This Year',
            fill: true,
            backgroundColor: 'rgba(132, 94, 247, .3)',
            borderColor: 'transparent',
            pointBackgroundColor: 'rgba(132, 94, 247, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(132, 94, 247, 1)',
            data: [2150, 1350, 1560, 980, 1260, 1720, 1115, 1690, 1870, 2420, 2100, 2730]
          },
          {
            label: 'Last Year',
            fill: true,
            backgroundColor: 'rgba(233, 236, 239, 1)',
            borderColor: 'transparent',
            pointBackgroundColor: 'rgba(233, 236, 239, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(233, 236, 239, 1)',
            data: [2200, 1700, 1100, 1900, 1680, 2560, 1340, 1450, 2000, 2500, 1550, 1880]
          }
        ]
      },
      chartjsSalesData: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [
          {
            label: 'This Year',
            fill: true,
            backgroundColor: 'rgba(34, 184, 207, .3)',
            borderColor: 'transparent',
            pointBackgroundColor: 'rgba(34, 184, 207, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(34, 184, 207, 1)',
            data: [175, 120, 169, 82, 135, 169, 132, 130, 192, 230, 215, 260]
          },
          {
            label: 'Last Year',
            fill: true,
            backgroundColor: 'rgba(233, 236, 239, 1)',
            borderColor: 'transparent',
            pointBackgroundColor: 'rgba(233, 236, 239, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(233, 236, 239, 1)',
            data: [220, 170, 110, 215, 168, 227, 154, 135, 210, 240, 145, 178]
          }
        ]
      },
      latestCustomers: [
        {
          id: 1521,
          avatar: 'avatar11',
          name: 'Adam McCoy',
          orders: 5
        },
        {
          id: 1520,
          avatar: 'avatar1',
          name: 'Betty Kelley',
          orders: 7
        },
        {
          id: 1519,
          avatar: 'avatar5',
          name: 'Jesse Fisher',
          orders: 12
        },
        {
          id: 1518,
          avatar: 'avatar12',
          name: 'Ryan Flores',
          orders: 19
        },
        {
          id: 1517,
          avatar: 'avatar3',
          name: 'Alice Moore',
          orders: 2
        },
        {
          id: 1516,
          avatar: 'avatar13',
          name: 'Scott Young',
          orders: 5
        },
        {
          id: 1515,
          avatar: 'avatar14',
          name: 'Ralph Murray',
          orders: 9
        }
      ],
      latestOrders: [
        {
          id: 7835,
          date: 'today',
          state: 'Pending..',
          stateVariant: 'warning',
          total: '$999,99'
        },
        {
          id: 7834,
          date: 'today',
          state: 'Pending..',
          stateVariant: 'warning',
          total: '$2.299,00'
        },
        {
          id: 7833,
          date: 'today',
          state: 'Success',
          stateVariant: 'success',
          total: '$1200,00'
        },
        {
          id: 7832,
          date: 'today',
          state: 'Cancelled',
          stateVariant: 'danger',
          total: '$399,00'
        },
        {
          id: 7831,
          date: 'today',
          state: 'Success',
          stateVariant: 'success',
          total: '$349,00'
        },
        {
          id: 7830,
          date: 'today',
          state: 'Success',
          stateVariant: 'success',
          total: '$999,00'
        },
        {
          id: 7829,
          date: 'today',
          state: 'Success',
          stateVariant: 'success',
          total: '$39,99'
        },
        {
          id: 7828,
          date: 'today',
          state: 'Success',
          stateVariant: 'success',
          total: '$499,00'
        },
        {
          id: 7827,
          date: 'today',
          state: 'Success',
          stateVariant: 'success',
          total: '$325,00'
        }
      ]
    }
  },
  created () {
    // Set Chart.js configuration
    Chart.defaults.global.defaultFontColor              = '#495057'
    Chart.defaults.global.defaultFontStyle              = '600'
    Chart.defaults.scale.gridLines.color                = 'transparent'
    Chart.defaults.scale.gridLines.zeroLineColor        = 'transparent'
    Chart.defaults.scale.display                        = false
    Chart.defaults.scale.ticks.beginAtZero              = true
    Chart.defaults.global.elements.line.borderWidth     = 0
    Chart.defaults.global.elements.point.radius         = 0
    Chart.defaults.global.elements.point.hoverRadius    = 0
    Chart.defaults.global.tooltips.cornerRadius         = 3
    Chart.defaults.global.legend.labels.boxWidth        = 12
  }
}
</script>
