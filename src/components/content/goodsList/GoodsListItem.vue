<template>
  <div class="goods-item" v-if="goodsItem">
    <img
      v-lazy="goodsItem.show.img"
      alt=""
      @load="goodsImgLoad"
      @click="detailPage"
    />
    <div class="content-item">
      <p>{{ goodsItem.title }}</p>
      <span>{{ goodsItem.price }}</span>
      <span>{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    goodsImgLoad() {
      this.$bus.$emit("goodsImgLoad");
    },
    //点击图片跳转到详情页
    detailPage() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>

<style >
.goods-item {
  width: 48%;
}
.content-item {
  text-align: center;
  font-size: 12px;
  padding: 5px 0 10px;
}
.content-item span:nth-of-type(1) {
  color: var(--color-high-text);
  margin-right: 20px;
}
.content-item span:nth-of-type(2) {
  position: relative;
}
.content-item span:nth-of-type(2)::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
.content-item p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.goods-item img {
  width: 100%;
  border-radius: 0.3rem;
}
</style>