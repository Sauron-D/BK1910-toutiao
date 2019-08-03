<template>
    <div class="hot">
      hot
    </div>
</template>


<script>
import axios from "axios";
export default {
    name: "Hot",
    data() {
        return {
            data: ""
        };
    },
    created() {
        axios.get("/list/?tag=news_hot&ac=wap&count=20&format=json_raw&as=A1350D24D5F9B55&cp=5D45492B05A54E1&min_behot_time=0&_signature=T.NOggAAErdGvzSXXUrRIk.zTp&i=").then(data => {
            this.data = data.data.data;
            console.log(this.data);
        });
    }
};
</script>


<style>
.hot {
  width: 100%;
  min-height: 100px;
  background: lime;
  overflow: scroll;
  position: absolute;
  top: 162px;
  bottom: 0px;
  font-size: 50px;
}
</style>
