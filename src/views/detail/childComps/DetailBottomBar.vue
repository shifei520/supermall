<template>
  <div class="detail-btm-bar">
    <div class="detail-custom-ser">
      <span></span>
      <p>客服</p>
    </div>
    <div class="detail-store">
      <span></span>
      <p>店铺</p>
    </div>
    <div class="detail-lect">
      <span></span>
      <p>收藏</p>
    </div>
    <div class="detail-add-cart" @click="addToCart">加入购物车</div>
    <div class="detail-purchase">购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addToCart");
    },
  },
};
</script>

<style>
.detail-btm-bar {
  height: 49px;
  position: fixed;
  background-color: #fff;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
.detail-btm-bar div {
  display: inline-block;
  height: 100%;
  width: 19%;
  vertical-align: middle;
}
.detail-btm-bar .detail-add-cart {
  width: 24%;
}
.detail-custom-ser span,
.detail-store span,
.detail-lect span {
  display: block;
  height: 22px;
  width: 22px;
  margin: 4px auto;
  background: url("~assets/img/detail/detail_bottom.png") 0 -52px;
  background-size: 22px;
}
.detail-lect span {
  background-position: 0 0;
}
.detail-store span {
  background-position: 0 -98px;
}
.detail-add-cart {
  background-color: rgb(249, 216, 15);
}
.detail-add-cart,
.detail-purchase {
  line-height: 49px;
  font-size: 15px;
}
.detail-purchase {
  color: #fff;
  background-color: rgb(251, 117, 152);
}
</style>