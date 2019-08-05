<template>
    <div class="science">
        science
    </div>
</template>


<script>
import http from "../../utils/http";
export default {
    name:"Science",
    data(){
        return{
            data:""
        }
    },
    created(){
        http("get","/list/?tag=news_tech&ac=wap&count=20&format=json_raw&as=A1855DC40529F9D&cp=5D45291F199D5E1&min_behot_time=0&_signature=S0dEhAAAFgRCCz6RKkuTGUtHRJ&i=").then((data)=>{
           this.data=data.data;
           console.log(this.data);
       })
    }
}
</script>


<style>
    .science{
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
