<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Horizontal Navigation" subtitle="Easily adjust main navigation style to work horizontally as well.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
          <b-breadcrumb-item active>Horizontal Navigation</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <h2 class="content-heading">Hover based on large screens</h2>

      <!-- Horizontal Navigation - Hover Normal -->
      <div class="bg-white p-3 push">
        <!-- Toggle Navigation -->
        <div class="d-lg-none">
          <!-- Class Toggle, functionality initialized in directives/toggle-class.js -->
          <b-button variant="light" block class="d-flex justify-content-between align-items-center" v-toggle-class="{ targetId: 'horizontal-navigation-hover-normal', class: 'd-none' }">
            Menu - Hover Normal
            <i class="fa fa-bars"></i>
          </b-button>
        </div>
        <!-- END Toggle Navigation -->

        <!-- Navigation -->
        <div id="horizontal-navigation-hover-normal" class="d-none d-lg-block mt-2 mt-lg-0">
          <base-navigation :nodes="navigation" horizontal horizontal-hover></base-navigation>
        </div>
        <!-- END Navigation -->
      </div>
      <!-- END Horizontal Navigation - Hover Normal -->

      <!-- Dummy content -->
      <base-block rounded class="d-none d-lg-block">
        <p class="text-center py-8">
          Left aligned, light themed
        </p>
      </base-block>
      <!-- END Dummy content -->

      <!-- Horizontal Navigation - Hover Normal Dark -->
      <div class="bg-sidebar-dark p-3 push">
        <!-- Toggle Navigation -->
        <div class="d-lg-none">
          <!-- Class Toggle, functionality initialized in directives/toggle-class.js -->
          <b-button variant="light" block class="d-flex justify-content-between align-items-center" v-toggle-class="{ targetId: 'horizontal-navigation-hover-normal-dark', class: 'd-none' }">
            Menu - Hover Normal Dark
            <i class="fa fa-bars"></i>
          </b-button>
        </div>
        <!-- END Toggle Navigation -->

        <!-- Navigation -->
        <div id="horizontal-navigation-hover-normal-dark" class="d-none d-lg-block mt-2 mt-lg-0">
          <base-navigation :nodes="navigation" dark horizontal horizontal-hover></base-navigation>
        </div>
        <!-- END Navigation -->
      </div>
      <!-- END Horizontal Navigation - Hover Normal Dark -->

      <!-- Dummy content -->
      <base-block rounded class="d-none d-lg-block">
        <p class="text-center py-8">
          Left aligned, dark themed
        </p>
      </base-block>
      <!-- END Dummy content -->

      <!-- Horizontal Navigation - Hover Centered -->
      <div class="bg-white p-3 push">
        <!-- Toggle Navigation -->
        <div class="d-lg-none">
          <!-- Class Toggle, functionality initialized in directives/toggle-class.js -->
          <b-button variant="light" block class="d-flex justify-content-between align-items-center" v-toggle-class="{ targetId: 'horizontal-navigation-hover-centered', class: 'd-none' }">
            Menu - Hover Centered
            <i class="fa fa-bars"></i>
          </b-button>
        </div>
        <!-- END Toggle Navigation -->

        <!-- Navigation -->
        <div id="horizontal-navigation-hover-centered" class="d-none d-lg-block mt-2 mt-lg-0">
          <base-navigation :nodes="navigation" horizontal horizontal-hover horizontal-center></base-navigation>
        </div>
        <!-- END Navigation -->
      </div>
      <!-- END Horizontal Navigation - Hover Centered -->

      <!-- Dummy content -->
      <base-block rounded class="d-none d-lg-block">
        <p class="text-center py-8">
          Center aligned, light themed
        </p>
      </base-block>
      <!-- END Dummy content -->

      <!-- Horizontal Navigation - Hover Centered Dark -->
      <div class="bg-sidebar-dark p-3 push">
        <!-- Toggle Navigation -->
        <div class="d-lg-none">
          <!-- Class Toggle, functionality initialized in directives/toggle-class.js -->
          <b-button variant="light" block class="d-flex justify-content-between align-items-center" v-toggle-class="{ targetId: 'horizontal-navigation-hover-centered-dark', class: 'd-none' }">
            Menu - Hover Centered Dark
            <i class="fa fa-bars"></i>
          </b-button>
        </div>
        <!-- END Toggle Navigation -->

        <!-- Navigation -->
        <div id="horizontal-navigation-hover-centered-dark" class="d-none d-lg-block mt-2 mt-lg-0">
          <base-navigation :nodes="navigation" dark horizontal horizontal-hover horizontal-center></base-navigation>
        </div>
        <!-- END Navigation -->
      </div>
      <!-- END Horizontal Navigation - Hover Centered Dark -->

      <!-- Dummy content -->
      <base-block rounded class="d-none d-lg-block">
        <p class="text-center py-8">
          Center aligned, dark themed
        </p>
      </base-block>
      <!-- END Dummy content -->

      <!-- Horizontal Navigation - Hover Justified -->
      <div class="bg-white p-3 push">
        <!-- Toggle Navigation -->
        <div class="d-lg-none">
          <!-- Class Toggle, functionality initialized in directives/toggle-class.js -->
          <b-button variant="light" block class="d-flex justify-content-between align-items-center" v-toggle-class="{ targetId: 'horizontal-navigation-hover-justified', class: 'd-none' }">
            Menu - Hover Justified
            <i class="fa fa-bars"></i>
          </b-button>
        </div>
        <!-- END Toggle Navigation -->

        <!-- Navigation -->
        <div id="horizontal-navigation-hover-justified" class="d-none d-lg-block mt-2 mt-lg-0">
          <base-navigation :nodes="navigation" horizontal horizontal-hover horizontal-justify></base-navigation>
        </div>
        <!-- END Navigation -->
      </div>
      <!-- END Horizontal Navigation - Hover Justified -->

      <!-- Dummy content -->
      <base-block rounded class="d-none d-lg-block">
        <p class="text-center py-8">
          Justified, light themed
        </p>
      </base-block>
      <!-- END Dummy content -->

      <!-- Horizontal Navigation - Hover Justified Dark -->
      <div class="bg-sidebar-dark p-3 push">
        <!-- Toggle Navigation -->
        <div class="d-lg-none">
          <!-- Class Toggle, functionality initialized in directives/toggle-class.js -->
          <b-button variant="light" block class="d-flex justify-content-between align-items-center" v-toggle-class="{ targetId: 'horizontal-navigation-hover-justified-dark', class: 'd-none' }">
            Menu - Hover Justified Dark
            <i class="fa fa-bars"></i>
          </b-button>
        </div>
        <!-- END Toggle Navigation -->

        <!-- Navigation -->
        <div id="horizontal-navigation-hover-justified-dark" class="d-none d-lg-block mt-2 mt-lg-0">
          <base-navigation :nodes="navigation" dark horizontal horizontal-hover horizontal-justify></base-navigation>
        </div>
        <!-- END Navigation -->
      </div>
      <!-- END Horizontal Navigation - Hover Justified Dark -->

      <!-- Dummy content -->
      <base-block rounded class="d-none d-lg-block">
        <p class="text-center py-8">
          Justified, dark themed
        </p>
      </base-block>
      <!-- END Dummy content -->

      <h2 class="content-heading">Click based on large screens</h2>

      <!-- Horizontal Navigation - Click Normal -->
      <div class="bg-white p-3 push">
        <!-- Toggle Navigation -->
        <div class="d-lg-none">
          <!-- Class Toggle, functionality initialized in directives/toggle-class.js -->
          <b-button variant="light" block class="d-flex justify-content-between align-items-center" v-toggle-class="{ targetId: 'horizontal-navigation-click-normal', class: 'd-none' }">
            Menu - Click Normal
            <i class="fa fa-bars"></i>
          </b-button>
        </div>
        <!-- END Toggle Navigation -->

        <!-- Navigation -->
        <div id="horizontal-navigation-click-normal" class="d-none d-lg-block mt-2 mt-lg-0">
          <base-navigation :nodes="navigation" horizontal></base-navigation>
        </div>
        <!-- END Navigation -->
      </div>
      <!-- END Horizontal Navigation - Click Normal -->

      <!-- Dummy content -->
      <base-block rounded class="d-none d-lg-block">
        <p class="text-center py-8">
          Left aligned, light themed
        </p>
      </base-block>
      <!-- END Dummy content -->

      <!-- Horizontal Navigation - Click Normal Dark -->
      <div class="bg-sidebar-dark p-3 push">
        <!-- Toggle Navigation -->
        <div class="d-lg-none">
          <!-- Class Toggle, functionality initialized in directives/toggle-class.js -->
          <b-button variant="light" block class="d-flex justify-content-between align-items-center" v-toggle-class="{ targetId: 'horizontal-navigation-click-normal-dark', class: 'd-none' }">
            Menu - Click Normal Dark
            <i class="fa fa-bars"></i>
          </b-button>
        </div>
        <!-- END Toggle Navigation -->

        <!-- Navigation -->
        <div id="horizontal-navigation-click-normal-dark" class="d-none d-lg-block mt-2 mt-lg-0">
          <base-navigation :nodes="navigation" dark horizontal></base-navigation>
        </div>
        <!-- END Navigation -->
      </div>
      <!-- END Horizontal Navigation - Click Normal Dark -->

      <!-- Dummy content -->
      <base-block rounded class="d-none d-lg-block">
        <p class="text-center py-8">
          Left aligned, dark themed
        </p>
      </base-block>
      <!-- END Dummy content -->

      <!-- Horizontal Navigation - Click Centered -->
      <div class="bg-white p-3 push">
        <!-- Toggle Navigation -->
        <div class="d-lg-none">
          <!-- Class Toggle, functionality initialized in directives/toggle-class.js -->
          <b-button variant="light" block class="d-flex justify-content-between align-items-center" v-toggle-class="{ targetId: 'horizontal-navigation-click-centered', class: 'd-none' }">
            Menu - Click Centered
            <i class="fa fa-bars"></i>
          </b-button>
        </div>
        <!-- END Toggle Navigation -->

        <!-- Navigation -->
        <div id="horizontal-navigation-click-centered" class="d-none d-lg-block mt-2 mt-lg-0">
          <base-navigation :nodes="navigation" horizontal horizontal-center></base-navigation>
        </div>
        <!-- END Navigation -->
      </div>
      <!-- END Horizontal Navigation - Click Centered -->

      <!-- Dummy content -->
      <base-block rounded class="d-none d-lg-block">
        <p class="text-center py-8">
          Center aligned, light themed
        </p>
      </base-block>
      <!-- END Dummy content -->

      <!-- Horizontal Navigation - Click Centered Dark -->
      <div class="bg-sidebar-dark p-3 push">
        <!-- Toggle Navigation -->
        <div class="d-lg-none">
          <!-- Class Toggle, functionality initialized in directives/toggle-class.js -->
          <b-button variant="light" block class="d-flex justify-content-between align-items-center" v-toggle-class="{ targetId: 'horizontal-navigation-click-centered-dark', class: 'd-none' }">
            Menu - Click Centered Dark
            <i class="fa fa-bars"></i>
          </b-button>
        </div>
        <!-- END Toggle Navigation -->

        <!-- Navigation -->
        <div id="horizontal-navigation-click-centered-dark" class="d-none d-lg-block mt-2 mt-lg-0">
          <base-navigation :nodes="navigation" dark horizontal horizontal-center></base-navigation>
        </div>
        <!-- END Navigation -->
      </div>
      <!-- END Horizontal Navigation - Click Centered Dark -->

      <!-- Dummy content -->
      <base-block rounded class="d-none d-lg-block">
        <p class="text-center py-8">
          Center aligned, dark themed
        </p>
      </base-block>
      <!-- END Dummy content -->

      <!-- Horizontal Navigation - Click Justified -->
      <div class="bg-white p-3 push">
        <!-- Toggle Navigation -->
        <div class="d-lg-none">
          <!-- Class Toggle, functionality initialized in directives/toggle-class.js -->
          <b-button variant="light" block class="d-flex justify-content-between align-items-center" v-toggle-class="{ targetId: 'horizontal-navigation-click-justified', class: 'd-none' }">
            Menu - Click Justified
            <i class="fa fa-bars"></i>
          </b-button>
        </div>
        <!-- END Toggle Navigation -->

        <!-- Navigation -->
        <div id="horizontal-navigation-click-justified" class="d-none d-lg-block mt-2 mt-lg-0">
          <base-navigation :nodes="navigation" horizontal horizontal-justify></base-navigation>
        </div>
        <!-- END Navigation -->
      </div>
      <!-- END Horizontal Navigation - Click Justified -->

      <!-- Dummy content -->
      <base-block rounded class="d-none d-lg-block">
        <p class="text-center py-8">
          Justified, light themed
        </p>
      </base-block>
      <!-- END Dummy content -->

      <!-- Horizontal Navigation - Click Justified Dark -->
      <div class="bg-sidebar-dark p-3 push">
        <!-- Toggle Navigation -->
        <div class="d-lg-none">
          <!-- Class Toggle, functionality initialized in directives/toggle-class.js -->
          <b-button variant="light" block class="d-flex justify-content-between align-items-center" v-toggle-class="{ targetId: 'horizontal-navigation-click-justified-dark', class: 'd-none' }">
            Menu - Click Justified Dark
            <i class="fa fa-bars"></i>
          </b-button>
        </div>
        <!-- END Toggle Navigation -->

        <!-- Navigation -->
        <div id="horizontal-navigation-click-justified-dark" class="d-none d-lg-block mt-2 mt-lg-0">
          <base-navigation :nodes="navigation" dark horizontal horizontal-center></base-navigation>
        </div>
        <!-- END Navigation -->
      </div>
      <!-- END Horizontal Navigation - Click Justified Dark -->

      <!-- Dummy content -->
      <base-block rounded class="d-none d-lg-block">
        <p class="text-center py-8">
          Justified, dark themed
        </p>
      </base-block>
      <!-- END Dummy content -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
// Get navigation data
import menuList from '@/data/menu'

export default {
  data () {
    return {
      // Get demo navigation
      navigation: menuList.demo
    }
  }
}
</script>
