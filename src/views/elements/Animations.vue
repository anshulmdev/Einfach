<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Animations" subtitle="Rich animation library will bring your elements to life and engage your users.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
          <b-breadcrumb-item active>Animations</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- Attention Seekers -->
      <h2 class="content-heading">Attention Seekers</h2>
      <base-block rounded content-class="overflow-hidden">
        <template #header>
          <h3 class="block-title">
            Active CSS classes: <small><code>{{ attentionSeekers.animated ? 'animated ' + attentionSeekers.animation : '' }}</code></small>
          </h3>
        </template>
        <b-row>
          <b-col lg="6">
            <b-row class="items-push">
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('bounce', 'attentionSeekers')">bounce</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('flash', 'attentionSeekers')">flash</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('pulse', 'attentionSeekers')">pulse</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('rubberBand', 'attentionSeekers')">rubberBand</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('shake', 'attentionSeekers')">shake</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('swing', 'attentionSeekers')">swing</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('tada', 'attentionSeekers')">tada</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('wobble', 'attentionSeekers')">wobble</b-button>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="6" class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4">
            <div :class="classContainer('attentionSeekers')">
              <img class="img-fluid" src="img/various/little-monster.png" alt="Cartoon" width="200">
            </div>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Attention Seekers -->

      <!-- Bouncing Entrances -->
      <h2 class="content-heading">Bouncing Entrances</h2>
      <base-block rounded content-class="overflow-hidden">
        <template #header>
          <h3 class="block-title">
            Active CSS classes: <small><code>{{ bouncingEntrances.animated ? 'animated ' + bouncingEntrances.animation : '' }}</code></small>
          </h3>
        </template>
        <b-row>
          <b-col lg="6">
            <b-row class="items-push">
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('bounceIn', 'bouncingEntrances')">bounceIn</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('bounceInDown', 'bouncingEntrances')">bounceInDown</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('bounceInLeft', 'bouncingEntrances')">bounceInLeft</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('bounceInRight', 'bouncingEntrances')">bounceInRight</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('bounceInUp', 'bouncingEntrances')">bounceInUp</b-button>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="6" class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4">
            <div :class="classContainer('bouncingEntrances')">
              <img class="img-fluid" src="img/various/little-monster.png" alt="Cartoon" width="200">
            </div>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Bouncing Entrances -->

      <!-- Bouncing Exits -->
      <h2 class="content-heading">Bouncing Exits</h2>
      <base-block rounded content-class="overflow-hidden">
        <template #header>
          <h3 class="block-title">
            Active CSS classes: <small><code>{{ bouncingExits.animated ? 'animated ' + bouncingExits.animation : '' }}</code></small>
          </h3>
        </template>
        <b-row>
          <b-col lg="6">
            <b-row class="items-push">
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('bounceOut', 'bouncingExits')">bounceOut</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('bounceOutDown', 'bouncingExits')">bounceOutDown</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('bounceOutLeft', 'bouncingExits')">bounceOutLeft</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('bounceOutRight', 'bouncingExits')">bounceOutRight</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('bounceOutUp', 'bouncingExits')">bounceOutUp</b-button>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="6" class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4">
            <div :class="classContainer('bouncingExits')">
              <img class="img-fluid" src="img/various/little-monster.png" alt="Cartoon" width="200">
            </div>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Bouncing Exits -->

      <!-- Fading Entrances -->
      <h2 class="content-heading">Fading Entrances</h2>
      <base-block rounded content-class="overflow-hidden">
        <template #header>
          <h3 class="block-title">
            Active CSS classes: <small><code>{{ fadingEntrances.animated ? 'animated ' + fadingEntrances.animation : '' }}</code></small>
          </h3>
        </template>
        <b-row>
          <b-col lg="6">
            <b-row class="items-push">
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('fadeIn', 'fadingEntrances')">fadeIn</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('fadeInDown', 'fadingEntrances')">fadeInDown</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('fadeInDownBig', 'fadingEntrances')">fadeInDownBig</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('fadeInLeft', 'fadingEntrances')">fadeInLeft</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('fadeInLeftBig', 'fadingEntrances')">fadeInLeftBig</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('fadeInRight', 'fadingEntrances')">fadeInRight</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('fadeInRightBig', 'fadingEntrances')">fadeInRightBig</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('fadeInUp', 'fadingEntrances')">fadeInUp</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('fadeInUpBig', 'fadingEntrances')">fadeInUpBig</b-button>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="6" class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4">
            <div :class="classContainer('fadingEntrances')">
              <img class="img-fluid" src="img/various/little-monster.png" alt="Cartoon" width="200">
            </div>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Fading Entrances -->

      <!-- Fading Exits -->
      <h2 class="content-heading">Fading Exits</h2>
      <base-block rounded content-class="overflow-hidden">
        <template #header>
          <h3 class="block-title">
            Active CSS classes: <small><code>{{ fadingExits.animated ? 'animated ' + fadingExits.animation : '' }}</code></small>
          </h3>
        </template>
        <b-row>
          <b-col lg="6">
            <b-row class="items-push">
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('fadeOut', 'fadingExits')">fadeOut</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('fadeOutDown', 'fadingExits')">fadeOutDown</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('fadeOutDownBig', 'fadingExits')">fadeOutDownBig</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('fadeOutLeft', 'fadingExits')">fadeOutLeft</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('fadeOutLeftBig', 'fadingExits')">fadeOutLeftBig</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('fadeOutRight', 'fadingExits')">fadeOutRight</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('fadeOutRightBig', 'fadingExits')">fadeOutRightBig</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('fadeOutUp', 'fadingExits')">fadeOutUp</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('fadeOutUpBig', 'fadingExits')">fadeOutUpBig</b-button>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="6" class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4">
            <div :class="classContainer('fadingExits')">
              <img class="img-fluid" src="img/various/little-monster.png" alt="Cartoon" width="200">
            </div>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Fading Exits -->

      <!-- Flippers -->
      <h2 class="content-heading">Flippers</h2>
      <base-block rounded content-class="overflow-hidden">
        <template #header>
          <h3 class="block-title">
            Active CSS classes: <small><code>{{ flippers.animated ? 'animated ' + flippers.animation : '' }}</code></small>
          </h3>
        </template>
        <b-row>
          <b-col lg="6">
            <b-row class="items-push">
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('flip', 'flippers')">flip</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('flipInX', 'flippers')">flipInX</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('flipInY', 'flippers')">flipInY</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('flipOutX', 'flippers')">flipOutX</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('flipOutY', 'flippers')">flipOutY</b-button>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="6" class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4">
            <div :class="classContainer('flippers')">
              <img class="img-fluid" src="img/various/little-monster.png" alt="Cartoon" width="200">
            </div>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Flippers -->

      <!-- Lightspeed -->
      <h2 class="content-heading">Lightspeed</h2>
      <base-block rounded content-class="overflow-hidden">
        <template #header>
          <h3 class="block-title">
            Active CSS classes: <small><code>{{ lightspeed.animated ? 'animated ' + lightspeed.animation : '' }}</code></small>
          </h3>
        </template>
        <b-row>
          <b-col lg="6">
            <b-row class="items-push">
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('lightSpeedIn', 'lightspeed')">lightSpeedIn</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('lightSpeedOut', 'lightspeed')">lightSpeedOut</b-button>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="6" class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4">
            <div :class="classContainer('lightspeed')">
              <img class="img-fluid" src="img/various/little-monster.png" alt="Cartoon" width="200">
            </div>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Lightspeed -->

      <!-- Rotating Entrances -->
      <h2 class="content-heading">Rotating Entrances</h2>
      <base-block rounded content-class="overflow-hidden">
        <template #header>
          <h3 class="block-title">
            Active CSS classes: <small><code>{{ rotatingEntrances.animated ? 'animated ' + rotatingEntrances.animation : '' }}</code></small>
          </h3>
        </template>
        <b-row>
          <b-col lg="6">
            <b-row class="items-push">
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('rotateIn', 'rotatingEntrances')">rotateIn</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('rotateInDownLeft', 'rotatingEntrances')">rotateInDownLeft</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('rotateInDownRight', 'rotatingEntrances')">rotateInDownRight</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('rotateInDownLeft', 'rotatingEntrances')">rotateInDownLeft</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('rotateInUpRight', 'rotatingEntrances')">rotateInUpRight</b-button>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="6" class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4">
            <div :class="classContainer('rotatingEntrances')">
              <img class="img-fluid" src="img/various/little-monster.png" alt="Cartoon" width="200">
            </div>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Rotating Entrances -->

      <!-- Rotating Exits -->
      <h2 class="content-heading">Rotating Exits</h2>
      <base-block rounded content-class="overflow-hidden">
        <template #header>
          <h3 class="block-title">
            Active CSS classes: <small><code>{{ rotatingExits.animated ? 'animated ' + rotatingExits.animation : '' }}</code></small>
          </h3>
        </template>
        <b-row>
          <b-col lg="6">
            <b-row class="items-push">
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('rotateOut', 'rotatingExits')">rotateOut</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('rotateOutDownLeft', 'rotatingExits')">rotateOutDownLeft</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('rotateOutDownRight', 'rotatingExits')">rotateOutDownRight</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('rotateOutUpLeft', 'rotatingExits')">rotateOutUpLeft</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('rotateOutUpRight', 'rotatingExits')">rotateOutUpRight</b-button>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="6" class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4">
            <div :class="classContainer('rotatingExits')">
              <img class="img-fluid" src="img/various/little-monster.png" alt="Cartoon" width="200">
            </div>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Rotating Exits -->

      <!-- Sliding Entrances -->
      <h2 class="content-heading">Sliding Entrances</h2>
      <base-block rounded content-class="overflow-hidden">
        <template #header>
          <h3 class="block-title">
            Active CSS classes: <small><code>{{ slidingEntrances.animated ? 'animated ' + slidingEntrances.animation : '' }}</code></small>
          </h3>
        </template>
        <b-row>
          <b-col lg="6">
            <b-row class="items-push">
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('slideInUp', 'slidingEntrances')">slideInUp</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('slideInDown', 'slidingEntrances')">slideInDown</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('slideInLeft', 'slidingEntrances')">slideInLeft</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('slideInRight', 'slidingEntrances')">slideInRight</b-button>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="6" class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4">
            <div :class="classContainer('slidingEntrances')">
              <img class="img-fluid" src="img/various/little-monster.png" alt="Cartoon" width="200">
            </div>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Sliding Entrances -->

      <!-- Sliding Exits -->
      <h2 class="content-heading">Sliding Exits</h2>
      <base-block rounded content-class="overflow-hidden">
        <template #header>
          <h3 class="block-title">
            Active CSS classes: <small><code>{{ slidingExits.animated ? 'animated ' + slidingExits.animation : '' }}</code></small>
          </h3>
        </template>
        <b-row>
          <b-col lg="6">
            <b-row class="items-push">
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('slideOutUp', 'slidingExits')">slideOutUp</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('slideOutDown', 'slidingExits')">slideOutDown</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('slideOutLeft', 'slidingExits')">slideOutLeft</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('slideOutRight', 'slidingExits')">slideOutRight</b-button>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="6" class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4">
            <div :class="classContainer('slidingExits')">
              <img class="img-fluid" src="img/various/little-monster.png" alt="Cartoon" width="200">
            </div>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Sliding Exits -->

      <!-- Zoom Entrances -->
      <h2 class="content-heading">Zoom Entrances</h2>
      <base-block rounded content-class="overflow-hidden">
        <template #header>
          <h3 class="block-title">
            Active CSS classes: <small><code>{{ zoomEntrances.animated ? 'animated ' + zoomEntrances.animation : '' }}</code></small>
          </h3>
        </template>
        <b-row>
          <b-col lg="6">
            <b-row class="items-push">
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('zoomIn', 'zoomEntrances')">zoomIn</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('zoomInDown', 'zoomEntrances')">zoomInDown</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('zoomInLeft', 'zoomEntrances')">zoomInLeft</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('zoomInRight', 'zoomEntrances')">zoomInRight</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('zoomInUp', 'zoomEntrances')">zoomInUp</b-button>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="6" class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4">
            <div :class="classContainer('zoomEntrances')">
              <img class="img-fluid" src="img/various/little-monster.png" alt="Cartoon" width="200">
            </div>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Zoom Entrances -->

      <!-- Zoom Exits -->
      <h2 class="content-heading">Zoom Exits</h2>
      <base-block rounded content-class="overflow-hidden">
        <template #header>
          <h3 class="block-title">
            Active CSS classes: <small><code>{{ zoomExits.animated ? 'animated ' + zoomExits.animation : '' }}</code></small>
          </h3>
        </template>
        <b-row>
          <b-col lg="6">
            <b-row class="items-push">
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('zoomOut', 'zoomExits')">zoomOut</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('zoomOutDown', 'zoomExits')">zoomOutDown</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('zoomOutLeft', 'zoomExits')">zoomOutLeft</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('zoomOutRight', 'zoomExits')">zoomOutRight</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('zoomOutUp', 'zoomExits')">zoomOutUp</b-button>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="6" class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4">
            <div :class="classContainer('zoomExits')">
              <img class="img-fluid" src="img/various/little-monster.png" alt="Cartoon" width="200">
            </div>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Zoom Exits -->

      <!-- Specials -->
      <h2 class="content-heading">Specials</h2>
      <base-block rounded content-class="overflow-hidden">
        <template #header>
          <h3 class="block-title">
            Active CSS classes: <small><code>{{ specials.animated ? 'animated ' + specials.animation : '' }}</code></small>
          </h3>
        </template>
        <b-row>
          <b-col lg="6">
            <b-row class="items-push">
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('hinge', 'specials')">hinge</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('rollIn', 'specials')">rollIn</b-button>
              </b-col>
              <b-col md="6">
                <b-button variant="alt-primary" block @click="setAnimation('rollOut', 'specials')">rollOut</b-button>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="6" class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4">
            <div :class="classContainer('specials')">
              <img class="img-fluid" src="img/various/little-monster.png" alt="Cartoon" width="200">
            </div>
          </b-col>
        </b-row>
      </base-block>
      <!-- END Specials -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      attentionSeekers: { animated: false, animation: '' },
      bouncingEntrances: { animated: false, animation: '' },
      bouncingExits: { animated: false, animation: '' },
      fadingEntrances: { animated: false, animation: '' },
      fadingExits: { animated: false, animation: '' },
      flippers: { animated: false, animation: '' },
      lightspeed: { animated: false, animation: '' },
      rotatingEntrances: { animated: false, animation: '' },
      rotatingExits: { animated: false, animation: '' },
      slidingEntrances: { animated: false, animation: '' },
      slidingExits: { animated: false, animation: '' },
      zoomEntrances: { animated: false, animation: '' },
      zoomExits: { animated: false, animation: '' },
      specials: { animated: false, animation: '' }
    }
  },
  methods: {
    setAnimation (animation, section) {
      // Remove animation classes
      this[section]['animated'] = false
      this[section]['animation'] = ''

      // Add them again to trigger the animation
      this[section]['animated'] = true
      this[section]['animation'] = animation
    },
    classContainer (section) {
      return {
        'animated': this[section]['animated'],
        [this[section]['animation']]: this[section]['animation']
      }
    }
  }
}
</script>
