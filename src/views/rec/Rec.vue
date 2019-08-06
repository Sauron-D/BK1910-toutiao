<template>
  <div class="rec">
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
              0
              <span class="src space">中国新闻网</span>
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
              <div>
                <span class="hot_label" v-show="item.hot? true:false">热</span>
                <span class="src space">红星新闻</span>
                <span class="cmt space">
                  评论
                  286
                </span>
              </div>
            </div>
          </div>
          <div class="list_img_holder">
            <img :src="item.image_url" />
          </div>
        </div>
      </a>
    </section>
  </div>
</template>


<script>
import http from "../../utils/http";
export default {
  name: "Rec",
  data() {
    return {
      data: ""
    };
  },
  created() {
    http(
        "get","/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A185FDE48578857&cp=5D4568E8C5E74E1&min_behot_time=0&_signature=otscZwAA.62rl2ZyJW15c6LbHH&i="
      )
      .then(data => {
        this.data = data.data;
        console.log(this.data);
      });
  }
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
/* 没有图片 */
.has_action {
  margin: 0px 30px;
  position: relative;
  padding: 0px;
}
.has_action .article_link {
  font-size: 0;
  min-height: 42px;
  display: block;
  text-decoration: none;
  min-height: 84px;
  padding: 32px 0;
}
.has_action .article_link .item_detail .list_image {
  margin-top: 12px;
}
.has_action .article_link .item_detail .list_image .clearfix li {
  display: inline-block;
  width: 33.3%;
}
.has_action .article_link .item_detail .list_image .clearfix li img {
  height: 100%;
  width: 100%;
}
.has_action .article_link .item_detail .dotdot {
  font-size: 34px;
}
.has_action .article_link .item_detail .item_info {
  margin: 0;
  padding: 0;
  height: 26px;
  margin-top: 12px;
}
.has_action .article_link .item_detail .item_info .stick_label {
  text-align: center;
  display: inline-block;
  font-size: 18px;
  color: #f85959;
  border: 1px solid #f85959;
  border-radius: 4px;
  width: 50px;
  margin: 0 10px 0 0;
}
.has_action .article_link .item_detail .item_info .space {
  color: #999;
  font-size: 20px;
  margin-right: 10px;
}
.has_action .article_link .desc {
  margin-right: 24px;
  vertical-align: top;
  width: calc(67% - 24px);
  display: inline-block;
}
.has_action .article_link .list_img_holder {
  width: 33%;
  display: inline-block;
}
.has_action .article_link .list_img_holder img {
  width: 100%;
}
.has_action .article_link .hot_label {
  margin-right: 10px;
  display: inline-block;
  text-align: center;
  font-size: 18px;
  width: 24px;
  height: 26px;
  border: #f85959 1px solid;
  border-radius: 4px;
  color: #f85959;
}
</style>
