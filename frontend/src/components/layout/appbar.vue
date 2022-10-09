<template>
  <div>
    <v-navigation-drawer
      v-if="!$vuetify.breakpoint.smAndUp"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      dark
      class="main-container"
    >
      <v-list nav>
        <v-list-item
          v-for="(item, i) in btnItems"
          :key="i"
          link
          :to="item.to"
          :href="item.href"
          :target="item.target"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in barItems"
          :key="i"
          link
          :to="item.to"
          :href="item.href"
          :target="item.target"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-container>
      <v-row
        align="center"
        justify="space-between"
        class="text-center py-2"
      >
        <v-col>
          <h1 class="text-h3 font-weight-bold logo">AGASHE</h1>
        </v-col>
      </v-row>
    </v-container>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      class="main-container mt-1"
    >
      <v-container :class="{ 'px-0': !$vuetify.breakpoint.smAndUp }">
        <v-row
          align="center"
          justify="space-between"
          class="text-center"
          :no-gutters="!$vuetify.breakpoint.smAndUp"
        >
          <v-col v-if="$vuetify.breakpoint.smAndUp">
            <v-btn
              v-for="(item, i) in barItems"
              :key="i"
              text
              class="font-weight-bold"
              :to="item.to"
              exact
              plain
              color="white"
            >
              {{ item.title }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    barItems: [
      {
        title: "Home",
        to: "/",
      },
      {
        title: "Books",
        to: "/books",
      },
      {
        title: "Projects",
        to: "/projects",
      },
      {
        title: "About",
        to: "/about",
      },
    ],
  }),
};
</script>