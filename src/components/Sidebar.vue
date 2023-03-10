<script>
import { mapGetters } from "vuex";
import FriendsList from "./FriendsList.vue";

export default {
  name: "Sidebar",
  components: {
    FriendsList,
  },
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
      class="flex flex-col justify-center items-center h-full lg:items-start lg:justify-start"
    >
      <div class="flex flex-row justify-between items-start w-full">
        <div class="flex flex-row justify-center items-center">
          <div
            class="avatar placeholder select-none cursor-pointer"
            :class="{ online: user.status, offline: !user.status }"
          >
            <div
              class="bg-primary text-neutral-content rounded-full w-10 hover:bg-opacity-80 transition-all"
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
        <div
          class="dropdown dropdown-bottom max-sm:dropdown-end lg:dropdown-right"
        >
          <font-awesome-icon
            icon="fa-solid fa-gear"
            tabindex="0"
            class="text-neutral-focus hover:text-primary hover:rotate-90 cursor-pointer ease-in-out duration-200 focus:rotate-90 focus:text-primary"
          />
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 bg-slate-50 rounded-box w-32"
          >
            <li><a>Profil</a></li>
            <li><a>Ustawienia</a></li>
          </ul>
        </div>
      </div>

      <div
        class="w-full h-0.5 bg-slate-200 rounded-full my-6 hidden lg:block"
      ></div>
      <FriendsList class="hidden lg:flex" />
    </div>
  </div>
</template>
