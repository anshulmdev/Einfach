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
      name: 'Mailbox',
      to: '/backend/inbox',
      icon: 'fa fa-inbox'
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
          name: 'Arrays',
          icon: 'si si-layers',
          to: '/backend/coding/array'
        },
        {
          name: 'Dynamic Programming',
          icon: 'si si-layers',
          to: '/backend/coding/dynamicProgramming'
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
          name: 'Interviews',
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
          to: '/backend/applicants/users/applied'
        },
        {
          name: 'Invited',
          icon: 'si si-bell',
          to: '/backend/applicants/users/invited'
        },
        {
          name: 'Shortlisted',
          icon: 'si si-check',
          to: '/backend/applicants/users/shortlisted'
        },
        {
          name: 'Rejected',
          icon: 'si si-ban',
          to: '/backend/applicants/users/rejected'
        },
        {
          name: 'Completed',
          icon: 'si si-feed',
          to: '/backend/applicants/users/completed'
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
          name: 'Timeline',
          icon: 'si si-calendar',
          to: '/backend/company/timeline'
        },
        {
          name: 'Subscription',
          icon: 'si si-wallet',
          to: '/backend/subscription/active'
        }
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
          name: 'Documentation',
          icon: 'si si-docs',
          to: '/backend/support/doc'
        },
      ]
    },
  ],
}
