<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Progress" subtitle="Vital activity components for your project.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
          <b-breadcrumb-item active>Progress</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Loading -->
      <h2 class="content-heading">Loading</h2>

      <!-- Bootstrap Spinners -->
      <base-block rounded title="Bootstrap Spinners">
        <b-row class="items-push">
          <b-col md="6">
            <b-spinner small variant="primary" label="Loading..."></b-spinner>
            <b-spinner small variant="secondary" label="Loading..."></b-spinner>
            <b-spinner small variant="success" label="Loading..."></b-spinner>
            <b-spinner small variant="danger" label="Loading..."></b-spinner>
            <b-spinner small variant="warning" label="Loading..."></b-spinner>
            <b-spinner small variant="info" label="Loading..."></b-spinner>
            <b-spinner small variant="light" label="Loading..."></b-spinner>
            <b-spinner small variant="dark" label="Loading..."></b-spinner>
          </b-col>
          <b-col md="6">
            <b-spinner small type="grow" variant="primary" label="Loading..."></b-spinner>
            <b-spinner small type="grow" variant="secondary" label="Loading..."></b-spinner>
            <b-spinner small type="grow" variant="success" label="Loading..."></b-spinner>
            <b-spinner small type="grow" variant="danger" label="Loading..."></b-spinner>
            <b-spinner small type="grow" variant="warning" label="Loading..."></b-spinner>
            <b-spinner small type="grow" variant="info" label="Loading..."></b-spinner>
            <b-spinner small type="grow" variant="light" label="Loading..."></b-spinner>
            <b-spinner small type="grow" variant="dark" label="Loading..."></b-spinner>
          </b-col>
          <b-col md="6">
            <b-spinner variant="primary" label="Loading..."></b-spinner>
            <b-spinner variant="secondary" label="Loading..."></b-spinner>
            <b-spinner variant="success" label="Loading..."></b-spinner>
            <b-spinner variant="danger" label="Loading..."></b-spinner>
            <b-spinner variant="warning" label="Loading..."></b-spinner>
            <b-spinner variant="info" label="Loading..."></b-spinner>
            <b-spinner variant="light" label="Loading..."></b-spinner>
            <b-spinner variant="dark" label="Loading..."></b-spinner>
          </b-col>
          <b-col md="6">
            <b-spinner type="grow" variant="primary" label="Loading..."></b-spinner>
            <b-spinner type="grow" variant="secondary" label="Loading..."></b-spinner>
            <b-spinner type="grow" variant="success" label="Loading..."></b-spinner>
            <b-spinner type="grow" variant="danger" label="Loading..."></b-spinner>
            <b-spinner type="grow" variant="warning" label="Loading..."></b-spinner>
            <b-spinner type="grow" variant="info" label="Loading..."></b-spinner>
            <b-spinner type="grow" variant="light" label="Loading..."></b-spinner>
            <b-spinner type="grow" variant="dark" label="Loading..."></b-spinner>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Bootstrap Spinners -->

      <!-- Icons -->
      <base-block rounded title="Icons">
        <p class="font-size-sm text-muted mb-5">
          You can create a loading indicator by adding the class <code>fa-spin</code> to any Font Awesome icon. Combining it with size classes and colors, you can get a lot of variations.
        </p>
        <b-row class="items-push-3x text-center">
          <b-col cols="6" md="3">
            <i class="fa fa-sun fa-spin"></i>
          </b-col>
          <b-col cols="6" md="3">
            <i class="fa fa-2x fa-sun fa-spin"></i>
          </b-col>
          <b-col cols="6" md="3">
            <i class="fa fa-3x fa-sun fa-spin"></i>
          </b-col>
          <b-col cols="6" md="3">
            <i class="fa fa-4x fa-sun fa-spin text-danger"></i>
          </b-col>
        </b-row>
        <b-row class="items-push-3x text-center">
          <b-col cols="6" md="3">
            <i class="fa fa-cog fa-spin"></i>
          </b-col>
          <b-col cols="6" md="3">
            <i class="fa fa-2x fa-cog fa-spin"></i>
          </b-col>
          <b-col cols="6" md="3">
            <i class="fa fa-3x fa-cog fa-spin"></i>
          </b-col>
          <b-col cols="6" md="3">
            <i class="fa fa-4x fa-cog fa-spin text-warning"></i>
          </b-col>
        </b-row>
        <b-row class="items-push-3x text-center">
          <b-col cols="6" md="3">
            <i class="fa fa-asterisk fa-spin"></i>
          </b-col>
          <b-col cols="6" md="3">
            <i class="fa fa-2x fa-asterisk fa-spin"></i>
          </b-col>
          <b-col cols="6" md="3">
            <i class="fa fa-3x fa-asterisk fa-spin"></i>
          </b-col>
          <b-col cols="6" md="3">
            <i class="fa fa-4x fa-asterisk fa-spin text-success"></i>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Icons -->
      <!-- END Loading -->

      <!-- Progress Bars -->
      <h2 class="content-heading">Progress Bars</h2>
      <b-row class="row-deck">
        <b-col xl="6">
          <!-- Normal -->
          <base-block rounded title="Normal">
            <template #options>
              <button type="button" class="btn-block-option" @click="randomValue(1)">
                <i class="fa fa-random"></i>
              </button>
            </template>
            <b-progress :max="max" variant="primary" class="push">
              <b-progress-bar :value="groupOneValue[0]" :label-html="`<span class='font-size-sm font-w600'>${groupOneValue[0].toFixed()}%</span>`"></b-progress-bar>
            </b-progress>
            <b-progress :max="max" variant="warning" class="push">
              <b-progress-bar :value="groupOneValue[1]" :label-html="`<span class='font-size-sm font-w600'>${groupOneValue[1].toFixed()}%</span>`"></b-progress-bar>
            </b-progress>
            <b-progress :max="max" variant="danger" class="push">
              <b-progress-bar :value="groupOneValue[2]" :label-html="`<span class='font-size-sm font-w600'>${groupOneValue[2].toFixed()}%</span>`"></b-progress-bar>
            </b-progress>
            <b-progress :max="max" variant="info" class="push">
              <b-progress-bar :value="groupOneValue[3]" :label-html="`<span class='font-size-sm font-w600'>${groupOneValue[3].toFixed()}%</span>`"></b-progress-bar>
            </b-progress>
            <b-progress :max="max" variant="success" class="push">
              <b-progress-bar :value="groupOneValue[4]" :label-html="`<span class='font-size-sm font-w600'>${groupOneValue[4].toFixed()}%</span>`"></b-progress-bar>
            </b-progress>
          </base-block>
          <!-- END Normal -->
        </b-col>
        <b-col xl="6">
          <!-- Striped -->
          <base-block rounded title="Striped">
            <template #options>
              <button type="button" class="btn-block-option" @click="randomValue(2)">
                <i class="fa fa-random"></i>
              </button>
            </template>
            <b-progress :max="max" variant="primary" class="push" striped>
              <b-progress-bar :value="groupTwoValue[0]" :label-html="`<span class='font-size-sm font-w600'>${groupTwoValue[0].toFixed()}%</span>`"></b-progress-bar>
            </b-progress>
            <b-progress :max="max" variant="warning" class="push" striped>
              <b-progress-bar :value="groupTwoValue[1]" :label-html="`<span class='font-size-sm font-w600'>${groupTwoValue[1].toFixed()}%</span>`"></b-progress-bar>
            </b-progress>
            <b-progress :max="max" variant="danger" class="push" striped>
              <b-progress-bar :value="groupTwoValue[2]" :label-html="`<span class='font-size-sm font-w600'>${groupTwoValue[2].toFixed()}%</span>`"></b-progress-bar>
            </b-progress>
            <b-progress :max="max" variant="info" class="push" striped>
              <b-progress-bar :value="groupTwoValue[3]" :label-html="`<span class='font-size-sm font-w600'>${groupTwoValue[3].toFixed()}%</span>`"></b-progress-bar>
            </b-progress>
            <b-progress :max="max" variant="success" class="push" striped>
              <b-progress-bar :value="groupTwoValue[4]" :label-html="`<span class='font-size-sm font-w600'>${groupTwoValue[4].toFixed()}%</span>`"></b-progress-bar>
            </b-progress>
          </base-block>
          <!-- END Striped -->
        </b-col>
        <b-col xl="6">
          <!-- Animated -->
          <base-block rounded title="Animated">
            <template #options>
              <button type="button" class="btn-block-option" @click="randomValue(3)">
                <i class="fa fa-random"></i>
              </button>
            </template>
            <b-progress :max="max" variant="primary" class="push" animated>
              <b-progress-bar :value="groupThreeValue[0]" :label-html="`<span class='font-size-sm font-w600'>${groupThreeValue[0].toFixed()}%</span>`"></b-progress-bar>
            </b-progress>
            <b-progress :max="max" variant="warning" class="push" animated>
              <b-progress-bar :value="groupThreeValue[1]" :label-html="`<span class='font-size-sm font-w600'>${groupThreeValue[1].toFixed()}%</span>`"></b-progress-bar>
            </b-progress>
            <b-progress :max="max" variant="danger" class="push" animated>
              <b-progress-bar :value="groupThreeValue[2]" :label-html="`<span class='font-size-sm font-w600'>${groupThreeValue[2].toFixed()}%</span>`"></b-progress-bar>
            </b-progress>
            <b-progress :max="max" variant="info" class="push" animated>
              <b-progress-bar :value="groupThreeValue[3]" :label-html="`<span class='font-size-sm font-w600'>${groupThreeValue[3].toFixed()}%</span>`"></b-progress-bar>
            </b-progress>
            <b-progress :max="max" variant="success" class="push" animated>
              <b-progress-bar :value="groupThreeValue[4]" :label-html="`<span class='font-size-sm font-w600'>${groupThreeValue[4].toFixed()}%</span>`"></b-progress-bar>
            </b-progress>
          </base-block>
          <!-- END Animated -->
        </b-col>
        <b-col xl="6">
          <!-- Mini -->
          <base-block rounded title="Mini">
            <template #options>
              <button type="button" class="btn-block-option" @click="randomValue(4)">
                <i class="fa fa-random"></i>
              </button>
            </template>
            <b-progress :value="groupFourValue[0]" :max="max" variant="primary" height="10px" class="push"></b-progress>
            <b-progress :value="groupFourValue[1]" :max="max" variant="warning" height="10px" class="push"></b-progress>
            <b-progress :value="groupFourValue[2]" :max="max" variant="danger" height="10px" class="push"></b-progress>
            <b-progress :value="groupFourValue[3]" :max="max" variant="info" height="10px" class="push" striped></b-progress>
            <b-progress :value="groupFourValue[4]" :max="max" variant="success" height="10px" class="push" striped></b-progress>
            <b-progress :value="groupFourValue[5]" :max="max" variant="muted" height="10px" class="push" animated></b-progress>
            <b-progress :value="groupFourValue[6]" :max="max" variant="dark" height="10px" class="push" animated></b-progress>
          </base-block>
          <!-- END Mini -->
        </b-col>
      </b-row>
      <!-- END Progress Bars -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      groupOneValue: [30, 50, 70, 90, 100],
      groupTwoValue: [30, 50, 70, 90, 100],
      groupThreeValue: [30, 50, 70, 90, 100],
      groupFourValue: [30, 50, 70, 90, 100, 80, 60],
      max: 100
    }
  },
  methods: {
    randomValue (group) {
      switch (group) {
        case 1:
          this.groupOneValue.forEach((val, index) => {
            this.$set(this.groupOneValue, index, 10 + Math.random() * this.max)
          })
          break
        case 2:
          this.groupTwoValue.forEach((val, index) => {
            this.$set(this.groupTwoValue, index, 10 + Math.random() * this.max)
          })
          break
        case 3:
          this.groupThreeValue.forEach((val, index) => {
            this.$set(this.groupThreeValue, index, 10 + Math.random() * this.max)
          })
          break
        case 4:
          this.groupFourValue.forEach((val, index) => {
            this.$set(this.groupFourValue, index, 10 + Math.random() * this.max)
          })
          break
      }
    }
  }
}
</script>
