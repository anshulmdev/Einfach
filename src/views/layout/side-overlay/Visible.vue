<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Side Overlay" subtitle="Visible">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Layout</b-breadcrumb-item>
          <b-breadcrumb-item href="javascript:void(0)">Side Overlay</b-breadcrumb-item>
          <b-breadcrumb-item active>Visible</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <base-block rounded>
        <p class="text-center">
          You can make the Side Overlay visible by default.
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
    this.$store.commit('sideOverlay', { mode: 'open' })
  },
  beforeRouteLeave (to, from, next) {
    // Restore original settings
    this.$store.commit('sideOverlay', { mode: 'close' })

    next()
  }
}
</script>
