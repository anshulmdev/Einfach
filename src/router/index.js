/*
 * Default Router
 */

// Vue and Vue Router
import Vue from 'vue'
import Router from 'vue-router'
import firebase from '../firebase'

// Main layouts
import LayoutBackend from '@/layouts/variations/Backend.vue'
import LayoutBackendBoxed from '@/layouts/variations/BackendBoxed.vue'
import LayoutSimple from '@/layouts/variations/Simple.vue'

// Register Vue Router
Vue.use(Router)

// Frontend: Landing
const Landing = () => import("@/views/Landing.vue")

// Backend: General
const Dashboard = () => import(/* webpackChunkName: "pages-dashboard", webpackPrefetch: true */"@/views/Dashboard.vue")

// Backend: Blocks
const BlockStyles = () => import("@/views/blocks/Styles.vue")
const BlockOptions = () => import("@/views/blocks/Options.vue")
const BlockForms = () => import("@/views/blocks/Forms.vue")
const BlockThemed = () => import("@/views/blocks/Themed.vue")
const BlockApi = () => import("@/views/blocks/Api.vue")

// Backend: Elements
const ElementsGrid = () => import("@/views/elements/Grid.vue")
const ElementsTypography = () => import("@/views/elements/Typography.vue")
const ElementsIcons = () => import("@/views/elements/Icons.vue")
const ElementsButtons = () => import("@/views/elements/Buttons.vue")
const ElementsButtonGroups = () => import("@/views/elements/ButtonGroups.vue")
const ElementsDropdowns = () => import("@/views/elements/Dropdowns.vue")
const ElementsTabs = () => import("@/views/elements/Tabs.vue")
const ElementsNavigation = () => import("@/views/elements/Navigation.vue")
const ElementsNavigationHorizontal = () => import("@/views/elements/NavigationHorizontal.vue")
const ElementsProgress = () => import("@/views/elements/Progress.vue")
const ElementsAlerts = () => import("@/views/elements/Alerts.vue")
const ElementsTooltips = () => import("@/views/elements/Tooltips.vue")
const ElementsPopovers = () => import("@/views/elements/Popovers.vue")
const ElementsModals = () => import("@/views/elements/Modals.vue")
const ElementsImages = () => import("@/views/elements/Images.vue")
const ElementsTimeline = () => import(/* webpackChunkName: "elements-timeline" */"@/views/elements/Timeline.vue")
const ElementsRibbons = () => import("@/views/elements/Ribbons.vue")
const ElementsAnimations = () => import("@/views/elements/Animations.vue")
const ElementsColorThemes = () => import("@/views/elements/ColorThemes.vue")

// Backend: Tables
const TablesStyles = () => import("@/views/tables/Styles.vue")
const TablesResponsive = () => import("@/views/tables/Responsive.vue")
const TablesHelpers = () => import("@/views/tables/Helpers.vue")
const TablesPricing = () => import("@/views/tables/Pricing.vue")

// Backend: Forms
const FormsCreate = () => import("@/views/forms/create.vue")
const FormsEmail = () => import("@/views/forms/Email.vue")
const FormsElements = () => import("@/views/forms/Elements.vue")
const FormsCustomControls = () => import("@/views/forms/CustomControls.vue")
const FormsLayouts = () => import("@/views/forms/Layouts.vue")
const FormsInputGroups = () => import("@/views/forms/InputGroups.vue")
const FormsPlugins = () => import(/* webpackChunkName: "forms-plugins" */"@/views/forms/Plugins.vue")
const FormsEditors = () => import(/* webpackChunkName: "forms-editors" */"@/views/forms/Editors.vue")
const FormsValidation = () => import(/* webpackChunkName: "forms-validation" */"@/views/forms/Validation.vue")

