<template>
  <div v-if="jwttoken">
      
    <Header />
    <CamundaTasklist
      class="ctf-task-list px-3"
      :bpmApiUrl="configs.BPM_URL"
      :token="jwttoken"
      :formioServerUrl="configs.formioServerUrl"
      :userRoles="configs.userRoles"
      :reviewer="configs.reviewer"
      :formsflowaiUrl="configs.FORMS_FLOW_URL"
      :formsflowaiApiUrl="configs.FORMS_FLOW_API_URL"
      :getTaskId="getTaskId"
      taskSortBy="dueDate"
      taskSortOrder="asc"
      webSocketEncryptkey="giert989jkwrgb@DR55"
      v-if="isServiceFLowEnabled"
      :container-height="120"
      :disabledComponents="{ form: true }"
      :hideTaskDetails="{ grops: true }"
    />
    
  </div>
  <div class="no-content" v-else>
    You shouldnot be here !!!
    <h1>Hello</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CamundaTasklist from "camunda-formio-tasklist-vue/src/components/TaskList.vue";
import Header from "@/components/layouts/Header.vue";
 
@Component({
  components: {
    CamundaTasklist,
    Header,
  },
})
export default class TaskList extends Vue {
  @Prop() private getTaskId!: string;
  public configs = {
    BPM_URL: process.env.VUE_APP_BPM_URL,
    formioServerUrl: process.env.VUE_APP_FORM_IO_API_URL,
    reviewer: process.env.VUE_APP_FORM_IO_REVIEWER,
    userRoles: process.env.VUE_APP_FORMIO_ROLES,
    FORMS_FLOW_API_URL: process.env.VUE_APP_FORM_FLOW_API_URL,
    FORMS_FLOW_URL: process.env.VUE_APP_FORM_FLOW_URL,
    SERVICEFLOW_ENABLED: true,
  };

  public isServiceFLowEnabled: boolean = true;
  public jwttoken: string | boolean = false;

 
  created() {
    this.jwttoken = Vue.prototype.$keycloak.token;
    this.isServiceFLowEnabled = true;
    Vue.prototype.refreshToken = setInterval(() => {
      Vue.prototype.$keycloak.updateToken(5).then(() => {
        this.jwttoken = Vue.prototype.$keycloak.token;
      });
    },60000);
  }
}
</script>
<style scoped>
.no-content {
  display: flex;
  justify-content: center;
  font-size: 18px;
}
.ctf-task-main-back {
  background: #ddd;
  height: 100vh;
}
.ctf-task-list {
  height: 100vh;
  overflow: auto;
}
</style>
