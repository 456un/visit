<script>
export default {
  name: "BlogItemsMenuComponent",
  props: [
    'title',
  ],
  data() {
    return {
      isOpen: true,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  }
}
</script>

<template>
  <div class="blog-title" :class="{open: isOpen}" @click="toggle">
    {{ title }}
  </div>
  <div class="items" v-show="isOpen">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.blog-title {
  padding: 12px 40px 16px 22px;
  font-size: 16px;
  border-bottom: 1px solid #2C6C5E;
  cursor: pointer;

  background: transparent url("@/assets/img/blog/up.png") no-repeat center right;
  background-size: 30px 30px;

  &.open {
    background: transparent url("@/assets/img/blog/down.png") no-repeat center right;
    background-size: 30px 30px;
  }
}

.items {
  padding-left: 27px;
}
</style>