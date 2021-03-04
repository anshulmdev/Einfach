<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Page Layout" subtitle="Default">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Layout</b-breadcrumb-item>
          <b-breadcrumb-item href="javascript:void(0)">Page</b-breadcrumb-item>
          <b-breadcrumb-item active>Default</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <base-block rounded>
        <p class="text-center">
          Left Sidebar, right Side Overlay and a fixed Header.
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
    this.$store.commit('sidebarPosition', { mode: 'left' })
    this.$store.commit('sidebar', { mode: 'open' })
    this.$store.commit('sideOverlay', { mode: 'close' })
    this.$store.commit('header', { mode: 'fixed' })
  }
}
</script>
