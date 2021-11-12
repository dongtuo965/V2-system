<!--累加多行文本框-->
<template>
  <div>
    <el-card class="box-card" style="width: 100%;" v-for="zhenghang in zhengge">
      <el-row>
        <el-col :span="8" v-for="item in zhenghang" style="margin-bottom: 10px;">
          <el-card class="box-card">
            <div>
              <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="活动名称" prop="name">
                  <el-input v-model="item.directname" placeholder="请输入内容" label="指令名称"></el-input>
                </el-form-item>
                <el-form-item label="活动名称" prop="name">
                  <el-input v-model="item.directdes" placeholder="请输入内容" label="指令描述"></el-input>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-button type="primary" class="btn" @click="adddirect(zhenghang)">增加</el-button>
      <el-button type="primary" class="btn" @click.prevent="deldirect(zhenghang)">删除</el-button>
    </el-card>
    <el-button type="primary" class="btn" @click="adddirectlist">添加</el-button>
    <el-button type="primary" class="btn" @click.prevent="deldirectlist(zhengge)">删除</el-button>

  </div>
</template>

<script>

export default {
  name: "ManyRowColLS",

  data() {
    return {
      zhengge: [[{
        directname: '',
        directdes: '',
      }]],
      zhenghang: [{
        directname: '',
        directdes: '',
      }],
      // directname:'',
      // directdes:'',
    }
  },
  methods: {
    adddirect(zhenghang) {
      zhenghang.push({
        directname: '',
        directdes: '',
      })

    },
    deldirect(zhenghang) {
      zhenghang.splice(zhenghang, 1)

    },
    adddirectlist() {
      let newhang = {
        zhilingming: "",
        xunhuancishu: "",
      }
      console.log("in  zhengge ")
      let newarr = []
      newarr.push(newhang)
      this.zhengge.push(newarr)
    },
    deldirectlist(zhengge) {
      zhengge.splice(zhengge, 1)
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
