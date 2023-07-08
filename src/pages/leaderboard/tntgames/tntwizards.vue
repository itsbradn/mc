<template>
  <div class="leaderboard">
    <h1 class="leaderboard-header">TNT Wizards Wins</h1>
    <div class="leaderboard-content" v-if="loaded">
      <div class="leaderboard-col place">
        <div class="leaderboard-title">#</div>
        <div
          v-for="(item, index) in lbData"
          v-bind:key="item.wins + '-place'"
          class="leaderboard-item"
        >
          {{ index + (page - 1) * 25 + 1 }}
        </div>
      </div>
      <div class="leaderboard-col username">
        <div class="leaderboard-title">Username</div>
        <NuxtLink
          v-for="(item, index) in lbData"
          v-bind:key="item.wins + '-username'"
          class="leaderboard-item"
          :to="`/player/@${item.username}`"
          
        >
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
      <div class="leaderboard-col wins">
        <div class="leaderboard-title">Wins</div>
        <div
          v-for="(item, index) in lbData"
          v-bind:key="item.wins + '-wins'"
          class="leaderboard-item"
        >
          <Number :number="item.wins" />
        </div>
      </div>
      <div class="leaderboard-col kd">
        <div class="leaderboard-title">KD</div>
        <div
          v-for="(item, index) in lbData"
          v-bind:key="item.wins + '-kd'"
          class="leaderboard-item"
        >
          <Number :number="item.killDeathRatio" />
        </div>
      </div>
      <div class="leaderboard-col kda">
        <div class="leaderboard-title">KDA</div>
        <div
          v-for="(item, index) in lbData"
          v-bind:key="item.wins + '-kda'"
          class="leaderboard-item"
        >
          <Number :number="item.killDeathAssistRatio" />
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
