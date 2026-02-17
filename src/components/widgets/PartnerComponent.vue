<script setup>
import p10 from "@/assets/img/partner/10p.png";
</script>

<script>
import PartnerItemComponent from "@/components/ui/PartnerItemComponent.vue";

export default {
  name: "PartnerComponent",
  components: {
    PartnerItemComponent,
  }
}
</script>

<template>
  <PartnerItemComponent :srcImg="p10">
    <div class="desc">
      Получайте 10% после каждой оплаты от клиента, которого вы привели, чем крупнее проект, тем больше доход
    </div>
    <div class="example">
      В среднем 10 000 - 40 000 рублей с одного клиента
    </div>
  </PartnerItemComponent>
</template>

<style scoped lang="scss">
  .desc {
    font-size: 16px;
  }

  .example {
    font-size: 16px;
    margin-top: 14px;
  }

  @media (max-width: 1023px) {
    .desc {
      font-size: 14px;
    }

    .example {
      font-size: 14px;
      margin-top: 14px;
    }
  }
</style>