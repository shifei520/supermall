<template>
  <div class="detail-shop-info" v-if="shop">
    <div class="detail-shop-info-header">
      <img :src="shop.shopLogo" alt="" />
      <span>{{ shop.name }}</span>
    </div>
    <div class="detail-shop-info-main">
      <div class="detail-shop-info-main-l">
        <div>
          <strong>{{ shop.cSells }}</strong>
          <div>总销量</div>
        </div>
        <div>
          <strong>{{ shop.cGoods }}</strong>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="detail-shop-info-main-r">
        <table>
          <tr v-for="item in shop.score">
            <td>{{ item.name }}</td>
            <td
              class="normal-color"
              :class="{ 'isBetter-high': item.isBetter }"
            >
              {{ item.score }}
            </td>
            <td v-if="!item.isBetter" class="normal-bc-color">低</td>
            <td
              v-else
              class="normal-bc-color"
              :class="{ 'isBetter-bc-high': true }"
            >
              高
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="detail-shop-enter">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.detail-shop-info {
  padding: 30px 10px;
}
.detail-shop-info-header img {
  width: 50px;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin-right: 15px;
  vertical-align: middle;
  -webkit-box-reflect: below 5px -webkit-linear-gradient(transparent, transparent
        50%, rgba(255, 255, 255, 0.6));
}
.detail-shop-info-main {
  display: flex;
  margin-top: 40px;
  font-size: var(--font-size);
}
.detail-shop-info-main strong {
  font-size: 18px;
}
.detail-shop-info-main-l {
  flex: 1;
  display: flex;
  padding: 0 25px;
  text-align: center;
  border-right: 1px solid #ccc;
  justify-content: space-between;
  align-items: center;
}
.detail-shop-info-main-r {
  flex: 1;
}
.detail-shop-info-main-r table {
  border-spacing: 7px;
}
.detail-shop-info-main-r table tr td:last-child {
  color: #fff;
}
.normal-bc-color {
  background-color: rgb(10, 175, 10);
}
.normal-color {
  color: rgb(10, 175, 10);
}
.isBetter-high {
  color: rgb(233, 13, 13);
}
.isBetter-bc-high {
  background-color: rgb(233, 13, 13);
}
.detail-shop-enter {
  height: 80px;
  padding: 25px 0 30px;
  text-align: center;
}
.detail-shop-enter span {
  padding: 5px 40px;
  border-radius: 18px;
  background-color: #ccc;
}
</style>