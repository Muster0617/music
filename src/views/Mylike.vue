<template>
<div class="main test-1" >
  <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size:25px;margin-top:5px;">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>我的收藏</el-breadcrumb-item>
</el-breadcrumb>
  <div class="demo-image" style="margin-top:6px;width:96%;">
  <div class="block" >
    <el-image
      style="width: 100%; height: 100%"
      :src="url"
      ></el-image>
  </div>
</div>
     <div class='caption'> 
    <el-row>
  <el-col :span="6"><div class="grid-content bg-purple">序号</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light">歌曲</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">歌手</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
<el-divider></el-divider>

</div>
<div class="list" v-for="(song,index) in mylike" :key="index">
  
  <el-row class="col">
  <el-col :span="6" ><div class="grid-content bg-purple">{{index+1}}</div></el-col>
  <el-col :span="6" ><div class="grid-content bg-purple-light" @click="listen(song.music_name)">{{song.music_name}}</div></el-col>
  <el-col :span="6" ><div class="grid-content bg-purple">{{song.singer}}</div></el-col>
  <el-col :span="6" ><div class="grid-content bg-purple-light"><el-button type="danger" @click.native="remove(index)" plain>删除</el-button></div></el-col>
</el-row>
<el-divider></el-divider>
</div>
	  </div>
           
</template>
<script>
import { mapState } from 'vuex'
export default {
   data() {
      return {
        url: 'https://p1.music.126.net/07UA8DTsrbCBzzqbqYfshg==/109951165903070335.jpg?imageView&quality=89'
      }
    },
	computed:{
		...mapState(['mylike'])

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
    remove(index){
       this.$store.dispatch('remove',index)
    }
  },
	
}
</script>
<style>
.main{
	margin-left: auto;
	width: 75%;
	overflow: auto;
  height: 630px;

}
.test-1::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
  }
  .test-1::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  background   : #535353;
  }
  .test-1::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background   : #ededed;
  }
.list{
  color:#303133;
  margin: 0;
  font-size: 18px;
    font-weight:bold;

} 

.col{
     height: 40px;
    display: flex;
    align-items: center;

}
           
</style>