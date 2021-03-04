<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Blank (Block)" subtitle="That feeling of delight when you start your awesome new project!">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Generic</b-breadcrumb-item>
          <b-breadcrumb-item active>Blank (Block)</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Your Block -->
      <base-block rounded title="Block Title">
        <template #options>
          <button type="button" class="btn-block-option">
            <i class="si si-cog"></i>
          </button>
        </template>
        <p>
          Your content..
        </p>
      </base-block>
      <!-- END Your Block -->
    </div>
    <!-- END Page Content -->
  </div>
</template>
