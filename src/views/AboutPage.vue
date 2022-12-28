<script setup>
import { ref } from "vue";
import updateInfo from "/config/updateInfo.json";
</script>

<template>
  <div class="container">
    <div class="title">关 于</div>
    <el-divider />

    <!-- LOGO -->
    <div class="logo-area">
      <img class="logo" src="logo-about.png" />
    </div>

    <!-- updateInfo -->
    <div class="update-area">
      <el-timeline>
        <template v-for="(info, index) in updateInfo" :key="index">
          <el-timeline-item :timestamp="info.timestamp" placement="top">
            <el-card :header="info.version + '版本更新'" shadow="Never"> </el-card>
          </el-timeline-item>
        </template>
      </el-timeline>
    </div>

    <!-- {{ updateInfo }} -->
  </div>
</template>

<style lang="less" scoped>
.container {
  box-sizing: border-box;
  padding: 20px;
  // overflow: hidden;
}
.title {
  font-size: @titleFontSize;
}
.logo-area {
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .logo {
    width: 150px;
    height: 150px;
  }
}

.update-area {
  width: 100%;
  height: 350px;
  margin-top: 20px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
