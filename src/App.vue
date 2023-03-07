<script>
import Sidebar from "./components/Sidebar.vue";
import FriendsList from "./components/FriendsList.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    FriendsList,
  },
};
</script>

<template>
  <div class="bg-slate-100 w-screen h-screen overflow-hidden">
    <Sidebar />
    <div class="box-border p-4 w-full lg:p-0" style="height: 92%">
      <FriendsList class="flex lg:hidden" />
    </div>
  </div>
</template>
