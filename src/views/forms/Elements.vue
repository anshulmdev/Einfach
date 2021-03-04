<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Form Elements" subtitle="Carefully designed elements that will ensure a great experience for your users.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Forms</b-breadcrumb-item>
          <b-breadcrumb-item active>Elements</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Basic -->
      <base-block rounded title="Basic" content-full>
        <b-form>
          <b-row class="push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                The most often used inputs you know and love
              </p>
            </b-col>
            <b-col lg="8" xl="5">
              <b-form-group label="Text" label-for="example-text-input">
                <b-form-input id="example-text-input" placeholder="Text Input"></b-form-input>
              </b-form-group>
              <b-form-group label="Email" label-for="example-email-input">
                <b-form-input id="example-email-input" type="email" placeholder="Email Input"></b-form-input>
              </b-form-group>
              <b-form-group label="Password" label-for="example-password-input">
                <b-form-input id="example-password-input" type="password" placeholder="Password Input"></b-form-input>
              </b-form-group>
              <b-form-group label="Textarea" label-for="example-textarea-input">
                <b-form-textarea id="example-textarea-input" rows="4" placeholder="Textarea content.."></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row class="push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                Browser’s default select boxes, showcasing both simple and multiple selections
              </p>
            </b-col>
            <b-col lg="8" xl="5">
              <b-form-group label="Select" label-for="example-select">
                <b-form-select id="example-select" v-model="selected" :options="options" plain></b-form-select>
              </b-form-group>
              <b-form-group label="Select Multiple" label-for="example-select-multiple">
                <b-form-select id="example-select-multiple" v-model="selectedMultiple" :options="optionsMultiple" size="5" multiple plain></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row class="push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                Browser’s default checkboxes and radios in various layouts
              </p>
            </b-col>
            <b-col lg="8" xl="5">
              <b-form-group label="Checkboxes" label-class="font-w600">
                <b-form-checkbox-group v-model="selectedCheckboxes" :options="optionsCheckboxes" plain stacked></b-form-checkbox-group>
              </b-form-group>
              <b-form-group label="Inline Checkboxes" label-class="font-w600">
                <b-form-checkbox-group v-model="selectedCheckboxes" :options="optionsCheckboxes" plain></b-form-checkbox-group>
              </b-form-group>
              <b-form-group label="Radios" label-class="font-w600">
                <b-form-radio-group v-model="selectedRadios" :options="optionsRadios" plain stacked></b-form-radio-group>
              </b-form-group>
              <b-form-group label="Inline Radios" label-class="font-w600">
                <b-form-radio-group v-model="selectedRadios" :options="optionsRadios" plain></b-form-radio-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row class="push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                Browser’s default file inputs, showcasing both single and multiple files
              </p>
            </b-col>
            <b-col lg="8" xl="5">
              <b-form-group label="File Input" label-for="example-file-input">
                <b-form-file id="example-file-input" plain></b-form-file>
              </b-form-group>
              <b-form-group label="File Input (Multiple)" label-for="example-file-input-multiple">
                <b-form-file id="example-file-input-multiple" plain multiple></b-form-file>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </base-block>
      <!-- END Basic -->

      <!-- Alternative Style -->
      <base-block rounded title="Alternative Style" content-full>
        <b-form>
          <b-row class="push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                You can enable an alternative style with background color
              </p>
            </b-col>
            <b-col lg="8" xl="5">
              <b-form-group label="Text" label-for="example-text-input-alt">
                <b-form-input id="example-text-input-alt" class="form-control-alt" placeholder="Text Input"></b-form-input>
              </b-form-group>
              <b-form-group label="Password" label-for="example-password-input-alt">
                <b-form-input id="example-password-input-alt" class="form-control-alt" type="password" placeholder="Password Input"></b-form-input>
              </b-form-group>
              <b-form-group label="Textarea" label-for="example-textarea-input-alt">
                <b-form-textarea id="example-textarea-input-alt" class="form-control-alt" rows="7" placeholder="Textarea content.."></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </base-block>
      <!-- END Alternative Style -->

      <!-- Custom Controls -->
      <base-block rounded title="Custom Controls" content-full>
        <b-form>
          <b-row class="push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                A custom style is also included for checkboxes, radios, select boxes and files inputs as well
              </p>
            </b-col>
            <b-col lg="8" xl="5">
              <b-form-group label="Switches" label-class="font-w600">
                <b-form-checkbox-group v-model="selectedCheckboxes" :options="optionsCheckboxes" switches stacked></b-form-checkbox-group>
              </b-form-group>
              <b-form-group label="Inline Switches" label-class="font-w600">
                <b-form-checkbox-group v-model="selectedCheckboxes" :options="optionsCheckboxes" switches></b-form-checkbox-group>
              </b-form-group>
              <b-form-group label="Checkboxes" label-class="font-w600">
                <b-form-checkbox-group v-model="selectedCheckboxes" :options="optionsCheckboxes" stacked></b-form-checkbox-group>
              </b-form-group>
              <b-form-group label="Inline Checkboxes" label-class="font-w600">
                <b-form-checkbox-group v-model="selectedCheckboxes" :options="optionsCheckboxes"></b-form-checkbox-group>
              </b-form-group>
              <b-form-group label="Radios" label-class="font-w600">
                <b-form-radio-group v-model="selectedRadios" :options="optionsRadios" stacked></b-form-radio-group>
              </b-form-group>
              <b-form-group label="Inline Radios" label-class="font-w600">
                <b-form-radio-group v-model="selectedRadios" :options="optionsRadios"></b-form-radio-group>
              </b-form-group>
              <b-form-group label="Select" label-for="example-select-custom">
                <b-form-select id="example-select-custom" v-model="selected" :options="options"></b-form-select>
              </b-form-group>
              <b-form-group label="Select Multiple" label-for="example-select-multiple-custom">
                <b-form-select id="example-select-multiple-custom" v-model="selectedMultiple" :options="optionsMultiple" size="5" multiple></b-form-select>
              </b-form-group>
              <b-form-group label="Bootstrap’s Custom File Input" label-for="example-file-input-custom">
                <b-form-file id="example-file-input-custom"></b-form-file>
              </b-form-group>
              <b-form-group label="Bootstrap’s Custom File Input (Multiple)" label-for="example-file-input-multiple-custom">
                <b-form-file id="example-file-input-multiple-custom" multiple></b-form-file>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </base-block>
      <!-- END Custom Controls -->

      <!-- Static -->
      <base-block rounded title="Static" content-full>
        <b-form>
          <b-row class="push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                You can easily have static readonly inputs with different styles
              </p>
            </b-col>
            <b-col lg="8" xl="5">
              <b-form-group label="Plain Text" label-for="example-static-input-plain">
                <b-form-input id="example-static-input-plain" placeholder="Text Input" value="email@example.com" plaintext></b-form-input>
              </b-form-group>
              <b-form-group label="Read Only" label-for="example-static-input-readonly">
                <b-form-input id="example-static-input-readonly" placeholder="Text Input" value="email@example.com" readonly></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </base-block>
      <!-- END Static -->

      <!-- States -->
      <base-block rounded title="States" content-full>
        <b-form>
          <b-row class="push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                There are various states an input can have
              </p>
            </b-col>
            <b-col lg="8" xl="5">
              <b-form-group label="Valid State" label-for="example-text-input-valid">
                <b-form-input id="example-text-input-valid" :state="true" placeholder="Default Style.."></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input id="example-text-input-valid-alt" :state="true" class="form-control-alt" placeholder="Alternative Style.."></b-form-input>
                <b-form-valid-feedback id="example-text-input-valid-alt-feedback">
                  Valid feedback
                </b-form-valid-feedback>
              </b-form-group>
              <b-form-group label="Invalid State" label-for="example-text-input-invalid">
                <b-form-input id="example-text-input-invalid" :state="false" placeholder="Default Style.."></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input id="example-text-input-invalid-alt" :state="false" class="form-control-alt" placeholder="Alternative Style.."></b-form-input>
                <b-form-invalid-feedback id="example-text-input-invalid-alt-feedback">
                  Invalid feedback
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label="Disabled" label-for="example-disabled-input">
                <b-form-input id="example-disabled-input" placeholder="Disabled State.." disabled></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </base-block>
      <!-- END States -->

      <!-- Sizes -->
      <base-block rounded title="Sizes" content-full>
        <b-form>
          <b-row class="push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                You can also alter the size of your inputs
              </p>
            </b-col>
            <b-col lg="8" xl="5">
              <b-form-group label="Small" label-for="example-text-input-sm">
                <b-form-input id="example-text-input-sm" size="sm" placeholder="size=&quot;sm&quot;"></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input id="example-text-input-sm-alt" size="sm" class="form-control-alt" placeholder="size=&quot;sm&quot;"></b-form-input>
              </b-form-group>
              <b-form-group label="Normal" label-for="example-text-normal-sm">
                <b-form-input id="example-text-input-normal" placeholder=".."></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input id="example-text-input-normal-alt" class="form-control-alt" placeholder=".."></b-form-input>
              </b-form-group>
              <b-form-group label="Large" label-for="example-text-input-lg">
                <b-form-input id="example-text-input-lg" size="lg" placeholder="size=&quot;lg&quot;"></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input id="example-text-input-lg-alt" size="lg" class="form-control-alt" placeholder="size=&quot;lg&quot;"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </base-block>
      <!-- END Sizes -->

      <!-- Grid Sizes -->
      <base-block rounded title="Grid Sizes" content-full>
        <b-form>
          <b-row class="push">
            <b-col lg="4">
              <p class="font-size-sm text-muted">
                You can also take advantage of the grid to manipulate your input width
              </p>
            </b-col>
            <b-col lg="8">
              <b-row>
                <b-col cols="3">
                  <b-form-group label="Label in the Grid" label-class="font-w600">
                    <b-form-input placeholder="cols=&quot;3&quot;"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="4">
                  <b-form-group>
                    <b-form-input placeholder="cols=&quot;4&quot;"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="5">
                  <b-form-group>
                    <b-form-input placeholder="cols=&quot;5&quot;"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="6">
                  <b-form-group>
                    <b-form-input placeholder="cols=&quot;6&quot;"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="7">
                  <b-form-group>
                    <b-form-input placeholder="cols=&quot;7&quot;"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="8">
                  <b-form-group>
                    <b-form-input placeholder="cols=&quot;8&quot;"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="9">
                  <b-form-group>
                    <b-form-input placeholder="cols=&quot;9&quot;"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="10">
                  <b-form-group>
                    <b-form-input placeholder="cols=&quot;10&quot;"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="11">
                  <b-form-group>
                    <b-form-input placeholder="cols=&quot;11&quot;"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12">
                  <b-form-group>
                    <b-form-input placeholder="cols=&quot;12&quot;"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-form>
      </base-block>
      <!-- END Grid Sizes -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select' },
        { value: 1, text: 'Option #1' },
        { value: 2, text: 'Option #2' },
        { value: 3, text: 'Option #3' },
        { value: 4, text: 'Option #4' },
        { value: 5, text: 'Option #5' },
        { value: 6, text: 'Option #6' },
        { value: 7, text: 'Option #7' },
        { value: 8, text: 'Option #8' },
        { value: 9, text: 'Option #9' },
        { value: 10, text: 'Option #10' }
      ],
      selectedMultiple: [],
      optionsMultiple: [
        { value: 1, text: 'Option #1' },
        { value: 2, text: 'Option #2' },
        { value: 3, text: 'Option #3' },
        { value: 4, text: 'Option #4' },
        { value: 5, text: 'Option #5' },
        { value: 6, text: 'Option #6' },
        { value: 7, text: 'Option #7' },
        { value: 8, text: 'Option #8' },
        { value: 9, text: 'Option #9' },
        { value: 10, text: 'Option #10' }
      ],
      selectedCheckboxes: [],
      optionsCheckboxes: [
        { value: 1, text: 'Option 1' },
        { value: 2, text: 'Option 2' },
        { value: 3, text: 'Option 3' }
      ],
      selectedRadios: [],
      optionsRadios: [
        { value: 1, text: 'Option 1' },
        { value: 2, text: 'Option 2' },
        { value: 3, text: 'Option 3' }
      ]
    }
  }
}
</script>
