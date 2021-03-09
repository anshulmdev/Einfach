<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="FAQ" subtitle="Check out answers to the most common questions.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Generic</b-breadcrumb-item>
          <b-breadcrumb-item active>FAQ</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content content-boxed">
      <!-- Frequently Asked Questions -->
      <base-block rounded content-full>
        <div class="p-sm-4 p-xl-7">
          <!-- Introduction -->
          <h2 class="h3">
            <strong>1.</strong> Introduction
          </h2>
          <div class="mb-5" role="tablist">
            <base-block rounded bordered header-bg class="mb-1">
              <template #header>
                <a class="text-muted" href="javascript:void(0)" v-b-toggle.faq1-q1>Welcome to our service!</a>
              </template>
              <template #content>
                <b-collapse id="faq1-q1" visible accordion="faq1" role="tabpanel">
                  <div class="block-content">
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                    </p>
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                    </p>
                  </div>
                </b-collapse>
              </template>
            </base-block>
            <base-block rounded bordered header-bg class="mb-1">
              <template #header>
                <a class="text-muted" href="javascript:void(0)" v-b-toggle.faq1-q2>Who are we?</a>
              </template>
              <template #content>
                <b-collapse id="faq1-q2" visible accordion="faq1" role="tabpanel">
                  <div class="block-content">
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                    </p>
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                    </p>
                  </div>
                </b-collapse>
              </template>
            </base-block>
            <base-block rounded bordered header-bg class="mb-1">
              <template #header>
                <a class="text-muted" href="javascript:void(0)" v-b-toggle.faq1-q3>What are our values?</a>
              </template>
              <template #content>
                <b-collapse id="faq1-q3" visible accordion="faq1" role="tabpanel">
                  <div class="block-content">
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                    </p>
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                    </p>
                  </div>
                </b-collapse>
              </template>
            </base-block>
          </div>
          <!-- END Introduction -->

          <!-- Functionality -->
          <h2 class="h3">
            <strong>2.</strong> Functionality
          </h2>
          <div class="mb-5" role="tablist">
            <base-block rounded bordered header-bg class="mb-1">
              <template #header>
                <a class="text-muted" href="javascript:void(0)" v-b-toggle.faq2-q1>What are the key features?</a>
              </template>
              <template #content>
                <b-collapse id="faq2-q1" visible accordion="faq2" role="tabpanel">
                  <div class="block-content">
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                    </p>
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                    </p>
                  </div>
                </b-collapse>
              </template>
            </base-block>
            <base-block rounded bordered header-bg class="mb-1">
              <template #header>
                <a class="text-muted" href="javascript:void(0)" v-b-toggle.faq2-q2>Does your App support mobile devices?</a>
              </template>
              <template #content>
                <b-collapse id="faq2-q2" visible accordion="faq2" role="tabpanel">
                  <div class="block-content">
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                    </p>
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                    </p>
                  </div>
                </b-collapse>
              </template>
            </base-block>
            <base-block rounded bordered header-bg class="mb-1">
              <template #header>
                <a class="text-muted" href="javascript:void(0)" v-b-toggle.faq2-q3>Why should I choose your service?</a>
              </template>
              <template #content>
                <b-collapse id="faq2-q3" visible accordion="faq2" role="tabpanel">
                  <div class="block-content">
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                    </p>
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                    </p>
                  </div>
                </b-collapse>
              </template>
            </base-block>
            <base-block rounded bordered header-bg class="mb-1">
              <template #header>
                <a class="text-muted" href="javascript:void(0)" v-b-toggle.faq2-q4>Is my data secure?</a>
              </template>
              <template #content>
                <b-collapse id="faq2-q4" visible accordion="faq2" role="tabpanel">
                  <div class="block-content">
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                    </p>
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                    </p>
                  </div>
                </b-collapse>
              </template>
            </base-block>
          </div>
          <!-- END Functionality -->

          <!-- Payments -->
          <h2 class="h3">
            <strong>3.</strong> Payments
          </h2>
          <div role="tablist">
            <base-block rounded bordered header-bg class="mb-1">
              <template #header>
                <a class="text-muted" href="javascript:void(0)" v-b-toggle.faq3-q1>Is there any free plan?</a>
              </template>
              <template #content>
                <b-collapse id="faq3-q1" visible accordion="faq3" role="tabpanel">
                  <div class="block-content">
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                    </p>
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                    </p>
                  </div>
                </b-collapse>
              </template>
            </base-block>
            <base-block rounded bordered header-bg class="mb-1">
              <template #header>
                <a class="text-muted" href="javascript:void(0)" v-b-toggle.faq3-q2>What are the available payment options?</a>
              </template>
              <template #content>
                <b-collapse id="faq3-q2" visible accordion="faq3" role="tabpanel">
                  <div class="block-content">
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                    </p>
                    <p>
                      Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                    </p>
                  </div>
                </b-collapse>
              </template>
            </base-block>
          </div>
          <!-- END Payments -->
        </div>
      </base-block>
      <!-- END Frequently Asked Questions -->
    </div>
    <!-- END Page Content -->
  </div>
</template>
