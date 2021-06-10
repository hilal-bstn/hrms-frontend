import axios from "axios";

export default class jobSeekerUniversityService {
  addJobSeekerUniversity(jobSeekerUniversity) {
    axios.post(
      "http://localhost:8080/api/jobseekeruniversities/add",
      jobSeekerUniversity
    );
  }
  getJobSeekerUniversity(id) {
    return axios.get(
      "http://localhost:8080/api/jobseekeruniversities/getbyjobseekerid?id"+id
    );
  }
}
