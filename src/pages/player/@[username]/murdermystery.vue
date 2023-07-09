<template>
  <div class="player-content">
    <div class="content-main">
      <div class="player-header">
        <div class="details">
          <h1 v-if="hypixel">
            <Rank
              :username="mojang.username"
              :rank="hypixel.newPackageRank"
              :monthly="hypixel.monthlyPackageRank"
              :plusColor="hypixel.rankPlusColor"
              :monthlyColor="hypixel.monthlyRankColor"
              :otherRank="hypixel.rank"
              :otherPrefix="hypixel.prefix"
            />

            <Badge
              v-if="hypixel.badges.friend == true"
              path="/img/badge/friend.svg"
              tooltip="Friend"
            />
            <Badge
              v-if="mojang.username == 'bradn'"
              path="/img/badge/staff.svg"
              tooltip="Staff Member"
            />
          </h1>
          <h1 v-else>
            {{ mojang.username }}
            <Badge
              v-if="mojang.badges.friend == true"
              path="/img/badge/friend.svg"
              tooltip="Friend"
            />
            <Badge
              v-if="mojang.username == 'bradn'"
              path="/img/badge/staff.svg"
              tooltip="Staff Member"
            />
          </h1>
          <h2>{{ mojang.views ?? 0 }} views / month</h2>
          <div class="divider" v-if="hypixel"></div>
          <div class="overview-stats" v-if="hypixel">
            <div class="header-stat">
              <h1>Wins</h1>
              <h2>
                <Number v-bind:number="hypixel.games.murderMystery.wins" />
              </h2>
            </div>
            <div class="header-stat">
              <h1>Kills</h1>
              <h2>
                <Number v-bind:number="hypixel.games.murderMystery.kills" />
              </h2>
            </div>
            <div class="header-stat">
              <h1>W/L</h1>
              <h2>
                <Number
                  v-bind:number="hypixel.games.murderMystery.winLossRatio"
                />
              </h2>
            </div>
            <div class="header-stat">
              <h1>K/D</h1>
              <h2>
                <Number
                  v-bind:number="hypixel.games.murderMystery.killDeathRatio"
                />
              </h2>
            </div>
          </div>
        </div>
        <div class="skin">
          <SkinDisplay :skinUrl="mojang.skin.url" :capeUrl="mojang.cape.url" />
        </div>
      </div>
      <StatsMMModes :stats="hypixel" />
    </div>
    <div class="content-sub">
      <div class="card" v-if="hypixel">
        <div class="stat center">
          <div class="content">
            <h1>Best Role</h1>
            <h2>{{ bestRole }}</h2>
          </div>
        </div>
        <div class="stat center">
          <div class="content">
            <h1>Worst Role</h1>
            <h2>{{ worstRole }}</h2>
          </div>
        </div>
      </div>
      <div class="card" v-if="hypixel">
        <div class="stat center">
          <div class="content">
            <h1>Most Played Map</h1>
            <h2>
              {{ mostPlayedMap.name }}
            </h2>
          </div>
        </div>
        <div class="stat center">
          <div class="content">
            <h1>Best Map</h1>
            <h2>{{ bestMap.name }}</h2>
          </div>
        </div>
        <div class="stat center">
          <div class="content">
            <h1>Most Played Mode</h1>
            <h2>
              {{ mostPlayedMode }}
            </h2>
          </div>
        </div>
        <div class="stat center">
          <div class="content">
            <h1>Best Mode</h1>
            <h2>{{ bestMode }}</h2>
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

const props = defineProps(["mojang", "hypixel"]);
const { mojang, hypixel } = toRefs(props);
const selectedTab = ref("modes");
useSeoMeta({
  title: props.mojang
    ? props.mojang.username + " - Murder Mystery | bradn stats"
    : "bradn stats",
  ogTitle: props.mojang
    ? props.mojang.username + " - Murder Mystery | bradn stats"
    : "bradn stats",
  ogImage: props.mojang
    ? "https://api.bradn.dev/api/v1/minecraft/thumbnail/" +
      props.mojang.username
    : "",
  themeColor: "#FC5C7D",
  description: `View accurate and frequently updated Hypixel Murder Mystery and other modes stats.`,
  ogDescription: `View accurate and frequently updated Hypixel Murder Mystery and other modes stats.`,
  twitterImage: props.mojang
    ? "https://api.bradn.dev/api/v1/minecraft/thumbnail/" +
      props.mojang.username
    : "",
  twitterCard: "summary_large_image",
});

const mostPlayedMap = computed(() => {
  if (!hypixel.value) return;
  const maps = Object.entries(hypixel.value.games.murderMystery.maps);
  const topMap = maps.sort(
    (a, b) => (b[1]?.gamesPlayed ?? 0) - (a[1]?.gamesPlayed ?? 0)
  )[0];

  return {
    key: topMap[0],
    ...topMap[1],
  };
});
const bestMap = computed(() => {
  if (!hypixel.value) return;
  const maps = Object.entries(hypixel.value.games.murderMystery.maps);
  const topMap = maps.sort(
    (a, b) => (b[1]?.winLossRatio ?? 0) - (a[1]?.winLossRatio ?? 0)
  )[0];

  return {
    key: topMap[0],
    ...topMap[1],
  };
});
const bestRole = computed(() => {
  const arr = [
    { role: "Hero", wins: hypixel.value.games.murderMystery.heroWins ?? 0 },
    {
      role: "Detective",
      wins: hypixel.value.games.murderMystery.detectiveWins ?? 0,
    },
    {
      role: "Murderer",
      wins: hypixel.value.games.murderMystery.murdererWins ?? 0,
    },
  ];

  return arr.sort((a, b) => b.wins - a.wins)[0].role;
});
const worstRole = computed(() => {
  const arr = [
    { role: "Hero", wins: hypixel.value.games.murderMystery.heroWins ?? 0 },
    {
      role: "Detective",
      wins: hypixel.value.games.murderMystery.detectiveWins ?? 0,
    },
    {
      role: "Murderer",
      wins: hypixel.value.games.murderMystery.murdererWins ?? 0,
    },
  ];

  return arr.sort((a, b) => a.wins - b.wins)[0].role;
});

const formatModeKey = (key) => {
  if (key === "classic") return "Classic";
  if (key === "doubleUp") return "Double Up!";
  if (key === "infection") return "Infection";
  if (key === "assassins") return "Assassins";
  return "Unknown";
};

const bestMode = computed(() => {
  if (!hypixel.value) return;
  const modes = Object.entries(hypixel.value.games.murderMystery.modes);
  const topMode = modes.sort(
    (a, b) => (b[1]?.winLossRatio ?? 0) - (a[1]?.winLossRatio ?? 0)
  )[0];

  return formatModeKey(topMode[0]);
});

const mostPlayedMode = computed(() => {
  if (!hypixel.value) return;
  const modes = Object.entries(hypixel.value.games.murderMystery.modes);
  const topMode = modes.sort(
    (a, b) => (b[1]?.gamesPlayed ?? 0) - (a[1]?.gamesPlayed ?? 0)
  )[0];

  return formatModeKey(topMode[0]);
});
</script>
