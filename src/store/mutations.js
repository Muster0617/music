import { SELECT, LISTEN, SEARCH, COLLECT, REMOVE, GETSTORAGE, UPLOAD, FILTE } from './mutations-types'

export default {
    // 点击某歌手时查找该歌手的相应的歌曲
    [SELECT](state, { name }) {
        state.musics = state.sift_musics.filter(r => r.singer.indexOf(name) >= 0)
    },
    // 点击该歌时播放该歌，并显示该歌歌名
    [LISTEN](state, { name }) {
        state.listen = state.sift_musics.find(r => r.music_name === name)
        state.isShow = true
    },
    // 搜索歌名或歌手
    [SEARCH](state, { input }) {
        const find = state.sift_musics.filter(r => r.singer.indexOf(input) >= 0 || r.music_name.indexOf(input) >= 0)
        state.result = find
    },
    // 添加收藏
    [COLLECT](state, { name }) {
        state.mylike.unshift(state.sift_musics.find(r => r.music_name === name))

    },
    // 删除收藏
    [REMOVE](state, { index }) {
        state.mylike.splice(index, 1)

    },
    // 读取LocalStorage
    [GETSTORAGE](state) {
        state.mylike = JSON.parse(window.localStorage.getItem('mylike') || '[]')
        const read = JSON.parse(window.localStorage.getItem('sift_musics'))
        if (read) {
            state.sift_musics = read
        }
    },
    // 上传歌手
    [UPLOAD](state, { put }) {
        const data = JSON.parse(put)
        data.forEach(r => {
            state.sift_musics.push(r)
        })

        window.localStorage.setItem('sift_musics', JSON.stringify(state.sift_musics))

    },
    // 歌名去除
    [FILTE](state) {
        const sift_musics = []
        const transience = {}
        state.singersArray.forEach(r => {
            if (!transience[r.music_name]) {
                sift_musics.push(r)
                transience[r.music_name] = true
            }
        })
        state.sift_musics = sift_musics
    }

}