<script>
import store from "../store/store";

export default {
  name: "Messages",
  data() {
    return {
      message: "eqw uw",
    };
  },
  computed: {
    $user() {
      return this.$store.state.selectedUser;
    },
  },
  methods: {
    sendMessage() {
      this.$store.commit("addMessage", { message: this.message });
      console.log(this.message);
      this.message = "";
    },
  },
};
</script>

<template>
  <div class="flex flex-1 flex-col items-stretch">
    <div class="flex-grow overflow-x-auto">
      <div class="chat chat-start">
        <div class="chat-bubble chat-bubble-accent text-white">
          Siema {{ $user.firstName }}
        </div>
      </div>

      <!-- <p v-for="msg in $user.messages">{{ msg }}</p> -->
      <div class="chat chat-end">
        <div
          class="chat-bubble chat-bubble-primary mt-4"
          v-for="msg in $user.messages"
        >
          {{ msg }}
        </div>
      </div>
    </div>

    <input
      class="input w-full mt-10"
      type="text"
      v-model="message"
      v-on:keyup.enter="sendMessage"
    />
  </div>
</template>
