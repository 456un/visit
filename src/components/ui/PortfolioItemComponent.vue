<script>
export default {
  name: "PortfolioItemComponent",
  data() {
    return {
      isOpen: false,
    }
  },
  props: [
    'className',
    'title',
  ],
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
}
</script>

<template>
  <div class="portfolio-item" @click="toggle" :class="{hover: !isOpen, open: isOpen}">
    <div class="portfolio-item-arrow-right"></div>
    <div class="portfolio-item-hover-left">
      <div class="desc-title">{{ title }}</div>

      <div class="desc">
        <slot></slot>
      </div>
    </div>
    <div class="portfolio-item-hover-left-wrapper"></div>
    <div class="portfolio-item-left" :class="className">
      <div class="title">{{ title }}</div>
    </div>
    <div class="portfolio-item-right"></div>
  </div>
</template>

<style scoped lang="scss">
.portfolio-item {
  display: flex;
  margin-top: 32px;
  cursor: pointer;
  height: 200px;
  overflow: hidden;
  position: relative;

  .portfolio-item-left,
  .portfolio-item-right,
  .portfolio-item-hover-left,
  .portfolio-item-hover-left-wrapper,
  .portfolio-item-arrow-right {
    transition: width .35s ease, margin-left .35s ease, border-radius .35s ease, opacity .35s ease, padding-right .35s ease, z-index .35s ease;
  }

  .portfolio-item-arrow-right {
    border-radius: 8px 0 0 8px;
    height: 100%;
    width: 0;
    background: url("@/assets/img/portfolio-arrow-left.png") no-repeat center center, #B3DFD3;
    background-size: 50px 50px, 100% 100%;
    position: relative;
    z-index: 10;
  }

  .portfolio-item-hover-left, .portfolio-item-hover-left-wrapper {
    height: 100%;
    width: calc(100% - 42px);
    position: absolute;
    border-radius: 8px 0 0 8px;
  }

  .portfolio-item-hover-left {
    background: #2C6C5E;
    z-index: 1;
  }

  .portfolio-item-hover-left-wrapper {
    background: black;
    opacity: .77;
    z-index: 5;
  }

  .portfolio-item-left {
    width: calc(100% - 61px);
    height: 100%;
    border-radius: 8px 0 0 8px;
    display: flex;
    z-index: 10;
    position: relative;

    &.id {
      background: url("@/assets/img/portfolio/id.png") no-repeat center left 18px, #1FA184;
      background-size: 100px 100px, 100% 100%;
    }

    &.geo {
      background: url("@/assets/img/portfolio/geo.png") no-repeat center left 18px, #1FA184;
      background-size: 100px 100px, 100% 100%;
    }

    &.pay {
      background: url("@/assets/img/portfolio/pay.png") no-repeat center left 18px, #1FA184;
      background-size: 100px 100px, 100% 100%;
    }

    &.jewerly {
      background: url("@/assets/img/portfolio/jewerly.png") no-repeat center left 18px, #1FA184;
      background-size: 100px 100px, 100% 100%;
    }

    &.bitrix24 {
      background: url("@/assets/img/portfolio/bitrix24.png") no-repeat center left 18px, #1FA184;
      background-size: 100px 100px, 100% 100%;
    }

    .title {
      display: flex;
      margin: auto 65px auto 126px;
    }
  }

  .portfolio-item-right {
    border-radius: 0 8px 8px 0;
    height: 100%;
    width: 61px;
    background: url("@/assets/img/portfolio-arrow-right.png") no-repeat center center, #B3DFD3;
    background-size: 50px 50px, 100% 100%;
    position: relative;
    z-index: 10;
  }

  @media (hover: hover) {
    &.hover:hover {
      .portfolio-item-left {
        width: calc(100% - 42px - 118px);
        margin-left: 118px;
        border-radius: 0;
      }

      .portfolio-item-right {
        width: 42px;
      }
    }
  }

  &.open {
    .portfolio-item-arrow-right {
      padding-right: 42px;
    }

    .portfolio-item-hover-left-wrapper {
      opacity: 0;
    }

    .portfolio-item-hover-left {
      border-radius: 0 8px 8px 0;
      margin-left: 42px;
      z-index: 11;
    }

    .portfolio-item-left {
      width: 0;
      margin-left: 100%;
      border-radius: 0;
    }

    .portfolio-item-right {
      width: 0;
    }
  }

  .desc-title, .desc {
    color: white;
    text-align: left;
  }

  .desc-title {
    font-size: 16px;
    padding: 15px 0 0 12px;
  }

  .desc {
    font-size: 14px;
    padding: 10px 12px;
  }
}
</style>