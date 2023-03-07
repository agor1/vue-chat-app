import { createApp } from 'vue'
import App from './App.vue'

import store from './store/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './style/index.css'

import { faGear } from '@fortawesome/free-solid-svg-icons'

library.add(faGear)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .mount('#app')
