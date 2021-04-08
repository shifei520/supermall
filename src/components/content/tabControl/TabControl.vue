<template>
  <div class="clasify">
    <div
      v-for="(item, index) in titles"
      class="clasify-item"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("goodsClick", index);
    },
  },
};
</script>

<style>
.clasify {
  display: flex;
  width: 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
}
.clasify-item {
  flex: 1;
}
.clasify-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 4px solid var(--color-tint);
}
</style>