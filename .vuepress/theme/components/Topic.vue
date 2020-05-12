<template>
  <div>
    <div v-for="(item, index) in $page.headers" :key="index">
      <a :href="`#${item.slug}`" :title="item.title">{{ item.title }}</a>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  components: {}
};
</script>
<style lang="stylus" scoped></style>
