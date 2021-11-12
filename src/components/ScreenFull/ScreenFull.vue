<!--全屏显示切换-->

<template>
  <div>
    <el-button type="success" style="display:inline-block;float: right;margin: 0 10px" @click="fillscreen">全屏
    </el-button>
  </div>

</template>

<script>
import screenfull from "screenfull";

export default {
  name: "ScreenFull",
  data() {
    return {
      fullscreen: false
    }
  },
  methods: {
    //全屏显示（相当于F11）
    fillscreen() {
      // 如果不允许进入全屏，发出不允许提示
      if (!screenfull.enabled) {
        this.$message("您的浏览器不能全屏");
        return false;
      }
      screenfull.toggle();
    },
  }
}
</script>

<style scoped>

</style>
