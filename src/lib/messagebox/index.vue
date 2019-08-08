<template>
  <div class="msgbox-wrapper">
    <!-- 提示 -->
    <div class="msgbox">
        <div class="msgbox-title">{{title}}</div>
    </div>
    <!-- 内容 -->
    <div class="msgbox-message">{{message}}</div>
    <!-- 按钮 -->
    <div class="msgbox-btn">
        <v-touch class="msgbox-confirm" tag="button" @tap="handleTrue">确定</v-touch>
    </div>
  </div>
</template>

<script>
export default {


};
</script>


<style>
.msgbox-wrapper{
    position: fixed;
    z-index: 11;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 85%;
    height: 25%;
    border-radius: .4rem;
    font-size: .64rem;
    background-color: rgba(221, 221, 221, 0.9)
}

/* 提示 */
.msgbox-wrapper .msgbox{
    padding: .3rem 0 0;
    /* border-bottom:  .05rem solid #ddd; */
}
.msgbox-wrapper .msgbox .msgbox-title{
    text-align: center;
    font-weight: 700;
    color: #333;
}

/* 内容 */
.msgbox-wrapper .msgbox-message{
    padding: .2rem .2rem;
    text-align: center;
    border-bottom: .01rem solid #ddd;
    min-height: .36rem;
    position: relative;
}

/* 按钮 */
.msgbox-wrapper .msgbox-btn{
    text-align: center;
    height: .9rem;
    margin-top: .4rem;
    line-height: .4rem;
}
.msgbox-wrapper .msgbox-btn .msgbox-confirm{
    color: #26a2ff;
    width: 50%;
    font-size: .56rem;
    border-radius: .26rem;
    line-height: .9rem;
    background-color: #fff;
}




</style>
