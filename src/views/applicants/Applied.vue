<template>
  <div>
    <!-- Hero -->
    <base-page-heading
      title="Applications Received"
      subtitle="Only invited candidates can apply in assignments"
    >
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)"
            >Applicants</b-breadcrumb-item
          >
          <b-breadcrumb-item active>Applied</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->
    <!-- Page Content -->
    <div class="content">
      <!-- Full Table -->
      <base-block rounded title="Assignment: JavaScript">
        <template #options>
            <b-dropdown id="dropdown-default-outline-primary btn-sm" variant="outline-primary btn-sm" text="Show Entries">
              <b-dropdown-item @click="perPage = 5" class="font-size-sm">5 per page</b-dropdown-item>
              <b-dropdown-item @click="perPage = 10" class="font-size-sm">10 per page</b-dropdown-item>
              <b-dropdown-item @click="perPage = 15" class="font-size-sm">15 per page</b-dropdown-item>
              <b-dropdown-item @click="perPage = 20" class="font-size-sm">20 per page</b-dropdown-item>
            </b-dropdown>
        </template>
        <b-table-simple responsive bordered striped table-class="table-vcenter">
          <b-thead>
            <b-tr>
              <b-th class="text-center" style="width: 10%"> Resume </b-th>
              <b-th style="width: 20%">Name</b-th>
              <b-th style="width: 20%">Email</b-th>
              <b-th style="width: 30%">Tags</b-th>
              <b-th style="width: 15%">Experience</b-th>
              <b-th class="text-center" style="min-width: 110px; width: 110px"
                >Actions</b-th
              >
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr
              v-for="(user, index) in filteredArray"
              :key="index"
            >
              <b-td class="text-center">
                <a v-b-modal.modal-block-extra-large @click="url = user.resume">
                  <img
                    height="50"
                    src="https://static.thenounproject.com/png/543772-200.png"
                    alt="Avatar"
                /></a>
              </b-td>
              <b-td class="font-w600 font-size-sm">
                <a :href="`${user.href}`">
                  {{ user.name }}
                </a>
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
              <b-td class="font-size-sm"> {{ user.experience }} Yrs </b-td>
              <b-td class="text-center">
                <b-btn-group>
                  <b-button
                  disabled
                  v-if="loading.includes(index)"
                    v-b-tooltip.hover.nofade.left="'Send Invitation'"
                    @click="invite(user.name, user.email, index)"
                    size="sm"
                    variant="primary"
                  >
                    <i class="fa fa-2x fa-cog fa-spin"></i>
                  </b-button>
                  <b-button
                  v-else
                    v-b-tooltip.hover.nofade.left="'Send Invitation'"
                    @click="invite(user.name, user.email, index)"
                    size="sm"
                    variant="primary"
                  >
                    <i class="fa fa-fw fa-paper-plane"></i>
                  </b-button>
                  <b-button
                  @click="deleteEntry(user.name, user.email, index)"
                    v-b-tooltip.hover.nofade.left="'Reject'"
                    size="sm"
                    variant="danger"
                  >
                    <i class="fa fa-fw fa-times"></i>
                  </b-button>
                </b-btn-group>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
        <b-pagination
        class="pb-4"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          size="sm"
        ></b-pagination>
      </base-block>

      <!-- Extra Large Block Modal -->
      <b-modal
        id="modal-block-extra-large"
        size="xl"
        body-class="p-0"
        hide-footer
        hide-header
      >
        <div class="block block-rounded block-themed block-transparent mb-0">
          <div class="block-header bg-primary-dark">
            <h3 class="block-title">Modal Title</h3>
            <div class="block-options">
              <button
                type="button"
                class="btn-block-option"
                @click="$bvModal.hide('modal-block-extra-large')"
              >
                <i class="fa fa-fw fa-times"></i>
              </button>
            </div>
          </div>
          <div class="block-content font-size-sm">
            <iframe :src="url" width="100%" height="600"> </iframe>
          </div>
          <div class="block-content block-content-full text-right border-top">
            <b-button
              variant="alt-primary"
              class="mr-1"
              @click="$bvModal.hide('modal-block-extra-large')"
              >Close</b-button
            >
            <b-button
              variant="primary"
              @click="$bvModal.hide('modal-block-extra-large')"
              >Ok</b-button
            >
          </div>
        </div>
      </b-modal>
      <!-- END Extra Large Block Modal -->
      <!-- END Full Table -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<style lang="scss">
// SweetAlert2
@import '~sweetalert2/dist/sweetalert2.min.css';
</style>

<script>
// Vue SweetAlert2, for more info and examples you can check out https://github.com/avil13/vue-sweetalert2
import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'

const options = {
  buttonsStyling: false,
  customClass: {
    confirmButton: 'btn btn-success m-1',
    cancelButton: 'btn btn-danger m-1',
    input: 'form-control'
  }
}

// Register Vue SweetAlert2 with custom options
Vue.use(VueSweetalert2, options)
import firebase from "../../firebase";
export default {
  data() {
    return {
      loading: [],
      rows: this.$store.state.firestoreData.candidates.applied.length,
      perPage: 5,
      currentPage: 1,
      url: "https://static.thenounproject.com/png/543772-200.png",
    };
  },
  computed:{
    filteredArray (){
      return this.$store.state.firestoreData.candidates.applied.slice(((this.currentPage-1)*this.perPage),((this.currentPage)*this.perPage));
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    async deleteEntry(name, email, index){
      const confirmation = await this.$swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this applicant',
        icon: 'warning',
        showCancelButton: true,
        customClass: {
          confirmButton: 'btn btn-danger m-1',
          cancelButton: 'btn btn-secondary m-1'
        },
        confirmButtonText: 'Yes, delete it!',
        html: false,
        preConfirm: () => {
          return new Promise(resolve => {
            setTimeout(() => {
              resolve()
            }, 50)
          })
        }
      })
      if(confirmation.isConfirmed){
      this.loading.push(index)
      let details = this.$store.state.firestoreData.candidates.applied[index];
      const entry = await firebase
        .firestore()
        .collection("accounts")
        .doc(this.$store.state.firestoreData.docId);
      // eslint-disable-next-line no-unused-vars
      const addInvite = await entry.update({
        "candidates.applied": firebase.firestore.FieldValue.arrayRemove(details),
      });
      this.loading = []
        
      }

    },
    // eslint-disable-next-line no-unused-vars
    async invite(name, email, index) {
      const details = this.$store.state.firestoreData.candidates.applied[index];
      const emailTemplate = this.$store.state.firestoreData.emailTemplates.invite.replace('[CANDIDATE NAME]', name);
      const invited = {user:name, body: emailTemplate, received: new Date(), title: `{${this.$store.state.firestoreData.user.name} Assignment Invitation}`, email}
      this.loading.push(index)
      // eslint-disable-next-line no-unused-vars
      const sendEmail = await fetch(
        "https://hook.integromat.com/suo7mmt1h3qfyez1dek7u8xzkbhhesq7",
        {
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
          body: JSON.stringify({ name, email, emailTemplate }),
        }
      );
      const entry = await firebase
        .firestore()
        .collection("accounts")
        .doc(this.$store.state.firestoreData.docId);
      await entry.update({
        "candidates.applied": firebase.firestore.FieldValue.arrayRemove(details),
      });
      await entry.update({
        "candidates.invited": firebase.firestore.FieldValue.arrayUnion(details),
      });
      await entry.update({
        "inbox.invited": firebase.firestore.FieldValue.arrayUnion(invited),
      });
      this.loading = []
    },
  },
};
</script>
