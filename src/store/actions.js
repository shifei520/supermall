export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let newProduct = context.state.cartList.find(
        item => item.iid === payload.iid
      );
      if (newProduct) {
        // newProduct.count += 1;
        context.commit("addCount", newProduct);
        resolve("商品数量+1");
      } else {
        // payload.count = 1;
        // Vue.$set(payload, "count", 1);
        Object.assign(payload, { count: 1 });
        context.commit("addToCart", payload);
        resolve("添加购物车成功");
      }
    });
  }
};
