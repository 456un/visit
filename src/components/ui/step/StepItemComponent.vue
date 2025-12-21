<script>
export default {
  name: "StepItemComponent",
  props: [
      'title',
      'price',
      'myWork',
      'link',
  ],
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
      this.$emit('updateShowFilm', this.isOpen);
    },
  },
  emits: ['updateShowFilm'],
}
</script>

<template>
  <div class="step-item" :class="{open: isOpen}" @click="toggle">
    <div class="main" :class="{'my-work': myWork}">
      <div class="title">{{ title }}</div>
      <div class="price" v-html="price"></div>
      <div class="btn-show" v-show="!isOpen"></div>
    </div>
    <div class="desc" :class="{open: isOpen}">
      <div class="text">
        <slot></slot>
        <div class="more-link" v-if="link?.trim()">
          <RouterLink :to="link">подробнее</RouterLink>
        </div>
      </div>
      <div class="btn-close"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.step-item {
  cursor: pointer;
  width: 100%;

  &.open {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
  }

  .main {
    background: #1FA184;
    border-radius: 8px;
    width: 100%;
    height: fit-content;
    min-height: 128px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    position: relative;

    &.my-work {
      background: url("@/assets/img/hammer2.png") no-repeat top 8px right 8px, #1FA184;
      background-size: 20px 20px, 100% 100%;
    }

    .title {
      font-size: 16px;
      margin-top: 16px;
    }

    .price {
      font-size: 14px;
      margin-top: 16px;
      text-align: center;

      :deep(.up) {
        font-size: 0.7em;
        vertical-align: super;
      }
    }

    .btn-show {
      width: 100%;
      height: 35px;
      background: url("@/assets/img/step-arrow-down.png") no-repeat center center, #B3DFD3;
      background-size: 24px 24px, 100% 100%;
      border-radius: 0 0 8px 8px;
      margin-top: auto;
    }
  }

  .desc {
    display: none;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    margin-top: -28px;
    padding-top: 12px;

    &.open {
      display: flex;
      height: fit-content;
      overflow: hidden;
    }

    .text {
      padding: 12px 11px;
      background: #2C6C5E;
      font-size: 12px;

      :deep(ul) {
        padding-left: 20px;
      }
    }

    .btn-close {
      width: 100%;
      height: 35px;
      background: url("@/assets/img/step-arrow-up.png") no-repeat center center, #B3DFD3;
      background-size: 24px 24px, 100% 100%;
      border-radius: 0 0 8px 8px;
    }

    .more-link {
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        color: white;
        font-size: 12px;
        display: block;
        margin: 10px 0 5px 0;
        text-transform: uppercase;
        text-decoration: underline;
      }
    }
  }
}

@media (max-width: 1024px) {
  .step-item {
    .main {
      &.my-work {
        background: url("/src/assets/img/hammer2.png") no-repeat top 5px right 5px, #1FA184;
        background-size: 11px 11px, 100% 100%;
      }

      .title {
        font-size: 12px;
        word-break: break-all;
        text-align: center;
        padding: 0 5px;
      }

      .price {
        font-size: 11px;
        padding: 0 5px;
      }
    }
  }
}
</style>