<template>
  <!-- <div v-if="posts.length">
    <div
      v-for="post in posts"
      :key="post.path"
    >
      {{ post.frontmatter.title }}
      {{ post.excerpt }}
    </div>
  </div> -->
  <v-layout>
    <v-flex>
      <transition-group
        appear
        name="list"
      >
        <template
          v-if="posts.length"
          v-for="post in posts"
        >
          <v-card key="post.key">
            <v-img
              class="white--text"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-container
                fill-height
                fluid
              >
                <v-layout fill-height>
                  <v-flex
                    xs12
                    align-end
                    flexbox
                  >
                    <span class="headline">{{ post.frontmatter.title }}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <span class="grey--text">{{ post.frontmatter.date }}</span><br>
                <p v-line-clamp="lines">
                  <span v-html="post.excerpt"></span>
                </p>
              </div>
            </v-card-title>
            <v-card-actions>
                <v-btn
                  flat
                  color="orange"
                  :to="post.path"
                >Read more....</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </transition-group>
    </v-flex>
  </v-layout>

  <!-- <div v-if="posts.length" class="posts">
    <el-row class="post" v-for="post in posts" :key="post.path">
      <el-card>
        <div slot="header" class="clearfix">
          <router-link :to="post.path" class="post-link">
            <div>
              <img
                v-if="post.frontmatter.image"
                :src="$withBase(post.frontmatter.image)"
                alt
              />
            </div>
            {{ post.frontmatter.title }} <br />
            <span class="post-date">{{ post.frontmatter.date }}</span>
          </router-link>
        </div>
        <div v-html="post.excerpt"></div>
        <router-link :to="post.path">Read more....</router-link>
      </el-card>
    </el-row>
  </div> -->
</template>

<script>

export default {
  props: ["page"],
  data() {
    return {
    lines: 3
    }
  },
  computed: {
    posts() {
      let currentPage = this.page ? this.page : this.$page.path;
      let posts = this.$site.pages
        .filter(x => {
          return x.path.match(new RegExp(`(${currentPage})(?=.*html)`));
        })
        .sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
      console.log(posts);
      return posts;
    }
  },
  methods: {
  }
};
</script>

<style scoped>
.list-move {
  transition: transform 1s;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>