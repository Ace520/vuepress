<template>
  <div class="container mx-auto cheatsheet">
    <div v-for="(item, index) in $category.list" :key="index">
      <div class="card-title">{{item.name}}</div>
      <div class="grid grid-cols gap">
        <div class="item" v-for="(item1, index1) in item.pages" :key="index1">
          <div class="card">
            <div class="card_content flex items-center item-content">
              <div class="img flash-container"></div>
              <router-link class="link" :to="item1.path">{{ item1.title }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  components: {},
  created() {}
};
</script>
<style lang="stylus" scoped>
.grid {
  display: grid;
}

.gap {
  grid-gap: 1rem;
  gap: 1rem;
}

.grid-cols {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

@media (min-width: $smMedia) {
  .grid-cols {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

@media (min-width: $mdMedia) {
  .grid-cols {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: $lgMedia) {
  .grid-cols {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: $xlMedia) {
  .grid-cols {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.cheatsheet {
  .item {
    -webkit-transition: 0.35s;
    transition: 0.35s;
    border-radius: 4px;

    .item-content {
      padding: 1rem;
    }

    .img {
      background: url('../../../static/vue.jpg');
      background-size: cover;
      background-position: center;
      height: 2rem;
      width: 2rem;
      margin-right: 0.6rem;
      border-radius: 5px;
    }

    &:hover {
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05), 0 0 1px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>