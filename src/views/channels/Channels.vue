<template>
    <div class="channels">
        <div class="channels_head">
            <span class="title">频道管理</span>
            <a class="backBtn" @click="goBackHandler()"></a>
            <!-- <router-link class="backBtn" to="/hot"></router-link> -->
        </div>
        <div class="channels_show">
            <span>点击删除以下频道</span>
        </div>
        <div class="channels_hide">
            <span>点击添加以下频道</span>
        </div>
        channels
    </div>
</template>


<script>
name:"Channels"
export default {
    methods:{
        goBackHandler(){
            this.$router.replace("/"+this.$store.state.channel_address_show[this.$store.state.active_menu]);
        }
    }
}
</script>


<style>
    .channels{
        width:100%;
        height: 100%;
        background: #ccc;
    }
    .channels_head{
        width: 100%;
        height: 100px;
        position: relative;
        background-color: #d43d3d;
    }
    .channels .channels_head .title{
        display: block;
        width:100%;
        height: 100%;
        line-height: 100px;
        text-align: center;
        font-size: 32px;
        font-weight: 700;
        color: #fff;
    }
    .channels .channels_head .backBtn{
        display: inline-block;
        width: 44px;
        height: 50px;
        background: url("https://s3a.pstatp.com/growth/wap_misc/image/header_back_86a065fc5fe6605cd32e26fe9a2c9f37.png") no-repeat 50%;
        background-size: 100%;
        position: relative;
        top:-75px;
        left:22px;
    }
</style>

