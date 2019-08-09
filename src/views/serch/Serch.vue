<template>
  <div class="serch">
    <div class="serch_head">
      <v-touch class="serch_back" tag="div" @tap="gobackHandler"></v-touch>
      <img src="../../common/img/logo-3x.6bb11c9d.png" alt />
    </div>
    <div class="serch_kuang">
      <input type="text" v-model="list" />
    </div>

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
</template>



<script>
import { serch_one_api } from "../../api/serch";
import { mapState } from 'vuex';
export default {
  data() {
    return {
      list: "",
      data: [],
    };
  },
  timer: null,
  methods: {
    gobackHandler() {
      this.$router.replace(
        "/" +
          this.$store.state.channel_address_show[this.$store.state.active_menu]
      );
    }
  },
  watch: {
    list(newVal, oldVal) {
      //防抖
      clearTimeout(this.timer);
      this.timer = setTimeout(async () => {
        let dataArry = await serch_one_api(newVal);
        this.data = dataArry.data ? dataArry.data : [];
      }, 300);
    }
  },
  created() {}
};
</script>



<style>
.serch {
  position: relative;
}
.serch .serch_head {
  text-align: center;
}
.serch .serch_head img {
  width: 150px;
  margin-top: 80px;
}
.serch .serch_head .serch_back {
  border: 1px solid #000000;
  position: absolute;
  margin: 10px;
  right: 0;
  width: 30px;
  height: 30px;
  background: url(../../common/img/icon-close.png);
  background-size: 30px;
}
.serch .serch_kuang {
  width: 100%;
  height: 90px;
  text-align: center;
}
.serch .serch_kuang input {
  font-size: 40px;
  width: 650px;
  height: 80px;
  border: none;
  background: #f1f3f5;
}
.has_action {
  margin: 0px 30px;

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
  font-weight: normal;
  line-height: 42px;
  font-size: 34px;
}
.has_action .article_link .item_detail .item_info {
  font-size: 0;
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
  height: 24px;
  margin: 0 10px 0 0;
  vertical-align: top;
}
.has_action .article_link .item_detail .item_info .space {
  color: #999;
  font-size: 20px;
  margin-right: 10px;
  line-height: 24px;
}
.has_action .article_link .oneImg {
  display: table-cell;
}
.has_action .article_link .desc {
  vertical-align: top;
  margin-right: 24px;
  width: calc(67% - 24px);
  display: inline-block;
  overflow: hidden;
}
.has_action .article_link .list_img_holder {
  width: 33%;
  display: inline-block;
  overflow: hidden;
}
.has_action .article_link .list_img_holder img {
  width: 100%;
}
.has_action .article_link .hot_label {
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


