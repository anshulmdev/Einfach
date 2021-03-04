<template>
  <!-- Page Content -->
  <div class="hero-static">
    <div class="content">
      <b-row class="justify-content-center">
        <b-col md="8" lg="6" xl="4">
          <!-- Sign In Block -->
          <base-block rounded themed header-class="bg-primary-dark" class="mb-0" title="Sign In">
            <template #options>
              <router-link to="/auth/reminder" class="btn-block-option font-size-sm">Forgot Password?</router-link>
              <router-link to="/auth/signup" class="btn-block-option" v-b-tooltip.hover.nofade.left="'New Account'">
                <i class="fa fa-user-plus"></i>
              </router-link>
            </template>
            <div class="p-sm-3 px-lg-4 py-lg-5">
              <h1 class="h2 mb-1">OneUI</h1>
              <p class="text-muted">
                Welcome, please login.
              </p>

              <!-- Sign In Form -->
              <b-form @submit.stop.prevent="onSubmit">
                <div class="py-3">
                  <div class="form-group">
                    <b-form-input size="lg" class="form-control-alt" id="username" name="username" placeholder="Username" v-model="$v.form.username.$model" :state="!$v.form.username.$error && null" aria-describedby="username-feedback"></b-form-input>
                    <b-form-invalid-feedback id="username-feedback">
                      Please enter your username
                    </b-form-invalid-feedback>
                  </div>
                  <div class="form-group">
                    <b-form-input type="password" size="lg" class="form-control-alt" id="password" name="password" placeholder="Password" v-model="$v.form.password.$model" :state="!$v.form.password.$error && null" aria-describedby="password-feedback"></b-form-input>
                    <b-form-invalid-feedback id="password-feedback">
                      Please enter your password
                    </b-form-invalid-feedback>
                  </div>
                  <div class="form-group">
                    <b-form-checkbox id="remember" name="remember">Remember Me</b-form-checkbox>
                  </div>
                </div>
                <b-row class="form-group">
                  <b-col md="6" xl="5">
                    <b-button type="submit" variant="alt-primary" block>
                      <i class="fa fa-fw fa-sign-in-alt mr-1"></i> Sign In
                    </b-button>
                  </b-col>
                </b-row>
              </b-form>
              <!-- END Sign In Form -->
            </div>
          </base-block>
          <!-- END Sign In Block -->
        </b-col>
      </b-row>
    </div>
    <div class="content content-full font-size-sm text-muted text-center">
      <strong>{{ $store.getters.appName + ' ' + $store.getters.appVersion }}</strong> &copy; {{ $store.getters.appCopyright }}
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
