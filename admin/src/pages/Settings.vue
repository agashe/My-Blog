<template>
  <card>
    <h4 slot="header" class="title">
      <i class="tim-icons icon-settings"></i>
      Settings
    </h4>
    <div class="row">
      <div class="col-md-12">
        <base-checkbox v-model="putSiteInMaintenance">
          Put the blog in maintenance mode
        </base-checkbox>
      </div>
    </div>
    <base-button slot="footer" type="brand" fill @click="submit">
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
import axios from 'axios';

export default {
  data() {
    return {
      putSiteInMaintenance: null,
    }
  },
  async created() {
    const response = await axios.get(
      'settings',
      {
        headers: {"Authorization" : `Bearer ${this.$store.getters.StateAccessToken}`}
      }
    );

    this.putSiteInMaintenance = response.data[0].putSiteInMaintenance;
  },
  methods: {
    submit: async function (e) {
      e.preventDefault();

      try {
        const response = await axios.put(
          'settings',
          {
            putSiteInMaintenance: this.putSiteInMaintenance,
          },
          {
            headers: {"Authorization" : `Bearer ${this.$store.getters.StateAccessToken}`}
          }
        );

        this.$notify({
          message: "Settings was updated",
          icon: "tim-icons icon-bell-55",
          horizontalAlign: 'right',
          verticalAlign: 'bottom',
          type: 'success',
          timeout: 0
        });
      } catch (error) {
        this.$notify({
          message: "Error: " + error,
          icon: "tim-icons icon-bell-55",
          horizontalAlign: 'right',
          verticalAlign: 'bottom',
          type: 'danger',
          timeout: 0
        });
      }
    }
  }
}
</script>
<style>
</style>
