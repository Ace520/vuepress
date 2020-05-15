<template>
  <div>
    <div class="flex align-center justify-between">
      <slot name="header"></slot>
      <i @click="isShow=!isShow">箭头</i>
    </div>
    <div v-if="isShow">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  components: {},
  data() {
    return {
      isShow: false
    };
  }
};
</script>
<style lang="stylus" scoped></style>
