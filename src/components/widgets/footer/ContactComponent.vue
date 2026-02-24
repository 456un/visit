<script>
import FooterContactItemComponent from "@/components/ui/FooterContactItemComponent.vue";

export default {
  name: "ContactComponent",
  components: {
    FooterContactItemComponent,
  },
}
</script>

<template>
  <div class="contact-component">
    <div class="title">Связаться со мной</div>
    <FooterContactItemComponent label="ВК" link="https://vk.com/id826863937" text="https://vk.com/id826863937"/>
    <FooterContactItemComponent label="Telegram" link="https://t.me/AnSm456un" text="https://t.me/AnSm456un" :mAuto="true"/>
    <FooterContactItemComponent label="Email" link="mailto:456unansm@gmail.com" text="456unansm@gmail.com" :mAuto="true"/>
  </div>
</template>

<style scoped lang="scss">
.contact-component {
  margin-top: 4px;
}

@media (max-width: 1023px) {
  .contact-component {
    margin-top: 14px;

    .title {
      font-size: 20px;
    }
  }
}
</style>