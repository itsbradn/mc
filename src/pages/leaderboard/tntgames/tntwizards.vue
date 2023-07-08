<template>
  <div class="leaderboard">
    <h1 class="leaderboard-header">TNT Wizards Wins</h1>
    <div class="leaderboard-content" v-if="loaded">
      <div class="leaderboard-item title">
        <div class="place">#</div>
        <div class="username">Username</div>
        <div class="wins">Wins</div>
        <div class="KD">Kills</div>
        <div class="KDA">Points Captured</div>
      </div>
      <div
        v-for="(item, index) in lbData"
        v-bind:key="item.wins + '-place'"
        class="leaderboard-item"
      >
        <div class="place">
          <span class="mobile-item-title">#</span>
          {{ index + (page - 1) * 25 + 1 }}
        </div>
        <div class="username">
          <NuxtLink :to="`/player/@${item.username}`">
            <Rank
              v-bind:username="item.username"
              v-bind:rank="item.newPackageRank"
              :monthly="item.monthlyPackageRank"
              :plusColor="item.rankPlusColor"
              :monthlyColor="item.monthlyRankColor"
              :otherRank="item.rank"
              :otherPrefix="item.prefix"
            />
          </NuxtLink>
        </div>
        <div class="wins">
          <h1 class="mobile-item-title">Wins</h1>
          <Number :number="item.wins" />
        </div>
        <div class="KD">
          <h1 class="mobile-item-title">Kills</h1>
          <Number :number="item.kills" />
        </div>
        <div class="KDA">
          <h1 class="mobile-item-title">Points Captured</h1>
          <Number :number="item.pointsCaptured" />
        </div>
      </div>
    </div>
    <div class="leaderboard-spinner" v-else>
      <SquareSpinner :animation-duration="6000" :size="40" color="#6a82fb" />
    </div>
    <div class="paginated">
      <div class="page" @click="switchPage(page - 1)">
        <Icon name="material-symbols:chevron-left-rounded" />
      </div>
      <div
        :class="`page${page == 1 ? ' selected' : ''}`"
        @click="switchPage(1)"
      >
        1
      </div>
      <div
        :class="`page${page == 2 ? ' selected' : ''}`"
        @click="switchPage(2)"
      >
        2
      </div>
      <div
        :class="`page${page == 3 ? ' selected' : ''}`"
        @click="switchPage(3)"
      >
        3
      </div>
      <div
        :class="`page${page == 4 ? ' selected' : ''}`"
        @click="switchPage(4)"
      >
        4
      </div>
      <div class="page" @click="switchPage(page + 1)">
        <Icon name="material-symbols:chevron-right-rounded" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const lbData = ref(
  [] as {
    username: string;
    wins: number;
    killDeathRatio: number;
    killDeathAssistRatio: number;
    kills: number;
    pointsCaptured: number;
    newPackageRank: string;
    monthlyPackageRank: string;
    rankPlusColor: string;
    monthlyRankColor: string;
    rank: string;
    prefix: string;
  }[]
);

const page = ref(1);
const loaded = ref(false);

const switchPage = (newPage: number) => {
  page.value = newPage < 1 ? 1 : newPage;
  if (page.value > 4) page.value = 4;
  fetchLbData();
};

const fetchLbData = async () => {
  loaded.value = false;
  const { data } = await useFetch(
    "https://api.bradn.dev/api/v1/minecraft/hypixel/leaderboards/tntgames/wizardsWins" +
      (page.value > 1 ? "?page=" + page.value.toString() : "?page=1"),
    { server: false }
  );

  // console.log(data.value);
  if (data.value) {
    let final = [] as {
      username: string;
      wins: number;
      kills: number;
      pointsCaptured: number;
      killDeathRatio: number;
      killDeathAssistRatio: number;
      newPackageRank: string;
      monthlyPackageRank: string;
      rankPlusColor: string;
      monthlyRankColor: string;
      rank: string;
      prefix: string;
    }[];
    const formatData = (data: any) => {
      console.log(data);
      final.push({
        username: data.username,
        wins: data.wins,
        kills: data.kills,
        pointsCaptured: data.pointsCaptured,
        killDeathRatio: data.killDeathRatio,
        killDeathAssistRatio: data.killDeathAssistRatio,
        ...data.rankData,
      });
    };
    (data.value as any).data.forEach((e: any) => formatData(e));
    lbData.value = final;
    loaded.value = true;
  } else fetchLbData();
};

onMounted(() => {
  fetchLbData();
});
</script>
