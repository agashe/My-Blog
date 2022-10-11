<template>
  <div class="full-screen bg-white">
    <div class="wrapper wrapper-full-page section content">
      <div class="container not-found-page-container">
        <div class="row">
          <div class="col-md-12 col-md-offset-2 text-center">
            <h2 class="title text-brand">404</h2>
            <h2 class="title text-black">
              Oops! It seems that this page does not exist.
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.not-found-page-container {
  height: 100vh !important;
}

.not-found-page-container .row {
  height: 100% !important;
  align-content: center;
  justify-content: center;
}

.text-brand {
  font-size: 15em;
  color: #000000 !important;
  font-family: Gill Sans, Gill Sans MT, Calibri, sans-serif;
  text-shadow: 3px 0 0 #fcdc03, -3px 0 0 #fcdc03, 0 3px 0 #fcdc03,
    0 -3px 0 #fcdc03, 2px 2px #fcdc03, -2px -2px 0 #fcdc03, 2px -2px 0 #fcdc03,
    -2px 2px 0 #fcdc03;
}

.text-black {
  color: #000000;
}
</style>

<script>
export default {};
</script>
