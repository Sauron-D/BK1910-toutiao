import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    channels_show:["推荐","视频","热点","社会","娱乐","军事","科技","体育","财经","国际"],
    channel_address_show:["rec","video","hot","social","showbiz","military","science","sport","finance","world"],
    channels_hide:["旅游","历史","探索","美食","育儿","养生","故事","美文"],
    channel_address_hide:["travel","history","explore","foods","baby","health","story","essay"],
    active_menu:0,
    top_bar_flag:true
  },
  actions: {

  },
  mutations: {
    activeMenuChangeMutations(state,params){
      state.active_menu=params;
    }
  }
})
