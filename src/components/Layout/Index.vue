<template>
  <div class="layout">
    <el-container>
      <el-header >
        <!--                <Hamburger class="hamburger-container" @toggleClick="toggleSideBar"/>-->
        <div style="float: left">商品后台管理系统</div>
        语言切换
        <el-button type="danger" style="float: right;margin:10px" @click="gologin">退出</el-button>
        <el-button type="success" style="float: right;margin:10px " @click="fillscreen">全屏---{{ $t('lang.firmNews') }}</el-button>
        <el-select v-model="languageVal" placeholder="请选择语言" @change="timezonechange" style="line-height: 70px">
          <el-option
            v-for="item in language"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>


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
                <span slot="title">{{$t('lang.userManagers')}}</span>
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
    return {
      language: [{
        value: '1',
        label: '中文'
      }, {
        value: '2',
        label: '英文'
      }],
      languageVal:'1'

    }
  },
  components: {
    ScreenFull,
    Hamburger,
    Breadcrumb
  },
  methods: {
    timezonechange(type){
        if (type === "1" ) {
          this.$i18n.locale = 'zh'
        } else if (type === "2") {
          this.$i18n.locale = 'en'
        }
    },
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
  //min-height: 400px;
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

</style>

