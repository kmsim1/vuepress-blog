<template>
  <v-app>
    <v-toolbar
      :clipped-left="true"
      color="blue-grey"
      dark
      app
    >
      <v-toolbar-title>
        <!-- {{ $site.title }} -->
        Test
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden=sm-and-down">
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat to="/posts/">Category</v-btn>
        <v-btn flat to="/about/">About</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <component :is="$page.frontmatter.layout" />
      </v-container>
    </v-content>
  </v-app>
  <!-- <el-container style="max-width: 900px; margin: 0px auto;">
    <link href="https://fonts.googleapis.com/css?family=Jura" rel="stylesheet">
    <el-header class="blog-header" height="100px">
      <h1>{{ $site.title }}</h1>
    </el-header>

    <el-menu
      :router="true"
      :default-active="activeIndex"
      class="el-menu-demo"
      style="margin: 0px 20px 0px 20px"
      background-color="#f9fafc"
      type="flex"
      justify="center"
    >
      <el-row type="flex" justify="center">
        <el-col :xs="6" :md="4">
          <el-menu-item index="/">Home</el-menu-item>
        </el-col>
        <el-col :xs="6" :md="4">
          <el-menu-item index="/posts/">Posts</el-menu-item>
        </el-col>
        <el-col :xs="6" :md="4">
          <el-menu-item index="/about/">About</el-menu-item>
        </el-col>
      </el-row>
    </el-menu>

    <el-main>
      <component :is="$page.frontmatter.layout"/>
    </el-main>
  </el-container> -->
</template>

<script>
import Vue from "vue";
import Prism from 'prismjs';
import Vuetify from "vuetify";
import lineClamp from 'vue-line-clamp'

Vue.use(Prism);
Vue.use(Vuetify);
Vue.use(lineClamp);

export default {
  data() {
    return {};
  },
  computed: {
    activeIndex() {
      return this.page ? this.page : this.$page.path;
    }
  },
  methods: {
  }
};
</script>

<style src="../public/css/vuetify.min.css"></style>
<style src="../public/css/prism-tomorrow.css"></style>
<style scoped>
</style>