<script>
export default {
  name: "BlogMenuComponent"
}
</script>

<template>
  <div class="header-title">Полезно для заказчика</div>
  <slot></slot>
</template>

<style scoped lang="scss">
  .header-title {
    padding-bottom: 16px;
    font-size: 20px;
    border-bottom: 1px solid #2C6C5E;
  }
</style>