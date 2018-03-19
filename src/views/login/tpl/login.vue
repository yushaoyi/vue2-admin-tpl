<template>
  <section class="login-page">
    <div class="login-container">
      <el-form :model="fm" :rules="rules" ref="loginForm" >
        <div class="text-center pt50 pb50">
          <img src="~assets/imgs/logo.png" class="login-logo"/>
          <div class="login-title">BOSS</div>
        </div>
        <div class="login-main">
          <div class="text-center w300 mauto">
            <el-form-item prop="account">
              <!--<el-input placeholder="请输入账号" prefixIcon="iconfont icon-phone color-orange font-19" @keyup.13.native="enterHandler($event, 'loginForm')" v-model="fm.account">-->
              <!--</el-input>-->
              <el-input placeholder="请输入账号(admin)" @keyup.13.native="enterHandler($event, 'loginForm')" v-model="fm.account">
                <template slot="prepend"><span><i class="iconfont icon-phone color-orange font-18"></i></span></template>
              </el-input>
            </el-form-item>
          </div>
          <div class="text-center w300 mauto">
            <el-form-item prop="password">
              <!--<el-input placeholder="请输入密码" prefixIcon="iconfont icon-password color-orange font-19" @keyup.13.native="enterHandler($event, 'loginForm')" type="password" v-model="fm.password">-->
              <!--</el-input>-->
              <el-input placeholder="请输入密码(123)" @keyup.13.native="enterHandler($event, 'loginForm')" type="password" v-model="fm.password">
                <template slot="prepend"><span><i class="iconfont icon-password color-orange font-18"></i></span></template>
              </el-input>
            </el-form-item>
          </div>
          <div class="w300 mauto text-center mt45">
            <el-button class="login-btn" :loading="isSubmit" @click="login('loginForm')">登&nbsp;&nbsp;录</el-button>
          </div>
        </div>
      </el-form>
    </div>
  </section>
</template>

<script src="../js/login.js"></script>
<style lang="scss">
  @import '../css/login.scss';
</style>
