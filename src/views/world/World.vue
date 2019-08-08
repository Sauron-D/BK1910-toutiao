<template>
  <div class="movieWrapper" ref="movieWrapper">
    <away-BScroll ref="awayScroll">
      <div class="world">
        <!-- 国际 -->
        <section class="has_action" v-for="(item,index) in data" :key="index">
          <!--单个图片 -->
          <a href="javascript: void(0)" class="article_link clearfix" v-if="item.image_url">
            <div class="item_detail desc">
              <h3 class="dotdot line3 image-margin-right">{{item.title}}</h3>

              <div class="item_info">
                <div>
                  <span class="stick_label space" v-if="item.label">{{item.label}}</span>
                  <span class="hot_label space" v-if="item.hot">热</span>
                  <span class="src space">{{item.media_name}}</span>
                  <span class="cmt space">
                    评论
                    {{item.comment_count}}
                  </span>
                  <span class="dislike-news fr mid-space"></span>
                </div>
              </div>
            </div>
            <div class="list_img_holder">
              <img :src="item.image_url" />
            </div>
          </a>
          <!--多个图片 -->
          <a href="javascript: void(0)" class="article_link clearfix" v-else>
            <div class="item_detail">
              <h3 class="dotdot line3">{{item.title}}</h3>
              <div class="list_image">
                <ul class="clearfix">
                  <li class="list_img_holder" v-for="(item,index) in item.image_list" :key="index">
                    <img :src="item.url" />
                  </li>
                </ul>
              </div>
              <div class="item_info">
                <div>
                  <span class="stick_label space" v-if="item.label">{{item.label}}</span>
                  <span class="hot_label space" v-if="item.hot">热</span>
                  <span class="src space">{{item.media_name}}</span>
                  <span class="cmt space">评论 {{item.comment_count}}</span>
                  <span class="time" title="2019-08-05 14:03">1分钟前</span>
                  <span class="dislike-ne ws fr"></span>
                </div>
              </div>
            </div>
          </a>
        </section>
      </div>
    </away-BScroll>
  </div>
</template>

<script>
import { world_api } from "../../api/world";
export default {
  name: "world",
  data() {
    return {
      data: ""
    };
  },
  async created() {
    let data = await world_api();
    this.data = data.data;
    console.log(this.data);
  },
  mounted() {
    // 下拉刷新
    this.$refs.awayScroll.handlepullingDown(async () => {
      let data = await world_api();
      this.data = data.data;
      this.$refs.awayScroll.handlefinishPullDown();
    });
    // 上拉加载更多
    this.$refs.awayScroll.handlepullingUp(async () => {
      let dataMore = await world_api();
      this.data = this.data.concat(dataMore.data);
      this.$refs.awayScroll.handlefinishPullUp();
    });
  }
};
</script>


<style>
.movieWrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 162px;
  bottom: 100px;
}
.world {
  width: 100%;
  min-height: 100px;
  overflow: scroll;
}
.world .has_action {
  margin: 0 30px;
  position: relative;
  border-bottom: 1px solid rgba(221, 221, 221, 0.6);
  font-family: "STHeiti", "Microsoft YaHei", "Helvetica", "Arial", sans-serif;
}
.world .has_action .article_link {
  display: block;
  min-height: 84px;
  padding: 32px 0;
  position: relative;
  color: #131313;
}
.world .item_detail h3 {
  line-height: 42px;
  color: #222;
  font-size: 34px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: normal;
  max-height: 100%;
  cursor: pointer;
}
.world .item_detail .list_image {
  margin-top: 12px;
}
.world .item_detail .list_image .clearfix {
  font-size: 0;
  text-align: center;
}
.world .item_detail .list_image .clearfix li {
  display: inline-block;
  padding-right: 2px;
  overflow: hidden;
  width: 33.3%;
  box-sizing: border-box;
}
.world .item_detail .list_image .clearfix li:first-child {
  padding-right: 4px;
  float: left;
}
.list_image img {
  display: block;
  width: 100%;
}
.item_detail .item_info {
  font-size: 20px;
  margin-top: 12px;
  color: #999;
  overflow: hidden;
  /* font-size: 0; */
}
.world .item_detail .item_info span {
  margin-right: 10px;
  line-height: 24px;
  display: inline-block;
  vertical-align: middle;
}
.world .desc {
  display: inline-block;
  width: 67%;
  vertical-align: middle;
}
.world .item_detail .image-margin-right {
  margin-right: 24px;
  line-height: 42px;
  font-size: 34px;
}
.world .list_img_holder {
  overflow: hidden;
  width: 33%;
  display: inline-block;
  vertical-align: middle;
}
.world .list_img_holder img {
  width: 100%;
}
</style>
