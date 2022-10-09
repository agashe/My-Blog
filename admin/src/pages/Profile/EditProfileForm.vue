<template>
  <card>
    <h4 slot="header" class="title">
      <i class="tim-icons icon-single-02"></i>
      Profile
    </h4>
    <div class="row">
      <div class="col-md-6 pr-md-1">
        <base-input label="LinkedIn"
                  v-model="model.city"
                  placeholder="LinkedIn">
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1">
        <base-input label="GitHub"
                  v-model="model.country"
                  placeholder="GitHub">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <base-input>
          <label>About Me</label>
          <textarea rows="15" cols="80"
                    class="form-control"
                    placeholder="Here can be your description"
                    v-model="model.about">

              </textarea>
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
