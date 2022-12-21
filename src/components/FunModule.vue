<template>
  <div class="module-box" @click="handleModuleClick">
    <img :src="mod_icon" class="icon" />
    <span class="name">{{ mod_name }}</span>
    <span class="version">v {{ mod_version }}</span>
  </div>
</template>

<script setup>
import { toRefs, defineProps } from "vue";
// 使用父组件传递过来的值
const props = defineProps({
  mod_id: String,
  mod_name: String,
  mod_version: String,
  mod_icon: String,
});
const { mod_id, mod_name, mod_version, mod_icon } = toRefs(props);
// 点击模块，传递mod_id给主进程，主进程执行模块功能
const handleModuleClick = () => {
  console.log();
  let id = mod_id._object.mod_id;
  window.electronAPI.callModuleMethod(id);
};
</script>

<style lang="less" scoped>
.module-box {
  width: 100px;
  height: 100px;
  margin: 6px;
  background-color: #ffffff;
  box-shadow: 0 0 8px 4px #f5f5f5;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .icon {
    width: 60px;
    height: 60px;
  }
  .name {
    font-size: @mainFontSize;
    color: @main-text-font;
  }
  .version {
    font-size: @promptFontSize;
    color: @prompt-text-font;
    margin-top: 4px;
  }
}
</style>
