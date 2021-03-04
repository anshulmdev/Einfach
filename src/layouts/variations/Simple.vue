<template>
  <base-layout></base-layout>
</template>

<script>
import BaseLayout from '../Base'

export default {
  name: 'LayoutSimple',
  components: {
    BaseLayout
  },
  created () {
    // Set default elements for this layout
    this.$store.commit('setLayout', {
      header: false,
      sidebar: false,
      sideOverlay: false,
      footer: false
    })

    // Set various template options
    this.$store.commit('mainContent', { mode: 'full'})
  }
}
</script>
