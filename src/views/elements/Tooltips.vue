<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Tooltips" subtitle="Attach optional info to an element.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
          <b-breadcrumb-item active>Tooltips</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Default -->
      <base-block rounded title="Default">
        <p class="font-size-sm text-muted">
          Show tooltips on hover
        </p>
        <b-row class="items-push text-center">
          <b-col sm="6" xl="3">
            <b-button variant="primary" block v-b-tooltip.hover.nofade.top="'Top Tooltip'">Top</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button variant="primary" block v-b-tooltip.hover.nofade.right="'Right Tooltip'">Right</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button variant="primary" block v-b-tooltip.hover.nofade.bottom="'Bottom Tooltip'">Bottom</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button variant="primary" block v-b-tooltip.hover.nofade.left="'Left Tooltip'">Left</b-button>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Default -->

      <!-- Click Triggered -->
      <base-block rounded title="Click Triggered">
        <p class="font-size-sm text-muted">
          Show tooltips on hover
        </p>
        <b-row class="items-push text-center">
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-tooltip.click.nofade.top="'Top Tooltip'">Top</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-tooltip.click.nofade.right="'Right Tooltip'">Right</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-tooltip.click.nofade.bottom="'Bottom Tooltip'">Bottom</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-tooltip.click.nofade.left="'Left Tooltip'">Left</b-button>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Click Triggered -->

      <!-- Animation -->
      <base-block rounded title="Animation">
        <p class="font-size-sm text-muted">
          You can enable a fade animation to your tooltips
        </p>
        <b-row class="items-push text-center">
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-tooltip.hover.top="'Top Tooltip'">Top</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-tooltip.hover.right="'Right Tooltip'">Right</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-tooltip.hover.bottom="'Bottom Tooltip'">Bottom</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-tooltip.hover.left="'Left Tooltip'">Left</b-button>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Animation -->

      <!-- HTML -->
      <base-block rounded title="HTML">
        <p class="font-size-sm text-muted">
          You can add HTML in your tooltips as well
        </p>
        <b-row class="items-push text-center">
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-tooltip.hover.html.nofade.top="'<img class=\'img-avatar\' src=\'img/avatars/avatar10.jpg\' alt=\'\'>'">Top</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-tooltip.hover.html.nofade.right="'<img class=\'img-avatar\' src=\'img/avatars/avatar10.jpg\' alt=\'\'>'">Right</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-tooltip.hover.html.nofade.bottom="'<img class=\'img-avatar\' src=\'img/avatars/avatar10.jpg\' alt=\'\'>'">Bottom</b-button>
          </b-col>
          <b-col sm="6" xl="3">
            <b-button variant="alt-primary" block v-b-tooltip.hover.html.nofade.left="'<img class=\'img-avatar\' src=\'img/avatars/avatar10.jpg\' alt=\'\'>'">Left</b-button>
          </b-col>
        </b-row>
      </base-block>
      <!-- END HTML -->
    </div>
    <!-- END Page Content -->
  </div>
</template>
