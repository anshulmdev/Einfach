/*
 * Main and demo navigation arrays
 */

export default {
  'main': [
    {
      name: 'Dashboard',
      to: '/backend/dashboard',
      icon: 'si si-speedometer'
    },
    {
      name: 'Assignments',
      heading: true
    },
    {
      name: 'Library',
      icon: 'si si-notebook',
      subActivePaths: '/backend/library',
      sub: [
        {
          name: 'MCQs',
          icon: 'si si-list',
          to: '/backend/library/mcq'
        },
        {
          name: 'APIs',
          icon: 'si si-cloud-upload',
          to: '/backend/library/rest'
        },
        {
          name: 'Regex',
          icon: 'si si-link',
          to: '/backend/library/regex'
        }
      ]
    },
    {
      name: 'Coding',
      icon: 'si si-energy',
      subActivePaths: '/backend/coding',
      sub: [
        {
          name: 'JavaScript',
          icon: 'si si-layers',
          to: '/backend/coding/javascript'
        },
        {
          name: 'Python',
          icon: 'si si-layers',
          to: '/backend/coding/python'
        }
      ]
    },
    {
      name: 'Commits',
      icon: 'si si-social-github',
      subActivePaths: '/backend/commit',
      sub: [
        {
          name: 'Pull & Push',
          icon: 'si si-organization',
          to: '/backend/commit/pnp'
        },
        {
          name: 'Live Changes',
          icon: 'si si-event',
          to: '/backend/commit/live'
        }
      ]
    },
    {
      name: 'Applications',
      heading: true
    },
    {
      name: 'Forms',
      icon: 'si si-pencil',
      subActivePaths: '/backend/forms',
      sub: [
        {
          name: 'Create Form',
          icon: 'si si-user',
          to: '/backend/forms/create'
        },
        {
          name: 'Email Template',
          icon: 'si si-paper-plane',
          to: '/backend/forms/email'
        },
      ]
    },
    {
      name: 'Applicants',
      icon: 'si si-people',
      subActivePaths: '/backend/applicants',
      sub: [
        {
          name: 'Applied',
          icon: 'si si-pin',
          to: '/backend/applicants/Applied'
        },
        {
          name: 'Invited',
          icon: 'si si-bell',
          to: '/backend/applicants/Invited'
        },
        {
          name: 'Completed',
          icon: 'si si-feed',
          to: '/backend/applicants/Completed'
        },
      ]
    },
    {
      name: 'Inbox',
      icon: 'si si-envelope',
      subActivePaths: '/backend/inbox',
      sub: [
        {
          name: 'Invited',
          icon: 'si si-clock',
          to: '/backend/inbox/invited'
        },
        {
          name: 'Shortlisted',
          icon: 'si si-check',
          to: '/backend/inbox/shortlisted'
        },
        {
          name: 'Rejected',
          icon: 'si si-close',
          to: '/backend/inbox/rejected'
        },
      ]
    },
    {
      name: 'Settings',
      heading: true
    },
    {
      name: 'Company',
      icon: 'si si-info',
      subActivePaths: '/backend/company',
      sub: [
        {
          name: 'Profile',
          icon: 'si si-tag',
          to: '/backend/company/profile'
        },
        {
          name: 'Statistics',
          icon: 'si si-wrench',
          to: '/backend/company/statistics'
        },
      ]
    },
    {
      name: 'Subscription',
      icon: 'si si-basket-loaded',
      subActivePaths: '/backend/subscription',
      sub: [
        {
          name: 'Payment',
          icon: 'si si-wallet',
          to: '/backend/subscription/payment'
        },
        {
          name: 'Active Plan',
          icon: 'si si-badge',
          to: '/backend/subscription/active'
        },
      ]
    },
    {
      name: 'Support',
      icon: 'si si-support',
      subActivePaths: '/backend/support',
      sub: [
        {
          name: 'Raise Ticket',
          icon: 'si si-note',
          to: '/backend/support/ticket'
        },
        {
          name: 'Report Bug',
          icon: 'si si-dislike',
          to: '/backend/support/bug'
        },
      ]
    },
  ],
}
