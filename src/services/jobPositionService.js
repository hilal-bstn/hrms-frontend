import axios from "axios";

export default class jobPositionService {
  getJobPositions() {
    return axios.get("http://localhost:8080/api/jobpositions/getall");
  }
  addJobPosition(jobPosition) {
    axios.post("http://localhost:8080/api/jobpositions/add", jobPosition);
  }
}
