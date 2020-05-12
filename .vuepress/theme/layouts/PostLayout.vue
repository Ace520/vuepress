<template>
  <div class="container mx-auto posts">
    <div class="flex">
      <div class="flex-1">
        <div class="card mb-4" v-for="(item, index) in $pagination.pages" :key="index">
          <div class="card_content posts-item flex">
            <div class="img flex-none flash-container"></div>
            <div class="flex-1">
              <router-link class="page-link" :to="item.path">{{ item.title }}</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-none side-nav">
        <div class="card mb-4">
          <div class="card-title">话题</div>
          <div class="card_content">
            <li v-for="(item,index) in $topic.list" :key="index">
              <router-link class="page-link" :to="item.path">{{ item.name }}</router-link>
            </li>
          </div>
        </div>
        <div class="card mb-4">
          <div class="card-title">标签</div>
          <div class="card_content">
            <li v-for="tag in $tag.list">
              <router-link class="page-link" :to="tag.path">{{ tag.name }}</router-link>
            </li>
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
  }
};
</script>
<style lang="stylus" scoped>
.side-nav {
  padding-left: 0.8rem;
  width: 19rem;
}

.posts-item {
  .img {
    background: url('https://cdn.pixabay.com/photo/2020/04/28/18/15/landscape-5105731_1280.jpg');
    background-size: cover;
    background-position: center;
    height: 10rem;
    width: 10rem;
    margin-right: 1rem;
    border-radius: 4px;
  }
}
</style>