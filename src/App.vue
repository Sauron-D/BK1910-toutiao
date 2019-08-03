<template>
    <div id="app">
      <Header v-show="$store.state.top_bar_flag"/>
      <Nav v-show="$store.state.top_bar_flag"/>
      <router-view></router-view>
    </div>
    
</template>

<script>
import Header from "./common/Header";
import Nav from "./common/Nav"
export default {
  components:{
    Header,
    Nav
  }
}
</script>


<style>
  html,body{
    height:100%;
    font-size: 75.04px;
    margin:0;
    padding:0;
    /* -webkit-tap-highlight-color:#ccc;  */
  }

</style>


