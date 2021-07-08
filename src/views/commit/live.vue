<template>
  <div>
    <!-- Hero -->
    <base-page-heading
      title="Share live editor (Not Activated)"
      subtitle="Get real-time coding environment within Einfach board"
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
    <div class="content">
      <!-- Your Block -->
      <base-block rounded title="JavaScript Common Editor">
        <template #options>
          <button type="button" class="btn-block-option">
            <i class="si si-cog"></i>
          </button>
        </template>
        <div class="col-md-12 px-4">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe src="https://einfach.api.stdlib.com/codeshare@dev/"></iframe>
          </div>
        </div>
      </base-block>
      <!-- END Your Block -->
    </div>
    <!-- END Page Content -->
  </div>
</template>
