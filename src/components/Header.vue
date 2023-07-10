<template>
  <header class="header">
    <div class="left">
      <NuxtLink to="/" class="header__logo" style="margin-right: 16px"
        ><h1>bradn</h1></NuxtLink
      >

      <div class="search mini desktop-only">
        <form @submit.prevent="searchHeader" class="bar">
          <Icon @click="searchHeader" name="material-symbols:search-rounded" />
          <input
            type="text"
            placeholder="Search for a user"
            v-model="searchNameHeader"
          />
        </form>
      </div>
    </div>
    <div class="mobile-drop-btn" @click="mobileDrop = !mobileDrop">
      <Icon v-if="!mobileDrop" name="ci:hamburger-lg" />
      <Icon v-else name="material-symbols:close-rounded" />
    </div>
  </header>
  <div :class="`mobile_header ${mobileDrop === true ? 'active' : ''}`">
    <div class="mobile_header-body">
      <div class="search mini">
        <form @submit.prevent="search" class="bar">
          <Icon name="material-symbols:search-rounded" />
          <input type="text" placeholder="Find a user" v-model="searchName" />
        </form>
        <button @click="search">Search</button>
      </div>
      <div class="divider center" style="margin-top: 2rem !important"></div>
      <NuxtLink to="/leaderboard">Leaderboards</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const mobileDrop = ref(false);
const searchNameHeader = ref("");

const searchHeader = () => {
  useRouter().push(`/player/@` + searchNameHeader.value);
  searchNameHeader.value = "";
};
</script>
