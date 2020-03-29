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
        item: ".card",
        gutter: 8
      });
      grid.mount();
    });
  }
};
</script>

<style scoped>
html,
body {
  background-color: #282c34;
  color: #ffffff;
}
</style>