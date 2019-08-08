<template>
  <div class="video">
    <away-BScroll ref="awayScroll">
      <div class="page">
        <v-touch
          class="action"
          v-for="(item,index) in data"
          :key="index"
          @press="voideShow($event,index)"
          tag="div"
          :class="bool? 'a':'' "
        >
          <a class="link">
            <div class="list">
              <p>{{item.title}}</p>
              <img :src="item.large_image_url || item.image_url" />
              <span class="btn"></span>
            </div>
            <div class="info">
              <span class="src space">{{item.media_name}}</span>
              <span class="cmt space">
                评论
                {{item.repin_count}}
              </span>
              <span class="time space" title="2019-08-07 10:59">{{item.datetime}}</span>
            </div>
          </a>
        </v-touch>
        <div class="del" v-show="bool" @tap="voideDele"><span>不感兴趣</span></div>
      </div>
    </away-BScroll>
  </div>
</template>


<script>
import { video_one_api } from "../../api/video";
import { constants } from "crypto";
export default {
  name: "Video",
  data() {
    return {
      data: sessionStorage.getItem("data") || "",
      bool: false,
      null:""
    };
  },
  async created() {
    // if (!sessionStorage.getItem("data")) {
    let data = await video_one_api();
    this.data = data.data;
    // sessionStorage.setItem("data",data.data)
    console.log(this.data);
    // }
  },
  mounted() {
    // 下拉刷新
    this.$refs.awayScroll.handlepullingDown(async () => {
      let data = await video_one_api();
      this.data = data.data;
      this.$refs.awayScroll.handlefinishPullDown();
    });
    // 上拉加载更多
    this.$refs.awayScroll.handlepullingUp(async () => {
      let dataTwo = await video_one_api();
      this.data = this.data.concat(dataTwo.data);
      this.$refs.awayScroll.handlefinishPullUp();
    });
  },
  methods: {
    voideShow(e, index) { 
      console.log(e);
        this.bool=true
        this.null=index
        let div = document.querySelector(".del");
        let div1 = document.querySelector(".video");
        div.style.left=e.srcEvent.clientX+"px";
        div.style.top=e.srcEvent.clientY+div1.scrollTop-160+"px";
    },
    voideDele(){
        this.data.splice(this.null,1)
        this.bool=false
    }
  }
};
</script>


<style>
.video {
  width: 100%;
  min-height: 100px;
  overflow: scroll;
  position: absolute;
  top: 162px;
  bottom: 0px;
}
/* .a {
  transition: 2s all linear;
  transform: translate(-300px, 0);
} */
.action {
  position: relative;
  margin: 0 30px;
}
.action .link {
  display: block;
  padding: 32px 0;
  border-bottom: 1px solid rgba(221, 221, 221, 0.6);
}
.action .link .list {
  margin-top: 6px;
  position: relative;
}
.action .link .list p {
  color: aliceblue;
  position: absolute;
  font-size: 28px;
  margin: 10px 20px;
}
.action .link .list img {
  border: none;
  display: block;
  width: 100%;
  height: 388px;
}
.action .link .list .btn {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: url(//s3.pstatp.com/growth/mobile_list/image/playicon_video@3x_dcf536ff.png)
    no-repeat center center;
  background-size: 100px;
}
.action .link .info {
  font-size: 0px;
  margin-top: 6px;
}
.action .link .info .space {
  display: inline-block;
  font-size: 20px;
  line-height: 24px;
  margin-right: 10px;
  color: #999;
}
.del {
    overflow: hidden;
  position: absolute;
  /* display: none; */
  background: #f9f9f9;
   width: 180px;
  height: 60px;
  /* right: 400px;
  top: 38px; */
  border: 1px solid #999;
  text-align: center;
  line-height: 60px;
  animation: 1s enlarge;
}
@keyframes enlarge {
    0% {
        width: 0px;
    }
    100% {
        width: 180px;
    }
}
.del span{
    
    font-size: 30px
}
</style>
