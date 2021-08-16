<template>
<div>
  <div v-if="$store.state.firestoreData">
    <div class="bg-body-light">
      <div class="content content-full">
        <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center text-center text-sm-left">
          <div class="flex-sm-fill">
            <h1 class="h3 font-w700 mb-1">Main Dashboard</h1>
            <h2 class="h6 font-w500 text-muted mb-0">
              Welcome {{ $store.state.scoreData }} <a class="font-w600" href="javascript:void(0)">{{ $store.state.firestoreData.user.name.split(" ")[0] }}</a
              >, everything looks great.
            </h2>
          </div>
          <div class="mt-3 mt-sm-0 ml-sm-3">
            <b-button v-if="$store.state.firestoreData.assignment" @click="$router.push('/backend/applicants/assignment')" variant="alt-success" class="mr-1" v-click-ripple > <i class="fa fa-eye mr-1"></i> View Assignment </b-button>
            <b-button variant="alt-primary" class="mr-1" v-click-ripple @click="$store.state.newAssignment.active = true"> <i class="fa fa-plus-square mr-1"></i> New Assignment </b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <!-- Statistic Cards -->
      <b-row>
        <b-col cols="6" md="3" lg="6" xl="3">
          <router-link to="/backend/applicants/users/applied">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">Applications</div>
              <div class="font-size-h3">
                {{ $store.state.firestoreData.candidates.applied.length }}
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-warning-light rounded-lg"></div>
            </div>
          </base-block>
          </router-link>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <router-link to="/backend/applicants/users/invited">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">Invited</div>
              <div class="font-size-h3">
                {{ $store.state.firestoreData.candidates.invited.length }}
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-info-light rounded-lg"></div>
            </div>
          </base-block>
          </router-link>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <router-link to="/backend/applicants/users/shortlisted">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">Shortlisted</div>
              <div class="font-size-h3">
                {{ $store.state.firestoreData.candidates.shortlisted.length }}
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-success-light rounded-lg"></div>
            </div>
          </base-block>
          </router-link>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <router-link to="/backend/applicants/users/rejected">
          <base-block tag="a" rounded link-pop content-class="d-flex py-4">
            <div class="flex-grow-1">
              <div class="font-size-sm font-w600 text-uppercase text-muted">Auto Rejected</div>
              <div class="font-size-h3">
                {{ $store.state.firestoreData.candidates.rejected.length }}
              </div>
            </div>
            <div class="d-flex ml-2">
              <div class="flex-grow-1 px-1 bg-danger-light rounded-lg"></div>
            </div>
          </base-block>
          </router-link>
        </b-col>
      </b-row>
      <!-- Invited and Ongoing -->
      <b-row class="row-deck">

        <b-col xl="6">
          <base-block rounded title="Recent Invited" header-bg content-full>
            <template #options> </template>
            <b-table-simple striped hover borderless class="table-vcenter font-size-sm mb-0">
              <b-thead>
                <b-tr>
                  <b-th class="font-w700">ID</b-th>
                  <b-th class="d-none d-lg-table-cell font-w700 text-center">CV</b-th>
                  <b-th class="font-w700">Name</b-th>
                  <b-th class="d-none d-sm-table-cell font-w700 text-center">Score</b-th>
                  <b-th class="d-none d-sm-table-cell font-w700 text-center">Date</b-th>
                </b-tr>
              </b-thead>
              <b-tbody v-if="$store.state.firestoreData.candidates.invited.length">
                <b-tr v-for="(invited, index) in $store.state.firestoreData.candidates.invited.slice(0, 5)" :key="index">
                  <b-td class="font-w600">
                    {{ index }}
                  </b-td>
                  <b-td class="d-none d-sm-table-cell text-center">
                    <a v-b-modal.modal-block-extra-large2 @click="url = invited.resume"> 
                      <i class="fa fa-file-pdf text-primary mr-1 align-middle" color="primary" style="font-size: 1.5em;"></i>
                    </a>
                  </b-td>
                  <b-td>
                    <router-link :to="`/backend/applicants/details/${invited.email}`">{{ invited.name }}</router-link>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell text-center">{{ $store.state.applicantScores[invited.email] ? $store.state.applicantScores[invited.email] : 0 }} </b-td>
                  <b-td class="d-none d-sm-table-cell text-center">{{ invited.time ? invited.time.slice(0, 15) : "Not Added" }} </b-td>
                </b-tr>
              </b-tbody>

              <b-tbody v-else>
                <b-tr>
                  <b-td>
                    <a class="font-w600" href="javascript:void(0)"># 007</a>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell">
                    Dummy Entry
                  </b-td>
                  <b-td class="d-none d-sm-table-cell">
                    James Bond
                  </b-td>
                  <b-td>
                      <b-col class="col-lg-4">
                        <b-badge variant="success">100</b-badge></b-col>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell text-center">
                    01 Aug 2021
                  </b-td>
                  <b-td class="text-center">
                    <a v-b-tooltip.hover.nofade.left="'No shortlist Entry'">
                      <i class="fa fa-fw fa-times text-danger"></i>
                    </a>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </base-block>
        </b-col>
        <b-col xl="6">
          <base-block rounded title="Ongoing Assignments" header-bg content-full>
            <template #options> </template>
            <b-table-simple striped hover borderless class="table-vcenter font-size-sm mb-0">
              <b-thead>
                <b-tr>
                  <b-th class="font-w700" style="width: 10%">ID</b-th>
                  <b-th class="d-none d-sm-table-cell font-w700" style="width: 30%">Name</b-th>
                  <b-th class="font-w700" style="width: 10%">Tag</b-th>
                  <b-th class="d-none d-sm-table-cell font-w700 text-center" style="width: 40%">Start Time</b-th>
                  <b-th class="font-w700 text-center" style="width: 10%"></b-th>
                </b-tr>
              </b-thead>
              <b-tbody v-if="$store.state.firestoreData.candidates.ongoing.length">
                <b-tr v-for="(order, index) in $store.state.firestoreData.candidates.ongoing.slice(0, 10)" :key="index">
                  <b-td>
                    <a class="font-w600" href="javascript:void(0)"># {{ index }}</a>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell">
                    <router-link :to="`/backend/applicants/details/${order.email}`">
                    {{ order.name }}
                    </router-link>
                  </b-td>
                  <b-td>
                    <b-row v-for="(value, index) in order.tags" :key="index">
                      <b-col class="col-lg-4">
                        <b-badge :variant="index">{{ value }}</b-badge></b-col
                      >
                    </b-row>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell text-center">
                    {{ order.timeStamp ? new Date(order.timeStamp).toLocaleString("en-US") : "Not Added" }}
                  </b-td>
                  <b-td class="text-center">
                    <a @click="deleteEntry(order.name, order.email, index)" v-b-tooltip.hover.nofade.left="'Archive It'">
                      <i class="fa fa-fw fa-archive text-warning"></i>
                    </a>
                  </b-td>
                </b-tr>
              </b-tbody>
              <b-tbody v-else>
                <b-tr>
                  <b-td>
                    <a class="font-w600" href="javascript:void(0)">#7</a>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell">
                    John Doe
                  </b-td>
                  <b-td>
                      <b-col class="col-lg-4">
                        <b-badge variant="success">Demo Entry</b-badge></b-col>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell text-center">
                    01 Aug 2021
                  </b-td>
                  <b-td class="text-center">
                    <a v-b-tooltip.hover.nofade.left="'No Ongoing Entry'" style="cursor:pointer">
                      <i class="fa fa-fw fa-times text-danger"></i>
                    </a>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </base-block>
        </b-col>

        <b-modal id="modal-block-extra-large" size="xl" body-class="p-0" hide-footer hide-header>
          <div class="block block-rounded block-themed block-transparent mb-0">
            <div class="block-header bg-primary-dark">
              <h3 class="block-title">Candidate Resume</h3>
              <div class="block-options">
                <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-extra-large')">
                  <i class="fa fa-fw fa-times"></i>
                </button>
              </div>
            </div>
            <div class="block-content font-size-sm">
              <iframe :src="url" width="100%" height="600"> </iframe>
            </div>
            <div class="block-content block-content-full text-right border-top">
              <b-button variant="alt-success" class="mr-1" @click="$bvModal.hide('modal-block-extra-large')">Close</b-button>
              <b-button variant="success" @click="$bvModal.hide('modal-block-extra-large')">Ok</b-button>
            </div>
          </div>
        </b-modal>
      </b-row>

      <b-modal id="modal-block-extra-large2" size="xl" body-class="p-0" hide-footer hide-header>
        <div class="block block-rounded block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Applicant's Resume</h3>
            <div class="block-options">
              <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-extra-large2')">
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <div class="block-content font-size-sm">
            <iframe :src="url" width="100%" height="600"> </iframe>
          </div>
          <div class="block-content block-content-full text-right border-top">
            <b-button variant="alt-success" class="mr-1" @click="$bvModal.hide('modal-block-extra-large2')">Close</b-button>
            <b-button variant="success" @click="$bvModal.hide('modal-block-extra-large2')">Ok</b-button>
          </div>
        </div>
      </b-modal>

      <!-- Bar Graphs-->

      <b-row>
        <b-col lg="6">
          <base-block rounded title="Application and Languages" header-bg>
            <template #options> </template>
            <template #content>
              <div class="block-content p-0">
                <div class="pt-3">
                  <chartjs-line :chart-data="chartjsSalesData" :options="chartjsSalesOptions" :styles="chartjsStyles"></chartjs-line>
                </div>
              </div>
              <div class="block-content">
                <b-row class="items-push text-center py-3">
                  <b-col cols="6" xl="3">
                    <i class="fab fa-js fa-2x opacity-50"></i>
                    <p class="font-size-sm font-w500 text-muted mt-3 mb-0">JavaScript</p>
                  </b-col>
                  <b-col cols="6" xl="3">
                    <i class="fab fa-git-alt fa-2x opacity-50"></i>
                    <p class="font-size-sm font-w500 text-muted mt-3 mb-0">Git</p>
                  </b-col>
                  <b-col cols="6" xl="3">
                    <i class="fab fa-python fa-2x opacity-50"></i>
                    <p class="font-size-sm font-w500 text-muted mt-3 mb-0">Python</p>
                  </b-col>
                  <b-col cols="6" xl="3">
                    <i class="fab fa-java fa-2x opacity-50"></i>
                    <p class="font-size-sm font-w500 text-muted mt-3 mb-0">Java</p>
                  </b-col>
                </b-row>
              </div>
            </template>
          </base-block>
        </b-col>
        <b-col lg="6">
          <base-block rounded title="Application Stages" header-bg>
            <template #options> </template>
            <template #content>
              <div class="block-content p-0">
                <div class="pt-3">
                  <chartjs-bar :chart-data="chartjsEarningsData" :options="chartjsEarningsOptions" :styles="chartjsStyles"></chartjs-bar>
                </div>
              </div>
              <div class="block-content">
                <b-row class="items-push text-center py-3">
                  <b-col cols="6" xl="2">
                    <i class="fa fa-user fa-2x opacity-50"></i>
                    <p class="font-size-sm font-w500 text-muted mt-3 mb-0">Applied</p>
                  </b-col>
                  <b-col cols="6" xl="2">
                    <i class="fa fa-user-plus fa-2x opacity-50"></i>
                    <p class="font-size-sm font-w500 text-muted mt-3 mb-0">Invited</p>
                  </b-col>
                  <b-col cols="6" xl="2">
                    <i class="fa fa-user-cog fa-2x opacity-50"></i>
                    <p class="font-size-sm font-w500 text-muted mt-3 mb-0">Ongoing</p>
                  </b-col>
                  <b-col cols="6" xl="2">
                    <i class="fa fa-user-check fa-2x opacity-50"></i>
                    <p class="font-size-sm font-w500 text-muted mt-3 mb-0">Shortlisted</p>
                  </b-col>
                  <b-col cols="6" xl="2">
                    <i class="fa fa-user-times fa-2x opacity-50"></i>
                    <p class="font-size-sm font-w500 text-muted mt-3 mb-0">Rejected</p>
                  </b-col>
                  <b-col cols="6" xl="2">
                    <i class="fa fa-users fa-2x opacity-50"></i>
                    <p class="font-size-sm font-w500 text-muted mt-3 mb-0">Completed</p>
                  </b-col>
                </b-row>
              </div>
            </template>
          </base-block>
        </b-col>
      </b-row>
    </div>
  </div>
  <div v-else>
      <div class="hero-static d-flex align-items-center">
    <div class="w-100">
      <!-- Maintenance Section -->
      <div class="bg-white">
        <div class="content content-full">
          <b-row class="justify-content-center">
            <b-col md="8" lg="6" xl="4" class="py-6">
              <!-- Header -->
              <div class="text-center">
                <p>
                  <i class="fa fa-3x fa-cog fa-spin text-success"></i>
                </p>
                <h1 class="h4 mb-1">
                  Please wait while we set things up 🙂
                </h1>
                <h2 class="h6 font-w400 text-muted mb-3">
                  Establishing realtime connection...
                </h2>
              </div>
              <!-- END Header -->
            </b-col>
          </b-row>
        </div>
      </div>
      <!-- END Maintenance Section -->
      <!-- Footer -->
      <div class="font-size-sm text-center text-muted py-3">
        <strong>{{ $store.getters.appName + ' ' + $store.getters.appVersion }}</strong> &copy; {{ $store.getters.appCopyright }}
      </div>
      <!-- END Footer -->
    </div>
  </div>
  </div>
  </div>
