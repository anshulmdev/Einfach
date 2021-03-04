<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Search" subtitle="Vital page found in most web applications.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Generic</b-breadcrumb-item>
          <b-breadcrumb-item active>Search</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Search -->
    <div class="content">
      <b-form @submit.stop.prevent>
        <b-input-group>
          <b-form-input class="form-control" placeholder="Search.."></b-form-input>
          <template #append>
            <b-input-group-text>
              <i class="fa fa-fw fa-search"></i>
            </b-input-group-text>
          </template>
        </b-input-group>
      </b-form>
    </div>
    <!-- END Search -->

    <!-- Page Content -->
    <div class="content">
      <!-- Results -->
      <b-tabs class="block" nav-class="nav-tabs-block" content-class="block-content">
        <b-tab title="Projects" active>
          <!-- Projects -->
          <div class="font-size-h4 font-w600 p-2 mb-4 border-left border-4x border-primary bg-body-light">
            <span class="text-primary font-w700">6</span> projects found for <mark class="text-danger">HTML</mark>
          </div>
          <b-table-simple striped table-class="table-vcenter">
            <b-thead>
              <b-tr>
                <b-th style="width: 50%;">Project</b-th>
                <b-th class="d-none d-lg-table-cell text-center" style="width: 15%;">Status</b-th>
                <b-th class="d-none d-lg-table-cell text-center" style="width: 15%;">Sales</b-th>
                <b-th class="text-center" style="width: 20%;">Earnings</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr>
                <b-td>
                  <h4 class="h5 mt-3 mb-2">
                    <a href="javascript:void(0)">Web Application Framework</a>
                  </h4>
                  <p class="d-none d-sm-block text-muted">
                    Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in
                    purus. Mauris tincidunt tincidunt turpis in porta.
                  </p>
                </b-td>
                <b-td class="d-none d-lg-table-cell text-center">
                  <b-badge variant="success">Completed</b-badge>
                </b-td>
                <b-td class="d-none d-lg-table-cell font-size-xl text-center font-w600">1603</b-td>
                <b-td class="font-size-xl text-center font-w600">$ 35,287</b-td>
              </b-tr>
              <b-tr>
                <b-td>
                  <h4 class="h5 mt-3 mb-2">
                    <a href="javascript:void(0)">Wordpress Theme</a>
                  </h4>
                  <p class="d-none d-sm-block text-muted">
                    Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in
                    purus. Mauris tincidunt tincidunt turpis in porta.
                  </p>
                </b-td>
                <b-td class="d-none d-lg-table-cell text-center">
                  <b-badge variant="warning">In Progress</b-badge>
                </b-td>
                <b-td class="d-none d-lg-table-cell font-size-xl text-center font-w600">1285</b-td>
                <b-td class="font-size-xl text-center font-w600">$ 16,250</b-td>
              </b-tr>
              <b-tr>
                <b-td>
                  <h4 class="h5 mt-3 mb-2">
                    <a href="javascript:void(0)">Mobile Application</a>
                  </h4>
                  <p class="d-none d-sm-block text-muted">
                    Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in
                    purus. Mauris tincidunt tincidunt turpis in porta.
                  </p>
                </b-td>
                <b-td class="d-none d-lg-table-cell text-center">
                  <b-badge variant="success">Completed</b-badge>
                </b-td>
                <b-td class="d-none d-lg-table-cell font-size-xl text-center font-w600">4850</b-td>
                <b-td class="font-size-xl text-center font-w600">$ 18,111</b-td>
              </b-tr>
              <b-tr>
                <b-td>
                  <h4 class="h5 mt-3 mb-2">
                    <a href="javascript:void(0)">UI Kit</a>
                  </h4>
                  <p class="d-none d-sm-block text-muted">
                    Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in
                    purus. Mauris tincidunt tincidunt turpis in porta.
                  </p>
                </b-td>
                <b-td class="d-none d-lg-table-cell text-center">
                  <b-badge variant="success">Completed</b-badge>
                </b-td>
                <b-td class="d-none d-lg-table-cell font-size-xl text-center font-w600">698</b-td>
                <b-td class="font-size-xl text-center font-w600">$ 9,200</b-td>
              </b-tr>
              <b-tr>
                <b-td>
                  <h4 class="h5 mt-3 mb-2">
                    <a href="javascript:void(0)">Admin Template</a>
                  </h4>
                  <p class="d-none d-sm-block text-muted">
                    Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in
                    purus. Mauris tincidunt tincidunt turpis in porta.
                  </p>
                </b-td>
                <b-td class="d-none d-lg-table-cell text-center">
                  <b-badge variant="danger">Cancelled</b-badge>
                </b-td>
                <b-td class="d-none d-lg-table-cell font-size-xl text-center font-w600">1693</b-td>
                <b-td class="font-size-xl text-center font-w600">$ 10,589</b-td>
              </b-tr>
              <b-tr>
                <b-td>
                  <h4 class="h5 mt-3 mb-2">
                    <a href="javascript:void(0)">Flat Icon Set</a>
                  </h4>
                  <p class="d-none d-sm-block text-muted">
                    Maecenas ultrices, justo vel imperdiet gravida, urna ligula hendrerit nibh, ac cursus nibh sapien in
                    purus. Mauris tincidunt tincidunt turpis in porta.
                  </p>
                </b-td>
                <b-td class="d-none d-lg-table-cell text-center">
                  <b-badge variant="success">Completed</b-badge>
                </b-td>
                <b-td class="d-none d-lg-table-cell font-size-xl text-center font-w600">1500</b-td>
                <b-td class="font-size-xl text-center font-w600">$ 19,670</b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
          <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" size="sm"></b-pagination>
          <!-- END Projects -->
        </b-tab>
        <b-tab title="Users">
          <!-- Users -->
          <div class="font-size-h4 font-w600 p-2 mb-4 border-left border-4x border-primary bg-body-light">
            <span class="text-primary font-w700">192</span> results found for <mark class="text-danger">client</mark>
          </div>
          <b-table-simple striped table-class="table-vcenter">
            <b-thead>
              <b-tr>
                <b-th class="d-none d-sm-table-cell text-center" style="width: 40px;">#</b-th>
                <b-th class="text-center" style="width: 70px;">
                  <i class="si si-user"></i>
                </b-th>
                <b-th>Name</b-th>
                <b-th class="d-none d-sm-table-cell">Email</b-th>
                <b-th class="d-none d-lg-table-cell" style="width: 15%;">Access</b-th>
                <b-th class="text-center" style="width: 110px;">Actions</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>                        
              <b-tr v-for="user in users" :key="user.id">
                <b-td class="d-none d-sm-table-cell text-center">
                  <b-badge variant="primary" pill>{{ user.id }}</b-badge>
                </b-td>
                <b-td class="text-center">
                  <img class="img-avatar img-avatar48" :src="`img/avatars/${user.avatar}.jpg`" alt="Avatar">
                </b-td>
                <b-td class="font-w600">
                  <a :href="`${user.href}`">{{ user.name }}</a>
                </b-td>
                <b-td class="d-none d-sm-table-cell">
                  client{{ user.id }}<em class="text-muted">@example.com</em>
                </b-td>
                <b-td class="d-none d-lg-table-cell">
                  <b-badge :variant="user.labelVariant">{{ user.labelText }}</b-badge>
                </b-td>
                <b-td class="text-center">
                  <b-button size="sm" variant="alt-primary" v-b-tooltip.hover.nofade.left="'Edit Client'">
                    <i class="fa fa-pencil-alt"></i>
                  </b-button>
                  <b-button size="sm" variant="alt-danger" v-b-tooltip.hover.nofade.left="'Remove Client'">
                    <i class="fa fa-times"></i>
                  </b-button>
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
          <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" size="sm"></b-pagination>
          <!-- END Users -->
        </b-tab>
        <b-tab title="Classic">
          <!-- Classic -->
          <div class="font-size-h4 font-w600 p-2 mb-4 border-left border-4x border-primary bg-body-light">
            <span class="text-primary font-w700">280</span> websites found for <mark class="text-danger">OneUI</mark>
          </div>
          <b-row class="row py-3">
            <b-col lg="6" v-for="index in 12" :key="index">
              <h4 class="h5 mb-1">
                <a href="javascript:void(0)">OneUI - Vue Edition</a>
              </h4>
              <div class="font-size-sm text-success mb-1">https://pixelcave.com/</div>
              <p class="font-size-sm text-muted">Donec lacinia venenatis metus at bibendum? In hac habitasse platea
                dictumst. Proin ac nibh rutrum lectus rhoncus eleifend. Sed porttitor pretium venenatis. Suspendisse
                potenti. Aliquam quis ligula elit.</p>
            </b-col>
          </b-row>
          <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" size="sm"></b-pagination>
          <!-- END Classic -->
        </b-tab>
        <b-tab title="Photos">
          <!-- Photos -->
          <div class="font-size-h4 font-w600 p-2 mb-4 border-left border-4x border-primary bg-body-light">
            <span class="text-primary font-w700">85</span> photos found for <mark class="text-danger">wallpaper</mark>
          </div>
          <b-row class="gutters-tiny items-push push">
            <b-col md="6" lg="4" xl="3">
              <img class="img-fluid" src=" img/photos/photo1.jpg" alt="Photo">
            </b-col>
            <b-col md="6" lg="4" xl="3">
              <img class="img-fluid" src=" img/photos/photo2.jpg" alt="Photo">
            </b-col>
            <b-col md="6" lg="4" xl="3">
              <img class="img-fluid" src=" img/photos/photo6.jpg" alt="Photo">
            </b-col>
            <b-col md="6" lg="4" xl="3">
              <img class="img-fluid" src=" img/photos/photo21.jpg" alt="Photo">
            </b-col>
            <b-col md="6" lg="4" xl="3">
              <img class="img-fluid" src=" img/photos/photo22.jpg" alt="Photo">
            </b-col>
            <b-col md="6" lg="4" xl="3">
              <img class="img-fluid" src=" img/photos/photo9.jpg" alt="Photo">
            </b-col>
            <b-col md="6" lg="4" xl="3">
              <img class="img-fluid" src=" img/photos/photo23.jpg" alt="Photo">
            </b-col>
            <b-col md="6" lg="4" xl="3">
              <img class="img-fluid" src=" img/photos/photo24.jpg" alt="Photo">
            </b-col>
            <b-col md="6" lg="4" xl="3">
              <img class="img-fluid" src=" img/photos/photo25.jpg" alt="Photo">
            </b-col>
            <b-col md="6" lg="4" xl="3">
              <img class="img-fluid" src=" img/photos/photo27.jpg" alt="Photo">
            </b-col>
            <b-col md="6" lg="4" xl="3">
              <img class="img-fluid" src=" img/photos/photo28.jpg" alt="Photo">
            </b-col>
            <b-col md="6" lg="4" xl="3">
              <img class="img-fluid" src=" img/photos/photo30.jpg" alt="Photo">
            </b-col>
          </b-row>
          <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" size="sm"></b-pagination>
          <!-- END Photos -->
        </b-tab>
      </b-tabs>
      <!-- END Results -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      rows: 40,
      perPage: 10,
      currentPage: 1,
      users: [
        {
          id: 1,
          name: 'Ralph Murray',
          avatar: 'avatar11',
          href: 'javascript:void(0)',
          labelVariant: 'success',
          labelText: 'VIP'
        },
        {
          id: 2,
          name: 'Justin Hunt',
          avatar: 'avatar13',
          href: 'javascript:void(0)',
          labelVariant: 'info',
          labelText: 'Business'
        },
        {
          id: 3,
          name: 'Ralph Murray',
          avatar: 'avatar16',
          href: 'javascript:void(0)',
          labelVariant: 'primary',
          labelText: 'Personal'
        },
        {
          id: 4,
          name: 'Danielle Jones',
          avatar: 'avatar5',
          href: 'javascript:void(0)',
          labelVariant: 'warning',
          labelText: 'Trial'
        },
        {
          id: 5,
          name: 'Wayne Garcia',
          avatar: 'avatar15',
          href: 'javascript:void(0)',
          labelVariant: 'info',
          labelText: 'Business'
        },
        {
          id: 6,
          name: 'Judy Ford',
          avatar: 'avatar8',
          href: 'javascript:void(0)',
          labelVariant: 'danger',
          labelText: 'Disabled'
        },
        {
          id: 7,
          name: 'Jose Wagner',
          avatar: 'avatar12',
          href: 'javascript:void(0)',
          labelVariant: 'success',
          labelText: 'VIP'
        },
        {
          id: 8,
          name: 'Jack Estrada',
          avatar: 'avatar10',
          href: 'javascript:void(0)',
          labelVariant: 'success',
          labelText: 'VIP'
        },
        {
          id: 9,
          name: 'Jesse Fisher',
          avatar: 'avatar13',
          href: 'javascript:void(0)',
          labelVariant: 'danger',
          labelText: 'Disabled'
        },
        {
          id: 10,
          name: 'Judy Taylor',
          avatar: 'avatar3',
          href: 'javascript:void(0)',
          labelVariant: 'primary',
          labelText: 'Personal'
        }
      ]
    }
  }
}
</script>