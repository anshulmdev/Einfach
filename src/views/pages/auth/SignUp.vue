<template>
  <div class="bg-primary-dark">
    <b-row no-gutters class="bg-primary-dark-op">
      <!-- Meta Info Section -->
      <b-col lg="4" class="hero-static d-none d-lg-flex flex-column justify-content-center">
        <div class="p-4 p-xl-5 flex-grow-1 d-flex align-items-center">
          <div class="w-100">
            <router-link to="/" class="link-fx font-w600 font-size-h2 text-white">
              <i class="fab fa-buffer fa-2x text-success mr-1 align-middle" style="font-size: 1.5em"></i>
              <span class="align-middle">Einfach</span>
            </router-link>
            <p class="text-white-75 mr-xl-8 mt-3">
              Let's get started<br />
              We are enrolling all new users to Einfach Premium plans.<br />
              Feel free to contact support for details.
            </p>
          </div>
        </div>
        <div class="p-4 p-xl-5 d-xl-flex justify-content-between align-items-center font-size-sm">
          <p class="font-w500 text-white-50 mb-0">
            <strong>{{ $store.getters.appName + " " + $store.getters.appVersion }}</strong> &copy; {{ $store.getters.appCopyright }}
          </p>
          <ul class="list list-inline mb-0 py-2">
            <li class="list-inline-item">
              <a class="text-white-75 font-w500" target="_blank" href="https://einfach.in/privacy-policy">Legal</a>
            </li>
            <li class="list-inline-item">
              <a class="text-white-75 font-w500" target="_blank" href="mailto:support@einfach.in">Contact</a>
            </li>
            <li class="list-inline-item">
              <a class="text-white-75 font-w500" target="_blank" href="https://einfach.in/terms-and-conditions">Terms</a>
            </li>
          </ul>
        </div>
      </b-col>
      <!-- END Meta Info Section -->

      <!-- Main Section -->
      <b-col lg="8" class="hero-static d-flex flex-column align-items-center bg-white">
        <div class="p-3 w-100 d-lg-none text-center">
          <router-link to="/" class="link-fx font-w600 font-size-h3 text-dark">
            <i class="fab fa-buffer fa-2x text-success mr-1 align-middle" style="font-size: 1.5em"></i>
            <span class="align-middle">Einfach</span>
          </router-link>
        </div>
        <div class="p-4 w-100 flex-grow-1 d-flex align-items-center">
          <div class="w-100">
            <!-- Header -->
            <div class="text-center mb-5 mt-4">
              <h1 class="font-w700 mb-2">Create Account</h1>
              <h2 class="font-size-base text-muted mb-3">Get your access today in one easy step</h2>
            </div>
            <!-- END Header -->

            <!-- Sign Up Form -->
            <b-row no-gutters class="justify-content-center">
              <b-col sm="10" xl="6">
                <b-row>
                  <b-col cols="4">
                    <div><vue-dropzone ref="imgDropZone" id="dropzone" :options="dropzoneOptions" @vdropzone-complete="afterComplete"></vue-dropzone></div>
                  </b-col>
                  <b-col cols="8" class="">
                    <div class="form-group">
                      <b-form-input size="lg" class="form-control-alt" id="username" name="username" placeholder="Username" v-model="$v.form.username.$model" :state="!$v.form.username.$error && null" aria-describedby="username-feedback"></b-form-input>
                      <b-form-invalid-feedback id="username-feedback"> Please enter a username </b-form-invalid-feedback>
                    </div>
                    <div class="form-group">
                      <b-form-input type="email" size="lg" class="form-control-alt" id="email" name="email" placeholder="Email" v-model="$v.form.email.$model" :state="!$v.form.email.$error && null" aria-describedby="email-feedback"></b-form-input>
                      <b-form-invalid-feedback id="email-feedback"> Please enter your email </b-form-invalid-feedback>
                    </div>
                    <div class="form-group">
                      <b-form-input size="lg" class="form-control-alt" id="companyName" name="Company Name" placeholder="Company Name" v-model="$v.form.companyName.$model" aria-describedby="companyName-feedback"></b-form-input>
                      <b-form-invalid-feedback id="companyName-feedback"> Please enter company name </b-form-invalid-feedback>
                    </div>
                  </b-col>
                </b-row>

                <!-- Sign Up Form -->
                <b-form @submit.stop.prevent="onSubmit">
                  <div class="pt-1">
                    <div class="form-group">
                      <b-form-input size="lg" class="form-control-alt" id="companyWebsite" name="Company Website" placeholder="Company Website" v-model="$v.form.companyWebsite.$model" aria-describedby="companyWebsite-feedback"></b-form-input>
                      <b-form-invalid-feedback id="companyWebsite-feedback"> Please enter companyWebsite </b-form-invalid-feedback>
                    </div>
                    <div class="form-group">
                      <b-form-input type="password" size="lg" class="form-control-alt" id="password" name="password" placeholder="Password" v-model="$v.form.password.$model" :state="!$v.form.password.$error && null" aria-describedby="password-feedback"></b-form-input>
                      <b-form-invalid-feedback id="password-feedback"> Please provide a secure password </b-form-invalid-feedback>
                    </div>
                    <div class="form-group">
                      <b-form-input type="password" size="lg" class="form-control-alt" id="password2" name="password2" placeholder="Confirm Password" v-model="$v.form.password2.$model" :state="!$v.form.password2.$error && null" aria-describedby="password2-feedback"></b-form-input>
                      <b-form-invalid-feedback id="password2-feedback"> Please confirm your password </b-form-invalid-feedback>
                    </div>
                    <div class="form-group">
                      <b-form-input type="text" size="lg" class="form-control-alt" id="coupon" name="coupon" placeholder="Add Coupon Code" v-model="$v.form.coupon.$model" :state="!$v.form.coupon.$error && null" aria-describedby="coupon-feedback"></b-form-input>
                      <b-form-invalid-feedback id="coupon"> Add Valid Code </b-form-invalid-feedback>
                    </div>
                    <div class="form-group">
                      <div class="d-md-flex align-items-md-center justify-content-md-between">
                        <div>
                          <b-form-checkbox id="terms" name="terms" v-model="$v.form.terms.$model" :state="!$v.form.terms.$error && null" aria-describedby="terms-feedback">I agree to Terms &amp; Conditions</b-form-checkbox>
                        </div>
                      </div>
                    </div>
                  </div>
                  <b-row class="form-group d-flex flex-row-reverse">
                    <b-col md="6" xl="5">
                      <b-button @click="createUser()" v-if="loading == false" variant="alt-success" block> <i class="fa fa-fw fa-sign-in-alt mr-1"></i> Sign Up </b-button>
                      <b-button v-if="loading == true" variant="alt-success" block>
                        <b-spinner small variant="success" label="Loading..." class="mr-3"></b-spinner>
                        Signing Up
                      </b-button>
                    </b-col>
                  </b-row>
                </b-form>
                <!-- END Sign Up Form -->
              </b-col>
            </b-row>
            <!-- END Sign Up Form -->
          </div>
        </div>
        <div class="px-4 py-3 w-100 d-lg-none d-flex flex-column flex-sm-row justify-content-between font-size-sm text-center text-sm-left">
          <p class="font-w500 text-black-50 py-2 mb-0">
            <strong>{{ $store.getters.appName + " " + $store.getters.appVersion }}</strong> &copy; {{ $store.getters.appCopyright }}
          </p>
          <ul class="list list-inline py-2 mb-0">
            <li class="list-inline-item">
              <a class="text-muted font-w500" target="_blank" href="https://einfach.in/privacy-policy">Legal</a>
            </li>
            <li class="list-inline-item">
              <a class="text-muted font-w500" target="_blank" href="mailto:support@einfach.in">Contact</a>
            </li>
            <li class="list-inline-item">
              <a class="text-muted font-w500" target="_blank" href="https://einfach.in/terms-and-conditions">Terms</a>
            </li>
          </ul>
        </div>
      </b-col>
      <!-- END Main Section -->
    </b-row>
  </div>
