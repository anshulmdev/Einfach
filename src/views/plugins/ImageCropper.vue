<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Image Cropper" subtitle="Powered by Cropper.js plugin.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Plugins</b-breadcrumb-item>
          <b-breadcrumb-item active>Image Cropper</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Toolbar -->
      <base-block rounded class="mb-2" content-class="text-center">
        <b-button-group class="push">
          <b-button size="sm" variant="alt-primary" v-b-tooltip.hover.nofade.top="'Set drag mode to move'" @click.prevent="setDragMode('move')">
            <i class="fa fa-arrows-alt"></i>
          </b-button>
          <b-button size="sm" variant="alt-primary" v-b-tooltip.hover.nofade.top="'Set drag mode to crop'" @click.prevent="setDragMode('crop')">
            <i class="fa fa-crop"></i>
          </b-button>
        </b-button-group>
        <b-button-group class="push">
          <b-button size="sm" variant="alt-primary" v-b-tooltip.hover.nofade.top="'Zoom In'" @click.prevent="zoom(0.1)">
            <i class="fa fa-search-plus"></i>
          </b-button>
          <b-button size="sm" variant="alt-primary" v-b-tooltip.hover.nofade.top="'Zoom Out'" @click.prevent="zoom(-0.1)">
            <i class="fa fa-search-minus"></i>
          </b-button>
        </b-button-group>
        <b-button-group class="push">
          <b-button size="sm" variant="alt-primary" v-b-tooltip.hover.nofade.top="'Rotate Left'" @click.prevent="rotate(-90)">
            <i class="fa fa-undo-alt"></i>
          </b-button>
          <b-button size="sm" variant="alt-primary" v-b-tooltip.hover.nofade.top="'Rotate Right'" @click.prevent="rotate(90)">
            <i class="fa fa-redo-alt"></i>
          </b-button>
        </b-button-group>
        <b-button-group class="push">
          <b-button size="sm" variant="alt-primary" v-b-tooltip.hover.nofade.top="'Flip Horizontal'" @click.prevent="flipX" ref="flipX">
            <i class="fa fa-arrows-alt-h"></i>
          </b-button>
          <b-button size="sm" variant="alt-primary" v-b-tooltip.hover.nofade.top="'Flip Vertical'" @click.prevent="flipY" ref="flipY">
            <i class="fa fa-arrows-alt-v"></i>
          </b-button>
        </b-button-group>
        <b-button-group class="push">
          <b-button size="sm" variant="alt-primary" v-b-tooltip.hover.nofade.top="'Set Aspect Ratio'" @click.prevent="setAspectRatio(16/9)">
            16:9
          </b-button>
          <b-button size="sm" variant="alt-primary" v-b-tooltip.hover.nofade.top="'Set Aspect Ratio'" @click.prevent="setAspectRatio(4/3)">
            4:3
          </b-button>
          <b-button size="sm" variant="alt-primary" v-b-tooltip.hover.nofade.top="'Set Aspect Ratio'" @click.prevent="setAspectRatio(1)">
            1:1
          </b-button>
          <b-button size="sm" variant="alt-primary" v-b-tooltip.hover.nofade.top="'Set Aspect Ratio'" @click.prevent="setAspectRatio(2/3)">
            2:3
          </b-button>
        </b-button-group>
        <b-button size="sm" variant="alt-primary" class="push" v-b-tooltip.hover.nofade.top="'Set Aspect Ratio'" @click.prevent="setAspectRatio(NaN)">
          Free
        </b-button>
        <b-button-group class="push">
          <b-button size="sm" variant="alt-primary" v-b-tooltip.hover.nofade.top="'Clear'" @click.prevent="reset">
            <i class="fa fa-times"></i>
          </b-button>
          <b-button size="sm" variant="alt-primary" v-b-tooltip.hover.nofade.top="'Crop'" @click.prevent="getCropBoxData">
            <i class="fa fa-check"></i>
          </b-button>
        </b-button-group>
      </base-block>
      <!-- END Toolbar -->

      <!-- Image Cropper -->
      <base-block rounded content-full>
        <b-row class="items-push">
          <b-col xl="6">
            <h4 class="border-bottom pb-2">Cropper</h4>
            <div>
              <vue-cropper ref="cropper" :aspect-ratio="4 / 3" :src="imgSrc" alt="Source Image" preview=".js-img-cropper-preview"></vue-cropper>
            </div>
          </b-col>
          <b-col xl="6">
            <h4 class="border-bottom pb-2">Preview</h4>
            <div class="overflow-hidden mb-2">
              <div class="js-img-cropper-preview mx-auto overflow-hidden" style="height: 200px;"></div>
            </div>
            <h4 class="border-bottom pb-2">Crop Data</h4>
            <div class="mx-md-6">
              <b-textarea v-model="cropData" rows="6"></b-textarea>  
            </div>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Image Cropper -->      
    </div>
    <!-- END Page Content -->
  </div>
</template>

<style lang="scss">
// CropperJS
@import '~cropperjs/dist/cropper.css';
</style>

<script>
// Vue Cropperjs, for more info and examples you can check out https://github.com/Agontuk/vue-cropperjs
import VueCropper from 'vue-cropperjs'

export default {
  components: {
    VueCropper
  },
  data () {
    return {
      imgSrc: '/img/photos/photo30@2x.jpg',
      cropData: null
    };
  },
  methods: {
    flipX () {
      const dom = this.$refs.flipX
      let scale = dom.getAttribute('data-scale')
      scale = scale ? -scale : -1
      this.$refs.cropper.scaleX(scale)
      dom.setAttribute('data-scale', scale)
    },
    flipY () {
      const dom = this.$refs.flipY
      let scale = dom.getAttribute('data-scale')
      scale = scale ? -scale : -1
      this.$refs.cropper.scaleY(scale)
      dom.setAttribute('data-scale', scale)
    },
    zoom (percent) {
      this.$refs.cropper.relativeZoom(percent)
    },
    rotate (deg) {
      this.$refs.cropper.rotate(deg)
    },
    reset () {
      this.$refs.cropper.reset()
      this.cropData = null
    },
    setDragMode (mode) {
      this.$refs.cropper.setDragMode(mode)
    },
    setAspectRatio (aspect) {
      this.$refs.cropper.setAspectRatio(aspect)
    },
    getCropBoxData () {
      this.cropData = JSON.stringify(this.$refs.cropper.getCropBoxData(), null, 4)
    }
  }
}
</script>