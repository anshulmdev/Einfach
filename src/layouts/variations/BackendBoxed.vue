<template>
  <base-layout :layout-classes="layoutClasses">
    <!-- Header Content -->
    <!-- Using the available v-slot, we can override the default Header content from layouts/partials/Header.vue -->
    <template #header>
      <!-- Header Content -->
      <div class="content-header">
        <!-- Left Section -->
        <div class="d-flex align-items-center">
          <!-- Logo -->
          <router-link to="/" class="font-w600 font-size-h5 tracking-wider text-dual mr-3">
            OneUI <span class="font-w400">Vue</span>
          </router-link>
          <!-- END Logo -->
          
          <!-- Notifications Dropdown -->
          <b-dropdown size="sm" variant="dual" class="d-inline-block mr-2" menu-class="dropdown-menu-lg p-0 border-0 font-size-sm" no-caret>
            <template #button-content>
              <i class="fa fa-fw fa-bell"></i>
              <span v-if="notifications.length" class="text-primary">•</span>
            </template>
            <li>
              <div class="p-2 bg-primary-dark text-center rounded-top">
                  <h5 class="dropdown-header text-uppercase text-white">Notifications</h5>
              </div>
              <ul class="nav-items mb-0">
                <li v-for="(notification, index) in notifications" :key="`notification-${index}`">
                  <a class="text-dark media py-2" :href="`${notification.href}`">
                    <div class="mr-2 ml-3">
                      <i :class="`${notification.icon}`"></i>
                    </div>
                    <div class="media-body pr-2">
                      <div class="font-w600">{{ notification.title }}</div>
                      <span class="font-w500 text-muted">{{ notification.time }}</span>
                    </div>
                  </a>
                </li>
                <li v-if="!notifications.length" class="p-2">
                  <b-alert variant="warning" class="text-center m-0" show>
                    <p class="mb-0">
                      No new notifications!
                    </p>
                  </b-alert>
                </li>
              </ul>
              <div v-if="notifications.length" class="p-2 border-top">
                <b-button size="sm" variant="light" class="text-center" block href="javascript:void(0)">
                  <i class="fa fa-fw fa-arrow-down mr-1"></i> Load More..
                </b-button>
              </div>
            </li>
          </b-dropdown>
          <!-- END Notifications Dropdown -->
        </div>
        <!-- END Left Section -->

        <!-- Right Section -->
        <div class="d-flex align-items-center">
          <!-- Open Search Section (visible on smaller screens) -->
          <base-layout-modifier action="headerSearchOn" variant="dual" size="sm" class="d-sm-none">
            <i class="fa fa-search"></i>
          </base-layout-modifier>
          <!-- END Open Search Section -->

          <!-- Search Form (visible on larger screens) -->
          <b-form @submit.stop.prevent="onSubmit" class="d-none d-sm-inline-block">
            <b-input-group size="sm">
              <b-form-input placeholder="Search.." v-model="baseSearchTerm" class="form-control-alt"></b-form-input>
              <b-input-group-append>
                <span class="input-group-text bg-body border-0">
                  <i class="fa fa-search"></i>
                </span>
              </b-input-group-append>
            </b-input-group>
          </b-form>
          <!-- END Search Form -->

          <!-- User Dropdown -->
          <b-dropdown size="sm" variant="dual" class="d-inline-block ml-2" menu-class="p-0 border-0 font-size-sm" right no-caret ref="oneDropdownBoxedUser">
            <template #button-content>
              <div class="d-flex align-items-center">
                <img class="rounded-circle" src="img/avatars/avatar10.jpg" alt="Header Avatar" style="width: 21px;">
                <span class="d-none d-sm-inline-block ml-2">Adam</span>
                <i class="fa fa-fw fa-angle-down d-none d-sm-inline-block ml-1 mt-1"></i>
              </div>
            </template>
            <li @click="$refs.oneDropdownBoxedUser.hide(true)">
              <div class="p-3 text-center bg-primary-dark rounded-top">
                <img class="img-avatar img-avatar48 img-avatar-thumb" src="img/avatars/avatar10.jpg" alt="Avatar">
                <p class="mt-2 mb-0 text-white font-w500">Adam Smith</p>
                <p class="mb-0 text-white-50 font-size-sm">Web Developer</p>
              </div>
              <div class="p-2">
                <a class="dropdown-item d-flex align-items-center justify-content-between" href="javascript:void(0)">
                  <span class="font-size-sm font-w500">Inbox</span>
                  <span class="badge badge-pill badge-primary ml-2">3</span>
                </a>
                <router-link class="dropdown-item d-flex align-items-center justify-content-between" to="/backend/pages/generic/profile">
                  <span class="font-size-sm font-w500">Profile</span>
                  <span class="badge badge-pill badge-primary ml-2">1</span>
                </router-link>
                <a class="dropdown-item d-flex align-items-center justify-content-between" href="javascript:void(0)">
                  <span class="font-size-sm font-w500">Settings</span>
                </a>
                <div role="separator" class="dropdown-divider"></div>
                <router-link class="dropdown-item d-flex align-items-center justify-content-between" to="/auth/lock">
                  <span class="font-size-sm font-w500">Lock Account</span>
                </router-link>
                <router-link class="dropdown-item d-flex align-items-center justify-content-between" to="/auth/signin">
                  <span class="font-size-sm font-w500">Log Out</span>
                </router-link>
              </div>
            </li>
          </b-dropdown>
          <!-- END User Dropdown -->
        </div>
        <!-- END Right Section -->
      </div>
      <!-- END Header Content -->

      <!-- Header Search -->
      <div id="page-header-search" class="overlay-header bg-white" :class="{ 'show': $store.state.settings.headerSearch }" @keydown.esc="() => $store.commit('headerSearch', { mode: 'off' })">
        <div class="content-header">
          <b-form @submit.stop.prevent="onSubmit" class="w-100">
            <b-input-group>
              <b-form-input placeholder="Search or hit ESC.." v-model="baseSearchTerm"></b-form-input>
              <b-input-group-append>
                <base-layout-modifier action="headerSearchOff" variant="alt-danger">
                  <i class="fa fa-fw fa-times-circle"></i>
                </base-layout-modifier>
              </b-input-group-append>
            </b-input-group>
          </b-form>
        </div>
      </div>
      <!-- END Header Search -->

      <!-- Header Loader -->
      <div id="page-header-loader" class="overlay-header bg-primary-lighter" :class="{ 'show': $store.state.settings.headerLoader }">
        <div class="content-header">
          <div class="w-100 text-center">
            <i class="fa fa-fw fa-circle-notch fa-spin text-primary"></i>
          </div>
        </div>
      </div>
      <!-- END Header Loader -->
    </template>
    <!-- END Header Content -->

    <!-- Navigation -->
    <template #content>
      <div class="bg-white">
        <div class="content py-3">
          <!-- Toggle Navigation -->
          <div class="d-lg-none">
            <!-- Class Toggle, functionality initialized in directives/toggle-class.js -->
            <b-button variant="alt-secondary" block class="d-flex justify-content-between align-items-center" v-toggle-class="{ targetId: 'horizontal-navigation', class: 'd-none' }">
              Menu
              <i class="fa fa-bars"></i>
            </b-button>
          </div>
          <!-- END Toggle Navigation -->

          <!-- Navigation -->
          <div id="horizontal-navigation" class="d-none d-lg-block mt-2 mt-lg-0">
            <base-navigation :nodes="navigation" horizontal horizontal-hover></base-navigation>
          </div>
          <!-- END Navigation -->
        </div>
      </div>
    </template>
    <!-- END Navigation -->
  </base-layout>
