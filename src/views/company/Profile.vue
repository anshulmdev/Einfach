<template>
  <div>
    <!-- Hero -->
    <base-background image="img/photos/photo8@2x.jpg" inner-class="bg-black-50">
      <div class="content content-full text-center">
        <div class="my-3">
            <img class="img-avatar img-avatar-thumb" src="img/avatars/avatar13.jpg" alt="Avatar">
        </div>
        <h1 class="h2 text-white mb-0">John Parker</h1>
        <span class="text-white-75">UI Designer</span>
      </div>
    </base-background>
    <!-- END Hero -->

    <!-- Stats -->
    <div class="bg-white border-bottom">
      <div class="content content-boxed">
        <b-row class="items-push text-center">
          <b-col cols="6" md="3">
            <div class="font-size-sm font-w600 text-muted text-uppercase">Sales</div>
            <a class="link-fx font-size-h3" href="javascript:void(0)">17980</a>
          </b-col>
          <b-col cols="6" md="3">
            <div class="font-size-sm font-w600 text-muted text-uppercase">Products</div>
            <a class="link-fx font-size-h3" href="javascript:void(0)">27</a>
          </b-col>
          <b-col cols="6" md="3">
            <div class="font-size-sm font-w600 text-muted text-uppercase">Followers</div>
            <a class="link-fx font-size-h3" href="javascript:void(0)">1360</a>
          </b-col>
          <b-col cols="6" md="3">
            <div class="font-size-sm font-w600 text-muted text-uppercase mb-2">739 Ratings</div>
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
            <li class="timeline-event">
              <div class="timeline-event-icon bg-default">
                <i class="fab fa-facebook-f"></i>
              </div>
              <base-block rounded title="Facebook" class="timeline-event-block">
                <template #options>
                  <div class="timeline-event-time block-options-item font-size-sm">
                      just now
                    </div>
                </template>
                <p class="font-w600 mb-2">
                  + 290 Page Likes
                </p>
                <p>
                  This is great, keep it up!
                </p>
              </base-block>
            </li>
            <li class="timeline-event">
              <div class="timeline-event-icon bg-modern">
                <i class="fa fa-briefcase"></i>
              </div>
              <base-block rounded title="Products" class="timeline-event-block">
                <template #options>
                  <div class="timeline-event-time block-options-item font-size-sm">
                    4 hrs ago
                  </div>
                </template>
                <p class="font-w600 mb-2">
                  3 New Products were added!
                </p>
                <div class="d-flex push">
                  <a class="item item-rounded bg-info mr-2" href="javascript:void(0)">
                    <i class="si si-rocket fa-2x text-white-75"></i>
                  </a>
                  <a class="item item-rounded bg-amethyst mr-2" href="javascript:void(0)">
                    <i class="si si-calendar fa-2x text-white-75"></i>
                  </a>
                  <a class="item item-rounded bg-city mr-2" href="javascript:void(0)">
                    <i class="si si-speedometer fa-2x text-white-75"></i>
                  </a>
                </div>
              </base-block>
            </li>
            <li class="timeline-event">
              <div class="timeline-event-icon bg-info">
                <i class="fab fa-twitter"></i>
              </div>
              <base-block rounded title="Twitter" class="timeline-event-block">
                <template #options>
                  <div class="timeline-event-time block-options-item font-size-sm">
                    12 hrs ago
                  </div>
                </template>
                <p class="font-w600 mb-2">
                  + 1150 Followers
                </p>
                <p>
                  You’re getting more and more followers, keep it up!
                </p>
              </base-block>
            </li>
            <li class="timeline-event">
              <div class="timeline-event-icon bg-smooth">
                <i class="fa fa-database"></i>
              </div>
              <base-block rounded title="Backup" class="timeline-event-block">
                <template #options>
                  <div class="timeline-event-time block-options-item font-size-sm">
                    1 day ago
                  </div>
                </template>
                <p class="font-w600 mb-2">
                  Database backup completed!
                </p>
                <p>
                  Download the <a href="javascript:void(0)">latest backup</a>.
                </p>
              </base-block>
            </li>
            <li class="timeline-event">
              <div class="timeline-event-icon bg-dark">
                <i class="fa fa-cog"></i>
              </div>
              <base-block rounded title="System" class="timeline-event-block">
                <template #options>
                  <div class="timeline-event-time block-options-item font-size-sm">
                    1 week ago
                  </div>
                </template>
                <p class="font-w600 mb-2">
                  App updated to v2.02
                </p>
                <p>
                  Check the complete changelog at the <a href="javascript:void(0)">activity page</a>.
                </p>
              </base-block>
            </li>
            <li class="timeline-event">
              <div class="timeline-event-icon bg-modern">
                <i class="fa fa-briefcase"></i>
              </div>
              <base-block rounded title="Products" class="timeline-event-block">
                <template #options>
                  <div class="timeline-event-time block-options-item font-size-sm">
                    2 months ago
                  </div>
                </template>
                <p class="font-w600 mb-2">
                  1 New Product was added!
                </p>
                <p>
                  <a class="item item-rounded bg-muted" href="javascript:void(0)">
                    <i class="si si-wallet fa-2x text-white-75"></i>
                  </a>
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
              <i class="fa fa-briefcase text-muted mr-1"></i> Products
            </template>
            <b-media class="d-flex align-items-center push">
              <template v-slot:aside>
                <a class="item item-rounded bg-info" href="javascript:void(0)">
                  <i class="si si-rocket fa-2x text-white-75"></i>
                </a>
              </template>
              <div class="font-w600">MyPanel</div>
              <div class="font-size-sm">Responsive App Template</div>
            </b-media>
            <b-media class="d-flex align-items-center push">
              <template v-slot:aside>
                <a class="item item-rounded bg-amethyst" href="javascript:void(0)">
                  <i class="si si-calendar fa-2x text-white-75"></i>
                </a>
              </template>
              <div class="font-w600">Project Time</div>
              <div class="font-size-sm">Web Application</div>
            </b-media>
            <b-media class="d-flex align-items-center push">
              <template v-slot:aside>
                <a class="item item-rounded bg-city" href="javascript:void(0)">
                  <i class="si si-speedometer fa-2x text-white-75"></i>
                </a>
              </template>
              <div class="font-w600">iDashboard</div>
                <div class="font-size-sm">Bootstrap Admin Template</div>
            </b-media>
            <div class="text-center push">
              <b-button size="sm" variant="light">View More..</b-button>
            </div>
          </base-block>
          <!-- END Products -->

          <!-- Ratings -->
          <base-block rounded header-bg>
            <template #title>
              <i class="fa fa-pencil-alt text-muted mr-1"></i> Ratings
            </template>
            <div class="font-size-sm push">
              <div class="d-flex justify-content-between mb-2">
                <div>
                  <a class="font-w600" href="javascript:void(0)">Jeffrey Shaw</a>
                  <span class="text-muted">(5/5)</span>
                </div>
                <div class="text-warning">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
              </div>
              <p class="mb-0">
                Flawless design execution! I'm really impressed with the product, it really helped me build my app so fast! Thank you!
              </p>
            </div>
            <div class="font-size-sm push">
              <div class="d-flex justify-content-between mb-2">
                <div>
                  <a class="font-w600" href="javascript:void(0)">Ryan Flores</a>
                  <span class="text-muted">(5/5)</span>
                </div>
                <div class="text-warning">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
              </div>
              <p class="mb-0">
                Great value for money and awesome support! Would buy again and again! Thanks!
              </p>
            </div>
            <div class="font-size-sm push">
              <div class="d-flex justify-content-between mb-2">
                <div>
                  <a class="font-w600" href="javascript:void(0)">Justin Hunt</a>
                  <span class="text-muted">(5/5)</span>
                </div>
                <div class="text-warning">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
              </div>
              <p class="mb-0">
                Working great in all my devices, quality and quantity in a great package! Thank you!
              </p>
            </div>
            <div class="text-center push">
              <b-button size="sm" variant="light">View More..</b-button>
            </div>
          </base-block>
          <!-- END Ratings -->

          <!-- Followers -->
          <base-block rounded header-bg>
            <template #title>
              <i class="fa fa-share-alt text-muted mr-1"></i> Followers
            </template>
            <ul class="nav-items push">
              <li v-for="(user, index) in userList" :key="`userlist-${index}`">
                <a class="media py-2" :href="`${user.href}`">
                  <div class="mr-3 ml-2 overlay-container overlay-left">
                    <img class="img-avatar img-avatar48" :src="`img/avatars/${user.avatar}`" alt="Avatar">
                    <span :class="`overlay-item item item-tiny item-circle border border-2x border-white bg-${user.statusColor}`"></span>
                  </div>
                  <div class="media-body">
                    <div class="font-w600">{{ user.name }}</div>
                    <div class="font-size-sm text-muted">{{ user.profession }}</div>
                  </div>
                </a>
              </li>
            </ul>
            <div class="text-center push">
              <button type="button" class="btn btn-sm btn-light">Load More..</button>
            </div>
          </base-block>
          <!-- END Followers -->
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
  }
}
</script>