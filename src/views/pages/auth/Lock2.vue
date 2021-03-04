<template>
  <!-- Page Content -->
  <base-background image="img/photos/photo34@2x.jpg" inner-class="test">
    <div class="hero-static d-flex align-items-center">
      <div class="w-100">
        <!-- Unlock Section -->
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
                    Account Locked
                  </h1>
                  <h2 class="h6 font-w400 text-muted mb-5">
                    Please enter your password to unlock your account
                  </h2>
                  <img class="img-avatar img-avatar96" src="img/avatars/avatar10.jpg" alt="Avatar">
                  <p class="font-w600 text-center my-2">
                    user@example.com
                  </p>
                </div>
                <!-- END Header -->

                <!-- Unlock Form -->
                <b-form @submit.stop.prevent="onSubmit">
                  <div class="form-group py-3">
                    <b-form-input type="password" size="lg" class="form-control-alt" id="password" name="password" placeholder="Password" v-model="$v.form.password.$model" :state="!$v.form.password.$error && null" aria-describedby="password-feedback"></b-form-input>
                  </div>
                  <b-row class="form-group justify-content-center">
                    <b-col md="6" xl="5">
                      <b-button type="submit" variant="alt-primary" block>
                        <i class="fa fa-fw fa-lock-open mr-1"></i> Unlock
                      </b-button>
                    </b-col>
                  </b-row>
                </b-form>
                <!-- END Unlock Form -->
              </b-col>
            </b-row>
          </div>
        </div>
        <!-- END Unlock Section -->

        <!-- Footer -->
        <div class="font-size-sm text-center text-white py-3">
          <strong>{{ $store.getters.appName + ' ' + $store.getters.appVersion }}</strong> &copy; {{ $store.getters.appCopyright }}
        </div>
        <!-- END Footer -->
      </div>
    </div>
  </base-background>
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
        password: null
      }
    }
  },
  validations: {
    form: {
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
