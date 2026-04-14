<script>
export default {
  name: "MenuDesktopItem",
  props: [
    "title",
    "items",
  ],
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    handleClickOutside(event) {
      if (!event.target.closest('.menu-desktop')) {
        this.isOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
}
</script>

<template>
  <div class="menu-desktop" :class="{open: isOpen}" @click="toggleMenu">
    <div class="menu-desktop-title">{{ title }}</div>
    <div class="menu-desktop-items" v-show="isOpen">
      <RouterLink v-for="item in items" :to="item.link">{{ item.title }}</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu-desktop {
  margin-left: 30px;
  color: white;
  font-size: 16px;
  padding: 10px 17px 10px 0;
  cursor: pointer;
  background: transparent url("@/assets/img/menu-arrow-down.png") no-repeat top 12px right;
  background-size: 12px 12px;
  position: relative;

  &.open {
    background: transparent url("@/assets/img/menu-arrow-up.png") no-repeat top 12px right;
    background-size: 12px 12px;
  }

  .menu-desktop-items {
    position: absolute;
    top: 45px;
    left: -52px;
    background: black;
    padding: 15px 16px 15px 14px;
    min-width: 172px;
    border-radius: 8px;

    a {
      color: white;
      text-decoration: none;
      font-size: 16px;
      display: block;
      white-space: nowrap;

      &:not(:last-child) {
        padding-bottom: 16px;
      }
    }
  }
}
</style>