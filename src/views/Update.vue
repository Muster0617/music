<template>
<div class="main test-1">
  <el-breadcrumb separator-class="el-icon-arrow-right" style="font-size:25px;margin-top:5px;">
  <el-breadcrumb-item to="/home">首页</el-breadcrumb-item>
  <el-breadcrumb-item>上传歌手</el-breadcrumb-item>

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
  <el-col :span="24"><div class="grid-content bg-purple-dark">上传格式:[{</div></el-col>
  <el-col :span="24"><div class="grid-content bg-purple-dark">img_url:</div></el-col>
  <el-col :span="24"><div class="grid-content bg-purple-dark">music_name:</div></el-col>
  <el-col :span="24"><div class="grid-content bg-purple-dark">music_url:</div></el-col>
  <el-col :span="24"><div class="grid-content bg-purple-dark">singer:</div></el-col>
  <el-col :span="24"><div class="grid-content bg-purple-dark">}]</div></el-col>


</el-row>
 </div>
<el-divider></el-divider>
    <el-row>
  <el-col :span="24"><el-input v-model="put" placeholder="请输入内容" style="width:96%"></el-input></el-col>
</el-row><el-row>
  <el-col :span="24" style="margin-top:10px;"><el-button type="success" @click.native="upload(put)">上传</el-button></el-col>
</el-row>
</div>
           
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    data() {
      return {
        url: 'https://p1.music.126.net/K1nuImayZe4nhfPcfinvvQ==/109951165902890772.jpg?imageView&quality=89',
        put:''
      }
    },
    computed:{
        ...mapGetters(['singersArray'])
	},
  
    methods: {
		upload(put){
          const promise= new Promise((resolve,reject)=>{
             this.$store.dispatch('upload',put)
             resolve()
             reject()
            })
            promise.then(()=>{
                this.$message({
          showClose: true,
          message: '添加成功',
          type: 'success'
        })
            },()=>{
                this.$message({
          showClose: true,
          message: '添加失败，格式错误',
          type: 'error'
        })
            })
   this.put=''
    }
}
}
</script>
<style >
</style>