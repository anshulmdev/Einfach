<template>
  <!-- Footer -->
  <footer id="page-footer">
    <slot>
      <div class="bg-white">
        <div class="content py-3">
          <b-row class="font-size-sm text-muted font-w500">
          <b-col sm="6" order-sm="2" class="py-1 text-center text-sm-right">
            <router-link class="ml-2 font-w600" to="/backend/support/ticket">support@einfach.in</router-link>
          </b-col>
            <b-col sm="6" order-sm="1" class="py-1 text-center text-sm-left">
              <a class="font-w600" href="https://1.envato.market/5Noyb" target="_blank">{{ $store.getters.appName + ' ' + $store.getters.appVersion }}</a> &copy; {{ $store.getters.appCopyright }}
            </b-col>
          </b-row>
        </div>
      </div>
    </slot>
  </footer>
  <!-- END Footer -->
</template>

<script>
export default {
  name: 'BaseFooter',
  props: {
    classes: String
  }
}
</script>
