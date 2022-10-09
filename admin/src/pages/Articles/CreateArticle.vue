<template>
  <card>
    <h4 slot="header" class="title">
      <i class="tim-icons icon-single-copy-04"></i>
      Add Article
    </h4>

    <div class="row">
      <div class="col-md-12 pl-pr-md-1">
        <base-input label="Title" type="text" placeholder="Title">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 pl-pr-md-1">
        <base-input label="Description" type="text" placeholder="Description">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 pl-pr-md-1">
        <base-input label="Keywords" type="text" placeholder="Keywords">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 pl-pr-md-1">
        <base-input label="Cover" type="text" placeholder="Cover">
        </base-input>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <base-input>
          <label>Body</label>
          <ckeditor :editor="editor" v-model="editorData"></ckeditor>
        </base-input>
      </div>
    </div>

    <base-button slot="footer" type="brand" fill>Save</base-button>
  </card>
</template>

<style>
  .ck.ck-content:not(.ck-comment__input *) {
    height: 300px;
    overflow-y: auto;
  }

  .card .ck-content h1,
  .card .ck-content h2,
  .card .ck-content h3,
  .card .ck-content h4,
  .card .ck-content h5,
  .ck-content .card h6,
  .card .ck-content p {
    color: #000000 !important;
  }
</style>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
    }
  },
  props: {
    model: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
}
</script>
