<template>
  <component
    :is="tag"
    :href="tag === 'a' ? '#' : false"
    :class="classContainer"
    class="block"
  >
    <div class="block-header" v-if="$slots.header || $slots.title || title" :class="classContainerHeader">
      <slot name="header">
        <h3 class="block-title">
          <slot name="title"></slot>
          {{ title }} <small v-if="subtitle">{{ subtitle }}</small>
          <slot name="subtitle"></slot>
        </h3>
        <div class="block-options" v-if="$slots.options || btnOptionFullscreen || btnOptionPinned || btnOptionContent || btnOptionClose" :class="classContainerOptions">
          <slot name="options"></slot>
          <button type="button" class="btn-block-option" @click="fullscreenToggle" v-if="btnOptionFullscreen">
            <i :class="{'si si-size-fullscreen': !optionFullscreen, 'si si-size-actual': optionFullscreen}"></i>
          </button>
          <button type="button" class="btn-block-option" @click="pinnedToggle" v-if="btnOptionPinned">
            <i class="si si-pin"></i>
          </button>
          <button type="button" class="btn-block-option" @click="contentToggle" v-if="btnOptionContent">
            <i :class="{'si si-arrow-up': !optionContentHide, 'si si-arrow-down': optionContentHide}"></i>
          </button>
          <button type="button" class="btn-block-option" @click="close" v-if="btnOptionClose">
            <i class="si si-close"></i>
          </button>
        </div>
      </slot>
    </div>
    <div v-if="!$slots.content" class="block-content" :class="classContainerContent">
      <div v-if="this.ribbon" class="ribbon-box">
        <slot name="ribbon">
          {{ ribbon }}
        </slot>
      </div>
      <slot></slot>
    </div>
    <slot name="content"></slot>
  </component>
</template>

