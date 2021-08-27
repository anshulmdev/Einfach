<template>
  <div>
    <!-- Hero -->
    <base-page-heading
      title="Interview Round"
      subtitle="Get real-time coding environment powered by codeshare"
    >
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)"
            >Commit</b-breadcrumb-item
          >
          <b-breadcrumb-item active>Live</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->

    <!-- Page Content -->
    <div class="content mb-4">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe src="https://codeshare.io/new"></iframe>
          </div>
    </div>
    <!-- END Page Content -->
  </div>
</template>
