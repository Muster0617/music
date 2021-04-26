import Vue from 'vue'
import VueRouter from 'vue-router'

import Mylike from '../views/Mylike'
import Playlist from '../views/Playlist'
import Home from '../views/Home'
import Search from '../views/Search'
import Update from '../views/Update'

Vue.use(VueRouter)

//解决vue路由重复导航错误
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
    //修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default new VueRouter({
    routes: [{
            path: '/mylike',
            component: Mylike
        },
        {
            path: '/playlist',
            component: Playlist
        },
        {
            path: '/home',
            component: Home,
        },
        {
            //路由重定向
            path: '/',
            redirect: '/home'

        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/update',
            component: Update
        }
    ]
})