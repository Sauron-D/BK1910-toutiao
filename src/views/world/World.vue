<template>
    <div class="world">
        world
    </div>
</template>


<script>
import http from "../../utils/http";
export default {
    name:"World",
    data(){
        return{
            data:""
        }
    },
    created(){
        http("get","/list/?tag=news_world&ac=wap&count=20&format=json_raw&as=A1852DB4958A1C8&cp=5D45DA01FC786E1&min_behot_time=0&_signature=RG1rJQAAGSpNIREwYhAl30Rtaz&i=").then((data)=>{
           this.data=data.data;
           console.log(this.data);
       })
    }
}
</script>


<style>
    .world{
        width:100%;
        min-height:100px;
        background: lime;
        overflow: scroll;
        position: absolute;
        top:162px;
        bottom: 0px;
        font-size: 50px;
    }
</style>