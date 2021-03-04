<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Invoice" subtitle="Clean and professional design." class="d-print-none">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Generic</b-breadcrumb-item>
          <b-breadcrumb-item active>Invoice</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content content-boxed">
      <!-- Invoice -->
      <base-block rounded title="#INV0625">
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
              <p class="h3">Company</p>
              <address>
                Street Address<br>
                State, City<br>
                Region, Postal Code<br>
                ltd@example.com
              </address>
            </div>
            <!-- END Company Info -->

            <!-- Client Info -->
            <div class="col-6 text-right font-size-sm">
              <p class="h3">Client</p>
              <address>
                Street Address<br>
                State, City<br>
                Region, Postal Code<br>
                ctr@example.com
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
              <b-tr>
                <b-td class="text-center">1</b-td>
                <b-td>
                  <p class="font-w600 mb-1">App Design & Development</p>
                  <div class="text-muted">Design/Development of iOS and Android application</div>
                </b-td>
                <b-td class="text-center">
                  <b-badge variant="primary" pill>1</b-badge>
                </b-td>
                <b-td class="text-right">$25.000,00</b-td>
                <b-td class="text-right">$25.000,00</b-td>
              </b-tr>
              <b-tr>
                <b-td class="text-center">2</b-td>
                <b-td>
                  <p class="font-w600 mb-1">Icon Pack Design</p>
                  <div class="text-muted">50 uniquely crafted icons for promotion</div>
                </b-td>
                <b-td class="text-center">
                  <b-badge variant="primary" pill>1</b-badge>
                </b-td>
                <b-td class="text-right">$900,00</b-td>
                <b-td class="text-right">$900,00</b-td>
              </b-tr>
              <b-tr>
                <b-td class="text-center">3</b-td>
                <b-td>
                  <p class="font-w600 mb-1">Website Design</p>
                  <div class="text-muted">Promotional website for the mobile application</div>
                </b-td>
                <b-td class="text-center">
                  <b-badge variant="primary" pill>1</b-badge>
                </b-td>
                <b-td class="text-right">$1.600,00</b-td>
                <b-td class="text-right">$1.600,00</b-td>
              </b-tr>
              <b-tr>
                <b-td colspan="4" class="font-w600 text-right">Subtotal</b-td>
                <b-td class="text-right">$27.500,00</b-td>
              </b-tr>
              <b-tr>
                <b-td colspan="4" class="font-w600 text-right">Vat Rate</b-td>
                <b-td class="text-right">20%</b-td>
              </b-tr>
              <b-tr>
                <b-td colspan="4" class="font-w600 text-right">Vat Due</b-td>
                <b-td class="text-right">$5.500,00</b-td>
              </b-tr>
              <b-tr>
                <b-td colspan="4" class="font-w700 text-uppercase text-right bg-body-light">Total Due</b-td>
                <b-td class="font-w700 text-right bg-body-light">$33.000,00</b-td>
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