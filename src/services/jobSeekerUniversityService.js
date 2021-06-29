import axios from "axios";

export default class JobSeekerUniversityService {
  addJobSeekerUniversity(jobSeekerUniversity) {
    axios.post(
      "http://localhost:8080/api/jobseekeruniversities/add",
      jobSeekerUniversity
    );
  }
  getJobSeekerUniversity(id) {
    return axios.get(
      "http://localhost:8080/api/jobseekeruniversities/getgraduationyeardesc?id="+id
    );
  }
  getById(id) {
    return axios.get(
      "http://localhost:8080/api/jobseekeruniversities/getbyid?id="+id
    );
  }
  updateJobSeekerUniversity(jobSeekerUniversity) {
    axios.post(
      "http://localhost:8080/api/jobseekeruniversities/update",
      jobSeekerUniversity
    );
  }
}
