<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Timeline" subtitle="UI element that just works and looks great.">
      <template #extra>
        <!-- Class Toggle, functionality initialized in directives/toggle-class.js -->
        <b-button size="sm" variant="alt-primary" @click="timelineCentered = !timelineCentered" class="d-none d-xl-inline-block">
          <i class="fa fa-arrows-alt-h mr-1"></i> Toggle Timeline Mode
        </b-button>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Timeline -->
      <!--
        Available classes for timeline list:

        'timeline'                                      A normal timeline with icons to the left in all screens
        'timeline timeline-centered timeline-alt'       A centered timeline with odd events to the left and even events to the right (screen width > 1200px)
        'timeline timeline-centered'                    A centered timeline with all events to the left. You can add the class 'timeline-event-alt'
                                                        to 'timeline-event' elements to position them to the right (screen width > 1200px) (useful, if you
                                                        would like to have multiple events to the left or to the right section)
      -->
      <ul class="timeline timeline-alt" :class="{ 'timeline-centered': timelineCentered }">
        <!-- Photos Event -->
        <li class="timeline-event">
          <div class="timeline-event-icon bg-success">
            <i class="fa fa-images"></i>
          </div>
          <base-block rounded title="New Gallery" header-bg class="timeline-event-block">
            <template #options>
              <div class="timeline-event-time block-options-item font-size-sm font-w600">
                just now
              </div>
            </template>
            <gallery :images="photos" :index="index" :options="{ indicatorOptions: { thumbnailIndicators: true }}" @close="index = null"></gallery>
            <b-row class="items-push">
              <b-col md="6" lg="4" xl="3" class="animated fadeIn" v-for="(photo, photoIndex) in photos" :key="photoIndex">
                <a class="img-link img-link-simple img-link-zoom-in" href="javascript:void(0)" @click="index = photoIndex">
                  <img class="img-fluid" :src="photo" alt="Photo">
                </a>
              </b-col>
            </b-row>
          </base-block>
        </li>
        <!-- END Photos Event -->

        <!-- Twitter Event -->
        <li class="timeline-event">
          <div class="timeline-event-icon bg-info">
            <i class="fab fa-twitter"></i>
          </div>
          <base-block rounded title="Update" header-bg class="timeline-event-block">
            <template #options>
              <div class="timeline-event-time block-options-item font-size-sm font-w600">
                10 min ago
              </div>
            </template>
            <b-media class="font-size-sm">
              <template #aside>
                <a class="img-link" href="javascript:void(0)">
                  <img class="img-avatar img-avatar48" src="img/avatars/avatar2.jpg" alt="Avatar">
                </a>
              </template>
              <p>
                <a class="font-w600" href="javascript:void(0)">Amanda Powell</a> Vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt sollicitudin sem nec ultrices. Sed at mi velit.
              </p>
              <p>
                <a class="text-dark mr-2" href="javascript:void(0)">
                  <i class="fa fa-reply fa-fw text-muted"></i> Reply
                </a>
                <a class="text-dark mr-2" href="javascript:void(0)">
                  <i class="fa fa-redo fa-fw text-muted"></i> Retweet
                </a>
                <a class="text-dark mr-2" href="javascript:void(0)">
                  <i class="fa fa-heart fa-fw text-muted"></i> Like
                </a>
              </p>
            </b-media>
          </base-block>
        </li>
        <!-- END Twitter Event -->

        <!-- Facebook Event -->
        <li class="timeline-event">
          <div class="timeline-event-icon bg-default">
            <i class="fab fa-facebook-f"></i>
          </div>
          <base-block rounded title="New Friends" header-bg class="timeline-event-block">
            <template #options>
              <div class="timeline-event-time block-options-item font-size-sm font-w600">
                42 min ago
              </div>
            </template>
            <div class="row">
              <div class="col-md-6">
                <!-- User List 1 -->
                <ul class="nav-items push">
                  <li v-for="(user, index) in userList.slice(0,3)" :key="`userlist1-${index}`">
                    <a class="media py-2" :href="`${user.href}`">
                      <div class="mr-3 ml-2 overlay-container overlay-left">
                        <img class="img-avatar img-avatar48" :src="`img/avatars/${user.avatar}`" alt="Avatar">
                        <span :class="`overlay-item item item-tiny item-circle border border-2x border-white bg-${user.statusColor}`"></span>
                      </div>
                      <div class="media-body">
                        <div class="font-w600">{{ user.name }}</div>
                        <div class="font-size-sm text-muted">{{ user.active }}</div>
                      </div>
                    </a>
                  </li>
                </ul>
                <!-- END User List 1 -->
              </div>
              <div class="col-md-6">
                <!-- User List 2 -->
                <ul class="nav-items push">
                  <li v-for="(user, index) in userList.slice(3,6)" :key="`userlist2-${index}`">
                    <a class="media py-2" :href="`${user.href}`">
                      <div class="mr-3 ml-2 overlay-container overlay-left">
                        <img class="img-avatar img-avatar48" :src="`img/avatars/${user.avatar}`" alt="Avatar">
                        <span :class="`overlay-item item item-tiny item-circle border border-2x border-white bg-${user.statusColor}`"></span>
                      </div>
                      <div class="media-body">
                        <div class="font-w600">{{ user.name }}</div>
                        <div class="font-size-sm text-muted">{{ user.active }}</div>
                      </div>
                    </a>
                  </li>
                </ul>
                <!-- User List 2 -->
              </div>
            </div>
          </base-block>
        </li>
        <!-- END Facebook Event -->

        <!-- Photos Event -->
        <li class="timeline-event">
          <div class="timeline-event-icon bg-danger">
            <i class="fa fa-calendar"></i>
          </div>
          <base-block rounded title="Meeting" header-bg class="timeline-event-block">
            <template #options>
              <div class="timeline-event-time block-options-item font-size-sm font-w600">
                3 hrs ago
              </div>
            </template>
            <b-media class="font-size-sm push">
              <template #aside>
                <a class="img-link" href="javascript:void(0)">
                  <i class="fa fa-utensils fa-fw fa-3x text-danger-light"></i>
                </a>
              </template>
              <p>
                You have a meal meeting scheduled with <a class="font-w600" href="javascript:void(0)">Adam McCoy</a> today at 16:18.
              </p>
            </b-media>
          </base-block>
        </li>
        <!-- END Photos Event -->

        <!-- System Event -->
        <li class="timeline-event">
          <div class="timeline-event-icon bg-dark">
            <i class="fa fa-cogs"></i>
          </div>
          <base-block rounded title="System" header-bg class="timeline-event-block">
            <template #options>
              <div class="timeline-event-time block-options-item font-size-sm font-w600">
                1 day ago
              </div>
            </template>
            <div class="alert alert-success d-flex align-items-center justify-content-between" role="alert">
              <div class="flex-fill mr-3">
                <p class="mb-0">OneUI was successfully <a class="alert-link" href="javascript:void(0)">updated</a> to v{{ $store.getters.appVersion }}!</p>
              </div>
              <div class="flex-00-auto">
                <i class="fa fa-fw fa-check-circle"></i>
              </div>
            </div>
          </base-block>
        </li>
        <!-- END System Event -->

        <!-- Article -->
        <li class="timeline-event">
          <div class="timeline-event-icon bg-smooth">
            <i class="far fa-file-alt"></i>
          </div>
          <base-block rounded title="Article" header-bg class="timeline-event-block">
            <template #options>
              <div class="timeline-event-time block-options-item font-size-sm font-w600">
                2 days ago
              </div>
            </template>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
            <b-button size="sm" variant="light" class="push" href="javascript:void(0)">
              Read More..
            </b-button>
          </base-block>
        </li>
        <!-- END Article -->
      </ul>
      <!-- END Timeline -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
