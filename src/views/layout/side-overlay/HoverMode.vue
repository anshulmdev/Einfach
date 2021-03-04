<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Side Overlay" subtitle="Hover Mode">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Layout</b-breadcrumb-item>
          <b-breadcrumb-item href="javascript:void(0)">Side Overlay</b-breadcrumb-item>
          <b-breadcrumb-item active>Hover Mode</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <base-block rounded>
        <p class="text-center">
          You can make a small portion of Side Overlay visible. If you hover it, the Side Overlay will open (screen width greater than 991px).
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
    this.$store.commit('sideOverlay', { mode: 'close' })
    this.$store.commit('sideOverlayHover', { mode: 'on' })
  },
  beforeRouteLeave (to, from, next) {
    // Restore original settings
    this.$store.commit('sideOverlayHover', { mode: 'off' })

    next()
  }
}
</script>
