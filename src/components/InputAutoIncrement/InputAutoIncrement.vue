<!--累加文本框-->
<template>
  <div>
    <el-card class="box-card" style="width: 100%;margin: 5px 0" v-for="item in allrow.everyrow">
      <el-row>
        <el-col :span="24">
          <el-form :model="allrow" ref="allrow" label-width="100px" class="demo-dynamic" :inline="true">
            <el-form-item label="配件类型">
              <el-select v-model="item.conftype" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="配件品牌">
              <el-select v-model="item.confbrand" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="配件型号">
              <el-select v-model="item.confmodel" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            数量
            <el-input-number v-model="item.confcount" :min="1" :max="100" label="内容"
                             style="margin-left: 10px"></el-input-number>
            <el-form-item label="单价">
              {{ item.confprice }}
            </el-form-item>
            <el-form-item label="单项总价">
              {{ item.confrowprice }}
            </el-form-item>

          </el-form>
        </el-col>
      </el-row>
    </el-card>
    <el-row style="margin: 5px 0; height: 45px;">
      <el-col style="margin: 5px 0;">
        <el-button type="primary" @click="addrow">新增一行</el-button>
        <el-button type="primary" @click.prevent="removerow(allrow.everyrow)">删除</el-button>
      </el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  name: "InputAutoIncrement",
  data() {
    return {
      allrow: {
        everyrow: [
          {
            conftype: '',
            confbrand: '',
            confmodel: '',
            confcount: '',
            confprice: '',
            confrowprice: '',
          },
        ]
      },
      options: [
        {
          value: '管理员',
          label: '管理员'
        },
        {
          value: '普通用户',
          label: '普通用户'
        }
      ],


    }
  },
  methods: {
    addrow() {
      this.allrow.everyrow.push(
          {
            conftype: '',
            confbrand: '',
            confmodel: '',
            confcount: '',
            confprice: '',
            confrowprice: '',
          }
      )

    },
    removerow(item) {
      console.log(item)
      this.allrow.everyrow.pop(item, 1)

    },
  }
}
</script>

<style scoped>

</style>
