<script>
import Sidebar from "./components/Sidebar.vue";
import FriendsList from "./components/FriendsList.vue";
import Chat from "./components/Chat.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    FriendsList,
    Chat,
  },
};
</script>

<template>
  <div class="bg-slate-100 w-screen h-screen overflow-hidden flex">
    <div class="flex flex-col">
      <Sidebar />
      <FriendsList class="flex p-5 lg:p-0 lg:hidden" />
    </div>

    <div class="flex flex-grow p-5">
      <Chat />
    </div>
  </div>
</template>
