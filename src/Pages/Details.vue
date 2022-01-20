<template>
  <div class="w=100 cover-photo" :style="{'background-image':coverPicUrl}">
    <div class="dark">
      <div class="block">
        <el-carousel trigger="click" height="80px" class="ticker w-25">
          <el-carousel-item v-for="item in 3" :key="item">
            <div class="avatar">
              <el-avatar :size="50" class="inline-block" src=""></el-avatar>
              <span class="inline-block content">{{ item }}</span>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
  <el-tabs v-model="activeName" type="card" @tab-click="tabSwitch" class="nav">
    <el-tab-pane
        v-for="(item,index) in navTabs"
        :key="index"
        :label="item"
        :name="item"
    />
  </el-tabs>
  <div class="container">
    <div class="float-left">
      <el-affix :offset="120">
        <div class="media-sidebar">
          <div class="w-100">
            <img :src="posterUrl" class="wh-inherit">
          </div>
          <div class="library br-4">
            <span class="entry-header relative white-gray">
              Add to Library
            </span>
            <el-row class="entry-status">
              <el-col v-for="item in mark" :key="item">
                <el-button :color="item.color" class="white mb-10 w-100">{{ item.type }}</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-affix>
    </div>
    <div class="media-container">
      <router-view/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import {LocationQueryValue, useRoute, useRouter} from 'vue-router'
import instance from "../api/axios";
const route = useRoute()
const router = useRouter()
const id = route.query.id
let details = ref<any>({})
let posterUrl = ref<string>('')
let coverPicUrl = ref<string>('')
const mark = ref<object[]>([
  {
    type: 'Completed',
    color: '#16a085'
  },
  {
    type: 'Want to Watch',
    color: '#2980b9'
  },
  {
    type: 'Started Watching',
    color: '#8e44ad'
  }
])
const navTabs = ref<string[]>(["synopsis", "episodes", "characters", "reactions", "franchise"])
const activeName = ref('synopsis')

const getDetails = async(id: string | LocationQueryValue[]) =>{
  await instance
      .get(`/anime/${id}`)
      .then(res=>{
        if(Object.keys(res.data.data.attributes).length!==0){
          sessionStorage.setItem('details',JSON.stringify(res.data.data.attributes))
        }else{
          console.log("未获取到详细信息")
        }
      })
  details.value=JSON.parse(sessionStorage.getItem('details') as string)
  posterUrl.value=details.value.posterImage.large
  coverPicUrl.value = `url(${details.value.coverImage.original})`
}
const tabSwitch = (route: any) => {
  router.push({name: route.props.label, query:{id: id}})
}
onMounted(() => {
  if (id) {
    getDetails(id)
  }
})
</script>
<style scoped>
@import '../assets/style/index.scss';

.cover-photo {
  height: 400px;
  background: no-repeat center;
  background-size: cover;
}

.dark {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.nav {
  padding-left: 350px;
  margin-left: auto;
  margin-right: auto;
}

.container {
  max-width: 720px;
  padding-left: 150px;
  padding-right: 15px;
  margin-right: auto;
  width: 100%;
}

.media-container {
  margin-left: 205px;
}

.media-sidebar {
  width: 195px;
  position: relative;
  top: -142px;
}

.library {
  margin-top: 20px;
  border: 1px solid #eaeaea;
  padding: 12px;
  position: relative;
}

.entry-header {
  top: -23px;
  padding: 0 10px;
}

.entry-status {
  margin-top: -18px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.block {
  margin-left: 330px;
  padding-top: 320px;
}
.content{
  max-width: 460px;
  font-size: 18px;
  font-weight: 600;
  color: #FFF;
}
.ticker {

}

.avatar {

}

</style>