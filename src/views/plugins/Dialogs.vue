<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Dialogs" subtitle="Customizable and accesible popup boxes powered by SweetAlert2 plugin.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Plugins</b-breadcrumb-item>
          <b-breadcrumb-item active>Dialogs</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- SweetAlert2 -->
      <base-block rounded title="SweetAlert2">
        <b-row class="items-push">
          <b-col md="6">
            <!-- Simple -->
            <h4 class="border-bottom pb-2">Simple</h4>
            <p class="font-size-sm text-muted mb-2">
              A dialog showing a simple message
            </p>
            <b-button variant="light" class="push" @click="swalSimple">
              Launch Dialog
            </b-button>
            <!-- END Simple -->
          </b-col>
          <b-col md="6">
            <!-- Success -->
            <h4 class="border-bottom pb-2">Success</h4>
            <p class="font-size-sm text-muted mb-2">
              A dialog showing a message after a successful operation
            </p>
            <b-button variant="light" class="push" @click="swalSuccess">
              <i class="fa fa-check-circle text-success mr-1"></i> Launch Dialog
            </b-button>
            <!-- END Success -->
          </b-col>
          <b-col md="6">
            <!-- Info -->
            <h4 class="border-bottom pb-2">Info</h4>
            <p class="font-size-sm text-muted mb-2">
              A dialog showing an informational message
            </p>
            <b-button variant="light" class="push" @click="swalInfo">
              <i class="fa fa-info-circle text-info mr-1"></i> Launch Dialog
            </b-button>
            <!-- END Info -->
          </b-col>
          <b-col md="6">
            <!-- Warning -->
            <h4 class="border-bottom pb-2">Warning</h4>
            <p class="font-size-sm text-muted mb-2">
              A dialog showing a warning message
            </p>
            <b-button variant="light" class="push" @click="swalWarning">
              <i class="fa fa-exclamation-triangle text-warning mr-1"></i> Launch Dialog
            </b-button>
            <!-- END Warning -->
          </b-col>
          <b-col md="6">
            <!-- Error -->
            <h4 class="border-bottom pb-2">Error</h4>
            <p class="font-size-sm text-muted mb-2">
              A dialog showing a message after a failed operation
            </p>
            <b-button variant="light" class="push" @click="swalError">
              <i class="fa fa-times-circle text-danger mr-1"></i> Launch Dialog
            </b-button>
            <!-- END Error -->
          </b-col>
          <b-col md="6">
            <!-- Question -->
            <h4 class="border-bottom pb-2">Question</h4>
            <p class="font-size-sm text-muted mb-2">
              A dialog showing a question message
            </p>
            <b-button variant="light" class="push" @click="swalQuestion">
              <i class="fa fa-question-circle text-muted mr-1"></i> Launch Dialog
            </b-button>
            <!-- END Question -->
          </b-col>
          <b-col md="6">
            <!-- Confirmation -->
            <h4 class="border-bottom pb-2">Confirmation</h4>
            <p class="font-size-sm text-muted mb-2">
              A dialog showing a confirmation message
            </p>
            <b-button variant="light" class="push" @click="swalConfirm">
              <i class="fa fa-check-square text-muted mr-1"></i> Launch Dialog
            </b-button>
            <!-- END Confirmation -->
          </b-col>
          <b-col md="6">
            <!-- Custom Position -->
            <h4 class="border-bottom pb-2">Custom Position</h4>
            <p class="font-size-sm text-muted mb-2">
              A dialog showing at the top right of the screen
            </p>
            <b-button variant="light" class="push" @click="swalCustomPosition">
              <i class="fa fa-bolt text-muted mr-1"></i> Launch Dialog
            </b-button>
            <!-- END Custom Position -->
          </b-col>
        </b-row>
      </base-block>
    </div>
    <!-- END Page Content -->
  </div>
</template>

<style lang="scss">
// SweetAlert2
@import '~sweetalert2/dist/sweetalert2.min.css';
</style>

<script>
// Vue SweetAlert2, for more info and examples you can check out https://github.com/avil13/vue-sweetalert2
import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'

const options = {
  buttonsStyling: false,
  customClass: {
    confirmButton: 'btn btn-success m-1',
    cancelButton: 'btn btn-danger m-1',
    input: 'form-control'
  }
}

// Register Vue SweetAlert2 with custom options
Vue.use(VueSweetalert2, options)

export default {
  methods: {
    swalSimple () {
      this.$swal('Hi, this is just a simple message!')
    },
    swalSuccess () {
      this.$swal('Success', 'Everything was updated perfectly!', 'success')
    },
    swalInfo () {
      this.$swal('Info', 'Just an informational message!', 'info')
    },
    swalWarning () {
      this.$swal('Warning', 'Something needs your attention!', 'warning')
    },
    swalError () {
      this.$swal('Oops...', 'Something went wrong!', 'error')
    },
    swalQuestion () {
      this.$swal('Question', 'Are you sure about that?', 'question')
    },
    swalConfirm () {
      this.$swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this imaginary file!',
        icon: 'warning',
        showCancelButton: true,
        customClass: {
          confirmButton: 'btn btn-danger m-1',
          cancelButton: 'btn btn-secondary m-1'
        },
        confirmButtonText: 'Yes, delete it!',
        html: false,
        preConfirm: () => {
          return new Promise(resolve => {
            setTimeout(() => {
              resolve()
            }, 50)
          })
        }
      }).then(result => {
        if (result.value) {
          this.$swal('Deleted!', 'Your imaginary file has been deleted.', 'success')
          // result.dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
        } else if (result.dismiss === 'cancel') {
          this.$swal('Cancelled', 'Your imaginary file is safe :)', 'error')
        }
      })
    },
    swalCustomPosition() {
      this.$swal({
        position: 'top-end',
        title: 'Perfect!',
        text: 'Nice Position!',
        icon: 'success'
      })
    }
  }
}
</script>
