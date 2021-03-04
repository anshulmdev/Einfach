<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Gallery" subtitle="Clean and easy way to showcase your images.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Plugins</b-breadcrumb-item>
          <b-breadcrumb-item active>Gallery</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <gallery :images="photos" :index="index" :options="{ indicatorOptions: { thumbnailIndicators: true }}" @close="index = null"></gallery>
      <b-row class="items-push">
        <b-col md="6" lg="4" xl="3" class="animated fadeIn" v-for="(photo, photoIndex) in photos" :key="photoIndex">
          <a class="img-link img-link-zoom-in img-thumb" href="javascript:void(0)" @click="index = photoIndex">
            <img class="img-fluid" :src="photo" alt="Photo">
          </a>
        </b-col>
      </b-row>
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
// Vue Gallery, for more info and examples you can check out https://github.com/RobinCK/vue-gallery
import VueGallery from 'vue-gallery'

export default {
  components: {
    'gallery': VueGallery
  },
  data () {
    return {
      index: null,
      photos: [
        'img/photos/photo2@2x.jpg',
        'img/photos/photo3@2x.jpg',
        'img/photos/photo4@2x.jpg',
        'img/photos/photo5@2x.jpg',
        'img/photos/photo6@2x.jpg',
        'img/photos/photo7@2x.jpg',
        'img/photos/photo8@2x.jpg',
        'img/photos/photo9@2x.jpg',
        'img/photos/photo10@2x.jpg',
        'img/photos/photo11@2x.jpg',
        'img/photos/photo12@2x.jpg',
        'img/photos/photo13@2x.jpg',
        'img/photos/photo14@2x.jpg',
        'img/photos/photo15@2x.jpg',
        'img/photos/photo16@2x.jpg',
        'img/photos/photo17@2x.jpg'
      ]
    }
  }
}
</script>