<template>
    <div class="page-body" style="margin: 30px auto 0;padding: 0 36px 0 24px">
       <table cellspacing=0 cellpadding=0>
           <thead>
                 <tr style="background:#047bcf">
                  <th>序号</th>
                  <th>材料名称</th>
                  <th>页数</th>
                  <th>操作</th>
                  <th>移动</th>
                </tr>
                </thead>
      <draggable v-model="tablelist" element="tbody" :move="getdata" @update="datadragEnd">
        <tr v-for="(item,index) in tablelist" :key="index" style="text-align: center">
          <td>{{ index + 1 }}</td>
          <td>{{ item.wp_wordname }}</td>
          <td>{{ item.wp_pdfpage }}</td>
          <td>
            <el-button type="text" @click="onDelete(index)">删除</el-button>
          </td>
          <td><i class="el-icon-sort"></i></td>
        </tr>
      </draggable>
    </table>
  </div>
</template>
<script>
import draggable from "vuedraggable";

export default {
  name: "MoveTable",
  data() {
    return {
      tablelist: [
        {
          wp_wordname: 'one',
          wp_pdfpage: 1
        },
        {
          wp_wordname: 'two',
          wp_pdfpage: 2
        },
        {
          wp_wordname: 'three',
          wp_pdfpage: 3
        },
        {
          wp_wordname: 'four',
          wp_pdfpage: 4
        },
        {
          wp_wordname: 'five',
          wp_pdfpage: 5
        }
      ],
    }
  },
  mounted() {

  },


  methods: {
    //拖动中与拖动结束
    getdata(evt) {
      // console.log(evt.draggedContext.element.id);
    },
    datadragEnd(evt) {
      /*   console.log("拖动前的索引 :" + evt.oldIndex);
        console.log("拖动后的索引 :" + evt.newIndex);
        console.log(this.tags); */
    },

    //假删除
    onDelete(index) {
      this.tablelist.splice(index, 1)
      console.log(this.tablelist)

    },


  },
  components: {
    draggable,

  }
}

</script>
<style scoped>

</style>