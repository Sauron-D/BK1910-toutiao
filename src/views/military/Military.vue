<template>
    <div class="military">
        military
    </div>
</template>


<script>
import http from "../../utils/http";
export default {
    name:"Military",
    data(){
        return{
            data:""
        }
    },
    created(){
        http("get","/list/?tag=news_military&ac=wap&count=20&format=json_raw&as=A105DD3435E9EE7&cp=5D45E9DECE57EE1&min_behot_time=0&_signature=S0dEhAAAFgRCCz6RKkuTGUtHRJ&i=").then((data)=>{
           this.data=data.data;
           console.log(this.data);
       })
    }
}
</script>


<style>
    .military{
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