</template>

<script>
// Chart.js, https://www.chartjs.org
import Chart from "chart.js"

// Line Chart component using Vue Chart.js, for more info and examples you can check out https://github.com/apertureless/vue-chartjs
import ChartjsLine from "@/components/Chartjs/Line"
import ChartjsBar from "@/components/Chartjs/Bar"
import firebase from "../firebase"

export default {
  components: {
    ChartjsLine,
    ChartjsBar,
  },
  data() {
    return {
      ongoing: [],
      shortlisted: [],
      url: "https://static.thenounproject.com/png/543772-200.png",
      chartjsStyles: {
        position: "relative",
        height: "344px",
      },
      chartjsEarningsOptions: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMax: 100,
              },
            },
          ],
        },
        tooltips: {
          intersect: false,
          callbacks: {
            label: (tooltipItems) => {
              return tooltipItems.yLabel
            },
          },
        },
      },
      chartjsSalesOptions: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMax: 260,
              },
            },
          ],
        },
        tooltips: {
          intersect: false,
          callbacks: {
            label: (tooltipItems) => {
              return " " + tooltipItems.yLabel + " Applications"
            },
          },
        },
      },
    }
  },
  computed: {
    chartjsEarningsData() {
      const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
      return {
        labels: ["Applied", "Invited", "Ongoing", "Shortlisted", "Rejected", "Completed"],
        datasets: [
          {
            label: `${monthNames[(new Date()).getMonth()]} - ${String(new Date()).slice(10, 15)}`,
            fill: true,
            backgroundColor: "rgba(132, 94, 247, .3)",
            borderColor: "transparent",
            pointBackgroundColor: "rgba(132, 94, 247, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(132, 94, 247, 1)",
            data: [
              this.$store.state.firestoreData.candidates.applied.length ? this.$store.state.firestoreData.candidates.applied.filter((e) => (new Date(e.time)).getMonth() === (new Date()).getMonth()).length : 0,
              this.$store.state.firestoreData.candidates.invited.length ? this.$store.state.firestoreData.candidates.invited.filter((e) => (new Date(e.time)).getMonth() === (new Date()).getMonth()).length : 0,
              this.$store.state.firestoreData.candidates.ongoing.length ? this.$store.state.firestoreData.candidates.ongoing.filter((e) => (new Date(e.time)).getMonth() === (new Date()).getMonth()).length : 0,
              this.$store.state.firestoreData.candidates.shortlisted.length ? this.$store.state.firestoreData.candidates.shortlisted.filter((e) => (new Date(e.time)).getMonth() === (new Date()).getMonth()).length : 0,
              this.$store.state.firestoreData.candidates.rejected.length ? this.$store.state.firestoreData.candidates.rejected.filter((e) => (new Date(e.time)).getMonth() === (new Date()).getMonth()).length : 0,
              this.$store.state.firestoreData.candidates.completed.length ? this.$store.state.firestoreData.candidates.completed.filter((e) => (new Date(e.time)).getMonth() === (new Date()).getMonth()).length : 0,
            ],
          },
        ],
      }
    },
    chartjsSalesData() {
      const stats = { lastYear: new Array(12).fill(0), currentYear: new Array(12).fill(0) }
      const candidateList = []
      Object.keys(this.$store.state.firestoreData.candidates).forEach((category) => {
        Object.values(this.$store.state.firestoreData.candidates[category]).forEach((applicant) => {
          candidateList.push(applicant)
          if (new Date().getYear() === new Date(applicant.time).getYear()) {
            stats.currentYear[new Date(applicant.time).getMonth()] += 1
          }
          if (new Date().getYear() - 1 === new Date(applicant.time).getYear()) {
            stats.lastYear[new Date(applicant.time).getMonth()] += 1
          }
        })
      })
      return {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [
          {
            label: "This Year",
            fill: true,
            backgroundColor: "rgba(34, 184, 207, .3)",
            borderColor: "transparent",
            pointBackgroundColor: "rgba(34, 184, 207, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(34, 184, 207, 1)",
            data: stats.currentYear,
          },
          {
            label: "Last Year",
            fill: true,
            backgroundColor: "rgba(233, 236, 239, 1)",
            borderColor: "transparent",
            pointBackgroundColor: "rgba(233, 236, 239, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(233, 236, 239, 1)",
            data: stats.lastYear,
          },
        ],
      }
    },
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    async deleteEntry(name, email, index) {
      const confirmation = await this.$swal({
        title: "Are you sure?",
        text: "Applicant will be moved to Completed",
        icon: "warning",
        showCancelButton: true,
        customClass: {
          confirmButton: "btn btn-warning m-1",
          cancelButton: "btn btn-secondary m-1",
        },
        confirmButtonText: "Yes, archive it!",
        html: false,
        preConfirm: () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve()
            }, 50)
          })
        },
      })
      if (confirmation.isConfirmed) {
        let details = this.$store.state.firestoreData.candidates.ongoing[index]
        const entry = await firebase.firestore().collection("accounts").doc(this.$store.state.firestoreData.docId)
        await entry.update({
          "candidates.ongoing": firebase.firestore.FieldValue.arrayRemove(details),
        })
        await entry.update({
          "candidates.completed": firebase.firestore.FieldValue.arrayUnion(details),
        })
      }
    },
  },
  created() {
    // Set Chart.js configuration
    Chart.defaults.global.defaultFontColor = "#495057"
    Chart.defaults.global.defaultFontStyle = "600"
    Chart.defaults.scale.gridLines.color = "transparent"
    Chart.defaults.scale.gridLines.zeroLineColor = "transparent"
    Chart.defaults.scale.display = false
    Chart.defaults.scale.ticks.beginAtZero = true
    Chart.defaults.global.elements.line.borderWidth = 0
    Chart.defaults.global.elements.point.radius = 0
    Chart.defaults.global.elements.point.hoverRadius = 0
    Chart.defaults.global.tooltips.cornerRadius = 3
    Chart.defaults.global.legend.labels.boxWidth = 12
  },
}
</script>
