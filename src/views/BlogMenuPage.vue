<script>
import PhotoComponent from "@/components/layout/PhotoComponent.vue";
import DownloadSkillsComponent from "@/components/widgets/DownloadSkillsComponent.vue";
import BlockInfoComponent from "@/components/widgets/BlockInfoComponent.vue";
import BlogMenuComponent from "@/components/widgets/BlogMenuComponent.vue";
import BlogItemsMenuComponent from "@/components/widgets/BlogItemsMenuComponent.vue";
import BlogItemMenuComponent from "@/components/ui/BlogItemMenuComponent.vue";
import SocialGroupComponent from "@/components/widgets/SocialGroupComponent.vue";
import {useHead} from "@vueuse/head";

export default {
  name: "BlogVue.vue",
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
          content: "fullstack разработчик, PHP, Go, PostgreSQL, Laravel, Vue, веб-разработка, интеграция сервисов, блог/",
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
    DownloadSkillsComponent,
    PhotoComponent,
    BlogMenuComponent,
    BlogItemsMenuComponent,
    BlogItemMenuComponent,
    SocialGroupComponent,
  },
}
</script>

<template>
  <BlockInfoComponent class="no-padding top-block" id="#photo">
    <PhotoComponent class="photo-top"/>
    <DownloadSkillsComponent class="download-skills-top"/>
  </BlockInfoComponent>
  <h1>Блог</h1>
  <div class="blog">
    <BlogMenuComponent>
      <BlogItemsMenuComponent title="Этапы разработки сайта">
        <BlogItemMenuComponent title="Этап проектирования сайта (подготовка)" link="step-planning"/>
        <BlogItemMenuComponent title='Дизайн сайта: как сайт начинает "говорить" с клиентом' link="design"/>
        <BlogItemMenuComponent title='Верстка и Frontend: превращаем дизайн в живой сайт' link="frontend"/>
        <BlogItemMenuComponent title='Backend: "мозг" сайта, который вы не видите' link="backend"/>
        <BlogItemMenuComponent title='Поднятие DEV и PROD серверов: где сайт живёт и развивается' link="server"/>
        <BlogItemMenuComponent title='Тестирование: ищем ошибки до того, как их найдут клиенты' link="test"/>
        <BlogItemMenuComponent title='Заполнение сайта контентом: о чём и как вы говорите с клиентом' link="content"/>
        <BlogItemMenuComponent title='SEO: чтобы сайт находили в поиске' link="seo"/>
      </BlogItemsMenuComponent>
      <BlogItemMenuComponent title="CMS или framework" link="cms-or-framework"/>
      <BlogItemMenuComponent title="Сравнение популярных CMS" link="cms"/>
      <BlogItemMenuComponent title="Градация уровней разработчика" link="develop-level"/>
    </BlogMenuComponent>
    <div class="social-group">
      <SocialGroupComponent vk="https://vk.com/dev_node" telegram="https://t.me/dev_node0"/>
    </div>
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

.blog {
  margin-top: 28px;
  overflow: hidden;
  margin-bottom: 45px;
}

.social-group {
  justify-content: right;
  align-items: center;
  margin-top: 40px;
  width: 100%;
  display: flex;
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

  .blog {
    width: calc(100% + 40px);
  }
}
</style>