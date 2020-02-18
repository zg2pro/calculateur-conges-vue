<template>
  <div class="hello">
    <datepicker v-model="startDate" name="startDate"></datepicker>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Datepicker from 'vuejs-datepicker';


@Component({
  components: {
    Datepicker
  }
})
export default class Calculator extends Vue {
  startDate: string;

  mounted () {
    this.startDate = '12-09-2019'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
