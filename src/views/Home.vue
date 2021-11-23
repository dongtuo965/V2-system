<template>
  <div>

    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="查询城市">
        <el-input v-model="checkman" placeholder="请输入区域名称"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>


    </el-form>
    <ul>
      <li v-for="item in restule">
<!--        {{item}}-->
        {{item.date}}
        {{item.low}}
<!--        {{item.fengli}}-->
        {{item.fengli.substring(9,11)}}
      </li>
    </ul>

<!--    <el-card class="box-card">-->
<!--      <div slot="header" class="clearfix">-->
<!--        <span>原始图片</span>-->
<!--      </div>-->
<!--      <template v-for="(item,index) in imgarr">-->
<!--        <div class="text item" v-if="everyindex==index">-->
<!--          <img :src="imgarr[everyindex].url"  style="width:100%;height:100%"/>-->
<!--        </div>-->
<!--        <div  v-if="everyindex==index">-->
<!--          <el-button @click="contrastpass(item)">通过</el-button>-->
<!--          <el-button @click="contrastnopass(item)">不通过</el-button>-->
<!--        </div>-->

<!--      </template>-->
<!--    </el-card>-->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      formInline:{},
      restule:[],
      checkman:'',
      everyindex: 0,
      imgarr: [{
        url: 'https://img0.baidu.com/it/u=1659180627,667124450&fm=26&fmt=auto'
      },
        {
          url: 'https://img0.baidu.com/it/u=3436810468,4123553368&fm=26&fmt=auto'
        },
        {
          url: 'https://img1.baidu.com/it/u=379134053,3648781239&fm=26&fmt=auto'
        },
        {
          url: 'https://img0.baidu.com/it/u=1371113496,4161662645&fm=26&fmt=auto'
        }
      ]
    }
  },
  mounted() {},
  methods: {
    onSubmit() {
      axios.get('http://wthrcdn.etouch.cn/weather_mini?city=太原市',{}).then((res)=>{
        console.log(res)
        console.log(res.data.data.forecast)
          // this.restule = JSON.parse(JSON.stringify(res.data.data.forecast))
          this.restule = res.data.data.forecast
        console.log(this.restule)

      }).catch((err)=>{
        console.log(err)
      })

    },
    contrastpass(item){
      if(this.everyindex<this.imgarr.length-1){
        this.everyindex++
      }else if(this.everyindex==this.imgarr.length-1){
        this.$message.warning('已经是最后一张图了，可以退出了')
        return
      }
    },
    contrastnopass(item){
      if(this.everyindex<this.imgarr.length-1){
        this.everyindex++
      }else if(this.everyindex==this.imgarr.length-1){
        alert('已经是最后一张图了，可以退出了')
        return
      }
    }
  },
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
  position: absolute;
  top: 30%;
  left: 30%;
  transform: translate(-30%,-30%);

}
</style>
