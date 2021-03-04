/*
 * VueX - State Management
 */

import Vue from 'vue'
import Vuex from 'vuex'

// Register Vuex
Vue.use(Vuex)

// Helpers
const helpers = {
  getWindowWidth () {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  },
  getCurrentYear () {
    return new Date().getFullYear()
  }
}

// Vuex Store
export default new Vuex.Store({
  state: {
    // App vital details
    app: {
      name: 'OneUI Vue Edition',
      version: process.env.PACKAGE_VERSION,
      copyright: helpers.getCurrentYear()
    },

    // Default layout options
    layout: {
      header: true,
      sidebar: true,
      sideOverlay: true,
      footer: true
    },

    // Default template settings
    // Various of them are also set in each layout variation under layouts/variations/ folder
    settings: {
      colorTheme: '', // 'amethyst', 'city', 'flat', 'modern', 'smooth'
      sidebarLeft: true,
      sidebarMini: false,
      sidebarDark: true,
      sidebarVisibleDesktop: true,
      sidebarVisibleMobile: false,
      sideOverlayVisible: false,
      sideOverlayHoverable: false,
      pageOverlay: true,
      headerFixed: true,
      headerDark: false,
      headerSearch: false,
      headerLoader: false,
      pageLoader: false,
      rtlSupport: false,
      sideTransitions: true,
      mainContent: '' // 'boxed', ''narrow'
    }
  },
  getters: {
    // Get App name
    appName: (state) => {
      return state.app.name
    },
    // Get App version
    appVersion: (state) => {
      return state.app.version
    },
    // Get App copyright year
    appCopyright: (state) => {
      return state.app.copyright
    },
    // Get app color theme
    appColorTheme: (state) => {
      return state.settings.colorTheme
    }
  },
  mutations: {
    // Sets the layout, useful for setting different layouts (under layouts/variations/) 
    setLayout (state, payload) {
      state.layout.header = payload.header
      state.layout.sidebar = payload.sidebar
      state.layout.sideOverlay = payload.sideOverlay
      state.layout.footer = payload.footer
    },
    // Sets sidebar visibility (open, close, toggle)
    sidebar (state, payload) {
      if (helpers.getWindowWidth() > 991) {
        if (payload.mode === 'open') {
          state.settings.sidebarVisibleDesktop = true
        } else if (payload.mode === 'close') {
          state.settings.sidebarVisibleDesktop = false
        } else if (payload.mode === 'toggle') {
          state.settings.sidebarVisibleDesktop = !state.settings.sidebarVisibleDesktop
        }
      } else {
        if (payload.mode === 'open') {
          state.settings.sidebarVisibleMobile = true
        } else if (payload.mode === 'close') {
          state.settings.sidebarVisibleMobile = false
        } else if (payload.mode === 'toggle') {
          state.settings.sidebarVisibleMobile = !state.settings.sidebarVisibleMobile
        }
      }
    },
    // Sets sidebar mini mode (on, off, toggle)
    sidebarMini (state, payload) {
      if (helpers.getWindowWidth() > 991) {
        if (payload.mode === 'on') {
          state.settings.sidebarMini = true
        } else if (payload.mode === 'off') {
          state.settings.sidebarMini = false
        } else if (payload.mode === 'toggle') {
          state.settings.sidebarMini = !state.settings.sidebarMini
        }
      }
    },
    // Sets sidebar position (left, right, toggle)
    sidebarPosition (state, payload) {
      if (payload.mode === 'left') {
        state.settings.sidebarLeft = true
      } else if (payload.mode === 'right') {
        state.settings.sidebarLeft = false
      } else if (payload.mode === 'toggle') {
        state.settings.sidebarLeft = !state.settings.sidebarLeft
      }
    },
    // Sets sidebar style (dark, light, toggle)
    sidebarStyle (state, payload) {
      if (payload.mode === 'dark') {
        state.settings.sidebarDark = true
      } else if (payload.mode === 'light') {
        state.settings.sidebarDark = false
      } else if (payload.mode === 'toggle') {
        state.settings.sidebarDark = !state.settings.sidebarDark
      }
    },
    // Sets side overlay visibility (open, close, toggle)
    sideOverlay (state, payload) {
      if (payload.mode === 'open') {
        state.settings.sideOverlayVisible = true
      } else if (payload.mode === 'close') {
        state.settings.sideOverlayVisible = false
      } else if (payload.mode === 'toggle') {
        state.settings.sideOverlayVisible = !state.settings.sideOverlayVisible
      }
    },
    // Sets side overlay hover mode (on, off, toggle)
    sideOverlayHover (state, payload) {
      if (payload.mode === 'on') {
        state.settings.sideOverlayHoverable = true
      } else if (payload.mode === 'off') {
        state.settings.sideOverlayHoverable = false
      } else if (payload.mode === 'toggle') {
        state.settings.sideOverlayHoverable = !state.settings.sideOverlayHoverable
      }
    },
    // Sets page overlay visibility (on, off, toggle)
    pageOverlay (state, payload) {
      if (payload.mode === 'on') {
        state.settings.pageOverlay = true
      } else if (payload.mode === 'off') {
        state.settings.pageOverlay = false
      } else if (payload.mode === 'toggle') {
        state.settings.pageOverlay = !state.settings.pageOverlay
      }
    },
    // Sets header mode (fixed, static, toggle)
    header (state, payload) {
      if (payload.mode === 'fixed') {
        state.settings.headerFixed = true
      } else if (payload.mode === 'static') {
        state.settings.headerFixed = false
      } else if (payload.mode === 'toggle') {
        state.settings.headerFixed = !state.settings.headerFixed
      }
    },
    // Sets header style (dark, light, toggle)
    headerStyle (state, payload) {
      if (payload.mode === 'dark') {
        state.settings.headerDark = true
      } else if (payload.mode === 'light') {
        state.settings.headerDark = false
      } else if (payload.mode === 'toggle') {
        state.settings.headerDark = !state.settings.headerDark
      }
    },
    // Sets header search visibility (on, off, toggle)
    headerSearch (state, payload) {
      if (payload.mode === 'on') {
        state.settings.headerSearch = true
      } else if (payload.mode === 'off') {
        state.settings.headerSearch = false
      } else if (payload.mode === 'toggle') {
        state.settings.headerSearch = !state.settings.headerSearch
      }
    },
    // Sets header loader visibility (on, off, toggle)
    headerLoader (state, payload) {
      if (payload.mode === 'on') {
        state.settings.headerLoader = true
      } else if (payload.mode === 'off') {
        state.settings.headerLoader = false
      } else if (payload.mode === 'toggle') {
        state.settings.headerLoader = !state.settings.headerLoader
      }
    },
    // Sets page loader visibility (on, off, toggle)
    pageLoader (state, payload) {
      if (payload.mode === 'on') {
        state.settings.pageLoader = true
      } else if (payload.mode === 'off') {
        state.settings.pageLoader = false
      } else if (payload.mode === 'toggle') {
        state.settings.pageLoader = !state.settings.pageLoader
      }
    },
    // Sets main content mode (full, boxed, narrow)
    mainContent (state, payload) {
      if (payload.mode === 'full') {
        state.settings.mainContent = ''
      } else if (payload.mode === 'boxed') {
        state.settings.mainContent = 'boxed'
      } else if (payload.mode === 'narrow') {
        state.settings.mainContent = 'narrow'
      }
    },
    // Sets active color theme
    setColorTheme (state, payload) {
      // Matches all classes which start with "theme-"
      let regx = new RegExp('\\btheme-[^ ]*[ ]?\\b', 'g')

      // Set new theme
      state.settings.colorTheme = payload.theme || ''

      // Remove all classes which start with "theme-" from body element
      document.body.className = document.body.className.replace(regx, '')

      // If theme is set, add the theme class to body element
      if (payload.theme) {
        document.body.classList.add('theme-' + payload.theme)
      }
    }
  }
})
