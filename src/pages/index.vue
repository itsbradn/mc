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
    <div class="landing-grid">
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
          <canvas id="most-viewed-canvas"></canvas>
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
          <canvas id="creator-canvas"></canvas>
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
          <canvas id="newly-updated-canvas"></canvas>
          <div class="box__button">
            <NuxtLink
              :to="`/player/@${data.recentlyUpdated.username}`"
              class="outline-btn"
              >View Stats</NuxtLink
            >
          </div>
        </div>
      </div>
      <div class="row" id="highest-kd">
        <div class="box">
          <div class="box__header">
            <div class="header__info">
              <h1>Highest K/D</h1>
              <h2>{{ data.highestKD.username }}</h2>
            </div>
          </div>
          <canvas id="highest-kd-canvas"></canvas>
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
          <canvas id="highest-karma-canvas"></canvas>
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
          <canvas id="highest-level-canvas"></canvas>
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
import { SkinViewer, PlayerAnimation } from "skinview3d";
const { data } = await useFetch(
  "https://api.bradn.dev/api/v1/minecraft/landing"
);

const searchName = ref("");

const search = () => {
  useRouter().push(`/player/@` + searchName.value);
};

useSeoMeta({
  title: "bradn stats | Minecraft Statistics",
  ogTitle: "bradn stats | Minecraft Statistics",
  ogImage: `/icon.png`,
  themeColor: "#FC5C7D",
});

const updateSkin = (data, id, right) => {
  class StillAnim extends PlayerAnimation {
    animate(player) {
      // Multiply by animation's natural speed
      const t = this.progress * 1;
      // Leg swing
      // player.skin.leftLeg.rotation.x = Math.sin(t) * 0.5;
      // player.skin.rightLeg.rotation.x = Math.sin(t + Math.PI) * 0.5;
      // Arm swing
      // player.skin.leftArm.rotation.x = Math.sin(t + Math.PI) * 0.5;
      // player.skin.rightArm.rotation.x = Math.sin(t) * 0.5;
      const basicArmRotationZ = Math.PI * 0.005;
      player.skin.leftArm.rotation.z = Math.cos(t) * 0.03 + basicArmRotationZ;
      player.skin.rightArm.rotation.z =
        Math.cos(t + Math.PI) * 0.03 - basicArmRotationZ;
      // if (this.headBobbing) {
      //     // Head shaking with different frequency & amplitude
      //     player.skin.head.rotation.y = Math.sin(t / 4) * 0.2;
      //     player.skin.head.rotation.x = Math.sin(t / 5) * 0.1;
      // }
      // else {
      //     player.skin.head.rotation.y = 0;
      //     player.skin.head.rotation.x = 0;
      // }
      player.skin.head.rotation.y = 0.4;
      // player.skin.head.rotation.x = 0.1;
      // Always add an angle for cape around the x axis
      const basicCapeRotationX = Math.PI * 0.06;
      player.cape.rotation.x = Math.sin(t / 1.5) * 0.06 + basicCapeRotationX;
      player.rotation.y = -0.7;

      if (right !== undefined) {
        player.rotation.y = 0.4;
        player.skin.head.rotation.y = -0.2;
      }
    }
  }

  let skinViewer = new SkinViewer({
    canvas: document.getElementById(id + "-canvas"),
    width: 225,
    height: 325,
    skin: data.skin.url,
    cape: data.cape ? data.cape.url : undefined,
  });

  skinViewer.controls.enableZoom = false;

  // skinViewer.loadCape("/img/demo-cape.webp", { backEquipment: "elytra" });
  skinViewer.animation = new StillAnim();

  const el = document.getElementById(id);

  Vibrant.from(data.skin.url)
    .getPalette()
    .then(function (palette) {
      let vib = palette["Vibrant"].getRgb();
      el.style.setProperty("--skin-highlight", vib.join(", "));
    });
};

onMounted(() => {
  updateSkin(data.value.mostViewed, "most-viewed");
  updateSkin(data.value.creator, "creator", true);
  updateSkin(data.value.recentlyUpdated, "newly-updated", true);
  updateSkin(data.value.highestKD, "highest-kd", true);
  updateSkin(data.value.highestLevel, "highest-level");
  updateSkin(data.value.highestKarma, "highest-karma", true);
});
</script>
