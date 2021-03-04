<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Ribbons" subtitle="Easily add cool ribbons to your blocks.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
          <b-breadcrumb-item active>Ribbons</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Simple Ribbon -->
      <h2 class="content-heading">Simple Ribbon</h2>
      <b-row>
        <b-col md="6" xl="3">
          <!-- Default Position Primary -->
          <base-block rounded ribbon="$28">
            <div class="text-center py-4 push">
              <p>
                <i class="fab fa-3x fa-html5 text-gray"></i>
              </p>
              <h4 class="mb-0">Learn HTML5</h4>
            </div>
          </base-block>
          <!-- END Default Position Primary -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Bottom Right Primary -->
          <base-block rounded ribbon="$28" ribbon-bottom>
            <div class="text-center py-4 push">
              <p>
                <i class="fab fa-3x fa-html5 text-gray"></i>
              </p>
              <h4 class="mb-0">Learn HTML5</h4>
            </div>
          </base-block>
          <!-- END Bottom Right Primary -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Bottom Left Primary -->
          <base-block rounded ribbon="$28" ribbon-bottom ribbon-left>
            <div class="text-center py-4 push">
              <p>
                <i class="fab fa-3x fa-html5 text-gray"></i>
              </p>
              <h4 class="mb-0">Learn HTML5</h4>
            </div>
          </base-block>
          <!-- END Bottom Left Primary -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Top Left Primary -->
          <base-block rounded ribbon="$28" ribbon-left>
            <div class="text-center py-4 push">
              <p>
                <i class="fab fa-3x fa-html5 text-gray"></i>
              </p>
              <h4 class="mb-0">Learn HTML5</h4>
            </div>
          </base-block>
          <!-- END Top Left Primary -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Bottom Right Success -->
          <base-block rounded ribbon="$32" ribbon-variant="success">
            <div class="text-center py-4 push">
              <p>
                <i class="fab fa-3x fa-css3 text-gray"></i>
              </p>
              <h4 class="mb-0">Discover CSS3</h4>
            </div>
          </base-block>
          <!-- END Bottom Right Success -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Default Position Info -->
          <base-block rounded ribbon="$32" ribbon-variant="info">
            <div class="text-center py-4 push">
              <p>
                <i class="fab fa-3x fa-css3 text-gray"></i>
              </p>
              <h4 class="mb-0">Discover CSS3</h4>
            </div>
          </base-block>
          <!-- END Default Position Info -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Bottom Left Warning -->
          <base-block rounded ribbon="$32" ribbon-variant="warning">
            <div class="text-center py-4 push">
              <p>
                <i class="fab fa-3x fa-css3 text-gray"></i>
              </p>
              <h4 class="mb-0">Discover CSS3</h4>
            </div>
          </base-block>
          <!-- END Bottom Left Warning -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Top Left Primary Danger -->
          <base-block rounded ribbon="$32" ribbon-variant="danger">
            <div class="text-center py-4 push">
              <p>
                <i class="fab fa-3x fa-css3 text-gray"></i>
              </p>
              <h4 class="mb-0">Discover CSS3</h4>
            </div>
          </base-block>
          <!-- END Top Left Primary Danger -->
        </b-col>
        <b-col md="6">
          <!-- Glass on Background Color -->
          <base-block rounded class="bg-primary" ribbon ribbon-variant="glass">
            <template #ribbon>
              <i class="fa fa-check mr-1"></i> Crystal
            </template>
            <div class="text-center py-6 push">
              <h4 class="text-white mb-0">Awesome Color</h4>
            </div>
          </base-block>
          <!-- END Glass on Background Color -->
        </b-col>
        <b-col md="6">
          <!-- Glass on Background Image -->
          <base-background image="/img/photos/photo25.jpg">
            <base-block rounded class="bg-black-50" ribbon ribbon-variant="glass">
              <template #ribbon>
                <i class="fa fa-check"></i>
              </template>
              <div class="text-center py-6 push">
                <h4 class="font-w600 text-white mb-0">Awesome Image</h4>
              </div>
            </base-block>
          </base-background>
          <!-- END Glass on Background Image -->
        </b-col>
      </b-row>
      <!-- END Simple Ribbon -->

      <!-- Bookmark Ribbon -->
      <h2 class="content-heading">Bookmark Ribbon</h2>
      <b-row>
        <b-col md="6" xl="3">
          <!-- Default Position -->
          <base-block rounded ribbon ribbon-bookmark>
            <template #ribbon>
              <i class="far fa-heart"></i>
            </template>
            <div class="text-center py-4 push">
              <p>
                <i class="fa fa-3x fa-cog text-gray"></i>
              </p>
              <h4 class="mb-0">Settings</h4>
            </div>
          </base-block>
          <!-- END Default Position -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Bottom Right -->
          <base-block rounded ribbon ribbon-bottom ribbon-bookmark>
            <template #ribbon>
              <i class="far fa-heart"></i>
            </template>
            <div class="text-center py-4 push">
              <p>
                <i class="fa fa-3x fa-cog text-gray"></i>
              </p>
              <h4 class="mb-0">Settings</h4>
            </div>
          </base-block>
          <!-- END Bottom Right -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Bottom Left -->
          <base-block rounded ribbon ribbon-bottom ribbon-left ribbon-bookmark>
            <template #ribbon>
              <i class="far fa-heart"></i>
            </template>
            <div class="text-center py-4 push">
              <p>
                <i class="fa fa-3x fa-cog text-gray"></i>
              </p>
              <h4 class="mb-0">Settings</h4>
            </div>
          </base-block>
          <!-- END Bottom Left -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Top Left -->
          <base-block rounded ribbon ribbon-left ribbon-bookmark>
            <template #ribbon>
              <i class="far fa-heart"></i>
            </template>
            <div class="text-center py-4 push">
              <p>
                <i class="fa fa-3x fa-cog text-gray"></i>
              </p>
              <h4 class="mb-0">Settings</h4>
            </div>
          </base-block>
          <!-- END Top Left -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Success Color -->
          <base-block rounded ribbon ribbon-bookmark ribbon-variant="success">
            <template #ribbon>
              <i class="far fa-heart"></i>
            </template>
            <div class="text-center py-4 push">
              <p>
                <i class="fa fa-3x fa-wrench text-gray"></i>
              </p>
              <h4 class="mb-0">Options</h4>
            </div>
          </base-block>
          <!-- END Success Color -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Info Color -->
          <base-block rounded ribbon ribbon-bookmark ribbon-variant="info">
            <template #ribbon>
              <i class="far fa-heart"></i>
            </template>
            <div class="text-center py-4 push">
              <p>
                <i class="fa fa-3x fa-wrench text-gray"></i>
              </p>
              <h4 class="mb-0">Options</h4>
            </div>
          </base-block>
          <!-- END Info Color -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Warning Color -->
          <base-block rounded ribbon ribbon-bookmark ribbon-variant="warning">
            <template #ribbon>
              <i class="far fa-heart"></i>
            </template>
            <div class="text-center py-4 push">
              <p>
                <i class="fa fa-3x fa-wrench text-gray"></i>
              </p>
              <h4 class="mb-0">Options</h4>
            </div>
          </base-block>
          <!-- END Warning Color -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Danger Color -->
          <base-block rounded ribbon ribbon-bookmark ribbon-variant="danger">
            <template #ribbon>
              <i class="far fa-heart"></i>
            </template>
            <div class="text-center py-4 push">
              <p>
                <i class="fa fa-3x fa-wrench text-gray"></i>
              </p>
              <h4 class="mb-0">Options</h4>
            </div>
          </base-block>
          <!-- END Danger Color -->
        </b-col>
        <b-col md="6">
          <!-- Glass on Background Color -->
          <base-block rounded class="bg-primary" ribbon ribbon-bookmark ribbon-variant="glass">
            <template #ribbon>
              <i class="fa fa-check mr-1"></i> Crystal
            </template>
            <div class="text-center py-6 push">
              <h4 class="text-white mb-0">Awesome Color</h4>
            </div>
          </base-block>
          <!-- END Glass on Background Color -->
        </b-col>
        <b-col md="6">
          <!-- Glass on Background Image -->
          <base-background image="/img/photos/photo25.jpg">
            <base-block rounded class="bg-black-50" ribbon ribbon-bookmark ribbon-variant="glass">
              <template #ribbon>
                <i class="fa fa-check"></i>
              </template>
              <div class="text-center py-6 push">
                <h4 class="font-w600 text-white mb-0">Awesome Image</h4>
              </div>
            </base-block>
          </base-background>
          <!-- END Glass on Background Image -->
        </b-col>
      </b-row>
      <!-- END Bookmark Ribbon -->

      <!-- Modern Ribbon -->
      <h2 class="content-heading">Modern Ribbon</h2>
      <b-row>
        <b-col md="6" xl="3">
          <!-- Default Position -->
          <base-block rounded ribbon ribbon-modern>
            <template #ribbon>
              <i class="far fa-heart"></i>
            </template>
            <div class="text-center py-4 push">
              <p>
                <i class="far fa-3x fa-copy text-gray"></i>
              </p>
              <h4 class="mb-0">Files</h4>
            </div>
          </base-block>
          <!-- END Default Position -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Bottom Right -->
          <base-block rounded ribbon ribbon-bottom ribbon-modern>
            <template #ribbon>
              <i class="far fa-heart"></i>
            </template>
            <div class="text-center py-4 push">
              <p>
                <i class="far fa-3x fa-copy text-gray"></i>
              </p>
              <h4 class="mb-0">Files</h4>
            </div>
          </base-block>
          <!-- END Bottom Right -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Bottom Left -->
          <base-block rounded ribbon ribbon-bottom ribbon-left ribbon-modern>
            <template #ribbon>
              <i class="far fa-heart"></i>
            </template>
            <div class="text-center py-4 push">
              <p>
                <i class="far fa-3x fa-copy text-gray"></i>
              </p>
              <h4 class="mb-0">Files</h4>
            </div>
          </base-block>
          <!-- END Bottom Left -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Top Left -->
          <base-block rounded ribbon ribbon-left ribbon-modern>
            <template #ribbon>
              <i class="far fa-heart"></i>
            </template>
            <div class="text-center py-4 push">
              <p>
                <i class="far fa-3x fa-copy text-gray"></i>
              </p>
              <h4 class="mb-0">Files</h4>
            </div>
          </base-block>
          <!-- END Top Left -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Success Color -->
          <base-block rounded ribbon ribbon-modern ribbon-variant="success">
            <template #ribbon>
              <i class="fa fa-fw fa-heart"></i>
            </template>
            <div class="text-center py-4 push">
              <p>
                <i class="far fa-3x fa-image text-gray"></i>
              </p>
              <h4 class="mb-0">Photos</h4>
            </div>
          </base-block>
          <!-- END Success Color -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Info Color -->
          <base-block rounded ribbon ribbon-modern ribbon-variant="info">
            <template #ribbon>
              <i class="fa fa-fw fa-heart"></i>
            </template>
            <div class="text-center py-4 push">
              <p>
                <i class="far fa-3x fa-image text-gray"></i>
              </p>
              <h4 class="mb-0">Photos</h4>
            </div>
          </base-block>
          <!-- END Info Color -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Warning Color -->
          <base-block rounded ribbon ribbon-modern ribbon-variant="warning">
            <template #ribbon>
              <i class="fa fa-fw fa-heart"></i>
            </template>
            <div class="text-center py-4 push">
              <p>
                <i class="far fa-3x fa-image text-gray"></i>
              </p>
              <h4 class="mb-0">Photos</h4>
            </div>
          </base-block>
          <!-- END Warning Color -->
        </b-col>
        <b-col md="6" xl="3">
          <!-- Danger Color -->
          <base-block rounded ribbon ribbon-modern ribbon-variant="danger">
            <template #ribbon>
              <i class="fa fa-fw fa-heart"></i>
            </template>
            <div class="text-center py-4 push">
              <p>
                <i class="far fa-3x fa-image text-gray"></i>
              </p>
              <h4 class="mb-0">Photos</h4>
            </div>
          </base-block>
          <!-- END Danger Color -->
        </b-col>
        <b-col md="6">
          <!-- Glass on Background Color -->
          <base-block rounded class="bg-primary" ribbon ribbon-modern ribbon-variant="glass">
            <template #ribbon>
              <i class="fa fa-check mr-1"></i> Crystal
            </template>
            <div class="text-center py-6 push">
              <h4 class="text-white mb-0">Awesome Color</h4>
            </div>
          </base-block>
          <!-- END Glass on Background Color -->
        </b-col>
        <b-col md="6">
          <!-- Glass on Background Image -->
          <base-background image="/img/photos/photo25.jpg">
            <base-block rounded class="bg-black-50" ribbon ribbon-bottom ribbon-modern ribbon-variant="glass">
              <template #ribbon>
                <i class="fa fa-check"></i>
              </template>
              <div class="text-center py-6 push">
                <h4 class="font-w600 text-white mb-0">Awesome Image</h4>
              </div>
            </base-block>
          </base-background>
          <!-- END Glass on Background Image -->
        </b-col>
      </b-row>
      <!-- END Modern Ribbon -->
    </div>
    <!-- END Page Content -->
  </div>
</template>