// Backend: Applicants
const ApplicantsApplied = () => import("@/views/applicants/Applied.vue")
const ApplicantsInvited = () => import("@/views/applicants/Invited.vue")
const ApplicantsRejected = () => import("@/views/applicants/Rejected.vue")
const ApplicantsShortlisted = () => import("@/views/applicants/Shortlisted.vue")
const ApplicantsCompleted = () => import("@/views/applicants/Completed.vue")
const ApplicantDetails = () => import("@/views/applicants/Details.vue")

// Backend: Library
const LibraryRegex = () => import("@/views/library/Regex.vue")
const LibraryMultipleChoice = () => import("@/views/library/MultipleChoice.vue")
const LibraryRESTAPI = () => import("@/views/library/Rest.vue")

// Backend: Coding
const Array = () => import("@/views/coding/array.vue")
const DP = () => import("@/views/coding/dp.vue")

// Backend: Commits
const CommitsPnP = () => import("@/views/commit/pnp.vue")
const CommitsLive = () => import("@/views/commit/live.vue")

// Backend: Company
const CompanyProfile = () => import("@/views/company/Profile.vue")
const CompanyTimeline = () => import("@/views/company/Timeline.vue")

// Backend: Subscription
const SubscriptionActive = () => import("@/views/subscription/Active.vue")
const SubscriptionPayment = () => import("@/views/subscription/Payment.vue")

// Backend: Support
const Documentation = () => import("@/views/support/Documentation.vue")
const SupportTicket = () => import("@/views/support/Ticket.vue")

// Backend: Plugins
const PluginsAppear = () => import("@/views/plugins/Appear.vue")
const PluginsImageCropper = () => import(/* webpackChunkName: "plugins-image-cropper" */"@/views/plugins/ImageCropper.vue")
const PluginsCharts = () => import(/* webpackChunkName: "plugins-charts" */"@/views/plugins/Charts.vue")
const PluginsCalendar = () => import(/* webpackChunkName: "plugins-calendar" */"@/views/plugins/Calendar.vue")
const PluginsCarousel = () => import("@/views/plugins/Carousel.vue")
const PluginsSyntaxHighlighting = () => import(/* webpackChunkName: "plugins-syntax-highlighting" */"@/views/plugins/SyntaxHighlighting.vue")
const PluginsRating = () => import(/* webpackChunkName: "plugins-rating" */"@/views/plugins/Rating.vue")
const PluginsDialogs = () => import(/* webpackChunkName: "plugins-dialogs" */"@/views/plugins/Dialogs.vue")
const PluginsNotifications = () => import("@/views/plugins/Notifications.vue")
const PluginsGallery = () => import(/* webpackChunkName: "plugins-gallery" */"@/views/plugins/Gallery.vue")

// Backend: Layout
const LayoutPageDefault = () => import("@/views/layout/page/Default.vue")
const LayoutPageFlipped = () => import("@/views/layout/page/Flipped.vue")
const LayoutMainContentFullWidth = () => import("@/views/layout/main-content/FullWidth.vue")
const LayoutMainContentNarrow = () => import("@/views/layout/main-content/Narrow.vue")
const LayoutMainContentBoxed = () => import("@/views/layout/main-content/Boxed.vue")
const LayoutHeaderFixedLight = () => import("@/views/layout/header/FixedLight.vue")
const LayoutHeaderFixedDark = () => import("@/views/layout/header/FixedDark.vue")
const LayoutHeaderStaticLight = () => import("@/views/layout/header/StaticLight.vue")
const LayoutHeaderStaticDark = () => import("@/views/layout/header/StaticDark.vue")
const LayoutSidebarMini = () => import("@/views/layout/sidebar/Mini.vue")
const LayoutSidebarLight = () => import("@/views/layout/sidebar/Light.vue")
const LayoutSidebarDark = () => import("@/views/layout/sidebar/Dark.vue")
const LayoutSidebarHidden = () => import("@/views/layout/sidebar/Hidden.vue")
const LayoutSideOverlayVisible = () => import("@/views/layout/side-overlay/Visible.vue")
const LayoutSideOverlayHoverMode = () => import("@/views/layout/side-overlay/HoverMode.vue")
const LayoutSideOverlayNoPageOverlay = () => import("@/views/layout/side-overlay/NoPageOverlay.vue")
const LayoutLoaders = () => import("@/views/layout/Loaders.vue")
const LayoutApi = () => import("@/views/layout/Api.vue")

