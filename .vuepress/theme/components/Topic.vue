<template>
  <div v-if="topic.key" class="card mb-4">
    <div class="card-title">
      <router-link :to="topic.path">{{topic.key}}</router-link>
    </div>
    <div class="card_content">
      <div v-for="(item, index) in topic.pages" :key="index">
        <router-link :to="item.path">{{item.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  components: {},
  data() {
    return {
      topic: {}
    };
  },
  created() {
    if (this.$page.frontmatter.topic) {
      this.topic = this.$topic._metaMap[this.$page.frontmatter.topic];
    }
  }
};
</script>
<style lang="stylus" scoped></style>
