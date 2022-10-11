<template>
    <div class="row">
      <div class="col-12">
        <card>
          <h4 slot="header" class="title">
            <i class="tim-icons icon-single-copy-04"></i>
            Articles

            <base-button type="brand" class="btn-sm float-right" @click="goToCreateArticle()">
              Add Article
            </base-button>
          </h4>

          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Published At</th>
                  <!-- <th>Reads</th>
                  <th>Comments</th> -->
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(article, index) in articles">
                  <td>{{ index + 1 }}</td>
                  <td>{{ article.title }}</td>
                  <td>{{ article.createdAt }}</td>
                  <!-- <td>500</td>
                  <td>5</td> -->
                  <td>
                    <!-- <base-button type="info" icon title="Show" class="mx-1">
                      <i class="tim-icons icon-link-72"></i>
                    </base-button> -->
                    <base-button type="success" icon title="Edit" class="mx-1" @click="editArticle(article._id)">
                      <i class="tim-icons icon-pencil"></i>
                    </base-button>
                    <base-button type="danger" icon title="Delete" class="mx-1" @click="deleteArticle(article._id, index)">
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
import axios from 'axios';

export default {
  data() {
    return {
      articles: null
    }
  },
  async created() {
    const response = await axios.get(
      'articles',
      {
        headers: {"Authorization" : `Bearer ${this.$store.getters.StateAccessToken}`}
      }
    );

    this.articles = response.data;
  },
  methods: {
    goToCreateArticle() {
      this.$router.push('/articles/create');
    },
    editArticle(id) {
      this.$router.push('/articles/edit/' + id);
    },
    async deleteArticle(id, index) {
      if (!confirm("Are you sure?"))
        return;

      try {
        const response = await axios.delete(
          'articles/' + id,
          {
            headers: {"Authorization" : `Bearer ${this.$store.getters.StateAccessToken}`}
          }
        );

        this.articles.splice(index, 1);

        this.$notify({
          message: "Article was deleted",
          icon: "tim-icons icon-bell-55",
          horizontalAlign: 'right',
          verticalAlign: 'bottom',
          type: 'success',
          timeout: 0
        });
      } catch (error) {
        // console.log(error)
      }
    }
  }
};
</script>
<style>
</style>
