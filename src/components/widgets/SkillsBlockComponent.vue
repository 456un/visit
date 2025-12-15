<script>
export default {
  name: "SkillsBlockComponent",
  data () {
    return {
      isShowAll: false,
    }
  },
  methods: {
    showAll() {
      this.isShowAll = true;
    },
  },
}
</script>

<template>
  <div class="skill-wrapper-main">
    <slot name="main"></slot>
  </div>
  <div class="show-all" :class="{hide: isShowAll}">
    <div class="show-all-btn" @click="showAll">
      <div class="label-btn">больше информации</div>
      <div class="img-btn"></div>
    </div>
  </div>
  <div class="skill-wrapper-all" :class="{show: isShowAll}">
    <slot name="all"></slot>
  </div>
</template>

<style scoped lang="scss">
.show-all {
  display: flex;
  justify-content: center;
  margin-top: 30px;

  &.hide {
    display: none;
  }

  .show-all-btn {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    .label-btn {
      font-size: 14px;
    }

    .img-btn {
      background: transparent url("@/assets/img/down.png") no-repeat center center;
      background-size: 20px 20px;
      width: 20px;
      height: 20px;
      margin-top: 5px;
    }
  }
}

.skill-wrapper-all {
  display: block;
  max-height: 0;
  transition: max-height 2s, opacity 2s;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;

  &.show {
    max-height: 5000px;
    opacity: 1;
    visibility: visible;
  }
}
</style>