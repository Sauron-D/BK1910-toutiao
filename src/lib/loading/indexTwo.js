import Loading from "./indexTwo.vue";
import Vue from "vue";
export default () => {
    let LoadingComponentTwo = Vue.extend(Loading);
    let vmTwo = new LoadingComponentTwo({
        el: document.createElement("div"),
        data:{
            flag:false
        },
        methods: {
            handlemount() {
                this.flag = true;
            },
            handleDestory() {
                this.flag = false;
            }
        }
    })
    document.body.appendChild(vmTwo.$mount().$el)
    return vmTwo;

}