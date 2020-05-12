<template>
  <div class="container mx-auto">
    <div class="article flex">
      <div class="content flex-1">
        <div class="content-header">
          <h1>{{$frontmatter.title}}</h1>
        </div>
        <Content />
        <div class="comment">
          <Comment />
        </div>
      </div>
      <div class="flex-none side media-show">
        <div class="topic">
          <Topic />
        </div>
        <div class="toc">
          <Toc />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Comment } from "@vuepress/plugin-blog/lib/client/components";
import Toc from "@theme/components/Toc.vue";
import Topic from "@theme/components/Topic.vue";
export default {
  components: {
    Toc,
    Comment,
    Topic
  }
};
</script>
<style lang="stylus" scoped>
.article {
  .side {
    padding-left: 1rem;
    width: 18rem;
  }

  .toc {
    position: sticky;
    position: -webkit-sticky;
    max-height: 100vh;
    overflow-y: auto;
    top: 0;
    box-sizing: border-box;
    z-index: 0;
  }
}

.media-show {
  display: none;
}

@media (min-width: $lgMedia) {
  .media-show {
    display: block;
  }
}

.comment {
  margin-top: 2rem;
}

.content-header {
  min-height: 10rem;
  border-radius: 6px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://udemy-images.udemy.com/course/750x422/1173284_ffaf_3.jpg');
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  color: #ffffff;
  margin-bottom: 2rem;
  padding: 5rem 1rem 5rem 10%;
}
</style>