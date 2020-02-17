<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Greg's TS-Vue.js/Nest.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Calculator from '@/components/Calculator.vue'

export default {
  name: 'Home',
  components: {
    Calculator
  }
}
</script>
