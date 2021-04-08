<template>
  <div class="detail-comment" v-if="detailComment">
    <div class="detail-comment-hd">
      <span>用户评价</span>
      <a href="javascript:void(0);" class="detail-comment-more">更多</a>
    </div>

    <div class="detail-comment-bd">
      <div v-for="item in detailComment.list">
        <div class="detail-comment-bd-user">
          <img :src="item.user.avatar" alt="" />
          <span>{{ item.user.uname }}</span>
        </div>
        <div class="detail-comment-bd-sub">
          <p>{{ item.content }}</p>

          <!-- 这里时间最好用过滤器使用vue格式化 -->
          <span class="detail-comment-time"
            >{{ getTime(item.created) }} {{ item.style }}</span
          >
          <div class="detail-comment-imgs">
            <img :src="key" alt="" v-for="(key, index) in item.images" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailComment",
  props: {
    detailComment: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    getTime(time) {
      let newDate = new Date(time * 1000);
      let y = newDate.getFullYear();
      let m_ = newDate.getMonth() + 1;
      let m = m_ > 10 ? m_ : "0" + m_;
      let d =
        newDate.getDate() > 10 ? newDate.getDate() : "0" + newDate.getDate();
      return y + "-" + m + "-" + d;
    },
  },
};
</script>

<style>
.detail-comment {
  padding: 10px 10px 30px;
  border-bottom: 5px solid rgb(243, 239, 239);
}
.detail-comment-bd {
  margin-top: 10px;
}
.detail-comment-bd-user img {
  width: 30px;
  margin-right: 10px;
  vertical-align: middle;
}
.detail-comment-bd-sub p {
  font-size: 14px;
}
.detail-comment-bd-user span {
  font-weight: 700;
  font-size: 18px;
}
.detail-comment-time {
  line-height: 30px;
  font-size: 12px;
  color: var(--color-text-light);
}
.detail-comment-hd {
  position: relative;
  font-size: var(--font-size);
}
.detail-comment-more {
  position: absolute;
  right: 0;
}
.detail-comment-imgs img {
  width: 50px;
}
</style>