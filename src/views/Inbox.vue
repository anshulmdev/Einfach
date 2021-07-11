<template>
  <!-- Page Content -->
  <div class="content">
    <b-row>
      <b-col md="5" xl="3">
        <!-- Toggle Inbox Side Navigation -->
        <div class="d-md-none push">
          <!-- Class Toggle, functionality initialized in Helpers.coreToggleClass() -->
          <b-button variant="primary" block v-toggle-class="{ targetId: 'one-inbox-side-nav', class: 'd-none' }">
            Inbox Menu
          </b-button>
        </div>
        <!-- END Toggle Inbox Side Navigation -->
        <!-- Inbox Side Navigation -->
        <div id="one-inbox-side-nav" class="d-none d-md-block push">
          <!-- New Message Modal -->
          <b-modal id="one-inbox-new-message" body-class="p-0" hide-footer hide-header>
            <b-form @submit="onSubmit" @reset="onReset">
              <div class="block block-rounded block-themed block-transparent mb-0">
                <div class="block-header bg-primary-dark">
                  <h3 class="block-title">
                    <i class="fa fa-pencil-alt mr-1"></i> New Message
                  </h3>
                  <div class="block-options">
                    <button type="button" class="btn-block-option" @click="$bvModal.hide('one-inbox-new-message')">
                      <i class="fa fa-fw fa-times"></i>
                    </button>
                  </div>
                </div>
                <div class="block-content">
                  <b-form-group label="Email" label-for="message-email">
                    <b-form-input v-model="form.email" id="message-email" class="form-control-alt" type="email" required />
                  </b-form-group>
                  <b-form-group label="Subject" label-for="message-subject">
                    <b-form-input
                      v-model="form.subject"
                      id="message-subject"
                      class="form-control-alt"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    label="Message"
                    label-for="message-msg"
                    description="Feel free to use common tags: <blockquote>, <strong>, <em>"
                  >
                    <b-form-textarea
                      v-model="form.message"
                      id="message-msg"
                      class="form-control-alt"
                      rows="6"
                      required
                    ></b-form-textarea>
                  </b-form-group>
                </div>
                <div
                  class="block-content block-content-full text-right border-top"
                >
                  <b-button
                    variant="alt-primary"
                    class="mr-1"
                    @click="$bvModal.hide('one-inbox-new-message')"
                    >Cancel</b-button
                  >
                  <b-button
                    v-if="loading == false"
                    type="submit"
                    variant="primary"
                  >
                    <i class="fa fa-paper-plane mr-1"></i> Send Message
                  </b-button>
                  <b-button
                    v-if="loading == 'done'"
                    type="submit"
                    variant="success"
                  >
                    <i class="fa fa-check mr-1"></i> Message Sent
                  </b-button>
                  <b-button v-if="loading == true" variant="primary">
                    <i class="fa fa-2x fa-cog fa-spin"></i>
                  </b-button>
                </div>
              </div>
            </b-form>
          </b-modal>
          <!-- END New Message Modal -->

          <!-- Inbox Menu -->
          <base-block title="Inbox" header-class="block-header-default" rounded>
            <template #options>
              <b-button
                variant="alt-primary"
                size="sm"
                class="btn btn-sm btn-alt-primary"
                v-b-modal.one-inbox-new-message
              >
                <i class="fa fa-pencil-alt mr-1"></i> Compose
              </b-button>
            </template>
            <b-nav class="font-size-sm push" pills vertical>
              <b-nav-item
                @click="label = null; currentPage = 1;"
                class="my-1"
                link-classes="d-flex justify-content-between align-items-center"
                :active="this.label == null"
              >
                <span> <i class="fa fa-fw fa-inbox mr-1"></i> Inbox </span>
                <b-badge pill variant="secondary">{{
                  totalMails
                }}</b-badge>
              </b-nav-item>
              <b-nav-item @click="label = 'invited'; currentPage = 1;" class="my-1" link-classes="d-flex justify-content-between align-items-center" :active="this.label == 'invited'">
                <span>
                  <i class="fa fa-fw fa-paper-plane mr-1"></i> Invited
                </span>
                <b-badge pill variant="secondary">{{
                  $store.state.firestoreData.inbox.invited
                    ? $store.state.firestoreData.inbox.invited.length
                    : 0
                }}</b-badge>
              </b-nav-item>
              <b-nav-item
                @click="label = 'completed'; currentPage = 1;"
                class="my-1"
                link-classes="d-flex justify-content-between align-items-center"
                :active="this.label == 'completed'"
              >
                <span> <i class="fa fa-fw fa-star mr-1"></i> Completed </span>
                <b-badge pill variant="secondary">{{
                  $store.state.firestoreData.inbox.completed
                    ? $store.state.firestoreData.inbox.completed.length
                    : 0
                }}</b-badge>
              </b-nav-item>
              <b-nav-item
                @click="label = 'custom'; currentPage = 1;"
                class="my-1"
                link-classes="d-flex justify-content-between align-items-center"
                :active="this.label == 'custom'"
              >
                <span>
                  <i class="fa fa-fw fa-pencil-alt mr-1"></i> Custom
                </span>
                <b-badge pill variant="secondary">{{
                  $store.state.firestoreData.inbox.custom
                    ? $store.state.firestoreData.inbox.custom.length
                    : 0
                }}</b-badge>
              </b-nav-item>
            </b-nav>
          </base-block>
          <!-- END Inbox Menu -->

          <!-- Account -->
          <base-block
            title="Mailbox Usage"
            header-class="block-header-default"
            rounded
          >
            <template #options>
              <button type="button" class="btn-block-option">
                <i class="si si-settings"></i>
              </button>
            </template>
            <!-- Vue Easy Pie Chart Container -->
            <vue-easy-pie-chart
              :percent="35"
              :line-width="3"
              :size="100"
              bar-color="#abe37d"
              track-color="#eeeeee"
              scale-color="#dddddd"
              class="push"
            >
              <img
                class="img-avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmcfkeiQFNQJd9qlaENd1yN60RHp_PtO16rQ&usqp=CAU"
                alt="Avatar"
              />
            </vue-easy-pie-chart>
            <base-block
              tag="a"
              href="/#/backend/subscription/active"
              rounded
              bordered
              link-shadow
              content-full
              content-class="text-center"
            >
              <div class="push">
                <i class="si si-like fa-2x text-success"></i>
              </div>
              <div class="font-size-h2 font-w700">
                <span class="text-muted">+</span> 30k Emails
              </div>
              <div class="font-size-sm text-muted text-uppercase">
                Upgrade Now
              </div>
            </base-block>
          </base-block>
        </div>
        <!-- END Inbox Side Navigation -->
      </b-col>
      <b-col md="7" xl="9">
        <!-- View Message Modal -->
        <b-modal
          id="one-inbox-message"
          size="xl"
          body-class="p-0"
          hide-footer
          hide-header
        >
          <div class="block block-rounded block-themed block-transparent mb-0">
            <div class="block-header bg-primary-dark">
              <h3 class="block-title">Email</h3>
              <div class="block-options">
                <button
                  type="button"
                  class="btn-block-option"
                  @click="$bvModal.hide('one-inbox-message')"
                >
                  <i class="fa fa-fw fa-times"></i>
                </button>
              </div>
            </div>
            <div
              class="block-content block-content-full font-size-sm d-flex justify-content-between align-items-center bg-body-light"
            >
              <div>
                <a class="font-w600" href="javascript:void(0)">
                  {{inbox[showMessage].email}}</a><br />
                <a href="javascript:void(0)">{{inbox[showMessage].title}}</a>
              </div>
              <span class="text-muted"
                ><em>{{Date(inbox[showMessage].received).toString().slice(0, 10)}}</em></span>
            </div>
            <div class="block-content font-size-sm">
              <p
                v-html="
                  inbox[showMessage].body
                "
              />
            </div>
          </div>
        </b-modal>
        <!-- END View Message Modal -->

        <!-- Message List -->
        <base-block
          rounded
          btn-option-fullscreen
          header-class="block-header-default"
        >
          <template #title>
            Page {{currentPage}} out of {{parseInt(currentMails.length / (perPage)) + 1}}
          </template>
          <template #options>
            <button type="button" @click="pagination('decrease')" class="btn-block-option">
              <i class="si si-arrow-left"></i>
            </button>
            <button @click="pagination('increase')" type="button" class="btn-block-option">
              <i class="si si-arrow-right"></i>
            </button>
          </template>

          <!-- Messages Options -->
          <div class="d-flex justify-content-between push">
            <div class="btn-group">
              <b-button variant="light" size="sm" @click="$router.push('/backend/dashboard')">
                <i class="si si-speedometer text-primary"></i>
                <span class="d-none d-sm-inline ml-1">Dashboard</span>
              </b-button>
            </div>
            <b-dropdown id="dropdown-default-outline-primary btn-sm" variant="outline-primary btn-sm" text="Show Entries">
              <b-dropdown-item @click="perPage = 5" class="font-size-sm">5 per page</b-dropdown-item>
              <b-dropdown-item @click="perPage = 10" class="font-size-sm">10 per page</b-dropdown-item>
              <b-dropdown-item @click="perPage = 15" class="font-size-sm">15 per page</b-dropdown-item>
              <b-dropdown-item @click="perPage = 20" class="font-size-sm">20 per page</b-dropdown-item>
            </b-dropdown>
          </div>
          <!-- END Messages Options -->

          <!-- Messages -->
          <div class="pull-x">
            <b-table-simple hover table-class="table-vcenter font-size-sm">
              <b-tbody>
                <b-tr v-for="(message, index) in inbox" :key="index">
                  <b-td v-if="message" class="text-center" style="width: 60px">
                    <b-form-checkbox :id="`checkbox-${index}`" :value="index" />
                  </b-td>
                  <b-td v-if="message" class="d-none d-sm-table-cell font-w600" style="width: 140px">
                    {{ message.user }}
                  </b-td>
                  <b-td v-if="message">
                    <a class="font-w600" v-b-modal.one-inbox-message @click="showMessage = index">
                      {{ message.email }}
                    </a>
                    <div class="text-muted mt-1">
                      {{ message.title }}
                    </div>
                  </b-td>
                  <b-td v-if="message" class="d-none d-xl-table-cell text-muted" style="width: 120px">
                    <em>{{ new Date(message.received.seconds * 1000).toString().slice(0, 10)}}</em>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </div>
          <!-- END Messages -->
        </base-block>
        <!-- END Message List -->
      </b-col>
    </b-row>
  </div>
  <!-- END Page Content -->
