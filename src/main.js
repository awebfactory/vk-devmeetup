// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import * as DateFilter from './filters/date'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('dateEn', DateFilter.dateEn)
Vue.filter('dateEsLa', DateFilter.dateEsLa)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCUC60NONOgHu9PnMPmNNe0Q5jothOZUmU',
      authDomain: 'learn-vuetify.firebaseapp.com',
      databaseURL: 'https://learn-vuetify.firebaseio.com',
      projectId: 'learn-vuetify',
      storageBucket: 'learn-vuetify.appspot.com'
    })
  }
})
