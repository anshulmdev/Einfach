<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Error Pages" subtitle="All pages in one spot!">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Error Pages</b-breadcrumb-item>
          <b-breadcrumb-item active>All</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <div class="row">
        <div class="col-md-4">
          <!-- 400 -->
          <router-link to="/errors/400" v-slot="{ href, navigate }" >
            <base-block tag="a" content-class="text-center" rounded link-shadow :href="href" @click="navigate">
              <div class="py-5">
                <p class="font-size-h1 text-default font-w600 mb-0">400</p>
                <p class="text-muted">Error Page</p>
              </div>
            </base-block>
          </router-link>
          <!-- END 400 -->
        </div>
        <div class="col-md-4">
          <!-- 401 -->
          <router-link to="/errors/401" v-slot="{ href, navigate }" >
            <base-block tag="a" content-class="text-center" rounded link-shadow :href="href" @click="navigate">
              <div class="py-5">
                <p class="font-size-h1 text-amethyst font-w600 mb-0">401</p>
                <p class="text-muted">Error Page</p>
              </div>
            </base-block>
          </router-link>
          <!-- END 401 -->
        </div>
        <div class="col-md-4">
          <!-- 403 -->
          <router-link to="/errors/403" v-slot="{ href, navigate }" >
            <base-block tag="a" content-class="text-center" rounded link-shadow :href="href" @click="navigate">
              <div class="py-5">
                <p class="font-size-h1 text-flat font-w600 mb-0">403</p>
                <p class="text-muted">Error Page</p>
              </div>
            </base-block>
          </router-link>
          <!-- END 403 -->
        </div>
        <div class="col-md-4">
          <!-- 404 -->
          <router-link to="/errors/404" v-slot="{ href, navigate }" >
            <base-block tag="a" content-class="text-center" rounded link-shadow :href="href" @click="navigate">
              <div class="py-5">
                <p class="font-size-h1 text-city font-w600 mb-0">404</p>
                <p class="text-muted">Error Page</p>
              </div>
            </base-block>
          </router-link>
          <!-- END 404 -->
        </div>
        <div class="col-md-4">
          <!-- 500 -->
          <router-link to="/errors/500" v-slot="{ href, navigate }" >
            <base-block tag="a" content-class="text-center" rounded link-shadow :href="href" @click="navigate">
              <div class="py-5">
                <p class="font-size-h1 text-modern font-w600 mb-0">500</p>
                <p class="text-muted">Error Page</p>
              </div>
            </base-block>
          </router-link>
          <!-- END 500 -->
        </div>
        <div class="col-md-4">
          <!-- 503 -->
          <router-link to="/errors/503" v-slot="{ href, navigate }" >
            <base-block tag="a" content-class="text-center" rounded link-shadow :href="href" @click="navigate">
              <div class="py-5">
                <p class="font-size-h1 text-smooth font-w600 mb-0">503</p>
                <p class="text-muted">Error Page</p>
              </div>
            </base-block>
          </router-link>
          <!-- END 503 -->
        </div>
      </div>
    </div>
    <!-- END Page Content -->
  </div>
</template>
