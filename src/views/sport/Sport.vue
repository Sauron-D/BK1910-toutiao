<template>
    <div class="sport">
        sport
    </div>
</template>


<script>
import http from "../../utils/http";
export default {
    name:"Sport",
    data(){
        return{
            data:""
        }
    },
    created(){
        http("get","list/?tag=news_sports&ac=wap&count=20&format=json_raw&as=A1F51DE475F9FDA&cp=5D45097F5DAA9E1&min_behot_time=0&_signature=Sn9d5QAAFzxDMyfwLX4iJkp.Xf&i=").then((data)=>{
           this.data=data.data;
           console.log(this.data);
       })
    }
}
</script>


<style>
    .sport{
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
