<template>
  <div class="container mx-auto container-content">
    <div class="masonry-cards">
      <Content />
    </div>
    <div class="toc">
      <Toc />
    </div>
  </div>
</template>
<script>
import Toc from "@theme/components/Toc.vue";
import Masonry from "masonry-layout";
export default {
  components: {
    Toc
  },
  mounted() {
    var msnry = new Masonry(document.querySelector(".masonry-cards"), {
      itemSelector: ".masonry-card",
      columnWidth: 0
    });
  }
};
</script>
<style lang="stylus" scoped>
.toc {
  width: 13.5rem;
  
  top: 0;
  box-sizing: border-box;
  z-index: 10;
  position: fixed;
  right: -13.5rem;
  background-color: #ffffff;
}
</style>