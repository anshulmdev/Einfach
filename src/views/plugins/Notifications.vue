<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Notifications" subtitle="Powerful alerts for your application.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Plugins</b-breadcrumb-item>
          <b-breadcrumb-item active>Notifications</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Bootstrap Toasts -->
      <base-block rounded title="Bootstrap Toasts">
        <!-- Default -->
        <h4 class="border-bottom pb-2">Default</h4>
        <b-row class="items-push">
          <b-col lg="4">
            <p class="font-size-sm text-muted">
              A nice toast with a message
            </p>
          </b-col>
          <b-col lg="8">
            <b-button variant="alt-secondary" class="push" @click="toast('Prepend Toast', 'Toast content')">
              Prepend Toast
            </b-button>
            <p class="font-w600 mb-0">
              JS code:
            </p>
            <p class="mb-5">
              <code>this.toast('Title', 'Content')</code>
            </p>
            <b-button variant="alt-secondary" class="push" @click="toast('Append Toast', 'Toast content', null, true)">
              Append Toast
            </b-button>
            <p class="font-w600 mb-0">
              JS code:
            </p>
            <p class="mb-5">
              <code>this.toast('Title', 'Content', null, true)</code>
            </p>
          </b-col>
        </b-row>
        <!-- END Default -->

        <!-- Position -->
        <h4 class="border-bottom pb-2">Position</h4>
        <b-row class="items-push">
          <b-col lg="4">
            <p class="font-size-sm text-muted">
              You can show your notification in multiple screen positions
            </p>
          </b-col>
          <b-col lg="8">
            <b-button variant="alt-primary" class="push" @click="toast('Top Right Toast', 'Toast content', null, false, 'b-toaster-top-right')">
              Top Right Toast
            </b-button>
            <p class="font-w600 mb-0">
              JS code:
            </p>
            <p class="mb-5">
              <code>this.toast('Title', 'Content', null, false, 'b-toaster-top-right')</code>
            </p>
            <b-button variant="alt-primary" class="push" @click="toast('Top Left Toast', 'Toast content', null, false, 'b-toaster-top-left')">
              Top Left Toast
            </b-button>
            <p class="font-w600 mb-0">
              JS code:
            </p>
            <p class="mb-5">
              <code>this.toast('Title', 'Content', null, false, 'b-toaster-top-left')</code>
            </p>
            <b-button variant="alt-primary" class="push" @click="toast('Top Center Toast', 'Toast content', null, false, 'b-toaster-top-center')">
              Top Center Toast
            </b-button>
            <p class="font-w600 mb-0">
              JS code:
            </p>
            <p class="mb-5">
              <code>this.toast('Title', 'Content', null, false, 'b-toaster-top-center')</code>
            </p>
            <b-button variant="alt-primary" class="push" @click="toast('Top Full Toast', 'Toast content', null, false, 'b-toaster-top-full')">
              Top Full Toast
            </b-button>
            <p class="font-w600 mb-0">
              JS code:
            </p>
            <p class="mb-5">
              <code>this.toast('Title', 'Content', null, false, 'b-toaster-top-full')</code>
            </p>
            <b-button variant="alt-primary" class="push" @click="toast('Bottom Right Toast', 'Toast content', null, false, 'b-toaster-bottom-right')">
              Bottom Right Toast
            </b-button>
            <p class="font-w600 mb-0">
              JS code:
            </p>
            <p class="mb-5">
              <code>this.toast('Title', 'Content', null, false, 'b-toaster-bottom-right')</code>
            </p>
            <b-button variant="alt-primary" class="push" @click="toast('Bottom Left Toast', 'Toast content', null, false, 'b-toaster-bottom-left')">
              Bottom Left Toast
            </b-button>
            <p class="font-w600 mb-0">
              JS code:
            </p>
            <p class="mb-5">
              <code>this.toast('Title', 'Content', null, false, 'b-toaster-bottom-left')</code>
            </p>
            <b-button variant="alt-primary" class="push" @click="toast('Bottom Center Toast', 'Toast content', null, false, 'b-toaster-bottom-center')">
              Bottom Center Toast
            </b-button>
            <p class="font-w600 mb-0">
              JS code:
            </p>
            <p class="mb-5">
              <code>this.toast('Title', 'Content', null, false, 'b-toaster-bottom-center')</code>
            </p>
            <b-button variant="alt-primary" class="push" @click="toast('Bottom Full Toast', 'Toast content', null, false, 'b-toaster-bottom-full')">
              Bottom Full Toast
            </b-button>
            <p class="font-w600 mb-0">
              JS code:
            </p>
            <p class="mb-5">
              <code>this.toast('Title', 'Content', null, false, 'b-toaster-bottom-full')</code>
            </p>
          </b-col>
        </b-row>
        <!-- END Position -->

        <!-- Variants -->
        <h4 class="border-bottom pb-2">Variants</h4>
        <b-row class="items-push">
          <b-col lg="4">
            <p class="font-size-sm text-muted">
              You can also specify color variations
            </p>
          </b-col>
          <b-col lg="8">
            <b-button variant="alt-success" class="push" @click="toast('Success Toast', 'Toast content', 'success')">
              Success
            </b-button>
            <p class="font-w600 mb-0">
              JS code:
            </p>
            <p class="mb-5">
              <code>this.toast('Title', 'Content', 'success')</code>
            </p>
            <b-button variant="alt-info" class="push" @click="toast('Info Toast', 'Toast content', 'info')">
              Info
            </b-button>
            <p class="font-w600 mb-0">
              JS code:
            </p>
            <p class="mb-5">
              <code>this.toast('Title', 'Content', 'info')</code>
            </p>
            <b-button variant="alt-warning" class="push" @click="toast('Warning Toast', 'Toast content', 'warning')">
              Warning
            </b-button>
            <p class="font-w600 mb-0">
              JS code:
            </p>
            <p class="mb-5">
              <code>this.toast('Title', 'Content', 'warning')</code>
            </p>
            <b-button variant="alt-danger" class="push" @click="toast('Danger Toast', 'Toast content', 'danger')">
              Danger
            </b-button>
            <p class="font-w600 mb-0">
              JS code:
            </p>
            <p class="mb-5">
              <code>this.toast('Title', 'Content', 'danger')</code>
            </p>
          </b-col>
        </b-row>
        <!-- END Variants -->
      </base-block>
      <!-- END Bootstrap Toasts -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  methods: {
    // Trigger a new toast
    toast (title, content, variant = null, append = false, toaster = 'b-toaster-top-right', autoHideDelay = 5000) {
      this.$bvToast.toast(content, {
        title: title,
        toaster: toaster,
        variant: variant,
        autoHideDelay: autoHideDelay,
        appendToast: append
      })
    }
  }
}
</script>
