<template>
           <div id='bottom'>
               <p>正在播放:</p>
               <div v-show="isShow">
                       <p>{{listen.music_name}}</p>
	<p>{{listen.singer}}</p>
               </div>
</div>
</template>
<script>
import {mapState} from 'vuex'

export default {
   computed:{
		...mapState(['listen','isShow']),
	}
}
</script>
<style>
#bottom{
    color: 	#D87093;
    margin-top:320px;
    border-top: solid 3px rgb(74, 143, 184);
	font-size: 20px;
}
p{
    text-align: center;
    width:100%;
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;
word-break:keep-all;
	font-size: 20px;

}

</style>