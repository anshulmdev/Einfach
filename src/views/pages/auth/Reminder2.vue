<template>
  <!-- Page Content -->
  <div class="hero-static d-flex align-items-center">
    <div class="w-100">
      <!-- Reminder Section -->
      <div class="bg-white">
        <div class="content content-full">
          <b-row class="justify-content-center">
            <b-col md="8" lg="6" xl="4" class="py-4">
              <!-- Header -->
              <div class="text-center">
                <p class="mb-2">
                  <i class="fa fa-2x fa-circle-notch text-primary"></i>
                </p>
                <h1 class="h4 mb-1">
                  Password Reminder
                </h1>
                <h2 class="h6 font-w400 text-muted mb-3">
                  Please provide your account’s email and we will send you your password.
                </h2>
              </div>
              <!-- END Header -->

              <!-- Reminder Form -->
              <b-form @submit.stop.prevent="onSubmit">
                <div class="form-group py-3">
                  <b-form-input size="lg" class="form-control-alt" id="reminder" name="reminder" placeholder="Username or Email" v-model="$v.form.reminder.$model" :state="!$v.form.reminder.$error && null" aria-describedby="reminder-feedback"></b-form-input>
                </div>
                <b-row class="form-group justify-content-center">
                  <b-col md="6" xl="5">
                    <b-button type="submit" variant="primary" block>
                      <i class="fa fa-fw fa-envelope mr-1"></i> Send Mail
                    </b-button>
                  </b-col>
                </b-row>
              </b-form>
              <!-- END Reminder Form -->

              <div class="text-center">
                <router-link to="/auth/signin2" class="font-size-sm font-w500">Login?</router-link>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
      <!-- END Reminder Section -->

      <!-- Footer -->
      <div class="font-size-sm text-center text-muted py-3">
        <strong>{{ $store.getters.appName + ' ' + $store.getters.appVersion }}</strong> &copy; {{ $store.getters.appCopyright }}
      </div>
      <!-- END Footer -->
    </div>
  </div>
  <!-- END Page Content -->
</template>

<script>
// Vuelidate, for more info and examples you can check out https://github.com/vuelidate/vuelidate
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data () {
    return {
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
    onSubmit () {
      this.$v.form.$touch()

      if (this.$v.form.$anyError) {
        return
      }

      // Form submit logic
      this.$router.push('/backend/pages/auth/all')
    }
  }
}
</script>
