import { createStore } from "vuex";

const Store = createStore({
  state () {
    return {
      userData: {
        firstname: 'Twój',
        lastname: 'Stary',
        avatar: ''
      }
    }
  },
})


export default Store;