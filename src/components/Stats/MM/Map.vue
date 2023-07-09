<template>
  <Accordion :id="`mm-maps-${mapKey}`" :title="mapStats.name" v-if="mapStats">
    <h1 class="accordion-subtitle">Win Info</h1>
    <div class="divider center"></div>
    <div class="card-horz two-fix">
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Wins</h1>
            <h2>
              <Number :number="mapStats.wins" />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Win/Loss Ratio</h1>
            <h2>
              <Number :number="mapStats.winLossRatio" />
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="card-horz">
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Detective Wins</h1>
            <h2>
              <Number :number="mapStats.detectiveWins" />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Murderer Wins</h1>
            <h2>
              <Number :number="mapStats.murdererWins" />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Hero Wins</h1>
            <h2>
              <Number :number="mapStats.heroWins" />
            </h2>
          </div>
        </div>
      </div>
    </div>
    <h1 class="accordion-subtitle">Kill Info</h1>
    <div class="divider center"></div>
    <div class="card-horz">
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Kills</h1>
            <h2>
              <Number :number="mapStats.kills" />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Kill/Death Ratio</h1>
            <h2>
              <Number :number="mapStats.killDeathRatio" />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Deaths</h1>
            <h2>
              <Number :number="mapStats.deaths" />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Suicides</h1>
            <h2>
              <Number :number="mapStats.suicides" />
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="card-horz">
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Knife Kills</h1>
            <h2>
              <Number :number="mapStats.knifeKills" />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Thrown Knife Kills</h1>
            <h2>
              <Number :number="mapStats.thrownKnifeKills" />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Bow Kills</h1>
            <h2>
              <Number :number="mapStats.bowKills" />
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Trap Kills</h1>
            <h2>
              <Number :number="mapStats.trapKills" />
            </h2>
          </div>
        </div>
      </div>
    </div>
    <h1 class="accordion-subtitle" v-if="mapStats.gamesPlayed > 0">Extras</h1>
    <div class="divider center" v-if="mapStats.gamesPlayed > 0"></div>
    <div class="card-horz" v-if="mapStats.gamesPlayed > 0">
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Best Role</h1>
            <h2>
              {{ bestRole }}
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Worst Role</h1>
            <h2>
              {{ worstRole }}
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Best Mode</h1>
            <h2>
              {{ bestMode }}
            </h2>
          </div>
        </div>
      </div>
      <div class="card mini transparent center">
        <div class="stat center-horz inline">
          <div class="content">
            <h1>Most Played Mode</h1>
            <h2>
              {{ mostPlayedMode }}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </Accordion>
</template>

<script setup>
const props = defineProps(["stats", "mapKey"]);
const { stats, mapKey } = toRefs(props);

const mapStats = computed(() => {
  return stats.value.games?.murderMystery.maps[mapKey.value];
});

const bestRole = computed(() => {
  const arr = [
    { role: "Hero", wins: mapStats.value.heroWins ?? 0 },
    {
      role: "Detective",
      wins: mapStats.value.detectiveWins ?? 0,
    },
    {
      role: "Murderer",
      wins: mapStats.value.murdererWins ?? 0,
    },
  ];

  return arr.sort((a, b) => b.wins - a.wins)[0].role;
});

const worstRole = computed(() => {
  const arr = [
    { role: "Hero", wins: mapStats.value.heroWins ?? 0 },
    {
      role: "Detective",
      wins: mapStats.value.detectiveWins ?? 0,
    },
    {
      role: "Murderer",
      wins: mapStats.value.murdererWins ?? 0,
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
  if (!mapStats.value) return;
  const modes = Object.entries(mapStats.value.modes);
  const topMode = modes.sort(
    (a, b) => (b[1]?.winLossRatio ?? 0) - (a[1]?.winLossRatio ?? 0)
  )[0];

  return formatModeKey(topMode[0]);
});
const mostPlayedMode = computed(() => {
  if (!mapStats.value) return;
  const modes = Object.entries(mapStats.value.modes);
  console.log(mapStats.value.modes);
  const topMode = modes.sort(
    (a, b) => (b[1]?.gamesPlayed ?? 0) - (a[1]?.gamesPlayed ?? 0)
  )[0];

  return formatModeKey(topMode[0]);
});
</script>
