<script>
export default {
  name: "TextAreaCustomComponent",
  emits: ['updateValue'],
  props: [
      'place',
      'areaName',
  ],
  methods: {
    checkResize() {
      this.resize = !this.resize;
    },
    update(e) {
      this.$emit('updateValue', e.target.value);
    },
  },
  data() {
    return {
      resize: false,
    }
  },
}
</script>

<template>
  <div class="wrapper-textarea">
    <textarea :name="areaName" :placeholder="place" :class="{'resize': resize}" @change="update"></textarea>
    <div class="btn-resize" @click="checkResize"></div>
  </div>
</template>

<style scoped lang="scss">
.wrapper-textarea {
  position: relative;
  width: 100%;
  margin-top: 11px;
  display: flex;

  textarea {
    overflow: hidden;
    resize: none;

    color: black;
    outline: none;
    border: none;
    background: #B3DFD3;
    border-radius: 8px;
    padding: 9px 13px 10px 13px;
    font-size: 16px;
    width: 100%;
    height: 20px;

    &.resize {
      resize: vertical;
      height: 160px;
      overflow-y: auto;
    }

    &:focus::placeholder {
      color: transparent;
    }

    &::placeholder {
      color: black;
    }

    &:disabled {
      background: #A4A4A4;
      cursor: not-allowed;
    }
  }

  .btn-resize {
    position: absolute;
    background: url("@/assets/img/resize.png") no-repeat center center;
    background-size: 20px 20px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    top: 11px;
    right: 11px;
    z-index: 2;
  }
}
</style>