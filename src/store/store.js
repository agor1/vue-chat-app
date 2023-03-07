import { createStore } from "vuex";

const store = createStore({
  state () {
    return {
      userData: {
        firstName: 'Igor',
        lastName: 'Wróbiński',
        nickName: '@iwrobinski',
        avatar: ''
      }
    }
  },
})


export default store;