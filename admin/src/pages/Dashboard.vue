<template>
  <div>
    <div class="row">
      <div class="col-lg-4">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">{{ $t("sidebar.articles") }}</h5>
            <h3 class="card-title">
              <i class="tim-icons icon-single-copy-04 text-success"></i>
              {{ articles }}
            </h3>
          </template>
        </card>
      </div>
      <div class="col-lg-4">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">{{ $t("sidebar.books") }}</h5>
            <h3 class="card-title">
              <i class="tim-icons icon-book-bookmark text-info"></i>
              {{ books }}
            </h3>
          </template>
        </card>
      </div>
      <div class="col-lg-4">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">{{ $t("sidebar.projects") }}</h5>
            <h3 class="card-title">
              <i class="tim-icons icon-components text-danger"></i>
              {{ projects }}
            </h3>
          </template>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      articles: 0,
      books: 0,
      projects: 0,
    };
  },
  async created() {
    const response = await axios.get("dashboard", {
      headers: {
        Authorization: `Bearer ${this.$store.getters.StateAccessToken}`,
      },
    });

    this.articles = response.data.articlesCount;
    this.books = response.data.booksCount;
    this.projects = response.data.projectsCount;
  },
  mounted() {
    this.i18n = this.$i18n;
    if (this.enableRTL) {
      this.i18n.locale = "ar";
      this.$rtl.enableRTL();
    }
  },
};
</script>
<style></style>
