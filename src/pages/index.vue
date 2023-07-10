<template>
  <div class="landing-page">
    <h1>Your One-Stop-Shop for Hypixel Statistics.</h1>
    <p>
      Search our database of leader-boards and players to view all of a users
      stats.
    </p>
    <div class="search">
      <form @submit.prevent="search" class="bar">
        <Icon name="material-symbols:search-rounded" />
        <input type="text" placeholder="Find a user" v-model="searchName" />
      </form>
      <button @click="search">Search</button>
    </div>
    <div class="landing-grid" v-if="data">
      <div class="row">
        <div class="box-double" id="most-viewed">
          <div class="box__header">
            <div class="header__info">
              <h1>Most viewed user</h1>
              <h2>{{ data.mostViewed.username }}</h2>
            </div>
            <div class="header__stat">
              <Number :number="data.mostViewed.views" /> Views
            </div>
          </div>
          <SkinDisplay
            :skin-url="data.mostViewed.skin.url"
            :cape-url="data.mostViewed.cape.url"
            vib-color-id="most-viewed"
          />
          <div class="box__button">
            <NuxtLink
              :to="`/player/@${data.mostViewed.username}`"
              class="outline-btn"
              >View Stats</NuxtLink
            >
          </div>
        </div>
        <div class="box" id="creator">
          <div class="box__header">
            <div class="header__info">
              <h1>Creator</h1>
              <h2>{{ data.creator.username }}</h2>
            </div>
          </div>
          <SkinDisplay
            :skin-url="data.creator.skin.url"
            :cape-url="data.creator.cape.url"
            vib-color-id="creator"
          />
          <div class="box__button">
            <NuxtLink
              :to="`/player/@${data.creator.username}`"
              class="outline-btn"
              >View Stats</NuxtLink
            >
          </div>
        </div>
        <div class="box" id="newly-updated">
          <div class="box__header">
            <div class="header__info">
              <h1>Newly Updated</h1>
              <h2>{{ data.recentlyUpdated.username }}</h2>
            </div>
          </div>
          <SkinDisplay
            :skin-url="data.recentlyUpdated.skin.url"
            :cape-url="data.recentlyUpdated.cape.url"
            vib-color-id="newly-updated"
          />
          <div class="box__button">
            <NuxtLink
              :to="`/player/@${data.recentlyUpdated.username}`"
              class="outline-btn"
              >View Stats</NuxtLink
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="box" id="highest-kd">
          <div class="box__header">
            <div class="header__info">
              <h1>Highest K/D</h1>
              <h2>{{ data.highestKD.username }}</h2>
            </div>
          </div>
          <SkinDisplay
            :skin-url="data.highestKD.skin.url"
            :cape-url="data.highestKD.cape.url"
            vib-color-id="highest-kd"
          />
          <div class="box__button">
            <NuxtLink
              :to="`/player/@${data.highestKD.username}`"
              class="outline-btn"
              >View Stats</NuxtLink
            >
          </div>
        </div>
        <div class="box" id="highest-karma">
          <div class="box__header">
            <div class="header__info">
              <h1>Highest Karma</h1>
              <h2>{{ data.highestKarma.username }}</h2>
            </div>
          </div>
          <SkinDisplay
            :skin-url="data.highestKarma.skin.url"
            :cape-url="data.highestKarma.cape.url"
            vib-color-id="highest-karma"
          />
          <div class="box__button">
            <NuxtLink
              :to="`/player/@${data.highestKarma.username}`"
              class="outline-btn"
              >View Stats</NuxtLink
            >
          </div>
        </div>
        <div class="box-double" id="highest-level">
          <div class="box__header">
            <div class="header__info">
              <h1>Highest Hypixel Level</h1>
              <h2>{{ data.highestLevel.username }}</h2>
            </div>
            <div class="header__stat">
              Level
              <Number :number="data.highestLevel.level" />
            </div>
          </div>
          <SkinDisplay
            :skin-url="data.highestLevel.skin.url"
            :cape-url="data.highestLevel.cape.url"
            vib-color-id="highest-level"
          />
          <div class="box__button">
            <NuxtLink
              :to="`/player/@${data.highestLevel.username}`"
              class="outline-btn"
              >View Stats</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch(
  "https://api.bradn.dev/api/v1/minecraft/landing"
);

const searchName = ref("");

const search = () => {
  useRouter().push(`/player/@` + searchName.value);
  searchName.value = "";
};

useSeoMeta({
  title: "bradn stats | Minecraft Statistics",
  ogTitle: "bradn stats | Minecraft Statistics",
  ogImage: `/icon.png`,
  themeColor: "#FC5C7D",
  description: `View accurate and frequently updated Hypixel and in depth mode specific stats.`,
  ogDescription: `View accurate and frequently updated Hypixel and in depth mode specific stats.`,
});
</script>
