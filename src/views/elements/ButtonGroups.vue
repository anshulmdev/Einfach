<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Button Groups" subtitle="Group a series of buttons together on a single line.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
          <b-breadcrumb-item active>Button Groups</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Button Groups -->
      <h2 class="content-heading">Groups</h2>

      <!-- Horizontal -->
      <base-block rounded title="Horizontal">
        <p class="font-size-sm text-muted">
          Group a series of buttons together on a single line with the button group
        </p>
        <b-row class="items-push">
          <b-col sm="6" xl="4">
            <!-- Default Style -->
            <div class="mb-3">
              <b-button-group>
                <b-button variant="primary">Left</b-button>
                <b-button variant="primary">Middle</b-button>
                <b-button variant="primary">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group>
                <b-button variant="secondary">Left</b-button>
                <b-button variant="secondary">Middle</b-button>
                <b-button variant="secondary">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group>
                <b-button variant="info">Left</b-button>
                <b-button variant="info">Middle</b-button>
                <b-button variant="info">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group>
                <b-button variant="success">Left</b-button>
                <b-button variant="success">Middle</b-button>
                <b-button variant="success">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group>
                <b-button variant="warning">Left</b-button>
                <b-button variant="warning">Middle</b-button>
                <b-button variant="warning">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group>
                <b-button variant="danger">Left</b-button>
                <b-button variant="danger">Middle</b-button>
                <b-button variant="danger">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group>
                <b-button variant="dark">Left</b-button>
                <b-button variant="dark">Middle</b-button>
                <b-button variant="dark">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group>
                <b-button variant="light">Left</b-button>
                <b-button variant="light">Middle</b-button>
                <b-button variant="light">Right</b-button>
              </b-button-group>
            </div>
            <!-- END Default Style -->
          </b-col>
          <b-col sm="6" xl="4">
            <!-- Alternate Style -->
            <div class="mb-3">
              <b-button-group>
                <b-button variant="alt-primary">Left</b-button>
                <b-button variant="alt-primary">Middle</b-button>
                <b-button variant="alt-primary">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group>
                <b-button variant="alt-secondary">Left</b-button>
                <b-button variant="alt-secondary">Middle</b-button>
                <b-button variant="alt-secondary">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group>
                <b-button variant="alt-info">Left</b-button>
                <b-button variant="alt-info">Middle</b-button>
                <b-button variant="alt-info">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group>
                <b-button variant="alt-success">Left</b-button>
                <b-button variant="alt-success">Middle</b-button>
                <b-button variant="alt-success">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group>
                <b-button variant="alt-warning">Left</b-button>
                <b-button variant="alt-warning">Middle</b-button>
                <b-button variant="alt-warning">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group>
                <b-button variant="alt-danger">Left</b-button>
                <b-button variant="alt-danger">Middle</b-button>
                <b-button variant="alt-danger">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group>
                <b-button variant="alt-dark">Left</b-button>
                <b-button variant="alt-dark">Middle</b-button>
                <b-button variant="alt-dark">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group>
                <b-button variant="alt-light">Left</b-button>
                <b-button variant="alt-light">Middle</b-button>
                <b-button variant="alt-light">Right</b-button>
              </b-button-group>
            </div>
            <!-- Alternate Style -->
          </b-col>
          <b-col sm="6" xl="4">
            <!-- Outline Style -->
            <div class="mb-3">
              <b-button-group>
                <b-button variant="outline-primary">Left</b-button>
                <b-button variant="outline-primary">Middle</b-button>
                <b-button variant="outline-primary">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group>
                <b-button variant="outline-secondary">Left</b-button>
                <b-button variant="outline-secondary">Middle</b-button>
                <b-button variant="outline-secondary">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group>
                <b-button variant="outline-info">Left</b-button>
                <b-button variant="outline-info">Middle</b-button>
                <b-button variant="outline-info">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group>
                <b-button variant="outline-success">Left</b-button>
                <b-button variant="outline-success">Middle</b-button>
                <b-button variant="outline-success">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group>
                <b-button variant="outline-warning">Left</b-button>
                <b-button variant="outline-warning">Middle</b-button>
                <b-button variant="outline-warning">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group>
                <b-button variant="outline-danger">Left</b-button>
                <b-button variant="outline-danger">Middle</b-button>
                <b-button variant="outline-danger">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group>
                <b-button variant="outline-dark">Left</b-button>
                <b-button variant="outline-dark">Middle</b-button>
                <b-button variant="outline-dark">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group>
                <b-button variant="outline-light">Left</b-button>
                <b-button variant="outline-light">Middle</b-button>
                <b-button variant="outline-light">Right</b-button>
              </b-button-group>
            </div>
            <!-- Outline Style -->
          </b-col>
        </b-row>
      </base-block>
      <!-- END Horizontal -->

      <!-- Sizes -->
      <base-block rounded title="Sizes">
        <p class="font-size-sm text-muted">
          You can easily have a small or large size for all button group variations
        </p>
        <b-row class="items-push">
          <b-col sm="6" xl="4">
            <!-- Default Style -->
            <div class="mb-3">
              <b-button-group size="sm">
                <b-button variant="primary">Left</b-button>
                <b-button variant="primary">Middle</b-button>
                <b-button variant="primary">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group size="lg">
                <b-button variant="primary">Left</b-button>
                <b-button variant="primary">Middle</b-button>
                <b-button variant="primary">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group size="sm" vertical>
                <b-button variant="primary">Left</b-button>
                <b-button variant="primary">Middle</b-button>
                <b-button variant="primary">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group size="lg" vertical>
                <b-button variant="primary">Left</b-button>
                <b-button variant="primary">Middle</b-button>
                <b-button variant="primary">Right</b-button>
              </b-button-group>
            </div>
            <!-- END Default Style -->
          </b-col>
          <b-col sm="6" xl="4">
            <!-- Alternate Style -->
            <div class="mb-3">
              <b-button-group size="sm">
                <b-button variant="alt-secondary">Left</b-button>
                <b-button variant="alt-secondary">Middle</b-button>
                <b-button variant="alt-secondary">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group size="lg">
                <b-button variant="alt-secondary">Left</b-button>
                <b-button variant="alt-secondary">Middle</b-button>
                <b-button variant="alt-secondary">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group size="sm" vertical>
                <b-button variant="alt-secondary">Left</b-button>
                <b-button variant="alt-secondary">Middle</b-button>
                <b-button variant="alt-secondary">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group size="lg" vertical>
                <b-button variant="alt-secondary">Left</b-button>
                <b-button variant="alt-secondary">Middle</b-button>
                <b-button variant="alt-secondary">Right</b-button>
              </b-button-group>
            </div>
            <!-- END Alternate Style -->
          </b-col>
          <b-col sm="6" xl="4">
            <!-- Outline Style -->
            <div class="mb-3">
              <b-button-group size="sm">
                <b-button variant="outline-secondary">Left</b-button>
                <b-button variant="outline-secondary">Middle</b-button>
                <b-button variant="outline-secondary">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group size="lg">
                <b-button variant="outline-secondary">Left</b-button>
                <b-button variant="outline-secondary">Middle</b-button>
                <b-button variant="outline-secondary">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group size="sm" vertical>
                <b-button variant="outline-secondary">Left</b-button>
                <b-button variant="outline-secondary">Middle</b-button>
                <b-button variant="outline-secondary">Right</b-button>
              </b-button-group>
            </div>
            <div class="mb-3">
              <b-button-group size="lg" vertical>
                <b-button variant="outline-secondary">Left</b-button>
                <b-button variant="outline-secondary">Middle</b-button>
                <b-button variant="outline-secondary">Right</b-button>
              </b-button-group>
            </div>
            <!-- END Outline Style -->
          </b-col>
        </b-row>
      </base-block>
      <!-- END Sizes -->

      <!-- Vertical -->
      <base-block rounded title="Vertical">
        <p class="font-size-sm text-muted">
          Make a set of buttons appear vertically stacked rather than horizontally.
        </p>
        <b-row class="items-push">
          <b-col sm="6" xl="4">
            <!-- Default Style -->
            <b-button-group vertical class="push mr-3">
              <b-button variant="primary">Left</b-button>
              <b-button variant="primary">Middle</b-button>
              <b-button variant="primary">Right</b-button>
            </b-button-group>
            <b-button-group vertical class="push mr-3">
              <b-button variant="secondary">Left</b-button>
              <b-button variant="secondary">Middle</b-button>
              <b-button variant="secondary">Right</b-button>
            </b-button-group>
            <b-button-group vertical class="push mr-3">
              <b-button variant="info">Left</b-button>
              <b-button variant="info">Middle</b-button>
              <b-button variant="info">Right</b-button>
            </b-button-group>
            <b-button-group vertical class="push mr-3">
              <b-button variant="success">Left</b-button>
              <b-button variant="success">Middle</b-button>
              <b-button variant="success">Right</b-button>
            </b-button-group>
            <b-button-group vertical class="push mr-3">
              <b-button variant="warning">Left</b-button>
              <b-button variant="warning">Middle</b-button>
              <b-button variant="warning">Right</b-button>
            </b-button-group>
            <b-button-group vertical class="push mr-3">
              <b-button variant="danger">Left</b-button>
              <b-button variant="danger">Middle</b-button>
              <b-button variant="danger">Right</b-button>
            </b-button-group>
            <b-button-group vertical class="push mr-3">
              <b-button variant="dark">Left</b-button>
              <b-button variant="dark">Middle</b-button>
              <b-button variant="dark">Right</b-button>
            </b-button-group>
            <b-button-group vertical class="push mr-3">
              <b-button variant="light">Left</b-button>
              <b-button variant="light">Middle</b-button>
              <b-button variant="light">Right</b-button>
            </b-button-group>
            <!-- END Default Style -->
          </b-col>
          <b-col sm="6" xl="4">
            <!-- Alternate Style -->
            <b-button-group vertical class="push mr-3">
              <b-button variant="alt-primary">Left</b-button>
              <b-button variant="alt-primary">Middle</b-button>
              <b-button variant="alt-primary">Right</b-button>
            </b-button-group>
            <b-button-group vertical class="push mr-3">
              <b-button variant="alt-secondary">Left</b-button>
              <b-button variant="alt-secondary">Middle</b-button>
              <b-button variant="alt-secondary">Right</b-button>
            </b-button-group>
            <b-button-group vertical class="push mr-3">
              <b-button variant="alt-info">Left</b-button>
              <b-button variant="alt-info">Middle</b-button>
              <b-button variant="alt-info">Right</b-button>
            </b-button-group>
            <b-button-group vertical class="push mr-3">
              <b-button variant="alt-success">Left</b-button>
              <b-button variant="alt-success">Middle</b-button>
              <b-button variant="alt-success">Right</b-button>
            </b-button-group>
            <b-button-group vertical class="push mr-3">
              <b-button variant="alt-warning">Left</b-button>
              <b-button variant="alt-warning">Middle</b-button>
              <b-button variant="alt-warning">Right</b-button>
            </b-button-group>
            <b-button-group vertical class="push mr-3">
              <b-button variant="alt-danger">Left</b-button>
              <b-button variant="alt-danger">Middle</b-button>
              <b-button variant="alt-danger">Right</b-button>
            </b-button-group>
            <b-button-group vertical class="push mr-3">
              <b-button variant="alt-dark">Left</b-button>
              <b-button variant="alt-dark">Middle</b-button>
              <b-button variant="alt-dark">Right</b-button>
            </b-button-group>
            <b-button-group vertical class="push mr-3">
              <b-button variant="alt-light">Left</b-button>
              <b-button variant="alt-light">Middle</b-button>
              <b-button variant="alt-light">Right</b-button>
            </b-button-group>
            <!-- END Alternate Style -->
          </b-col>
          <b-col sm="6" xl="4">
            <!-- Outline Style -->
            <b-button-group vertical class="push mr-3">
              <b-button variant="outline-primary">Left</b-button>
              <b-button variant="outline-primary">Middle</b-button>
              <b-button variant="outline-primary">Right</b-button>
            </b-button-group>
            <b-button-group vertical class="push mr-3">
              <b-button variant="outline-secondary">Left</b-button>
              <b-button variant="outline-secondary">Middle</b-button>
              <b-button variant="outline-secondary">Right</b-button>
            </b-button-group>
            <b-button-group vertical class="push mr-3">
              <b-button variant="outline-info">Left</b-button>
              <b-button variant="outline-info">Middle</b-button>
              <b-button variant="outline-info">Right</b-button>
            </b-button-group>
            <b-button-group vertical class="push mr-3">
              <b-button variant="outline-success">Left</b-button>
              <b-button variant="outline-success">Middle</b-button>
              <b-button variant="outline-success">Right</b-button>
            </b-button-group>
            <b-button-group vertical class="push mr-3">
              <b-button variant="outline-warning">Left</b-button>
              <b-button variant="outline-warning">Middle</b-button>
              <b-button variant="outline-warning">Right</b-button>
            </b-button-group>
            <b-button-group vertical class="push mr-3">
              <b-button variant="outline-danger">Left</b-button>
              <b-button variant="outline-danger">Middle</b-button>
              <b-button variant="outline-danger">Right</b-button>
            </b-button-group>
            <b-button-group vertical class="push mr-3">
              <b-button variant="outline-dark">Left</b-button>
              <b-button variant="outline-dark">Middle</b-button>
              <b-button variant="outline-dark">Right</b-button>
            </b-button-group>
            <b-button-group vertical class="push mr-3">
              <b-button variant="outline-light">Left</b-button>
              <b-button variant="outline-light">Middle</b-button>
              <b-button variant="outline-light">Right</b-button>
            </b-button-group>
          </b-col>
          <!-- END Outline Style -->
        </b-row>
      </base-block>
      <!-- END Vertical -->
      <!-- END Button Groups -->

      <!-- Toolbars -->
      <h2 class="content-heading">Toolbars</h2>

      <!-- Default -->
      <base-block rounded title="Default">
        <p class="font-size-sm text-muted">
          Combine sets of button groups into button toolbars for more complex components
        </p>
        <b-row class="items-push">
          <b-col md="6" xl="4">
            <!-- Default Style-->
            <b-button-toolbar class="mb-2" aria-label="Primary Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="primary">1</b-button>
                <b-button variant="primary">2</b-button>
                <b-button variant="primary">3</b-button>
                <b-button variant="primary">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="primary">5</b-button>
                <b-button variant="primary">6</b-button>
                <b-button variant="primary">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="primary">8</b-button>
              </b-button-group>
            </b-button-toolbar>
            <b-button-toolbar class="mb-2" aria-label="Secondary Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="secondary">1</b-button>
                <b-button variant="secondary">2</b-button>
                <b-button variant="secondary">3</b-button>
                <b-button variant="secondary">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="secondary">5</b-button>
                <b-button variant="secondary">6</b-button>
                <b-button variant="secondary">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="secondary">8</b-button>
              </b-button-group>
            </b-button-toolbar>
            <b-button-toolbar class="mb-2" aria-label="Info Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="info">1</b-button>
                <b-button variant="info">2</b-button>
                <b-button variant="info">3</b-button>
                <b-button variant="info">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="info">5</b-button>
                <b-button variant="info">6</b-button>
                <b-button variant="info">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="info">8</b-button>
              </b-button-group>
            </b-button-toolbar>
            <b-button-toolbar class="mb-2" aria-label="Success Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="success">1</b-button>
                <b-button variant="success">2</b-button>
                <b-button variant="success">3</b-button>
                <b-button variant="success">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="success">5</b-button>
                <b-button variant="success">6</b-button>
                <b-button variant="success">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="success">8</b-button>
              </b-button-group>
            </b-button-toolbar>
            <b-button-toolbar class="mb-2" aria-label="Warning Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="warning">1</b-button>
                <b-button variant="warning">2</b-button>
                <b-button variant="warning">3</b-button>
                <b-button variant="warning">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="warning">5</b-button>
                <b-button variant="warning">6</b-button>
                <b-button variant="warning">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="warning">8</b-button>
              </b-button-group>
            </b-button-toolbar>
            <b-button-toolbar class="mb-2" aria-label="Danger Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="danger">1</b-button>
                <b-button variant="danger">2</b-button>
                <b-button variant="danger">3</b-button>
                <b-button variant="danger">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="danger">5</b-button>
                <b-button variant="danger">6</b-button>
                <b-button variant="danger">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="danger">8</b-button>
              </b-button-group>
            </b-button-toolbar>
            <b-button-toolbar class="mb-2" aria-label="Dark Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="dark">1</b-button>
                <b-button variant="dark">2</b-button>
                <b-button variant="dark">3</b-button>
                <b-button variant="dark">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="dark">5</b-button>
                <b-button variant="dark">6</b-button>
                <b-button variant="dark">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="dark">8</b-button>
              </b-button-group>
            </b-button-toolbar>
            <b-button-toolbar class="mb-2" aria-label="Light Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="light">1</b-button>
                <b-button variant="light">2</b-button>
                <b-button variant="light">3</b-button>
                <b-button variant="light">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="light">5</b-button>
                <b-button variant="light">6</b-button>
                <b-button variant="light">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="light">8</b-button>
              </b-button-group>
            </b-button-toolbar>
            <!-- END Default Style -->
          </b-col>
          <b-col md="6" xl="4">
            <!-- Alternate Style -->
            <b-button-toolbar class="mb-2" aria-label="Alternate Primary Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="alt-primary">1</b-button>
                <b-button variant="alt-primary">2</b-button>
                <b-button variant="alt-primary">3</b-button>
                <b-button variant="alt-primary">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="alt-primary">5</b-button>
                <b-button variant="alt-primary">6</b-button>
                <b-button variant="alt-primary">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="alt-primary">8</b-button>
              </b-button-group>
            </b-button-toolbar >
            <b-button-toolbar class="mb-2" aria-label="Alternate Secondary Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="alt-secondary">1</b-button>
                <b-button variant="alt-secondary">2</b-button>
                <b-button variant="alt-secondary">3</b-button>
                <b-button variant="alt-secondary">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="alt-secondary">5</b-button>
                <b-button variant="alt-secondary">6</b-button>
                <b-button variant="alt-secondary">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="alt-secondary">8</b-button>
              </b-button-group>
            </b-button-toolbar >
            <b-button-toolbar class="mb-2" aria-label="Alternate Info Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="alt-info">1</b-button>
                <b-button variant="alt-info">2</b-button>
                <b-button variant="alt-info">3</b-button>
                <b-button variant="alt-info">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="alt-info">5</b-button>
                <b-button variant="alt-info">6</b-button>
                <b-button variant="alt-info">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="alt-info">8</b-button>
              </b-button-group>
            </b-button-toolbar >
            <b-button-toolbar class="mb-2" aria-label="Alternate Success Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="alt-success">1</b-button>
                <b-button variant="alt-success">2</b-button>
                <b-button variant="alt-success">3</b-button>
                <b-button variant="alt-success">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="alt-success">5</b-button>
                <b-button variant="alt-success">6</b-button>
                <b-button variant="alt-success">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="alt-success">8</b-button>
              </b-button-group>
            </b-button-toolbar >
            <b-button-toolbar class="mb-2" aria-label="Alternate Warning Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="alt-warning">1</b-button>
                <b-button variant="alt-warning">2</b-button>
                <b-button variant="alt-warning">3</b-button>
                <b-button variant="alt-warning">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="alt-warning">5</b-button>
                <b-button variant="alt-warning">6</b-button>
                <b-button variant="alt-warning">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="alt-warning">8</b-button>
              </b-button-group>
            </b-button-toolbar >
            <b-button-toolbar class="mb-2" aria-label="Alternate Danger Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="alt-danger">1</b-button>
                <b-button variant="alt-danger">2</b-button>
                <b-button variant="alt-danger">3</b-button>
                <b-button variant="alt-danger">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="alt-danger">5</b-button>
                <b-button variant="alt-danger">6</b-button>
                <b-button variant="alt-danger">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="alt-danger">8</b-button>
              </b-button-group>
            </b-button-toolbar >
            <b-button-toolbar class="mb-2" aria-label="Alternate Dark Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="alt-dark">1</b-button>
                <b-button variant="alt-dark">2</b-button>
                <b-button variant="alt-dark">3</b-button>
                <b-button variant="alt-dark">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="alt-dark">5</b-button>
                <b-button variant="alt-dark">6</b-button>
                <b-button variant="alt-dark">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="alt-dark">8</b-button>
              </b-button-group>
            </b-button-toolbar >
            <b-button-toolbar class="mb-2" aria-label="Alternate Light Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="alt-light">1</b-button>
                <b-button variant="alt-light">2</b-button>
                <b-button variant="alt-light">3</b-button>
                <b-button variant="alt-light">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="alt-light">5</b-button>
                <b-button variant="alt-light">6</b-button>
                <b-button variant="alt-light">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="alt-light">8</b-button>
              </b-button-group>
            </b-button-toolbar >
            <!-- END Alternate Style -->
          </b-col>
          <b-col md="6" xl="4">
            <!-- Outline Style -->
            <b-button-toolbar class="mb-2" aria-label="Outline Primary Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="outline-primary">1</b-button>
                <b-button variant="outline-primary">2</b-button>
                <b-button variant="outline-primary">3</b-button>
                <b-button variant="outline-primary">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="outline-primary">5</b-button>
                <b-button variant="outline-primary">6</b-button>
                <b-button variant="outline-primary">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="outline-primary">8</b-button>
              </b-button-group>
            </b-button-toolbar >
            <b-button-toolbar class="mb-2" aria-label="Outline Secondary Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="outline-secondary">1</b-button>
                <b-button variant="outline-secondary">2</b-button>
                <b-button variant="outline-secondary">3</b-button>
                <b-button variant="outline-secondary">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="outline-secondary">5</b-button>
                <b-button variant="outline-secondary">6</b-button>
                <b-button variant="outline-secondary">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="outline-secondary">8</b-button>
              </b-button-group>
            </b-button-toolbar >
            <b-button-toolbar class="mb-2" aria-label="Outline Info Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="outline-info">1</b-button>
                <b-button variant="outline-info">2</b-button>
                <b-button variant="outline-info">3</b-button>
                <b-button variant="outline-info">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="outline-info">5</b-button>
                <b-button variant="outline-info">6</b-button>
                <b-button variant="outline-info">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="outline-info">8</b-button>
              </b-button-group>
            </b-button-toolbar >
            <b-button-toolbar class="mb-2" aria-label="Outline Success Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="outline-success">1</b-button>
                <b-button variant="outline-success">2</b-button>
                <b-button variant="outline-success">3</b-button>
                <b-button variant="outline-success">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="outline-success">5</b-button>
                <b-button variant="outline-success">6</b-button>
                <b-button variant="outline-success">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="outline-success">8</b-button>
              </b-button-group>
            </b-button-toolbar >
            <b-button-toolbar class="mb-2" aria-label="Outline Warning Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="outline-warning">1</b-button>
                <b-button variant="outline-warning">2</b-button>
                <b-button variant="outline-warning">3</b-button>
                <b-button variant="outline-warning">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="outline-warning">5</b-button>
                <b-button variant="outline-warning">6</b-button>
                <b-button variant="outline-warning">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="outline-warning">8</b-button>
              </b-button-group>
            </b-button-toolbar >
            <b-button-toolbar class="mb-2" aria-label="Outline Danger Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="outline-danger">1</b-button>
                <b-button variant="outline-danger">2</b-button>
                <b-button variant="outline-danger">3</b-button>
                <b-button variant="outline-danger">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="outline-danger">5</b-button>
                <b-button variant="outline-danger">6</b-button>
                <b-button variant="outline-danger">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="outline-danger">8</b-button>
              </b-button-group>
            </b-button-toolbar >
            <b-button-toolbar class="mb-2" aria-label="Outline Dark Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="outline-dark">1</b-button>
                <b-button variant="outline-dark">2</b-button>
                <b-button variant="outline-dark">3</b-button>
                <b-button variant="outline-dark">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="outline-dark">5</b-button>
                <b-button variant="outline-dark">6</b-button>
                <b-button variant="outline-dark">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="outline-dark">8</b-button>
              </b-button-group>
            </b-button-toolbar >
            <b-button-toolbar class="mb-2" aria-label="Outline Light Toolbar with button groups">
              <b-button-group class="mr-2 mb-2">
                <b-button variant="outline-light">1</b-button>
                <b-button variant="outline-light">2</b-button>
                <b-button variant="outline-light">3</b-button>
                <b-button variant="outline-light">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2">
                <b-button variant="outline-light">5</b-button>
                <b-button variant="outline-light">6</b-button>
                <b-button variant="outline-light">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2">
                <b-button variant="outline-light">8</b-button>
              </b-button-group>
            </b-button-toolbar >
            <!-- END Outline Style -->
          </b-col>
        </b-row>
      </base-block>
      <!-- END Default -->

      <!-- Sizes -->
      <base-block rounded title="Sizes">
        <p class="font-size-sm text-muted">
          You can easily have a small or large size for all toolbar variations
        </p>
        <b-row class="items-push">
          <b-col lg="6">
            <b-button-toolbar class="mb-2" aria-label="Small Primary Toolbar with button groups">
              <b-button-group class="mr-2 mb-2" size="sm">
                <b-button variant="primary">1</b-button>
                <b-button variant="primary">2</b-button>
                <b-button variant="primary">3</b-button>
                <b-button variant="primary">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2" size="sm">
                <b-button variant="primary">5</b-button>
                <b-button variant="primary">6</b-button>
                <b-button variant="primary">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2" size="sm">
                <b-button variant="primary">8</b-button>
              </b-button-group>
            </b-button-toolbar>
            <b-button-toolbar class="mb-2" aria-label="Small Alternate Primary Toolbar with button groups">
              <b-button-group class="mr-2 mb-2" size="sm">
                <b-button variant="alt-primary">1</b-button>
                <b-button variant="alt-primary">2</b-button>
                <b-button variant="alt-primary">3</b-button>
                <b-button variant="alt-primary">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2" size="sm">
                <b-button variant="alt-primary">5</b-button>
                <b-button variant="alt-primary">6</b-button>
                <b-button variant="alt-primary">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2" size="sm">
                <b-button variant="alt-primary">8</b-button>
              </b-button-group>
            </b-button-toolbar>
            <b-button-toolbar class="mb-2" aria-label="Small Outline Secondary Toolbar with button groups">
              <b-button-group class="mr-2 mb-2" size="sm">
                <b-button variant="outline-secondary">1</b-button>
                <b-button variant="outline-secondary">2</b-button>
                <b-button variant="outline-secondary">3</b-button>
                <b-button variant="outline-secondary">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2" size="sm">
                <b-button variant="outline-secondary">5</b-button>
                <b-button variant="outline-secondary">6</b-button>
                <b-button variant="outline-secondary">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2" size="sm">
                <b-button variant="outline-secondary">8</b-button>
              </b-button-group>
            </b-button-toolbar>
          </b-col>
          <b-col lg="6">
            <b-button-toolbar class="mb-2" aria-label="Large Primary Toolbar with button groups">
              <b-button-group class="mr-2 mb-2" size="lg">
                <b-button variant="primary">1</b-button>
                <b-button variant="primary">2</b-button>
                <b-button variant="primary">3</b-button>
                <b-button variant="primary">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2" size="lg">
                <b-button variant="primary">5</b-button>
                <b-button variant="primary">6</b-button>
                <b-button variant="primary">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2" size="lg">
                <b-button variant="primary">8</b-button>
              </b-button-group>
            </b-button-toolbar>
            <b-button-toolbar class="mb-2" aria-label="Large Alternate Secondary Toolbar with button groups">
              <b-button-group class="mr-2 mb-2" size="lg">
                <b-button variant="alt-secondary">1</b-button>
                <b-button variant="alt-secondary">2</b-button>
                <b-button variant="alt-secondary">3</b-button>
                <b-button variant="alt-secondary">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2" size="lg">
                <b-button variant="alt-secondary">5</b-button>
                <b-button variant="alt-secondary">6</b-button>
                <b-button variant="alt-secondary">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2" size="lg">
                <b-button variant="alt-secondary">8</b-button>
              </b-button-group>
            </b-button-toolbar>
            <b-button-toolbar class="mb-2" aria-label="Large Outline Secondary Toolbar with button groups">
              <b-button-group class="mr-2 mb-2" size="lg">
                <b-button variant="outline-secondary">1</b-button>
                <b-button variant="outline-secondary">2</b-button>
                <b-button variant="outline-secondary">3</b-button>
                <b-button variant="outline-secondary">4</b-button>
              </b-button-group>
              <b-button-group class="mr-2 mb-2" size="lg">
                <b-button variant="outline-secondary">5</b-button>
                <b-button variant="outline-secondary">6</b-button>
                <b-button variant="outline-secondary">7</b-button>
              </b-button-group>
              <b-button-group class="mb-2" size="lg">
                <b-button variant="outline-secondary">8</b-button>
              </b-button-group>
            </b-button-toolbar>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Sizes -->

      <!-- Icons -->
      <base-block rounded title="Icons">
        <p class="font-size-sm text-muted">
          Using icons is ideal for creating useful toolbars
        </p>
        <b-button-toolbar class="mb-2" aria-label="Icons Toolbar with button groups">
          <b-button-group class="mr-2 mb-2">
            <b-button variant="primary">
              <i class="fa fa-fw fa-file"></i>
            </b-button>
            <b-button variant="primary">
              <i class="fa fa-fw fa-save"></i>
            </b-button>
          </b-button-group>
          <b-button-group class="mr-2 mb-2">
            <b-button variant="primary">
              <i class="fa fa-fw fa-bold"></i>
            </b-button>
            <b-button variant="primary">
              <i class="fa fa-fw fa-italic"></i>
            </b-button>
            <b-button variant="primary">
              <i class="fa fa-fw fa-underline"></i>
            </b-button>
            <b-button variant="primary">
              <i class="fa fa-fw fa-strikethrough"></i>
            </b-button>
          </b-button-group>
          <b-button-group class="mr-2 mb-2">
            <b-button variant="primary">
              <i class="fa fa-fw fa-align-left"></i>
            </b-button>
            <b-button variant="primary">
              <i class="fa fa-fw fa-align-center"></i>
            </b-button>
            <b-button variant="primary">
              <i class="fa fa-fw fa-align-right"></i>
            </b-button>
          </b-button-group>
          <b-button-group class="mr-2 mb-2">
            <b-button variant="primary">
              <i class="fa fa-fw fa-list-ul"></i>
            </b-button>
            <b-button variant="primary">
              <i class="fa fa-fw fa-list-ol"></i>
            </b-button>
          </b-button-group>
          <b-button-group class="mb-2">
            <b-button variant="primary">
              <i class="fa fa-fw fa-archive"></i>
            </b-button>
          </b-button-group>
        </b-button-toolbar>
        <b-button-toolbar class="mb-2" aria-label="Icons Alternate Toolbar with button groups">
          <b-button-group class="mr-2 mb-2">
            <b-button variant="alt-secondary">
              <i class="fa fa-fw fa-file"></i>
            </b-button>
            <b-button variant="alt-secondary">
              <i class="fa fa-fw fa-save"></i>
            </b-button>
          </b-button-group>
          <b-button-group class="mr-2 mb-2">
            <b-button variant="alt-secondary">
              <i class="fa fa-fw fa-bold"></i>
            </b-button>
            <b-button variant="alt-secondary">
              <i class="fa fa-fw fa-italic"></i>
            </b-button>
            <b-button variant="alt-secondary">
              <i class="fa fa-fw fa-underline"></i>
            </b-button>
            <b-button variant="alt-secondary">
              <i class="fa fa-fw fa-strikethrough"></i>
            </b-button>
          </b-button-group>
          <b-button-group class="mr-2 mb-2">
            <b-button variant="alt-secondary">
              <i class="fa fa-fw fa-align-left"></i>
            </b-button>
            <b-button variant="alt-secondary">
              <i class="fa fa-fw fa-align-center"></i>
            </b-button>
            <b-button variant="alt-secondary">
              <i class="fa fa-fw fa-align-right"></i>
            </b-button>
          </b-button-group>
          <b-button-group class="mr-2 mb-2">
            <b-button variant="alt-secondary">
              <i class="fa fa-fw fa-list-ul"></i>
            </b-button>
            <b-button variant="alt-secondary">
              <i class="fa fa-fw fa-list-ol"></i>
            </b-button>
          </b-button-group>
          <b-button-group class="mr-2 mb-2">
            <b-button variant="alt-secondary">
              <i class="fa fa-fw fa-archive"></i>
            </b-button>
          </b-button-group>
        </b-button-toolbar>
        <b-button-toolbar class="mb-2" aria-label="Icons Outline Toolbar with button groups">
          <b-button-group class="mr-2 mb-2">
            <b-button variant="outline-secondary">
              <i class="fa fa-fw fa-file"></i>
            </b-button>
            <b-button variant="outline-secondary">
              <i class="fa fa-fw fa-save"></i>
            </b-button>
          </b-button-group>
          <b-button-group class="mr-2 mb-2">
            <b-button variant="outline-secondary">
              <i class="fa fa-fw fa-bold"></i>
            </b-button>
            <b-button variant="outline-secondary">
              <i class="fa fa-fw fa-italic"></i>
            </b-button>
            <b-button variant="outline-secondary">
              <i class="fa fa-fw fa-underline"></i>
            </b-button>
            <b-button variant="outline-secondary">
              <i class="fa fa-fw fa-strikethrough"></i>
            </b-button>
          </b-button-group>
          <b-button-group class="mr-2 mb-2">
            <b-button variant="outline-secondary">
              <i class="fa fa-fw fa-align-left"></i>
            </b-button>
            <b-button variant="outline-secondary">
              <i class="fa fa-fw fa-align-center"></i>
            </b-button>
            <b-button variant="outline-secondary">
              <i class="fa fa-fw fa-align-right"></i>
            </b-button>
          </b-button-group>
          <b-button-group class="mr-2 mb-2">
            <b-button variant="outline-secondary">
              <i class="fa fa-fw fa-list-ul"></i>
            </b-button>
            <b-button variant="outline-secondary">
              <i class="fa fa-fw fa-list-ol"></i>
            </b-button>
          </b-button-group>
          <b-button-group class="mr-2 mb-2">
            <b-button variant="outline-secondary">
              <i class="fa fa-fw fa-archive"></i>
            </b-button>
          </b-button-group>
        </b-button-toolbar>
      </base-block>
      <!-- END Icons -->
      <!-- END Toolbars -->
    </div>
    <!-- END Page Content -->
  </div>
</template>
