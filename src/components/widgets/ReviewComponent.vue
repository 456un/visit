<script>
export default {
  name: "ReviewComponent",
  props: [
    'name',
    'link',
  ],
}
</script>

<template>
  <div class="review-component">
    <div class="review-avatar"></div>
    <div class="review-content">
      <a class="review-content-name" href="{{ link }}">{{ name }}</a>
      <div class="review-text"><slot></slot></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.review-component {
  display: flex;
  padding: 0 60px;
  margin-bottom: 60px;

  .review-avatar {
    background: transparent url("@/assets/img/avatar.png") no-repeat center center;
    background-size: 54px 54px;
    width: 54px;
    height: 54px;
  }

  .review-content {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    width: calc(100% - 74px);

    .review-content-name {
      line-height: 1.1;
      font-size: .875em;
      color: white;
      text-transform: uppercase;
      text-decoration: none;
      margin-top: 10px;
      margin-bottom: 15px;
    }

    .review-text {
      font-size: .875em;
      letter-spacing: 1px;
      text-align: justify;
    }
  }
}
</style>