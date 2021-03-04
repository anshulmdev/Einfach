<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Main Content" subtitle="Boxed">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Layout</b-breadcrumb-item>
          <b-breadcrumb-item href="javascript:void(0)">Main Content</b-breadcrumb-item>
          <b-breadcrumb-item active>Boxed</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <base-block rounded>
        <p class="text-center">
          Content has a max-width set, so on larger screens, the content is boxed (screen width greater than 991px).
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
    this.$store.commit('mainContent', { mode: 'boxed' })
  },
  beforeRouteLeave (to, from, next) {
    // Restore original settings
    this.$store.commit('mainContent', { mode: 'narrow' })

    next()
  }
}
</script>
