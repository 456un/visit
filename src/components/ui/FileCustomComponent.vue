<script>
export default {
  name: "FileCustomComponent",
  emits: ['updateValue'],
  props: [
      'inputName',
      'isDisabled',
      'isShow',
  ],
  methods: {
    selectFile() {
      if (this.isDisabled) {
        return false;
      }

      document.querySelector(`input[name="${this.inputName}"]`).click();
    },
    changeFile(e) {
      if (this.isDisabled) {
        return false;
      }

      const file = e.target.files[0];

      document.querySelector(`.file[data-name="${this.inputName}"]`).innerText = file.name;

      this.$emit('updateValue', file);
    }
  },
}
</script>

<template>
  <input type="file" :name="inputName" :disabled="isDisabled" v-show="false" @change="changeFile" />
  <div class="file" :data-name="inputName" :class="{'disabled': isDisabled}" v-show="isShow" @click="selectFile">
    Выбрать файл
  </div>
</template>

<style scoped lang="scss">
.file {
  width: calc(100% - 169px);
  margin-top: 11px;
  color: black;
  outline: none;
  border: none;
  background: url("@/assets/img/file-bin.png") no-repeat center right 7px, #B3DFD3;
  background-size: 25px 25px, 100% 100%;
  border-radius: 8px;
  padding: 10px 13px 9px 13px;
  font-size: 16px;
  height: fit-content;
  cursor: pointer;

  &.disabled {
    background: url("@/assets/img/file-bin.png") no-repeat center right 7px, #A4A4A4;
    background-size: 25px 25px, 100% 100%;
    cursor: not-allowed;
  }
}
</style>