</template>

<style lang="scss">
// Vue Easy Pie Chart
@import "~vue-easy-pie-chart/dist/vue-easy-pie-chart.css";
</style>

<script>
// Vue Easy Pie Chart, for more info and examples you can check out https://github.com/DotNetAge/vue-easy-pie-chart
import VueEasyPieChart from "vue-easy-pie-chart";
import firebase from "../firebase";

export default {
  components: {
    VueEasyPieChart
  },
  data() {
    return {
      label: null,
      loading: false,
      currentMails: [],
      totalMails: 0,
      perPage: 8,
      currentPage: 1,
      form: {
        email: "",
        subject: "",
        message: ""
      },
      showMessage: 0
    };
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    inbox() {
      const sliceValue = [(this.currentPage - 1) * this.perPage, this.currentPage * this.perPage]
      if (!this.label) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.currentMails = this.$store.state.firestoreData.inbox.invited
          .concat(this.$store.state.firestoreData.inbox.completed)
          .sort((a, b) => b.received - a.received);
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.totalMails = this.currentMails.length
        return this.currentMails.slice(sliceValue[0], sliceValue[1]);
      } else {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.currentMails = this.$store.state.firestoreData.inbox[this.label].sort(
          (a, b) => b.received - a.received
        );
        return this.currentMails.slice(sliceValue[0], sliceValue[1]);
      }
    }
  },
  mounted() {
    this.$root.$on("bv::modal::hidden", (bvEvent, modalId) => {
      if (modalId === "one-inbox-message") {
        this.showMessage = 0;
      }
    });
  },
  methods: {
    async onSubmit() {
      this.loading = true;
      const details = {
        body: this.form.message,
        email: this.form.email,
        received: new Date(),
        title: this.form.subject,
        user: "Custom Mail"
      };
      // eslint-disable-next-line no-unused-vars
      const sendEmail = await fetch(
        "https://einfach.api.stdlib.com/Application@dev/autoEmails/email/",
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json"
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer",
          body: JSON.stringify({
            subject: this.form.subject,
            email: this.form.email,
            emailTemplate: this.form.message,
            name: "Custom Mail"
          })
        }
      );
      const entry = await firebase
        .firestore()
        .collection("accounts")
        .doc(this.$store.state.firestoreData.docId);
      // eslint-disable-next-line no-unused-vars
      const inboxInvited = await entry.update({
        "inbox.custom": firebase.firestore.FieldValue.arrayUnion(details)
      });
      setTimeout(() => {
        this.loading = "done";
      }, 2000);
    },
    pagination(value) {
      if(value === 'increase') {
        if (this.currentPage < parseInt(this.currentMails.length / this.perPage) + 1) this.currentPage += 1
      } 
      if(value === 'decrease' && this.currentPage > 1) this.currentPage -= 1
    },
    onReset(evt) {
      evt.preventDefault();

      // Reset our form values
      this.form.email = "";
      this.form.subject = "";
      this.form.message = "";
    }
  }
};
</script>
