<script>
export default {
  name: "ServiceComponent",
  data() {
    return {
      open: false,
    }
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  },
  props: [
      'title',
      'hideDecode',
      'hideEncode',
  ],
}
</script>

<template>
  <div class="service">
    <div class="title" :class="{open: open}" @click="toggle">{{ title }}</div>
    <div class="service-form" v-show="open">
      <div class="form-decode" v-show="!hideDecode">
        <slot name="decode"></slot>
      </div>
      <div class="form-encode" v-show="!hideEncode">
        <slot name="encode"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.service {
  margin-bottom: 25px;

  .title {
    font-size: 16px;
    background: url("@/assets/img/arrow-open.png") no-repeat center right 15px, #1FA184;
    background-size:  15px 12px, 100% 100%;
    border-radius: 8px;
    display: flex;
    align-items: center;
    height: fit-content;
    width: calc(100% - 40px);
    padding: 10px 20px;
    cursor: pointer;

    &.open {
      background: url("@/assets/img/arrow-close.png") no-repeat center right 15px, #1FA184;
      background-size:  15px 12px, 100% 100%;
    }
  }

  .form-decode, .form-encode {
    width: calc(100% - 28px);
    display: flex;
    flex-direction: column;
    background: #313C42;
    border-radius: 8px;
    padding: 13px 14px 23px 14px;
    margin-top: 10px;
  }
}
</style>