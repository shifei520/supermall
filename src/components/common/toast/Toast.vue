<template>
  <div class="toast" v-show="isshow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isshow: false,
    };
  },
  methods: {
    showToast(message, delay = 1500) {
      this.message = message;
      this.isshow = true;
      setTimeout(() => {
        this.message = "";
        this.isshow = false;
      }, delay);
    },
  },
};
</script>

<style>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
.toast div {
  padding: 6px 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}
</style>