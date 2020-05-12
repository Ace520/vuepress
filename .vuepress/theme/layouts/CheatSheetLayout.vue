<template>
  <div class="container mx-auto cheatsheet">
    <div class="grid grid-cols gap">
      <div class="item" v-for="(item, index) in $pagination.pages" :key="index">
        <div class="card">
          <div class="card_content" style="padding:0">
            <div class="img flash-container"></div>
          </div>
          <div class="item-title">
            <router-link class="page-link" :to="item.path">{{ item.title }}</router-link>
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
  width: 18rem;
}

.grid {
  display: grid;
}

.grid-cols {
  grid-template-columns: repeat(7, minmax(0, 1fr));
}

.gap {
  grid-gap: 1rem;
  gap: 1rem;
}

.cheatsheet {
  .item {
    .img {
      background: url('../../../static/vue.jpg');
      background-size: cover;
      background-position: center;
      height: 12rem;
      width: 100%;
      margin-right: 1rem;
      border-radius: 4px;
    }

    .item-title {
      border-top: 1px solid #ebeef5;
      padding: 1rem;
    }
  }
}
</style>