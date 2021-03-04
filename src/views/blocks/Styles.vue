<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Blocks" subtitle="Solid foundation and integral part of the design.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Blocks</b-breadcrumb-item>
          <b-breadcrumb-item active>Styles</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Square Blocks -->
      <h2 class="content-heading">Square Blocks</h2>
      <b-row>
        <b-col md="6" xl="3">
          <base-block title="Title" subtitle="Subtitle">
            <p>
              Simple block..
            </p>
          </base-block>
        </b-col>
        <b-col md="6" xl="3">
          <base-block title="Title" subtitle="Subtitle" header-bg>
            <p>
              With header background..
            </p>
          </base-block>
        </b-col>
        <b-col md="6" xl="3">
          <base-block title="Title" subtitle="Subtitle" bordered>
            <p>
              Bordered block..
            </p>
          </base-block>
        </b-col>
        <b-col md="6" xl="3">
          <base-block title="Title" subtitle="Subtitle" bordered header-bg>
            <p>
              Bordered block with header background..
            </p>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Square Blocks -->

      <!-- Rounded Blocks -->
      <h2 class="content-heading">Rounded Blocks</h2>
      <b-row>
        <b-col md="6" xl="3">
          <base-block title="Title" subtitle="Subtitle" rounded>
            <p>
              Simple block..
            </p>
          </base-block>
        </b-col>
        <b-col md="6" xl="3">
          <base-block title="Title" subtitle="Subtitle" rounded header-bg>
            <p>
              With header background..
            </p>
          </base-block>
        </b-col>
        <b-col md="6" xl="3">
          <base-block title="Title" subtitle="Subtitle" rounded bordered>
            <p>
              Bordered block..
            </p>
          </base-block>
        </b-col>
        <b-col md="6" xl="3">
          <base-block title="Title" subtitle="Subtitle" rounded bordered header-bg>
            <p>
              Bordered block with header background..
            </p>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Rounded Blocks -->

      <!-- Transparent Blocks -->
      <h2 class="content-heading">Transparent Blocks</h2>
      <b-row>
        <b-col md="6">
          <base-block title="Title" subtitle="Subtitle" transparent>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
          </base-block>
        </b-col>
        <b-col md="6">
          <base-block title="Title" subtitle="Subtitle" transparent>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Transparent Blocks -->

      <!-- Block Effects -->
      <h2 class="content-heading">Block Effects</h2>
      <b-row>
        <b-col md="6" xl="3">
          <base-block title="Shadow" subtitle="FX" fx-shadow>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
          </base-block>
        </b-col>
        <b-col md="6" xl="3">
          <base-block title="Pop" subtitle="FX" fx-pop>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
          </base-block>
        </b-col>
        <b-col md="6" xl="3">
          <base-block title="Rotate Right" subtitle="FX" fx-rotate-right>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
          </base-block>
        </b-col>
        <b-col md="6" xl="3">
          <base-block title="Rotate Left" subtitle="FX" fx-rotate-left>
            <p>
              Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.
            </p>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Block Effects -->

      <!-- Link Blocks -->
      <h2 class="content-heading">Link Blocks</h2>
      <b-row>
        <b-col md="6" xl="3">
          <base-block title="Title" subtitle="Subtitle" tag="a" href="javascript:void(0)">
            <p>
              Default opacity hover effect..
            </p>
          </base-block>
        </b-col>
        <b-col md="6" xl="3">
          <base-block title="Title" subtitle="Subtitle" tag="a" href="javascript:void(0)" link-rotate>
            <p>
              Rotate hover effect..
            </p>
          </base-block>
        </b-col>
        <b-col md="6" xl="3">
          <base-block title="Title" subtitle="Subtitle" tag="a" href="javascript:void(0)" link-pop>
            <p>
              Pop hover effect..
            </p>
          </base-block>
        </b-col>
        <b-col md="6" xl="3">
          <base-block title="Title" subtitle="Subtitle" tag="a" href="javascript:void(0)" link-shadow>
            <p>
              Shadow hover effect..
            </p>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Link Blocks -->

      <!-- Router Link Blocks -->
      <h2 class="content-heading">Router Link Blocks</h2>
      <b-row>
        <b-col md="6" xl="3">
          <router-link to="/backend/dashboard" v-slot="{ href, navigate }" >
            <base-block title="Dashboard" tag="a" :href="href" @click="navigate">
              <p>
                Go to Dashboard
              </p>
            </base-block>
          </router-link>
        </b-col>
        <b-col md="6" xl="3">
          <router-link to="/" v-slot="{ href, navigate }" >
            <base-block title="Landing" tag="a" :href="href" @click="navigate">
              <p>
                Go to Landing
              </p>
            </base-block>
          </router-link>
        </b-col>
        <b-col md="6" xl="3">
          <router-link to="/auth/signin" v-slot="{ href, navigate }" >
            <base-block title="Sign In" subtitle="Auth" tag="a" :href="href" @click="navigate">
              <p>
                Go to Sign In Page
              </p>
            </base-block>
          </router-link>
        </b-col>
        <b-col md="6" xl="3">
          <router-link to="/auth/signup" v-slot="{ href, navigate }" >
            <base-block title="Sign Up" subtitle="Auth" tag="a" :href="href" @click="navigate">
              <p>
                Go to Sign Up Page
              </p>
            </base-block>
          </router-link>
        </b-col>
      </b-row>
      <!-- END Router Link Blocks -->
    </div>
    <!-- END Page Content -->
  </div>
</template>
