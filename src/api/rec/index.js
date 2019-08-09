import http from "../../utils/http"
export const rec_one_api = () => http("get", "/list/?format=json_raw&as=A185FDE48578857", {  })

export const rec_two_api = () => http("get", "/list/?format=json_raw&as=A1C55D7469873B5", { })