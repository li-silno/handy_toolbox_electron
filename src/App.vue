<script setup>
import { reactive, ref } from "vue";
let appWidth = ref;
</script>

<template>
  <el-row id="page">
    <el-col :span="6" id="left-navigation">
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
    </el-col>
    <el-col :span="18" id="right-content">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<style lang="less" scoped>
#page {
  // width: window.innerWidth;
  height: 100%;
}

#left-navigation {
  background-color: red;
  height: 100%;
}

#right-content {
  background-color: orange;
  height: 100%;
}
</style>
