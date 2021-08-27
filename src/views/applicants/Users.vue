<template>
<div>
  <div v-if="$store.state.firestoreData">
    <!-- Hero -->
    <base-page-heading :title="`${$route.params.id[0].toUpperCase() + $route.params.id.slice(1)} Applicants`" :subtitle="`View all the ${$route.params.id} candidates`">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Applicants</b-breadcrumb-item>
          <b-breadcrumb-item active>{{ $route.params.id[0].toUpperCase() + $route.params.id.slice(1) }}</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->
    <!-- Page Content -->
    <div class="content">
      <!-- Full Table -->
      <base-block rounded :title="`${$route.params.id} Applications`">
        <template #options>
          <b-dropdown :id="`dropdown-default-outline-${theme[$route.params.id]} btn-sm`" :variant="`outline-${theme[$route.params.id]} btn-sm`" text="Show Entries">
            <b-dropdown-item @click="perPage = 10" class="font-size-sm">10 per page</b-dropdown-item>
            <b-dropdown-item @click="perPage = 20" class="font-size-sm">20 per page</b-dropdown-item>
            <b-dropdown-item @click="perPage = 50" class="font-size-sm">50 per page</b-dropdown-item>
            <b-dropdown-item @click="perPage = 100" class="font-size-sm">100 per page</b-dropdown-item>
          </b-dropdown>
          <b-dropdown :id="`dropdown-default-outline-${theme[$route.params.id]} btn-sm`" :variant="`outline-${theme[$route.params.id]} btn-sm`" text="Actions">
            <b-dropdown-item @click="executeAction('im')" class="font-size-sm"><i class="fa fa-fw fa-paper-plane mr-1" />Send invite mail</b-dropdown-item>
            <b-dropdown-item @click="executeAction('sm')" class="font-size-sm"><i class="fa fa-fw fa-paper-plane mr-1" />Send shortlist mail</b-dropdown-item>
            <b-dropdown-item @click="executeAction('rm')" class="font-size-sm"><i class="fa fa-fw fa-paper-plane mr-1" />Send Rejection mail</b-dropdown-item>
            <b-dropdown-item @click="executeAction('ms')" class="font-size-sm"><i class="fa fa-fw fa-arrow-alt-circle-right mr-1" />Move to Shortlisted</b-dropdown-item>
            <b-dropdown-item @click="executeAction('mr')" class="font-size-sm"><i class="fa fa-fw fa-arrow-alt-circle-right mr-1" />Move to Rejected</b-dropdown-item>
            <b-dropdown-item @click="executeAction('ma')" class="font-size-sm"><i class="fa fa-fw fa-arrow-alt-circle-right mr-1" />Move to Applied</b-dropdown-item>
            <b-dropdown-item @click="executeAction('as')" class="font-size-sm"><i class="fa fa-fw fa-archive mr-1" />Archive selected</b-dropdown-item>
          </b-dropdown>
        </template>
        <b-table-simple responsive bordered striped table-class="table-vcenter">
          <b-thead>
            <b-tr>
              <b-th class="text-center" style="width: 5%"> 
                <i class="far fa-fw fa-dot-circle mr-1" />
              </b-th>
              <b-th class="text-center" style="width: 10%"> Resume </b-th>
              <b-th style="width: 15%">Name</b-th>
              <b-th style="width: 15%">Email</b-th>
              <b-th style="width: 10%">Tags</b-th>
              <b-th style="width: 10%">Score</b-th>
              <b-th style="width: 20%">Date</b-th>
              <b-th class="text-center" style="width: 20%">Actions</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="(user, index) in filteredArray" :key="index">
              <b-td class="font-w600 font-size-sm text-center" :class="`text-${theme[$route.params.id]}`">
                <b-form-checkbox-group v-model="selected" stacked>
                  <b-form-checkbox class="custom-control-lg ml-1" :value="index" />
                </b-form-checkbox-group>
              </b-td>
              <b-td class="text-center">
                <a v-b-modal.modal-block-extra-large @click="url = user.resume">
                  <i class="fa fa-file-pdf mr-1 align-middle" :class="`text-${theme[$route.params.id]}`" :color="theme[$route.params.id]" style="font-size: 1.5em"></i>
                </a>
              </b-td>
              <b-td class="font-w600 font-size-sm" :class="`text-${theme[$route.params.id]}`">
                <router-link :to="`/backend/applicants/details/${user.email}`">
                  {{ user.name }}
                </router-link>
              </b-td>
              <b-td class="font-size-sm">
                {{ user.email }}
              </b-td>
              <b-td>
                <b-row v-for="(value, index) in user.tags" :key="index">
                  <b-col class="col-lg-4">
                    <b-badge :variant="index">{{ value }}</b-badge></b-col
                  >
                </b-row>
              </b-td>
              <b-td class="font-size-sm">
                {{ $store.state.applicantScores[user.email] ? $store.state.applicantScores[user.email] : 0}}
              </b-td>
              <b-td class="font-size-sm"> {{ `${new Date(user.time).toLocaleDateString("en-US", { day: 'numeric' })} ${new Date(user.time).toLocaleDateString("en-US", { month: 'short' })} - ${new Date(user.time).toLocaleString("en-US").slice(10,)}` }} </b-td>
              <b-td class="text-center">
                <b-btn-group>
                  <b-button v-if="loading.includes(index)" v-b-tooltip.hover.nofade.left="'Please Wait'" size="sm" variant="primary-light">
                    <i class="fa fa-1x fa-cog fa-spin"></i>
                  </b-button>
                  <b-button :disabled="disable[index]" @click="action(user.name, user.email, index, 'invited')" v-if="!['invited', 'rejected', 'shortlisted'].includes($route.params.id)" v-b-tooltip.hover.nofade.left="'Send Invitation'" size="sm" variant="warning">
                    <i class="far fa-1x fa-envelope"></i>
                  </b-button>
                  <b-button :disabled="disable[index]" @click="action(user.name, user.email, index, 'shortlisted')" v-if="$route.params.id != 'applied'" v-b-tooltip.hover.nofade.bottom="'Send Shortlist Mail'" size="sm" variant="success">
                    <i class="fa fa-fw fa-paper-plane"></i>
                  </b-button>
                  <b-button :disabled="disable[index]" @click="action(user.name, user.email, index, 'rejected')" v-if="$route.params.id != 'applied' && $route.params.id != 'invited'" v-b-tooltip.hover.nofade.bottom="'Send Rejected Mail'" size="sm" variant="danger">
                    <i class="fa fa-fw fa-paper-plane"></i>
                  </b-button>
                  <b-button @click="reverse(index)" v-if="$route.params.id != 'applied'" v-b-tooltip.hover.nofade.bottom="'Move back to Applied'" size="sm" variant="info">
                    <i class="si si-reload"></i>
                  </b-button>
                  <b-button :disabled="disable[index]" @click="archiveEntry(index)" v-if="$route.params.id != 'completed'" v-b-tooltip.hover.nofade.top="'Archive Entry'" size="sm">
                    <i class="fa fa-fw fa-archive"></i>
                  </b-button>
                  <b-button :disabled="disable[index]" @click="deleteEntry(index)" v-if="$route.params.id === 'completed'" v-b-tooltip.hover.nofade.top="'Delete Entry'" size="sm">
                    <i class="fa fa-fw fa-trash"></i>
                  </b-button>
                </b-btn-group>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
        <b-pagination class="pb-4" v-model="currentPage" :total-rows="rows" :per-page="perPage" size="sm"></b-pagination>
      </base-block>

      <!-- Extra Large Block Modal -->
      <b-modal id="modal-block-extra-large" size="xl" body-class="p-0" hide-footer hide-header>
        <div class="block block-rounded block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Resume</h3>
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
            <b-button variant="alt-primary" class="mr-1" @click="$bvModal.hide('modal-block-extra-large')">Close</b-button>
            <b-button variant="primary" @click="$bvModal.hide('modal-block-extra-large')">Ok</b-button>
          </div>
        </div>
      </b-modal>
      <!-- END Extra Large Block Modal -->
      <!-- END Full Table -->
    </div>
    <!-- END Page Content -->
  </div>
  <div v-else>
    <div class="d-flex justify-content-center mt-10">
            <i class="fa fa-3x fa-cog fa-spin text-success"></i>
    </div>
  </div>
