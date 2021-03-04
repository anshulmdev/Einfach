<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Color Themes" subtitle="Carefully picked colors that will inspire and make you more productive.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
          <b-breadcrumb-item active>Color Themes</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Preview Color Themes -->
      <h2 class="content-heading">Preview Color Theme</h2>
      <base-block rounded content-full>
        <b-row class="text-center">
          <b-col cols="6" xl="2" class="py-4">
            <a class="item item-link-pop item-circle bg-default text-white-75 mx-auto mb-3" @click.prevent="$store.commit('setColorTheme', { theme: '' })" href="#">
              <i class="si si-drop"></i>
            </a>
            <div class="font-w600">Default</div>
          </b-col>
          <b-col cols="6" xl="2" class="py-4">
            <a class="item item-link-pop item-circle bg-amethyst text-white-75 mx-auto mb-3" @click.prevent="$store.commit('setColorTheme', { theme: 'amethyst' })" href="#">
              <i class="si si-drop"></i>
            </a>
            <div class="font-w600">Amethyst</div>
          </b-col>
          <b-col cols="6" xl="2" class="py-4">
            <a class="item item-link-pop item-circle bg-city text-white-75 mx-auto mb-3" @click.prevent="$store.commit('setColorTheme', { theme: 'city' })" href="#">
              <i class="si si-drop"></i>
            </a>
            <div class="font-w600">City</div>
          </b-col>
          <b-col cols="6" xl="2" class="py-4">
            <a class="item item-link-pop item-circle bg-flat text-white-75 mx-auto mb-3" @click.prevent="$store.commit('setColorTheme', { theme: 'flat' })" href="#">
              <i class="si si-drop"></i>
            </a>
            <div class="font-w600">Flat</div>
          </b-col>
          <b-col cols="6" xl="2" class="py-4">
            <a class="item item-link-pop item-circle bg-modern text-white-75 mx-auto mb-3" @click.prevent="$store.commit('setColorTheme', { theme: 'modern' })" href="#">
              <i class="si si-drop"></i>
            </a>
            <div class="font-w600">Modern</div>
          </b-col>
          <b-col cols="6" xl="2" class="py-4">
            <a class="item item-link-pop item-circle bg-smooth text-white-75 mx-auto mb-3" @click.prevent="$store.commit('setColorTheme', { theme: 'smooth' })" href="#">
              <i class="si si-drop"></i>
            </a>
            <div class="font-w600">Smooth</div>
          </b-col>
        </b-row>
        <hr>
        <b-row class="text-center">
          <b-col cols="6" xl="2" offset-xl="1" class="py-4">
            <base-layout-modifier tag="a" action="sidebarStyleLight" class="item item-link-pop item-circle bg-sidebar-light text-muted mx-auto mb-3">
              <i class="si si-drop"></i>
            </base-layout-modifier>
            <div class="font-w600">Light Sidebar</div>
          </b-col>
          <b-col cols="6" xl="2" class="py-4">
            <base-layout-modifier tag="a" action="sidebarStyleDark" class="item item-link-pop item-circle bg-sidebar-dark text-white-75 mx-auto mb-3">
              <i class="si si-drop"></i>
            </base-layout-modifier>
            <div class="font-w600">Dark Sidebar</div>
          </b-col>
          <b-col cols="6" xl="2" offset-xl="2" class="py-4">
            <base-layout-modifier tag="a" action="headerStyleLight" class="item item-link-pop item-circle bg-header-light text-muted mx-auto mb-3">
              <i class="si si-drop"></i>
            </base-layout-modifier>
            <div class="font-w600">Light Header</div>
          </b-col>
          <b-col cols="6" xl="2" class="py-4">
            <base-layout-modifier tag="a" action="headerStyleDark" class="item item-link-pop item-circle bg-header-dark text-white-75 mx-auto mb-3">
              <i class="si si-drop"></i>
            </base-layout-modifier>
            <div class="font-w600">Dark Header</div>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Preview Color Themes -->

      <!-- Primary Colors -->
      <h2 class="content-heading">Primary Colors <small>Colors of the active color theme</small></h2>
      <base-block rounded content-full>
        <b-row class="text-center">
          <b-col cols="6" md="4" class="py-4">
            <div class="item item-circle bg-primary-lighter mx-auto mb-3"></div>
            <code>.bg-primary-lighter</code>
          </b-col>
          <b-col cols="6" md="4" class="py-4">
            <div class="item item-circle bg-primary-light mx-auto mb-3"></div>
            <code>.bg-primary-light</code>
          </b-col>
          <b-col cols="6" md="4" class="py-4">
            <div class="item item-circle bg-primary mx-auto mb-3"></div>
            <code>.bg-primary</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-primary-dark mx-auto mb-3"></div>
            <code>.bg-primary-dark</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-primary-darker mx-auto mb-3"></div>
            <code>.bg-primary-darker</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-primary-op mx-auto mb-3"></div>
            <code>.bg-primary-op</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-primary-dark-op mx-auto mb-3"></div>
            <code>.bg-primary-dark-op</code>
          </b-col>
        </b-row>
        <hr>
        <b-row class="text-center">
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-primary-lighter mb-3">Primary Lighter</div>
            <code>.text-primary-lighter</code>
          </b-col>
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-primary-light mb-3">Primary Light</div>
            <code>.text-primary-light</code>
          </b-col>
          <b-col cols="6" md="4" class="py-4">
            <div class="text-primary mb-3">Primary</div>
            <code>.text-primary</code>
          </b-col>
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-primary-dark mb-3">Primary Dark</div>
            <code>.text-primary-dark</code>
          </b-col>
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-primary-darker mb-3">Primary Darker</div>
            <code>.text-primary-darker</code>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Primary Colors -->

      <!-- Default Theme -->
      <h2 class="content-heading">Default Theme</h2>
      <base-block rounded content-full>
        <b-row class="text-center">
          <b-col cols="6" md="4" class="py-4">
            <div class="item item-circle bg-default-lighter mx-auto mb-3"></div>
            <code>.bg-default-lighter</code>
          </b-col>
          <b-col cols="6" md="4" class="py-4">
            <div class="item item-circle bg-default-light mx-auto mb-3"></div>
            <code>.bg-default-light</code>
          </b-col>
          <b-col cols="6" md="4" class="py-4">
            <div class="item item-circle bg-default mx-auto mb-3"></div>
            <code>.bg-default</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-default-dark mx-auto mb-3"></div>
            <code>.bg-default-dark</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-default-darker mx-auto mb-3"></div>
            <code>.bg-default-darker</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-default-op mx-auto mb-3"></div>
            <code>.bg-default-op</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-default-dark-op mx-auto mb-3"></div>
            <code>.bg-default-dark-op</code>
          </b-col>
        </b-row>
        <hr>
        <b-row class="text-center">
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-default-lighter mb-3">Default Lighter</div>
            <code>.text-default-lighter</code>
          </b-col>
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-default-light mb-3">Default Light</div>
            <code>.text-default-light</code>
          </b-col>
          <b-col cols="6" md="4" class="py-4">
            <div class="text-default mb-3">Default Main</div>
            <code>.text-default</code>
          </b-col>
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-default-dark mb-3">Default Dark</div>
            <code>.text-default-dark</code>
          </b-col>
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-default-darker mb-3">Default Darker</div>
            <code>.text-default-darker</code>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Default Theme -->

      <!-- Amethyst Theme -->
      <h2 class="content-heading">Amethyst Theme</h2>
      <base-block rounded content-full>
        <b-row class="text-center">
          <b-col cols="6" md="4" class="py-4">
            <div class="item item-circle bg-amethyst-lighter mx-auto mb-3"></div>
            <code>.bg-amethyst-lighter</code>
          </b-col>
          <b-col cols="6" md="4" class="py-4">
            <div class="item item-circle bg-amethyst-light mx-auto mb-3"></div>
            <code>.bg-amethyst-light</code>
          </b-col>
          <b-col cols="6" md="4" class="py-4">
            <div class="item item-circle bg-amethyst mx-auto mb-3"></div>
            <code>.bg-amethyst</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-amethyst-dark mx-auto mb-3"></div>
            <code>.bg-amethyst-dark</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-amethyst-darker mx-auto mb-3"></div>
            <code>.bg-amethyst-darker</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-amethyst-op mx-auto mb-3"></div>
            <code>.bg-amethyst-op</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-amethyst-dark-op mx-auto mb-3"></div>
            <code>.bg-amethyst-dark-op</code>
          </b-col>
        </b-row>
        <hr>
        <b-row class="text-center">
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-amethyst-lighter mb-3">Amethyst Lighter</div>
            <code>.text-amethyst-lighter</code>
          </b-col>
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-amethyst-light mb-3">Amethyst Light</div>
            <code>.text-amethyst-light</code>
          </b-col>
          <b-col cols="6" md="4" class="py-4">
            <div class="text-amethyst mb-3">Amethyst Main</div>
            <code>.text-amethyst</code>
          </b-col>
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-amethyst-dark mb-3">Amethyst Dark</div>
            <code>.text-amethyst-dark</code>
          </b-col>
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-amethyst-darker mb-3">Amethyst Darker</div>
            <code>.text-amethyst-darker</code>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Amethyst Theme -->

      <!-- City Theme -->
      <h2 class="content-heading">City Theme</h2>
      <base-block rounded content-full>
        <b-row class="text-center">
          <b-col cols="6" md="4" class="py-4">
            <div class="item item-circle bg-city-lighter mx-auto mb-3"></div>
            <code>.bg-city-lighter</code>
          </b-col>
          <b-col cols="6" md="4" class="py-4">
            <div class="item item-circle bg-city-light mx-auto mb-3"></div>
            <code>.bg-city-light</code>
          </b-col>
          <b-col cols="6" md="4" class="py-4">
            <div class="item item-circle bg-city mx-auto mb-3"></div>
            <code>.bg-city</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-city-dark mx-auto mb-3"></div>
            <code>.bg-city-dark</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-city-darker mx-auto mb-3"></div>
            <code>.bg-city-darker</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-city-op mx-auto mb-3"></div>
            <code>.bg-city-op</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-city-dark-op mx-auto mb-3"></div>
            <code>.bg-city-dark-op</code>
          </b-col>
        </b-row>
        <hr>
        <b-row class="text-center">
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-city-lighter mb-3">City Lighter</div>
            <code>.text-city-lighter</code>
          </b-col>
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-city-light mb-3">City Light</div>
            <code>.text-city-light</code>
          </b-col>
          <b-col cols="6" md="4" class="py-4">
            <div class="text-city mb-3">City Main</div>
            <code>.text-city</code>
          </b-col>
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-city-dark mb-3">City Dark</div>
            <code>.text-city-dark</code>
          </b-col>
          <b-col cols="6" md="4" xl="2" class="py-4">>
            <div class="text-city-darker mb-3">City Darker</div>
            <code>.text-city-darker</code>
          </b-col>
        </b-row>
      </base-block>
      <!-- END City Theme -->

      <!-- Flat Theme -->
      <h2 class="content-heading">Flat Theme</h2>
      <base-block rounded content-full>
        <b-row class="text-center">
          <b-col cols="6" md="4" class="py-4">
            <div class="item item-circle bg-flat-lighter mx-auto mb-3"></div>
            <code>.bg-flat-lighter</code>
          </b-col>
          <b-col cols="6" md="4" class="py-4">
            <div class="item item-circle bg-flat-light mx-auto mb-3"></div>
            <code>.bg-flat-light</code>
          </b-col>
          <b-col cols="6" md="4" class="py-4">
            <div class="item item-circle bg-flat mx-auto mb-3"></div>
            <code>.bg-flat</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-flat-dark mx-auto mb-3"></div>
            <code>.bg-flat-dark</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-flat-darker mx-auto mb-3"></div>
            <code>.bg-flat-darker</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-flat-op mx-auto mb-3"></div>
            <code>.bg-flat-op</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-flat-dark-op mx-auto mb-3"></div>
            <code>.bg-flat-dark-op</code>
          </b-col>
        </b-row>
        <hr>
        <b-row class="text-center">
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-flat-lighter mb-3">Flat Lighter</div>
            <code>.text-flat-lighter</code>
          </b-col>
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-flat-light mb-3">Flat Light</div>
            <code>.text-flat-light</code>
          </b-col>
          <b-col cols="6" md="4" class="py-4">
            <div class="text-flat mb-3">Flat Main</div>
            <code>.text-flat</code>
          </b-col>
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-flat-dark mb-3">Flat Dark</div>
            <code>.text-flat-dark</code>
          </b-col>
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-flat-darker mb-3">Flat Darker</div>
            <code>.text-flat-darker</code>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Flat Theme -->

      <!-- Modern Theme -->
      <h2 class="content-heading">Modern Theme</h2>
      <base-block rounded content-full>
        <b-row class="text-center">
          <b-col cols="6" md="4" class="py-4">
            <div class="item item-circle bg-modern-lighter mx-auto mb-3"></div>
            <code>.bg-modern-lighter</code>
          </b-col>
          <b-col cols="6" md="4" class="py-4">
            <div class="item item-circle bg-modern-light mx-auto mb-3"></div>
            <code>.bg-modern-light</code>
          </b-col>
          <b-col cols="6" md="4" class="py-4">
            <div class="item item-circle bg-modern mx-auto mb-3"></div>
            <code>.bg-modern</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-modern-dark mx-auto mb-3"></div>
            <code>.bg-modern-dark</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-modern-darker mx-auto mb-3"></div>
            <code>.bg-modern-darker</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-modern-op mx-auto mb-3"></div>
            <code>.bg-modern-op</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-modern-dark-op mx-auto mb-3"></div>
            <code>.bg-modern-dark-op</code>
          </b-col>
        </b-row>
        <hr>
        <b-row class="text-center">
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-modern-lighter mb-3">Modern Lighter</div>
            <code>.text-modern-lighter</code>
          </b-col>
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-modern-light mb-3">Modern Light</div>
            <code>.text-modern-light</code>
          </b-col>
          <b-col cols="6" md="4" class="py-4">
            <div class="text-modern mb-3">Modern Main</div>
            <code>.text-modern</code>
          </b-col>
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-modern-dark mb-3">Modern Dark</div>
            <code>.text-modern-dark</code>
          </b-col>
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-modern-darker mb-3">Modern Darker</div>
            <code>.text-modern-darker</code>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Modern Theme -->

      <!-- Smooth Theme -->
      <h2 class="content-heading">Smooth Theme</h2>
      <base-block rounded content-full>
        <b-row class="text-center">
          <b-col cols="6" md="4" class="py-4">
            <div class="item item-circle bg-smooth-lighter mx-auto mb-3"></div>
            <code>.bg-smooth-lighter</code>
          </b-col>
          <b-col cols="6" md="4" class="py-4">
            <div class="item item-circle bg-smooth-light mx-auto mb-3"></div>
            <code>.bg-smooth-light</code>
          </b-col>
          <b-col cols="6" md="4" class="py-4">
            <div class="item item-circle bg-smooth mx-auto mb-3"></div>
            <code>.bg-smooth</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-smooth-dark mx-auto mb-3"></div>
            <code>.bg-smooth-dark</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-smooth-darker mx-auto mb-3"></div>
            <code>.bg-smooth-darker</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-smooth-op mx-auto mb-3"></div>
            <code>.bg-smooth-op</code>
          </b-col>
          <b-col cols="6" md="4" xl="3" class="py-4">
            <div class="item item-circle bg-smooth-dark-op mx-auto mb-3"></div>
            <code>.bg-smooth-dark-op</code>
          </b-col>
        </b-row>
        <hr>
        <b-row class="text-center">
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-smooth-lighter mb-3">Smooth Lighter</div>
            <code>.text-smooth-lighter</code>
          </b-col>
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-smooth-light mb-3">Smooth Light</div>
            <code>.text-smooth-light</code>
          </b-col>
          <b-col cols="6" md="4" class="py-4">
            <div class="text-smooth mb-3">Smooth Main</div>
            <code>.text-smooth</code>
          </b-col>
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-smooth-dark mb-3">Smooth Dark</div>
            <code>.text-smooth-dark</code>
          </b-col>
          <b-col cols="6" md="4" xl="2" class="py-4">
            <div class="text-smooth-darker mb-3">Smooth Darker</div>
            <code>.text-smooth-darker</code>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Smooth Theme -->

      <!-- Contextual Colors -->
      <h2 class="content-heading">Contextual Colors</h2>
      <base-block rounded content-full>
        <b-row class="text-center">
          <b-col cols="6" md="3" class="py-4">
            <div class="item item-circle bg-success mx-auto mb-3"></div>
            <code>.bg-success</code>
          </b-col>
          <b-col cols="6" md="3" class="py-4">
            <div class="item item-circle bg-info mx-auto mb-3"></div>
            <code>.bg-info</code>
          </b-col>
          <b-col cols="6" md="3" class="py-4">
            <div class="item item-circle bg-warning mx-auto mb-3"></div>
            <code>.bg-warning</code>
          </b-col>
          <b-col cols="6" md="3" class="py-4">
            <div class="item item-circle bg-danger mx-auto mb-3"></div>
            <code>.bg-danger</code>
          </b-col>
          <b-col cols="6" md="3" class="py-4">
            <div class="item item-circle bg-success-light mx-auto mb-3"></div>
            <code>.bg-success-light</code>
          </b-col>
          <b-col cols="6" md="3" class="py-4">
            <div class="item item-circle bg-info-light mx-auto mb-3"></div>
            <code>.bg-info-light</code>
          </b-col>
          <b-col cols="6" md="3" class="py-4">
            <div class="item item-circle bg-warning-light mx-auto mb-3"></div>
            <code>.bg-warning-light</code>
          </b-col>
          <b-col cols="6" md="3" class="py-4">
            <div class="item item-circle bg-danger-light mx-auto mb-3"></div>
            <code>.bg-danger-light</code>
          </b-col>
        </b-row>
        <hr>
        <b-row class=" text-center">
          <b-col cols="6" md="3" class="py-4">
            <div class="text-success mb-3">Success</div>
            <code>.text-success</code>
          </b-col>
          <b-col cols="6" md="3" class="py-4">
            <div class="text-info mb-3">Info</div>
            <code>.text-info</code>
          </b-col>
          <b-col cols="6" md="3" class="py-4">
            <div class="text-warning mb-3">Warning</div>
            <code>.text-warning</code>
          </b-col>
          <b-col cols="6" md="3" class="py-4">
            <div class="text-danger mb-3">Danger</div>
            <code>.text-danger</code>
          </b-col>
          <b-col cols="6" md="3" class="py-4">
            <div class="text-success-light mb-3">Success Light</div>
            <code>.text-success-light</code>
          </b-col>
          <b-col cols="6" md="3" class="py-4">
            <div class="text-info-light mb-3">Info Light</div>
            <code>.text-info-light</code>
          </b-col>
          <b-col cols="6" md="3" class="py-4">
            <div class="text-warning-light mb-3">Warning Light</div>
            <code>.text-warning-light</code>
          </b-col>
          <b-col cols="6" md="3" class="py-4">
            <div class="text-danger-light mb-3">Danger Light</div>
            <code>.text-danger-light</code>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Contextual Colors -->

      <!-- Gray Colors -->
      <h2 class="content-heading">Gray Colors</h2>
      <base-block rounded content-full>
        <b-row class="text-center">
          <b-col cols="6" xl="2" class="py-4">
            <div class="item item-circle bg-gray-lighter mx-auto mb-3"></div>
            <code>.bg-gray-lighter</code>
          </b-col>
          <b-col cols="6" xl="2" class="py-4">
            <div class="item item-circle bg-gray-light mx-auto mb-3"></div>
            <code>.bg-gray-light</code>
          </b-col>
          <b-col class="col-xl-4 py-4">
            <div class="item item-circle bg-gray mx-auto mb-3"></div>
            <code>.bg-gray</code>
          </b-col>
          <b-col cols="6" xl="2" class="py-4">
            <div class="item item-circle bg-gray-dark mx-auto mb-3"></div>
            <code>.bg-gray-dark</code>
          </b-col>
          <b-col cols="6" xl="2" class="py-4">
            <div class="item item-circle bg-gray-darker mx-auto mb-3"></div>
            <code>.bg-gray-darker</code>
          </b-col>
        </b-row>
        <hr>
        <b-row class="text-center">
          <b-col cols="6" xl="2" class="py-4">
            <div class="text-gray-lighter mb-3">Gray Lighter</div>
            <code>.text-gray-lighter</code>
          </b-col>
          <b-col cols="6" xl="2" class="py-4">
            <div class="text-gray-light mb-3">Gray Light</div>
            <code>.text-gray-light</code>
          </b-col>
          <b-col class="col-xl-4 py-4">
            <div class="text-gray mb-3">Gray</div>
            <code>.text-gray</code>
          </b-col>
          <b-col cols="6" xl="2" class="py-4">
            <div class="text-gray-dark mb-3">Gray Dark</div>
            <code>.text-gray-dark</code>
          </b-col>
          <b-col cols="6" xl="2" class="py-4">
            <div class="text-gray-darker mb-3">Gray Darker</div>
            <code>.text-gray-darker</code>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Gray Colors -->
    </div>
    <!-- END Page Content -->
  </div>
</template>
