<template>
  <!-- Page Content -->
  <div class="hero-static d-flex align-items-center">
    <div class="w-100">
      <!-- Sign In Section -->
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
                  Sign In
                </h1>
                <h2 class="h6 font-w400 text-muted mb-3">
                  A perfect match for your project
                </h2>
              </div>
              <!-- END Header -->

              <!-- Sign In Form -->
              <b-form @submit.stop.prevent="onSubmit">
                <div class="py-3">
                  <div class="form-group">
                    <b-form-input size="lg" class="form-control-alt" id="username" name="username" placeholder="Username" v-model="$v.form.username.$model" :state="!$v.form.username.$error && null" aria-describedby="username-feedback"></b-form-input>
                  </div>
                  <div class="form-group">
                    <b-form-input type="password" size="lg" class="form-control-alt" id="password" name="password" placeholder="Password" v-model="$v.form.password.$model" :state="!$v.form.password.$error && null" aria-describedby="password-feedback"></b-form-input>
                  </div>
                  <div class="form-group">
                    <div class="d-md-flex align-items-md-center justify-content-md-between">
                      <b-form-checkbox id="remember" name="remember" switch>Remember Me</b-form-checkbox>
                      <div class="py-2">
                        <router-link to="/auth/reminder2" class="font-size-sm font-w500">Forgot Password?</router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <b-row class="form-group row justify-content-center mb-0">
                  <b-col md="6" xl="5">
                    <b-button type="submit" variant="primary" block>
                      <i class="fa fa-fw fa-sign-in-alt mr-1"></i> Sign In
                    </b-button>
                  </b-col>
                </b-row>
              </b-form>
              <!-- END Sign In Form -->
            </b-col>
          </b-row>
        </div>
      </div>
      <!-- END Sign In Section -->

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
        username: null,
        password: null
      }
    }
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(3)
      },
      password: {
        required,
        minLength: minLength(5)
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
      this.$router.push('/backend')
    }
  }
}
</script>
