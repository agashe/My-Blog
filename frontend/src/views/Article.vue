<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <v-card flat color="transparent">
              <v-img :src="`http://localhost:3000/articles/${article.cover}`" :aspect-ratio="16 / 9"
                gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)" style="border-radius: 16px"></v-img>

              <v-card-text>
                <div class="text-h4 font-weight-bold primary--text pt-4 mb-4">
                  <h4>{{ article.title }}</h4>
                </div>

                <div class="d-flex align-center justify-space-between">
                  <div class="d-flex align-center">
                    <v-chip small color="transparent">
                      <v-icon left>mdi-calendar</v-icon> 
                      {{ article.createdAt ? 
                      article.createdAt.slice(0, article.createdAt.indexOf('T')) 
                      : '' }}
                    </v-chip>

                    <div class="pl-2 text-body-1"></div>
                  </div>

                  <div class="d-flex align-center"></div>
                </div>

                <v-divider class="my-4"></v-divider>

                <div v-html="article.body"></div>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios"

export default {
  name: "Article",
  data() {
    return {
      article: {
        title: '',
        createdAt: '',
        body: '',
      }
    }
  },
  async created() {
    const title = this.$route.params.title;
    const response = await axios.get("blog/articles/" + title);
    this.article = response.data[0];
  },
};
</script>
