<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Alerts" subtitle="Inform your users about important events happenning in your app.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
          <b-breadcrumb-item active>Alerts</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <b-row>
        <b-col xl="6">
          <!-- Simple -->
          <base-block rounded title="Simple">
            <p class="font-size-sm text-muted">
              Use the colors which better fit the type of message you want to pass
            </p>
            <b-alert variant="primary" show dismissible>
              <p class="mb-0">
                This is a primary message with a <a class="alert-link" href="javascript:void(0)">link</a>!
              </p>
            </b-alert>
            <b-alert variant="secondary" show dismissible>
              <p class="mb-0">
                This is a secondary message with a <a class="alert-link" href="javascript:void(0)">link</a>!
              </p>
            </b-alert>
            <b-alert variant="success" show dismissible>
              <p class="mb-0">
                This is a successful message with a <a class="alert-link" href="javascript:void(0)">link</a>!
              </p>
            </b-alert>
            <b-alert variant="info" show dismissible>
              <p class="mb-0">
                This is an informational message with a <a class="alert-link" href="javascript:void(0)">link</a>!
              </p>
            </b-alert>
            <b-alert variant="warning" show dismissible>
              <p class="mb-0">
                This is a warning message with a <a class="alert-link" href="javascript:void(0)">link</a>!
              </p>
            </b-alert>
            <b-alert variant="danger" show dismissible>
              <p class="mb-0">
                This is an error message with a <a class="alert-link" href="javascript:void(0)">link</a>!
              </p>
            </b-alert>
            <b-alert variant="dark" show dismissible>
              <p class="mb-0">
                This is a dark message with a <a class="alert-link" href="javascript:void(0)">link</a>!
              </p>
            </b-alert>
            <b-alert variant="light" show dismissible>
              <p class="mb-0">
                This is a light message with a <a class="alert-link" href="javascript:void(0)">link</a>!
              </p>
            </b-alert>
          </base-block>
          <!-- END Simple -->
        </b-col>
        <b-col xl="6">
          <!-- With Icons -->
          <base-block rounded title="With Icons">
            <p class="font-size-sm text-muted">
              Choose an icon of your preference and easily add it to an alert message
            </p>
            <b-alert variant="primary" show dismissible class="d-flex align-items-center">
              <div class="flex-00-auto">
                <i class="fa fa-fw fa-globe"></i>
              </div>
              <div class="flex-fill ml-3">
                <p class="mb-0">This is a primary message with a <a class="alert-link" href="javascript:void(0)">link</a>!</p>
              </div>
            </b-alert>
            <b-alert variant="secondary" show class="d-flex align-items-center">
              <div class="flex-00-auto">
                <i class="fa fa-fw fa-university"></i>
              </div>
              <div class="flex-fill ml-3">
                <p class="mb-0">This is a secondary message with a <a class="alert-link" href="javascript:void(0)">link</a>!</p>
              </div>
            </b-alert>
            <b-alert variant="success" show class="d-flex align-items-center">
              <div class="flex-00-auto">
                <i class="fa fa-fw fa-check"></i>
              </div>
              <div class="flex-fill ml-3">
                <p class="mb-0">This is a successful message with a <a class="alert-link" href="javascript:void(0)">link</a>!</p>
              </div>
            </b-alert>
            <b-alert variant="info" show class="d-flex align-items-center">
              <div class="flex-00-auto">
                <i class="fa fa-fw fa-info-circle"></i>
              </div>
              <div class="flex-fill ml-3">
                <p class="mb-0">This is an informational message with a <a class="alert-link" href="javascript:void(0)">link</a>!</p>
              </div>
            </b-alert>
            <b-alert variant="warning" show class="d-flex align-items-center justify-content-between">
              <div class="flex-fill mr-3">
                <p class="mb-0">This is a warning message with a <a class="alert-link" href="javascript:void(0)">link</a>!</p>
              </div>
              <div class="flex-00-auto">
                <i class="fa fa-fw fa-exclamation-circle"></i>
              </div>
            </b-alert>
            <b-alert variant="danger" show class="d-flex align-items-center justify-content-between">
              <div class="flex-fill mr-3">
                <p class="mb-0">This is an error message with a <a class="alert-link" href="javascript:void(0)">link</a>!</p>
              </div>
              <div class="flex-00-auto">
                <i class="fa fa-fw fa-times-circle"></i>
              </div>
            </b-alert>
            <b-alert variant="dark" show class="d-flex align-items-center justify-content-between">
              <div class="flex-fill mr-3">
                <p class="mb-0">This is a dark message with a <a class="alert-link" href="javascript:void(0)">link</a>!</p>
              </div>
              <div class="flex-00-auto">
                <i class="fa fa-fw fa-camera-retro"></i>
              </div>
            </b-alert>
            <b-alert variant="light" show class="d-flex align-items-center justify-content-between">
              <div class="flex-fill mr-3">
                <p class="mb-0">This is a light message with a <a class="alert-link" href="javascript:void(0)">link</a>!</p>
              </div>
              <div class="flex-00-auto">
                <i class="fab fa-fw fa-bitcoin"></i>
              </div>
            </b-alert>
          </base-block>
          <!-- END With Icons -->
        </b-col>
        <b-col cols="12">
          <!-- With Titles -->
          <base-block rounded title="With Titles">
            <p class="text-muted">
              You can also add titles to your alert messages
            </p>
            <b-row>
              <b-col md="6">
                <b-alert variant="primary" show dismissible>
                  <h3 class="alert-heading h4 my-2">Primary</h3>
                  <p class="mb-0">
                    This is a primary message with a <a class="alert-link" href="javascript:void(0)">link</a>!
                  </p>
                </b-alert>
                <b-alert variant="secondary" show dismissible>
                  <h3 class="alert-heading h4 my-2">Secondary</h3>
                  <p class="mb-0">
                    This is a secondary message with a <a class="alert-link" href="javascript:void(0)">link</a>!
                  </p>
                </b-alert>
                <b-alert variant="success" show dismissible>
                  <h3 class="alert-heading h4 my-2">Success</h3>
                  <p class="mb-0">
                    This is a successful message with a <a class="alert-link" href="javascript:void(0)">link</a>!
                  </p>
                </b-alert>
                <b-alert variant="info" show dismissible>
                  <h3 class="alert-heading h4 my-2">Information</h3>
                  <p class="mb-0">
                    This is an informational message with a <a class="alert-link" href="javascript:void(0)">link</a>!
                  </p>
                </b-alert>
              </b-col>
              <b-col md="6">
                <b-alert variant="warning" show dismissible>
                  <h3 class="alert-heading h4 my-2">Warning</h3>
                  <p class="mb-0">
                    This is a warning message with a <a class="alert-link" href="javascript:void(0)">link</a>!
                  </p>
                </b-alert>
                <b-alert variant="danger" show dismissible>
                  <h3 class="alert-heading h4 my-2">Error</h3>
                  <p class="mb-0">
                    This is an error message with a <a class="alert-link" href="javascript:void(0)">link</a>!
                  </p>
                </b-alert>
                <b-alert variant="dark" show dismissible>
                  <h3 class="alert-heading h4 my-2">Dark</h3>
                  <p class="mb-0">
                    This is a dark message with a <a class="alert-link" href="javascript:void(0)">link</a>!
                  </p>
                </b-alert>
                <b-alert variant="light" show dismissible>
                  <h3 class="alert-heading h4 my-2">Light</h3>
                  <p class="mb-0">
                    This is a light message with a <a class="alert-link" href="javascript:void(0)">link</a>!
                  </p>
                </b-alert>
              </b-col>
            </b-row>
          </base-block>
          <!-- END With Titles -->
        </b-col>
      </b-row>
    </div>
    <!-- END Page Content -->
  </div>
</template>
