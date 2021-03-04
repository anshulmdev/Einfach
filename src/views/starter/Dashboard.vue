<template>
  <div>
    <!-- Page Content -->
    <div class="content">
      <b-row class="justify-content-center">
        <b-col sm="6" xl="4">
          <!-- Your Block -->
          <base-block rounded title="Block Title">
            <template #options>
              <button type="button" class="btn-block-option">
                <i class="si si-cog"></i>
              </button>
            </template>
            <p>
              This is a backend layout based page which you can use as a base for your backend pages.
            </p>
            <p>
              We created a custom Backend layout variation (<code>BackendStarter.vue</code>) to showcase how easily you can add extra layout variations and override the default content of the partial elements.
            </p>
          </base-block>
          <!-- END Your Block -->
        </b-col>
      </b-row>
    </div>
    <!-- END Page Content -->
  </div>
</template>
