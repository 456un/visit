<script>
import {useHead} from "@vueuse/head";
import DownloadSkillsComponent from "@/components/widgets/DownloadSkillsComponent.vue";
import PhotoComponent from "@/components/layout/PhotoComponent.vue";
import BlockInfoComponent from "@/components/widgets/BlockInfoComponent.vue";
import ServiceComponent from "@/components/widgets/ServiceComponent.vue";
import PostGisDecodeComponent from "@/components/widgets/servicesForm/PostGisDecodeComponent.vue";

export default {
  name: "HomePage.vue",
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
          content: "fullstack разработчик, PHP, Go, PostgreSQL, Laravel, Vue, веб-разработка, интеграция сервисов, PostGis, HEX WKB/",
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
  components: {
    BlockInfoComponent,
    PhotoComponent,
    DownloadSkillsComponent,
    ServiceComponent,
    PostGisDecodeComponent,
  }
}
</script>

<template>
  <BlockInfoComponent class="no-padding top-block" id="#photo">
    <PhotoComponent class="photo-top"/>
    <DownloadSkillsComponent class="download-skills-top"/>
  </BlockInfoComponent>
  <h1>Сервисы</h1>
  <div class="services">
    <ServiceComponent title="Кодировать/декодировать точку PostGIS (WKB HEX)">
      <template #decode>
        <PostGisDecodeComponent/>
      </template>
    </ServiceComponent>
  </div>
</template>

<style scoped>
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

.services {
  margin-top: 23px;
}

h1 {
  font-size: 32px;
  color: white;
  margin: 0;
  padding: 0;
  font-weight: 400;
}

@media (max-width: 768px) {
  .top-block {
    display: block;
    background: transparent;
  }

  .download-skills-top {
    width: 100%;
    margin-bottom: 50px;
  }

  .columns {
    display: block;

    .col {
      width: auto;
    }
  }

  .contact {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
