<template>
    <div class="rec">
        rec
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
        <p>q</p>
    </div>
</template>


<script>
import http from "../../utils/http";
export default {
    name:"Rec",
    data(){
        return{
            data:""
        }
    },
    created(){
        http("get","/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A185FDE48578857&cp=5D4568E8C5E74E1&min_behot_time=0&_signature=otscZwAA.62rl2ZyJW15c6LbHH&i=").then((data)=>{
           this.data=data.data;
           console.log(this.data);
       })
    }
}
</script>


<style>
    .rec{
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
