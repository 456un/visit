<script>
import PhotoComponent from "@/components/layout/PhotoComponent.vue";
import DownloadSkillsComponent from "@/components/widgets/DownloadSkillsComponent.vue";
import BlockInfoComponent from "@/components/widgets/BlockInfoComponent.vue";
import BlogMenuComponent from "@/components/widgets/BlogMenuComponent.vue";
import BlogItemsMenuComponent from "@/components/widgets/BlogItemsMenuComponent.vue";
import BlogItemMenuComponent from "@/components/ui/BlogItemMenuComponent.vue";

export default {
  name: "BlogVue.vue",
  components: {
    BlockInfoComponent,
    DownloadSkillsComponent,
    PhotoComponent,
    BlogMenuComponent,
    BlogItemsMenuComponent,
    BlogItemMenuComponent,
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
      </BlogItemsMenuComponent>
      <BlogItemMenuComponent title="CMS или framework" link="cms-or-framework"/>
      <BlogItemMenuComponent title="Сравнение популярных CMS" link="cms"/>
      <BlogItemMenuComponent title="Градация уровней разработчика" link="develop-level"/>
    </BlogMenuComponent>
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
  margin-bottom: 250px;
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