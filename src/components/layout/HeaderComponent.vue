<script>
export default {
  name: "HeaderComponent",
  components: {
    LogoComponent,
    MenuComponent,
  }
}

import LogoComponent from '@/components/ui/LogoComponent.vue'
import MenuComponent from '@/components/widgets/MenuComponent.vue'
</script>

<template>
  <header>
    <div class="right-container">
      <LogoComponent/>
      <MenuComponent/>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  header {
    max-width: 1196px;
    display: flex;
    width: 100%;
    padding: 20px 0;
  }

  .right-container {
    display: flex;
    margin: 0 56px 0 330px;
    width: 100%;
  }
</style>