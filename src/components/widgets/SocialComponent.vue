<script>
export default {
  name: "SocialComponent"
}
</script>

<template>
  <div class="social-links">
    <a href="https://t.me/AnSm456un" class="telegram"></a>
    <a href="https://freelance.habr.com/freelancers/456un" class="habr"></a>
    <a href="https://kwork.ru/user/456un" class="kwork"></a>
    <a href="https://www.fl.ru/users/456un/portfolio/" class="fl"></a>
    <a href="https://freelance.ru/AnSm" class="freelance"></a>
  </div>
</template>

<style scoped lang="scss">
  .social-links {
    display: flex;
    margin-top: 26px;

    a {
      height: 20px;
      width: 20px;
      margin: 0 5px;

      &.telegram {
        background: transparent url("@/assets/img/telegram.png") no-repeat center center;
        background-size: 20px 20px;
      }

      &.habr {
        background: transparent url("@/assets/img/habr.png") no-repeat center center;
        background-size: 20px 20px;
      }

      &.kwork {
        background: transparent url("@/assets/img/kwork.png") no-repeat center center;
        background-size: 40px 40px;
      }

      &.fl {
        background: transparent url("@/assets/img/fl.png") no-repeat center center;
        background-size: 40px 40px;
      }

      &.freelance {
        background: transparent url("@/assets/img/freelance.png") no-repeat center center;
        background-size: 35px 35px;
      }
    }
  }
</style>