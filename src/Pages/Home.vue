<template>
  <el-row>
    <el-col :span="12" :offset="4">
      <el-row :gutter="20">
        <h1 class="ml-3 w-35 text-gray-600 inline-flex items-center">探索动漫</h1>
        <el-input
            v-model="searchInput"
            class="w-100 m-2"
            size="large"
            placeholder="您正在搜索什么？"
            :prefix-icon="Search"
        />
      </el-row>
    </el-col>
    <br>
    <el-col :span="12" :offset="4" v-for="(catItem,catIndex) in categories" :key="catIndex">
      <h3>{{ catItem.title }}</h3>
      <el-row>
        <el-col
            v-for="(numItem, numIndex) in 5"
            :key="numItem"
            :span="4"
            :offset="numIndex % 5 !== 0 ? 1 : 0"
            class="flex space-evenly"
        >
          <div class="relative card">
            <div class="absolute wh-inherit">
              <img
                  :src="posterUrl[catIndex*5+numIndex%5]"
                  class="image wh-inherit"
              />
            </div>
            <div class="op-0 op absolute flex justify-center wh-inherit">
              <router-link to="/details"></router-link>
              <div class="pd-5 float-bottom">
                <el-button type="text" class="white bg-green pd-8">加入资源库</el-button>
              </div>
            </div>
          </div>
        </el-col>
        <el-col>
          <div class="float-right">
            <a herf="#" class="red font-14">查看更多</a>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import {Search} from '@element-plus/icons-vue'
import endPoints from "../api";
import instance from "../api/axios";
import axios from "axios";


const searchInput = ref<string>('')
const categories = ref<any[]>([
  {
    title: '热门 本周',
    url: endPoints.weekTrend.url
  }, {
    title: '热门 正在播出',
    url: endPoints.onAir.url
  }, {
    title: '热门 即将推出',
    url: endPoints.upcoming.url
  }, {
    title: '最高评级',
    url: endPoints.rating.url
  }, {
    title: '最受欢迎',
    url: endPoints.popular.url
  }
])

let posterIds = ref<any[]>([])
let posterUrl = ref<any[]>([])
const base = 'https://media.kitsu.io/anime/poster_images/'
const getPoster = () => {
  axios.all(categories.value.map(category=>{
    instance.get(`${category.url}`)
    .then(res => {
      posterIds.value.push(res.data.data.map((item: { id: string }) => item.id))
      posterUrl.value= posterIds.value.flat().map((id: string) => `${base}${id}/medium.jpg`)
    })
  })).then()
}
onMounted(() => {
  getPoster()
})
</script>

<style scoped>
@import '../assets/style/index.scss';
.card{
  width: 100%;
  height: 173px;
  border-radius: 5px;
}

.image {
  z-index: 1;
  object-fit: fill;
  transition: opacity .4s linear;
}

.op {
  opacity: 0;
}

.op:hover {
  opacity: 1;
  background-image: linear-gradient(rgba(150,150,150,0),rgba(33,33,33,1));
}


</style>