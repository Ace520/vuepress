<template>
  <div class="container mx-auto cheatsheet">
    <div class="grid grid-cols gap">
      <div class="item" v-for="(item, index) in $pagination.pages" :key="index">
        <div>
          <div class="img flash-container" ></div>
          <div>
            <router-link class="page-link" :to="item.path">{{ item.title }}</router-link>
          </div>
        </div>
      </div>s
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
  grid-template-columns: repeat(6, minmax(0, 1fr));
}

.gap {
  grid-gap: 1rem;
  gap: 1rem;
}

.cheatsheet {
  .item {
    .img {
      background: url('../../../static/vue.jpg')
      background-size: cover;
      background-position: center;
      height: 12rem;
      width: 10rem;
      margin-right: 1rem;
      border-radius: 4px;
    }
  }
}


</style>