<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Input Groups" subtitle="Enrich your form inputs with buttons and extra text content.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Forms</b-breadcrumb-item>
          <b-breadcrumb-item active>Input Groups</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- With Text -->
      <base-block rounded title="With Text">
        <b-row>
          <b-col lg="4">
            <p class="font-size-sm text-muted">
              Prepend or Append Text next to your inputs, useful if you would like to add extra info
            </p>
          </b-col>
          <b-col lg="8" xl="5">
            <b-form @submit.prevent>
              <div class="form-group">
                <b-input-group prepend="Name">
                  <b-form-input></b-form-input>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group append="Email">
                  <b-form-input type="email"></b-form-input>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group prepend="$" append=",00">
                  <b-form-input placeholder="00"></b-form-input>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <template #prepend>
                    <b-input-group-text class="input-group-text-alt">Name</b-input-group-text>
                  </template>
                  <b-form-input class="form-control-alt"></b-form-input>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <b-form-input type="email" class="form-control-alt"></b-form-input>
                  <template #append>
                    <b-input-group-text class="input-group-text-alt">Email</b-input-group-text>
                  </template>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <template #prepend>
                    <b-input-group-text class="input-group-text-alt">$</b-input-group-text>
                  </template>
                  <b-form-input class="form-control-alt" placeholder="00"></b-form-input>
                  <template #append>
                    <b-input-group-text class="input-group-text-alt">,00</b-input-group-text>
                  </template>
                </b-input-group>
              </div>
            </b-form>
          </b-col>
        </b-row>
      </base-block>
      <!-- END With Text -->

      <!-- With Icons -->
      <base-block rounded title="With Icons">
        <b-row>
          <b-col lg="4">
            <p class="font-size-sm text-muted">
              Prepend or Append Icons next to your inputs to visualize the context
            </p>
          </b-col>
          <b-col lg="8" xl="5">
            <b-form @submit.prevent>
              <div class="form-group">
                <b-input-group>
                  <template #prepend>
                    <b-input-group-text class="input-group-text-alt">
                      <i class="far fa-user"></i>
                    </b-input-group-text>
                  </template>
                  <b-form-input></b-form-input>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <b-form-input type="email"></b-form-input>
                  <template #append>
                    <b-input-group-text class="input-group-text-alt">
                      <i class="far fa-envelope"></i>
                    </b-input-group-text>
                  </template>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group append=".00">
                  <template #prepend>
                    <b-input-group-text class="input-group-text-alt">
                      <i class="fa fa-euro-sign"></i>
                    </b-input-group-text>
                  </template>
                  <b-form-input placeholder="00"></b-form-input>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <template #prepend>
                    <b-input-group-text class="input-group-text-alt">
                      <i class="far fa-user"></i>
                    </b-input-group-text>
                  </template>
                  <b-form-input class="form-control-alt"></b-form-input>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <b-form-input type="email" class="form-control-alt"></b-form-input>
                  <template #append>
                    <b-input-group-text class="input-group-text-alt">
                      <i class="far fa-envelope"></i>
                    </b-input-group-text>
                  </template>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <template #prepend>
                    <b-input-group-text class="input-group-text-alt">
                      <i class="fa fa-euro-sign"></i>
                    </b-input-group-text>
                  </template>
                  <b-form-input class="form-control-alt" placeholder="00"></b-form-input>
                  <template #append>
                    <b-input-group-text class="input-group-text-alt">
                      <i class="si si-wallet"></i>
                    </b-input-group-text>
                  </template>
                </b-input-group>
              </div>
            </b-form>
          </b-col>
        </b-row>
      </base-block>
      <!-- END With Icons -->

      <!-- With Buttons -->
      <base-block rounded title="With Buttons">
        <b-row>
          <b-col lg="4">
            <p class="font-size-sm text-muted">
              Prepend or Append Buttons next to your inputs to add related actions
            </p>
          </b-col>
          <b-col lg="8" xl="5">
            <b-form @submit.prevent>
              <div class="form-group">
                <b-input-group>
                  <b-input-group-prepend>
                    <b-button variant="primary">
                      <i class="fa fa-search mr-1"></i> Search
                    </b-button>
                  </b-input-group-prepend>
                  <b-form-input placeholder="Name"></b-form-input>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <b-form-input type="email" placeholder="Email"></b-form-input>
                  <b-input-group-append>
                    <b-button variant="dark">Submit</b-button>
                  </b-input-group-append>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <b-input-group-prepend>
                    <b-button variant="primary">
                      <i class="fab fa-facebook-f"></i>
                    </b-button>
                  </b-input-group-prepend>
                  <b-form-input placeholder="Search"></b-form-input>
                  <b-input-group-append>
                    <b-button variant="info">
                      <i class="fab fa-twitter"></i>
                    </b-button>
                  </b-input-group-append>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <b-input-group-prepend>
                    <b-button variant="primary">
                      <i class="fa fa-search mr-1"></i> Search
                    </b-button>
                  </b-input-group-prepend>
                  <b-form-input class="form-control-alt" placeholder="Name"></b-form-input>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <b-form-input type="email" class="form-control-alt" placeholder="Email"></b-form-input>
                  <b-input-group-append>
                    <b-button variant="dark">Submit</b-button>
                  </b-input-group-append>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <b-input-group-prepend>
                    <b-button variant="primary">
                      <i class="fab fa-facebook-f"></i>
                    </b-button>
                  </b-input-group-prepend>
                  <b-form-input class="form-control-alt" placeholder="Search"></b-form-input>
                  <b-input-group-append>
                    <b-button variant="info">
                      <i class="fab fa-twitter"></i>
                    </b-button>
                  </b-input-group-append>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <b-input-group-prepend>
                    <b-button variant="alt-primary">
                      <i class="fa fa-search mr-1"></i> Search
                    </b-button>
                  </b-input-group-prepend>
                  <b-form-input class="form-control-alt" placeholder="Name"></b-form-input>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <b-form-input type="email" class="form-control-alt" placeholder="Email"></b-form-input>
                  <b-input-group-append>
                    <b-button variant="alt-dark">Submit</b-button>
                  </b-input-group-append>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <b-input-group-prepend>
                    <b-button variant="alt-primary">
                      <i class="fab fa-facebook-f"></i>
                    </b-button>
                  </b-input-group-prepend>
                  <b-form-input class="form-control-alt" placeholder="Search"></b-form-input>
                  <b-input-group-append>
                    <b-button variant="alt-info">
                      <i class="fab fa-twitter"></i>
                    </b-button>
                  </b-input-group-append>
                </b-input-group>
              </div>
            </b-form>
          </b-col>
        </b-row>
      </base-block>
      <!-- END With Buttons -->

      <!-- With Dropdowns -->
      <base-block rounded title="With Dropdowns">
        <b-row>
          <b-col lg="4">
            <p class="font-size-sm text-muted">
              Prepend or Append dropdowns next to your inputs
            </p>
          </b-col>
          <b-col lg="8" xl="5">
            <b-form @submit.prevent>
              <div class="form-group">
                <b-input-group>
                  <b-input-group-prepend>
                    <b-dropdown text="Options" split variant="primary">
                      <b-dropdown-item>
                        <i class="far fa-fw fa-bell mr-1"></i> News
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <i class="far fa-fw fa-envelope mr-1"></i> Messages
                      </b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>
                        <i class="fa fa-fw fa-pencil-alt mr-1"></i> Edit Profile
                      </b-dropdown-item>
                    </b-dropdown>
                  </b-input-group-prepend>
                  <b-form-input placeholder="Name"></b-form-input>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <b-form-input type="email" placeholder="Email"></b-form-input>
                  <b-input-group-append>
                    <b-dropdown variant="primary" right>
                      <b-dropdown-item>
                        <i class="far fa-fw fa-bell mr-1"></i> News
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <i class="far fa-fw fa-envelope mr-1"></i> Messages
                      </b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>
                        <i class="fa fa-fw fa-pencil-alt mr-1"></i> Edit Profile
                      </b-dropdown-item>
                    </b-dropdown>
                  </b-input-group-append>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <b-input-group-prepend>
                    <b-dropdown variant="primary" dropup>
                      <b-dropdown-item>
                        <i class="far fa-fw fa-bell mr-1"></i> News
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <i class="far fa-fw fa-envelope mr-1"></i> Messages
                      </b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>
                        <i class="fa fa-fw fa-pencil-alt mr-1"></i> Edit Profile
                      </b-dropdown-item>
                    </b-dropdown>
                  </b-input-group-prepend>
                  <b-form-input placeholder=".."></b-form-input>
                  <b-input-group-append>
                    <b-dropdown variant="primary" dropup right>
                      <b-dropdown-item>
                        <i class="far fa-fw fa-bell mr-1"></i> News
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <i class="far fa-fw fa-envelope mr-1"></i> Messages
                      </b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>
                        <i class="fa fa-fw fa-pencil-alt mr-1"></i> Edit Profile
                      </b-dropdown-item>
                    </b-dropdown>
                  </b-input-group-append>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <b-input-group-prepend>
                    <b-dropdown text="Options" split variant="dark">
                      <b-dropdown-item>
                        <i class="far fa-fw fa-bell mr-1"></i> News
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <i class="far fa-fw fa-envelope mr-1"></i> Messages
                      </b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>
                        <i class="fa fa-fw fa-pencil-alt mr-1"></i> Edit Profile
                      </b-dropdown-item>
                    </b-dropdown>
                  </b-input-group-prepend>
                  <b-form-input placeholder="Name"></b-form-input>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <b-form-input type="email" placeholder="Email"></b-form-input>
                  <b-input-group-append>
                    <b-dropdown variant="dark" right>
                      <b-dropdown-item>
                        <i class="far fa-fw fa-bell mr-1"></i> News
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <i class="far fa-fw fa-envelope mr-1"></i> Messages
                      </b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>
                        <i class="fa fa-fw fa-pencil-alt mr-1"></i> Edit Profile
                      </b-dropdown-item>
                    </b-dropdown>
                  </b-input-group-append>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <b-input-group-prepend>
                    <b-dropdown variant="dark" dropup>
                      <b-dropdown-item>
                        <i class="far fa-fw fa-bell mr-1"></i> News
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <i class="far fa-fw fa-envelope mr-1"></i> Messages
                      </b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>
                        <i class="fa fa-fw fa-pencil-alt mr-1"></i> Edit Profile
                      </b-dropdown-item>
                    </b-dropdown>
                  </b-input-group-prepend>
                  <b-form-input placeholder=".."></b-form-input>
                  <b-input-group-append>
                    <b-dropdown variant="dark" dropup right>
                      <b-dropdown-item>
                        <i class="far fa-fw fa-bell mr-1"></i> News
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <i class="far fa-fw fa-envelope mr-1"></i> Messages
                      </b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>
                        <i class="fa fa-fw fa-pencil-alt mr-1"></i> Edit Profile
                      </b-dropdown-item>
                    </b-dropdown>
                  </b-input-group-append>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <b-input-group-prepend>
                    <b-dropdown text="Options" split variant="alt-primary">
                      <b-dropdown-item>
                        <i class="far fa-fw fa-bell mr-1"></i> News
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <i class="far fa-fw fa-envelope mr-1"></i> Messages
                      </b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>
                        <i class="fa fa-fw fa-pencil-alt mr-1"></i> Edit Profile
                      </b-dropdown-item>
                    </b-dropdown>
                  </b-input-group-prepend>
                  <b-form-input placeholder="Name"></b-form-input>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <b-form-input type="email" placeholder="Email"></b-form-input>
                  <b-input-group-append>
                    <b-dropdown variant="alt-primary" right>
                      <b-dropdown-item>
                        <i class="far fa-fw fa-bell mr-1"></i> News
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <i class="far fa-fw fa-envelope mr-1"></i> Messages
                      </b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>
                        <i class="fa fa-fw fa-pencil-alt mr-1"></i> Edit Profile
                      </b-dropdown-item>
                    </b-dropdown>
                  </b-input-group-append>
                </b-input-group>
              </div>
              <div class="form-group">
                <b-input-group>
                  <b-input-group-prepend>
                    <b-dropdown variant="alt-primary" dropup>
                      <b-dropdown-item>
                        <i class="far fa-fw fa-bell mr-1"></i> News
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <i class="far fa-fw fa-envelope mr-1"></i> Messages
                      </b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>
                        <i class="fa fa-fw fa-pencil-alt mr-1"></i> Edit Profile
                      </b-dropdown-item>
                    </b-dropdown>
                  </b-input-group-prepend>
                  <b-form-input placeholder=".."></b-form-input>
                  <b-input-group-append>
                    <b-dropdown variant="alt-primary" dropup right>
                      <b-dropdown-item>
                        <i class="far fa-fw fa-bell mr-1"></i> News
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <i class="far fa-fw fa-envelope mr-1"></i> Messages
                      </b-dropdown-item>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item>
                        <i class="fa fa-fw fa-pencil-alt mr-1"></i> Edit Profile
                      </b-dropdown-item>
                    </b-dropdown>
                  </b-input-group-append>
                </b-input-group>
              </div>
            </b-form>
          </b-col>
        </b-row>
      </base-block>
      <!-- END With Dropdowns -->
    </div>
    <!-- END Page Content -->
  </div>
</template>
