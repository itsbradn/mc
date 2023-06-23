<template>
  <div class="accordion" style="height: 65px">
    <div class="accordion__header" @click="clicked">
      <div class="header__title">{{ props.title }}</div>
    </div>
    <div class="accordion__content">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});

const clicked = (e) => {
  const header = e.target.classList.contains("header__title")
    ? e.target.parentElement
    : e.target;
  const content = header.nextSibling;
  const accordion = header.parentElement;
  const closedHeight = 65;
  let openHeight = content.getBoundingClientRect().height + closedHeight;

  if (!accordion.classList.contains("open")) {
    document.querySelectorAll(".accordion").forEach((v) => {
      const vContent = v.children[1];
      v.classList.remove("open");
      v.style.height = `${closedHeight}px`;
      vContent.style.opacity = `0%`;
    });
    openHeight = content.getBoundingClientRect().height + closedHeight;
    accordion.classList.add("open");
    accordion.style.height = `${openHeight}px`;
    content.style.opacity = `100%`;

    return;
  }
  accordion.classList.remove("open");
  accordion.style.height = `${closedHeight}px`;
  content.style.opacity = `0%`;
};
</script>
