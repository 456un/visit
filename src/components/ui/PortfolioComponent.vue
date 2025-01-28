<script>
export default {
  name: "PortfolioComponent",
  props: [
      'src',
  ],
}
</script>

<template>
  <div class="portfolio" :style="{ background: `transparent url('${src}') no-repeat top left`, backgroundSize: 'cover' }">
    <div class="text"><slot></slot></div>
  </div>
</template>

<style scoped lang="scss">
.portfolio {
  width: 50%;
  aspect-ratio: 1/1;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: 1s opacity;
  }

  &:hover {
    &:before {
      opacity: 1;
      background: rgba(0, 0, 0, 0.8); /* Черный полупрозрачный слой */
      z-index: 1;
    }

    .text {
      display: block;
      opacity: 1;
    }
  }

  .text {
    z-index: 2;
    opacity: 0;
    transition: opacity 2s;
  }
}
</style>