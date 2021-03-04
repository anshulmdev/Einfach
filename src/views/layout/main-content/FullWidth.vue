<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Main Content" subtitle="Full Width">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Layout</b-breadcrumb-item>
          <b-breadcrumb-item href="javascript:void(0)">Main Content</b-breadcrumb-item>
          <b-breadcrumb-item active>Full Width</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <base-block rounded>
        <p class="text-center">
          Content always takes up all the available width of the main container. A maximum width is set for extra large screen widths.
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
    this.$store.commit('mainContent', { mode: 'full' })
  },
  beforeRouteLeave (to, from, next) {
    // Restore original settings
    this.$store.commit('mainContent', { mode: 'narrow' })

    next()
  }
}
</script>
