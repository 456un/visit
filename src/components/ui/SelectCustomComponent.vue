<script>
export default {
  name: "SelectCustomComponent",
  props: [
    'selectName',
    'selectDefault',
  ],
  methods: {},
  mounted() {
    const selectName = this.selectName;
    const selectDefaultVal = this.selectDefault;

    const customSelect = document.querySelector(`.select-custom[data-name="${selectName}"]`);

    const selectList = document.querySelector(`.list[data-name="${selectName}"]`);

    customSelect.addEventListener("click", () => {
      if (selectList.classList.contains('hide')) {
        selectList.classList.remove('hide');
      } else {
        selectList.classList.add('hide');
      }
    });

    const selectDefault = selectList.querySelector(`.option[data-value="${selectDefaultVal}"]`);
    customSelect.innerText = selectDefault.innerText;
    customSelect.dataset.value = selectDefaultVal;

    selectList.querySelectorAll('.option').forEach((option) => {
      option.addEventListener('click', (e) => {
        customSelect.innerText = option.innerText;
        customSelect.dataset.value = option.dataset.value;
        selectList.classList.add('hide');
      });
    });
  },
}
</script>

<template>
  <div class="select-wrapper">
    <div class="select-custom" :data-name="selectName"></div>
    <div class="list hide" :data-name="selectName">
      <slot name="option"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.select-wrapper {
  position: relative;
  width: calc(100% - 142px);

  select {
    display: none;
  }

  .select-custom {
    margin-top: 11px;
    color: black;
    outline: none;
    border: none;
    background: url("@/assets/img/arrow-select.png") no-repeat center right 14px, #B3DFD3;
    background-size: 15px 12px, 100% 100%;
    border-radius: 8px;
    padding: 10px 13px 9px 13px;
    font-size: 16px;
    height: fit-content;
    cursor: pointer;
  }

  :deep(.list) {
    position: absolute;
    top: 54px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: #B3DFD3;
    border-radius: 8px;
    height: fit-content;
    box-shadow: 1px 1px 8px 0 rgba(0, 0, 0, 0.5);
    overflow: hidden;

    .option {
      color: black;
      font-size: 14px;
      width: 100%;
      padding: 6px 13px;
      border-bottom: 1px #AFBFBC solid;
      cursor: pointer;

      &:first-child {
        padding-top: 9px;
      }

      &:hover {
        background: aquamarine;
      }
    }

    &.hide {
      display: none;
    }
  }
}
</style>