import Vue from 'vue'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/theme/default-dark.css'
import App from './components/app.vue'
import Web3 from 'web3'

Vue.use(Vuex)
Vue.use(VueMaterial)
Vue.component('web3', require('./components/web3.vue'))
Vue.component('account', require('./components/account.vue'))

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
  if (typeof web3 !== 'undefined') {
    window.web3 = new Web3(web3.currentProvider)
  }
  startApp()
})
