<template>{{ date }}</template>
<script setup>

  const props = defineProps({
    date: Number,
    seconds: Boolean
  });

  const day = props.seconds !== undefined && props.seconds == true ? dayjs(props.date * 1000) : dayjs(props.date);
const date = day.format("DD/MM/YYYY h:mm A")

</script>