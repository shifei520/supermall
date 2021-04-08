<template>
  <div class="detail-info-show" v-if="detailInfo">
    <div class="detail-info-desc">
      ---------
      <br /><br />
      {{ detailInfo.desc }}
      <br /><br />
      ---------
      <br /><br />
      {{ detailInfo.detailImage[0].key }}
    </div>
    <div class="detail-info-goods">
      <img
        :src="item"
        alt=""
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        @load="detailIImgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfoShow",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      imageLength: 0,
      counter: 0,
    };
  },
  methods: {
    detailIImgLoad() {
      if (++this.counter == this.imageLength) {
        this.$emit("detailIImgLoad");
      }
    },
  },
  watch: {
    detailInfo() {
      this.imageLength = this.detailInfo.detailImage[0].list.length;
    },
  },
};
</script>

<style>
.detail-info-show {
  padding: 10px;
  border-top: 5px solid rgb(240, 232, 232);
}
.detail-info-goods img {
  width: 100%;
}
</style>