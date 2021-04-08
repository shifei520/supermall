<template>
  <div class="cart-item-show">
    <cart-item
      :cartItem="item"
      v-for="(item, index) in cartItem"
      :key="index"
    />
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
export default {
  components: { CartItem },
  name: "CartItemShow",
  props: {
    cartItem: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
</style>