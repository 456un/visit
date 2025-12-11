<script>
export default {
  name: "LogoComponent"
}
</script>

<template>
  <a href="/" id="logo"></a>
</template>

<style lang="scss" scoped>
  #logo {
    display: block;
    height: 45px;
    width: 46px;
    background: transparent url("@/assets/img/logo2.webp") no-repeat center center;
    background-size: 46px 45px;
  }
</style>