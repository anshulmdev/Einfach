<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Ticket" subtitle="Submit your queries">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)"
            >Support</b-breadcrumb-item
          >
          <b-breadcrumb-item active>Ticket</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->
    <!-- Page Content -->
    <div class="content">
      <!-- Basic -->
      <base-block rounded title="Write query in detail" content-full>
        <b-form>
          <b-row class="push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">Select category</p>
            </b-col>
            <b-col lg="8" xl="5">
              <b-form-group label="Select Category" label-for="example-select">
                <b-form-select
                  id="example-select"
                  v-model="selected"
                  :options="options"
                  plain
                ></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row class="push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">Write query in detail</p>
            </b-col>
            <b-col lg="8" xl="5">
              <b-form-textarea
                v-model="query"
                id="example-textarea-input"
                rows="4"
                placeholder="Write in detail.."
              ></b-form-textarea>
            </b-col>
          </b-row>
          <b-row class="push">
            <b-col lg="8">
              <p class="font-size-sm text-muted"></p>
            </b-col>
            <b-col lg="4" class="mt-5">
              <b-form-group>
                <b-button
                  v-if="!loading"
                  type="submit"
                  variant="alt-primary"
                  @click="send()"
                >
                  <i class="fa fa-fw fa-envelope opacity-50"></i> Send Mail
                </b-button>
                <b-button
                  v-else
                  type="submit"
                  variant="alt-primary"
                  @click="send()"
                >
                  <b-spinner
                    small
                    variant="primary"
                    label="Loading..."
                    class="mr-3"
                  ></b-spinner>
                  Loading
                </b-button>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </base-block>
      <!-- END Basic -->
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
export default {
  data() {
    return {
      selected: null,
      loading: null,
      query: "",
      options: [
        { value: null, text: "Please select" },
        { value: 2, text: "Forms" },
        { value: 3, text: "Emails" },
        { value: 1, text: "Dashboard" },
        { value: 7, text: "Report Bug" },
        { value: 6, text: "Subscription" },
        { value: 4, text: "Authentication" },
        { value: 5, text: "Question Library" },
      ],
    };
  },
  methods: {
    async send() {
      this.loading = true;
      const name = 'Support Ticket'
      const email = 'support@einfach.in'
      const emailTemplate = this.query
      const subject = `${this.selected} - Ticket Raised - ${this.$store.state.firestoreData.user.email}`
      await fetch(
        "https://einfach.api.stdlib.com/Application@dev/autoEmails/email/",
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
          body: JSON.stringify({ name, email, emailTemplate, subject }),
        }
      );
      setTimeout(() => {
        this.loading = null;
        this.$swal('Ticket Created', 'Our support team will get back to you on email!', 'info')
      }, 2000);
    },
  },
};
</script>