// Backend: Generic Pages
const PagesGenericBlank = () => import("@/views/pages/generic/Blank.vue")
const PagesGenericBlankBlock = () => import("@/views/pages/generic/BlankBlock.vue")
const PagesGenericSearch = () => import("@/views/pages/generic/Search.vue")
const PagesGenericProfile = () => import("@/views/pages/generic/Profile.vue")
const PagesGenericInvoice = () => import("@/views/pages/generic/Invoice.vue")
const PagesGenericFaq = () => import("@/views/pages/generic/Faq.vue")

// Pages: Various
const PagesVariousMaintenance = () => import("@/views/pages/various/Maintenance.vue")
const PagesVariousStatus = () => import("@/views/pages/various/Status.vue")
const PagesVariousComingSoon = () => import(/* webpackChunkName: "various-coming-soon" */"@/views/pages/various/ComingSoon.vue")

// Backend: Auth Pages
const PagesAuthAll = () => import("@/views/pages/auth/All.vue")
const Inbox = () => import("@/views/Inbox.vue")

// Backend: Error Pages
const PagesErrorsAll = () => import("@/views/pages/errors/All.vue")

// Pages: Auth
const AuthSignIn = () => import(/* webpackChunkName: "auth-signin" */"@/views/pages/auth/SignIn.vue")
const AuthApplications = () => import(/* webpackChunkName: "auth-Applications" */"@/views/pages/auth/Applications.vue")
const AuthSignIn2 = () => import(/* webpackChunkName: "auth-signin2" */"@/views/pages/auth/SignIn2.vue")
const AuthSignIn3 = () => import(/* webpackChunkName: "auth-signin3" */"@/views/pages/auth/SignIn3.vue")
const AuthSignUp = () => import(/* webpackChunkName: "auth-signup" */"@/views/pages/auth/SignUp.vue")
const AuthSignUp2 = () => import(/* webpackChunkName: "auth-signup2" */"@/views/pages/auth/SignUp2.vue")
const AuthSignUp3 = () => import(/* webpackChunkName: "auth-signup3" */"@/views/pages/auth/SignUp3.vue")
const AuthLock = () => import(/* webpackChunkName: "auth-lock" */"@/views/pages/auth/Lock.vue")
const AuthLock2 = () => import(/* webpackChunkName: "auth-lock2" */"@/views/pages/auth/Lock2.vue")
const AuthLock3 = () => import(/* webpackChunkName: "auth-lock3" */"@/views/pages/auth/Lock3.vue")
const AuthReminder = () => import(/* webpackChunkName: "auth-reminder" */"@/views/pages/auth/Reminder.vue")
const AuthReminder2 = () => import(/* webpackChunkName: "auth-reminder2" */"@/views/pages/auth/Reminder2.vue")
const AuthReminder3 = () => import(/* webpackChunkName: "auth-reminder3" */"@/views/pages/auth/Reminder3.vue")

// Pages: Errors
const Errors400 = () => import("@/views/pages/errors/400.vue")
const Errors401 = () => import("@/views/pages/errors/401.vue")
const Errors403 = () => import("@/views/pages/errors/403.vue")
const Errors404 = () => import("@/views/pages/errors/404.vue")
const Errors500 = () => import("@/views/pages/errors/500.vue")
const Errors503 = () => import("@/views/pages/errors/503.vue")

// Pages: Boxed Backend
const BoxedDashboard = () => import(/* webpackChunkName: "pages-boxed-dashboard" */"@/views/pages/boxed/Dashboard.vue")
const BoxedSearch = () => import("@/views/pages/boxed/Search.vue")
const BoxedSimple1 = () => import("@/views/pages/boxed/Simple1.vue")
const BoxedSimple2 = () => import("@/views/pages/boxed/Simple2.vue")
const BoxedImage1 = () => import("@/views/pages/boxed/Image1.vue")
const BoxedImage2 = () => import("@/views/pages/boxed/Image2.vue")

