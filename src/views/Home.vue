<template>
<div class="main test-1">
  <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size:25px;margin-top:5px;">
  <el-breadcrumb-item>首页</el-breadcrumb-item>
</el-breadcrumb>
 <Rotation />
     <div class='caption'> 
     <el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark">猜你可能喜欢:</div></el-col>
</el-row>
 </div>
<el-divider></el-divider>

 <div class="singers">
     <el-row class="col2">
  <el-col :span="8" v-for="(singer,index) in singers" :key="index" @click.native="select(singer.singer)"><router-link to="/playlist" style="text-decoration:none">
  <div class="demo-image">
  <div class="block">
    <el-image
      style="width: 240px; height: 150px"
      :src="singer.img_url"
      ></el-image>
  </div>
</div>
<p class="list">{{singer.singer}}</p>
  </router-link>
<el-divider></el-divider>

  </el-col>
</el-row> 
</div>

 </div>

           
</template>
<script>
import Rotation from '../components/Rotation'
import {mapGetters} from 'vuex'

export default {
    components:{
      Rotation
  },
    computed:{
        ...mapGetters(['singers','sift_musics'])
	},
    methods: {
		select(name){
		this.$store.dispatch('select',name)
		}
    }
}
</script>
<style>
.singers{
    text-align: center;
}
.date{
  font-size:25px;
  text-align: end;
}

</style>