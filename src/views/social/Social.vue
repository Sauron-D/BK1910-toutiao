<template>
    <div class="social">
        social
    </div>
</template>


<script>
import axios from "axios";
export default {
    name:"Social",
    data(){
        return{
            data:""
        }
    },
    created(){
        axios.get("/list/?tag=news_society&ac=wap&count=20&format=json_raw&as=A1F56D441569E38&cp=5D45599EF3281E1&min_behot_time=0&_signature=TtatdgAAE5RHmtdjvoLg5E7WrW&i=").then((data)=>{
           this.data=data.data.data;
           console.log(this.data);
       })
    }
}
</script>


<style>
    .social{
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
