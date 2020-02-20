<template>
  <div class="home">
    My solution using
    <img alt="Vue logo" src="../assets/logo.png">
    to import a nestJs service.
    <br/>
    <hr/>
    <br/>
    <Calculator msg="Welcome to Greg's TS-Vue.js/Nest.js App"/>
  </div>
</template>

<script>
import Calculator from '@/components/Calculator.vue';

export default {
  name: 'Home',
  components: {
    Calculator,
  },
};
</script>
