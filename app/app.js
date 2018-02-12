import Vue from 'vue'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'
import App from './components/app.vue'

// const Web3 = require('web3')

Vue.use(Vuex)
Vue.use(VueMaterial)

async function startApp () {
  // eslint-disable-next-line no-unused-vars
  const vm = new Vue({
    el: '#app',
    render (createElement) {
      return createElement(App)
    }
  })
}

window.addEventListener('load', event => {
  startApp()
})
