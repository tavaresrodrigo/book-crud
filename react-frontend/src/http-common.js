import axios from "axios";

function create () {
  const http = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
      "Content-type": "application/json"
    }
  });
    http.interceptors.request.use(config => {
      config.params = {
        id: "5fc8e14f450e318e34fc4411",
        password: "123",
        ...config.params
      };
      return config;
    });
  return http
}
