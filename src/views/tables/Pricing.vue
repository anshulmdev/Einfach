<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Pricing Tables" subtitle="Clean and responsive pricing tables that will improve your conversions.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Tables</b-breadcrumb-item>
          <b-breadcrumb-item active>Pricing</b-breadcrumb-item>
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
      <h2 class="content-heading">Variations <small>Hover animations, colors and style</small></h2>
      <b-row>
        <b-col md="6" xl="3">
          <!-- Developer Plan -->
          <base-block rounded tag="a" title="Developer" class="text-center" href="javascript:void(0)">
            <template #content>
              <div class="block-content bg-warning">
                <div class="py-2">
                  <p class="h1 font-w700 text-white mb-2">$9</p>
                  <p class="h6 text-white-75">per month</p>
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
                <span class="btn btn-square btn-warning px-4">Sign Up</span>
              </div>
            </template>
          </base-block>
          <!-- END Developer Plan -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Startup Plan -->
          <base-block rounded tag="a" title="Startup" class="text-center" href="javascript:void(0)" link-rotate>
            <template #content>
              <div class="block-content bg-primary">
                <div class="py-2">
                  <p class="h1 font-w700 text-white mb-2">$29</p>
                  <p class="h6 text-white-75">per month</p>
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
                <span class="btn btn-square btn-primary px-4">Sign Up</span>
              </div>
            </template>
          </base-block>
          <!-- END Startup Plan -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Business Plan -->
          <base-block rounded tag="a" title="Business" class="text-center" href="javascript:void(0)" link-shadow>
            <template #content>
              <div class="block-content bg-danger">
                <div class="py-2">
                  <p class="h1 font-w700 text-white mb-2">$49</p>
                  <p class="h6 text-white-75">per month</p>
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
                <span class="btn btn-square btn-danger px-4">Sign Up</span>
              </div>
            </template>
          </base-block>
          <!-- END Business Plan -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- VIP Plan -->
          <base-block rounded tag="a" title="VIP" class="text-center" href="javascript:void(0)" link-pop>
            <template #content>
              <div class="block-content bg-success">
                <div class="py-2">
                  <p class="h1 font-w700 text-white mb-2">$99</p>
                  <p class="h6 text-white-75">per month</p>
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
                <span class="btn btn-square btn-success px-4">Sign Up</span>
              </div>
            </template>
          </base-block>
          <!-- END VIP Plan -->
        </b-col>
      </b-row>
      <!-- END Modern Design -->

      <!-- Classic Design -->
      <h2 class="content-heading">Classic Design <small>Table Based</small></h2>
      <base-block rounded content-class="p-0">
        <b-table-simple responsive borderless hover table-class="table-vcenter text-center mb-0">
          <b-thead class="thead-dark text-uppercase font-size-sm">
            <b-tr>
              <th class="py-3" style="width: 180px;"></th>
              <th class="py-3">Freelancer</th>
              <th class="py-3">Startup</th>
              <th class="py-3">
                <i class="fa fa-thumbs-up mr-1"></i> Business
              </th>
              <th class="py-3">VIP</th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr class="bg-body-light">
              <b-td></b-td>
              <b-td class="py-4">
                <div class="h1 font-w700 mb-2">$9</div>
                <div class="h6 text-muted mb-0">per month</div>
              </b-td>
              <b-td class="py-4">
                <div class="h1 font-w700 mb-2">$29</div>
                <div class="h6 text-muted mb-0">per month</div>
              </b-td>
              <b-td class="py-4">
                <div class="h1 font-w700 text-primary mb-2">$49</div>
                <div class="h6 text-muted mb-0">per month</div>
              </b-td>
              <b-td class="py-4">
                <div class="h1 font-w700 mb-2">$99</div>
                <div class="h6 text-muted mb-0">per month</div>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td class="font-w600 text-left">Projects</b-td>
              <b-td>2</b-td>
              <b-td>10</b-td>
              <b-td>50</b-td>
              <b-td>Unlimited</b-td>
            </b-tr>
            <b-tr>
              <b-td class="font-w600 text-left">Storage</b-td>
              <b-td>10GB</b-td>
              <b-td>30GB</b-td>
              <b-td>100GB</b-td>
              <b-td>Unlimited</b-td>
            </b-tr>
            <b-tr>
              <b-td class="font-w600 text-left">Clients</b-td>
              <b-td>15</b-td>
              <b-td>100</b-td>
              <b-td>1000</b-td>
              <b-td>Unlimited</b-td>
            </b-tr>
            <b-tr>
              <b-td class="font-w600 text-left">Support</b-td>
              <b-td>Email</b-td>
              <b-td>FULL</b-td>
              <b-td>FULL</b-td>
              <b-td>FULL</b-td>
            </b-tr>
            <b-tr>
              <b-td class="font-w600 text-left">Customizations</b-td>
              <b-td>
                <i class="fa fa-times fa-fw text-danger"></i>
              </b-td>
              <b-td>
                <i class="fa fa-times fa-fw text-danger"></i>
              </b-td>
              <b-td>
                <i class="fa fa-times fa-fw text-danger"></i>
              </b-td>
              <b-td>
                <i class="fa fa-check fa-fw text-success"></i>
              </b-td>
            </b-tr>
            <b-tr class="bg-body-light">
              <b-td></b-td>
              <b-td>
                <button type="button" class="btn btn-rounded btn-secondary px-4">Sign Up</button>
              </b-td>
              <b-td>
                <button type="button" class="btn btn-rounded btn-secondary px-4">Sign Up</button>
              </b-td>
              <b-td>
                <button type="button" class="btn btn-rounded btn-primary px-4">Sign Up</button>
              </b-td>
              <b-td>
                <button type="button" class="btn btn-rounded btn-secondary px-4">Sign Up</button>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </base-block>
      <!-- END Classic Design -->
    </div>
    <!-- END Page Content -->
  </div>
</template>