</template>

<script>
import BaseLayout from '../Base'

export default {
  name: 'LayoutBackend',
  components: {
    BaseLayout
  },
  data () {
    return {
      // Override and set custom CSS classes to the container of each base layout element
      layoutClasses: {
        sideOverlay: '',
        sidebar: '',
        header: '',
        footer: ''
      },
      navigation: [
        {
          name: 'Dashboard',
          to: '/backend-boxed/dashboard',
          icon: 'si si-compass'
        },
        {
          name: 'Pages',
          heading: true
        },
        {
          name: 'Variations',
          icon: 'si si-puzzle',
          sub: [
            {
              name: 'Simple 1',
              to: '/backend-boxed/simple1'
            },
            {
              name: 'Simple 2',
              to: '/backend-boxed/simple2'
            },
            {
              name: 'Image 1',
              to: '/backend-boxed/image1'
            },
            {
              name: 'Image 2',
              to: '/backend-boxed/image2'
            }
          ]
        },
        {
          name: 'Search',
          to: '/backend-boxed/search',
          icon: 'si si-magnifier'
        },
        {
          name: 'Go Back',
          to: '/backend/dashboard',
          icon: 'si si-action-undo'
        }
      ],
      baseSearchTerm: '',
      notifications: [
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-check-circle text-success',
          title: 'You have a new follower',
          time: '15 min ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-plus-circle text-info',
          title: '1 new sale, keep it up',
          time: '22 min ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-times-circle text-danger',
          title: 'Update failed, restart server',
          time: '15 min ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-plus-circle text-info',
          title: '2 new sales, keep it up',
          time: '33 min ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-user-plus text-success',
          title: 'You have a new subscriber',
          time: '41 min ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-check-circle text-success',
          title: 'You have a new follower',
          time: '42 min ago'
        }
      ]
    }
  },
  methods: {
    onSubmit () {
      this.$router.push('/backend-boxed/search?' + this.baseSearchTerm)
    },
    eventHeaderSearch (event) {
      // When ESCAPE key is hit close the header search section
      if (event.which === 27) {
        event.preventDefault()
        this.$store.commit('headerSearch', { mode: 'off' })
      }
    }
  },
  mounted () {
    document.addEventListener('keydown', this.eventHeaderSearch)
  },
  destroyed () {
    document.removeEventListener('keydown', this.eventHeaderSearch)
  },
  created () {
    // Set default elements for this layout
    this.$store.commit('setLayout', {
      header: true,
      sidebar: false,
      sideOverlay: false,
      footer: true
    })
    
    // Set various template options
    this.$store.commit('headerStyle', { mode: 'dark'})
    this.$store.commit('mainContent', { mode: 'boxed'})
  }
}
</script>
