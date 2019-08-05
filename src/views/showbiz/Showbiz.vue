<template>
    <div class="showbiz">
        showbiz
    </div>
</template>


<script>
import http from "../../utils/http";
export default {
    name:"Showbiz",
    data(){
        return{
            data:""
        }
    },
    created(){
        http("get","/list/?tag=news_entertainment&ac=wap&count=20&format=json_raw&as=A1959D942539EA4&cp=5D45F99E3AA4AE1&min_behot_time=0&_signature=S0dEhAAAFgRCCz6RKkuTGUtHRJ&i=").then((data)=>{
           this.data=data.data;
           console.log(this.data);
       })
    }
}
</script>


<style>
    .showbiz{
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
