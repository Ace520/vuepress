<template>
  <div class="container mx-auto">
    <div class="article flex">
      <div class="content flex-1">
        <Content />
      </div>
      <div class="flex-none">
        <div class="toc">
          <Toc />
        </div>
      </div>
    </div>
    <div class="comment">
      <Comment />
    </div>
  </div>
</template>
<script>
import { Comment } from "@vuepress/plugin-blog/lib/client/components";
import Toc from "@theme/components/Toc.vue";
export default {
  components: {
    Toc,
    Comment
  }
};
</script>
<style lang="stylus" scoped>
.toc {
  width: 14.5rem;
  padding-left: 1rem;
  position: sticky;
  position: -webkit-sticky;
  max-height: 100vh;
  overflow-y: auto;
  top: 0;
  box-sizing: border-box;
  z-index: 0;
}
</style>