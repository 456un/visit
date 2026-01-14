<script>
import { posts } from '@/content/blog';
import MarkdownIt from 'markdown-it';
import DownloadSkillsComponent from "@/components/widgets/DownloadSkillsComponent.vue";
import BlockInfoComponent from "@/components/widgets/BlockInfoComponent.vue";
import PhotoComponent from "@/components/layout/PhotoComponent.vue";
import {useHead} from "@vueuse/head";

const md = new MarkdownIt();

export default {
  name: "BlogPostPage",
  components: {PhotoComponent, BlockInfoComponent, DownloadSkillsComponent},
  props: [
    'slug',
  ],
  setup(props) {
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

    const post = posts.find(p => {
      return p.slug === props.slug
    });

    return {
      post,
      html: post ? md.render(post.content) : '',
    };
  },
}
</script>

<template>
  <BlockInfoComponent class="no-padding top-block" id="#photo">
    <PhotoComponent class="photo-top"/>
    <DownloadSkillsComponent class="download-skills-top"/>
  </BlockInfoComponent>
  <div class="article">
    <h2>{{ post.title }}</h2>
    <div class="content" v-html="html">
    </div>
  </div>
  <RouterLink to="/blog">←назад</RouterLink>
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

h2 {
  font-size: 20px;
  color: white;
  margin: 0;
  padding: 0;
  font-weight: 400;
}

.article {
  margin-top: 28px;

  :deep() {
    font-size: 14px;

    h3 {
      font-size: 16px;
      margin-top: 30px;
    }

    table {
      border-collapse: collapse;
      margin-top: 35px;
      width: 100%;
      overflow: auto;
      display: block;

      th, td {
        padding: 5px 10px;
        border: 1px solid white;
        text-align: center;
      }
    }

    a {
      color: white;
      text-decoration: underline;
      display: inline-block;
      margin: 5px 0;
    }
  }
}

a {
  text-decoration: none;
  color: white;
  font-size: 14px;
  padding: 0;
  display: block;
  margin: 28px 0 200px 0 ;
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

  .blog {
    width: calc(100% + 40px);
  }
}
</style>