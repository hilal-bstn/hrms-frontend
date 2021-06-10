import axios from "axios";

export default class jobSeekerService {
  getJobSeeker() {
    return axios.get("http://localhost:8080/api/jobseekers/getAll");
  }
  addJobSeeker(jobSeeker) {
    axios.post("http://localhost:8080/api/jobseekers/add", jobSeeker);
  }
}
