<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "away-BScroll",
  data(){
    return{
      flag:false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      tap: true,
      pullDownRefresh: true,
      pullUpLoad: true
    });
  },
  methods: {
    //   下拉刷新数据
    handlepullingDown(callback) {
      this.scroll.on("pullingDown", () => {
        callback();
        
      });
    },
    // 下拉刷新加载数据完毕通知better-scroll
    handlefinishPullDown() {
      this.scroll.finishPullDown();
      // 重新加载结构
      this.scroll.refresh();
    },
    // 上拉加载更多
    handlepullingUp(callback) {
      this.scroll.on("pullingUp", () => {
        callback();
      });
    },
    handlefinishPullUp(){
        this.scroll.finishPullUp();
      // 重新加载结构
      this.scroll.refresh();
    }
  }
};
</script>

<style>
.wrapper {
  height: 100%;
}
</style>


