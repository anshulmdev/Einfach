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
                <!-- Block Tabs Default Style -->
          <b-tabs class="block" nav-class="nav-tabs-block" content-class="block-content">
            <b-tab title="Create Form" active>

      <base-block rounded title="Assignment Title">
        <b-row class="push">
          <b-col lg="4">
            <p class="font-size-sm text-muted">
              Write position for applicant
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

      <!-- Inline -->
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
              </b-col></b-row></b-col>
        </b-row>
      </base-block>
      <!-- END Inline -->
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
      <!-- END Basic -->
            </b-tab>
             <b-tab title="Preview">
  <div>
    <!-- Hero -->
    <base-page-heading :title="title" :subtitle="desc">
      <template #extra>
        <img
          class="img-avatar img-avatar96"
          :src="imagesUrl"
          alt="Avatar"
        />
      </template>
    </base-page-heading>
    <!-- END Hero -->
    <div class="content">
      <!-- Alternative Style -->
      <base-block
        rounded
        title="Please fill out the required details"
        content-full
      >
        <b-form>
          <b-row class="push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                You can enable an alternative style with background color
              </p>
            </b-col>
            <b-col lg="8" xl="5">
              <b-form-group label-for="email">
                <template #label>
                  Email <span class="text-danger">*</span>
                </template>
                <b-form-input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your valid email.."
                  v-model="$v.form.email.$model"
                  :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
                  aria-describedby="email-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="username-feedback">
                  Please enter a valid email address
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label="Select" label-for="skill">
                <template #label>
                  Best Skill <span class="text-danger">*</span>
                </template>
                <b-form-select
                  id="skill"
                  name="skill"
                  :options="options2"
                  v-model="$v.form.skill.$model"
                  :state="$v.form.skill.$dirty ? !$v.form.skill.$error : null"
                  aria-describedby="skill-feedback"
                ></b-form-select>
                <b-form-invalid-feedback id="skill-feedback">
                  Please select a skill!
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group>
                <label>Experience in Years</label>
                <div class="py-4">
                  <vue-slider
                    v-model="sliderValueNormal"
                    :dotSize="15"
                    :marks="[0, 20]"
                    :max="20"
                  ></vue-slider>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </base-block>
      <!-- Alternative Style -->
      <base-block rounded content-full>
        <b-form>
          <b-row class="push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                You can enable an alternative style with background color
              </p>
            </b-col>
            <b-col lg="8" xl="5">
              <b-form-group label-for="username">
                <template #label>
                  Full Name <span class="text-danger">*</span>
                </template>
                <b-form-input
                  id="username"
                  name="username"
                  placeholder="Enter your name"
                  v-model="$v.form.username.$model"
                  :state="
                    $v.form.username.$dirty ? !$v.form.username.$error : null
                  "
                  aria-describedby="username-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="username-feedback">
                  Your username must consist of at least 3 characters
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label-for="digits">
                <template #label>
                  Phone Number <span class="text-danger">*</span>
                </template>
                <b-form-input
                  id="digits"
                  name="digits"
                  placeholder="5"
                  v-model="$v.form.digits.$model"
                  :state="$v.form.digits.$dirty ? !$v.form.digits.$error : null"
                  aria-describedby="digits-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="digits-feedback">
                  Please enter only digits!
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group
                label="Upload your Resume"
                label-for="example-file-input-custom"
              >
                <b-form-file id="example-file-input-custom"></b-form-file>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </base-block>
            <base-block v-if="formUrl == null" rounded title="Submit final form" header-bg>
              <template #options>
                <b-button type="submit" class="px-4" size="md" variant="primary" @click="submitForm">
                  Submit
                </b-button>
                <b-button type="reset" class="px-4" size="md" variant="alt-primary">
                  Reset
                </b-button>
              </template>
              </base-block>
            <base-block v-if="formUrl" rounded title="Generated Form Url" header-bg>
            <template #options>
                <a>{{formUrl}}</a>
              </template>

              </base-block>
    </div>
  </div>
             </b-tab>
          </b-tabs>
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
</style>

<script>
import firebase from "../../firebase";
import vue2Dropzone from 'vue2-dropzone'
import { validationMixin } from "vuelidate";
import { required, minLength, email, integer } from "vuelidate/lib/validators";
// Vue Slider, for more info and examples you can check out https://github.com/NightCatSama/vue-slider-component
import VueSlider from "vue-slider-component";

export default {
  mixins: [validationMixin],
  components: {
    'vueDropzone': vue2Dropzone,
    VueSlider: VueSlider,
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
      title: 'Javascript Test 2021',
      desc:'Please fill form to apply',
      selected: null,
      formUrl: null,
      options: [
        { value: null, text: 'Please select' },
        { value: 1, text: 'JavaScript' },
        { value: 2, text: 'Node Js' },
        { value: 2, text: 'Frontend' },
        { value: 2, text: 'Backend' }
      ],
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
    submitForm (){
       firebase.database().ref('forms/' + this.$store.state.firestoreData.docId).set({
    title: this.title,
    desc: this.desc,
    test: this.options[this.selected],
    fields: this.form.fields,
    logo: this.imagesUrl
  // eslint-disable-next-line no-unused-vars
  }).then((e) => {
    this.formUrl = `http://app.einfach.tech/apply/${this.$store.state.firestoreData.docId}`
  });
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
    }
  }
};
</script>
