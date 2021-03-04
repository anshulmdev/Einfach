<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="JavaScript">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Library</b-breadcrumb-item>
          <b-breadcrumb-item active>JS</b-breadcrumb-item>
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
    <div class="content">
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
                <b-th class="d-none d-lg-table-cell text-center" style="width: 15%;">Status</b-th>
                <b-th class="d-none d-lg-table-cell text-center" style="width: 15%;">Marks</b-th>
                <b-th class="text-center" style="width: 20%;">Select</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr v-for="(ques, index) in data" :key="index">
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
                <b-td class="h5 text-center">
                  <b-form-checkbox class="checkbox-xl" v-model="selectedCheckboxes" :options="optionsCheckboxes" plain stacked></b-form-checkbox>
                  </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
          <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" size="sm"></b-pagination>
          <!-- END Projects -->
    </div>
    <!-- END Search -->
            </b-tab>
            <b-tab title="Custom">
          bbbbbbbb
            </b-tab>
            <b-tab title="Preview">
          <iframe height="800px" width="100%" src="https://repl.it/@AnshulM2/cloudifyTestJavaScript?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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
export default {
  data (){
    return {
      currentPage: 2,
      rows: 40,
      perPage: 10,
      data:{
        "0":{
          heading: "Remove Element",
          subHeading: "Given an array nums and a value val, remove all instances of that value in-place and return the new length.",
          type: ["Easy","success"],
          marks:10
        },
        "1":{
          heading: "Permutations",
          subHeading: "Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.",
          type: ["Medium","warning"],
          marks:20
        },
        "2":{
          heading: "Jump Game",
          subHeading: "Given an array of non-negative integers nums, you are initially positioned at the first index of the array.",
          type: ["Hard","danger"],
          marks:30
        },
        "3":{
          heading: "Swap Nodes in Pairs",
          subHeading: "Given a linked list, swap every two adjacent nodes and return its head.",
          type: ["Medium","warning"],
          marks:20
        },
        "4":{
          heading: "Divide Two Integers",
          subHeading: "Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.",
          type: ["Medium","warning"],
          marks:20
        }
      }
    }
  }
}
</script>