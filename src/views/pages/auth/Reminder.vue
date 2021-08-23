<template>
  <div class="bg-primary">
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
        <div class="px-4 py-3 w-100 d-lg-none d-flex flex-column flex-sm-row justify-content-between font-size-sm text-center text-sm-left">
          <p class="font-w500 text-black-50 py-2 mb-0">
            <strong>{{ $store.getters.appName + ' ' + $store.getters.appVersion }}</strong> &copy; {{ $store.getters.appCopyright }}
          </p>
          <ul class="list list-inline py-2 mb-0">
            <li class="list-inline-item">
              <a class="text-muted font-w500" href="javascript:void(0)">Legal</a>
            </li>
            <li class="list-inline-item">
              <a class="text-muted font-w500" href="javascript:void(0)">Contact</a>
            </li>
            <li class="list-inline-item">
              <a class="text-muted font-w500" href="javascript:void(0)">Terms</a>
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
              <h1 class="font-w700 mb-2">
                Password Reminder
              </h1>
              <h2 class="font-size-base text-muted mb-3">
                Please provide your account’s email and we will send you your password.
              </h2>
            </div>
            <!-- END Header -->

            <!-- Reminder Form -->
            <b-row no-gutters class="justify-content-center">
              <b-col sm="8" xl="4">
                <b-form @submit.stop.prevent="onSubmit">
                  <div class="form-group">
                    <b-form-input size="lg" class="form-control-alt py-4" id="reminder" name="reminder" placeholder="Email Address" v-model="$v.form.reminder.$model" :state="!$v.form.reminder.$error && null" aria-describedby="reminder-feedback"></b-form-input>
                  </div>
                  <div class="form-group text-center mb-0">
                    <button v-if="loading == true" class="btn btn-lg btn-alt-primary disabled">
                        <b-spinner small variant="primary" label="Loading..." class="mr-2"></b-spinner>
                        Sign In
                      </button>
                      <button v-else class="btn btn-lg btn-alt-primary"><i class="fa fa-fw fa-envelope mr-1 opacity-50"></i> Send Mail</button>
                  </div>
                </b-form>
              </b-col>
            </b-row>
            <!-- END Reminder Form -->
          </div>
        </div>
        <div class="p-4 w-100 d-lg-none d-flex justify-content-between font-size-sm">
          <p class="font-w500 text-black-50 mb-0">
            <strong>{{ $store.getters.appName + ' ' + $store.getters.appVersion }}</strong> &copy; {{ $store.getters.appCopyright }}
          </p>
          <ul class="list list-inline mb-0">
            <li class="list-inline-item">
              <a class="text-muted font-w500" href="javascript:void(0)">Legal</a>
            </li>
            <li class="list-inline-item">
              <a class="text-muted font-w500" href="javascript:void(0)">Contact</a>
            </li>
            <li class="list-inline-item">
              <a class="text-muted font-w500" href="javascript:void(0)">Terms</a>
            </li>
          </ul>
        </div>
      </b-col>
      <!-- END Main Section -->
    </b-row>
  </div>
</template>

<script>
import firebase from "../../../firebase"
// Vuelidate, for more info and examples you can check out https://github.com/vuelidate/vuelidate
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data () {
    return {
      loading: null,
      form: {
        reminder: null
      }
    }
  },
  validations: {
    form: {
      reminder: {
        required,
        minLength: minLength(3)
      }
    }
  },
  methods: {
    async onSubmit () {
      var auth = firebase.auth();
      var emailAddress = this.form.reminder;
      if (emailAddress) {
        this.loading = true
        try {
          await auth.sendPasswordResetEmail(emailAddress)
          this.$bvToast.toast(`Password reset email sent to ${emailAddress}`, { title: `Check your inbox`, toaster: 'b-toaster-top-right', variant: 'success', autoHideDelay: 5000, appendToast: false})
        } catch(error){
          this.$bvToast.toast(`${error.message}`, { title: `Error in Password reset`, toaster: 'b-toaster-top-right', variant: 'danger', autoHideDelay: 5000, appendToast: false})
        }
        this.loading = null
      } else {
        this.$bvToast.toast(`Unable to process request right now: Email Address Missing`, { title: `Error in Password reset`, toaster: 'b-toaster-top-right', variant: 'danger', autoHideDelay: 5000, appendToast: false})
      }
    }
  }
}
</script>
