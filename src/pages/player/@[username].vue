<template>
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
          :to="'/player/@' + route.params.username + '/skyblock'"
          activeClass="active"
          v-if="hypixel"
          >Skyblock</NuxtLink
        >
        <NuxtLink
          class="page-btn"
          :to="'/player/@' + route.params.username + '/skywars'"
          activeClass="active"
          v-if="hypixel"
          >Skywars</NuxtLink
        >
        <NuxtLink
          class="page-btn"
          :to="'/player/@' + route.params.username + '/duels'"
          activeClass="active"
          v-if="hypixel"
          >Duels</NuxtLink
        >
      </div>
      <NuxtPage :hypixel="hypixel" :mojang="mojang" :renderSkin="updateSkin" />
    </div>
  </section>
</template>

<script setup lang="ts">
declare global {
  class Vibrant {
    static from(src: any): any;
  }
}
import { SkinViewer, PlayerAnimation } from "skinview3d";
import { MinecraftPlayerResponse } from "../../types/minecraftPlayer";
import Number from "~/components/Number.vue";

const route = useRoute();



const { data: mojang } = await useFetch<MinecraftPlayerResponse>(
  "https://api.bradn.dev/api/v1/minecraft/player/" + route.params.username
);
const { data: hypixel } = await useFetch<any>(
  "https://api.bradn.dev/api/v1/minecraft/hypixel/" + mojang.value?.uuid,
  { server: false }
);

useSeoMeta({
  title: mojang.value
    ? mojang.value.username + " | bradn stats"
    : "bradn stats",
  ogTitle: mojang.value
    ? mojang.value.username + " | bradn stats"
    : "bradn stats",
  ogImage: mojang.value ? 'https://api.bradn.dev/api/v1/minecraft/' + mojang.value.username : '',
  themeColor: "#FC5C7D",
  twitterImage: mojang.value ? 'https://api.bradn.dev/api/v1/minecraft/' + mojang.value.username : '',
  twitterCard: 'summary_large_image'
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

const updateSkin = () => {
  class StillAnim extends PlayerAnimation {
    animate(player: any) {
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
    }
  }

  if (!mojang.value) throw new Error("no response");

  let skinViewer = new SkinViewer({
    canvas: document.getElementById("skin_container") as HTMLCanvasElement,
    width: 225,
    height: 325,
    skin: mojang.value.skin.url,
    cape: mojang.value.cape ? mojang.value.cape.url : undefined,
  });

  skinViewer.controls.enableZoom = false;

  // skinViewer.loadCape("/img/demo-cape.webp", { backEquipment: "elytra" });
  skinViewer.animation = new StillAnim();
}

onMounted(() => {

  if (!mojang.value) throw new Error("no response");

  // updateSkin();
  Vibrant.from(mojang.value.skin.url)
    .getPalette()
    .then(function (palette: any) {
      let vib = palette["Vibrant"].getRgb();
      document.documentElement.style.setProperty(
        "--skin-highlight",
        vib.join(", ")
      );
    });
});
</script>
