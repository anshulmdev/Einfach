<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Form Plugins" subtitle="Carefully integrated Vue plugins that will enhance your forms with great features.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Forms</b-breadcrumb-item>
          <b-breadcrumb-item active>Plugins</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Flatpickr Datetimepicker -->
      <base-block rounded title="Flatpickr Datetimepicker">
        <b-form @submit.prevent>
          <!-- Datepickers -->
          <h2 class="content-heading border-bottom mb-4 pb-2">Datepickers</h2>
          <b-row>
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                You can easily change the date format to match your preference
              </p>
            </b-col>
            <b-col lg="8" xl="4">
              <b-form-group label="Default format" label-for="example-flatpickr-default">
                <flat-pickr id="example-flatpickr-default" class="form-control bg-white" placeholder="Y-m-d" v-model="dateDefault"></flat-pickr>
              </b-form-group>
              <b-form-group label="Custom format" label-for="example-flatpickr-custom">
                <flat-pickr id="example-flatpickr-custom" class="form-control bg-white" placeholder="d-m-Y" v-model="dateCustom" :config="configCustom"></flat-pickr>
              </b-form-group>
              <b-form-group label="Friendly format" label-for="example-flatpickr-friendly">
                <flat-pickr id="example-flatpickr-friendly" class="form-control bg-white" placeholder="F j, Y" v-model="dateFriendly" :config="configFriendly"></flat-pickr>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- END Datepickers -->

          <!-- Datepicker Range -->
          <h2 class="content-heading border-bottom mb-4 pb-2">Datepicker Range</h2>
          <b-row>
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                A date range mode is available, very useful for booking or calendar web apps
              </p>
            </b-col>
            <b-col lg="8" xl="4">
              <b-form-group>
                <flat-pickr id="example-flatpickr-range" class="form-control bg-white" placeholder="Select Date Range" v-model="dateRange" :config="configRange"></flat-pickr>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- END Datepicker Range -->

          <!-- Timepickers -->
          <h2 class="content-heading border-bottom mb-4 pb-2">Timepickers</h2>
          <b-row>
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                You can also enable a standalone or integrated timepicker
              </p>
            </b-col>
            <b-col lg="8" xl="4">
              <b-form-group label="Standalone" label-for="example-flatpickr-time-standalone">
                <flat-pickr id="example-flatpickr-time-standalone" class="form-control bg-white" v-model="timeStandalone" :config="configTimeStandalone"></flat-pickr>
              </b-form-group>
              <b-form-group label="Standalone (24-hour format)" label-for="example-flatpickr-time-standalone-24">
                <flat-pickr id="example-flatpickr-time-standalone-24" class="form-control bg-white" v-model="timeStandalone24" :config="configTimeStandalone24"></flat-pickr>
              </b-form-group>
              <b-form-group label="Calendar and time picker" label-for="example-flatpickr-datetime">
                <flat-pickr id="example-flatpickr-datetime" class="form-control bg-white" v-model="timeDateTime" :config="configDateTime"></flat-pickr>
              </b-form-group>
              <b-form-group label="Calendar and time picker (24-hour format)" label-for="example-flatpickr-datetime24">
                <flat-pickr id="example-flatpickr-datetime24" class="form-control bg-white" v-model="timeDateTime24" :config="configDateTime24"></flat-pickr>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- END Timepickers -->

          <!-- Inline Mode -->
          <h2 class="content-heading border-bottom mb-4 pb-2">Inline Mode</h2>
          <b-row>
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                The plugin also supports an inline mode
              </p>
            </b-col>
            <b-col lg="8" xl="4">
              <b-form-group>
                <flat-pickr id="example-flatpickr-inline" class="form-control bg-white" placeholder="Inline Datepicker" v-model="inlineDefault" :config="configInlineDefault"></flat-pickr>
              </b-form-group>
              <b-form-group>
                <flat-pickr id="example-flatpickr-inline-time" class="form-control bg-white" placeholder="Inline Datetimepicker" v-model="inlineTime" :config="configInlineTime"></flat-pickr>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- END Inline Mode -->
        </b-form>
      </base-block>
      <!-- END Flatpickr Datetimepicker -->

      <!-- Vue Color -->
      <base-block rounded title="Vue Color">
        <b-form @submit.prevent>
          <!-- Colorpickers -->
          <h2 class="content-heading border-bottom mb-4 pb-2">Colorpickers</h2>
          <b-row>
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                Chrome variation
              </p>
            </b-col>
            <b-col lg="8">
              <b-form-group>
                <chrome-picker v-model="vColors"></chrome-picker>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                Photoshop variation
              </p>
            </b-col>
            <b-col lg="8">
              <b-form-group>
                <div class="overflow-auto">
                  <photoshop-picker v-model="vColors"></photoshop-picker>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                Sketch variation
              </p>
            </b-col>
            <b-col lg="8">
              <b-form-group>
                <sketch-picker v-model="vColors"></sketch-picker>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                Slider variation
              </p>
            </b-col>
            <b-col lg="8">
              <b-form-group>
                <slider-picker v-model="vColors" style="width: 260px;"></slider-picker>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                Swatches variation
              </p>
            </b-col>
            <b-col lg="8">
              <b-form-group>
                <swatches-picker v-model="vColors"></swatches-picker>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                Material variation
              </p>
            </b-col>
            <b-col lg="8">
              <b-form-group>
                <material-picker v-model="vColors"></material-picker>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                Compact variation
              </p>
            </b-col>
            <b-col lg="8">
              <b-form-group>
                <compact-picker v-model="vColors"></compact-picker>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- END Colorpickers -->
        </b-form>
      </base-block>
      <!-- END Vue Color -->

      <!-- Custom Input Maxlength -->
      <base-block rounded title="Custom Input Maxlength">
        <b-form @submit.prevent>
          <!-- Examples -->
          <h2 class="content-heading border-bottom mb-4 pb-2">Examples</h2>
          <b-row>
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                You can easily set a max character length with live feedback to your inputs
              </p>
            </b-col>
            <b-col lg="8" xl="4">
              <b-form-group label="Input Group" label-for="example-maxlength-group">
                <b-input-group>
                  <b-form-input id="example-maxlength-group" v-model="customMaxLengthValue" :maxlength="customMaxLength"></b-form-input>
                  <template #append>
                    <b-input-group-text v-text="(customMaxLength - customMaxLengthValue.length)"></b-input-group-text>
                  </template>
                </b-input-group>
              </b-form-group>
              <b-form-group label="Visible feedback" label-for="example-maxlength-feedback-visible">
                <b-form-input id="example-maxlength-feedback-visible" v-model="customMaxLengthValue2" :maxlength="customMaxLength2"></b-form-input>
                <p class="text-danger font-size-sm bg-danger-light rounded p-2 mt-2 mb-0">
                  {{ customMaxLength2 - customMaxLengthValue2.length }} characters left
                </p>
              </b-form-group>
              <b-form-group label="Fade in feedback" label-for="example-maxlength-feedback-fadein">
                <b-form-input id="example-maxlength-feedback-fadein" v-model="customMaxLengthValue3" :maxlength="customMaxLength3"></b-form-input>
                <p class="animated fadeInDown font-size-sm text-muted mt-2 mb-0" v-if="(customMaxLength3 - customMaxLengthValue3.length) < customMaxLength3">
                  {{ customMaxLength3 - customMaxLengthValue3.length }} characters left
                </p>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- END Examples -->
        </b-form>
      </base-block>
      <!-- END Custom Input Maxlength -->

      <!-- Vue Select -->
      <base-block rounded title="Vue Select">
        <b-form @submit.prevent>
          <!-- Normal Select Box -->
          <h2 class="content-heading border-bottom mb-4 pb-2">Normal Select Box</h2>
          <b-row>
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                Default select input turns into a dynamic list
              </p>
            </b-col>
            <b-col lg="8" xl="4">
              <b-form-group>
                <v-select v-model="vSelectOptionsSelected" :options="vSelectOptionsMultiple" placeholder="Choose a value.."></v-select>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- END Normal Select Box -->

          <!-- Multiple Select Box -->
          <h2 class="content-heading border-bottom mb-4 pb-2">Multiple Select Box</h2>
          <b-row>
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                Default multiple select input turns into a tags input
              </p>
            </b-col>
            <b-col lg="8" xl="4">
              <b-form-group>
                <v-select multiple v-model="vSelectOptionsMultipleSelected" :options="vSelectOptionsMultiple" placeholder="Choose multiple values.."></v-select>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- END Multiple Select Box -->
        </b-form>
      </base-block>
      <!-- END Vue Select -->

      <!-- Vue Masked Input -->
      <base-block rounded title="Vue Masked Input">
        <b-form @submit.prevent>
          <!-- Examples -->
          <h2 class="content-heading border-bottom mb-4 pb-2">Examples</h2>
          <b-row>
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                It enables to easily enter a value following a specific format by adding a mask
              </p>
              <p class="font-size-sm text-muted">
                1 – number<br>
                a – letter<br>
                A – letter, forced to upper case when entered<br>
                * – alphanumeric<br>
                # – alphanumeric, forced to upper case when entered<br>
                + – any character
              </p>
            </b-col>
            <b-col lg="8" xl="4">
              <b-form-group>
                <label for="example-masked-date1">Date (dd/mm/yyyy)</label>
                <masked-input id="example-masked-date1" class="form-control" placeholder="11/11/1111" mask="11/11/1111"></masked-input>
              </b-form-group>
              <b-form-group>
                <label for="example-masked-date2">Date (dd-mm-yyyy)</label>
                <masked-input id="example-masked-date2" class="form-control" placeholder="11-11-1111" mask="11-11-1111"></masked-input>
              </b-form-group>
              <b-form-group>
                <label for="example-masked-phone">Phone</label>
                <masked-input id="example-masked-phone" class="form-control" placeholder="+1 (000) 0000-00" mask="\+\1 (111) 1111-11"></masked-input>
              </b-form-group>
              <b-form-group>
                <label for="example-masked-taxid">Tax ID</label>
                <masked-input id="example-masked-taxid" class="form-control" placeholder="11-1111111" mask="11-1111111"></masked-input>
              </b-form-group>
              <b-form-group>
                <label for="example-masked-ssn">SSN</label>
                <masked-input id="example-masked-ssn" class="form-control" placeholder="111-11-1111" mask="111-11-1111"></masked-input>
              </b-form-group>
              <b-form-group>
                <label for="example-masked-pkey">Product Key</label>
                <masked-input id="example-masked-pkey" class="form-control" placeholder="a*-111-a111" mask="a*-111-a111"></masked-input>
              </b-form-group>
              <b-form-group>
                <label for="example-masked-time">Time Format</label>
                <masked-input id="example-masked-time" class="form-control" placeholder="11:11" mask="11:11"></masked-input>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- END Examples -->
        </b-form>
      </base-block>
      <!-- END Vue Masked Input -->

      <!-- Vue Slider -->
      <base-block rounded title="Vue Slider">
        <!-- Example -->
        <h2 class="content-heading border-bottom mb-4 pb-2">Examples</h2>
        <b-row class="items-push push">
          <b-col lg="4">
            <p class="font-size-sm text-muted">
              A highly customized slider component
            </p>
          </b-col>
          <b-col lg="8" xl="6">
            <b-form-group>
              <label>Normal</label>
              <div class="py-4">
                <vue-slider v-model="sliderValueNormal" :dotSize="18" :marks="[0, 100]" tooltip="always"></vue-slider>
              </div>
            </b-form-group>
            <b-form-group>
              <label>MinMax</label>
              <div class="py-4">
                <vue-slider v-model="sliderValueMinMax" :dotSize="18" :marks="[0, 1000]" :min="0" :max="1000" tooltip="always"></vue-slider>
              </div>
            </b-form-group>
            <b-form-group>
              <label>Marks</label>
              <div class="py-4">
                <vue-slider v-model="sliderValueMarks" :dotSize="18" :marks="[0, 250, 500, 750, 1000]" :min="0" :max="1000" tooltip="always"></vue-slider>
              </div>
            </b-form-group>
            <b-form-group>
              <label>Double</label>
              <div class="py-4">
                <vue-slider v-model="sliderValueDouble" :dotSize="18" :marks="[0, 250, 500, 750, 1000]" :min="0" :max="1000" tooltip="always"></vue-slider>
              </div>
            </b-form-group>
            <b-form-group>
              <label>Negative</label>
              <div class="py-4">
                <vue-slider v-model="sliderValueNegative" :dotSize="18" :marks="[-500, -250, 0, 250, 500]" :min="-500" :max="500" tooltip="always"></vue-slider>
              </div>
            </b-form-group>
            <b-form-group>
              <label>Step (50)</label>
              <div class="py-4">
                <vue-slider v-model="sliderValueStep" :dotSize="18" :marks="[-500, -250, 0, 250, 500]" :interval="50" :min="-500" :max="500" tooltip="always"></vue-slider>
              </div>
            </b-form-group>
            <b-form-group>
              <label>Custom Data</label>
              <div class="py-4">
                <vue-slider v-model="sliderValueCustom" :dotSize="18" :marks="true" :data="sliderDataCustom" tooltip="always"></vue-slider>
              </div>
            </b-form-group>
          </b-col>
        </b-row>
        <!-- END Example -->
      </base-block>
      <!-- END Vue Slider -->

      <!-- Vue Dropzone -->
      <base-block rounded title="Vue Dropzone">
        <!-- Example -->
        <h2 class="content-heading border-bottom mb-4 pb-2">Asynchronous File Uploads</h2>
        <b-row class="push">
          <b-col lg="4">
            <p class="font-size-sm text-muted">
              Drag and drop sections for your file uploads
            </p>
          </b-col>
          <b-col lg="8" xl="6">
            <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
          </b-col>
        </b-row>
        <!-- END Example -->
      </base-block>
      <!-- END Vue Dropzone -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<style lang="scss">
