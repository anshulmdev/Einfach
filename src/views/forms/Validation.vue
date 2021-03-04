<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Form Validation" subtitle="It’s never been easier to validate form values.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Forms</b-breadcrumb-item>
          <b-breadcrumb-item active>Validation</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <base-block rounded title="Validation Form">
        <b-form @submit.stop.prevent="onSubmit">
          <!-- Regular -->
          <h2 class="content-heading border-bottom mb-4 pb-2">Regular</h2>
          <b-row class="items-push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                Username, email and password validation made easy for your login/register forms
              </p>
            </b-col>
            <b-col lg="8" xl="5">
              <b-form-group label-for="username">
                <template #label>
                  Username <span class="text-danger">*</span>
                </template>
                <b-form-input id="username" name="username" placeholder="Enter a username.." v-model="$v.form.username.$model" :state="$v.form.username.$dirty ? !$v.form.username.$error : null" aria-describedby="username-feedback"></b-form-input>
                <b-form-invalid-feedback id="username-feedback">
                  Your username must consist of at least 3 characters
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label-for="email">
                <template #label>
                  Email <span class="text-danger">*</span>
                </template>
                <b-form-input type="email" id="email" name="email" placeholder="Your valid email.." v-model="$v.form.email.$model" :state="$v.form.email.$dirty ? !$v.form.email.$error : null" aria-describedby="email-feedback"></b-form-input>
                <b-form-invalid-feedback id="username-feedback">
                  Please enter a valid email address
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label-for="password">
                <template #label>
                  Password <span class="text-danger">*</span>
                </template>
                <b-form-input type="password" id="password" name="password" placeholder="Choose a safe one.." v-model="$v.form.password.$model" :state="$v.form.password.$dirty ? !$v.form.password.$error : null" aria-describedby="password-feedback"></b-form-input>
                <b-form-invalid-feedback id="username-feedback">
                  Your password must be at least 5 characters long
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label-for="password2">
                <template #label>
                  Confirm Password <span class="text-danger">*</span>
                </template>
                <b-form-input type="password" id="password2" name="password2" placeholder="..and confirm it!" v-model="$v.form.password2.$model" :state="$v.form.password2.$dirty ? !$v.form.password2.$error : null" aria-describedby="password2-feedback"></b-form-input>
                <b-form-invalid-feedback id="username-feedback">
                  Please enter the same password as above
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- END Regular -->

          <!-- Advanced -->
          <h2 class="content-heading border-bottom mb-4 pb-2">Advanced</h2>
          <b-row class="items-push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                You can easily validate any kind of data you like either it is in a normal input, a textarea or a select box
              </p>
            </b-col>
            <b-col lg="8" xl="5">
              <b-form-group label-for="suggestions">
                <template #label>
                  Suggestions <span class="text-danger">*</span>
                </template>
                <b-form-textarea id="suggestions" name="suggestions" rows="5" placeholder="What would you like to see?" v-model="$v.form.suggestions.$model" :state="$v.form.suggestions.$dirty ? !$v.form.suggestions.$error : null" aria-describedby="suggestions-feedback"></b-form-textarea>
                <b-form-invalid-feedback id="suggestions-feedback">
                  What can we do to become better?
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label="Select" label-for="skill">
                <template #label>
                  Best Skill <span class="text-danger">*</span>
                </template>
                <b-form-select id="skill" name="skill" :options="options" v-model="$v.form.skill.$model" :state="$v.form.skill.$dirty ? !$v.form.skill.$error : null" aria-describedby="skill-feedback"></b-form-select>
                <b-form-invalid-feedback id="skill-feedback">
                  Please select a skill!
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label-for="currency">
                <template #label>
                  Currency ($) <span class="text-danger">*</span>
                </template>
                <b-form-input id="currency" name="currency" placeholder="21.60" v-model="$v.form.currency.$model" :state="$v.form.currency.$dirty ? !$v.form.currency.$error : null" aria-describedby="currency-feedback"></b-form-input>
                <b-form-invalid-feedback id="currency-feedback">
                  Please enter a price!
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label-for="website">
                <template #label>
                  Website <span class="text-danger">*</span>
                </template>
                <b-form-input id="website" name="website" placeholder="http://example.com" v-model="$v.form.website.$model" :state="$v.form.website.$dirty ? !$v.form.website.$error : null" aria-describedby="website-feedback"></b-form-input>
                <b-form-invalid-feedback id="website-feedback">
                  Please enter your website!
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label-for="digits">
                <template #label>
                  Digits <span class="text-danger">*</span>
                </template>
                <b-form-input id="digits" name="digits" placeholder="5" v-model="$v.form.digits.$model" :state="$v.form.digits.$dirty ? !$v.form.digits.$error : null" aria-describedby="digits-feedback"></b-form-input>
                <b-form-invalid-feedback id="digits-feedback">
                  Please enter only digits!
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label-for="number">
                <template #label>
                  Number <span class="text-danger">*</span>
                </template>
                <b-form-input id="number" name="number" placeholder="5.0" v-model="$v.form.number.$model" :state="$v.form.number.$dirty ? !$v.form.number.$error : null" aria-describedby="number-feedback"></b-form-input>
                <b-form-invalid-feedback id="number-feedback">
                  Please enter a number!
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label-for="range">
                <template #label>
                  Range [1, 5] <span class="text-danger">*</span>
                </template>
                <b-form-input id="range" name="range" placeholder="4" v-model="$v.form.range.$model" :state="$v.form.range.$dirty ? !$v.form.range.$error : null" aria-describedby="range-feedback"></b-form-input>
                <b-form-invalid-feedback id="range-feedback">
                  Please enter a number between 1 and 5!
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label-for="range">
                <template #label>
                  Terms &amp; Conditions <span class="text-danger">*</span>
                </template>
                <b-form-checkbox id="terms" name="terms" v-model="$v.form.terms.$model" :state="$v.form.terms.$dirty ? !$v.form.terms.$error : null" aria-describedby="terms-feedback">I agree</b-form-checkbox>
                <b-form-invalid-feedback id="terms-feedback" :state="$v.form.terms.$dirty ? !$v.form.terms.$error : null">
                  You must agree to the service terms!
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- END Advanced -->

          <!-- Submit -->
          <b-row class="items-push">
            <b-col lg="7" offset-lg="4">
              <b-button type="submit" variant="alt-primary">Submit</b-button>
            </b-col>
          </b-row>
          <!-- END Submit -->
        </b-form>
      </base-block>
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
// Vuelidate, for more info and examples you can check out https://github.com/vuelidate/vuelidate
import { validationMixin } from 'vuelidate'
import { required, minLength, between, email, decimal, integer, url, sameAs } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data () {
    return {
      options: [
        { value: null, text: 'Please select' },
        { value: 'html', text: 'HTML' },
        { value: 'css', text: 'CSS' },
        { value: 'javascript', text: 'JavaScript' },
        { value: 'angular', text: 'Angular' },
        { value: 'react', text: 'React' },
        { value: 'vuejs', text: 'Vue.js' },
        { value: 'ruby', text: 'Ruby' },
        { value: 'php', text: 'PHP' },
        { value: 'asp', text: 'ASP.NET' },
        { value: 'python', text: 'Python' },
        { value: 'mysql', text: 'MySQL' }
      ],
      form: {
        username: null,
        email: null,
        password: null,
        password2: null,
        suggestions: null,
        skill: null,
        currency: null,
        website: null,
        digits: null,
        number: null,
        range: null,
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
      suggestions: {
        required,
        minLength: minLength(3)
      },
      skill: {
        required
      },
      currency: {
        required,
        decimal
      },
      website: {
        required,
        url
      },
      digits: {
        required,
        integer
      },
      number: {
        required,
        decimal
      },
      range: {
        required,
        between: between(1, 5)
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
    }
  }
}
</script>
