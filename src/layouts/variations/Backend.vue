<template>
  <base-layout :layout-classes="layoutClasses"></base-layout>
</template>

<script>
import BaseLayout from '../Base'

export default {
  name: 'LayoutBackend',
  components: {
    BaseLayout
  },
  data () {
    return {
      // Override and set custom CSS classes to the container of each base layout element
      layoutClasses: {
        sideOverlay: '',
        sidebar: '',
        header: '',
        footer: ''
      }
    }
  },
  created () {
    // Set default elements for this layout
    this.$store.commit('setLayout', {
      header: true,
      sidebar: true,
      sideOverlay: true,
      footer: true,
    })

    // Set various template options
    this.$store.commit('headerStyle', { mode: 'light'})
    this.$store.commit('mainContent', { mode: 'narrow'})
  }
}
</script>
