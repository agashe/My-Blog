<template>
    <div class="row">
      <div class="col-12">
        <card>
          <h4 slot="header" class="title">
            <i class="tim-icons icon-components"></i>
            Projects

            <base-button type="brand" class="btn-sm float-right" @click="goToCreateProject()">
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
                  <th>Reads</th>
                  <th>Comments</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Test article's title</td>
                  <td>22/9/2022</td>
                  <td>500</td>
                  <td>5</td>
                  <td>
                    <base-button type="info" icon title="Show" class="mx-1">
                      <i class="tim-icons icon-link-72"></i>
                    </base-button>
                    <base-button type="success" icon title="Edit" class="mx-1">
                      <i class="tim-icons icon-pencil"></i>
                    </base-button>
                    <base-button type="danger" icon title="Delete" class="mx-1">
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
export default {
  methods: {
    goToCreateProject() {
      this.$router.push('/projects/create');
    }
  }
};
</script>
<style>
</style>
