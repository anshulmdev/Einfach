<template>
  <ul :class="classContainer">
    <li
      v-for="(node, index) in nodes"
      :key="`node-${index}`"
      :class="{
        'nav-main-heading': node.heading,
        'nav-main-item': !node.heading,
        'open': node.sub && node.subActivePaths ? subIsActive(node.subActivePaths) : false
      }"
    >
      {{ node.heading ? node.name : '' }}
      <router-link
        v-if="!node.heading"
        :to="node.to || '#'"
        class="nav-main-link"
        :class="node.sub ? 'nav-main-link-submenu' : ''"
        :active-class="(node.to && node.to !== '#') ? 'active' : ''"
        :event="node.sub ? '' : 'click'"
        @click.native="linkClicked($event, node.sub)"
      >
        <i v-if="node.icon" :class="`nav-main-link-icon ${node.icon}`"></i>
        <span v-if="node.name" class="nav-main-link-name">{{ node.name }}</span>
        <span v-if="node.badge" class="nav-main-link-badge badge badge-pill badge-primary"
            :class="node['badge-variant'] ? `badge-${node['badge-variant']}` : 'badge-primary' "
        >{{ node.badge }}</span>
      </router-link>
      <base-navigation v-if="node.sub" :nodes="node.sub" sub-menu></base-navigation>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'BaseNavigation',
  props: {
    nodes: {
      type: Array,
      description: 'The nodes of the navigation'
    },
    subMenu: {
      type: Boolean,
      default: false,
      description: 'If true, a submenu will be rendered'
    },
    dark: {
      type: Boolean,
      default: false,
      description: 'Dark mode for menu'
    },
    horizontal: {
      type: Boolean,
      default: false,
      description: 'Horizontal menu in large screen width'
    },
    horizontalHover: {
      type: Boolean,
      default: false,
      description: 'Hover mode for horizontal menu'
    },
    horizontalCenter: {
      type: Boolean,
      default: false,
      description: 'Center mode for horizontal menu'
    },
    horizontalJustify: {
      type: Boolean,
      default: false,
      description: 'Justify mode for horizontal menu'
    }
  },
  computed: {
    classContainer () {
      return {
        'nav-main': !this.subMenu,
        'nav-main-submenu': this.subMenu,
        'nav-main-dark': this.dark,
        'nav-main-horizontal': this.horizontal,
        'nav-main-hover': this.horizontalHover,
        'nav-main-horizontal-center': this.horizontalCenter,
        'nav-main-horizontal-justify': this.horizontalJustify
      }
    }
  },
  methods: {
    subIsActive (paths) {
      const activePaths = Array.isArray(paths) ? paths : [paths]

      return activePaths.some(path => {
        return this.$route.path.indexOf(path) === 0 // current path starts with this path string
      })
    },
    linkClicked (e, submenu) {
      // Get window width
      let windowW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

      if (submenu) {
        // Get closest li element
        let el = e.target.closest('li')

        // Check if we are in a large screen, have horizontal navigation and hover is enabled
        if (!(windowW > 991 && this.horizontal && this.horizontalHover)) {
          if (el.classList.contains('open')) {
            // If submenu is open, close it..
            el.classList.remove('open')
          } else {
            // .. else if submenu is closed, close all other (same level) submenus first before open it
            el.closest('ul').children.forEach(element => {
              element.classList.remove('open')
            })

            el.classList.add('open')
          }
        }
      } else {
        // If we are in mobile, close the sidebar
        if (windowW < 992) {
          this.$store.commit('sidebar', { mode: 'close' })
        }
      }
    }
  }
}
</script>