// Router Configuration
const router = new Router({
	mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: '',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: LayoutSimple,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Landing
        },
        {
          path: 'maintenance',
          name: 'Pages Various Maintenance',
          component: PagesVariousMaintenance
        },
        {
          path: 'status',
          name: 'Pages Various Statuc',
          component: PagesVariousStatus
        },
        {
          path: 'coming-soon',
          name: 'Pages Various Coming Soon',
          component: PagesVariousComingSoon
        }
      ]
    },
    {
      path: '/auth',
      component: LayoutSimple,
      children: [
        {
          path: 'signin',
          name: 'Sign In',
          component: AuthSignIn
        },
        {
          path: 'signin2',
          name: 'Sign In 2',
          component: AuthSignIn2
        },
        {
          path: 'signin3',
          name: 'Sign In 3',
          component: AuthSignIn3
        },
        {
          path: 'signup',
          name: 'Sign Up',
          component: AuthSignUp
        },
        {
          path: 'signup2',
          name: 'Sign Up 2',
          component: AuthSignUp2
        },
        {
          path: 'Applications/:id',
          name: 'Applications',
          component: AuthApplications
        },
        {
          path: 'signup3',
          name: 'Sign Up 3',
          component: AuthSignUp3
        },
        {
          path: 'lock',
          name: 'Auth Lock',
          component: AuthLock
        },
        {
          path: 'lock2',
          name: 'Auth Lock 2',
          component: AuthLock2
        },
        {
          path: 'lock3',
          name: 'Auth Lock 3',
          component: AuthLock3
        },
        {
          path: 'reminder',
          name: 'Auth Reminder',
          component: AuthReminder
        },
        {
          path: 'reminder2',
          name: 'Auth Reminder 2',
          component: AuthReminder2
        },
        {
          path: 'reminder3',
          name: 'Auth Reminder 3',
          component: AuthReminder3
        }
      ]
    },
    {
      path: '/errors',
      component: LayoutSimple,
      children: [
        {
          path: '400',
          name: 'Error 400',
          component: Errors400
        },
        {
          path: '401',
          name: 'Error 401',
          component: Errors401
        },
        {
          path: '403',
          name: 'Error 403',
          component: Errors403
        },
        {
          path: '404',
          name: 'Error 404',
          component: Errors404
        },
        {
          path: '500',
          name: 'Error 500',
          component: Errors500
        },
        {
          path: '503',
          name: 'Error 503',
          component: Errors503
        }
      ]
    },
    {
      path: '/backend-boxed',
      redirect: '/backend-boxed/dashboard',
      component: LayoutBackendBoxed,
      children: [
        {
          path: 'dashboard',
          name: 'Boxed Dashboard',
          component: BoxedDashboard,
          meta: {
            authRequired: true,
          }
        },
        {
          path: 'search',
          name: 'Boxed Search',
          component: BoxedSearch,
          meta: {
            authRequired: true,
          }
        },
        {
          path: 'simple1',
          name: 'Boxed Simple1',
          component: BoxedSimple1,
          meta: {
            authRequired: true,
          }
        },
        {
          path: 'simple2',
          name: 'Boxed Simple2',
          component: BoxedSimple2,
          meta: {
            authRequired: true,
          }
        },
        {
          path: 'image1',
          name: 'Boxed Image1',
          component: BoxedImage1
        },
        {
          path: 'image2',
          name: 'Boxed Image2',
          component: BoxedImage2
        }
      ]
    },
    {
      path: '/backend',
      redirect: '/backend/dashboard',
      component: LayoutBackend,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
          meta: {
            authRequired: true,
          }
        },
        {
          path: 'inbox',
          name: 'Inbox',
          component: Inbox,
          meta: {
            authRequired: true,
          }
        },
        {
          path: 'blocks',
          redirect: '/blocks/styles',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'styles',
              name: 'Block Styles',
              component: BlockStyles,
              meta: {
                authRequired: true,
              }
            },
            {
              path: 'options',
              name: 'Block Options',
              component: BlockOptions,
              meta: {
                authRequired: true,
              }
            },
            {
              path: 'forms',
              name: 'Block Forms',
              component: BlockForms,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'themed',
              name: 'Block Themed',
              component: BlockThemed,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'api',
              name: 'Block API',
              component: BlockApi,
          meta: {
            authRequired: true,
          }
            }
          ]
        },
        {
          path: 'elements',
          redirect: '/elements/grid',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'grid',
              name: 'Elements Grid',
              component: ElementsGrid,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'typography',
              name: 'Elements Typography',
              component: ElementsTypography,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'icons',
              name: 'Elements Icons',
              component: ElementsIcons,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'buttons',
              name: 'Elements Buttons',
              component: ElementsButtons,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'button-groups',
              name: 'Elements Button Groups',
              component: ElementsButtonGroups,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'dropdowns',
              name: 'Elements Dropdowns',
              component: ElementsDropdowns,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'tabs',
              name: 'Elements Tabs',
              component: ElementsTabs,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'navigation',
              name: 'Elements Navigation',
              component: ElementsNavigation,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'navigation-horizontal',
              name: 'Elements Horizontal Navigation',
              component: ElementsNavigationHorizontal,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'progress',
              name: 'Elements Progress',
              component: ElementsProgress,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'alerts',
              name: 'Elements Alerts',
              component: ElementsAlerts,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'tooltips',
              name: 'Elements Tooltips',
              component: ElementsTooltips,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'popovers',
              name: 'Elements Popovers',
              component: ElementsPopovers,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'modals',
              name: 'Elements Modals',
              component: ElementsModals,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'images',
              name: 'Elements Images',
              component: ElementsImages,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'timeline',
              name: 'Elements Timeline',
              component: ElementsTimeline,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'ribbons',
              name: 'Elements Ribbons',
              component: ElementsRibbons,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'animations',
              name: 'Elements Animations',
              component: ElementsAnimations,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'color-themes',
              name: 'Elements Color Themes',
              component: ElementsColorThemes,
          meta: {
            authRequired: true,
          }
            }
          ]
        },
        {
          path: 'tables',
          redirect: '/tables/styles',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'styles',
              name: 'Tables Styles',
              component: TablesStyles,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'responsive',
              name: 'Tables Responsive',
              component: TablesResponsive,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'helpers',
              name: 'Tables Helpers',
              component: TablesHelpers,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'pricing',
              name: 'Tables Princing',
              component: TablesPricing,
          meta: {
            authRequired: true,
          }
            }
          ]
        },
        {
          path: 'applicants',
          redirect: '/applicants/applied',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'applied',
              name: 'Applicants Applied',
              component: ApplicantsApplied,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'invited',
              name: 'Applicants Invited',
              component: ApplicantsInvited,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'rejected',
              name: 'Applicants Rejected',
              component: ApplicantsRejected,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'shortlisted',
              name: 'Applicants Shortlisted',
              component: ApplicantsShortlisted,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'Completed',
              name: 'Applicants Completed',
              component: ApplicantsCompleted,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'details/:id',
              name: 'Applicant Details',
              component: ApplicantDetails,
          meta: {
            authRequired: true,
          }
            }
          ]
        },
        {
          path: 'forms',
          redirect: '/forms/elements',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'create',
              name: 'Form Create',
              component: FormsCreate,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'email',
              name: 'Form Email',
              component: FormsEmail,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'elements',
              name: 'Form Elements',
              component: FormsElements,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'custom-controls',
              name: 'Custom Form Controls',
              component: FormsCustomControls,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'layouts',
              name: 'Form Layouts',
              component: FormsLayouts,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'input-groups',
              name: 'Form Input Groups',
              component: FormsInputGroups,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'plugins',
              name: 'Form Plugins',
              component: FormsPlugins,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'editors',
              name: 'Form Editors',
              component: FormsEditors,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'validation',
              name: 'Form Validation',
              component: FormsValidation,
          meta: {
            authRequired: true,
          }
            }
          ]
        },
        {
          path: 'library',
          redirect: '/library/mcq',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'regex',
              name: 'Library Regex',
              component: LibraryRegex,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'mcq',
              name: 'Library MultipleChoice',
              component: LibraryMultipleChoice,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'rest',
              name: 'Library RESTAPI',
              component: LibraryRESTAPI,
          meta: {
            authRequired: true,
          }
            }
          ]
        },
        {
          path: 'Company',
          redirect: '/company/profile',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'profile',
              name: 'Company Profile',
              component: CompanyProfile,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'timeline',
              name: 'Company Timeline',
              component: CompanyTimeline,
          meta: {
            authRequired: true,
          }
            }
          ]
        },
        {
          path: 'Subscription',
          redirect: '/subscription/active',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'active',
              name: 'Subscription Active',
              component: SubscriptionActive,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'payment',
              name: 'Subscription Payment',
              component: SubscriptionPayment,
          meta: {
            authRequired: true,
          }
            }
          ]
        },
        {
          path: 'support',
          redirect: '/support/ticket',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'doc',
              name: 'Documentation',
              component: Documentation,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'ticket',
              name: 'Support Ticket',
              component: SupportTicket,
          meta: {
            authRequired: true,
          }
            }
          ]
        },
        {
          path: 'coding',
          redirect: '/coding/array',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'array',
              name: 'Array',
              component: Array,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'dynamicProgramming',
              name: 'Dynamic Programming',
              component: DP,
          meta: {
            authRequired: true,
          }
            }
          ]
        },
        {
          path: 'commit',
          redirect: '/commit/pnp',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'pnp',
              name: 'Commits PnP',
              component: CommitsPnP,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'live',
              name: 'Commits Live',
              component: CommitsLive,
          meta: {
            authRequired: true,
          }
            }
          ]
        },
        {
          path: 'plugins',
          redirect: '/plugins/charts',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'appear',
              name: 'Appear',
              component: PluginsAppear,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'image-cropper',
              name: 'Image Cropper',
              component: PluginsImageCropper,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'charts',
              name: 'Charts',
              component: PluginsCharts,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'calendar',
              name: 'Calendar',
              component: PluginsCalendar,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'carousel',
              name: 'Carousel',
              component: PluginsCarousel,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'syntax-highlighting',
              name: 'Syntax Hightlighting',
              component: PluginsSyntaxHighlighting,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'rating',
              name: 'Rating',
              component: PluginsRating,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'dialogs',
              name: 'Dialogs',
              component: PluginsDialogs,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'notifications',
              name: 'Notifications',
              component: PluginsNotifications,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'gallery',
              name: 'Gallery',
              component: PluginsGallery,
          meta: {
            authRequired: true,
          }
            }
          ]
        },
        {
          path: 'layout',
          redirect: '/layout/api',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'page/default',
              name: 'Layout Page Default',
              component: LayoutPageDefault,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'page/flipped',
              name: 'Layout Page Flipped',
              component: LayoutPageFlipped,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'main-content/full-width',
              name: 'Layout Main Content Full Width',
              component: LayoutMainContentFullWidth,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'main-content/narrow',
              name: 'Layout Main Content Narrow',
              component: LayoutMainContentNarrow,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'main-content/boxed',
              name: 'Layout Main Content Boxed',
              component: LayoutMainContentBoxed,
          meta: {
            authRequired: true,
          }
            },
            {
              path: 'header/fixed-light',
              name: 'Layout Header Fixed Light',
              component: LayoutHeaderFixedLight,
              meta: {
                authRequired: true,
              }
            },
            {
              path: 'header/fixed-dark',
              name: 'Layout Header Fixed Dark',
              component: LayoutHeaderFixedDark,
              meta: {
                authRequired: true,
              }
            },
            {
              path: 'header/static-light',
              name: 'Layout Header Static Light',
              component: LayoutHeaderStaticLight,
              meta: {
                authRequired: true,
              }
            },
            {
              path: 'header/static-dark',
              name: 'Layout Header Static Dark',
              component: LayoutHeaderStaticDark,
              meta: {
                authRequired: true,
              }
            },
            {
              path: 'sidebar/mini',
              name: 'Layout Sidebar Mini',
              component: LayoutSidebarMini,
              meta: {
                authRequired: true,
              }
            },
            {
              path: 'sidebar/light',
              name: 'Layout Sidebar Light',
              component: LayoutSidebarLight,
              meta: {
                authRequired: true,
              }
            },
            {
              path: 'sidebar/dark',
              name: 'Layout Sidebar Dark',
              component: LayoutSidebarDark,
              meta: {
                authRequired: true,
              }
            },
            {
              path: 'sidebar/hidden',
              name: 'Layout Sidebar Hidden',
              component: LayoutSidebarHidden,
              meta: {
                authRequired: true,
              }
            },
            {
              path: 'side-overlay/visible',
              name: 'Layout Side Overlay Visible',
              component: LayoutSideOverlayVisible,
              meta: {
                authRequired: true,
              }
            },
            {
              path: 'side-overlay/hover-mode',
              name: 'Layout Side Overlay Hover Mode',
              component: LayoutSideOverlayHoverMode,
              meta: {
                authRequired: true,
              }
            },
            {
              path: 'side-overlay/no-page-overlay',
              name: 'Layout Side Overlay No Page Overlay',
              component: LayoutSideOverlayNoPageOverlay,
              meta: {
                authRequired: true,
              }
            },
            {
              path: 'loaders',
              name: 'Loaders',
              component: LayoutLoaders,
              meta: {
                authRequired: true,
              }
            },
            {
              path: 'api',
              name: 'Layout API',
              component: LayoutApi,
              meta: {
                authRequired: true,
              }
            }
          ]
        },
        {
          path: 'pages/generic',
          redirect: '/pages/generic/blank',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'blank',
              name: 'Pages Generic Blank',
              component: PagesGenericBlank,
              meta: {
                authRequired: true,
              }
            },
            {
              path: 'blank-block',
              name: 'Pages Generic Blank Block',
              component: PagesGenericBlankBlock,
              meta: {
                authRequired: true,
              }
            },
            {
              path: 'search',
              name: 'Pages Generic Search',
              component: PagesGenericSearch,
              meta: {
                authRequired: true,
              }
            },
            {
              path: 'profile',
              name: 'Pages Generic Profile',
              component: PagesGenericProfile,
              meta: {
                authRequired: true,
              }
            },
            {
              path: 'invoice',
              name: 'Pages Generic Invoice',
              component: PagesGenericInvoice,
              meta: {
                authRequired: true,
              }
            },
            {
              path: 'faq',
              name: 'Pages Generic Faq',
              component: PagesGenericFaq,
              meta: {
                authRequired: true,
              }
            }
          ]
        },
        {
          path: 'pages/auth',
          redirect: '/pages/auth/all',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'all',
              name: 'Pages Auth All',
              component: PagesAuthAll
            }
          ]
        },
        {
          path: 'pages/errors',
          redirect: '/pages/errors/all',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'all',
              name: 'Pages Errors All',
              component: PagesErrorsAll
            }
          ]
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  firebase.auth().onAuthStateChanged(() => {

    // get firebase current user
    const firebaseCurrentUser = firebase.auth().currentUser
    if (to.meta.authRequired && !(firebaseCurrentUser)) {
        router.push({ path: '/'})
    }

    return next()

  })

})

export default router