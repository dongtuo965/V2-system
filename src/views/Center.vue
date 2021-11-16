<template>
  <div style="width:1920px;height:1080px;">
    <!--    <Upload/>-->
    <MoveTable/>
  </div>
</template>
<script>


import Upload from "../components/Upload";
import MoveTable from "../components/MoveTable/MoveTable";

export default {
  name: "Center",
  components: {MoveTable, Upload},
  data() {
    return {}
  },
  mounted() {
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>

</style>
