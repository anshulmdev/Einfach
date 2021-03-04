<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Dropdowns" subtitle="Toggle contextual overlays for displaying lists of links and more.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
          <b-breadcrumb-item active>Dropdowns</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Normal -->
      <base-block rounded title="Normal">
        <!-- Default Style -->
        <p class="font-size-sm text-muted">
          You can easily attach a dropdown to a default button and add various actions
        </p>
        <b-row class="items-push mb-4">
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-primary" variant="primary" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-secondary" variant="secondary" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-success" variant="success" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-info" variant="info" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-warning" variant="warning" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-danger" variant="danger" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-dark" variant="dark" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-light" variant="light" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
        </b-row>
        <!-- END Default Style -->

        <!-- Alternate Style -->
        <p class="font-size-sm text-muted">
          You can also add dropdowns to alternate styled buttons
        </p>
        <b-row class="items-push mb-4">
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-alt-primary" variant="alt-primary" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-alt-secondary" variant="alt-secondary" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-alt-success" variant="alt-success" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-alt-info" variant="alt-info" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-alt-warning" variant="alt-warning" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-alt-danger" variant="alt-danger" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-alt-dark" variant="alt-dark" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-alt-light" variant="alt-light" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
        </b-row>
        <!-- END Alternate Style -->

        <!-- Outline Style -->
        <p class="font-size-sm text-muted">
          You can also add dropdowns to outline styled buttons
        </p>
        <b-row class="items-push mb-4">
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-outline-primary" variant="outline-primary" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-outline-secondary" variant="outline-secondary" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-outline-success" variant="outline-success" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-outline-info" variant="outline-info" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-outline-warning" variant="outline-warning" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-outline-danger" variant="outline-danger" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-outline-dark" variant="outline-dark" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col sm="6" xl="4">
            <b-dropdown id="dropdown-default-outline-light" variant="outline-light" text="Dropdown">
              <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
              <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
            </b-dropdown>
          </b-col>
        </b-row>
        <!-- END Outline Style -->
      </base-block>
      <!-- END Normal -->

      <b-row class="row-deck">
        <b-col md="6">
          <!-- Split Button Dropdowns -->
          <base-block rounded title="Split Button Dropdowns">
            <p class="font-size-sm text-muted">
              Grouping your dropdowns with separate buttons is really easy
            </p>
            <b-row class="items-push mb-4">
              <b-col xl="4">
                <b-dropdown id="dropdown-split-primary" variant="primary" text="Action" split>
                  <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                  <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                  <b-dropdown-item class="font-size-sm">Something else here...</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                </b-dropdown>
              </b-col>
              <b-col xl="4">
                <b-dropdown id="dropdown-split-danger" variant="alt-danger" text="Action" split>
                  <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                  <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                  <b-dropdown-item class="font-size-sm">Something else here...</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                </b-dropdown>
              </b-col>
              <b-col xl="4">
                <b-dropdown id="dropdown-split-warning" variant="warning" text="Action" split>
                  <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                  <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                  <b-dropdown-item class="font-size-sm">Something else here...</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                </b-dropdown>
              </b-col>
            </b-row>
          </base-block>
          <!-- END Split Button Dropdowns -->
        </b-col>
        <b-col md="6">
          <!-- Alignment -->
          <base-block rounded title="Alignment">
            <p class="font-size-sm text-muted">
              You can align your dropmenus to the right of buttons
            </p>
            <b-row class="items-push mb-4">
              <b-col sm="6" class="text-right">
                <b-dropdown id="dropdown-align-primary" variant="primary" text="From Right" right>
                  <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                  <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                </b-dropdown>
              </b-col>
              <b-col sm="6" class="text-right">
                <b-dropdown id="dropdown-align-alt-primary" variant="alt-primary" text="From Right" right>
                  <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                  <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                </b-dropdown>
              </b-col>
            </b-row>
          </base-block>
          <!-- END Alignment -->
        </b-col>
      </b-row>

      <!-- Rich Content -->
      <base-block rounded title="Rich Content">
        <p class="font-size-sm text-muted">
          You can also use forms inside your dropdowns
        </p>
        <b-dropdown id="dropdown-content-rich-primary" variant="primary" text="Example form in dropdown" ref="dropdown" class="push">
          <b-dropdown-form class="font-size-sm p-2">
            <b-form-group label="Email" label-for="dropdown-content-form-email" @submit.stop.prevent>
              <b-form-input id="dropdown-content-form-email" placeholder="email@example.com"></b-form-input>
            </b-form-group>
            <b-form-group label="Password" label-for="dropdown-content-form-password">
              <b-form-input id="dropdown-content-form-password" type="password" placeholder="Password"></b-form-input>
            </b-form-group>
            <b-button variant="primary" @click="clickDropdownFormExample">Sign In</b-button>
          </b-dropdown-form>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item-button class="font-size-sm">Sign up</b-dropdown-item-button>
          <b-dropdown-item-button class="font-size-sm">Forgot Password?</b-dropdown-item-button>
        </b-dropdown>
      </base-block>
      <!-- END Rich Content -->

      <!-- Position -->
      <base-block rounded title="Position">
        <p class="font-size-sm text-muted">
          You can position your dropdown relative to your button
        </p>
        <b-row class="items-push mb-4">
          <b-col md="4">
            <!-- Dropup -->
            <h3 class="h4">Dropup</h3>
            <div class="push">
              <b-dropdown id="dropdown-dropup-secondary" variant="secondary" text="Up" dropup>
                <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
            <div class="push">
              <b-dropdown id="dropdown-dropup-alt-secondary" variant="alt-secondary" text="Up" dropup>
                <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
            <div class="push">
              <b-dropdown id="dropdown-dropup-outline-secondary" variant="outline-secondary" text="Up" dropup>
                <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
            <!-- END Dropup -->
          </b-col>
          <b-col md="4">
            <!-- Dropright -->
            <h3 class="h4">Dropright</h3>
            <div class="push">
              <b-dropdown id="dropdown-dropright-primary" variant="primary" text="Right" dropright>
                <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
            <div class="push">
              <b-dropdown id="dropdown-dropright-alt-primary" variant="alt-primary" text="Right" dropright>
                <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
            <div class="push">
              <b-dropdown id="dropdown-dropright-outline-primary" variant="outline-primary" text="Right" dropright>
                <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
            <!-- END Dropright -->
          </b-col>
          <b-col md="4" class="text-right">
            <!-- Dropleft -->
            <h3 class="h4">Dropleft</h3>
            <div class="push">
              <b-dropdown id="dropdown-dropleft-dark" variant="dark" text="Left" dropleft>
                <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
            <div class="push">
              <b-dropdown id="dropdown-dropleft-alt-dark" variant="alt-dark" text="Left" dropleft>
                <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
            <div class="push">
              <b-dropdown id="dropdown-dropleft-outline-dark" variant="outline-dark" text="Left" dropleft>
                <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
            <!-- END Dropleft -->
          </b-col>
        </b-row>
      </base-block>
      <!-- END Position -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  methods: {
    clickDropdownFormExample () {
      // Close the menu and (by passing true) return focus to the toggle button
      this.$refs.dropdown.hide(true)
    }
  }
}
</script>
