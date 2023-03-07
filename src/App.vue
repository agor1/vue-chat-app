<script>
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>

<template>
  <div class="container bg-slate-100 h-screen w-screen">
    <Sidebar />
  </div>
</template>
