import http from "../../utils/http"
export const science_one_api = () => http("get", "/list/?tag=news_tech&ac=wap&count=20&format=json_raw&as=A1855DC40529F9D&cp=5D45291F199D5E1&min_behot_time=0&_signature=S0dEhAAAFgRCCz6RKkuTGUtHRJ&i=", {  })