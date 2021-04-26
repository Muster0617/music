export default {
    // 查找歌手
    singers(state) {
        const singers = []
        const transience = {}
        state.sift_musics.forEach(r => {
            if (!transience[r.singer]) {
                singers.push(r)
                transience[r.singer] = true
            }
        })
        return singers
    }

}