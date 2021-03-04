<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Side Overlay" subtitle="Disabled">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Layout</b-breadcrumb-item>
          <b-breadcrumb-item href="javascript:void(0)">Side Overlay</b-breadcrumb-item>
          <b-breadcrumb-item active>No Page Overlay</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <base-block rounded>
        <p class="text-center">
          You can easily disable the clickable Page Overlay which opens when Side Overlay Opens. Try opening Side Overlay to check it out.
        </p>
        <p class="text-center">
          <base-layout-modifier action="sideOverlayOpen" variant="alt-primary">
            Open the Side Overlay
          </base-layout-modifier>
        </p>
      </base-block>
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  created () {
    // Set example settings
    this.$store.commit('pageOverlay', { mode: 'off' })
  },
  beforeRouteLeave (to, from, next) {
    // Restore original settings
    this.$store.commit('pageOverlay', { mode: 'on' })

    next()
  }
}
</script>
