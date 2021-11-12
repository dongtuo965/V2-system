<template>
  <div class="layout">
    <el-container>
      <el-header>
        <!--                <Hamburger class="hamburger-container" @toggleClick="toggleSideBar"/>-->
        <div style="float: left">商品后台管理系统</div>
        Header
        <el-button type="danger" style="float: right;margin:10px" @click="gologin">退出</el-button>
        <el-button type="success" style="float: right;margin:10px " @click="fillscreen">全屏</el-button>

      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
              style="width: 200px"
              :default-active="$route.path" exact
              class="el-menu-vertical-demo"
              background-color="#222D3B"
              :collapse-transition=false
              text-color="#fff"
              active-text-color="#ffd04b" router>
            <el-menu-item index="/usermanages">
              <template slot="title">
                <i class="el-icon-user"></i>
                <span slot="title">用户管理</span>
              </template>
            </el-menu-item>

            <el-submenu index="/taskmanages">
              <template slot="title">
                <i class="el-icon-s-data"></i>
                <span>任务管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/taskmanages/urgenttask">紧急任务</el-menu-item>
                <el-menu-item index="/taskmanages/commontask">普通任务</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/center">
              <i class="el-icon-s-custom"></i>
              <span slot="title">个人中心</span>
            </el-menu-item>
          </el-menu>

        </el-aside>
        <el-main>
          <Breadcrumb/>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import screenfull from "screenfull";
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import Hamburger from "../Hamburger/Hamburger"
import ScreenFull from "../ScreenFull/ScreenFull";

export default {
  name: 'Index',
  data() {
    return {}
  },
  components: {
    ScreenFull,
    Hamburger,
    Breadcrumb
  },
  methods: {
    fillscreen() {
      // 如果不允许进入全屏，发出不允许提示
      if (!screenfull.enabled) {
        this.$message("您的浏览器不能全屏");
        return false;
      }
      screenfull.toggle();
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    gologin() {
      this.$router.push('./login')
      sessionStorage.clear()
    },

  },
  computed: {}
}
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.layout {
  width: 100%;
  height: 100%;
}

.el-container.is-vertical {
  height: 100%;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-header {
  background-color: #253043;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  height: 100%;
  background: #222D3B;
  overflow: hidden !important;
}

.hamburger-container {
  line-height: 46px;
  height: 100%;
  float: left;
  cursor: pointer;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}

</style>

