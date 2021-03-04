<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Modals" subtitle="Add dialogs to your site for lightboxes, user notifications, or completely custom content.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
          <b-breadcrumb-item active>Modals</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Bootstrap Modals -->
      <h2 class="content-heading">Bootstrap Modals</h2>
      <b-row class="row-deck">
        <b-col md="6">
          <!-- Default Variation -->
          <base-block rounded title="Default Variation">
            <p class="font-size-sm text-muted">
              Modals are completely customizable and here we present the default one
            </p>
            <b-button variant="alt-primary" class="push" v-b-modal.modal-block-normal>
              Launch Modal
            </b-button>
          </base-block>
          <!-- END Default Variation -->

          <!-- Normal Block Modal -->
          <b-modal id="modal-block-normal" body-class="p-0" hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Modal Title</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-normal')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="block-content font-size-sm">
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
              </div>
              <div class="block-content block-content-full text-right border-top">
                <b-button variant="alt-primary" class="mr-1" @click="$bvModal.hide('modal-block-normal')">Close</b-button>
                <b-button variant="primary" @click="$bvModal.hide('modal-block-normal')">Ok</b-button>
              </div>
            </div>
          </b-modal>
          <!-- END Normal Block Modal -->
        </b-col>
        <b-col md="6">
          <!-- Size: Small -->
          <base-block rounded title="Size: Small">
            <p class="font-size-sm text-muted">
              If you don’t have much content, you can use the small size variation
            </p>
            <b-button variant="alt-primary" class="push" v-b-modal.modal-block-small>
              Launch Modal
            </b-button>
          </base-block>
          <!-- END Size: Small -->

          <!-- Small Block Modal -->
          <b-modal id="modal-block-small" size="sm" body-class="p-0" hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Modal Title</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-small')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="block-content font-size-sm">
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
              </div>
              <div class="block-content block-content-full text-right border-top">
                <b-button variant="alt-primary" class="mr-1" @click="$bvModal.hide('modal-block-small')">Close</b-button>
                <b-button variant="primary" @click="$bvModal.hide('modal-block-small')">Ok</b-button>
              </div>
            </div>
          </b-modal>
          <!-- END Small Block Modal -->
        </b-col>
        <b-col md="6">
          <!-- Size: Large -->
          <base-block rounded title="Size: Large">
            <p class="font-size-sm text-muted">
              If you need more space you can use the large size variation
            </p>
            <b-button variant="alt-primary" class="push" v-b-modal.modal-block-large>
              Launch Modal
            </b-button>
          </base-block>
          <!-- END Size: Large -->

          <!-- Large Block Modal -->
          <b-modal id="modal-block-large" size="lg" body-class="p-0" hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Modal Title</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-large')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="block-content font-size-sm">
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
              </div>
              <div class="block-content block-content-full text-right border-top">
                <b-button variant="alt-primary" class="mr-1" @click="$bvModal.hide('modal-block-large')">Close</b-button>
                <b-button variant="primary" @click="$bvModal.hide('modal-block-large')">Ok</b-button>
              </div>
            </div>
          </b-modal>
          <!-- END Large Block Modal -->
        </b-col>
        <b-col md="6">
          <!-- Size: Extra Large -->
          <base-block rounded title="Size: Extra Large">
            <p class="font-size-sm text-muted">
              Do you need even more space? Go for the extra large modal
            </p>
            <b-button variant="alt-primary" class="push" v-b-modal.modal-block-extra-large>
              Launch Modal
            </b-button>
          </base-block>
          <!-- END Size: Extra Large -->

          <!-- Extra Large Block Modal -->
          <b-modal id="modal-block-extra-large" size="xl" body-class="p-0" hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Modal Title</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-extra-large')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="block-content font-size-sm">
                <p>
                  Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh orci.
                </p>
                <p>
                  Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh orci.
                </p>
                <p>
                  Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh orci.
                </p>
              </div>
              <div class="block-content block-content-full text-right border-top">
                <b-button variant="alt-primary" class="mr-1" @click="$bvModal.hide('modal-block-extra-large')">Close</b-button>
                <b-button variant="primary" @click="$bvModal.hide('modal-block-extra-large')">Ok</b-button>
              </div>
            </div>
          </b-modal>
          <!-- END Extra Large Block Modal -->
        </b-col>
        <b-col md="6">
          <!-- Position: Top -->
          <base-block rounded title="Position: Top">
            <p class="font-size-sm text-muted">
              You can position your modals at the top of the screen
            </p>
            <b-button variant="alt-primary" class="push" v-b-modal.modal-block-top>
              Launch Modal
            </b-button>
          </base-block>
          <!-- END Position: Top -->

          <!-- Top Block Modal -->
          <b-modal id="modal-block-top" dialog-class="modal-dialog-top" body-class="p-0" hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Modal Title</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-top')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="block-content font-size-sm">
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
              </div>
              <div class="block-content block-content-full text-right border-top">
                <b-button variant="alt-primary" class="mr-1" @click="$bvModal.hide('modal-block-top')">Close</b-button>
                <b-button variant="primary" @click="$bvModal.hide('modal-block-top')">Ok</b-button>
              </div>
            </div>
          </b-modal>
          <!-- END Top Block Modal -->
        </b-col>
        <b-col md="6">
          <!-- Position: Vertically Centered -->
          <base-block rounded title="Position: Vertically Centered">
            <p class="font-size-sm text-muted">
              You can center your modals in the middle of the screen
            </p>
            <b-button variant="alt-primary" class="push" v-b-modal.modal-block-vcenter>
              Launch Modal
            </b-button>
          </base-block>
          <!-- END Position: Vertically Centered -->

          <!-- Vertically Centered Block Modal -->
          <b-modal id="modal-block-vcenter" body-class="p-0" centered hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Modal Title</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-vcenter')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="block-content font-size-sm">
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
              </div>
              <div class="block-content block-content-full text-right border-top">
                <b-button variant="alt-primary" class="mr-1" @click="$bvModal.hide('modal-block-vcenter')">Close</b-button>
                <b-button variant="primary" @click="$bvModal.hide('modal-block-vcenter')">Ok</b-button>
              </div>
            </div>
          </b-modal>
          <!-- END Vertically Centered Block Modal -->
        </b-col>
      </b-row>
      <!-- END Bootstrap Modals -->

      <!-- Bootstrap Modals Animations -->
      <h2 class="content-heading">
        Bootstrap Modals <small>Animations</small>
      </h2>
      <b-row class="row-deck">
        <b-col md="6">
          <!-- Fade In -->
          <base-block rounded title="Fade In">
            <p class="font-size-sm text-muted">
              The default modal animation
            </p>
            <b-button variant="alt-primary" class="push" v-b-modal.modal-block-fadein>
              Launch Modal
            </b-button>
          </base-block>
          <!-- END Fade In -->

          <!-- Fade In Block Modal -->
          <b-modal id="modal-block-fadein" body-class="p-0" hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Modal Title</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-fadein')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="block-content font-size-sm">
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
              </div>
              <div class="block-content block-content-full text-right border-top">
                <b-button variant="alt-primary" class="mr-1" @click="$bvModal.hide('modal-block-fadein')">Close</b-button>
                <b-button variant="primary" @click="$bvModal.hide('modal-block-fadein')">Ok</b-button>
              </div>
            </div>
          </b-modal>
          <!-- END Fade In Block Modal -->
        </b-col>
        <b-col md="6">
          <!-- Pop In -->
          <base-block rounded title="Pop In">
            <p class="font-size-sm text-muted">
              Poping in animation
            </p>
            <b-button variant="alt-primary" class="push" v-b-modal.modal-block-popin>
              Launch Modal
            </b-button>
          </base-block>
          <!-- END Pop In -->

          <!-- Pop In Block Modal -->
          <b-modal id="modal-block-popin" dialog-class="modal-dialog-popin" body-class="p-0" hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Modal Title</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-popin')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="block-content font-size-sm">
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
              </div>
              <div class="block-content block-content-full text-right border-top">
                <b-button variant="alt-primary" class="mr-1" @click="$bvModal.hide('modal-block-popin')">Close</b-button>
                <b-button variant="primary" @click="$bvModal.hide('modal-block-popin')">Ok</b-button>
              </div>
            </div>
          </b-modal>
          <!-- END Pop In Block Modal -->
        </b-col>
        <b-col md="6">
          <!-- Pop Out -->
          <base-block rounded title="Pop Out">
            <p class="font-size-sm text-muted">
              Poping out animation
            </p>
            <b-button variant="alt-primary" class="push" v-b-modal.modal-block-popout>
              Launch Modal
            </b-button>
          </base-block>
          <!-- END Pop Out -->

          <!-- Pop Out Block Modal -->
          <b-modal id="modal-block-popout" dialog-class="modal-dialog-popout" body-class="p-0" hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Modal Title</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-popout')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="block-content font-size-sm">
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
              </div>
              <div class="block-content block-content-full text-right border-top">
                <b-button variant="alt-primary" class="mr-1" @click="$bvModal.hide('modal-block-popout')">Close</b-button>
                <b-button variant="primary" @click="$bvModal.hide('modal-block-popout')">Ok</b-button>
              </div>
            </div>
          </b-modal>
          <!-- END Pop Out Block Modal -->
        </b-col>
        <b-col md="6">
          <!-- Slide Up -->
          <base-block rounded title="Slide Up">
            <p class="font-size-sm text-muted">
              Sliding from up animation
            </p>
            <b-button variant="alt-primary" class="push" v-b-modal.modal-block-slideup>
              Launch Modal
            </b-button>
          </base-block>
          <!-- END Slide Up -->

          <!-- Slide Up Block Modal -->
          <b-modal id="modal-block-slideup" dialog-class="modal-dialog-slideup" body-class="p-0" hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Modal Title</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-slideup')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="block-content font-size-sm">
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
              </div>
              <div class="block-content block-content-full text-right border-top">
                <b-button variant="alt-primary" class="mr-1" @click="$bvModal.hide('modal-block-slideup')">Close</b-button>
                <b-button variant="primary" @click="$bvModal.hide('modal-block-slideup')">Ok</b-button>
              </div>
            </div>
          </b-modal>
          <!-- END Slide Up Block Modal -->
        </b-col>
        <b-col md="6">
          <!-- Slide Right -->
          <base-block rounded title="Slide Right">
            <p class="font-size-sm text-muted">
              Sliding from right animation
            </p>
            <b-button variant="alt-primary" class="push" v-b-modal.modal-block-slideright>
              Launch Modal
            </b-button>
          </base-block>
          <!-- END Slide Right -->

          <!-- Slide Right Block Modal -->
          <b-modal id="modal-block-slideright" dialog-class="modal-dialog-slideright" body-class="p-0" hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Modal Title</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-slideright')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="block-content font-size-sm">
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
              </div>
              <div class="block-content block-content-full text-right border-top">
                <b-button variant="alt-primary" class="mr-1" @click="$bvModal.hide('modal-block-slideright')">Close</b-button>
                <b-button variant="primary" @click="$bvModal.hide('modal-block-slideright')">Ok</b-button>
              </div>
            </div>
          </b-modal>
          <!-- END Slide Right Block Modal -->
        </b-col>
        <b-col md="6">
          <!-- Slide Left -->
          <base-block rounded title="Slide Left">
            <p class="font-size-sm text-muted">
              Sliding from left animation
            </p>
            <b-button variant="alt-primary" class="push" v-b-modal.modal-block-slideleft>
              Launch Modal
            </b-button>
          </base-block>
          <!-- END Slide Left -->

          <!-- Slide Left Block Modal -->
          <b-modal id="modal-block-slideleft" dialog-class="modal-dialog-slideleft" body-class="p-0" hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Modal Title</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-slideleft')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="block-content font-size-sm">
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
              </div>
              <div class="block-content block-content-full text-right border-top">
                <b-button variant="alt-primary" class="mr-1" @click="$bvModal.hide('modal-block-slideleft')">Close</b-button>
                <b-button variant="primary" @click="$bvModal.hide('modal-block-slideleft')">Ok</b-button>
              </div>
            </div>
          </b-modal>
          <!-- END Slide Left Block Modal -->
        </b-col>
        <b-col md="6">
          <!-- From Right -->
          <base-block rounded title="From Right">
            <p class="font-size-sm text-muted">
              Coming from right with rotation animation
            </p>
            <b-button variant="alt-primary" class="push" v-b-modal.modal-block-fromright>
              Launch Modal
            </b-button>
          </base-block>
          <!-- END From Right -->

          <!-- From Right Block Modal -->
          <b-modal id="modal-block-fromright" dialog-class="modal-dialog-fromright" body-class="p-0" hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Modal Title</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-fromright')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="block-content font-size-sm">
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
              </div>
              <div class="block-content block-content-full text-right border-top">
                <b-button variant="alt-primary" class="mr-1" @click="$bvModal.hide('modal-block-fromright')">Close</b-button>
                <b-button variant="primary" @click="$bvModal.hide('modal-block-fromright')">Ok</b-button>
              </div>
            </div>
          </b-modal>
          <!-- END From Right Block Modal -->
        </b-col>
        <b-col md="6">
          <!-- From Left -->
          <base-block rounded title="From Left">
            <p class="font-size-sm text-muted">
              Coming from left with rotation animation
            </p>
            <b-button variant="alt-primary" class="push" v-b-modal.modal-block-fromleft>
              Launch Modal
            </b-button>
          </base-block>
          <!-- END From Left -->

          <!-- From Left Block Modal -->
          <b-modal id="modal-block-fromleft" dialog-class="modal-dialog-fromleft" body-class="p-0" hide-footer hide-header>
            <div class="block block-rounded block-themed block-transparent mb-0">
              <div class="block-header bg-primary-dark">
                <h3 class="block-title">Modal Title</h3>
                <div class="block-options">
                  <button type="button" class="btn-block-option" @click="$bvModal.hide('modal-block-fromleft')">
                    <i class="fa fa-fw fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="block-content font-size-sm">
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
                <p>
                  Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                  proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
                </p>
              </div>
              <div class="block-content block-content-full text-right border-top">
                <b-button variant="alt-primary" class="mr-1" @click="$bvModal.hide('modal-block-fromleft')">Close</b-button>
                <b-button variant="primary" @click="$bvModal.hide('modal-block-fromleft')">Ok</b-button>
              </div>
            </div>
          </b-modal>
          <!-- END From Left Block Modal -->
        </b-col>
      </b-row>
      <!-- END Bootstrap Modals Animations -->
    </div>
    <!-- END Page Content -->
  </div>
</template>
