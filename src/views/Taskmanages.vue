<template>
  <div>
<!--<ManyRowColDT/>-->
    <router-view></router-view>
  </div>
</template>

<script>
import ManyRowColDT from "../components/InputAutoIncrement/ManyRowColDT";
export default {

  name: 'Taskmanages',
  components: {ManyRowColDT},
}
</script>

<style scoped>

</style>
