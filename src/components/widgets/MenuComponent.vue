<script>
export default {
  name: "MenuComponent"
}
</script>

<template>
  <div class="menu">
    <RouterLink to="/">Главная</RouterLink>
    <RouterLink to="/blog" :style="{display: 'none'}">Блог</RouterLink>
  </div>
</template>

<style scoped lang="scss">
  .menu {
    margin-left: auto;
    display: flex;

    a {
      color: white;
      text-decoration: none;
      font-size: 20px;
      margin-left: 30px;
      padding: 10px 0;
      display: block;
    }
  }
</style>