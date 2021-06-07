<template>
  <!-- Page Content -->
  <div class="hero-static">
    <div class="content">
      <b-row class="justify-content-center">
        <b-col md="8" lg="6" xl="5">
          <!-- Sign Up Block -->
          <base-block
            rounded
            themed
            class="mb-0"
            header-class="bg-primary-dark"
            title="Create Account"
          >
            <template #options>
              <!-- Terms Modal -->
              <button
                type="button"
                class="btn-block-option font-size-sm"
                v-b-modal.one-signup-terms
              >
                View Terms
              </button>
              <b-modal
                id="one-signup-terms"
                size="lg"
                body-class="p-0"
                hide-footer
                hide-header
              >
                <div
                  class="block block-rounded block-themed block-transparent mb-0"
                >
                  <div class="block-header bg-primary-dark">
                    <h3 class="block-title">Terms &amp; Conditions</h3>
                    <div class="block-options">
                      <button
                        type="button"
                        class="btn-block-option"
                        @click="$bvModal.hide('one-signup-terms')"
                      >
                        <i class="fa fa-fw fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <div class="block-content">
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam
                      curae, ornare laoreet adipiscing luctus mauris adipiscing
                      pretium eget fermentum, tristique lobortis est ut metus
                      lobortis tortor tincidunt himenaeos habitant quis dictumst
                      proin odio sagittis purus mi, nec taciti vestibulum quis
                      in sit varius lorem sit metus mi.
                    </p>
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam
                      curae, ornare laoreet adipiscing luctus mauris adipiscing
                      pretium eget fermentum, tristique lobortis est ut metus
                      lobortis tortor tincidunt himenaeos habitant quis dictumst
                      proin odio sagittis purus mi, nec taciti vestibulum quis
                      in sit varius lorem sit metus mi.
                    </p>
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam
                      curae, ornare laoreet adipiscing luctus mauris adipiscing
                      pretium eget fermentum, tristique lobortis est ut metus
                      lobortis tortor tincidunt himenaeos habitant quis dictumst
                      proin odio sagittis purus mi, nec taciti vestibulum quis
                      in sit varius lorem sit metus mi.
                    </p>
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam
                      curae, ornare laoreet adipiscing luctus mauris adipiscing
                      pretium eget fermentum, tristique lobortis est ut metus
                      lobortis tortor tincidunt himenaeos habitant quis dictumst
                      proin odio sagittis purus mi, nec taciti vestibulum quis
                      in sit varius lorem sit metus mi.
                    </p>
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam
                      curae, ornare laoreet adipiscing luctus mauris adipiscing
                      pretium eget fermentum, tristique lobortis est ut metus
                      lobortis tortor tincidunt himenaeos habitant quis dictumst
                      proin odio sagittis purus mi, nec taciti vestibulum quis
                      in sit varius lorem sit metus mi.
                    </p>
                  </div>
                  <div
                    class="block-content block-content-full text-right border-top"
                  >
                    <b-button
                      variant="alt-primary"
                      class="mr-1"
                      @click="$bvModal.hide('one-signup-terms')"
                      >Close</b-button
                    >
                    <b-button
                      variant="primary"
                      @click="$bvModal.hide('one-signup-terms')"
                      >I Agree</b-button
                    >
                  </div>
                </div>
              </b-modal>
              <!-- END Terms Modal -->

              <router-link
                to="/auth/signin"
                class="btn-block-option"
                v-b-tooltip.hover.nofade.left="'Sign In'"
              >
                <i class="fa fa-sign-in-alt"></i>
              </router-link>
            </template>
            <div class="p-sm-3 px-lg-4 py-lg-5">
              <h1 class="h2 mb-1">Einfach Tech</h1>
              <p class="text-muted mb-2">
                Please fill the following details to create a new account.
              </p>
              <b-row>
                <b-col cols="5" class="my-2 pr-2">
            <vue-dropzone ref="imgDropZone" id="dropzone" :options="dropzoneOptions" @vdropzone-complete="afterComplete"></vue-dropzone>
            </b-col>
                <b-col cols="7" class="my-2">
                  <div class="form-group">
                    <b-form-input
                      size="lg"
                      class="form-control-alt"
                      id="username"
                      name="username"
                      placeholder="Username"
                      v-model="$v.form.username.$model"
                      :state="!$v.form.username.$error && null"
                      aria-describedby="username-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="username-feedback">
                      Please enter a username
                    </b-form-invalid-feedback>
                  </div>
                  <div class="form-group">
                    <b-form-input
                      type="email"
                      size="lg"
                      class="form-control-alt"
                      id="email"
                      name="email"
                      placeholder="Email"
                      v-model="$v.form.email.$model"
                      :state="!$v.form.email.$error && null"
                      aria-describedby="email-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="email-feedback">
                      Please enter your email
                    </b-form-invalid-feedback>
                  </div>
                  <div class="form-group">
                    <b-form-input
                      size="lg"
                      class="form-control-alt"
                      id="companyName"
                      name="Company Name"
                      placeholder="Company Name"
                      v-model="$v.form.companyName.$model"
                      aria-describedby="companyName-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="companyName-feedback">
                      Please enter company name
                    </b-form-invalid-feedback>
                  </div>

                </b-col>
              </b-row>

              <!-- Sign Up Form -->
              <b-form @submit.stop.prevent="onSubmit">
                <div class="py-3">
                  <div class="form-group">
                    <b-form-input
                      size="lg"
                      class="form-control-alt"
                      id="companyWebsite"
                      name="Company Website"
                      placeholder="Company Website"
                      v-model="$v.form.companyWebsite.$model"
                      aria-describedby="companyWebsite-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="companyWebsite-feedback">
                      Please enter companyWebsite
                    </b-form-invalid-feedback>
                  </div>
                  <div class="form-group">
                    <b-form-input
                      type="password"
                      size="lg"
                      class="form-control-alt"
                      id="password"
                      name="password"
                      placeholder="Password"
                      v-model="$v.form.password.$model"
                      :state="!$v.form.password.$error && null"
                      aria-describedby="password-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="password-feedback">
                      Please provide a secure password
                    </b-form-invalid-feedback>
                  </div>
                  <div class="form-group">
                    <b-form-input
                      type="password"
                      size="lg"
                      class="form-control-alt"
                      id="password2"
                      name="password2"
                      placeholder="Confirm Password"
                      v-model="$v.form.password2.$model"
                      :state="!$v.form.password2.$error && null"
                      aria-describedby="password2-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="password2-feedback">
                      Please confirm your password
                    </b-form-invalid-feedback>
                  </div>
                  <div class="form-group">
                    <b-form-checkbox
                      id="terms"
                      name="terms"
                      v-model="$v.form.terms.$model"
                      :state="!$v.form.terms.$error && null"
                      aria-describedby="terms-feedback"
                      >I agree to Terms &amp; Conditions</b-form-checkbox
                    >
                    <b-form-invalid-feedback
                      id="terms-feedback"
                      :state="
                        $v.form.terms.$dirty ? !$v.form.terms.$error : null
                      "
                    >
                      You must agree to the service terms!
                    </b-form-invalid-feedback>
                  </div>
                </div>
                <b-row class="form-group">
                  <b-col md="6" xl="5">
                    <b-button
                      v-if="loading == false"
                      type="submit"
                      variant="alt-success"
                      block
                    >
                      <i class="fa fa-fw fa-plus mr-1"></i> Sign Up
                    </b-button>
                    <b-button
                      v-if="loading == true"
                      type="submit"
                      variant="alt-success"
                      block
                    >
                      <b-spinner
                        small
                        variant="success"
                        label="Loading..."
                        class="mr-3"
                      ></b-spinner>
                      Signing Up
                    </b-button>
                  </b-col>
                </b-row>
              </b-form>
              <!-- END Sign Up Form -->
            </div>
          </base-block>
          <!-- END Sign Up Block -->
        </b-col>
      </b-row>
    </div>
    <div class="content content-full font-size-sm text-muted text-center">
      <strong>{{
        $store.getters.appName + " " + $store.getters.appVersion
      }}</strong>
      &copy; {{ $store.getters.appCopyright }}
    </div>
  </div>
  <!-- END Page Content -->
