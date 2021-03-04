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
          <b-button type="submit" size="sm" variant="warning">
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
          <b-button type="submit" size="sm" variant="primary">
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
      <base-block rounded title="Regected Candidates" header-bg>
        <template #options>
          <b-button type="submit" size="sm" variant="danger"> Submit </b-button>
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
};
</script>
