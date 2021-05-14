<template>
  <div v-if="formDetails">
    <!-- Hero -->
    <base-page-heading :title="formDetails.title" :subtitle="formDetails.desc">
      <template #extra>
        <img
          class="img-avatar img-avatar96"
          :src="formDetails.logo"
          alt="Avatar"
        />
      </template>
    </base-page-heading>
    <!-- END Hero -->
    <div class="content">
      <!-- Alternative Style -->
      <base-block
        rounded
        title="Please fill out the required details"
        content-full
      >
        <b-form>
          <b-row class="push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                You can enable an alternative style with background color
              </p>
            </b-col>
            <b-col lg="8" xl="5">
              <b-form-group label-for="email">
                <template #label>
                  Email <span class="text-danger">*</span>
                </template>
                <b-form-input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your valid email.."
                  v-model="$v.form.email.$model"
                  :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
                  aria-describedby="email-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="username-feedback">
                  Please enter a valid email address
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label="Select" label-for="skill">
                <template #label>
                  Best Skill <span class="text-danger">*</span>
                </template>
                <b-form-select
                  id="skill"
                  name="skill"
                  :options="options"
                  v-model="$v.form.skill.$model"
                  :state="$v.form.skill.$dirty ? !$v.form.skill.$error : null"
                  aria-describedby="skill-feedback"
                ></b-form-select>
                <b-form-invalid-feedback id="skill-feedback">
                  Please select a skill!
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group>
                <label>Experience in Years</label>
                <div class="py-4">
                  <vue-slider
                    v-model="sliderValueNormal"
                    :dotSize="15"
                    :marks="[0, 20]"
                    :max="20"
                  ></vue-slider>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </base-block>
      <!-- Alternative Style -->
      <base-block rounded content-full>
        <b-form>
          <b-row class="push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                You can enable an alternative style with background color
              </p>
            </b-col>
            <b-col lg="8" xl="5">
              <b-form-group label-for="username">
                <template #label>
                  Full Name <span class="text-danger">*</span>
                </template>
                <b-form-input
                  id="username"
                  name="username"
                  placeholder="Enter your name"
                  v-model="$v.form.username.$model"
                  :state="
                    $v.form.username.$dirty ? !$v.form.username.$error : null
                  "
                  aria-describedby="username-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="username-feedback">
                  Your username must consist of at least 3 characters
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label-for="digits">
                <template #label>
                  Phone Number <span class="text-danger">*</span>
                </template>
                <b-form-input
                  id="digits"
                  name="digits"
                  placeholder="5"
                  v-model="$v.form.digits.$model"
                  :state="$v.form.digits.$dirty ? !$v.form.digits.$error : null"
                  aria-describedby="digits-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="digits-feedback">
                  Please enter only digits!
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group
                label="Upload your Resume"
                label-for="example-file-input-custom"
              >
                <b-form-file v-model="resume" id="example-file-input-custom"></b-form-file>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </base-block>
      <base-block rounded title="Submit Application" header-bg>
        <template #options>
          <b-button
            type="submit"
            class="px-4"
            size="md"
            variant="primary"
            @click="
              submitForm(
                $v.form.email.$model,
                sliderValueNormal,
                $v.form.username.$model,
                $v.form.digits.$model,
                tags[$v.form.skill.$model]
              )
            "
          >
            Submit
          </b-button>
          <b-button type="reset" class="px-4" size="md" variant="alt-primary">
            Reset
          </b-button>
        </template>
      </base-block>
    </div>
  </div>
</template>

<style lang="scss">
// Vue Slider + Custom overrides
@import "~vue-slider-component/theme/default.css";
@import "./src/assets/scss/vendor/vue-slider";
</style>

<script>
// Vuelidate, for more info and examples you can check out https://github.com/vuelidate/vuelidate
import { DB } from "../../../firebase";
import firebase from "../../../firebase";
import { validationMixin } from "vuelidate";
import { required, minLength, email, integer } from "vuelidate/lib/validators";
// Vue Slider, for more info and examples you can check out https://github.com/NightCatSama/vue-slider-component
import VueSlider from "vue-slider-component";

export default {
  mixins: [validationMixin],
  components: {
    VueSlider: VueSlider,
  },
  data() {
    return {
      resume: '',
      sliderValueNormal: 2,
      tags: {
        css: { danger: "CSS" },
        javascript: { warning: "JavaScript" },
        angular: { danger: "Angular" },
        React: { info: "React" },
        vuejs: { success: "Vue.js" },
        php: { info: "PHP" },
        ruby: { danger: "Ruby" },
        asp: { primary: "ASP.NET" },
        python: { success: "Python" },
        mysql: { info: "MySQL" },
      },
      options: [
        { value: null, text: "Please select" },
        { value: "css", text: "CSS" },
        {
          value: "javascript",
          text: "JavaScript",
        },
        { value: "angular", text: "Angular" },
        { value: "react", text: "React" },
        { value: "vuejs", text: "Vue.js" },
        { value: "ruby", text: "Ruby" },
        { value: "php", text: "PHP" },
        { value: "asp", text: "ASP.NET" },
        { value: "python", text: "Python" },
        { value: "mysql", text: "MySQL" },
      ],
      formDetails: null,
      form: {
        email: null,
      },
    };
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(3),
      },
      email: {
        required,
        email,
      },
      skill: {
        required,
      },
      digits: {
        required,
        integer,
      },
    },
  },
  mounted() {
    this.fetch();
  },
  methods: {
    async submitForm(email, experience, name, phone, tags) {
      var storageRef = firebase.storage().ref();
      var imageRef = storageRef.child(`${this.$store.state.firestoreData.docId}/resume/${email}`);
      // eslint-disable-next-line no-unused-vars
      const url = await imageRef.put(this.resume);
      var resume = await imageRef.getDownloadURL();
      const details = { email, experience, name, phone, tags, resume };
      const actualPath = await firebase
        .firestore()
        .collection("accounts")
        .doc(this.$route.params.id);
      // eslint-disable-next-line no-unused-vars
      const res = await actualPath.update({
        "candidates.applied": firebase.firestore.FieldValue.arrayUnion(details),
      });
    },
    async fetch() {
      const list = DB.ref(`forms/${this.$route.params.id}`);
      const snapshot = await list.once("value");
      this.formDetails = snapshot.val();
    },
    onSubmit() {
      this.$v.form.$touch();

      if (this.$v.form.$anyError) {
        return;
      }

      // Form submit logic
      this.$router.push("/backend");
    },
  },
};
</script>
