<template>
  <div v-if="$store.state.firestoreData">
    <!-- Hero -->
    <base-page-heading title="Invoice" subtitle="your billing cycles details" class="d-print-none">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Subscription</b-breadcrumb-item>
          <b-breadcrumb-item active>Invoice</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content  -->
    <div class="content content-boxed">
      <!-- Invoice -->
      <base-block rounded :title="this.$store.state.firestoreData.billing.invoices.details.number">
        <template #options>
          <button type="button" class="btn-block-option" @click="printPage">
            <i class="si si-printer mr-1"></i> Print Invoice
          </button>
        </template>
        <div class="p-sm-4 p-xl-7">
          <!-- Invoice Info -->
          <div class="row mb-4">
            <!-- Company Info -->
            <div class="col-6 font-size-sm">
              <p class="h3">Einfach Tech</p>
              <address>
                718 Block A<br>
                State, City<br>
                Region, Postal Code<br>
                ctr@example.com
              </address>
            </div>
            <!-- END Company Info -->
            <!-- Client Info -->
            <div class="col-6 text-right font-size-sm">
              <p class="h3">{{$store.state.firestoreData.user.name}}</p>
              <address>
                {{$store.state.firestoreData.user.address.address1}}<br>
                {{$store.state.firestoreData.user.address.address2}}, {{$store.state.firestoreData.user.address.pincode}}<br>
                {{$store.state.firestoreData.user.address.city}}, {{$store.state.firestoreData.user.address.state}}, {{$store.state.firestoreData.user.address.country}}<br>
               {{$store.state.firestoreData.user.email}}
              </address>
            </div>
            <!-- END Client Info -->
          </div>
          <!-- END Invoice Info -->
          <!-- Table -->
          <b-table-simple responsive bordered table-class="table-vcenter">
            <b-thead>
              <b-tr>
                <b-th class="text-center" style="width: 60px;"></b-th>
                <b-th>Product</b-th>
                <b-th class="text-center" style="width: 90px;">Qnt</b-th>
                <b-th class="text-right" style="width: 120px;">Unit</b-th>
                <b-th class="text-right" style="width: 120px;">Amount</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr v-for="(item,index) in Object.values(this.$store.state.firestoreData.billing.invoices['et-inv001'])" :key="index">
                <b-td class="text-center">{{index}}</b-td>
                <b-td>
                  <p class="font-w600 mb-1">{{item.plan}}</p>
                  <div class="text-muted">{{item.description}}</div>
                </b-td>
                <b-td class="text-center">
                  <b-badge variant="primary" pill>{{item.quantity}}</b-badge>
                </b-td>
                <b-td class="text-right">${{item.price}}</b-td>
                <b-td class="text-right">${{parseInt(item.quantity)*parseInt(item.price)}}</b-td>
              </b-tr>
              <b-tr>
                <b-td colspan="4" class="font-w600 text-right">Subtotal</b-td>
                <b-td class="text-right">${{this.$store.state.firestoreData.billing.invoices.details.total}}</b-td>
              </b-tr>
              <b-tr>
                <b-td colspan="4" class="font-w600 text-right">Vat Rate</b-td>
                <b-td class="text-right">20%</b-td>
              </b-tr>
              <b-tr>
                <b-td colspan="4" class="font-w600 text-right">Vat Due</b-td>
                <b-td class="text-right">${{this.$store.state.firestoreData.billing.invoices.details.total/5}}</b-td>
              </b-tr>
              <b-tr>
                <b-td colspan="4" class="font-w700 text-uppercase text-right bg-body-light">Total Due</b-td>
                <b-td class="font-w700 text-right bg-body-light">${{this.$store.state.firestoreData.billing.invoices.details.total*(5/6)}}</b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
          <!-- END Table -->

          <!-- Footer -->
          <p class="font-size-sm text-muted text-center py-3 my-3 border-top">
            Thank you very much for doing business with us. We look forward to working with you again!
          </p>
          <!-- END Footer -->
        </div>
      </base-block>
      <!-- END Invoice -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  methods: {
    printPage () {
      // Get current sidebar visibility
      let sidebarVisibility = this.$store.state.settings.sidebarVisibleDesktop

      // Close the sidebar
      this.$store.commit('sidebar', { mode: 'close' })

      // Print the page
      window.print()

      // Restore previous sidebar visibility
      if (sidebarVisibility) {
        this.$store.commit('sidebar', { mode: 'open' })
      } 
    }
  }
}
</script>