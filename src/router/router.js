import Vue from 'vue'
import Router from 'vue-router'
import home from "./home/index";
import channels from "./channels/index";
import rec from "./rec/index";
import video from "./video/index";
import hot from "./hot/index";
import social from "./social/index";
import showbiz from "./showbiz/index";
import military from "./military/index";
import science from "./science/index";
import sport from "./sport/index";
import finance from "./finance/index";
import world from "./world/index";
import travel from "./travel/index";
import collection from "./collection/index";
import serch from "./serch/index";
Vue.use(Router)

export default new Router({
  routes: [
    home,
    channels,
    rec,
    video,
    hot,
    social,
    showbiz,
    military,
    science,
    sport,
    finance,
    world,
    travel,
    collection,
    serch
  ]
})

