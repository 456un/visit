<script>
export default {
  name: "BtnIconHrefComponent",
  props: [
    'srcIcon',
    'title',
    'link',
  ],
}
</script>

<template>
  <RouterLink :to="link" class="btn-icon">
    <img :src="srcIcon" alt="иконка" class="icon" />
    <div class="title">{{ title }}</div>
  </RouterLink>
</template>

<style scoped lang="scss">
.btn-icon {
  display: flex;
  padding: 8px 10px 8px 9px;
  border: 1px solid #1FA184;
  border-radius: 8px;
  align-items: center;
  text-decoration: none;

  .icon {
    width: 25px;
    height: 25px;
  }

  .title {
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-left: 14px;
    margin-top: 2px;
    text-transform: uppercase;
    color: white;
  }
}
</style>