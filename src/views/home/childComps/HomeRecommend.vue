<template>
  <div class="home-recommend">
    <recommend-item v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
      </a>
    </recommend-item>
  </div>
</template>

<script>
import RecommendItem from "components/common/recommend/RecommendItem";
export default {
  name: "HomeRecommend",
  components: {
    RecommendItem,
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.home-recommend {
  display: flex;
  width: 100%;
  margin-top: 8px;
  padding-bottom: 16px;
  text-align: center;
  font-size: 12px;
  border-bottom: 8px solid #eee;
}
.home-recommend .rcmmd-item {
  flex: 1;
}
.rcmmd-item img {
  width: 70px;
  margin-bottom: 10px;
}
</style>