<template>
  {{ formatted }}
</template>

<script setup>
const props = defineProps({
  number: Number,
  big: Boolean,
});

const { number, big } = toRefs(props);

function nFormatter(num, digits) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}

const formatted = computed(() => {
  let num = big.value
    ? nFormatter(number.value ?? 0, 2)
    : number.value?.toLocaleString();
  if (number.value === undefined || number.value === null) num = 0;
  return num;
});
</script>
