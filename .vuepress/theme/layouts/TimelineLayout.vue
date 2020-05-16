<template>
  <div class="container mx-auto timeline">
    <timeline>
      <timeline-item v-for="(item, index) in items" :key="index">
        <div class="tl-title">{{item.date}}</div>
        <div class="flex items-center tl-items" v-for="(item1, index1) in item.pages" :key="index1">
          <div class="tl-type">{{types[item1.id]}}</div>
          <router-link class="link" :to="item1.path">{{ item1.title }}</router-link>
        </div>
      </timeline-item>
    </timeline>
  </div>
</template>

<script>
import Vue from "vue";
import { Timeline, TimelineItem } from "vue-cute-timeline";
const theme = "red";
export default {
  components: {
    Timeline,
    TimelineItem
  },
  data() {
    return {
      items: [],
      types: {
        post: "博文",
        cheatsheet: "速查表"
      }
    };
  },

  created() {
    let arr = [];
    this.$site.pages.forEach(element => {
      if (element.frontmatter.date) {
        element.index = parseInt(element.frontmatter.date.replace(/-/g, ""));
        arr.push(element);
      }
    });
    function compare(obj1, obj2) {
      let val1 = obj1.index;
      let val2 = obj2.index;
      if (val1 < val2) {
        return 1;
      } else if (val1 > val2) {
        return -1;
      } else {
        return 0;
      }
    }
    let itemsSort = arr.sort(compare);
    let items = [];
    let dateArr = [];
    itemsSort.forEach(item => {
      if (!items[item.frontmatter.date]) {
        items[item.frontmatter.date] = {
          date: item.frontmatter.date,
          pages: []
        };
      }
      items[item.frontmatter.date]["pages"].push(item);
    });
    this.items = Object.values(items);
  },
  methods: {}
};
</script>
<style lang="stylus" scoped>
.timeline {
  max-width: 800px;
  margin: 0 auto;
}

.tl-title {
  font-weight: blod;
  font-size: 18px;
  border-bottom: 1px solid #ebeef5;
  padding-bottom: 1rem;
  position: relative;
  color: #8492a6;
  -webkit-transition: 0.25s;
  transition: 0.25s;
  font-weight: 500;
}

.tl-items {
  margin: 1rem 0;

  .tl-type {
    box-sizing: border-box;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: 'tnum';
    display: inline-block;
    height: 22px;
    margin: 0 8px 0 0;
    padding: 0 7px;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    cursor: pointer;
    opacity: 1;
    -webkit-transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    color: #6690b8;
    background: #e9f3f7;
    border-color: #d1d9de;
  }
}
</style>