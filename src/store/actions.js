import { SELECT, LISTEN, SEARCH, COLLECT, REMOVE, GETSTORAGE, UPLOAD, FILTE } from './mutations-types'

export default {
    select({ commit }, name) {
        commit(SELECT, { name })

    },
    listen({ commit }, name) {
        commit(LISTEN, { name })
    },
    search({ commit }, input) {
        commit(SEARCH, { input })
    },
    collect({ commit }, name) {
        commit(COLLECT, { name })
    },
    remove({ commit }, index) {
        commit(REMOVE, { index })
    },
    getStorage({ commit }) {
        commit(GETSTORAGE)
    },
    upload({ commit }, put) {

        commit(UPLOAD, { put })
    },
    filte({ commit }) {
        commit(FILTE)
    }


}