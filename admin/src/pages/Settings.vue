<template>
  <card>
    <h4 slot="header" class="title">
      <i class="tim-icons icon-settings"></i>
      Settings
    </h4>
    <div class="row">
      <div class="col-md-12">
        <base-checkbox>
          Put the blog in maintenance mode
        </base-checkbox>
      </div>
    </div>
    <base-button slot="footer" type="brand" fill>
      Save
    </base-button>
  </card>
</template>

<style>
  .btn-brand {
    background: #fcdc03;
    color: #000000;
  }
  .btn-brand:hover {
    background: #fcdc03 !important;
  }
</style>

<script>
  export default {
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
<style>
</style>
