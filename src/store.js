import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList: [
      { name: '/home', navItem: 'Home' },
      { name: '/about', navItem: 'About' },
      { name: '/dialog', navItem: 'Dialog' }
    ]
  },
  getters: {

    navList: state => state.navList

  },
  mutations: {
  },
  actions: {

  }
})