// Vue Gallery, for more info and examples you can check out https://github.com/RobinCK/vue-gallery
import VueGallery from 'vue-gallery'

export default {
  components: {
    'gallery': VueGallery
  },
  data () {
    return {
      timelineCentered: true,
      index: null,
      photos: [
        'img/photos/photo11@2x.jpg',
        'img/photos/photo12@2x.jpg',
        'img/photos/photo13@2x.jpg',
        'img/photos/photo14@2x.jpg',
        'img/photos/photo15@2x.jpg',
        'img/photos/photo16@2x.jpg',
        'img/photos/photo17@2x.jpg',
        'img/photos/photo18@2x.jpg'
      ],
      userList: [
        {
          href: 'javascript:void(0)',
          name: 'Marie Duncan',
          active: '3 min ago',
          avatar: 'avatar5.jpg',
          statusColor: 'success'
        },
        {
          href: 'javascript:void(0)',
          name: 'Jose Mills',
          active: '5 min ago',
          avatar: 'avatar14.jpg',
          statusColor: 'success'
        },
        {
          href: 'javascript:void(0)',
          name: 'Megan Fuller',
          active: '16 min ago',
          avatar: 'avatar2.jpg',
          statusColor: 'danger'
        },
        {
          href: 'javascript:void(0)',
          name: 'Amanda Powell',
          active: '21 min ago',
          avatar: 'avatar7.jpg',
          statusColor: 'success'
        },
        {
          href: 'javascript:void(0)',
          name: 'Carl Wells',
          active: '23 min ago',
          avatar: 'avatar16.jpg',
          statusColor: 'success'
        },
        {
          href: 'javascript:void(0)',
          name: 'Alice Moore',
          active: '35 min ago',
          avatar: 'avatar3.jpg',
          statusColor: 'danger'
        }
      ]
    }
  }
}
</script>