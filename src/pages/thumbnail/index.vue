<template>
  <div id="data">
    <h1>TEST!</h1>
  </div>
</template>

<script setup>
import html2canvas from "html2canvas";

definePageMeta({
  layout: false,
});

onMounted(() => {
  html2canvas(document.querySelector("#data"), {
    backgroundColor: null,
    height: 675,
    width: 1200,
  }).then(function (canvas) {
    document.body.appendChild(canvas);
    document.querySelector("#data").remove();
  });
});
</script>
