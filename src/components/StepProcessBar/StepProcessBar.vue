<!--步骤条-->
<template>
  <div>
    <el-progress :text-inside="true" :stroke-width="24" :percentage="num" status="success"></el-progress>
    <el-steps :active="active" finish-status="success">
      <el-step v-for="step in steplist" :title="step"></el-step>
    </el-steps>
    <el-button style="margin-top: 12px;" @click="next" v-if="flag">下一步</el-button>
  </div>
</template>
<script>
export default {
  name: "StepProcessBar",
  data() {
    return {
      active: 0,
      flag: true,
      steplist: ['步骤 1', '步骤 2', '步骤 3', '步骤 4'],
    }
  },
  mounted() {
  },
  computed: {
    num() {
      return this.active / this.steplist.length * 100
    }
  },
  methods: {
    next() {
      if (this.active++ >= this.steplist.length) {
        this.$confirm('任务已完成')
            .then(res => {
              this.flag = false
            })
            .catch(err => {
              console.log(err)
            });


      }

    }
  }
}
</script>

<style scoped>

</style>
