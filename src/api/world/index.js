import http from "../../utils/http";

//国际
export const world_api = () => http("get","/list/?tag=news_world&ac=wap&count=20&format=json_raw&as=A1852DB4958A1C8&cp=5D45DA01FC786E1&min_behot_time=0&_signature=RG1rJQAAGSpNIREwYhAl30Rtaz&i=")
