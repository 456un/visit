<script>
export default {
  name: "Bitrix24ModuleItem",
  props: [
      "title",
      "price",
      "link",
  ],
}
</script>

<template>
<div class="bitrix24-module-item">
  <h2 class="title">{{ title }}</h2>
  <div class="content">
    <slot></slot>
  </div>
  <a class="price" target="_blank" :href="link">
    <div class="buy">Купить</div>
    <div class="price-num">{{ price }}</div>
  </a>
</div>
</template>

<style scoped lang="scss">
h2 {
  padding: 0;
  margin: 0;
}

.bitrix24-module-item {
  display: flex;
  flex-direction: column;
  background: #313C42;
  border-radius: 8px;
  padding: 22px 19px 22px 17px;

  .title {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 21px;
  }

  .price {
    padding: 11px 28px 12px 28px;
    background: black;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
    width: fit-content;
    text-decoration: none;
    margin-left: auto;

    .buy {
      text-transform: uppercase;
      margin-bottom: 6px;
    }

    .price-num {
      font-size: 14px;
    }
  }
}
</style>