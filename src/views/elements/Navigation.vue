<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Navigation" subtitle="UI components that will make navigating an easy task.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
          <b-breadcrumb-item active>Navigation</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Pagination -->
      <h2 class="content-heading">Pagination</h2>
      <b-row class="row-deck">
        <b-col xl="6">
          <!-- Default Pagination -->
          <base-block rounded title="Default" content-full>
            <div class="overflow-auto">
              <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" size="sm"></b-pagination>
              <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
              <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" size="lg"></b-pagination>
            </div>
          </base-block>
          <!-- END Default Pagination -->
        </b-col>
        <b-col xl="6">
          <!-- Alternative Styles -->
          <base-block rounded title="Alternative Styles" content-full>
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" hide-goto-end-buttons>
              <template #prev-text>
                <i class="fa fa-angle-double-left"></i>
              </template>
              <template #next-text>
                <i class="fa fa-angle-double-right"></i>
              </template>
            </b-pagination>
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" hide-goto-end-buttons>
              <template #prev-text>
                <i class="fa fa-angle-left"></i>
              </template>
              <template #next-text>
                <i class="fa fa-angle-right"></i>
              </template>
            </b-pagination>
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" hide-goto-end-buttons>
              <template #prev-text>
                <i class="fa fa-arrow-left"></i>
              </template>
              <template #next-text>
                <i class="fa fa-arrow-right"></i>
              </template>
            </b-pagination>
          </base-block>
          <!-- END Alternative Styles -->
        </b-col>
        <b-col>
          <!-- Alignment -->
          <base-block rounded title="Alignment" content-full>
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" align="center"></b-pagination>
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" align="right"></b-pagination>
          </base-block>
          <!-- END Alignment -->
        </b-col>
      </b-row>
      <!-- END Pagination -->

      <!-- Breadcrumb -->
      <h2 class="content-heading">Breadcrumb</h2>
      <b-row class="row-deck">
        <b-col xl="6">
          <base-block rounded title="Default" content-full>
            <b-breadcrumb>
              <b-breadcrumb-item>Home</b-breadcrumb-item>
              <b-breadcrumb-item>User</b-breadcrumb-item>
              <b-breadcrumb-item>Settings</b-breadcrumb-item>
              <b-breadcrumb-item active>Billing</b-breadcrumb-item>
            </b-breadcrumb>
          </base-block>
        </b-col>
        <b-col xl="6">
          <base-block rounded title="Alternative" content-full>
          <b-breadcrumb class="breadcrumb-alt">
            <b-breadcrumb-item>Home</b-breadcrumb-item>
            <b-breadcrumb-item>User</b-breadcrumb-item>
            <b-breadcrumb-item>Settings</b-breadcrumb-item>
            <b-breadcrumb-item active>Billing</b-breadcrumb-item>
          </b-breadcrumb>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Breadcrumb -->

      <!-- Navigation Pills -->
      <h2 class="content-heading">Navigation Pills</h2>
      <b-row class="row-deck">
        <b-col xl="6">
          <!-- Default Pills -->
          <base-block rounded title="Default Style">
            <b-nav class="push" pills>
              <b-nav-item class="mr-1" active>Home</b-nav-item>
              <b-nav-item class="mr-1">Settings</b-nav-item>
              <b-nav-item>
                <i class="fa fa-envelope"></i>
              </b-nav-item>
            </b-nav>
            <b-nav class="push" pills vertical>
              <b-nav-item class="mb-1" active>Home</b-nav-item>
              <b-nav-item class="mb-1">Settings</b-nav-item>
              <b-nav-item>Tools</b-nav-item>
            </b-nav>
          </base-block>
          <!-- END Default Pills -->
        </b-col>
        <b-col xl="6">
          <!-- With Icons -->
          <base-block rounded title="With Icons">
            <b-nav class="push" pills>
              <b-nav-item class="mr-1" active>
                <i class="fa fa-fw fa-home mr-1"></i> Home
              </b-nav-item>
              <b-nav-item class="mr-1">
                <i class="fa fa-fw fa-pencil-alt mr-1"></i> Settings
              </b-nav-item>
              <b-nav-item>
                <i class="fa fa-fw fa-wrench"></i>
              </b-nav-item>
            </b-nav>
            <b-nav class="push" pills vertical>
              <b-nav-item class="mb-1" active>
                <i class="fa fa-fw fa-home mr-1"></i> Home
              </b-nav-item>
              <b-nav-item class="mb-1">
                <i class="fa fa-fw fa-pencil-alt mr-1"></i> Settings
              </b-nav-item>
              <b-nav-item>
                <i class="fa fa-fw fa-wrench mr-1"></i> Tools
              </b-nav-item>
            </b-nav>
          </base-block>
          <!-- END With Icons -->
        </b-col>
        <b-col xl="6">
          <!-- With Badges -->
          <base-block rounded title="With Badges">
            <b-nav class="push" pills>
              <b-nav-item class="mr-1" active>
                Home <b-badge class="ml-1" pill>3</b-badge>
              </b-nav-item>
              <b-nav-item class="mr-1">
                Settings <b-badge class="ml-1" pill>1</b-badge>
              </b-nav-item>
              <b-nav-item>
                <i class="fa fa-wrench"></i>
              </b-nav-item>
            </b-nav>
            <b-nav class="push" pills vertical>
              <b-nav-item class="mb-1" active>
                Home <b-badge class="ml-1" pill>3</b-badge>
              </b-nav-item>
              <b-nav-item class="mb-1">
                Settings <b-badge class="ml-1" pill>1</b-badge>
              </b-nav-item>
              <b-nav-item>Tools</b-nav-item>
            </b-nav>
          </base-block>
          <!-- END With Badges -->
        </b-col>
        <b-col xl="6">
          <!-- Justified -->
          <base-block rounded title="Justified">
            <b-nav class="push" pills justified>
              <b-nav-item class="mr-1" active>Profile</b-nav-item>
              <b-nav-item class="mr-1">Friends</b-nav-item>
              <b-nav-item>Billing</b-nav-item>
            </b-nav>
            <b-nav class="push" pills justified>
              <b-nav-item class="mr-1" active>Home</b-nav-item>
              <b-nav-item class="mr-1">Settings</b-nav-item>
              <b-nav-item>Tools</b-nav-item>
            </b-nav>
          </base-block>
          <!-- END Justified -->
        </b-col>
      </b-row>
      <!-- END Navigation Pills -->

      <!-- List Groups -->
      <h2 class="content-heading">List Groups</h2>
      <b-row>
        <b-col xl="4">
            <!-- Default List Group -->
            <base-block rounded title="Default Style">
              <b-list-group class="push">
                <b-list-group-item>This is a simple</b-list-group-item>
                <b-list-group-item>List Group</b-list-group-item>
                <b-list-group-item>For showcasing</b-list-group-item>
                <b-list-group-item>A list of items</b-list-group-item>
              </b-list-group>
            </base-block>
            <!-- END Default List Group -->
        </b-col>
        <b-col xl="4">
          <!-- With Badges -->
          <base-block rounded title="With Badges">
            <b-list-group class="push">
              <b-list-group-item class="d-flex justify-content-between align-items-center">
                This is a simple
                <b-badge class="ml-1" variant="info" pill>5</b-badge>
              </b-list-group-item>
              <b-list-group-item class="d-flex justify-content-between align-items-center">
                List Group
                <b-badge class="ml-1" variant="success" pill>4</b-badge>
              </b-list-group-item>
              <b-list-group-item class="d-flex justify-content-between align-items-center">
                For showcasing
                <b-badge class="ml-1" variant="danger" pill>8</b-badge>
              </b-list-group-item>
              <b-list-group-item class="d-flex justify-content-between align-items-center">
                A list of items
                <b-badge class="ml-1" variant="warning" pill>7</b-badge>
              </b-list-group-item>
            </b-list-group>
          </base-block>
          <!-- END With Badges -->
        </b-col>
        <b-col xl="4">
          <!-- With Links -->
          <base-block rounded title="With Links">
            <b-list-group class="push">
              <b-list-group-item href="javascript:void(0)" class="d-flex justify-content-between align-items-center" active>
                This is a simple
                <b-badge class="ml-1" pill>1</b-badge>
              </b-list-group-item>
              <b-list-group-item href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
                List Group
                <b-badge class="ml-1" pill>2</b-badge>
              </b-list-group-item>
              <b-list-group-item href="javascript:void(0)">
                For showcasing
              </b-list-group-item>
              <b-list-group-item href="javascript:void(0)" class="d-flex justify-content-between align-items-center">
                A list of items
                <b-badge class="ml-1" pill>7</b-badge>
              </b-list-group-item>
            </b-list-group>
          </base-block>
          <!-- END With Links -->
        </b-col>
      </b-row>
      <!-- END List Groups -->

      <!-- User List -->
      <h2 class="content-heading">User List</h2>
      <b-row class="row-deck">
        <b-col xl="6">
          <!-- Spacy -->
          <base-block rounded title="Spacy">
            <ul class="nav-items push">
              <li v-for="(user, index) in userList1" :key="`userlist1-${index}`">
                <a class="media py-3" :href="`${user.href}`">
                  <div class="mr-3 ml-2 overlay-container overlay-bottom">
                    <img class="img-avatar img-avatar48" :src="`img/avatars/${user.avatar}`" alt="Avatar">
                    <span :class="`overlay-item item item-tiny item-circle border border-2x border-white bg-${user.statusColor}`"></span>
                  </div>
                  <div class="media-body">
                    <div class="font-w600">{{ user.name }}</div>
                    <div class="font-size-sm text-muted">{{ user.profession }}</div>
                  </div>
                </a>
              </li>
            </ul>
          </base-block>
          <!-- END Spacy -->
        </b-col>
        <b-col xl="6">
          <!-- Minimal -->
          <base-block rounded title="Minimal">
            <ul class="nav-items push">
              <li v-for="(user, index) in userList2" :key="`userlist2-${index}`">
                <a class="media py-2" :href="`${user.href}`">
                  <div class="mr-3 ml-2 overlay-container overlay-left">
                    <img class="img-avatar img-avatar48" :src="`img/avatars/${user.avatar}`" alt="Avatar">
                    <span :class="`overlay-item item item-tiny item-circle border border-2x border-white bg-${user.statusColor}`"></span>
                  </div>
                  <div class="media-body">
                    <div class="font-w600">{{ user.name }}</div>
                    <div class="font-size-sm text-muted">{{ user.profession }}</div>
                  </div>
                </a>
              </li>
            </ul>
          </base-block>
          <!-- END Minimal -->
        </b-col>
      </b-row>
      <!-- END User List -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      rows: 30,
      perPage: 10,
      currentPage: 1,
      userList1: [
        {
          href: 'javascript:void(0)',
          name: 'Judy Ford',
          profession: 'Full Stack Developer',
          avatar: 'avatar1.jpg',
          statusColor: 'success'
        },
        {
          href: 'javascript:void(0)',
          name: 'Carl Wells',
          profession: 'Photographer',
          avatar: 'avatar10.jpg',
          statusColor: 'success'
        },
        {
          href: 'javascript:void(0)',
          name: 'Jeffrey Shaw',
          profession: 'UI Designer',
          avatar: 'avatar13.jpg',
          statusColor: 'warning'
        },
        {
          href: 'javascript:void(0)',
          name: 'Judy Ford',
          profession: 'Full Stack Developer',
          avatar: 'avatar3.jpg',
          statusColor: 'danger'
        },
        {
          href: 'javascript:void(0)',
          name: 'Judy Ford',
          profession: 'Full Stack Developer',
          avatar: 'avatar2.jpg',
          statusColor: 'muted'
        }
      ],
      userList2: [
        {
          href: 'javascript:void(0)',
          name: 'Sara Fields',
          profession: 'Photographer',
          avatar: 'avatar8.jpg',
          statusColor: 'success'
        },
        {
          href: 'javascript:void(0)',
          name: 'Henry Harrison',
          profession: 'Web Designer',
          avatar: 'avatar16.jpg',
          statusColor: 'success'
        },
        {
          href: 'javascript:void(0)',
          name: 'Gardner',
          profession: 'UI Designer',
          avatar: 'avatar4.jpg',
          statusColor: 'danger'
        },
        {
          href: 'javascript:void(0)',
          name: 'Jack Estrada',
          profession: 'Copywriter',
          avatar: 'avatar15.jpg',
          statusColor: 'warning'
        },
        {
          href: 'javascript:void(0)',
          name: 'Wayne Garcia',
          profession: 'Teacher',
          avatar: 'avatar11.jpg',
          statusColor: 'muted'
        },
        {
          href: 'javascript:void(0)',
          name: 'Amanda Powell',
          profession: 'Writer',
          avatar: 'avatar5.jpg',
          statusColor: 'muted'
        }
      ]
    }
  }
}
</script>
