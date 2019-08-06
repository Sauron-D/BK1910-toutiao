<template>
    <div class="nav" v-show="$store.state.top_bar_flag">
        <div class="nav_menu">
            <!-- 点击路由切换内容部分,被点击的字体变红-->
            <v-touch 
                v-for="(item,index) in $store.state.channels_show"
                :key="index"
                :href="'#/'+$store.state.channel_address_show[$store.state.active_menu]"
                :style="{color:(index===$store.state.active_menu ? '#f85959' : '#505050')}"
                @tap="activeMenuChange(index)"
                tag="a"
            >
                {{item}}
            </v-touch>
        </div>
        <div class="menu_more">
            <div class="menu_more_shadow"></div>
            <!-- 点击路由切换到全部栏目列表，增删在nav中显示的栏目名称 -->
            <a href="#" class="more_button" @click="channelsListHandler">
                <span class="cross"></span>
            </a>
        </div>
    </div>
</template>


<script>
name:"Nav"
export default {
    data(){
        return{

        }
    },
    created(){
        this.$router.replace("/"+this.$store.state.channel_address_show[this.$store.state.active_menu]);
    },
    methods:{
        activeMenuChange(index){
            this.$store.commit("activeMenuChangeMutations",index);
        },
        channelsListHandler(){
            this.$router.push("/channels");
        }
    }
}
</script>


<style>
    .nav{
        width:100%;
        height:74px;
        background: #f4f5f6;
        position: fixed;
        top: 88px;
        display: flex;
    }

/* 滚动栏目列表 */
    .nav .nav_menu{
        min-width:50px;
        height: 72px;
        overflow: hidden;
        overflow-x: auto;
        white-space: nowrap;
        float: left;
        flex: 1;
    }
    .nav .nav_menu a{
        vertical-align: middle;
        display: inline-block;
        width: 68px;
        height: 52px;
        font-size: 34px;
        color: #505050;
        text-decoration: none;
        margin:10px 0 10px 10px;
        padding:0 20px;
    }

/* 更多按钮 */
    .nav .menu_more{
        width:80px;
        height:72px;
        float: right;
        position:relative;
    }
    /* 阴影 */
    .menu_more_shadow{
        width: 20px;
        height: 72px;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAABXCAQAAACjUt0DAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAEgAAABIAEbJaz4AAAAJdnBBZwAAABIAAABXAK421QoAAAFiSURBVEjH1ZbbtoMgDERnKP//yaYPVSAhF077dHQtamU7k0RKAxwcPCF4ItF+tWMNsVZS91uJhNlRX7FGPMgizOrEObJSiZUUAnRkR6q0qnErm7Lhc9UDBaXUt0kN0FOaOo4SQ5BRCahOA3HT5KwTE50GZhV37VazJKYljjE2SE+sPsittC1XW/FmgNVsZJcvuhvrAbLqffNadPXLYgaLzs8wWSo6rk9FYdeBUW/x1DRswfS6ysuNlcDZ7ssTSCpIfDsZn/J8b+Omh8pjR/X8DkuWndwnINpOlukFbtvzVslAEmF+TCMaCC4fkr8oKUgVzmQ4IBojHfqFqwd28O0S6AXA7ib2P+HOTlzLcXZ3+tFz6yRObiOmGY+3k6ev5XN97Uq7FoCXkl5HTrT6tQiw2u1aY/TrZF551jyMFPZiOqW1O5zXiJx1PV/2Tw52tD8ddYc/9Zlq7qhBrlrtuhX/98cbycGBFpNaiv0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTQtMDItMjdUMTc6NDQ6NDErMDg6MDDFbrv7AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE0LTAyLTI3VDE3OjQ0OjQxKzA4OjAwtDMDRwAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=") no-repeat center right;
        background-size: contain;
        position:absolute;
        left:-20px;
    }
    .nav .more_button{
        display: block;
        height: 72px;
        position: relative;
    }
    /* 红色加号/十字 */
    .nav .more_button .cross{
        width:34px;
        height: 34px;
        position: absolute;
        top: 25%;
        left:50%;
    }
    .cross:before{
        transform: rotate(90deg);
    }
    .cross:before,.cross:after{
        position: absolute;
        content: ' ';
        height: 34px;
        width: 4px;
        background-color: #f85959;
    }
    .nav .menu_more .more_button{
        width:80px;
        height:72px;
    }
</style>

