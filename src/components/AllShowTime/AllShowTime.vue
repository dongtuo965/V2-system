<!--实时获取时间-->
<template>
  <div>
    <div ref="gettime" >

    </div>

  </div>
</template>

<script>
export default {
  name: 'AllShowTime',
  data() {
    return {
      timer: "",
    }
  },
  created() {
    this.timer = setInterval(this.getTime, 1000)
  },
  mounted() {

  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除定时器
    }
  },
  methods: {
    getTime() {
      let _this = this
      let yy = new Date().getFullYear()
      let mm = new Date().getMonth() + 1
      let dd = new Date().getDate()
      let hh = new Date().getHours()< 10 ? '0' + new Date().getHours() : new Date().getHours()
      let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()
      let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds()
      let Week = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
      let Weekday = new Date().getDay();
      _this.nowDateTime = yy + '年 ' + mm + '月' + dd + '日 ' + hh + ':' + mf + ':' + ss + "\t" + Week[Weekday]
      this.$refs.gettime.innerHTML = _this.nowDateTime
    },
  }
}
</script>
<
<style scoped></style>
