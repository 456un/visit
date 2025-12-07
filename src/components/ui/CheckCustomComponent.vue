<script>
export default {
  name: "CheckCustomComponent",
  emits: ['updateValue'],
  props: [
      'label',
      'isChecked',
  ],
  data() {
    return {
      isCheck: this.isChecked,
    }
  },
  methods: {
    check() {
      this.isCheck = !this.isCheck;

      this.$emit('updateValue', this.isCheck);
    },
  },
}
</script>

<template>
  <div class="custom-checkbox">
    <div class="label">{{ label }}</div>
    <div class="check" :class="{checked: isCheck}" @click="check">
      <div class="not-checked" v-show="!isCheck">ВЫКЛ</div>
      <div class="check" v-show="isCheck">ВКЛ</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .custom-checkbox {
    display: flex;
    align-items: center;

    .label {
      width: fit-content;
      color: white;
      font-size: 16px;
      margin-right: 8px;
    }

    .check {
      display: flex;
      align-items: center;
      width: 128px;
      height: 27px;
      border-radius: 5px;
      background: #B3DFD3;
      cursor: pointer;

      .not-checked {
        display: flex;
        align-items: center;
        justify-content: center;
        background: black;
        color: white;
        font-size: 14px;
        margin-left: 1px;
        margin-right: auto;
        width: 63px;
        height: 25px;
        border-radius: 5px 0 0 5px;
      }

      .check {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #1FA184;
        color: white;
        font-size: 14px;
        margin-right: 1px;
        margin-left: auto;
        width: 63px;
        height: 25px;
        border-radius: 0 5px 5px 0;
      }
    }
  }
</style>