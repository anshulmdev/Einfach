<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="REST API">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Library</b-breadcrumb-item>
          <b-breadcrumb-item active>API</b-breadcrumb-item>
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
        <p>
          <b-button size="sm" variant="light" @click="selectAllRows">Select all</b-button>
          <b-button size="sm" variant="light" @click="clearSelected">Clear selected</b-button>
        </p>
        <b-table
          ref="selectableTable"
          selectable
          select-variant="active"
          :items="firebaseData"
          :fields="fields2"
          @row-selected="onRowSelected"
          responsive
          table-class="table-vcenter"
        >
          <template v-slot:cell(selected)="{ rowSelected }">
            <template v-if="rowSelected">
              <span aria-hidden="true">
                <i class="fa fa-check-circle text-primary"></i>
              </span>
              <span class="sr-only">Selected</span>
            </template>
            <template v-else>
              <span aria-hidden="true">
                <i class="fa fa-minus-circle text-muted"></i>
              </span>
              <span class="sr-only">Not selected</span>
            </template>
          </template>
        </b-table>
        <p class="font-size-sm text-muted">
          Marks: <strong>{{ parseInt(selected.length)*10 }}</strong>
        </p>
              <p>...</p>
            </b-tab>
            <b-tab title="Custom">
          <b-form @submit="onSubmit" @reset="onReset">
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
        
        <b-form-group label="Endpoint" label-for="block-form1-password">
        <b-form-input id="extract" class="form-control-alt" type="text" placeholder="Enter url to hit"></b-form-input>
        </b-form-group>
        <b-form-group label="Answer" label-for="block-form1-password">
        <b-form-input id="pattern" class="form-control-alt" type="text" placeholder="Enter final answer"></b-form-input>
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
    <!-- END Page Content -->
  </div>
</template>

<script>
import { DB } from "../../firebase";
export default {
  data () {
    return {
      firebaseData: null,
      form: {
        username: '',
        password: '',
        rememberMe: false
      },
      sortBy: 'id',
      sortDesc: false,
      selectMode: 'multi',
      selected: [],
      fields2: [
        { key: 'selected', thStyle: 'width: 150px;', thClass: 'text-center', tdClass: 'text-center' },
        { key: 'id', thStyle: 'width: 75px;', thClass: 'text-center', tdClass: 'text-center' },
        { key: 'question' },
        { key: 'type' },
        { key: 'database' }
      ],
      users: [
        {
          id: 0,
          question: 'Retrieve authors',
          type: 'GET',
          database: 'JSON File'
        },
        {
          id: 1,
          question: 'Retrieve 375th id from RDB',
          type: 'GET',
          database: 'GCP Big Query'
        },
        {
          id: 2,
          question: 'NoSQL post entry',
          type: 'POST',
          database: 'GCP Firestore'
        },
        {
          id: 3,
          question: 'NoSQL update entry',
          type: 'PATCH',
          database: 'GCP Firestore'
        },
        {
          id: 4,
          question: 'Create User with auth',
          type: 'POST',
          database: 'NoSQL Redis'
        }
      ]
      }},
  mounted(){
    this.fetch()
  },
  
  methods: {
    async fetch() {
      const list = DB.ref("api");
      const snapshot = await list.once("value");
      this.firebaseData = snapshot.val()
    },
    onSubmit (evt) {
      evt.preventDefault()

      // Alert with form input values
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()

      // Reset our form values
      this.form.username = ''
      this.form.password = ''
      this.form.rememberMe = false
    },
    onRowSelected (items) {
      this.selected = items
    },
    selectAllRows () {
      this.$refs.selectableTable.selectAllRows()
    },
    clearSelected () {
      this.$refs.selectableTable.clearSelected()
    }
  }
}
</script>