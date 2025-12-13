<script>
export default {
  name: "StepHeaderComponent",
}
</script>

<template>
  <div class="step-header">
    <div class="title"><slot></slot></div>
    <div class="line"></div>
  </div>
</template>

<style scoped lang="scss">
  .step-header {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    margin-bottom: 26px;
    text-transform: uppercase;

    .line {
      margin-top: 5px;
      height: 2px;
      width: 100%;
      background: white;
    }
  }
</style>