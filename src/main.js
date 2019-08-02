import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'

Sentry.init({
  dsn: 'https://7ab75385e1ae4286a7052a7338988f67@sentry.io/1519993',
  integrations: [new Integrations.Vue({ Vue, attachProps: true })]
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
