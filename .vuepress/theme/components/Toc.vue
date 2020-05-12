<template>
  <div v-if="$page.headers" class="card mb-4">
    <div class="card_content ">
      <div v-for="(item, index) in $page.headers" :key="index">
        <a :href="`#${item.slug}`" :title="item.title">{{ item.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  components: {},
};
</script>
<style lang="stylus" scoped>
</style>
