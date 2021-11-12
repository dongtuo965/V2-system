<template>
  <el-header>
    <div style="float: left">商品后台管理系统</div>
    Header
    <el-button type="danger" style="float: right;margin:10px" @click="gologin">退出</el-button>
  </el-header>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>

.el-header {
  background-color: #253043;
  color: #fff;
  text-align: center;
  line-height: 60px;
  width: 100%;
}

</style>

