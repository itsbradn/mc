<template>
  <section v-if="mojang">
    <div class="section-content">
      <div class="player-pages">
        <button class="page-btn active">Overview</button>
        <button class="page-btn" v-if="hypixel">Bedwars</button>
        <button class="page-btn" v-if="hypixel">Skyblock</button>
        <button class="page-btn" v-if="hypixel">Skywars</button>
        <button class="page-btn" v-if="hypixel">Duels</button>
      </div>
      <div class="player-content">
        <div class="content-main">
          <div class="player-header">
            <div class="details">
              <h1>{{ mojang.username }}</h1>
              <h2>500 views / month</h2>
              <div class="divider" v-if="hypixel"></div>
              <div class="overview-stats" v-if="hypixel">
                <div class="header-stat">
                  <h1>Level</h1>
                  <h2><Number v-bind:number="hypixel.level" /></h2>
                </div>
                <div class="header-stat">
                  <h1>Achievement Points</h1>
                  <h2><Number v-bind:number="hypixel.achievementPoints" /></h2>
                </div>
                <div class="header-stat">
                  <h1>Karma</h1>
                  <h2><Number v-bind:number="hypixel.karma" :big="true" /></h2>
                </div>
              </div>
            </div>
            <div class="skin">
              <canvas id="skin_container"></canvas>
            </div>
          </div>
          <Accordion title="TNT Games" v-if="hypixel">
            <StatsTNTGames :stats="hypixel" />
          </Accordion>
        </div>
        <div class="content-sub">
          <div class="card" v-if="hypixel">
              <div class="stat center">
                <div class="content">
                  <h1>Rank</h1>
                  <h2>
                    <Rank
                      :rank="hypixel.newPackageRank"
                      :monthly="hypixel.monthlyPackageRank"
                      :plusColor="hypixel.rankPlusColor"
                      :monthlyColor="hypixel.monthlyRankColor"
                      :otherRank="hypixel.rank"
                      :otherPrefix="hypixel.prefix"
                    />
                  </h2>
                </div>
              </div>
              <div class="divider margin-card"></div>
              <div class="stat center">
                <div class="content">
                  <h1>First Login</h1>
                  <h2><DateFormat :date="hypixel.firstLogin" /></h2>
                </div>
              </div>
              <div class="stat center" v-if="hypixel.lastLogin">
                <div class="content">
                  <h1>Last Login</h1>
                  <h2><DateFormatAgo :date="hypixel.lastLogin" /></h2>
                </div>
              </div>
          </div>
          <div class="card" v-if="hypixel">
            <div class="stat center">
              <div class="content">
                <h1>Reward Streak High Score</h1>
                <h2><Number :number="hypixel.rewardHighScore" /></h2>
              </div>
            </div>
            <div class="stat center">
              <div class="content">
                <h1>Reward Streak</h1>
                <h2><Number :number="hypixel.rewardStreak" /></h2>
              </div>
            </div>
            <div class="stat center">
              <div class="content">
                <h1>Total Daily Rewards</h1>
                <h2><Number :number="hypixel.totalDailyRewards" />/<Number :number="hypixel.totalRewards" /></h2>
              </div>
            </div>
          </div>
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>
          <div class="card"></div>
        </div>
      </div>
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
  ogImage: `https://mc-heads.net/head/${
    mojang.value ? mojang.value.uuid : "MHF_Steve"
  }`,
  themeColor: "#FC5C7D",
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

  // skinViewer.loadCape("/img/demo-cape.webp", { backEquipment: "elytra" });
  skinViewer.animation = new StillAnim();
  Vibrant.from(mojang.value.skin.url)
    .getPalette()
    .then(function (palette: any) {
      let vib = palette["Vibrant"].getRgb();
      console.log(vib);
      document.documentElement.style.setProperty(
        "--skin-highlight",
        vib.join(", ")
      );
    });
});
</script>
