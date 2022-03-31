<script setup lang="ts">
</script>

<template>
  <div class="homepage-container">
    <el-container :style="{ background: '#fff' }">
      <el-header class="header">
        <div class="page-title">
          <router-link to="/">Header</router-link>
        </div>
        <el-link :underline="false">
          <el-avatar :icon="UserFilled" />
        </el-link>
      </el-header>
      <el-main class="home-layout">
        <router-view></router-view>
      </el-main>
      <el-footer
        height="50px"
        style="text-align: center; background-color: skyblue; line-height: 50px;"
      >
        Copyright © 2022
        <el-link type="primary" href="https://filway.github.io/" target="_blank">@filway</el-link>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
  import { UserFilled } from '@element-plus/icons-vue'
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 50px;
  line-height: 64px;
  z-index: 50;
  box-shadow: 0 10px 15px rgb(0 0 0 / 10%);
  background-color: rgba(0, 0, 0, 0.5);
}
.page-title {
  color: #fff;
}
</style>