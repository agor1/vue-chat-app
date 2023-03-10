import { createStore } from "vuex";

const store = createStore({
  state () {
    return {
      userData: {
        firstName: 'Igor',
        lastName: 'Wróbiński',
        nickName: '@iwrobinski',
        avatar: ''
      },
      selectedUser: {},
    }
  },
  mutations: {
    setUser (state, payload) {
      state.selectedUser = payload.user
      state.selectedUser.messages = [];

      console.log(state);
    },
    addMessage(state, payload) {
      
      state.selectedUser.messages.push(payload.message)
    }
  }
})


export default store;