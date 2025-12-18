<script>
import { posts } from '@/content/blog';
import MarkdownIt from 'markdown-it';
import DownloadSkillsComponent from "@/components/widgets/DownloadSkillsComponent.vue";
import BlockInfoComponent from "@/components/widgets/BlockInfoComponent.vue";
import PhotoComponent from "@/components/layout/PhotoComponent.vue";

const md = new MarkdownIt();

export default {
  name: "BlogPostPage",
  components: {PhotoComponent, BlockInfoComponent, DownloadSkillsComponent},
  props: [
    'slug',
  ],
  setup(props) {
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
  <h1>Блог</h1>
  <div class="article">
    <h2>{{ post.title }}</h2>
    <div class="content" v-html="html">
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