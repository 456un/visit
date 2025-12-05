<script>
export default {
  name: "MenuComponent",
  data() {
    return {
      openMenu: false,
    };
  },
  methods: {
    showMenu() {
      this.openMenu = true;
    },
    hideMenu() {
      this.openMenu = false;
    }
  },
}
</script>

<template>
  <div class="menu">
    <RouterLink to="/">Обо мне</RouterLink>
    <RouterLink to="/blog" :style="{display: 'none'}">Блог</RouterLink>
    <RouterLink to="/service">Сервисы</RouterLink>
    <RouterLink to="/donate" :style="{display: 'none'}">Поддержать</RouterLink>
  </div>
  <div class="menu-mobile">
    <div class="menu-btn" @click="showMenu" v-show="!openMenu"></div>
    <div class="close-btn" @click="hideMenu" v-show="openMenu"></div>
    <div class="menu-popup" v-show="openMenu">
      <RouterLink to="/" @click="hideMenu">Обо мне</RouterLink>
      <RouterLink to="/blog" :style="{display: 'none'}" @click="hideMenu">Блог</RouterLink>
      <RouterLink to="/service" @click="hideMenu">Сервисы</RouterLink>
      <RouterLink to="/donate" :style="{display: 'none'}" @click="hideMenu">Поддержать</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .menu {
    margin-left: auto;
    display: flex;

    a {
      color: white;
      text-decoration: none;
      font-size: 20px;
      margin-left: 30px;
      padding: 10px 0;
      display: block;
    }
  }

  .menu-mobile {
    display: none;
  }

  @media (max-width: 768px) {
    .menu {
      display: none;
    }

    .menu-mobile {
      display: flex;
      align-items: center;
      justify-content: end;
      margin-right: 0;
      width: 100%;

      .menu-btn {
        display: block;
        width: 35px;
        height: 35px;
        background: transparent url("@/assets/img/menu.png") no-repeat center center;
        background-size: 35px 35px;
        cursor: pointer;
      }

      .menu-popup {
        position: fixed;
        flex-direction: column;
        margin: 0;
        padding: 0;
        top: 93px;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100vw;
        height: calc(100vh - 93px);
        background: #121f26;
        z-index: 9999;

        a {
          color: white;
          text-decoration: none;
          font-size: 18px;
          display: block;
          padding: 14px 0 14px 18px;
          cursor: pointer;
          width: 100%;
          height: fit-content;
          border-bottom: 2px solid #313C42;

          &:first-child {
            border-top: 2px solid #313C42;
          }
        }
      }

      .close-btn {
        width: 35px;
        height: 35px;
        background: transparent url("@/assets/img/close.png") no-repeat center center;
        background-size: 35px 35px;
        cursor: pointer;
      }
    }
  }
</style>