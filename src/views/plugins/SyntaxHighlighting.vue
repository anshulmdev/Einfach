<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Highlight.js" subtitle="Beautiful syntax highlighting to showcase your code.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Plugins</b-breadcrumb-item>
          <b-breadcrumb-item active>Syntax Highlighting</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- HTML -->
      <base-block rounded title="HTML">
        <pre v-highlightjs><code class="html">&lt;!doctype html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;

    &lt;title&gt;Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- Your content --&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      </base-block>
      <!-- END HTML -->

      <!-- CSS -->
      <base-block rounded title="CSS">
        <pre v-highlightjs><code class="css">/*
=================================================================
SECTION
=================================================================
*/

/* Sub section 1 */
selector {

}

/* Sub section 2 */
selector {

}

/*
=================================================================
SECTION
=================================================================
*/

/* Sub section 1 */
selector {

}

/* Sub section 2 */
selector {

}</code></pre>
      </base-block>
      <!-- END CSS -->

      <!-- SCSS -->
      <base-block rounded title="SCSS">
        <pre v-highlightjs><code class="scss">$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}</code></pre>
      </base-block>
      <!-- END SCSS -->

      <!-- Less -->
      <base-block rounded title="Less">
        <pre v-highlightjs><code class="less">@base: #f938ab;

.box-shadow(@style, @c) when (iscolor(@c)) {
  -webkit-box-shadow: @style @c;
  box-shadow:         @style @c;
}

.box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {
  .box-shadow(@style, rgba(0, 0, 0, @alpha));
}

.box {
  color: saturate(@base, 5%);
  border-color: lighten(@base, 30%);
  div { .box-shadow(0 0 5px, 30%) }
}</code></pre>
      </base-block>
      <!-- END Less -->

      <!-- JavaScript -->
      <base-block rounded title="JavaScript">
        <pre v-highlightjs><code class="javascript">/*
 *  Document   : app.js
 *  Author     : pixelcave
 */

var App = function() {

  // User Interface init
  var uiInit = function() {

  };

  return {
    init: function() {
      uiInit();
    }
  };
}();

// Initialize app when page loads
jQuery(function(){ App.init(); });</code></pre>
      </base-block>
      <!-- END JavaScript -->

      <!-- PHP -->
      <base-block rounded title="PHP">
        <pre v-highlightjs><code class="php">&lt;?php
class App {
  function home()
  {
    // ...
  }

  function profile()
  {
    // ...
  }

  function settings()
  {
    // ...
  }
}</code></pre>
      </base-block>
      <!-- END PHP -->

      <!-- Ruby -->
      <base-block rounded title="Ruby">
        <pre v-highlightjs><code class="ruby"># Output "I love Ruby"
say = "I love Ruby"
puts say

# Output "I *LOVE* RUBY"
say['love'] = "*love*"
puts say.upcase

# Output "I *love* Ruby"
# five times
5.times { puts say }</code></pre>
      </base-block>
      <!-- END Ruby -->

      <!-- Python -->
      <base-block rounded title="Python">
        <pre v-highlightjs><code class="python">name = raw_input('What is your name?\n')

print 'Hi, %s.' % name</code></pre>
      </base-block>
      <!-- END Python -->

      <!-- JSON -->
      <base-block rounded title="JSON">
        <pre v-highlightjs><code class="json">{
  "menu": {
    "id": "file",
    "value": "File",
    "popup": {
      "menuitem": [
        {"value": "New", "onclick": "CreateNewDoc()"},
        {"value": "Open", "onclick": "OpenDoc()"},
        {"value": "Close", "onclick": "CloseDoc()"}
      ]
    }
  }
}</code></pre>
      </base-block>
      <!-- END JSON -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<style lang="scss">
// Highlight.js
@import '~highlight.js/scss/github-gist.scss';
</style>

<script>
// Vue Highlight.js, for more info and examples you can check out https://github.com/metachris/vue-highlightjs
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'

// Register Vue Highlight.js
Vue.use(VueHighlightJS)

export default {}
</script>