// Flatpickr + Custom overrides
@import '~flatpickr/dist/flatpickr.css';
@import './src/assets/scss/vendor/flatpickr';

// Vue Color Custom overrides
@import './src/assets/scss/vendor/vue-color';

// Vue Select + Custom overrides
@import '~vue-select/src/scss/vue-select';
@import './src/assets/scss/vendor/vue-select';

// Vue Slider + Custom overrides
@import '~vue-slider-component/theme/default.css';
@import './src/assets/scss/vendor/vue-slider';

// Vue2 Dropzone + Custom overrides
@import '~vue2-dropzone/dist/vue2Dropzone.min.css';
@import './src/assets/scss/vendor/dropzone';
</style>

<script>
// Flatpickr, for more info and examples you can check out https://github.com/ankurk91/vue-flatpickr-component
import flatPickr from 'vue-flatpickr-component'

// Vue Color, for more info and examples you can check out https://github.com/xiaokaike/vue-color
import VueColor from 'vue-color'

// Vue Select, for more info and examples you can check out https://github.com/sagalbot/vue-select
import VueSelect from 'vue-select'

// Vue Masked Input, for more info and examples you can check out https://www.npmjs.com/package/vue-masked-input
import MaskedInput from 'vue-masked-input'

// Vue Slider, for more info and examples you can check out https://github.com/NightCatSama/vue-slider-component
import VueSlider from 'vue-slider-component'

