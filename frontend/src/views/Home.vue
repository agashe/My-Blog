<template>
  <div>
    <v-row>
      <v-col cols="12" lg="9" xl="8" class="mx-auto border-bottom">
        <div>
          <div class="pt-5">
            <div>
              <v-row v-for="i in 6" :key="i" class="py-4">
                <v-col>
                  <v-row class="cursor-pointer" @click="redirectToArticle(1)">
                    <v-col cols="12" md="4">
                      <v-card flat height="100%">
                        <v-img
                          src="https://cdn.pixabay.com/photo/2021/01/27/06/54/nova-scotia-duck-tolling-retriever-5953883_1280.jpg"
                          :aspect-ratio="16 / 9" height="100%"></v-img>
                      </v-card>
                    </v-col>

                    <v-col>
                      <div>
                        <h3 class="text-h4 font-weight-bold pt-3">
                          Ut enim blandit volutpat maecenas volutpat blandit
                        </h3>

                        <p class="text-h6 font-weight-regular pt-3 text--secondary">
                          Duis aute irure dolor in reprehenderit in voluptate velit
                          esse cillum dolore eu fugiat nulla pariatur. Excepteur
                          sint occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est laborum.
                        </p>

                        <div class="d-flex align-center">
                          <div class="pl-2">Yan Lee · 03 Jan 2019</div>
                        </div>
                      </div>
                    </v-col>
                  </v-row>

                  <v-row v-if="i != 6">
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
export default {
  name: "Home",
  methods: {
    redirectToArticle(id) {
      this.$router.push({
        name: 'Article',
        params: {id: id}
      });
    }
  },
};
</script>
