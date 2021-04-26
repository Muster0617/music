<template>
  <el-carousel indicator-position="outside" style="margin-top:6px;width:96%;">
    <el-carousel-item v-for="(url,index) in urls" :key="index">
      <div class="demo-image">
  <div class="block" >
    <el-image
      style="width: 100%; height: 100%"
      :src="url"
      ></el-image>
  </div>
</div>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data () {
    return {
        urls: ['https://p1.music.126.net/MSbqDnXQ9hRjlRMKIkYc_g==/109951165900812685.jpg?imageView&quality=89',
        'https://p1.music.126.net/eK5s4n7xY3-AmY1Terl1Og==/109951165908576634.jpg?imageView&quality=89',
        'https://p1.music.126.net/pqy95PrrI6XZ9EkG18Zjsg==/109951165900825030.jpg?imageView&quality=89',
        'https://p1.music.126.net/gdbyH-oSYpoVgs0M1bxamg==/109951165905756512.jpg?imageView&quality=89']
           
           
    }
  },
}
</script>
<style>
           
</style>