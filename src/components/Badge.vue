<template>
  <div class="badge" @mouseleave="onLeave">
    <img ref="badgeImage" @mouseenter="onHover" :src="path" alt="" />
    <div ref="badgeTooltip" class="tooltip">{{ tooltip }}</div>
  </div>
</template>
<script setup>
const props = defineProps({
  path: String,
  tooltip: String,
});

const { path, tooltip } = toRefs(props);
const badgeImage = ref(null);
const badgeTooltip = ref(null);

const onHover = () => {
  badgeTooltip.value.classList.add("hover");
};
const onLeave = () => {
  badgeTooltip.value.classList.remove("hover");
};
</script>
