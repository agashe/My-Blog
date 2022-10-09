<template>
  <card>
    <h4 slot="header" class="title">
      <i class="tim-icons icon-book-bookmark"></i>
      Add Book
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
        <base-input label="Cover" type="text" placeholder="Cover">
        </base-input>
      </div>
    </div>

    <base-button slot="footer" type="brand" fill>Save</base-button>
  </card>
</template>
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
