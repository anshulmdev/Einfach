<template>
  <!-- Page Content -->
  <base-background image="img/photos/photo6@2x.jpg" inner-class="bg-primary-dark-op">
    <div class="hero bg-black-50">
      <div class="hero-inner">
        <div class="content content-full">
          <b-row class="justify-content-center">
            <b-col md="6" class="py-3 text-center">
              <!-- Header -->
              <div class="push">
                <router-link class="link-fx font-w700 font-size-h1" to="/">
                  <span class="text-white">OneUI</span>
                </router-link>
                <p class="text-white-50">Stay tuned! We are working on it and it is coming soon!</p>
              </div>
              <!-- END Header -->

              <!-- Countdown -->
              <countdown :time="408 * 24 * 60 * 60 * 955">
                <template slot-scope="props">
                  <b-row class="row items-push py-3 text-center font-w700">
                    <b-col cols="6" md="3">
                      <div class="font-size-h1 text-white">{{ props.days }}</div>
                      <div class="font-size-sm text-muted">DAYS</div>
                    </b-col>
                    <b-col cols="6" md="3">
                      <div class="font-size-h1 text-white">{{ props.hours }}</div>
                      <div class="font-size-sm text-muted">HOURS</div>
                    </b-col>
                    <b-col cols="6" md="3">
                      <div class="font-size-h1 text-white">{{ props.minutes }}</div>
                      <div class="font-size-sm text-muted">MINUTES</div>
                    </b-col>
                    <b-col cols="6" md="3">
                      <div class="font-size-h1 text-white">{{ props.seconds }}</div>
                      <div class="font-size-sm text-muted">SECONDS</div>
                    </b-col>
                  </b-row>
                </template>
              </countdown>
              <!-- END Countdown -->

              <!-- Subscribe Form -->
              <b-form @submit="onSubmit" class="push">
                <b-row class="form-group justify-content-center">
                  <b-col md="10" xl="6">
                    <p class="font-w600 text-success text-center" v-if="this.form.success">
                      {{ form.success }}
                    </p>
                    <b-input-group class="mb-2">
                      <b-form-input type="email" v-model="form.email" class="border-0" placeholder="Enter your email.." required></b-form-input>
                      <b-input-group-append>
                        <b-button type="submit" variant="primary">Subscribe</b-button>
                      </b-input-group-append>
                    </b-input-group>
                    <div class="font-size-sm text-white-50">
                      Don't worry, we hate spam.
                    </div>
                  </b-col>
                </b-row>
              </b-form>
              <!-- END Subscribe Form -->

              <!-- Back to Dashboard -->
              <b-button variant="alt-primary" to="/backend/pages/generic/blank">
                <i class="fa fa-arrow-left mr-1"></i> Go Back to Dashboard
              </b-button>
              <!-- END Back to Dashboard -->
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </base-background>
  <!-- END Page Content -->
</template>

<script>
// Vue Countdown, for more info and examples you can check out https://github.com/fengyuanchen/vue-countdown
import VueCountdown from '@chenfengyuan/vue-countdown'

export default {
  components: {
    [VueCountdown.name]: VueCountdown
  },
  data () {
    return {
      form: {
        email: '',
        success: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()

      // Alert with form input values
      //window.console.log(JSON.stringify(this.form))
      
      this.form.success = 'Thank you for subscribing!'
      this.form.email = ''
    }
  }
}
</script>

