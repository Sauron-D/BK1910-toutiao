<template >
  <div class="rec">
    <away-BScroll ref="awayScroll">
      <div class="page">
        <section class="has_action" v-for="(item,index) in data" :key="index">
          <a class="article_link clearfix">
            <div class="item_detail" v-show="item.has_image? false: true ">
              <div>
                <h3 class="dotdot line3">{{item.title}}</h3>
              </div>
              <div class="item_info">
                <span class="stick_label" v-show="item.label? true: false ">{{item.label}}</span>
                <span class="src space">{{item.media_name}}</span>
                <span class="cmt space">
                  评论
                  {{item.comment_count}}
                </span>
                <span class="time space">{{item.datetime}}</span>
              </div>
            </div>
            <!-- 三张图片 -->
            <div class="item_detail" v-show="(item.image_list&&item.image_list!=0)?true:false">
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
                  <span class="time space">{{item.datetime}}</span>
                </div>
              </div>
            </div>

            <!-- 一张图片 -->
            <div class="oneImg" v-show="item.image_url?true:false">
              <div class="item_detail desc">
                <h3 class="dotdot line3 image-margin-right">{{item.title}}</h3>
                <div class="item_info">
                  <span class="hot_label" v-show="item.hot? true:false">热</span>
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
import { rec_one_api,rec_two_api } from "../../api/rec";
export default {
  name: "Rec",
  data() {
    return {
      data:""
    };
  },
  async created() {
    // if (!sessionStorage.getItem("data")) {
      let data = await rec_one_api();
      this.data = data.data;
      sessionStorage.setItem("data",data.data)
      console.log(this.data);
    // }
  },

  mounted() {
    // 下拉刷新
    this.$refs.awayScroll.handlepullingDown(async () => {
      let data = await rec_one_api();
      this.data = data.data;
      this.$refs.awayScroll.handlefinishPullDown();
    })
    // 上拉加载更多 
    this.$refs.awayScroll.handlepullingUp(async () =>{
        let dataTwo = await rec_two_api();
        this.data=this.data.concat(dataTwo.data)
         this.$refs.awayScroll.handlefinishPullUp();
    })
  },
};
</script>


<style>
.rec {
  width: 100%;
  min-height: 100px;
  overflow: scroll;
  position: absolute;
  top: 162px;
  bottom: 0px;
  box-sizing: border-box;
}
.page .has_action {
  margin: 0px 30px;

  padding: 0px;
}
.page .has_action .article_link {
  font-size: 0;
  min-height: 42px;
  display: block;
  text-decoration: none;
  min-height: 84px;
  padding: 32px 0;
}
.page .has_action .article_link .item_detail .list_image {
  margin-top: 12px;
}
.page .has_action .article_link .item_detail .list_image .clearfix li {
  display: inline-block;
  width: 33.3%;
}
.page .has_action .article_link .item_detail .list_image .clearfix li img {
  height: 100%;
  width: 100%;
}
.page .has_action .article_link .item_detail .dotdot {
  font-weight: normal;
  line-height: 42px;
  font-size: 34px;
}
.page .has_action .article_link .item_detail .item_info {
  font-size: 0;
  height: 26px;
  margin-top: 12px;
}
.page .has_action .article_link .item_detail .item_info .stick_label {
  text-align: center;
  display: inline-block;
  font-size: 18px;
  color: #f85959;
  border: 1px solid #f85959;
  border-radius: 4px;
  width: 50px;
  height: 24px;
  margin: 0 10px 0 0;
  vertical-align: top;
}
.page .has_action .article_link .item_detail .item_info .space {
  color: #999;
  font-size: 20px;
  margin-right: 10px;
  line-height: 24px;
}
.page .has_action .article_link .oneImg {
  display: table-cell;
}
.page .has_action .article_link .desc {
  vertical-align: top;
  margin-right: 24px;
  width: calc(67% - 24px);
  display: inline-block;
  overflow: hidden;
}
.page .has_action .article_link .list_img_holder {
  width: 33%;
  display: inline-block;
  overflow: hidden;
}
.page .has_action .article_link .list_img_holder img {
  width: 100%;
}
.page .has_action .article_link .hot_label {
  margin-right: 10px;
  display: inline-block;
  text-align: center;
  font-size: 18px;
  width: 22px;
  height: 22px;
  border: #f85959 1px solid;
  border-radius: 4px;
  color: #f85959;
}
</style>
