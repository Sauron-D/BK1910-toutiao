<template>
    <div class="collection">
        <div class="collection_head">
            <v-touch class="collection_back" tag="div" @tap="gobackHandler">返回</v-touch>
            <div class="collection_name">收藏</div>
        </div>
        <v-touch
            tag="div"
            @press="pressHandler($event,index)"
            v-for="(item,index) in data"
            :key="index"
            class="collection_item"
        >
            <Collectionbox :message=[item,index]></Collectionbox>
        </v-touch>
    </div>
</template>


<script>
import http from "../../utils/http";
import Collectionbox from "../../components/collectionbox/collectionbox"
import { setInterval, clearInterval } from 'timers';
export default {
    name:"Collection",
    data(){
        return{
            data:"",
            pointX:0,
            node:{},
            nodeList:[],
            changeIndex:0,
            derection:"left",
            leftNum:0,
            timemove:null,
            height:0
        }
    },
    created(){
        this.data=JSON.parse(localStorage.getItem("collection"));
        this.nodeList=document.getElementsByClassName("collection_item");
        console.log(this.nodeList);
        console.log(this.data);
    },
    methods:{
        gobackHandler(){
            this.$router.replace("/"+this.$store.state.channel_address_show[this.$store.state.active_menu]);
        },
        pressHandler(e,index){
            let node = e.target;
            while (node.parentNode.className != "collection") {
                if (node.className ==="collection_item") {
                    break;
                }
                node = node.parentNode;
                this.node=node;
            }
            this.changeIndex=index;
            this.node.className="collection_item shadow";
            this.node.addEventListener("touchmove",this.touchmoveHandler);
            this.node.addEventListener("touchend",this.touchendHandler);
            this.pointX=e.srcEvent.clientX;
        },
        touchmoveHandler(e){
            let moveX=e.changedTouches[0].clientX
            this.node.style.left=moveX-this.pointX+"px";
        },
        touchendHandler(e){
            this.node.removeEventListener("touchmove",this.touchmoveHandler);
            this.leftNum=this.node.offsetLeft;
            if(this.node.offsetLeft<0){
                if(this.node.offsetLeft<-250){
                    this.timemove=setInterval(this.leftDeleteHandler,16);
                }else{
                    this.timemove=setInterval(this.leftRollbackHandler,16);
                }
            }else if(this.node.offsetLeft>0){
                if(this.node.offsetLeft>250){
                    this.timemove=setInterval(this.rightDeleteHandler,16);
                }else{
                    this.timemove=setInterval(this.rightRollbackHandler,16);
                }
            }else{
                this.node.className="collection_item";
            }
            this.node.removeEventListener("touchend",this.touchendHandler);
            
        },
        leftRollbackHandler(){
            this.node.style.left=this.leftNum+"px";
            this.leftNum+=10;
            if(this.leftNum>=0){
                this.pressupHandler();
                this.node.className="collection_item";
            }
        },
        leftDeleteHandler(){
            this.node.style.left=this.leftNum+"px";
            this.leftNum-=30;
            if(this.leftNum<=-800){
                this.pressupHandler();
                this.floatHandler();
            }
        },
        rightRollbackHandler(){
            this.node.style.left=this.leftNum+"px";
            this.leftNum-=10;
            if(this.leftNum<=0){
                this.pressupHandler();
                this.node.className="collection_item";
            }
        },
        rightDeleteHandler(){
            this.node.style.left=this.leftNum+"px";
            this.leftNum+=30;
            if(this.leftNum>=800){
                this.pressupHandler();
                this.floatHandler();
            }
        },
        pressupHandler(){
            clearInterval(this.timemove);
            this.timemove=null;
        },
        floatHandler(){
            this.height=this.node.offsetHeight;
            this.timemove=setInterval(this.floatupHandler,16);
        },
        floatupHandler(){
            if(this.height<10){
                this.height=0;
            }else{
                this.height-=10;
            }
            this.node.style.height=this.height+"px";
            
            if(this.height<=0){
                this.pressupHandler();
            }
        }
    },
    components:{
        Collectionbox
    }
    
}
</script>


<style>
    .collection{
        width:100%;
        min-height:100px;
        background: #eee;
        overflow-x: hidden;
        overflow-y: auto;
        position: absolute;
        top:0;
        bottom: 0px;
        font-size: 50px;
        /* touch-action: none; */
    }
    .collection .collection_head{
        width: 100%;
        height: 88px;
        background: #d43d3d;
        position: relative;
    }
    .collection .collection_head .collection_name{
        width:100%;
        height:100%;
        line-height: 88px;
        text-align: center;
        font-size: 48px;
        color: #fff;
    }
    .collection .collection_head .collection_back{
        width:120px;
        height: 100%;
        background: url("https://s3a.pstatp.com/growth/wap_misc/image/header_back_86a065fc5fe6605cd32e26fe9a2c9f37.png") no-repeat 10% 55%;
        background-size: 30%;
        line-height: 88px;
        font-size: 36px;
        color: #fff;
        text-indent: 35px;
        position: absolute;
        left: 10px;
    }
    .collection .collection_item{
        width: 100%;
        min-height: 0px;
        background: #fff;
        overflow: hidden;
        position: relative;
    }
    .shadow{
        position: relative;
        z-index: 1000;
        box-shadow:0px 0px 6px 6px #c8c8c8 ;
    }

</style>



