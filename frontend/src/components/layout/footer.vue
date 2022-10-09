<template>
  <div>
    <v-footer class="my-5 py-0 main-container">
      <v-container>
        <div class="text-center">
          Copyright {{ $appName }} &copy;
          {{ '2015 - ' + new Date().getFullYear() }}
        </div>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
