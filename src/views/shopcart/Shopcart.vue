<template>
  <div id="shop-cart">
    <nav-bar class="shop-cart-nav"
      ><div slot="center">购物车({{ getCartLength }})</div></nav-bar
    >
    <scroll class="cart-scroll" ref="scrollTop"
      ><cart-item-show :cart-item="getCartItem"
    /></scroll>
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { mapGetters } from "vuex";
import CartItemShow from "./childComps/CartItemShow.vue";
import Scroll from "components/common/scroll/Scroll.vue";

//引入底部结算栏
import CartBottomBar from "./childComps/CartBottomBar.vue";
export default {
  name: "Shopcart",
  components: {
    NavBar,
    CartItemShow,
    Scroll,
    CartBottomBar,
  },
  computed: {
    ...mapGetters(["getCartLength", "getCartItem"]),
  },
  activated() {
    this.$refs.scrollTop.refresh();
  },
};
</script>

<style>
#shop-cart {
  position: relative;
  height: 100vh;
}
.cart-scroll {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
.shop-cart-nav {
  letter-spacing: 2px;
  color: #fff;
  font-size: 16px;
  background-color: var(--color-tint);
}
</style>
