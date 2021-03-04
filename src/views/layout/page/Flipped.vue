<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Page Layout" subtitle="Flipped">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Layout</b-breadcrumb-item>
          <b-breadcrumb-item href="javascript:void(0)">Page</b-breadcrumb-item>
          <b-breadcrumb-item active>Flipped</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <base-block rounded>
        <p class="text-center">
          Right Sidebar, Left Side Overlay and a fixed Header.
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
    this.$store.commit('sidebarPosition', { mode: 'right' })
    this.$store.commit('sidebar', { mode: 'open' })
    this.$store.commit('sideOverlay', { mode: 'close' })
    this.$store.commit('header', { mode: 'fixed' })
  },
  beforeRouteLeave (to, from, next) {
    // Restore original settings
    this.$store.commit('sidebarPosition', { mode: 'left' })

    next()
  }
}
</script>
