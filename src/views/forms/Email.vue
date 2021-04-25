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
          <b-button type="submit" size="sm" variant="warning" @click="update()">
            Submit
          </b-button>
          <b-button type="reset" size="sm" variant="alt-warning">
            Reset
          </b-button>
        </template>
        <div class="pb-4">
          <ckeditor
            :editor="ckeditor"
            v-model="$store.state.firestoreData.emailTemplates.invite"
            :config="ckeditorConfig"
          ></ckeditor>
        </div>
      </base-block>
      <!-- END Vue SimpleMDE -->
      <!-- Vue SimpleMDE -->
      <base-block rounded title="Shortlisted Candidates" header-bg>
        <template #options>
          <b-button type="submit" size="sm" variant="primary" @click="update()">
            Submit
          </b-button>
          <b-button type="reset" size="sm" variant="alt-primary">
            Reset
          </b-button>
        </template>
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
          <b-button type="submit" size="sm" variant="danger" @click="update()"> Submit </b-button>
          <b-button type="reset" size="sm" variant="alt-danger">
            Reset
          </b-button>
        </template>
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
      'invite':this.$store.state.firestoreData.emailTemplates.invite,
      'shortlisted':this.$store.state.firestoreData.emailTemplates.shortlisted,
      'rejected':this.$store.state.firestoreData.emailTemplates.rejected
      }}
      await firebase.firestore().collection('accounts').doc(this.$store.state.firestoreData.user.email).set(email, { merge: true })

    }
  }
};
</script>
