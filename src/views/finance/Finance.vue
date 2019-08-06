<template>
    <div class="finance">
        finance
    </div>
</template>


<script>
import http from "../../utils/http";
export default {
    name:"Finance",
    data(){
        return{
            data:""
        }
    },
    created(){
        http("get","/list/?tag=news_finance&ac=wap&count=20&format=json_raw&as=A185CD94B5D9FFB&cp=5D45999FCF0B0E1&min_behot_time=0&_signature=Sn9d5QAAFzxDMyfwLX4iJkp.Xf&i=").then((data)=>{
           this.data=data.data;
           console.log(this.data);
       })
    }
}
</script>


<style>
    .finance{
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

