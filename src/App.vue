<template>
  <div id="app">
    <router-view></router-view>
  </div>

</template>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html {
  width: 100%;
  height: 100%;

  body {
    width: 100%;
    height: 100%;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

/*数字文本框末尾去除加减*/
.clear-number-input.el-input::-webkit-outer-spin-button,
.clear-number-input.el-input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none !important;
}

.clear-number-input.el-input input[type="number"]::-webkit-outer-spin-button,
.clear-number-input.el-input input[type="number"]::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none !important;
}

.clear-number-input.el-input {
  -moz-appearance: textfield;
}

.clear-number-input.el-input input[type="number"] {
  -moz-appearance: textfield;
}


</style>
<script>
import Nav from "./components/Home/Nav";
import Sidbar from "./components/Home/Sidbar";
import Concent from "./components/Home/Concent";

export default {
  components: {
    Concent,
    Sidbar, Nav
  }
}
</script>
