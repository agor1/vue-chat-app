import { createStore } from "vuex";

const store = createStore({
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


export default store;