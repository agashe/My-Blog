<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <div class="my-5 text-center">
              <h2 class="text-h4 font-weight-bold">About Me</h2>
            </div>

            <v-row>
              <v-col cols="12" md="8" class="mx-auto text-center">
                {{ bio }}
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <div class="text-h5 text-center">
                  <a :href="linkedin" target="_blank">
                    <v-icon large color="primary">mdi-linkedin</v-icon>
                  </a>

                  <a :href="github" target="_blank">
                    <v-icon large color="primary">mdi-github</v-icon>
                  </a>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template> 

<style lang="scss" scoped>
.authors {
  position: relative;
  top: -50px;
  margin-bottom: -50px;
}
</style>

<script>
import axios from 'axios';

export default {
  name: "About",
  data() {
    return {
      bio: null,
      linkedin: null,
      github: null,
    }
  },
  async created() {
    const response = await axios.get("blog/about");
    this.bio = response.data.bio;
    this.linkedin = response.data.linkedin;
    this.github = response.data.github;
  },
};
</script>
