<!--累加多行文本框-->
<template>
  <div>
    <el-card class="box-card" style="width: 100%;" v-for="onerowcontainer in bigcontainer">
      <el-row>
        <el-col :span="8" style="margin-bottom: 10px;" v-for="label in onerowcontainer">
          <el-card class="box-card">
            <div>
              <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="活动名称" prop="name">
                  <el-input v-model="label.directname" placeholder="请输入内容" label="指令名称"></el-input>
                </el-form-item>
                <el-form-item label="活动名称" prop="name">
                  <el-input v-model="label.directdes" placeholder="请输入内容" label="指令描述"></el-input>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-button type="primary" class="btn" @click="adddirect(onerowcontainer)">增加</el-button>
      <el-button type="primary" class="btn" @click.prevent="deldirect(onerowcontainer)">删除</el-button>
    </el-card>
    <el-button type="primary" class="btn" @click="adddirectlist(bigcontainer)">添加</el-button>
    <el-button type="primary" class="btn" @click.prevent="deldirectlist(bigcontainer)">删除</el-button>

  </div>
</template>

<script>

export default {
  name: "ManyRowColDT",

  data() {
    return {
      bigcontainer: [
        [{
          directname: '',
          directdes: ''
        }]
      ],
      onerowcontainer: [{
        directname: '',
        directdes: ''
      }]

    }
  },
  methods: {
    adddirect(onerowcontainer) {
      onerowcontainer.push({
        directname: '',
        directdes: '',
      })
    },
    deldirect(onerowcontainer) {

      onerowcontainer.pop(onerowcontainer, 1)
    },
    adddirectlist(bigcontainer) {
      console.log(bigcontainer)
      var arr = [{
        directname: '',
        directdes: '',
      }]
      bigcontainer.push(arr)

    },
    deldirectlist(bigcontainer) {
      bigcontainer.pop(bigcontainer, 1)
    }
  },
}
</script>


<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}

.btn {
  margin-top: 16px;
}
</style>
