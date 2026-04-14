<script>
export default {
  name: "MenuMobileItem",
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
  },
}
</script>

<template>
  <div class="menu-mobile-group" :class="{open: isOpen}" @click="toggleMenu">
    <div class="menu-mobile-title">{{ title }}</div>
    <div class="menu-mobile-items" v-show="isOpen">
      <RouterLink v-for="item in items" :to="item.link" @click="$emit('close-menu')">
        {{ item.title }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu-mobile-group {
  color: white;
  text-decoration: none;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  padding: 14px 0 14px 18px;
  cursor: pointer;
  width: calc(100% - 18px);
  height: fit-content;
  border-bottom: 2px solid #313C42;
  align-items: start;
  background: transparent url("@/assets/img/menu-arrow-down.png") no-repeat top 16px right 25px;
  background-size: 20px 20px;

  &.open {
    background: transparent url("@/assets/img/menu-arrow-up.png") no-repeat top 16px right 25px;
    background-size: 20px 20px;
  }

  .menu-mobile-items {
    margin-top: 15px;
    margin-left: 13px;

    a {
      color: white;
      text-decoration: none;
      font-size: 16px;
      display: block;
      white-space: nowrap;

      &:not(:first-child) {
        padding-top: 14px;
      }
    }
  }
}
</style>