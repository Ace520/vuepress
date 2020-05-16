<template>
  <ul id="default-layout">
    <li v-for="(item, index) in $category.list" :key="index">
      <router-link class="page-link" :to="item.path">{{ item.name }}</router-link>
    </li>
  </ul>
</template>
