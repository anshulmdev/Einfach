<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Authentication" subtitle="All pages in one spot!">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Authentication</b-breadcrumb-item>
          <b-breadcrumb-item active>All</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Original -->
      <h2 class="content-heading">Original</h2>
      <div class="row">
        <div class="col-md-6">
          <!-- Sign In -->
          <router-link to="/auth/signin" custom v-slot="{ href, navigate }" >
            <base-block tag="a" content-class="text-center" rounded link-shadow :href="href" @click="navigate">
              <div class="py-5">
                <div class="mb-3">
                  <i class="fa fa-sign-in-alt fa-2x text-default"></i>
                </div>
                <p class="text-muted">Sign In</p>
              </div>
            </base-block>
          </router-link>
          <!-- END Sign In -->
        </div>
        <div class="col-md-6">
          <!-- Sign Up -->
          <router-link to="/auth/signup" custom v-slot="{ href, navigate }" >
            <base-block tag="a" content-class="text-center" rounded link-shadow :href="href" @click="navigate">
              <div class="py-5">
                <div class="mb-3">
                  <i class="fa fa-user-plus fa-2x text-success"></i>
                </div>
                <p class="text-muted">Sign Up</p>
              </div>
            </base-block>
          </router-link>
          <!-- END Sign Up -->
        </div>
        <div class="col-md-6">
          <!-- Lock Screen -->
          <router-link to="/auth/lock" custom v-slot="{ href, navigate }" >
            <base-block tag="a" content-class="text-center" rounded link-shadow :href="href" @click="navigate">
              <div class="py-5">
                <div class="mb-3">
                  <i class="fa fa-lock fa-2x text-city"></i>
                </div>
                <p class="text-muted">Lock Screen</p>
              </div>
            </base-block>
          </router-link>
          <!-- END Lock Screen -->
        </div>
        <div class="col-md-6">
          <!-- Password Reminder -->
          <router-link to="/auth/reminder" custom v-slot="{ href, navigate }" >
            <base-block tag="a" content-class="text-center" rounded link-shadow :href="href" @click="navigate">
              <div class="py-5">
                <div class="mb-3">
                  <i class="fa fa-life-ring fa-2x text-modern"></i>
                </div>
                <p class="text-muted">Password Reminder</p>
              </div>
            </base-block>
          </router-link>
          <!-- END Password Reminder -->
        </div>
      </div>
      <!-- END Original -->

      <!-- Alternative -->
      <h2 class="content-heading">Alternative</h2>
      <div class="row">
        <div class="col-md-6">
          <!-- Sign In 2 -->
          <router-link to="/auth/signin2" custom v-slot="{ href, navigate }" >
            <base-block tag="a" content-class="text-center" rounded link-shadow :href="href" @click="navigate">
              <div class="py-5">
                <div class="mb-3">
                  <i class="fa fa-sign-in-alt fa-2x text-default"></i>
                </div>
                <p class="text-muted">Sign In 2</p>
              </div>
            </base-block>
          </router-link>
          <!-- END Sign In 2 -->
        </div>
        <div class="col-md-6">
          <!-- Sign Up 2 -->
          <router-link to="/auth/signup2" custom v-slot="{ href, navigate }" >
            <base-block tag="a" content-class="text-center" rounded link-shadow :href="href" @click="navigate">
              <div class="py-5">
                <div class="mb-3">
                  <i class="fa fa-user-plus fa-2x text-success"></i>
                </div>
                <p class="text-muted">Sign Up 2</p>
              </div>
            </base-block>
          </router-link>
          <!-- END Sign Up 2 -->
        </div>
        <div class="col-md-6">
          <!-- Lock Screen 2 -->
          <router-link to="/auth/lock2" custom v-slot="{ href, navigate }" >
            <base-block tag="a" content-class="text-center" rounded link-shadow :href="href" @click="navigate">
              <div class="py-5">
                <div class="mb-3">
                  <i class="fa fa-lock fa-2x text-city"></i>
                </div>
                <p class="text-muted">Lock Screen 2</p>
              </div>
            </base-block>
          </router-link>
          <!-- END Lock Screen 2 -->
        </div>
        <div class="col-md-6">
          <!-- Password Reminder 2 -->
          <router-link to="/auth/reminder2" custom v-slot="{ href, navigate }" >
            <base-block tag="a" content-class="text-center" rounded link-shadow :href="href" @click="navigate">
              <div class="py-5">
                <div class="mb-3">
                  <i class="fa fa-life-ring fa-2x text-modern"></i>
                </div>
                <p class="text-muted">Password Reminder 2</p>
              </div>
            </base-block>
          </router-link>
          <!-- END Password Reminder 2 -->
        </div>
      </div>
      <!-- END Alternative -->

      <!-- Full Page -->
      <h2 class="content-heading">Full Page</h2>
      <div class="row">
        <div class="col-md-6">
          <!-- Sign In 3 -->
          <router-link to="/auth/signin3" custom v-slot="{ href, navigate }" >
            <base-block tag="a" content-class="text-center" rounded link-shadow :href="href" @click="navigate">
              <div class="py-5">
                <div class="mb-3">
                  <i class="fa fa-sign-in-alt fa-2x text-default"></i>
                </div>
                <p class="text-muted">Sign In 3</p>
              </div>
            </base-block>
          </router-link>
          <!-- END Sign In 3 -->
        </div>
        <div class="col-md-6">
          <!-- Sign Up 3 -->
          <router-link to="/auth/signup3" custom v-slot="{ href, navigate }" >
            <base-block tag="a" content-class="text-center" rounded link-shadow :href="href" @click="navigate">
              <div class="py-5">
                <div class="mb-3">
                  <i class="fa fa-user-plus fa-2x text-success"></i>
                </div>
                <p class="text-muted">Sign Up 3</p>
              </div>
            </base-block>
          </router-link>
          <!-- END Sign Up 3 -->
        </div>
        <div class="col-md-6">
          <!-- Lock Screen 3 -->
          <router-link to="/auth/lock3" custom v-slot="{ href, navigate }" >
            <base-block tag="a" content-class="text-center" rounded link-shadow :href="href" @click="navigate">
              <div class="py-5">
                <div class="mb-3">
                  <i class="fa fa-lock fa-2x text-city"></i>
                </div>
                <p class="text-muted">Lock Screen 3</p>
              </div>
            </base-block>
          </router-link>
          <!-- END Lock Screen 3 -->
        </div>
        <div class="col-md-6">
          <!-- Password Reminder 3 -->
          <router-link to="/auth/reminder3" custom v-slot="{ href, navigate }" >
            <base-block tag="a" content-class="text-center" rounded link-shadow :href="href" @click="navigate">
              <div class="py-5">
                <div class="mb-3">
                  <i class="fa fa-life-ring fa-2x text-modern"></i>
                </div>
                <p class="text-muted">Password Reminder 3</p>
              </div>
            </base-block>
          </router-link>
          <!-- END Password Reminder 3 -->
        </div>
      </div>
      <!-- END Full Page -->
    </div>
    <!-- END Page Content -->
  </div>
</template>
