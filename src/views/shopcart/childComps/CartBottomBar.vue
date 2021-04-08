<template>
  <div class="cart-btom-bar">
    <div class="cart-all-checked">
      <div :class="{ checkedAll: isAll }" @click="selectAll">
        <!-- <img src="~assets/img/cart/tick.svg" alt="" /> -->
      </div>
      <span>全选</span>
    </div>
    <div class="cart-sum-price">合计：¥{{ sumPrice.toFixed(2) }}</div>
    <div class="cart-account" @click="bill">去计算({{ goAccount }})</div>
  </div>
</template>

<script>
export default {
  name: "CartBottomBar",
  data() {
    return {
      // isAll: false,
    };
  },
  computed: {
    sumPrice() {
      return this.$store.state.cartList
        .filter((item) => item.checked)
        .reduce((preValue, value) => {
          return preValue + value.price.slice(1) * value.count;
        }, 0);
    },
    goAccount() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
    isAll() {
      if (this.$store.state.cartList.length == 0) return false;
      return !this.$store.state.cartList.find((item) => !item.checked);
    },
  },
  methods: {
    selectAll() {
      if (this.isAll) {
        this.$store.state.cartList.forEach((item) => (item.checked = false));
      } else {
        this.$store.state.cartList.forEach((item) => (item.checked = true));
      }
    },
    bill() {
      if (!this.isAll) {
        this.$toast.showToast("请选择商品", 1500);
      }
    },
  },
};
</script>

<style>
.cart-btom-bar {
  display: flex;
  align-items: center;
  position: relative;
  top: calc(650px - 49px - 44px - 40px);
  /* bottom: 0; */
  left: 0;
  right: 0;
  height: 40px;
  /* line-height: 40px; */
  background-color: #eee;
}
.cart-all-checked {
  display: flex;
  width: 55px;
  margin: 0 10px;
}
.cart-all-checked div {
  width: 18px;
  height: 18px;
  margin-right: 5px;
  border-radius: 50%;
  border: 1px solid #ccc;
  text-align: center;
  /* background-color: red; */
  background-image: url("~assets/img/cart/tick.svg");
  background-size: 16px 16px;
  width: 16px;
  height: 16px;
}
.cart-all-checked span {
  line-height: 18px;
}
.cart-sum-price {
  flex: 1;
}
.cart-account {
  width: 80px;
  height: 100%;
  color: #fff;
  text-align: center;
  line-height: 40px;
  background-color: rgb(255, 0, 0);
}
/* 全选按钮 */
.checkedAll {
  border: 1px solid rgb(255, 0, 0) !important;
  background-color: rgb(255, 0, 0);
}
</style>