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
      <div class="years">2025<span class="dash">&mdash;</span>2026</div>
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

    .years {
      margin-top: 107px;
      font-size: 14px;
      text-align: right;

      .dash {
        font-size: 15px;
      }
    }
  }
}

@media (max-width: 1023px) {
  .line {
    display: none;
  }

  footer {
    flex-direction: column;

    .social {
      margin-left: 0;
    }

    .contact {
      margin-left: 0;

      .years {
        margin-top: 49px;
      }
    }
  }
}
</style>