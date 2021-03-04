<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Buttons" subtitle="Custom buttons styles to fulfill any design approach.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
          <b-breadcrumb-item active>Button</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Buttons Styles -->
      <h2 class="content-heading">Styles</h2>

      <!-- Default -->
      <base-block rounded title="Default">
        <p class="font-size-sm text-muted">
          The default button style with various colors to choose from. Prefer using 2 or max 3 button color variations in your web project to make it easier and more accesible for your users.
        </p>
        <b-row class="items-push-2x text-center text-sm-left">
          <b-col sm="6" xl="4">
            <b-button variant="primary">Primary</b-button>
            <div class="mt-2">
              <code>variant="primary"</code>
            </div>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="secondary">Secondary</b-button>
            <div class="mt-2">
              <code>variant="secondary"</code>
            </div>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="success">Success</b-button>
            <div class="mt-2">
              <code>variant="success"</code>
            </div>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="info">Info</b-button>
            <div class="mt-2">
              <code>variant="info"</code>
            </div>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="warning">Warning</b-button>
            <div class="mt-2">
              <code>variant="warning"</code>
            </div>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="danger">Danger</b-button>
            <div class="mt-2">
              <code>variant="danger"</code>
            </div>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="dark">Dark</b-button>
            <div class="mt-2">
              <code>variant="dark"</code>
            </div>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="light">Light</b-button>
            <div class="mt-2">
              <code>variant="light"</code>
            </div>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Default -->

      <!-- Alternate -->
      <base-block rounded title="Alternate">
        <p class="font-size-sm text-muted">
          The alternate button style offers a more subtle design style.
        </p>
        <b-row class="items-push-2x text-center text-sm-left">
          <b-col sm="6" xl="4">
            <b-button variant="alt-primary">Primary</b-button>
            <div class="mt-2">
              <code>variant="alt-primary"</code>
            </div>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-secondary">Secondary</b-button>
            <div class="mt-2">
              <code>variant="alt-secondary"</code>
            </div>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-success">Success</b-button>
            <div class="mt-2">
              <code>variant="alt-success"</code>
            </div>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-info">Info</b-button>
            <div class="mt-2">
              <code>variant="alt-info"</code>
            </div>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-warning">Warning</b-button>
            <div class="mt-2">
              <code>variant="alt-warning"</code>
            </div>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-danger">Danger</b-button>
            <div class="mt-2">
              <code>variant="alt-danger"</code>
            </div>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-dark">Dark</b-button>
            <div class="mt-2">
              <code>variant="alt-dark"</code>
            </div>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-light">Light</b-button>
            <div class="mt-2">
              <code>variant="alt-light"</code>
            </div>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Alternate -->

      <!-- Outline -->
      <base-block rounded title="Outline">
        <p class="font-size-sm text-muted">
          Outline styles are also available for all previous color variations
        </p>
        <b-row class="items-push-2x text-center text-sm-left">
          <b-col sm="6" xl="4">
            <b-button variant="outline-primary">Primary</b-button>
            <div class="mt-2">
              <code>variant="primary"</code>
            </div>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-secondary">Secondary</b-button>
            <div class="mt-2">
              <code>variant="outline-secondary"</code>
            </div>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-success">Success</b-button>
            <div class="mt-2">
              <code>variant="outline-success"</code>
            </div>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-info">Info</b-button>
            <div class="mt-2">
              <code>variant="outline-info"</code>
            </div>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-warning">Warning</b-button>
            <div class="mt-2">
              <code>variant="outline-warning"</code>
            </div>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-danger">Danger</b-button>
            <div class="mt-2">
              <code>variant="outline-danger"</code>
            </div>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-dark">Dark</b-button>
            <div class="mt-2">
              <code>variant="outline-dark"</code>
            </div>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-light">Light</b-button>
            <div class="mt-2">
              <code>variant="outline-light"</code>
            </div>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Outline -->
      <!-- END Buttons Styles -->

      <!-- Button Effects -->
      <h2 class="content-heading">Effects</h2>

      <!-- Ripple -->
      <!-- Click Ripple, functionality initialized in directives/click-ripple.js -->
      <base-block rounded title="Ripple">
        <p class="font-size-sm text-muted">
          Inspired by Material design, adding a ripple animation on click is just an attribute away <code>v-click-ripple</code>
        </p>

        <!-- Default -->
        <b-row class="items-push text-center text-sm-left mb-4">
          <b-col sm="6" xl="4">
            <b-button variant="primary" v-click-ripple>Primary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="secondary" v-click-ripple>Secondary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="success" v-click-ripple>Success</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="info" v-click-ripple>Info</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="warning" v-click-ripple>Warning</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="danger" v-click-ripple>Danger</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="dark" v-click-ripple>Dark</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="light" v-click-ripple>Light</b-button>
          </b-col>
        </b-row>
        <!-- END Default -->

        <!-- Alternate -->
        <b-row class="items-push text-center text-sm-left mb-4">
          <b-col sm="6" xl="4">
            <b-button variant="alt-primary" v-click-ripple>Primary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-secondary" v-click-ripple>Secondary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-success" v-click-ripple>Success</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-info" v-click-ripple>Info</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-warning" v-click-ripple>Warning</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-danger" v-click-ripple>Danger</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-dark" v-click-ripple>Dark</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-light" v-click-ripple>Light</b-button>
          </b-col>
        </b-row>
        <!-- END Alternate -->

        <!-- Outline -->
        <b-row class="items-push text-center text-sm-left mb-4">
          <b-col sm="6" xl="4">
            <b-button variant="outline-primary" v-click-ripple>Primary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-secondary" v-click-ripple>Secondary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-success" v-click-ripple>Success</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-info" v-click-ripple>Info</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-warning" v-click-ripple>Warning</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-danger" v-click-ripple>Danger</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-dark" v-click-ripple>Dark</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-light" v-click-ripple>Light</b-button>
          </b-col>
        </b-row>
        <!-- END Outline -->
      </base-block>
      <!-- END Ripple -->
      <!-- END Button Effects -->

      <!-- Button Variations -->
      <h2 class="content-heading">Variations</h2>

      <!-- Small Size -->
      <base-block rounded title="Small Size">
        <p class="font-size-sm text-muted">
          You can use <code>size="sm"</code> to make your buttons larger
        </p>

        <!-- Default -->
        <b-row class="items-push text-center text-sm-left mb-4">
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="primary">Primary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="secondary">Secondary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="success">Success</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="info">Info</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="warning">Warning</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="danger">Danger</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="dark">Dark</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="light">Light</b-button>
          </b-col>
        </b-row>
        <!-- Default -->

        <!-- Alternate -->
        <b-row class="items-push text-center text-sm-left mb-4">
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="alt-primary">Primary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="alt-secondary">Secondary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="alt-success">Success</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="alt-info">Info</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="alt-warning">Warning</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="alt-danger">Danger</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="alt-dark">Dark</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="alt-light">Light</b-button>
          </b-col>
        </b-row>
        <!-- Alternate -->

        <!-- Outline -->
        <b-row class="items-push text-center text-sm-left mb-4">
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="outline-primary">Primary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="outline-secondary">Secondary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="outline-success">Success</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="outline-info">Info</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="outline-warning">Warning</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="outline-danger">Danger</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="outline-dark">Dark</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="sm" variant="outline-light">Light</b-button>
          </b-col>
        </b-row>
        <!-- END Outline -->
      </base-block>
      <!-- END Small Size -->

      <!-- Large Size -->
      <base-block rounded title="Large Size">
        <p class="font-size-sm text-muted">
          You can use <code>size="lg"</code> to make your buttons larger
        </p>

        <!-- Default -->
        <b-row class="items-push text-center text-sm-left mb-4">
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="primary">Primary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="secondary">Secondary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="success">Success</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="info">Info</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="warning">Warning</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="danger">Danger</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="dark">Dark</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="light">Light</b-button>
          </b-col>
        </b-row>
        <!-- END Default -->

        <!-- Alternate -->
        <b-row class="items-push text-center text-sm-left mb-4">
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="alt-primary">Primary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="alt-secondary">Secondary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="alt-success">Success</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="alt-info">Info</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="alt-warning">Warning</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="alt-danger">Danger</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="alt-dark">Dark</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="alt-light">Light</b-button>
          </b-col>
        </b-row>
        <!-- END Alternate -->

        <!-- Outline -->
        <b-row class="items-push text-center text-sm-left mb-4">
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="outline-primary">Primary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="outline-secondary">Secondary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="outline-success">Success</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="outline-info">Info</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="outline-warning">Warning</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="outline-danger">Danger</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="outline-dark">Dark</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button size="lg" variant="outline-light">Light</b-button>
          </b-col>
        </b-row>
        <!-- END Outline -->
      </base-block>
      <!-- END Large Size -->

      <!-- Square -->
      <base-block rounded title="Square">
        <p class="font-size-sm text-muted">
          You can remove border radius from your buttons if you are looking for a sharp look by using the class <code>btn-square</code>
        </p>

        <!-- Default -->
        <b-row class="items-push text-center text-sm-left mb-4">
          <b-col sm="6" xl="4">
            <b-button variant="primary" class="btn-square">Primary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="secondary" class="btn-square">Secondary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="success" class="btn-square">Success</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="info" class="btn-square">Info</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="warning" class="btn-square">Warning</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="danger" class="btn-square">Danger</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="dark" class="btn-square">Dark</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="light" class="btn-square">Light</b-button>
          </b-col>
        </b-row>
        <!-- END Default -->

        <!-- Alternate -->
        <b-row class="items-push text-center text-sm-left mb-4">
          <b-col sm="6" xl="4">
            <b-button variant="alt-primary" class="btn-square">Primary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-secondary" class="btn-square">Secondary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-success" class="btn-square">Success</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-info" class="btn-square">Info</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-warning" class="btn-square">Warning</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-danger" class="btn-square">Danger</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-dark" class="btn-square">Dark</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-light" class="btn-square">Light</b-button>
          </b-col>
        </b-row>
        <!-- END Alternate -->

        <!-- Outline -->
        <b-row class="items-push text-center text-sm-left mb-4">
          <b-col sm="6" xl="4">
            <b-button variant="outline-primary" class="btn-square">Primary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-secondary" class="btn-square">Secondary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-success" class="btn-square">Success</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-info" class="btn-square">Info</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-warning" class="btn-square">Warning</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-danger" class="btn-square">Danger</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-dark" class="btn-square">Dark</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-light" class="btn-square">Light</b-button>
          </b-col>
        </b-row>
        <!-- END Outline -->
      </base-block>
      <!-- END Square -->

      <!-- Rounded -->
      <base-block rounded title="Rounded">
        <p class="font-size-sm text-muted">
          Fully rounded buttons are available for all available button styles by using the class <code>btn-rounded</code>
        </p>

        <!-- Default -->
        <b-row class="items-push text-center text-sm-left mb-4">
          <b-col sm="6" xl="4">
            <b-button variant="primary" class="btn-rounded">Primary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="secondary" class="btn-rounded">Secondary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="success" class="btn-rounded">Success</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="info" class="btn-rounded">Info</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="warning" class="btn-rounded">Warning</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="danger" class="btn-rounded">Danger</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="dark" class="btn-rounded">Dark</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="light" class="btn-rounded">Light</b-button>
          </b-col>
        </b-row>
        <!-- END Default -->

        <!-- Alternate -->
        <b-row class="items-push text-center text-sm-left mb-4">
          <b-col sm="6" xl="4">
            <b-button variant="alt-primary" class="btn-rounded">Primary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-secondary" class="btn-rounded">Secondary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-success" class="btn-rounded">Success</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-info" class="btn-rounded">Info</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-warning" class="btn-rounded">Warning</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-danger" class="btn-rounded">Danger</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-dark" class="btn-rounded">Dark</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-light" class="btn-rounded">Light</b-button>
          </b-col>
        </b-row>
        <!-- END Alternate -->

        <!-- Outline -->
        <b-row class="items-push text-center text-sm-left mb-4">
          <b-col sm="6" xl="4">
            <b-button variant="outline-primary" class="btn-rounded">Primary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-secondary" class="btn-rounded">Secondary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-success" class="btn-rounded">Success</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-info" class="btn-rounded">Info</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-warning" class="btn-rounded">Warning</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-danger" class="btn-rounded">Danger</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-dark" class="btn-rounded">Dark</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-light" class="btn-rounded">Light</b-button>
          </b-col>
        </b-row>
        <!-- END Outline -->
      </base-block>
      <!-- END Rounded -->

      <!-- Disabled -->
      <base-block rounded title="Disabled">
        <p class="font-size-sm text-muted">
          If an action is not available in a specific state of your website/app, you can easily disable your buttons
        </p>

        <!-- Default -->
        <b-row class="items-push text-center text-sm-left mb-4">
          <b-col sm="6" xl="4">
            <b-button variant="primary" disabled>Primary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="secondary" disabled>Secondary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="success" disabled>Success</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="info" disabled>Info</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="warning" disabled>Warning</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="danger" disabled>Danger</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="dark" disabled>Dark</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="light" disabled>Light</b-button>
          </b-col>
        </b-row>
        <!-- END Default -->

        <!-- Alternate -->
        <b-row class="items-push text-center text-sm-left mb-4">
          <b-col sm="6" xl="4">
            <b-button variant="alt-primary" disabled>Primary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-secondary" disabled>Secondary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-success" disabled>Success</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-info" disabled>Info</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-warning" disabled>Warning</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-danger" disabled>Danger</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-dark" disabled>Dark</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="alt-light" disabled>Light</b-button>
          </b-col>
        </b-row>
        <!-- END Alternate -->

        <!-- Outline -->
        <b-row class="items-push text-center text-sm-left mb-4">
          <b-col sm="6" xl="4">
            <b-button variant="outline-primary" disabled>Primary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-secondary" disabled>Secondary</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-success" disabled>Success</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-info" disabled>Info</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-warning" disabled>Warning</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-danger" disabled>Danger</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-dark" disabled>Dark</b-button>
          </b-col>
          <b-col sm="6" xl="4">
            <b-button variant="outline-light" disabled>Light</b-button>
          </b-col>
        </b-row>
        <!-- END Outline -->
      </base-block>

      <!-- Icons -->
      <base-block rounded title="Icons">
        <p class="font-size-sm text-muted">
          You can use any of the <router-link to="/backend/elements/icons">available icons</router-link> in your buttons to visualize its intended action
        </p>

        <!-- Default -->
        <div class="mb-4">
          <b-button variant="success" class="mr-1 mb-3">
            <i class="fa fa-fw fa-plus mr-1"></i> Add User
          </b-button>
          <b-button variant="info" class="mr-1 mb-3">
            <i class="fa fa-fw fa-download mr-1"></i> Download
          </b-button>
          <b-button variant="warning" class="mr-1 mb-3">
            <i class="fa fa-fw fa-exclamation-triangle mr-1"></i> Are you sure?
          </b-button>
          <b-button variant="primary" class="mr-1 mb-3">
            <i class="fa fa-fw fa-upload mr-1"></i> Upload
          </b-button>
          <b-button variant="secondary" class="mr-1 mb-3">
            <i class="fab fa-fw fa-bluetooth-b mr-1"></i> 3 Connections
          </b-button>
          <b-button variant="danger" class="mr-1 mb-3">
            <i class="fa fa-fw fa-times mr-1"></i> Delete
          </b-button>
          <b-button variant="primary" class="mr-1 mb-3">
            <i class="fa fa-fw fa-thumbs-up mr-1"></i> Like
          </b-button>
          <b-button variant="secondary" class="mr-1 mb-3">
            <i class="fa fa-fw fa-play mr-1"></i> Play
          </b-button>
          <b-button variant="dark" class="mr-1 mb-3">
            <i class="fa fa-fw fa-box mr-1"></i> 10 Products
          </b-button>
        </div>
        <!-- END Default -->

        <!-- Alternate -->
        <div class="mb-4">
          <b-button variant="alt-success" class="mr-1 mb-3">
            <i class="fa fa-fw fa-plus mr-1"></i> Add User
          </b-button>
          <b-button variant="alt-info" class="mr-1 mb-3">
            <i class="fa fa-fw fa-download mr-1"></i> Download
          </b-button>
          <b-button variant="alt-warning" class="mr-1 mb-3">
            <i class="fa fa-fw fa-exclamation-triangle mr-1"></i> Are you sure?
          </b-button>
          <b-button variant="alt-primary" class="mr-1 mb-3">
            <i class="fa fa-fw fa-upload mr-1"></i> Upload
          </b-button>
          <b-button variant="alt-secondary" class="mr-1 mb-3">
            <i class="fab fa-fw fa-bluetooth-b mr-1"></i> 3 Connections
          </b-button>
          <b-button variant="alt-danger" class="mr-1 mb-3">
            <i class="fa fa-fw fa-times mr-1"></i> Delete
          </b-button>
          <b-button variant="alt-primary" class="mr-1 mb-3">
            <i class="fa fa-fw fa-thumbs-up mr-1"></i> Like
          </b-button>
          <b-button variant="alt-secondary" class="mr-1 mb-3">
            <i class="fa fa-fw fa-play mr-1"></i> Play
          </b-button>
          <b-button variant="alt-dark" class="mr-1 mb-3">
            <i class="fa fa-fw fa-box mr-1"></i> 10 Products
          </b-button>
        </div>
        <!-- END Alternate -->

        <!-- Outline -->
        <div class="mb-4">
          <b-button variant="outline-success" class="mr-1 mb-3">
            <i class="fa fa-fw fa-plus mr-1"></i> Add User
          </b-button>
          <b-button variant="outline-info" class="mr-1 mb-3">
            <i class="fa fa-fw fa-download mr-1"></i> Download
          </b-button>
          <b-button variant="outline-warning" class="mr-1 mb-3">
            <i class="fa fa-fw fa-exclamation-triangle mr-1"></i> Are you sure?
          </b-button>
          <b-button variant="outline-primary" class="mr-1 mb-3">
            <i class="fa fa-fw fa-upload mr-1"></i> Upload
          </b-button>
          <b-button variant="outline-secondary" class="mr-1 mb-3">
            <i class="fab fa-fw fa-bluetooth-b mr-1"></i> 3 Connections
          </b-button>
          <b-button variant="outline-danger" class="mr-1 mb-3">
            <i class="fa fa-fw fa-times mr-1"></i> Delete
          </b-button>
          <b-button variant="outline-primary" class="mr-1 mb-3">
            <i class="fa fa-fw fa-thumbs-up mr-1"></i> Like
          </b-button>
          <b-button variant="outline-secondary" class="mr-1 mb-3">
            <i class="fa fa-fw fa-play mr-1"></i> Play
          </b-button>
          <b-button variant="outline-dark" class="mr-1 mb-3">
            <i class="fa fa-fw fa-box mr-1"></i> 10 Products
          </b-button>
        </div>
        <!-- END Outline -->
      </base-block>

      <!-- Be Creative -->
      <base-block rounded title="Be Creative">
        <p class="font-size-sm text-muted">
          Mix any of the available classes to create the button style you want to use in your project
        </p>
        <b-button size="lg" variant="secondary" class="btn-square mr-1 mb-3">
          <i class="fa fa-fw fa-wifi mr-1"></i> Wifi Available
        </b-button>
        <b-button variant="alt-danger" class="btn-rounded mr-1 mb-3">
          <i class="fa fa-fw fa-times mr-1"></i> Remove
        </b-button>
        <b-button variant="success" class="mr-1 mb-3">
          <i class="fa fa-fw fa-check"></i>
        </b-button>
        <b-button size="sm" variant="warning" class="mr-1 mb-3">
          <i class="fa fa-fw fa-exclamation-circle"></i>
        </b-button>
        <b-button size="lg" variant="outline-primary" class="mr-1 mb-3">
          <i class="fab fa-fw fa-instagram mr-1"></i> Post your image
        </b-button>
        <b-button variant="success" class="btn-rounded mr-1 mb-3">
          <i class="fa fa-fw fa-pencil-alt"></i>
        </b-button>
        <b-button size="lg" variant="secondary" class="mr-1 mb-3">
          <i class="fab fa-fw fa-youtube mr-1"></i> YouTube
        </b-button>
        <b-button size="sm" variant="outline-warning" class="btn-square mr-1 mb-3">
          <i class="far fa-fw fa-envelope mr-1"></i> Messages
        </b-button>
        <b-button size="sm" variant="dark" class="mr-1 mb-3">
          <i class="fab fa-fw fa-dribbble mr-1"></i> Dribbble
        </b-button>
        <b-button size="sm" variant="primary" class="mr-1 mb-3">
          <i class="fa fa-fw fa-archive mr-1"></i> Archive
        </b-button>
        <b-button size="sm" variant="secondary" class="mr-1 mb-3">
          <i class="fa fa-fw fa-wrench mr-1"></i> Preferences
        </b-button>
        <b-button size="lg" variant="light" class="btn-square mr-1 mb-3">
          <i class="fa fa-fw fa-cog mr-1"></i> Options
        </b-button>
        <b-button size="lg" variant="alt-warning" class="mr-1 mb-3">
          <i class="fab fa-fw fa-instagram mr-1"></i> Instagram
        </b-button>
        <b-button size="sm" variant="alt-primary" class="mr-1 mb-3">
          <i class="fa fa-fw fa-rocket mr-1"></i> Test
        </b-button>
        <b-button size="sm" variant="outline-dark" class="btn-rounded mr-1 mb-3">
          <i class="fa fa-fw fa-image mr-1"></i> Picture
        </b-button>
        <b-button size="lg" variant="warning" class="mr-1 mb-3">
          <i class="fa fa-fw fa-tint mr-1"></i> Themes
        </b-button>
        <b-button size="sm" variant="primary" class="mr-1 mb-3">
          <i class="fa fa-fw fa-arrow-down mr-1"></i> Down
        </b-button>
        <b-button size="lg" variant="alt-success" class="btn-rounded px-4 mr-1 mb-3">
          <i class="si si-rocket mr-1"></i> Launch Product
        </b-button>
        <b-button size="sm" variant="info" class="btn-square mr-1 mb-3">
          <i class="si si-chemistry mr-1"></i> Lab
        </b-button>
      </base-block>
      <!-- END Be Creative -->
      <!-- END Button Variations -->
    </div>
    <!-- END Page Content -->
  </div>
</template>
