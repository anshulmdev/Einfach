<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Block API" subtitle="Powerful way to manipulate any block you want.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Blocks</b-breadcrumb-item>
          <b-breadcrumb-item active>API</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Blocks API -->
      <base-block rounded title="Usage with JS code">
        <p class="font-size-sm text-muted mb-0">
          Using block API is easy. You will just have to use the ref property of your block to call the related function. For example, to set the state of a block with ref set to <strong>testBlock</strong> to loading, you will have to call:
        </p>
        <p>
          <code>this.$refs.testBlock.stateLoading()</code>
        </p>
        <b-row class="items-push">
          <b-col md="6">
            <b-table-simple responsive bordered striped table-class="table-vcenter mb-0">
              <b-thead>
                <b-tr>
                  <b-th style="width: 25%;">Live Test</b-th>
                  <b-th style="min-width: 160px;">Method</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr>
                  <b-td>
                    <b-button size="sm" variant="alt-primary" block @click="$refs.testBlock.contentToggle()">Toggle Content</b-button>
                  </b-td>
                  <b-td>
                    <code>$refs.testBlock.contentToggle()</code>
                  </b-td>
                </b-tr>
                <b-tr>
                  <b-td>
                    <b-button size="sm" variant="alt-primary" block @click="$refs.testBlock.contentHide()">Hide Content</b-button>
                  </b-td>
                  <b-td>
                    <code>$refs.testBlock.contentHide()</code>
                  </b-td>
                </b-tr>
                <b-tr>
                  <b-td>
                    <b-button size="sm" variant="alt-primary" block @click="$refs.testBlock.contentShow()">Show Content</b-button>
                  </b-td>
                  <b-td>
                    <code>$refs.testBlock.contentShow()</code>
                  </b-td>
                </b-tr>
                <b-tr>
                  <b-td>
                    <b-button size="sm" variant="alt-primary" block @click="$refs.testBlock.stateToggle()">Toggle State</b-button>
                  </b-td>
                  <b-td>
                    <code>$refs.testBlock.stateToggle()</code>
                  </b-td>
                </b-tr>
                <b-tr>
                  <b-td>
                    <b-button size="sm" variant="alt-primary" block @click="$refs.testBlock.stateLoading()">State Loading</b-button>
                  </b-td>
                  <b-td>
                    <code>$refs.testBlock.stateLoading()</code>
                  </b-td>
                </b-tr>
                <b-tr>
                  <b-td>
                    <b-button size="sm" variant="alt-primary" block @click="$refs.testBlock.stateNormal()">State Normal</b-button>
                  </b-td>
                  <b-td>
                    <code>$refs.testBlock.stateNormal()</code>
                  </b-td>
                </b-tr>
                <b-tr>
                  <b-td>
                    <b-button size="sm" variant="alt-primary" block @click="$refs.testBlock.fullscreenToggle()">Toggle Fullscreen</b-button>
                  </b-td>
                  <b-td>
                    <code>$refs.testBlock.fullscreenToggle()</code>
                  </b-td>
                </b-tr>
                <b-tr>
                  <b-td>
                    <b-button size="sm" variant="alt-primary" block @click="$refs.testBlock.fullscreenOn()">Fullscreen On</b-button>
                  </b-td>
                  <b-td>
                    <code>$refs.testBlock.fullscreenOn()</code>
                  </b-td>
                </b-tr>
                <b-tr>
                  <b-td>
                    <b-button size="sm" variant="alt-primary" block @click="$refs.testBlock.fullscreenOff()">Fullscreen Off</b-button>
                  </b-td>
                  <b-td>
                    <code>$refs.testBlock.fullscreenOff()</code>
                  </b-td>
                </b-tr>
                <b-tr>
                  <b-td>
                    <b-button size="sm" variant="alt-primary" block @click="$refs.testBlock.pinnedToggle()">Toggle Pinned</b-button>
                  </b-td>
                  <b-td>
                    <code>$refs.testBlock.pinnedToggle()</code>
                  </b-td>
                </b-tr>
                <b-tr>
                  <b-td>
                    <b-button size="sm" variant="alt-primary" block @click="$refs.testBlock.pinnedOn()">Pinned On</b-button>
                  </b-td>
                  <b-td>
                    <code>$refs.testBlock.pinnedOn()</code>
                  </b-td>
                </b-tr>
                <b-tr>
                  <b-td>
                    <b-button size="sm" variant="alt-primary" block @click="$refs.testBlock.pinnedOff()">Pinned Off</b-button>
                  </b-td>
                  <b-td>
                    <code>$refs.testBlock.pinnedOff()</code>
                  </b-td>
                </b-tr>
                <b-tr>
                  <b-td>
                    <b-button size="sm" variant="alt-primary" block @click="$refs.testBlock.close()">Close</b-button>
                  </b-td>
                  <b-td>
                    <code>$refs.testBlock.close()</code>
                  </b-td>
                </b-tr>
                <b-tr>
                  <b-td>
                    <b-button size="sm" variant="alt-primary" block @click="$refs.testBlock.open()">Open</b-button>
                  </b-td>
                  <b-td>
                    <code>$refs.testBlock.open()</code>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </b-col>
          <b-col md="6">
            <!-- Test Block -->
            <base-block rounded title="Test Block" ref="testBlock" bordered header-bg btn-option-fullscreen btn-option-content>
              <p>
                Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh orci.
              </p>
            </base-block>
            <!-- END Test Block -->
          </b-col>
        </b-row>
      </base-block>
      <!-- END Blocks API -->

      <!-- Interactive Options -->
      <h2 class="content-heading">Interactive Options</h2>
      <b-row>
        <b-col md="6">
          <base-block rounded title="Toggle Content" btn-option-content>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
          </base-block>
        </b-col>
        <b-col md="6">
          <base-block rounded title="Close" btn-option-close>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
          </base-block>
        </b-col>
        <b-col md="6">
          <base-block rounded title="Maximize" btn-option-fullscreen>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
          </base-block>
        </b-col>
        <b-col md="6">
          <base-block rounded title="Refresh" ref="textBlock2">
            <template #options>
               <button type="button" class="btn-block-option" @click="loadData('textBlock2')">
                <i class="si si-refresh"></i>
              </button>
            </template>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
          </base-block>
        </b-col>
        <b-col md="6">
          <base-block rounded title="Pinned" btn-option-pinned>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
          </base-block>
        </b-col>
        <b-col md="6">
          <base-block rounded title="Content" subtitle="Hidden by default" btn-option-content mode-content-hide>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
          </base-block>
        </b-col>
        <b-col cols="12">
          <base-block rounded title="All Options" ref="testBlock2" btn-option-fullscreen btn-option-pinned btn-option-content btn-option-close>
            <template #options>
               <button type="button" class="btn-block-option" @click="loadData('testBlock2')">
                <i class="si si-refresh"></i>
              </button>
            </template>
            <p>
              Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh orci.
            </p>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Interactive Options -->

      <!-- Loading Indicators -->
      <h2 class="content-heading">Loading Indicators</h2>
      <b-row>
        <b-col md="6">
          <base-block rounded title="Gog" ref="blockLoadingGog">
            <template #options>
               <button type="button" class="btn-block-option" @click="loadData('blockLoadingGog')">
                <i class="si si-refresh"></i>
              </button>
            </template>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
          </base-block>
        </b-col>
        <b-col md="6">
          <base-block rounded title="Location" ref="blockLoadingLocation" class="block-mode-loading-location">
            <template #options>
               <button type="button" class="btn-block-option" @click="loadData('blockLoadingLocation')">
                <i class="si si-refresh"></i>
              </button>
            </template>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
          </base-block>
        </b-col>
        <b-col md="6">
          <base-block rounded title="Energy" ref="blockLoadingEnergy" class="block-mode-loading-energy">
            <template #options>
               <button type="button" class="btn-block-option" @click="loadData('blockLoadingEnergy')">
                <i class="si si-refresh"></i>
              </button>
            </template>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
          </base-block>
        </b-col>
        <b-col md="6">
          <base-block rounded title="Refresh" ref="blockLoadingRefresh" class="block-mode-loading-refresh">
            <template #options>
               <button type="button" class="btn-block-option" @click="loadData('blockLoadingRefresh')">
                <i class="si si-refresh"></i>
              </button>
            </template>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
          </base-block>
        </b-col>
        <b-col md="6">
          <base-block rounded title="Sun" ref="blockLoadingSun" class="block-mode-loading-sun">
            <template #options>
               <button type="button" class="btn-block-option" @click="loadData('blockLoadingSun')">
                <i class="si si-refresh"></i>
              </button>
            </template>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
          </base-block>
        </b-col>
        <b-col md="6">
          <base-block rounded title="Repeat" ref="blockLoadingRepeat" class="block-mode-loading-repeat">
            <template #options>
               <button type="button" class="btn-block-option" @click="loadData('blockLoadingRepeat')">
                <i class="si si-refresh"></i>
              </button>
            </template>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
          </base-block>
        </b-col>
        <b-col md="6">
          <base-block rounded title="OneUI" ref="blockLoadingOneUI" class="block-mode-loading-oneui">
            <template #options>
               <button type="button" class="btn-block-option" @click="loadData('blockLoadingOneUI')">
                <i class="si si-refresh"></i>
              </button>
            </template>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
          </base-block>
        </b-col>
        <b-col md="6">
          <base-block rounded title="Hourglass" ref="blockLoadingHourglass" class="block-mode-loading-hourglass">
            <template #options>
               <button type="button" class="btn-block-option" @click="loadData('blockLoadingHourglass')">
                <i class="si si-refresh"></i>
              </button>
            </template>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Loading Indicators -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  methods: {
    loadData (ref) {
      // Set the block to loading state
      this.$refs[ref].stateLoading()

      // .. here you could load your data

      // Set a timeout for demo purposes
      setTimeout(() => {
        // Set the block back to normal state
        this.$refs[ref].stateNormal()
      }, 2000)
    }
  }
}
</script>