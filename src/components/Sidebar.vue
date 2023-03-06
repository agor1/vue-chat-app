<script>
import { mapGetters } from "vuex";

export default {
  name: "Sidebar",
  computed: {
    ...mapGetters(["userData"]),
  },
};
</script>

<template>
  <div class="sidebar-container">
    <!-- TODO: Create a responsive sidebar using TailwindCSS and DaisyUI, which displays your data and chat with your friends. -->
  </div>
</template>
