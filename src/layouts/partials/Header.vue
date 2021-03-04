<template>
  <!-- Header -->
  <header id="page-header">
    <slot>
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

          <!-- Apps Modal Toggle Button -->
          <b-button variant="dual" size="sm" class="mr-2" v-b-modal.one-modal-apps>
            <i class="fa fa-fw fa-cubes"></i>
          </b-button>
          <!-- END Apps Modal Toggle Button -->

          <!-- Apps Modal -->
          <b-modal id="one-modal-apps" size="sm" body-class="p-0" hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Apps</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('one-modal-apps')">
                    <i class="si si-close"></i>
                  </button>
                </div>
              </div>
              <div class="block-content block-content-full">
                <div class="row gutters-tiny">
                  <div class="col-6">
                    <!-- CRM -->
                    <base-block tag="a" href="javascript:void(0)" class="bg-body" content-class="text-center" rounded themed hideHeader>
                      <i class="si si-speedometer fa-2x text-primary"></i>
                      <p class="font-w600 font-size-sm mt-2 mb-3">
                        CRM
                      </p>
                    </base-block>
                    <!-- END CRM -->
                  </div>
                  <div class="col-6">
                    <!-- Products -->
                    <base-block tag="a" href="javascript:void(0)" class="bg-body" content-class="text-center" rounded themed hideHeader>
                      <i class="si si-rocket fa-2x text-primary"></i>
                      <p class="font-w600 font-size-sm mt-2 mb-3">
                        Products
                      </p>
                    </base-block>
                    <!-- END Products -->
                  </div>
                  <div class="col-6">
                    <!-- Sales -->
                    <base-block tag="a" href="javascript:void(0)" class="bg-body mb-0" content-class="text-center" rounded themed hideHeader>
                      <i class="si si-plane fa-2x text-primary"></i>
                      <p class="font-w600 font-size-sm mt-2 mb-3">
                        Sales
                      </p>
                    </base-block>
                    <!-- END Sales -->
                  </div>
                  <div class="col-6">
                    <!-- Payments -->
                    <base-block tag="a" href="javascript:void(0)" class="bg-body mb-0" content-class="text-center" rounded themed hideHeader>
                      <i class="si si-wallet fa-2x text-primary"></i>
                      <p class="font-w600 font-size-sm mt-2 mb-3">
                        Payments
                      </p>
                    </base-block>
                    <!-- END Payments -->
                  </div>
                </div>
              </div>
            </div>
          </b-modal>
          <!-- END Apps Modal -->

          <!-- Open Search Section (visible on smaller screens) -->
          <base-layout-modifier action="headerSearchOn" variant="dual" size="sm" class="d-sm-none">
            <i class="fa fa-fw fa-search"></i>
          </base-layout-modifier>
          <!-- END Open Search Section -->

          <!-- Search Form (visible on larger screens) -->
          <b-form @submit.stop.prevent="onSubmit" class="d-none d-sm-inline-block">
            <b-input-group size="sm">
              <b-form-input placeholder="Search.." v-model="baseSearchTerm" class="form-control-alt"></b-form-input>
              <b-input-group-append>
                <span class="input-group-text bg-body border-0">
                  <i class="fa fa-fw fa-search"></i>
                </span>
              </b-input-group-append>
            </b-input-group>
          </b-form>
          <!-- END Search Form -->
        </div>
        <!-- END Left Section -->

        <!-- Right Section -->
        <div class="d-flex align-items-center">
          <!-- User Dropdown -->
          <b-dropdown size="sm" variant="dual" class="d-inline-block ml-2" menu-class="p-0 border-0 dropdown-menu-md" right no-caret ref="oneDropdownDefaultUser">
            <template #button-content>
              <div class="d-flex align-items-center">
                <img class="rounded-circle" src="img/avatars/avatar10.jpg" alt="Header Avatar" style="width: 21px;">
                <span class="d-none d-sm-inline-block ml-2">Adam</span>
                <i class="fa fa-fw fa-angle-down d-none d-sm-inline-block ml-1 mt-1"></i>
              </div>
            </template>
            <li @click="$refs.oneDropdownDefaultUser.hide(true)">
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

          <!-- Notifications Dropdown -->
          <b-dropdown size="sm" variant="dual" class="d-inline-block ml-2" menu-class="dropdown-menu-lg p-0 border-0 font-size-sm" right no-caret>
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

          <!-- Toggle Side Overlay -->
          <base-layout-modifier action="sideOverlayToggle" variant="dual" size="sm" class="ml-2">
            <i class="fa fa-fw fa-list-ul fa-flip-horizontal"></i>
          </base-layout-modifier>
          <!-- END Toggle Side Overlay -->
        </div>
        <!-- END Right Section -->
      </div>
      <!-- END Header Content -->

      <!-- Header Search -->
      <div id="page-header-search" class="overlay-header bg-white" :class="{ 'show': $store.state.settings.headerSearch }" @keydown.esc="() => $store.commit('headerSearch', { mode: 'off' })">
        <div class="content-header">
          <b-form @submit.stop.prevent="onSubmit" class="w-100">
            <b-input-group>
              <b-input-group-prepend>
                <base-layout-modifier action="headerSearchOff" variant="alt-danger">
                  <i class="fa fa-fw fa-times-circle"></i>
                </base-layout-modifier>
              </b-input-group-prepend>
              <b-form-input placeholder="Search or hit ESC.." v-model="baseSearchTerm"></b-form-input>
            </b-input-group>
          </b-form>
        </div>
      </div>
      <!-- END Header Search -->

      <!-- Header Loader -->
      <div id="page-header-loader" class="overlay-header bg-white" :class="{ 'show': $store.state.settings.headerLoader }">
        <div class="content-header">
          <div class="w-100 text-center">
            <i class="fa fa-fw fa-circle-notch fa-spin"></i>
          </div>
        </div>
      </div>
      <!-- END Header Loader -->
    </slot>
  </header>
  <!-- END Header -->
</template>

<script>
export default {
  name: 'BaseHeader',
  props: {
    classes: String
  },
  data () {
    return {
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
          icon: 'fa fa-fw fa-plus-circle text-primary',
          title: '1 new sale, keep it up',
          time: '22 min ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-times-circle text-danger',
          title: 'Update failed, restart server',
          time: '26 min ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-plus-circle text-primary',
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
      this.$router.push('/backend/pages/generic/search?' + this.baseSearchTerm)
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
  }
}
</script>
