<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Appear" subtitle="Animate elements and make them visible on scrolling.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Plugins</b-breadcrumb-item>
          <b-breadcrumb-item active>Appear</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Basic Visibility -->
      <h2 class="content-heading">Basic</h2>
      <b-row>
        <b-col sm="4">
          <base-block rounded content-full v-b-visible.once="handleVisibilityElementBasic1"
            :class="{
              'invisible': !isVisibleElementBasic1,
              'animated fadeIn': isVisibleElementBasic1,
            }"
          >
            <div class="py-5 text-center">
              <div class="item item-2x item-rounded bg-primary text-white mx-auto">
                <i class="fa fa-2x fa-brush"></i>
              </div>
              <div class="font-size-h4 font-w600 pt-3 mb-0">Create</div>
            </div>
          </base-block>
        </b-col>
        <b-col sm="4">
          <base-block rounded content-full v-b-visible.once="handleVisibilityElementBasic2"
            :class="{
              'invisible': !isVisibleElementBasic2,
              'animated fadeIn': isVisibleElementBasic2,
            }"
          >
            <div class="py-5 text-center">
              <div class="item item-2x item-rounded bg-success text-white mx-auto">
                <i class="fab fa-2x fa-bitcoin"></i>
              </div>
              <div class="font-size-h4 font-w600 pt-3 mb-0">Bitcoin</div>
            </div>
          </base-block>
        </b-col>
        <b-col sm="4">
          <base-block rounded content-full v-b-visible.once="handleVisibilityElementBasic3"
            :class="{
              'invisible': !isVisibleElementBasic3,
              'animated fadeIn': isVisibleElementBasic3,
            }"
          >
            <div class="py-5 text-center">
              <div class="item item-2x item-rounded bg-dark text-white mx-auto">
                <i class="fab fa-2x fa-chrome"></i>
              </div>
              <div class="font-size-h4 font-w600 pt-3 mb-0">Browser</div>
            </div>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Basic Visibility -->

      <!-- Animation Classes -->
      <h2 class="content-heading">Animated <small>You can use the animation classes of your choice</small></h2>
      <b-row>
        <b-col sm="4">
          <base-block rounded content-full v-b-visible.once="handleVisibilityElementAnimation1"
            :class="{
              'invisible': !isVisibleElementAnimation1,
              'animated bounceIn': isVisibleElementAnimation1,
            }"
          >
            <div class="py-5 text-center">
              <div class="item item-2x item-rounded bg-warning text-white mx-auto">
                <i class="si fa-2x si-user"></i>
              </div>
              <div class="font-size-h4 font-w600 pt-3 mb-0">Users</div>
            </div>
          </base-block>
        </b-col>
        <b-col sm="4">
          <base-block rounded content-full v-b-visible.once="handleVisibilityElementAnimation2"
            :class="{
              'invisible': !isVisibleElementAnimation2,
              'animated flipInX': isVisibleElementAnimation2,
            }"
          >
            <div class="py-5 text-center">
              <div class="item item-2x item-rounded bg-danger text-white mx-auto">
                <i class="si fa-2x si-settings"></i>
              </div>
              <div class="font-size-h4 font-w600 pt-3 mb-0">Settings</div>
            </div>
          </base-block>
        </b-col>
        <b-col sm="4">
          <base-block rounded content-full v-b-visible.once="handleVisibilityElementAnimation3"
            :class="{
              'invisible': !isVisibleElementAnimation3,
              'animated flash': isVisibleElementAnimation3,
            }"
          >
            <div class="py-5 text-center">
              <div class="item item-2x item-rounded bg-info text-white mx-auto">
                <i class="si fa-2x fa-2x si-rocket"></i>
              </div>
              <div class="font-size-h4 font-w600 pt-3 mb-0">Startup</div>
            </div>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Animation Classes -->

      <!-- Offset -->
      <h2 class="content-heading">Offset <small>You can add an offset, to make the element appear sooner</small></h2>
      <b-row>
        <b-col sm="4">
          <base-block rounded content-full v-b-visible.once.50="handleVisibilityElementOffset1"
            :class="{
              'invisible': !isVisibleElementOffset1,
              'animated fadeIn': isVisibleElementOffset1,
            }"
          >
            <div class="py-5 text-center">
              <div class="item item-2x item-rounded bg-danger-light text-danger mx-auto">
                <i class="si fa-2x si-lock"></i>
              </div>
              <div class="font-size-h4 font-w600 pt-3 mb-0">Lock</div>
            </div>
          </base-block>
        </b-col>
        <b-col sm="4">
          <base-block rounded content-full v-b-visible.once.100="handleVisibilityElementOffset2"
            :class="{
              'invisible': !isVisibleElementOffset2,
              'animated fadeIn': isVisibleElementOffset2,
            }"
          >
            <div class="py-5 text-center">
              <div class="item item-2x item-rounded bg-warning-light text-warning mx-auto">
                <i class="si fa-2x si-energy"></i>
              </div>
              <div class="font-size-h4 font-w600 pt-3 mb-0">Energy</div>
            </div>
          </base-block>
        </b-col>
        <b-col sm="4">
          <base-block rounded content-full v-b-visible.once.150="handleVisibilityElementOffset3"
            :class="{
              'invisible': !isVisibleElementOffset3,
              'animated fadeIn': isVisibleElementOffset3,
            }"
          >
            <div class="py-5 text-center">
              <div class="item item-2x item-rounded bg-info-light text-info mx-auto">
                <i class="si fa-2x si-calendar"></i>
              </div>
              <div class="font-size-h4 font-w600 pt-3 mb-0">Events</div>
            </div>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Offset -->

      <!-- Timeouts -->
      <h2 class="content-heading">Timeouts <small>You can delay the animation, creating nice effects</small></h2>
      <b-row>
        <b-col sm="4">
          <base-block rounded content-full v-b-visible.once="handleVisibilityElementTimeout1"
            :class="{
              'invisible': !isVisibleElementTimeout1,
              'animated fadeIn': isVisibleElementTimeout1,
            }"
          >
            <div class="py-5 text-center">
              <div class="item item-2x item-rounded bg-body text-primary mx-auto">
                <i class="si fa-2x si-speedometer"></i>
              </div>
              <div class="font-size-h4 font-w600 pt-3 mb-0">Dashboard</div>
            </div>
          </base-block>
        </b-col>
        <b-col sm="4">
          <base-block rounded content-full v-b-visible.once="handleVisibilityElementTimeout2"
            :class="{
              'invisible': !isVisibleElementTimeout2,
              'animated fadeIn': isVisibleElementTimeout2,
            }"
          >
            <div class="py-5 text-center">
              <div class="item item-2x item-rounded bg-body text-danger mx-auto">
                <i class="si fa-2x si-printer"></i>
              </div>
              <div class="font-size-h4 font-w600 pt-3 mb-0">Print</div>
            </div>
          </base-block>
        </b-col>
        <b-col sm="4">
          <base-block rounded content-full v-b-visible.once="handleVisibilityElementTimeout3"
            :class="{
              'invisible': !isVisibleElementTimeout3,
              'animated fadeIn': isVisibleElementTimeout3,
            }"
          >
            <div class="py-5 text-center">
              <div class="item item-2x item-rounded bg-body text-success mx-auto">
                <i class="si fa-2x si-envelope-open"></i>
              </div>
              <div class="font-size-h4 font-w600 pt-3 mb-0">Messages</div>
            </div>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Timeouts -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isVisibleElementBasic1: false,
        isVisibleElementBasic2: false,
        isVisibleElementBasic3: false,
        isVisibleElementAnimation1: false,
        isVisibleElementAnimation2: false,
        isVisibleElementAnimation3: false,
        isVisibleElementOffset1: false,
        isVisibleElementOffset2: false,
        isVisibleElementOffset3: false,
        isVisibleElementTimeout1: false,
        isVisibleElementTimeout2: false,
        isVisibleElementTimeout3: false,
      }
    },
    methods: {
      // Basic Visibility
      handleVisibilityElementBasic1(isVisible) {
        this.isVisibleElementBasic1 = isVisible
      },
      handleVisibilityElementBasic2(isVisible) {
        this.isVisibleElementBasic2 = isVisible
      },
      handleVisibilityElementBasic3(isVisible) {
        this.isVisibleElementBasic3 = isVisible
      },
      // Animation Classes
      handleVisibilityElementAnimation1(isVisible) {
        this.isVisibleElementAnimation1 = isVisible
      },
      handleVisibilityElementAnimation2(isVisible) {
        this.isVisibleElementAnimation2 = isVisible
      },
      handleVisibilityElementAnimation3(isVisible) {
        this.isVisibleElementAnimation3 = isVisible
      },
      // Offset
      handleVisibilityElementOffset1(isVisible) {
        this.isVisibleElementOffset1 = isVisible
      },
      handleVisibilityElementOffset2(isVisible) {
        this.isVisibleElementOffset2 = isVisible
      },
      handleVisibilityElementOffset3(isVisible) {
        this.isVisibleElementOffset3 = isVisible
      },
      // Timeout
      handleVisibilityElementTimeout1(isVisible) {
        this.isVisibleElementTimeout1 = isVisible
      },
      handleVisibilityElementTimeout2(isVisible) {
        setTimeout(() => {
          this.isVisibleElementTimeout2 = isVisible
        }, 200)
      },
      handleVisibilityElementTimeout3(isVisible) {
        setTimeout(() => {
          this.isVisibleElementTimeout3 = isVisible
        }, 400)
      },
    }
  }
</script>