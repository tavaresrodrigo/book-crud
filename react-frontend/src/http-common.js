import axios from "axios";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function create () {
  const http = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
      "Content-type": "application/json"
    }
  });
    http.interceptors.request.use(config => {
      config.params = {
        password: cookies.get("password"),
        id: cookies.get("id"),
        ...config.params
      };
      return config;
    });
  return http
}
export default create()