<script>
export default {
  name: "WorkExperienceItemComponent",
  props: [
    'startYear',
    'endYear',
    'title',
    'place',
  ],
}
</script>

<template>
  <div class="work-experience-item">
    <div class="years">{{ startYear }}&mdash;{{ endYear }}</div>
    <div class="title">{{ title }}</div>
    <div class="place">{{ place }}</div>
    <div class="desc">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .work-experience-item {
    background-color: #141414;
    border-radius: 8px;
    position: relative;
    padding: 16px 31px 20px 22px;
    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 0;
    }

    .years {
      display: flex;
      position: absolute;
      z-index: 2;
      background: #1FA184;
      border-radius: 8px;
      font-size: 16px;
      width: 140px;
      height: 30px;
      align-items: center;
      justify-content: center;
      top: 21px;
      right: 12px;
    }

    .title {
      font-size: 20px;
      width: calc(100% - 172px);
    }

    .place {
      font-size: 12px;
      margin-top: 7px;
      opacity: .5;
    }

    .desc {
      margin-top: 9px;
      font-size: 14px;
    }
  }
</style>