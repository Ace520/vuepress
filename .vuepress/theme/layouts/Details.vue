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
<style >
.content__default {
  margin: 0 auto;
}
.content__default h2 {
  text-align: center;
  padding-bottom: 1rem;
}
.extra-class {
  width: 100%;
}
/* Small (sm) */
@media (min-width: 640px) {
.extra-class {
  width: 100%;
}
}

/* Medium (md) */
@media (min-width: 768px) {
.extra-class {
  width: 50%;
}
}

/* Large (lg) */
@media (min-width: 1024px) {
.extra-class {
  width: 33%;
}
}

/* Extra Large (xl) */
@media (min-width: 1280px) {
.extra-class {
  width: 33%;
}
}
</style>