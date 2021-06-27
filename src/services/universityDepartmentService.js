import axios from "axios";

export default class UniversityDepartmentService {
  
  getAll() {
    return axios.get(
      "http://localhost:8080/api/universitydepartments/getall"
    );
  }
}