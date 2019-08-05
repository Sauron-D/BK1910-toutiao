import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    channels_show:["推荐","视频","热点","社会","娱乐","军事","科技","体育","财经","国际","旅游"],
    channel_address_show:["rec","video","hot","social","showbiz","military","science","sport","finance","world","travel"],
    channels_hide:["历史","探索","美食","育儿","养生","故事","美文"],
    channel_address_hide:["history","explore","foods","baby","health","story","essay"],
    active_menu:0,
    top_bar_flag:true
  },
  actions: {

  },
  mutations: {
    activeMenuChangeMutations(state,params){
      state.active_menu=params;
    },
    topHideChangeMutations(state){
      state.top_bar_flag=false;
    },
    topShowChangeMutations(state){
      state.top_bar_flag=true;
    },
    channelsShowDeleteMutations(state,index){
      let temp_text=state.channels_show[index];
      let temp_address=state.channel_address_show[index];
      state.channels_hide.push(temp_text);
      state.channel_address_hide.push(temp_address);
      state.channels_show.splice(index,1);
      state.channel_address_show.splice(index,1);
    },
    channelsShowAddMutations(state,index){
      let temp_text=state.channels_hide[index];
      let temp_address=state.channel_address_hide[index];
      state.channels_show.push(temp_text);
      state.channel_address_show.push(temp_address);
      state.channels_hide.splice(index,1);
      state.channel_address_hide.splice(index,1);
    },
    activeMenuResetMutations(state,status){
      if(status===0){
        state.active_menu=0;
      }else if(status===-1){
        state.active_menu--;
      }
    }
  }
})
