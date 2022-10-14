<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="12">
        <div class="pt-4">
          <v-card flat v-for="(project, index) in projects" :key="index" class="my-4 project-container">
            <v-card-text class="d-flex justify-space-between align-center white--text">
              <h6 class="text-h6">{{ project.title }}</h6>
              <div class="text-h6">
                <v-btn icon :href="project.repository" target="_blank" class="brand-color">
                  <v-icon>
                    mdi-github
                  </v-icon>
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style>
  .project-container {
    background-color: #000000 !important;
  }

  .brand-color {
    color: #fcdc03 !important;
  }
</style>

<script>
import axios from 'axios';

export default {
  name: "Projects",
  data() {
    return {
      projects: null
    }
  },
  async created() {
    const response = await axios.get("blog/projects");
    this.projects = response.data;
  },
};
</script>
