<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Carousel" subtitle="Flexible and mobile friendly content sliders.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Plugins</b-breadcrumb-item>
          <b-breadcrumb-item active>Carousel</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <b-row>
        <b-col md="6">
          <base-block rounded title="Default with Indicators" content-full>
            <b-carousel controls indicators :interval="4000">
              <b-carousel-slide img-src="img/photos/photo29.jpg"></b-carousel-slide>
              <b-carousel-slide img-src="img/photos/photo30.jpg"></b-carousel-slide>
              <b-carousel-slide img-src="img/photos/photo31.jpg"></b-carousel-slide>
              <b-carousel-slide img-src="img/photos/photo32.jpg"></b-carousel-slide>
            </b-carousel>
          </base-block>
        </b-col>
        <b-col md="6">
          <base-block rounded title="Fade with Indicators" content-full>
            <b-carousel fade controls indicators :interval="4000">
              <b-carousel-slide img-src="img/photos/photo32.jpg"></b-carousel-slide>
              <b-carousel-slide img-src="img/photos/photo30.jpg"></b-carousel-slide>
              <b-carousel-slide img-src="img/photos/photo29.jpg"></b-carousel-slide>
              <b-carousel-slide img-src="img/photos/photo31.jpg"></b-carousel-slide>
            </b-carousel>
          </base-block>
        </b-col>
        <b-col md="6">
          <base-block rounded title="No animation with Indicators" content-full>
            <b-carousel no-animation controls indicators :interval="4000">
              <b-carousel-slide img-src="img/photos/photo30.jpg"></b-carousel-slide>
              <b-carousel-slide img-src="img/photos/photo32.jpg"></b-carousel-slide>
              <b-carousel-slide img-src="img/photos/photo31.jpg"></b-carousel-slide>
              <b-carousel-slide img-src="img/photos/photo29.jpg"></b-carousel-slide>
            </b-carousel>
          </base-block>
        </b-col>
        <b-col md="6">
          <base-block rounded title="Only Arrows" content-full>
            <b-carousel controls :interval="4000">
              <b-carousel-slide img-src="img/photos/photo30.jpg"></b-carousel-slide>
              <b-carousel-slide img-src="img/photos/photo29.jpg"></b-carousel-slide>
              <b-carousel-slide img-src="img/photos/photo32.jpg"></b-carousel-slide>
              <b-carousel-slide img-src="img/photos/photo31.jpg"></b-carousel-slide>
            </b-carousel>
          </base-block>
        </b-col>
        <b-col md="6">
          <base-block rounded title="Simple with No Pause on Hover" content-full>
            <b-carousel no-hover-pause :interval="4000">
              <b-carousel-slide img-src="img/photos/photo31.jpg"></b-carousel-slide>
              <b-carousel-slide img-src="img/photos/photo30.jpg"></b-carousel-slide>
              <b-carousel-slide img-src="img/photos/photo32.jpg"></b-carousel-slide>
              <b-carousel-slide img-src="img/photos/photo29.jpg"></b-carousel-slide>
            </b-carousel>
          </base-block>
        </b-col>
        <b-col md="6">
          <base-block rounded title="No autoplay" content-full>
            <b-carousel controls indicators :interval="0">
              <b-carousel-slide img-src="img/photos/photo31.jpg"></b-carousel-slide>
              <b-carousel-slide img-src="img/photos/photo29.jpg"></b-carousel-slide>
              <b-carousel-slide img-src="img/photos/photo30.jpg"></b-carousel-slide>
              <b-carousel-slide img-src="img/photos/photo32.jpg"></b-carousel-slide>
            </b-carousel>
          </base-block>
        </b-col>
      </b-row>
    </div>
    <!-- END Page Content -->
  </div>
</template>