<script>
export default {
  name: 'BaseBlock',
  props: {
    tag: {
      type: String,
      default: 'div',
      description: 'The HTML tag of the component (div, a)'
    },
    title: {
      type: String,
      description: 'The title of the block'
    },
    subtitle: {
      type: String,
      description: 'The subtitle of the block'
    },
    bordered: {
      type: Boolean,
      default: false,
      description: 'Bordered block style'
    },
    rounded: {
      type: Boolean,
      default: false,
      description: 'Rounded block style'
    },
    themed: {
      type: Boolean,
      default: false,
      description: 'Themed block style'
    },
    transparent: {
      type: Boolean,
      default: false,
      description: 'Transparent block style'
    },
    fxShadow: {
      type: Boolean,
      default: false,
      description: 'Shadow fx block style'
    },
    fxPop: {
      type: Boolean,
      default: false,
      description: 'Pop fx block style'
    },
    fxRotateRight: {
      type: Boolean,
      default: false,
      description: 'Rotate right fx block style'
    },
    fxRotateLeft: {
      type: Boolean,
      default: false,
      description: 'Rotate left fx block style'
    },
    linkShadow: {
      type: Boolean,
      default: false,
      description: 'Shadow style for block links'
    },
    linkPop: {
      type: Boolean,
      default: false,
      description: 'Pop style for block links'
    },
    linkRotate: {
      type: Boolean,
      default: false,
      description: 'Rotate style for block links'
    },
    headerClass: {
      type: String,
      description: 'Add additional classes to default block-header'
    },
    optionsClass: {
      type: String,
      description: 'Add additional classes to default block-options'
    },
    contentClass: {
      type: String,
      description: 'Add additional classes to default block-content'
    },
    headerBg: {
      type: Boolean,
      default: false,
      description: 'Add the default header background'
    },
    headerRtl: {
      type: Boolean,
      default: false,
      description: 'Reverse the order of elements in header'
    },
    contentFull: {
      type: Boolean,
      default: false,
      description: 'Add full padding to the bottom of the default block-content'
    },
    ribbon: {
      type: [Boolean, String],
      default: false,
      description: 'Enable the ribbon or enable it and also specify its content by setting a string value.'
    },
    ribbonLeft: {
      type: Boolean,
      default: false,
      description: 'Position ribbon to the left'
    },
    ribbonBottom: {
      type: Boolean,
      default: false,
      description: 'Position ribbon to the bottom'
    },
    ribbonBookmark: {
      type: Boolean,
      default: false,
      description: 'Set the bookmark type to your ribbon'
    },
    ribbonModern: {
      type: Boolean,
      default: false,
      description: 'Set the modern type to your ribbon'
    },
    ribbonVariant: {
      type: String,
      default: 'primary',
      description: 'Set a different ribbon variant (primary, info, warning, danger, success, glass)'
    },
    modeLoading: {
      type: Boolean,
      default: false,
      description: 'Loading block mode'
    },
    modeFullscreen: {
      type: Boolean,
      default: false,
      description: 'Fullscreen block mode'
    },
    modePinned: {
      type: Boolean,
      default: false,
      description: 'Pinned block mode'
    },
    modeContentHide: {
      type: Boolean,
      default: false,
      description: 'Hide block’s content'
    },
    modeHide: {
      type: Boolean,
      default: false,
      description: 'Hide block itself'
    },
    btnOptionFullscreen: {
      type: Boolean,
      defaul: false,
      description: 'Enable the fullscreen mode button'
    },
    btnOptionPinned: {
      type: Boolean,
      defaul: false,
      description: 'Enable the pinned mode button'
    },
    btnOptionContent: {
      type: Boolean,
      defaul: false,
      description: 'Enable the content toggle button'
    },
    btnOptionClose: {
      type: Boolean,
      defaul: false,
      description: 'Enable the close mode button'
    },
  },
  data () {
    return {
      // If the block is in loading mode
      optionLoading: this.modeLoading,

      // If the block is in fullscreen mode
      optionFullscreen: this.modeFullscreen,

      // If the block is in pinned mode
      optionPinned: this.modePinned,

      // If the default block-content is hidden
      optionContentHide: this.modeContentHide,

      // If block itself is hidden
      optionHide: this.modeHide
    }
  },
  computed: {
    classContainer () {
      return {
        'block-bordered': this.bordered,
        'block-rounded': this.rounded,
        'block-themed': this.themed,
        'block-transparent': this.transparent,
        'block-fx-shadow': this.fxShadow,
        'block-fx-pop': this.fxPop,
        'block-fx-rotate-right': this.fxRotateRight,
        'block-fx-rotate-left': this.fxRotateLeft,
        'block-link-shadow': this.linkShadow,
        'block-link-pop': this.linkPop,
        'block-link-rotate': this.linkRotate,
        'block-mode-loading': this.optionLoading,
        'block-mode-fullscreen': this.optionFullscreen,
        'block-mode-pinned': this.optionPinned,
        'block-mode-hidden': this.optionContentHide,
        'd-none': this.optionHide
      }
    },
    classContainerHeader () {
      return {
        'block-header-default': this.headerBg,
        'block-header-rtl': this.headerRtl,
        [this.headerClass]: this.headerClass
      }
    },
    classContainerOptions () {
      return {
        [this.optionsClass]: this.optionsClass
      }
    },
    classContainerContent () {
      return {
        'block-content-full': this.contentFull,
        'ribbon': this.ribbon,
        'ribbon-left': this.ribbon && this.ribbonLeft,
        'ribbon-bottom': this.ribbon && this.ribbonBottom,
        'ribbon-bookmark': this.ribbon && this.ribbonBookmark,
        'ribbon-modern': this.ribbon && this.ribbonModern,
        [`ribbon-${this.ribbonVariant}`]: this.ribbon && this.ribbonVariant,
        [this.contentClass]: this.contentClass
      }
    }
  },
  methods: {
    fullscreenToggle () {
      this.optionPinned = false
      this.optionFullscreen = !this.optionFullscreen
    },
    fullscreenOn () {
      this.optionPinned = false
      this.optionFullscreen = true
    },
    fullscreenOff () {
      this.optionPinned = false
      this.optionFullscreen = false
    },
    pinnedToggle () {
      this.optionFullscreen = false
      this.optionPinned = !this.optionPinned
    },
    pinnedOn () {
      this.optionFullscreen = false
      this.optionPinned = true
    },
    pinnedOff () {
      this.optionFullscreen = false
      this.optionPinned = false
    },
    contentToggle () {
      this.optionContentHide = !this.optionContentHide
    },
    contentShow () {
      this.optionContentHide = false
    },
    contentHide () {
      this.optionContentHide = true
    },
    stateToggle () {
      this.optionLoading = !this.optionLoading
    },
    stateLoading () {
      this.optionLoading = true
    },
    stateNormal () {
      this.optionLoading = false
    },
    open () {
      this.optionHide = false
    },
    close () {
      this.optionHide = true
    }
  }
}
</script>
