<template>
  <div class="travel">
    <away-BScroll ref="awayScroll">
      <div class="page">
        <div v-for="(item,index) in data" :key="index" class="itemBox">
          <Newsbox :message="[item,index]" @dispear="disapearHandler"></Newsbox>
        </div>
      </div>
    </away-BScroll>
  </div>
</template>


<script>
import Newsbox from "../../components/newsbox/Newsbox";
import { travel_one_api } from "../../api/travel";
export default {
  name: "Travel",
  data() {
    return {
      data: ""
    };
  },
  async created() {
    // if (!sessionStorage.getItem("data")) {
    let data = await travel_one_api();
    this.data = data.data;
    // sessionStorage.setItem("data",data.data)
    console.log(this.data);
    // }
  },
  mounted() {
    // 下拉刷新
    this.$refs.awayScroll.handlepullingDown(async () => {
      let data = await travel_one_api();
      this.data = data.data;
      this.$refs.awayScroll.handlefinishPullDown();
    });
    // 上拉加载更多
    this.$refs.awayScroll.handlepullingUp(async () => {
      let dataTwo = await travel_one_api();
      this.data = this.data.concat(dataTwo.data);
      this.$refs.awayScroll.handlefinishPullUp();
    });
  },
  methods: {
    disapearHandler(props) {
      let elem = document.getElementsByClassName("itemBox")[props];
      setTimeout(() => {
        elem.className = "itemBox retreat";
      }, 0);
      setTimeout(() => {
        elem.className = "itemBox retreat heightzero";
      }, 500);
      setTimeout(() => {
        elem.className = "itemBox retreat heightzero dispear";
      }, 2000);
    }
  },
  components: {
    Newsbox
  }
};
</script>


<style>
.travel {
  width: 100%;
  min-height: 100px;
  overflow: auto;
  position: absolute;
  top: 162px;
  bottom: 0px;
  font-size: 50px;
  /* touch-action: none; */
}
.travel .itemBox {
  width: 100%;
  min-height: 200px;
  background: #ccc;
}
.retreat {
  margin-left: 800px;
  overflow: hidden;
  transition: margin-left 0.5s;
}
.heightzero {
  min-height: 0 !important;
  height: 0 !important;
  overflow: hidden;
  transition: all 1s linear;
}
.dispear {
  display: none;
  margin: 0;
}
</style>


