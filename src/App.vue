<template>
  <v-app>

    My solution using <img alt="Vue logo" :src="image"> to import a NestJs service.
    <br/>
<hr/>
    <br/>
    <v-content>
      <Calculator/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Calculator from './components/Calculator.vue';
//import SERVICE_IDENTIFIER from "./configs/ServiceIdentifiers";
//import container from "./configs/DependencyConfigs";

export default Vue.extend({
  name: 'App',
  components: {
    Calculator
  },
   // provide: {
   //     [SERVICE_IDENTIFIER.CONTAINER]: container
    //},
  data: () => ({
      image: require('@/assets/logo.png')
  }),
});
</script>
<style scoped>
  img {
    width: 40px;
  }
</style>
