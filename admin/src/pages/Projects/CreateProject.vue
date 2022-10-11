<template>
  <card>
    <h4 slot="header" class="title">
      <i class="tim-icons icon-components"></i>
      Add Project
    </h4>

    <div class="row">
      <div class="col-md-12 pl-pr-md-1">
        <base-input label="Title" type="text" placeholder="Title" v-model="title"> </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 pl-pr-md-1">
        <base-input label="Repository" type="text" placeholder="http://repository.git" v-model="repository">
        </base-input>
      </div>
    </div>

    <base-button slot="footer" type="brand" fill @click="submit">Save</base-button>
  </card>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      title: null,
      repository: null,
    };
  },
  methods: {
    submit: async function (e) {
      e.preventDefault();

      try {
        const formData = new FormData();
        formData.append("title", this.title);
        formData.append("repository", this.repository);

        const response = await axios.post("projects", formData, {
          headers: {
            Authorization: `Bearer ${this.$store.getters.StateAccessToken}`,
            "Content-Type": "multipart/form-data",
          },
        });

        this.$notify({
          message: "Project was created",
          icon: "tim-icons icon-bell-55",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "success",
          timeout: 0,
        });

        this.$router.push("/projects");
      } catch (error) {
        this.$notify({
          message: "Error: " + error,
          icon: "tim-icons icon-bell-55",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "danger",
          timeout: 0,
        });
      }
    },
  },
};
</script>
<style></style>
