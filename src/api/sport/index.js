import http from "../../utils/http";

//体育
export const sport_api = () => http("get","/list/?tag=news_sports&ac=wap&count=20&format=json_raw&as=A1F51DE475F9FDA&cp=5D45097F5DAA9E1&min_behot_time=0&_signature=Sn9d5QAAFzxDMyfwLX4iJkp.Xf&i=")
