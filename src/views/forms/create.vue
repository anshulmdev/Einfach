<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Forms" subtitle="Design form for applicants">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Forms</b-breadcrumb-item>
          <b-breadcrumb-item active>Create Forms</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">

      <base-block rounded title="Assignment Title">
        <b-row class="push">
          <b-col lg="4">
            <p class="font-size-sm text-muted">
              Write category or main heading
            </p>
          </b-col>
          <b-col class="mr-5" lg="7">
                <b-form-input id="Assignment Title" v-model="title" placeholder="JavaScript Developer Test 2021"></b-form-input>
          </b-col>
        </b-row>
        <!-- END Example -->
      </base-block>
      <!-- Vue Dropzone -->
      <base-block rounded title="Company Logo">
        <b-row class="push">
          <b-col lg="4">
            <p class="font-size-sm text-muted">
              Upload your company logo
            </p>
          </b-col>
          <b-col class="mr-5" lg="3" sm="4">
            <vue-dropzone ref="imgDropZone" id="dropzone" :options="dropzoneOptions" @vdropzone-complete="afterComplete"></vue-dropzone>
          </b-col>
        </b-row>
        <!-- END Example -->
      </base-block>
      <!-- END Vue Dropzone -->

      <!-- 
      <base-block rounded title="Add Fields">
        <b-row>
          <b-col lg="4">
            <p class="font-size-sm text-muted mb-2">
              You can see default fields in preview<br>
              
            <section v-for="field in form.fields" :key="field.name">
                <section v-if="field.name !='Field Name'">{{field.name}} added</section>
            </section>
            </p>
          </b-col>
          <b-col>
          <b-row>
          <b-col lg="6">
            <div >
              <b-form @submit.prevent class="mb-4" inline>
              <div class="form-group">
                <b-input-group>
                  <b-form-input v-model="form.name" :placeholder="form.fields[form.fields.length-1].name"></b-form-input>
                  <b-input-group-append>
                    <b-dropdown :text="form.type" variant="primary">
                      <b-dropdown-item @click="form.type='Text'">
                        <i class="far fa-fw fa-edit mr-1"></i> Text
                      </b-dropdown-item>
                      <b-dropdown-item  @click="form.type='Numeric'">
                        <i class="far fa-fw fa-caret-square-up mr-1"></i> Numeric
                      </b-dropdown-item>
                      <b-dropdown-item  @click="form.type='Upload'">
                        <i class="far fa-fw fa-arrow-alt-circle-up mr-1"></i> Upload
                      </b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                    </b-dropdown>
                  </b-input-group-append>
                </b-input-group>
              </div>
            </b-form>
              </div>
          </b-col>
          <b-col lg="6">
              
              <b-button class="ml-6" type="submit" variant="primary" @click="addField(form.name,form.type)">{{form.fields[form.fields.length-1].submit}}</b-button>
              </b-col>
          </b-row></b-col>
        </b-row>
      </base-block>
      END Inline -->
      <!-- Basic -->
      <base-block rounded title="Other Fields" content-full>
        <b-form>
          <b-row class="push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                Assignment Category
              </p>
            </b-col>
            <b-col lg="8" xl="5">
                <b-form-select id="example-select" v-model="selected" :options="options" plain></b-form-select>
            </b-col>
          </b-row>
          <b-row class="push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                Assignment Description
              </p>
            </b-col>
            <b-col lg="8" xl="5">
                <b-form-textarea id="example-textarea-input" v-model="desc" rows="4" placeholder="Textarea content.."></b-form-textarea>
            </b-col>
          </b-row>
        </b-form>
      </base-block>

            <base-block rounded title="Submit final form" header-bg>
              <template #options>
                <b-button @click="openLink" type="reset" class="px-4" size="md" variant="warning">
                  Link
                </b-button>
                <b-button type="reset" @click="formUrl = null" class="px-4" size="md" variant="danger">
                  Reset
                </b-button>
                <b-button type="submit" class="px-4" size="md" variant="primary" @click="submitForm">
                  Deploy
                </b-button>
              </template>
              </base-block>
            <base-block v-if="formUrl" rounded title="Generated Form Url" header-bg>
            <template #options>
                <a>{{formUrl}}</a>
            </template>

              </base-block>
    </div>
    <!-- END Page Content -->
  </div>
