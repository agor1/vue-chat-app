<script>
import store from "../store/store";

export default {
  name: "Messages",
  data() {
    return {
      message: "",
    };
  },
  computed: {
    $user() {
      return this.$store.state.selectedUser;
    },
  },
  methods: {
    sendMessage() {
      if (this.message === "") {
        return 0;
      } else {
        this.$store.commit("addMessage", { message: this.message });
        console.log(this.message);
        this.message = "";
      }
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

      <div class="chat chat-end">
        <div
          class="chat-bubble chat-bubble-primary mt-4"
          v-for="msg in $user.messages"
        >
          {{ msg }}
        </div>
      </div>
    </div>

    <div class="w-full h-20">
      <input
        class="input w-full mt-10 min-h-20"
        type="text"
        placeholder="Wyślij wiadomość"
        v-model="message"
        v-on:keyup.enter="sendMessage"
      />
    </div>
  </div>
</template>
