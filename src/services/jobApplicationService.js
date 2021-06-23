import axios from "axios";

export default class JobApplicationService {
 
  addEmployer(employer) {
    axios.post("http://localhost:8080/api/jobapplications/add", jobApplication);
  }
}
