<script>
export default {
  name: "WorkExperienceBoxComponent",
  props: [
    'title',
    'place',
  ],
}
</script>

<template>
  <div class="work-experience-box">
    <div class="work-experience-title">
      {{ title }}
    </div>
    <div class="work-experience-place">
      {{ place }}
    </div>
    <div class="work-experience-description">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.work-experience-box {
  margin-left: 22px;
  border-left: 1px solid #1FA184;
  padding: 6px 90px 40px 20px;

  .work-experience-title {
    text-transform: uppercase;
    font-weight: 400;
    line-height: 1.1;
    font-size: 20px;
    margin-bottom: 22px;
  }

  .work-experience-place {
    font-size: 16px;
    line-height: 1.4em;
    letter-spacing: .08em;
    opacity: .5;
    margin-bottom: 15px;
  }

  .work-experience-description {
    text-align: justify;
    font-size: .875em;
  }
}
</style>