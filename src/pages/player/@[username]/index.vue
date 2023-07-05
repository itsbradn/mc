<template>
  <div class="player-content">
    <div class="content-main">
      <div class="player-header">
        <div class="details">
          <h1 v-if="props.hypixel">
            <Rank
              :username="props.mojang.username"
              :rank="props.hypixel.newPackageRank"
              :monthly="props.hypixel.monthlyPackageRank"
              :plusColor="props.hypixel.rankPlusColor"
              :monthlyColor="props.hypixel.monthlyRankColor"
              :otherRank="props.hypixel.rank"
              :otherPrefix="props.hypixel.prefix"
            />
          </h1>
          <h1 v-else>{{ props.mojang.username }}</h1>
          <h2>{{ props.mojang.views ?? 0 }} views / month</h2>
          <div class="divider" v-if="props.hypixel"></div>
          <div class="overview-stats" v-if="props.hypixel">
            <div class="header-stat">
              <h1>Level</h1>
              <h2><Number v-bind:number="props.hypixel.level" /></h2>
            </div>
            <div class="header-stat">
              <h1>Achievement Points</h1>
              <h2>
                <Number v-bind:number="props.hypixel.achievementPoints" />
              </h2>
            </div>
            <div class="header-stat">
              <h1>Karma</h1>
              <h2>
                <Number v-bind:number="props.hypixel.karma" :big="true" />
              </h2>
            </div>
          </div>
        </div>
        <div class="skin">
          <canvas id="skin_container"></canvas>
        </div>
      </div>
      <NuxtLink
        v-if="props.mojang"
        :to="'/player/@' + props.mojang.username + '/bedwars'"
        class="fake-accordion"
      >
        <div class="fake-accordion__header">
          <div class="header__title">Bedwars</div>
          <div class="header__icon">
            <Icon name="material-symbols:keyboard-arrow-down-rounded" />
          </div>
        </div>
      </NuxtLink>
      <Accordion id="tnt-games" title="TNT Games" v-if="props.hypixel">
        <StatsTNTGames :stats="props.hypixel" />
      </Accordion>
    </div>
    <div class="content-sub">
      <div class="card" v-if="props.hypixel">
        <div class="stat center">
          <div class="content">
            <h1>First Login</h1>
            <h2><DateFormat :date="props.hypixel.firstLogin" /></h2>
          </div>
        </div>
        <div class="stat center" v-if="props.hypixel.lastLogin">
          <div class="content">
            <h1>Last Login</h1>
            <h2><DateFormatAgo :date="props.hypixel.lastLogin" /></h2>
          </div>
        </div>
      </div>
      <div class="card" v-if="props.hypixel">
        <div class="stat center">
          <div class="content">
            <h1>Reward Streak High Score</h1>
            <h2><Number :number="props.hypixel.rewardHighScore" /></h2>
          </div>
        </div>
        <div class="stat center">
          <div class="content">
            <h1>Reward Streak</h1>
            <h2><Number :number="props.hypixel.rewardStreak" /></h2>
          </div>
        </div>
        <div class="stat center">
          <div class="content">
            <h1>Total Daily Rewards</h1>
            <h2>
              <Number :number="props.hypixel.totalDailyRewards" />/<Number
                :number="props.hypixel.totalRewards"
              />
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  key: (route) => route.fullPath,
});

const props = defineProps(["mojang", "hypixel", "renderSkin"]);
useSeoMeta({
  title: props.mojang
    ? props.mojang.username + " | bradn stats"
    : "bradn stats",
  ogTitle: props.mojang
    ? props.mojang.username + " | bradn stats"
    : "bradn stats",
  ogImage: props.mojang ? 'https://api.bradn.dev/api/v1/minecraft/' + props.mojang.username : '',
  themeColor: "#FC5C7D",
  description: `View accurate and frequently updated Hypixel and in depth mode specific stats.`,
  ogDescription: `View accurate and frequently updated Hypixel and in depth mode specific stats.`,
  twitterImage: props.mojang ? 'https://api.bradn.dev/api/v1/minecraft/' + props.mojang.username : '',
  twitterCard: 'summary_large_image'
});

onMounted(() => {
  props.renderSkin();
});
</script>
