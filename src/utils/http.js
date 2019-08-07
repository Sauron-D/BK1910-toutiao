import axios from "axios";
import qs from "qs"
import loading from "../lib/loading/index.js"
import loadingTwo from "../lib/loading/indexTwo.js"

let vm = loading()
let vmTwo = loadingTwo()
let i=0;
const server = axios.create({
   // baseURL:"",
    timeout:5000,
    withCredentials:true
})

server.interceptors.request.use((config)=>{
    if(config.method.toUpperCase() == "GET"){
       // config.params = {...config.data}
    }else if(config.method.toUpperCase() == "POST"){
        config.headers["content-type"] = "appliaction/x-www-form-urlencoded";
        //config.data = qs.stringify(config.data)
    }
    if(i===0){
        vm.handlemount();
    }else{
        vmTwo.handlemount();
    }
    i++;
    

    return config;
},(err)=>{
    Promise.reject(err);
})


server.interceptors.response.use((res)=>{
    if(res.statusText == "OK"){
       vm.handleDestory();
       vmTwo.handleDestory();
        return res.data
    }

},(err)=>{
    Promise.reject(err);
})



export default (method,url,data={})=>{
    if(method.toUpperCase() == "GET"){
       
        return server.get(url,{
            params:data
        })
    }else if(method.toUpperCase() == "POST"){
        return server.post(url,data);
    }
}