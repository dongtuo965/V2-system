<!--面包屑-->
<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item,index) in lists" :key="item.path">
        <router-link :to="item.path">{{ item.meta.title }}</router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>

</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      lists: []
    }
  },
  // created() {
  //     console.log(this.$route.matched)
  //   this.lists = this.$route.matched  //获取路由内的全部信息
  // },
  mounted() {
    this.getbrand(this.$route.matched)
  },
  watch: {
    $route(to, from) {
      console.log(to)
      this.getbrand(to.matched)
      // this.lists = to.matched
    }
  },
  methods: {
    getbrand(matched) {
      if (matched.length && matched[1].name == 'home') {
        matched = [{path: '/home', name: 'home', meta: {title: '首页'}}]
      }
      this.lists = matched
    }
  }
}
</script>

<style scoped>
.breadcrumb {
  margin: 0 0 10px 0;

}
</style>
