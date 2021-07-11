<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Applicant Summary" subtitle="You can check applicant details and score summary">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)"
            >Applicants</b-breadcrumb-item
          >
          <b-breadcrumb-item active>Details</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->
    <!-- Page Content -->
    <div v-if="data" class="content">
          <b-tabs class="block" nav-class="nav-tabs-block" content-class="block-content overflow-hidden">
            <b-tab title="Submitted Form" active class="fade-left">
            <b-row>
        <b-col md="6" xl="3">
          <base-block title="Full Name" themed rounded>
            <template #options>
            </template>
            <p>
              {{data.name}}
            </p>
          </base-block>
        </b-col>
        <b-col md="6" xl="3">
          <base-block title="Phone Number" header-class="bg-primary-light" themed rounded>
            <template #options>
            </template>
            <p>
              {{data.phone}}
            </p>
          </base-block>
        </b-col>
        <b-col md="6" xl="3">
          <base-block title="Experience" header-class="bg-success" themed rounded>
            <template #options>
            </template>
            <p>
              {{data.experience ? `${data.experience} Yrs` : ''}}
            </p>
          </base-block>
        </b-col>
        <b-col md="6" xl="3">
          <base-block title="Applied at" header-class="bg-info" themed rounded>
            <template #options>
            </template>
            <p>
              {{data.time ? data.time.slice(0, 15) : ''}}
            </p>
          </base-block>
        </b-col>
      </b-row>
            </b-tab>
            <b-tab title="Submissions" class="fade-left">
            <b-row>
        <b-col md="6" xl="3" v-if="data.mcq">
          <base-block title="Multiple Choice Question" themed rounded>
            <template #options>
            </template>
            <p>
              Attempted Questions: {{data.mcq.attempted}}
            </p>
            <p>
              Score: {{data.mcq.score}}
            </p>
          </base-block>
        </b-col>
        <b-col md="6" xl="3" v-if="data.rest">
          <base-block title="Rest Api" header-class="bg-danger" themed rounded>
            <template #options>
            </template>
            <p>
              Attempted Questions: {{data.rest.attempted}}
            </p>
            <p>
              Score: {{data.rest.score}}
            </p>
          </base-block>
        </b-col>
        <b-col md="6" xl="3" v-if="data.regex">
          <base-block title="Regex" header-class="bg-info" themed rounded>
            <template #options>
            </template>
            <p>
              Attempted Questions: {{data.regex.attempted}}
            </p>
            <p>
              Score: {{data.regex.score}}
            </p>
          </base-block>
        </b-col>
      </b-row>
            </b-tab>
            <b-tab title="Resume" class="fade-left">
              <div class="block-content font-size-sm">
                <iframe :src="data.resume" width="100%" height="600"> </iframe>
              </div>
            </b-tab>
            <b-tab title-item-class="ml-auto">
              <template #title>
                Score: {{score ? score : 0}} Marks
              </template>
              <h4 class="font-w400">Settings Content</h4>
              <p>Content fades in..</p>
            </b-tab>
          </b-tabs>
      <!-- Basic -->
      <base-block v-if="data.coding" rounded title="Programming Questions" content-full>
      <div v-for="answer in Object.keys(data.coding)" :key="answer.score">
          <base-block :title="answer" themed rounded header-class="bg-amethyst-light">
            <template #options>
            </template>
            <b-row>
        <b-col md="6" xl="6">
                    <ckeditor
            :editor="ckeditor"
            v-model="data.coding[answer].description"
            :config="ckeditorConfig"
          ></ckeditor>
        </b-col>
        <b-col md="6" xl="6">
          <pre class="language-js">
  <code>
{{data.coding[answer].code}}
  </code>
</pre>
        </b-col>
            </b-row>
          </base-block>
        </div>
      </base-block>
      <!-- END Basic -->
    </div>
    <!-- END Page Content -->
  </div>
</template>


<script>
import firebase from "../../firebase";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-vue2";
export default {
  components: {
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      data: {},
      score: this.$store.state.applicantScores[this.$route.params.id],
      ckeditor: ClassicEditor,
      ckeditorConfig: {
        toolbar: []
      },
    };
  },
  methods: {
    async fetchData (){
      const info = this.$store.state.applicantList[this.$route.params.id]
      const scoreQuery = await firebase.firestore().collection('scores').doc(this.$cookies.get("setDocId")).get()
      const score = scoreQuery.data() ? scoreQuery.data()[this.$route.params.id] : 0
      const allData = {...info, ...score}
      this.data = allData
    }
  },
  created () {
    this.fetchData()
  }
};
</script>