<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Table Helpers" subtitle="Custom functionality to further enrich your tables.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Tables</b-breadcrumb-item>
          <b-breadcrumb-item active>Helpers</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Sorting Table -->
      <base-block rounded title="Sorting Table">
        <template #options>
          <button type="button" class="btn-block-option">
            <i class="si si-settings"></i>
          </button>
        </template>
        <p class="font-size-sm text-muted">
          Sorting By: <strong>{{ sortBy }}</strong>, Sort Direction: <strong>{{ sortDesc ? 'Descending' : 'Ascending' }}</strong>
        </p>
        <b-table
          :items="users"
          :fields="fields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          responsive
          bordered
          striped
          table-class="table-vcenter"
        ></b-table>
      </base-block>
      <!-- END Sorting Table -->

      <!-- Selectable Table -->
      <base-block rounded title="Selectable Table">
        <template #options>
          <button type="button" class="btn-block-option">
            <i class="si si-settings"></i>
          </button>
        </template>
        <p>
          <b-button size="sm" variant="light" @click="selectAllRows">Select all</b-button>
          <b-button size="sm" variant="light" @click="clearSelected">Clear selected</b-button>
          <b-button size="sm" variant="light" @click="selectSecondRow">Select 2nd row</b-button>
          <b-button size="sm" variant="light" @click="unselectSecondRow">Unselect 2nd row</b-button>
        </p>
        <b-table
          ref="selectableTable"
          selectable
          select-variant="active"
          :items="users"
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
          Selected Rows: <strong>{{ selected }}</strong>
        </p>
      </base-block>
      <!-- END Selectable Table -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      sortBy: 'id',
      sortDesc: false,
      selectMode: 'multi',
      selected: [],
      fields: [
        { key: 'id', sortable: true, thStyle: 'width: 75px;', thClass: 'text-center', tdClass: 'text-center' },
        { key: 'firstName', sortable: true },
        { key: 'lastName', sortable: true },
        { key: 'email', sortable: true }
      ],
      fields2: [
        { key: 'selected', thStyle: 'width: 150px;', thClass: 'text-center', tdClass: 'text-center' },
        { key: 'id', thStyle: 'width: 75px;', thClass: 'text-center', tdClass: 'text-center' },
        { key: 'firstName' },
        { key: 'lastName' },
        { key: 'email' }
      ],
      users: [
        {
          id: 1,
          firstName: 'Adam',
          lastName: 'McCoy',
          email: 'adam.maccoy@example.com'
        },
        {
          id: 2,
          firstName: 'Betty',
          lastName: 'Kelley',
          email: 'betty.kelley@example.com'
        },
        {
          id: 3,
          firstName: 'Jesse',
          lastName: 'Fisher',
          email: 'jesse.fisher@example.com'
        },
        {
          id: 4,
          firstName: 'Ryan',
          lastName: 'Flores',
          email: 'ryan.flores@example.com'
        },
        {
          id: 5,
          firstName: 'Alice',
          lastName: 'Moore',
          email: 'alice.moore@example.com'
        }
      ]
    }
  },
  methods: {
    onRowSelected (items) {
      this.selected = items
    },
    selectAllRows () {
      this.$refs.selectableTable.selectAllRows()
    },
    clearSelected () {
      this.$refs.selectableTable.clearSelected()
    },
    selectSecondRow () {
      // Rows are indexed from 0, so the second row is index 1
      this.$refs.selectableTable.selectRow(1)
    },
    unselectSecondRow () {
      // Rows are indexed from 0, so the second row is index 1
      this.$refs.selectableTable.unselectRow(1)
    }
  }
}
</script>
