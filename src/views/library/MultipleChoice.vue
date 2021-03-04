<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Multiple Choice Questions" subtitle="Select preferred MCQ package">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Library</b-breadcrumb-item>
          <b-breadcrumb-item active>MCQs</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      
          <!-- Block Tabs Default Style -->
          <b-tabs class="block" nav-class="nav-tabs-block" content-class="block-content">
            <b-tab title="Library" active>
              <template #options>
          <button type="button" class="btn-block-option">
            <i class="si si-settings"></i>
          </button>
        </template>
       <!-- Search -->
    <div v-if="firebaseData" class="content">
          <!-- Projects -->
          <div class="font-size-h4 font-w600 p-2 mb-4 border-left border-4x border-primary bg-body-light">
      <b-form>
        <b-input-group>
          <b-form-input class="form-control" placeholder="Search.."></b-form-input>
          <template #append>
            <b-input-group-text>
              <i class="fa fa-fw fa-search"></i>
            </b-input-group-text>
          </template>
        </b-input-group>
      </b-form>
          </div>
          <b-table-simple striped table-class="table-vcenter">
            <b-thead>
              <b-tr>
                <b-th style="width: 50%;">Project</b-th>
                <b-th class="d-none d-lg-table-cell text-center" style="width: 12%;">Topic</b-th>
                <b-th class="d-none d-lg-table-cell text-center" style="width: 12%;">Marks</b-th>
                <b-th class="text-center" style="width: 12%;">Select</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr v-for="(ques, index) in firebaseData" :key="index">
                <b-td>
                  <h4 class="h5 mt-3 mb-2">
                    <a href="#">{{ques.heading}}</a>
                  </h4>
                  <p class="d-none d-sm-block text-muted">
                    {{ ques.subHeading }}
                  </p>
                </b-td>
                <b-td class="d-none d-lg-table-cell text-center">
                  <b-badge :variant="ques.type[1]">{{ques.type[0]}}</b-badge>
                </b-td>
                <b-td class="d-none d-lg-table-cell font-size-xl text-center font-w600">{{ques.marks}}</b-td>
                <b-td class="px-5">
                  <b-form-checkbox class="custom-control-success mb-2" value="success">Easy</b-form-checkbox>
                  <b-form-checkbox class="custom-control-warning mb-2" value="warning">Medium</b-form-checkbox>
                  <b-form-checkbox class="custom-control-danger mb-2" value="danger">Hard</b-form-checkbox>
                  </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
          <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" size="sm"></b-pagination>
          <!-- END Projects -->
    </div>
    <div v-else class="m-5">
            <b-spinner />
      </div>
    <!-- END Search -->
            </b-tab>
            <b-tab title="Custom">
          <b-form>
            <base-block rounded title="Create your own Question" header-bg>
              <template #options>
                <b-button type="submit" size="sm" variant="primary">
                  Submit
                </b-button>
                <b-button type="reset" size="sm" variant="alt-primary">
                  Reset
                </b-button>
              </template>
              <b-row class="py-sm-1 py-md-1">
                <b-col>
      <base-block rounded content-full>
              <b-form-group label="Question" label-for="example-textarea-input">
                <b-form-textarea id="example-textarea-input" rows="4" placeholder="Write Question.."></b-form-textarea>
              </b-form-group>
        <b-form-group label="Options" label-for="block-form1-password">
        <b-row class="">
        <b-col cols="9">
          <base-block rounded>
        <b-form-input id="Option A" class="form-control-alt" type="text" placeholder="Enter option A"></b-form-input>
          </base-block>
        </b-col>
        <b-col cols="3">
          <base-block rounded>
                  <b-form-checkbox class="custom-control-success mb-2" value="success">Correct Option</b-form-checkbox>
          </base-block>
        </b-col>
      </b-row>
        </b-form-group>
      </base-block>
                </b-col>
              </b-row>
            </base-block>
          </b-form>
            </b-tab>
            <b-tab title-item-class="ml-auto">
              <template #title>
                <i class="si si-settings"></i>
              </template>
              <h4 class="font-w400">Settings Content</h4>
              <p>...</p>
            </b-tab>
          </b-tabs>
      <!-- END Your Block -->
    </div>
  </div>
</template>

<script>
import { DB } from "../../firebase";
export default {
  data (){
    return {
      currentPage: 1,
      rows: 40,
      perPage: 10,
      firebaseData: null
    }
  },
  mounted(){
    this.fetch()
  },
  methods:{
    async fetch() {
      const list = DB.ref("mcq");
      const snapshot = await list.once("value");
      this.firebaseData = snapshot.val()
    }
  }
}
</script>