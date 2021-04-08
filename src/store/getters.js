export default {
  getCartLength(state) {
    return state.cartList.length;
  },
  getCartItem(state) {
    return state.cartList;
  }
};
