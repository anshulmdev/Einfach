<template>
  <!-- Page Content -->
  <div class="hero-static d-flex align-items-center">
    <div class="w-100">
      <!-- Maintenance Section -->
      <div class="bg-white">
        <div class="content content-full">
          <b-row class="justify-content-center">
            <b-col md="8" lg="6" xl="4" class="py-6">
              <!-- Header -->
              <div class="text-center">
                <p>
                  <i class="fa fa-3x fa-cog fa-spin text-primary"></i>
                </p>
                <h1 class="h4 mb-1">
                  Sorry, we’re down for maintenance..
                </h1>
                <h2 class="h6 font-w400 text-muted mb-3">
                  ..but we’ll be back shortly!
                </h2>
              </div>
              <!-- END Header -->
            </b-col>
          </b-row>
        </div>
      </div>
      <!-- END Maintenance Section -->

      <!-- Footer -->
      <div class="font-size-sm text-center text-muted py-3">
        <strong>{{ $store.getters.appName + ' ' + $store.getters.appVersion }}</strong> &copy; {{ $store.getters.appCopyright }}
      </div>
      <!-- END Footer -->
    </div>
  </div>
  <!-- END Page Content -->
</template>
