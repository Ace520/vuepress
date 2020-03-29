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

<style>
.theme-container{
  margin-bottom: 7rem;
}
html,
body {
  background-color: #282c34!important;
  color: #ffffff!important;
}
.content__default {
  margin: 0 auto;
}
.content__default h2 {
  text-align: center;
  padding-bottom: 1.2rem;
}
.card {
  width: 95%;
}
.card .card-box {
  border: 1px solid #eaecef;
  border-radius: 5px;
  width: 98%;
  margin: auto;
  padding: 0.3rem;
}
pre[class*="language-"] {
  padding: 0;
}
/* Small (sm) */
@media (min-width: 640px) {
  .card {
    width: 95%;
  }
}

/* Medium (md) */
@media (min-width: 768px) {
  .card {
    width: 49%;
  }
}

/* Large (lg) */
@media (min-width: 1024px) {
  .card {
    width: 32%;
  }
}

/* Extra Large (xl) */
@media (min-width: 1280px) {
  .card {
    width: 32%;
  }
}
</style>