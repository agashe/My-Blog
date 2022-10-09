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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <div class="text-h5 text-center">
                  <v-btn icon large>
                    <v-icon large color="primary">mdi-linkedin</v-icon>
                  </v-btn>

                  <v-btn icon large>
                    <v-icon large color="primary">mdi-github</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template> 

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped>
.authors {
  position: relative;
  top: -50px;
  margin-bottom: -50px;
}
</style>
