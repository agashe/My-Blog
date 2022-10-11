<template>
  <div class="row">
    <div class="col-12">
      <card>
        <h4 slot="header" class="title">
          <i class="tim-icons icon-components"></i>
          Projects

          <base-button
            type="brand"
            class="btn-sm float-right"
            @click="goToCreateProject()"
          >
            Add Project
          </base-button>
        </h4>

        <div class="table-responsive mt-3">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Published At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(project, index) in projects">
                <td>{{ index + 1 }}</td>
                <td>{{ project.title }}</td>
                <td>{{ project.createdAt }}</td>
                <td>
                  <a
                    :href="project.repository"
                    class="btn mx-1 btn-icon btn-fab btn-info"
                    target="_blank"
                  >
                    <i class="tim-icons icon-link-72"></i>
                  </a>
                  <base-button
                    type="success"
                    icon
                    title="Edit"
                    class="mx-1"
                    @click="editProject(project._id)"
                  >
                    <i class="tim-icons icon-pencil"></i>
                  </base-button>
                  <base-button
                    type="danger"
                    icon
                    title="Delete"
                    class="mx-1"
                    @click="deleteProject(project._id, index)"
                  >
                    <i class="tim-icons icon-trash-simple"></i>
                  </base-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      projects: null,
    };
  },
  async created() {
    const response = await axios.get("projects", {
      headers: {
        Authorization: `Bearer ${this.$store.getters.StateAccessToken}`,
      },
    });

    this.projects = response.data;
  },
  methods: {
    goToCreateProject() {
      this.$router.push("/projects/create");
    },
    editProject(id) {
      this.$router.push("/projects/edit/" + id);
    },
    async deleteProject(id, index) {
      if (!confirm("Are you sure?")) return;

      try {
        const response = await axios.delete("projects/" + id, {
          headers: {
            Authorization: `Bearer ${this.$store.getters.StateAccessToken}`,
          },
        });

        this.projects.splice(index, 1);

        this.$notify({
          message: "Project was deleted",
          icon: "tim-icons icon-bell-55",
          horizontalAlign: "right",
          verticalAlign: "bottom",
          type: "success",
          timeout: 0,
        });
      } catch (error) {
        // console.log(error)
      }
    },
  },
};
</script>
<style></style>