// Vue2 Dropzone, for more info and examples you can check out https://github.com/rowanwins/vue-dropzone
import vue2Dropzone from 'vue2-dropzone'

export default {
  components: {
    flatPickr,
    'material-picker': VueColor.Material,
    'compact-picker': VueColor.Compact,
    'swatches-picker': VueColor.Swatches,
    'slider-picker': VueColor.Slider,
    'sketch-picker': VueColor.Sketch,
    'chrome-picker': VueColor.Chrome,
    'photoshop-picker': VueColor.Photoshop,
    'v-select': VueSelect,
    MaskedInput,
    'VueSlider': VueSlider,
    'vueDropzone': vue2Dropzone
  },
  data () {
    return {
      // Flatpickr initial values
      dateDefault: null,
      dateCustom: null,
      dateFriendly: null,
      dateRange: null,
      timeStandalone: null,
      timeStandalone24: null,
      timeDateTime: null,
      timeDateTime24: null,
      inlineDefault: null,
      inlineTime: null,

      // Flatpickr configuration, get more form https://chmln.github.io/flatpickr/options/
      configCustom: { dateFormat: 'd-m-Y' },
      configFriendly: { dateFormat: 'F j, Y' },
      configRange: { mode: 'range', minDate: 'today' },
      configTimeStandalone: { enableTime: true, noCalendar: true, dateFormat: 'H:i' },
      configTimeStandalone24: { enableTime: true, noCalendar: true, dateFormat: 'H:i', time_24hr: true },
      configDateTime: { enableTime: true },
      configDateTime24: { enableTime: true, time_24hr: true },
      configInlineDefault: { inline: true },
      configInlineTime: { inline: true, enableTime: true },

      // Vue color initial values
      vColors: '#5c80d1',

      // Custom Input Maxlength
      customMaxLength: 20,
      customMaxLengthValue: '',
      customMaxLength2: 30,
      customMaxLengthValue2: '',
      customMaxLength3: 40,
      customMaxLengthValue3: '',

      // Vue Select initial values
      vSelectOptions: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Ruby', 'Angular', 'React', 'Vue.js'],
      vSelectOptionsSelected: null,
      vSelectOptionsMultiple: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Ruby', 'Angular', 'React', 'Vue.js'],
      vSelectOptionsMultipleSelected: null,

      // Vue Slider
      sliderValueNormal: 50,
      sliderValueMinMax: 212,
      sliderValueMarks: 1000,
      sliderValueDouble: [200, 800],
      sliderValueNegative: [-150, 150],
      sliderValueStep: [-250, 250],
      sliderValueCustom: 'Three',
      sliderDataCustom: ['One', 'Two', 'Three', 'Four'],

      // Vue2 Dropzone
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 150,
        maxFilesize: 1,
        headers: { "My-Awesome-Header": "header value" }
      }
    }
  }
}
</script>
