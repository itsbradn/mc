<template>
  <div :class="`page-loader ${loading === true ? 'active' : ''}`">
    <SquareSpinner :animation-duration="6000" :size="50" color="#6a82fb" />
  </div>
  <section v-if="mojang">
    <div class="section-content">
      <div class="player-pages">
        <NuxtLink
          class="page-btn"
          :to="'/player/@' + route.params.username"
          exactActiveClass="active"
          >Overview</NuxtLink
        >
        <NuxtLink
          class="page-btn"
          :to="'/player/@' + route.params.username + '/bedwars'"
          activeClass="active"
          v-if="hypixel"
          >Bedwars</NuxtLink
        >
        <NuxtLink
          class="page-btn"
          :to="'/player/@' + route.params.username + '/murdermystery'"
          activeClass="active"
          v-if="hypixel"
          >Murder Mystery</NuxtLink
        >
        <!-- <NuxtLink
          class="page-btn"
          :to="'/player/@' + route.params.username + '/skyblock'"
          activeClass="active"
          v-if="hypixel"
          >Skyblock</NuxtLink
        > -->
        <a class="page-btn disabled">Skyblock</a>
        <!-- <NuxtLink
          class="page-btn"
          :to="'/player/@' + route.params.username + '/skywars'"
          activeClass="active"
          v-if="hypixel"
          >Skywars</NuxtLink
        > -->
        <a class="page-btn disabled">Skywars</a>
        <!-- <NuxtLink
          class="page-btn"
          :to="'/player/@' + route.params.username + '/duels'"
          activeClass="active"
          v-if="hypixel"
          >Duels</NuxtLink
        > -->
        <a class="page-btn disabled">Duels</a>
      </div>
      <NuxtPage :hypixel="hypixel" :mojang="mojang" />
    </div>
  </section>
</template>

<script setup lang="ts">
declare global {
  class Vibrant {
    static from(src: any): any;
  }
}
import { MinecraftPlayerResponse } from "../../types/minecraftPlayer";

const route = useRoute();

const { data: mojang } = await useFetch<MinecraftPlayerResponse>(
  "https://api.bradn.dev/api/v1/minecraft/player/" + route.params.username
);
const { data: hypixel } = await useFetch<any>(
  "https://api.bradn.dev/api/v1/minecraft/hypixel/" + mojang.value?.uuid,
  { server: false }
);

const loading = computed(() => {
  if (hypixel.value?.username === undefined) return true;
  return false;
});

useSeoMeta({
  title: mojang.value
    ? mojang.value.username + " | bradn stats"
    : "bradn stats",
  ogTitle: mojang.value
    ? mojang.value.username + " | bradn stats"
    : "bradn stats",
  ogImage: mojang.value
    ? "https://api.bradn.dev/api/v1/minecraft/thumbnail/" +
      mojang.value.username
    : "",
  themeColor: "#FC5C7D",
  twitterImage: mojang.value
    ? "https://api.bradn.dev/api/v1/minecraft/thumbnail/" +
      mojang.value.username
    : "",
  twitterCard: "summary_large_image",
});
useHead({
  link: [
    {
      hid: "icon",
      rel: "icon",
      type: "image/png",
      href: `https://mc-heads.net/head/${
        mojang.value ? mojang.value.uuid : "MHF_Steve"
      }`,
    },
  ],
});

onMounted(() => {
  if (!mojang.value) throw new Error("no response");

  // updateSkin();
});
</script>
