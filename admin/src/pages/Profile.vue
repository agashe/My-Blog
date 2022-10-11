<template>
  <div class="row">
    <div class="col-md-12">
      <edit-profile-form :model="model"> </edit-profile-form>
    </div>
  </div>
</template>
<script>
import EditProfileForm from "./Profile/EditProfileForm";
import axios from "axios";

export default {
  components: {
    EditProfileForm,
  },
  data() {
    return {
      model: {
        linkedin: null,
        github: null,
        bio: null,
      },
    };
  },
  async created() {
    const response = await axios.get("users", {
      headers: {
        Authorization: `Bearer ${this.$store.getters.StateAccessToken}`,
      },
    });

    this.model.linkedin = response.data.linkedin;
    this.model.github = response.data.github;
    this.model.bio = response.data.bio;
  },
  methods: {
    submit: async function () {
      try {
        const response = await axios.put(
          `users/${this.$store.getters.StateUser}`,
          {
            linkedin: this.model.linkedin,
            github: this.model.github,
            bio: this.model.bio,
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.getters.StateAccessToken}`,
            },
          }
        );

        this.$notify({
          message: "Your profile was updated",
          icon: "tim-icons icon-bell-55",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "success",
          timeout: 0,
        });
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
