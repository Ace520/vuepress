<template>
  <div class="container mx-auto posts">
    <div class="flex">
      <div class="flex-1">
        <div class="posts-item flex" v-for="(item, index) in $pagination.pages" :key="index">
          <div class="img flex-none flash-container"></div>
          <div class="flex-1">
            <router-link class="page-link" :to="item.path">{{ item.title }}</router-link>
          </div>
        </div>
      </div>
      <div class="flex-none side-nav">
        <ul id="default-layout">
          <li v-for="(item,index) in $topic.list" :key="index">
            <router-link class="page-link" :to="item.path">{{ item.name }}</router-link>
          </li>
        </ul>
        <ul id="default-layout">
          <li v-for="tag in $tag.list">
            <router-link class="page-link" :to="tag.path">{{ tag.name }}</router-link>
          </li>
        </ul>
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
  width: 18rem;
}

.posts-item {
  margin-top: 1rem;
  margin-bottom: 1rem;

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

.item&:hover {
  box-shadow: 0 12px 19px -7px rgba(0, 0, 0, 0.3);
  transform: translateY(-10px);
  -webkit-transform: translateY(-10px);
  -ms-transform: translateY(-10px);
  -moz-transform: translateY(-10px);
}
</style>