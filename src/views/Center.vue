<template>
  <div >
    <el-card     class="tab">
    <el-table
      :data="tableList"
      style="width: 100%;">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="年龄"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="score.shuXue"
        label="分数">
      </el-table-column>
    </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </el-card>
  </div>
</template>
<script>
  import axios from 'axios'
export default {
  name: "Center",
  data() {
    return {
tableList:[]
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData(){
      axios.get('http://localhost:8889/scoreList')
        .then( (response)=> {
         this.tableList = response.data
          console.log(this.tableList)
        })
        .catch( (error)=> {
          console.log(error);
        });
    },


  }
}
</script>

<style>
.tab{
  margin: 20px;
}
</style>