</div>
</template>

<style lang="scss">
// SweetAlert2
@import "~sweetalert2/dist/sweetalert2.min.css";
</style>

<script>
// Vue SweetAlert2, for more info and examples you can check out https://github.com/avil13/vue-sweetalert2
import Vue from "vue"
import VueSweetalert2 from "vue-sweetalert2"

const options = {
  buttonsStyling: false,
  customClass: {
    confirmButton: "btn btn-success m-1",
    cancelButton: "btn btn-danger m-1",
    input: "form-control",
  },
}

// Register Vue SweetAlert2 with custom options
Vue.use(VueSweetalert2, options)
import firebase from "../../firebase"
export default {
  data() {
    return {
        theme: {
            'applied': 'primary',
            'invited': 'warning',
            'shortlisted': 'success',
            'rejected': 'danger',
            'completed': 'info'
        },
      loading: [],
      selected: [],
      disable: {},
      perPage: 20,
      currentPage: 1,
      url: "https://static.thenounproject.com/png/543772-200.png",
    }
  },
  computed: {
    rows () {
        return this.$store.state.firestoreData.candidates[this.$route.params.id].length
    },
    filteredArray() {
      return this.$store.state.firestoreData.candidates[this.$route.params.id].slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage)
    },
  },
  methods: {
    async executeAction(value) {
      const action = {
        'im': 'Send invitation email to selected entries',
        'sm': 'Send shortlist email to selected entries',
        'rm': 'Send rejection mail to selected entries',
        'ms': 'Move these entries to shortlist category',
        'mr': 'Move these entries to rejected category',
        'ma': 'Move these entries to applied category',
        'as': 'Move these entries to completed category'
      }
      const confirmation = await this.$swal({
        title: "Are you sure?",
        text: action[value],
        icon: "warning",
        showCancelButton: true,
        customClass: {
          confirmButton: "btn btn-warning m-1",
          cancelButton: "btn btn-secondary m-1",
        },
        confirmButtonText: "Yes, perform action!",
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
        const entries = this.selected
        entries.forEach(async (e) => {
          const details = this.$store.state.firestoreData.candidates[this.$route.params.id][e + this.perPage * (this.currentPage - 1)]
          const entry = await firebase.firestore().collection("accounts").doc(this.$store.state.firestoreData.docId)
          const {name, email} = details
          //const entry = await firebase.firestore().collection("accounts").doc(this.$store.state.firestoreData.docId)
          if (value === 'im') this.action(name, email, e, 'invited')
          if (value === 'sm') this.action(name, email, e, 'shortlisted')
          if (value === 'rm') this.action(name, email, e, 'rejected')
          if (['ms', 'mr', 'ma', 'as'].includes(value)) {
            const codeAction = {'ms': 'shortlisted','mr': 'rejected','ma': 'applied','as': 'completed'}
            if(this.$route.params.id === codeAction[value]){
              this.$bvToast.toast(`Already in same category`, { title: `Error in performing action`, toaster: 'b-toaster-top-right', variant: 'warning', autoHideDelay: 5000, appendToast: false})
            } else {
              this.loading.push(e)
              await entry.update({[`candidates.${codeAction[value]}`]: firebase.firestore.FieldValue.arrayUnion(details),});
              await entry.update({ [`candidates.${this.$route.params.id}`]: firebase.firestore.FieldValue.arrayRemove(details)})
              this.loading = []
            }
          }
        })
        this.selected = []
      }
    },
    // eslint-disable-next-line no-unused-vars
    async action(name, email, index, action) {
        this.disable[index] = true
        this.loading.push(index)
      const testLink = `http://app.einfach.in/auth/login/${this.$cookies.get("setDocId")}`
      const company = this.$store.state.firestoreData.user.name
      const companyEmail = this.$store.state.firestoreData.user.email
      const details = this.$store.state.firestoreData.candidates[this.$route.params.id][index + this.perPage * (this.currentPage - 1)]
      const emailTemplate = this.$store.state.firestoreData.emailTemplates[action].replace("[name]", name).replace("[company]", company).replace("[companyEmail]", companyEmail).replace("[testLink]", testLink)
      const subject = this.$store.state.firestoreData.emailTemplates.subjects[action].replace("[name]", name).replace("[company]", company).replace("[companyEmail]", companyEmail)
      const emailLog = { user: name, body: emailTemplate, received: new Date(), title: `Candidate ${action} Mail`, email }

      await fetch("https://einfach.api.stdlib.com/Application@dev/autoEmails/email/", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ name, email, emailTemplate, subject }),
      })
      const entry = await firebase.firestore().collection("accounts").doc(this.$store.state.firestoreData.docId)
      await entry.update({[`candidates.${action}`]: firebase.firestore.FieldValue.arrayUnion(details),})
      await entry.update({[`inbox.${action}`]: firebase.firestore.FieldValue.arrayUnion(emailLog),})
      this.loading = []
      this.disable[index] = false
      if (this.$route.params.id != action) await entry.update({[`candidates.${this.$route.params.id}`]: firebase.firestore.FieldValue.arrayRemove(details)})
      this.$bvToast.toast(`${name} ${action[0].toUpperCase() + action.slice(1)} Successfully`, { title: `${action[0].toUpperCase() + action.slice(1)}`, toaster: 'b-toaster-top-right', variant: 'success', autoHideDelay: 5000, appendToast: false})
    },
    // eslint-disable-next-line no-unused-vars
    async archiveEntry(index) {
      const confirmation = await this.$swal({
        title: "Are you sure?",
        text: "Applicant will be moved to completed section",
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
        this.loading.push(index)
        let details = this.$store.state.firestoreData.candidates[this.$route.params.id][index + this.perPage * (this.currentPage - 1)]
        const entry = await firebase.firestore().collection("accounts").doc(this.$store.state.firestoreData.docId)
        // eslint-disable-next-line no-unused-vars
        var location = `candidates.${this.$route.params.id}`
        await entry.update({ [location]: firebase.firestore.FieldValue.arrayRemove(details)})
        await entry.update({ "candidates.completed": firebase.firestore.FieldValue.arrayUnion(details)})
        this.loading = []
      }
    },
    // eslint-disable-next-line no-unused-vars
    async deleteEntry(index) {
      const confirmation = await this.$swal({
        title: "Are you sure?",
        text: "Applicants cannot be recovered",
        icon: "warning",
        showCancelButton: true,
        customClass: {
          confirmButton: "btn btn-danger m-1",
          cancelButton: "btn btn-secondary m-1",
        },
        confirmButtonText: "Yes, delete it!",
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
        this.loading.push(index)
        let details = this.$store.state.firestoreData.candidates[this.$route.params.id][index + this.perPage * (this.currentPage - 1)]
        const entry = await firebase.firestore().collection("accounts").doc(this.$store.state.firestoreData.docId)
        this.loading = []
        await entry.update({ "candidates.completed": firebase.firestore.FieldValue.arrayRemove(details)})
      }
    },
    async reverse (index){
      this.loading.push(index)
      let details = this.$store.state.firestoreData.candidates[this.$route.params.id][index + this.perPage * (this.currentPage - 1)]
      const entry = await firebase.firestore().collection("accounts").doc(this.$store.state.firestoreData.docId)
      await entry.update({"candidates.applied": firebase.firestore.FieldValue.arrayUnion(details),});
      await entry.update({ [`candidates.${this.$route.params.id}`]: firebase.firestore.FieldValue.arrayRemove(details)})
      this.loading = []
    },
  },
}
</script>