</template>

<style lang="scss">

// Vue2 Dropzone + Custom overrides
@import '~vue2-dropzone/dist/vue2Dropzone.min.css';
@import './src/assets/scss/vendor/dropzone';
@import "~vue-slider-component/theme/default.css";
@import "./src/assets/scss/vendor/vue-slider";
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
import vue2Dropzone from 'vue2-dropzone'
import { validationMixin } from "vuelidate";
import { required, minLength, email, integer } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  components: {
    'vueDropzone': vue2Dropzone
  },
  data () {
    return {
      sliderValueNormal: 2,
      tags: {
        nodejs: { success: "Node Js" },
        React: { info: "React" },
        vuejs: { success: "Vue.js" },
        python: { success: "Python" },
        mysql: { info: "NoSQL" },
      },
      options2: [
        { value: null, text: "Please select" },
        { value: "nodejs", text: "Node Js" },
        { value: "react", text: "React" },
        { value: "vuejs", text: "Vue.js" },
        { value: "python", text: "Python" },
        { value: "nosql", text: "NoSQL" },
      ],
      formDetails: null,
      form2: {
        email: null,
      },
      title: null,
      desc: null,
      selected: null,
      formUrl: null,
      options: [
        { value: null, text: 'Please select' },
        { value: 1, text: 'JavaScript' },
        { value: 2, text: 'Node Js' },
        { value: 2, text: 'Frontend' },
        { value: 2, text: 'Backend' }
      ],
      formDeployed: false,
      form:{
        name:'Field Name',
        type:'Field Type',
        fields:[
          {name:'Field Name',type:'Field Type',submit:'Add More'}
        ]
      },
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        thumbnailHeight: 150,
        addRemoveLinks: false
      },
      imagesUrl: 'https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/door-company-logo.jpg'
    };
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(3),
      },
      email: {
        required,
        email,
      },
      skill: {
        required,
      },
      digits: {
        required,
        integer,
      },
    },
  },
  methods: {
    async fetchForm () {
      const form = await firebase.database().ref('forms/' + this.$store.state.firestoreData.docId).get()
      if(form.val()) this.formDeployed = true
    },
    submitForm (){
      if (this.title && this.desc && this.selected){
       firebase.database().ref('forms/' + this.$store.state.firestoreData.docId).set({
    title: this.title,
    desc: this.desc,
    test: this.options[this.selected],
    fields: this.form.fields,
    logo: this.imagesUrl
  // eslint-disable-next-line no-unused-vars
  }).then((e) => {
    this.formUrl = `http://app.einfach.in/apply/${this.$store.state.firestoreData.docId}`
    this.$swal({
        title: 'Form Deployed',
        text: 'Click on Link button to view'})
  });} else{
    this.$swal('Warning', 'Required fields are missing!', 'warning')
  }
    },
    openLink () {
      if (!this.formDeployed) this.$swal('Warning', 'Not deployed yet', 'warning')
      else this.$swal({
        title: 'Form URL',
        text: `http://app.einfach.in/apply/${this.$store.state.firestoreData.docId}`})
    },
    addField (name,type){
      if(name != 'Field Name'){
      this.form.fields[this.form.fields.length-1] = {name,type,submit:'Added'}
      this.form.fields.push({name:'Field Name',type:'Field Type',submit:'Add More'})}
    },
    async afterComplete(upload) {
      console.log('running')
      this.isLoading = true;
      try {
        //save image
        let file = upload;
        var metadata = {
          contentType: "image/png"
        };
        var storageRef = firebase.storage().ref();
        var imageRef = storageRef.child(`images/a.png`);
        await imageRef.put(file, metadata);
        var downloadURL = await imageRef.getDownloadURL();
        this.imagesUrl= downloadURL;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created () {
    this.fetchForm()
  }
};
</script>
