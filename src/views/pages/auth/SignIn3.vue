<template>
  <base-background image="/img/photos/photo28@2x.jpg">
    <b-row no-gutters class="bg-primary-dark-op">
      <!-- Meta Info Section -->
      <b-col lg="4" class="hero-static d-none d-lg-flex flex-column justify-content-center">
        <div class="p-4 p-xl-5 flex-grow-1 d-flex align-items-center">
          <div class="w-100">
            <router-link to="/" class="link-fx font-w600 font-size-h2 text-white">
              One<span class="font-w400">UI</span>
            </router-link>
            <p class="text-white-75 mr-xl-8 mt-2">
              Welcome to your amazing app. Feel free to login and start managing your projects and clients.
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
                Sign In
              </h1>
              <h2 class="font-size-base text-muted mb-3">
                Welcome, please login or <router-link to="/auth/signup3">sign up</router-link> for a new account.
              </h2>
            </div>
            <!-- END Header -->

            <!-- Sign In Form -->
            <b-row no-gutters class="justify-content-center">
              <b-col sm="8" xl="4">
                <b-form @submit.stop.prevent="onSubmit">
                  <div class="form-group">
                    <b-form-input size="lg" class="form-control-alt py-4" id="username" name="username" placeholder="Username" v-model="$v.form.username.$model" :state="!$v.form.username.$error && null" aria-describedby="username-feedback"></b-form-input>
                  </div>
                  <div class="form-group">
                    <b-form-input type="password" size="lg" class="form-control-alt py-4" id="password" name="password" placeholder="Password" v-model="$v.form.password.$model" :state="!$v.form.password.$error && null" aria-describedby="password-feedback"></b-form-input>
                  </div>
                  <div class="form-group d-flex justify-content-between align-items-center">
                    <div>
                      <router-link to="/auth/reminder3" class="text-muted font-size-sm font-w500 d-block d-lg-inline-block mb-1">Forgot Password?</router-link>
                    </div>
                    <div>
                      <button type="submit" class="btn btn-lg btn-alt-primary">
                        <i class="fa fa-fw fa-sign-in-alt mr-1 opacity-50"></i> Sign In
                      </button>
                    </div>
                  </div>
                </b-form>
              </b-col>
            </b-row>
            <!-- END Sign In Form -->
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
  </base-background>
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
      this.$router.push('/backend/pages/auth/all')
    }
  }
}
</script>
