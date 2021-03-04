<template>
    <div class="bg-body-light">
      <div class="content content-full">
        <slot>
          <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center" v-if="title || $slots.extra">
            <h1 class="flex-sm-fill h3 my-2" v-if="title">
              {{ title }} <small class="d-block d-sm-inline-block mt-2 mt-sm-0 font-size-base font-w400 text-muted" v-if="subtitle">{{ subtitle }}</small>
            </h1>
            <div class="flex-sm-00-auto ml-sm-3" v-if="$slots.extra">
              <slot name="extra"></slot>
            </div>
          </div>
        </slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'BasePageHeading',
  props: {
    title: {
      type: String,
      description: 'The title of page heading section'
    },
    subtitle: {
      type: String,
      description: 'The subtitle of page heading section'
    }
  }
}
</script>
