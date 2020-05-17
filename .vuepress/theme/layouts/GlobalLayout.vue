<template>
  <div id="global-layout" class="flex flex-column">
    <header class="header flex-none" :class="$themeConfig.navConfig.jumbotron.indexOf($page.frontmatter.layout) > -1 ? 'header-jumbotron':''">
      <div class="container mx-auto h-full flex items-center justify-between">
        <router-link class="title" to="/">
          {{ $site.title }}
        </router-link>   
        <div class="nav">
          <router-link :class="item.layouts.indexOf($page.frontmatter.layout) > -1 ? 'nav-active':''" v-for="(item, index) in $themeConfig.nav" :key="index" :to="item.link">
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
        <a href="https://github.com/Ace520">Github</a>  · Powered by VuePress</p>
      </div>
    </footer>
  </div>
</template>

<script>
  import GlobalLayout from '@app/components/GlobalLayout.vue'
  
  export default {
    components: { DefaultGlobalLayout: GlobalLayout },
    created(){
      console.log(this)
    }
  }
</script>
<style lang="stylus">
  #global-layout {
    min-height: 101vh;
  }

  .header{
    width 100%
    height: 4rem;
    background: $headerBg;

    .nav{
        a {
          color: $headerTextColor;
          margin-left: 1rem;
        }
        .nav-active{
          color:$primaryColor
          }
      }
  

    .title{
      font-size: 22px;
      color:$primaryColor;
      text-align: center;
      text-shadow: 0 0 0.1em, 0 0 0.3em;
      display:none;
      margin-left 1rem
    }
  }
  .header-jumbotron{
    position:absolute;
    background:transparent;

    .nav{
       a {
          color:#ffffff;
        }
      }
   
    }
@media (min-width: $mdMedia) {
  .header{
    .title{
      display:block}
    }
  }
  .footer{
    height: 4rem;
    background:$footerBg
    color:#ffffff
    a{
      color:$primaryColor
      &:hover{
        color:$primaryColor
        }
    }
    }

</style>
