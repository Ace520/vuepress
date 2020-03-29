<template>
  <div class="theme-container">
    <div class="jumbotron">
      <div class="title">CheatSheet</div>
      <div class="intro">收藏所有开发会用到的文档、函数、知识点。</div>
      <div>
        <iframe
          v-for="(item,index) in githubs"
          :key="index"
          frameborder="0"
          height="20px"
          width="100px"
          scrolling="0"
          :src="item"
        ></iframe>
      </div>
    </div>
    <Content class="container" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      githubs: [
        "https://ghbtns.com/github-btn.html?user=Ace520&repo=vuepress&type=star&count=true",
        "https://ghbtns.com/github-btn.html?user=Ace520&repo=vuepress&type=watch&count=true&v=2",
        "https://ghbtns.com/github-btn.html?user=Ace520&repo=vuepress&type=fork&count=true"
        // "https://ghbtns.com/github-btn.html?user=Ace520&type=follow&count=true"
      ],
      config: {}
    };
  },
  mounted() {}
};
</script>
<style>
html,
body {
  background-color: #282c34!important;
  color: #ffffff!important;
}
.jumbotron {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5rem 0;
  background-color: #282c34;
  color: #ffffff;
}
.jumbotron .title {
  text-shadow: -5px 5px 0 rgba(0, 0, 0, 0.1);
  font-size: 4rem;
  font-weight: 500;
}
.jumbotron .intro {
  margin-top: 0.5rem;
  margin-bottom: 2rem;
}
.container {
  width: 100%;
  margin: auto;
}
.container h2 {
  text-align: center;
  margin-top: 2rem;
}
.container ul {
  display: flex;
  flex-wrap: wrap;
}
.container ul li {
  width: 30%;
  padding: 1%;
  display: flex;
  align-items: center;
}
.container ul li img {
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 0.5rem;
}
.container ul li a{
  color: #ffffff!important;
}
/* Small (sm) */
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
  .container ul li {
    width: 100%;
  }
}

/* Medium (md) */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
  .container ul li {
    width: 50%;
  }
}

/* Large (lg) */
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
  .container ul li {
    width: 30%;
  }
}

/* Extra Large (xl) */
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
  .container ul li {
    width: 20%;
  }
}
</style>