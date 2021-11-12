<template>
  <div>
    <el-upload
        class="upload-demo"
        drag
        :before-upload="beforeUpload"
        action="http://localhost:8849/fruits"
        multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "Upload",
  data() {
    return {}
  },
  methods: {
    beforeUpload(file) {
      console.log(file)
      const isJPG = /^image\/(jpeg|jpg|png)$/.test(file.type);
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 5MB!');
      }
      return isJPG && isLt2M;
    }
  }
}
</script>

<style scoped>

</style>