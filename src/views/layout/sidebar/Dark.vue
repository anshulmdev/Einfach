<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Sidebar" subtitle="Dark">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Layout</b-breadcrumb-item>
          <b-breadcrumb-item href="javascript:void(0)">Sidebar</b-breadcrumb-item>
          <b-breadcrumb-item active>Dark</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <base-block rounded>
        <p class="text-center">
          You can have a dark themed Sidebar.
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
    this.$store.commit('sidebarStyle', { mode: 'dark' })
  }
}
</script>
