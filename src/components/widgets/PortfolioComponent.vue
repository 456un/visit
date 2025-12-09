<script>
import PortfolioItemComponent from "@/components/ui/PortfolioItemComponent.vue";

export default {
  name: "PortfolioComponent",
  components: {
    PortfolioItemComponent,
  },
}
</script>

<template>
  <PortfolioItemComponent className="id" title="SOKOLOV ID (SSO)">
    Описание
  </PortfolioItemComponent>
  <PortfolioItemComponent className="geo" title="SOKOLOV GEO">
    Описание
  </PortfolioItemComponent>
  <PortfolioItemComponent className="pay" title="Сервис оплат">
    Описание
  </PortfolioItemComponent>
  <PortfolioItemComponent className="jewerly" title="SOKOLOV">
    Описание
  </PortfolioItemComponent>
</template>

<style scoped lang="scss">

</style>