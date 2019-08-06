<template>
    <div class="travel">
        travel
    </div>
</template>


<script>
import http from "../../utils/http";
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
           console.log(data.data);
       })
    }
}
</script>


<style>
    .travel{
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