</template>

<style lang="scss">
// Vue2 Dropzone + Custom overrides
@import "~vue2-dropzone/dist/vue2Dropzone.min.css";
</style>

<script>
// Vuelidate, for more info and examples you can check out https://github.com/vuelidate/vuelidate
import firebase from "../../../firebase"
import { validationMixin } from "vuelidate"
import { required, minLength, email, sameAs } from "vuelidate/lib/validators"
import vue2Dropzone from "vue2-dropzone"

export default {
  components: {
    vueDropzone: vue2Dropzone,
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
        coupon: null,
        terms: null,
      },
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 20,
        thumbnailHeight: 80,
        addRemoveLinks: false,
        dictDefaultMessage: "<i class='fa fa-fw fa-user mr-2'></i>UPLOAD LOGO",
      },
      imagesUrl: "",
    }
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
      coupon: {
        minLength: minLength(25)
      },
      terms: {
        sameAs: sameAs(() => true),
      },
    },
  },
  methods: {
    async afterComplete(upload) {
      this.isLoading = true
      try {
        //save image
        let file = upload
        var metadata = {
          contentType: "image/png",
        }
        var storageRef = await firebase.storage().ref()
        var imageRef = await storageRef.child(`companyLogos/${this.form.username}.png`)
        await imageRef.put(file, metadata)
        var downloadURL = await imageRef.getDownloadURL()
        this.imagesUrl = downloadURL
        console.log(downloadURL)
      } catch (error) {
        console.log(error)
      }
    },
    createAccount(uid) {
      const data = this.form
      const user = { name: data.companyName, email: data.email, logo: this.imagesUrl, website: data.companyWebsite, premium: (this.form.coupon && this.form.coupon.match(/einfach/)) ? true : false }
      const emailTemplates = {
        invited:
          "<p>Dear <strong>[name]</strong></p><p>We are delighted to inform you that your application has been shortlisted for further rounds of evaluation.</p><p>Next round will of technical skills evaluation which can be accessible with link below</p><p><strong>[testLink]</strong></p><p>&nbsp;</p><p>Please follow given instructions</p><ul><li>Test is splitted in five sections</li><li>Time limit is 120 minutes</li><li>Test requires Audio and Video permissions</li></ul><p>&nbsp;</p><p>Sincerely,</p><p><strong>[company]</strong> Team</p>",
        rejected: "<p>Dear <strong>[name]</strong><br><br>Thank you for your interest in this position. We have reviewed your application and resume and we regret to inform you that it has not been selected for further consideration.</p><p>&nbsp;</p><p>We wish you every success with your job search ans thank you for your interest in our company.</p><p>Sincerely,</p><p><strong>[company]</strong> Team</p>",
        shortlisted: "<p>Dear <strong>[name]</strong></p><p>We are delighted to inform you that we would like to arrange an interview. Please let us know when you are available to come to our offices</p><p>Contact email: <strong>[companyEmail]</strong></p><p>Sincerely,</p><p><strong>[company]</strong> Team</p>",
        subjects: { invited: "Software Developer Role at [company]", rejected: "Software Developer Role at [company]", shortlisted: "Software Developer Role at [company]" },
      }
      const candidates = { applied: [], invited: [], ongoing: [], shortlisted: [], completed: [], rejected: [] }
      const inbox = { invited: [{ body: "Welcome", email: "am@einfach.tech", received: new Date(), title: "New Account", user: "admin@einfach.tech" }] }
      firebase
        .firestore()
        .collection("accounts")
        .doc()
        .set({
          uid,
          user,
          emailTemplates,
          inbox,
          candidates,
          notifications: [
            {
              icon: "fa fa-fw fa-check-circle text-success",
              title: "Your account has been created",
              time: new Date(),
            },
          ],
        })
        .then(() => {
          this.loading = false
          this.$cookies.set("uid", user.uid)
          this.$store.commit("setAuth", user.uid)
          this.$router.push("/auth/signin")
        })
        .catch((error) => {
          console.error("Error writing document: ", error)
        })
    },
    async createUser() {
      if (this.form.username && this.form.terms && this.form.email && this.form.password && this.form.password === this.form.password2 && this.form.companyName && this.form.companyWebsite) {
        this.loading = true
        const data = this.form
        await fetch("https://einfach.api.stdlib.com/operations@dev/newUser/signupMail/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        await firebase
          .auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then((data) => {
            this.createAccount(data.user.uid)
            data.user
              .updateProfile({
                displayName: this.form.name,
              })
              .then(() => {})
          })
          .catch((err) => {
            this.error = err.message
          })
      } else {
        if (!this.form.username) {
          this.$bvToast.toast("Username is Mandatory", { title: "Username not filled", toaster: "b-toaster-top-right", variant: "warning", autoHideDelay: 5000, appendToast: false,})
        }
        else if (!this.form.email) {
          this.$bvToast.toast("Email is Mandatory", { title: "Email not filled", toaster: "b-toaster-top-right", variant: "warning", autoHideDelay: 5000, appendToast: false,})
        }
        else if (!this.form.companyName) {
          this.$bvToast.toast("Company Name is Mandatory", { title: "Company Name is Missing", toaster: "b-toaster-top-right", variant: "warning", autoHideDelay: 5000, appendToast: false,})
        }
        else if (!this.form.companyWebsite) {
          this.$bvToast.toast("Please provide website or page links", { title: "Website link is Missing", toaster: "b-toaster-top-right", variant: "warning", autoHideDelay: 5000, appendToast: false,})
        }
        else if (!this.form.password) {
          this.$bvToast.toast("Password is Mandatory", { title: "Password not filled", toaster: "b-toaster-top-right", variant: "warning", autoHideDelay: 5000, appendToast: false,})
        }
        else if (this.form.password !== this.form.password2) {
          this.$bvToast.toast("Password is Mandatory", { title: "Password not Matched", toaster: "b-toaster-top-right", variant: "warning", autoHideDelay: 5000, appendToast: false,})
        }
        else if (!this.form.terms) {
          this.$bvToast.toast("Please accept terms and conditions", { title: "TnC not checked", toaster: "b-toaster-top-right", variant: "warning", autoHideDelay: 5000, appendToast: false,})
        }
        else {
          this.$bvToast.toast("Please recheck all fields", { title: "Missing Info", toaster: "b-toaster-top-right", variant: "warning", autoHideDelay: 5000, appendToast: false,})
        }
      }
    },
  },
}
</script>
