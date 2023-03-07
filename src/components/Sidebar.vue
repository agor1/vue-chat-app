<script>
import { mapGetters } from "vuex";

export default {
  name: "Sidebar",
  data() {
    return {
      user: {
        firstName: this.$store.state.userData.firstName,
        lastName: this.$store.state.userData.lastName,
        nickName: this.$store.state.userData.nickName,
        status: true,
      },
    };
  },
  computed: {
    ...mapGetters(["userData"]),
  },
};
</script>

<template>
  <div
    class="sidebar-container w-screen h-16 bg-slate-50 box-border px-6 lg:h-screen lg:w-80 lg:p-6"
  >
    <div
      class="flex flex-row justify-between items-center h-full lg:items-start"
    >
      <div class="flex flex-row justify-center items-center">
        <div
          class="avatar placeholder select-none cursor-pointer"
          :class="{ online: user.status, offline: !user.status }"
        >
          <div
            class="bg-neutral-focus text-neutral-content rounded-full w-10"
            @click="user.status = !user.status"
          >
            <span>{{ user.firstName.charAt(0) }}</span>
          </div>
        </div>
        <div class="user-info ml-4">
          <h1 class="text-base font-bold">
            {{ `${user.firstName} ${user.lastName}` }}
          </h1>
          <h2 class="text-sm">
            {{ user.nickName }}
          </h2>
        </div>
      </div>

      <div class="options flex flex-col">
        <span class="w-2 h-2 bg-neutral-focus rounded-full my-0.5"></span>
        <span class="w-2 h-2 bg-neutral-focus rounded-full my-0.5"></span>
        <span class="w-2 h-2 bg-neutral-focus rounded-full my-0.5"></span>
      </div>
    </div>
  </div>
</template>
