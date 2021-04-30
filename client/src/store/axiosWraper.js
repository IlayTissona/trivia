import axios from "axios";
import Cookies from "js-cookie"
// import { eraseCookie, Cookies.get, createCookie } from "../utils/Cookies";

axios.interceptors.request.use((req) => {
  const accessToken = Cookies.get("accessToken");
  if (accessToken) req.headers.authorization = "Bearer " + accessToken;
  return req;
});

axios.interceptors.response.use(
  ({ data: res }) => {
    console.log(res)
    if (res.accessToken) Cookies.set("accessToken", res.accessToken, { expires: 1 })
    if (res.refreshToken) Cookies.set("refreshToken", res.refreshToken, { expires: 1 })
    return res;
  },
  async (err) => {
    if (err.response.status !== 403) return err;

    const originalRequest = err.config;
    try {
      const refreshToken = Cookies.get("refreshToken");
      console.log(err);
      const newTokenRes = await axios.post("/user/token", {
        refreshToken: refreshToken ? refreshToken : "",
      });

      if (newTokenRes instanceof Error) throw newTokenRes;

      const { accessToken } = newTokenRes.data.accessToken;
      Cookies.set("accessToken", accessToken, { expires: 1 });
      const originalResponse = await axios(originalRequest);
      return originalResponse;
    } catch (e) {
      return e;
    }
  }
);

export default axios;