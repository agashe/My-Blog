<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link
          to="/dashboard"
          :name="$t('sidebar.dashboard')"
          icon="tim-icons icon-chart-pie-36"
        />
        <sidebar-link
          to="/articles"
          :name="$t('sidebar.articles')"
          icon="tim-icons icon-single-copy-04"
        />
        <sidebar-link
          to="/books"
          :name="$t('sidebar.books')"
          icon="tim-icons icon-book-bookmark"
        />
        <sidebar-link
          to="/projects"
          :name="$t('sidebar.projects')"
          icon="tim-icons icon-components"
        />
        <sidebar-link
          to="/settings"
          :name="$t('sidebar.settings')"
          icon="tim-icons icon-settings"
        />
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"> </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu,
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
