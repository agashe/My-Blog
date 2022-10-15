<template>
  <div>
    <v-row>
      <v-col cols="12" lg="9" xl="8" class="mx-auto border-bottom">
        <div>
          <div class="pt-5">
            <div>
              <v-row v-for="(article, index) in articles" :key="index" class="py-4">
                <v-col>
                  <v-row class="cursor-pointer" @click="redirectToArticle(article.title.replace(/ /g, '_'))">
                    <v-col cols="12" md="4">
                      <v-card flat height="100%">
                        <v-img
                          :src="`http://localhost:3000/articles/${article.cover}`"
                          :aspect-ratio="16 / 9" height="100%"></v-img>
                      </v-card>
                    </v-col>

                    <v-col>
                      <div>
                        <h3 class="text-h4 font-weight-bold pt-3">
                          {{ article.title }}
                        </h3>

                        <p class="text-h6 font-weight-regular pt-3 text--secondary">
                          {{ article.description }}
                        </p>

                        <div class="d-flex align-center">
                          <div class="pl-2">{{ article.createdAt ? 
                            article.createdAt.slice(0, article.createdAt.indexOf('T')) 
                            : '' }}</div>
                        </div>
                      </div>
                    </v-col>
                  </v-row>

                  <v-row v-if="index != (articles.length - 1)">
                    <v-col>
                      <v-divider></v-divider>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style>
  .cursor-pointer {
    cursor: pointer;
  }
</style>

<script>
import axios from "axios"

export default {
  name: "Home",
  data() {
    return {
      articles: null
    }
  },
  async created() {
    const response = await axios.get("blog/articles");
    this.articles = response.data;
  },
  methods: {
    redirectToArticle(title) {
      this.$router.push({
        name: 'Article',
        params: {title: title}
      });
    }
  },
};
</script>
