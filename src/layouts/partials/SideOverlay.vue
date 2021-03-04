<template>
  <!-- Side Overlay-->
  <simplebar id="side-overlay">
    <slot>
      <!-- Side Header -->
      <div class="content-header border-bottom">
        <!-- User Avatar -->
        <a class="img-link mr-1" href="javascript:void(0)">
          <img class="img-avatar img-avatar32" src="img/avatars/avatar10.jpg" alt="Avatar">
        </a>
        <!-- END User Avatar -->

        <!-- User Info -->
        <div class="ml-2">
          <a class="text-dark font-w600 font-size-sm" href="javascript:void(0)">Adam McCoy</a>
        </div>
        <!-- END User Info -->

        <!-- Close Side Overlay -->
        <base-layout-modifier action="sideOverlayClose" variant="alt-danger" size="sm" class="ml-auto">
          <i class="fa fa-fw fa-times"></i>
        </base-layout-modifier>
        <!-- END Close Side Overlay -->
      </div>
      <!-- END Side Header -->

      <!-- Side Content -->
      <div class="content-side">
        <!-- Side Overlay Tabs -->
        <b-tabs class="block block-transparent pull-x pull-t" nav-class="nav-tabs-alt" content-class="block-content" justified>
          <b-tab class="fade-right pull-x" active>
            <template #title>
              <i class="fa fa-fw fa-coffee text-gray mr-1"></i> Overview
            </template>

            <!-- Activity -->
            <base-block title="Recent Activity" header-bg btn-option-content>
              <ul class="nav-items mb-0">
                <li v-for="(appEvent, index) in activity" :key="`event-${index}`">
                  <a class="text-dark media py-2" :href="`${appEvent.href}`">
                    <div class="mr-3 ml-2">
                      <i :class="`${appEvent.icon} text-${appEvent.color}`"></i>
                    </div>
                    <div class="media-body">
                      <div class="font-size-sm font-w600">{{ appEvent.title }}</div>
                      <div :class="`text-${appEvent.color}`">{{ appEvent.subtitle }}</div>
                      <small class="font-size-sm text-muted">{{ appEvent.time }}</small>
                    </div>
                  </a>
                </li>
              </ul>
            </base-block>
            <!-- END Activity -->

            <!-- Online Friends -->
            <base-block title="Online Friends" header-bg btn-option-content>
              <ul class="nav-items mb-0">
                <li v-for="(user, index) in userList" :key="`userlist-${index}`">
                  <a class="media py-2" :href="`${user.href}`">
                    <div class="mr-3 ml-2 overlay-container overlay-bottom">
                      <img class="img-avatar img-avatar48" :src="`img/avatars/${user.avatar}.jpg`" alt="Avatar">
                      <span :class="`overlay-item item item-tiny item-circle border border-2x border-white bg-${user.statusColor}`"></span>
                    </div>
                    <div class="media-body">
                      <div class="font-w600">{{ user.name }}</div>
                      <div class="font-size-sm text-muted">{{ user.profession }}</div>
                    </div>
                  </a>
                </li>
              </ul>
            </base-block>
            <!-- END Online Friends -->

            <!-- Quick Settings -->
            <base-block title="Quick Settings" class="mb-0" header-bg btn-option-content>
              <div class="form-group">
                <p class="font-size-sm font-w600 mb-2">
                  Online Status
                </p>
                <b-form-checkbox v-model="settings.status" name="so-settings-status" class="mb-1" switch>
                  Show your status to all
                </b-form-checkbox>
              </div>
              <div class="form-group">
                <p class="font-size-sm font-w600 mb-2">
                  Auto Updates
                </p>
                <b-form-checkbox v-model="settings.updated" name="so-settings-updated" class="mb-1" switch>
                  Keep up to date
                </b-form-checkbox>
              </div>
              <div class="form-group">
                <p class="font-size-sm font-w600 mb-1">
                  Application Alerts
                </p>
                <b-form-checkbox v-model="settings.notifications.email" name="so-settings-notifications-email" class="mb-1" switch>
                  Email Notifications
                </b-form-checkbox>
                <b-form-checkbox v-model="settings.notifications.sms" name="so-settings-notifications-sms" class="mb-1" switch>
                  SMS Notifications
                </b-form-checkbox>
              </div>
              <div class="form-group">
                <p class="font-size-sm font-w600 mb-1">
                  API
                </p>
                <b-form-checkbox v-model="settings.api" name="so-settings-api" class="mb-1" switch>
                  Enable access
                </b-form-checkbox>
              </div>
            </base-block>
            <!-- END Quick Settings -->
          </b-tab>
          <b-tab class="fade-left pull-x">
            <template #title>
              <i class="fa fa-fw fa-chart-line text-gray mr-1"></i> Sales
            </template>
            <base-block class="mb-0" content-class="p-0">
              <!-- Stats -->
              <div class="block-content">
                <b-row class="items-push pull-t">
                  <b-col cols="6">
                    <div class="font-size-sm font-w600 text-uppercase">Sales</div>
                    <a class="font-size-lg" href="javascript:void(0)">22.030</a>
                  </b-col>
                  <b-col cols="6">
                    <div class="font-size-sm font-w600 text-uppercase">Balance</div>
                    <a class="font-size-lg" href="javascript:void(0)">$4.589,00</a>
                  </b-col>
                </b-row>
              </div>
              <!-- END Stats -->

              <!-- Today -->
              <div class="block-content block-content-full block-content-sm bg-body-light">
                <b-row>
                  <b-col cols="6">
                    <span class="font-size-sm font-w600 text-uppercase">Today</span>
                  </b-col>
                  <b-col cols="6" class="text-right">
                    <span class="ext-muted">$996</span>
                  </b-col>
                </b-row>
              </div>
              <div class="block-content">
                <ul class="nav-items push">
                  <li v-for="(sale, index) in salesToday" :key="`sale-today-${index}`">
                    <a class="text-dark media py-2" :href="`${sale.href}`">
                      <div class="mr-3 ml-2">
                        <i :class="`${sale.icon}`"></i>
                      </div>
                      <div class="media-body">
                        <div class="font-w600">{{ sale.title }}</div>
                        <small class="text-muted">{{ sale.time }}</small>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <!-- END Today -->

              <!-- Yesterday -->
              <div class="block-content block-content-full block-content-sm bg-body-light">
                <div class="row">
                  <div class="col-6">
                    <span class="font-size-sm font-w600 text-uppercase">Yesterday</span>
                  </div>
                  <div class="col-6 text-right">
                    <span class="text-muted">$765</span>
                  </div>
                </div>
              </div>
              <div class="block-content">
                <ul class="nav-items push">
                  <li v-for="(sale, index) in salesYesterday" :key="`sale-yesterday-${index}`">
                    <a class="text-dark media py-2" :href="`${sale.href}`">
                      <div class="mr-3 ml-2">
                        <i :class="`${sale.icon}`"></i>
                      </div>
                      <div class="media-body">
                        <div class="font-w600">{{ sale.title }}</div>
                        <small class="text-muted">{{ sale.time }}</small>
                      </div>
                    </a>
                  </li>
                </ul>

                <!-- More -->
                <div class="text-center">
                  <b-button size="sm" variant="light" href="javascript:void(0)">
                    <i class="fa fa-arrow-down mr-1"></i> Load More..
                  </b-button>
                </div>
                <!-- END More -->
              </div>
              <!-- END Yesterday -->
            </base-block>
          </b-tab>
        </b-tabs>
        <!-- END Side Overlay Tabs -->
      </div>
      <!-- END Side Content -->
    </slot>
  </simplebar>
  <!-- END Side Overlay -->
