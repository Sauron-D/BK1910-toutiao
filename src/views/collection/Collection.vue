<template>
    <div class="collection">
        <div class="collection_head">
            <div class="collection_back">返回</div>
            <div class="collection_name">收藏</div>
        </div>
        <v-touch
            tag="div"
            @press="pressHandler($event)"
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
export default {
    name:"Collection",
    data(){
        return{
            data:""
        }
    },
    created(){
        this.data=JSON.parse(localStorage.getItem("collection"));
        console.log(this.data);
    },
    methods:{
        pressHandler(e){
            let node = e.target;
            while (node.parentNode.nodeName != "collection") {
                if (node.className ==="collection_item") {
                    break;
                }
                node = node.parentNode;
            }
            node.className="collection_item shadow";
            node.addEventListener("drag",this.dragHandler)
        },
        dragHandler(){
            console.log("aaa");
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
        overflow: auto;
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
        min-height: 200px;
        background: #fff;
    }
    .shadow{
        position: relative;
        z-index: 1000;
        box-shadow:0px 0px 6px 6px #c8c8c8 ;
    }

</style>



