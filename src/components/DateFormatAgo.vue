<template>{{ date }}</template>
<script setup>

  const props = defineProps({
    date: Number,
    seconds: Boolean
  });
  dayjs.extend(window.dayjs_plugin_relativeTime)
  const day = props.seconds !== undefined && props.seconds == true ? dayjs(props.date * 1000) : dayjs(props.date);
const date = day.fromNow();

</script>