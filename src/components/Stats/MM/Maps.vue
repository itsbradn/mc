<template>
  <StatsMMMap
    :stats="props.stats"
    :mapKey="map"
    :key="map"
    v-for="map of mapKeys"
  />
</template>

<script setup>
const props = defineProps(["stats"]);
const { stats } = toRefs(props);
const mapKeys = computed(() => {
  const entriesOrdered = Object.entries(
    stats.value?.games.murderMystery?.maps
  ).sort((a, b) => (b[1]?.gamesPlayed) - (a[1]?.gamesPlayed));
  return Object.keys(Object.fromEntries(entriesOrdered));
});
</script>
