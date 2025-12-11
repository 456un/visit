<script>
export default {
  name: "SocialComponent"
}
</script>

<template>
  <div class="social-links">
    <a href="https://t.me/AnSm456un" class="telegram"></a>
    <a href="mailto:456unansm@gmail.com" class="email"></a>
  </div>
</template>

<style scoped lang="scss">
  .social-links {
    display: flex;
    margin-top: 26px;
    align-items: center;

    a {
      height: 20px;
      width: 20px;
      margin: 0 10px;

      &.telegram {
        background: transparent url("@/assets/img/telegram.png") no-repeat center center;
        background-size: 20px 20px;
      }

      &.email {
        background: transparent url("@/assets/img/email2.png") no-repeat top -4px center;
        background-size: 25px 27px;
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

      &.git {
        background: transparent url("@/assets/img/git.png") no-repeat center center;
        background-size: 35px 35px;
      }
    }
  }
</style>