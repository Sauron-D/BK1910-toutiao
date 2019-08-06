import http from "../../utils/http"
export const rec_one_api = () => http("get", "/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A185FDE48578857&cp=5D4568E8C5E74E1&min_behot_time=0&_signature=otscZwAA.62rl2ZyJW15c6LbHH&i=", {  })

export const rec_two_api = () => http("get", "/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1C55D7469873B5&cp=5D490733DBB55E1&max_behot_time=1565082851&_signature=tmeXawAA6zy.K-1-EIfmEbZnl3&i=", { })


export const Finance_api = () => http("get", "/list/?tag=news_finance&ac=wap&count=20&format=json_raw&as=A185CD94B5D9FFB&cp=5D45999FCF0B0E1&min_behot_time=0&_signature=Sn9d5QAAFzxDMyfwLX4iJkp.Xf&i=", { })