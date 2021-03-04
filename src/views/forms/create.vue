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
              Email field is added by default<br>
              
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
               <base-background class="my-4" image="https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-HD-Light-Blue-Wallpaper-Images.jpg" inner-class="bg-black-30">
      <div   v-if="options[selected]" class="content content-full text-center">
        <div v-if="imagesUrl" class="my-3">
            <img class="img-avatar img-avatar128" :src="imagesUrl" alt="Avatar">
        </div>
        <h1 class="h2 mb-0">{{title}}</h1>
        <span class="text-75">{{options[selected].text}}</span>
        <span class="text-55">{{desc}}</span>
      </div>
    </base-background>
          <b-row class="push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                Please fill out the required details
              </p>
            </b-col>
            <b-col lg="8" xl="5">
              <b-form-group label="Email Address" label-for="example-text-input">
                <b-form-input id="example-text-input" placeholder="Email"></b-form-input>
              </b-form-group>
              <section v-for="field in form.fields" :key="field.name">
                <section v-if="field.name !='Field Name'">
              <b-form-group :label="field.name" label-for="example-text-input">
                <b-form-input id="example-text-input" placeholder="Text Input"></b-form-input>
              </b-form-group>
                </section>
            </section>
            </b-col>
          </b-row>
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
</style>

<script>
import firebase from "../../firebase";
import vue2Dropzone from 'vue2-dropzone'

export default {
  components: {
    'vueDropzone': vue2Dropzone
  },
  data () {
    return {
      title: '',
      desc:'',
      selected: null,
      formUrl: null,
      options: [
        { value: null, text: 'Please select' },
        { value: 1, text: 'JavaScript' },
        { value: 2, text: 'Python' },
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
      imagesUrl: ''
    };
  },
  methods: {
    submitForm (){
       firebase.database().ref('forms/' + this.$store.state.authUid).set({
    title: this.title,
    desc: this.desc,
    test: this.options[this.selected],
    fields: this.form.fields,
    logo: this.imagesUrl
  }).then((e) => {
    this.formUrl = `http://localhost:8080/#/auth/applications/${this.$store.state.authUid}`
    console.log(e)
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
      this.$refs.imgDropZone.removeFile(upload);
    }
  }
};
</script>
