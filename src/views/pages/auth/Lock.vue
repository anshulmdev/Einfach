<template>
  <!-- Page Content -->
  <base-background image="img/photos/photo34@2x.jpg" inner-class="bg-white-90">
    <div class="hero-static">
      <div class="content">
        <b-row class="justify-content-center">
          <b-col md="8" lg="6" xl="4">
            <!-- Unlock Block -->
            <base-block rounded title="Account Locked" header-class="bg-primary-dark" class="mb-0" themed>
              <template #options>
                <router-link to="/auth/signin" class="btn-block-option" v-b-tooltip.hover.nofade.left="'Sign In with another account'">
                  <i class="fa fa-sign-in-alt"></i>
                </router-link>
              </template>
              <div class="p-sm-3 px-lg-4 py-lg-5 text-center">
                <img class="img-avatar img-avatar96" src="img/avatars/avatar10.jpg" alt="Avatar">
                <p class="font-w600 my-2">
                  user@example.com
                </p>

                <!-- Unlock Form -->
                <b-form @submit.stop.prevent="onSubmit">
                  <div class="form-group py-3">
                    <b-form-input type="password" size="lg" class="form-control-alt" id="password" name="password" placeholder="Password" v-model="$v.form.password.$model" :state="!$v.form.password.$error && null" aria-describedby="password-feedback"></b-form-input>
                    <b-form-invalid-feedback id="password-feedback">
                      Please enter your password
                    </b-form-invalid-feedback>
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
              </div>
            </base-block>
            <!-- END Unlock Block -->
          </b-col>
        </b-row>
      </div>
      <div class="content content-full font-size-sm text-center">
        <strong>{{ $store.getters.appName + ' ' + $store.getters.appVersion }}</strong> &copy; {{ $store.getters.appCopyright }}
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
