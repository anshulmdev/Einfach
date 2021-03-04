<template>
  <div>
    <!-- Hero -->
    <div class="hero bg-white">
      <div class="content content-full text-center">
        <b-row class="justify-content-center">
          <b-col lg="8" xl="6">
            <i class="fa fa-2x fa-circle-notch text-primary"></i>
            <h1 class="font-w700 mt-3 mb-2">
              OneUI <span class="font-w300">Vue Edition</span>
            </h1>
            <p class="font-size-lg font-w500 text-muted mb-4">
              This is a simple layout based page which you can use as a base for your landing, authentication, status or error pages.
            </p>
          </b-col>
        </b-row>
        <b-button size="sm" variant="alt-primary" class="px-4 py-2 m-2" to="/backend/dashboard" v-click-ripple>
          Enter Dashboard
          <i class="fa fa-fw fa-arrow-right ml-1"></i>
        </b-button>
      </div>
    </div>
    <!-- END Hero -->
  </div>
</template>
