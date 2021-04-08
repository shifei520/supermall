<template>
  <div class="detail-goods-info-show" v-if="baseInfo">
    <div class="item-info-base">
      <p>{{ baseInfo.title }}</p>
      <span>{{ baseInfo.price }}</span>
      <span>{{ baseInfo.oldPrice }}</span>
      <span :style="{ 'background-color': baseInfo.discountBgColor }">{{
        baseInfo.discountDesc
      }}</span>
    </div>
    <div class="item-info-sell">
      <div>{{ baseInfo.columns[0] }}</div>
      <div>{{ baseInfo.columns[1] }}</div>
      <div>{{ baseInfo.services[0].name }}</div>
    </div>
    <div class="item-info-trans">
      <div
        v-for="index in baseInfo.services.length - 1"
        :key="index"
        class="item-info-trans-service"
      >
        <img :src="baseInfo.services[index].icon" alt="" />
        <span>{{ baseInfo.services[index].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.item-info-base {
  padding: 10px;
  line-height: 24px;
}
.item-info-base p {
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 15px;
}

.item-info-base span:nth-of-type(1) {
  margin-right: 10px;
  color: var(--color-tint);
  font-weight: 700;
  font-size: 24px;
}
.item-info-base span:nth-of-type(2) {
  font-size: var(--font-size);
  font-style: oblique;
  text-decoration: line-through;
  color: var(--color-text-light);
}
.item-info-base span:nth-of-type(3) {
  /* display: inline-block; */
  /* margin-top: -10px; */
  position: relative;
  top: -10px;
  left: 7px;
  color: var(--color-background);
  padding: 5px;
  border-radius: 10px;
}

.item-info-sell {
  display: flex;
  padding-bottom: 10px;
  text-align: center;
  font-size: var(--font-size);
  color: var(--color-text-light);
}
.item-info-sell div {
  flex: 1;
}
.item-info-trans {
  display: flex;
  height: 80px;
  line-height: 80px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 5px;
  font-size: 14px;
  justify-content: space-between;
}
.item-info-trans-service img {
  width: 14px;
  vertical-align: middle;
}
</style>