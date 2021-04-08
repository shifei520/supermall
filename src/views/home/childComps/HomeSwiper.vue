<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperImgLoad(isLoaded)" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";

export default {
  name: "HomeSwiper",
  data() {
    return {
      isLoaded: true,
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    swiperImgLoad(isLoaded) {
      if (isLoaded) {
        this.$emit("swiperImgLoad");
        this.isLoaded = false;
      }
    },
  },
};
</script>

<style>
</style>
