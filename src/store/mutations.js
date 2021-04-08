export default {
  addCount(state, payload) {
    // this.set(payload, "count", ++payload.count);
    payload.count++;
  },
  addToCart(state, payload) {
    payload.checked = true;
    state.cartList.push(payload);
  }
};
