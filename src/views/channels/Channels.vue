<template>
    <div class="channels">
        <div class="channels_head">
            <span class="title">频道管理</span>
            <v-touch class="backBtn" @tap="goBackHandler()" tag="a"></v-touch>
        </div>
        <div class="channels_box">
            <span class="channels_text">点击删除以下频道</span>
            <ul class="channels_ul">
                <v-touch
                    v-for="(item,index) in $store.state.channels_show"
                    :key="index"
                    @tap="channelsHideHandler(index,$event)"
                    class="appear_li"
                    tag="li"
                >
                <transition-group 
                    @appear="appearHandler($event)"
                    @after-appear="afterappearHandler($event)"
                    tag="span"
                >
                    <a
                        :style="{'background-color':index===0 ? '#f0f0f0' : ''}"
                        :key="index"
                    >
                        {{item}}
                    </a>
                </transition-group>
                </v-touch>
                
            </ul>
        </div>
        <div class="channels_box">
            <span class="channels_text">点击添加以下频道</span>
            <ul class="channels_ul">
                <li v-for="(item,index) in $store.state.channels_hide" :key="index">
                    <transition-group 
                        @appear="appearHandler($event)"
                        @after-appear="afterappearHandler($event)"
                        tag="span"
                    >
                        <v-touch @tap="channelsShowHandler(index,$event)" :key="index" tag="a">
                            {{item}}
                        </v-touch>
                    </transition-group>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
name:"Channels"
export default {
    methods:{
        goBackHandler(){
            this.$router.replace("/"+this.$store.state.channel_address_show[this.$store.state.active_menu]);
        },
        channelsHideHandler(index,e){
            if(e.target.tagName!=="A" || index===0) return;
            this.$store.commit("channelsShowDeleteMutations",index);
            if(index<this.$store.state.active_menu){
                this.$store.commit("activeMenuResetMutations",-1);
            }else if(index===this.$store.state.active_menu){
                this.$store.commit("activeMenuResetMutations",0);
            }
        },
        channelsShowHandler(index,e){
            if(e.target.tagName==="A"){
                this.$store.commit("channelsShowAddMutations",index);
            }
        },
        appearHandler(e){
            // e.className="beforerappear"
        },
        afterappearHandler(e){
            e.className="afterappear"
        }
    }
}
</script>


<style>
    .channels{
        width:100%;
        height: 100%;
        background: #f8f8f8;
    }
    /* 头部红色部分 */
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

/* 两组提示信息和两组频道列表样式 */
    .channels_box{
        width: 100%;
        min-height: 332px;
    }
    .channels_text{
        display: block;
        padding: 0 20px;
        line-height: 2em;
        background-color: #f5f5f5;
        font-size: 24px;
        color: #666;
    }
    .channels_ul{
        display: block;
        width:100%;
        height: 420px;
        /* min-height: 264px; */
        margin-top: 20px;
    }
    .channels_ul li{
        display: inline-block;
        width:25%;
        height:68px;
        text-align: center;
        margin-bottom: 20px;
        position: relative;
    }
    .channels_ul li span{
        display: block;
        height: 68px;
    }
    /* .beforeappear{
        display:block;
        width:2px;
        height: 2px;
        border: 2px solid #ccc;
        font-size: 1px;
        text-decoration: none;
        line-height: 0;
        margin: 0 93.8px;
    } */
    .channels_ul li a{
        text-decoration: none;
    }
    .afterappear{
        display: inline;
        border: 2px solid #ccc;
        font-size: 32px;
        text-align: center;
        text-decoration: none;
        color: #131313;
        margin: 0 16px;
        line-height: 2em;
        padding: 10.2px 42.8px;
        transition: all 0.3s ease-in-out;
    }
</style>

