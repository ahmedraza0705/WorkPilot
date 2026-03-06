/*eslint-disable */
import axios from "axios";
import { persistor } from "../redux/store";
import { SERVER_URL } from '../configs/config'

let apiCall = axios.create({
  baseURL: SERVER_URL,
  headers: {
    "X-Custom-Header": "foobar",
  },
});

apiCall.interceptors.request.use(
  function (req) {
    // If in MOCK_MODE, short-circuit the request
    if (SERVER_URL === "MOCK_MODE") {
      req.adapter = config => {
        return new Promise((resolve) => {
          const res = {
            data: { data: [], msg: "success", status: 200 },
            status: 200,
            statusText: 'OK',
            headers: { 'content-type': 'application/json' },
            config: config,
            request: {}
          };
          // Specific mocks can be added here based on config.url
          console.info(`Mocking API: ${config.url}`);
          resolve(res);
        });
      };
    }

    const token = localStorage.getItem("token");
    const slug = localStorage.getItem("slug");
    const agencyId = localStorage.getItem("agencyId");
    let userId = JSON.parse(localStorage.getItem("user"));

    if (token) {
      req.headers = {
        token,
        agencyId,
        slug,
        userId: userId?.id,
      };
    }

    return req;
  },
  (err) => {
    console.log("err", err);
    return Promise.reject(err);
  }
);

apiCall.interceptors.response.use(
  async (resp) => {
    if (resp?.data?.msg === "invalid token or expired token") {
      localStorage.clear();
      window.localStorage.removeItem('persist:root');
      persistor.pause()
    }

    // For MOCK_MODE, we already return the data structure expected by the app
    if (SERVER_URL === "MOCK_MODE" && resp.data) {
      return resp.data;
    }

    if (resp?.data?.token) {
      const token = resp?.data?.token;
      localStorage.setItem("token", token);
      localStorage.setItem("slug", resp?.data?.user?.agency?.slug);
      localStorage.setItem("agencyId", resp?.data?.user.agencyId);
      localStorage.setItem(
        "themecolor",
        resp?.data?.user?.agency?.themecolor || "#323D76"
      );
      return resp;
    }
    if (resp?.data) {
      return resp.data;
    }

    return resp;
  },
  (err) => {
    console.log("err", err);
    return Promise.reject(err);
  }
);

export default apiCall;
