<template>
  <div class="login">
    <header class="login-logo">
      Vue el Admin
    </header>
    <el-form :model="loginForm">
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          v-model="loginForm.password"
          type="password"
          placeholder="Password"
          name="password"
          tabindex="2"
          autocomplete="on"
        />
      </el-form-item>
      <el-button type="primary" style="width:100%;">Login</el-button>
    </el-form>
    <footer class="login-footer">
      2019 Vue-el-admin@li_wan_bin
    </footer>
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(247, 247, 239);
  .login-logo{
    margin-top: 120px;
    margin-bottom: 50px;
  }
  .login-footer{
    position: absolute;
    bottom: 30px;
  }
}
</style>
