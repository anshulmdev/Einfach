<template>
  <div>
    <!-- Hero -->
    <div class="hero bg-white overflow-hidden">
      <div class="hero-inner align-self-stretch d-flex flex-column">
        <div class="content content-full flex-fill d-flex align-items-center px-lg-6 px-xl-8 overflow-hidden">
          <b-row class="w-100">
            <b-col lg="6" class="text-center text-lg-left d-flex align-items-center">
              <div class="w-100">
                <h1 class="font-w700 mb-3">
                  <i class="fab fa-buffer text-success mr-1 align-middle" color="primary" style="font-size: 1.5em;"></i>
                  <span class="align-middle">Einfach</span>
                </h1>
                <p class="font-size-lg font-w400 text-muted mb-4 mt-2 pb-2">
                  Build an easy hiring solution with <a>Einfach</a><br>
                  We help fast-growing companies  in technical recruiting by structuring, automating, and scaling technical hiring 
                </p>
                <b-button size="lg" variant="alt-success" class="px-4 mr-1 mb-3" to="/auth/signin" v-click-ripple>
                  <i class="far fa-smile-beam font-size-base opacity-50 mr-1"></i> Already a Super User
                </b-button>
                <b-button size="lg" variant="alt-warning" class="px-4 mr-1 mb-3" to="/auth/signup" v-click-ripple>
                  <i class="si si-rocket font-size-base opacity-50 mr-1"></i> Sign Up Now
                </b-button>
              </div>
            </b-col>
            <b-col lg="6" class="d-none d-lg-block py-6">
              <div class="w-100 d-flex align-items-center position-relative bg-landing-right">
                <b-row no-gutters>
                  <b-col lg="7">
                    <div>
                      <img class="promo-image" src="img/various/promo-dashboard.png" alt="Einfach Dashboard">
                    </div>
                    <div class="ml-4 mt-4">
                      <img class="promo-image" src="img/various/promo-search.png" alt="Einfach calendar">
                    </div>
                  </b-col>
                  <b-col lg="5">
                    <div class="ml-4 mt-5">
                      <img class="promo-image" src="img/various/promo-side.png" alt="Einfach component">
                    </div>
                    <div class=" ml-5 mt-4">
                      <img class="promo-image" src="img/various/promo-code-vue.png" alt="Einfach component">
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
      <div class="hero-meta">
        <div class="animated slideInDown infinite">
          <i class="fa fa-chevron-down text-black-50"></i>
        </div>
      </div>
    </div>
    <!-- END Hero -->

    <!-- Vue Edition -->
    <div class="bg-body-light">
      <div class="content content-full content-boxed overflow-hidden">
        <div class="py-5">
          <b-row class="mb-5">
            <b-col md="6">
              <h2 class="h1 font-w700 mb-2">
                Complete <span class="font-w400">Dashboard</span>
              </h2>
              <p class="font-size-lg font-w500 text-muted mb-0">
                Get access to all the features of complete solution even on starter plan. Proceed with hiring on pay as you go basis
              </p>
            </b-col>
            <b-col md="6" class="d-none d-md-flex align-items-md-center justify-content-md-end">
              <p class="h1 font-w700 text-body-bg-dark mb-0">
                Completely Automated
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col order-md="1" md="6" offset-lg="1" class="d-flex align-items-center">
              <div class="w-100 mb-5 mb-md-0 px-lg-6 position-relative bg-landing-right">
                <b-row>
                  <b-col cols="6" md="12">
                    <base-block rounded fx-shadow content-full>
                      <div class="py-4 py-md-6 text-center">
                        <img width="150" src="img/photos/analysis.png" alt="Einfach Dashboard Image">
                      </div>
                    </base-block>
                  </b-col>
                  <b-col cols="6" md="12">
                    <base-block rounded fx-shadow content-full>
                      <div class="py-4 py-md-6 text-center">
                        <img width="150" src="img/photos/pie-chart.png" alt="Money Saved Image">
                      </div>
                    </base-block>
                  </b-col>
                </b-row>
              </div>
            </b-col>
            <b-col order-md="0" md="6" lg="5" class="d-md-flex align-items-md-center">
              <div>
                <div class="d-flex push">
                  <div class="item item-rounded bg-success-light flex-shrink-0">
                    <i class="fa fa-2x fa-tools text-success"></i>
                  </div>
                  <div class="ml-4">
                    <h4 class="mb-2">
                      Realtime Monitoring
                    </h4>
                    <p class="text-muted">
                      Monitor application in realtime with full security access.
                    </p>
                  </div>
                </div>
                <div class="d-flex push">
                  <div class="item item-rounded bg-danger-light flex-shrink-0">
                    <i class="fa fa-2x fa-table text-danger"></i>
                  </div>
                  <div class="ml-4">
                    <h4 class="mb-2">
                      Email Automation
                    </h4>
                    <p class="text-muted">
                      Applicants get reported automatically according to test results
                    </p>
                  </div>
                </div>
                <div class="d-flex push">
                  <div class="item item-rounded bg-amethyst-lighter flex-shrink-0">
                    <i class="fa fa-2x fa-fire text-amethyst"></i>
                  </div>
                  <div class="ml-4">
                    <h4 class="mb-2">
                      Library 1000+
                    </h4>
                    <p class="text-muted">
                      Get access to thousands of questions and host unlimited assignments
                    </p>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
    <!-- END Vue Edition -->

    <!-- Sophisticated Features -->
    <div class="bg-white">
      <div class="content content-full content-boxed">
        <div class="py-5">
          <b-row class="mb-5">
            <b-col md="6">
              <h2 class="h1 font-w700 mb-2">
                Get access to <span class="font-w400">100+ Features</span>
              </h2>
              <p class="font-size-lg font-w500 text-muted mb-0">
                Maintain all HR activities and Monitoring, all at one place. 
              </p>
            </b-col>
            <b-col md="6" class="d-none d-md-flex align-items-md-center justify-content-md-end">
              <p class="h1 font-w700 text-body-bg-dark mb-0">
                Tested end-to-end
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="6" md="4" xl="3">
              <!-- Bootstrap 4 -->
              <div class="item item-rounded bg-amethyst-lighter my-4">
                <i class="fa fa-2x fa-tv text-amethyst"></i>
              </div>
              <h4 class="mb-2">Dashboard 2.0</h4>
              <p class="text-muted">
                Get access to realtime monitoring of all the live applicants and respective scores
              </p>
              <!-- END Bootstrap 4 -->
            </b-col>
            <b-col sm="6" md="4" xl="3">
              <!-- Sass -->
              <div class="item item-rounded bg-danger-light my-4">
                <i class="fa fa-2x fa-swatchbook text-danger"></i>
              </div>
              <h4 class="mb-2">Library</h4>
              <p class="text-muted">
                Create assignments from thousands of both practical and theoretical questions all set on auto assist
              </p>
              <!-- END Sass -->
            </b-col>
            <b-col sm="6" md="4" xl="3">
              <!-- FontAwesome 5 -->
              <div class="item item-rounded bg-flat-lighter my-4">
                <i class="fa fa-2x fa-network-wired text-flat"></i>
              </div>
              <h4 class="mb-2">Email Automation</h4>
              <p class="text-muted">
                Setup HR activities on automation by enabling Email automation advance feature
              </p>
              <!-- END FontAwesome 5 -->
            </b-col>
            <b-col sm="6" md="4" xl="3">
              <!-- webpack -->
              <div class="item item-rounded bg-default-lighter my-4">
                <i class="fab fa-2x fa-wpforms text-default"></i>
              </div>
              <h4 class="mb-2">Dynamic Form</h4>
              <p class="text-muted">
                Host your custom form and host url. Let applicants apply for test directly from your website
              </p>
              <!-- END webpack -->
            </b-col>
            <b-col sm="6" md="4" xl="3">
              <!-- User Interface -->
              <div class="item item-rounded bg-modern-lighter my-4">
                <i class="fa fa-2x fa-columns text-modern"></i>
              </div>
              <h4 class="mb-2">User Interface</h4>
              <p class="text-muted">
                Develop and manage your projects through an accompanying graphical user interface.
              </p>
              <!-- END User Interface -->
            </b-col>
            <b-col sm="6" md="4" xl="3">
              <!-- ES6 -->
              <div class="item item-rounded bg-warning-light my-4">
                <i class="fa fa-2x fa-mail-bulk text-warning"></i>
              </div>
              <h4 class="mb-2">Templates</h4>
              <p class="text-muted">
                Write and store email templates and set them for Email Automation
              </p>
              <!-- END ES6 -->
            </b-col>
            <b-col sm="6" md="4" xl="3">
              <!-- Hot Reload -->
              <div class="item item-rounded bg-city-lighter my-4">
                <i class="fab fa-2x fa-cloudsmith text-city"></i>
              </div>
              <h4 class="mb-2">Deploy Assignments</h4>
              <p class="text-muted">
                Create and deploy your custom assignemnts in a minute with easy one-to-one mapping
              </p>
              <!-- END Hot Reload -->
            </b-col>
            <b-col sm="6" md="4" xl="3">
              <!-- Autoprefixer -->
              <div class="item item-rounded bg-smooth-lighter my-4">
                <i class="fa fa-2x fa-user-edit text-smooth"></i>
              </div>
              <h4 class="mb-2">Feedback</h4>
              <p class="text-muted">
                Get notified instantly on any techinical errors reported by applicants from client's end
              </p>
              <!-- END Autoprefixer -->
            </b-col>
            <b-col sm="6" md="4" xl="3">
              <!-- Components -->
              <div class="item item-rounded bg-gray-light my-4">
                <i class="fab fa-2x fa-git-alt text-dark"></i>
              </div>
              <h4 class="mb-2">Form APIs</h4>
              <p class="text-muted">
                Get unique form url and attach with custom website forms to enable submissions from anywhere
              </p>
              <!-- END Components -->
            </b-col>
            <b-col sm="6" md="4" xl="3">
              <!-- Remastered  Design -->
              <div class="item item-rounded bg-info-light my-4">
                <i class="fa fa-2x fa-pen-fancy text-info"></i>
              </div>
              <h4 class="mb-2">Custom Question</h4>
              <p class="text-muted">
                All sections have to option to write, test and submit custom question which adds to library automatically
              </p>
              <!-- END Remastered  Design -->
            </b-col>
            <b-col sm="6" md="4" xl="3">
              <!-- Layout Features -->
              <div class="item item-rounded bg-success-light my-4">
                <i class="fa fa-2x fa-envelope-open-text text-success"></i>
              </div>
              <h4 class="mb-2">Custom Mail</h4>
              <p class="text-muted">
                Access to dedicated dashboard and option to write custom emails directly from admin panel
              </p>
              <!-- END Layout Features -->
            </b-col>
            <b-col sm="6" md="4" xl="3">
              <!-- APIs -->
              <div class="item item-rounded bg-warning-light my-4">
                <i class="fab fa-2x fa-connectdevelop text-warning"></i>
              </div>
              <h4 class="mb-2">Live Code</h4>
              <p class="text-muted">
                Easy interview sessions with Live coding environment synced with applicant and admin panel
              </p>
              <!-- END APIs -->
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
    <!-- END Sophisticated Features -->

    <!-- Stats -->
    <div class="bg-primary">
      <div class="bg-black-75">
        <div class="content content-full content-boxed">
          <div class="py-5 text-center">
            <h2 class="font-w700 mb-3 text-white">
              Get rid of insane limit on applications, <br>We provide <a class="text-primary-light">1000+</a> applications in single plan
            </h2>
            <p class="font-size-lg text-white-50 mb-6 mx-sm-6 mx-lg-9">
              <a class="text-primary-light" href="https://1.envato.market/AVD6j">Einfach</a> is one of the easiest developer hiring environments which has 100+ features bundled in single package
            </p>
            <b-row no-gutters class="mx-lg-8">
              <b-col sm="4" class="p-3">
                <p class="font-size-h1 font-w700 text-white-75 mb-0">
                  4.000+
                </p>
                <p class="font-size-lg text-white-50 mb-0">
                  Purchases
                </p>
              </b-col>
              <b-col sm="4" class="p-3">
                <p class="font-size-h1 font-w700 text-white-75 mb-0">
                  250+
                </p>
                <p class="font-size-lg text-white-50 mb-0">
                  5 Star Ratings
                </p>
              </b-col>
              <b-col sm="4" class="p-3">
                <p class="font-size-h1 font-w700 text-white-75 mb-0">
                  50+
                </p>
                <p class="font-size-lg text-white-50 mb-0">
                  Components
                </p>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </div>
    <!-- END Stats -->

    <!-- Call To Action -->
    <div class="bg-white">
      <div class="content content-full content-boxed">
        <div class="py-5 py-md-8 text-center">
          <h2 class="font-w700 mb-2">
              Start with a <span class="text-success">Free Trial</span>
          </h2>
          <p class="font-size-lg font-w500 text-muted mb-4">
              100+ features bundled in single package accessible from $99 only
          </p>
          <b-button variant="success" class="text-uppercase font-size-sm px-4 py-2 m-1" href="https://buy.stripe.com/4gw8y7erm6lHgNyeUU" target="_blank" v-click-ripple>
            <i class="fa fa-fw fa-shopping-cart font-size-base opacity-50 mr-1"></i> Purchase
          </b-button>
          <b-button variant="primary" class="text-uppercase font-size-sm px-4 py-2 m-1" href="https://einfach.hubspotpagebuilder.eu/einfach-meeting" target="_blank" v-click-ripple>
            <i class="far fa-calendar-alt font-size-base opacity-50 mr-1"></i> Book a Meeting
          </b-button>
        </div>
      </div>
    </div>
    <!-- END Call To Action -->

    <!-- Footer -->
    <footer class="bg-body-light">
      <div class="content content-boxed py-5">
        <b-row class="font-size-sm font-w500">
          <b-col sm="6" order-sm="2" class="py-1 text-center text-sm-right">
            <a class="ml-2 font-w600" href="mailto:support@einfach.in">support@einfach.in</a>
          </b-col>
          <b-col sm="6" order-sm="1" class="py-1 text-center text-sm-left">
            <a class="font-w600" href="#">{{ $store.getters.appName + ' ' + $store.getters.appVersion }}</a> &copy; {{ $store.getters.appCopyright }}
          </b-col>
        </b-row>
      </div>
    </footer>
    <!-- END Footer -->
  </div>
</template>

<style lang="scss" scoped>
// Custom backgrounds only for the hero of this page
.bg-landing-right {
  position: relative;
  z-index: 0;

  > div {
    z-index: 1;
  }

  &::before {
    position: absolute;
    z-index: 0;
    content: '';
  }
}

.bg-landing-right::before {
  bottom: -10%;
  right: -10%;
  width: 440px;
  height: 280px;
  background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%232C4E9B' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.promo-image {
  max-width: 100%;
  height: auto;
  border-radius: .375rem;
  box-shadow: 0 1rem 3rem rgba(108, 117, 125, .2);
}
</style>