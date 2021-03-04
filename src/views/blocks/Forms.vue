<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Block Forms" subtitle="Easily integrated in your blocks.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Blocks</b-breadcrumb-item>
          <b-breadcrumb-item active>Forms</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Form Submission in Options -->
      <b-row>
        <b-col md="6">
          <b-form @submit="onSubmit" @reset="onReset">
            <base-block rounded title="Block Form" header-bg>
              <template #options>
                <b-button type="submit" size="sm" variant="primary">
                  Submit
                </b-button>
                <b-button type="reset" size="sm" variant="alt-primary">
                  Reset
                </b-button>
              </template>
              <b-row class="justify-content-center py-sm-3 py-md-5">
                <b-col sm="10" md="8">
                  <b-form-group label="Username" label-for="block-form1-username">
                    <b-form-input id="block-form1-username" class="form-control-alt" v-model="form.username" placeholder="Enter your username.."></b-form-input>
                  </b-form-group>
                  <b-form-group label="Password" label-for="block-form1-password">
                    <b-form-input id="block-form1-password" class="form-control-alt" v-model="form.password" type="password" placeholder="Enter your password.."></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-checkbox id="block-form1-remember-me" v-model="form.rememberMe">
                      Remember Me?
                    </b-form-checkbox>
                  </b-form-group>
                </b-col>
              </b-row>
            </base-block>
          </b-form>
        </b-col>
        <b-col md="6">
          <b-form @submit="onSubmit" @reset="onReset">
            <base-block rounded title="Block Form" header-bg header-rtl>
              <template #options>
                <b-button type="submit" size="sm" variant="primary">
                  Submit
                </b-button>
                <b-button type="reset" size="sm" variant="alt-primary">
                  Reset
                </b-button>
              </template>
              <b-row class="justify-content-center py-sm-3 py-md-5">
                <b-col sm="10" md="8">
                  <b-form-group label="Username" label-for="block-form2-username">
                    <b-form-input id="block-form2-username" class="form-control-alt" v-model="form.username" placeholder="Enter your username.."></b-form-input>
                  </b-form-group>
                  <b-form-group label="Password" label-for="block-form2-password">
                    <b-form-input id="block-form2-password" class="form-control-alt" v-model="form.password" type="password" placeholder="Enter your password.."></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-checkbox id="block-form2-remember-me" v-model="form.rememberMe">
                      Remember Me?
                    </b-form-checkbox>
                  </b-form-group>
                </b-col>
              </b-row>
            </base-block>
          </b-form>
        </b-col>
        <b-col md="6">
          <b-form @submit="onSubmit" @reset="onReset">
            <base-block rounded title="Block Form" header-bg>
              <template #options>
                <b-button type="submit" size="sm" variant="outline-primary">
                  Submit
                </b-button>
                <b-button type="reset" size="sm" variant="outline-danger">
                  Reset
                </b-button>
              </template>
              <b-row class="justify-content-center py-sm-3 py-md-5">
                <b-col sm="10" md="8">
                  <b-form-group label="Username" label-for="block-form3-username">
                    <b-form-input id="block-form3-username" class="form-control-alt" v-model="form.username" placeholder="Enter your username.."></b-form-input>
                  </b-form-group>
                  <b-form-group label="Password" label-for="block-form3-password">
                    <b-form-input id="block-form3-password" class="form-control-alt" v-model="form.password" type="password" placeholder="Enter your password.."></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-checkbox id="block-form3-remember-me" v-model="form.rememberMe">
                      Remember Me?
                    </b-form-checkbox>
                  </b-form-group>
                </b-col>
              </b-row>
            </base-block>
          </b-form>
        </b-col>
        <b-col md="6">
          <b-form @submit="onSubmit" @reset="onReset">
            <base-block rounded title="Block Form" header-bg header-rtl>
              <template #options>
                <b-button type="submit" size="sm" variant="outline-primary">
                  Submit
                </b-button>
                <b-button type="reset" size="sm" variant="outline-danger">
                  Reset
                </b-button>
              </template>
              <b-row class="justify-content-center py-sm-3 py-md-5">
                <b-col sm="10" md="8">
                  <b-form-group label="Username" label-for="block-form4-username">
                    <b-form-input id="block-form4-username" class="form-control-alt" v-model="form.username" placeholder="Enter your username.."></b-form-input>
                  </b-form-group>
                  <b-form-group label="Password" label-for="block-form4-password">
                    <b-form-input id="block-form4-password" class="form-control-alt" v-model="form.password" type="password" placeholder="Enter your password.."></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-checkbox id="block-form4-remember-me" v-model="form.rememberMe">
                      Remember Me?
                    </b-form-checkbox>
                  </b-form-group>
                </b-col>
              </b-row>
            </base-block>
          </b-form>
        </b-col>
        <b-col md="6">
          <b-form @submit="onSubmit" @reset="onReset">
            <base-block rounded title="Block Form" header-bg>
              <template #options>
                <button type="submit" class="btn-block-option">
                  Submit
                </button>
                <button type="reset" class="btn-block-option">
                  Reset
                </button>
              </template>
              <b-row class="justify-content-center py-sm-3 py-md-5">
                <b-col sm="10" md="8">
                  <b-form-group label="Username" label-for="block-form5-username">
                    <b-form-input id="block-form5-username" class="form-control-alt" v-model="form.username" placeholder="Enter your username.."></b-form-input>
                  </b-form-group>
                  <b-form-group label="Password" label-for="block-form5-password">
                    <b-form-input id="block-form5-password" class="form-control-alt" v-model="form.password" type="password" placeholder="Enter your password.."></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-checkbox id="block-form5-remember-me" v-model="form.rememberMe">
                      Remember Me?
                    </b-form-checkbox>
                  </b-form-group>
                </b-col>
              </b-row>
            </base-block>
          </b-form>
        </b-col>
        <b-col md="6">
          <b-form @submit="onSubmit" @reset="onReset">
            <base-block rounded title="Block Form" header-bg header-rtl>
              <template #options>
                <button type="submit" class="btn-block-option">
                  Submit
                </button>
                <button type="reset" class="btn-block-option">
                  Reset
                </button>
              </template>
              <b-row class="justify-content-center py-sm-3 py-md-5">
                <b-col sm="10" md="8">
                  <b-form-group label="Username" label-for="block-form6-username">
                    <b-form-input id="block-form6-username" class="form-control-alt" v-model="form.username" placeholder="Enter your username.."></b-form-input>
                  </b-form-group>
                  <b-form-group label="Password" label-for="block-form6-password">
                    <b-form-input id="block-form6-password" class="form-control-alt" v-model="form.password" type="password" placeholder="Enter your password.."></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-checkbox id="block-form6-remember-me" v-model="form.rememberMe">
                      Remember Me?
                    </b-form-checkbox>
                  </b-form-group>
                </b-col>
              </b-row>
            </base-block>
          </b-form>
        </b-col>
        <b-col md="6">
          <b-form @submit="onSubmit" @reset="onReset">
            <base-block rounded title="Block Form" header-bg>
              <template #options>
                <b-button type="submit" size="sm" variant="alt-primary">
                  Submit
                </b-button>
                <b-button type="reset" size="sm" variant="alt-danger">
                  Reset
                </b-button>
              </template>
              <b-row class="justify-content-center py-sm-3 py-md-5">
                <b-col sm="10" md="8">
                  <b-form-group label="Username" label-for="block-form7-username">
                    <b-form-input id="block-form7-username" class="form-control-alt" v-model="form.username" placeholder="Enter your username.."></b-form-input>
                  </b-form-group>
                  <b-form-group label="Password" label-for="block-form7-password">
                    <b-form-input id="block-form7-password" class="form-control-alt" v-model="form.password" type="password" placeholder="Enter your password.."></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-checkbox id="block-form7-remember-me" v-model="form.rememberMe">
                      Remember Me?
                    </b-form-checkbox>
                  </b-form-group>
                </b-col>
              </b-row>
            </base-block>
          </b-form>
        </b-col>
        <b-col md="6">
          <b-form @submit="onSubmit" @reset="onReset">
            <base-block rounded title="Block Form" header-bg header-rtl>
              <template #options>
                <b-button type="submit" size="sm" variant="alt-primary">
                  Submit
                </b-button>
                <b-button type="reset" size="sm" variant="alt-danger">
                  Reset
                </b-button>
              </template>
              <b-row class="justify-content-center py-sm-3 py-md-5">
                <b-col sm="10" md="8">
                  <b-form-group label="Username" label-for="block-form8-username">
                    <b-form-input id="block-form8-username" class="form-control-alt" v-model="form.username" placeholder="Enter your username.."></b-form-input>
                  </b-form-group>
                  <b-form-group label="Password" label-for="block-form8-password">
                    <b-form-input id="block-form8-password" class="form-control-alt" v-model="form.password" type="password" placeholder="Enter your password.."></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-checkbox id="block-form8-remember-me" v-model="form.rememberMe">
                      Remember Me?
                    </b-form-checkbox>
                  </b-form-group>
                </b-col>
              </b-row>
            </base-block>
          </b-form>
        </b-col>
      </b-row>
      <!-- END Form Submission in Options -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: '',
        rememberMe: false
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()

      // Alert with form input values
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()

      // Reset our form values
      this.form.username = ''
      this.form.password = ''
      this.form.rememberMe = false
    }
  }
}
</script>
