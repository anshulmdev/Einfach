<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Images" subtitle="Bring your images to life with amazing animations.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
          <b-breadcrumb-item active>Images</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Image Default -->
      <h2 class="content-heading">Image Default</h2>
      <b-row class="items-push">
        <b-col md="4">
          <div class="options-container">
            <img class="img-fluid options-item" src="img/photos/photo1.jpg" alt="Image">
            <div class="options-overlay bg-black-75">
              <div class="options-overlay-content">
                <h3 class="h4 text-white mb-2">Image Caption</h3>
                <h4 class="h6 text-white-75 font-w400 mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-pencil-alt text-primary mr-1"></i> Edit
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-times text-danger mr-1"></i> Delete
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="options-container">
            <img class="img-fluid options-item" src="img/photos/photo1.jpg" alt="Image">
            <div class="options-overlay bg-white-90">
              <div class="options-overlay-content">
                <h3 class="h4 mb-2">Image Caption</h3>
                <h4 class="h6 text-gray-dark mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-pencil-alt text-primary mr-1"></i> Edit
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-times text-danger mr-1"></i> Delete
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="options-container">
            <img class="img-fluid options-item" src="img/photos/photo1.jpg" alt="Image">
            <div class="options-overlay bg-primary-dark-op">
              <div class="options-overlay-content">
                <h3 class="h4 text-white mb-2">Image Caption</h3>
                <h4 class="h6 text-white-75 font-w400 mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-thumbs-up text-success mr-1"></i> Like
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-save text-info mr-1"></i> Save
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <!-- END Image Default -->

      <!-- Image Zoom In -->
      <h2 class="content-heading">Image Zoom In <small><code class="text-lowercase">.fx-item-zoom-in</code></small></h2>
      <b-row class="items-push">
        <b-col md="4">
          <div class="options-container fx-item-zoom-in">
            <img class="img-fluid options-item" src="img/photos/photo2.jpg" alt="Image">
            <div class="options-overlay bg-black-75">
              <div class="options-overlay-content">
                <h3 class="h4 text-white mb-2">Image Caption</h3>
                <h4 class="h6 text-white-75 font-w400 mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-pencil-alt text-primary mr-1"></i> Edit
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-times text-danger mr-1"></i> Delete
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="options-container fx-item-zoom-in">
            <img class="img-fluid options-item" src="img/photos/photo2.jpg" alt="Image">
            <div class="options-overlay bg-white-90">
              <div class="options-overlay-content">
                <h3 class="h4 mb-2">Image Caption</h3>
                <h4 class="h6 text-gray-dark mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-pencil-alt text-primary mr-1"></i> Edit
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-times text-danger mr-1"></i> Delete
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="options-container fx-item-zoom-in">
            <img class="img-fluid options-item" src="img/photos/photo2.jpg" alt="Image">
            <div class="options-overlay bg-primary-dark-op">
              <div class="options-overlay-content">
                <h3 class="h4 text-white mb-2">Image Caption</h3>
                <h4 class="h6 text-white-75 font-w400 mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-thumbs-up text-success mr-1"></i> Like
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-save text-info mr-1"></i> Save
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <!-- END Image Zoom In -->

      <!-- Image Rotate Right -->
      <h2 class="content-heading">Image Rotate Right <small><code class="text-lowercase">.fx-item-rotate-r</code></small></h2>
      <b-row class="items-push">
        <b-col md="4">
          <div class="options-container fx-item-rotate-r">
            <img class="img-fluid options-item" src="img/photos/photo3.jpg" alt="Image">
            <div class="options-overlay bg-black-75">
              <div class="options-overlay-content">
                <h3 class="h4 text-white mb-2">Image Caption</h3>
                <h4 class="h6 text-white-75 font-w400 mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-pencil-alt text-primary mr-1"></i> Edit
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-times text-danger mr-1"></i> Delete
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="options-container fx-item-rotate-r">
            <img class="img-fluid options-item" src="img/photos/photo3.jpg" alt="Image">
            <div class="options-overlay bg-white-90">
              <div class="options-overlay-content">
                <h3 class="h4 mb-2">Image Caption</h3>
                <h4 class="h6 text-gray-dark mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-pencil-alt text-primary mr-1"></i> Edit
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-times text-danger mr-1"></i> Delete
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="options-container fx-item-rotate-r">
            <img class="img-fluid options-item" src="img/photos/photo3.jpg" alt="Image">
            <div class="options-overlay bg-primary-dark-op">
              <div class="options-overlay-content">
                <h3 class="h4 text-white mb-2">Image Caption</h3>
                <h4 class="h6 text-white-75 font-w400 mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-thumbs-up text-success mr-1"></i> Like
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-save text-info mr-1"></i> Save
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <!-- END Image Rotate Right -->

      <!-- Image Rotate Left -->
      <h2 class="content-heading">Image Rotate Left <small><code class="text-lowercase">.fx-item-rotate-l</code></small></h2>
      <b-row class="items-push">
        <b-col md="4">
          <div class="options-container fx-item-rotate-l">
            <img class="img-fluid options-item" src="img/photos/photo4.jpg" alt="Image">
            <div class="options-overlay bg-black-75">
              <div class="options-overlay-content">
                <h3 class="h4 text-white mb-2">Image Caption</h3>
                <h4 class="h6 text-white-75 font-w400 mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-pencil-alt text-primary mr-1"></i> Edit
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-times text-danger mr-1"></i> Delete
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="options-container fx-item-rotate-l">
            <img class="img-fluid options-item" src="img/photos/photo4.jpg" alt="Image">
            <div class="options-overlay bg-white-90">
              <div class="options-overlay-content">
                <h3 class="h4 mb-2">Image Caption</h3>
                <h4 class="h6 text-gray-dark mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-pencil-alt text-primary mr-1"></i> Edit
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-times text-danger mr-1"></i> Delete
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="options-container fx-item-rotate-l">
            <img class="img-fluid options-item" src="img/photos/photo4.jpg" alt="Image">
            <div class="options-overlay bg-primary-dark-op">
              <div class="options-overlay-content">
                <h3 class="h4 text-white mb-2">Image Caption</h3>
                <h4 class="h6 text-white-75 font-w400 mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-thumbs-up text-success mr-1"></i> Like
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-save text-info mr-1"></i> Save
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <!-- END Image Rotate Left -->

      <!-- Options Slide Left -->
      <h2 class="content-heading">Overlay Slide Left <small><code class="text-lowercase">.fx-overlay-slide-left</code></small></h2>
      <b-row class="items-push">
        <b-col md="4">
          <div class="options-container fx-item-zoom-in fx-overlay-slide-left">
            <img class="img-fluid options-item" src="img/photos/photo12.jpg" alt="Image">
            <div class="options-overlay bg-black-75">
              <div class="options-overlay-content">
                <h3 class="h4 text-white mb-2">Image Caption</h3>
                <h4 class="h6 text-white-75 font-w400 mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-pencil-alt text-primary mr-1"></i> Edit
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-times text-danger mr-1"></i> Delete
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="options-container fx-item-zoom-in fx-overlay-slide-left">
            <img class="img-fluid options-item" src="img/photos/photo12.jpg" alt="Image">
            <div class="options-overlay bg-white-90">
              <div class="options-overlay-content">
                <h3 class="h4 mb-2">Image Caption</h3>
                <h4 class="h6 text-gray-dark mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-pencil-alt text-primary mr-1"></i> Edit
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-times text-danger mr-1"></i> Delete
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="options-container fx-item-zoom-in fx-overlay-slide-left">
            <img class="img-fluid options-item" src="img/photos/photo12.jpg" alt="Image">
            <div class="options-overlay bg-primary-dark-op">
              <div class="options-overlay-content">
                <h3 class="h4 text-white mb-2">Image Caption</h3>
                <h4 class="h6 text-white-75 font-w400 mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-thumbs-up text-success mr-1"></i> Like
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-save text-info mr-1"></i> Save
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <!-- END Options Slide Left -->

      <!-- Options Slide Right -->
      <h2 class="content-heading">Overlay Slide Right <small><code class="text-lowercase">.fx-overlay-slide-right</code></small></h2>
      <b-row class="items-push">
        <b-col md="4">
          <div class="options-container fx-item-zoom-in fx-overlay-slide-right">
            <img class="img-fluid options-item" src="img/photos/photo16.jpg" alt="Image">
            <div class="options-overlay bg-black-75">
              <div class="options-overlay-content">
                <h3 class="h4 text-white mb-2">Image Caption</h3>
                <h4 class="h6 text-white-75 font-w400 mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-pencil-alt text-primary mr-1"></i> Edit
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-times text-danger mr-1"></i> Delete
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="options-container fx-item-zoom-in fx-overlay-slide-right">
            <img class="img-fluid options-item" src="img/photos/photo16.jpg" alt="Image">
            <div class="options-overlay bg-white-90">
              <div class="options-overlay-content">
                <h3 class="h4 mb-2">Image Caption</h3>
                <h4 class="h6 text-gray-dark mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-pencil-alt text-primary mr-1"></i> Edit
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-times text-danger mr-1"></i> Delete
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="options-container fx-item-zoom-in fx-overlay-slide-right">
            <img class="img-fluid options-item" src="img/photos/photo16.jpg" alt="Image">
            <div class="options-overlay bg-primary-dark-op">
              <div class="options-overlay-content">
                <h3 class="h4 text-white mb-2">Image Caption</h3>
                <h4 class="h6 text-white-75 font-w400 mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-thumbs-up text-success mr-1"></i> Like
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-save text-info mr-1"></i> Save
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <!-- END Options Slide Right -->

      <!-- Options Slide Down -->
      <h2 class="content-heading">Overlay Slide Down <small><code class="text-lowercase">.fx-overlay-slide-down</code></small></h2>
      <b-row class="items-push">
        <b-col md="4">
          <div class="options-container fx-item-zoom-in fx-overlay-slide-down">
            <img class="img-fluid options-item" src="img/photos/photo7.jpg" alt="Image">
            <div class="options-overlay bg-black-75">
              <div class="options-overlay-content">
                <h3 class="h4 text-white mb-2">Image Caption</h3>
                <h4 class="h6 text-white-75 font-w400 mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-pencil-alt text-primary mr-1"></i> Edit
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-times text-danger mr-1"></i> Delete
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="options-container fx-item-zoom-in fx-overlay-slide-down">
            <img class="img-fluid options-item" src="img/photos/photo7.jpg" alt="Image">
            <div class="options-overlay bg-white-90">
              <div class="options-overlay-content">
                <h3 class="h4 mb-2">Image Caption</h3>
                <h4 class="h6 text-gray-dark mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-pencil-alt text-primary mr-1"></i> Edit
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-times text-danger mr-1"></i> Delete
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="options-container fx-item-zoom-in fx-overlay-slide-down">
            <img class="img-fluid options-item" src="img/photos/photo7.jpg" alt="Image">
            <div class="options-overlay bg-primary-dark-op">
              <div class="options-overlay-content">
                <h3 class="h4 text-white mb-2">Image Caption</h3>
                <h4 class="h6 text-white-75 font-w400 mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-thumbs-up text-success mr-1"></i> Like
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-save text-info mr-1"></i> Save
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <!-- END Options Slide Down -->

      <!-- Options Slide Top -->
      <h2 class="content-heading">Overlay Slide Top <small><code class="text-lowercase">.fx-overlay-slide-top</code></small></h2>
      <b-row class="items-push">
        <b-col md="4">
          <div class="options-container fx-item-zoom-in fx-overlay-slide-top">
            <img class="img-fluid options-item" src="img/photos/photo8.jpg" alt="Image">
            <div class="options-overlay bg-black-75">
              <div class="options-overlay-content">
                <h3 class="h4 text-white mb-2">Image Caption</h3>
                <h4 class="h6 text-white-75 font-w400 mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-pencil-alt text-primary mr-1"></i> Edit
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-times text-danger mr-1"></i> Delete
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="options-container fx-item-zoom-in fx-overlay-slide-top">
            <img class="img-fluid options-item" src="img/photos/photo8.jpg" alt="Image">
            <div class="options-overlay bg-white-90">
              <div class="options-overlay-content">
                <h3 class="h4 mb-2">Image Caption</h3>
                <h4 class="h6 text-gray-dark mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-pencil-alt text-primary mr-1"></i> Edit
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-times text-danger mr-1"></i> Delete
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="options-container fx-item-zoom-in fx-overlay-slide-top">
            <img class="img-fluid options-item" src="img/photos/photo8.jpg" alt="Image">
            <div class="options-overlay bg-primary-dark-op">
              <div class="options-overlay-content">
                <h3 class="h4 text-white mb-2">Image Caption</h3>
                <h4 class="h6 text-white-75 font-w400 mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-thumbs-up text-success mr-1"></i> Like
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-save text-info mr-1"></i> Save
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <!-- END Options Slide Top -->

      <!-- Options Zoom In -->
      <h2 class="content-heading">Overlay Zoom In <small><code class="text-lowercase">.fx-overlay-zoom-in</code></small></h2>
      <b-row class="items-push">
        <b-col md="4">
          <div class="options-container fx-item-zoom-in fx-overlay-zoom-in">
            <img class="img-fluid options-item" src="img/photos/photo21.jpg" alt="Image">
            <div class="options-overlay bg-black-75">
              <div class="options-overlay-content">
                <h3 class="h4 text-white mb-2">Image Caption</h3>
                <h4 class="h6 text-white-75 font-w400 mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-pencil-alt text-primary mr-1"></i> Edit
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-times text-danger mr-1"></i> Delete
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="options-container fx-item-zoom-in fx-overlay-zoom-in">
            <img class="img-fluid options-item" src="img/photos/photo21.jpg" alt="Image">
            <div class="options-overlay bg-white-90">
              <div class="options-overlay-content">
                <h3 class="h4 mb-2">Image Caption</h3>
                <h4 class="h6 text-gray-dark mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-pencil-alt text-primary mr-1"></i> Edit
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-times text-danger mr-1"></i> Delete
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="options-container fx-item-zoom-in fx-overlay-zoom-in">
            <img class="img-fluid options-item" src="img/photos/photo21.jpg" alt="Image">
            <div class="options-overlay bg-primary-dark-op">
              <div class="options-overlay-content">
                <h3 class="h4 text-white mb-2">Image Caption</h3>
                <h4 class="h6 text-white-75 font-w400 mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-thumbs-up text-success mr-1"></i> Like
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-save text-info mr-1"></i> Save
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <!-- END Options Zoom In -->

      <!-- Options Zoom Out -->
      <h2 class="content-heading">Overlay Zoom Out <small><code class="text-lowercase">.fx-overlay-zoom-out</code></small></h2>
      <b-row class="items-push">
        <b-col md="4">
          <div class="options-container fx-item-zoom-in fx-overlay-zoom-out">
            <img class="img-fluid options-item" src="img/photos/photo10.jpg" alt="Image">
            <div class="options-overlay bg-black-75">
              <div class="options-overlay-content">
                <h3 class="h4 text-white mb-2">Image Caption</h3>
                <h4 class="h6 text-white-75 font-w400 mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-pencil-alt text-primary mr-1"></i> Edit
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-times text-danger mr-1"></i> Delete
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="options-container fx-item-zoom-in fx-overlay-zoom-out">
            <img class="img-fluid options-item" src="img/photos/photo10.jpg" alt="Image">
            <div class="options-overlay bg-white-90">
              <div class="options-overlay-content">
                <h3 class="h4 mb-2">Image Caption</h3>
                <h4 class="h6 text-gray-dark mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-pencil-alt text-primary mr-1"></i> Edit
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-times text-danger mr-1"></i> Delete
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="4">
          <div class="options-container fx-item-zoom-in fx-overlay-zoom-out">
            <img class="img-fluid options-item" src="img/photos/photo10.jpg" alt="Image">
            <div class="options-overlay bg-primary-dark-op">
              <div class="options-overlay-content">
                <h3 class="h4 text-white mb-2">Image Caption</h3>
                <h4 class="h6 text-white-75 font-w400 mb-3">Some Extra Info</h4>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-thumbs-up text-success mr-1"></i> Like
                </b-button>
                <b-button size="sm" variant="light" href="javascript:void(0)">
                  <i class="fa fa-save text-info mr-1"></i> Save
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <!-- END Options Zoom Out -->
    </div>
    <!-- END Page Content -->
  </div>
</template>
