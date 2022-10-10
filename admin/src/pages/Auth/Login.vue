<template>
  <div class="full-screen bg-white">
    <div class="wrapper wrapper-full-page section content">
      <div class="container login-page-container">
        <div class="row login-page-row">
          <div class="col-md-12 text-center mt-5">
            <h2 class="title text-brand text-brand-sm">AGASHE</h2>
          </div>

          <card class="col-md-4 mx-auto">
            <h4 slot="header" class="title text-center">
              Login to the Dashboard
            </h4>

            <div class="row">
              <div class="col-md-12 pl-pr-md-1">
                <base-input label="Email" type="text" v-model="email" placeholder="Email">
                </base-input>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 pl-pr-md-1">
                <base-input label="Password" type="password" v-model="password" placeholder="Password">
                </base-input>
              </div>
            </div>

            <base-button class="w-100" slot="footer" type="brand" fill @click="submitLogin">Save</base-button>
          </card>

          <div class="col-md-12 text-center mt-5 text-black">
            <b>{{year}} © AGASHE</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import NotificationTemplate from '../Notifications/NotificationTemplate';

export default {
  data() {
    return {
      year: new Date().getFullYear(),
      email: "",
      password: "",
    }
  },
  methods: {
    submitLogin: async function (e) {
      e.preventDefault();

      try {
        const response = await axios.post('auth/login', {
          username: this.email,
          password: this.password,
        });

        this.$store.commit('setUser', response.data.id);
        this.$store.commit('setAccessToken', response.data.access_token);

        this.$router.push("/dashboard");
      } catch (error) {
        this.$notify({
          message: "Invalid Credentials",
          icon: "tim-icons icon-bell-55",
          horizontalAlign: 'right',
          verticalAlign: 'bottom',
          type: 'danger',
          timeout: 0
        });
      }
    }
  }
}
</script>

<style>
  .login-page-container {
    height: 100vh !important;
  }

  .login-page-row {
    height: 100% !important;
    align-content: center;
    justify-content: center;
  }

  .text-brand-sm {
    font-size: 5em;
  }
  .text-brand {
    color: #000000 !important;
    font-family: Gill Sans, Gill Sans MT, Calibri, sans-serif;
    text-shadow: 3px 0 0 #fcdc03, -3px 0 0 #fcdc03, 0 3px 0 #fcdc03,
      0 -3px 0 #fcdc03, 2px 2px #fcdc03, -2px -2px 0 #fcdc03, 2px -2px 0 #fcdc03,
      -2px 2px 0 #fcdc03;
  }

  .form-control {
    background-color: #000000 !important;
    transition: none !important;
  }

  .btn-brand {
    background: #fcdc03;
    color: #000000;
  }
  .btn-brand:hover {
    background: #fcdc03 !important;
  }

  .text-black {
    color: #000000;
  }
</style>
