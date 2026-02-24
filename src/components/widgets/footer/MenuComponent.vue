<script>
export default {
  name: "FooterMenuComponent",
}
</script>

<template>
  <div class="menu">
    <RouterLink to="/">Обо мне</RouterLink>
    <RouterLink to="/partner">Партнерство</RouterLink>
    <RouterLink to="/blog">Блог</RouterLink>
    <RouterLink to="/service">Сервисы</RouterLink>
  </div>
</template>

<style scoped lang="scss">
.menu {
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  a {
    font-size: 20px;
    text-decoration: none;
    margin-bottom: 14px;
    color: white;
  }
}
</style>