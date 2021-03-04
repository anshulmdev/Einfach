<template>
  <!-- Page Content -->
  <div class="hero">
    <div class="hero-inner text-center">
      <div class="bg-white overflow-hidden">
        <div class="content content-full">
          <div class="py-4">
            <!-- Error Header -->
            <h1 class="display-1 font-w600 text-amethyst">401</h1>
            <h2 class="h4 font-w400 text-muted mb-5">We are sorry but you are not authorized to access this page..</h2>
            <!-- END Error Header -->

            <!-- Search Form -->
            <b-form @submit.prevent>
              <b-row class="form-group justify-content-center">
                <b-col sm="6" xl="3">
                  <b-input-group size="lg">
                    <b-form-input class="form-control-alt" placeholder="Search application.."></b-form-input>
                    <b-input-group-append>
                      <b-button type="submit" variant="alt-primary">
                        <i class="fa fa-search"></i>
                      </b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-col>
              </b-row>
            </b-form>
            <!-- END Search Form -->
          </div>
        </div>
      </div>
      <div class="content content-full text-muted">
        <!-- Error Footer -->
        <p class="mb-1">
          Would you like to let us know about it?
        </p>
        <a href="javascript:void(0)" class="link-fx">
          Report it
        </a>
        or
        <router-link to="/backend/pages/errors/all" class="link-fx">
          Go Back to Dashboard
        </router-link>
        <!-- END Error Footer -->
      </div>
    </div>
  </div>
  <!-- END Page Content -->
</template>
