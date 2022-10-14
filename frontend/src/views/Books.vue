<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8" class="mt-5">
        <div>
          <div>
            <v-row>
              <v-col cols="12" md="6" lg="4" v-for="(book, index) in books" :key="index">
                <div>
                  <v-card class="my-3 pa-2" to="/article">
                    <v-row>
                      <v-col cols="12" md="4">
                        <v-img src="https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg"
                          :aspect-ratio="16 / 9" class="elevation-2"></v-img>
                      </v-col>
                      <v-col>
                        <v-card-text class="pa-0">
                          <div class="text-h6 font-weight-bold primary--text">
                            {{ book.title }}
                          </div>

                          <div class="text-body-1">
                            {{ book.description }}
                          </div>
                        </v-card-text>
                      </v-col>
                      <v-col>
                        <div class="d-flex align-center">
                          <v-btn block>
                            Download
                            <v-icon right dark>
                              mdi-download
                            </v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.v-image {
  height: 150px;
  width: 100%;
  border-radius: 5px;
}

.v-btn {
  background-color: #000000 !important;
  color: #fcdc03 !important;
}
</style>

<script>
import axios from 'axios';

export default {
  name: "Books",
  data() {
    return {
      books: null
    }
  },
  async created() {
    const response = await axios.get("blog/books");
    this.books = response.data;
  },
};
</script>
