import axios from "axios";

const productionUrl = "https://aim-edge-backend.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const customImageFetch = axios.create({
  baseURL: productionUrl,
  headers: {
    "content-type": "true",
  },
});

customImageFetch.defaults.headers.common["Content-Type"] =
  "multipart/form-data";
customImageFetch.defaults.headers.common["Accept"] =
  "multipart/form-data";

// customFetch.interceptors.request.use(function (config) {
//   config.headers["Content-Type"] = "multipart/form-data";

//   return config;
// });
