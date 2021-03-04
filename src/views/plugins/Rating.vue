<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Rating" subtitle="Adding rating functionality to your pages has never been easier.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Plugins</b-breadcrumb-item>
          <b-breadcrumb-item active>Rating</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <base-block rounded title="Vue Star Rating">
        <b-row class="items-push-2x">
          <!-- Simple -->
          <b-col md="6">
            <h4 class="border-bottom pb-2">Simple</h4>
            <p class="font-size-sm text-muted mb-2">
              Setting up rating is just a component away <span v-if="starRatingSimple">({{ starRatingSimple }})</span>
            </p>
            <star-rating v-model="starRatingSimple" :star-size="24" :show-rating="false"></star-rating>
          </b-col>
          <!-- END Simple -->

          <!-- Predefined Score -->
          <b-col md="6">
            <h4 class="border-bottom pb-2">Predefined Score</h4>
            <p class="font-size-sm text-muted mb-2">
              You can easily set a default score <span v-if="starRatingPredefined">({{ starRatingPredefined }})</span>
            </p>
            <star-rating v-model="starRatingPredefined" :star-size="24" :show-rating="false"></star-rating>
          </b-col>
          <!-- END Predefined Score -->

          <!-- More Stars -->
          <b-col md="6">
            <h4 class="border-bottom pb-2">More Stars</h4>
            <p class="font-size-sm text-muted mb-2">
              You can easily set the number of stars <span v-if="starRatingMore">({{ starRatingMore }})</span>
            </p>
            <star-rating v-model="starRatingMore" :star-size="24" :show-rating="false" :max-rating="10"></star-rating>
          </b-col>
          <!-- END More Stars -->

          <!-- Reset Button -->
          <b-col md="6">
            <h4 class="border-bottom pb-2">Reset Button</h4>
            <p class="font-size-sm text-muted mb-2">
              You can also add a reset button to your rating <span v-if="starRatingReset">({{ starRatingReset }})</span>
            </p>
            <div class="d-flex align-items-center">
              <b-button size="sm" variant="alt-danger" class="btn-rounded mt-1 mr-2" @click="starRatingReset = 0">
                <i class="fa fa-times-circle"></i>
              </b-button>
              <star-rating v-model="starRatingReset" :star-size="24" :show-rating="false"></star-rating>
            </div>
          </b-col>
          <!-- END Reset Button -->

          <!-- Half Stars -->
          <b-col md="6">
            <h4 class="border-bottom pb-2">Half Stars</h4>
            <p class="font-size-sm text-muted mb-2">
              You can have half stars <span v-if="starRatingIncrement">({{ starRatingIncrement }})</span>
            </p>
            <star-rating v-model="starRatingIncrement" :star-size="24" :show-rating="false" :increment="0.5"></star-rating>
          </b-col>
          <!-- END Half Stars -->

          <!-- Fluid Stars -->
          <b-col md="6">
            <h4 class="border-bottom pb-2">Fluid Stars</h4>
            <p class="font-size-sm text-muted mb-2">
              You can even have fluid stars <span v-if="starRatingFluid">({{ starRatingFluid }})</span>
            </p>
            <star-rating v-model="starRatingFluid" :star-size="24" :increment="0.01" :fixed-points="2" text-class="font-size-sm text-muted"></star-rating>
          </b-col>
          <!-- END Fluid Stars -->

          <!-- Color and Shape Variations -->
          <b-col md="6">
            <h4 class="border-bottom pb-2">Color and Shape Variations</h4>
            <p class="font-size-sm text-muted mb-2">
              You can set the colors to what ever you like <span v-if="starRatingColors">({{ starRatingColors }})</span>
            </p>
            <star-rating v-model="starRatingColors" :star-size="24" :show-rating="false" active-color="#5c80d1" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" class="mb-2"></star-rating>
            <star-rating v-model="starRatingColors" :star-size="24" :show-rating="false" active-color="#46c37b" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" class="mb-2"></star-rating>
            <star-rating v-model="starRatingColors" :star-size="24" :show-rating="false" active-color="#70b9eb" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" class="mb-2"></star-rating>
            <star-rating v-model="starRatingColors" :star-size="24" :show-rating="false" active-color="#f3b760" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" class="mb-2"></star-rating>
            <star-rating v-model="starRatingColors" :star-size="24" :show-rating="false" active-color="#d26a5c" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" class="mb-2"></star-rating>
          </b-col>
          <!-- END Color and Shape Variations -->

          <!-- Size and Shape Variations -->
          <b-col md="6">
            <h4 class="border-bottom pb-2">Size and Shape Variations</h4>
            <p class="font-size-sm text-muted mb-2">
              Changing the size of the stars is also possible <span v-if="starRatingSize">({{ starRatingSize }})</span>
            </p>
            <star-rating v-model="starRatingSize" :star-size="16" :show-rating="false" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" class="mb-1"></star-rating>
            <star-rating v-model="starRatingSize" :star-size="24" :show-rating="false" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" class="mb-1"></star-rating>
            <star-rating v-model="starRatingSize" :star-size="32" :show-rating="false" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" class="mb-1"></star-rating>
            <star-rating v-model="starRatingSize" :star-size="48" :show-rating="false" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" class="mb-1"></star-rating>
          </b-col>
          <!-- END Size and Shape Variations -->
        </b-row>
      </base-block>
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
// Vue Star Rating, for more info and examples you can check out https://github.com/craigh411/vue-star-rating
import StarRating from 'vue-star-rating'

export default {
  components: {
    StarRating
  },
  data () {
    return {
      starRatingSimple: 0,
      starRatingPredefined: 3,
      starRatingMore: 5,
      starRatingReset: 4,
      starRatingIncrement: 2.5,
      starRatingFluid: 0,
      starRatingColors: 3,
      starRatingSize: 3
    }
  }
}
</script>