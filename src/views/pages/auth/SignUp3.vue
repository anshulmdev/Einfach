<template>
  <div class="bg-primary-dark">
    <b-row no-gutters class="bg-primary-dark-op">
      <!-- Meta Info Section -->
      <b-col lg="4" class="hero-static d-none d-lg-flex flex-column justify-content-center">
        <div class="p-4 p-xl-5 flex-grow-1 d-flex align-items-center">
          <div class="w-100">
            <router-link to="/" class="link-fx font-w600 font-size-h2 text-white">
              One<span class="font-w400">UI</span>
            </router-link>
            <p class="text-white-75 mr-xl-8 mt-2">
              Creating a new account is completely free. Get started with 5 projects to manage and feel free to upgrade as your business grow.
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
                Create Account
              </h1>
              <h2 class="font-size-base text-muted mb-3">
                Get your access today in one easy step
              </h2>
            </div>
            <!-- END Header -->

            <!-- Sign Up Form -->
            <b-row no-gutters class="justify-content-center">
              <b-col sm="8" xl="4">
                <b-form @submit.stop.prevent="onSubmit">
                  <div class="form-group">
                    <b-form-input size="lg" class="form-control-alt py-4" id="username" name="username" placeholder="Username" v-model="$v.form.username.$model" :state="!$v.form.username.$error && null" aria-describedby="username-feedback"></b-form-input>
                  </div>
                  <div class="form-group">
                    <b-form-input type="email" size="lg" class="form-control-alt py-4" id="email" name="email" placeholder="Email" v-model="$v.form.email.$model" :state="!$v.form.email.$error && null" aria-describedby="email-feedback"></b-form-input>
                  </div>
                  <div class="form-group">
                    <b-form-input type="password" size="lg" class="form-control-alt py-4" id="password" name="password" placeholder="Password" v-model="$v.form.password.$model" :state="!$v.form.password.$error && null" aria-describedby="password-feedback"></b-form-input>
                  </div>
                  <div class="form-group">
                    <b-form-input type="password" size="lg" class="form-control-alt py-4" id="password2" name="password2" placeholder="Confirm Password" v-model="$v.form.password2.$model" :state="!$v.form.password2.$error && null" aria-describedby="password2-feedback"></b-form-input>
                  </div>
                  <div class="form-group">
                    <div class="d-md-flex align-items-md-center justify-content-md-between">
                      <div>
                        <b-form-checkbox id="terms" name="terms" v-model="$v.form.terms.$model" :state="!$v.form.terms.$error && null" aria-describedby="terms-feedback">I agree to Terms &amp; Conditions</b-form-checkbox>
                      </div>
                      <div class="py-2">
                        <!-- Terms Modal -->
                        <b-button variant="link" class="font-w500 font-size-sm p-0" v-b-modal.one-signup-terms>View Terms</b-button>
                        <b-modal id="one-signup-terms" size="lg" body-class="p-0" hide-footer hide-header>
                          <div class="block block-rounded block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                              <h3 class="block-title">Terms &amp; Conditions</h3>
                              <div class="block-options">
                                <button type="button" class="btn-block-option" @click="$bvModal.hide('one-signup-terms')">
                                  <i class="fa fa-fw fa-times"></i>
                                </button>
                              </div>
                            </div>
                            <div class="block-content">
                              <p>
                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                              </p>
                              <p>
                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                              </p>
                              <p>
                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                              </p>
                              <p>
                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                              </p>
                              <p>
                                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                              </p>
                            </div>
                            <div class="block-content block-content-full text-right border-top">
                              <b-button variant="alt-primary" class="mr-1" @click="$bvModal.hide('one-signup-terms')">Close</b-button>
                              <b-button variant="primary" @click="$bvModal.hide('one-signup-terms')">I Agree</b-button>
                            </div>
                          </div>
                        </b-modal>
                        <!-- END Terms Modal -->
                      </div>
                    </div>
                  </div>
                  <div class="form-group text-center mb-0">
                    <b-button type="submit" size="lg" variant="alt-success">
                      <i class="fa fa-fw fa-plus mr-1 opacity-50"></i> Sign Up
                    </b-button>
                  </div>
                </b-form>
              </b-col>
            </b-row>
            <!-- END Sign Up Form -->
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
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data () {
    return {
      form: {
        username: null,
        email: null,
        password: null,
        password2: null,
        terms: null
      }
    }
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(5)
      },
      password2: {
        required,
        sameAsPassword: sameAs('password')
      },
      terms: {
        sameAs: sameAs(() => true)
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
