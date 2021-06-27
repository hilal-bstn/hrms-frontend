import axios from "axios";

export default class UniversityService {
  
  getAll() {
    return axios.get(
      "http://localhost:8080/api/universities/getall"
    );
  }
}