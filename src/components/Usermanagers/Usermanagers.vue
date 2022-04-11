<!--用户增删改查页面-->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>用户管理</h3>
      </div>
      <el-button type="primary" @click="adduserdialog = true" class="adduser">添加用户</el-button>
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
            prop="usertype"
            label="用户类型"
        >
        </el-table-column>
        <el-table-column
            prop="useraccount"
            label="用户账号"
        >
        </el-table-column>
        <el-table-column
            prop="userpassword"
            label="用户密码"
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
                @click="handleEdit(scope.row)">编辑
            </el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row.uuid)">删除
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
      <!--      添加用户弹框-->
      <el-dialog
          v-dialogpop-up
          title="添加用户"
          :visible.sync="adduserdialog"
          :close-on-click-modal="false"
          :before-close="handleClose"
          width="30%">
        <el-form :inline="true" :model="userinfo" class="demo-form-inline" :rules="rules" ref="userinfo">

          <el-form-item label="用户类型" prop="type">
            <el-select v-model="userinfo.type" placeholder="请选择用户类型" size="small" style="width: 100%">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="用户账号" prop="account">
            <el-input v-model="userinfo.account" placeholder="请输入内容" size="small"></el-input>
          </el-form-item>
          <el-form-item label="用户密码" prop="password">
            <el-input v-model="userinfo.password" placeholder="请输入内容" size="small"
                      type="password"></el-input>
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
          title="编辑用户"
          :visible.sync="edituserdialog"
          :close-on-click-modal="false"
          width="30%">
        <el-form :inline="true" :model="edituserinfo" class="demo-form-inline">

          <el-form-item label="用户类型">
            <el-select v-model="edituserinfo.type" placeholder="请选择用户类型" size="small" style="width: 100%">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="用户账号">
            <el-input v-model="edituserinfo.account" placeholder="请输入内容" size="small"></el-input>
          </el-form-item>
          <el-form-item label="用户密码" prop="password">
            <el-input v-model="edituserinfo.password" placeholder="请输入内容" size="small"
                      type="password"></el-input>
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
export default {
  name: "Usermanagers",
  data() {
    return {
      adduserdialog: false,
      edituserdialog: false,
      delmanyarr: [],
      tableData: [{
        userpassword: 123456,
        userdate: '2021-09-17',
        useraccount: 'admin',
        usertype: '管理员'
      }],
      total: 0,
      currentPage: 1,
      tiaoshu: 10,
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
      rules: {
        type: [
          {required: true, message: '请选择用户类型', trigger: 'change'}
        ],
        account: [
          {required: true, message: '请输入用户账号', trigger: 'blur'},
        ],
        createtime: [
          {required: true, message: '请输入创建时间', trigger: 'blur'},
        ],
        password: [
          {required: true, message: '请输入用户密码', trigger: 'blur'},
        ],
      },
      edituserinfo: {
        type: '',
        account: '',
        password: '',
        createtime: '',
      },
      userinfo: {
        type: '',
        account: '',
        password: '',
        createtime: '',
      }
    }
  },
  methods: {
    // 批量删除
    deleteinbatches() {
      // var ids= this.multipleSelection.map(item => item.id).join()//获取所有选中行的id组成的字符串，以逗号分隔
      // console.log(ids)
      this.$confirm('此操作将永久删除该文件及其子文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message.success('删除成功')

      })
    },
    // 将选中的表格内容放入数组中
    handleSelectionChange(val) {
      this.delmanyarr = val;
      console.log(this.delmanyarr)
    },
    // 编辑用户
    handleEdit() {
      this.edituserdialog = true
    },
    // 删除用户
    handleDelete() {
      this.$confirm('是否确认要删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
          .then(async () => {
            // await delconfs({uuid: this.conf.id});
            // this.getinfo()
            this.$message.success('删除成功')
          }).catch((err) => {
        console.log(err)
      })
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
    //添加用户弹框确定按钮
    adduser(userinfo) {
      console.log(userinfo)
      this.$refs.userinfo.validate((valid) => {
        if (valid) {

          this.adduserdialog = false
          this.$message.success('用户添加成功')
          this.userinfo = {}
        }
      })
    },
    //编辑用户弹框确定按钮
    edituser() {
      this.edituserdialog = false
      this.edituserinfo = {}
    }

  }
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
