<!--登录页-->
<template>
  <div id="outside">
    <vue-particles
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
    >
    </vue-particles>
    <el-card class="conta">
      <div slot="header" class="clearfix">
        <span>欢迎登录</span>
      </div>
      <el-form :model="logininfo" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="account">
          <el-input v-model.trim="logininfo.account" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model.trim="logininfo.password" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('ruleForm')" @keyup.enter="keyDown">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      logininfo: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          {required: true, message: '请输入账号', trigger: 'blur'},
          {min: 4, max: 10, message: '长度在 4 到 10 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 4, max: 10, message: '长度在 4 到 10 个字符', trigger: 'blur'}
        ],
      }
    }
  },
  mounted() {
    window.addEventListener('keydown', this.keyDown);
  },
  destroyed() {
    window.removeEventListener('keydown', this.keyDown, false);
  },
  methods: {
    keyDown(e) {
      //如果是回车则执行登录方法
      if (e.keyCode == 13) {
        //需要执行的登录方法
        this.login();
      }
    },
    login() {
      if (this.logininfo.account == 'admin' && this.logininfo.password == '123456') {
        this.$message.success('登录成功')
        this.$router.push('/home')
      }
    }
  }
}
</script>

<style scoped>
.conta {
  width: 30rem;
  position: absolute;
  top: 38%;
  left: 80%;
  transform: translate(-50%, -50%);
}

#outside {
}

.lizi {
  width: 100%;
  height: 100%;
  background: url(../../assets/background.jpeg) no-repeat center center;
  background-size: cover;
  overflow: hidden;
}
</style>
