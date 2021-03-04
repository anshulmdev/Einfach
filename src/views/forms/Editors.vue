<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Form Editors" subtitle="Text editing at its finest.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">Forms</b-breadcrumb-item>
          <b-breadcrumb-item active>Editors</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <!-- CKEditor 5 -->
      <base-block rounded title="CKEditor 5" content-full>
        <ckeditor :editor="ckeditor" v-model="ckeditorData" :config="ckeditorConfig"></ckeditor>
      </base-block>
      <!-- END CKEditor 5 -->

      <!-- Vue SimpleMDE -->
      <base-block rounded title="Vue SimpleMDE" content-full>
        <vue-simplemde v-model="simplemdeData" ref="markdownEditor" :configs="simplemdeConfig"></vue-simplemde>
      </base-block>
      <!-- END Vue SimpleMDE -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<style lang="scss">
// CKEditor Custom overrides
@import './src/assets/scss/vendor/ckeditor';

// SimpleMDE + Custom overrides
@import '~simplemde/dist/simplemde.min.css';
@import './src/assets/scss/vendor/simplemde';
</style>

<script>
// Vue SimpleMDE, for more info and examples you can check out https://github.com/F-loat/vue-simplemde
import VueSimplemde from 'vue-simplemde'

// CKEditor 5, for more info and examples you can check out https://ckeditor.com/ckeditor-5
import CKEditor from '@ckeditor/ckeditor5-vue2'

// You can import one of the following CKEditor variation (only one at a time)
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
//import InlineEditor from '@ckeditor/ckeditor5-build-inline'
//import BalloonEditor from '@ckeditor/ckeditor5-build-balloon'
//import BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block'

export default {
  components: {
    ckeditor: CKEditor.component,
    VueSimplemde
  },
  data () {
    return {      
      simplemdeData: 'Hello SimpleMDE!',
      simplemdeConfig: {
        autoDownloadFontAwesome: false,
      },
      ckeditorData: '<p>Hello CKEditor5!</p>',
      ckeditorConfig: {
        // The configuration of the editor
      },
      // Here we specify the editor you've imported before
      // ClassicEditor, InlineEditor, BalloonEditor, BalloonBlockEditor
      ckeditor: ClassicEditor
    }
  },
  mounted () {
    // Change SimpleMDE's Font Awesome 4 Icons with Font Awesome 5
    let simplemdeLinkHeading = document.querySelector('.editor-toolbar > a.fa-header')
    let simplemdeLinkPicture = document.querySelector('.editor-toolbar > a.fa-picture-o')

    simplemdeLinkHeading.classList.remove('fa-header')
    simplemdeLinkHeading.classList.add('fa-heading')
    
    simplemdeLinkPicture.classList.remove('fa-picture-o')
    simplemdeLinkPicture.classList.add('fa-image')
  }
}
</script>
