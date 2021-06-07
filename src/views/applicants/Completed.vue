<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Applications Completed" subtitle="Log of all the candidates who appeared for the test">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Applicants</b-breadcrumb-item>
          <b-breadcrumb-item active>Applied</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Full Table -->
      <base-block rounded title="Assignment: JavaScript">
        <template #options>
          <button type="button" class="btn-block-option">
            <i class="si si-settings"></i>
          </button>
        </template>
        <b-table-simple responsive bordered striped table-class="table-vcenter">
          <b-thead>
            <b-tr>
              <b-th class="text-center" style="width: 10%;">
                Resume
              </b-th>
              <b-th style="width: 20%;">Name</b-th>
              <b-th style="width: 20%;">Email</b-th>
              <b-th style="width: 10%;">Tags</b-th>
              <b-th style="width: 15%;">Experience</b-th>
              <b-th style="width: 15%;">Score</b-th>
              <b-th class="text-center" style="min-width: 110px; width: 110px;">Actions</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="user in $store.state.firestoreData.candidates.completed" :key="user.name">
              <b-td class="text-center">
                <a v-b-modal.modal-block-extra-large @click="url=user.resume">
                <img height="50" src="https://static.thenounproject.com/png/543772-200.png" alt="Avatar"></a>
              </b-td>
              <b-td class="font-w600 font-size-sm">
                <a :href="`${user.href}`">
                  {{ user.name }}
                </a>
              </b-td>
              <b-td class="font-size-sm">
                {{user.email}}
              </b-td>
              <b-td>
                <b-row v-for="(value,index) in user.tags" :key="index">
                  <b-col class="col-lg-4">
                <b-badge :variant="index">{{ value }}</b-badge></b-col>
                </b-row>
              </b-td>
              <b-td class="font-size-sm">
                {{ user.experience }} Yrs
              </b-td>
              <b-td class="font-size-sm">
                {{ user.score}}
              </b-td>
              <b-td class="text-center">
                <b-btn-group>
                  <b-button size="sm" variant="alt-info">
                    <i class="fa fa-fw fa-envelope"></i>
                  </b-button>
                  <b-button size="sm" variant="alt-primary">
                    <i class="fa fa-fw fa-archive"></i>
                  </b-button>
                </b-btn-group>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
          <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" size="sm"></b-pagination>
      </base-block>
      
          <!-- Extra Large Block Modal -->
          <b-modal id="modal-block-extra-large" size="xl" body-class="p-0" hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Resume</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-extra-large')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="block-content font-size-sm">
  <iframe :src="url" width="100%" height="600">
</iframe>
</div>
              <div class="block-content block-content-full text-right border-top">
                <b-button variant="alt-success" class="mr-1" @click="$bvModal.hide('modal-block-extra-large')">Close</b-button>
                <b-button variant="success" @click="$bvModal.hide('modal-block-extra-large')">Ok</b-button>
              </div>
            </div>
          </b-modal>
          <!-- END Extra Large Block Modal -->
      <!-- END Full Table -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      rows: this.$store.state.firebaseData.candidates.completed.length,
      perPage: 10,
      currentPage: 1,
      url: "https://static.thenounproject.com/png/543772-200.png",
    }
  }
}
</script>

