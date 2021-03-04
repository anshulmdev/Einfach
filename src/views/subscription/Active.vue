<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Active Plan" subtitle="Choose best plan according to your needs">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Subscription</b-breadcrumb-item>
          <b-breadcrumb-item active>Plan</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      
      <!-- Modern Design -->
      <h2 class="content-heading">Modern Design <small>Grid Based</small></h2>
      <b-row>
        <b-col md="6" xl="3">
          <!-- Developer Plan -->
          <base-block rounded tag="a" title="Developer" class="text-center" href="javascript:void(0)" link-shadow>
            <template #content>
              <div class="block-content bg-body-light">
                <div class="py-2">
                  <p class="h1 font-w700 mb-2">$9</p>
                  <p class="h6 text-muted">per month</p>
                </div>
              </div>
              <div class="block-content">
                <div class="font-size-sm py-2">
                  <p>
                    <strong>2</strong> Projects
                  </p>
                  <p>
                    <strong>10GB</strong> Storage
                  </p>
                  <p>
                    <strong>15</strong> Clients
                  </p>
                  <p>
                    <strong>Email</strong> Support
                  </p>
                </div>
              </div>
              <div class="block-content block-content-full bg-body-light">
                <span class="btn btn-secondary px-4">Sign Up</span>
              </div>
            </template>
          </base-block>
          <!-- END Developer Plan -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Startup Plan -->
          <base-block rounded tag="a" title="Startup" class="text-center" href="javascript:void(0)" link-shadow>
            <template #content>
              <div class="block-content bg-body-light">
                <div class="py-2">
                  <p class="h1 font-w700 mb-2">$29</p>
                  <p class="h6 text-muted">per month</p>
                </div>
              </div>
              <div class="block-content">
                <div class="font-size-sm py-2">
                  <p>
                    <strong>10</strong> Projects
                  </p>
                  <p>
                    <strong>30GB</strong> Storage
                  </p>
                  <p>
                    <strong>100</strong> Clients
                  </p>
                  <p>
                    <strong>FULL</strong> Support
                  </p>
                </div>
              </div>
              <div class="block-content block-content-full bg-body-light">
                <span class="btn btn-secondary px-4">Sign Up</span>
              </div>
            </template>
          </base-block>
          <!-- END Startup Plan -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Business Plan -->
          <base-block rounded tag="a" class="text-center" href="javascript:void(0)" link-shadow fx-shadow themed>
            <template #header>
              <h3 class="block-title">
                <i class="fa fa-thumbs-up mr-1"></i> Business
              </h3>
            </template>
            <template #content>
              <div class="block-content bg-body-light">
                <div class="py-2">
                  <p class="h1 font-w700 mb-2">$49</p>
                  <p class="h6 text-muted">per month</p>
                </div>
              </div>
              <div class="block-content">
                <div class="font-size-sm py-2">
                  <p>
                    <strong>50</strong> Projects
                  </p>
                  <p>
                    <strong>100GB</strong> Storage
                  </p>
                  <p>
                    <strong>1000</strong> Clients
                  </p>
                  <p>
                    <strong>FULL</strong> Support
                  </p>
                </div>
              </div>
              <div class="block-content block-content-full bg-body-light">
                <span class="btn btn-primary px-4">Sign Up</span>
              </div>
            </template>
          </base-block>
          <!-- END Business Plan -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- VIP Plan -->
          <base-block rounded tag="a" title="VIP" class="text-center" href="javascript:void(0)" link-shadow>
            <template #content>
              <div class="block-content bg-body-light">
                <div class="py-2">
                  <p class="h1 font-w700 mb-2">$99</p>
                  <p class="h6 text-muted">per month</p>
                </div>
              </div>
              <div class="block-content">
                <div class="font-size-sm py-2">
                  <p>
                    <strong>Unlimited</strong> Projects
                  </p>
                  <p>
                    <strong>Unlimited</strong> Storage
                  </p>
                  <p>
                    <strong>Unlimited</strong> Clients
                  </p>
                  <p>
                    <strong>FULL</strong> Support
                  </p>
                </div>
              </div>
              <div class="block-content block-content-full bg-body-light">
                <span class="btn btn-secondary px-4">Sign Up</span>
              </div>
            </template>
          </base-block>
          <!-- END VIP Plan -->
        </b-col>
      </b-row>
    </div>
    <!-- END Page Content -->
  </div>
</template>
