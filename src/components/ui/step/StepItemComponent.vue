<script>
export default {
  name: "StepItemComponent",
  props: [
      'title',
      'price',
      'myWork',
  ],
}
</script>

<template>
  <div class="step-item">
    <div class="main" :class="{'my-work': myWork}">
      <div class="title">{{ title }}</div>
      <div class="price" v-html="price"></div>
      <div class="btn-show"></div>
    </div>
    <div class="desc" v-show="false"><slot></slot></div>
  </div>
</template>

<style scoped lang="scss">
.main {
  background: #1FA184;
  border-radius: 8px;
  width: 100%;
  height: fit-content;
  min-height: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &.my-work {
    background: url("@/assets/img/hammer2.png") no-repeat top 8px right 8px, #1FA184;
    background-size: 20px 20px, 100% 100%;
  }

  .title {
    font-size: 16px;
    margin-top: 16px;
  }

  .price {
    font-size: 14px;
    margin-top: 16px;

    :deep(.up) {
      font-size: 0.7em;
      vertical-align: super;
    }
  }

  .btn-show {
    width: 100%;
    height: 35px;
    background: url("@/assets/img/step-arrow-down.png") no-repeat center center, #B3DFD3;
    background-size: 24px 24px, 100% 100%;
    border-radius: 0 0 8px 8px;
    margin-top: auto;
  }
}
</style>