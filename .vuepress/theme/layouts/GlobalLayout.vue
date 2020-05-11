<template>
  <div id="global-layout" class="flex flex-column">
    <header class="header flex-none">
      <div class="container mx-auto h-full flex items-center justify-between">
        <router-link class="title" to="/">
          {{ $site.title }}
        </router-link>   
        <div>
          <router-link v-for="(item, index) in $themeConfig.nav" :key="index" :to="item.link">
            {{ item.text }}
          </router-link>   
        </div>   
      </div>
    </header>
    <div class="flex-1">
      <DefaultGlobalLayout/>
    </div>
    <footer class="footer flex-none">
      <div class="container mx-auto h-full flex items-center justify-center">
        <a href="https://github.com/ulivz/70-lines-of-vuepress-blog-theme">Github</a> · Powered by VuePress</p>
      </div>
</footer>
  </div>
</template>

<script>
  import GlobalLayout from '@app/components/GlobalLayout.vue'
  
  export default {
    components: { DefaultGlobalLayout: GlobalLayout },
  }
</script>
<style lang="stylus">
  #global-layout {
    min-height: 101vh;
  }
  .header{
    height: 4rem;
    background:$headerBg
    
    .title{
      color:$headerTextColor;
      text-align: center;
      text-shadow: 0 0 0.1em, 0 0 0.3em;
    }
  }

  .footer{
    height: 4rem;
    background:$footerBg
    }

</style>
