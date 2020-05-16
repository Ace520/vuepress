<template>
  <div v-if="topic.key" class="card">
    <div class="card-title text-sm">
      {{topic.key}}
    </div>
    <div class="card_content">
      <div v-for="(item, index) in topic.pages" :key="index">
        <router-link class="link leading-8 truncate" :to="item.path">{{item.title}}</router-link>
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
