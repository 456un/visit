<script>
export default {
  name: "BlogItemMenuComponent",
  props: [
      'title',
      'link',
  ],
}
</script>

<template>
  <RouterLink :to="{ name: 'blog.post', params: { slug: link}}">{{ title }}</RouterLink>
</template>

<style scoped lang="scss">
a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 12px 40px 16px 49px;
  display: block;
  border-bottom: 1px solid #2C6C5E;
  margin-left: -27px;
  background: transparent url("@/assets/img/blog/right.png") no-repeat center right;
  background-size: 30px 30px;
}
</style>