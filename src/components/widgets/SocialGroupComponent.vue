<script>
export default {
  name: "SocialGroupComponent",
  props: [
    "vk",
    "telegram",
  ],
}
</script>

<template>
  <div class="social-group-component">
    <div class="social-links">
      <a :href="telegram" target="_blank" class="telegram"></a>
      <a :href="vk" target="_blank" class="vk"></a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.social-group-component {
  display: flex;
  border-radius: 8px;
  border: 1px solid #1FA184;
  width: 74px;
  height: 42px;
  flex-direction: column;
  align-items: center;

  .social-links {
    display: flex;
    margin-top: 8px;
    align-items: center;

    .telegram {
      background: transparent url("@/assets/img/social/telegram.png") no-repeat center center;
      background-size: 19px 19px;
      width: 19px;
      height: 19px;
    }

    .vk {
      background: transparent url("@/assets/img/social/vk.png") no-repeat center center;
      background-size: 25px 25px;
      width: 25px;
      height: 25px;
    }

    a:not(:first-child) {
      margin-left: 12px;
    }
  }
}
</style>