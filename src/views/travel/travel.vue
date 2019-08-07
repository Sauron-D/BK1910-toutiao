<template>
    <div class="travel">
        <div v-for="(item,index) in data" :key="index" class="itemBox">
            <Newsbox :message=[item,index] @dispear="disapearHandler"></Newsbox>
        </div>
    </div>
</template>


<script>
import http from "../../utils/http";
import Newsbox from "../../components/newsbox/Newsbox"
export default {
    name:"Travel",
    data(){
        return{
            data:""
        }
    },
    created(){
        http("get","/list/?tag=news_travel&ac=wap&count=20&format=json_raw&as=A1750D5418E2151&cp=5D4802D1C5614E1&min_behot_time=0&_signature=14rx.gAAisvexovrmHYF0deK8e&i=").then((data)=>{
           this.data=data.data;
           console.log(this.data);
       })
    },
    methods:{
        disapearHandler(props){
            let elem=document.getElementsByClassName("itemBox")[props];
            setTimeout(()=>{
                elem.className="itemBox retreat";
            },0)
            setTimeout(()=>{
                elem.className="itemBox retreat heightzero";
            },500)
            setTimeout(()=>{
                elem.className="itemBox retreat heightzero dispear";
            },2000)
        }
    },
    components:{
        Newsbox
    }
    
}
</script>


<style>
    .travel{
        width:100%;
        min-height:100px;
        overflow: auto;
        position: absolute;
        top:162px;
        bottom: 0px;
        font-size: 50px;
        /* touch-action: none; */
    }
    .travel .itemBox{
        width: 100%;
        min-height: 200px;
        background: #ccc;
    }
    .retreat{
        margin-left: 800px;
        overflow: hidden;
        transition: margin-left 0.5s ;
    }
    .heightzero{
        min-height:0 !important;
        height:0 !important;
        overflow: hidden;
        transition: all 1s linear;
    }
    .dispear{
        display:none;
        margin: 0;
    }


</style>


