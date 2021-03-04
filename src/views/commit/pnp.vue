<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Practical Assignments" subtitle="These assignments automatically sent to shortlisted applicants">
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
                      <b-button size="sm" variant="light" v-b-modal.modal-block-extra-large>
                        <i class="fa fa-fw fa-eye"></i>
                      </b-button>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-check"></i>
                      </b-button>
                    </b-button-group>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" size="sm"></b-pagination>
          
      
          <!-- Extra Large Block Modal -->
          <b-modal id="modal-block-extra-large" size="xl" body-class="p-0" hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Modal Title</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-extra-large')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="block-content font-size-sm">
                Project Details
              </div>
              <div class="block-content block-content-full text-right border-top">
                <b-button variant="alt-primary" class="mr-1" @click="$bvModal.hide('modal-block-extra-large')">Close</b-button>
                <b-button variant="primary" @click="$bvModal.hide('modal-block-extra-large')">Ok</b-button>
              </div>
            </div>
          </b-modal>
          <!-- END Extra Large Block Modal -->
          </base-block>
          <!-- END Contextual Table -->
        </b-col>
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
