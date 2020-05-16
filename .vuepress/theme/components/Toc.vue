<template>
  <div v-if="$page.headers" class="card">
    <div class="card-title text-sm">
      <i class="iconfont icon-time_" /> 阅时约 6 分钟
    </div>
    <div class="card_content toc-content">
      <div v-for="(item, index) in $page.headers" :key="index">
        <a
          class="link toc-content-link truncate"
          :href="`#${item.slug}`"
          :title="item.title"
        >{{ item.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  components: {}
};
</script>
<style lang="stylus" scoped>
.toc-content {
  overflow-y: auto;
  max-height: 80vh;

  .toc-content-link {
    line-height: 1.5rem;
    font-size:  0.8rem;
    transition: color .3s;
    color: #2c3e50;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
  }
}
</style>
