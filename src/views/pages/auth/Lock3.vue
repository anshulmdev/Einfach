<template>
  <div class="bg-danger">
    <b-row no-gutters class="bg-primary-dark-op">
      <!-- Meta Info Section -->
      <b-col lg="4" class="hero-static d-none d-lg-flex flex-column justify-content-center">
        <div class="p-4 p-xl-5 flex-grow-1 d-flex align-items-center">
          <div class="w-100">
            <router-link to="/" class="link-fx font-w600 font-size-h2 text-white">
              One<span class="font-w400">UI</span>
            </router-link>
            <p class="text-white-75 mr-xl-8 mt-2">
              Did you know that you can have as many team members as you want in your account?
            </p>
          </div>
        </div>
        <div class="p-4 p-xl-5 d-xl-flex justify-content-between align-items-center font-size-sm">
          <p class="font-w500 text-white-50 mb-0">
            <strong>{{ $store.getters.appName + ' ' + $store.getters.appVersion }}</strong> &copy; {{ $store.getters.appCopyright }}
          </p>
          <ul class="list list-inline mb-0 py-2">
            <li class="list-inline-item">
              <a class="text-white-75 font-w500" href="javascript:void(0)">Legal</a>
            </li>
            <li class="list-inline-item">
              <a class="text-white-75 font-w500" href="javascript:void(0)">Contact</a>
            </li>
            <li class="list-inline-item">
              <a class="text-white-75 font-w500" href="javascript:void(0)">Terms</a>
            </li>
          </ul>
        </div>
      </b-col>
      <!-- END Meta Info Section -->

      <!-- Main Section -->
      <b-col lg="8" class="hero-static d-flex flex-column align-items-center bg-white">
        <div class="p-3 w-100 d-lg-none text-center">
          <router-link to="/" class="link-fx font-w600 font-size-h3 text-dark">
            One<span class="font-w400">UI</span>
          </router-link>
        </div>
        <div class="p-4 w-100 flex-grow-1 d-flex align-items-center">
          <div class="w-100">
            <!-- Header -->
            <div class="text-center mb-5">
              <p class="mb-3">
                <i class="fa fa-2x fa-circle-notch text-primary-light"></i>
              </p>
              <h1 class="font-w700 mb-2">
                Account Locked
              </h1>
              <h2 class="font-size-base text-muted mb-5">
                Please enter your password to unlock your account
              </h2>
              <img class="img-avatar img-avatar96" src="img/avatars/avatar10.jpg" alt="Avatar">
              <p class="font-w600 text-center my-2">
                user@example.com
              </p>
            </div>
            <!-- END Header -->

            <!-- Unlock Form -->
            <b-row no-gutters class="justify-content-center">
              <b-col sm="8" xl="4">
                <b-form @submit.stop.prevent="onSubmit">
                  <div class="form-group">
                    <b-form-input type="password" size="lg" class="form-control-alt py-4" id="password" name="password" placeholder="Password" v-model="$v.form.password.$model" :state="!$v.form.password.$error && null" aria-describedby="password-feedback"></b-form-input>
                  </div>
                  <div class="form-group text-center mb-0">
                    <b-button type="submit" size="lg" variant="alt-success">
                      <i class="fa fa-fw fa-lock-open mr-1 opacity-50"></i> Unlock
                    </b-button>
                  </div>
                </b-form>
              </b-col>
            </b-row>
            <!-- END Unlock Form -->
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
      <!-- END Main Section -->
    </b-row>
  </div>
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
      this.$router.push('/backend/pages/auth/all')
    }
  }
}
</script>
