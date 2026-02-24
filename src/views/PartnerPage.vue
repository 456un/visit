<script>
import {useHead} from "@vueuse/head";
import DownloadSkillsComponent from "@/components/widgets/DownloadSkillsComponent.vue";
import PhotoComponent from "@/components/layout/PhotoComponent.vue";
import BlockInfoComponent from "@/components/widgets/BlockInfoComponent.vue";
import PartnerComponent from "@/components/widgets/PartnerComponent.vue";

export default {
  name: "PartnerPage",
  components: {
    BlockInfoComponent,
    PhotoComponent,
    DownloadSkillsComponent,
    PartnerComponent,
  },
  setup() {
    useHead({
      title: "Fullstack разработчик Владислав Сенников – Разработка, интеграция, оптимизация",
      meta: [
        {
          name: "description",
          content: "Владислав Сенников – профессиональный fullstack разработчик. Разработка и интеграция веб-приложений на PHP, Go, Vue, Laravel и PostgreSQL.",
        },
        {
          property: "keywords",
          content: "fullstack разработчик, PHP, Go, PostgreSQL, Laravel, Vue, веб-разработка, интеграция сервисов, партнерство, сотрудничество/",
        },
        {
          property: "canonical",
          content: "https://dev-node.ru/",
        },
        {
          property: "og:title",
          content: "Fullstack разработчик Владислав Сенников",
        },
        {
          property: "og:description",
          content: "Разработка и поддержка высоконагруженных систем. Интеграция сервисов, бэкенд на Go и PHP.",
        },
        {
          property: "og:image",
          content: "https://dev-node.ru/assets/img/avatar.jpg",
        },
        {
          property: "og:url",
          content: "https://dev-node.ru/",
        },
        {
          property: "og:type",
          content: "website",
        },
      ]
    });
  },
}
</script>

<template>
  <BlockInfoComponent class="no-padding top-block" id="#photo">
    <PhotoComponent class="photo-top"/>
    <DownloadSkillsComponent class="download-skills-top"/>
  </BlockInfoComponent>
  <h1>Партнерство</h1>
  <div class="partner">
    <PartnerComponent/>
  </div>
</template>

<style scoped lang="scss">
.top-block {
  display: none;
}

.no-padding {
  padding: 0;
  width: 100%;
}

.photo-top {
  width: 100%;
}

h1 {
  font-size: 32px;
  color: white;
  margin: 0;
  padding: 0;
  font-weight: 400;
}

.partner {
  margin-top: 28px;
  overflow: hidden;
  margin-bottom: 45px;
}

@media (max-width: 1023px) {
  .top-block {
    display: block;
    background: transparent;
  }

  .download-skills-top {
    width: 100%;
    margin-bottom: 50px;
  }

  .partner {
    width: calc(100% + 40px);
  }
}
</style>