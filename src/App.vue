<template>
  <v-app>

    Ma solution utilisant <img alt="Vue logo" :src="image"> pour importer un service NestJs.
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
export default Vue.extend({
  name: 'App',
  components: {
    Calculator,
  },
  data: () => ({
      image: require('@/assets/logo.png'),
  }),
});
</script>
<style scoped>
  img {
    width: 40px;
  }
</style>
