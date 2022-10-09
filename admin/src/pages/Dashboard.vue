<template>
  <div>
    <div class="row">
      <div class="col-lg-4">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">{{$t('sidebar.articles')}}</h5>
            <h3 class="card-title"><i class="tim-icons icon-single-copy-04 text-success"></i> 15</h3>
          </template>
        </card>
      </div>
      <div class="col-lg-4">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">{{$t('sidebar.books')}}</h5>
            <h3 class="card-title"><i class="tim-icons icon-book-bookmark text-info"></i> 20</h3>
          </template>
        </card>
      </div>
      <div class="col-lg-4">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category">{{$t('sidebar.projects')}}</h5>
            <h3 class="card-title"><i class="tim-icons icon-components text-danger"></i> 6</h3>
          </template>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    mounted() {
      this.i18n = this.$i18n;
      if (this.enableRTL) {
        this.i18n.locale = 'ar';
        this.$rtl.enableRTL();
      }
    }
  };
</script>
<style>
</style>
