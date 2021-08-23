<template>
  <base-background image="/img/photos/photo28@2x.jpg">
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
              Access your admin panel.<br />
              Subscribe Einfach Premium and enjoy 100+ Features
              
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
            <div class="text-center mb-5">
              <h1 class="font-w700 mb-2">Sign In</h1>
              <h2 class="font-size-base text-muted mb-3">Welcome, please login or <router-link to="/auth/signup">sign up</router-link> for a new account.</h2>
            </div>
            <!-- END Header -->

            <!-- Sign In Form -->
            <b-row no-gutters class="justify-content-center">
              <b-col sm="8" xl="4">
                <div>
                  <div class="form-group">
                    <b-form-input size="lg" class="form-control-alt py-4" id="username" name="username" placeholder="Username" v-model="$v.form.username.$model" :state="!$v.form.username.$error && null" aria-describedby="username-feedback"></b-form-input>
                  </div>
                  <div class="form-group">
                    <b-form-input type="password" size="lg" class="form-control-alt py-4" id="password" name="password" placeholder="Password" v-model="$v.form.password.$model" :state="!$v.form.password.$error && null" aria-describedby="password-feedback"></b-form-input>
                  </div>
                  <div class="form-group d-flex justify-content-between align-items-center">
                    <div>
                      <router-link to="/auth/reminder" class="text-muted font-size-sm font-w500 d-block d-lg-inline-block mb-1">Forgot Password?</router-link>
                    </div>
                    <div>
                      <button v-if="loading == true" class="btn btn-lg btn-alt-primary disabled">
                        <b-spinner small variant="primary" label="Loading..." class="mr-2"></b-spinner>
                        Sign In
                      </button>
                      <button v-else class="btn btn-lg btn-alt-primary" @click="loginUser"><i class="fa fa-fw fa-sign-in-alt mr-1 opacity-50"></i> Sign In</button>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
            <!-- END Sign In Form -->
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
  </base-background>
</template>

<script>
import firebase from "../../../firebase"
// Vuelidate, for more info and examples you can check out https://github.com/vuelidate/vuelidate
import { validationMixin } from "vuelidate"
import { required, minLength } from "vuelidate/lib/validators"

export default {
  mixins: [validationMixin],
  data() {
    return {
      loading: null,
      form: {
        username: null,
        password: null,
      },
    }
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(3),
      },
      password: {
        required,
        minLength: minLength(5),
      },
    },
  },
  methods: {
    loginUser() {
      this.loading = true
      this.$v.form.$touch()

      if (this.$v.form.$anyError) {
        return
      }
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.username, this.form.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user
          const query = firebase.firestore().collection("accounts").where("uid", "==", user.uid)
          // eslint-disable-next-line no-unused-vars
          const observer = query.onSnapshot(
            (querySnapshot) => {
              querySnapshot.docChanges().forEach((change) => {
                this.$cookies.set("setDocId", change.doc.id)
                this.$store.commit("setDocId", change.doc.id)
              })
            },
            (err) => {
              console.log(`Encountered error: ${err}`)
            }
          )
          this.$cookies.set("uid", user.uid)
          this.$store.commit("setAuth", user.uid)
          this.loading = null
          this.$router.push("/backend/dashboard")
          // ...
        })
        .catch(() => {
          this.loading = null})
    },
  },
}
</script>
