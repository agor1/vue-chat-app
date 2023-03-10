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
    },
  },
};
</script>

<template>
  <div class="flex flex-1 flex-col items-stretch">
    <div class="flex-grow">
      Siema {{ $user.firstName }} {{ $user.lastName }}

      <p v-for="msg in $user.messages">{{ msg }}</p>
    </div>

    <input
      class="input w-full"
      type="text"
      v-model="message"
      v-on:keyup.enter="sendMessage"
    />
  </div>
</template>
