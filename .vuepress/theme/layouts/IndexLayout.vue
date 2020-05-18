<template>
  <div>
    <div class="index flex items-center justify-center flex-column">
      <h1>{{poetry.content}}</h1>
      <div>《{{poetry.origin.title}}》· {{poetry.origin.author}}</div>
    </div>
    <div class="projects">
      <div v-for="(item,index) in $themeConfig.projects" :key="index">
        <div class="container mx-auto project-item flex">
          <div class="flex items-center flex-column h-full flex-1">
            <a :href="item.url" target="_blank">
              <h1 class="text-center">{{item.title}}</h1>
            </a>
            <div class="summary">{{item.summary}}</div>
          </div>
          <div class="flex-1">
            <div
              class="img"
              :style="{background: 'url(' + item.img + ')',backgroundSize: 'cover',backgroundPosition: 'center'}"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="counts">
      <div class="container mx-auto flex">
        <div class="counts-item flex-1">
          <div class="icon">
            <i class="iconfont icon-biaoqian-" />
          </div>
          <h1>{{postsLen}}</h1>
          <div>帖子 | POSTS</div>
        </div>
        <div class="counts-item flex-1">
          <div class="icon">
            <i class="iconfont icon-biaoqian-" />
          </div>
          <h1>{{cheatSheetLen}}</h1>
          <div>速查表 | CHEATSHEET</div>
        </div>
        <div class="counts-item flex-1">
          <div class="icon">
            <i class="iconfont icon-biaoqian-" />
          </div>
          <h1>{{$tag.list.length}}</h1>
          <div>标签 | TAG</div>
        </div>
        <div class="counts-item flex-1">
          <div class="icon">
            <i class="iconfont icon-biaoqian-" />
          </div>
          <h1>{{$topic.list.length}}</h1>
          <div>话题 | TOPIC</div>
        </div>
      </div>
    </div>
    <div class="other-msg">博客持续更新中...</div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  components: {},
  data() {
    return {
      postsLen: 0,
      cheatSheetLen: 0,
      poetry: {}
    };
  },
  created() {
    let postsLen = 0;
    let cheatSheetLen = 0;
    this.$site.pages.forEach(item => {
      if (item.id == "post") {
        postsLen++;
      } else if (item.id == "cheatsheet") {
        cheatSheetLen++;
      }
    });
    this.postsLen = postsLen;
    this.cheatSheetLen = cheatSheetLen;

    let that = this;
    const jinrishici = require("jinrishici");
    jinrishici.load(result => {
      that.poetry = result.data;
    });
  }
};
</script>
<style lang="stylus" scoped>
.index {
  background: url('https://cdn.pixabay.com/photo/2020/05/05/23/08/africa-5135407_1280.jpg');
  background-size: cover;
  background-position: center;
  height: 75vh;
  width: 100%;
  color:#ffffff;
}

.projects {
  margin: 3rem 0;

  .project-item {
    height: 20rem;
    width: 100%;
    margin-bottom: 5rem;

    a {
      &:hover {
        text-shadow: 0 0 0.1em, 0 0 0.3em;
      }
    }

    .summary {
      font-size: 15px;
      font-weight: 200;
      line-height: 1.8;
      display: -webkit-box;
      word-break: break-all;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .img {
      margin-left: 20%;
      width: 80%;
      height: 100%;
      border-radius: 10px;
      box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
      z-index: 1;
      border: 0 none;
      transition: transform 0.3s cubic-bezier(0.34, 2, 0.6, 1), box-shadow 0.2s ease;
    }
  }
}

.counts {
  margin: 2rem 0;
  background: $primaryColor;
  padding: 3rem 0;
  color: #ffffff;

  .counts-item {
    text-align: center;

    .icon {
      width: 5.5rem;
      height: 5.5rem;
      text-align: center;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      box-shadow: 0 1rem 3rem rgba(13, 20, 49, 0.175);
      background: #ffffff;

      i {
        font-size: 1.5rem;
        color: $primaryColor;
      }
    }
  }
}

.other-msg {
  text-align: center;
  padding: 8rem 0;
  margin-bottom: 2rem;
}
</style>