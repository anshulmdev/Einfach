<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Popovers" subtitle="Similar to the ones found in iOS.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
          <b-breadcrumb-item active>Popovers</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Default -->
      <base-block rounded title="Default">
        <p class="font-size-sm text-muted">
          Show popovers on hover
        </p>
        <b-row class="items-push text-center">
          <b-col sm="6" xl="3">
            <b-button size="sm" variant="primary" block v-b-popover.hover.nofade.top="'This is example content. You can put a description or more info here.'" title="Top Popover">Top</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button size="sm" variant="primary" block v-b-popover.hover.nofade.right="'This is example content. You can put a description or more info here.'" title="Right Popover">Right</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button size="sm" variant="primary" block v-b-popover.hover.nofade.bottom="'This is example content. You can put a description or more info here.'" title="Bottom Popover">Bottom</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button size="sm" variant="primary" block v-b-popover.hover.nofade.left="'This is example content. You can put a description or more info here.'" title="Left Popover">Left</b-button>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Default -->

      <!-- Click Triggered -->
      <base-block rounded title="Click Triggered">
        <p class="font-size-sm text-muted">
          Show popovers on hover
        </p>
        <b-row class="items-push text-center">
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-popover.click.nofade.top="'This is example content. You can put a description or more info here.'" title="Top Popover">Top</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-popover.click.nofade.right="'This is example content. You can put a description or more info here.'" title="Right Popover">Right</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-popover.click.nofade.bottom="'This is example content. You can put a description or more info here.'" title="Bottom Popover">Bottom</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-popover.click.nofade.left="'This is example content. You can put a description or more info here.'" title="Left Popover">Left</b-button>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Click Triggered -->

      <!-- Animation -->
      <base-block rounded title="Animation">
        <p class="font-size-sm text-muted">
          You can enable a fade animation to your popovers
        </p>
        <b-row class="items-push text-center">
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-popover.hover.top="'This is example content. You can put a description or more info here.'" title="Top Popover">Top</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-popover.hover.right="'This is example content. You can put a description or more info here.'" title="Right Popover">Right</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-popover.hover.bottom="'This is example content. You can put a description or more info here.'" title="Bottom Popover">Bottom</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-popover.hover.left="'This is example content. You can put a description or more info here.'" title="Left Popover">Left</b-button>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Animation -->

      <!-- HTML -->
      <base-block rounded title="HTML">
        <p class="font-size-sm text-muted">
          You can add HTML in your popovers as well
        </p>
        <b-row class="items-push text-center">
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-popover.hover.html.nofade.top="'<img class=\'img-avatar\' src=\'img/avatars/avatar10.jpg\' alt=\'\'>'" title="Popover Title">Top</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-popover.hover.html.nofade.right="'<img class=\'img-avatar\' src=\'img/avatars/avatar10.jpg\' alt=\'\'>'" title="Popover Title">Right</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-popover.hover.html.nofade.bottom="'<img class=\'img-avatar\' src=\'img/avatars/avatar10.jpg\' alt=\'\'>'" title="Popover Title">Bottom</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-popover.hover.html.nofade.left="'<img class=\'img-avatar\' src=\'img/avatars/avatar10.jpg\' alt=\'\'>'" title="Popover Title">Left</b-button>
          </b-col>
        </b-row>
      </base-block>
      <!-- END HTML -->
    </div>
    <!-- END Page Content -->
  </div>
</template>
