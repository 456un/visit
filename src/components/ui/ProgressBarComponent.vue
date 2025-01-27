<script>
export default {
  name: "ProgressBarComponent",
  props: [
    'title',
    'value',
  ],
}


</script>

<template>
  <div class="progress-bar">
    <div class="progress-bar-text">
      <div class="progress-bar-title">{{ title }}</div>
      <div class="progress-bar-value">{{ value }}%</div>
    </div>
    <div class="progress-bar-bg">
      <div class="progress-bar-line" :style="{width: value + '%'}"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.progress-bar {
  width: 100%;
  margin-bottom: 20px;

  .progress-bar-text {
    display: flex;
    width: 100%;

    .progress-bar-title {
      font-size: .85em;
      line-height: 1.2em;
      margin-top: 6px;
    }

    .progress-bar-value {
      font-size: 16px;
      line-height: 1.4em;
      margin: 0 0 3px auto;
    }
  }

  .progress-bar-bg {
    width: 100%;
    height: 5px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    .progress-bar-line {
      height: 5px;
      background: #1FA184;
      border-radius: 8px;
    }
  }
}
</style>