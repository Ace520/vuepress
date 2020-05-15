<template>
  <div class="container mx-auto posts">
    <div class="flex">
      <div class="flex-1">
        <div class="card mb-4" v-for="(item, index) in $pagination.pages" :key="index">
          <div class="card_content posts-item flex">
            <div class="img flex-none flash-container">
              <img :src="item.frontmatter.img" />
            </div>
            <div class="flex-1">
              <router-link class="link" :to="item.path">{{ item.title }}</router-link>
              <div class="desc">12312</div>
              <div class="flex align-center"
                <i class="iconfont icon-huati" />
                {{item.frontmatter.topic}}
                <i class="iconfont icon-biaoqian-" />
                {{item.frontmatter.tags}}
                <i class="iconfont icon-time_" />
                {{item.frontmatter.date}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-none side-nav">
        <div class="card mb-4">
          <div class="card-title">话题</div>
          <div class="card_content">
            <div
              class="flex align-center justify-between"
              v-for="(item,index) in $topic.list"
              :key="index"
            >
              <router-link class="link" :to="item.path">{{ item.name }}</router-link>
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
  created() {
    console.log(this);
  }
};
</script>
<style lang="stylus" scoped>
.side-nav {
  padding-left: 0.8rem;
  width: 19rem;
}

.posts-item {
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  .img {
    height: 10rem;
    width: 15rem;
    margin-right: 1rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      vertical-align: middle;
    }
  }

  .desc {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.54);
    font-weight: 200;
    line-height: 1.7;
    display: -webkit-box;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.tag-item {
  position: relative;
  border: none;
  border-radius: 8px;
  box-shadow: 0 13px 15px rgba(0, 0, 0, 0.1);
  color: #738192;
  background-color: #fff;
  -webkit-transition: 0.25s;
  transition: 0.25s;
  padding: 0.3rem 0.8rem;
  margin: 0.5rem;
}

.tag_card_content {
  padding: 1rem 0.5rem;
}
</style>