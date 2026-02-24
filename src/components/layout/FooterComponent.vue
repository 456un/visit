<script>
import FooterMenuComponent from "@/components/widgets/footer/MenuComponent.vue";
import SocialComponent from "@/components/widgets/footer/SocialComponent.vue";
import ContactComponent from "@/components/widgets/footer/ContactComponent.vue";

export default {
  name: "FooterComponent",
  components: {
    FooterMenuComponent,
    SocialComponent,
    ContactComponent,
  }
}
</script>

<template>
  <div class="line"></div>

  <footer>
    <div class="menu">
      <FooterMenuComponent />
    </div>
    <div class="social">
      <SocialComponent />
    </div>
    <div class="contact">
      <ContactComponent />
    </div>
  </footer>
</template>

<style scoped lang="scss">
.line {
  max-width: 1196px;
  width: 100%;
  height: 1px;
  background: #1FA184;
  margin-bottom: 28.5px;
  margin-top: 120px;
}

footer {
  max-width: 1196px;
  display: flex;
  width: 100%;
  margin-top: 25px;
  padding-bottom: 33px;

  .social {
    margin-left: auto;
  }

  .contact {
    margin-left: auto;
  }
}
</style>