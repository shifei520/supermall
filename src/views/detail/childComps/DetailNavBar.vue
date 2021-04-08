<template>
  <nav-bar>
    <div slot="left" class="back" @click="goback">
      <img src="~assets/img/common/back.svg" alt="" />
    </div>
    <div slot="center" class="detail-nav-center">
      <div
        v-for="(item, index) in navBarTitles"
        class="detail-nav-center-item"
        :class="{ 'detail-nav-style': currentIndex === index }"
        :key="index"
        @click="detailClick(index)"
      >
        {{ item }}
      </div>
    </div></nav-bar
  >
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "DetailNavBar",
  data() {
    return {
      navBarTitles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: { NavBar },
  methods: {
    detailClick(index) {
      this.currentIndex = index;
      this.$emit("detailNavSkip", index);
    },
    goback() {
      this.$router.back();
    },
  },
};
</script>

<style>
.detail-nav-center {
  display: flex;
}
.detail-nav-center-item {
  flex: 1;
}
.back img {
  margin-top: 12px;
}
.detail-nav-style {
  color: var(--color-high-text);
}
</style>