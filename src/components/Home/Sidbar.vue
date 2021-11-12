<template>

  <el-aside width="200px" router>
    <el-menu
        style="width: 200px"
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#222D3B"
        text-color="#fff"
        active-text-color="#ffd04b" router>
      <el-menu-item index="/usermanages">
        <i class="el-icon-user"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-submenu index="/taskmanages">
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span>任务管理</span>
        </template>
        <el-menu-item-group>

          <el-menu-item index="/urgenttask">紧急任务</el-menu-item>
          <el-menu-item index="/commontask">普通任务</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/center">
        <i class="el-icon-s-custom"></i>
        <span slot="title">个人中心</span>
      </el-menu-item>
    </el-menu>

  </el-aside>

</template>

<script>
export default {
  name: "Sidbar"
}
</script>

<style scoped>

.el-aside {
  height: 100%;
  background: #222D3B;
  overflow: hidden !important;
}

</style>
