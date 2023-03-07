<script>
export default {
  name: "FriendsList",
  data() {
    return {
      friendsChats: [
        {
          firstName: "Jacek",
          lastName: "Placek",
          nickName: "@jacekplacek",
          lastMessage: "Dupa",
        },
        {
          firstName: "Jacek",
          lastName: "Placek",
          nickName: "@jacekplacek",
          lastMessage: "Dupa",
        },
      ],
    };
  },
};
</script>

<template>
  <div
    class="friendslist-container w-full h-full flex flex-col overflow-y-auto overflow-x-hidden"
  >
    <div
      class="w-full h-20 max-h-18 select-none cursor-pointer box-border p-4 rounded-lg hover:text-slate-50 hover:bg-primary lg:hover:bg-slate-100 lg:hover:text-neutral"
      v-for="(value, index) in friendsChats"
      :key="index"
    >
      <div class="flex flex-row items-center">
        <h1 class="text-base font-bold mr-4">
          {{ `${value.firstName} ${value.lastName}` }}
        </h1>
        <h2 class="text-sm">{{ `${value.nickName}` }}</h2>
      </div>
      <p class="text-sm text-slate-400">
        {{ `Napisał/a: ${value.lastMessage}` }}
      </p>
    </div>
  </div>
</template>

<style>
::-webkit-scrollbar {
  display: none;
}
</style>
