<template>
  <div class="accordion">
    <div class="accordion__header"><div class="header__title">{{ props.title }}</div></div>
    <div class="accordion__content">
      <slot />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: String,  
  })

  onMounted(() => {
    document.querySelectorAll('.accordion').forEach(e => {
      const header = e.children[0];
      const content = e.children[1];

      const closedHeight = 65;
      let openHeight = content.getBoundingClientRect().height + closedHeight;
        e.style.height = `${closedHeight}px`

      header.addEventListener('click', () => {
        if (!e.classList.contains('open')) {
          const accords = document.querySelectorAll('.accordion')
          for (const accord of accords) {
            if (!accord.classList.contains('open')) continue;
            const accordContent = accord.children[1];
            accord.classList.remove('open');
            accord.style.height = `${closedHeight}px`;
            accordContent.style.opacity = `0%`;
          }
          openHeight = content.getBoundingClientRect().height + closedHeight;
          e.classList.add('open');
          e.style.height = `${openHeight}px`;
          content.style.opacity = `100%`;

          return;
        }
        e.classList.remove('open');
        e.style.height = `${closedHeight}px`
        content.style.opacity = `0%`;
      })
    })
  })
</script>