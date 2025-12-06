<script>
import {useHead} from "@vueuse/head";
import DownloadSkillsComponent from "@/components/widgets/DownloadSkillsComponent.vue";
import PhotoComponent from "@/components/layout/PhotoComponent.vue";
import BlockInfoComponent from "@/components/widgets/BlockInfoComponent.vue";

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
          content: "fullstack разработчик, PHP, Go, PostgreSQL, Laravel, Vue, веб-разработка, интеграция сервисов, поддержать/",
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
  }
}
</script>

<template>
  <BlockInfoComponent class="no-padding top-block" id="#photo">
    <PhotoComponent class="photo-top"/>
    <DownloadSkillsComponent class="download-skills-top"/>
  </BlockInfoComponent>
  <h1>Поддержать</h1>
  <div class="donate">
    <div class="qr"></div>
    <div class="sber">
      <p>Поддержать автора и проект через Сбер</p>
      <p>https://www.sberbank.com/sms/pbpn?requisiteNumber=79585687951</p>
    </div>
    <div class="bank-other">
      <p>Для других банков</p>
      <p>Карта: 2202 2032 6137 2454</p>
      <p>Счет: 40817810877031890416</p>
    </div>
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

h1 {
  font-size: 32px;
  color: white;
  margin: 0;
  padding: 0;
  font-weight: 400;
}

.donate {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 58px;
  width: 100%;

  .qr {
    width: 200px;
    height: 200px;
    background: transparent url("@/assets/img/donate-qr.png") no-repeat center center;
    background-size: 200px 200px;
  }

  .sber, .bank-other {
    word-break: break-all;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin: 0;
    }

    p:not(:first-child) {
      margin-top: 3px;
    }
  }

  .sber {
    margin-top: 13px;
  }

  .bank-other {
    margin-top: 30px;
  }
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

  .donate {
    width: calc(100% + 40px);
  }
}
</style>
