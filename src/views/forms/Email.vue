<template>
  <div>
    <!-- Hero -->
    <base-page-heading
      title="Email Template"
      subtitle="Automate your email reporting"
    >
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Forms</b-breadcrumb-item>
          <b-breadcrumb-item active>Template</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->
    <!-- Page Content -->
    <div class="content">
      <!-- Vue SimpleMDE -->
      <base-block rounded title="Invite for Assignment" header-bg>
        <template #options>
          <b-button   size="sm" variant="warning" @click="update()">
            Submit
          </b-button>
          <b-button type="reset" size="sm" variant="alt-warning">
            Reset
          </b-button>
        </template>
        
        <b-form-input
        class="mb-2"
          id="sub1"
          name="sub1"
          v-model="$store.state.firestoreData.emailTemplates.subjects.invited"
          placeholder="Email subject"
          aria-describedby="sub1-feedback"
        ></b-form-input>

        <div class="pb-4">
          <ckeditor
            :editor="ckeditor"
            v-model="$store.state.firestoreData.emailTemplates.invited"
            :config="ckeditorConfig"
          ></ckeditor>
        </div>
      </base-block>
      <!-- END Vue SimpleMDE -->
      <!-- Vue SimpleMDE -->
      <base-block rounded title="Shortlisted Candidates" header-bg>
        <template #options>
          <b-button   size="sm" variant="primary" @click="update()">
            Submit
          </b-button>
          <b-button type="reset" size="sm" variant="alt-primary">
            Reset
          </b-button>
        </template>
        
        <b-form-input
        class="mb-2"
          id="sub2"
          name="sub2"
          v-model="$store.state.firestoreData.emailTemplates.subjects.shortlisted"
          placeholder="Email subject"
          aria-describedby="sub2-feedback"
        ></b-form-input>
        <div class="pb-4">
          <ckeditor
            :editor="ckeditor"
            v-model="$store.state.firestoreData.emailTemplates.shortlisted"
            :config="ckeditorConfig"
          ></ckeditor>
        </div>
      </base-block>
      <!-- END Vue SimpleMDE -->
      <!-- Vue SimpleMDE -->
      <base-block rounded title="Rejected Candidates" header-bg>
        <template #options>
          <b-button   size="sm" variant="danger" @click="update()"> Submit </b-button>
          <b-button type="reset" size="sm" variant="alt-danger">
            Reset
          </b-button>
        </template>
        
        <b-form-input
        class="mb-2"
          id="sub3"
          v-model="$store.state.firestoreData.emailTemplates.subjects.rejected"
          name="sub3"
          placeholder="Email subject"
          aria-describedby="sub3-feedback"
        ></b-form-input>
        <div class="pb-4">
          <ckeditor
            :editor="ckeditor"
            v-model="$store.state.firestoreData.emailTemplates.rejected"
            :config="ckeditorConfig"
          ></ckeditor>
        </div>
      </base-block>
      <!-- END Vue SimpleMDE -->
    </div>
    <!-- END Page Content -->
  </div>
</template>


<script>
// Vue SweetAlert2, for more info and examples you can check out https://github.com/avil13/vue-sweetalert2
import Vue from "vue";
import VueSweetalert2 from "vue-sweetalert2";

const options = {
  buttonsStyling: false,
  customClass: {
    confirmButton: "btn btn-success m-1",
    cancelButton: "btn btn-danger m-1",
    input: "form-control",
  },
};
// Register Vue SweetAlert2 with custom options
Vue.use(VueSweetalert2, options);
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-vue2";
import firebase from "../../firebase";

export default {
  components: {
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      ckeditorData1: "<p>Hello CKEditor5!</p>",
      ckeditorData2: "<p>Hello CKEditor2!</p>",
      ckeditorData3: "<p>Hello CKEditor35!</p>",
      subject: {
        sub1: null,
        sub2: null,
        sub3: null
      },
      ckeditorConfig: {
        // The configuration of the editor
      },
      // Here we specify the editor you've imported before
      // ClassicEditor, InlineEditor, BalloonEditor, BalloonBlockEditor
      ckeditor: ClassicEditor,
    };
  },
  methods: {
    async update(){
      const email = {'emailTemplates': {
      'invited':this.$store.state.firestoreData.emailTemplates.invited,
      'shortlisted':this.$store.state.firestoreData.emailTemplates.shortlisted,
      'rejected':this.$store.state.firestoreData.emailTemplates.rejected,
      'subjects': {
      'invited':this.$store.state.firestoreData.emailTemplates.subjects.invited,
      'shortlisted':this.$store.state.firestoreData.emailTemplates.subjects.shortlisted,
      'rejected':this.$store.state.firestoreData.emailTemplates.subjects.rejected
      }
      }}

      await firebase.firestore().collection('accounts').doc(this.$store.state.firestoreData.docId).set(email, { merge: true })
      await this.$swal("Successfully Added")

    }
  }
};
</script>
