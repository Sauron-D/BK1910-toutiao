<template>
  <div class="social">
    <away-BScroll ref="awayScroll">
      <div class="page">
        <section class="has_action" v-for="(item,index) in data" :key="index">
          <a class="article_link clearfix">
            <div class="item_detail" v-if="item.has_image? false: true ">
              <div>
                <h3 class="dotdot line3">{{item.title}}</h3>
              </div>
              <div class="item_info">
                <span class="stick_label" v-if="item.label? true: false ">{{item.label}}</span>
                <span class="src space">{{item.media_name}}</span>
                <span class="cmt space">
                  评论
                  {{item.comment_count}}
                </span>
                <span class="time space">{{item.datetime}}</span>
              </div>
            </div>
            <!-- 三张图片 -->
            <div class="item_detail" v-if="(item.image_list&&item.image_list!=0)?true:false">
              <h3 class="dotdot line3">{{item.title}}</h3>
              <div class="list_image">
                <ul class="clearfix">
                  <li
                    class="list_img_holder"
                    v-for="(itemImg,indexImg) in item.image_list"
                    :key="indexImg"
                  >
                    <img :src="itemImg.url" />
                  </li>
                </ul>
              </div>
              <div class="item_info">
                <div>
                  <span class="src space">{{item.source}}</span>
                  <span class="cmt space">
                    评论
                    {{item.comment_count}}
                  </span>
                  <span class="time space">{{item.datetime }}</span>
                </div>
              </div>
            </div>

            <!-- 一张图片 -->
            <div class="oneImg" v-if="item.image_url?true:false">
              <div class="item_detail desc">
                <h3 class="dotdot line3 image-margin-right">{{item.title}}</h3>
                <div class="item_info">
                  <span class="hot_label" v-if="item.hot? true:false">热</span>
                  <span class="src space">{{item.source}}</span>
                  <span class="cmt space">
                    评论
                    {{item.comment_count}}
                  </span>
                </div>
              </div>
              <div class="list_img_holder">
                <img :src="item.image_url" />
              </div>
            </div>
          </a>
        </section>
      </div>
    </away-BScroll>
  </div>
</template>


<script>
import { social_one_api } from "../../api/social";
export default {
  name: "Social",
  data() {
    return {
      data: ""
    };
  },
 async created() {
    // if (!sessionStorage.getItem("data")) {
      let data = await social_one_api();
      this.data = data.data;
      // sessionStorage.setItem("data",data.data)
      console.log(this.data);
    // }
  },
   mounted() {
    // 下拉刷新
    this.$refs.awayScroll.handlepullingDown(async () => {
      let data = await social_one_api();
      this.data = data.data;
      this.$refs.awayScroll.handlefinishPullDown();
    })
    // 上拉加载更多 
    this.$refs.awayScroll.handlepullingUp(async () =>{
        let dataTwo = await social_one_api();
        this.data=this.data.concat(dataTwo.data)
         this.$refs.awayScroll.handlefinishPullUp();
    })
  }
};
</script>


<style>
.social {
  width: 100%;
  min-height: 100px;
  overflow: scroll;
  position: absolute;
  top: 162px;
  bottom: 0px;
  font-size: 50px;
}

</style>
