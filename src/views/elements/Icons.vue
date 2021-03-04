<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Icons" subtitle="A huge collection of multi-purpose, uniquely designed, font icons.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
          <b-breadcrumb-item active>Icons</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Search Section -->
        <div class="input-group input-group-lg push">
          <input type="text" class="js-icon-search form-control font-size-base" placeholder="Try home or user.." v-model="search">
          <div class="input-group-append">
            <span class="input-group-text">
              <i class="fa fa-search"></i>
            </span>
          </div>
        </div>
        <!-- END Search Section -->

        <!-- Font Awesome Regular -->
        <base-block rounded :title="`(${ filteredIconsFaRegular.length }) Font Awesome Regular`" btn-option-content>
          <template #subtitle>
            <small class="text-lowercase"><code>far fa-*</code></small>
          </template>
          <b-row class="items-push-2x text-center">
            <b-col sm="6" lg="4" xl="3" v-for="(icon, index) in filteredIconsFaRegular" :key="`far-icon-${index}`">
              <p>
                <i :class="`far fa-2x fa-${ icon }`"></i>
              </p>
              <code>{{ icon }}</code>
            </b-col>
          </b-row>
        </base-block>
        <!-- END Font Awesome Regular -->

        <!-- Font Awesome Solid -->
        <base-block rounded :title="`(${ filteredIconsFaSolid.length }) Font Awesome Solid`" btn-option-content>
          <template #subtitle>
            <small class="text-lowercase"><code>fa fa-*</code></small>
          </template>
          <b-row class="items-push-2x text-center">
            <b-col sm="6" lg="4" xl="3" v-for="(icon, index) in filteredIconsFaSolid" :key="`fa-icon-${index}`">
              <p>
                <i :class="`fa fa-2x fa-${ icon }`"></i>
              </p>
              <code>{{ icon }}</code>
            </b-col>
          </b-row>
        </base-block>
        <!-- END Font Awesome Solid -->

        <!-- Font Awesome Brands -->
        <base-block rounded :title="`(${ filteredIconsFaBrands.length }) Font Awesome Brands`" btn-option-content>
          <template #subtitle>
            <small class="text-lowercase"><code>fab fa-*</code></small>
          </template>
          <b-row class="items-push-2x text-center">
            <b-col sm="6" lg="4" xl="3" v-for="(icon, index) in filteredIconsFaBrands" :key="`fab-icon-${index}`">
              <p>
                <i :class="`fab fa-2x fa-${ icon }`"></i>
              </p>
              <code>{{ icon }}</code>
            </b-col>
          </b-row>
        </base-block>
        <!-- END Font Awesome Brands -->

        <!-- Simple Line Icons -->
        <base-block rounded :title="`(${ filteredIconsSimpleLine.length }) Simple Line Icons`" btn-option-content>
          <template #subtitle>
            <small><code>si si-*</code></small>
          </template>
          <b-row class="items-push-2x text-center">
            <b-col sm="6" lg="4" xl="3" v-for="(icon, index) in filteredIconsSimpleLine" :key="`si-icon-${index}`">
              <p>
                <i :class="`si fa-2x si-${ icon }`"></i>
              </p>
              <code>{{ icon }}</code>
            </b-col>
          </b-row>
        </base-block>
        <!-- END Simple Line Icons -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
// Get Icons data
import iconsList from '@/data/icons'

export default {
  data () {
    return {
      search: '',
      iconsFaRegular: Object.keys(iconsList.regular),
      iconsFaSolid: Object.keys(iconsList.solid),
      iconsFaBrands: Object.keys(iconsList.brands),
      iconsSimpleLine: Object.keys(iconsList.simpleline),
    }
  },
  computed: {
    filteredIconsFaRegular () {
      if (this.search) {
        return this.iconsFaRegular.filter(icon => {
          return icon.includes(this.search)
        })
      } else {
        return this.iconsFaRegular
      }
    },
    filteredIconsFaSolid () {
      if (this.search) {
        return this.iconsFaSolid.filter(icon => {
          return icon.includes(this.search)
        })
      } else {
        return this.iconsFaSolid
      }
    },
    filteredIconsFaBrands () {
      if (this.search) {
        return this.iconsFaBrands.filter(icon => {
          return icon.includes(this.search)
        })
      } else {
        return this.iconsFaBrands
      }
    },
    filteredIconsSimpleLine () {
      if (this.search) {
        return this.iconsSimpleLine.filter(icon => {
          return icon.includes(this.search)
        })
      } else {
        return this.iconsSimpleLine
      }
    }
  }
}
</script>
