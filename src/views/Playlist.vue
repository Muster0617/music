<template>
<div class="main test-1">
  <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size:25px;margin-top:5px;">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item v-if="musics[0]">{{musics[0].singer}}</el-breadcrumb-item>
</el-breadcrumb>
   <div class="demo-image" style="margin-top:6px;width:96%;">
  <div class="block" >
    <el-image v-if="musics[0]"
      style="width: 100%; height: 100%"
      :src="musics[0].img_url"
      ></el-image>
  </div>
</div>
   <div class='caption'> 
    <el-row >
  <el-col :span="6"><div class="grid-content bg-purple">序号</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light">歌曲</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">歌手</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
<el-divider></el-divider>

</div>
	 
<div class="list" v-for="(song,index) in musics" :key="index" >
  
  <el-row class="col">
  <el-col :span="6"><div class="grid-content bg-purple">{{index+1}}</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light" @click="listen(song.music_name)">{{song.music_name}}</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">{{song.singer}}</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"><el-button type="primary" @click.native="collect(song.music_name)" plain>收藏</el-button></div></el-col>
</el-row>
<el-divider style="margin: 10px 0;height: 3px;"></el-divider>
</div>
	  </div>
           
</template>
<script>
import { mapState } from 'vuex'
import Rotation from '../components/Rotation'

Rotation
export default {
	computed:{
		...mapState(['musics','mylike'])
	},
  components:{
      Rotation
  },
   watch:{
	  	mylike:{
			deep:true,
			handler(value){
              window.localStorage.setItem('mylike',JSON.stringify(value))
			}
		}

	},
	 methods: {
    listen(name){
       this.$store.dispatch('listen',name)
    },     
    collect(name){
      
      if(!this.mylike.find(r => r.music_name === name))
      {
      this.$store.dispatch('collect',name)
      this.$message({
          showClose: true,
          message: name+'    '+'收藏成功',
          type: 'success'
        })

      }else{
        this.$message({
          showClose: true,
          message: '抱歉！您以收藏',
          type: 'error'
        })
      }
  }
   }
}
</script>
<style>
.caption{
    margin-top: 16px;
    font-weight:bold;
    font-size:25px;
    color:#CD5C5C;
}
.el-divider--horizontal {
    display: block;
    height: 2px;
    width: 100%;
    margin: 10px 0;
}
           
</style>