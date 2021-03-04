<template>
  <base-layout :layout-classes="layoutClasses">
    <!-- Side Overlay Content -->
    <!-- Using the available v-slot, we can override the default Side Overlay content from layouts/partials/SideOvelay.vue -->
    <template #side-overlay>
      <!-- Side Header -->
      <div class="content-header border-bottom">
        <!-- User Avatar -->
        <a class="mr-1" href="javascript:void(0)">
          <img class="img-avatar img-avatar32" src="img/avatars/avatar10.jpg" alt="Avatar">
        </a>
        <!-- END User Avatar -->

        <!-- User Info -->
        <div class="ml-2">
          <a class="text-dark font-w600" href="javascript:void(0)">Adam McCoy</a>
        </div>
        <!-- END User Info -->

        <!-- Close Side Overlay -->
        <base-layout-modifier action="sideOverlayClose" variant="alt-danger" size="sm" class="ml-auto">
          <i class="fa fa-fw fa-times text-danger"></i>
        </base-layout-modifier>
        <!-- END Close Side Overlay -->
      </div>
      <!-- END Side Header -->

      <!-- Side Content -->
      <div class="content-side">
        <p>
          Side Overlay content..
        </p>
      </div>
    </template>
    <!-- END Side Overlay Content -->

    <!-- Sidebar Content -->
    <!-- Using the available v-slot, we can override the default Sidebar content from layouts/partials/Sidebar.vue -->
    <template #sidebar>
      <!-- Side Header -->
      <div class="content-header bg-white-5">
        <!-- Logo -->
        <router-link to="/landing" class="font-w600 text-dual">
          <span class="smini-visible">
            <i class="fa fa-circle-notch text-primary"></i>
          </span>
          <span class="smini-hide font-size-h5 tracking-wider">
            OneUI <span class="font-w400">Vue</span>
          </span>
        </router-link>
        <!-- END Logo -->

        <!-- Extra -->
        <div>
          <!-- Close Sidebar, Visible only on mobile screens -->
          <base-layout-modifier size="sm" variant="dual" action="sidebarClose" class="d-lg-none ml-2">
            <i class="fa fa-times"></i>
          </base-layout-modifier>
          <!-- END Close Sidebar -->
        </div>
        <!-- END Extra -->
      </div>
      <!-- END Side Header -->

      <!-- Sidebar Scrolling -->
      <simplebar class="js-sidebar-scroll">
        <!-- Side Navigation -->
        <div class="content-side">
          <base-navigation
            :nodes="[
              {
                name: 'Dashboard',
                to: '/backend/dashboard',
                icon: 'si si-speedometer'
              },
              {
                name: 'More',
                heading: true
              },
              {
                name: 'Landing',
                to: '/landing',
                icon: 'si si-rocket'
              }
            ]"
          ></base-navigation>
        </div>
        <!-- END Side Navigation -->
      </simplebar>
      <!-- END Sidebar Scrolling -->
    </template>
    <!-- END Sidebar Content -->

    <!-- Header Content -->
    <!-- Using the available v-slot, we can override the default Header content from layouts/partials/Header.vue -->
    <template #header>
      <!-- Header Content -->
      <div class="content-header">
        <!-- Left Section -->
        <div class="d-flex align-items-center">
          <!-- Toggle Sidebar -->
          <base-layout-modifier action="sidebarToggle" size="sm" variant="dual" class="mr-2 d-lg-none">
            <i class="fa fa-fw fa-bars"></i>
          </base-layout-modifier>
          <!-- END Toggle Sidebar -->

          <!-- Toggle Mini Sidebar -->
          <base-layout-modifier action="sidebarMiniToggle" size="sm" variant="dual" class="mr-2 d-none d-lg-inline-block">
            <i class="fa fa-fw fa-ellipsis-v"></i>
          </base-layout-modifier>
          <!-- END Toggle Mini Sidebar -->
        </div>
        <!-- END Left Section -->

        <!-- Right Section -->
        <div class="d-flex align-items-center">
          <!-- Toggle Side Overlay -->
          <base-layout-modifier action="sideOverlayToggle" variant="dual" size="sm" class="ml-2">
            <i class="fa fa-fw fa-list-ul fa-flip-horizontal"></i>
          </base-layout-modifier>
          <!-- END Toggle Side Overlay -->
        </div>
        <!-- END Right Section -->
      </div>
      <!-- END Header Content -->
    </template>
    <!-- END Header Content -->

    <!-- Footer Content -->
    <!-- Using the available v-slot, we can override the default Footer content from layouts/partials/Footer.vue -->
    <template #footer>
      <div class="content py-3">
        <b-row class="font-size-sm">
          <b-col sm="6" order-sm="2" class="py-1 text-center text-sm-right">
            Crafted with <i class="fa fa-heart text-danger"></i> by <a class="font-w600" href="https://1.envato.market/5Noyb" target="_blank">pixelcave</a>
          </b-col>
          <b-col sm="6" order-sm="1" class="py-1 text-center text-sm-left">
            <a class="font-w600" href="https://1.envato.market/5Noyb" target="_blank">{{ $store.getters.appName + ' ' + $store.getters.appVersion }}</a> &copy; {{ $store.getters.appCopyright }}
          </b-col>
        </b-row>
      </div>
    </template>
    <!-- END Footer Content -->
  </base-layout>
</template>

<script>
import BaseLayout from '../Base'

// SimpleBar, for more info and examples you can check out https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-vue
import simplebar from 'simplebar-vue'

export default {
  name: 'LayoutBackend',
  components: {
    BaseLayout,
    simplebar
  },
  data () {
    return {
      // Override and set custom CSS classes to the container of each base layout element
      layoutClasses: {
        sideOverlay: '',
        sidebar: '',
        header: '',
        footer: ''
      }
    }
  },
  created () {
    // Set default elements for this layout
    this.$store.commit('setLayout', {
      header: true,
      sidebar: true,
      sideOverlay: true,
      footer: true
    })

    // Set various template options
    this.$store.commit('headerStyle', { mode: 'light'})
    this.$store.commit('mainContent', { mode: 'full'})
  }
}
</script>
