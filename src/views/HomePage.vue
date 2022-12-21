<script setup>
import { ref } from "vue";
import FunModule from "/src/components/FunModule.vue";
import modulesConfig from "/config/modules.json";
</script>

<template>
  <div class="container">
    <div class="title">首 页</div>
    <el-divider />
    <div class="modules-box">
      <template v-for="(module_info, index) in modulesConfig" :key="index">
        <FunModule
          :mod_id="module_info.mod_id"
          :mod_name="module_info.mod_name"
          :mod_version="module_info.mod_version"
          :mod_icon="module_info.mod_icon"
        ></FunModule>
      </template>
    </div>
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
.modules-box {
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
}
</style>
