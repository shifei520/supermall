import { debounce } from "./utils.js";
// 回到顶部小组件
import ScrollTo from "components/content/scrollTo/ScrollTo";
export const imageLoaded = {
  data() {
    return {
      imgLoadFun: null
    };
  },
  mounted() {
    const refresh = debounce(this.$refs.scrollTop.refresh, 300);
    this.imgLoadFun = () => {
      refresh();
    };
    this.$bus.$on("goodsImgLoad", this.imgLoadFun);
  }
};

export const backTopMixin = {
  components: {
    ScrollTo
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    //回到顶部
    scrollToTop() {
      this.$refs.scrollTop.backTop(0, 0);
    }
  }
};
