<template>
  <!-- Page Content -->
  <div class="hero-static d-flex align-items-center">
    <div class="w-100">
      <!-- Status Section -->
      <div class="bg-white">
        <div class="content content-full">
          <b-row class="justify-content-center">
            <b-col md="8" lg="6" xl="4" class="py-4">
              <!-- Header -->
              <div class="text-center mb-5">
                <p class="mb-2">
                  <i class="fa fa-2x fa-circle-notch text-primary"></i>
                </p>
                <h1 class="h4 mb-1">
                  Status Page
                </h1>
                <h2 class="h6 font-w400 text-muted mb-3">
                  Check out how we are doing
                </h2>
              </div>
              <!-- END Header -->

              <!-- Services -->
              <div class="d-flex justify-content-between">
                <b-button size="lg" variant="alt-secondary" to="/backend/pages/generic/blank">
                  <i class="fa fa-arrow-left mr-1"></i> Dashboard
                </b-button>
                <b-button size="lg" variant="alt-success" href="javascript:void(0)">
                  <i class="fa fa-rss"></i> <span class="d-none d-sm-inline-block ml-1">Subscribe</span>
                </b-button>
              </div>
              <hr>
              <b-alert variant="warning" show>
                <p class="mb-0">Payments are currently under maintenance, please stay tuned.</p>
              </b-alert>
              <b-alert variant="danger" show>
                <p class="mb-0">Our frontend is experiencing some issues but we are on it!</p>
              </b-alert>
              <b-list-group class="push">
                <b-list-group-item class="d-flex justify-content-between align-items-center">
                  Backend
                  <span class="badge badge-pill badge-success">Operational</span>
                </b-list-group-item>
                <b-list-group-item class="d-flex justify-content-between align-items-center">
                  Frontend
                  <span class="badge badge-pill badge-danger">Down</span>
                </b-list-group-item>
                <b-list-group-item class="d-flex justify-content-between align-items-center">
                  API
                  <span class="badge badge-pill badge-success">Operational</span>
                </b-list-group-item>
                <b-list-group-item class="d-flex justify-content-between align-items-center">
                  Payments
                  <span class="badge badge-pill badge-warning">Maintenance</span>
                </b-list-group-item>
                <b-list-group-item class="d-flex justify-content-between align-items-center">
                  Helpdesk
                  <span class="badge badge-pill badge-success">Operational</span>
                </b-list-group-item>
              </b-list-group>
              <!-- END Services -->
            </b-col>
          </b-row>
        </div>
      </div>
      <!-- END Status Section -->

      <!-- Footer -->
      <div class="font-size-sm text-center text-muted py-3">
        <strong>{{ $store.getters.appName + ' ' + $store.getters.appVersion }}</strong> &copy; {{ $store.getters.appCopyright }}
      </div>
      <!-- END Footer -->
    </div>
  </div>
  <!-- END Page Content -->
</template>
