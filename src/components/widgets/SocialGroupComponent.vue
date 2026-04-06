<script>
export default {
  name: "SocialGroupComponent",
  props: [
    "telegram",
  ],
}
</script>

<template>
  <div class="social-group-component">
    <div class="social-links">
      <a :href="telegram" target="_blank" class="telegram"></a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.social-group-component {
  display: flex;
  border-radius: 8px;
  border: 1px solid #1FA184;
  width: 44px;
  height: 42px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .social-links {
    display: flex;
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