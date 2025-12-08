<script setup>
import mobile1 from "@/assets/img/design/mobile-1.webp";
import desktop1 from "@/assets/img/design/desktop-1.webp";
</script>

<script>
import DesignItemComponent from "@/components/ui/DesignItemComponent.vue";

export default {
  name: "DesignComponent",
  components: {
    DesignItemComponent,
  },
}
</script>

<template>
  <div class="desc">Как хобби, только в свободное время, 500 руб/ч.</div>
  <DesignItemComponent
      title="Сайт визитка (Figma)"
      link="https://www.figma.com/design/IocHGhPa9le2HN7TLOwxvy/%D0%92%D0%B8%D0%B7%D0%B8%D1%82%D0%BA%D0%B0?node-id=0-1&m=dev&t=IVi63ESkINM7N9JC-1"
      :mobileImg="mobile1"
      :desktopImg="desktop1"
  />
</template>

<style scoped lang="scss">
.desc {
  margin-top: -40px;
}
</style>