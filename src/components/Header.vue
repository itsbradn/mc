<template>
  <header class="header">
    <div class="left">
      <NuxtLink to="/" class="header__logo" style="margin-right: 16px"
        ><h1>bradn</h1></NuxtLink
      >

      <div class="search mini">
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
  </header>
</template>

<script setup>
const searchNameHeader = ref("");

const searchHeader = () => {
  useRouter().push(`/player/@` + searchNameHeader.value);
  searchNameHeader.value = "";
};
</script>
