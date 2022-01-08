<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
<el-menu :default-active="activeIndex"
         class="el-menu-demo bg-purple h-10"
         mode="horizontal"
         background-color="#40303F"
         text-color="#fff"
         @select="handleSelect">
  <el-sub-menu index="1">
    <template #title>查看</template>
    <el-menu-item>动漫</el-menu-item>
    <el-menu-item>漫画</el-menu-item>
  </el-sub-menu>
  <el-menu-item index="2">注册</el-menu-item>
  <el-menu-item index="3">登陆</el-menu-item>
</el-menu>
</template>

<style scoped>
@import '../assets/style/index.scss';

</style>
