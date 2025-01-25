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
    width: 45px;
    background: transparent url("@/assets/img/logo.png") no-repeat center center;
    background-size: 45px 45px;
  }
</style>