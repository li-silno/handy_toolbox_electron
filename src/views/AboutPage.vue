<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="container">
    <div class="title">关 于</div>
    <el-divider />
  </div>
</template>

<style lang="less" scoped>
.container {
  box-sizing: border-box;
  padding: 20px;
}
.title {
  font-size: @titleFontSize;
}
</style>
