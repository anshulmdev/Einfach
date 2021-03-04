<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Loaders" subtitle="Show any page or custom activity.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Layout</b-breadcrumb-item>
          <b-breadcrumb-item active>Loaders</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Header Loader -->
      <base-block rounded title="Header Loader" content-full>
        <p class="font-size-sm text-muted">
          You can use the layout API to start the header loader and stop it on demand. It is better to be used when the
          header is also set to fixed, so it is always visible.
        </p>
        <b-table-simple responsive striped table-class="table-vcenter mb-0">
          <b-thead>
            <b-tr>
              <b-th style="min-width: 300px; width: 300px;">Live</b-th>
              <b-th style="min-width: 380px; width: 380px;">JS</b-th>
              <b-th style="min-width: 400px;">Component</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>
                <base-layout-modifier variant="alt-success" action="headerLoaderOn" size="sm">Start Header Loader</base-layout-modifier>
              </b-td>
              <b-td>
                <code>this.$store.commit('headerLoader', { mode: 'on' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;headerLoaderOn&quot;&gt;Start Header Loader&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <base-layout-modifier variant="alt-danger" action="headerLoaderOff" size="sm">Stop Header Loader</base-layout-modifier>
              </b-td>
              <b-td>
                <code>this.$store.commit('headerLoader', { mode: 'off' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;headerLoaderOff&quot;&gt;Stop Header Loader&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </base-block>
      <!-- END Header Loader -->

      <!-- Page Loader -->
      <base-block rounded title="Page Loader" content-full>
        <p class="font-size-sm text-muted">
          Page loader can provide a loading/splash screen feature. You can preview the page loader  for 3 seconds by clicking the following button:
        </p>
        <b-button size="sm" variant="alt-primary" class="mb-3" @click="pageLoaderPreview">Preview Page Loader</b-button>
        <b-table-simple responsive striped table-class="table-vcenter mb-0">
          <b-thead>
            <b-tr>
              <b-th style="min-width: 300px; width: 300px;">Mode</b-th>
              <b-th style="min-width: 380px; width: 380px;">JS</b-th>
              <b-th style="min-width: 400px;">Component</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>
                <p class="font-size-sm text-muted mb-0">
                  Starts Page Loader
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('pageLoader', { mode: 'on' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;pageLoaderOn&quot;&gt;Start Page Loader&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <p class="font-size-sm text-muted mb-0">
                  Stops Page Loader
                </p>
              </b-td>
              <b-td>
                <code>this.$store.commit('pageLoader', { mode: 'off' })</code>
              </b-td>
              <b-td>
                <code>&lt;base-layout-modifier action=&quot;pageLoaderOff&quot;&gt;Stop Page Loader&lt;/base-layout-modifier&gt;</code>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </base-block>
      <!-- END Page Loader -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  methods: {
    // Preview Page Loader for a few seconds
    pageLoaderPreview () {
      this.$store.commit('pageLoader', { mode: 'on' })
      
      setTimeout(() => {
        this.$store.commit('pageLoader', { mode: 'off' })
      }, 3000)
    }
  }
}
</script>