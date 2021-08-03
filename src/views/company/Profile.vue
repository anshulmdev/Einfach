<template>
  <div>
    <!-- Hero -->
    <base-background image="img/photos/profileBg.jpeg" inner-class="bg-black-10">
      <div class="content content-full text-center">
        <div class="my-3">
            <img class="img-avatar img-avatar-thumb" :src="$store.state.firestoreData.user.logo" alt="Avatar">
        </div>
        <h1 class="h2 text-white mb-0">{{$store.state.firestoreData.user.companyName}}</h1>
        <span class="text-white-75">{{$store.state.firestoreData.user.category}}</span>
      </div>
    </base-background>
    <!-- END Hero -->

    <!-- Stats -->
    <div class="bg-white border-bottom">
      <div class="content content-boxed">
        <b-row class="items-push text-center">
          <b-col cols="6" md="3">
            <div class="font-size-sm font-w600 text-muted text-uppercase">Total Applicants</div>
            <a class="link-fx font-size-h3" href="javascript:void(0)">{{$store.state.firestoreData.candidates.applied.length}}</a>
          </b-col>
          <b-col cols="6" md="3">
            <div class="font-size-sm font-w600 text-muted text-uppercase">Tests Conducted</div>
            <a class="link-fx font-size-h3" href="javascript:void(0)">{{$store.state.firestoreData.candidates.completed.length}}</a>
          </b-col>
          <b-col cols="6" md="3">
            <div class="font-size-sm font-w600 text-muted text-uppercase">Issues Reported</div>
            <a class="link-fx font-size-h3" href="javascript:void(0)">{{$store.state.firestoreData.notifications.length}}</a>
          </b-col>
          <b-col cols="6" md="3">
            <div class="font-size-sm font-w600 text-muted text-uppercase mb-2">Ratings</div>
            <span class="text-warning">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half"></i>
            </span>
            <span class="font-size-sm text-muted">(4.9)</span>
          </b-col>
        </b-row>
      </div>
    </div>
    <!-- END Stats -->

    <!-- Page Content -->
    <div class="content content-boxed">
      <b-row>
        <b-col md="7" xl="8">
          <!-- Updates -->
          <ul class="timeline timeline-alt py-0">
            <li v-for="item in notificationsSorted" :key="item.title" class="timeline-event">
              <div class="timeline-event-icon bg-white">
                <i :class="item.icon"></i>
              </div>
              <base-block rounded :title="item.title" class="timeline-event-block">
                <template #options>
                  <div class="timeline-event-time block-options-item font-size-sm">
                      {{String(item.time.toDate()).slice(0,15)}}
                    </div>
                </template>
                <router-link :to="`/backend/applicants/details/${item.email}`" class="font-w600">
                  {{item.email}}
                </router-link>
                <p class="mt-1">
                  {{item.desc}}
                </p>
              </base-block>
            </li>
          </ul>
          <!-- END Updates -->
        </b-col>
        <b-col md="5" xl="4">
          <!-- Products -->
          <base-block rounded header-bg>
            <template #title>
              <i class="fa fa-briefcase text-muted mr-1"></i> Active Products
            </template>
            <b-media class="d-flex align-items-center push">
              <template v-slot:aside>
                <a class="item item-rounded bg-info" href="javascript:void(0)">
                  <i class="fa fa-mail-bulk fa-2x text-white-75"></i>
                </a>
              </template>
              <div class="font-w600">Email Automation</div>
              <div class="font-size-sm">Active and Running</div>
            </b-media>
            <b-media class="d-flex align-items-center push">
              <template v-slot:aside>
                <a class="item item-rounded bg-amethyst" href="javascript:void(0)">
                  <i class="fab fa-wpforms fa-2x text-white-75"></i>
                </a>
              </template>
              <div class="font-w600">Hosted Forms</div>
              <div class="font-size-sm">Active and Running</div>
            </b-media>
            <b-media class="d-flex align-items-center push">
              <template v-slot:aside>
                <a class="item item-rounded bg-city" href="javascript:void(0)">
                  <i class="si si-speedometer fa-2x text-white-75"></i>
                </a>
              </template>
              <div class="font-w600">iDashboard</div>
                <div class="font-size-sm">Active and Running</div>
            </b-media>
            <b-media class="d-flex align-items-center push">
              <template v-slot:aside>
                <a class="item item-rounded bg-smooth" href="javascript:void(0)">
                  <i class="fa fa-code fa-2x text-white-75"></i>
                </a>
              </template>
              <div class="font-w600">Live Code</div>
                <div class="font-size-sm">Inactive and Disabled</div>
            </b-media>
            <b-media class="d-flex align-items-center push">
              <template v-slot:aside>
                <a class="item item-rounded bg-dark" href="javascript:void(0)">
                  <i class="far fa-calendar-alt fa-2x text-white-75"></i>
                </a>
              </template>
              <div class="font-w600">Calendar</div>
                <div class="font-size-sm">Inactive and Disabled</div>
            </b-media>
            <!-- <div class="text-center push">
              <b-button size="sm" variant="light">View More..</b-button>
            </div> -->
          </base-block>
          <!-- END Products -->

        </b-col>
      </b-row>
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      userList: [
        {
          href: 'javascript:void(0)',
          name: 'Danielle Jones',
          profession: 'Copywriter',
          avatar: 'avatar2.jpg',
          statusColor: 'success'
        },
        {
          href: 'javascript:void(0)',
          name: 'Brian Cruz',
          profession: 'Web Developer',
          avatar: 'avatar14.jpg',
          statusColor: 'success'
        },
        {
          href: 'javascript:void(0)',
          name: 'Barbara Scott',
          profession: 'Web Designer',
          avatar: 'avatar2.jpg',
          statusColor: 'warning'
        }
      ]
    }
  },
  computed: {
    notificationsSorted () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.$store.state.firestoreData.notifications.sort((a,b) => b.time - a.time).slice(0,20)
    }
  }
}
</script>