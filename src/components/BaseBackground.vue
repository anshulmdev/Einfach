<template>
  <div
    :style="image ? `background-image: url('${image}');` : false"
    :class="classContainer"
    class="bg-image"
  >
    <div v-if="innerClass" :class="classContainerInner">
      <slot></slot>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseBackground',
  props: {
    image: {
      type: String,
      description: 'The url of the image to show'
    },
    innerClass: {
      type: String,
      description: 'The class of the inner div. Usually a background color with opacity class'
    },
    imageTop: {
      type: Boolean,
      default: false,
      description: 'Align the image background to the top'
    },
    imageBottom: {
      type: Boolean,
      default: false,
      description: 'Align the image background to the bottom'
    },
    imageFixed: {
      type: Boolean,
      default: false,
      description: 'Set the background to fixed for a parallax effect'
    }
  },
  computed: {
    classContainer () {
      return {
        'bg-image-top': this.imageTop,
        'bg-image-bottom': this.imageBottom,
        'bg-image-fixed': this.imageFixed
      }
    },
    classContainerInner () {
      return {
        [this.innerClass]: this.innerClass
      }
    }
  }
}
</script>
