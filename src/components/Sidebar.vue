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
  <div class="sidebar-container"></div>
</template>