</template>

<style lang="scss">

// Vue2 Dropzone + Custom overrides
@import '~vue2-dropzone/dist/vue2Dropzone.min.css';
@import './src/assets/scss/vendor/dropzone';
</style>

<script>
// Vuelidate, for more info and examples you can check out https://github.com/vuelidate/vuelidate
import firebase from "../../../firebase";
import { validationMixin } from "vuelidate";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import vue2Dropzone from 'vue2-dropzone'

export default {
  components: {
    'vueDropzone': vue2Dropzone
  },
  mixins: [validationMixin],
  data() {
    return {
      loading: false,
      form: {
        username: null,
        companyName: null,
        companyWebsite: null,
        email: null,
        password: null,
        password2: null,
        terms: null,
      },
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 130,
        thumbnailHeight: 150,
        addRemoveLinks: false,
        dictDefaultMessage: "<i class='fa fa-fw fa-user mr-2'></i>UPLOAD LOGO"
      },
      imagesUrl: ''
    };
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(3),
      },
      companyName: {
        required,
        minLength: minLength(3),
      },
      companyWebsite: {
        required,
        minLength: minLength(3),
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(5),
      },
      password2: {
        required,
        sameAsPassword: sameAs("password"),
      },
      terms: {
        sameAs: sameAs(() => true),
      },
    },
  },
  methods: {
    async afterComplete(upload) {
      this.isLoading = true;
      try {
        //save image
        let file = upload;
        var metadata = {
          contentType: "image/png"
        };
        var storageRef = await firebase.storage().ref();
        var imageRef = await storageRef.child(`companyLogos/${this.form.username}.png`);
        await imageRef.put(file, metadata);
        var downloadURL = await imageRef.getDownloadURL();
        this.imagesUrl= downloadURL;
        console.log(downloadURL)
      } catch (error) {
        console.log(error);
      }
    },
    createAccount (uid){
      const data = this.form
      const user = {name: data.companyName, email: data.email, logo: this.imagesUrl, website: data.companyWebsite}
      const emailTemplates = {invite: '', rejected: '', shortlisted: '', subjects: {invite: '', rejected: '', shortlisted: ''}}
      const candidates = {applied: [], invited: [], ongoing: [], shortlisted: [], completed: []}
      const inbox = {invited: [{body: 'Welcome',email: 'am@einfach.tech',received: new Date(), title: 'New Account',user: "admin@einfach.tech"}]}
      firebase.firestore().collection("accounts").doc()
          .set({uid, user, emailTemplates, inbox, candidates, 
          notifications: [
        {
          icon: 'fa fa-fw fa-check-circle text-success',
          title: 'Your account has been created',
          time: new Date()
        }]})
          .then(() => {
              this.loading = false;
              this.$store.commit('setAuth', uid)
      this.$router.push('/backend/dashboard')
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
    },
    onSubmit() {
      this.loading = true;
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          this.createAccount(data.user.uid)
          data.user
            .updateProfile({
              displayName: this.form.name,
            })
            .then(() => {
            });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>
