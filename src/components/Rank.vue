<template>
  <span class="mc-rank" v-if="rankString !== ''"
    ><span :class="borderClass">[</span
    ><span :class="rankClass">{{ rankString }}</span
    ><span v-if="plus !== ''" :class="plusClass">{{ plus }}</span
    ><span :class="borderClass">] {{ username }}</span></span
  >
  <span v-else class="mc-rank GRAY">
    {{ username }}
  </span>
</template>

<script setup>
const props = defineProps({
  username: String,
  rank: String,
  monthly: String,
  plusColor: String,
  monthlyColor: String,
  otherRank: String,
  otherPrefix: String,
});
const {
  username,
  rank,
  monthly,
  plusColor,
  monthlyColor,
  otherRank,
  otherPrefix,
} = toRefs(props);

// computed()

const plus = computed(() => {
  if (otherRank.value === "YOUTUBER") {
    return "";
  }
  if (otherRank.value === "ADMIN") {
    return "";
  }
  if (otherRank.value === "GAME_MASTER") {
    return "";
  }
  if (otherPrefix.value?.includes("OWNER")) {
    return "";
  }
  if (otherPrefix.value?.includes("MOJANG")) {
    return "";
  }
  if (otherPrefix.value?.includes("EVENTS")) {
    return "";
  }
  if (otherPrefix.value?.includes("MCP")) {
    return "";
  }
  if (otherPrefix.value?.includes("PIG")) {
    return "+++";
  }
  if (rank.value === "VIP_PLUS") return "+";
  if (rank.value === "MVP_PLUS") {
    if (monthly.value !== undefined && monthly.value !== "NONE") {
      return "++";
    }
    return "+";
  }
  return "";
});
const plusClass = computed(() => {
  if (otherPrefix.value?.includes("PIG")) {
    return "plus AQUA";
  }
  if (rank.value === "MVP_PLUS") return `plus ${plusColor.value}`;
  if (rank.value === "VIP" || rank.value === "VIP_PLUS") return `plus WHITE`;
  return "plus";
});

const rankString = computed(() => {
  if (otherRank.value == "YOUTUBER") {
    return "YOUTUBER";
  }
  if (otherRank.value === "ADMIN") {
    return "ADMIN";
  }
  if (otherRank.value === "GAME_MASTER") {
    return "GM";
  }
  if (otherPrefix.value?.includes("OWNER")) {
    return "OWNER";
  }
  if (otherPrefix.value?.includes("MOJANG")) {
    return "MOJANG";
  }
  if (otherPrefix.value?.includes("EVENTS")) {
    return "EVENTS";
  }
  if (otherPrefix.value?.includes("MCP")) {
    return "MCP";
  }
  if (otherPrefix.value?.includes("PIG")) {
    return "PIG";
  }
  switch (rank.value) {
    case "VIP": {
      return "VIP";
    }
    case "VIP_PLUS": {
      return "VIP";
    }
    case "MVP": {
      return "MVP";
    }
    case "MVP_PLUS": {
      return "MVP";
    }
    default: {
      return "";
    }
  }
});

const rankClass = computed(() => {
  if (otherRank.value === "YOUTUBER") {
    return "rank WHITE";
  }
  if (otherRank.value === "ADMIN") {
    return "rank RED";
  }
  if (otherRank.value === "GAME_MASTER") {
    return "rank DARK_GREEN";
  }
  if (otherPrefix.value?.includes("OWNER")) {
    return "rank RED";
  }
  if (otherPrefix.value?.includes("MOJANG")) {
    return "rank GOLD";
  }
  if (otherPrefix.value?.includes("EVENTS")) {
    return "rank GOLD";
  }
  if (otherPrefix.value?.includes("MCP")) {
    return "rank RED";
  }
  if (otherPrefix.value?.includes("PIG")) {
    return "rank LIGHT_PURPLE";
  }
  if (rankString.value === "") return "rank";
  if (monthly.value !== undefined && monthly.value !== "NONE") {
    return monthlyColor.value ?? "GOLD";
  }
  if (rankString.value === "VIP") return "rank GREEN";
  if (rankString.value === "MVP") return "rank AQUA";
  return "rank";
});

const borderClass = computed(() => {
  if (!rank) return "GRAY";
  if (otherRank.value === "YOUTUBER") {
    return "RED";
  }
  if (otherRank.value === "ADMIN") {
    return "RED";
  }
  if (otherRank.value === "GAME_MASTER") {
    return "DARK_GREEN";
  }
  if (otherPrefix.value?.includes("OWNER")) {
    return "RED";
  }
  if (otherPrefix.value?.includes("MOJANG")) {
    return "GOLD";
  }
  if (otherPrefix.value?.includes("EVENTS")) {
    return "GOLD";
  }
  if (otherPrefix.value?.includes("MCP")) {
    return "RED";
  }
  if (otherPrefix.value?.includes("PIG")) {
    return "LIGHT_PURPLE";
  }
  return rankClass.value?.replace("rank", "") ?? "GRAY";
});
</script>
