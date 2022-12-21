<script setup>
import path from "path";
import { ref, shallowRef } from "vue";

// LOGO
const appImgUrl = "Handy Toolbox.png";
// 路由
const routers = [
  {
    to: "/home",
    icon: "src/assets/images/home.png",
    name: "首页",
  },
  {
    to: "/setting",
    icon: "src/assets/images/setting.png",
    name: "首选项",
  },
  {
    to: "/about",
    icon: "src/assets/images/about.png",
    name: "关于",
  },
];

// 点击关闭窗口
const handleCloseWindow = () => {
  console.log("close window");
  window.electronAPI.callWindowCtl("close");
};
</script>

<template>
  <!-- 页面主体 -->
  <el-row id="page">
    <!-- 左侧路由区域 -->
    <el-col :span="2" id="left-router">
      <!-- LOGO -->
      <div class="logo-area">
        <img class="logo" :src="appImgUrl" />
      </div>
      <!-- Router -->
      <div class="router-area">
        <template v-for="(item, index) in routers" :key="index">
          <router-link class="router-link" :to="item.to">
            <div class="link-item">
              <img class="link-icon" :src="item.icon" />
              <span class="link-name">{{ item.name }}</span>
            </div>
          </router-link>
        </template>
      </div>
      <!-- Footer -->
      <div class="footer-area">
        <div class="router-link" @click="handleCloseWindow">
          <div class="link-item">
            <img class="link-icon" src="src/assets/images/close.png" />
          </div>
        </div>
      </div>
    </el-col>
    <!-- 右侧内容区域 -->
    <el-col :span="22" id="right-content">
      <div class="drag-area"></div>
      <router-view class="router-view"></router-view>
    </el-col>
  </el-row>
</template>

<style lang="less" scoped>
#page {
  width: @windowWidth;
  height: @windowHeight;
}

#left-router {
  display: flex;
  flex-direction: column;
  background-color: @left-nav;
  height: @windowHeight;
  .logo-area {
    width: @leftRouterWidth;
    height: $width;

    .logo {
      width: 100%;
    }
  }

  .router-area {
    width: @leftRouterWidth;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .footer-area {
    width: @leftRouterWidth;
    height: $width;
  }

  .router-link {
    position: relative;
    width: @leftRouterWidth;
    height: $width;
    display: flex;
    justify-content: center;
    align-items: center;

    .link-item {
      width: 56px;
      height: 56px;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all 0.2s;

      .link-icon {
        width: 28px;
        height: 28px;
      }

      .link-name {
        font-size: 10px;
        position: absolute;
        bottom: 6px;
        left: 100% / 2;
        color: @main-text-font;
      }
    }
  }

  .router-link-active {
    .link-item {
      background-color: #fff;
    }

    .link-name {
      display: none;
    }

    &::after {
      display: block;
      content: " ";
      position: absolute;
      bottom: 10px;
      left: 25px;
      width: 20px;
      height: 3px;
      background-color: #007acc;
      border-radius: 2px;
      animation: indicator 0.2s;
      @keyframes indicator {
        0% {
          width: 0;
        }
        100% {
          width: 20px;
        }
      }
    }
  }
}

#right-content {
  background-color: @right-content;

  .drag-area {
    width: @dragAreaWidth;
    height: @dragAreaHeight;
    -webkit-app-region: drag;
  }
  .router-view {
    width: @routerViewWidth;
    height: @routerViewHeight;
    -webkit-app-region: no-drag;
  }
}
</style>
