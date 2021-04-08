<template>
  <div class="cart-item">
    <!-- 勾选框制作 -->
    <!-- <label for="cart-btn"> -->
    <div class="cart-check-btn">
      <div :class="{ 'btn-active': cartItem.checked }" @click="checkedBtn">
        <!-- <img src="~assets/img/cart/tick.svg" alt="" /> -->
      </div>
    </div>
    <!-- </label> -->
    <img :src="cartItem.image[0]" alt="" />
    <div class="cart-item-content">
      <h4>{{ cartItem.title }}</h4>
      <i>{{ cartItem.desc }}</i>
      <p>
        {{ cartItem.price }} <span>✖{{ cartItem.count }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    cartItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isChecked: true,
    };
  },
  methods: {
    checkedBtn() {
      this.cartItem.checked = !this.cartItem.checked;
    },
  },
};
</script>

<style>
.cart-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.cart-check-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
}
.cart-check-btn div {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #aaa;
  background-image: url("~assets/img/cart/tick.svg");
  background-size: 16px 16px;
  width: 16px;
  height: 16px;
}
.btn-active {
  border: 1px solid rgb(255, 0, 0) !important;
  background-color: rgb(255, 0, 0);
}
.cart-check-btn img {
  height: 16px;
  width: 16px;
  border: 0;
}
.cart-item img {
  width: 90px;
  height: 130px;
  margin-left: 5px;
  border-radius: 8px;
}
.cart-item-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 265px;
  padding: 0 10px;
  overflow: hidden;
}
.cart-item-content p {
  position: relative;
  color: rgb(245, 102, 34);
}
.cart-item-content p span {
  position: absolute;
  color: #000;
  right: 0;
}
.cart-item-content h4 {
  overflow: hidden;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.cart-item-content i {
  display: block;
  font-size: var(--font-size);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>