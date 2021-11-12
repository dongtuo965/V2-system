<!--vue点击图片预览放大（可旋转、翻转、缩放、上下切换、键盘操作）-->
<!--https://blog.csdn.net/guozhangqiang/article/details/82251893-->
<!--main.js里需要配置-->
<template>
  <div>
    <viewer :images="images" style="height: 400px;">
      <img v-for="item in images" :src="item.src" :key="item.index" height="100" style="margin: 0 10px">
    </viewer>
  </div>

</template>

<script>
export default {
  name: "PictureChange",
  data() {
    return {
      images: [
        {
          src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3272199364,3404297250&fm=26&gp=0.jpg',
          index: 1
        },
        {
          src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3267295166,2381808815&fm=26&gp=0.jpg',
          index: 2
        },
        {
          src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3429654663,2972188411&fm=26&gp=0.jpg',
          index: 3
        },
        {
          src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3597323878,2962972725&fm=26&gp=0.jpg',
          index: 4
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
