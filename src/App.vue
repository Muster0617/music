<template>
	<div id='view' >
	  <Left />
	  <keep-alive>
	  <router-view></router-view>
	  </keep-alive>
	  <audio autoplay="autoplay" controls="controls" loop="loop" :src='listen.music_url'>
		  当前浏览器不支持
	  </audio>
</div>
  
		   
</template>
<script>
import { mapState } from 'vuex'
import Left from './components/Left'

export default {
	components:{
		  Left
	},
	computed:{
		...mapState(['listen'])
	},
	// 刷新页面回到首页
	created(){ 
      if(this.$router.path !== '/home'){
          this.$router.replace('/home').catch(err=>err)
		//   this.$router.replace(this.path).catch(err=>err) //解决报错信息
      }
},

	mounted(){
		this.$store.dispatch('filte')
		this.$store.dispatch('getStorage')
	},
  }

</script>
<style>
body{
	display: flex;
	justify-content: center;
	align-items: flex-end;
}

#view{
	width: 75%;
	height: 700px;
	border: solid 3px rgb(43, 36, 42);
	border-radius: 8px; 
	margin: 0;
	display: flex;
	flex-direction: row;
	background-color: #F5F5F5;
}

  audio{
	  position: fixed;
	  margin-top: 640px;
	  width: 50%;
	  margin-left: 21%;
	  outline: none;

}
		   
</style>