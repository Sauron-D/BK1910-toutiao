<template>
    <section class="collectionbox">
        <a class="content">
            <div :class="data.image_list.length===0 ? 'item_detail image_on_right' : 'item_detail'">
                <h3>{{data.title}}</h3>
                <div class="list_img" v-if="data.image_list.length!==0">
                    <ul>
                        <li v-for="(item,index) in data.image_list" :key="index" class="img_list_box">
                            <img :src="item.url">
                        </li>
                    </ul>
                </div>
                <div class="item_info">
                    <span v-if="data.hot===1">热</span>
                    <span>{{data.media_name}}</span>
                    <span>评论 {{data.comment_count}}</span>
                    <span>{{time}}</span>
                </div>
            </div>
            <div class="img_right" v-if="data.image_list.length===0">
                <img :src="data.image_url">
            </div>
        </a>
    </section>
</template>

<script>
export default {
    props:["message"],
    data(){
        return{
            data:this.message[0],
            index:this.message[1],
            time:""
        }
    },
    methods:{

    },
    created(){
        let data_hour=Number(this.data.datetime.split("-")[2].split(" ")[1].split(":")[0]);
        let data_minute=Number(this.data.datetime.split("-")[2].split(" ")[1].split(":")[1]);
        let date=new Date().toLocaleString();
        let now_hour=Number(date.split("/")[2].split(" ")[1].substr(2,2).split(":")[0]);
        if(date.split("/")[2].split(" ")[1].substr(0,2)==="下午") now_hour+=12;
        let now_minute=Number(date.split("/")[2].split(":")[1]);
        if(now_hour-data_hour>1 && now_minute>=data_minute){
            this.time=now_hour-data_hour+"小时前";
        }else if(now_hour-data_hour>1 && now_minute<data_minute){
            this.time=now_hour-data_hour-1+"小时前";
        }else if(now_hour-data_hour===1 && now_minute>=data_minute){
            this.time="1小时前";
        }else if(now_hour-data_hour===0 && now_minute-data_minute>0){
            this.time=now_minute-data_minute+"分钟前";
        }else if(now_hour-data_hour===1 && now_minute-data_minute<0){
            this.time=now_minute+60-data_minute+"分钟前";
        }else if(now_hour-data_hour===0 && now_minute-data_minute===0){
            this.time="刚刚";
        }else{
            this.time=this.data.datetime;
        }
    }
}

</script>



<style>
    .collectionbox{
        min-height: 200px;
        border-bottom: 1px solid rgba(221, 221, 221, 0.6);
        overflow: hidden;
        position: relative;
    }
    .collectionbox .content{
        display: inline-block;
        width: 690.4px;
        min-height: 200px;
        font-size: 0px;
        text-decoration: none;
        position: relative;
        margin: 0 auto;
        padding: 32px 0px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
        -webkit-touch-callout: none;
        vertical-align:middle;
        display:flex;align-items:center
    }
    .collectionbox .item_detail{
        display: block;
        height: 100%;
    }
    .collectionbox .image_on_right{
        display: inline-block;
        width: 67%;
        vertical-align: middle;
        margin: auto 0;
        line-height:100%;
    }
    .collectionbox .item_detail h3{
        font-size: 34px;
        line-height: 42px;
        color: #222;
        font-weight: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    .collectionbox .list_img{
        display: block;
        min-height: 42px;
        margin-top: 12px;
    }
    .collectionbox .list_img ul:after{
        content: "";
        height: 0;
        clear: both;
        overflow: hidden;
        display: block;
        visibility: hidden;
    }
    .collectionbox .img_list_box{
        float: left;
    }
    .collectionbox .img_list_box img{
        width: 226px;
        height: 148px;
        padding-right:4px; 
    }
    .collectionbox .item_info{
        color: #999;
        overflow: hidden;
        font-size: 0;
        margin-top: 12px;
    }
    .collectionbox .item_info span{
        display: inline-block;
        line-height: 24px;
        font-size: 20px;
        color: #999;
        margin-right: 10px;
        vertical-align: middle;
    }
    .collectionbox .item_info span:nth-last-child(4){
        width: 24px;
        border: 1px solid rgba(248, 89, 89, 0.5);
        border-radius: 4px;
        font-size: 18px !important;
        color: #f85959 !important;
        text-align: center;
    }
    .collectionbox .img_right{
        width: 30%;
        height: 159px;
        position: absolute;
        right:0;
        top: 15%;
    }
    .collectionbox .img_right img{
        width: 100%;
    }

    .newsbox .slider{
        margin-left: 150px;
        transition: margin 0.5s;
    }
    .collectionbox .item_button{
        width:100px;
        height: 50px;
        background: #ed4040;
        border-radius: 5px;
        font-size: 36px;
        color: #fff;
        text-align: center;
        position:absolute;
        left:20px;
    }
    .collectionbox .collect{
        top:30%;
    }
    .collectionbox .delete{
        top:55%;
    }
</style>
