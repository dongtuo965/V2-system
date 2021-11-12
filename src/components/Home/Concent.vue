<template>
  <div class="content">
    <el-container>
      <el-main>
        main
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Concent"
}
</script>

<style scoped>
.content {
  /*width: 84%;*/
  /*height: 90%;*/
  background: pink;
  /*position: absolute;*/
  /*top: 90px;*/
  /*left: 225px;*/
}


</style>
