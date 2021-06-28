import axios from "axios";
import Cookies from "js-cookie";
// import { eraseCookie, Cookies.get, createCookie } from "../utils/Cookies";

axios.interceptors.request.use((req) => {
  const accessToken = Cookies.get("accessToken");
  if (accessToken) req.headers.authorization = "Bearer " + accessToken;
  req.baseURL = "/api";
  return req;
});

axios.interceptors.response.use(
  ({ data: res }) => {
    if (res.success) {
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      return res;
    }
    if (res.accessToken)
      Cookies.set("accessToken", res.accessToken, { expires: 1 });
    if (res.refreshToken)
      Cookies.set("refreshToken", res.refreshToken, { expires: 1 });
    return res;
  },
  async (err) => {
    if (err.response.status !== 403) return err.response.data;
    if (err.response.data === "Password incorrect") return err.response.data;
    const originalRequest = err.config;
    try {
      const refreshToken = Cookies.get("refreshToken");
      const newTokenRes = await axios.post("/user/token", {
        refreshToken: refreshToken ? refreshToken : "",
      });

      if (newTokenRes instanceof Error) throw newTokenRes;

      const { accessToken } = newTokenRes.data.accessToken;
      Cookies.set("accessToken", accessToken, { expires: 1 });
      const originalResponse = await axios(originalRequest);
      return originalResponse;
    } catch (e) {
      return e.response.data;
    }
  }
);

export default axios;
