import messageBox from "./index.vue";
import Vue from "vue";

export const MessageBox = (()=>{
    let defaultProps = {
        title:"提示",
        message:"您所点击的页面找不到了！",
        handleOk:function(){}
    }

    let messageVue = Vue.extend(messageBox);

    let messageVm = new messageVue({
        el:document.createElement("div"),
        data:{
            title:defaultProps.title,
            message:defaultProps.message
        },
        methods:{
            handleTrue(){
                document.body.removeChild(messageVm.$mount().$el);
                history.back();
            }
        }
    })

    document.body.appendChild(messageVm.$mount().$el);

})();