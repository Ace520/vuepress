<template>
  <div class="theme-container">
    <Content />
  </div>
</template>

<script>
export default {
  mounted() {
    import("../minigrid.min.js").then(module => {
      let Minigrid = module.default;
      var grid = new Minigrid({
        container: ".content__default",
        item: ".extra-class",
        gutter: 2
      });
      grid.mount();
    });
  }
};
</script>
<style>
.content__default {
  margin: 0 auto;
}
.extra-class {
  width: 33%;
}
</style>