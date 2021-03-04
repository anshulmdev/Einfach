<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Responsive Tables" subtitle="Mobile friendly tables that work across all screen sizes.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Tables</b-breadcrumb-item>
          <b-breadcrumb-item active>Responsive</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Full Table -->
      <base-block rounded title="Full Table">
        <template #options>
          <button type="button" class="btn-block-option">
            <i class="si si-settings"></i>
          </button>
        </template>
        <p class="font-size-sm text-muted">
          The first way to make a table responsive is to add the <code>responsive</code> property. This way, the table will be horizontally scrollable and all data will be accessible on smaller screens.
          You could also specify a value to apply the horizontal scrolling on different screen widths: <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>.
        </p>
        <b-table-simple responsive bordered striped table-class="table-vcenter">
          <b-thead>
            <b-tr>
              <b-th class="text-center" style="width: 100px;">
                <i class="far fa-user"></i>
              </b-th>
              <b-th>Name</b-th>
              <b-th style="width: 30%;">Email</b-th>
              <b-th style="width: 15%;">Access</b-th>
              <b-th class="text-center" style="min-width: 110px; width: 110px;">Actions</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="user in users" :key="user.id">
              <b-td class="text-center">
                <img class="img-avatar img-avatar48" :src="`img/avatars/${user.avatar}.jpg`" alt="Avatar">
              </b-td>
              <b-td class="font-w600 font-size-sm">
                <a :href="`${user.href}`">
                  {{ user.name }}
                </a>
              </b-td>
              <b-td class="font-size-sm">
                client{{ user.id }}<em class="text-muted">@example.com</em>
              </b-td>
              <b-td>
                <b-badge :variant="user.labelVariant">{{ user.labelText }}</b-badge>
              </b-td>
              <b-td class="text-center">
                <b-btn-group>
                  <b-button size="sm" variant="alt-primary">
                    <i class="fa fa-fw fa-pencil-alt"></i>
                  </b-button>
                  <b-button size="sm" variant="alt-primary">
                    <i class="fa fa-fw fa-times"></i>
                  </b-button>
                </b-btn-group>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </base-block>
      <!-- END Full Table -->

      <!-- Partial Table -->
      <base-block rounded title="Partial Table">
        <template #options>
          <button type="button" class="btn-block-option">
            <i class="si si-settings"></i>
          </button>
        </template>
        <p class="font-size-sm text-muted">
          The second way is to use <router-link to="/backend/elements/grid">responsive utility CSS classes</router-link> for hiding columns in various screen resolutions. This way you can hide less important columns and keep the most valuable on smaller screens.
          At the following example the <strong>Access</strong> column isn't visible on small and extra small screens and <strong>Email</strong> column isn't visible on extra small screens.
        </p>
        <b-table-simple bordered striped table-class="table-vcenter">
          <b-thead>
            <b-tr>
              <b-th class="text-center" style="width: 100px;">
                <i class="far fa-user"></i>
              </b-th>
              <b-th>Name</b-th>
              <b-th class="d-none d-sm-table-cell" style="width: 30%;">Email</b-th>
              <b-th class="d-none d-md-table-cell" style="width: 15%;">Access</b-th>
              <b-th class="text-center" style="min-width: 110px; width: 110px;">Actions</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="user in users" :key="user.id">
              <b-td class="text-center">
                <img class="img-avatar img-avatar48" :src="`img/avatars/${user.avatar}.jpg`" alt="Avatar">
              </b-td>
              <b-td class="font-w600 font-size-sm">
                <a :href="`${user.href}`">
                  {{ user.name }}
                </a>
              </b-td>
              <b-td class="d-none d-sm-table-cell font-size-sm">
                client{{ user.id }}<em class="text-muted">@example.com</em>
              </b-td>
              <b-td class="d-none d-md-table-cell">
                <b-badge :variant="user.labelVariant">{{ user.labelText }}</b-badge>
              </b-td>
              <b-td class="text-center">
                <b-btn-group>
                  <b-button size="sm" variant="alt-primary">
                    <i class="fa fa-fw fa-pencil-alt"></i>
                  </b-button>
                  <b-button size="sm" variant="alt-primary">
                    <i class="fa fa-fw fa-times"></i>
                  </b-button>
                </b-btn-group>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </base-block>
      <!-- END Partial Table -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: [
        {
          id: 1,
          name: 'Adam McCoy',
          avatar: 'avatar10',
          href: 'javascript:void(0)',
          labelVariant: 'success',
          labelText: 'VIP'
        },
        {
          id: 2,
          name: 'Betty Kelley',
          avatar: 'avatar2',
          href: 'javascript:void(0)',
          labelVariant: 'info',
          labelText: 'Business'
        },
        {
          id: 3,
          name: 'Jesse Fisher',
          avatar: 'avatar9',
          href: 'javascript:void(0)',
          labelVariant: 'primary',
          labelText: 'Personal'
        },
        {
          id: 4,
          name: 'Ryan Flores',
          avatar: 'avatar12',
          href: 'javascript:void(0)',
          labelVariant: 'warning',
          labelText: 'Trial'
        },
        {
          id: 5,
          name: 'Alice Moore',
          avatar: 'avatar4',
          href: 'javascript:void(0)',
          labelVariant: 'danger',
          labelText: 'Disabled'
        }
      ]
    }
  }
}
</script>
