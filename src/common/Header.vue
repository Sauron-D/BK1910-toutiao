<template>
    <div class="header" v-show="$store.state.top_bar_flag">
        <div class="header_l">
            <v-touch tag="a" @tap="collectionIntoHandler"></v-touch>
        </div>
        <div class="header_m">
            <!-- 此处刷新图标，点击刷新当前内容组件,顺时针旋转360° -->
            <a href="#"></a>
            <v-touch tag="div" @tap="renovateHandler($event)"></v-touch>
        </div>
        <div class="header_r">
            <!-- 此处路由调转搜索页 -->
            <a href="#"></a>
        </div>
    </div>
</template>


<script>
import { setTimeout } from 'timers';
export default {
  name:"Header",
  data(){
      return{
          renovate:null,
          timeout:null
      }
  },
  methods:{
      collectionIntoHandler(){
          this.$router.push("/collection");
      },
      renovateHandler(e){
          this.renovate=e.target;
          this.renovate.className="rotate";
          this.$router.go(0);
          this.timeout=setTimeout(this.rollbackHandler,1000);
      },
      rollbackHandler(){
          this.renovate.className="";
      }
  }
}
</script>


<style>
/* 头部盒子 */
    .header{
        width:100%;
        height:88px;
        background: #d43d3d;
        position: fixed;
        top: 0;
        z-index: 10;
    }

/* 左侧emial图标部分 */
    .header .header_l{
        width: 108px;
        height:50px;
        position: absolute;
        left:20px;
        top: 50%;
        transform: translateY(-50%);
    }
    .header .header_l a{
        display:block;
        width: 64px;
        height:50px;
        background: url("https://s3.pstatp.com/growth/mobile_list/image/feed_ic_message_normal@3x_f2ea949f.png") no-repeat;;
        background-size: contain;
        margin-left: 24px;
        position: absolute;
        
    }

/* 中间今日头条logo和刷新部分 */
    .header .header_m{
        width:100%;
        height:100%;
        text-align: center;
    }
    .header .header_m a{
        display: inline-block;
        width: 166px;
        height:88px;
        background: url("https://s3b.pstatp.com/growth/mobile_list/image/wap_logo@3x_581de69e.png") no-repeat right center;
        background-size: 166px !important;
        padding-left:30px;
    }
    .header .header_m div{
        display: inline-block;
        width:50px;
        height: 88px;
        background: url("https://s3a.pstatp.com/growth/mobile_list/image/titlebar_refresh_small@3x_96fb31e4.png") no-repeat center center;
        background-size: 30px;
        
    }
    .rotate{
        transition: transform 1s;
        transform: rotate(720deg);
    }

    /* 右侧搜索放大镜 */
    .header .header_r{
        width:72px;
        height: 48px;
        position: absolute;
        top: 50%;
        right:20px;
        transform: translateY(-50%);
    }
    .header .header_r a{
        display: inline-block;
        width: 48px;
        height: 48px;
        background: url("https://s3.pstatp.com/growth/mobile_list/image/feed_ic_search_normal@3x_0f198e56.png") no-repeat center;
        background-size: contain;
    }
</style>
