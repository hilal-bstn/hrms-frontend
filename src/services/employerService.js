import axios from "axios";

export default class EmployerService {
  getEmployers() {
    return axios.get("http://localhost:8080/api/employers/getAll");
  }
  addEmployer(employer) {
    axios.post("http://localhost:8080/api/employers/add", employer);
  }
  getById(id){
    return axios.get("http://localhost:8080/api/employers/getById?id="+id);
  }
}
