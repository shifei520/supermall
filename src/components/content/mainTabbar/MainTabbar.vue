<template>
  <tab-bar>
    <tab-bar-item path="/home" newColor="deeppink">
      <img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon" />
      <img
        src="~assets/img/tabbar/home_active.svg"
        alt=""
        slot="item-icon-active"
      />
      <p slot="item-text">首页</p>
    </tab-bar-item>
    <tab-bar-item path="/category" newColor="deeppink">
      <img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon" />
      <img
        src="~assets/img/tabbar/category_active.svg"
        alt=""
        slot="item-icon-active"
      />
      <p slot="item-text">分类</p>
    </tab-bar-item>
    <tab-bar-item path="/shopcart" newColor="deeppink">
      <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="item-icon" />
      <img
        src="~assets/img/tabbar/shopcart_active.svg"
        alt=""
        slot="item-icon-active"
      />
      <p slot="item-text">购物车</p>
    </tab-bar-item>
    <tab-bar-item path="profile" newColor="deeppink">
      <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-icon" />
      <img
        src="~assets/img/tabbar/profile_active.svg"
        alt=""
        slot="item-icon-active"
      />
      <p slot="item-text">我的</p>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabBar/TabBar";
import TabBarItem from "components/common/tabBar/TabBarItem";
export default {
  name: "MainTabbar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>
