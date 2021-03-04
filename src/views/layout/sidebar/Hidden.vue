<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Sidebar" subtitle="Hidden">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Layout</b-breadcrumb-item>
          <b-breadcrumb-item href="javascript:void(0)">Sidebar</b-breadcrumb-item>
          <b-breadcrumb-item active>Hidden</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <base-block rounded>
        <p class="text-center">
          You can hide the main sidebar by default.
        </p>
        <p class="text-center">
          <base-layout-modifier action="sidebarOpen" variant="alt-primary">
            Open the Sidebar
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
    this.$store.commit('sidebar', { mode: 'close' })
  },
  beforeRouteLeave (to, from, next) {
    // Restore original settings
    this.$store.commit('sidebar', { mode: 'open' })

    next()
  }
}
</script>
