<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Git Based Assignements (Not Activated)" subtitle="Test practical skills with git based project via repl.it">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Commit</b-breadcrumb-item>
          <b-breadcrumb-item active>Git</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@einfach99/einfachNode?lite=true"></iframe>
      <!-- END Your Block -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: [
        {
          id: 1,
          name: 'Project: NuxtJS Application',
          href: 'javascript:void(0)',
          labelVariant: 'success',
          rowVariant: 'secondary'
        },
        {
          id: 2,
          name: 'Project: React Application',
          href: 'javascript:void(0)',
          labelVariant: 'info',
          rowVariant: ''
        },
        {
          id: 3,
          name: 'Project: ChartJS Application',
          href: 'javascript:void(0)',
          labelVariant: 'primary',
          rowVariant: 'primary'
        },
        {
          id: 4,
          name: 'Project: Function Programming',
          href: 'javascript:void(0)',
          labelVariant: 'warning',
          rowVariant: ''
        },
        {
          id: 5,
          name: 'Project: JS and CSS Application',
          href: 'javascript:void(0)',
          labelVariant: 'danger',
          rowVariant: 'warning'
        },
        {
          id: 6,
          name: 'Project: C# Project',
          href: 'javascript:void(0)',
          labelVariant: 'success',
          rowVariant: ''
        },
        {
          id: 7,
          name: 'Project: Angular Application',
          href: 'javascript:void(0)',
          labelVariant: 'danger',
          rowVariant: 'danger'
        },
        {
          id: 8,
          name: 'Project: Simple JavaScript Application',
          href: 'javascript:void(0)',
          labelVariant: 'warning',
          rowVariant: ''
        },
        {
          id: 10,
          name: 'Project: NextJS Application',
          href: 'javascript:void(0)',
          labelVariant: 'info',
          rowVariant: ''
        },
        {
          id: 11,
          name: 'Project: VueJS Application',
          href: 'javascript:void(0)',
          labelVariant: 'success',
          rowVariant: 'success'
        }
      ]
    }
  }
}
</script>
