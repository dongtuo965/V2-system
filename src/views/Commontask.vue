<template>
  <div class="table-wrap">
    <div class="draggable">
      <h4>vue基于element table表格拖拽：</h4>
      <draggable v-model="tableData" element="tbody" :move="getmovedata" @update="datadragEnd">
      <el-table :data="tableData" border stripe row-key="id" align="left">
        <el-table-column
            prop="id"
            label="ID"
            width="180">
        </el-table-column>
        <el-table-column
            prop="userName"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="age"
            label="年龄">
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
<!--            <el-button-->
<!--                size="mini"-->
<!--                @click="handleEdit(scope.row)">编辑</el-button>-->
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row, scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      </draggable>
    </div>


  </div>
</template>
<script>
import Sortable from 'sortablejs'
import draggable from "vuedraggable"

import {getuserinfo} from "../request/api";

export default {
  components: {
    draggable,
  },
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.$nextTick(()=>{
             setTimeout(()=>{
               this.rowDrop()
               },100)
           })

    this.getdata()
  },
  methods: {
    getdata(){
getuserinfo().then(res=>{
  this.tableData = res.data
    console.log(res)
}).catch(err=>{
    console.log(err)
})
    },
    handleEdit(){

    },
    handleDelete(row, index){
      // console.log(item.id)
      this.tableData.splice(index,1)

    },
    getmovedata(evt) {
      // console.log(evt.draggedContext.element.id);
    },
    datadragEnd(evt) {
      /*   console.log("拖动前的索引 :" + evt.oldIndex);
        console.log("拖动后的索引 :" + evt.newIndex);
        console.log(this.tags); */
    },
// 行拖拽
    rowDrop() {
      // 此时找到的元素是要拖拽元素的父容器
      const tbody = document.querySelector('.draggable .el-table__body-wrapper tbody');
      const _this = this;
      Sortable.create(tbody, {
        //  指定父元素下可被拖拽的子元素
        draggable: ".draggable .el-table__row",
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0];
            _this.tableData.splice(currRow,0,newIndex);
            // _this.tableData.splice(newIndex,0,currRow);
        }
      })
    },

  }
}
</script>