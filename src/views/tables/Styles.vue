<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Table Styles" subtitle="Multiple style options to match your preferences.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Tables</b-breadcrumb-item>
          <b-breadcrumb-item active>Styles</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <b-row>
        <b-col xl="6">
          <!-- Default Table -->
          <base-block rounded title="Default Table">
            <b-table-simple responsive table-class="table-vcenter">
              <b-thead>
                <b-tr>
                  <b-th class="text-center" style="width: 50px;">#</b-th>
                  <b-th>Name</b-th>
                  <b-th class="d-none d-sm-table-cell" style="width: 15%;">Access</b-th>
                  <b-th class="text-center" style="width: 100px;">Actions</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="user in users.slice(0, 6)" :key="user.id">
                  <b-td class="text-center">
                    {{ user.id }}
                  </b-td>
                  <b-td class="font-w600 font-size-sm">
                    <a :href="`${user.href}`">
                      {{ user.name }}
                    </a>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell">
                    <b-badge :variant="user.labelVariant">{{ user.labelText }}</b-badge>
                  </b-td>
                  <b-td class="text-center">
                    <b-button-group>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-pencil-alt"></i>
                      </b-button>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-times"></i>
                      </b-button>
                    </b-button-group>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </base-block>
          <!-- END Default Table -->
        </b-col>
        <b-col xl="6">
          <!-- Striped Table -->
          <base-block rounded title="Striped Table">
            <template #options>
              <div class="block-options-item">
                <code>striped</code>
              </div>
            </template>
            <b-table-simple responsive striped table-class="table-vcenter">
              <b-thead>
                <b-tr>
                  <b-th class="text-center" style="width: 50px;">#</b-th>
                  <b-th>Name</b-th>
                  <b-th class="d-none d-sm-table-cell" style="width: 15%;">Access</b-th>
                  <b-th class="text-center" style="width: 100px;">Actions</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="user in users.slice(0, 6)" :key="user.id">
                  <b-td class="text-center">
                    {{ user.id }}
                  </b-td>
                  <b-td class="font-w600 font-size-sm">
                    <a :href="`${user.href}`">
                      {{ user.name }}
                    </a>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell">
                    <b-badge :variant="user.labelVariant">{{ user.labelText }}</b-badge>
                  </b-td>
                  <b-td class="text-center">
                    <b-button-group>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-pencil-alt"></i>
                      </b-button>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-times"></i>
                      </b-button>
                    </b-button-group>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </base-block>
          <!-- END Striped Table -->
        </b-col>
      </b-row>
      <b-row>
        <b-col xl="6">
          <!-- Hover Table -->
          <base-block rounded title="Hover Table">
            <template #options>
              <div class="block-options-item">
                <code>hover</code>
              </div>
            </template>
            <b-table-simple responsive hover table-class="table-vcenter">
              <b-thead>
                <b-tr>
                  <b-th class="text-center" style="width: 50px;">#</b-th>
                  <b-th>Name</b-th>
                  <b-th class="d-none d-sm-table-cell" style="width: 15%;">Access</b-th>
                  <b-th class="text-center" style="width: 100px;">Actions</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="user in users.slice(0, 6)" :key="user.id">
                  <b-td class="text-center">
                    {{ user.id }}
                  </b-td>
                  <b-td class="font-w600 font-size-sm">
                    <a :href="`${user.href}`">
                      {{ user.name }}
                    </a>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell">
                    <b-badge :variant="user.labelVariant">{{ user.labelText }}</b-badge>
                  </b-td>
                  <b-td class="text-center">
                    <b-button-group>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-pencil-alt"></i>
                      </b-button>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-times"></i>
                      </b-button>
                    </b-button-group>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </base-block>
          <!-- END Hover Table -->
        </b-col>
        <b-col xl="6">
          <!-- Bordered Table -->
          <base-block rounded title="Bordered Table">
            <template #options>
              <div class="block-options-item">
                <code>bordered</code>
              </div>
            </template>
            <b-table-simple responsive bordered table-class="table-vcenter">
              <b-thead>
                <b-tr>
                  <b-th class="text-center" style="width: 50px;">#</b-th>
                  <b-th>Name</b-th>
                  <b-th class="d-none d-sm-table-cell" style="width: 15%;">Access</b-th>
                  <b-th class="text-center" style="width: 100px;">Actions</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="user in users.slice(0, 6)" :key="user.id">
                  <b-td class="text-center">
                    {{ user.id }}
                  </b-td>
                  <b-td class="font-w600 font-size-sm">
                    <a :href="`${user.href}`">
                      {{ user.name }}
                    </a>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell">
                    <b-badge :variant="user.labelVariant">{{ user.labelText }}</b-badge>
                  </b-td>
                  <b-td class="text-center">
                    <b-button-group>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-pencil-alt"></i>
                      </b-button>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-times"></i>
                      </b-button>
                    </b-button-group>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </base-block>
          <!-- END Bordered Table -->
        </b-col>
      </b-row>
      <b-row class="row-deck">
        <b-col xl="6">
          <!-- Borderless Table -->
          <base-block rounded title="Borderless Table">
            <template #options>
              <div class="block-options-item">
                <code>borderless</code>
              </div>
            </template>
            <b-table-simple responsive borderless table-class="table-vcenter">
              <b-thead>
                <b-tr>
                  <b-th class="text-center" style="width: 50px;">#</b-th>
                  <b-th>Name</b-th>
                  <b-th class="d-none d-sm-table-cell" style="width: 15%;">Access</b-th>
                  <b-th class="text-center" style="width: 100px;">Actions</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="user in users.slice(0, 6)" :key="user.id">
                  <b-td class="text-center">
                    {{ user.id }}
                  </b-td>
                  <b-td class="font-w600 font-size-sm">
                    <a :href="`${user.href}`">
                      {{ user.name }}
                    </a>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell">
                    <b-badge :variant="user.labelVariant">{{ user.labelText }}</b-badge>
                  </b-td>
                  <b-td class="text-center">
                    <b-button-group>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-pencil-alt"></i>
                      </b-button>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-times"></i>
                      </b-button>
                    </b-button-group>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </base-block>
          <!-- END Borderless Table -->
        </b-col>
        <b-col xl="6">
          <!-- Small Table -->
          <base-block rounded title="Small Table">
            <template #options>
              <div class="block-options-item">
                <code>small</code>
              </div>
            </template>
            <b-table-simple responsive small table-class="table-vcenter">
              <b-thead>
                <b-tr>
                  <b-th class="text-center" style="width: 50px;">#</b-th>
                  <b-th>Name</b-th>
                  <b-th class="d-none d-sm-table-cell" style="width: 15%;">Access</b-th>
                  <b-th class="text-center" style="width: 100px;">Actions</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="user in users.slice(0, 8)" :key="user.id">
                  <b-td class="text-center">
                    {{ user.id }}
                  </b-td>
                  <b-td class="font-w600 font-size-sm">
                    <a :href="`${user.href}`">
                      {{ user.name }}
                    </a>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell">
                    <b-badge :variant="user.labelVariant">{{ user.labelText }}</b-badge>
                  </b-td>
                  <b-td class="text-center">
                    <b-button-group>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-pencil-alt"></i>
                      </b-button>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-times"></i>
                      </b-button>
                    </b-button-group>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </base-block>
          <!-- END Small Table -->
        </b-col>
      </b-row>
      <b-row>
        <b-col xl="6">
          <!-- Table Head Light Table -->
          <base-block rounded title="Table Head Light">
            <template #options>
              <div class="block-options-item">
                <code>head-variant=&quot;light&quot;</code>
              </div>
            </template>
            <b-table-simple responsive table-class="table-vcenter">
              <b-thead head-variant="light">
                <b-tr>
                  <b-th class="text-center" style="width: 50px;">#</b-th>
                  <b-th>Name</b-th>
                  <b-th class="d-none d-sm-table-cell" style="width: 15%;">Access</b-th>
                  <b-th class="text-center" style="width: 100px;">Actions</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="user in users.slice(0, 6)" :key="user.id">
                  <b-td class="text-center">
                    {{ user.id }}
                  </b-td>
                  <b-td class="font-w600 font-size-sm">
                    <a :href="`${user.href}`">
                      {{ user.name }}
                    </a>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell">
                    <b-badge :variant="user.labelVariant">{{ user.labelText }}</b-badge>
                  </b-td>
                  <b-td class="text-center">
                    <b-button-group>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-pencil-alt"></i>
                      </b-button>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-times"></i>
                      </b-button>
                    </b-button-group>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </base-block>
          <!-- END Table Head Light Table -->
        </b-col>
        <b-col xl="6">
          <!-- Table Head Dark Table -->
          <base-block rounded title="Table Head Dark">
            <template #options>
              <div class="block-options-item">
                <code>head-variant=&quot;dark&quot;</code>
              </div>
            </template>
            <b-table-simple responsive table-class="table-vcenter">
              <b-thead head-variant="dark">
                <b-tr>
                  <b-th class="text-center" style="width: 50px;">#</b-th>
                  <b-th>Name</b-th>
                  <b-th class="d-none d-sm-table-cell" style="width: 15%;">Access</b-th>
                  <b-th class="text-center" style="width: 100px;">Actions</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="user in users.slice(0, 6)" :key="user.id">
                  <b-td class="text-center">
                    {{ user.id }}
                  </b-td>
                  <b-td class="font-w600 font-size-sm">
                    <a :href="`${user.href}`">
                      {{ user.name }}
                    </a>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell">
                    <b-badge :variant="user.labelVariant">{{ user.labelText }}</b-badge>
                  </b-td>
                  <b-td class="text-center">
                    <b-button-group>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-pencil-alt"></i>
                      </b-button>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-times"></i>
                      </b-button>
                    </b-button-group>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </base-block>
          <!-- END Table Head Dark Table -->
        </b-col>
        <b-col>
          <!-- Contextual Table -->
          <base-block rounded title="Contextual Table">
            <b-table-simple responsive borderless hover table-class="table-vcenter">
              <b-thead>
                <b-tr>
                  <b-th class="text-center" style="width: 50px;">#</b-th>
                  <b-th>Name</b-th>
                  <b-th class="text-center" style="width: 100px;">Actions</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="user in users" :key="user.id" :variant="user.rowVariant">
                  <b-td class="text-center">
                    {{ user.id }}
                  </b-td>
                  <b-td class="font-w600 font-size-sm">
                    {{ user.name }}
                  </b-td>
                  <b-td class="text-center">
                    <b-button-group>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-pencil-alt"></i>
                      </b-button>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-times"></i>
                      </b-button>
                    </b-button-group>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </base-block>
          <!-- END Contextual Table -->
        </b-col>
      </b-row>
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
          href: 'javascript:void(0)',
          labelVariant: 'success',
          labelText: 'VIP',
          rowVariant: 'secondary'
        },
        {
          id: 2,
          name: 'Betty Kelley',
          href: 'javascript:void(0)',
          labelVariant: 'info',
          labelText: 'Business',
          rowVariant: ''
        },
        {
          id: 3,
          name: 'Jesse Fisher',
          href: 'javascript:void(0)',
          labelVariant: 'primary',
          labelText: 'Personal',
          rowVariant: 'primary'
        },
        {
          id: 4,
          name: 'Ryan Flores',
          href: 'javascript:void(0)',
          labelVariant: 'warning',
          labelText: 'Trial',
          rowVariant: ''
        },
        {
          id: 5,
          name: 'Alice Moore',
          href: 'javascript:void(0)',
          labelVariant: 'danger',
          labelText: 'Disabled',
          rowVariant: 'warning'
        },
        {
          id: 6,
          name: 'Scott Young',
          href: 'javascript:void(0)',
          labelVariant: 'success',
          labelText: 'VIP',
          rowVariant: ''
        },
        {
          id: 7,
          name: 'Ralph Murray',
          href: 'javascript:void(0)',
          labelVariant: 'danger',
          labelText: 'Disabled',
          rowVariant: 'danger'
        },
        {
          id: 8,
          name: 'Marie Duncan',
          href: 'javascript:void(0)',
          labelVariant: 'warning',
          labelText: 'Trial',
          rowVariant: ''
        },
        {
          id: 9,
          name: 'Helen Jacobs',
          href: 'javascript:void(0)',
          labelVariant: 'primary',
          labelText: 'Personal',
          rowVariant: 'info'
        },
        {
          id: 10,
          name: 'Carl Wells',
          href: 'javascript:void(0)',
          labelVariant: 'info',
          labelText: 'Business',
          rowVariant: ''
        },
        {
          id: 11,
          name: 'Jose Mills',
          href: 'javascript:void(0)',
          labelVariant: 'success',
          labelText: 'VIP',
          rowVariant: 'success'
        }
      ]
    }
  }
}
</script>
