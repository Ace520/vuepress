<template>
  <div class="container mx-auto posts container-content">
    <div class="flex">
      <div class="flex-1">
        <div class="card mb-4" v-for="(item, index) in $pagination.pages" :key="index">
          <div class="card_content posts-item flex">
            <div
              class="img flex-none flash-container"
              :style="{background: 'url(' + $themeConfig.staticUrl+ item.frontmatter.img + ')',backgroundSize: 'cover',backgroundPosition: 'center'}"
            ></div>
            <div class="flex-1">
              <router-link class="link posts-item-title" :to="item.path">{{ item.title }}</router-link>
              <div class="posts-item-desc">{{item.summary}}</div>
              <div class="posts-item-footer">
                <div class="posts-item-footer-item flex items-center" v-if="item.frontmatter.tags">
                  <i class="iconfont icon-biaoqian-" />
                  <router-link
                    class="tag-item"
                    v-for="(item1,index1) in item.frontmatter.tags"
                    :key="index1"
                    :to="'/tag/' + item1"
                  >{{ item1 }}</router-link>
                </div>
                <div class="posts-item-footer-item flex items-center" v-if="item.frontmatter.topic">
                  <i class="iconfont icon-huati" />
                  <router-link
                    class="link"
                    :to="'/topic/' + item.frontmatter.topic"
                  >{{item.frontmatter.topic}}</router-link>
                </div>
                <div class="posts-item-footer-item flex items-center" v-if="item.frontmatter.date">
                  <i class="iconfont icon-time_" />
                  {{item.frontmatter.date}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-none side-nav media-show">
        <div class="card mb-4">
          <div class="card-title">话题</div>
          <div class="card_content">
            <div
              class="flex items-center justify-between"
              v-for="(item,index) in $topic.list"
              :key="index"
            >
              <router-link class="link leading-8 truncate" :to="item.path">{{ item.name }}</router-link>
              <div>{{item.pages.length}}</div>
            </div>
          </div>
        </div>
        <div class="card mb-4">
          <div class="card-title">标签</div>
          <div class="card_content tag_card_content">
            <router-link
              class="tag-item"
              v-for="(item,index) in $tag.list"
              :key="index"
              :to="item.path"
            >{{ item.name }}</router-link>
          </div>
        </div>
      </div>
    </div>
    <div id="pagination">
      <Pagination />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Pagination } from "@vuepress/plugin-blog/lib/client/components";
export default {
  components: {
    Pagination
  },
  created() {}
};
</script>
<style lang="stylus" scoped>
.side-nav {
  padding-left: 0.8rem;
  width: 19rem;
}

.posts-item {
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;

  .img {
    height: 13rem;
    width: 100%;
    border-radius: 5px;
  }

  .posts-item-title {
    line-height: 2.5rem;
  }

  .posts-item-desc {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.54);
    font-weight: 200;
    line-height: 1.7;
    display: -webkit-box;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

@media (min-width: $mdMedia) {
  .posts-item {
    flex-direction: unset;

    .posts-item-title {
      line-height: normal;
    }

    .posts-item-desc {
      margin-top: 0.5rem;
      margin-bottom: 2rem;
    }

    .img {
      width: 13rem;
      margin-right: 1rem;
      height: 9rem;
    }
  }
}

.tag_card_content {
  padding: 0 0.5rem;
}
</style>