<script>
export default {
  name: "DesignItemComponent",
  props: [
      'title',
      'link',
      'mobileImg',
      'desktopImg',
  ],
}
</script>

<template>
  <div class="design-item">
    <div class="left-block">
      <img class="mobile" :src="mobileImg"/>
    </div>
    <div class="right-block">
      <img class="desktop" :src="desktopImg"/>
      <div class="title">{{ title }}</div>
    </div>
    <a class="wrapper-hover" :href="link" target="_blank" rel="noopener noreferrer">
      <div class="wrapper-left-block"></div>
      <div class="wrapper-right-block">
        <div class="label">дизайн</div>
      </div>
    </a>
  </div>
</template>

<style scoped lang="scss">
.design-item {
  padding: 14px 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  background: #2C6C5E;
  margin-top: 32px;
  cursor: pointer;
  position: relative;

  .left-block {
    display: flex;
    width: 32%;
    max-height: 367px;

    .mobile {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background-size: 100% 100%;
    }
  }

  .right-block {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    width: 67%;
    max-height: 367px;

    .desktop {
      width: 100%;
      height: 75%;
      border-radius: 8px;
      background-size: 100% 100%;
      max-height: 274px;
    }

    .title {
      margin: auto 8px auto 0;
      font-size: 20px;
      color: white;
      text-align: center;
      width: calc(100% - 8px);
    }
  }

  .wrapper-hover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    font-size: 16px;
    text-decoration: none;
    color: white;
    outline: none;
    border: none;
    overflow: hidden;

    opacity: 0;
    transition: opacity .3s ease;
    pointer-events: none;

    .wrapper-left-block {
      position: absolute;
      height: 100%;
      width: 100%;
      background: black;
      border-radius: 8px;
      top: 0;
      left: 0;

      opacity: 0;
      transition: opacity .5s ease;
    }

    .wrapper-right-block {
      position: relative;
      height: 100%;
      width: calc(50% - 90px);
      margin-left: 50%;
      padding-right: 75px;
      padding-left: 15px;
      text-align: center;
      background: url("@/assets/img/design-arrow.png") no-repeat center right 15px, #1FA184;
      background-size: 50px 50px, 100% 100%;
      border-radius: 0 8px 8px 0;
      display: flex;
      justify-content: center;
      align-items: center;

      transform: translateX(100%);
      transition: transform .5s ease;
    }
  }

   &:hover {
     .wrapper-hover {
       opacity: 1;
       pointer-events: all;

       .wrapper-left-block {
         opacity: .8;
       }

       .wrapper-right-block {
         transform: translateX(0);
       }
     }
   }
}
</style>