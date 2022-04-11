<template>
  <div class="d-flex align-items-center justify-content-around bg-warning">
    <div>
      <img
        src="https://user-images.githubusercontent.com/70306694/124284590-c3078b80-db6a-11eb-81c7-921cfbe46495.png"
      />
    </div>
    <div class="text-center">
      <p class="username">User: {{ firstName }} {{ lastName }}</p>
    </div>
    <div>
      <button class="btn btn-primary" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "../../style/style.css";
@Component
export default class Header extends Vue {
  private firstName = "";
  private lastName = "";

  logout() {
    Vue.prototype.$keycloak.logout({ redirectUri: window.location.origin });
    clearInterval(Vue.prototype.refreshToken);
  }

  mounted() {
    this.firstName = Vue.prototype.$keycloak.tokenParsed.given_name;
    this.lastName = Vue.prototype.$keycloak.tokenParsed.family_name;
  }
}
</script>

<style scoped>
.username {
  font-size: 1.5em;
  color: #fff;
}
</style>
