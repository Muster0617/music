<template>
 <div id="left" style="font-weight:bold;" >
   <router-link to="/search"><el-input v-model="input" placeholder="搜索歌手或歌曲" @keyup.enter.native="search"></el-input></router-link>
		  <el-row class="tac">
		    <el-col :span="12" style='width: 100%;'>
		      <el-menu class="el-menu-vertical-demo" background-color="#B0C4DE"
      text-color="#000000"
      active-text-color="#ffd04b">
	  <router-link to="/home" style="text-decoration:none"><el-menu-item>
		          <i class="el-icon-menu" ></i>
		          <span slot="title">首页</span>
		        </el-menu-item></router-link>
				<router-link to="/mylike" style="text-decoration:none"><el-menu-item>
		          <i class="el-icon-star-on" ></i>
		          <span slot="title">我的收藏</span>
		        </el-menu-item></router-link>
				<router-link to="/update" style="text-decoration:none"><el-menu-item>
		          <i class="el-icon-s-promotion" ></i>
		          <span slot="title">上传歌手</span>
		        </el-menu-item></router-link>
				
		      </el-menu>
		    </el-col>
		    </el-row>
            <Bottom />

	  </div>
           
</template>
<script>
import Bottom from '../components/Bottom'
import {mapGetters, mapState} from 'vuex'

export default {
  data(){
		return{
			input:''
		}
	},
	components:{
          Bottom
	},
      computed:{
		...mapState(['singersArray','listen','isShow']),
        ...mapGetters(['singers'])
	},
	methods: {
		select(singer){
		this.$store.dispatch('select',singer)
		},
		search(){
			this.$store.dispatch('search',this.input)
			this.input=''
		},
		mylike(){
		    this.$store.dispatch('mylike')
		}
    
	}
   
    
  }
</script>
<style>
#left{
	position: fixed;
	height: 685px;
	width: 15%;
	margin-left: 5px;
	margin-top: 5px;
    border: solid 3px rgb(74, 143, 184);
}        
</style>