<template>
    <div id="app">
      <Header/>
      <Nav/>
      <router-view></router-view>
    </div>
    
</template>

<script>
import Header from "./common/Header";
import Nav from "./common/Nav";
import http from "./utils/http"
export default {
  created(){
    this.preventHandler();
  },
  data(){
        return{
            
        }
    },
  watch:{
        $route(to,from){
          if(to.path==="/channels"){
            this.$store.commit("topHideChangeMutations");
          }
          if(from.path==="/channels"){
            this.$store.commit("topShowChangeMutations");
          }
        }
  },
  components:{
    Header,
    Nav
  },
  methods:{
    preventHandler(){
      window.addEventListener('contextmenu', function(e){
	      e.preventDefault();
	    });
    }
  }
}
</script>


<style>
  html,body{
    height:100%;
    font-size: 75.04px;
    font-family: 'STHeiti', 'Microsoft YaHei', 'Helvetica', 'Arial', sans-serif;
    margin:0;
    padding:0;
  }
  #app{
    height:100%;
  }

</style>


