<template>
  <div>
    <div class="index"></div>
    <div class="container mx-auto">
      <div class="projects flex items-center justify-center w-full">
        <div
          v-for="(item,index) in $themeConfig.projects"
          :key="index"
          class="project-item flex items-center flex-column"
          :style="{background: 'url(' + item.img + ')',backgroundSize: 'cover',
  backgroundPosition: 'center'}"
        >
          <a :href="item.url" target="_blank">
            <h2 class="text-center">{{item.title}}</h2>
          </a>
          <div class="summary">{{item.summary}}</div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  components: {}
};
</script>
<style lang="stylus" scoped>
.index {
  background: url('https://cdn.pixabay.com/photo/2020/05/05/23/08/africa-5135407_1280.jpg');
  background-size: cover;
  background-position: center;
  height: 60vh;
  width: 100%;
}

.projects {
  margin-top: -10rem;

  .project-item {
    height: 15rem;
    width: 15rem;
    margin: 0 1.5rem;
    border-radius: 12px;
    box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
    color: #333;
    position: relative;
    z-index: 1;
    border: 0 none;
    transition: transform 0.3s cubic-bezier(0.34, 2, 0.6, 1), box-shadow 0.2s ease;
    background: #e4c4a1;
    color: #ffffff;
    padding: 1rem;
    padding-top: 6rem;

    a {
      color: #ffffff;

      &:hover {
        text-shadow: 0 0 0.1em, 0 0 0.3em;
      }
    }

    &:hover {
      box-shadow: 0 12px 19px -7px rgba(0, 0, 0, 0.3);
      transform: translateY(-10px);
      -webkit-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
    }

    .summary {
      font-size: 15px;
      font-weight: 200;
      line-height: 1.8;
      display: -webkit-box;
      word-break: break-all;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      color: hsla(0, 0%, 100%, 0.8);
    }
  }
}
</style>