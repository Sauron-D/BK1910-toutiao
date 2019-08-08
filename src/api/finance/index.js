import http from "../../utils/http";

//财经
export const finance_api = () => http("get","/list/?tag=news_finance&ac=wap&count=20&format=json_raw&as=A185CD94B5D9FFB&cp=5D45999FCF0B0E1&min_behot_time=0&_signature=Sn9d5QAAFzxDMyfwLX4iJkp.Xf&i=")
