<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @goodsClick="goodsTypeClick"
      ref="tabControl1"
      class="tab-control-fixed"
      v-show="isTabActive"
    />
    <scroll
      class="scroll-content"
      ref="scrollTop"
      :probeType="3"
      @scrollPosition="scrollPosition"
      :pullUpLoad="true"
      @pullingUp="loadMoreImg"
    >
      <home-swiper
        :banners="banners"
        @swiperImgLoad="swiperImageLoad"
      ></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @goodsClick="goodsTypeClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <scroll-to @click.native="scrollToTop" v-show="isActive" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { homeMultipleData, homeGoodsData } from "network/home.js";
// 轮播图组件
import HomeSwiper from "./childComps/HomeSwiper";

// 推荐区域组件
import HomeRecommend from "./childComps/HomeRecommend";

//分类区域
import HomeFeature from "./childComps/HomeFeature";
import TabControl from "components/content/tabControl/TabControl";
// 列表展示
import GoodsList from "components/content/goodsList/GoodsList.vue";

// 引用better-scroll封装的组件
import Scroll from "components/common/scroll/Scroll";
// 回到顶部小组件
import ScrollTo from "components/content/scrollTo/ScrollTo";
//引入混入函数
import { imageLoaded, backTopMixin } from "common/mixin.js";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
  },
  mixins: [imageLoaded, backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentGoodsType: "pop",
      isTabActive: false,
      tabOffsetTop: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentGoodsType].list;
    },
  },
  created() {
    // 获取首页和推荐数据
    this.gethomeMultipleData();
    //获取分类上划数据
    this.gethomeGoodsData("pop");
    this.gethomeGoodsData("new");
    this.gethomeGoodsData("sell");
  },
  mounted() {},
  deactivated() {
    //因为引用的是同一个组件，每次引用在另一个组件时goodList组件也发送图片加载事件，所以要在离开此组件时销毁当前组件的emit事件
    this.$bus.$off("goodsImgLoad", this.imgLoadFun);
  },
  methods: {
    //轮播图加载完成
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    // 网络请求事件
    gethomeMultipleData() {
      homeMultipleData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    gethomeGoodsData(type) {
      let page = this.goods[type].page + 1;
      homeGoodsData(type, page).then((res) => {
        this.goods[type].list = this.goods[type].list.concat(res.data.list);
        this.goods[type].page += 1;
      });
    },
    // 组件信息传递事件
    goodsTypeClick(index) {
      switch (index) {
        case 0:
          this.currentGoodsType = "pop";
          break;
        case 1:
          this.currentGoodsType = "new";
          break;
        case 2:
          this.currentGoodsType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    //确定滚动位置
    scrollPosition(position) {
      this.isActive = -position.y > 1000;
      this.isTabActive = -position.y > this.tabOffsetTop;
    },
    //上拉加载更多
    loadMoreImg() {
      this.gethomeGoodsData(this.currentGoodsType);
      this.$refs.scrollTop.finishPullUp();
    },
  },
};
</script>

<style >
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  /* position: fixed; */
  position: relative;
  /* top: 0;
  left: 0;
  right: 0; */
  color: #fff;
  z-index: 999;
  font-size: 20px;
  background-color: var(--color-tint);
}
.tab-control-fixed {
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
}
.scroll-content {
  position: absolute;
  left: 0;
  top: 44px;
  bottom: 49px;
  right: 0;
}
/* .content {
  height: 500px;
  overflow: hidden;
} */
</style>
