<!--设备增删改查页面-->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>设备管理</h3>
      </div>
      <el-button type="primary" @click="adduserdialog = true" class="adduser">添加设备</el-button>
      <el-button @click="deleteinbatches(delmanyarr)" :disabled="this.delmanyarr.length === 0"> 批量删除</el-button>
      <el-table
        :data="tableData"
        height="600"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange"
        style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="name"
          label="设备名称"
        >
        </el-table-column>

        <el-table-column
          prop="userdate"
          label="创建时间"
        >
        </el-table-column>
        <el-table-column label="操作" prop="uuid">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope)">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="setpage"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="tiaoshu"
        layout="total,sizes, prev, pager, next"
        :total="total">
      </el-pagination>
      <!--      添加设备弹框-->
      <el-dialog
        v-dialogpop-up
        title="添加设备"
        :visible.sync="adduserdialog"
        :close-on-click-modal="false"
        :before-close="handleClose"
        width="30%">
        <el-form :inline="true" :model="userinfo" class="demo-form-inline" :rules="rules" ref="userinfo">

          <el-form-item label="设备类型" prop="type">
            <el-select v-model="userinfo.type" placeholder="请选择设备类型" size="small" style="width: 100%">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="创建时间" prop="createtime">
            <el-input v-model="userinfo.createtime" placeholder="请输入内容" size="small"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button @click="adduserdialog = false,userinfo={}">取 消</el-button>
    <el-button type="primary" @click="adduser(userinfo)">确 定</el-button>
  </span>
      </el-dialog>
      <!--      编辑用户弹框-->
      <el-dialog
        v-dialogpop-up
        title="编辑设备"
        :visible.sync="edituserdialog"
        :close-on-click-modal="false"
        width="30%">
        <el-form :inline="true" :model="edituserinfo" class="demo-form-inline">

          <el-form-item label="设备类型">
            <el-select v-model="edituserinfo.type" placeholder="请选择设备类型" size="small" style="width: 100%">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="创建时间" prop="num">
            <el-input v-model="edituserinfo.createtime" placeholder="请输入内容" size="small"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button @click="edituserdialog = false,edituserinfo={}">取 消</el-button>
    <el-button type="primary" @click="edituser">确 定</el-button>
  </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
  import { getshebei } from '@/request/api.js'
  export default {
    name: "FacilityManager",
    data() {
      return {
        adduserdialog: false,
        edituserdialog: false,
        delmanyarr: [],
        tableData: [{
          name: "显示屏",
          userdate: "2022-4-16"
        },
          {
            name: "键盘",
            userdate: "2022-4-18"
          },
          {
            name: "CPU",
            userdate: "2022-4-18"
          }
        ],
        options: [{
          value: '1',
          label: '显示屏'
        }, {
          value: '2',
          label: '显卡'
        }],
        total: 0,
        currentPage: 1,
        tiaoshu: 10,
        rules: {
          type: [
            {required: true, message: '请选择设备类型', trigger: 'change'}
          ],
          createtime: [
            {required: true, message: '请输入创建时间', trigger: 'blur'},
          ]
        },
        edituserinfo: {
          type: '',
          createtime: '',
        },
        userinfo: {
          type: '',
          createtime: '',
        }
      }
    },
    methods: {
      initfun() {
        getshebei().then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      },

      // 批量删除
      deleteinbatches(id) {
        console.log(id)
        // var ids= this.multipleSelection.map(item => item.id).join()//获取所有选中行的id组成的字符串，以逗号分隔
        // console.log(ids)
        this.$confirm('此操作将永久删除该文件及其子文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(id, id.length)
          this.$message.success('删除成功')

        })
      },
      // 删除用户
      handleDelete(scope) {
        console.log(scope)
        this.$confirm('是否确认要删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(async () => {
            this.tableData.splice(scope.$index, 1)
            // await delconfs({uuid: this.conf.id});
            // this.getinfo()
            this.$message.success('删除成功')
          }).catch((err) => {
          console.log(err)
        })
      },
      // 将选中的表格内容放入数组中
      handleSelectionChange(val) {
        this.delmanyarr = val;
        console.log(this.delmanyarr)
      },
      // 编辑设备
      handleEdit(scope) {
        this.edituserinfo.type = scope.row.name
        this.edituserinfo.createtime = scope.row.userdate
        this.edituserdialog = true
      },

      //控制每页显示多少条
      handleSizeChange(val) {
        this.tiaoshu = val
        console.log(`每页 ${val} 条`);
      },
      // 切换页数
      handleCurrentChange(val) {
        this.currentPage = val

        console.log(`当前页: ${val}`);
      },
      // 点弹框X时要做的事情
      handleClose() {
        this.adduserdialog = false
        this.userinfo = {}
      },
      //添加设备弹框确定按钮
      adduser(userinfo) {
        console.log(userinfo)
        this.$refs.userinfo.validate((valid) => {
          if (valid) {
            this.adduserdialog = false
            this.tableData.push({name: this.userinfo.type, userdate: this.userinfo.createtime})
            this.$message.success('用户添加成功')
            this.userinfo = {}
          }
        })
      },
      //编辑设备弹框确定按钮
      edituser() {
        // this.tableData[i].name = this.edituserinfo.type
        // this.tableData[i].userdate = this.edituserinfo.createtime
        this.edituserdialog = false
      }
    },
    mounted() {
      this.initfun()
    },
  }
</script>
<style scoped>
  .adduser {
    margin-bottom: 10px;
  }

  /deep/ .el-form--inline .el-form-item {
    width: 100%;
  }

  /deep/ .el-form--inline .el-form-item__content {
    width: 80%;
  }

  .setpage {
    margin: 10px 0;
    float: right;
  }
</style>
<style>
  body .el-table::before {
    z-index: inherit;
    height: 0;
  }
</style>
