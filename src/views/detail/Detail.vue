<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav-bar"
      @detailNavSkip="detailNavSkip"
      ref="detailNav"
    />
    <!-- <ul>
      <li v-for="item in $store.state.cartList">{{ item }}</li>
    </ul> -->
    <scroll
      class="detail-scroll"
      :probeType="3"
      ref="scrollTop"
      @scrollPosition="scrollPosition"
    >
      <detail-swiper :topImages="topImages" ref="detailSwiper"></detail-swiper>
      <detail-base-info :baseInfo="goodsDetail" />
      <detail-shop-info :shop="shop" />
      <detail-info-show
        :detailInfo="detailInfo"
        @detailIImgLoad="detailIImgLoad"
      />
      <detail-item-params :detailParams="detailParams" ref="detailParams" />
      <detail-comment :detailComment="detailComment" ref="detailComment" />
      <goods-list
        :goods="detaulImgs.slice(10, 20)"
        ref="detailRecommend"
        class="detail-recommend-goods"
      />
    </scroll>
    <detail-bottom-bar @addToCart="addToCart" />
    <scroll-to @click.native="scrollToTop" v-show="isActive" />
  </div>
</template>

<script>
//引入路由取得的详情页数据
import { detailData, GoodsDetail, Shop } from "network/detail";
//引入顶部nav
import DetailNavBar from "./childComps/DetailNavBar";
//引入轮播图
import DetailSwiper from "./childComps/DetailSwiper";
//引入商品信息组件
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
//引入店铺信息组件
import DetailShopInfo from "./childComps/DetailShopInfo.vue";

//引入better-scroll滚动
import Scroll from "components/common/scroll/Scroll";
//引入图片展示组件
import DetailInfoShow from "./childComps/DetailInfoShow.vue";
//引入参数组件
import DetailItemParams from "./childComps/DetailItemParams.vue";
//引入用户评价组件
import DetailComment from "./childComps/DetailComment.vue";

//引入推荐展示组件
import GoodsList from "components/content/goodsList/GoodsList.vue";
import { homeGoodsData } from "network/home.js";
//引入混入函数
import { imageLoaded, backTopMixin } from "common/mixin.js";
//引入底部导航组件
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailInfoShow,
    DetailItemParams,
    DetailComment,
    GoodsList,
    DetailBottomBar,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goodsDetail: null,
      shop: null,
      detailInfo: null,
      detailParams: null,
      detailComment: null,
      detaulImgs: [],
      type: "pop",
      page: 1,
      skipPageY: [],
      positionIndex: 0,
    };
  },
  mixins: [imageLoaded, backTopMixin],
  created() {
    this.iid = this.$route.params.iid;
    detailData(this.iid).then((res) => {
      this.topImages = res.result.itemInfo.topImages;
      // console.log(res);
      //获取商品信息
      this.goodsDetail = new GoodsDetail(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      //获取店铺信息
      this.shop = new Shop(res.result.shopInfo);
      //获取图片信息
      this.detailInfo = res.result.detailInfo;
      //获取参数信息
      this.detailParams = res.result.itemParams;
      //获取用户评价信息
      if (res.result.rate.cRate !== 0) {
        this.detailComment = res.result.rate;
      }
    });
    homeGoodsData(this.type, this.page).then((res) => {
      this.detaulImgs = res.data.list;
    });
  },
  mounted() {},
  destroyed() {
    this.$bus.$off("goodsImgLoad", this.imgLoadFun);
  },

  methods: {
    detailIImgLoad() {
      this.$refs.scrollTop.refresh();
      this.skipPageY = [];
      this.skipPageY.push(this.$refs.detailSwiper.$el.offsetTop);
      this.skipPageY.push(this.$refs.detailParams.$el.offsetTop);
      this.skipPageY.push(this.$refs.detailComment.$el.offsetTop);
      this.skipPageY.push(this.$refs.detailRecommend.$el.offsetTop);
    },
    detailNavSkip(index) {
      this.$refs.scrollTop.backTop(0, -this.skipPageY[index], 500);
    },
    scrollPosition(position) {
      let currentPageY = -position.y;
      let length = this.skipPageY.length;
      for (let i = 0; i < length; i++) {
        if (
          this.positionIndex !== i &&
          ((i < length - 1 &&
            currentPageY >= this.skipPageY[i] &&
            currentPageY < this.skipPageY[i + 1]) ||
            (i == length - 1 && currentPageY >= this.skipPageY[i]))
        ) {
          this.positionIndex = i;
          this.$refs.detailNav.currentIndex = i;
        }
      }
      //回到顶部按钮的显示与隐藏
      this.isActive = -position.y > 1000;
    },
    //加入购物车按钮点击事件
    addToCart() {
      //获取商品信息
      let product = {};
      product.image = this.topImages;
      product.title = this.goodsDetail.title;
      product.desc = this.detailInfo.desc;
      product.price = this.goodsDetail.oldPrice;
      product.iid = this.iid;
      //将商品添加到vuex中购物车内
      this.$store
        .dispatch("addCart", product)
        .then((res) => this.$toast.showToast(res, 1500));
    },
  },
};
</script>

<style>
#detail {
  position: relative;
  height: 100vh;

  z-index: 999;
  background-color: #fff;
}
.detail-nav-bar {
  position: relative;
  z-index: 999;
  font-size: 14px;
  background-color: #fff;
}
.detail-scroll {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
.detail-recommend-goods {
  margin-top: 10px;
}
</style>