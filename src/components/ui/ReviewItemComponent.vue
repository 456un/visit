<script>
export default {
  name: "ReviewComponent",
  props: [
    'name',
    'link',
    'type',
  ],
}
</script>

<template>
  <div class="review" :class="type">
    <div class="name">{{ name }}</div>
    <div class="desc"><slot></slot></div>
    <a class="view" :href="link" target="_blank" rel="noopener noreferrer">смотреть отзыв</a>
  </div>
</template>

<style scoped lang="scss">
.review {
  display: flex;
  flex-direction: column;
  margin-bottom: 33px;
  border-radius: 8px;
  width: calc(100% - 144px);
  height: 100px;
  padding: 18px 18px 18px 126px;
  z-index: 20;
  position: relative;

  &.male {
    background: url("@/assets/img/review-male.png") no-repeat center left 7px, #141414;
    background-size: 100px 100px, 100% 100%;
  }

  &.female {
    background: url("@/assets/img/review-female.png") no-repeat center left 7px, #141414;
    background-size: 100px 100px, 100% 100%;
  }

  .name {
    font-size: 16px;
    text-transform: uppercase;
  }

  .desc {
    font-size: 14px;
    margin-top: 8px;
    height: 45px;
    overflow: hidden;
  }

  .view {
    font-size: 14px;
    text-transform: lowercase;
    padding-right: 16px;
    cursor: pointer;
    color: white;
    text-decoration: none;
    width: fit-content;
    display: block;
    background: transparent url("@/assets/img/review-arrow.png") no-repeat top 2px right;
    background-size: 14px 14px;
  }
}

@media (max-width: 768px) {
  .review {
    padding: 10px 18px;
    width: calc(100% - 36px);

    &.male {
      background: #141414;
      background-size: 100% 100%;
    }

    &.female {
      background: #141414;
      background-size: 100% 100%;
    }

    .desc {
      font-size: 12px;
      height: 53px;
    }
  }
}
</style>