import Vue from 'vue'
import Vuex from 'vuex'
import {getImage} from './services'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUrl: '',
    currentTitle: '',
    history: []
  },
  mutations: {
    setImage(state, data) {
      state.currentUrl = String(data.url)
      state.currentTitle = String(data.title)
    },
    appendHistory(state, data) {
      state.history.push({
        url: data.url,
        title: data.title,
        date: Date.now()
      })
    },
    deleteImage(state, index) {
      state.history.splice(index, 1)
    }
  },
  actions: {
    async nextImage(store) {
      const preloader = document.querySelector('#preloader')
      preloader.style.display = 'block'
      const data = await getImage()
      store.commit('setImage', data)
      store.commit('appendHistory', data)
      preloader.style.display = 'none'
    }
  }
})
