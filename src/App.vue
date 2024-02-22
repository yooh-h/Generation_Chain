<script setup>
import AsideVue from './views/Aside.vue'
</script>

<template>
  <div id="app">
    <el-container style="height: 100%;">
      <el-aside width="250px" class="common-aside">
        <AsideVue/>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
    .common-aside{ 
        background-color: black;
        color: white;
    }
    #app {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  body{
    margin:0;
  }
  :deep(.el-step__title) {
    font-size: 14px;
    height: 28px;

 }
 :deep(.el-step__title) {
    font-size: 14px;
    height: 28px;

 }
</style>

