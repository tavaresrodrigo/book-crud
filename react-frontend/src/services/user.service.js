import { httpAuth } from "../http-common"
const http = httpAuth ()

class UserDataService {
  getAll() {
    return http.get("/users");
  }

  get(id) {
    return http.get(`/users/${id}`);
  }

  create(data) {
    return http.post("/users", data);
  }

  update(id, data) {
    return http.put(`/users/${id}`, data);
  }

  delete(id) {
    return http.delete(`/users/${id}`);
  }

// Find by email not working yet, need to investigate.
/*
  findByEmail(email) {
    return http.get(`/users?email=${email}`);
  }
*/
  findByUsername(username) {
    return http.get(`/users?username=${username}`);
  }
}




export default new UserDataService();