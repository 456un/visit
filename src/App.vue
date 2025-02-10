<script setup>
import HeaderComponent from '@/components/layout/HeaderComponent.vue'
import PhotoComponent from '@/components/layout/PhotoComponent.vue'
import DownloadSkillsComponent from "@/components/widgets/DownloadSkillsComponent.vue";
</script>

<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <main>
      <div id="app-content">
        <div class="right-block">
          <PhotoComponent/>
          <DownloadSkillsComponent/>
        </div>
        <div class="content">
          <RouterView/>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  letter-spacing: .08em;
}

main {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1196px;

  #app-content {
    display: flex;
    width: 100%;

    .content {
      margin-left: 40px;
      width: calc(100% - 40px);
    }

    @media (max-width: 768px) {
      .content {
        margin-left: 0;
      }

      .right-block {
        display: none;
      }
    }
  }
}
</style>