<template>
  <span class="mc-rank" v-if="rankString !== 'Default'"><span :class="borderColor">[</span><span :class="rankClass">{{ rankString }}</span><span v-if="plus !== ''" :class="plusClass">{{ plus }}</span><span :class="borderColor">] {{ props.username }}</span></span>
  <span class="mc-rank GRAY" v-else>Default</span>
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

let plus = props.rank === "MVP_PLUS" | props.rank === "VIP_PLUS" ? (props.monthly !== "NONE" ? "++" : "+") : ""; 
let plusClass = props.rank === "MVP_PLUS" ? `plus ${props.plusColor}` : "plus";

let rankString = `Default`;
switch (props.rank) {
  case "VIP": {
    rankString = "VIP";
    break;
  }
  case "VIP_PLUS": {
    rankString = "VIP";
    break;
  }
  case "MVP": {
    rankString = "MVP";
    break;
  }
  case "MVP_PLUS": {
    rankString = "MVP";
    break;
  }
}
if (rankString === 'VIP') {
  plusClass = 'plus WHITE';

}

let rankClass = !props.monthly || props.monthly !== "NONE" ? "rank " + (props.monthlyColor !== undefined ? props.monthlyColor : "AQUA") : (rankString === "MVP" ? "rank AQUA" : "rank GREEN");
if (rankString !== 'MVP' && rankString !== 'VIP') rankClass = 'rank';
if (rankString === 'VIP') rankClass = 'rank GREEN';
let borderColor = rankClass.replace("rank", "");

if (props.otherRank === 'YOUTUBER') {
  rankClass = 'rank WHITE';
  plus = '';
  borderColor = 'RED'
  rankString = 'YOUTUBER'
}
if (props.otherRank === 'ADMIN') {
  rankClass = 'rank RED';
  plus = '';
  borderColor = 'RED'
  rankString = 'ADMIN'
}
if (props.otherRank === 'GAME_MASTER') {
  rankClass = 'rank DARK_GREEN';
  plus = '';
  borderColor = 'DARK_GREEN'
  rankString = 'GM'
}
if (props.otherPrefix?.includes("OWNER")) {
  rankClass = 'rank RED';
  plus = '';
  borderColor = 'RED'
  rankString = 'OWNER'
}
if (props.otherPrefix?.includes("MOJANG")) {
  rankClass = 'rank GOLD';
  plus = '';
  borderColor = 'GOLD'
  rankString = 'MOJANG'
}
if (props.otherPrefix?.includes("EVENTS")) {
  rankClass = 'rank GOLD';
  plus = '';
  borderColor = 'GOLD'
  rankString = 'EVENTS'
}
if (props.otherPrefix?.includes("MCP")) {
  rankClass = 'rank RED';
  plus = '';
  borderColor = 'RED'
  rankString = 'MCP'
}
if (props.otherPrefix?.includes("PIG")) {
  rankClass = 'rank LIGHT_PURPLE';
  plus = '+++';
  plusClass = 'plus AQUA'
  borderColor = 'LIGHT_PURPLE'
  rankString = 'PIG'
}
</script>