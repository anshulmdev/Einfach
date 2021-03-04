<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Main Content" subtitle="Narrow">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Layout</b-breadcrumb-item>
          <b-breadcrumb-item href="javascript:void(0)">Main Content</b-breadcrumb-item>
          <b-breadcrumb-item active>Narrow</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <base-block rounded>
        <p class="text-center">
          Content uses a percentage width, so on larger screens, content’s width is smaller than the available (screen width greater than 991px).
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
    this.$store.commit('mainContent', { mode: 'narrow' })
  },
}
</script>
