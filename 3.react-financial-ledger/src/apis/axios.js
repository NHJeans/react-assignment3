import axios from "axios";

// axios.create의 입력값으로 들어가는 객체는 configuration 객체이다.
// https://axios-http.com/docs/req_config 를 참고!
export const authApi = axios.create({
  baseURL: import.meta.env.VITE_API_AUTH_URL
});

export const jsonApi = axios.create({
  baseURL: import.meta.env.VITE_API_JSON_URL || 'http://localhost:5000',
});


authApi.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (err) => Promise.reject(err),
);

authApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    alert(err.response.data.message);
    if (
      err.response.data.message ===
      "토큰이 만료되었습니다. 다시 로그인 해주세요."
    ) {
      // 로그아웃처리
      // return store.dispatch(logout());
    }
    return Promise.reject(err);
  },
);

jsonApi.interceptors.request.use(
  async (config) => {
    const { data } = await authApi.get("/user");
    if (data?.success) return config;
    return Promise.reject(new Error("사용자 정보 조회에 실패 했습니다."));
  },
  (err) => {
    return Promise.reject(err);
  },
);