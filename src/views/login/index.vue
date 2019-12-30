<template>
  <div id="login" class="user-layout-wrapper">
    <div class="container">
      <!-- header -->
      <div class="top">
        <div class="header">
          <a href="/">
            <img src="~@/assets/logo.svg" class="logo" alt="logo">
            <span class="title">Vue Cat admin</span>
          </a>
        </div>
        <div class="desc">
          Vue Cat admin 是一个后台管理基础模板
        </div>
      </div>
      <!-- main -->
      <div class="login-container">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">
          <el-form-item prop="username">
            <el-input
              ref="username"
              v-model="loginForm.username"
              prefix-icon="el-icon-user"
              placeholder="用户名"
              name="username"
              type="text"
              tabindex="1"
              autocomplete="on"
              clearable
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              ref="password"
              v-model="loginForm.password"
              type="password"
              prefix-icon="el-icon-lock"
              placeholder="密码"
              name="password"
              tabindex="2"
              autocomplete="on"
              show-password
              @keyup.native="checkCapslock"
              @blur="capsTooltip = false"
              @keyup.enter.native="handleLogin"
            />
          </el-form-item>
          <el-button :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleLogin">登录</el-button>
        </el-form>
      </div>
      <!-- footer -->
      <div class="footer">
        <div class="copyright">
          Copyright &copy; 2019 咻咻咻 . 技术组出品
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { validUsername } from '@/utils/validate'
import { timeFix } from '@/utils'
export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能少于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      capsTooltip: false,
      loading: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions(['Login', 'Logout']),
    checkCapslock({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        if (shiftKey && (key >= 'a' && key <= 'z') || !shiftKey && (key >= 'A' && key <= 'Z')) {
          this.capsTooltip = true
        } else {
          this.capsTooltip = false
        }
      }
      if (key === 'CapsLock' && this.capsTooltip === true) {
        this.capsTooltip = false
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          // 登录
          this.Login(this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/' })
              this.$notify({
                title: '登录成功',
                message: `${timeFix()}，欢迎回来`,
                type: 'success'
              })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    },
    handleLogout() {
      this.Logout().then(() => {
        this.$message.success('已注销登录')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#login.user-layout-wrapper {
  width: 100%;
  height: 100%;
  .container {
    box-sizing: border-box;
    width: 100%;
    min-height: 100%;
    background: #f0f2f5 url(~@/assets/background.svg) no-repeat 50%;
    background-size: 100%;
    padding: 100px 0 144px;
    position: relative;
    overflow: hidden;
    a {
      text-decoration: none;
    }
    .top {
      text-align: center;
      .header {
        height: 44px;
        line-height: 44px;
        .badge {
          position: absolute;
          display: inline-block;
          line-height: 1;
          vertical-align: middle;
          margin-left: -12px;
          margin-top: -10px;
          opacity: 0.8;
        }
        .logo {
          height: 44px;
          vertical-align: top;
          margin-right: 16px;
          border-style: none;
        }
        .title {
          font-size: 33px;
          color: rgba(0, 0, 0, .85);
          font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
          font-weight: 600;
          position: relative;
          top: 2px;
        }
      }
      .desc {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
        margin-top: 12px;
        margin-bottom: 40px;
      }
    }
    .footer {
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 0 16px;
      margin: 48px 0 24px;
      text-align: center;
      .copyright {
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
      }
    }
  }
}

.login-container {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 500px;
    max-width: 80%;
    padding: 60px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
}
</style>
