<template>
  <div class="container mx-auto container-content">
    <div class="article flex">
      <div class="content flex-1">
        <div class="card mb-4">
          <div class="card_content">
            <div class="content-header">
              <h1>{{$frontmatter.title}}</h1>
              <div class="posts-item-footer">
                <div class="posts-item-footer-item flex items-center" v-if="$frontmatter.tags">
                  <i class="iconfont icon-biaoqian-" />
                  <router-link
                    class="tag-item"
                    v-for="(item,index) in $frontmatter.tags"
                    :key="index"
                    :to="'/tag/' + item"
                  >{{ item }}</router-link>
                </div>
                <div class="posts-item-footer-item flex items-center" v-if="$frontmatter.topic">
                  <i class="iconfont icon-huati" />
                  <router-link
                    class="link"
                    :to="'/topic/' + $frontmatter.topic"
                  >{{$frontmatter.topic}}</router-link>
                </div>
                <div class="posts-item-footer-item flex items-center" v-if="$frontmatter.date">
                  <i class="iconfont icon-time_" />
                  {{$frontmatter.date}}
                </div>
              </div>
            </div>
            <Content />
          </div>
        </div>
        <div class="card mb-4">
          <div class="card_content">
            <div class="comment">
              <Comment />
            </div>
          </div>
        </div>
      </div>
      <div class="flex-none side media-show">
        <div class="topic mb-4">
          <Topic />
        </div>
        <div class="toc mb-4">
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
    padding-left: 0.6rem;
    width: 19rem;
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

  .posts-item-footer {
    color: #ffffff;
    margin-top: 2rem;

    a {
      color: #ffffff;
    }

    .tag-item {
      background: none;
    }
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