<template>
    <section class="newsbox">
        <div class="slide_before">
            <v-touch tag="span" @press.capture="pressHandler($event)"  @tap="pressHandler($event)">
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
            </v-touch>
        </div>
        <v-touch tag="div" class="item_button collect" @tap="collectHandler($event)">收藏</v-touch>
        <v-touch tag="div" class="item_button delete" @tap="deleteHandler($event)">删除</v-touch>
    </section>
</template>



<script>
import { setTimeout } from 'timers';
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
        pressHandler(e){
            let node = e.target;
            while (node.parentNode.nodeName != "BODY") {
                if (node.className == "slide_before" || node.className=="slide_before slider") {
                    break;
                }
                node = node.parentNode;
            }
            if(e.type==="press"){
                if(node.className==="slide_before"){
                    node.className="slide_before slider"
                }
            }else if(e.type==="tap"){
                if(node.className==="slide_before slider"){
                    node.className="slide_before"
                }
            } 
        },
        collectHandler(e){
            e.target.parentNode.children[0].className="slide_before"
            let collection=JSON.parse(localStorage.getItem("collection"));
            if(collection!==null){
                for(let i=0;i<collection.length;i++){
                    if(collection[i].title===this.data.title) return;
                }
            }else{
                collection=[];
            }  
            collection.push(this.data);
            let update=JSON.stringify(collection);
            localStorage.setItem("collection",update);
        },
        deleteHandler(e){
            let retret_box=e.target.parentNode.parentNode;
            this.$emit('dispear',this.index);

        }
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
    .newsbox{
        min-height: 200px;
        border-bottom: 1px solid rgba(221, 221, 221, 0.6);
        overflow: hidden;
        position: relative;
    }
    .newsbox .slide_before{
        width: 690.4px;
        min-height:150px;
        background: #fff;
        padding:0 30px;
        position: relative;
        z-index: 10000;
        transition: margin 0.5s;
    }
    .newsbox .content{
        display: inline-block;
        width: 100%;
        min-height: 200px;
        font-size: 0px;
        text-decoration: none;
        position: relative;
        padding: 32px 0px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
        -webkit-touch-callout: none;
        vertical-align:middle;
        display:flex;align-items:center
    }
    .newsbox .item_detail{
        display: block;
        height: 100%;
    }
    .newsbox .image_on_right{
        display: inline-block;
        width: 67%;
        vertical-align: middle;
        margin: auto 0;
        line-height:100%;
    }
    .newsbox .item_detail h3{
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
    .newsbox .list_img{
        display: block;
        min-height: 42px;
        margin-top: 12px;
    }
    .newsbox .list_img ul:after{
        content: "";
        height: 0;
        clear: both;
        overflow: hidden;
        display: block;
        visibility: hidden;
    }
    .newsbox .img_list_box{
        float: left;
    }
    .newsbox .img_list_box img{
        width: 226px;
        height: 148px;
        padding-right:4px; 
    }
    .newsbox .item_info{
        color: #999;
        overflow: hidden;
        font-size: 0;
        margin-top: 12px;
    }
    .newsbox .item_info span{
        display: inline-block;
        line-height: 24px;
        font-size: 20px;
        color: #999;
        margin-right: 10px;
        vertical-align: middle;
    }
    .newsbox .item_info span:nth-last-child(4){
        width: 24px;
        border: 1px solid rgba(248, 89, 89, 0.5);
        border-radius: 4px;
        font-size: 18px !important;
        color: #f85959 !important;
        text-align: center;
    }
    .newsbox .img_right{
        width: 30%;
        height: 159px;
        position: absolute;
        right:0;
        top: 15%;
    }
    .newsbox .img_right img{
        width: 100%;
    }

    .newsbox .slider{
        margin-left: 150px;
        transition: margin 0.5s;
    }
    .newsbox .item_button{
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
    .newsbox .collect{
        top:30%;
    }
    .newsbox .delete{
        top:55%;
    }
</style>


