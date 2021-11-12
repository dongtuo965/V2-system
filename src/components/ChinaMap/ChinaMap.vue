<!--中国地图（新冠疫情分布图）-->
<template>
  <div class="hello">
    <!-- echarts 初始化 -->
    <div class="content" ref="mapbox"></div>
  </div>
</template>

<script>
// import '_echarts@5.2.1@echarts/map/js/china.js'
import 'echarts/map/js/china.js'
import jsonp from 'jsonp'

const option = {
  title: {
    text: "中国疫情地图",
    link: 'https://www.baidu.com',
    // subtext: "shinuia",
    sublink: "https://www.baidu.com"
  },
  series: [{
    name: '确诊人数',
    type: 'map',
    map: 'china',
    label: {
      show: true,
      color: '#ffffff',    // 控制地区名的字体颜色---黑色，省名字
      fontSize: 10
    },
    itemStyle: {
      areaColor: '#eee'   // 地图板块的颜色和边框---灰色，各个省界线
    },
    roam: true,
    zoom: 1.2,            //控制地图的放大和缩小
    emphasis: {           // 控制鼠标滑过之后的背景色和字体颜色--白色
      label: {
        color: '#fff',
        fontSize: 12,
      },
      itemStyle: {
        areaColor: '#83b5e7'        //滑动到哪个地区就显示蓝色
      }
    },
    // data:[{"name":"湖北","value":67799},{"name":"广东","value":1364},{"name":"河南","value":1273},{"name":"浙江","value":1232},{"name":"湖南","value":1018},{"name":"安徽","value":990},{"name":"江西","value":935},{"name":"山东","value":761},{"name":"江苏","value":631},{"name":"重庆","value":576},{"name":"四川","value":539},{"name":"黑龙江","value":482},{"name":"北京","value":456},{"name":"上海","value":358},{"name":"河北","value":318},{"name":"福建","value":296},{"name":"广西","value":253},{"name":"陕西","value":246},{"name":"云南","value":176},{"name":"海南","value":168},{"name":"香港","value":157},{"name":"贵州","value":146},{"name":"天津","value":136},{"name":"山西","value":133},{"name":"甘肃","value":133},{"name":"辽宁","value":125},{"name":"吉林","value":93},{"name":"台湾","value":77},{"name":"新疆","value":76},{"name":"内蒙古","value":75},{"name":"宁夏","value":75},{"name":"青海","value":18},{"name":"澳门","value":12},{"name":"西藏","value":1}]


    data: []              // 用来展示后台给的数据的 {name:xx,value:xxx}
  }],
  // {name: xxx, value: xxx}
  visualMap: [{
    type: 'piecewise',
    show: true,
    pieces: [
      {min: 10000},
      {min: 1000, max: 9999},
      {min: 100, max: 999},
      {min: 10, max: 99},
      {min: 1, max: 9}
    ],
    // align: 'right'
    // showLabel: false
    inRange: {
      symbol: 'rect',
      color: [
        '#ffc0b1',
        '#9c0505',
      ]
    },
    itemWidth: 20
  }],
  tooltip: {
    trigger: 'item'
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      dataView: {readOnly: false},
      restore: {},
      saveAsImage: {}
    }
  }
}
export default {
  name: 'ChinaMap',
  data() {
    return {
      // chartData:[{"name":"湖北","value":67799},{"name":"广东","value":1364},{"name":"河南","value":1273},{"name":"浙江","value":1232},{"name":"湖南","value":1018},{"name":"安徽","value":990},{"name":"江西","value":935},{"name":"山东","value":761},{"name":"江苏","value":631},{"name":"重庆","value":576},{"name":"四川","value":539},{"name":"黑龙江","value":482},{"name":"北京","value":456},{"name":"上海","value":358},{"name":"河北","value":318},{"name":"福建","value":296},{"name":"广西","value":253},{"name":"陕西","value":246},{"name":"云南","value":176},{"name":"海南","value":168},{"name":"香港","value":157},{"name":"贵州","value":146},{"name":"天津","value":136},{"name":"山西","value":133},{"name":"甘肃","value":133},{"name":"辽宁","value":125},{"name":"吉林","value":93},{"name":"台湾","value":77},{"name":"新疆","value":76},{"name":"内蒙古","value":75},{"name":"宁夏","value":75},{"name":"青海","value":18},{"name":"澳门","value":12},{"name":"西藏","value":1}]

    }
  },
  mounted() {
    this.getData()
    this.mapcharts = this.$echarts.init(this.$refs.mapbox);
    this.mapcharts.setOption(option)
  },
  methods: {
    getData() {
      jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427', {}, (err, data) => {
        if (!err) {
          // eslint-disable-next-line no-console
          console.log(data)
          let list = data.data.list.map(item => (
              // eslint-disable-next-line no-console
              // console.log(item),
              {
                name: item.name,
                value: item.value,
                susNum: item.susNum
              }))
          option.series[0].data = list
          this.mapcharts.setOption(option)
        }
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  width: 1500px;
  height: 800px;
  /*width: 100%;*/
  /*height: 100%;*/
  background-color: rgba(0, 0, 0, 0.3);
}
</style>

