<script>
export default {
  name: "PartnerItemComponent",
  props: [
      'srcImg',
  ],
}
</script>

<template>
  <div class="partner-item">
    <div class="partner-left">
      <img class="partner-img" :src="srcImg" alt=""/>
    </div>
    <div class="partner-right">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .partner-item {
    display: flex;
    background: #313C42;
    border-radius: 8px;
    min-height: 177px;
    height: fit-content;
    width: 100%;

    .partner-left {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 179px;
      height: auto;
      background: #1FA184;
      border-radius: 8px 0 0 8px;

      .partner-img {
        width: 134px;
        height: auto;
      }
    }

    .partner-right {
      width: calc(100% - 179px);
      padding: 21px 15px;
    }
  }

  @media (max-width: 1023px) {
    .partner-item {
      .partner-left {
        width: 120px;

        .partner-img {
          width: 100px;
        }
      }

      .partner-right {
        width: calc(100% - 120px);
        padding: 21px 15px;
      }
    }
  }
</style>