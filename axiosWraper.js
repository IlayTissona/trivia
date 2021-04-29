import axios from "axios";
import Cookies from "COOKIES?@?@ADFV"; //findout

axios.interceptors.request.use((req) => {
  req.headers.authorization = Cookies.get("accessToken");
  return req;
});

axios.interceptors.response.use(async (res) => res , err => {
  if (err.status !== 403) return err;

  const originalRequest = err.config;
  try {
  const accessToken = (
    await axios.post("/REFRESHTOKEN", {
      refreshToken: Cookies.get("refreshToken"),
    })
  ).data.accessToken;
  Cookies.set("accessToken", accessToken)
 const originalResponse = await axios(originalRequest)
 return originalResponse;
} catch(e){
    if(e.status === 403) {
     res.redirect("/login/tto") //tto stands for token time out, will be checked as boolean
    }
}
  return res;
});


export default axios;
