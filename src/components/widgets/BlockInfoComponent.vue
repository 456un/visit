<script>
export default {
  name: "BlockInfoComponent"
}
</script>

<template>
  <div class="block-info">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
  .block-info {
    padding: 40px 35px;
    margin-bottom: 15px;
    background: #313C42;
    width: calc(100% - 70px);
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    .block-info {
      width: calc(100% - 10px);
      padding: 40px 25px;
    }
  }
</style>