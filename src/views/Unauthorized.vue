<template>
  <div fluid>
    <div class="mb-3 header">
      <div class="col-8">
        <img
          src="https://user-images.githubusercontent.com/70306694/124284590-c3078b80-db6a-11eb-81c7-921cfbe46495.png"
        />
        
      </div>
      <div md="4" class="d-flex justify-content-end">
        <button
          class="btn btn-primary"
          @click="backClick"
          > Go Back</button>
      </div>
    </div>
    <div class="mb-3">
      <div md="12" class="d-flex justify-content-around">
        <h1>You are unauthorised</h1>
        <img src="https://kurianbenoy.com/assets/img/404-southpark.jpg"/>
        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Unauthorized extends Vue {
  backClick() {
    Vue.prototype.$keycloak.logout({ redirectUri: window.location.origin });
  }
}
</script>

<style scoped>
.header {
  background-color: #fdb44e;
}

.button-css {
  margin: 10px;
}
</style>