</template>

<script>
// SimpleBar, for more info and examples you can check out https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-vue
import simplebar from 'simplebar-vue'

export default {
  name: 'BaseSideOverlay',
  props: {
    classes: String
  },
  components: {
    simplebar
  },
  data () {
    return {
      settings: {
        status: true,
        updated: true,
        notifications: {
          email: true,
          sms: true
        },
        api: true
      },
      activity: [
        {
          href: 'javascript:void(0)',
          icon: 'si si-wallet',
          color: 'success',
          title: 'New sale ($15)',
          subtitle: 'Admin Template',
          time: '3 min ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'si si-pencil',
          color: 'info',
          title: 'You edited the file',
          subtitle: 'Documentation.doc',
          time: '15 min ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'si si-close',
          color: 'danger',
          title: 'Project deleted',
          subtitle: 'Line Icon Set',
          time: '4 hours ago'
        }
      ],
      userList: [
        {
          href: 'javascript:void(0)',
          name: 'Judy Ford',
          profession: 'Copywriter',
          avatar: 'avatar2',
          statusColor: 'success'
        },
        {
          href: 'javascript:void(0)',
          name: 'Carl Wells',
          profession: 'Web Developer',
          avatar: 'avatar11',
          statusColor: 'success'
        },
        {
          href: 'javascript:void(0)',
          name: 'Amber Shaw',
          profession: 'Web Designer',
          avatar: 'avatar5',
          statusColor: 'success'
        },
        {
          href: 'javascript:void(0)',
          name: 'Lisa Jekins',
          profession: 'Photographer',
          avatar: 'avatar7',
          statusColor: 'warning'
        },
        {
          href: 'javascript:void(0)',
          name: 'Adam Ford',
          profession: 'Graphic Designer',
          avatar: 'avatar16',
          statusColor: 'warning'
        }
      ],
      salesToday: [
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-circle text-success',
          title: 'New sale! + $249',
          time: '3 min ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-circle text-success',
          title: 'New sale! + $129',
          time: '50 min ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-circle text-success',
          title: 'New sale! + $119',
          time: '2 hours ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-circle text-success',
          title: 'New sale! + $499',
          time: '3 hours ago'
        }
      ],
      salesYesterday: [
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-circle text-success',
          title: 'New sale! + $249',
          time: '26 hours ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-circle text-danger',
          title: 'Product Purchase - $50',
          time: '28 hours ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-circle text-success',
          title: 'New sale! + $119',
          time: '29 hours ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-circle text-danger',
          title: 'Paypal Withdrawal - $300',
          time: '37 hours ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-circle text-success',
          title: 'New sale! + $129',
          time: '39 hours ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-circle text-success',
          title: 'New sale! + $119',
          time: '45 hours ago'
        },
        {
          href: 'javascript:void(0)',
          icon: 'fa fa-fw fa-circle text-success',
          title: 'New sale! + $499',
          time: '46 hours ago'
        }
      ]
    }
  },
  methods: {
    eventSideOverlay (event) {
      // When ESCAPE key is hit close the side overlay
      if (event.which === 27) {
        event.preventDefault()
        this.$store.commit('sideOverlay', { mode: 'close' })
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', this.eventSideOverlay)
  },
  destroyed() {
    document.removeEventListener('keydown', this.eventSideOverlay)
  }
}
</script>
