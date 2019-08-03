const path=require("path");
module.exports={
    devServer:{
        proxy:{
            "/list":{
                target:"https://m.toutiao.com",
                changeOrigin:true
            }
        }
    }
}

